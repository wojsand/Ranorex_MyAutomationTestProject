<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>

<tiles:insertTemplate template="/jsp/common/ManyAssociationSetComponentComboboxView.jsp" flush="true">
  <tiles:putAttribute name="path_to_componentModel" value="componentModel.informationSystemReleaseModel" />
  <tiles:putAttribute name="dynamically_loaded" value="true" />
</tiles:insertTemplate>
