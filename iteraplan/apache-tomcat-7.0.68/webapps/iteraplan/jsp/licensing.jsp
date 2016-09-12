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
    <link href="<c:url value="/ui/licensing.cxx" />" media="screen" type="text/css" rel="stylesheet" />
		
	<title>
	  <itera:message key="global.madeby" /> - <itera:message key="global.applicationname" />
	</title>
    
</head>

<body>
	<div id="outerbox">
	 <div id="innerbox">
	   <div id="logo">
	     <img id="iteraplan_header_image" border="0" src="<c:url value="/images/blank.gif"/>" alt="iteraplan Logo"/>
	   </div>
	   <form method="post" action="store.do" id="licensing_form">
	     <div>
          <c:if test="${not update_success}">
            <textarea id="license_content" name="licenseContent"></textarea>
          </c:if>
         </div>
         <c:if test="${update_success}">
          <div id="update_success_message">
            <itera:message key="global.updatelicense.success" />
          </div>
         </c:if>
         <c:if test="${update_fail}">
          <div id="update_fail_message">
            <itera:message key="global.updatelicense.fail" />
          </div>
         </c:if>
	     <div>
           <c:if test="${not update_success}">
	         <input id="licensingButton" type="submit" class="btn btn-primary" name="licensing_button" value="<itera:message key="global.license.update" />" />
           </c:if>
	     </div>
	   </form>
     </div>
    </div>
</body>
</html>
