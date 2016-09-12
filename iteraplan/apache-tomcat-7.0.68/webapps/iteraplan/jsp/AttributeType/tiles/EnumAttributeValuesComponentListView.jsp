<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<tilesx:useAttribute name="path_to_componentModel" />
<tilesx:useAttribute name="sort_field" ignore="true" />
<tilesx:useAttribute name="sort_event" ignore="true" />

<itera:define id="valuesModel" name="memBean"
	property="${path_to_componentModel}" />
<itera:define id="component_mode" name="memBean"
	property="${path_to_componentModel}.componentMode" />
<itera:define id="connected_elements" name="memBean"
	property="${path_to_componentModel}.valueParts" />
<c:set var="connected_elements_size"
	value="${fn:length(connected_elements)}" />
<itera:define id="html_id" name="memBean"
	property="${path_to_componentModel}.htmlId" />

<script type="text/javascript">
   var listOfSubElementsChildren = new Array(); 

   <c:forEach var="typeOfBuildingBlock" items="${memBean.componentModel.buildingBlockTypeModel.connectedElements}" >
	  listOfSubElementsChildren.push('<itera:message  key="${typeOfBuildingBlock.name}"/>');  
   </c:forEach>

  function confirmDeleteAttributeValue(list, callback){
	 if(list.length > 0) {
	   var buildingBlocks = list.join("<br />"+"- "); 
	   
	   showConfirmDialog('<itera:message key="global.confirmDelete"/>', 
			   '<itera:message key="manageAttributes.delete.enum1"/> <br />- ' + buildingBlocks + '<br /> <br />' + '<itera:message key="manageAttributes.delete.enum2"/> ', 
			   callback);
	 } else {
		 callback();
	 }
  }

</script>

<c:if test="${component_mode == 'READ'}">
	<c:set var="tdstyle" value="top margin" />
</c:if>

<input type="hidden" name="<c:out value="${path_to_componentModel}" />.selectedPosition" />
<input type="hidden" name="<c:out value="${path_to_componentModel}" />.action" />

