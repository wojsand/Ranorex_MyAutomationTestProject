<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<c:set var="permissionGrantedProj">
	<itera:write name="userContext" property="perms.userHasDialogPermission(Project)" escapeXml="false" />
</c:set>

<c:set var="permissionGrantedBD">
	<itera:write name="userContext" property="perms.userHasDialogPermission(BusinessDomain)" escapeXml="false" />
</c:set>

<c:set var="permissionGrantedBF">
	<itera:write name="userContext" property="perms.userHasDialogPermission(BusinessFunction)" escapeXml="false" />
</c:set>

<c:set var="permissionGrantedProd">
	<itera:write name="userContext" property="perms.userHasDialogPermission(Product)" escapeXml="false" />
</c:set>

<c:set var="permissionGrantedBP">
	<itera:write name="userContext" property="perms.userHasDialogPermission(BusinessProcess)" escapeXml="false" />
</c:set>
 
<c:set var="permissionGrantedBM">
	<itera:write name="userContext" property="perms.userHasDialogPermission(BusinessMapping)" escapeXml="false" />
</c:set>

<c:set var="permissionGrantedBU">
	<itera:write name="userContext" property="perms.userHasDialogPermission(BusinessUnit)" escapeXml="false" />
</c:set>

<c:set var="permissionGrantedISD">
	<itera:write name="userContext" property="perms.userHasDialogPermission(InformationSystemDomain)" escapeXml="false" />
</c:set>

<c:set var="permissionGrantedIS">
	<itera:write name="userContext" property="perms.userHasDialogPermission(InformationSystem)" escapeXml="false" />
</c:set>

<c:set var="permissionGrantedBO">
	<itera:write name="userContext" property="perms.userHasDialogPermission(BusinessObject)" escapeXml="false" />
</c:set>

<c:set var="permissionGrantedIE">
	<itera:write name="userContext" property="perms.userHasDialogPermission(InfrastructureElement)" escapeXml="false" />
</c:set>

<c:set var="permissionGrantedAD">
	<itera:write name="userContext" property="perms.userHasDialogPermission(ArchitecturalDomain)" escapeXml="false" />
</c:set>

<c:set var="permissionGrantedTC">
	<itera:write name="userContext" property="perms.userHasDialogPermission(TechnicalComponent)" escapeXml="false" />
</c:set>

<c:set var="permissionGrantedISI">
	<itera:write name="userContext" property="perms.userHasDialogPermission(Interface)" escapeXml="false" />
</c:set>

<c:set var="permissionGrantedITS">
	<itera:write name="userContext" property="perms.userHasDialogPermission(ITService)" escapeXml="false" />
</c:set>

