<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<tilesx:useAttribute name="atPart" />

<tilesx:useAttribute name="showDetailsInEditMode" ignore="true" />
<tilesx:useAttribute name="popoverOptions" ignore="true" />

<%--Tests if this attribute type is mandatory --%>
<c:choose>
	<c:when test="${atPart.attributeType.mandatory == true}">
		<itera:message var="isMandatory" key="global.yes" />
	</c:when>
	<c:otherwise>
		<itera:message var="isMandatory" key="global.no" />
	</c:otherwise>
</c:choose>

<c:set var="avs" value="" />
<c:set var="ord" value="" />

<c:set var="popoverId"><%= (int) java.lang.Math.round((1 + (100000 - 1) * java.lang.Math.random())) %></c:set>

<a href="#" rel="popover" id="<c:out value="${popoverId}" />" onclick="return popup<c:out value="${popoverId}" />();">
<i class="icon-info-sign"></i></a>


<script type="text/javascript">
function popup<c:out value="${popoverId}" />() {
	loadAttributeTypeDescription('<c:out value="${popoverId}" />', <c:out value="${atPart.attributeType.id}" />, 2, '<c:url value="/attributetype/loadAttributeTypeDescription.do" />', ['<span><c:out value="${atPart.attributeType.name}" /> (<itera:message key="global.detail" />):</span>'

<%-- Values for all Attributes --%>
, '<itera:message key="global.description" />'
, '<itera:message key="manageAttributes.mandatoryattribute" />'
, '<c:out value="${isMandatory}" />'

<c:choose>
	<c:when test="${atPart.attributeType.typeOfAttribute.name == 'attribute.type.enum'}">
		<c:choose>
			<c:when test="${atPart.attributeType.multiassignmenttype == true && showDetailsInEditMode == true}">
			
				<%-- Additional values for Enum-Multi in Edit-Mode --%>
				, '', ''
					, '<itera:message key="manageAttributes.possiblevalues" />', ''
					<c:forEach items="${atPart.allAVs}" var="av" varStatus="ind">
  					, '', ''
					, '<itera:message key="global.attributevalue" />'
					, '<c:out value="${av.name}" />'
					, '<itera:message key="global.description" />'
					<c:set var="avs"><c:out value="${avs}" /><c:out value="${av.id}" />, </c:set>
					<c:set var="ord"><c:out value="${ord}" /><c:out value="${5*ind.index+13}" />, </c:set>
				</c:forEach>
				
			</c:when>
			<c:when test="${atPart.attributeType.multiassignmenttype == true}">
				
				<%-- Additional values for Enum-Multi --%>
				<c:forEach items="${atPart.connectedAVs}" var="av" varStatus="ind">
					, '', ''
					, '<itera:message key="global.attributevalue" />'
					, '<c:out value="${av.name}" />'
					, '<itera:message key="global.description" />'
					<c:set var="avs"><c:out value="${avs}" /><c:out value="${av.id}" />, </c:set>
					<c:set var="ord"><c:out value="${ord}" /><c:out value="${6*ind.index+9}" />, </c:set>
				</c:forEach>

			</c:when>
			<c:when test="${atPart.attributeType.multiassignmenttype == false && showDetailsInEditMode == true}">
					
				<%-- Additional values for Enum-Single in Edit-Mode --%>
				, '', ''
					, '<itera:message key="manageAttributes.possiblevalues" />', ''
					<c:forEach items="${atPart.availableAVs}" var="av" varStatus="ind">
						<c:if test="${!empty av.name}">
	  					, '', ''
						, '<itera:message key="global.attributevalue" />'
						, '<c:out value="${av.name}" />'
						, '<itera:message key="global.description" />'
						<c:set var="avs"><c:out value="${avs}" /><c:out value="${av.id}" />, </c:set>
						<c:set var="ord"><c:out value="${ord}" /><c:out value="${5*ind.index+13}" />, </c:set>
					</c:if>
				</c:forEach>
						
			</c:when>
			<c:when test="${atPart.attributeType.multiassignmenttype == false}">
					
				<%-- Additional values for Enum-Single --%>
				, '', ''
				, '<itera:message key="global.attributevalue" />'
				, '<c:out value="${atPart.attributeValue.name}" />'
				, '<itera:message key="global.description" />'
				<c:set var="avs" value="${atPart.attributeValue.id}" />					
				<c:set var="ord" value="9" />
			</c:when>
		</c:choose>
	</c:when>
	<c:when test="${atPart.attributeType.typeOfAttribute.name == 'attribute.type.number'}">
		
		<%-- Additional values for Number --%>
		, '<itera:message key="global.lowerbound.short" />'
		, '<c:out value="${atPart.attributeType.minValue}" />'
		, '<itera:message key="global.upperbound.short" />'
		, '<c:out value="${atPart.attributeType.maxValue}" />'
		, '<itera:message key="manageAttributes.numberAT.unit" />'
		, '<c:out value="${atPart.attributeType.unit}" />'
		
	</c:when>

</c:choose>

], [ <c:out value="${avs}" /> ], [ <c:out value="${ord}" /> ]
	<c:if test="${not empty popoverOptions}">
	, <c:out value="${popoverOptions}" escapeXml="false" />
	</c:if>
); return false;
}
</script>
