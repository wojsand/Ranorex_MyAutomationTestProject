<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>

<tilesx:useAttribute name="permissionSaveReports" />

<c:if test="${permissionSaveReports == true}">


	<c:set var="description" value="${memBean.xmlQueryDescription}"/>

	<script type="text/javascript">
	<%-- adds the shortcut keys to quickly perform actions such as going back, sending a query or generating a graphical report  --%>
		addMiscShortcuts();		
		

		
		$( document ).ready(function() {

			$( "#saveQueryButton" ).click(function() {
				  $('#saveQueryButtonPopup').attr( 'onclick',"flowAction('saveQuery');");
				  
				  //set string to element which is not attached to dom and get the text from it
				  var title = $('<div/>').html("<c:out value='${memBean.xmlQueryName}'/>").text();
				  
				  $('#titleSaveQueryInModal').attr('value', title);
				  $('#descriptionSaveQueryInModal').html("<c:out value='${itera:escapeJavaScript(description)}' />").text();
				  $("#saveQueryContainer h3").html("<itera:message key='graphicalReport.saveQuery.dialog.headerSave'/>");				  
				  $("#hintmessage").html("<itera:message key='graphicalReport.saveQueryHintMessage'/>");
				  
			});
			
			
			$( "#saveQueryAsButton" ).click(function() {
				  $('#saveQueryButtonPopup').attr( 'onclick',"flowAction('saveQueryAs');");
				  
				  //set string to element which is not attached to dom and get the text from it
				  var title = $('<div/>').html("<c:out value='${memBean.xmlQueryName}'/>").text();
				  
				  if (title.length > 0) {
					  //add "copy of" prefix
					  title = "<itera:message key='graphicalReport.saveQueryAs.prefix'/> " + title;
				  } 
				  
				  $('#titleSaveQueryInModal').attr('value', title);
				  $('#descriptionSaveQueryInModal').html("<c:out value='${itera:escapeJavaScript(description)}' />").text();
				  $("#saveQueryContainer h3").html("<itera:message key='graphicalReport.saveQuery.dialog.headerSaveAs'/>");
				  $("#hintmessage").html("<itera:message key='graphicalReport.saveQueryAsHintMessage'/>");
			});
			
		});
		
	</script>

	<tilesx:useAttribute name="xmlSaveAsQueryName" />
	<tilesx:useAttribute name="xmlSaveAsQueryDescription" />
	<tilesx:useAttribute name="xmlQueryName" />



	<div id="saveQueryContainer" class="modal hide fade" style="display: none; ">
	    <div class="modal-header">
			<a class="close" data-dismiss="modal">×</a>
			<h3></h3>
	    </div>
	    <div class="modal-body">
	    
	    <div id="hintmessage" class="alert alert-info">
		</div>
	    
	    
	    <%-- title --%>
	    	<div class="control-group">
		    	<label class="control-label" for="titleSaveQueryInModal" style="width: 100px;">
					<itera:message key="graphicalReport.saveQueryName" />
				</label>
				<div class="controls">
				   	<form:input id="titleSaveQueryInModal" cssClass="labelSaveQuery" path="xmlSaveAsQueryName" /> <form:errors path="xmlSaveAsQueryName" />
				</div>
			</div>
			
			<%--description --%>
			<div class="control-group">
				<label class="control-label" for="descriptionSaveQueryInModal" style="width: 100px;">
					<itera:message key="graphicalReport.saveQueryDescription" />
				</label>
				<div class="controls">
					<form:textarea id="descriptionSaveQueryInModal" cols="60" rows="4" cssClass="labelSaveQuery" path="xmlSaveAsQueryDescription" style="width: 375px; height: 200px;"/> <form:errors path="xmlSaveAsQueryDescription" />
				</div>
			</div>
		
		
		</div>
		<div class="modal-footer">
			<a href="#" id="closeButtonPopup" class="btn" data-dismiss="modal"><itera:message key="button.close" /></a>
			<input type="button" id="saveQueryButtonPopup" class="link btn btn-primary" value="<itera:message key='graphicalReport.saveQuery.buttonlabel'/>"/>
		</div>
	</div>
	
	<c:choose>
   		<c:when test="${not empty memBean.xmlQueryName}">
     		<a href="#" rel="tooltip" data-original-title="Hotkey: <img/> <itera:message key="button.saveQuery.tooltip"/>">
				<input type="button" id="saveQueryButton" data-toggle="modal" data-target="#saveQueryContainer" class="link btn btn-default button-listener" value="<itera:message key="graphicalReport.saveQuery" />" />
			</a>
   		</c:when>
   		<c:otherwise>
    	 <a class="link btn" disabled="disabled"><itera:message key="graphicalReport.saveQuery" /></a>
   		</c:otherwise>
	</c:choose>
		
	
	<input type="button" id="saveQueryAsButton" data-toggle="modal" data-target="#saveQueryContainer" class="link btn btn-default button-listener" value="<itera:message key="graphicalReport.saveQueryAs" />" />

</c:if>
