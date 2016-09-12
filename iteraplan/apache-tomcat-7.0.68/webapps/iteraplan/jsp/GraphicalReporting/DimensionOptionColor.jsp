<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<tilesx:useAttribute name="colorOptions" />
<tilesx:useAttribute name="colorOptionsPath" />
<tilesx:useAttribute name="tableClass" ignore="true" />
<tilesx:useAttribute name="showOnlyTheseValues" ignore="true" />
<tilesx:useAttribute name="showUseValueRange" ignore="true" />
<tilesx:useAttribute name="refresh_report_event" ignore="true" />
<%-- If set to true: this jsp is displaying a minimal version without the table markup --%>
<tilesx:useAttribute name="minimal" ignore="true" />

<c:set var="refreshReportJavaScript" value="" />
<c:if test="${not empty refresh_report_event}">
  <c:set var="refreshReportJavaScript"
        value="flowAction('${refresh_report_event}');" />
</c:if>

<c:set var="attributeValues" value="${colorOptions.attributeValues}" />
<c:if test="${empty showOnlyTheseValues}">
  <c:set var="showOnlyTheseValues" value="${attributeValues}" />
</c:if>
<c:set var="valueToColorMap" value="${colorOptions.valueToColorMap}" />
<c:set var="availableColors" value="${colorOptions.availableColors}" />

	<c:forEach var="mapping" items="${valueToColorMap}" varStatus="loopStatus">
		<c:set var="isShown" value="false" />
		<c:forEach var="shown" items="${showOnlyTheseValues}">
			<c:if test="${shown == mapping.key}">
				<c:set var="isShown" value="true" />
			</c:if>
		</c:forEach>
		<c:if test="${isShown}">
			<div class="control-group">
				<c:if test="${empty minimal}" >
					<label class="control-label">&nbsp;</label>
				</c:if>
				<div class="controls">
				<c:choose>
					<c:when test="${not colorOptions.useColorRange}">
						<c:set var="color" value="${mapping.value.color}" />
						<c:if test="${empty color}">
							<c:set var="color" value="${availableColors[0]}" />
						</c:if>
						<tiles:insertTemplate template="/jsp/common/ColorSelectTile.jsp">
							<tiles:putAttribute name="colorPath" value="${colorOptionsPath}.valueToColorMap['${mapping.key}'].color"/>
							<tiles:putAttribute name="currentColor" value="${color}"/>
							<tiles:putAttribute name="availableColors" value="${availableColors}"/>
						</tiles:insertTemplate>
					</c:when>
					<c:otherwise>
					    <tiles:insertTemplate template="/jsp/common/ColorPicker.jsp">
					      <tiles:putAttribute name="id" value="${colorOptionsPath}_${mapping.value.color}"/>
					      <tiles:putAttribute name="path" value="${colorOptionsPath}.valueToColorMap['${mapping.key}'].color"/>
					    </tiles:insertTemplate>
					</c:otherwise>
				</c:choose>
				<span class="help-inline">
					<c:choose>
						<c:when test="${mapping.value.name == 'graphicalReport.unspecified' || mapping.value.name == 'graphicalReport.specified' || 
										mapping.value.name == colorOptions.lowerBoundMessageKey || mapping.value.name == colorOptions.upperBoundMessageKey}">
							<itera:message key="${mapping.value.name}" />
						</c:when>
						<c:otherwise>
							<c:out value="${mapping.value.name}" />
				    	</c:otherwise>
					</c:choose>
				</span>
				</div>
			</div>
		</c:if>
	</c:forEach>
	  
	<c:if test="${not empty showUseValueRange and showUseValueRange and colorOptions.colorRangeAvailable}">
	  <div class="control-group">
	  	<c:if test="${empty minimal}" >
		  <label class="control-label">&nbsp;</label>
		</c:if>
		  <div class="controls">
			<form:checkbox id="${colorOptionsPath}.useColorRange" path="${colorOptionsPath}.useColorRange" onclick="${refreshReportJavaScript}" />
			<itera:message key="graphicalExport.configuration.useColorRange"/>
		  </div>
	  </div>
	</c:if>
