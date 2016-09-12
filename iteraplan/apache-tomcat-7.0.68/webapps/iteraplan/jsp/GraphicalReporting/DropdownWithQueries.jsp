<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>

<tilesx:useAttribute name="title_key" />
<tilesx:useAttribute name="queryType" />

<c:set var="dropdownId" value="${queryType}_graphicalReportingDropdown"/>
<c:set var="loadedVar" value="${queryType}_Loaded2"/>

<script type="text/javascript">
//<![CDATA[
    var ${loadedVar} = false;
//]]>
</script>
<li class="dropdown" onmouseover="
			if(!${loadedVar}) {
				loadSavedQueries('${queryType}', '${dropdownId}');
			}
			${loadedVar} = true;
		">
	
	<a href="#" class="navLink" >
		<itera:message key="${title_key}" />
	</a> 
	
	<ul class="dropdown-menu" id="${dropdownId}">
		<%-- content will be loaded with ajax --%>
	</ul>
</li>
