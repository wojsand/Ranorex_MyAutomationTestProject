@echo off

set "CATALINA_HOME=%cd%\apache-tomcat-7.0.68"

REM  Use same JRE (from created "java.dir.tmp" file) for stopping.
set /p TMP_JRE_DIR=<java_dir.tmp
if not "%TMP_JRE_DIR%" == "" (
	set "JRE_HOME=%TMP_JRE_DIR%"
	goto okJre
)

REM  Else use bundled JRE
if exist "%cd%\Jre" goto useOwnJre

REM  Else use JRE_HOME environment variable.
IF DEFINED JRE_HOME GOTO okJre

REM  Else use JAVA_HOME environment variable.
IF DEFINED JAVA_HOME (
	set "JRE_HOME=%JAVA_HOME%"
	GOTO okJre
)

REM  If no JRE could be found, print an error message
echo Could not find a Java runtime environment on you computer. 
echo Please install version 1.6 or later of a Java runtime environment (JRE).
echo If you have a JRE installed already, please set the environment variable JRE_HOME to its path.
pause
goto EOF

:useOwnJre
REM  We have our own JRE on board and can be sure to use that one
set JRE_HOME=%cd%\Jre\Windows
goto okJre


:okJre
call "%CATALINA_HOME%\bin\catalina.bat" stop
"%JRE_HOME%\bin\java" -cp hsqldb/lib/sqltool.jar;hsqldb/lib/hsqldb.jar org.hsqldb.cmdline.SqlTool --inlineRc="URL=jdbc:hsqldb:hsql://localhost/iteraplan;hsqldb.tx=mvcc,USER=sa,PASSWORD=" --sql="SHUTDOWN;" --autoCommit

:EOF
