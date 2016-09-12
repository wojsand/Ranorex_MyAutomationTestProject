<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://tags.iteratec.de/iteratec-tags" prefix="itera"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>

<tilesx:useAttribute name="service_class" ignore="true"/>
<tilesx:useAttribute name="subscribed_element"/>
<tilesx:useAttribute name="id" ignore="true"/>

<c:set var="functionalPermission" value="${userContext.perms.userHasFuncPermSubscription}"/>
<c:set var="functionalPermissionShowSubscribers" value="${userContext.perms.userHasFuncPermShowSubscribers}"/>

<c:if test="${not empty service_class}">

<script type="text/javascript">
//<![CDATA[
	var subscribedUsers = new Array();
	<c:if test="${functionalPermissionShowSubscribers == true and not empty subscribed_element.subscribedUsers}">
		<c:forEach var="user" items="${subscribed_element.subscribedUsers}">
			subscribedUsers.push('<c:out value="${user.loginName}"/>');
		</c:forEach>
  	</c:if>
  	var subscribed = <c:out value="${subscribed_element.subscribed}"/>;
  	var funcPerm = <c:out value="${functionalPermissionShowSubscribers}"/>;

  	// update all button labels as soon as the page has loaded and our variables from above have been initialized 
  	$(document).ready(function() {
  		updateSubscribeLabels(subscribed, subscribedUsers.length);
  	});

  	function doSubscribe() {
  	  	if (subscribed) {
			unsubscribe();
		} else {
			subscribe();
		}
  	}
  	
  	function unsubscribe() {
  		<c:out value="${service_class}"/>.unsubscribe(<c:out value="${id}"/>, function(n) { 
			
  			showPopupDialog("<itera:message key="global.unsubscription.successful" />", "<itera:message key="global.unsubscription.successful" />.");
			if (funcPerm) {
				var indexOf = $.inArray('<c:out value="${userContext.user.loginName}"/>', subscribedUsers);
				if (indexOf > -1) {
					subscribedUsers.splice($.inArray(subscribedUsers), 1);
				}
			} 
			subscribed = false; 
			updateSubscribeLabels(subscribed, n);
		});
  	}
  	
  	function subscribe() {
  		var emailProvided = ('<c:out value="${userContext.user.email}"/>' != '');
  	  	if (!emailProvided) {
  	  	   showPopupDialog("<itera:message key="errorview.headline" />", "<itera:message key="global.subscribe.email.missing" />");
   	  	} else {
  			<c:out value="${service_class}"/>.subscribe(<c:out value="${id}"/>, function(n) {
  			
				showPopupDialog("<itera:message key="global.subscription.successful" />", "<itera:message key="global.subscription.successful" />.");
				if (funcPerm) { 
					subscribedUsers.push('<c:out value="${userContext.user.loginName}"/>');
				}
				subscribed = true;
				updateSubscribeLabels(subscribed, n);
  			});
   	  	}
  	}

  	function showSubscribedUsers() {
  		if (funcPerm) {
  			subscribedUsers.sort();
  			var list = '';
  			if (subscribedUsers.length > 0) {
  				<%-- list the users --%>
  				list = '<ul><li>' + subscribedUsers.join('</li><li>') + '</li></ul>';
  			} else {
  				list = "<itera:message key="global.subscribed.users.emtpy" />.";
  			}
  			showPopupDialog("<itera:message key="global.subscribed.users" />:", list);
  		} else {
  			showPopupDialog("<itera:message key="global.subscribed.users" />:", "<itera:message key="global.subscribe.no.permission" />");
  		}
  	}
  	
  	function updateSubscribeLabels(isSubscribed, subscribersCount) {
		$('span.subscribercount').each(function() {
			$(this).text('(' + subscribersCount + ')');
		});
		$('span.subscribe_button').each(function() {
			if (isSubscribed === true) {
				$(this).text('<itera:message key="global.unsubscribe" />');
			} else if (isSubscribed === false) {
				$(this).text('<itera:message key="global.subscribe" />');
			}
		});
  	}
  	
//]]>
</script>

</c:if>
