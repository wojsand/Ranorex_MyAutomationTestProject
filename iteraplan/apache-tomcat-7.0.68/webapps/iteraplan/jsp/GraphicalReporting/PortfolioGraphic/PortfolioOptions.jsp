<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form"%>

<div class="accordion" id="colorSettingsContainer">
    <div class="accordion-group">
        <div class="accordion-heading">
            <a class="accordion-toggle" data-toggle="collapse" data-parent="#colorSettingsContainer" href="#colorSettings"
					onclick="toggleIcon('colorSettingsIcon', 'icon-resize-full', 'icon-resize-small');" >
			   <i id="colorSettingsIcon" class="icon-resize-small"></i>
               <itera:message key="graphicalExport.helpColorLabel" />
            </a>
        </div>
	    <div id="colorSettings" class="accordion-body in collapse">
			<div class="accordion-inner">
				<p>
					<itera:message key="graphicalExport.portfolio.helpColorSize">
				    	<itera:param>${chosenContentType}</itera:param>
					</itera:message>
				</p>
				
				<ul>
					<li>
						<itera:message key="graphicalExport.helpDimensionAttributesSingleValue">
							<itera:param><itera:message key="reports.size" /></itera:param>
						</itera:message>
					</li>
					<li>
						<itera:message key="graphicalExport.helpDimensionAttributes">
							<itera:param><itera:message key="reports.color" /></itera:param>
						</itera:message>
					</li>
				</ul>
				
				<tiles:insertTemplate template="/jsp/GraphicalReporting/DimensionOptionsSimple.jsp">
					<tiles:putAttribute name="dimension_key" value="reports.size" />
					<tiles:putAttribute name="available_attributes_field" value="queryResult.queryForms[0].singleValueDimensionAttributes" />
					<tiles:putAttribute name="selected_id_field" value="graphicalOptions.sizeAttributeId" />
					<tiles:putAttribute name="show_enum" value="true" />
					<tiles:putAttribute name="show_number" value="true" />
					<tiles:putAttribute name="show_text" value="false" />
					<tiles:putAttribute name="show_date" value="false" />
					<tiles:putAttribute name="show_responsibility" value="true" />
				</tiles:insertTemplate>
				
				<tiles:insertTemplate template="/jsp/GraphicalReporting/DimensionOptionsSimple.jsp">
					<tiles:putAttribute name="dimension_key" value="reports.color" />
					<tiles:putAttribute name="available_attributes_field" value="queryResult.queryForms[0].dimensionAttributes" />
					<tiles:putAttribute name="selected_id_field" value="graphicalOptions.colorOptionsBean.dimensionAttributeId" />
					<tiles:putAttribute name="refresh_report_event" value="refreshReport" />
					<tiles:putAttribute name="show_enum" value="true" />
					<tiles:putAttribute name="show_number" value="false" />
					<tiles:putAttribute name="show_text" value="true" />
					<tiles:putAttribute name="show_date" value="true" />
					<tiles:putAttribute name="show_responsibility" value="true" />
				</tiles:insertTemplate>
				
				<tiles:insertTemplate template="/jsp/GraphicalReporting/DimensionOptionColor.jsp">
					<tiles:putAttribute name="colorOptions" value="${memBean.graphicalOptions.colorOptionsBean}" />
					<tiles:putAttribute name="colorOptionsPath" value="graphicalOptions.colorOptionsBean" />
					<tiles:putAttribute name="refresh_report_event" value="refreshReport" />
					<tiles:putAttribute name="showUseValueRange" value="true" />
				</tiles:insertTemplate>
			</div>
	     </div>
	</div>
</div>  

