#include <errno.h>       
#include <stdio.h>      
#include <unistd.h>      
#include <malloc.h>     
#include <string.h>      
#include <sys/socket.h>  
#include <resolv.h>      
#include <netdb.h>       
#include <openssl/ssl.h> 
#include <openssl/err.h> 
#include <unistd.h>      
#define BUFFER 1024      
void intro()
{
    system("clear");
    printf("$$$$$$\\  $$\\ $$\\                      $$\\ \n");
    printf("$$  __$$\\ $$ |\\__|                     $$ |  \n");
    printf("$$ /  \\__|$$ |$$\\  $$$$$$\\  $$$$$$$\\ $$$$$$\\ \n");
    printf("$$ |      $$ |$$ |$$  __$$\\ $$  __$$\\_$$  _|  \n");
    printf("$$ |      $$ |$$ |$$$$$$$$ |$$ |  $$ | $$ |  \n");
    printf("$$ |  $$\\ $$ |$$ |$$   ____|$$ |  $$ | $$ |$$\\ \n");
    printf("\\$$$$$$  |$$ |$$ |\\$$$$$$$\\ $$ |  $$ | \\$$$$  | \n");
    printf("\\______/ \\__|\\__| \\_______|\\__|  \\__|  \\____/       OS Project\n");
    
    printf("\n[+] Cleint Strated Successfully \n");
}
int OpenConnection(const char *hostname, int port)
{
    int client_socket;
    struct hostent *host;
    struct sockaddr_in addr; 
    if ((host = gethostbyname(hostname)) == NULL)
    {
        perror(hostname);
        abort();
    }
    client_socket = socket(PF_INET, SOCK_STREAM, 0);
    bzero(&addr, sizeof(addr));
    addr.sin_family = AF_INET;
    addr.sin_port = htons(port);
    addr.sin_addr.s_addr = *(long *)(host->h_addr);
    if (connect(client_socket, (struct sockaddr *)&addr, sizeof(addr)) != 0) 
    {
        close(client_socket);
        perror(hostname);
        abort();
    }
    return client_socket;
}
SSL_CTX *InitCTX(void) 
{
    const SSL_METHOD *method;
    SSL_CTX *ctx;
    OpenSSL_add_all_algorithms();     
    SSL_load_error_strings();       
    method = TLS_client_method(); 
    ctx = SSL_CTX_new(method);       
    if (ctx == NULL)
    {
        ERR_print_errors_fp(stderr);
        abort();
    }
    return ctx;
}
void ShowCerts(SSL *ssl)
{
    X509 *cert;
    char *line;
    cert = SSL_get_peer_certificate(ssl); 
    if (cert != NULL)
    {
        printf("\n[+] Server Certificate : \n");
        line = X509_NAME_oneline(X509_get_subject_name(cert), 0, 0);
        printf("\tSubject : %s\n", line);
        free(line); 
        line = X509_NAME_oneline(X509_get_issuer_name(cert), 0, 0);
        printf("\tIssuer : %s\n", line);
        free(line);      
        X509_free(cert);
    }
    else
        printf("[-] Info: No client certificates configured\n");
}
int main(int count, char *strings[]) 
{
    intro();

    SSL_CTX *ctx;
    int server;
    SSL *ssl;
    char buf[1024];
    char input[1024];
    int bytes;
    char *hostname, *port_number;

    if (count != 3)
    {
        printf("[+] usage: %s 192.xx.xx.x port \n", strings[0]);
        exit(0);
    }
    SSL_library_init(); 
    hostname = strings[1];
    port_number = strings[2];
    ctx = InitCTX();
    server = OpenConnection(hostname, atoi(port_number)); 
    ssl = SSL_new(ctx);                               
    SSL_set_fd(ssl, server);                          
    if (SSL_connect(ssl) == -1)                     
        ERR_print_errors_fp(stderr);
    else
    {
        printf("[+] Connected with %s ", SSL_get_cipher(ssl));
        ShowCerts(ssl);
        if (fork() == 0)
        {
            while (1)
            {
                printf("\n[+] MESSAGE TO SERVER : ");
                fgets(input, BUFFER, stdin);
                SSL_write(ssl, input, strlen(input)); 
            }
        }
        else
        {
            while (1)
            {
                bytes = SSL_read(ssl, buf, sizeof(buf)); 
                if (bytes > 0)
                {
                    buf[bytes] = 0;
                    printf("\n[+] MESSAGE FROM SERVER : %s ", buf);
                }
            }
        }
        SSL_free(ssl); 
    }
    close(server);    
    SSL_CTX_free(ctx); 
    return 0;
}