<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles-extras" prefix="tilesx" %>
<%@ page contentType="text/javascript; charset=UTF-8" pageEncoding="UTF-8" %>

<tilesx:useAttribute name="content" />
<tiles:insertTemplate template="${content}" flush="false" />
