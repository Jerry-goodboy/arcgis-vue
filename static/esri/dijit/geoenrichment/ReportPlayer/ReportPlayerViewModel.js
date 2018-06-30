// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.24/esri/copyright.txt for details.
//>>built
define("esri/dijit/geoenrichment/ReportPlayer/ReportPlayerViewModel",["dojo/_base/declare","./core/layout/LayoutBuilder","./core/themes/ThemeLibrary","./core/themes/ReportThemes","../utils/ColorUtil"],function(d,e,f,b,g){return d(null,{reportStyle:null,layoutBuilder:null,dynamicReportInfo:null,chartAnimationAllowed:!0,enableDataDrilling:!0,initialize:function(){this.layoutBuilder=new e;return this.layoutBuilder.initialize()},_theme:null,getCurrentTheme:function(a){return this._theme},setTheme:function(a){this._theme=
a||f.getReportThemeById(b.GRAPHIC)},getTableDefaultStyles:function(a,b){var c=this.getCurrentTheme(a).table.overrideStyles;return b?c[b]:c},getChartDefaultStyles:function(a){return this.getCurrentTheme(a).chart},getDocumentDefaultStyles:function(a){return this.getCurrentTheme(a).document},getInfographicDefaultStyles:function(a){return this.getCurrentTheme(a).infographic},getStaticInfographicDefaultStyles:function(a){return(a=this.getInfographicDefaultStyles(a))&&a.staticInfographic},isLightDocumentTheme:function(a){return g.isLightColor(this.getCurrentTheme(a).document.backgroundColor)},
setDynamicReportInfo:function(a){this.dynamicReportInfo=a;this.reportStyle=a.isClassic?b.CLASSIC:b.GRAPHIC},getDynamicImageFunc:function(a,b){},enrichFieldData:function(a){}})});