<div class="startContent">

	<h1>
		<itera:message key="global.applicationname" />
		-
		<itera:message key="startview.text.itLandscaping" />
	</h1>
	
	<ul id="iteraplanMap">
		<li>
	  		<span id="hierarchy"><itera:message key="startscreen.hierarchy" /></span>
	  	</li>
		<li>
	  		<span id="usage"><itera:message key="startscreen.usage" /></span>
	  	</li>
		<li>
	  		<span id="specialisation"><itera:message key="startscreen.specialisation" /></span>
	  	</li>
	  	<li>
	  		<span id="successor"><itera:message key="startscreen.successor" /></span>
	  	</li>
	  	<li>
	  		<span id="attribution"><itera:message key="startscreen.attribution" /></span>
	  	</li>
		<li>
		  	<c:choose>
		  		<c:when test="${permissionGrantedProj == true}">
			  		<a href="<c:url value="/project/init.do" />" id="project" title="<itera:message key="project.startscreen.tooltip" />"><itera:message key="project.startscreen.label" /></a>
		  		</c:when>
		  		<c:otherwise>
			  		<span id="project"><itera:message key="project.startscreen.label" /></span>
		  		</c:otherwise>	  	
		  	</c:choose>
	  	</li>
	  	<li>
		  	<c:choose>
		  		<c:when test="${permissionGrantedBD == true}">
			  		<a href="<c:url value="/businessdomain/init.do" />" id="businessdomain" title="<itera:message key="businessDomain.startscreen.tooltip" />"><itera:message key="businessDomain.startscreen.label" /></a>
		  		</c:when>
		  		<c:otherwise>
			  		<span id="businessdomain"><itera:message key="businessDomain.startscreen.label" /></span>
		  		</c:otherwise>	  	
		  	</c:choose>
	  	</li>
	  	<li>
		  	<c:choose>
		  		<c:when test="${permissionGrantedBU == true}">
			  		<a href="<c:url value="/businessunit/init.do" />" id="businessunit" title="<itera:message key="businessUnit.startscreen.tooltip" />"><itera:message key="businessUnit.startscreen.label" /></a>
		  		</c:when>
		  		<c:otherwise>
			  		<span id="businessunit"><itera:message key="businessUnit.startscreen.label" /></span>
		  		</c:otherwise>	  	
		  	</c:choose>
	  	</li>
	  	<li>
		  	<c:choose>
		  		<c:when test="${permissionGrantedProd == true}">
			  		<a href="<c:url value="/product/init.do" />" id="product" title="<itera:message key="product.startscreen.tooltip" />"><itera:message key="product.startscreen.label" /></a>
		  		</c:when>
		  		<c:otherwise>
			  		<span id="product"><itera:message key="product.startscreen.label" /></span>
		  		</c:otherwise>	  	
		  	</c:choose>
	  	</li>
		<li>
 		  	<c:choose>
		  		<c:when test="${permissionGrantedBP == true}">
			  		<a href="<c:url value="/businessprocess/init.do" />" id="businessprocess" title="<itera:message key="businessProcess.startscreen.tooltip" />"><itera:message key="businessProcess.startscreen.label" /></a>
		  		</c:when>
		  		<c:otherwise> 
			  		<span id="businessprocess"><itera:message key="businessProcess.startscreen.label" /></span>
 		  		</c:otherwise> 	  	
		  	</c:choose> 
	  	</li>
	  	<li>
		  	<c:choose>
		  		<c:when test="${permissionGrantedBF == true}">
			  		<a href="<c:url value="/businessfunction/init.do" />" id="businessfunction" title="<itera:message key="businessFunction.startscreen.tooltip" />"><itera:message key="businessFunction.startscreen.label" /></a>
		  		</c:when>
		  		<c:otherwise>
			  		<span id="businessfunction"><itera:message key="businessFunction.startscreen.label" /></span>
		  		</c:otherwise>	  	
		  	</c:choose>
	  	</li>
	  	<li>
   			<c:choose>
				<c:when test="${permissionGrantedBM == true }">
					<a href="<c:url value="/show/businessmapping" />" id ="businessmapping" shape="circle" title="<itera:message key="businessMapping.startscreen.tooltip"/>"><itera:message key="businessMapping.startscreen.label"/></a>
				</c:when>
				<c:otherwise>
		  			<span id="businessmapping"><itera:message key="businessMapping.startscreen.label" /></span>
		  		</c:otherwise>
		   </c:choose> 
