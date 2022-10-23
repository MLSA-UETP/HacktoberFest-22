<!-- ![GitHub Logo](Server_Client_Chat.png) -->
<br>
<p align="center">
    <img src="https://github.com/MLSA-UETP/HacktoberFest-22/blob/main/Enctpyted-Client-Server-Communication/Server_Client_Chat.png" alt="Project Demo">
</p>

<br>

# Encrypted Client Server Communication 
### Introduction
  This project is about implementing Client Server Communication using socket programming. Before starting the two-way communication between server and client, it prompts the user for the system password credentials. That password is converted to a salted hash and then compare it with user's password hash stored in system. Upon successful validation the communication begins subject to SSL Certificates matching. 

  P.S: 
  - Pipes (unnamed pipes) are used to pass Command Line Arguments from C program to shell and get the responses back from the shell. 
  - This program shows the certificates to server and match them but not using any client certificate, however, it can be implemented. 
  - The main purpose of this mini project was to practice mentioned below concepts and and use it in a fun way.

##### The Key concepts which are used: 
- Socket Programming
- Pipes 
- SSL Encryption 
- Hashing and Salting 

### Usage
1. Use openssl to create OpenSSL certificates files and keys.
2. Compile the server code
3. Compile the Client code
4. Execute the server file by providing any port number
5. Execute the client code by providing any IP and the same port nummber used in execution of server. 
6. Either use local host(127.0.0.1) to communicate on the same host or use 192.168.xxx.xx to communicate over a locally conected two computers.
7. User ssldump to monitor the traffic. 
##### Creating OpenSSL certificates:
  ```bash
  openssl req -x509 -nodes -days 365 -newkey rsa:1024 -keyout cert_key.pem -out cert_file.pem
  ```

##### Compiling Server.c :
  ```bash
  gcc -Wall -o ssl-server Server.c -L/usr/lib -lssl -lcrypto
  ```
##### Executing Server:

  ```bash
  sudo ./ssl-server <Port-Nummber> || Example: sudo ./ssl-server 7500
  ```
##### Compiling Client.c :
  ```bash
  gcc -Wall -o client Client.c -L/usr/lib -lssl -lcrypto
  ```
##### Executing Client :
  ```bash
  ./client <IP-Address> <Port-Number> || Example: ./client 192.168.xxx.xx 7500 || Example: ./client 127.0.0.1 7500
  ```
##### Monitoring Traffic using ssldump :
  ```bash
  ssldump -i wlan0 port 6000
  ```


#### License 
MIT License


