<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<tilesx:useAttribute name="dimension_key" ignore="true" />
<tilesx:useAttribute name="available_attributes_field" />
<tilesx:useAttribute name="selected_id_field" />
<tilesx:useAttribute name="refresh_report_event" ignore="true" />
<tilesx:useAttribute name="show_enum" />
<tilesx:useAttribute name="show_number" />
<tilesx:useAttribute name="show_text" />
<tilesx:useAttribute name="show_date" />
<tilesx:useAttribute name="show_responsibility" />
<tilesx:useAttribute name="dimension_help_key" ignore="true" />
<tilesx:useAttribute name="disabledAttribute" ignore="true" />
<%-- If set to true: this jsp is displaying a minimal version without the table markup --%>
<tilesx:useAttribute name="minimal" ignore="true" />

<c:set var="refreshReportJavaScript" value="" />
<c:if test="${not empty refresh_report_event}">
  <c:set var="refreshReportJavaScript"
        value="flowAction('${refresh_report_event}');" />
</c:if>

<c:if test="${empty disabledAttribute}">
<!--     enable attribute selection   -->
    <c:set var="disabledAttribute" value="false" />
</c:if>

<c:if test="${empty minimal}" >
<div class="control-group">
    <c:if test="${not empty dimension_key}">
      <label class="control-label">
        <itera:message key="${dimension_key}" />:
      </label>
    </c:if>
    
    <div class="controls">
</c:if>

      <form:errors path="${selected_id_field}" cssClass="errorMsg" htmlEscape="false"/>
      <form:select path="${selected_id_field}" cssStyle="width:200px;" onchange="${refreshReportJavaScript}"
          disabled="${disabledAttribute}">
        <itera:define id="available_attributes" name="memBean" property="${available_attributes_field}"/>
        <c:forEach var="at" items="${available_attributes}">
          <c:choose>
            <c:when test="${(at.type == 'blank' || at.type == 'fixed')}">
              <form:option value="${at.id}"><itera:message key="${at.name}" /></form:option>
            </c:when>
            <c:otherwise>
              <form:option value="${at.id}"><c:out value="${at.name}" /></form:option>
            </c:otherwise>
          </c:choose>
        </c:forEach>
      </form:select>

<c:if test="${empty minimal}" >
    </div>
    <c:if test="${dimension_help_key != null}">
      <p class="help-block">
        <itera:message key="${dimension_help_key}" />
      </p>
    </c:if>
    </div>
</c:if>
