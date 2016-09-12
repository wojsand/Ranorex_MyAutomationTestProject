<%@ page contentType="text/html; charset=UTF-8" %>
<%@page import="de.iteratec.iteraplan.businesslogic.common.URLBuilder"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>


<!-- context sensitive url -->
<script type="text/javascript">     
        function buildCurrentUrl() {
            pathArray = window.location.pathname.split( '/' );
            index = pathArray.length-1;
            url = "";

            var context = getApplicationURL().split('/');
            end = context[context.length-1];
            
            while (pathArray[index].indexOf(end) == -1) {
                url = "/"+pathArray[index]+url;
                index--;
            }
            
            url = url.substring(1, url.lenght);
            return url; 
        };
        
        
        function getApplicationURL() {
            return '<%= URLBuilder.getApplicationURL(request) %>';
        }
        
</script>

<c:set var="show" value="collapse" />
<c:set var="icon_to_show" value="icon-chevron-up" /> 
<c:if test="${guiContext.expandedMenuStatus[1]}">
    <c:set var="show" value="in" />
    <c:set var="icon_to_show" value="icon-chevron-down" /> 
</c:if>

<div class="accordion" id="openElementsContainer">
<div class="accordion-group">
     <div class="accordion-heading" onclick="GuiService.setMenuStatus(1);">
       <a class="accordion-toggle" data-toggle="collapse" data-parent="#openElementsContainer" href="#openElementsAccordion"
                        onclick="toggleIcon('openElementsIcon', 'icon-chevron-down', 'icon-chevron-up');" >
                   <i class="icon-file"></i>               
                   <c:set var="nrOfOpenElements" value="${fn:length(guiContext.openElements) }" />
                   <c:out value="${nrOfOpenElements}"/> 
                   <c:out value=" "/>
                   <c:choose>
                   <c:when test="${nrOfOpenElements == 1}">
                       <itera:message key="contextMenu.openElements.singular" />
                   </c:when>
                   <c:otherwise>
                       <itera:message key="contextMenu.openElements.plural" />
                   </c:otherwise>
                   </c:choose>
                   <c:if test="${!(nrOfOpenElements == 0)}">
                    <i style="float: right;" id="openElementsIcon" class="${icon_to_show}"></i> 
                   </c:if>
       </a>
       
     </div>
    <c:if test="${nrOfOpenElements != 0}">
       <div id="openElementsAccordion" class="accordion-body ${show}">
           <div class="accordion-inner">
    
            <ul class="nav nav-list">
                <c:forEach items="${guiContext.openElements}" var="element">
                    
                    <c:set var="flow_url" value="${element.url}" />
                    <c:set var="active" value="" />
                    <c:set var="editColor" value="" />
                    <c:set var="edited" value="" />
                    
                    <c:url var="closeUrl" value="${flow_url }">
                        <c:forEach items="${element.closingParameters}" var="parameter">
                           <c:param name="${parameter.key}" value="${parameter.value}"/>
                        </c:forEach>
                    </c:url>
                    
                    
                    <c:choose>
                    <c:when test="${element.activeDialog}">
                       <!-- use standard transaction if element to close is active -->
                        <c:set var="onClick">
                            changeLocation('<c:out value="${closeUrl}" escapeXml="false"/>');
                            return false;
                        </c:set>
                    </c:when>
                    <c:otherwise>
                        <c:set var="onClick">
                        <!-- use pseudo-redirect when open element to close is not active -->
                            changeLocation('<c:out value="${closeUrl}" escapeXml="false"/>&amp;_currentUrl=' + buildCurrentUrl()); 
                            return false;
                        </c:set>
                    </c:otherwise>
                    </c:choose>
                    
                    <c:if test="${element.beingEdited}">
                         <c:set var="editColor" value="style=\"color:#AC007C;\"" />
                         <c:set var="edited" value="isEdited" />
                         <c:set var="onClick">
                            confirmChangeLocation(msgOkCancel, '<c:out value="${closeUrl}" escapeXml="false"/>'); return false;
                         </c:set>
                    </c:if>
                    
                    
                    <c:if test="${element.activeDialog}">
                        <c:set var="active" value="active" />
                    </c:if>
    
                    
                    <li id="${element.htmlId}" class="${active}">
                        <a ${editColor} href="<c:url value="${element.url}"><c:param name="execution" value="${element.key}" /></c:url>"
                            id="menu.${element.dialog}.${element.key}"
                            <c:if test="${element.truncated}">
                                title="<c:out value='${element.name}'/>"
                            </c:if>
                            >
                            <i class="icon-iteraplan-${fn:toLowerCase(element.dialog)}"></i>
                            
    
                            <%-- italics depending on whether the open element has been saved --%>
                            <c:choose>
                                <c:when test="${not element.beingEdited}">
                                    <c:out value="${element.truncatedLabel}" />
                                </c:when>
                                <c:otherwise>
                                    <i><c:out value="${element.truncatedLabel}" /></i>
                                </c:otherwise>
                            </c:choose> 
                            
                            <%-- provide the close button --%>
                            <i class="icon-remove" style="float: right;" onclick="${onClick}" title="<itera:message key="button.close"/>"></i>
                        </a>
                    </li>
                </c:forEach>
        </ul>
       </div>
    </div>
</c:if>
</div>
</div>
