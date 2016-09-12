<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<tilesx:useAttribute name="path_to_componentModel" />
<tilesx:useAttribute name="cluster_index" />
<tilesx:useAttribute name="mapping_index" />
<tilesx:useAttribute name="mapping_html_id" />
<tilesx:useAttribute name="force_component_mode" ignore="true"/>
<tilesx:useAttribute name="updatePermission" />
<tilesx:useAttribute name="deletePermission" />

<c:set var="path_to_mapping_part" value="${path_to_componentModel}.clusterParts[${cluster_index}].mappingParts[${mapping_index}]" />
<itera:define id="model" name="memBean" property="${path_to_mapping_part}" />
<itera:define id="componentMode" name="memBean" property="${path_to_mapping_part}.componentMode" />

<c:if test="${!empty force_component_mode}">
	<c:set var="componentMode" value="${force_component_mode}" />
</c:if>

<tr>
	<c:if test="${(componentMode == 'EDIT' || componentMode == 'CREATE') && deletePermission}">
		<td class="buttonintable top">
			<a id="<c:out value="${mapping_html_id}_remove" />" class="link" href="#"
       			title="<itera:message key="tooltip.remove"/>"
            		onclick="setHiddenField('<c:out value="${path_to_componentModel}.selectedClusterPosition" />', <c:out value="${cluster_index + 1}" />);
               	setHiddenField('<c:out value="${path_to_componentModel}.selectedMappingPosition" />', <c:out value="${mapping_index + 1}" />);
               	setHiddenField('<c:out value="${path_to_componentModel}.action" />', 'delete');
               	flowAction('update');" >
            		<i class="icon-remove"></i>
       		</a>
     		</td>
   	</c:if>
   	<td>
		<itera:define id="elementDisplayOrder" name="memBean" property="${path_to_componentModel}.elementDisplayOrder" />
		<c:forEach var="displayElementDescriptor" items="${elementDisplayOrder}" varStatus="status">
			<itera:message key="${displayElementDescriptor.elementTypeKey}" />&nbsp;
			<a class="isBold" href="<itera:linkToElement name="model" property="${displayElementDescriptor.modelPath}" type="html"/>">
				<itera:write name="model" property="${displayElementDescriptor.modelPath}.hierarchicalName" escapeXml="true"/>
			</a>
			<%-- Print separator --%>
			<c:if test="${not status.last}"> / </c:if> 
		</c:forEach>
		<c:if test="${fn:length(model.attributeModel.atgParts) > 0}">
			<!-- business mappings attributes section -->
			<br/>
			<tiles:insertTemplate template="/jsp/common/attributes/AttributesComponentView.jsp">
				<tiles:putAttribute name="path_to_componentModel" value="${path_to_mapping_part}.attributeModel" />
       			<tiles:putAttribute name="showHeaderTable" value="false" />
       			<tiles:putAttribute name="overviewMode" value="${!updatePermission}" />
			</tiles:insertTemplate>
		</c:if>
   	</td>
</tr>
