<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="alert alert-info">
	<h4>
		<itera:message key="global.excel.import.partial.label" />
	</h4>

	<itera:message key="global.excel.import.partial.type">
		<itera:param value="${memBean.filteredTypeName}"></itera:param>
		<itera:param value="${memBean.filteredTypePersistentName}"></itera:param>
	</itera:message>
	<br />

	<c:if test="${not empty memBean.extendedFilter}">
		<itera:message key="global.excel.import.partial.filter">
			<itera:param value="${memBean.extendedFilter}"></itera:param>
		</itera:message>
		<br />
	</c:if>
	
	<c:if test="${memBean.importMetamodel && memBean.partialImport}">
		<itera:message key="global.excel.import.partial.noMMChanges" />
	</c:if>
</div>