<!--			<span id="businessmapping"><itera:message key="businessMapping.startscreen.label" /></span> --> 
	  	</li>
		<li>
		  	<c:choose>
		  		<c:when test="${permissionGrantedISD == true}">
			  		<a href="<c:url value="/informationsystemdomain/init.do" />" id="informationsystemdomain" title="<itera:message key="informationSystemDomain.startscreen.tooltip" />"><itera:message key="informationSystemDomain.startscreen.label" /></a>
		  		</c:when>
		  		<c:otherwise>
			  		<span id="informationsystemdomain"><itera:message key="informationSystemDomain.startscreen.label" /></span>
		  		</c:otherwise>	  	
		  	</c:choose>
	  	</li>
		<li>
		  	<c:choose>
		  		<c:when test="${permissionGrantedIS == true}">
			  		<a href="<c:url value="/informationsystem/init.do" />" id="informationsystem" title="<itera:message key="informationSystemRelease.startscreen.tooltip" />"><itera:message key="informationSystemRelease.startscreen.label" /></a>
		  		</c:when>
		  		<c:otherwise>
			  		<span id="informationsystem"><itera:message key="informationSystemRelease.startscreen.label" /></span>
		  		</c:otherwise>	  	
		  	</c:choose>
	  	</li>	  	
		<li>
		  	<c:choose>
		  		<c:when test="${permissionGrantedBO == true}">
			  		<a href="<c:url value="/businessobject/init.do" />" id="businessobject" title="<itera:message key="businessObject.startscreen.tooltip" />"><itera:message key="businessObject.startscreen.label" /></a>
		  		</c:when>
		  		<c:otherwise>
			  		<span id="businessobject"><itera:message key="businessObject.startscreen.label" /></span>
		  		</c:otherwise>	  	
		  	</c:choose>
	  	</li>
	  	<li>
		  	<c:choose>
		  		<c:when test="${permissionGrantedIE == true}">
			  		<a href="<c:url value="/infrastructureelement/init.do" />" id="infrastructureelement" title="<itera:message key="infrastructureElement.startscreen.tooltip" />"><itera:message key="infrastructureElement.startscreen.label" /></a>
		  		</c:when>
		  		<c:otherwise>
			  		<span id="infrastructureelement"><itera:message key="infrastructureElement.startscreen.label" /></span>
		  		</c:otherwise>	  	
		  	</c:choose>
	  	</li>
	  	<li>
		  	<c:choose>
		  		<c:when test="${permissionGrantedAD == true}">
			  		<a href="<c:url value="/architecturaldomain/init.do" />" id="architecturaldomain" title="<itera:message key="architecturalDomain.startscreen.tooltip" />"><itera:message key="architecturalDomain.startscreen.label" /></a>
		  		</c:when>
		  		<c:otherwise>
			  		<span id="architecturaldomain"><itera:message key="architecturalDomain.startscreen.label" /></span>
		  		</c:otherwise>	  	
		  	</c:choose>
	  	</li>
	  	<li>
		  	<c:choose>
		  		<c:when test="${permissionGrantedTC == true}">
			  		<a href="<c:url value="/technicalcomponent/init.do" />" id="technicalcomponent" title="<itera:message key="technicalComponentRelease.startscreen.tooltip" />"><itera:message key="technicalComponentRelease.startscreen.label" /></a>
		  		</c:when>
		  		<c:otherwise>
			  		<span id="technicalcomponent"><itera:message key="technicalComponentRelease.startscreen.label" /></span>
		  		</c:otherwise>	  	
		  	</c:choose>
	  	</li>
		<li>
		  	<c:choose>
		  		<c:when test="${permissionGrantedISI == true}">
			  		<a href="<c:url value="/interface/init.do" />" id="interface" title="<itera:message key="interface.startscreen.tooltip" />"><itera:message key="interface.startscreen.label" /></a>
		  		</c:when>
		  		<c:otherwise>
			  		<span id="interface"><itera:message key="interface.startscreen.label" /></span>
		  		</c:otherwise>	  	
		  	</c:choose>
	  	</li>
	  	<li>
		  	<c:choose>
		  		<c:when test="${permissionGrantedITS == true}">
			  		<a href="<c:url value="/itservice/init.do" />" id="itservice" title="<itera:message key="itService.startscreen.tooltip" />"><itera:message key="itService.startscreen.label" /></a>
		  		</c:when>
		  		<c:otherwise>
			  		<span id="itservice"><itera:message key="itService.startscreen.label" /></span>
		  		</c:otherwise>	  	
		  	</c:choose>
	  	</li>
	</ul> 
		
	<div id="startCitation"><itera:message key="startview.text.citation" /></div>
	<div id="citationMessage"><itera:message key="startview.text.albertEinstein" /></div>
</div>
