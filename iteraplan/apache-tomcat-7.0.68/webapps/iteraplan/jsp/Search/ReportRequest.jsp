<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<script type="text/javascript">
	<%-- adds the shortcut keys to quickly perform actions such as going back, sending a query or generating a graphical report  --%>
	addMiscShortcuts();
	
	<%-- adds the shortcut keys to quickly perform then actions such as 'search' and 'new', and to quickly navigate through search results  --%>
	addSearchShortcuts();
</script>         

<c:set var="searchHintEscaped">
	<itera:message key="manageSearch.hint" var="searchHint"/>
	${searchHint}
</c:set>

<%-- Displays the search field and the buttons of the search --%>
<div id="searchForm">
	<c:set var="functionalPermission" value="${userContext.perms.userHasFuncPermSearch}" scope="request" />
	<c:choose>
	<c:when test="${functionalPermission == true}">
		<fieldset>
			<legend class="searchheading"><itera:message key="manageSearch.heading"/></legend>	
		</fieldset>
		<div id="ReportRequestModul" class="row-fluid module">
			<div class="row-fluid">
				<div class="module-body">
					<div class="row-fluid">
						<label for="searchQuery"><itera:message key="search.helptext"/></label>            	
						<div class="input">
							<i class="icon-search"></i>
							<form:input id="searchQuery" path="searchField" maxlength="40" size="100" />				
							<form:errors path="searchField" cssClass="error" />				
							<script type="text/javascript">
								$('#searchQuery').popover({
									trigger : 'focus',
									placement : 'right',
									content : "${searchHintEscaped}"
								});
								
								// Add additional support: Enter-Key submits the form by clicking the Search-Button
								$('#searchQuery').keypress(function(evt){ onEnterClickButton('sendSearchquery', evt); });
							</script>	
						</div>
						<br />
						<div class="btn-toolbar">
							<a href="#" rel="tooltip" data-original-title="Hotkey: <img/> <itera:message key="search.sendQuery.tooltip"/>">
					   			<input type="submit" id="sendSearchquery" value="<itera:message key="button.sendSearchquery" />" onclick="createHiddenField('requestType', 'search');" class="btn btn-primary" />
					   		</a>
					   		<a href="#" rel="tooltip" data-original-title="Hotkey: <img/> <itera:message key="button.resetReport.tooltip"/>">
					    		<input type="submit" id="buttonResetReport" value="<itera:message key="button.reset" />" onclick="createHiddenField('requestType', 'reset');" class="btn"/>
					    	</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	</c:when>
	<c:otherwise>
	  <tiles:insertTemplate template="/jsp/common/AccessDenied.jsp" />
	</c:otherwise>
	</c:choose>
</div>
