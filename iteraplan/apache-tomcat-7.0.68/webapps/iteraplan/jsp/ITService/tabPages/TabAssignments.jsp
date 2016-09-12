<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>

<div class="accordion" id="businessArchitectureContainer">
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#businessArchitectureContainer" href="#businessArchitecture"
          onclick="toggleIcon('businessArchitectureIcon', 'icon-resize-full', 'icon-resize-small');" >
        <i id="businessArchitectureIcon" class="icon-resize-small"></i>
        <itera:message key="global.businessArchitecture" />
      </a>
    </div>
    <div id="businessArchitecture" class="accordion-body in" style="height: auto; ">
      <div class="accordion-inner">
        <tiles:insertTemplate template="/jsp/common/ManyAssociationSetComponentComboboxView.jsp" flush="true">
          <tiles:putAttribute name="path_to_componentModel" value="componentModel.businessFunctionModel" />
          <tiles:putAttribute name="dynamically_loaded" value="true" />
        </tiles:insertTemplate>
      </div>
    </div>
  </div>
</div>
<div class="accordion" id="applicationArchitectureContainer">
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#applicationArchitectureContainer" href="#applicationArchitecture" 
          onclick="toggleIcon('applicationArchitectureIcon', 'icon-resize-full', 'icon-resize-small');" >
        <i id="applicationArchitectureIcon" class="icon-resize-small"></i>
        <itera:message key="global.applicationArchitecture" />
      </a>
    </div>
    <div id="applicationArchitecture" class="accordion-body in collapse" style="height: auto; ">
      <div class="accordion-inner">
        <tiles:insertTemplate template="/jsp/common/ManyAssociationSetComponentComboboxView.jsp" flush="true">
          <tiles:putAttribute name="path_to_componentModel" value="componentModel.informationSystemReleaseModel" />
          <tiles:putAttribute name="dynamically_loaded" value="true" />
        </tiles:insertTemplate>
      </div>
    </div>
  </div>
</div>
<div class="accordion" id="technicalArchitectureContainer">
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#technicalArchitectureContainer" href="#technicalArchitecture"
          onclick="toggleIcon('technicalArchitectureIcon', 'icon-resize-full', 'icon-resize-small');" >
        <i id="technicalArchitectureIcon" class="icon-resize-small"></i>
        <itera:message key="global.technicalArchitecture" />
      </a>
    </div>
    <div id="technicalArchitecture" class="accordion-body in collapse" style="height: auto; ">
      <div class="accordion-inner">
        <tiles:insertTemplate template="/jsp/common/ManyAssociationSetComponentComboboxView.jsp" flush="true">
          <tiles:putAttribute name="path_to_componentModel" value="componentModel.technicalComponentReleaseModel" />
          <tiles:putAttribute name="dynamically_loaded" value="true" />
        </tiles:insertTemplate>
      </div>
    </div>
  </div>
</div>
<div class="accordion" id="infrastructureArchitectureContainer">
  <div class="accordion-group">
    <div class="accordion-heading">
      <a class="accordion-toggle" data-toggle="collapse" data-parent="#infrastructureArchitectureContainer" href="#infrastructureArchitecture"
          onclick="toggleIcon('infrastructureArchitectureIcon', 'icon-resize-full', 'icon-resize-small');" >
        <i id="infrastructureArchitectureIcon" class="icon-resize-small"></i>
        <itera:message key="global.infrastructureArchitecture" />
      </a>
    </div>
    <div id="infrastructureArchitecture" class="accordion-body in collapse" style="height: auto; ">
      <div class="accordion-inner">
        <tiles:insertTemplate template="/jsp/common/ManyAssociationSetComponentComboboxView.jsp" flush="true">
          <tiles:putAttribute name="path_to_componentModel" value="componentModel.infrastructureElementModel" />
          <tiles:putAttribute name="dynamically_loaded" value="true" />
        </tiles:insertTemplate>
      </div>
    </div>
  </div>
</div>
