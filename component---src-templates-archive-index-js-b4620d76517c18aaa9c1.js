(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return s}),a(91),a(77);var n=a(12),r=a.n(n),i=a(0),o=a.n(i),c=a(154),u=a(157),l=(a(378),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges.map(function(e,t){var a=e.node.frontmatter.date.split("T",1),n=e.node.fields.slug;return o.a.createElement("div",{key:n},o.a.createElement(c.Link,{to:n},o.a.createElement("span",null,a),"/",o.a.createElement("span",null,e.node.frontmatter.title)))});return o.a.createElement(u.a,null,e)},t}(i.Component));t.default=l;var s="2610667760"},151:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},154:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(8),o=a.n(i),c=a(150),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var l=a(34);a.d(t,"waitForRouteChange",function(){return l.c});var s=a(151),d=a.n(s);a.d(t,"PageRenderer",function(){return d.a});var m=a(35);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},156:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),o=a.n(i),c=a(36),u=a(1),l=function(e){var t=e.location,a=u.default.getResourcesForPathname(t.pathname);return r.a.createElement(c.a,{location:t,pageResources:a})};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},157:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),o=a(8),c=a.n(o),u=a(170),l=a.n(u),s=a(154),d=(a(159),a(161)),m=a.n(d),p=function(e){var t=e.children;return e.data,i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),i.a.createElement("div",{className:"wrap"},i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"bio"},i.a.createElement("div",{className:"profile-img"},i.a.createElement("img",{src:m.a,alt:"profile_photo"})),i.a.createElement("p",{className:"profile-name"},"Junho Baik"),i.a.createElement("div",{className:"profile-msg"},i.a.createElement("span",null,"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum libero eveniet odio quaerat sit unde maxime excepturi, optio quam illum?"))),i.a.createElement("div",{className:"submenu"},i.a.createElement(s.Link,{to:"/"},"Home"),i.a.createElement(s.Link,{to:"/taglist"},"Tags"),i.a.createElement(s.Link,{to:"/archive"},"Archive"),i.a.createElement(s.Link,{to:"/search"},"Search"))),i.a.createElement("div",null,t)))},data:n})};p.propTypes={children:c.a.node.isRequired},t.a=p},158:function(e){e.exports={data:{site:{siteMetadata:{title:"devLog"}}}}},159:function(e,t,a){},161:function(e,t,a){e.exports=a.p+"static/profile-ea75652a22e45c35cb0bce8841f6d9c5.png"},378:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-archive-index-js-b4620d76517c18aaa9c1.js.map