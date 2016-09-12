<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>


<%-- Display error messages from GuiController.addErrorMessage(String), if existing. --%>

<c:if test="${not empty requestScope['iteraplanMvcErrorMessages']}">
  <div class="alert alert-error">
    <a data-dismiss="alert" class="close">×</a> 
    <span><itera:message key="errors.header" /></span>
    <div>
      <c:forEach var="error" items="${requestScope['iteraplanMvcErrorMessages']}">
        <c:out value="${error}" />
        <br />
      </c:forEach>
    </div>
  </div>
</c:if>
