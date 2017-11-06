webpackJsonp([31],{390:function(s,t,a){s.exports=a(517)},517:function(s,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a(126),n=a.n(l),e={data:function(){return{treeData1:[{title:"parent 1",expanded:!0,children:[{title:"parent 1-0",expanded:!0,children:[{title:"my leaf"},{title:"your leaf"}]},{title:"parent 1-1",children:[{title:"<span style='color: #08c'>sss</span>"}]}]}],treeData2:[{title:"parent 1",expanded:!0,children:[{title:"parent 1-0",expanded:!0,children:[{title:"my leaf"},{title:"your leaf"},{title:"self leaf"}]},{title:"parent 1-1",children:[{title:"<span style='color: #08c'>sss</span>"}]},{title:"parent 1-2"}]}],asyncData:[{title:"pNode 01",children:[]},{title:"pNode 02",children:[]},{title:"pNode 03"}]}},methods:{onCheck:function(s){console.log(s)},onSelect:function(s){console.log(s)},onClear:function(s){console.log("clear",s)},getData:function(s){return console.log(s),new n.a(function(t){setTimeout(function(){t([{title:"leaf "+s.clue+"-0",children:[]},{title:"leaf "+s.clue+"-1"},{title:"leaf "+s.clue+"-2"}])},1e3)})}}},v=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("undefined",[a("h1",[s._v("TreeSelect 树选择")]),s._v(" "),a("p",[s._v("树型选择控件。")]),s._v(" "),a("h2",{attrs:{id:"he-shi-shi-yong"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#he-shi-shi-yong","aria-hidden":"true"}},[s._v("¶")]),s._v(" 何时使用")]),s._v(" "),a("p",[s._v("类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。")]),s._v(" "),a("h2",{attrs:{id:"dai-ma-yan-shi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dai-ma-yan-shi","aria-hidden":"true"}},[s._v("¶")]),s._v(" 代码演示")]),s._v(" "),a("demo-box",{attrs:{jsfiddle:{html:'<template>\n  <v-tree-select :data="treeData1" allow-clear style="width:300px" @select="onSelect" @clear="onClear"></v-tree-select>\n</template>\n\n\n',script:"\nexport default {\n  data() {\n    return {\n      treeData1: [{\n        title: 'parent 1',\n        expanded: true,\n        children: [{\n          title: 'parent 1-0',\n          expanded: true,\n          children: [{\n            title: 'my leaf',\n          }, {\n            title: 'your leaf',\n          }]\n        }, {\n          title: 'parent 1-1',\n          children: [{\n            title: \"<span style='color: #08c'>sss</span>\"\n          }]\n        }]\n      }],\n    }\n  },\n  methods: {\n      onSelect(data) {\n        console.log(data);\n      },\n      onClear(data) {\n        console.log('clear', data);\n      }\n    }\n}\n",style:null}}},[a("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[a("v-tree-select",{staticStyle:{width:"300px"},attrs:{data:s.treeData1,"allow-clear":""},on:{select:s.onSelect,clear:s.onClear}})]],2),s._v(" "),a("div",{attrs:{slot:"description"},slot:"description"},[a("h4",{attrs:{id:"ji-ben"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ji-ben","aria-hidden":"true"}},[s._v("¶")]),s._v(" 基本")]),s._v(" "),a("p",[s._v("最简单的用法。")])]),s._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[a("pre",[a("code",{staticClass:"hljs language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("v-tree-select")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":data")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"treeData1"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("allow-clear")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"width:300px"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@select")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"onSelect"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@clear")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"onClear"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("v-tree-select")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("treeData1")]),s._v(": [{\n        "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'parent 1'")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("expanded")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("children")]),s._v(": [{\n          "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'parent 1-0'")]),s._v(",\n          "),a("span",{staticClass:"hljs-attr"},[s._v("expanded")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n          "),a("span",{staticClass:"hljs-attr"},[s._v("children")]),s._v(": [{\n            "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'my leaf'")]),s._v(",\n          }, {\n            "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'your leaf'")]),s._v(",\n          }]\n        }, {\n          "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'parent 1-1'")]),s._v(",\n          "),a("span",{staticClass:"hljs-attr"},[s._v("children")]),s._v(": [{\n            "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("\"<span style='color: #08c'>sss</span>\"")]),s._v("\n          }]\n        }]\n      }],\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n      onSelect(data) {\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(data);\n      },\n      onClear(data) {\n        "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-string"},[s._v("'clear'")]),s._v(", data);\n      }\n    }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("summary",[s._v("\n  #### 基本\n  最简单的用法。\n")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-tree-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"treeData1"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("allow-clear")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"width:300px"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@select")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"onSelect"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@clear")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"onClear"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-tree-select")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("treeData1")]),s._v(": [{\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'parent 1'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("expanded")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [{\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'parent 1-0'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("expanded")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [{\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'my leaf'")]),s._v(",\n          }, {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'your leaf'")]),s._v(",\n          }]\n        }, {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'parent 1-1'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [{\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("\"<span style='color: #08c'>sss</span>\"")]),s._v("\n          }]\n        }]\n      }],\n    }\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      onSelect(data) {\n        "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(data);\n      },\n      onClear(data) {\n        "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'clear'")]),s._v(", data);\n      }\n    }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("demo-box",{attrs:{jsfiddle:{html:'<template>\n  <v-tree-select :data="treeData2" allow-clear multiple style="width:300px" @check="onCheck" @clear="onClear"></v-tree-select>\n</template>\n\n\n',script:"\nexport default {\n  data() {\n    return {\n      treeData2: [{\n        title: 'parent 1',\n        expanded: true,\n        children: [{\n          title: 'parent 1-0',\n          expanded: true,\n          children: [{\n            title: 'my leaf',\n          }, {\n            title: 'your leaf',\n          }, {\n            title: 'self leaf',\n          }]\n        }, {\n          title: 'parent 1-1',\n          children: [{\n            title: \"<span style='color: #08c'>sss</span>\"\n          }]\n        }, {\n          title: 'parent 1-2',\n        }]\n      }],\n    }\n  },\n  methods: {\n    onCheck(data) {\n      console.log(data)\n    },\n    onClear(data) {\n      console.log('clear', data);\n    }\n  }\n}\n",style:null}}},[a("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[a("v-tree-select",{staticStyle:{width:"300px"},attrs:{data:s.treeData2,"allow-clear":"",multiple:""},on:{check:s.onCheck,clear:s.onClear}})]],2),s._v(" "),a("div",{attrs:{slot:"description"},slot:"description"},[a("h4",{attrs:{id:"ke-gou-xuan"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ke-gou-xuan","aria-hidden":"true"}},[s._v("¶")]),s._v(" 可勾选")]),s._v(" "),a("p",[s._v("使用勾选框实现多选功能。")])]),s._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[a("pre",[a("code",{staticClass:"hljs language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("v-tree-select")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":data")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"treeData2"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("allow-clear")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("multiple")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"width:300px"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@check")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"onCheck"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("@clear")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"onClear"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("v-tree-select")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("treeData2")]),s._v(": [{\n        "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'parent 1'")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("expanded")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n        "),a("span",{staticClass:"hljs-attr"},[s._v("children")]),s._v(": [{\n          "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'parent 1-0'")]),s._v(",\n          "),a("span",{staticClass:"hljs-attr"},[s._v("expanded")]),s._v(": "),a("span",{staticClass:"hljs-literal"},[s._v("true")]),s._v(",\n          "),a("span",{staticClass:"hljs-attr"},[s._v("children")]),s._v(": [{\n            "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'my leaf'")]),s._v(",\n          }, {\n            "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'your leaf'")]),s._v(",\n          }, {\n            "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'self leaf'")]),s._v(",\n          }]\n        }, {\n          "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'parent 1-1'")]),s._v(",\n          "),a("span",{staticClass:"hljs-attr"},[s._v("children")]),s._v(": [{\n            "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("\"<span style='color: #08c'>sss</span>\"")]),s._v("\n          }]\n        }, {\n          "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'parent 1-2'")]),s._v(",\n        }]\n      }],\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    onCheck(data) {\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(data)\n    },\n    onClear(data) {\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log("),a("span",{staticClass:"hljs-string"},[s._v("'clear'")]),s._v(", data);\n    }\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("summary",[s._v("\n  #### 可勾选\n  使用勾选框实现多选功能。\n")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-tree-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"treeData2"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("allow-clear")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("multiple")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"width:300px"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@check")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"onCheck"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("@clear")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"onClear"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-tree-select")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("treeData2")]),s._v(": [{\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'parent 1'")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("expanded")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n        "),a("span",{attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [{\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'parent 1-0'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("expanded")]),s._v(": "),a("span",{attrs:{class:"hljs-literal"}},[s._v("true")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [{\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'my leaf'")]),s._v(",\n          }, {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'your leaf'")]),s._v(",\n          }, {\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'self leaf'")]),s._v(",\n          }]\n        }, {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'parent 1-1'")]),s._v(",\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": [{\n            "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("\"<span style='color: #08c'>sss</span>\"")]),s._v("\n          }]\n        }, {\n          "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'parent 1-2'")]),s._v(",\n        }]\n      }],\n    }\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    onCheck(data) {\n      "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(data)\n    },\n    onClear(data) {\n      "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{attrs:{class:"hljs-string"}},[s._v("'clear'")]),s._v(", data);\n    }\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("demo-box",{attrs:{jsfiddle:{html:'<template>\n  <v-tree-select :data="asyncData" allow-clear style="width:300px" :async="getData"></v-tree-select>\n</template>\n\n\n',script:"\nexport default {\n  data() {\n    return {\n      asyncData: [\n        { title: 'pNode 01', children: []},\n        { title: 'pNode 02', children: []},\n        { title: 'pNode 03'},\n      ]\n    }\n  },\n  methods: {\n    getData(node) {\n      console.log(node);\n      return new Promise(resolve => {\n        setTimeout(()=>{\n          resolve([\n            { title: `leaf ${node.clue}-0`, children: []},\n            { title: `leaf ${node.clue}-1`},\n            { title: `leaf ${node.clue}-2`},\n          ])\n        }, 1000)\n      })\n    },\n  }\n}\n",style:null}}},[a("div",{staticClass:"box-demo-show",attrs:{slot:"component"},slot:"component"},[[a("v-tree-select",{staticStyle:{width:"300px"},attrs:{data:s.asyncData,"allow-clear":"",async:s.getData}})]],2),s._v(" "),a("div",{attrs:{slot:"description"},slot:"description"},[a("h4",{attrs:{id:"yi-bu-jia-zai-shu-ju"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yi-bu-jia-zai-shu-ju","aria-hidden":"true"}},[s._v("¶")]),s._v(" 异步加载数据")]),s._v(" "),a("p",[s._v("点击展开节点，动态加载数据。")])]),s._v(" "),a("div",{staticClass:"highlight",attrs:{slot:"code"},slot:"code"},[a("pre",[a("code",{staticClass:"hljs language-html"},[a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("v-tree-select")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":data")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"asyncData"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("allow-clear")]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v("style")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"width:300px"')]),s._v(" "),a("span",{staticClass:"hljs-attr"},[s._v(":async")]),s._v("="),a("span",{staticClass:"hljs-string"},[s._v('"getData"')]),s._v(">")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("v-tree-select")]),s._v(">")]),s._v("\n"),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{staticClass:"hljs-tag"},[s._v("<"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),a("span",{staticClass:"javascript"},[s._v("\n"),a("span",{staticClass:"hljs-keyword"},[s._v("export")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" {\n      "),a("span",{staticClass:"hljs-attr"},[s._v("asyncData")]),s._v(": [\n        { "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'pNode 01'")]),s._v(", "),a("span",{staticClass:"hljs-attr"},[s._v("children")]),s._v(": []},\n        { "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'pNode 02'")]),s._v(", "),a("span",{staticClass:"hljs-attr"},[s._v("children")]),s._v(": []},\n        { "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("'pNode 03'")]),s._v("},\n      ]\n    }\n  },\n  "),a("span",{staticClass:"hljs-attr"},[s._v("methods")]),s._v(": {\n    getData(node) {\n      "),a("span",{staticClass:"hljs-built_in"},[s._v("console")]),s._v(".log(node);\n      "),a("span",{staticClass:"hljs-keyword"},[s._v("return")]),s._v(" "),a("span",{staticClass:"hljs-keyword"},[s._v("new")]),s._v(" "),a("span",{staticClass:"hljs-built_in"},[s._v("Promise")]),s._v("("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("resolve")]),s._v(" =>")]),s._v(" {\n        setTimeout("),a("span",{staticClass:"hljs-function"},[a("span",{staticClass:"hljs-params"},[s._v("()")]),s._v("=>")]),s._v("{\n          resolve([\n            { "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("`leaf "),a("span",{staticClass:"hljs-subst"},[s._v("${node.clue}")]),s._v("-0`")]),s._v(", "),a("span",{staticClass:"hljs-attr"},[s._v("children")]),s._v(": []},\n            { "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("`leaf "),a("span",{staticClass:"hljs-subst"},[s._v("${node.clue}")]),s._v("-1`")]),s._v("},\n            { "),a("span",{staticClass:"hljs-attr"},[s._v("title")]),s._v(": "),a("span",{staticClass:"hljs-string"},[s._v("`leaf "),a("span",{staticClass:"hljs-subst"},[s._v("${node.clue}")]),s._v("-2`")]),s._v("},\n          ])\n        }, "),a("span",{staticClass:"hljs-number"},[s._v("1000")]),s._v(")\n      })\n    },\n  }\n}\n")]),a("span",{staticClass:"hljs-tag"},[s._v("</"),a("span",{staticClass:"hljs-name"},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("summary",[s._v("\n  #### 异步加载数据\n  点击展开节点，动态加载数据。\n")]),s._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"hljs language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n  "),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-tree-select")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":data")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"asyncData"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("allow-clear")]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v("style")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"width:300px"')]),s._v(" "),a("span",{attrs:{class:"hljs-attr"}},[s._v(":async")]),s._v("="),a("span",{attrs:{class:"hljs-string"}},[s._v('"getData"')]),s._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("v-tree-select")]),s._v(">")]),s._v("\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("template")]),s._v(">")]),s._v("\n\n"),a("span",{attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{attrs:{class:"javascript"}},[s._v("\n"),a("span",{attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n  data() {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[s._v("asyncData")]),s._v(": [\n        { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'pNode 01'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": []},\n        { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'pNode 02'")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": []},\n        { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("'pNode 03'")]),s._v("},\n      ]\n    }\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n    getData(node) {\n      "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log(node);\n      "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[s._v("new")]),s._v(" "),a("span",{attrs:{class:"hljs-built_in"}},[s._v("Promise")]),s._v("("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("resolve")]),s._v(" =>")]),s._v(" {\n        setTimeout("),a("span",{attrs:{class:"hljs-function"}},[a("span",{attrs:{class:"hljs-params"}},[s._v("()")]),s._v("=>")]),s._v("{\n          resolve([\n            { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("`leaf "),a("span",{attrs:{class:"hljs-subst"}},[s._v("${node.clue}")]),s._v("-0`")]),s._v(", "),a("span",{attrs:{class:"hljs-attr"}},[s._v("children")]),s._v(": []},\n            { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("`leaf "),a("span",{attrs:{class:"hljs-subst"}},[s._v("${node.clue}")]),s._v("-1`")]),s._v("},\n            { "),a("span",{attrs:{class:"hljs-attr"}},[s._v("title")]),s._v(": "),a("span",{attrs:{class:"hljs-string"}},[s._v("`leaf "),a("span",{attrs:{class:"hljs-subst"}},[s._v("${node.clue}")]),s._v("-2`")]),s._v("},\n          ])\n        }, "),a("span",{attrs:{class:"hljs-number"}},[s._v("1000")]),s._v(")\n      })\n    },\n  }\n}\n")]),a("span",{attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])]),s._v(" "),a("h2",{attrs:{id:"api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[s._v("¶")]),s._v(" API")]),s._v(" "),a("h3",{attrs:{id:"treeselect-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#treeselect-props","aria-hidden":"true"}},[s._v("¶")]),s._v(" TreeSelect Props")]),s._v(" "),a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("类型")]),s._v(" "),a("th",[s._v("默认值")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("data")]),s._v(" "),a("td",[s._v("可嵌套的节点属性的数组，生成tree的数据")]),s._v(" "),a("td",[s._v("Array")]),s._v(" "),a("td",[s._v("[]")])]),s._v(" "),a("tr",[a("td",[s._v("multiple")]),s._v(" "),a("td",[s._v("支持多选")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("allowClear")]),s._v(" "),a("td",[s._v("显示清除按钮")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")])]),s._v(" "),a("tr",[a("td",[s._v("async")]),s._v(" "),a("td",[s._v("异步加载数据")]),s._v(" "),a("td",[s._v("Function(node)")]),s._v(" "),a("td",[s._v("-")])]),s._v(" "),a("tr",[a("td",[s._v("popupContainer")]),s._v(" "),a("td",[s._v("下拉菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。")]),s._v(" "),a("td",[s._v("Function")]),s._v(" "),a("td",[s._v("() => document.body")])]),s._v(" "),a("tr",[a("td",[s._v("position")]),s._v(" "),a("td",[s._v("设置节点可拖拽")]),s._v(" "),a("td",[s._v("Boolean")]),s._v(" "),a("td",[s._v("false")])])])]),s._v(" "),a("h3",{attrs:{id:"tree-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tree-events","aria-hidden":"true"}},[s._v("¶")]),s._v(" Tree Events")]),s._v(" "),a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("事件")]),s._v(" "),a("th",[s._v("说明")]),s._v(" "),a("th",[s._v("参数")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("check")]),s._v(" "),a("td",[s._v("点击复选框触发")]),s._v(" "),a("td",[s._v("childrenArray")])]),s._v(" "),a("tr",[a("td",[s._v("select")]),s._v(" "),a("td",[s._v("点击树节点触发")]),s._v(" "),a("td",[s._v("childrenArray")])]),s._v(" "),a("tr",[a("td",[s._v("clear")]),s._v(" "),a("td",[s._v("点击清除按钮触发")]),s._v(" "),a("td",[s._v("null")])])])])],1)},r=[],_={render:v,staticRenderFns:r},c=_,i=a(0),p=i(e,c,!1,null,null,null);t.default=p.exports}});
//# sourceMappingURL=31.989c5efba7cd79648eba.js.map