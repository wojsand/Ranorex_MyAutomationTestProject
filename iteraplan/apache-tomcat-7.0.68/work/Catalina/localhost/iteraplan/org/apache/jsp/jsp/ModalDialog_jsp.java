/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.68
 * Generated at: 2016-09-05 08:17:32 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.jsp;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class ModalDialog_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.HashMap<java.lang.String,java.lang.Long>(1);
    _jspx_dependants.put("/WEB-INF/tlds/iteratec-tags.tld", Long.valueOf(1471878616000L));
  }

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody;

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody.release();
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
        throws java.io.IOException, javax.servlet.ServletException {

    final javax.servlet.jsp.PageContext pageContext;
    javax.servlet.http.HttpSession session = null;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html; charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("<script type=\"text/javascript\">\r\n");
      out.write("/* <![CDATA[ */\r\n");
      out.write("$(function() {\r\n");
      out.write("\r\n");
      out.write("\t/* closes modal on enter */\r\n");
      out.write("    $('#modalDialog').on('shown', function () {\r\n");
      out.write("    \tvar close = $(\"#close\");\r\n");
      out.write("    \t$(document).on('keyup.confirm.modal', function ( e ) {\r\n");
      out.write("            e.which == 13 && close.click();\r\n");
      out.write("          });\r\n");
      out.write("\t});    \r\n");
      out.write("});\r\n");
      out.write("/* ]]> */\r\n");
      out.write("</script>\r\n");
      out.write("\r\n");
      out.write("<div class=\"modal hide\" id=\"modalDialog\">\r\n");
      out.write("  \t<div class=\"modal-header\">\r\n");
      out.write("    \t<a class=\"close\" data-dismiss=\"modal\">×</a>\r\n");
      out.write("    \t<h3 id=\"modalDialogTitle\"></h3>\r\n");
      out.write(" \t</div>\r\n");
      out.write("  \t<div class=\"modal-body\">\r\n");
      out.write("    \t<p id=\"modalDialogContent\"></p>\r\n");
      out.write("  \t</div>\r\n");
      out.write("  \t<div class=\"modal-footer hide\" id=\"modalFooterContainer\">\r\n");
      out.write("\r\n");
      out.write("    \t<a id=\"modalFooterOK\" href=\"#\" class=\"btn btn-primary\" data-dismiss=\"modal\">\r\n");
      out.write("    \t\t<i class=\"icon-ok icon-white\"></i>\r\n");
      out.write("    \t\t");
      if (_jspx_meth_itera_005fmessage_005f0(_jspx_page_context))
        return;
      out.write("<input id=\"close\" class=\"hide\" type =\"submit\"></input>\r\n");
      out.write("    \t</a>\r\n");
      out.write("    \t<a id=\"modalFooterCancel\" href=\"#\" class=\"btn\" data-dismiss=\"modal\">\r\n");
      out.write("    \t\t");
      if (_jspx_meth_itera_005fmessage_005f1(_jspx_page_context))
        return;
      out.write("</a>\r\n");
      out.write("  </div>\r\n");
      out.write("</div>\r\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }

  private boolean _jspx_meth_itera_005fmessage_005f0(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  itera:message
    de.iteratec.iteraplan.presentation.tags.EscapedKeyMessageTag _jspx_th_itera_005fmessage_005f0 = (de.iteratec.iteraplan.presentation.tags.EscapedKeyMessageTag) _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody.get(de.iteratec.iteraplan.presentation.tags.EscapedKeyMessageTag.class);
    _jspx_th_itera_005fmessage_005f0.setPageContext(_jspx_page_context);
    _jspx_th_itera_005fmessage_005f0.setParent(null);
    // /jsp/ModalDialog.jsp(32,6) name = key type = null reqTime = true required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_itera_005fmessage_005f0.setKey("button.ok");
    int _jspx_eval_itera_005fmessage_005f0 = _jspx_th_itera_005fmessage_005f0.doStartTag();
    if (_jspx_th_itera_005fmessage_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_itera_005fmessage_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_itera_005fmessage_005f0);
    return false;
  }

  private boolean _jspx_meth_itera_005fmessage_005f1(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  itera:message
    de.iteratec.iteraplan.presentation.tags.EscapedKeyMessageTag _jspx_th_itera_005fmessage_005f1 = (de.iteratec.iteraplan.presentation.tags.EscapedKeyMessageTag) _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody.get(de.iteratec.iteraplan.presentation.tags.EscapedKeyMessageTag.class);
    _jspx_th_itera_005fmessage_005f1.setPageContext(_jspx_page_context);
    _jspx_th_itera_005fmessage_005f1.setParent(null);
    // /jsp/ModalDialog.jsp(36,6) name = key type = null reqTime = true required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_itera_005fmessage_005f1.setKey("button.cancel");
    int _jspx_eval_itera_005fmessage_005f1 = _jspx_th_itera_005fmessage_005f1.doStartTag();
    if (_jspx_th_itera_005fmessage_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_itera_005fmessage_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_itera_005fmessage_005f1);
    return false;
  }
}
