@echo off
set "CATALINA_HOME=%cd%\apache-tomcat-7.0.68"
set "CATALINA_OPTS=-Xms128m -Xmx768m -XX:PermSize=128m -XX:MaxPermSize=384m -Djava.util.Arrays.useLegacyMergeSort=true"


REM  Search for bundled JRE distribution.
if exist "%cd%\Jre" goto useOwnJre


REM  Else, check environment variable JRE_HOME for installed JRE.
IF DEFINED JRE_HOME GOTO okJre

REM  Else, check environment variable JAVA_HOME for installed JDK.
IF DEFINED JAVA_HOME (
	set "JRE_HOME=%JAVA_HOME%"
	GOTO okJre
)


REM  Else, check the registry.
REM  lookup JRE:
SET "KIT=JavaSoft\Java Runtime Environment"
call:ReadRegValue VER "HKLM\Software\%KIT%" "CurrentVersion"
IF "%VER%" NEQ "" GOTO FoundJRE

REM  lookup 32-bit JRE:
SET "KIT=Wow6432Node\JavaSoft\Java Runtime Environment"
call:ReadRegValue VER "HKLM\Software\%KIT%" "CurrentVersion"
IF "%VER%" NEQ "" GOTO FoundJRE

REM  lookup JDK:
SET "KIT=JavaSoft\Java Development Kit"
call:ReadRegValue VER "HKLM\Software\%KIT%" "CurrentVersion"
IF "%VER%" NEQ "" GOTO FoundJRE

REM  lookup 32-bit JDK:
SET "KIT=Wow6432Node\JavaSoft\Java Development Kit"
call:ReadRegValue VER "HKLM\Software\%KIT%" "CurrentVersion"
IF "%VER%" NEQ "" GOTO FoundJRE

REM  Failed to find Java
GOTO :noJre

:FoundJRE
call:ReadRegValue JRE_HOME "HKLM\Software\%KIT%\%VER%" "JavaHome"
GOTO :okJre

:useOwnJre
REM  Use Java JRE on board (the USB Flash or CD)
set "JRE_HOME=%cd%\Jre\Windows"
goto :okJre

:okJre
if not exist "%JRE_HOME%" goto noJre
REM  Write JRE_HOME to file without newline and trailing space:
echo|set /p="%JRE_HOME%">java_dir.tmp

REM  Java JRE found, launch iteraplan
start "HSQL Server" "%JRE_HOME%\bin\javaw" -cp hsqldb/lib/hsqldb.jar org.hsqldb.Server -database.0 hsqldb/data/iteraplan -dbname.0 iteraplan
call "%CATALINA_HOME%\bin\catalina.bat" start

echo ***
echo *** iteraplan start-up process
echo ***
echo *** iteraplan runs under an Apache web service.  Leave that window open
echo *** while using iteraplan. It is now minimized to the Windows task bar. 
echo *** Closing that window will disable the application.
echo ***
echo *** To stop iteraplan properly, please use the shutdown.bat file.
echo ***
echo *** Once start-up is complete, access iteraplan via the following URL:
echo ***
echo ***      http://localhost:8080/iteraplan
echo ***
echo *** Press ENTER to continue. A browser window should open automatically.
echo ***
pause

REM  Open a browser with iteraplan
start http://localhost:8080/iteraplan
goto :EOF

:ReadRegValue
SET KEY_NAME=%~2%
SET VALUE_NAME=%~3%
SET "%~1="
REM  The "wrong" version of the command won't produce any output, so FOR /F won't loop and hence won't set the variable.
REM  For REG.EXE 1.00:
FOR /F "tokens=1*" %%A IN ('REG.EXE QUERY "%KEY_NAME%\%VALUE_NAME%" 2^>NUL ^| FIND "REG_SZ"') DO FOR %%C IN (%%B) DO SET "%~1=%%C"
REM  For more recent versions (2.0 and later):
FOR /F "tokens=2*" %%A IN ('REG.EXE QUERY "%KEY_NAME%" /V "%VALUE_NAME%" 2^>NUL ^| FIND "REG_SZ"') DO SET "%~1=%%B"
goto :EOF


:noJre
REM  If no JRE could be found, print an error message
echo ***
echo *** iteraplan start-up process error:
echo ***
echo *** Could not find a Java runtime environment on you computer. 
echo *** Please install version 1.6 or later of a Java runtime environment (JRE).
echo ***
echo *** To obtain the JAVA JRE go to URL: http://java.com/en/download/index.jsp
echo ***
pause

:EOF