<div class="accordion" id="axesSettingsContainer">
	<div class="accordion-group">
		<div class="accordion-heading">
			<a class="accordion-toggle" data-toggle="collapse" data-parent="#axesSettingsContainer" href="#axesSettings"
					onclick="toggleIcon('axesSettingsIcon', 'icon-resize-full', 'icon-resize-small');" >
				<i id="axesSettingsIcon" class="icon-resize-small"></i>
            	<itera:message key="graphicalExport.helpAxesLabel" />
			</a>
        </div>
	    <div id="axesSettings" class="accordion-body in collapse">
			<div class="accordion-inner">
				<p>
					<itera:message key="graphicalExport.portfolio.helpAxis" />
				</p>
				<div id="xy">
					<tiles:insertTemplate template="/jsp/GraphicalReporting/DimensionOptionsSimple.jsp">
						<tiles:putAttribute name="dimension_key" value="reports.xaxis" />
						<tiles:putAttribute name="available_attributes_field" value="queryResult.queryForms[0].singleValueDimensionAttributes" />
						<tiles:putAttribute name="selected_id_field" value="graphicalOptions.XAxisAttributeId" />
						<tiles:putAttribute name="show_enum" value="true" />
						<tiles:putAttribute name="show_number" value="true" />
						<tiles:putAttribute name="show_text" value="true" />
						<tiles:putAttribute name="show_date" value="true" />
						<tiles:putAttribute name="show_responsibility" value="true" />
					</tiles:insertTemplate>
					
					<tiles:insertTemplate template="/jsp/GraphicalReporting/DimensionOptionsSimple.jsp">
						<tiles:putAttribute name="dimension_key" value="reports.yaxis" />
						<tiles:putAttribute name="available_attributes_field" value="queryResult.queryForms[0].singleValueDimensionAttributes" />
						<tiles:putAttribute name="selected_id_field" value="graphicalOptions.YAxisAttributeId" />
						<tiles:putAttribute name="show_enum" value="true" />
						<tiles:putAttribute name="show_number" value="true" />
						<tiles:putAttribute name="show_text" value="true" />   
						<tiles:putAttribute name="show_date" value="true" />   
						<tiles:putAttribute name="show_responsibility" value="true" />  
					</tiles:insertTemplate>
				</div>
			</div>
	     </div>
    </div>
 </div>  

<div class="accordion" id="advancedSettingsContainer">
    <div class="accordion-group">
        <div class="accordion-heading">
            <a class="accordion-toggle" data-toggle="collapse" data-parent="#advancedSettingsContainer" href="#advancedSettings"
					onclick="toggleIcon('advancedSettingsIcon', 'icon-resize-full', 'icon-resize-small');" >
			   <i id="advancedSettingsIcon" class="icon-resize-full"></i>
               <itera:message key="graphicalExport.helpAdvancedLabel" />
            </a>
        </div>
	    <div id="advancedSettings" class="accordion-body collapse">
			<div class="accordion-inner">
				<div class="controls" style="float:none;">
				  <p><itera:message key = "graphicalExport.portfolio.helpScaling" /></p>
				  
	              <div class="input-prepend">
	                <form:select path="graphicalOptions.scalingEnabled" id="graphicalOptions.scalingEnabled" onchange="${refreshReportJavaScript}" cssStyle="width:290px;">
						<form:option value="true">
							<itera:message key="graphicalExport.portfolio.scalingEnabledMenuText" />
						</form:option>
						<form:option value="false">
							<itera:message key="graphicalExport.portfolio.scalingDisabledMenuText" />
						</form:option>
					</form:select>
	              </div>
	              
	              <p></p>
	              
        <label class="checkbox">
          <form:checkbox path="graphicalOptions.alwaysContinuous" id="alwaysContinuous" />
          <itera:message key="graphicalExport.portfolio.helpAlwaysContinuous" />      
        </label>

				<%-- include template for switching between hierachical and non-hierachical names and between legend on/off --%>
				<tiles:insertTemplate template="/jsp/commonReporting/ElementNamesSettings.jsp"/>
	              
	              <label class="checkbox">
					<form:checkbox path="graphicalOptions.showSavedQueryInfo" id="showSavedQueryInfo"/>
					<itera:message key="graphicalExport.showQueryInfo" />
	              </label>
				</div>
			</div>
		</div>
	</div>
</div>
