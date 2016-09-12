<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>

<%-- User Groups --%>
<tiles:insertTemplate template="/jsp/common/ManyAssociationSetComponentComboboxView.jsp" flush="true">
  <tiles:putAttribute name="path_to_componentModel" value="componentModel.userGroupModel"/>
  <tiles:putAttribute name="header_postfix_edit" value="&nbsp;&nbsp;<sup>1)</sup>"/>
</tiles:insertTemplate>

<%-- Checks if the currently logged-in user is selected. --%>
<c:set var="isLoggedInUserSelected">
  <c:out value="${memBean.componentModel.loggedInUserSelected}" />
</c:set>

<c:if test="${componentMode != 'READ'}">
	<br/>
		<sup>1)</sup> <itera:message key="messages.usersNeedToLoginAgain"/>
  	<br/>
</c:if>