<div id="EnumAttributeValuesComponentListViewModul" class="row-fluid module">
	<div class="module-heading">
		<itera:message key="manageAttributes.possiblevalues" />
	</div>
	<div class="row-fluid">
		<div class="module-body-table">
			<div class="row-fluid">
				<table class=" table table-striped table-condensed tableInModule">
					<colgroup>
						<col class="col-ico" />
						<col class="col-name" />
						<col class="col-color" />
						<col class="col-desc" />
					</colgroup>
					
					<c:choose>
						<c:when test="${component_mode != 'READ'}">
							<thead>
								<tr>
									<th>&nbsp;</th>
									<th><itera:message key="global.name" /></th>
									<th><itera:message key="manageAttributes.defaultcolor" /></th>
									<th colspan="2"><itera:message key="global.description" /></th>
									<th>&nbsp;</th>
								</tr>
							</thead>
							<tbody>
							<c:forEach items="${valuesModel.valueParts}" var="valuePart" varStatus="status">
								<tr>
									<td class="buttonintable top">
										<a id="<c:out value="${html_id}_${status.index}_remove" />" class="link" href="#"
											title="<itera:message key="tooltip.remove"/>"
											onclick="confirmDeleteAttributeValue(listOfSubElementsChildren, function() {triggerAttributeValueAction('<c:out value="${path_to_componentModel}" />', <c:out value="${status.count}" />, 'delete')} )" >
											<i class="icon-remove"></i>
										</a>
										<br />
										<a id="<c:out value="${html_id}_${status.index}_copy" />" class="link" href="#"
											title="<itera:message key="tooltip.copy"/>"
											onclick="triggerAttributeValueAction('<c:out value="${path_to_componentModel}" />', <c:out value="${status.count}" />, 'copy')" >
											<i class="icon-share"></i>
										</a>
									</td>
									<td class="top">
										<form:input path="${path_to_componentModel}.valueParts[${status.index}].name" id="${html_id}_${status.index}_nameText" cssClass="input-xlarge" />
									</td>
									<td width="15%" class="top">
										<c:set var="color" value="${valuePart.defaultColor}" />
										<tiles:insertTemplate template="/jsp/common/ColorSelectTile.jsp">
											<tiles:putAttribute name="colorPath" value="${path_to_componentModel}.valueParts[${status.index}].defaultColor"/>
											<tiles:putAttribute name="currentColor" value="${color}"/>
											<tiles:putAttribute name="availableColors" value="${valuesModel.availableColors}"/>
										</tiles:insertTemplate>
									</td>
									<td>
										<form:textarea path="${path_to_componentModel}.valueParts[${status.index}].description"
											id="${html_id}_${status.index}_descriptionTextarea"
											cssClass="input-xlarge" />
									</td>
									<td class="noSpacing">
										<img src="<c:url value="/images/SortArrowTop.gif" />"
											onclick="triggerAttributeValueAction('<c:out value="${path_to_componentModel}" />', <c:out value="${status.count}" />, 'moveTop')"
											class="link" alt="<itera:message key="tooltip.moveTop" />"
											title="<itera:message key="tooltip.moveTop" />"
											id="<c:out value="${html_id}_${status.index}_moveTop" />" />
										<br/>
										<img src="<c:url value="/images/SortArrowUp.gif"/>"
											onclick="triggerAttributeValueAction('<c:out value="${path_to_componentModel}" />', <c:out value="${status.count}" />, 'moveUp')"
											class="link"
											alt"<itera:message key="tooltip.moveUp"/>" 
                        							title="<itera:message key="tooltip.moveUp"/>"
											id="<c:out value="${html_id}_${status.index}_moveUp" />" />
										<br/>
										<img src="<c:url value="/images/SortArrowDown.gif"/>"
											onclick="triggerAttributeValueAction('<c:out value="${path_to_componentModel}" />', <c:out value="${status.count}" />, 'moveDown')"
											class="link" alt="<itera:message key="tooltip.moveDown"/>"
											title="<itera:message key="tooltip.moveDown"/>"
											id="<c:out value="${html_id}_${status.index}_moveDown" />" />
										<br/>
										<img src="<c:url value="/images/SortArrowBottom.gif"/>"
											onclick="triggerAttributeValueAction('<c:out value="${path_to_componentModel}" />', <c:out value="${status.count}" />, 'moveBottom')"
											class="link" alt="<itera:message key="tooltip.moveBottom"/>"
											title="<itera:message key="tooltip.moveBottom"/>"
											id="<c:out value="${html_id}_${status.index}_moveBottom" />" />
									</td>
									<td>&nbsp;</td>
								</tr>
							</c:forEach>
						</c:when>
			
						<c:otherwise>
							<c:choose>
								<c:when test="${connected_elements_size <= 0}">
									<thead>
										<th colspan="6">&nbsp;</th>
									</thead>
								</c:when>
								<c:otherwise>
									<thead>
										<tr>
											<th><itera:message key="global.number" /></th>
											<th><itera:message key="global.name" /></th>
											<th><itera:message key="manageAttributes.defaultcolor" /></th>
											<th colspan="2"><itera:message key="global.description" /></th>
											<th>&nbsp;</th>
										</tr>
									</thead>
								</c:otherwise>
							</c:choose>
							<tbody>
								<c:forEach items="${valuesModel.valueParts}" var="valuePart"
									varStatus="status">
									<tr">
										<td class="col-ico"><c:out value="${status.count}" /></td>
										<td><c:out value="${valuePart.name}" /></td>
										<td width="15%">
											<div
												style="background-color:#<c:out value="${valuePart.defaultColor}" />;width:60px;">&nbsp;</div>
										</td>
										<td colspan="2"><c:out value="${valuePart.description}" /></td>
										<td>&nbsp;</td>
									</tr>
								</c:forEach>
						</c:otherwise>
					</c:choose>
			
					<c:if test="${component_mode != 'READ'}">
						<tr>
							<td class="buttonintable top">
								<a id="<c:out value="${html_id}" />_add" class="link" href="#"
									title="<itera:message key="tooltip.add"/>"
									onclick="triggerAttributeValueAction('<c:out value="${path_to_componentModel}" />', 0, 'new')" >
									<i class="icon-plus"></i>
								</a>
							</td>
							<td class="top" style="width: 22em;">
								<form:input path="${path_to_componentModel}.nameToAdd" id="${html_id}_nameToAdd" cssClass="name" />
							</td>
							<td width="15%" class="top">
								<c:set var="colorIndex" value="${valuesModel.availableColorIndex}" /> 
								<c:set var="colorDisplay" value="${valuesModel.availableColors[colorIndex]}" /> 
								<tiles:insertTemplate template="/jsp/common/ColorSelectTile.jsp">
									<tiles:putAttribute name="colorPath" value="${path_to_componentModel}.colorToAdd"/>
									<tiles:putAttribute name="currentColor" value="${colorDisplay}"/>
									<tiles:putAttribute name="availableColors" value="${valuesModel.availableColors}"/>
								</tiles:insertTemplate>
							</td>
							<td colspan="2">
								<form:textarea path="${path_to_componentModel}.descriptionToAdd" id="${html_id}_descriptionToAdd" cssClass="input-xlarge" />
							</td>
							<td>&nbsp;</td>
						</tr>
						
						<tr>
							<td />
							<td>
								<div class="control-group">
									<div class="controls">
										<form:radiobutton path="${sort_field}" value="none" id="sortOrderNone_radio" />
									</div>
									<label class="control-label-right" for="sortOrderNone_radio">
								  		<itera:message key="manageAttributes.enum.sortOrder.none" />
								  	</label>
								</div>
								<div class="control-group">
									<div class="controls">
										<form:radiobutton path="${sort_field}" value="asc" id="sortOrderAsc_radio" />
									</div>
									<label class="control-label-right" for="sortOrderAsc_radio">
								  		<itera:message key="manageAttributes.enum.sortOrder.ascending" />
								  	</label>
								</div>
								<div class="control-group">
									<div class="controls">
										<form:radiobutton path="${sort_field}" value="desc" id="sortOrderDesc_radio" />
									</div>
									<label class="control-label-right" for="sortOrderDesc_radio">
								  		<itera:message key="manageAttributes.enum.sortOrder.descending" />
								  	</label>
								</div>
							</td>
							<td colspan="3" style="text-align: right">
								<input type="button" class="btn" id="${html_id}_sortButton" name="sortButton" value="<itera:message key="button.sort" />" onclick="flowAction('update');" />
							</td>
							<td>&nbsp;</td>
						</tr>
					</c:if>
					</tbody>
				</table>
			</div>
		</div>
	</div>
</div>
