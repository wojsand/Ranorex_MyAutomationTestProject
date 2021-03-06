<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>

<c:set var="functionalPermission">
	<c:set var="project" value="project.singular" />
   <itera:write name="userContext"
		property="perms.userHasBbTypeFunctionalPermission(${project})" escapeXml="false" />
</c:set>

<c:choose>
<c:when test="${functionalPermission == true}">
<c:set var="createPermissionType">
	<itera:write name="userContext"
		property="perms.userHasBbTypeCreatePermission(${project})" escapeXml="false" />
</c:set>
<tiles:insertTemplate template="/jsp/common/SearchFormAndResults.jsp">
  <tiles:putAttribute name="entitySearchKey" value="project.search.heading"/>
  <tiles:putAttribute name="entityNamePluralKey" value="project.plural"/>
  <tiles:putAttribute name="searchCriteria" value="${dialogMemory.criteria}" />
  <tiles:putAttribute name="resultColumnDefinitions" value="${dialogMemory.tableState.visibleColumnDefinitions}" />
  <tiles:putAttribute name="createEnabled" value="${createPermissionType}" /> 
  <tiles:putAttribute name="subscribable_type" value="true" />
  <tiles:putAttribute name="bbTypeHtmlId" value="project" />
  <tiles:putAttribute name="addManageShortcuts" value="true" />
</tiles:insertTemplate>
</c:when>
<c:otherwise>
  <tiles:insertTemplate template="/jsp/common/AccessDenied.jsp" />
</c:otherwise>
</c:choose>
