<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<c:set var="functionalPermissionTemplates" value="${userContext.perms.userHasFuncPermTemplates}" scope="request" />

<c:choose>
	<c:when test="${functionalPermissionTemplates == true}">

		<c:if test="${not empty dialogMemory.errors}">
			<script type="text/javascript">
				/* <![CDATA[ */
				
				resetScrollCoordinates();
				scrollToCoordinates();            
				             
				function clearErrors() {
					flowAction('clearErrors');
				}
				
				/* ]]> */
			</script>
			<div class="alert alert-error">
				<a data-dismiss="alert" class="close" onclick="clearErrors();">×</a> 
				<span><itera:message key="errors.header" /></span>
				<div>
					<c:forEach var="error" items="${dialogMemory.errors}">
						<c:out value="${error}" />
						<br />
					</c:forEach>
				</div>
			</div>
		</c:if>

		<h1>
			<itera:message key="global.templates" />
		</h1>

		<c:forEach var="type" items="${dialogMemory.availableTypes}">
			<c:set var="infos" value="${dialogMemory.templateInfos[type]}" />
			<itera:message var="templateTypeName" key="${type.nameKey}" />
			<itera:message var="templateExtendedInfo" key="${type.extendedInfoKey}" />

			<div class="row-fluid module">
				<div class="module-heading">${templateTypeName} ${templateExtendedInfo}</div>
				<div class="row-fluid">
					<div class="module-body">
						<div class="row-fluid">
							<c:forEach var="info" items="${infos}" varStatus="loopStatus">
								<div class="control-group">
									<div class="controls templateDownload">
										<a
											href="javascript:createHiddenField('action','download');
											createHiddenField('targetTemplateType', '<c:out value="${type.nameKey}"/>');
											createHiddenField('targetTemplateName', '<c:out value="${info.name}"/>');
											document.forms[0].submit();"
											id='download_${type.nameKey}_${info.name}' class="link btn">
											<i class="icon-download-alt"></i> <itera:message key="global.download" />
										</a>
									</div>
									<div class="templateName">
										<c:if
											test="${info.deletable == true}">
											<a href="#"
												onclick="createHiddenField('action','remove');
													createHiddenField('targetTemplateType', '<c:out value="${type.nameKey}"/>');
													createHiddenField('targetTemplateName', '<c:out value="${info.name}"/>');
													document.forms[0].submit();"
												id="remove_<c:out value="${type.nameKey}" />_<c:out value="${loopStatus.index}" />"
												title="<itera:message key="tooltip.remove"/>"> <i
												class="icon-remove"></i>
											</a>
										</c:if>
										<c:out value="${info.name}" />
									</div>
								</div>
							</c:forEach>

							<!-- Error Notifications -->
							<c:if test="${type.nameKey == dialogMemory.targetTemplateType}">
								<c:choose>
									<c:when test="${dialogMemory.templateFileNull == true}">
										<div class="alert">
											<a class="close" data-dismiss="alert">×</a>
											<itera:message key="templates.noFileSelected">
												<itera:param value="${templateTypeName}" />
											</itera:message>
										</div>
									</c:when>
									<c:when test="${dialogMemory.wrongFileType == true}">
										<div class="alert">
											<a class="close" data-dismiss="alert">×</a>
											<itera:message key="templates.wrongFileType">
												<itera:param value="${type.extensions}" />
											</itera:message>
										</div>
									</c:when>
								</c:choose>
							</c:if>
							<!-- End Error Notifications -->

							<div class="control-group">
								<div class="controls" style="width: 100px;">
									<input class="btn" type="submit"
										onclick="createHiddenField('action','upload');createHiddenField('targetTemplateType', '<c:out value="${type.nameKey}"/>');"
										name='upload_${type.nameKey}_Template'
										value='<itera:message key="button.upload" />' />
								</div>
								<label class="control-label-right"
									for="download_${type.nameKey}_${info.name}">
									<input name="${type.nameKey}_file" type="file" size="100%" />
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</c:forEach>

		<%-- Custom Dashboard Template config--%>
		<tiles:insertTemplate template="/jsp/Templates/CustomDashboardTemplatePage.jsp" />

	</c:when>
	<c:otherwise>
		<tiles:insertTemplate template="/jsp/common/AccessDenied.jsp" />
	</c:otherwise>
</c:choose>
