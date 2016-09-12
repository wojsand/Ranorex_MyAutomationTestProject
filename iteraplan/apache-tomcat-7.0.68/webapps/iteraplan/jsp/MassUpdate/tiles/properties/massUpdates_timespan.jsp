<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>

<tilesx:useAttribute name="path_to_componentModel" />
<tilesx:useAttribute name="lineCount" />

<tiles:insertTemplate template="/jsp/common/RuntimePeriodComponentView.jsp" flush="false">
	<tiles:putAttribute name="path_to_componentModel" value="${path_to_componentModel}" />
	<tiles:putAttribute name="lineCount" value="${lineCount}"/>
	<tiles:putAttribute name="showDivView" value="true" />
</tiles:insertTemplate>
