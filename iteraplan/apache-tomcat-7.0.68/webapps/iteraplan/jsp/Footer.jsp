<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>

<spring:eval var="buildid"	expression="@applicationProperties.getProperty('build.id')" />

<div>
<span class="iteratecfooter">
 &copy; <itera:message key="footer.text" />
</span>
&nbsp;&nbsp;
<itera:message key="footer.build_id" />: <c:out value="${buildid}" />
</div>
<c:if test="${userContext.fullLicense}">
  <div>
    <fmt:message key="footer.license_information">
      <fmt:param value="${userContext.licensee}" />
    </fmt:message>
    <c:if test="${userContext.aboutToExpire}">
      <fmt:formatDate value="${userContext.expiryDate}" type="date" var="formattedExpiryDate" />
      &nbsp;-&nbsp;
      <fmt:message key="footer.license_warning">
        <fmt:param value="${formattedExpiryDate}" />
      </fmt:message>
    </c:if>
  </div>
</c:if>
