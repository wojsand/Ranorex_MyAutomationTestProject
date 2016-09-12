<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ taglib uri="http://jawr.net/tags" prefix="jwr" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<jwr:script src="/bundles/vbb.js" />
<jwr:style src="/bundles/vbb.css" />

<script type="text/javascript">
/* <![CDATA[ */
$(function() {
	
	// vbb configuration
	var config = new Configuration('recursivecluster', $('.button-listener'));
	config.addSubstantialType($('#innerTagContainer'), $('#innerDroppableContainer'), $('#inner'));
	config.addSubstantialType($('#outerTagContainer'), $('#outerDroppableContainer'), $('#outer'));
	config.addFilter($('#toggleOuterQuery'), $('#attributeDropDown'), $('#attributeDropDown_selected'), $('#operandDropDown'), $('#operandDropDown_selected'), $('#valueDropDown'), $('#valueField'), $('#outer'), $('#outerFilterHint'));
	config.addFilter($('#toggleInnerQuery'), $('#attributeDropDown'), $('#attributeDropDown_selected'), $('#operandDropDown'), $('#operandDropDown_selected'), $('#valueDropDown'), $('#valueField'), $('#inner'), $('#innerFilterHint'), $('#showAllInners'));
	
	config.addFeature($('#outer\\.outer2inner'), [$('#outer'), $('#inner')], $('#outer\\.outer2inner_selected'));
	
	var outerColorFeatureParams = {
			select : $('#outer\\.optional_coloring') ,
			parentHidden : $('#outer'),
			selectedValueHolder : $('#outer\\.optional_coloring_selected'),
			optional: true,
			staticRadio: $('#outer_color_radio_static'),
			attributeRadio: $('#outer_color_radio_attribute'),
			staticContent: $('#outer_color_options_static'),
			attributeContent: $('#outer_color_options_attribute'),
			attributeColoringContainer: $('#outer_color_options_attribute_container'),
			decorationModeHidden: $('#outer\\.decorationMode'),
			continuousContent: $('#outer_color_opts_attribute_continuous'),
			discreteContent: $('#outer_color_opts_attribute_discrete'),
			minValueHidden: $('#outer\\.minValue'),
			maxValueHidden: $('#outer\\.maxValue'),
			discreteColorMappingHidden: $('#outer\\.colorMapping') };
	config.addColorFeature(outerColorFeatureParams);

	//select, parentHidden, selectedValueHolder, optional, staticRadio, attributeRadio,
	//staticContent, attributeContent, decorationModeHidden, continuousContent, discreteContent, minValueHidden, maxValueHidden
	var innerColorFeatureParams = {
			select : $('#inner\\.optional_coloring') ,
			parentHidden : $('#inner'),
			selectedValueHolder : $('#inner\\.optional_coloring_selected'),
			optional: true,
			staticRadio: $('#inner_color_radio_static') ,
			attributeRadio: $('#inner_color_radio_attribute'),
			staticContent: $('#inner_color_options_static'),
			attributeContent: $('#inner_color_options_attribute'),
			attributeColoringContainer: $('#inner_color_options_attribute_container'),
			decorationModeHidden: $('#inner\\.decorationMode'),
			continuousContent: $('#inner_color_opts_attribute_continuous'),
			discreteContent: $('#inner_color_opts_attribute_discrete'),
			minValueHidden: $('#inner\\.minValue'),
			maxValueHidden: $('#inner\\.maxValue'),
			discreteColorMappingHidden: $('#inner\\.colorMapping') };
	config.addColorFeature(innerColorFeatureParams);
	
	config.addFeature($('#outer\\.optional_outer2outer'), [$('#outer')], $('#outer\\.optional_outer2outer_selected'), true);
	config.addFeature($('#inner\\.optional_inner2inner'), [$('#inner')], $('#inner\\.optional_inner2inner_selected'), true);
	
	config.addSwitch($('#inner'), $('#outer'), $('#switchTypes'));
	
	
	config.init();

});
/* ]]> */
</script>

