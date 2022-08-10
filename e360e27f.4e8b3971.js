(window.webpackJsonp=window.webpackJsonp||[]).push([[162],{286:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));var a=t(1),r=t(9),o=(t(0),t(312)),l={id:"plugins",title:"Plugins"},p={id:"plugins",title:"Plugins",description:"## Maven",source:"@site/../docs/plugins.md",permalink:"/docs/plugins",editUrl:"https://github.com/OpenAPITools/openapi-generator/edit/master/website/../docs/plugins.md",lastUpdatedBy:"HappyFeedFriends",lastUpdatedAt:1659020034,sidebar:"docs",previous:{title:"CLI Installation",permalink:"/docs/installation"},next:{title:"Online",permalink:"/docs/online"}},i=[{value:"Maven",id:"maven",children:[{value:"Example",id:"example",children:[]},{value:"Dependencies",id:"dependencies",children:[]}]},{value:"Gradle",id:"gradle",children:[{value:"Example",id:"example-1",children:[]}]}],c={rightToc:i};function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"maven"},"Maven"),Object(o.b)("p",null,"A Maven plugin to support the OpenAPI generator project"),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"Add to your ",Object(o.b)("inlineCode",{parentName:"p"},"build->plugins")," section (default phase is ",Object(o.b)("inlineCode",{parentName:"p"},"generate-sources")," phase)"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<plugin>\n    <groupId>org.openapitools</groupId>\n    <artifactId>openapi-generator-maven-plugin</artifactId>\n    \x3c!-- RELEASE_VERSION --\x3e\n    <version>6.0.0</version>\n    \x3c!-- /RELEASE_VERSION --\x3e\n    <executions>\n        <execution>\n            <goals>\n                <goal>generate</goal>\n            </goals>\n            <configuration>\n                <inputSpec>${project.basedir}/src/main/resources/api.yaml</inputSpec>\n                <generatorName>java</generatorName>\n                <configOptions>\n                   <sourceFolder>src/gen/java/main</sourceFolder>\n                </configOptions>\n            </configuration>\n        </execution>\n    </executions>\n</plugin>\n")),Object(o.b)("p",null,"Followed by:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"mvn clean compile\n")),Object(o.b)("p",null,"For full details of all options, see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator-maven-plugin"}),"plugin README"),"."),Object(o.b)("h3",{id:"dependencies"},"Dependencies"),Object(o.b)("p",null,"The generated models use commonly used Swagger v2 annotations like ",Object(o.b)("inlineCode",{parentName:"p"},"@ApiModelProperty"),". A user may add Swagger v3 annotations:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>io.swagger.core.v3</groupId>\n    <artifactId>swagger-annotations</artifactId>\n</dependency>\n")),Object(o.b)("p",null,"But this will not work. This dependency is not binary compatible with Swagger v2 annotations. The resulting code will fail to compile."),Object(o.b)("p",null,"As alternative instead use the following dependency:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),"<dependency>\n    <groupId>io.swagger.parser.v3</groupId>\n    <artifactId>swagger-parser</artifactId>\n</dependency>\n")),Object(o.b)("h2",{id:"gradle"},"Gradle"),Object(o.b)("p",null,"This gradle plugin offers a declarative DSL via extensions (these are Gradle project extensions). These map almost fully 1:1 with the options you\u2019d pass to the CLI or Maven plugin. The plugin maps the extensions to a task of the same name to provide a clean API. If you\u2019re interested in the extension/task mapping concept from a high-level, you can check out ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.gradle.org/current/userguide/custom_plugins.html#sec:mapping_extension_properties_to_task_properties"}),"Gradle\u2019s docs"),"."),Object(o.b)("p",null,"To include in your project, add the following to ",Object(o.b)("inlineCode",{parentName:"p"},"build.gradle"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),'buildscript {\n  repositories {\n    mavenLocal()\n    maven { url "https://repo1.maven.org/maven2" }\n  }\n  dependencies {\n    classpath "org.openapitools:openapi-generator-gradle-plugin:5.0.0"\n  }\n}\n\napply plugin: \'org.openapi.generator\'\n')),Object(o.b)("p",null,"This gives access to the following tasks:"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Task"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"openApiGenerate"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generate code via Open API Tools Generator for Open API 2.0 or 3.x specification documents.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"openApiGenerators"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Lists generators available via Open API Generators.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"openApiMeta"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Generates a new generator to be consumed via Open API Generator.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"openApiValidate"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Validates an Open API 2.0 or 3.x specification document.")))),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The plugin implements the above tasks as project extensions of the same name. If you\u2019d like to declare these tasks as dependencies to other tasks (using ",Object(o.b)("inlineCode",{parentName:"p"},"dependsOn"),"), you\u2019ll need a task reference. e.g.:"),Object(o.b)("pre",{parentName:"blockquote"},Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),"compileJava.dependsOn tasks.openApiGenerate\n"))),Object(o.b)("p",null,"For full details of all options, see the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/OpenAPITools/openapi-generator/tree/master/modules/openapi-generator-gradle-plugin"}),"plugin README"),"."),Object(o.b)("h3",{id:"example-1"},"Example"),Object(o.b)("p",null,"An example task for generating a kotlin client:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-groovy"}),'openApiGenerate {\n    generatorName = "kotlin"\n    inputSpec = "$rootDir/specs/petstore-v3.0.yaml".toString()\n    outputDir = "$buildDir/generated".toString()\n    apiPackage = "org.openapi.example.api"\n    invokerPackage = "org.openapi.example.invoker"\n    modelPackage = "org.openapi.example.model"\n    configOptions = [\n        dateLibrary: "java8"\n    ]\n}\n')))}s.isMDXComponent=!0},312:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return g}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),s=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p({},n,{},e)),t},b=function(e){var n=s(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),b=s(t),d=a,g=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return t?r.a.createElement(g,p({ref:n},c,{components:t})):r.a.createElement(g,p({ref:n},c))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=d;var p={};for(var i in n)hasOwnProperty.call(n,i)&&(p[i]=n[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=t[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);