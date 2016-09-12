<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>

<tilesx:useAttribute name="html_id" ignore="true" />
<tilesx:useAttribute name="dashboard_field_path" ignore="true" />

<p class="muted">
	<itera:message key="customDashboard.template.preview.populate.hint"></itera:message> 
</p>
<div class="well">
	<itera:dashboard name="dialogMemory" property="${dashboard_field_path}" userAgent="${header['User-Agent']}" breaksAndSpaces="true"/>
</div>
