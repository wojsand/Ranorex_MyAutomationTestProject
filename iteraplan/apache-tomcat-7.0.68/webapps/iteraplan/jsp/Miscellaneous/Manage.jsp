<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
  
<c:set var="functionalPermission" value="${userContext.perms.userHasFuncPermAuditLog}" scope="request" />

<c:choose>
	<c:when test="${functionalPermission == true}">
		<tiles:insertTemplate template="/jsp/Miscellaneous/DownloadAuditLogfile.jsp" >
		  <tiles:putAttribute name="title">
		    <itera:message key="global.madeby" /> - <itera:message key="global.applicationname" />
		  </tiles:putAttribute>
		</tiles:insertTemplate>
	</c:when>	
	<c:otherwise>
		<tiles:insertTemplate template="/jsp/Miscellaneous/AccessDenied.jsp">
	  	  <tiles:putAttribute name="title">
	        <itera:message key="global.madeby" /> - <itera:message key="global.applicationname" />
	      </tiles:putAttribute>
	   </tiles:insertTemplate>
	</c:otherwise>	
</c:choose>
