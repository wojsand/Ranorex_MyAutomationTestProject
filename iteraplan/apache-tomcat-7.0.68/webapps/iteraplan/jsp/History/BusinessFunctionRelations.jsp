<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>

<%-- The changeset object that shall be rendered --%>
<tilesx:useAttribute name="bbChangeset" />

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="businessFunction.to.businessObjects" />
	<tiles:putAttribute name="addedElementsPath" value="businessObjectsAdded" />
	<tiles:putAttribute name="removedElementsPath" value="businessObjectsRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="businessFunction.to.businessDomains" />
	<tiles:putAttribute name="addedElementsPath" value="businessDomainsAdded" />
	<tiles:putAttribute name="removedElementsPath" value="businessDomainsRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="businessFunction.to.informationSystemRelease" />
	<tiles:putAttribute name="addedElementsPath" value="informationSystemAdded" />
	<tiles:putAttribute name="removedElementsPath" value="informationSystemRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
    <tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
    <tiles:putAttribute name="relationLabelKey" value="businessFunction.to.itServices" />
    <tiles:putAttribute name="addedElementsPath" value="itServicesAdded" />
    <tiles:putAttribute name="removedElementsPath" value="itServicesRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
    <tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
    <tiles:putAttribute name="relationLabelKey" value="businessFunction.to.projects" />
    <tiles:putAttribute name="addedElementsPath" value="projectsAdded" />
    <tiles:putAttribute name="removedElementsPath" value="projectsRemoved" />
</tiles:insertTemplate>
