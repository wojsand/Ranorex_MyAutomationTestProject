<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>

<tilesx:useAttribute name="path_to_componentModel" />
<tilesx:useAttribute name="select_box_style" ignore="true" />
<tilesx:useAttribute name="showDivView" ignore="true" />

<tiles:insertTemplate template="/jsp/common/EnumComponentComboboxView.jsp"	flush="true">
	<tiles:putAttribute name="path_to_componentModel" value="${path_to_componentModel}" />
	<tiles:putAttribute name="select_box_style" value="${select_box_style}" />
	<tiles:putAttribute name="showDivView" value="${showDivView}" />
</tiles:insertTemplate>
