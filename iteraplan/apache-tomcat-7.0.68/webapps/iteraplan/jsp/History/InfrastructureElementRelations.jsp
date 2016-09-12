<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>

<%-- The changeset object that shall be rendered --%>
<tilesx:useAttribute name="bbChangeset" />

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="infrastructureElement.baseComponents" />
	<tiles:putAttribute name="addedElementsPath" value="baseComponentsAdded" />
	<tiles:putAttribute name="removedElementsPath" value="baseComponentsRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="infrastructureElement.parentComponents" />
	<tiles:putAttribute name="addedElementsPath" value="parentComponentsAdded" />
	<tiles:putAttribute name="removedElementsPath" value="parentComponentsRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="infrastructureElement.to.informationSystemReleases" />
	<tiles:putAttribute name="addedElementsPath" value="informationSystemReleasesAdded" />
	<tiles:putAttribute name="removedElementsPath" value="informationSystemReleasesRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="infrastructureElement.to.technicalComponentReleases" />
	<tiles:putAttribute name="addedElementsPath" value="technicalComponentReleasesAdded" />
	<tiles:putAttribute name="removedElementsPath" value="technicalComponentReleasesRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
    <tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
    <tiles:putAttribute name="relationLabelKey" value="infrastructureElement.to.itServices" />
    <tiles:putAttribute name="addedElementsPath" value="itServicesAdded" />
    <tiles:putAttribute name="removedElementsPath" value="itServicesRemoved" />
</tiles:insertTemplate>
