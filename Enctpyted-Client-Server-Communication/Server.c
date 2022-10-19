#include <unistd.h>      
#include <errno.h>       
#include <malloc.h>      
#include <string.h>      
#include <arpa/inet.h>   //for using ascii to network bit
#include <sys/socket.h>  //for creating sockets
#include <sys/types.h>   //for using sockets
#include <netinet/in.h>  // network to asii bit 
#include <resolv.h>      //server to find out the runner's IP address
#include "openssl/ssl.h" 
#include "openssl/err.h" 
#include <stdio.h>       
char pipe_buffer[256];
void intro()
{
    system("clear");
    printf("\033[0;31m");
    printf("$$$$$$\\ \n");
    printf("$$  __$$\\ \n");
    printf("$$ /  \\__| $$$$$$\\   $$$$$$\\ $$\\    $$\\  $$$$$$\\   $$$$$$\\ \n");
    printf("\\$$$$$$\\  $$  __$$\\ $$  __$$\\$$\\  $$  |$$  __$$\\ $$  __$$\\ \n");
    printf("\\____$$\\ $$$$$$$$ |$$ |  \\__|\\$$\\$$  / $$$$$$$$ |$$ |  \\__|\n");
    printf("$$\\   $$ |$$   ____|$$ |       \\$$$  /  $$   ____|$$ |\n");
    printf("\\$$$$$$  |\\$$$$$$$\\ $$ |        \\$  /   \\$$$$$$$\\ $$ | \n");
    printf("\\______/  \\_______|\\__|         \\_/     \\_______|\\__|      OS Project\n");
}
void termainal_command(char *command)
{
    memset(pipe_buffer, 0, 256);
    char bash_cmd[256];
    strcpy(bash_cmd, command);

    FILE *pipe;
    int len;

    pipe = popen(bash_cmd, "r");

    if (NULL == pipe)
    {
        perror("pipe");
        exit(1);
    }

    fgets(pipe_buffer, sizeof(pipe_buffer), pipe);

    len = strlen(pipe_buffer);
    pipe_buffer[len - 1] = '\0';

    pclose(pipe);
}
int check_credentials()
{
    char password[8];
    printf("\n[+] Root Access is Required\n[+] Enter System Password : ");
    scanf("%s", password);

    termainal_command("cat /etc/Shadow | grep tameem | cut -c 8-38");
    char system_hash[30];
    strcpy(system_hash, pipe_buffer);
    // printf("%s \n", system_hash);

    char hash[50];
    strcpy(hash, "openssl passwd -1 -salt OQTlP ");
    strcat(hash, password);

    termainal_command(hash);

    char generated_hash[30];
    strcpy(generated_hash, pipe_buffer);
    // printf("%s \n", hash);
    // printf("%s \n", generated_hash);

    if (strcmp(generated_hash, system_hash) == 0)
    {
        printf("\n[+] Acceess Granted! \n[+] Server Started Successfully.\n");
        return 0;
    }
    else
    {
        printf("[-] Authentication Failed!\n");
        // exit(0);
        return 1;
    }
}
int OpenListener(int port)
{
    int server_socket;
    struct sockaddr_in addr; 
    server_socket = socket(PF_INET, SOCK_STREAM, 0);
    bzero(&addr, sizeof(addr));  
    addr.sin_family = AF_INET;   
    addr.sin_port = htons(port); 
    addr.sin_addr.s_addr = INADDR_ANY;
    if (bind(server_socket, (struct sockaddr *)&addr, sizeof(addr)) != 0) /* assiging the ip address and port*/
    {
        perror("can't bind port"); /* reporting error using errno.h library */
        abort();                   /*if error will be there then abort the process */
    }
    if (listen(server_socket, 3) != 0) 
    {
        perror("Can't configure listening port"); 
        abort();                                  
    }
    return server_socket;
}
SSL_CTX *InitServerCTX(void) 
{
    // creating and setting up ssl context structure
    const SSL_METHOD *method;
    SSL_CTX *ctx;
    OpenSSL_add_all_algorithms();     /* load & register all cryptos, etc. */
    SSL_load_error_strings();         /* load all error messages */
    method = TLS_server_method(); /* create new server-method instance */
    ctx = SSL_CTX_new(method);        
    if (ctx == NULL)
    {
        ERR_print_errors_fp(stderr);
        abort();
    }
    return ctx;
}
void LoadCertificates(SSL_CTX *ctx, char *CertFile, char *KeyFile) 
{

    if (SSL_CTX_use_certificate_file(ctx, CertFile, SSL_FILETYPE_PEM) <= 0)
    {
        ERR_print_errors_fp(stderr);
        abort();
    }

    if (SSL_CTX_use_PrivateKey_file(ctx, KeyFile, SSL_FILETYPE_PEM) <= 0)
    {
        ERR_print_errors_fp(stderr);
        abort();
    }

    if (!SSL_CTX_check_private_key(ctx))
    {
        fprintf(stderr, "Private key does not match the public certificaten");
        abort();
    }
}
void ShowCerts(SSL *ssl) 
{
    //show the ceritficates to client and match them
    X509 *cert;
    char *line;
    cert = SSL_get_peer_certificate(ssl); /* Get certificates (if available) */
    if (cert != NULL)
    {
        printf("\n[+] Server Certificates : \n");
        line = X509_NAME_oneline(X509_get_subject_name(cert), 0, 0);
        printf("\tServer : %s\n", line); 
        free(line);
        line = X509_NAME_oneline(X509_get_issuer_name(cert), 0, 0);
        printf("\tclient: %sn", line); 
        free(line);
        X509_free(cert);
    }
    else
        printf("[+] No certificates from Client\n");
}
void Servlet(SSL *ssl) 
{
    char buf[1024];
    int sd, bytes;
    char input[1024];

    if (SSL_accept(ssl) == -1) 
        ERR_print_errors_fp(stderr);
    else
    {
        ShowCerts(ssl); 

        if (fork() == 0)
        {
            while (1)
            {
                bytes = SSL_read(ssl, buf, sizeof(buf)); 
                if (bytes > 0)
                {
                    buf[bytes] = 0;
                    printf("\n[+] MESSAGE FROM CLIENT : %s ", buf);
                }
                else
                    ERR_print_errors_fp(stderr);
            }
        }
        else
        {
            while (1)
            {
                printf("\n[+] MESSAGE TO CLIENT : ");
                fgets(input, 1024, stdin); 
                SSL_write(ssl, input, strlen(input));
            }
        }
    }
    sd = SSL_get_fd(ssl); 
    SSL_free(ssl);        
    close(sd);            
}

int main(int count, char *strings[])
{
    intro();
    if (check_credentials() == 0)
    {
        SSL_CTX *ctx;
        int server;
        char *port_number;

        // check for syntax correctness 
        if (count != 2)
        {
            printf("[-] Usage: %s <Port number> \n", strings[0]); 
            exit(0);
        }

        SSL_library_init(); 
        port_number = strings[1];
        //initializing ssl structure bydefualt val,created for the later connections
        ctx = InitServerCTX();                           
        LoadCertificates(ctx, "ca-cert.pem", "ca-key.pem"); 
        server = OpenListener(atoi(port_number));            
        struct sockaddr_in addr;                         
        socklen_t len = sizeof(addr);
        SSL *ssl;
        listen(server, 3);                                                            
        int client = accept(server, (struct sockaddr *)&addr, &len);                  
        printf("[+] Connected client Info :\n\t %s :%d \n", inet_ntoa(addr.sin_addr), ntohs(addr.sin_port)); 
        ssl = SSL_new(ctx);                                                           
        SSL_set_fd(ssl, client);                                                      
        Servlet(ssl);                                                                 
        close(server);                                                                
        SSL_CTX_free(ctx);                                                            
    }
    else
    {
        exit(0);
    }
}