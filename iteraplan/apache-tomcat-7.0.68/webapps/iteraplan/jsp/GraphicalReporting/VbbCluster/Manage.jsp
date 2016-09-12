<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<c:set var="resultPostSelection" value="true" scope="request" />
<c:set var="functionalPermission" value="${userContext.perms.userHasFuncPermGraphReporting}" scope="request" />
<c:set var="permissionCreateReports" value="${userContext.perms.userHasFuncPermGraphReportingCreate}" scope="request" />
<c:set var="permissionSaveReports" value="${userContext.perms.userHasFuncPermGraphReportingFull}" scope="request" />

<c:set var="dialogStep" value="${memBean.graphicalOptions.dialogStep}" />

<spring:eval var="icLinksEnabledProp" expression="@applicationProperties.getProperty('ic.links.enabled')" />
<c:set var="icLinksEnabled"><c:out value="${icLinksEnabledProp}" /></c:set>

<tiles:insertTemplate template="/jsp/commonReporting/ErrorMessageBox.jsp" flush="true" />

<h1><itera:message key="graphicalExport.vbbClusterDiagram" />

	<c:if test="${icLinksEnabled == 'true'}">
		<a class="nclink btn" href="<c:url value="/client/#/ncd" />"><itera:message key="graphicalExport.vbbCluster.textForLinkToNewClient" /></a>
	</c:if>
</h1>

<c:choose>
	<c:when test="${functionalPermission == true}">
		<tiles:insertTemplate template="/jsp/commonReporting/ShowSavedQuery.jsp">
			<tiles:putAttribute name="selectedSavedQueryId" value="${memBean.graphicalOptions.savedQueryInfo.id}" />
			<tiles:putAttribute name="permissionCreateReports" value="${permissionCreateReports}" />
			<tiles:putAttribute name="permissionSaveReports" value="${permissionSaveReports}" />
			<tiles:putAttribute name="showBuildingBlockType" value="false" />
		</tiles:insertTemplate>
		<c:if test="${permissionCreateReports == 'true'}" >
			<tiles:insertTemplate template="Configuration.jsp" />
			<tiles:insertTemplate template="/jsp/GraphicalReporting/RequestButtons.jsp">
				<tiles:putAttribute name="permissionSaveReports" value="${permissionSaveReports}" />
				<tiles:putAttribute name="availableGraphicFormats" value="${memBean.graphicalOptions.availableGraphicFormats}" />
				<tiles:putAttribute name="exportFormatPath" value="graphicalOptions.selectedGraphicFormat" />
			</tiles:insertTemplate>
		</c:if>
	</c:when>
	<c:otherwise>
	 	<tiles:insertTemplate template="/jsp/common/AccessDenied.jsp" />
	</c:otherwise>
</c:choose>
