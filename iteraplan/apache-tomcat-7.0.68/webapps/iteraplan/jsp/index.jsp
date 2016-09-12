<%@ page contentType="text/html; charset=UTF-8" %>
<%
		
        String redirectURL = request.getContextPath() + "/start/start.do";
        if (! response.isCommitted()) {
          response.sendRedirect(redirectURL);
        }
%>
