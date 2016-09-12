<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>

<c:set var="subscribePermission" value="${userContext.perms.userHasFuncPermSubscription}" scope="request" />

<c:if test="${subscribePermission}">

	<c:set var="show" value="collapse" />
	<c:set var="icon_to_show" value="icon-chevron-up" />
	<c:if test="${guiContext.expandedMenuStatus[2]}">
		<c:set var="show" value="in" />
		<c:set var="icon_to_show" value="icon-chevron-down" /> 
	</c:if>
	
	<div class="accordion" id="watchedElementsContainer">
		<div class="accordion-group">
			<div class="accordion-heading" onclick="GuiService.setMenuStatus(2);">
				<a class="accordion-toggle" data-toggle="collapse" data-parent="#watchedElementsContainer" href="#watchedElementsAccordion"
						onclick="toggleIcon('watchedElementsIcon', 'icon-chevron-down', 'icon-chevron-up');" >
					<i class="icon-envelope"></i>
				    <c:set var="nrOfSubscribedElements" value="${fn:length(guiContext.subscribedElements) }" />
                    <c:out value="${nrOfSubscribedElements}"/> 
                    <c:out value=" "/>
                    <c:choose>
                    <c:when test="${nrOfSubscribedElements == 1}">
                       <itera:message key="global.subscribed.singular" />
                    </c:when>
                    <c:otherwise>
                       <itera:message key="global.subscribed.plural" />
                    </c:otherwise>
                    </c:choose>
					<c:if test="${!(nrOfSubscribedElements == 0)}">
					   <i style="float: right;" id="watchedElementsIcon" class="${icon_to_show}"></i>
				    </c:if>
				</a>
			</div>
			
			<c:if test="${!(nrOfSubscribedElements == 0)}">
			<div id="watchedElementsAccordion" class="accordion-body ${show}">
				<div class="accordion-inner">
						<ul class="nav nav-list">
							<c:forEach var="resultItem" items="${guiContext.subscribedElements}">
							<c:set var="link">
				 					<itera:linkToElement name="resultItem" type="html"/>
							</c:set>
							<c:set var="linkScript">
				 					<itera:linkToElement name="resultItem" type="js"/>
							</c:set>
							<c:set var="output">
					  				<itera:write plainText="true" name="resultItem" property="name" escapeXml="false" />
								</c:set>
								
								<li>
									<div onclick="${linkScript}" style="padding: 3px 0">
										<c:set var="icon_class" value="${fn:replace(fn:toLowerCase(resultItem.typeOfBuildingBlock),'release', '')}"/>
										<c:if test="${fn:contains(icon_class, 'interface')}">
											<c:set var="icon_class" value="interface"/>
											<c:set var="output">
						  						<itera:write plainText="true" name="resultItem" property="interfaceInformation" escapeXml="false" />
											</c:set>
										</c:if>
										<i class="icon-iteraplan-${icon_class}"></i>
										<itera:htmlLinkToElement link="${link}" isLinked="${linklength != 0}">
						  					<c:out value="${output}" />
										</itera:htmlLinkToElement>
									</div>
								</li>
						</c:forEach>
					</ul>
				</div>
			</div>
		</c:if>
		</div>
	</div>

</c:if>
