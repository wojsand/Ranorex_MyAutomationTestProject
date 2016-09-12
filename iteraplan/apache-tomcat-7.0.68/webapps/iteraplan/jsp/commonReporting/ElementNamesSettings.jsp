<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>


<label class="checkbox">
	<form:checkbox path="graphicalOptions.useNamesLegend" id="useNamesLegend" />
	<itera:message key="graphicalExport.helpUseNamesLegend" />			
</label>

<%-- do not display for masterplan --%>
<c:if test="${memBean.reportType.value ne 'reports_export_graphical_Masterplan'}">
    <label class="checkbox">
		<form:checkbox path="graphicalOptions.useHierachicalNames" id="useHierachicalNames"/>
		<itera:message key="graphicalExport.helpUseHierachicalNames" />
	</label>
</c:if>
