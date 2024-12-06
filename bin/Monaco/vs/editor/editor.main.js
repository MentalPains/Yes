/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.18.1(d7a26172c5955d29d2a8cca4377b53b28925c766)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
* Copyright (c) Microsoft Corporation. All rights reserved.
* monaco-typescript version: 3.5.1(3596f46e41922104181cda3ed981f5a25246882e)
* Released under the MIT license
* https://github.com/Microsoft/monaco-typescript/blob/master/LICENSE.md
*-----------------------------------------------------------------------------*/ define("vs/language/typescript/lib/typescriptServicesMetadata",["require","exports"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.typescriptVersion="3.5.1"}),define("vs/language/typescript/monaco.contribution",["require","exports","./lib/typescriptServicesMetadata","vs/editor/editor.api"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o,r,s,a,l,u,d,c,h,p=monaco.Emitter,g=function(){function e(e,t){this._onDidChange=new p,this._onDidExtraLibsChange=new p,this._extraLibs=Object.create(null),this._workerMaxIdleTime=12e4,this.setCompilerOptions(e),this.setDiagnosticsOptions(t),this._onDidExtraLibsChangeTimeout=-1}return Object.defineProperty(e.prototype,"onDidChange",{get:function(){return this._onDidChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"onDidExtraLibsChange",{get:function(){return this._onDidExtraLibsChange.event},enumerable:!0,configurable:!0}),e.prototype.getExtraLibs=function(){return this._extraLibs},e.prototype.addExtraLib=function(e,t){var i=this;if(void 0===t&&(t="ts:extralib-"+Math.random().toString(36).substring(2,15)),this._extraLibs[t]&&this._extraLibs[t].content===e)return{dispose:function(){}};var n=1;return this._extraLibs[t]&&(n=this._extraLibs[t].version+1),this._extraLibs[t]={content:e,version:n},this._fireOnDidExtraLibsChangeSoon(),{dispose:function(){var e=i._extraLibs[t];e&&e.version===n&&(delete i._extraLibs[t],i._fireOnDidExtraLibsChangeSoon())}}},e.prototype._fireOnDidExtraLibsChangeSoon=function(){var e=this;-1===this._onDidExtraLibsChangeTimeout&&(this._onDidExtraLibsChangeTimeout=setTimeout(function(){e._onDidExtraLibsChangeTimeout=-1,e._onDidExtraLibsChange.fire(void 0)},0))},e.prototype.getCompilerOptions=function(){return this._compilerOptions},e.prototype.setCompilerOptions=function(e){this._compilerOptions=e||Object.create(null),this._onDidChange.fire(void 0)},e.prototype.getDiagnosticsOptions=function(){return this._diagnosticsOptions},e.prototype.setDiagnosticsOptions=function(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(void 0)},e.prototype.setMaximumWorkerIdleTime=function(e){this._workerMaxIdleTime=e},e.prototype.getWorkerMaxIdleTime=function(){return this._workerMaxIdleTime},e.prototype.setEagerModelSync=function(e){this._eagerModelSync=e},e.prototype.getEagerModelSync=function(){return this._eagerModelSync},e}();t.LanguageServiceDefaultsImpl=g,(o=n||(n={}))[o.None=0]="None",o[o.CommonJS=1]="CommonJS",o[o.AMD=2]="AMD",o[o.UMD=3]="UMD",o[o.System=4]="System",o[o.ES2015=5]="ES2015",o[o.ESNext=99]="ESNext",(s=r||(r={}))[s.None=0]="None",s[s.Preserve=1]="Preserve",s[s.React=2]="React",s[s.ReactNative=3]="ReactNative",(l=a||(a={}))[l.CarriageReturnLineFeed=0]="CarriageReturnLineFeed",l[l.LineFeed=1]="LineFeed",(d=u||(u={}))[d.ES3=0]="ES3",d[d.ES5=1]="ES5",d[d.ES2015=2]="ES2015",d[d.ES2016=3]="ES2016",d[d.ES2017=4]="ES2017",d[d.ES2018=5]="ES2018",d[d.ES2019=6]="ES2019",d[d.ES2020=7]="ES2020",d[d.ESNext=99]="ESNext",d[d.JSON=100]="JSON",d[d.Latest=99]="Latest",(h=c||(c={}))[h.Classic=1]="Classic",h[h.NodeJs=2]="NodeJs";var f=new g({allowNonTsExtensions:!0,target:u.Latest},{noSemanticValidation:!1,noSyntaxValidation:!1}),m=new g({allowNonTsExtensions:!0,allowJs:!0,target:u.Latest},{noSemanticValidation:!0,noSyntaxValidation:!1});function v(){return new Promise(function(t,i){e(["./tsMode"],t,i)})}monaco.languages.typescript={ModuleKind:n,JsxEmit:r,NewLineKind:a,ScriptTarget:u,ModuleResolutionKind:c,typescriptVersion:i.typescriptVersion,typescriptDefaults:f,javascriptDefaults:m,getTypeScriptWorker:function e(){return v().then(function(e){return e.getTypeScriptWorker()})},getJavaScriptWorker:function e(){return v().then(function(e){return e.getJavaScriptWorker()})}},monaco.languages.onLanguage("typescript",function(){return v().then(function(e){return e.setupTypeScript(f)})}),monaco.languages.onLanguage("javascript",function(){return v().then(function(e){return e.setupJavaScript(m)})})}),/*!-----------------------------------------------------------------------------
* Copyright (c) Microsoft Corporation. All rights reserved.
* monaco-css version: 2.5.1(aeab3841236554bc23f03a8a47bfb68fbe719447)
* Released under the MIT license
* https://github.com/Microsoft/monaco-css/blob/master/LICENSE.md
*-----------------------------------------------------------------------------*/ define("vs/language/css/monaco.contribution",["require","exports","vs/editor/editor.api"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=monaco.Emitter,n=function(){function e(e,t){this._onDidChange=new i,this._languageId=e,this.setDiagnosticsOptions(t)}return Object.defineProperty(e.prototype,"onDidChange",{get:function(){return this._onDidChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"diagnosticsOptions",{get:function(){return this._diagnosticsOptions},enumerable:!0,configurable:!0}),e.prototype.setDiagnosticsOptions=function(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(this)},e}(),o={validate:!0,lint:{compatibleVendorPrefixes:"ignore",vendorPrefix:"warning",duplicateProperties:"warning",emptyRules:"warning",importStatement:"ignore",boxModel:"ignore",universalSelector:"ignore",zeroUnits:"ignore",fontFaceProperties:"warning",hexColorLength:"error",argumentsInColorFunction:"error",unknownProperties:"warning",ieHack:"ignore",unknownVendorSpecificProperties:"ignore",propertyIgnoredDueToDisplay:"warning",important:"ignore",float:"ignore",idSelector:"ignore"}},r=new(t.LanguageServiceDefaultsImpl=n)("css",o),s=new n("scss",o),a=new n("less",o);function l(){return new Promise(function(t,i){e(["./cssMode"],t,i)})}monaco.languages.css={cssDefaults:r,lessDefaults:a,scssDefaults:s},monaco.languages.onLanguage("less",function(){l().then(function(e){return e.setupMode(a)})}),monaco.languages.onLanguage("scss",function(){l().then(function(e){return e.setupMode(s)})}),monaco.languages.onLanguage("css",function(){l().then(function(e){return e.setupMode(r)})})}),/*!-----------------------------------------------------------------------------
* Copyright (c) Microsoft Corporation. All rights reserved.
* monaco-json version: 2.7.0(f3afc1b721188b32506d5b8a924561e3ec7534e3)
* Released under the MIT license
* https://github.com/Microsoft/monaco-json/blob/master/LICENSE.md
*-----------------------------------------------------------------------------*/ define("vs/language/json/monaco.contribution",["require","exports","vs/editor/editor.api"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=monaco.Emitter,n=function(){function e(e,t,n){this._onDidChange=new i,this._languageId=e,this.setDiagnosticsOptions(t),this.setModeConfiguration(n)}return Object.defineProperty(e.prototype,"onDidChange",{get:function(){return this._onDidChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"modeConfiguration",{get:function(){return this._modeConfiguration},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"diagnosticsOptions",{get:function(){return this._diagnosticsOptions},enumerable:!0,configurable:!0}),e.prototype.setDiagnosticsOptions=function(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(this)},e.prototype.setModeConfiguration=function(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)},e}();t.LanguageServiceDefaultsImpl=n;var o=new n("json",{validate:!0,allowComments:!0,schemas:[],enableSchemaRequest:!1},{documentFormattingEdits:!0,documentRangeFormattingEdits:!0,completionItems:!0,hovers:!0,documentSymbols:!0,tokens:!0,colors:!0,foldingRanges:!0,diagnostics:!0});monaco.languages.json={jsonDefaults:o},monaco.languages.register({id:"json",extensions:[".json",".bowerrc",".jshintrc",".jscsrc",".eslintrc",".babelrc",".har"],aliases:["JSON","json"],mimetypes:["application/json"]}),monaco.languages.onLanguage("json",function(){new Promise(function(t,i){e(["./jsonMode"],t,i)}).then(function(e){return e.setupMode(o)})})}),/*!-----------------------------------------------------------------------------
* Copyright (c) Microsoft Corporation. All rights reserved.
* monaco-html version: 2.5.3(a819bbcf4554af1b8509c1ba5708fffed644f702)
* Released under the MIT license
* https://github.com/Microsoft/monaco-html/blob/master/LICENSE.md
*-----------------------------------------------------------------------------*/ define("vs/language/html/monaco.contribution",["require","exports","vs/editor/editor.api"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=monaco.Emitter,n=function(){function e(e,t){this._onDidChange=new i,this._languageId=e,this.setOptions(t)}return Object.defineProperty(e.prototype,"onDidChange",{get:function(){return this._onDidChange.event},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"options",{get:function(){return this._options},enumerable:!0,configurable:!0}),e.prototype.setOptions=function(e){this._options=e||Object.create(null),this._onDidChange.fire(this)},e}(),o={tabSize:4,insertSpaces:!1,wrapLineLength:120,unformatted:'default": "a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, select, small, span, strong, sub, sup, textarea, tt, var',contentUnformatted:"pre",indentInnerHtml:!1,preserveNewLines:!0,maxPreserveNewLines:null,indentHandlebars:!1,endWithNewline:!1,extraLiners:"head, body, /html",wrapAttributes:"auto"},r="html",s="handlebars",a="razor",l=new(t.LanguageServiceDefaultsImpl=n)(r,{format:o,suggest:{html5:!0,angular1:!0,ionic:!0}}),u=new n(s,{format:o,suggest:{html5:!0}}),d=new n(a,{format:o,suggest:{html5:!0,razor:!0}});function c(){return new Promise(function(t,i){e(["./htmlMode"],t,i)})}monaco.languages.html={htmlDefaults:l,razorDefaults:d,handlebarDefaults:u},monaco.languages.onLanguage(r,function(){c().then(function(e){return e.setupMode(l)})}),monaco.languages.onLanguage(s,function(){c().then(function(e){return e.setupMode(u)})}),monaco.languages.onLanguage(a,function(){c().then(function(e){return e.setupMode(d)})})}),/*!-----------------------------------------------------------------------------
* Copyright (c) Microsoft Corporation. All rights reserved.
* monaco-languages version: 1.8.0(0ed9a6c3e90a24375fab54f7205fb76ce992f117)
* Released under the MIT license
* https://github.com/Microsoft/monaco-languages/blob/master/LICENSE.md
*-----------------------------------------------------------------------------*/ define("vs/basic-languages/_.contribution",["require","exports","vs/editor/editor.api"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i="undefined"==typeof monaco?self.monaco:monaco,n={},o={};function r(e){var t;return o[e]||(o[e]=(0,n[t=e].loader)().then(function(e){i.languages.setMonarchTokensProvider(t,e.language),i.languages.setLanguageConfiguration(t,e.conf)})),o[e]}t.loadLanguage=r,t.registerLanguage=function(e){var t=e.id;n[t]=e,i.languages.register(e),i.languages.onLanguage(t,function(){r(t)})}}),define("vs/basic-languages/abap/abap.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"abap",extensions:[".abap"],aliases:["abap","ABAP"],loader:function(){return new Promise(function(t,i){e(["./abap"],t,i)})}})}),define("vs/basic-languages/bat/bat.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"bat",extensions:[".bat",".cmd"],aliases:["Batch","bat"],loader:function(){return new Promise(function(t,i){e(["./bat"],t,i)})}})}),define("vs/basic-languages/coffee/coffee.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"coffeescript",extensions:[".coffee"],aliases:["CoffeeScript","coffeescript","coffee"],mimetypes:["text/x-coffeescript","text/coffeescript"],loader:function(){return new Promise(function(t,i){e(["./coffee"],t,i)})}})}),define("vs/basic-languages/cpp/cpp.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"c",extensions:[".c",".h"],aliases:["C","c"],loader:function(){return new Promise(function(t,i){e(["./cpp"],t,i)})}}),i.registerLanguage({id:"cpp",extensions:[".cpp",".cc",".cxx",".hpp",".hh",".hxx"],aliases:["C++","Cpp","cpp"],loader:function(){return new Promise(function(t,i){e(["./cpp"],t,i)})}})}),define("vs/basic-languages/csharp/csharp.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"csharp",extensions:[".cs",".csx",".cake"],aliases:["C#","csharp"],loader:function(){return new Promise(function(t,i){e(["./csharp"],t,i)})}})}),define("vs/basic-languages/csp/csp.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"csp",extensions:[],aliases:["CSP","csp"],loader:function(){return new Promise(function(t,i){e(["./csp"],t,i)})}})}),define("vs/basic-languages/css/css.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"css",extensions:[".css"],aliases:["CSS","css"],mimetypes:["text/css"],loader:function(){return new Promise(function(t,i){e(["./css"],t,i)})}})}),define("vs/basic-languages/dockerfile/dockerfile.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"dockerfile",extensions:[".dockerfile"],filenames:["Dockerfile"],aliases:["Dockerfile"],loader:function(){return new Promise(function(t,i){e(["./dockerfile"],t,i)})}})}),define("vs/basic-languages/fsharp/fsharp.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"fsharp",extensions:[".fs",".fsi",".ml",".mli",".fsx",".fsscript"],aliases:["F#","FSharp","fsharp"],loader:function(){return new Promise(function(t,i){e(["./fsharp"],t,i)})}})}),define("vs/basic-languages/go/go.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"go",extensions:[".go"],aliases:["Go"],loader:function(){return new Promise(function(t,i){e(["./go"],t,i)})}})}),define("vs/basic-languages/handlebars/handlebars.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"handlebars",extensions:[".handlebars",".hbs"],aliases:["Handlebars","handlebars"],mimetypes:["text/x-handlebars-template"],loader:function(){return new Promise(function(t,i){e(["./handlebars"],t,i)})}})}),define("vs/basic-languages/html/html.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"html",extensions:[".html",".htm",".shtml",".xhtml",".mdoc",".jsp",".asp",".aspx",".jshtm"],aliases:["HTML","htm","html","xhtml"],mimetypes:["text/html","text/x-jshtm","text/template","text/ng-template"],loader:function(){return new Promise(function(t,i){e(["./html"],t,i)})}})}),define("vs/basic-languages/ini/ini.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"ini",extensions:[".ini",".properties",".gitconfig"],filenames:["config",".gitattributes",".gitconfig",".editorconfig"],aliases:["Ini","ini"],loader:function(){return new Promise(function(t,i){e(["./ini"],t,i)})}})}),define("vs/basic-languages/java/java.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"java",extensions:[".java",".jav"],aliases:["Java","java"],mimetypes:["text/x-java-source","text/x-java"],loader:function(){return new Promise(function(t,i){e(["./java"],t,i)})}})}),define("vs/basic-languages/javascript/javascript.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"javascript",extensions:[".js",".es6",".jsx"],firstLine:"^#!.*\\bnode",filenames:["jakefile"],aliases:["JavaScript","javascript","js"],mimetypes:["text/javascript"],loader:function(){return new Promise(function(t,i){e(["./javascript"],t,i)})}})}),define("vs/basic-languages/kotlin/kotlin.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"kotlin",extensions:[".kt"],aliases:["Kotlin","kotlin"],mimetypes:["text/x-kotlin-source","text/x-kotlin"],loader:function(){return new Promise(function(t,i){e(["./kotlin"],t,i)})}})}),define("vs/basic-languages/less/less.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"less",extensions:[".less"],aliases:["Less","less"],mimetypes:["text/x-less","text/less"],loader:function(){return new Promise(function(t,i){e(["./less"],t,i)})}})}),define("vs/basic-languages/lua/lua.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"lua",extensions:[".lua"],aliases:["Lua","lua"],loader:function(){return new Promise(function(t,i){e(["./lua"],t,i)})}})}),define("vs/basic-languages/markdown/markdown.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"markdown",extensions:[".md",".markdown",".mdown",".mkdn",".mkd",".mdwn",".mdtxt",".mdtext"],aliases:["Markdown","markdown"],loader:function(){return new Promise(function(t,i){e(["./markdown"],t,i)})}})}),define("vs/basic-languages/mips/mips.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"mips",extensions:[".s"],aliases:["MIPS","MIPS-V"],mimetypes:["text/x-mips","text/mips","text/plaintext"],loader:function(){return new Promise(function(t,i){e(["./mips"],t,i)})}})}),define("vs/basic-languages/msdax/msdax.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"msdax",extensions:[".dax",".msdax"],aliases:["DAX","MSDAX"],loader:function(){return new Promise(function(t,i){e(["./msdax"],t,i)})}})}),define("vs/basic-languages/mysql/mysql.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"mysql",extensions:[],aliases:["MySQL","mysql"],loader:function(){return new Promise(function(t,i){e(["./mysql"],t,i)})}})}),define("vs/basic-languages/objective-c/objective-c.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"objective-c",extensions:[".m"],aliases:["Objective-C"],loader:function(){return new Promise(function(t,i){e(["./objective-c"],t,i)})}})}),define("vs/basic-languages/pascal/pascal.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"pascal",extensions:[".pas",".p",".pp"],aliases:["Pascal","pas"],mimetypes:["text/x-pascal-source","text/x-pascal"],loader:function(){return new Promise(function(t,i){e(["./pascal"],t,i)})}})}),define("vs/basic-languages/pascaligo/pascaligo.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"pascaligo",extensions:[".ligo"],aliases:["Pascaligo","ligo"],loader:function(){return new Promise(function(t,i){e(["./pascaligo"],t,i)})}})}),define("vs/basic-languages/pgsql/pgsql.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"pgsql",extensions:[],aliases:["PostgreSQL","postgres","pg","postgre"],loader:function(){return new Promise(function(t,i){e(["./pgsql"],t,i)})}})}),define("vs/basic-languages/php/php.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"php",extensions:[".php",".php4",".php5",".phtml",".ctp"],aliases:["PHP","php"],mimetypes:["application/x-php"],loader:function(){return new Promise(function(t,i){e(["./php"],t,i)})}})}),define("vs/basic-languages/postiats/postiats.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"postiats",extensions:[".dats",".sats",".hats"],aliases:["ATS","ATS/Postiats"],loader:function(){return new Promise(function(t,i){e(["./postiats"],t,i)})}})}),define("vs/basic-languages/powerquery/powerquery.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"powerquery",extensions:[".pq",".pqm"],aliases:["PQ","M","Power Query","Power Query M"],loader:function(){return new Promise(function(t,i){e(["./powerquery"],t,i)})}})}),define("vs/basic-languages/powershell/powershell.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"powershell",extensions:[".ps1",".psm1",".psd1"],aliases:["PowerShell","powershell","ps","ps1"],loader:function(){return new Promise(function(t,i){e(["./powershell"],t,i)})}})}),define("vs/basic-languages/pug/pug.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"pug",extensions:[".jade",".pug"],aliases:["Pug","Jade","jade"],loader:function(){return new Promise(function(t,i){e(["./pug"],t,i)})}})}),define("vs/basic-languages/python/python.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"python",extensions:[".py",".rpy",".pyw",".cpy",".gyp",".gypi"],aliases:["Python","py"],firstLine:"^#!/.*\\bpython[0-9.-]*\\b",loader:function(){return new Promise(function(t,i){e(["./python"],t,i)})}})}),define("vs/basic-languages/r/r.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"r",extensions:[".r",".rhistory",".rprofile",".rt"],aliases:["R","r"],loader:function(){return new Promise(function(t,i){e(["./r"],t,i)})}})}),define("vs/basic-languages/razor/razor.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"razor",extensions:[".cshtml"],aliases:["Razor","razor"],mimetypes:["text/x-cshtml"],loader:function(){return new Promise(function(t,i){e(["./razor"],t,i)})}})}),define("vs/basic-languages/redis/redis.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"redis",extensions:[".redis"],aliases:["redis"],loader:function(){return new Promise(function(t,i){e(["./redis"],t,i)})}})}),define("vs/basic-languages/redshift/redshift.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"redshift",extensions:[],aliases:["Redshift","redshift"],loader:function(){return new Promise(function(t,i){e(["./redshift"],t,i)})}})}),define("vs/basic-languages/ruby/ruby.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"ruby",extensions:[".rb",".rbx",".rjs",".gemspec",".pp"],filenames:["rakefile"],aliases:["Ruby","rb"],loader:function(){return new Promise(function(t,i){e(["./ruby"],t,i)})}})}),define("vs/basic-languages/rust/rust.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"rust",extensions:[".rs",".rlib"],aliases:["Rust","rust"],loader:function(){return new Promise(function(t,i){e(["./rust"],t,i)})}})}),define("vs/basic-languages/sb/sb.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"sb",extensions:[".sb"],aliases:["Small Basic","sb"],loader:function(){return new Promise(function(t,i){e(["./sb"],t,i)})}})}),define("vs/basic-languages/scss/scss.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"scss",extensions:[".scss"],aliases:["Sass","sass","scss"],mimetypes:["text/x-scss","text/scss"],loader:function(){return new Promise(function(t,i){e(["./scss"],t,i)})}})}),define("vs/basic-languages/sophia/sophia.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"aes",extensions:[".aes"],aliases:["aes","sophia","Sophia"],loader:function(){return new Promise(function(t,i){e(["./sophia"],t,i)})}})}),define("vs/basic-languages/solidity/solidity.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"sol",extensions:[".sol"],aliases:["sol","solidity","Solidity"],loader:function(){return new Promise(function(t,i){e(["./solidity"],t,i)})}})}),define("vs/basic-languages/sql/sql.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"sql",extensions:[".sql"],aliases:["SQL"],loader:function(){return new Promise(function(t,i){e(["./sql"],t,i)})}})}),define("vs/basic-languages/st/st.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"st",extensions:[".st",".iecst",".iecplc",".lc3lib"],aliases:["StructuredText","scl","stl"],loader:function(){return new Promise(function(t,i){e(["./st"],t,i)})}})}),define("vs/basic-languages/swift/swift.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"swift",aliases:["Swift","swift"],extensions:[".swift"],mimetypes:["text/swift"],loader:function(){return new Promise(function(t,i){e(["./swift"],t,i)})}})}),define("vs/basic-languages/tcl/tcl.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"tcl",extensions:[".tcl"],aliases:["tcl","Tcl","tcltk","TclTk","tcl/tk","Tcl/Tk"],loader:function(){return new Promise(function(t,i){e(["./tcl"],t,i)})}})}),define("vs/basic-languages/twig/twig.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"twig",extensions:[".twig"],aliases:["Twig","twig"],mimetypes:["text/x-twig"],loader:function(){return new Promise(function(t,i){e(["./twig"],t,i)})}})}),define("vs/basic-languages/typescript/typescript.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"typescript",extensions:[".ts",".tsx"],aliases:["TypeScript","ts","typescript"],mimetypes:["text/typescript"],loader:function(){return new Promise(function(t,i){e(["./typescript"],t,i)})}})}),define("vs/basic-languages/vb/vb.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"vb",extensions:[".vb"],aliases:["Visual Basic","vb"],loader:function(){return new Promise(function(t,i){e(["./vb"],t,i)})}})}),define("vs/basic-languages/xml/xml.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"xml",extensions:[".xml",".dtd",".ascx",".csproj",".config",".wxi",".wxl",".wxs",".xaml",".svg",".svgz",".opf",".xsl"],firstLine:"(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)",aliases:["XML","xml"],mimetypes:["text/xml","application/xml","application/xaml+xml","application/xml-dtd"],loader:function(){return new Promise(function(t,i){e(["./xml"],t,i)})}})}),define("vs/basic-languages/yaml/yaml.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"yaml",extensions:[".yaml",".yml"],aliases:["YAML","yaml","YML","yml"],mimetypes:["application/x-yaml"],loader:function(){return new Promise(function(t,i){e(["./yaml"],t,i)})}})}),define("vs/basic-languages/scheme/scheme.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"scheme",extensions:[".scm",".ss",".sch",".rkt"],aliases:["scheme","Scheme"],loader:function(){return new Promise(function(t,i){e(["./scheme"],t,i)})}})}),define("vs/basic-languages/clojure/clojure.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"clojure",extensions:[".clj",".cljs",".cljc",".edn"],aliases:["clojure","Clojure"],loader:function(){return new Promise(function(t,i){e(["./clojure"],t,i)})}})}),define("vs/basic-languages/shell/shell.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"shell",extensions:[".sh",".bash"],aliases:["Shell","sh"],loader:function(){return new Promise(function(t,i){e(["./shell"],t,i)})}})}),define("vs/basic-languages/perl/perl.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"perl",extensions:[".pl"],aliases:["Perl","pl"],loader:function(){return new Promise(function(t,i){e(["./perl"],t,i)})}})}),define("vs/basic-languages/azcli/azcli.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"azcli",extensions:[".azcli"],aliases:["Azure CLI","azcli"],loader:function(){return new Promise(function(t,i){e(["./azcli"],t,i)})}})}),define("vs/basic-languages/apex/apex.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"apex",extensions:[".cls"],aliases:["Apex","apex"],mimetypes:["text/x-apex-source","text/x-apex"],loader:function(){return new Promise(function(t,i){e(["./apex"],t,i)})}})}),define("vs/basic-languages/graphql/graphql.contribution",["require","exports","../_.contribution"],function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),i.registerLanguage({id:"graphql",extensions:[".graphql",".gql"],aliases:["GraphQL","graphql","gql"],mimetypes:["application/graphql"],loader:function(){return new Promise(function(t,i){e(["./graphql"],t,i)})}})}),define("vs/basic-languages/monaco.contribution",["require","exports","./abap/abap.contribution","./bat/bat.contribution","./coffee/coffee.contribution","./cpp/cpp.contribution","./csharp/csharp.contribution","./csp/csp.contribution","./css/css.contribution","./dockerfile/dockerfile.contribution","./fsharp/fsharp.contribution","./go/go.contribution","./handlebars/handlebars.contribution","./html/html.contribution","./ini/ini.contribution","./java/java.contribution","./javascript/javascript.contribution","./kotlin/kotlin.contribution","./less/less.contribution","./lua/lua.contribution","./markdown/markdown.contribution","./mips/mips.contribution","./msdax/msdax.contribution","./mysql/mysql.contribution","./objective-c/objective-c.contribution","./pascal/pascal.contribution","./pascaligo/pascaligo.contribution","./pgsql/pgsql.contribution","./php/php.contribution","./postiats/postiats.contribution","./powerquery/powerquery.contribution","./powershell/powershell.contribution","./pug/pug.contribution","./python/python.contribution","./r/r.contribution","./razor/razor.contribution","./redis/redis.contribution","./redshift/redshift.contribution","./ruby/ruby.contribution","./rust/rust.contribution","./sb/sb.contribution","./scss/scss.contribution","./sophia/sophia.contribution","./solidity/solidity.contribution","./sql/sql.contribution","./st/st.contribution","./swift/swift.contribution","./tcl/tcl.contribution","./twig/twig.contribution","./typescript/typescript.contribution","./vb/vb.contribution","./xml/xml.contribution","./yaml/yaml.contribution","./scheme/scheme.contribution","./clojure/clojure.contribution","./shell/shell.contribution","./perl/perl.contribution","./azcli/azcli.contribution","./apex/apex.contribution","./graphql/graphql.contribution","vs/editor/editor.api"],function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0})}),define("vs/editor/editor.main",["vs/editor/edcore.main","vs/language/typescript/monaco.contribution","vs/language/css/monaco.contribution","vs/language/json/monaco.contribution","vs/language/html/monaco.contribution","vs/basic-languages/monaco.contribution"],function(e){return e});