<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<c:set var="functionalPermission" value="${userContext.perms.userHasFuncPermAttributes}" scope="request" />

<c:choose>
<c:when test="${functionalPermission == true}">
<tiles:insertTemplate template="/jsp/common/SearchFormAndResults.jsp">
	<tiles:putAttribute name="entitySearchKey" value="attribute.search.heading"/>
	<tiles:putAttribute name="entityNamePluralKey" value="global.attributes"/>
	<tiles:putAttribute name="searchCriteria" value="${dialogMemory.criteria}" />
	<tiles:putAttribute name="resultColumnDefinitions" value="${dialogMemory.tableState.visibleColumnDefinitions}" />
</tiles:insertTemplate>
</c:when>
<c:otherwise>
  <tiles:insertTemplate template="/jsp/common/AccessDenied.jsp" />
</c:otherwise>
</c:choose>
