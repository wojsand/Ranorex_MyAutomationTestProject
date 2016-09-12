<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<tilesx:useAttribute name="bb" />
<tilesx:useAttribute name="updatePermissionType" />
<tilesx:useAttribute name="createPermissionType" />
<tilesx:useAttribute name="deletePermissionType" />

<itera:checkBbInstancePermission2 name="bb" property="owningUserEntities" result="writePermissionInstance" userContext="userContext" />

<c:if test="${writePermissionInstance and (bb.identityString != '-')}">
	<c:set var="link">
		<itera:linkToElement name="bb" type="html" />
	</c:set>

	<c:if test="${updatePermissionType}">
		<a href="javascript:changeLocation('${link}?_eventId=edit');" title="<itera:message key="button.edit" />"> <i class="icon-pencil"></i>
		</a>
	</c:if>
	<c:if test="${createPermissionType}">
		<a href="javascript:changeLocation('${link}?_eventId=copyBB');" title="<itera:message key="button.copy" />"> <i class="icon-share"></i>
		</a>
	</c:if>
	<c:if test="${deletePermissionType}">
		<a href="javascript:confirmDeleteBuildingBlocks(function(){changeLocation('${link}?_eventId=delete')});"
			title="<itera:message key="button.delete" />"> <i class="icon-trash"></i>
		</a>
	</c:if>
</c:if>
