++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ README iteraplan BUNDLE                                                        +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This is a bundle (demo) version of iteraplan. It includes Apache Tomcat as Servlet engine
and hsqldb as database engine and requires only a Java Standard Edition Runtime
Environment (JRE) version 6 or later to run.

The application files should be extracted as a whole into a folder somewhere in
a local file system. The path to the folder should not be nested too deep into the folder 
hierarchy, as some operating systems have problems with excessively long path names. 
The application will run within the extracted folder and not change anything outside of it.

The environment variables JRE_HOME  needs to be set to the path to a JRE installation. 
Make sure that the variable points to the root folder of your  JRE (e.g. 
"C:\Program Files\Java\jre1.6.0_29" or "/opt/java/jre1.6.0_29") and not to a subfolder 
contained in your java installation (such as for example "bin" or "lib"). Tomcat will 
refuse to run if this is not set up properly.

Started with the default settings, the application will use the following TCP/IP
ports: 8080, 8009, 8005, 9001. These ports should be free before starting the
application. Alternatively see the instructions at the end of this file for
changing the ports, although we strongly recommended to use the defaults.

To start both Tomcat and hsqldb run either "runIteraplan.bat" (on Windows) or 
"runIteraplan.sh" (on Linux or Mac OS X), to shut down both run the matching 
"shutdown.bat" or "shutdown.sh" script. Please note that it might be necessary to 
make these files executable on Linux or Mac OS first.

The URL for accessing iteraplan is http://localhost:8080/iteraplan. 

If you downloaded the iteraplan distribution with sample bank data (as opposed 
to initial data), the application includes example data describing a fictitious bank. 
This data can be edited and changes are saved to the integrated database. 
Your data is stored within the installation folder. You can create backups by creating a 
copy of the "data" folder in the hsqldb installation (e.g. "iteraplan/hsqldb/data").
Be sure that the database engine is not running while creating a backup. If you 
are not sure whether the database is running or not, simply run the shutdown 
command -- it will fail without side effects if the database is not running.

Have fun.


++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ Instructions on changing the ports                                             +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

This part is only relevant if you cannot use the default ports. In this case you
might want to edit the configuration of the underlying servers to use other ports.

++ Tomcat ++

Tomcat uses the ports 8080, 8009 and 8005 by default. These settings can be
changed by editing the file "conf/server.xml" in the Tomcat directory and
replacing all occurrences of these numbers.

++ hsqldb ++

Hsqldb uses the port 9001 by default. To change this you have to edit your startup
file ("runIteraplan.sh/bat") to pass a different port number on startup of the
database server. The matching line looks something like this (all on one line):

  start "HSQL Server" "%JRE_HOME%\bin\javaw" -cp hsqldb/lib/hsqldb.jar org.hsqldb.Server 
    -database.0 hsqldb/data/iteraplan -dbname.0 iteraplan

It varies slightly between operating systems and versions. You need to add 
"-port <NUMBER>" after the word "iteraplan", such as this:

  start "HSQL Server" "%JRE_HOME%\bin\javaw" -cp hsqldb/lib/hsqldb.jar org.hsqldb.Server 
    -database.0 hsqldb/data/iteraplan -dbname.0 iteraplan -port 9002

You also need to change the shutdown script and for example replace 
	jdbc:hsqldb:hsql://localhost/iteraplan
with 
	jdbc:hsqldb:hsql://localhost:9002/iteraplan
to make sure you shut down the correct hsqldb database.

Additionally the connection strings in two files within the Tomcat directory have
to be adjusted. These two files are:

  conf/Catalina/localhost/iteraplan.xml
  webapps/iteraplan/WEB-INF/classes/iteraplan-db.properties

both contain the string "jdbc:hsqldb:hsql://localhost/iteraplan", which needs to
be expanded to "jdbc:hsqldb:hsql://localhost:<PORT>/iteraplan", e.g.
"jdbc:hsqldb:hsql://localhost:9002/iteraplan".

++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
+ License & Disclaimer                                                           +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

iteraplan is an web based Enterprise Architecture Management tool.
Copyright © 2016 by iteratec GmbH, Inselkammerstr. 4, 82008 Unterhaching, Germany.
All rights reserved.

Terms of Use "iteraplan Bundle" 

These are the Terms of Use of iteratec GmbH, Inselkammerstraße 4, 82008 
München – Unterhaching, Germany (“iteratec”) for the Bundle of 
the EAM software iteraplan (the “Software”), which can be downloaded at: 
www.iteraplan.de 

§ 1 Subject Matter of these Terms of Use 

1.1 Download and use of the Software are free of charge. By downloading 
the Software and agreeing to these Terms of Use an agreement between 
iteratec and the User about the use of the Software is concluded (the 
“Agreement”). The Agreement is a donation contract within the meaning of 
sections 516 et seq. of the German Civil Code (BGB). The Agreement is 
exclusively governed by these Terms of Use. Other contractual terms 
shall not be part of the Agreement, even if iteratec does not expressly 
object such terms or their inclusion into the Agreement. 

1.2 The User will only be provided with the object code of the Software. 
The source code will not be provided. 

1.3 The User will be provided with an online guide available at: 
http://www.iteraplan.de/wiki/display/iteraplan/iteraplan+Documentation+Home 

Further documentation will not be provided. 

§ 2 Right of Use 

2.1 iteratec grants the User the non-exclusive and non-transferable 
right to use the Software by itself (single user) for its private or 
commercial purposes. Any other use, in particular, but not limited to, 
modifying, distributing and making the Software available to the public, 
disassembling and reverse-engineering shall be illegal without the prior 
written consent of iteratec. Sections 69d and 69e of the German 
Copyright Act (UrhG) shall remain unaffected. 

2.2 iteratec shall be entitled to revoke the right of use pursuant to 
section 2.1 for cause. A cause shall exist in particular, but not 
limited to, if the User uses the Software in violation of section 2.1 or 
in any other way that materially breaches these Terms of Use. 

§ 3 Defects in quality and title, damages and reimbursement of expenses 

3.1 iteratec shall not be liable for defects in quality or title of the 
Software, unless iteratec has fraudulently concealed the defect. 

3.2 Apart from section 3.1, iteratec shall only be liable in cases of 
intent or gross negligence. 

3.3 iteratec shall be entitled to raise the defense of contributory 
negligence. In particular, but not limited to, the User shall be 
obligated to keep backups of the data and to protect the Software 
against malware in accordance with the state of the art. 

§ 4 Miscellaneous 

4.1 As far as declarations under these Terms of Use have to be made in 
writing, e-mails shall be sufficient. 

4.2 This Agreement shall be governed exclusively by German law. The 
United Nations Convention on Contracts for the International Sale of 
Goods (CISG) and the conflict-of-laws principles shall not apply. 


