<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring" %>
<%
  // effectively disable browser caching, enforce complete roundtrip on every reload 
  response.setHeader("Expires", "Tue, 15 Nov 1994 12:45:26 GMT");
  response.setHeader("Last-Modified", "Tue, 15 Nov 1994 12:45:26 GMT");
  response.setHeader("Pragma", "no-cache");
  response.setHeader("Cache-Control", "no-store, no-cache, must-revalidate");
  response.addHeader("Cache-Control", "post-check=0, pre-check=0");
%>

<spring:eval var="buildVersionMajor" expression="@applicationProperties.getProperty('build.version.major')" />

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
   "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
   
<html xmlns="http://www.w3.org/1999/xhtml">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta http-equiv="refresh" content="<%=session.getMaxInactiveInterval()-10 %>" />
        <meta http-equiv="expires" content="0" />
		<meta http-equiv="pragma" content="no-cache" />
		<meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="X-UA-Compatible" content="IE=8,9,10" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
		<link rel="icon"          href="<c:url value="/images/favicon.ico"/>" type="image/x-icon" />
		<link rel="shortcut icon" href="<c:url value="/images/favicon.ico"/>" type="image/x-icon" />
		<link href="<c:url value="/ui/login.cxx" />" media="screen" type="text/css" rel="stylesheet" />
		<link href="<c:url value="/ui/custom/custom.cxx" />" media="screen" type="text/css" rel="stylesheet" />
		
		<title>
		  <itera:message key="global.madeby" /> - <itera:message key="global.applicationname" />
		</title>
	</head>

<body onload="document.getElementById('login_form').j_username.focus();">

	<div id="outerbox">
	 <div id="innerbox">
	   <div id="logo">
	     <img id="iteraplan_header_image" border="0" src="<c:url value="/images/blank.gif"/>" alt="iteraplan Logo"/>
   </div>
   <h1><itera:message key="global.applicationname" />
        <c:out value=" " />
	   		<c:out value="${buildVersionMajor}" />
   </h1>
   <form method="post" action="<c:url value="/j_iteraplan_security_check"/>" id="login_form">
     <table class="table">
       <tr>
         <td class="label"><label for="j_username">
           <itera:message key="login.name" /> :</label>
         </td>
         <%-- CUSTOM --%>
         <td><input class="input" type="text" name="j_username" id="j_username" value="system" /></td>
		<%-- /CUSTOM --%>
       </tr>
       
       <tr>
         <td class="label">
         	<label for="j_password"><itera:message key="global.password" /> :</label>
         </td>
         <%-- CUSTOM --%>
         <td><input class="input" type="password" name="j_password" id="j_password" value="password" /></td>
       	<%-- /CUSTOM --%>
       </tr>
     </table>
     <div id="buttons">
       <input type="submit" class="btn btn-primary" id="loginButtonCursor" name="login_button" value="<itera:message key="login.submit" />" />
     </div>
   </form>
   <%-- CUSTOM --%>
   <div id="hintbox">
     <h3>Demo-Account:</h3>
     <p>     <itera:message key="login.name" />: system <br />
     <itera:message key="global.password" />: password </p>
   </div>
   <%-- /CUSTOM --%>
   <c:if test="${not empty param.errorKey}">
     <p class="errorMsg">
       <c:choose>
         <c:when test="${param.errorKey eq 'login.error'}">
           <itera:message key="login.error" />
         </c:when>
         <c:when test="${param.errorKey eq 'login.error.badCredentials'}">
           <itera:message key="login.error.badCredentials" />
         </c:when>
         <c:when test="${param.errorKey eq 'login.error.datasourceNotAvailable'}">
           <itera:message key="login.error.datasourceNotAvailable" />
         </c:when>
         <c:when test="${param.errorKey eq 'login.error.passwordExpired'}">
           <itera:message key="login.error.passwordExpired" />
         </c:when>
           <c:when test="${param.errorKey eq 'LOGIN_DB_INVALID_LICENSE'}">
             <itera:message key="LOGIN_DB_INVALID_LICENSE" />
           </c:when>
         <c:when test="${param.errorKey eq 'LOGIN_DB_SCHEMA_NOT_AVAILABLE'}">
            <itera:message key="LOGIN_DB_SCHEMA_NOT_AVAILABLE" />
         </c:when>
         <c:when test="${param.errorKey eq 'LOGIN_DB_DATA_NOT_AVAILABLE'}">
            <itera:message key="LOGIN_DB_DATA_NOT_AVAILABLE" />
          </c:when>
           <c:when test="${param.errorKey eq 'LOGIN_DB_DATASOURCE_INCONSISTENT'}">
             <itera:message key="LOGIN_DB_DATASOURCE_INCONSISTENT" />
           </c:when>
           <c:when test="${param.errorKey eq 'LOGIN_DB_DATASOURCE_NOT_AVAILABLE'}">
             <itera:message key="LOGIN_DB_DATASOURCE_NOT_AVAILABLE" />
           </c:when>
           <c:when test="${param.errorKey eq 'LOGIN_DB_DATASOURCE_EXPIRED'}">
             <itera:message key="LOGIN_DB_DATASOURCE_EXPIRED" />
           </c:when>
       </c:choose>
     </p>
   </c:if>
   
      <div id="links">
     <table class="table">
       <tr>
  		 <td align="left">
  		   <div id="iteratecLink" class = "Link">
  			
  		     <a href="<itera:message key ="login.link.iteratec.url" />">
   					<itera:message key ="login.link.iteratec.text" />
  			 </a>
  		   </div>
		 </td>
		
 		 
  		 <td align="right">
  		   <div id="iteraplanLink" class="Link">
  				
  			<a href="<itera:message key ="login.link.iteraplan.url" />">
			  		<itera:message key ="login.link.iteraplan.text" />
  		    </a>
  		  </div>
  		</td>
   	  </tr>
     </table>
   </div> 
  <!-- innerbox -->
  </div>
 </div>
</body>
</html>