<script type="text/javascript">
/* <![CDATA[ */
$(function() {
	/*									   */
	/* search query modal javascript, BETA */
	/*									   */
	
	$('#queriesPanel').modal({show:false});
	
	$('#toggleQueries').click(function() {
		$('#queriesPanel').modal('show');	
	});
	
	$('#outer_modalFooterOK').click(function() {
		$('#outer').val($('#outer').val() + '[@' + $('#attributeDropDown').val() + $('#operandDropDown').val() + '"' + $('#valueField').val() + '"]');
	});
    
	// reset select on close
    $('#queriesPanel').on('hide', function () {
    	document.getElementById("attributeDropDown").options.length = 1;
    	document.getElementById("operandDropDown").options.length = 1;
    	document.getElementById("valueDropDown").options.length = 1;
    });
});
/* ]]> */
</script>


<style type="text/css">
	/* <![CDATA[ */
	/* Formatting for VBB configuration */
	#configurationContainer { width: 970px; margin: 3em auto 3em auto; overflow: auto; }
	
	#selectionContainer { float: right; margin-right: 4em; position: relative; }
	#switchTypes { width: 50px; height: 100px; cursor: pointer; position: absolute; top: 50%; margin-top: -50px; }
	#outerDroppableContainer { width: 27em; padding: 1em; margin: 0 0 1em 70px; height: 15em; border: 1px solid #999; font-weight: bold; vertical-align: middle; }
	#innerDroppableContainer { width: 27em; padding: 1em; margin: 1em 0 0 70px; height: 15em; border: 1px solid #999; font-weight: bold; vertical-align: middle; }
	#nestingRelationContainer { margin: 0 0 0 70px; width: 29em; }
	#nestingRelationContainer p { margin: 0.5em 0; }
    #outer_color_options_attribute_container { margin-top: 2em; }
    #inner_color_options_attribute_container { margin-top: 2em; }
	
	#recommendationContainer { width: 35em; float: left; font-weight: bold; }
	#outerTagContainer { padding: 1em; margin-bottom: 1em; border: 1px solid #999; overflow: hidden; }
	#innerTagContainer { padding: 1em; border: 1px solid #999; overflow: hidden; }
	
	#outer2inner, #outer2outer, #inner2inner { width: 100%; }
	
	.select { float: right;}
	
	.optionContainer { margin-bottom: 1em; overflow: auto; }
	.optionChooser { float: left; cursor: pointer; border: 1px solid #999999; margin-right: 0.3em; }
	
	.filterHint { font-weight: normal; text-align: left; margin-bottom: 2ex; }
	
	/* jQuery Drag&Drop */
	/*.hover { border-color: #cccccc; }*/
	/*.active { background: #dddddd; }*/
	#selectionContainer .ui-droppable .ui-draggable { margin: 0; font-size: 120%; }
	
	
	/* color selection panel */
	.coloringPanel { display: none; }
	
	/* search query modal */
	.queriesPanel { display: none; width:825px; margin:0 0 0 -400px; }

	/* ]]> */
</style>



<div class="row-fluid module">
	<div class="module-heading"><itera:message key="graphicalExport.vbbCluster.configuration.title" /></div>
	<div class="row-fluid">
			<div id="configurationContainer">
			
				<div id="recommendationContainer">
					<div id="outerTagContainer">
						<h2><itera:message key="graphicalExport.vbbCluster.configuration.candidates.outer" /></h2>
					</div>
					<div id="innerTagContainer">
						<h2><itera:message key="graphicalExport.vbbCluster.configuration.candidates.inner" /></h2>
					</div>
				</div>
				
				<div id="selectionContainer">
					<img id="switchTypes" src="<c:url value="/images/flipArrow.gif" />" alt="Switch" />
					
					<div id="outerDroppableContainer">
						<div class="optionContainer">
							<div>
								<div class="btn-group pull-left">
									<a class="link btn" data-toggle="modal" style="float: left" href="#outerColoringPanel" title="<itera:message key="reports.color" />">
									<i class="icon-tint"></i></a>
									<button type="button" id="toggleOuterQuery" class="btn" onclick="flowAction('filterOuterResults')" title="Filter" disabled="disabled"><i class="icon-filter"></i></button>
								</div>
								<div id="outerColoringPanel" class="modalHighMode modal coloringPanel">
									<div class="modal-header">
										<a class="close" data-dismiss="modal">×</a>
										<h3><itera:message key="graphicalExport.vbbCluster.configuration.colorSelection" /></h3>
									</div>
									<div class="modal-body">
									
										<!-- Radiobutton outer:color:static -->
										<div class="control-group">
											<div class="controls">
												<input type="radio" name="outer_color_radio" <c:if test="${empty memBean.graphicalOptions.viewpointConfigMap['outer.optional_coloring']}"> checked="checked"</c:if> id="outer_color_radio_static" />
											</div>
											<label class="control-label-right" for="outer_color_radio_static">
										  		<itera:message key="graphicalExport.vbbCluster.configuration.colorSelection.static" />
										  	</label>
										 </div>
										 
										 <!-- Color Options outer:color:static -->
										 <div id="outer_color_options_static">
											<input class="colorpicker-hashhex" type="text" id="graphicalOptions.viewpointConfigMap['outer.fillColor']" name="graphicalOptions.viewpointConfigMap['outer.fillColor']" value="${memBean.graphicalOptions.viewpointConfigMap['outer.fillColor']}" />
										</div>
										
										
										<div id="outer_color_options_attribute_container" style="display:none;">
											<!-- Radiobutton: outer:color:attribute -->
											<div class="control-group">
											  	<div class="controls">
													<input type="radio" name="outer_color_radio" <c:if test="${not empty memBean.graphicalOptions.viewpointConfigMap['outer.optional_coloring']}"> checked="checked"</c:if> id="outer_color_radio_attribute" />
												</div>
												<label class="control-label-right" for="outer_color_radio_attribute">
											  		<itera:message key="graphicalExport.vbbCluster.configuration.colorSelection.attribute" />
											  	</label>
											</div>
											
											<!-- Color Options outer:color:attribute -->
											<div id="outer_color_options_attribute" style="display:none;">
												<div class="row-fluid">
													<form:select path="" id="outer.optional_coloring" style="margin-top: 3px;" />
													<form:hidden path="graphicalOptions.viewpointConfigMap['outer.optional_coloring']" 
																 id="outer.optional_coloring_selected" 
																 name="graphicalOptions.viewpointConfigMap['outer.optional_coloring']" 
																 value="${memBean.graphicalOptions.viewpointConfigMap['outer.optional_coloring']}" />
													<form:hidden path="graphicalOptions.viewpointConfigMap['outer.decorationMode']" 
																 id="outer.decorationMode" 
																 name="graphicalOptions.viewpointConfigMap['outer.decorationMode']" 
																 value="${memBean.graphicalOptions.viewpointConfigMap['outer.decorationMode']}"/>
												</div>
												
												<div id="outer_color_opts_attribute_continuous" style="display:none;margin-top:24px;">
													<form:hidden path="graphicalOptions.viewpointConfigMap['outer.minValue']" 
																 id="outer.minValue" 
																 name="graphicalOptions.viewpointConfigMap['outer.minValue']" 
																 value="${memBean.graphicalOptions.viewpointConfigMap['outer.minValue']}" />
													<form:hidden path="graphicalOptions.viewpointConfigMap['outer.maxValue']" 
																 id="outer.maxValue" 
																 name="graphicalOptions.viewpointConfigMap['outer.maxValue']" 
																 value="${memBean.graphicalOptions.viewpointConfigMap['outer.maxValue']}" />
													<div class="row-fluid" style="margin-bottom:12px;">
														<div class="span6">
															<label><itera:message key="global.lowerbound.short" />:</label>
															<input class="colorpicker-hashhex" type="text" id="graphicalOptions.viewpointConfigMap['outer.minColor']" 
																   name="graphicalOptions.viewpointConfigMap['outer.minColor']" 
																   value="${memBean.graphicalOptions.viewpointConfigMap['outer.minColor']}" />
														</div>
														<div class="span6">
															<label><itera:message key="global.upperbound.short" />:</label>
															<input class="colorpicker-hashhex" type="text" id="graphicalOptions.viewpointConfigMap['outer.maxColor']" 
																   name="graphicalOptions.viewpointConfigMap['outer.maxColor']" 
																   value="${memBean.graphicalOptions.viewpointConfigMap['outer.maxColor']}" />
														</div>
													</div>
													<div class="row-fluid">
														<div class="span6">
															<label><itera:message key="global.outofbounds.short" />:</label>
															<input class="colorpicker-hashhex" type="text" id="graphicalOptions.viewpointConfigMap['outer.outOfBoundsColor']" 
																   name="graphicalOptions.viewpointConfigMap['outer.outOfBoundsColor']" 
																   value="${memBean.graphicalOptions.viewpointConfigMap['outer.outOfBoundsColor']}" />
														</div>
														<div class="span6">
															<label><itera:message key="graphicalReport.unspecified" />:</label>
															<input class="colorpicker-hashhex" type="text" id="graphicalOptions.viewpointConfigMap['outer.undefinedColor']" 
																   name="graphicalOptions.viewpointConfigMap['outer.undefinedColor']" 
																   value="${memBean.graphicalOptions.viewpointConfigMap['outer.undefinedColor']}" />
														</div>
													</div>
												</div>
												<form:hidden path="graphicalOptions.viewpointConfigMap['outer.colorMapping']" id="outer.colorMapping"
															 name="graphicalOptions.viewpointConfigMap['outer.colorMapping']" 
															 value="${memBean.graphicalOptions.viewpointConfigMap['outer.colorMapping']}"/>
												<div id="outer_color_opts_attribute_discrete" style="min-width:350px;margin-top:7px;">
													<!-- Left empty. Content is filled from Java Script (see addColorFeature in vbbConfiguration.js) -->
												</div>
											</div>
										</div>
									</div>
									<div class="modal-footer">
										<a href="#" class="btn" data-dismiss="modal"><itera:message key="button.close" /></a>
									</div>
								</div>
							</div>
							
							<div class="select">
								<form:select path="" id="outer.optional_outer2outer" />
								<form:hidden path="graphicalOptions.viewpointConfigMap['outer.optional_outer2outer']" id="outer.optional_outer2outer_selected" />
							</div>
						</div>
						<div id="outerFilterHint" class="filterHint" style="display:none;">
							<itera:message key="${memBean.graphicalOptions.viewpointConfigMap['outer.filterHint']}"> 
								<itera:param>${memBean.graphicalOptions.viewpointConfigMap['outer.filterElementsNumber']}</itera:param>
							</itera:message>
						</div>
						
						<input type="hidden" id="graphicalOptions.viewpointConfigMap['outer.id']" name="graphicalOptions.viewpointConfigMap['outer.id']" value="id" />
						<input type="hidden" id="graphicalOptions.viewpointConfigMap['outer.name']" name="graphicalOptions.viewpointConfigMap['outer.name']" value="name" />
						<input type="hidden" id="graphicalOptions.viewpointConfigMap['outer.description']" name="graphicalOptions.viewpointConfigMap['outer.description']" value="description" />
						<form:hidden path="graphicalOptions.viewpointConfigMap['outer']" id="outer"/>
					</div>
					
					<div id="nestingRelationContainer">
						<p><itera:message key="graphicalExport.vbbCluster.configuration.selectNestingRelation" /></p>
						<p><form:select path="" id="outer.outer2inner" /></p>
						<form:hidden path="graphicalOptions.viewpointConfigMap['outer.outer2inner']" id="outer.outer2inner_selected" />
					</div>
					
					<div id="innerDroppableContainer">
						<div class="optionContainer">
							<div>
								<div class="btn-group pull-left">
									<a class="btn" data-toggle="modal" style="float: left" href="#innerColoringPanel" title="<itera:message key="reports.color" />">
									<i class="icon-tint"></i></a>
									<button type="button" id="toggleInnerQuery" class="btn" onclick="flowAction('filterInnerResults')" title="Filter" disabled="disabled"><i class="icon-filter"></i></button>
								</div>
								<div id="innerColoringPanel" class="modalHighMode modal coloringPanel">
									<div class="modal-header">
                                        <a class="close" data-dismiss="modal">×</a>
										<h3><itera:message key="graphicalExport.vbbCluster.configuration.colorSelection" /></h3>
									</div>
									<div class="modal-body">
										<!-- Radiobutton inner:color:static -->
										<div class="control-group">
											<div class="controls">
												<input type="radio" name="inner_color_radio" <c:if test="${empty memBean.graphicalOptions.viewpointConfigMap['inner.optional_coloring']}"> checked="checked"</c:if> id="inner_color_radio_static" />
											</div>
											<label class="control-label-right" for="inner_color_radio_static">
										  		<itera:message key="graphicalExport.vbbCluster.configuration.colorSelection.static" />
										  	</label>
										 </div>
										 
										 <!-- Color Options inner:color:static -->
										 <div id="inner_color_options_static">
											<input class="colorpicker-hashhex" type="text" id="graphicalOptions.viewpointConfigMap['inner.fillColor']" name="graphicalOptions.viewpointConfigMap['inner.fillColor']" value="${memBean.graphicalOptions.viewpointConfigMap['inner.fillColor']}" />
										</div>
										
										<div id="inner_color_options_attribute_container" style="display:none;">
											<!-- Radiobutton inner:color:attribute -->
											<div class="control-group">
											  	<div class="controls">
													<input type="radio" name="inner_color_radio" <c:if test="${not empty memBean.graphicalOptions.viewpointConfigMap['inner.optional_coloring']}"> checked="checked"</c:if> id="inner_color_radio_attribute" />
												</div>
												<label class="control-label-right" for="inner_color_radio_attribute">
											  		<itera:message key="graphicalExport.vbbCluster.configuration.colorSelection.attribute" />
											  	</label>
											</div>
											
											<!-- Color Options: inner:color:attribute -->
											<div id="inner_color_options_attribute" style="display:none;">
												<div class="row-fluid">
													<form:select path="" id="inner.optional_coloring"  style="margin-top:3px;" />
													<form:hidden path="graphicalOptions.viewpointConfigMap['inner.optional_coloring']" 
																 name="graphicalOptions.viewpointConfigMap['inner.optional_coloring']" 
													 			 value="${memBean.graphicalOptions.viewpointConfigMap['inner.optional_coloring']}" 
													 			 id="inner.optional_coloring_selected" />
													<form:hidden path="graphicalOptions.viewpointConfigMap['inner.decorationMode']" 
																 name="graphicalOptions.viewpointConfigMap['inner.decorationMode']" 
													 			 value="${memBean.graphicalOptions.viewpointConfigMap['inner.decorationMode']}" 
													 			 id="inner.decorationMode"/>
												</div>
												
												<div id="inner_color_opts_attribute_continuous" style="display:none;margin-top:24px;">
													<form:hidden path="graphicalOptions.viewpointConfigMap['inner.minValue']" 
													 			 name="graphicalOptions.viewpointConfigMap['inner.minValue']" 
													 			 value="${memBean.graphicalOptions.viewpointConfigMap['inner.minValue']}" 
													 			 id="inner.minValue"/>
													<form:hidden path="graphicalOptions.viewpointConfigMap['inner.maxValue']" 
																 name="graphicalOptions.viewpointConfigMap['inner.maxValue']" 
													 			 value="${memBean.graphicalOptions.viewpointConfigMap['inner.maxValue']}" 
													 			 id="inner.maxValue"/>
													<div class="row-fluid" style="margin-bottom:12px;">
														<div class="span6">
															<label><itera:message key="global.lowerbound.short" />:</label>
															<input class="colorpicker-hashhex" type="text" id="graphicalOptions.viewpointConfigMap['inner.minColor']"
																   name="graphicalOptions.viewpointConfigMap['inner.minColor']" 
																   value="${memBean.graphicalOptions.viewpointConfigMap['inner.minColor']}" />
														</div>
														<div class="span6">
															<label><itera:message key="global.upperbound.short" />:</label>
															<input class="colorpicker-hashhex" type="text" id="graphicalOptions.viewpointConfigMap['inner.maxColor']" 
																   name="graphicalOptions.viewpointConfigMap['inner.maxColor']" 
																   value="${memBean.graphicalOptions.viewpointConfigMap['inner.maxColor']}" />
														</div>
													</div>
													<div class="row-fluid">
														<div class="span6">
															<label><itera:message key="global.outofbounds.short" />:</label>
															<input class="colorpicker-hashhex" type="text" id="graphicalOptions.viewpointConfigMap['inner.outOfBoundsColor']"
																   name="graphicalOptions.viewpointConfigMap['inner.outOfBoundsColor']" 
																   value="${memBean.graphicalOptions.viewpointConfigMap['inner.outOfBoundsColor']}" />
														</div>
														<div class="span6">
															<label><itera:message key="graphicalReport.unspecified" />:</label>
															<input class="colorpicker-hashhex" type="text" id="graphicalOptions.viewpointConfigMap['inner.undefinedColor']" 
																   name="graphicalOptions.viewpointConfigMap['inner.undefinedColor']" 
																   value="${memBean.graphicalOptions.viewpointConfigMap['inner.undefinedColor']}" />
														</div>
													</div>
												</div>
												<form:hidden path="graphicalOptions.viewpointConfigMap['inner.colorMapping']"
															 name="graphicalOptions.viewpointConfigMap['inner.colorMapping']" 
															 value="${memBean.graphicalOptions.viewpointConfigMap['inner.colorMapping']}" 
															 id="inner.colorMapping"/>
												<div id="inner_color_opts_attribute_discrete" style="min-width:350px;">
													<!-- Left empty. Content is filled from Java Script (see addColorFeature in vbbConfiguration.js) -->
												</div>
											</div>
										</div>
									</div>
									<div class="modal-footer">
										<a href="#" class="btn" data-dismiss="modal"><itera:message key="button.close" /></a>
									</div>
								</div>
							</div>
							
							<div class="select">
								<form:select path="" id="inner.optional_inner2inner" />
								<form:hidden path="graphicalOptions.viewpointConfigMap['inner.optional_inner2inner']" id="inner.optional_inner2inner_selected" />
							</div>
							<div class="control-group" style="float:left;">
								<div class="controls">
									<form:input type="hidden" id="showAllInnersHidden" path="graphicalOptions.viewpointConfigMap['showAllInner']" name="graphicalOptions.viewpointConfigMap['showAllInner']" />
									<input disabled="disabled" id="showAllInners" type="checkbox" value="true" onchange="value = false; if ($('#showAllInners').attr('checked')) { value = true; } setHiddenField('showAllInnersHidden', value);" <c:if test="${memBean.graphicalOptions.viewpointConfigMap['showAllInner']}"> checked="checked"</c:if> />
								</div>
								<label class="control-label-right" for="copyAttributeValues_checkbox">
									<itera:message key="graphicalExport.vbbCluster.configuration.showInnerWithNoReleationship" />
							 	</label>
							</div>
						</div>
						
						<div id="innerFilterHint" class="filterHint" style="display:none;">
							<itera:message key="${memBean.graphicalOptions.viewpointConfigMap['inner.filterHint']}"> 
								<itera:param>${memBean.graphicalOptions.viewpointConfigMap['inner.filterElementsNumber']}</itera:param>
							</itera:message>
						</div>
						
						<input type="hidden" id="graphicalOptions.viewpointConfigMap['inner.id']" name="graphicalOptions.viewpointConfigMap['inner.id']" value="id" />
						<input type="hidden" id="graphicalOptions.viewpointConfigMap['inner.name']" name="graphicalOptions.viewpointConfigMap['inner.name']" value="name" />
						<input type="hidden" id="graphicalOptions.viewpointConfigMap['inner.description']" name="graphicalOptions.viewpointConfigMap['inner.description']" value="description" />
						<form:hidden path="graphicalOptions.viewpointConfigMap['inner']" id="inner" />
					</div>
				</div>
			</div>	
	</div>

</div>

<%-- advanced settings --%>
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
				<p>
					<itera:message key="graphicalExport.vbbCluster.settings.multiLine.description"/> 
				</p>
				<label class="checkbox">
					<input id="useLinebreakForInnerElements" type="checkbox" value="true" onchange="value = false; if ($('#useLinebreakForInnerElements').attr('checked')) { value = true; } setHiddenField('useLinebreakForInnerElementsHidden', value);" <c:if test="${memBean.graphicalOptions.viewpointConfigMap['useLinebreakForInnerElements']}"> checked="checked"</c:if> />
					<form:input type="hidden" id="useLinebreakForInnerElementsHidden" path="graphicalOptions.viewpointConfigMap['useLinebreakForInnerElements']" name="graphicalOptions.viewpointConfigMap['useLinebreakForInnerElements']" />
					<itera:message key="graphicalExport.vbbCluster.settings.useMultiLineForInnerElements"/>
				</label>
				<label class="checkbox">
					<input id="useClippingForInnerElements" type="checkbox" value="true" onchange="value = false; if ($('#useClippingForInnerElements').attr('checked')) { value = true; } setHiddenField('useClippingForInnerElementsHidden', value);" <c:if test="${memBean.graphicalOptions.viewpointConfigMap['useClippingForInnerElements']}"> checked="checked"</c:if> />
					<form:input type="hidden" id="useClippingForInnerElementsHidden" path="graphicalOptions.viewpointConfigMap['useClippingForInnerElements']" name="graphicalOptions.viewpointConfigMap['useClippingForInnerElements']" />
					<itera:message key="graphicalExport.vbbCluster.settings.useClippingForInnerElements"/>
				</label>
			</div>
		</div>
	</div>
</div>
