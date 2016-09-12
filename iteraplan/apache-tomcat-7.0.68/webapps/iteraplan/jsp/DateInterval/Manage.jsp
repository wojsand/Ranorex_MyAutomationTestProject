<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://jawr.net/tags" prefix="jwr" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<c:set var="componentMode" value="${memBean.componentModel.componentMode}" scope="request" />

<c:set var="updatePermission" value="true" />
<c:set var="showCloseButton" value="true" />
<c:set var="showDeleteButton" value="true" />
<c:set var="deletePermission" value="true" />

<c:set var="delete_hook_script"	value="confirmDelete(function(){flowAction('delete')});" />

<div id="transactionbar" class="pull-right">
	<div class="btn-group">
		
		<%-- ### View-Mode ### --%>
		<c:if test="${componentMode == 'READ'}">
		
			<%-- EDIT --%>
			<c:if test="${updatePermission}">
				<a id="transactionEdit" class="btn" href="#"
					onclick="flowAction('edit');" >
					<i class="icon-pencil"></i>
					<itera:message key="button.edit" />
				</a>
			</c:if>
			<%-- DELETE --%>
			<c:if test="${showDeleteButton && deletePermission}">
				<a id="transactionDelete" class="btn" href="#"
					onclick="<c:out value="${delete_hook_script}" />" >
					<i class="icon-trash"></i>
					<itera:message key="button.delete" />
				</a>
			</c:if>
			<%-- CLOSE --%>
			<c:if test="${showCloseButton}">
				<a id="transactionClose" class="btn" href="#"
					onclick="flowAction('close');" >
					<i class="icon-remove"></i>
					<itera:message key="button.close" />
				</a>
		  	</c:if>
		</c:if>
		<%-- ### Edit-Mode ### --%>
		<c:if test="${componentMode == 'EDIT' || componentMode == 'CREATE'}">
		
			<%-- SAVE --%>
			<a id="transactionSave" class="btn btn-primary" href="#"
				onclick="flowAction('save');" >
				<itera:message key="button.save" />
			</a>
			
			<%-- CANCEL --%>
			<a id="transactionCancel" class="btn" href="#"
				onclick="msgOkCancel(function(){flowAction('cancel');});" >
				<itera:message key="button.cancel" />
			</a>
		</c:if>
	</div>
</div>



<h1><itera:message key="global.dateinterval" /></h1>



<form class="form-horizontal">
  <div class="control-group">
    <label class="control-label" for="name"><itera:message key="global.name" />:</label>
    <div class="controls">
    	<c:choose>
			<c:when test="${(componentMode != 'READ')}">
				<form:input id="name" path="componentModel.dateInterval.name" maxlength="40" />
			</c:when>
			<c:otherwise>
				<c:out value="${memBean.componentModel.nameModel.name}" />
			</c:otherwise>
		</c:choose>
    </div>
  </div>
  <div class="control-group">
    <label class="control-label" for="startAttributeType"><itera:message key="global.startfordateinterval" />:</label>
    <div class="controls">
    	<c:choose>
			<c:when test="${(componentMode != 'READ')}">
				
				<form:select path="componentModel.selectedStartDate" id="startAttributeType">
				  <itera:define id="availableDates_array" name="memBean" property="dates" />
				    <form:options items="${availableDates_array}" itemLabel="name" itemValue="id" />
				</form:select>
				
			</c:when>
			<c:otherwise>
				<c:out value="${memBean.componentModel.dateInterval.startDate}" />
			</c:otherwise>
		</c:choose>
    </div>
  </div>
  <div class="control-group">
    <label class="control-label" for="endAttributeType"><itera:message key="global.endfordateinterval" />:</label>
    <div class="controls">
    	<c:choose>
			<c:when test="${(componentMode != 'READ')}">
				
				<form:select path="componentModel.selectedEndDate" id="endAttributeType">
				  <itera:define id="availableDates_array" name="memBean" property="dates" />
				    <form:options items="${availableDates_array}" itemLabel="name" itemValue="id" />
				</form:select>
				
			</c:when>
			<c:otherwise>
				<c:out value="${memBean.componentModel.dateInterval.endDate}" />
			</c:otherwise>
		</c:choose>
    </div>
  </div>

	<div class="control-group">
    <label class="control-label" for="color"><itera:message key="reports.color" />:</label>
    <div class="controls">
    	<c:choose>
			<c:when test="${(componentMode != 'READ')}">
                <div class="input-group color">
			        <form:input class="colorpicker-hashhex" path="componentModel.dateInterval.defaultColorHex" maxlength="40" />
 				</div>
			</c:when>
			<c:otherwise>
				<div style="background-color:<c:out value="${memBean.componentModel.dateInterval.defaultColorHex}"/>; width:50px;height:20px; border-style:solid; border-width:1px" />
			</c:otherwise>
		</c:choose>
    </div>
  </div>

</form>
