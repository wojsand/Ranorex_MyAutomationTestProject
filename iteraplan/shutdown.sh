#!/bin/bash

# Figure out where this script resides, as it might be called from an other directory (copied from catalina.sh)
# resolve links - $0 may be a softlink
PRG="$0"

while [ -h "$PRG" ]; do
  ls=`ls -ld "$PRG"`
  link=`expr "$ls" : '.*-> \(.*\)$'`
  if expr "$link" : '/.*' > /dev/null; then
    PRG="$link"
  else
    PRG=`dirname "$PRG"`/"$link"
  fi
done

# Switch to directory where this script resides
cd `dirname "$PRG"`

# Set JRE_HOME
if [ -d "Jre/Linux" ]; then
  # Use included JRE
  export JRE_HOME="Jre/Linux"
  
  # Make JRE Scripts executable (were probably stored on a FAT file system and lost rights)
  chmod u+x Jre/Linux/bin/*
else
  if [ -n "$JAVA_HOME" ]; then
    # Use local JRE
    export JRE_HOME="$JAVA_HOME"
  fi
fi

# Set Java executable
JAVA_PATH=`which java 2>/dev/null`
if [ -n "$JRE_HOME" ]; then
  RUNJAVA="$JRE_HOME"/bin/java
else
  if [ -n "$JAVA_PATH" ]; then
    # Use Java from the $PATH
    RUNJAVA="$JAVA_PATH"
  else
    echo "Could not find a Java runtime environment on you computer."
    echo "Please install version 1.6 or later of a Java runtime environment (JRE)."
    echo "If you have a JRE installed already, please set the environment variable JRE_HOME to its path."
    exit 1
  fi
fi

# Stop Tomcat
apache-tomcat-7.0.68/bin/catalina.sh stop

# Give Tomcat 5 seconds to shutdown - prevents an error from HSQLDB
sleep 5

# Stop HSQLDB
"$RUNJAVA"  -cp hsqldb/lib/sqltool.jar:hsqldb/lib/hsqldb.jar org.hsqldb.cmdline.SqlTool --inlineRc='URL=jdbc:hsqldb:hsql://localhost/iteraplan;hsqldb.tx=mvcc,USER=sa,PASSWORD=' --sql='SHUTDOWN;' --autoCommit
