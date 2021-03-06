<%@ page contentType="text/html; charset=UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles"%>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>

<tilesx:useAttribute name="messagesHeader" />
<tilesx:useAttribute name="messageList" />
<tilesx:useAttribute name="messagesId" />
<tilesx:useAttribute name="messagesPrefix" ignore="true" />

<div class="accordion" id="${messagesId}_Container">
	<div class="accordion-group">
		<div class="accordion-heading">
			<a class="accordion-toggle" data-toggle="collapse" data-parent="#${messagesId}_Container" href="#${messagesId}"
					onclick="toggleIcon('${messagesId}_Icon', 'icon-resize-full', 'icon-resize-small');" >
				<i id="${messagesId}_Icon" class="icon-resize-full"></i>
				<c:out value="${messagesHeader}" />
			</a>
		</div>
		<div id="${messagesId}" class="accordion-body in">
			<div class="accordion-inner">
				<ul>
					<c:forEach var="message" items="${messageList}">
						<li><c:out value="${messagesPrefix}${message}" /></li>
					</c:forEach>
				</ul>
			</div>
		</div>
	</div>
</div>
