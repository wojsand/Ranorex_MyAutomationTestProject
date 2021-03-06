<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<c:set var="functionalPermission" value="${userContext.perms.userHasFuncPermSupportingQuery}" scope="request" />

<%-- Iterate over all domains stored in the dialogMemory. --%>
<c:choose>
	<c:when test="${functionalPermission == true}">
		<div id="SupportingQueryModul" class="row-fluid module">
			<div class="module-heading">
				<itera:message key="permission.query.header" />
			</div>
			<div class="row-fluid">
				<div class="module-body-table">
					<div class="row-fluid">
						<table class="searchResultView table table-striped table-condensed tableInModule">
							<colgroup>
								<col class="col-ico" />
								<col class="col-desc" />
								<col />
							</colgroup>
							<thead>
								<tr>
									<th class="col-ico">
										<itera:message key="global.number" />
									</th>
									<th colspan="2">
										<itera:message key="permission.query.query" />
									</th>
								</tr>
							</thead>
							<tbody>
								<%-- Iterate over the consistency check configurations of the given domain. --%>
								<c:forEach items="${dialogMemory.configurations}" var="configuration" varStatus="loopStatus">
									<%-- The current index of the for-loop. --%>
									<c:set var="index" value="${loopStatus.index}" />
									
									<tr>
										<%-- Display the number of the consistency check. --%>
										<td class="col-ico">
											<c:out value="${index + 1}" />
										</td>
										<td>
											<itera:message key="${configuration.name}" var="name" /> 
											
											<%-- Tokenize the name of the permission query to find the location of each parameter. --%>
											<c:forTokens items="${name}" delims="$" var="token" varStatus="tokenStatus">
											
												<%-- Try to find the parameter according to the name of the token. A token which does return 'null' is considered as text. --%>
												<c:set var="parameter" value="${configuration.parameters[token]}" />
												
												<%-- If a parameter could be found for the current token, decide if 
												     the parameter's single or multiple valued. For single valued 
												     parameters display a text field, for multiple valued parameters 
												     display a select box. --%>
												<c:choose>
													<c:when test="${parameter != null}">
														<c:choose>
															<%-- If the parameter is single valued. --%>
															<c:when test="${parameter['class'].simpleName == 'ParameterSingleOption'}">
																<form:input path="configurations[${index}].parameters[${token}].value" size="5" />
															</c:when>
															<%-- If the parameter is multiple valued. --%>
															<c:otherwise>
																<%-- Get the accessor for the options in the select box. --%>
																<c:set var="accessor" value="${parameter.accessor}" />
																
																<%-- Display the select box filled with the options specified in the parameter object.       --%>          
																<form:select path="configurations[${index}].parameters[${token}].value" multiple="false">
																	<%-- Display the optional first option. --%>
																	<c:if test="${parameter.firstOption != null}">
																		<form:option value="${parameter.firstOption}" >
																			<itera:message key="${parameter.firstOption}" />
																		</form:option>
																	</c:if>
																	
																	<%-- Fill the select box with the options contained in the parameter object. --%>
																	<c:forEach items="${parameter.options}" var="option">
																		<itera:define id="optionKey" name="option" property="${accessor}" />
																		<c:choose>
																			<c:when test="${parameter.localized}">
																				<form:option value="${option.value}">
																					<itera:message key="${optionKey}" />
																				</form:option>
																			</c:when>
																			<c:otherwise>
																				<form:option value="${option.value}">
																					<c:out value="${optionKey}" />
																				</form:option>
																			</c:otherwise>
																		</c:choose>
																	</c:forEach>
																</form:select>
															</c:otherwise>                
														</c:choose>
													</c:when>
													<c:otherwise>
														<%-- Write the tokens. --%>
														<c:out value="${token}" />
													</c:otherwise>
												</c:choose>
											</c:forTokens>
										</td>
										<td>
											<input type="submit" value="<itera:message key="button.run" />" class="btn" onclick="createHiddenField('selectedPermissionQuery', '<c:out value="${configuration.name}"/>');createHiddenField('selectedPermissionQueryNumber', '<c:out value="${index}"/>');" />
										</td>
									</tr>
								</c:forEach>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</c:when>
	<c:otherwise>
		<tiles:insertTemplate template="/jsp/common/AccessDenied.jsp" />
	</c:otherwise>
</c:choose>
