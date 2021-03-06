<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<itera:message key="DATE_FORMAT_LONG" var="dateFormat"/>
<c:set var="functionalPermission" value="${userContext.perms.userHasFuncPermGraphReporting}" scope="request" />
<c:set var="permissionCreateReports" value="${userContext.perms.userHasFuncPermGraphReportingCreate}" scope="request" />

<c:choose>
<c:when test="${functionalPermission}">

	<h1><itera:message key="global.customDashboardInstances" /></h1>
	<br/>
	
	<div class="row-fluid module">
		<div class="module-heading">
			<itera:message key="global.customDashboardInstances"></itera:message>
			
			<tiles:insertTemplate template="/jsp/commonReporting/InstantFilter.jsp">
				<tiles:putAttribute name="filterInputId" value="dashboardInstancesFilter" />
				<tiles:putAttribute name="tableToFilterId" value="dashboardInstancesTable" />
				<tiles:putAttribute name="searchFormIdToUse" value="dashboardInstancesSearchForm" />
			</tiles:insertTemplate>
		</div>
		<div class="module-body-table">
			<table id="dashboardInstancesTable" class="table table-striped table-condensed tableInModule">
				<tr>
					<th class="col-name"><itera:message key="global.name" /></th>
					<th class="col-desc"><itera:message key="global.description" /></th>
					<th class="col-desc"><itera:message key="customDashboard.savedQuery" /></th>
					<th class="col-desc"><itera:message key="customDashboard.template" /></th>
					<th class="col-desc"><itera:message key="global.bbtype" /></th>
					<th class="col-desc"><itera:message key="customDashboard.author" /></th>
					<th class="col-desc"><itera:message key="customDashboard.creationTime" /></th>
					<th class="col-desc"><itera:message key="global.link" /></th>
					<th class="actionsRow"><itera:message key="global.manage" /></th>
				</tr>
				<c:forEach items="${customDashboardDialogMemory.dashboards}" var="dashboard">
					<c:set var="loadCustomDashboardInstanceJavascript"
						value="createHiddenField('action','loadCustomDashboardInstance'); 
								createHiddenField('customDashboardInstanceId','${dashboard.id}');
								document.forms[0].submit();" />
					<c:choose>
						<c:when test="${customDashboardDialogMemory.createDashboard}" >
							<c:set var="style" value="opacity:0.3;" />
							<c:if test="${not empty customDashboardDialogMemory.customDashboardInstance && customDashboardDialogMemory.customDashboardInstance.id eq dashboard.id}">
								<c:set var="style" value="opacity:1;" />
							</c:if>
							<tr style="${style}">
								<td><c:out value="${dashboard.name}" escapeXml="true"/></td>
								<td><c:out value="${dashboard.description}" /></td>
								<td><c:out value="${dashboard.query.name}" escapeXml="true"/></td>
								<td><c:out value="${dashboard.template.name}" escapeXml="true"/></td>
								<td><itera:message key="${dashboard.query.resultBbType.name}" /></td>
								<td><c:out value="${dashboard.author}" escapeXml="true"/></td>
								<td><fmt:formatDate value="${dashboard.creationTime}" pattern="${dateFormat}" /></td>
								<td>
									<i class="icon-bookmark"></i>
								</td>
									<c:choose>
									<c:when test="${customDashboardDialogMemory.customDashboardInstance.id eq dashboard.id }">
										<td style="vertical-align: middle; white-space: nowrap;"><i
											class="icon-pencil" style="opacity:0.3;"></i>
											<a title="<itera:message key="button.delete" />"
												href="javascript:confirmDelete(function() {createHiddenField('action','deleteDashboardInstance'); 
													createHiddenField('customDashboardInstanceId','${dashboard.id}');
													document.forms[0].submit();});">
													<i class="icon-trash"></i>
											</a>
										</td>
									</c:when>
									<c:otherwise>
										<td><i
											class="icon-pencil"></i>
											<i class="icon-trash"></i>
										</td>
									</c:otherwise>
								</c:choose>
							</tr>
						</c:when>
						<c:otherwise>
							<tr class="link">
								<td onclick="changeLocation('<c:url value="/customdashboardinstance/show.do?id=${dashboard.id}" />');"><a href="<c:url value="/customdashboardinstance/show.do?id=${dashboard.id}" />"><c:out value="${dashboard.name}" escapeXml="true"/></a></td>
								<td onclick="changeLocation('<c:url value="/customdashboardinstance/show.do?id=${dashboard.id}" />');"><a href="<c:url value="/customdashboardinstance/show.do?id=${dashboard.id}" />"><c:out value="${dashboard.description}" /></a></td>
								<td onclick="changeLocation('<c:url value="/customdashboardinstance/show.do?id=${dashboard.id}" />');"><a href="<c:url value="/customdashboardinstance/show.do?id=${dashboard.id}" />"><c:out value="${dashboard.query.name}" escapeXml="true"/></a></td>
								<td onclick="changeLocation('<c:url value="/customdashboardinstance/show.do?id=${dashboard.id}" />');"><a href="<c:url value="/customdashboardinstance/show.do?id=${dashboard.id}" />"><c:out value="${dashboard.template.name}" escapeXml="true"/></a></td>
								<td onclick="changeLocation('<c:url value="/customdashboardinstance/show.do?id=${dashboard.id}" />');"><a href="<c:url value="/customdashboardinstance/show.do?id=${dashboard.id}" />"><itera:message key="${dashboard.query.resultBbType.name}" /></a></td>
								<td onclick="changeLocation('<c:url value="/customdashboardinstance/show.do?id=${dashboard.id}" />');"><a href="<c:url value="/customdashboardinstance/show.do?id=${dashboard.id}" />"><c:out value="${dashboard.author}" escapeXml="true"/></a></td>
								<td onclick="changeLocation('<c:url value="/customdashboardinstance/show.do?id=${dashboard.id}" />');"><a href="<c:url value="/customdashboardinstance/show.do?id=${dashboard.id}" />"><fmt:formatDate value="${dashboard.creationTime}" pattern="${dateFormat}" /></a></td>
								<td style="vertical-align: middle; white-space: nowrap;">
								 	<a href="#" onclick="showTipLinkDialog('<itera:message key="global.bookmark" />:', '<itera:message key="global.bookmark" />',  getParentURI()+'<c:url value="../customdashboardinstance/show.do?id=${dashboard.id}" />');" >		
								      	<i class="icon-bookmark"></i>		
									</a>
								</td>
								<td style="vertical-align: middle; white-space: nowrap;"><a
									title="<itera:message key="button.edit" />"
									href="javascript:${loadCustomDashboardInstanceJavascript}"> <i
										class="icon-pencil"></i>
								</a> <a title="<itera:message key="button.delete" />"
									href="javascript:confirmDelete(function() {createHiddenField('action','deleteDashboardInstance'); 
										createHiddenField('customDashboardInstanceId','${dashboard.id}');
										document.forms[0].submit();});">
										<i class="icon-trash"></i>
								</a></td>
							</tr>
						</c:otherwise>
					</c:choose>
				</c:forEach>
			</table>
		</div>
	</div>
	
	<c:if test="${permissionCreateReports}">
	
	<hr></hr>
		
	<!-- Button Group -->

			<div class="btn-group pull-right">
				
				<c:if test="${!customDashboardDialogMemory.createDashboard}">
					<button class="btn btn-primary" type="submit" onclick="createHiddenField('action', 'showNewDashboardInstanceOptions');">
						<itera:message key="customDashboard.button.create" />
					</button>
				</c:if>
				
				<c:if test="${customDashboardDialogMemory.createDashboard}">	
					<c:if test="${customDashboardDialogMemory.savedQueryId == null || customDashboardDialogMemory.templateId == null}">
						<button class="btn" type="submit" onclick="createHiddenField('action', 'hideNewDashboardInstanceOptions');">
							<i class="icon-remove"></i>
							<itera:message key="button.close" />
						</button>
					</c:if>
					<c:if test="${customDashboardDialogMemory.savedQueryId != null && customDashboardDialogMemory.templateId != null}">
						<button class="btn btn-primary" type="submit" onclick="createHiddenField('action', 'saveDashboardInstance');">
							<itera:message key="button.save" />
						</button>
						
						<a class="btn" href="#"	onclick="msgOkCancel(function() {createHiddenField('action', 'rollbackDashboardInstance'); document.forms[0].submit();});">
							<itera:message key="button.cancel" />
						</a>
					</c:if>
				</c:if>
			</div>
			
	<c:if test="${customDashboardDialogMemory.createDashboard}">
		
	<!-- Area to create a new Dashboard instance -->
	<div class="createDashboardArea">
		
		<br/>
			<c:if test="${customDashboardDialogMemory.savedQueryId == null}">
			<h4><itera:message key="customDashboard.instance.selectSavedQuery" /></h4>
			<br/>
			<p>
				
				<itera:message key="customDashboard.savedQuery.description" />
			</p>
			
			<br/>
			
			<tiles:insertTemplate template="/jsp/commonReporting/ShowSavedQuery.jsp">
				<tiles:putAttribute name="permissionCreateReports" value="true" />
				<tiles:putAttribute name="permissionSaveReports" value="false" />
				<tiles:putAttribute name="showBuildingBlockType" value="true" />
				<tiles:putAttribute name="mvc" value="customDashboardDialogMemory" />
				<tiles:putAttribute name="disableDirectExecution" value="true" />
				<tiles:putAttribute name="hideLinkColumn" value="true" />
				<tiles:putAttribute name="skipLoadRequestConfirmation" value="true" />
				<tiles:putAttribute name="disableRows" value="${customDashboardDialogMemory.customDashboardInstance != null}" />
			</tiles:insertTemplate>
		</c:if>
		
		<c:if test="${customDashboardDialogMemory.savedQueryId != null && customDashboardDialogMemory.templateId == null}">
			<h4><itera:message key="customDashboard.instance.selecttemplate" /></h4>
			<br/>
			<p>
				<itera:message key="customDashboard.instance.selecttemplate.description" />
			</p>
			<br/>
			<div class="control-group">
					<label for="customDashboardSavedQueryName" class="control-label"><b><itera:message
									key="customDashboard.savedQuery" />:</b></label>
					<div id="customDashboardSavedQueryName" class="controls">
							<c:out value="${customDashboardDialogMemory.customDashboardInstance.query.name}" escapeXml="true" />
							
					<a title="<itera:message key="button.delete" />"
										href="javascript:createHiddenField('action','deleteSavedQuery'); 
											document.forms[0].submit();">
						<i class="icon-remove"></i>
					</a>
				</div>
			</div>
			<br/>
			<tiles:insertTemplate template="/jsp/CustomDashboard/ShowDashboardTemplates.jsp" />
		</c:if>
		
		
		
		<c:if test="${customDashboardDialogMemory.templateId != null}">
			<br/>
			<div class="row-fluid module">
				<div class="module-heading saved query "><itera:message key="customDashboard.title" /></div>
				<div class="module-body">
					<c:if test="${not empty customDashboardDialogMemory.errors}">
						<div class="alert alert-error">
							<a data-dismiss="alert" class="close">×</a>
							<span><itera:message key="errors.header" /></span>
							<div>
								<c:forEach var="error" items="${customDashboardDialogMemory.errors}">
									<c:out value="${error}" /><br />
								</c:forEach>
							</div>
						</div>
					</c:if>
					
					<div class="row-fluid">
						<div class="control-group">
							<label for="customDashboardSavedQueryName" class="control-label"><itera:message
									key="customDashboard.savedQuery" /></label>
							<div id="customDashboardSavedQueryName" class="controls">
							<c:out value="${customDashboardDialogMemory.customDashboardInstance.query.name}" escapeXml="true" />
							
								<a title="<itera:message key="button.delete" />"
										href="javascript:createHiddenField('action','deleteSavedQuery'); 
											document.forms[0].submit();">
									<i class="icon-remove"></i>
								</a>
							</div>
						</div>
						<div class="control-group">
							<label for="customDashboardTemplateName" class="control-label"><itera:message
									key="customDashboard.template" /></label>
							<div id="customDashboardTemplateName" class="controls">
								<c:out value="${customDashboardDialogMemory.customDashboardInstance.template.name}" escapeXml="true" />
								<a title="<itera:message key="button.delete" />"
										href="javascript:createHiddenField('action','deleteDashboardTemplate'); 
											document.forms[0].submit();">
									<i class="icon-remove"></i>
								</a>
							</div>
						</div>
						<div class="control-group">
							<label for="dashboardNameInput" class="control-label"><itera:message
									key="global.name" /></label>
							<form:input id="dashboardNameInput"
								path="customDashboardInstance.name" />
						</div>
						<p>
							<div class="well">
								<div class="control-group">
									<form:textarea path="customDashboardInstance.description"
										id="dashboardNameDescription" class="description" rows="5" />
								</div>
							</div>
						</p>
						<h5>
							<itera:message key="global.preview" />
						</h5>
						<div class="well">
							<itera:dashboard name="customDashboardDialogMemory" refIdProperty="customDashboardInstance.query.id" property="customDashboardInstance.template.content" userAgent="${header['User-Agent']}" breaksAndSpaces="true" />
						</div>
					</div>
				</div>
			</div>
			</c:if>
			</div>
			</c:if>
		</c:if>
</c:when>
<c:otherwise>
  	<tiles:insertTemplate template="/jsp/common/AccessDenied.jsp" />
</c:otherwise>
</c:choose>
