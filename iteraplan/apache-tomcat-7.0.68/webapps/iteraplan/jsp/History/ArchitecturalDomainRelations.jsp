<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>

<%-- The changeset object that shall be rendered --%>
<tilesx:useAttribute name="bbChangeset" /> 

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="architecturalDomain.to.technicalComponentReleases" />
	<tiles:putAttribute name="addedElementsPath" value="technicalComponentReleasesAdded" />
	<tiles:putAttribute name="removedElementsPath" value="technicalComponentReleasesRemoved" />
</tiles:insertTemplate>
