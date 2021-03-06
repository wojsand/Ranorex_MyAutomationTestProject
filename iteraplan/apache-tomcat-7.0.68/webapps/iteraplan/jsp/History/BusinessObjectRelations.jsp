<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>

<%-- The changeset object that shall be rendered --%>
<tilesx:useAttribute name="bbChangeset" /> 

<%-- specialises --%>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="businessObject.specialisations" />
	<tiles:putAttribute name="addedElementsPath" value="specialisationsAdded" />
	<tiles:putAttribute name="removedElementsPath" value="specialisationsRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="businessObject.to.businessDomains" />
	<tiles:putAttribute name="addedElementsPath" value="businessDomainsAdded" />
	<tiles:putAttribute name="removedElementsPath" value="businessDomainsRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="businessObject.to.businessFunctions" />
	<tiles:putAttribute name="addedElementsPath" value="businessFunctionsAdded" />
	<tiles:putAttribute name="removedElementsPath" value="businessFunctionsRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="businessObject.to.informationSystemReleases" />
	<tiles:putAttribute name="addedElementsPath" value="informationSystemReleasesAdded" />
	<tiles:putAttribute name="removedElementsPath" value="informationSystemReleasesRemoved" />
</tiles:insertTemplate>

<tiles:insertTemplate template="/jsp/History/ManyAssociationSetFragment.jsp">
	<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
	<tiles:putAttribute name="relationLabelKey" value="businessObject.to.informationSystemInterfaces" />
	<tiles:putAttribute name="addedElementsPath" value="informationSystemInterfacesAdded" />
	<tiles:putAttribute name="removedElementsPath" value="informationSystemInterfacesRemoved" />
</tiles:insertTemplate>
