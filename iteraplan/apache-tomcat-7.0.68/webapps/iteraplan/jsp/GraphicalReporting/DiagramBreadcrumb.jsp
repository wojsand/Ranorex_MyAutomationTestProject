<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>

<%-- The message keys for the bread crumbs --%>
<tilesx:useAttribute name="state_keys" />

<%-- The events for the bread crumbs --%>
<tilesx:useAttribute name="state_events" />

<%-- The index of the currently active bread crumb starting from 0 --%>
<tilesx:useAttribute name="current_state_index" />

<%-- adds the shortcut keys to quickly perform actions such as going back, sending a query or generating a graphical report  --%>
<script type="text/javascript">
   addMiscShortcuts();
</script>

<div class="ReportingRequestButtons">
  	<c:if test="${current_state_index > 0}">
  		<a rel="tooltip" data-original-title="Hotkey: <img/> <itera:message key='button.back.tooltip'/>" id="backButton" class="link btn" href="#" onclick="flowAction('${state_events[current_state_index-1]}');" >
  			<i class="icon-arrow-left"></i>
			<itera:message key="global.back" />
		</a>
	</c:if>
	<c:forEach items="${state_keys}" var="key" varStatus="status">
		<c:if test="${status.count != 1}">
			<i class="icon-arrow-right"></i>
		</c:if>
		<c:set var="countIndex" value="${status.count-1}"/>
		<c:choose>
			<c:when test="${countIndex <= current_state_index-1 || countIndex >= current_state_index+1}">
				<span class="breadCrumbInactive">
					<itera:message key="${key}" />
				</span>
			</c:when>
			<c:when test="${countIndex == current_state_index}">
				<b>
					<itera:message key="${key}" />
				</b>
			</c:when>
		</c:choose>
	</c:forEach>
</div>
<br/>
