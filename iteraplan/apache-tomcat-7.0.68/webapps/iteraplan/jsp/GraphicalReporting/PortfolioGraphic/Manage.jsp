<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<c:set var="resultPostSelection" value="true" scope="request" />
<c:set var="functionalPermission" value="${userContext.perms.userHasFuncPermGraphReporting}" scope="request" />
<c:set var="permissionCreateReports" value="${userContext.perms.userHasFuncPermGraphReportingCreate}" scope="request" />
<c:set var="permissionSaveReports" value="${userContext.perms.userHasFuncPermGraphReportingFull}" scope="request" />

<c:set var="dialogStep" value="${memBean.graphicalOptions.dialogStep}" />

<c:choose>
<c:when test="${functionalPermission == true}">

	<%-- adds the shortcut keys to quickly perform actions such as going back, 
	     sending a query or generating a graphical report --%>
	<script type="text/javascript">
		addMiscShortcuts();
	</script>

	<tiles:insertTemplate template="/jsp/commonReporting/ErrorMessageBox.jsp" flush="true" />

	<tiles:insertTemplate template="/jsp/GraphicalReporting/DiagramBreadcrumb.jsp" flush="true">
		<tiles:putListAttribute name="state_keys">
			<tiles:addAttribute value="graphicalExport.portfolio.breadcrumbs.chooseElements"/>
			<tiles:addAttribute value="graphicalExport.portfolio.breadcrumbs.configuration"/>
		</tiles:putListAttribute>
		<tiles:putListAttribute name="state_events">
			<tiles:addAttribute value="goToPortfolioExportStep1"/>
			<tiles:addAttribute value="goToPortfolioExportStep2"/>
		</tiles:putListAttribute>
		<tiles:putAttribute name="current_state_index" value="${dialogStep - 1}" />
	</tiles:insertTemplate>

	<h1><itera:message key="graphicalExport.portfolioDiagram"/></h1>

	<c:choose>
	<c:when test="${dialogStep == 1}">
		<tiles:insertTemplate template="Step1.jsp" />
	</c:when>
	<c:when test="${(dialogStep == 2) && (permissionCreateReports == true)}">
    	<tiles:insertTemplate template="Step2.jsp" />
	</c:when>
	<c:otherwise>
  		<tiles:insertTemplate template="/jsp/common/AccessDenied.jsp" />
  	</c:otherwise>
	</c:choose>
</c:when>
<c:otherwise>
  	<tiles:insertTemplate template="/jsp/common/AccessDenied.jsp" />
</c:otherwise>
</c:choose>
