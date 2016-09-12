<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>

<%-- The changeset object that shall be rendered --%>
<tilesx:useAttribute name="bbChangeset" />

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="itService.baseComponents" />
	<tiles:putAttribute name="addedElementsPath" value="baseComponentsAdded" />
	<tiles:putAttribute name="removedElementsPath" value="baseComponentsRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="itService.parentComponents" />
	<tiles:putAttribute name="addedElementsPath" value="parentComponentsAdded" />
	<tiles:putAttribute name="removedElementsPath" value="parentComponentsRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="itService.to.informationSystemReleases" />
	<tiles:putAttribute name="addedElementsPath" value="informationSystemReleasesAdded" />
	<tiles:putAttribute name="removedElementsPath" value="informationSystemReleasesRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="itService.to.technicalComponentReleases" />
	<tiles:putAttribute name="addedElementsPath" value="technicalComponentReleasesAdded" />
	<tiles:putAttribute name="removedElementsPath" value="technicalComponentReleasesRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="itService.to.businessFunctions" />
	<tiles:putAttribute name="addedElementsPath" value="businessFunctionsAdded" />
	<tiles:putAttribute name="removedElementsPath" value="businessFunctionsRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="itService.to.infrastructureElements" />
	<tiles:putAttribute name="addedElementsPath" value="infrastructureElementsAdded" />
	<tiles:putAttribute name="removedElementsPath" value="infrastructureElementsRemoved" />
</tiles:insertTemplate>
