<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn"%>

<li>
	<a id="bookmarkLink" href="#"
		onclick="showTipLinkDialog('<itera:message key="global.bookmark" />:', '<itera:message key="global.bookmark" />', '<itera:linkToBookmark  parameter="url"/>');" >
		<i class="icon-bookmark"></i>
		<itera:message key="global.link" />
	</a>
</li>
<c:if test="${componentMode == 'READ'}">
	<li>
		<a id="printLink" href="#"
			onclick="window.print();return false;" >
			<i class="icon-print"></i>
			<itera:message key="global.print" />
		</a>
	</li>
</c:if>

<script type= "text/javascript">
$( document ).ready(function() {
	   
    $( "#bookmarkLink" ).click(function() {
                               var activeTab = $('#tab_ConfigTabs > ul > li.active').attr('id');
                               var currentURL = $('#bookmark').val();
                               var linkURL;
                               
                               switch (activeTab) {
                               
                                               case 'tab_TabHierarchy':
                                                     linkURL = "activeTab=TabHierarchy";
                                                     break;
                                               case 'tab_TabAssignments':
                                                     linkURL = "activeTab=TabAssignments";
                                                     break;              
                                               case 'tab_TabAttributes':
                                                     linkURL = "activeTab=TabAttributes";
                                                     break;
                                               case 'tab_TabPermissions':
                                                     linkURL = "activeTab=TabPermissions";
                                                     break;                                            
                                               case 'tab_FastExport':
                                                     linkURL = "activeTab=FastExport";
                                                     break;
                                               case 'tab_TabLocalHistory':
                                                     linkURL = "activeTab=TabLocalHistory";
                                                     break;
                               }
                               //build the full url
                               
                               currentURL += "?" + linkURL;
                               $('#bookmark').val(currentURL);
                
                });
   
   
});

</script>
