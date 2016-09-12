<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<tilesx:useAttribute name="path_to_componentModel" />

<%-- If set to false(!!!), a Label instead of a TextBox will be rendered like in READ-Mode--%>
<tilesx:useAttribute name="overviewMode" ignore="true" />
<tilesx:useAttribute name="html_id" ignore="true" />
<tilesx:useAttribute name="description_field_path" ignore="true" />
<tilesx:useAttribute name="componentMode" ignore="true" />

<%-- When this attribute is true it means that the virtual element is selected. this is used 
to disable certain fields in case the component is in the EDIT or CREATE mode. --%>
<tilesx:useAttribute name="virtualElementSelected" ignore="true" />

<c:if test="${empty description_field_path}">
	<c:set var="description_field_path" value="${path_to_componentModel}.current" />
</c:if>

<c:if test="${empty html_id}">
	<itera:define id="html_id" name="memBean"
			property="${path_to_componentModel}.htmlId" />
</c:if>

<c:if test="${componentMode == 'READ'}">
	<c:set var="tdstyle" value="top margin" />
</c:if>

<c:if test="${overviewMode == null}">
	<c:set var="overviewMode" value="true" />
</c:if>

<%-- Start StringComponentView --%>
<div class="well">
  <c:choose>
	<c:when test="${(componentMode != 'READ') && overviewMode}">
		<form:textarea path="${description_field_path}" cssClass="description"
			id="${html_id}_textarea" 
			disabled="${virtualElementSelected}" 
			rows="5" />
		<form:errors path="${description_field_path}" cssClass="errorMsg" htmlEscape="false"/>
	</c:when>
	<c:otherwise>
		<itera:write name="memBean" property="${description_field_path}"
			breaksAndSpaces="true" wikiText="true" escapeXml="false" />
	</c:otherwise>
  </c:choose>

</div>
