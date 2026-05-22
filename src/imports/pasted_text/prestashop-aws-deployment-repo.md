Technical Assessment Report: Secure Cloud Deployment of PrestaShop E-Commerce Platform Engineer: Msugh Felix Demkiir Project: Nexus Gadgets Application URL: http://13.62.103.215/index.php

Project Overview This report details the deployment of a professional PrestaShop e-commerce ecosystem hosted on Amazon Web Services (AWS). The primary goal of this architecture was to move away from a "monolithic" setup (where everything is on one server) and instead build a decoupled, multi-tier infrastructure. By hosting the web server on EC2 and the database on a managed RDS instance, I have created a system that is: Highly Secure: The database is isolated in a private tier and is not reachable via the public internet. Performant: The application and data tiers have dedicated resources, preventing "resource contention." Scalable: This setup allows for independent scaling of the web and database layers as store traffic grows.

Objective To design, deploy, and secure a decoupled, cloud-based e-commerce infrastructure utilizing AWS EC2 and RDS. The deployment emphasizes network isolation, secure system administration, and the implementation of a LAMP stack tailored for PrestaShop.

Phase 1: Database Backend Provisioning (AWS RDS) To ensure high availability and separate the data tier from the application tier, a dedicated managed database was provisioned. Service: Amazon Relational Database Service (RDS) Engine: MySQL Community Edition Instance: prestashop-db (db.t4g.micro) Credentials: User: admin | Password: [REDACTED FOR SECURITY] Action: Successfully initialized the database and captured the internal AWS Endpoint for secure internal routing.

Phase 2: Web Server Provisioning (AWS EC2) A virtual machine was spun up to serve as the public-facing application host. Service: Amazon Elastic Compute Cloud (EC2) OS Image: Ubuntu Server 24.04 LTS Instance Type: t3.micro (Prestashop-Web) Security Group Configuration: Created Prestashop-Web-SG. Opened Port 80 (HTTP) and Port 443 (HTTPS) to 0.0.0.0/0 for public web traffic. Restricted Port 22 (SSH) strictly to the administrator's local IP address.

Phase 3: Network Isolation & Security Hardening In this phase, I implemented strict access control to protect the database tier from external threats. Action: Modified the RDS Security Group (Prestashop-DB-SG). Rule Implementation: Deleted all default public access rules. Created a custom inbound rule allowing MySQL/Aurora (Port 3306) traffic strictly from the source Security Group: Prestashop-Web-SG. Result: The database is mathematically isolated from the public internet, adhering to the Principle of Least Privilege.

Phase 4: System Administration & LAMP Stack Installation Configured the Ubuntu server via the Linux command-line interface.

    Secure SSH Connection: Bash chmod 400 bincom-key.pem ssh -i "bincom-key.pem" ubuntu@13.62.103.215

    Environment & Dependency Setup: Bash sudo apt update && sudo apt upgrade -y sudo apt install apache2 mysql-client unzip -y sudo apt install php libapache2-mod-php php-mysql php-curl php-gd php-mbstring php-xml php-zip php-intl php-bcmath -y

    Application Deployment & Permissions: Bash cd /var/www/html sudo rm index.html sudo wget https://github.com/PrestaShop/PrestaShop/releases/download/8.2.0/prestashop_8.2.0.zip sudo unzip prestashop_8.2.0.zip sudo chown -R www-data:www-data /var/www/html/ sudo chmod -R 755 /var/www/html/

Phase 5: Application Configuration & Database Linkage Finalized the connection between the application and data tiers.

    Apache Optimization: Bash sudo a2enmod rewrite sudo systemctl restart apache2

    Database Integration: Database Server: prestashop-db.cnaqkk2iszib.eu-north-1.rds.amazonaws.com Database Name: prestashop Database User: admin Database Password: [REDACTED FOR SECURITY]

Phase 6: Final Security Audit & Lockdown Following successful deployment, the server was hardened for production.

    Installer Cleanup: Bash sudo rm -rf /var/www/html/install

    Backend Obfuscation: Verified the automated obfuscation of the administrator backend URL to thwart automated bot attacks and brute-force discovery attempts. Admin Login Email: felixdemkiir@gmail.com Admin Password: [REDACTED FOR SECURITY]

Conclusion The e-commerce platform is fully operational, decoupled, and secured behind strict network firewalls. The architecture ensures that public web traffic can access the store, while the sensitive database remains entirely hidden and accessible only to the internal web server.
About

AWS Cloud deployment of a decoupled PrestaShop e-commerce platform. Highlights hands-on experience with EC2 provisioning, remote MySQL database configuration, Linux folder permissions, Apache web server troubleshooting, and AWS Security Groups
Resources
Readme
Activity
Stars
0 stars
Watchers
0 watching
Forks
0 forks
Releases
No releases published
Create a new release
Packages
No packages published
Publish your first package
Contributors 1

    @msugh1
    msugh1 Msugh Felix Demkiir

Footer
© 2026 GitHub, Inc.
Footer navigation

    Terms
    Privacy
    Security
    Status
    Community
    Docs
    Contact

