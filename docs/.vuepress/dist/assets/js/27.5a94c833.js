(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{308:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h3",{attrs:{id:"consul"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consul"}},[t._v("#")]),t._v(" Consul")]),t._v(" "),s("h4",{attrs:{id:"包名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#包名"}},[t._v("#")]),t._v(" 包名")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("Air.Cloud.Modules.Consul\n")])])]),s("h4",{attrs:{id:"所用标准"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#所用标准"}},[t._v("#")]),t._v(" 所用标准")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",[s("code",[t._v("无\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),s("p",[t._v("该模组将会引导框架进行加载配置,所以需要注册中心与配置中心的双重支持,v1.x 不支持只加载配置,不进行注册的行为,这一问题将会在v2.x中进行修复")])]),t._v(" "),s("h4",{attrs:{id:"配置项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置项"}},[t._v("#")]),t._v(" 配置项")]),t._v(" "),s("h4",{attrs:{id:"consulserviceoptions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#consulserviceoptions"}},[t._v("#")]),t._v(" ConsulServiceOptions")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("配置项")]),t._v(" "),s("th",[t._v("说明")]),t._v(" "),s("th",[t._v("默认值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("ConsulAddress")]),t._v(" "),s("td",[t._v("Consul地址")]),t._v(" "),s("td",[t._v("无(必须)")])]),t._v(" "),s("tr",[s("td",[t._v("ServiceAddress")]),t._v(" "),s("td",[t._v("服务运行地址")]),t._v(" "),s("td",[t._v("无(必须)")])])])]),t._v(" "),s("h4",{attrs:{id:"使用示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用示例"}},[t._v("#")]),t._v(" 使用示例")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ConsulServiceOptions"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ConsulAddress"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://192.168.1.129:8500/"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ServiceAddress"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://192.168.1.130:5295"')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Environment"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Development"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])])]),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在你的Program.cs里面增加以下代码")]),t._v("\n \n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("Air"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Cloud"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Modules"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Consul"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Extensions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" builder "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" WebApplication"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" app "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" builder"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("WebInjectInConsul")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);