<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<tilesx:useAttribute name="transport_field_label" ignore="true"/>

<c:if test="${transport_field_label == null}">
	<c:set var="transport_field_label" value="global.direction"/>
</c:if>

<c:if test="${componentMode == 'READ'}">
     <itera:message key="${transport_field_label}" />:
</c:if>

<c:if test="${componentMode != 'READ'}">
     <itera:message key="${transport_field_label}" />:
</c:if>
