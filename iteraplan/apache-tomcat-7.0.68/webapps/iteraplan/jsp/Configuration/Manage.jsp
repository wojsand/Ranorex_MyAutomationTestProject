<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://www.springframework.org/tags/form" prefix="form" %>

<c:set var="functionalPermission" value="${userContext.perms.userHasFuncPermConfiguration}" scope="request" />

<c:choose>
	<c:when test="${functionalPermission == true}">
  
          <c:if test="${update_success}">
            <div class="alert alert-info">
              <itera:message key="global.updatelicense.success" />
              <button type="button" class="close" data-dismiss="alert">&times;</button>
            </div>
          </c:if>
          <c:if test="${update_fail}">
            <div class="alert alert-error">
              <itera:message key="global.updatelicense.fail" />
              <button type="button" class="close" data-dismiss="alert">&times;</button>
            </div>
          </c:if>

          <div id="GlobalConfigurationModul" class="row-fluid module">
			<div class="module-heading">
				<itera:message key="global.configuration" />
			</div>
			<div class="row-fluid">
				<div class="module-body">
					<div class="row-fluid">
						<div class="control-group">
							<div class="controls">
								<form:checkbox path="showInactive" id="globalConfiguration_checkbox"/>
							</div>
							<label class="control-label-right" for="globalConfiguration_checkbox">
						  		<itera:message key="configuration.showInactive" />
						  	</label>
						</div>
						<div class="transactionbar">
							<input id="changeShowInactive" type="button" value="<itera:message key="button.ok" />" class="btn" onclick="submitForm('saveConfiguration.do');" />				  		
					  	</div>
					</div>
				</div>
			</div>
		</div>
			
		<div id="ManageSearchModul" class="row-fluid module">
			<div class="module-heading">
				<itera:message key="manageSearch.heading" />
			</div>
			<div class="row-fluid">
				<div class="module-body">
					<div class="row-fluid">
						<div class="control-group">
							<div class="controls">
								<form:checkbox path="purgeIndex" id="manageSearch_checkbox"/>
							</div>
							<label class="control-label-right" for="manageSearch_checkbox">
						  		<itera:message key="configuration.purgeIndex" />
						  	</label>
						</div>
						<div class="transactionbar">
							<span class="errorInline" style="display: none;" id="refreshIndexInProgress"><itera:message key="configuration.refreshIndexInProgress" /></span> 
					    	<input id="submitRefreshIndex" type="button" value="<itera:message key="button.refreshIndex" />" class="btn"
								onclick="toggleButton('submitRefreshIndex'); $('#refreshIndexInProgress').css('display','block'); submitForm('refreshIndex.do');" />				  		
					  	</div>
					  	<div class="helpText">
					  		<itera:message key="configuration.refreshIndex.hintText" />
					  	</div>
					</div>
				</div>
			</div>
		</div>
		
		<div id="globalCacheModul" class="row-fluid module">
			<div class="module-heading">
				<itera:message key="global.cache" />
			</div>
			<div class="row-fluid">
				<div class="module-body">
					<div class="row-fluid">
						<input id="clearCache" type="button" value="<itera:message key="global.cache.clear" />" onclick="submitForm('clearHibernateCache.do');" class="btn" />
						<div class="helpText">
							<itera:message key="global.cache.description" />
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<c:choose>
			<%-- Only administrators are allowed to create system info --%>
			<c:when test="${userContext.perms.userIsAdministrator}">
			
			<div id="systemInfoModul" class="row-fluid module">
		    	<div class="module-heading">
		        	<itera:message key="global.systeminfo" />
		    	</div>
				<div class="row-fluid">
		    		<div class="module-body">
		        		<div class="row-fluid">
		            		<input id="createSystemInfo" type="button" value="<itera:message key="global.create.systeminfo" />" onclick="submitForm('createSystemInfo.do');" class="btn" />
		            		<div class="helpText">
		                		<itera:message key="global.systeminfo.description" />
		            		</div>
		        		</div>
		    		</div>
				</div>
	    	</div>
	    	</c:when>
	    </c:choose>
      
        <div id="UpdateLicenseModul" class="row-fluid module">
          <div class="module-heading">
            <itera:message key="global.license.update" />
          </div>
          <div class="row-fluid">
            <div class="module-body">
              <div class="row-fluid">
                <div>
                  <form:textarea id="updateLicense_textarea" path="licenseContent" cssStyle="width:70em;height:3em;" />
                </div>
                <div class="transactionbar">
                  <input id="storeLicenseUpdate" type="button" value="<itera:message key="button.upload" />" class="btn" onclick="submitForm('updateLicense.do');" />             
                </div>
                <div class="helpText">
                  <itera:message key="global.updatelicense.description" />
                </div>
              </div>
            </div>
          </div>
        </div>
      
	</c:when>
	<c:otherwise>
		<tiles:insertTemplate template="/jsp/common/AccessDenied.jsp" />
	</c:otherwise>
  

</c:choose>
