<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<%--
		@UsedFor 	Shows a query Form for selecting a IS status.
		@UsedFrom	jsp\commonReporting\DynamicForm.jsp
		@Note		
 --%>

<tilesx:useAttribute name="currentReportFormId" />

<itera:message key="global.type_of_status" />:
&nbsp;
<c:forEach var="status" items="${memBean.queryResult.queryForms[currentReportFormId].queryUserInput.statusQueryData.statusMap}">
	<c:set var="statusString" value="${status.key}" />
	<c:set var="id_checkbox" value="checkbox_statusQuery_${currentReportFormId}_${statusString}" />
	<c:set var="id_field" value="field_statusQuery_${currentReportFormId}_${statusString}" />
	
	<label class="checkbox inline">
		<form:checkbox id="${id_checkbox}" path="queryResult.queryForms[${currentReportFormId}].queryUserInput.statusQueryData.selectedStatus" 
			value="${statusString}" />
		<itera:message key="${statusString.value}" />
	</label>
</c:forEach>
