<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>

<tilesx:useAttribute name="atPartPath" />
<tilesx:useAttribute name="writePermissionATG" />
<tilesx:useAttribute name="extended_html_id" />
<tilesx:useAttribute name="overviewMode" ignore="true" />
<tilesx:useAttribute name="valueOnly" ignore="true" />

<itera:define id="atPart" name="memBean" property="${atPartPath}" />

<c:if test="${atPart.attributeType.mandatory == true}">
	<c:set var="mandatoryClass" value=' mandatoryAttribute' scope="page" />
</c:if>

<c:if test="${overviewMode == null}">
  <c:set var="overviewMode" value="false" />
</c:if>
<c:set var="editable" value="${atPart.componentMode != 'READ' && writePermissionATG && overviewMode == false}" />

<c:if test="${empty valueOnly}">
	<div class="control-group">
		<label class="control-label <c:out value="${mandatoryClass}" default="" escapeXml="false"/>" for="${extended_html_id}_select">
			<tiles:insertTemplate template="/jsp/common/attributes/tiles/BasicAtData.jsp" flush="true">
				<tiles:putAttribute name="atPartPath" value="${atPartPath}" />
				<tiles:putAttribute name="extended_html_id" value="${extended_html_id}" />
				<tiles:putAttribute name="showDetailsInEditMode" value="${editable}" />
			</tiles:insertTemplate>
		</label>
		<div class="controls">
</c:if>
		<tiles:insertTemplate template="/jsp/Timeseries/tiles/TimeseriesDetailsDialogLink.jsp">
			<tiles:putAttribute name="attributeId" value="${atPart.attributeType.id}" />
		</tiles:insertTemplate>

		<c:choose>
			<c:when test="${editable}">
				<tiles:insertTemplate template="/jsp/common/attributes/tiles/AddRemoveEnumAVs-Single.jsp" flush="true">
					<tiles:putAttribute name="atPartPath" value="${atPartPath}" />
					<tiles:putAttribute name="extended_html_id" value="${extended_html_id}" />
				</tiles:insertTemplate>
			</c:when>
			<c:otherwise>
				<tiles:insertTemplate template="/jsp/common/attributes/tiles/ConnectedEnumAVs-Single.jsp" flush="true">
					<tiles:putAttribute name="atPartPath" value="${atPartPath}" />
					<tiles:putAttribute name="extended_html_id" value="${extended_html_id}" />
				</tiles:insertTemplate>
			</c:otherwise>
		</c:choose>
<c:if test="${empty valueOnly}">
		</div>
	</div>
</c:if>
