#Creating OpenSSL certificates :

openssl req -x509 -nodes -days 365 -newkey rsa:1024 -keyout cert_key.pem -out cert_file.pem


# Compiling Server.c :

    Command Line : gcc -Wall -o ssl-server Server.c -L/usr/lib -lssl -lcrypto
  Executing Server :
    Command Line : sudo ./ssl-server <Port-Nummber> || Ex: sudo ./ssl-server 7500

# Compiling Client.c :
    Command Line : gcc -Wall -o client Client.c -L/usr/lib -lssl -lcrypto
  Executing Client :
    Command Line : ./client <IP-Address> <Port-Number> || ./client 192.168.xxx.xx 7500 || ./client 127.0.0.1 7500
		
# Monitoring Traffic using ssldump :
  ssldump -i wlan0 port 6000


   /*show the ceritficates to server and match them but here we are not using any client certificate*/