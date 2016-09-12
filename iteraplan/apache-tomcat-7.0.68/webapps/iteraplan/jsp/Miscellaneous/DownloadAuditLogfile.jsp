<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<%-- TODO: convert table into module --%>
<table class="elementComponentView table table-bordered table-striped table-condensed">
	<thead>
		<tr>
			<th><itera:message key="global.auditinfo" /></th>
		</tr>
	</thead>
	<tbody>
		<tr>
	        <td><p><itera:message key="downloadAuditLogfile.text"/></p>
				<p><a href="requestAuditLogFile.do"><itera:message key="global.logfile"/></a></p>
			</td>
		</tr>
	</tbody>
</table>
