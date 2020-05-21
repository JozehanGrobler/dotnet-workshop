(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),o=n(9),c=(n(0),n(152)),i={title:"Service"},a={id:"service",title:"Service",description:"Creating your first service",source:"@site/docs/service.md",permalink:"/dotnet-workshop/docs/service",editUrl:"https://github.com/stackworx/dotnet-workshop/edit/master/docs/docs/service.md",sidebar:"someSidebar",previous:{title:"First Controller",permalink:"/dotnet-workshop/docs/controller"},next:{title:"Service",permalink:"/dotnet-workshop/docs/dependency-injection"}},l=[{value:"Creating your first service",id:"creating-your-first-service",children:[{value:"References",id:"references",children:[]}]}],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"creating-your-first-service"},"Creating your first service"),Object(c.b)("p",null,"The previous code works well enough but we don't want to end up with all our logic inside of controllers.\nWe should rather build shared re-usable services"),Object(c.b)("p",null,"Let's move the logic out of the controller"),Object(c.b)("p",null,"Right click on the project and select Add -> New Folder\nCreate a folder named ",Object(c.b)("inlineCode",{parentName:"p"},"Services")),Object(c.b)("p",null,"Right click on the project and select Add -> New Item and Select an empty class.\nName it Clock.cs\nMove this class into Services and update its namespace"),Object(c.b)("p",null,"You should have something like this"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"using System;\nusing System.Collections.Generic;\nusing System.Linq;\nusing System.Threading.Tasks;\n\nnamespace Stackworx.Workshop.Services\n{\n    public class Clock\n    {\n    }\n}\n")),Object(c.b)("p",null,"Let's create a new method matching the logic from our controller"),Object(c.b)("p",null,"Once that is done add a constructor to the Controller so that we can create an instance of our ",Object(c.b)("inlineCode",{parentName:"p"},"Clock")," service"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"private readonly Clock clock;\n\npublic ClockController()\n{\n    this.clock = new Clock();\n}\n")),Object(c.b)("p",null,"Update your controller to use this method instead"),Object(c.b)("h3",{id:"references"},"References"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.microsoft.com/en-us/aspnet/core/fundamentals/?view=aspnetcore-3.1&tabs=windows#dependency-injection-services"}),"Dependency Injection"))))}u.isMDXComponent=!0},152:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(i,".").concat(b)]||p[b]||d[b]||c;return n?o.a.createElement(f,a({ref:t},s,{components:n})):o.a.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var s=2;s<c;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);