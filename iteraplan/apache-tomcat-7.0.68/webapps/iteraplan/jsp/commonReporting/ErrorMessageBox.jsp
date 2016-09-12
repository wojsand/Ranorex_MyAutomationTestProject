<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<%-- for membean errors --%>
<c:if test="${not empty ERROR_TRIGGER}">
	<script type="text/javascript">
		/* <![CDATA[ */
		
		resetScrollCoordinates();
		scrollToCoordinates();
		             
		
		/* ]]> */
	</script>
	<div class="alert alert-error">
		<a data-dismiss="alert" class="close">×</a> 
		<span><itera:message key="errors.header" /></span>
		<div>
			<c:forEach var="error" items="${memBean.errors}">
				<c:out value="${error}" />
				<br />
			</c:forEach>
		</div>
	</div>
</c:if>
