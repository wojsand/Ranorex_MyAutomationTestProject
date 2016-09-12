<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<%-- Sort available columns in SELECT field --%>
<script type="text/javascript">
<!--
	$(document).ready(function(){
		
		var temp = $("#selectedNewColumn option[technicalattribute='true']");
		sortList();
		//show or hide technical attributes on startup
		isShowTechnicalAttribute() ? showTechnicalAttributes() : hideTechnicalAttributes();
		
		$( "#displayAttributes" ).click(function() {
			 if ( $("#selectedNewColumn option[technicalattribute='true']").size() == 0) {
				 //add attributes
				 showTechnicalAttributes();
				 setShowTechnicalAttribute(true);
			 } else {
				//remove attributes
				temp =   $("#selectedNewColumn option[technicalattribute='true']");
				hideTechnicalAttributes();
				setShowTechnicalAttribute(false);
			 }
		});
		
		
		function sortList() {
			$("#selectedNewColumn").html($("#selectedNewColumn option").sort(function(a, b) {
				var al = a.text.toLowerCase(), bl = b.text.toLowerCase();
		    	return al == bl ? 0 : (al < bl ? -1 : 1);
			}));
		}
		
		
		function hideTechnicalAttributes() {
			$("#selectedNewColumn option[technicalattribute='true']").remove();
			setButtonText("<itera:message key="reports.addColumn.showMore" />");
		}
		
		function showTechnicalAttributes() {
			$("#selectedNewColumn").append(temp);
			sortList();
			setButtonText("<itera:message key="reports.addColumn.showLess" />");
		}
		
		
		function setShowTechnicalAttribute(flag) {
			$("#showTechnicalAttributesFlag").val(flag);
		}

		function isShowTechnicalAttribute() {
			return $("#showTechnicalAttributesFlag").val() === "true" ? true : false;
		}
		
		function setButtonText(text) {
			$("#displayAttributes").text(text);
		}
	});
//-->
</script>

<div id="addColumnContainer" class="modal hide fade" style="display: none;">
 	<div class="modal-header">
		<a class="close" data-dismiss="modal">×</a>
		<h3>
			<itera:message key="reports.addColumn" />
		</h3>
	</div>
	<div class="modal-body">
		<form:select path="selectedNewColumn" cssClass="labelAddColumn" size="10" ondblclick="flowAction('addColumn');">
           	<c:forEach var="availableColumn" items="${memBean.viewConfiguration.availableColumns}">
               	<form:option value="${availableColumn.head}" technicalAttribute="${availableColumn.technicalAttribute}">
               		<c:choose>
                		<c:when test="${availableColumn.type != 'attribute'}">
							<itera:message key="${availableColumn.head}" />
                		</c:when>
                		<c:otherwise>
                			<c:out value="${availableColumn.head}" />
                		</c:otherwise>
              			</c:choose>
               	</form:option>
           	</c:forEach>
		</form:select>
		
		<form:hidden id="showTechnicalAttributesFlag" path="viewConfiguration.showTechnicalAttributes" />

		<div class="btn-toolbar">
  			<div class="btn-group">
   				<button id="displayAttributes" type="button" class="btn" data-toggle="button">
   					<i class="icon-filter"></i>
   				</button>
  			</div>
		</div>
		
	</div>
	<div class="modal-footer">
		<a href="#" class="btn" data-dismiss="modal"><itera:message key="button.close" /></a> <a
			id="addColumnButton" href="#" class="link btn btn-primary"
			onclick="flowAction('addColumn');"><itera:message key="button.update" /></a>
	</div> 
</div>
