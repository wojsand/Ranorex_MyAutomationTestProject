<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>


<tiles:insertTemplate template="/jsp/commonReporting/ShowSavedQuery.jsp">
	<tiles:putAttribute name="selectedSavedQueryId" value="${memBean.graphicalOptions.savedQueryInfo.id}" />
	<tiles:putAttribute name="permissionCreateReports" value="${permissionCreateReports}" />
	<tiles:putAttribute name="permissionSaveReports" value="${permissionSaveReports}" />
	<tiles:putAttribute name="showBuildingBlockType" value="true" />
</tiles:insertTemplate>


<c:if test="${permissionCreateReports == 'true'}">
	<p class="aligned"><itera:message key="graphicalExport.cluster.helpContentModus" /></p>
	<form:select path="graphicalOptions.selectedClusterMode" onchange="flowAction('selectClusterModus');">
		<c:forEach var="available" items="${memBean.graphicalOptions.availableClusterModes}">
			<form:option value="${available}">
				<itera:message key="${available}" />
			</form:option>
		</c:forEach>
	</form:select>
	
	<hr />
	
	<c:choose>
		<c:when test="${(memBean.graphicalOptions.selectedClusterMode == 'graphicalExport.cluster.mode.attributes')}">
			<tiles:insertTemplate template="SelectAttributeValuesForm.jsp">
				<tiles:putAttribute name="flowAction" value="goToClusterExportStep2" />
			</tiles:insertTemplate>
		</c:when>
		<c:otherwise>
			<p class="aligned"><itera:message key="graphicalExport.cluster.helpContentType" /></p>
			
			<form:select path="graphicalOptions.selectedBbType" onchange="flowAction('selectClusterType');">
				<c:forEach var="available" items="${memBean.graphicalOptions.availableBbTypes}">
					<form:option value="${available}"><itera:message key="${available}" /></form:option>
				</c:forEach>
			</form:select>
			
			<hr />
			
			<itera:message var="chosenContentType" key="${memBean.graphicalOptions.selectedBbType}"/>
			<p class="aligned">
				<itera:message key="graphicalExport.cluster.helpStep1"> 
					<itera:param value="${chosenContentType}" />
				</itera:message>
			</p>
			
			<tiles:insertTemplate template="/jsp/GraphicalReporting/GraphicalReportingQueryForm.jsp" flush="true">
				<tiles:putAttribute name="hasPermission" value="${not empty memBean.graphicalOptions.availableBbTypes}"/>
				<tiles:putAttribute name="flowAction" value="goToClusterExportStep2"/>
			</tiles:insertTemplate>
		</c:otherwise>
	</c:choose>
</c:if>
