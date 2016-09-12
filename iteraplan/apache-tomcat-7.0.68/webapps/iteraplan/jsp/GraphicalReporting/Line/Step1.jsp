<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<c:set var="chosenContentType">
  <itera:message>
    <itera:write name="memBean" property="graphicalOptions.selectedBbType" escapeXml="false" />
  </itera:message>
</c:set>



<tiles:insertTemplate template="/jsp/commonReporting/ShowSavedQuery.jsp">
	<tiles:putAttribute name="selectedSavedQueryId" value="${memBean.graphicalOptions.savedQueryInfo.id}" />
	<tiles:putAttribute name="permissionCreateReports" value="${permissionCreateReports}" />
	<tiles:putAttribute name="permissionSaveReports" value="${permissionSaveReports}" />
	<tiles:putAttribute name="showBuildingBlockType" value="true" />
</tiles:insertTemplate>

<c:if test="${permissionCreateReports == 'true'}" >
	<p class="aligned"><itera:message key="graphicalExport.line.helpContentType"/></p>

	<form:select path="graphicalOptions.selectedBbType" onchange="flowAction('selectLineType');">
	
	  <itera:define id="availableTypes_array" name="memBean" property="graphicalOptions.availableBbTypes" />
	  <c:forEach items="${availableTypes_array}" var="available" varStatus="countStatus">
	    <form:option value="${available}">
	      <itera:message key="${available}" />
	    </form:option>
	  </c:forEach>
	</form:select>
	
	<hr />
	
	<p class="aligned">
		<itera:message key="graphicalExport.line.helpStep1">
			<itera:param>${chosenContentType}</itera:param>
		</itera:message>
	</p>
	
	<tiles:insertTemplate template="/jsp/GraphicalReporting/GraphicalReportingQueryForm.jsp" flush="true">
		<tiles:putAttribute name="hasPermission" value="${not empty availableTypes_array}"/>
		<tiles:putAttribute name="flowAction" value="goToLineExportStep2"/>
	</tiles:insertTemplate>
</c:if>
