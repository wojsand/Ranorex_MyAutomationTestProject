/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: Apache Tomcat/7.0.68
 * Generated at: 2016-09-05 08:17:54 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.jsp.common;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class BuildingBlockManageActions_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  static {
    _jspx_dependants = new java.util.HashMap<java.lang.String,java.lang.Long>(1);
    _jspx_dependants.put("/WEB-INF/tlds/iteratec-tags.tld", Long.valueOf(1471878616000L));
  }

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fitera_005fcheckBbInstancePermission2_0026_005fuserContext_005fresult_005fproperty_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fc_005fif_0026_005ftest;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fc_005fset_0026_005fvar;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fitera_005flinkToElement_0026_005ftype_005fname_005fnobody;
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
    _005fjspx_005ftagPool_005fitera_005fcheckBbInstancePermission2_0026_005fuserContext_005fresult_005fproperty_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fc_005fif_0026_005ftest = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fc_005fset_0026_005fvar = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fitera_005flinkToElement_0026_005ftype_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fitera_005fcheckBbInstancePermission2_0026_005fuserContext_005fresult_005fproperty_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.release();
    _005fjspx_005ftagPool_005fc_005fset_0026_005fvar.release();
    _005fjspx_005ftagPool_005fitera_005flinkToElement_0026_005ftype_005fname_005fnobody.release();
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

      //  tilesx:useAttribute
      org.apache.tiles.jsp.taglib.UseAttributeTag _jspx_th_tilesx_005fuseAttribute_005f0 = (new org.apache.tiles.jsp.taglib.UseAttributeTag());
      _jsp_getInstanceManager().newInstance(_jspx_th_tilesx_005fuseAttribute_005f0);
      _jspx_th_tilesx_005fuseAttribute_005f0.setJspContext(_jspx_page_context);
      // /jsp/common/BuildingBlockManageActions.jsp(8,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
      _jspx_th_tilesx_005fuseAttribute_005f0.setName("bb");
      _jspx_th_tilesx_005fuseAttribute_005f0.doTag();
      java.lang.Object bb = null;
      bb = (java.lang.Object) _jspx_page_context.findAttribute("bb");
      _jsp_getInstanceManager().destroyInstance(_jspx_th_tilesx_005fuseAttribute_005f0);
      //  tilesx:useAttribute
      org.apache.tiles.jsp.taglib.UseAttributeTag _jspx_th_tilesx_005fuseAttribute_005f1 = (new org.apache.tiles.jsp.taglib.UseAttributeTag());
      _jsp_getInstanceManager().newInstance(_jspx_th_tilesx_005fuseAttribute_005f1);
      _jspx_th_tilesx_005fuseAttribute_005f1.setJspContext(_jspx_page_context);
      // /jsp/common/BuildingBlockManageActions.jsp(9,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
      _jspx_th_tilesx_005fuseAttribute_005f1.setName("updatePermissionType");
      _jspx_th_tilesx_005fuseAttribute_005f1.doTag();
      java.lang.Object updatePermissionType = null;
      updatePermissionType = (java.lang.Object) _jspx_page_context.findAttribute("updatePermissionType");
      _jsp_getInstanceManager().destroyInstance(_jspx_th_tilesx_005fuseAttribute_005f1);
      //  tilesx:useAttribute
      org.apache.tiles.jsp.taglib.UseAttributeTag _jspx_th_tilesx_005fuseAttribute_005f2 = (new org.apache.tiles.jsp.taglib.UseAttributeTag());
      _jsp_getInstanceManager().newInstance(_jspx_th_tilesx_005fuseAttribute_005f2);
      _jspx_th_tilesx_005fuseAttribute_005f2.setJspContext(_jspx_page_context);
      // /jsp/common/BuildingBlockManageActions.jsp(10,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
      _jspx_th_tilesx_005fuseAttribute_005f2.setName("createPermissionType");
      _jspx_th_tilesx_005fuseAttribute_005f2.doTag();
      java.lang.Object createPermissionType = null;
      createPermissionType = (java.lang.Object) _jspx_page_context.findAttribute("createPermissionType");
      _jsp_getInstanceManager().destroyInstance(_jspx_th_tilesx_005fuseAttribute_005f2);
      //  tilesx:useAttribute
      org.apache.tiles.jsp.taglib.UseAttributeTag _jspx_th_tilesx_005fuseAttribute_005f3 = (new org.apache.tiles.jsp.taglib.UseAttributeTag());
      _jsp_getInstanceManager().newInstance(_jspx_th_tilesx_005fuseAttribute_005f3);
      _jspx_th_tilesx_005fuseAttribute_005f3.setJspContext(_jspx_page_context);
      // /jsp/common/BuildingBlockManageActions.jsp(11,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
      _jspx_th_tilesx_005fuseAttribute_005f3.setName("deletePermissionType");
      _jspx_th_tilesx_005fuseAttribute_005f3.doTag();
      java.lang.Object deletePermissionType = null;
      deletePermissionType = (java.lang.Object) _jspx_page_context.findAttribute("deletePermissionType");
      _jsp_getInstanceManager().destroyInstance(_jspx_th_tilesx_005fuseAttribute_005f3);
      if (_jspx_meth_itera_005fcheckBbInstancePermission2_005f0(_jspx_page_context))
        return;
      if (_jspx_meth_c_005fif_005f0(_jspx_page_context))
        return;
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

  private boolean _jspx_meth_itera_005fcheckBbInstancePermission2_005f0(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  itera:checkBbInstancePermission2
    de.iteratec.iteraplan.presentation.tags.CheckBbInstancePermission2 _jspx_th_itera_005fcheckBbInstancePermission2_005f0 = (de.iteratec.iteraplan.presentation.tags.CheckBbInstancePermission2) _005fjspx_005ftagPool_005fitera_005fcheckBbInstancePermission2_0026_005fuserContext_005fresult_005fproperty_005fname_005fnobody.get(de.iteratec.iteraplan.presentation.tags.CheckBbInstancePermission2.class);
    _jspx_th_itera_005fcheckBbInstancePermission2_005f0.setPageContext(_jspx_page_context);
    _jspx_th_itera_005fcheckBbInstancePermission2_005f0.setParent(null);
    // /jsp/common/BuildingBlockManageActions.jsp(13,0) name = name type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_itera_005fcheckBbInstancePermission2_005f0.setName("bb");
    // /jsp/common/BuildingBlockManageActions.jsp(13,0) name = property type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_itera_005fcheckBbInstancePermission2_005f0.setProperty("owningUserEntities");
    // /jsp/common/BuildingBlockManageActions.jsp(13,0) name = result type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_itera_005fcheckBbInstancePermission2_005f0.setResult("writePermissionInstance");
    // /jsp/common/BuildingBlockManageActions.jsp(13,0) name = userContext type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_itera_005fcheckBbInstancePermission2_005f0.setUserContext("userContext");
    int _jspx_eval_itera_005fcheckBbInstancePermission2_005f0 = _jspx_th_itera_005fcheckBbInstancePermission2_005f0.doStartTag();
    if (_jspx_th_itera_005fcheckBbInstancePermission2_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fitera_005fcheckBbInstancePermission2_0026_005fuserContext_005fresult_005fproperty_005fname_005fnobody.reuse(_jspx_th_itera_005fcheckBbInstancePermission2_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fitera_005fcheckBbInstancePermission2_0026_005fuserContext_005fresult_005fproperty_005fname_005fnobody.reuse(_jspx_th_itera_005fcheckBbInstancePermission2_005f0);
    return false;
  }

  private boolean _jspx_meth_c_005fif_005f0(javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  c:if
    org.apache.taglibs.standard.tag.rt.core.IfTag _jspx_th_c_005fif_005f0 = (org.apache.taglibs.standard.tag.rt.core.IfTag) _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.get(org.apache.taglibs.standard.tag.rt.core.IfTag.class);
    _jspx_th_c_005fif_005f0.setPageContext(_jspx_page_context);
    _jspx_th_c_005fif_005f0.setParent(null);
    // /jsp/common/BuildingBlockManageActions.jsp(15,0) name = test type = boolean reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_c_005fif_005f0.setTest(((java.lang.Boolean) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${writePermissionInstance and (bb.identityString != '-')}", java.lang.Boolean.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false)).booleanValue());
    int _jspx_eval_c_005fif_005f0 = _jspx_th_c_005fif_005f0.doStartTag();
    if (_jspx_eval_c_005fif_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        if (_jspx_meth_c_005fset_005f0(_jspx_th_c_005fif_005f0, _jspx_page_context))
          return true;
        if (_jspx_meth_c_005fif_005f1(_jspx_th_c_005fif_005f0, _jspx_page_context))
          return true;
        if (_jspx_meth_c_005fif_005f2(_jspx_th_c_005fif_005f0, _jspx_page_context))
          return true;
        if (_jspx_meth_c_005fif_005f3(_jspx_th_c_005fif_005f0, _jspx_page_context))
          return true;
        int evalDoAfterBody = _jspx_th_c_005fif_005f0.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_c_005fif_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.reuse(_jspx_th_c_005fif_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.reuse(_jspx_th_c_005fif_005f0);
    return false;
  }

  private boolean _jspx_meth_c_005fset_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_c_005fif_005f0, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  c:set
    org.apache.taglibs.standard.tag.rt.core.SetTag _jspx_th_c_005fset_005f0 = (org.apache.taglibs.standard.tag.rt.core.SetTag) _005fjspx_005ftagPool_005fc_005fset_0026_005fvar.get(org.apache.taglibs.standard.tag.rt.core.SetTag.class);
    _jspx_th_c_005fset_005f0.setPageContext(_jspx_page_context);
    _jspx_th_c_005fset_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_c_005fif_005f0);
    // /jsp/common/BuildingBlockManageActions.jsp(16,1) name = var type = java.lang.String reqTime = false required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_c_005fset_005f0.setVar("link");
    int _jspx_eval_c_005fset_005f0 = _jspx_th_c_005fset_005f0.doStartTag();
    if (_jspx_eval_c_005fset_005f0 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      if (_jspx_eval_c_005fset_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.pushBody();
        _jspx_th_c_005fset_005f0.setBodyContent((javax.servlet.jsp.tagext.BodyContent) out);
        _jspx_th_c_005fset_005f0.doInitBody();
      }
      do {
        if (_jspx_meth_itera_005flinkToElement_005f0(_jspx_th_c_005fset_005f0, _jspx_page_context))
          return true;
        int evalDoAfterBody = _jspx_th_c_005fset_005f0.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
      if (_jspx_eval_c_005fset_005f0 != javax.servlet.jsp.tagext.Tag.EVAL_BODY_INCLUDE) {
        out = _jspx_page_context.popBody();
      }
    }
    if (_jspx_th_c_005fset_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fc_005fset_0026_005fvar.reuse(_jspx_th_c_005fset_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fc_005fset_0026_005fvar.reuse(_jspx_th_c_005fset_005f0);
    return false;
  }

  private boolean _jspx_meth_itera_005flinkToElement_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_c_005fset_005f0, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  itera:linkToElement
    de.iteratec.iteraplan.presentation.tags.LinkToElementTag _jspx_th_itera_005flinkToElement_005f0 = (de.iteratec.iteraplan.presentation.tags.LinkToElementTag) _005fjspx_005ftagPool_005fitera_005flinkToElement_0026_005ftype_005fname_005fnobody.get(de.iteratec.iteraplan.presentation.tags.LinkToElementTag.class);
    _jspx_th_itera_005flinkToElement_005f0.setPageContext(_jspx_page_context);
    _jspx_th_itera_005flinkToElement_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_c_005fset_005f0);
    // /jsp/common/BuildingBlockManageActions.jsp(17,2) name = name type = null reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_itera_005flinkToElement_005f0.setName("bb");
    // /jsp/common/BuildingBlockManageActions.jsp(17,2) name = type type = null reqTime = true required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_itera_005flinkToElement_005f0.setType("html");
    int _jspx_eval_itera_005flinkToElement_005f0 = _jspx_th_itera_005flinkToElement_005f0.doStartTag();
    if (_jspx_th_itera_005flinkToElement_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fitera_005flinkToElement_0026_005ftype_005fname_005fnobody.reuse(_jspx_th_itera_005flinkToElement_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fitera_005flinkToElement_0026_005ftype_005fname_005fnobody.reuse(_jspx_th_itera_005flinkToElement_005f0);
    return false;
  }

  private boolean _jspx_meth_c_005fif_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_c_005fif_005f0, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  c:if
    org.apache.taglibs.standard.tag.rt.core.IfTag _jspx_th_c_005fif_005f1 = (org.apache.taglibs.standard.tag.rt.core.IfTag) _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.get(org.apache.taglibs.standard.tag.rt.core.IfTag.class);
    _jspx_th_c_005fif_005f1.setPageContext(_jspx_page_context);
    _jspx_th_c_005fif_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_c_005fif_005f0);
    // /jsp/common/BuildingBlockManageActions.jsp(20,1) name = test type = boolean reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_c_005fif_005f1.setTest(((java.lang.Boolean) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${updatePermissionType}", java.lang.Boolean.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false)).booleanValue());
    int _jspx_eval_c_005fif_005f1 = _jspx_th_c_005fif_005f1.doStartTag();
    if (_jspx_eval_c_005fif_005f1 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        out.write("<a href=\"javascript:changeLocation('");
        out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${link}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
        out.write("?_eventId=edit');\" title=\"");
        if (_jspx_meth_itera_005fmessage_005f0(_jspx_th_c_005fif_005f1, _jspx_page_context))
          return true;
        out.write("\"> <i class=\"icon-pencil\"></i>\r\n");
        out.write("\t\t</a>\r\n");
        out.write("\t");
        int evalDoAfterBody = _jspx_th_c_005fif_005f1.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_c_005fif_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.reuse(_jspx_th_c_005fif_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.reuse(_jspx_th_c_005fif_005f1);
    return false;
  }

  private boolean _jspx_meth_itera_005fmessage_005f0(javax.servlet.jsp.tagext.JspTag _jspx_th_c_005fif_005f1, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  itera:message
    de.iteratec.iteraplan.presentation.tags.EscapedKeyMessageTag _jspx_th_itera_005fmessage_005f0 = (de.iteratec.iteraplan.presentation.tags.EscapedKeyMessageTag) _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody.get(de.iteratec.iteraplan.presentation.tags.EscapedKeyMessageTag.class);
    _jspx_th_itera_005fmessage_005f0.setPageContext(_jspx_page_context);
    _jspx_th_itera_005fmessage_005f0.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_c_005fif_005f1);
    // /jsp/common/BuildingBlockManageActions.jsp(21,71) name = key type = null reqTime = true required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_itera_005fmessage_005f0.setKey("button.edit");
    int _jspx_eval_itera_005fmessage_005f0 = _jspx_th_itera_005fmessage_005f0.doStartTag();
    if (_jspx_th_itera_005fmessage_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_itera_005fmessage_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_itera_005fmessage_005f0);
    return false;
  }

  private boolean _jspx_meth_c_005fif_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_c_005fif_005f0, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  c:if
    org.apache.taglibs.standard.tag.rt.core.IfTag _jspx_th_c_005fif_005f2 = (org.apache.taglibs.standard.tag.rt.core.IfTag) _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.get(org.apache.taglibs.standard.tag.rt.core.IfTag.class);
    _jspx_th_c_005fif_005f2.setPageContext(_jspx_page_context);
    _jspx_th_c_005fif_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_c_005fif_005f0);
    // /jsp/common/BuildingBlockManageActions.jsp(24,1) name = test type = boolean reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_c_005fif_005f2.setTest(((java.lang.Boolean) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${createPermissionType}", java.lang.Boolean.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false)).booleanValue());
    int _jspx_eval_c_005fif_005f2 = _jspx_th_c_005fif_005f2.doStartTag();
    if (_jspx_eval_c_005fif_005f2 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        out.write("<a href=\"javascript:changeLocation('");
        out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${link}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
        out.write("?_eventId=copyBB');\" title=\"");
        if (_jspx_meth_itera_005fmessage_005f1(_jspx_th_c_005fif_005f2, _jspx_page_context))
          return true;
        out.write("\"> <i class=\"icon-share\"></i>\r\n");
        out.write("\t\t</a>\r\n");
        out.write("\t");
        int evalDoAfterBody = _jspx_th_c_005fif_005f2.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_c_005fif_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.reuse(_jspx_th_c_005fif_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.reuse(_jspx_th_c_005fif_005f2);
    return false;
  }

  private boolean _jspx_meth_itera_005fmessage_005f1(javax.servlet.jsp.tagext.JspTag _jspx_th_c_005fif_005f2, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  itera:message
    de.iteratec.iteraplan.presentation.tags.EscapedKeyMessageTag _jspx_th_itera_005fmessage_005f1 = (de.iteratec.iteraplan.presentation.tags.EscapedKeyMessageTag) _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody.get(de.iteratec.iteraplan.presentation.tags.EscapedKeyMessageTag.class);
    _jspx_th_itera_005fmessage_005f1.setPageContext(_jspx_page_context);
    _jspx_th_itera_005fmessage_005f1.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_c_005fif_005f2);
    // /jsp/common/BuildingBlockManageActions.jsp(25,73) name = key type = null reqTime = true required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_itera_005fmessage_005f1.setKey("button.copy");
    int _jspx_eval_itera_005fmessage_005f1 = _jspx_th_itera_005fmessage_005f1.doStartTag();
    if (_jspx_th_itera_005fmessage_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_itera_005fmessage_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_itera_005fmessage_005f1);
    return false;
  }

  private boolean _jspx_meth_c_005fif_005f3(javax.servlet.jsp.tagext.JspTag _jspx_th_c_005fif_005f0, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  c:if
    org.apache.taglibs.standard.tag.rt.core.IfTag _jspx_th_c_005fif_005f3 = (org.apache.taglibs.standard.tag.rt.core.IfTag) _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.get(org.apache.taglibs.standard.tag.rt.core.IfTag.class);
    _jspx_th_c_005fif_005f3.setPageContext(_jspx_page_context);
    _jspx_th_c_005fif_005f3.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_c_005fif_005f0);
    // /jsp/common/BuildingBlockManageActions.jsp(28,1) name = test type = boolean reqTime = true required = true fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_c_005fif_005f3.setTest(((java.lang.Boolean) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${deletePermissionType}", java.lang.Boolean.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false)).booleanValue());
    int _jspx_eval_c_005fif_005f3 = _jspx_th_c_005fif_005f3.doStartTag();
    if (_jspx_eval_c_005fif_005f3 != javax.servlet.jsp.tagext.Tag.SKIP_BODY) {
      do {
        out.write("<a href=\"javascript:confirmDeleteBuildingBlocks(function(){changeLocation('");
        out.write((java.lang.String) org.apache.jasper.runtime.PageContextImpl.proprietaryEvaluate("${link}", java.lang.String.class, (javax.servlet.jsp.PageContext)_jspx_page_context, null, false));
        out.write("?_eventId=delete')});\"\r\n");
        out.write("\t\t\ttitle=\"");
        if (_jspx_meth_itera_005fmessage_005f2(_jspx_th_c_005fif_005f3, _jspx_page_context))
          return true;
        out.write("\"> <i class=\"icon-trash\"></i>\r\n");
        out.write("\t\t</a>\r\n");
        out.write("\t");
        int evalDoAfterBody = _jspx_th_c_005fif_005f3.doAfterBody();
        if (evalDoAfterBody != javax.servlet.jsp.tagext.BodyTag.EVAL_BODY_AGAIN)
          break;
      } while (true);
    }
    if (_jspx_th_c_005fif_005f3.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.reuse(_jspx_th_c_005fif_005f3);
      return true;
    }
    _005fjspx_005ftagPool_005fc_005fif_0026_005ftest.reuse(_jspx_th_c_005fif_005f3);
    return false;
  }

  private boolean _jspx_meth_itera_005fmessage_005f2(javax.servlet.jsp.tagext.JspTag _jspx_th_c_005fif_005f3, javax.servlet.jsp.PageContext _jspx_page_context)
          throws java.lang.Throwable {
    javax.servlet.jsp.PageContext pageContext = _jspx_page_context;
    javax.servlet.jsp.JspWriter out = _jspx_page_context.getOut();
    //  itera:message
    de.iteratec.iteraplan.presentation.tags.EscapedKeyMessageTag _jspx_th_itera_005fmessage_005f2 = (de.iteratec.iteraplan.presentation.tags.EscapedKeyMessageTag) _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody.get(de.iteratec.iteraplan.presentation.tags.EscapedKeyMessageTag.class);
    _jspx_th_itera_005fmessage_005f2.setPageContext(_jspx_page_context);
    _jspx_th_itera_005fmessage_005f2.setParent((javax.servlet.jsp.tagext.Tag) _jspx_th_c_005fif_005f3);
    // /jsp/common/BuildingBlockManageActions.jsp(30,10) name = key type = null reqTime = true required = false fragment = false deferredValue = false expectedTypeName = null deferredMethod = false methodSignature = null
    _jspx_th_itera_005fmessage_005f2.setKey("button.delete");
    int _jspx_eval_itera_005fmessage_005f2 = _jspx_th_itera_005fmessage_005f2.doStartTag();
    if (_jspx_th_itera_005fmessage_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_itera_005fmessage_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fitera_005fmessage_0026_005fkey_005fnobody.reuse(_jspx_th_itera_005fmessage_005f2);
    return false;
  }
}
