<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<c:set var="functionalPermissionImport"
	value="${userContext.perms.userHasFuncPermExcelImport}" scope="request" />


<c:set var="asyncImportRunning"
	value="${memBean.asyncImportRunning}" scope="request" />

<h1>
	<itera:message key="${memBean.importTypeHeader}" />
</h1>

<c:choose>
	<c:when test="${functionalPermissionImport == true}">

		<div id="importStrategyMessage" class="alert alert-info">
			<button class="close" data-dismiss="alert" type="button">×</button>
			<itera:message key="global.import.strategy.hint" >
				<itera:param>${memBean.importStrategy.text}</itera:param>
				<itera:param>${memBean.importingUser}</itera:param>
			</itera:message>
		</div>

		<c:if test="${memBean.partialImport}">
			<tiles:insertTemplate template="PartialImportInformation.jsp" />
		</c:if>

		<div id="excelUploadModule" class="row-fluid module">
			<div class="module-heading">
				${memBean.fileName}
				<c:if test="${not empty memBean.exportTimestamp}">
					<span style="font-weight: normal"> (<itera:message
							key="global.excel.import.partial.timestamp">
							<itera:param value="${memBean.exportTimestamp}"></itera:param>
						</itera:message>)
					</span>
				</c:if>
			</div>
			<div class="module-body">
				<table>
					<c:forEach var="importStep" items="${memBean.importSteps}">
						<tr>
							<td><itera:message key="${importStep.key.presentationKey}" /></td>
							<c:choose>
								<c:when	test="${importStep.value == 'DONE'}">
									<td class="excel-import-label excel-import-done">done</td>
								</c:when>
								<c:when	test="${importStep.value == 'PENDING' && importStep.key != 'MODEL_WRITE'}">
									<td class="excel-import-label excel-import-pending"><img src="../images/loadingDots.gif" /></td>
								</c:when>
								<c:when	test="${importStep.value == 'PENDING' && importStep.key == 'MODEL_WRITE'}">
									<td colspan="2" class="excel-import-label excel-import-pending">
									   <div class="progress import-progress">
									       <c:set var="barCss">width: ${(memBean.importProgress / 5)}%</c:set>
                                           <div class="bar" role="progressbar" aria-valuenow="${memBean.importProgress}" aria-valuemin="0" aria-valuemax="500" style="${barCss}"></div>
                                       </div>
                                    </td>
								</c:when>
								<c:when	test="${importStep.value == 'ERROR'}">
									<td class="excel-import-label excel-import-error">error</td>
								</c:when>
								<c:when	test="${importStep.value == 'TODO'}">
									<td class="excel-import-label">-</td>
								</c:when>
								<c:when	test="${importStep.value == 'SKIPPED'}">
									<td class="excel-import-label excel-import-skipped">skipped</td>
								</c:when>
							</c:choose>
						</tr>
					</c:forEach>
				</table>

				<c:set var="cancelLabel"><itera:message key='button.cancel' /></c:set>
				<c:set var="cancelIcon" value="icon-remove"/>
				
				<c:if test="${memBean.importFinished}">				
					<c:set var="cancelLabel"><itera:message key='button.ok' /></c:set>
					<c:set var="cancelIcon" value="icon-ok"/>
				</c:if>
        
        <c:if test="${not memBean.importFinished && not empty memBean.nextStepToFinish}">
          <c:set var="nextImportStepToFinish" value="${memBean.nextStepToFinish.key}" />
          <c:set var="nextAction" value="${memBean.nextStepToFinish.key.action}" />
          <c:set var="nextStepToFinishStatus" value="${memBean.nextStepToFinish.value}" />
        </c:if>				
        
      <div class="import-controls">
        <%-- Only display import controls for the user who started the import --%>
				<c:if test="${memBean.executingImportUser}">
					<%-- next button --%>
					<c:if test="${not memBean.importFinished && empty memBean.resultMessages.errors}">
						<c:choose>
					    <%-- only when there is no import step currently processing --%>
							<c:when test="${not memBean.stepProcessing}">
        					<button class="link btn import-btn-small" onclick="flowAction('cancel');">
                    <i class="${cancelIcon}"></i> ${cancelLabel}
        					</button>
									<button class="link btn btn-primary import-btn-small" onclick="flowAction('${nextAction}');">
										<itera:message key="global.forward" /><i class="icon-chevron-right"></i>
									</button>
							</c:when>
							<c:otherwise>
        					<button class="link btn import-btn-small" disabled="disabled">
                    <i class="${cancelIcon}"></i> ${cancelLabel}
        					</button>
									<button class="link btn import-btn-small" disabled="disabled">
										<itera:message key="global.forward" /><i class="icon-chevron-right"></i>
									</button>
							</c:otherwise>
							
						</c:choose>
					</c:if>	
				</c:if>

        <a href="javascript:flowAction('backToMain');" class="link btn import-btn-wide">
          <i class="icon-chevron-up"></i> <itera:message key="global.import.button.backToMain" />
        </a>
      </div>
      
				<%-- javascript for polling --%>
				<c:if test="${memBean.stepProcessing || (not memBean.executingImportUser && not memBean.importFinished)}">
					<script>
					  $(document).ready(function() {
						  importStepFinishedPoll('<c:url value="/" />', '<c:out value="${nextImportStepToFinish}" />', '<c:out value="${nextStepToFinishStatus}" />');
						});
					</script>
				</c:if>
				
			</div>
		</div>
	

		<tiles:insertTemplate template="AllMessagesTile.jsp" />

	</c:when>

	<c:otherwise>
		<tiles:insertTemplate template="/jsp/common/AccessDenied.jsp" />
	</c:otherwise>

</c:choose>
