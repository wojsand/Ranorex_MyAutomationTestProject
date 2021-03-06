<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>

<script type="text/javascript">
   addTabShortcuts();
</script>

<c:set var="virtualElementSelected" value="${memBean.componentModel.nameModel.virtualElementSelected}" scope="request" />
<c:set var="componentMode" value="${memBean.componentModel.componentMode}" scope="request" />

<%--if the selected element is the virtual element "-" --%>
<c:choose>
  <c:when test="${virtualElementSelected}">
    <c:set var="showTab" value="false" />
    <c:set var="disable" value="true" />
  </c:when>
  <c:otherwise>
    <c:set var="showTab" value="true" />
  </c:otherwise>
</c:choose>

<c:set var="functionalPermission" scope="request">
	<c:set var="itService" value="itService.singular" />
	<itera:write name="userContext"
		property="perms.userHasBbTypeFunctionalPermission(${itService})" escapeXml="false" />
</c:set>

<%-- set a different class for read and write mode --%>
<c:choose>
	  <c:when test="${(componentMode != 'READ')}">
	    <c:set var="componentModeClass" value="write" />
	  </c:when>
	  <c:otherwise>
	      <c:set var="componentModeClass" value="read" />
	  </c:otherwise>
</c:choose>

<div class="${componentModeClass}">
	<c:choose>
	<c:when test="${functionalPermission == true}">
	
		<%--Start construction of page --%>
		<tiles:insertTemplate template="/jsp/common/TransactionBar.jsp">
			<tiles:putAttribute name="showBuildingBlockCopyButton" value="true"/>
			<tiles:putAttribute name="service_class" value="ITServiceService" />
			<tiles:putAttribute name="subscribed_element" value="${memBean.componentModel}" />
			<tiles:putAttribute name="element_id" value="${id}" />
			<tiles:putAttribute name="buildingBlockAffectedByDelete" value="true" />
		</tiles:insertTemplate>
		
		<tiles:insertTemplate template="/jsp/common/ElementNameComponentView.jsp">
			<tiles:putAttribute name="icon_suffix" value="itservice" />
		    <tiles:putAttribute name="path_to_componentModel" value="componentModel.nameModel" />
		    <tiles:putAttribute name="virtualElementSelected" value="${disable}" />
		    <tiles:putAttribute name="validate" value="true" />
		</tiles:insertTemplate>
		
		<tiles:insertTemplate template="/jsp/common/ElementDescriptionComponentView.jsp">
		    <tiles:putAttribute name="path_to_componentModel" value="componentModel.descriptionModel" />
		    <tiles:putAttribute name="virtualElementSelected" value="${disable}" />
		</tiles:insertTemplate>
		
		<%-- Insert Table for elementComponent properties --%>
		<tiles:insertTemplate template="/jsp/common/attributes/AttributesComponentView.jsp">
			<tiles:putAttribute name="path_to_componentModel" value="componentModel.toplevelAttributeModel" />
			<tiles:putAttribute name="showHeaderTable" value="false" />
			<tiles:putAttribute name="showATGHeaderTable" value="false" />
			<tiles:putAttribute name="single_col" value="true" />
		</tiles:insertTemplate>
	
		<%-- Configures the selection of tabs shown in regard to whether the virtual element is selected or not --%>
		<itera:tabgroup id="ConfigTabs" activeTab="${activeTab}">
		  	<itera:tab id="TabHierarchy" 	textKey="global.hierarchy" 		page="/jsp/ITService/tabPages/TabHierarchy.jsp" showTab="true" />
		  	<itera:tab id="TabAssignments" 	textKey="button.assignments" 	page="/jsp/ITService/tabPages/TabAssignments.jsp" showTab="${showTab}" />
		  	<itera:tab id="TabAttributes" 	textKey="global.attributes" 	page="/jsp/common/TabAttributes.jsp" showTab="${showTab}" />
		  	<itera:tab id="TabPermissions" 	textKey="global.permissions" 	page="/jsp/common/TabPermissions.jsp" showTab="${showTab}" />
			<c:if test="${componentMode == 'READ' && isHistoryEnabled}">
				<itera:tab id="TabLocalHistory" textKey="global.history"    page="/jsp/ITService/tabPages/TabHistory.jsp"/>
			</c:if> 
		</itera:tabgroup>
		
					<%-- Insert the second TransactionBar for save & cancel at the bottom --%>
			<c:if test="${componentMode != 'READ'}">
				<tiles:insertTemplate template="/jsp/common/TransactionBar.jsp">
					<tiles:putAttribute name="showBuildingBlockCopyButton" value="true"/>
					<tiles:putAttribute name="service_class" value="ITServiceService" />
					<tiles:putAttribute name="subscribed_element" value="${memBean.componentModel}" />
					<tiles:putAttribute name="element_id" value="${id}" />
				</tiles:insertTemplate>
			</c:if>
	</c:when>
	<c:otherwise>
	  <tiles:insertTemplate template="/jsp/common/AccessDenied.jsp" />
	</c:otherwise>
	</c:choose>
</div>
