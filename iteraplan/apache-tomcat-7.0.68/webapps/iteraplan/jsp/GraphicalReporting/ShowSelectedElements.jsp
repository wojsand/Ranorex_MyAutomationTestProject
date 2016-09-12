<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>

<tilesx:useAttribute name="messageKey"/>
<tilesx:useAttribute name="messageKeyArg" ignore="true"/>
<tilesx:useAttribute name="collection"/>
<tilesx:useAttribute name="field" ignore="true"/>
<tilesx:useAttribute name="extendedOptionalField" ignore="true"/>
<tilesx:useAttribute name="presentationId" ignore="true"/>
<tilesx:useAttribute name="simpleList" ignore="true"/>
<tilesx:useAttribute name="memory" ignore="true" />

<c:if test="${presentationId == null}">
  <c:set var="presentationId" value="${messageKey}_${messageKeyArg}"/>
</c:if>
<c:set var="presentationId">${itera:replaceNoIdChars(presentationId)}</c:set>

<c:if test="${empty memory}">
	<c:set var="memory" value="memBean" />
</c:if>
<itera:define id="selectedElementCountsCollection" name="${memory}" property="${collection}"/>
<c:set var="selectedElementCount" value="${fn:length(selectedElementCountsCollection)}"/>

<c:choose>
	<c:when test="${selectedElementCount == 0}">
	  <div class="alert" >
	  	<a class="close" data-dismiss="alert">×</a>
	    <itera:message key="reports.error.noSelection"/>
	  </div>
	  <br />
	</c:when>
	<c:otherwise>
	
<c:if test="${empty simpleList}">
		<div class="accordion" id="selectedElementsContainer_${presentationId}">
            <div class="accordion-group">
              <div class="accordion-heading">
                <a class="accordion-toggle" data-toggle="collapse" data-parent="#selectedElementsContainer_${presentationId}" href="#selectedElements_${presentationId}"
						onclick="toggleIcon('selectedElements_${presentationId}_icon', 'icon-resize-full', 'icon-resize-small');" >
				  <i id="selectedElements_${presentationId}_icon" class="icon-resize-full"></i>
                  <itera:message key="${messageKey}"><itera:param value="${messageKeyArg}"/></itera:message> (<c:out value="${selectedElementCount}"/>)
                </a>
              </div>
              <div id="selectedElements_${presentationId}" class="accordion-body collapse">
                <div class="accordion-inner">
                  <br />
</c:if>

				  <c:forEach var="object" items="${selectedElementCountsCollection}">
				    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				    <c:choose>
				      <c:when test="${not empty field}">
				        <itera:write name="object" property="${field}" escapeXml="true" />
				      </c:when>
				      <c:otherwise>
				        <c:out value="${object}"/>
				      </c:otherwise>
				    </c:choose>
				    <c:if test="${not empty extendedOptionalField}">
				      <itera:define id="extendedOptionalValue" name="object" property="${extendedOptionalField}" />
				      <c:if test="${not empty extendedOptionalValue}">
				        &nbsp;(${extendedOptionalValue})
				      </c:if>
				    </c:if>
				    <br />
				  </c:forEach>

<c:if test="${empty simpleList}">
                </div>
              </div>
            </div>
          </div>
</c:if>
          
	</c:otherwise>
</c:choose>
