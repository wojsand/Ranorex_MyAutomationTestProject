<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>

<c:if test="${not empty _iteraplan_exception_message}">
	<div class="alert alert-error">
		<div class="errorHeader">
		  <c:forEach var="error" items="${flowRequestContext.messageContext.allMessages}">
		    <span id="*.errors"><c:out value="${error.text}" escapeXml="false" /></span>
		  </c:forEach>
		  <%-- insert an exception message provided by one of our exception handlers --%>
		  <c:if test="${not empty _iteraplan_exception_message}">
		    <span id="*.errors"><c:out value="${_iteraplan_exception_message}" escapeXml="false"/></span>
		  </c:if>
		</div>
	</div>
</c:if>

<%-- Only display results if there are no error messages --%>
<c:if test="${empty _iteraplan_exception_message}">
	<c:set var="functionalPermission" value="${userContext.perms.userHasFuncPermSearch}" scope="request" />
	<br />
	<%-- Displays the search results --%>
	<c:choose>
		<c:when test="${dialogMemory.searchDTO != null && dialogMemory.numberOfResults > 0 && functionalPermission}">
			<div id="SearchResultsContainer" class="row-fluid module">
				<div class="module-heading">
				    <itera:message key="search.results" /> "<c:out value="${dialogMemory.searchField}" />"
					<div style="float: right; margin-right: 10px; font-weight: normal;">
						<itera:message key="search.resultsFromTO" /> 
						<c:out value=" ${dialogMemory.numberOfResults} " /> 
						<itera:message key="search.resultsOfAbout" /> 
						<c:out value=" ${dialogMemory.numberOfResults}" />
					</div>
				</div>
				<div class="row-fluid">
					<div class="module-body-table">
						<div class="row-fluid">
							<table class="table table-striped table-condensed tableInModule">
								<thead>
									<tr>
										<th><itera:message key="search.resultsTitleNameVersion" /></th>
										<th><itera:message key="global.description" /></th>
										<th><itera:message key="manageSearch.foundIn" /></th>
									</tr>
								</thead>
								<c:set var="linkJavaScript" value="" />
								<c:set var="linkAHref" value="" />
								<c:set var="linkStyle" value="link" />
								<tbody>
									<c:forEach items="${dialogMemory.searchDTO.availableBBE}" var="bbe">
										<tr>
									    	<th colspan="3"><itera:message key="${bbe}" /></th>
										</tr>
										<c:forEach items="${dialogMemory.searchDTO.searchMap[bbe]}" var="container">
						
											<c:set var="linkJavaScript">
												<itera:linkToElement name="container" type="js"/>
											</c:set>
											
											<c:set var="linkAHref">
												<itera:linkToElement name="container" type="html"/>
											</c:set>
											
											<tr>
												<td class="<c:out value="${linkStyle}" />" onclick="<c:out value="${linkJavaScript}" />" >					
													<itera:htmlLinkToElement link="${linkAHref}" isLinked="true">
														<c:out value="${container.name}" /> <c:out value="${container.version}" />
													</itera:htmlLinkToElement>						
												</td>
												<td class="<c:out value="${linkStyle}" />" onclick="<c:out value="${linkJavaScript}" />" >
													<itera:htmlLinkToElement link="${linkAHref}" isLinked="true">
														<itera:write name="container" property="description" plainText="true" escapeXml="true" />
													</itera:htmlLinkToElement>
												</td>
												<td>
													<%-- Output found in as list. Might be decorated by list-styles 'decimal', 'lower-roman' etc.  --%>
													<ul class="compact" style="list-style-type: none;">
														<c:forEach items="${container.foundIn}" var="foundIn">
															<li><c:out value="${foundIn}" escapeXml="false" /></li>
														</c:forEach>
													</ul>
												</td>
											</tr>
										</c:forEach>
									</c:forEach>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</c:when>
	
		<c:otherwise>
			<c:choose>
				<c:when test="${functionalPermission == true}">
					<p><itera:message key="search.results.resultListIsEmtpy" /></p>
				</c:when>
			</c:choose>
		</c:otherwise>
	</c:choose>
</c:if>

