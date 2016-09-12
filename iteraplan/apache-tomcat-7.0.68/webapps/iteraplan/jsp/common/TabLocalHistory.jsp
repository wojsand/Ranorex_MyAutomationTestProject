<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ page import="de.iteratec.iteraplan.presentation.tags.tab.TabgroupTag" %>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<tilesx:useAttribute name="buildingBlockId" />
<tilesx:useAttribute name="buildingBlockType" />

<%-- ****************  GENERAL SETTINGS **************  --%>

<c:set var="contentSpanId" value="displayHistoryContent" />
<spring:eval var="defaultResultCount" expression="@applicationProperties.getProperty('searchresults.default.count')" />

<%-- ****************  JAVASCRIPT FUNCTIONS **************  --%>
<script type="text/javascript">

	var localHistory_globalHistoryHasNeverTriedToLoad = true;
	var localHistory_globalPageSize = ${defaultResultCount}; <%-- Default pageSize --%>

	function localHistory_constructUrl(revNumber, forward) {
    	return "<c:url value='/history/local.do?id=${buildingBlockId}&buildingBlockType=${buildingBlockType}&startRev='/>" + revNumber + "&pageSize=" + localHistory_globalPageSize + "&forward=" + forward;
	}

	<%-- Called when user picks something in the drop down box --%>
	function localHistory_changePageSize(revNumber) {

		localHistory_globalPageSize = $("#resultsPerPage").val();
		localHistory_loadForward(revNumber);
	}
	
	function localHistory_loadForward(revNumber) {
		localHistory_load(revNumber, true);
	}

	function localHistory_loadBackward(revNumber) {
		localHistory_load(revNumber, false);
	}

	function localHistory_load(revNum, forward) {
		var urlWithParameters = localHistory_constructUrl(revNum, forward);
		var xhrArgs = {
			url : urlWithParameters,
			dataType : "text",
			cache: false,
			complete : function(jqXHR) {
		
				switch (jqXHR.status) {
		
				case 200:
	            	<%-- Success --%>
	            	$("#LocalHistoryModul").removeClass('tabHistoryNotLoaded');
            		$("#${contentSpanId}").html(jqXHR.responseText);	
	            	break;
	            
				case 204:
				case 1223:
				default:
					<%-- Failure --%>
					$("#${contentSpanId}").html('Failed to load <b>History</b> content');
				}
			}
		};
		
		//Call the asynchronous xhrGet with above defined params
		var deferred = $.ajax(xhrArgs);
	}

	function localHistory_checkIfHistoryTabSelectedAndLoadHistory() {
		
		var historyTab = $('#<%= TabgroupTag.TABPREFIX %>TabLocalHistory');
		
		historyTab.click(localHistory_checkIfHistoryTabSelectedAndLoadHistory); //check when tabs are switched between

		<%-- If the History tab is selected --%>
		if (historyTab.hasClass("active")){
			if (localHistory_globalHistoryHasNeverTriedToLoad) {
				localHistory_globalHistoryHasNeverTriedToLoad = false;				
				// History tab is selected for the first time: trigger load!
				localHistory_loadForward(-1);
			}
		} 
	}

	$(document).ready(localHistory_checkIfHistoryTabSelectedAndLoadHistory); //check when element page loads
</script>

<%-- ****************  HTML ELEMENTS **************  --%>
<div id="LocalHistoryModul" class="row-fluid module tabHistoryNotLoaded">
	<div class="module-heading">
		<%-- display the label --%>
		<itera:message key="global.history" />
	</div>
	<div class="row-fluid">
		<div class="module-body">
			<div class="row-fluid">
				<span id="${contentSpanId}">Loading...</span>
			</div>
		</div>
	</div>
</div>
