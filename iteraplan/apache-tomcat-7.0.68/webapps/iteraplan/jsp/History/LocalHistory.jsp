<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>


		
<%-- No Permission? --%>
<c:choose>
	<c:when test="${!isHasViewHistoryPermission}">
		<div class=alert>
			<a class="close" data-dismiss="alert">×</a>
			<itera:message key="AUTHORISATION_REQUIRED"/>
		</div>
	</c:when>
	<c:otherwise>
		<%-- Page Navigation --%>
		<div>
			<div style="float: right; margin-right: 8px; font-weight: normal;">
				<div id="searchResultBar_field" class="field" style="float: left;">
					<%-- Print dropdown for selection of results per page number, automatically selects correct resultsPerPage --%>
					<form:select cssClass="input" id="resultsPerPage" path="resultsPage.resultsPerPage" onchange="localHistory_changePageSize(${resultsPage.fromRevision})">
                        <spring:eval var="resultCount1"
                        expression="@applicationProperties.getProperty('searchresults.option.1')" />
                        <spring:eval var="resultCount2"
                        expression="@applicationProperties.getProperty('searchresults.option.2')" />
                        <spring:eval var="resultCount3"
                        expression="@applicationProperties.getProperty('searchresults.option.3')" />
                        <spring:eval var="defaultResultCount"
                        expression="@applicationProperties.getProperty('searchresults.default.count')" />
				         
						<form:option label="${resultCount1}" value="${resultCount1}">${resultCount1}&nbsp;<itera:message key="search.perPage"/></form:option>
				       	<form:option label="${resultCount2}" value="${resultCount2}">${resultCount2}&nbsp;<itera:message key="search.perPage"/></form:option>
				       	<form:option label="${resultCount3}" value="${resultCount3}">${resultCount3}&nbsp;<itera:message key="search.perPage"/></form:option>
					        
					    <itera:message key="search.option.allresults" var="allLabel"/>
					    <form:option label="${allLabel}" value="-1"/>
					</form:select>
					&nbsp;			    
				</div>

				<%-- Show page numbers and page switching buttons --%>
				<div style="float: right;">
					<%-- Use right spacing to achieve that text remains always at the same position, 
			    	 regardless whether page switching icons are shown or not --%>
					<%-- Test if this is the first page --%>
					<div style="float: right;">
						<c:if test="${resultsPage.firstPage}">
    					   <c:set var="backButtonDisabled" value="disabled" />
					  	</c:if>
						<div style="float: left;">
							<button id="arrow_first_page" class="link navigateSearchResults" onclick="localHistory_loadForward(-1); return false;" ${backButtonDisabled}>
					    		<img alt="First Page" src="<c:url value="/images/pfeil_ganzlinks_schwarz.gif" />" title="" />
				        	</button>
			  			</div>
				  		<div style="float: left;">
							<button id="arrow_prev_page" class="link navigateSearchResults" onclick="localHistory_loadBackward(${resultsPage.fromRevision}); return false;" ${backButtonDisabled}>
								<img alt="Previous Page" src="<c:url value="/images/pfeil_einenlinks_schwarz.gif" />" title="" />
							</button>
						</div>
							
                        <c:if test="${resultsPage.lastPage}">
                           <c:set var="forwardButtonDisabled" value="disabled" />
                        </c:if>
					  	<div style="float: left;">
							<button id="arrow_next_page" class="link navigateSearchResults" onclick="localHistory_loadForward(${resultsPage.toRevision}); return false;" ${forwardButtonDisabled}>
						    	<img alt="Next Page" src="<c:url value="/images/pfeil_einenrechts_schwarz.gif" />" title="" />
							</button>
						</div> 
					</div>	
				</div>
			</div>
		</div>

		<div style="clear: both;" />
		
		<%-- Changesets --%>
		<div>
			<c:forEach items="${resultsPage.bbChangesets}" var="bbChangeset">
				<tiles:insertTemplate template="/jsp/History/ChangesetFragment.jsp">
					<tiles:putAttribute name="bbChangeset" value="${bbChangeset}" />
				</tiles:insertTemplate>
			</c:forEach>
			
			<c:if test="${!isHistoryEnabled}">
				<div class="alert alert-info">
					<a class="close" data-dismiss="alert">×</a>
					<itera:message key="history.disabledwarning"/>
				</div>
			</c:if>
		</div>
	</c:otherwise>
</c:choose>

