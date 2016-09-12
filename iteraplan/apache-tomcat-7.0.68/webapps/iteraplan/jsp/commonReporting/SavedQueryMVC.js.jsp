<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://jawr.net/tags" prefix="jwr" %>

<tilesx:useAttribute name="skipLoadRequestConfirmation" ignore="true" />

<%-- 
submit has to be implemented here explicitly as the normal submitLink(..) method does not work
for diagram generation
--%>
<script type="text/javascript">
/* <![CDATA[ */
	function loadSavedQuery(queryName, queryId, functionName) {
		<c:choose>
			<c:when test="${skipLoadRequestConfirmation}">
				createHiddenField('savedQueryId', queryId);
				createHiddenField('action', 'loadQuery');
				window.document.forms[0].submit();
			</c:when>
			<c:otherwise>
			var escapedQueryName = $('<div/>').text(queryName).html(); 
			showConfirmDialog("<itera:message key='graphicalReport.loadSavedQuery.tooltip'/>", 
						"<itera:message key='graphicalReport.executeSavedQuery'><itera:param>" + escapedQueryName +"</itera:param></itera:message>",
						function(){
							createHiddenField('savedQueryId', queryId);
							createHiddenField('action', 'loadQuery');
							window.document.forms[0].submit();
						});
			</c:otherwise>
		</c:choose>
	}

	function deleteSavedQuery(queryName, queryId) {
		var escapedQueryName = $('<div/>').text(queryName).html(); 
		showConfirmDialog("<itera:message key='global.confirmDelete'/>", 
				"<itera:message key='graphicalReport.executeRemoveQuery'><itera:param>" + escapedQueryName +"</itera:param></itera:message>",
				function(){
					createHiddenField('deleteQueryId', queryId);
					createHiddenField('action', "deleteQuery");
					window.document.forms[0].submit();
				});
	}
	
	<c:if test="${massUpdateMode == true}">
	function runSavedQuery(queryId, functionName) {
		if (true) {
			createHiddenField('savedQueryId', queryId);
			createHiddenField('action', 'runQuery');
			window.document.forms[0].submit();
		}

	}
	</c:if>
/* ]]> */
</script>
