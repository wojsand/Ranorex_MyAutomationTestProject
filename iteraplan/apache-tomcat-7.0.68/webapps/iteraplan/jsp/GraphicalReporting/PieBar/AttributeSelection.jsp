<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<tilesx:useAttribute name="path" />
<tilesx:useAttribute name="availableAttributes" />
<tilesx:useAttribute name="flowAction" />

<form:select path="${path}" onchange="flowAction('${flowAction}');">
	<form:option value="-1"><itera:message key="graphicalExport.pieBar.selectAttribute"/></form:option>
	<c:forEach var="keyAttribute" items="${availableAttributes}">
		<form:option value="${keyAttribute.id}">
	  		<c:choose>
	  			<c:when test="${keyAttribute.id <= 0}">
	  				<itera:message key="${keyAttribute.name}" />
	  			</c:when>
	  			<c:otherwise>
	  				${keyAttribute.name}
	  			</c:otherwise>
	  		</c:choose>
	  	</form:option>
	</c:forEach>
</form:select>
