import pdfSrc from "../../../imports/1_Report__Secure_Cloud_Deployment_of_PrestaShop_E-Commerce_Platform.pdf";
import { DocNav, DocFooter, SectionDivider, SectionNumber, CodeBlock, display, body, mono } from "../../components/DocShared";

export default function PrestaShopDocs() {
  return (
    <div className="min-h-screen bg-white text-gray-900" style={body}>
      <DocNav />

      {/* Hero */}
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-14 md:py-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {["Cloud Security", "AWS", "Linux Admin", "LAMP Stack"].map((t) => (
              <span key={t} className="text-[11px] tracking-[0.15em] uppercase text-gray-500 border border-gray-300 px-2.5 py-1 rounded-sm" style={mono}>{t}</span>
            ))}
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight tracking-tight mb-6" style={display}>
            Secure Cloud Deployment: PrestaShop on AWS
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
            Technical assessment report documenting the design, deployment, and security hardening of a decoupled, multi-tier e-commerce infrastructure on Amazon Web Services, submitted as a preliminary internship assignment.
          </p>
          <div className="mt-8 flex flex-wrap gap-6 text-[13px] text-gray-500" style={mono}>
            <span>Engineer: Msugh Felix Demkiir</span>
            <span>Year: 2025</span>
            <span>Platform: AWS EC2 + RDS</span>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-14">

        {/* Overview */}
        <section>
          <SectionNumber n="01" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>Project Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This project moves away from a "monolithic" server setup where the web application and database share the same machine, toward a properly decoupled, multi-tier architecture. The web layer runs on an EC2 instance, while the database lives on a fully managed RDS instance in a private subnet, inaccessible from the public internet.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-8">
            {[
              { label: "Secure", desc: "Database isolated in a private tier with zero public internet exposure." },
              { label: "Performant", desc: "Dedicated resources per tier prevent contention under load." },
              { label: "Scalable", desc: "Web and database layers can be scaled independently." },
            ].map((item) => (
              <div key={item.label} className="border border-gray-200 rounded-md p-5">
                <div className="text-emerald-600 font-semibold text-[13px] tracking-widest uppercase mb-2" style={mono}>{item.label}</div>
                <p className="text-[14px] text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* Objective */}
        <section>
          <SectionNumber n="02" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>Problem & Objective</h2>
          <p className="text-gray-700 leading-relaxed mb-3">
            Design, deploy, and secure a cloud-based e-commerce infrastructure using AWS EC2 and RDS. The deployment must emphasize:
          </p>
          <ul className="space-y-2 text-gray-700 text-[15px]">
            {[
              "Network isolation between the application and database tiers",
              "Secure system administration via SSH key authentication",
              "A fully configured LAMP stack tailored for PrestaShop 8.2.0",
              "Post-deployment security hardening and lockdown",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1 shrink-0">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <SectionDivider />

        {/* Methodology */}
        <section>
          <SectionNumber n="03" />
          <h2 className="text-2xl font-semibold mt-2 mb-8" style={display}>Deployment Phases</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-3" style={display}>
                <span className="text-emerald-600 text-[12px] font-bold tracking-widest uppercase" style={mono}>Phase 1</span>
                Database Backend: AWS RDS
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">Provisioned a dedicated managed MySQL database to separate the data tier from the application tier and ensure high availability.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-md p-5 text-[14px] space-y-1" style={mono}>
                <div><span className="text-gray-500">Service:</span> Amazon RDS MySQL Community Edition</div>
                <div><span className="text-gray-500">Instance:</span> prestashop-db (db.t4g.micro)</div>
                <div><span className="text-gray-500">Endpoint:</span> prestashop-db.cnaqkk2iszib.eu-north-1.rds.amazonaws.com</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-3" style={display}>
                <span className="text-emerald-600 text-[12px] font-bold tracking-widest uppercase" style={mono}>Phase 2</span>
                Web Server: AWS EC2
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">Spun up a public-facing Ubuntu Server 24.04 LTS instance as the application host with a hardened Security Group.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-md p-5 text-[14px] space-y-1" style={mono}>
                <div><span className="text-gray-500">Instance Type:</span> t3.micro (Prestashop-Web)</div>
                <div><span className="text-gray-500">Port 80/443:</span> Open to 0.0.0.0/0 (public web traffic)</div>
                <div><span className="text-gray-500">Port 22 (SSH):</span> Restricted to administrator's local IP only</div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-3" style={display}>
                <span className="text-emerald-600 text-[12px] font-bold tracking-widest uppercase" style={mono}>Phase 3</span>
                Network Isolation & Security Hardening
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">Implemented strict Security Group rules to ensure the RDS instance is completely invisible to the public internet.</p>
              <div className="bg-gray-50 border border-gray-200 rounded-md p-5 text-[14px] text-gray-700 leading-relaxed" style={mono}>
                Deleted all default public access rules on Prestashop-DB-SG. Created a single custom inbound rule allowing MySQL/Aurora (Port 3306) traffic <strong>only from the Prestashop-Web-SG source Security Group</strong>. The database is now mathematically isolated, adhering to the Principle of Least Privilege.
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-3" style={display}>
                <span className="text-emerald-600 text-[12px] font-bold tracking-widest uppercase" style={mono}>Phase 4</span>
                LAMP Stack Installation
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">Accessed the EC2 instance via SSH key authentication and installed the full LAMP stack.</p>
              <CodeBlock>{`# Secure SSH connection
chmod 400 bincom-key.pem
ssh -i "bincom-key.pem" ubuntu@13.62.103.215

# System update + Apache + PHP dependencies
sudo apt update && sudo apt upgrade -y
sudo apt install apache2 mysql-client unzip -y
sudo apt install php libapache2-mod-php php-mysql \\
  php-curl php-gd php-mbstring php-xml php-zip \\
  php-intl php-bcmath -y

# Deploy PrestaShop 8.2.0
cd /var/www/html
sudo wget https://github.com/PrestaShop/.../prestashop_8.2.0.zip
sudo unzip prestashop_8.2.0.zip
sudo chown -R www-data:www-data /var/www/html/
sudo chmod -R 755 /var/www/html/`}</CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-3" style={display}>
                <span className="text-emerald-600 text-[12px] font-bold tracking-widest uppercase" style={mono}>Phase 5</span>
                Application Configuration & Database Linkage
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">Enabled Apache mod_rewrite, then connected PrestaShop to the private RDS endpoint during the web installer.</p>
              <CodeBlock>{`sudo a2enmod rewrite
sudo systemctl restart apache2

# Database connection configured via PrestaShop installer:
# Host: prestashop-db.cnaqkk2iszib.eu-north-1.rds.amazonaws.com
# DB: prestashop | User: admin`}</CodeBlock>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-3" style={display}>
                <span className="text-emerald-600 text-[12px] font-bold tracking-widest uppercase" style={mono}>Phase 6</span>
                Final Security Audit & Lockdown
              </h3>
              <p className="text-gray-700 leading-relaxed mb-3">Hardened the server following successful deployment.</p>
              <ul className="space-y-2 text-gray-700 text-[15px] mb-3">
                <li className="flex gap-3"><span className="text-emerald-500 shrink-0">→</span>Removed the installer directory to prevent re-installation attacks</li>
                <li className="flex gap-3"><span className="text-emerald-500 shrink-0">→</span>Verified automated obfuscation of the admin backend URL to prevent brute-force discovery</li>
              </ul>
              <CodeBlock>{`sudo rm -rf /var/www/html/install`}</CodeBlock>
            </div>
          </div>
        </section>

        <SectionDivider />

        {/* Key Findings */}
        <section>
          <SectionNumber n="04" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>Outcomes</h2>
          <ul className="space-y-3 text-gray-700 text-[15px]">
            {[
              "PrestaShop 8.2.0 fully operational at http://13.62.103.215/index.php",
              "Database tier completely isolated: Port 3306 accessible only to the web server Security Group, not the internet",
              "SSH access restricted to administrator IP: no brute-force attack surface exposed",
              "Admin panel URL obfuscated: automated bot discovery significantly reduced",
              "Installer directory removed: no re-installation attack vector remains",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="text-emerald-500 mt-0.5 shrink-0 font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <SectionDivider />

        {/* Recommendations */}
        <section>
          <SectionNumber n="05" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>Further Hardening</h2>
          <div className="space-y-4">
            {[
              { title: "Enable HTTPS (TLS)", desc: "Install an SSL certificate (Let's Encrypt) and redirect all HTTP traffic to HTTPS. The current deployment runs over plain HTTP." },
              { title: "Enable Automated Backups", desc: "Configure RDS automated snapshots and EC2 AMI backups on a daily schedule to ensure disaster recovery." },
              { title: "Add a WAF", desc: "Place AWS WAF in front of the EC2 instance to filter common web attack patterns before they reach the application." },
              { title: "Enable CloudWatch Monitoring", desc: "Set up CloudWatch alarms for unusual CPU spikes, failed login attempts, or abnormal network traffic patterns." },
            ].map((item) => (
              <div key={item.title} className="border border-gray-200 rounded-md p-5">
                <h4 className="font-semibold text-gray-900 mb-1" style={display}>{item.title}</h4>
                <p className="text-[14px] text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <SectionDivider />

        {/* What I Learned */}
        <section>
          <SectionNumber n="06" />
          <h2 className="text-2xl font-semibold mt-2 mb-4" style={display}>What I Learned</h2>
          <div className="space-y-3 text-gray-700 text-[15px] leading-relaxed">
            <p><strong>Security Groups as network firewalls.</strong> Referencing a source Security Group instead of a CIDR block for the RDS rule is the right approach — it means only the specific web server, not any random IP in a subnet, can reach the database.</p>
            <p><strong>Principle of Least Privilege in practice.</strong> Every rule, every permission, every open port has to be justified. Defaults are almost always too permissive.</p>
            <p><strong>Linux server administration fundamentals.</strong> Working through SSH key setup, file permissions (chown, chmod), and service management (systemctl) built confidence I'll carry into every future deployment.</p>
            <p><strong>The gap between "running" and "secure".</strong> Getting the store online was the easy part. The real work was the lockdown phase: removing the installer, obfuscating the admin URL, restricting SSH access.</p>
          </div>
        </section>
      </div>

      <DocFooter pdfSrc={pdfSrc} label="View Full Technical Report" />
    </div>
  );
}
