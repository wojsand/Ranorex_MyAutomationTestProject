<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>

<!-- Tile displaying a color selection select field -->

<tilesx:useAttribute name="colorPath" />
<tilesx:useAttribute name="currentColor" />
<tilesx:useAttribute name="availableColors" />

						<form:errors path="${colorPath}" cssClass="errorMsg" htmlEscape="false"/>
						<%-- needs to be done like this due to possible conflicts with '#' and '$' following one another --%>
						<c:set var="selectColorCss">
							<c:out value="background-color:#" /><c:out value="${currentColor}" />
						</c:set>
						<form:select path="${colorPath}" onchange="changeColor(this)" cssStyle="width:60px;${selectColorCss}">
							<c:forEach var="color" items="${availableColors}">
								<%-- needs to be done like this due to possible conflicts with '#' and '$' following one another --%>
								<c:set var="optionColorCss">
									<c:out value="background-color:#" /><c:out value="${color}" />
								</c:set>
								<c:choose>
									<c:when test="${currentColor == color}">
										<form:option selected="selected" value="${color}" cssStyle="${optionColorCss}">&nbsp;</form:option>
									</c:when>
									<c:otherwise>
										<form:option value="${color}" cssStyle="${optionColorCss}">&nbsp;</form:option>
									</c:otherwise>
								</c:choose>
							</c:forEach>
						</form:select>
