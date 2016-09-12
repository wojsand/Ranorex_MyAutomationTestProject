<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<tilesx:useAttribute name="selectedLevelRangePath"/>
<tilesx:useAttribute name="selectedLevelRangeField"/>
<tilesx:useAttribute name="minLevel"/>
<tilesx:useAttribute name="maxLevel"/>

    <form:select path="${selectedLevelRangePath}">
      <c:forEach begin="${minLevel}" end="${maxLevel}" var="currentFrom">
        <c:forEach begin="${minLevel}" end="${maxLevel}" var="currentTo">
          <c:set var="selected" value=""/>
          <c:set var="selectedStr" value="${currentFrom}_${currentTo}" />     
          <c:if test="${selectedStr == selectedLevelRangeField}">
            <c:set var="selected" value='selected="selected"'/>
          </c:if>
          <c:if test="${currentFrom < currentTo}">
            <option value="<c:out value="${currentFrom}_${currentTo}"/>" <c:out value="${selected}" escapeXml="false"/>><itera:message key="graphicalExport.landscape.level"/> <c:out value=" ${currentFrom} - ${currentTo}"/></option>
          </c:if>
          <c:if test="${currentFrom == currentTo}">
            <option value="<c:out value="${currentFrom}_${currentTo}"/>" <c:out value="${selected}" escapeXml="false"/>><itera:message key="graphicalExport.landscape.onlyLevel"/> <c:out value=" ${currentFrom}"/></option>
          </c:if>
        </c:forEach>
      </c:forEach>
    </form:select>
