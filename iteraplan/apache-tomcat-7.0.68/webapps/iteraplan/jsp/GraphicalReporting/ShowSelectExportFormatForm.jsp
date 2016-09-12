<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<tilesx:useAttribute name="availableGraphicFormats" />
<tilesx:useAttribute name="exportFormatPath" />

<itera:message key="graphicalExport.resultFormat" />: 
<form:select path="${exportFormatPath}" cssStyle="width:200px;" onchange="${refreshReportJavaScript}">
	<c:forEach var="format" items="${availableGraphicFormats}">
		<c:if test="${format.visible}">
			<form:option value="${format.presentationKey}">
				<itera:message key="${format.presentationKey}" />
			</form:option>
		</c:if>
	</c:forEach>
</form:select>
