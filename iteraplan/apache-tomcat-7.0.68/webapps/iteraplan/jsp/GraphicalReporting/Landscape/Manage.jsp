<%@ page contentType="text/html; charset=UTF-8"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<c:set var="functionalPermission">
	<itera:write name="userContext"
		property="perms.userHasFuncPermGraphReporting" escapeXml="false" />
</c:set>

<c:set var="permissionCreateReports">
	<itera:write name="userContext"
		property="perms.userHasFuncPermGraphReportingCreate" escapeXml="false" />
</c:set>

<c:set var="permissionSaveReports">
	<itera:write name="userContext"
		property="perms.userHasFuncPermGraphReportingFull" escapeXml="false" />
</c:set>

<c:if test="${memBean.reportUpdated}">
	<div class="alert alert-error">
		<a data-dismiss="alert" class="close" onclick="clearErrors();">×</a> <span><itera:message
				key="message.report.attributeNotFound" /></span>
	</div>
</c:if>

<spring:eval var="icLinksEnabledProp" expression="@applicationProperties.getProperty('ic.links.enabled')" />
<c:set var="icLinksEnabled"><c:out value="${icLinksEnabledProp}" /></c:set>

<tiles:insertTemplate
	template="/jsp/commonReporting/ErrorMessageBox.jsp" flush="true" />

<c:choose>
	<c:when test="${functionalPermission == true}">

		<h1>
			<itera:message key="graphicalExport.landscapeDiagram" />

			<c:if test="${icLinksEnabled == 'true'}">
			<a class="nclink btn" href="<c:url value="/client/#/lsd" />"><itera:message
					key="graphicalExport.landscape.textForLinkToNewClient" /></a>
			</c:if>		
		</h1>


		<tiles:insertTemplate
			template="/jsp/commonReporting/ShowSavedQuery.jsp">
			<tiles:putAttribute name="selectedSavedQueryId"
				value="${memBean.graphicalOptions.savedQueryInfo.id}" />
			<tiles:putAttribute name="permissionCreateReports"
				value="${permissionCreateReports}" />
			<tiles:putAttribute name="permissionSaveReports"
				value="${permissionSaveReports}" />
			<tiles:putAttribute name="showBuildingBlockType" value="true" />
		</tiles:insertTemplate>

		<c:if test="${permissionCreateReports == 'true'}">
			<div class="row-fluid">
				<div class="span4" style="min-width: 300px;">
					<c:choose>
						<c:when test="${memBean.graphicalOptions.dialogStep > 1}">
							<img src="<c:url value="/images/landscapeDiagram-2.gif" />"
								alt="landscapeDiagram" />
						</c:when>
						<c:otherwise>
							<img src="<c:url value="/images/landscapeDiagram-1.gif"/>"
								alt="landscapeDiagram" />
						</c:otherwise>
					</c:choose>
				</div>
				<div class="span8">
					<c:set var="columnSelectedStyle" value="borderBlack" />
					<c:if test="${memBean.graphicalOptions.dialogStep > 1}">
						<tiles:insertTemplate
							template="/jsp/GraphicalReporting/Landscape/SelectColumn.jsp" />
					</c:if>
				</div>
			</div>
			<div class="row-fluid">
				<div class="span4" style="min-width: 300px;">
					<c:set var="rowSelectedStyle" value="borderBlack" />
					<c:if test="${memBean.graphicalOptions.dialogStep > 1}">
						<tiles:insertTemplate
							template="/jsp/GraphicalReporting/Landscape/SelectRow.jsp" />
					</c:if>
					&nbsp;
				</div>
				<div class="span8">
					<c:set var="contentSelectedStyle" value="borderBlack" />
					<tiles:insertTemplate
						template="/jsp/GraphicalReporting/Landscape/SelectContent.jsp" />
				</div>
			</div>

			<c:if test="${memBean.graphicalOptions.dialogStep > 1}">
				<tiles:insertTemplate
					template="/jsp/GraphicalReporting/Landscape/AdvancedSettings.jsp" />

				<tiles:insertTemplate
					template="/jsp/GraphicalReporting/RequestButtons.jsp">
					<tiles:putAttribute name="permissionSaveReports"
						value="${permissionSaveReports}" />
					<tiles:putAttribute name="availableGraphicFormats"
						value="${memBean.graphicalOptions.availableGraphicFormats}" />
					<tiles:putAttribute name="exportFormatPath"
						value="graphicalOptions.selectedGraphicFormat" />
				</tiles:insertTemplate>
			</c:if>
		</c:if>
	</c:when>
	<c:otherwise>
		<tiles:insertTemplate template="/jsp/common/AccessDenied.jsp" />
	</c:otherwise>
</c:choose>
