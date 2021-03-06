<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>

<tilesx:useAttribute name="hasPermission" />
<tilesx:useAttribute name="flowAction" />

<tiles:insertTemplate template="/jsp/commonReporting/StandardQueryForm.jsp" />

<div class="ReportingRequestButtons">
<c:choose>
	<c:when test="${hasPermission}">
		<input type="button" id="sendQueryButton" class="link btn"
			value="<itera:message key="button.sendQuery" />"
			onclick="flowAction('requestReport');" />
		<input type="button" class="link btn btn-primary"
			value="<itera:message key="global.requestAndConfirmSelection" />"
			onclick="flowAction('requestAndConfirmReport');" />
	</c:when>
	<c:otherwise>
		<div class="alert alert-error">
		<a data-dismiss="alert" class="close" onclick="clearErrors();">×</a> 
		<span><itera:message key="errors.noBbPermissions" />
		</span></div>
		<a href="#" rel="tooltip" data-original-title="Hotkey: <img/> <itera:message key="button.sendQuery.tooltip"/>">
			<input type="button" disabled class="link btn"
				value="<itera:message key="button.sendQuery" />"
				onclick="flowAction('requestReport');" />
		</a>
		<input type="button" disabled class="link btn btn-primary"
			value="<itera:message key="global.requestAndConfirmSelection" />"
			onclick="flowAction('requestAndConfirmReport');" />
	</c:otherwise>
</c:choose>
<c:if test="${not empty memBean.results}">
	<a href="#" rel="tooltip" data-original-title="Hotkey: <img/> <itera:message key="button.confirmSelection.tooltip"/>">
		<input type="button" class="link btn"
			value="<itera:message key="global.confirmSelection" />"
			id="buttonConfirmSelection" class="link"
			onclick="resetScrollCoordinates(); flowAction('<c:out value="${flowAction}"></c:out>');" />
	</a>
</c:if>
</div>

<tiles:insertTemplate template="/jsp/commonReporting/resultPages/GeneralResultPage.jsp" flush="true" />
