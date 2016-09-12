<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<tilesx:useAttribute name="attributeId" />

<c:set var="linkId" value="show_timeseries_${attributeId}" />

<c:if test="${guiContext.timeseriesEnabled && not empty memBean.timeseriesComponentModels[attributeId]}">
	<a id="${linkId}" href="#timeseriesDialog" role="button" data-toggle="modal" onclick="initTimeseriesDialog(${attributeId});"
		title="<itera:message key="manageAttributes.timeseries" />"> <i class="icon-list-alt"></i>
	</a>
	<form:errors path="timeseriesComponentModels[${attributeId}].*" cssClass="errorBlock" htmlEscape="false" />
</c:if>
