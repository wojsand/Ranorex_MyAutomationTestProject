<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<a id="partialExportDescription" rel="popover" href="#" data-original-title="" title="">
	<i class="icon-info-sign"></i>
</a>

<script type="text/javascript">	
	$("#partialExportDescription").popover(
					{
						title: 		'<itera:message key="excel.partial.export.title" />',
						content :	'<ul><li><itera:message key="excel.partial.export.bbt" /></li>' +
									'<li><itera:message key="excel.partial.export.iteraql" /></li></ul>',
						html : 		'true',
						trigger : 	'focus',
						container : 'body',
						delay : { show : '200', hide : '400' }
					});
</script>
