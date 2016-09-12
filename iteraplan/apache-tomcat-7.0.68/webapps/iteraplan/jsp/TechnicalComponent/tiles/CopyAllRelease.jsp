<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<tiles:insertTemplate template="/jsp/TechnicalComponent/Manage.jsp">
	<tiles:putAttribute name="doCopyAll" value="true" />
</tiles:insertTemplate>
