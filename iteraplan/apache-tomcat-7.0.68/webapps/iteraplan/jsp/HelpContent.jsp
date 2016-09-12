<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<spring:eval var="onlineDocuLinkProp" expression="@applicationProperties.getProperty('documentation.online.url')" />
<c:set var="onlineDocuLink"><c:out value="${onlineDocuLinkProp}" /></c:set>

<h1><itera:message key="help.header" /></h1>
<br/>
<itera:message key="help.intro" />
<div id="helpDocumentsModul" class="row-fluid module">
	<div class="module-heading">
		<itera:message key="help.documents" />
	</div>
	<div class="row-fluid">
		<div class="module-body">
			<div class="row-fluid">
				<ul>
					<li>
						<a href="../manuals/UserGuide.pdf" target="_blank">
							<itera:message key="help.documents.usermanual" />
						</a>
						<itera:message key="help.documents.usermanual.seealso.start" /> 
					    <a href="${onlineDocuLink}" target=_blank>
					    	<itera:message key="help.documents.usermanual.seealso.onlineversion" /> 
						</a>    
					    <itera:message key="help.documents.usermanual.seealso.end" /> 
					</li>
					<li>
						<a href="../manuals/RELEASE.txt" target="_blank">
							<itera:message key="help.documents.release" />
						</a>
					</li>
				</ul>
			</div>
		</div>
	</div>
</div>

<div id="helpGlossaryModul" class="row-fluid module">
	<div class="module-heading">
		<itera:message key="help.glossary" />
	</div>
	<div class="row-fluid">
		<div class="module-body-table">
			<div class="row-fluid">
				<table class="table table-striped table-condensed tableInModule">
					<tbody>
			  			<tr>
			  				<td><itera:message key="businessDomain.singular"/></td>
			  				<td><itera:message key="glossary.businessDomain"/></td>
			  			</tr>
			  			<tr>
			  				<td><itera:message key="businessProcess.singular"/></td>
			  				<td><itera:message key="glossary.businessProcess"/></td>
			  			</tr>
			  			<tr>
			  				<td><itera:message key="global.business_function"/></td>
			  				<td><itera:message key="glossary.business_function.description"/></td>
			  			</tr>
			  			<tr>
			  				<td><itera:message key="global.product"/></td>
			  				<td><itera:message key="glossary.product.description"/></td>
			  			</tr>
			  			<tr>
			                <td><itera:message key="businessUnit.singular"/></td>
			                <td><itera:message key="glossary.businessUnit"/></td>
			            </tr>
			            <tr>
			  				<td><itera:message key="businessObject.singular"/></td>
			  				<td><itera:message key="glossary.businessObject"/></td>
			  			</tr>
			  			<tr>
			  				<td><itera:message key="informationSystemDomain.singular"/></td>
			  				<td><itera:message key="glossary.informationSystemDomain"/></td>
			  			</tr>
			  			<tr>
			  				<td><itera:message key="informationSystemRelease.singular"/></td>
			  				<td><itera:message key="glossary.informationSystemRelease"/></td>
			  			</tr>
			  			<tr>
			  				<td><itera:message key="interface.singular"/></td>
			  				<td><itera:message key="glossary.interface"/></td>
			  			</tr>
			  			<tr>
			  				<td><itera:message key="itService.singular"/></td>
			  				<td><itera:message key="glossary.itService"/></td>
			  			</tr>
			  			<tr>
			  				<td><itera:message key="architecturalDomain.singular"/></td>
			  				<td><itera:message key="glossary.arch_domain.description"/></td>
			  			</tr>
			  			<tr>
			  				<td><itera:message key="technicalComponentRelease.singular"/></td>
			  				<td><itera:message key="glossary.technicalComponentRelease"/></td>
			  			</tr>	
			  			<tr>
			  				<td><itera:message key="deploymentInfrastructure"/></td>
			  				<td><itera:message key="glossary.infrastructureElement"/></td>
			  			</tr>	
			  		  	<tr>
			  				<td><itera:message key="project.singular"/></td>
			  				<td><itera:message key="glossary.project"/></td>
			  			</tr>
		  			</tbody>				
		  		</table>
			</div>
		</div>
	</div>
</div>
