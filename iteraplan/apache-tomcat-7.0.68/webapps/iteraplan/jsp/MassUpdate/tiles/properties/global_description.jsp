<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<%-- The name of this JSP 'global_description.jsp' is generically bound to a property in 
 one ore more *MassUpdateType.java files. When renaming, those properties have to be 
 considered too!! --%>

<tilesx:useAttribute name="path_to_componentModel" />
<tilesx:useAttribute name="overviewMode" ignore="true" />
<tilesx:useAttribute name="buildingBlock_id" ignore="true" />

<c:set var="description_field" value="${path_to_componentModel}.current" />
<itera:define id="html_id" name="memBean" property="${path_to_componentModel}.htmlId" />
<c:set var="html_id" value="${path_to_componentModel}.${html_id}"/>


<c:if test="${overviewMode == null}">
  <c:set var="overviewMode" value="true" />
</c:if>


<div class="descriptionintable">
<c:choose>
  <c:when test="${(componentMode != 'READ') && overviewMode}">
    	<form:textarea id= "${html_id}_textarea" path="${description_field}" cssClass="description" />
  </c:when>
  <c:otherwise>
    <itera:write name="memBean" property="${description_field}" breaksAndSpaces="true" wikiText="true" escapeXml="false" />
  </c:otherwise>
</c:choose>
</div>
