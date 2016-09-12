<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>

<tilesx:useAttribute name="permissionSaveReports" />
<tilesx:useAttribute name="availableGraphicFormats" />
<tilesx:useAttribute name="exportFormatPath" />

<div class="ReportingRequestButtons">
	<tiles:insertTemplate template="/jsp/GraphicalReporting/ShowSelectExportFormatForm.jsp">
		<tiles:putAttribute name="availableGraphicFormats" value="${availableGraphicFormats}" />
		<tiles:putAttribute name="exportFormatPath" value="${exportFormatPath}" />
	</tiles:insertTemplate>
	&nbsp;
	<button id="generateExport" rel="tooltip" data-original-title="Hotkey: <img/> <itera:message key='button.generate.tooltip'/>" class="link btn btn-primary button-listener" href="#" onclick="flowAction('triggerDownloadEvent');">
		<i class="icon-download-alt icon-white"></i>
		<itera:message key="graphicalExport.generate" />
	</button>
	&nbsp;
	<tiles:insertTemplate template="/jsp/commonReporting/ShowSaveQuery.jsp">
		<tiles:putAttribute name="xmlSaveAsQueryName" value="xmlSaveAsQueryName"/>
		<tiles:putAttribute name="xmlSaveAsQueryDescription" value="xmlSaveAsQueryDescription"/>
		<tiles:putAttribute name="xmlQueryName" value="xmlQueryName" />
		<tiles:putAttribute name="permissionSaveReports" value="${permissionSaveReports}" />
	</tiles:insertTemplate>
</div>
