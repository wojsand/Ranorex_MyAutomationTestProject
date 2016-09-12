<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>

<c:if test="${(functionalPermission == true) and (lastmodificationLogging == true)}">
    <br />
	<c:if test="${not empty memBean.componentModel}">
	    <c:set var="link">
          <itera:linkToElement name="memBean" property="componentModel.lastModificationUserByLoginName" type="html" />
        </c:set>
	   	
		<c:if test="${empty link}">
		  <c:set var="link" value="#"/>
		</c:if>

	   	<itera:message key="global.lastmodification" />: 
	   	<a href="${link}" ><c:out value="${memBean.componentModel.lastModificationUser}" /></a>
	   	<itera:message key="DATE_FORMAT_LONG" var="dateFormat"/>
	   	<fmt:formatDate value="${memBean.componentModel.lastModificationTime}" pattern="${dateFormat}" />
	</c:if>
</c:if>
