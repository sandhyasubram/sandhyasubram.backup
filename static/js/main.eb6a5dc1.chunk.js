(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(e,t,n){e.exports=n(42)},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(18),o=n.n(r),l=n(10),i=n(1),s={APPLICATION:{ROUTES:{HOME:"/",ABOUT:"/about",DEFAULT_ROUTE:"/"},SCREENS:{HOME:{BANNER_TEXT:"Hi, I'm Sandhya.",INTRO_TEXT:"A UX Designer who goes by @tangentkitty on the web"}},SOCIAL:[{link:"https://dribbble.com/tangentkitty",icon:"dribbble"},{link:"https://www.behance.net/tangentkitty",icon:"behance"},{link:"https://codepen.io/tangentkitty/",icon:"codepen"},{link:"https://www.linkedin.in/in/tangentkitty/",icon:"linkedin"},{link:"https://twitter.com/tangentkitty",icon:"twitter"},{link:"https://www.instagram.com/tangentkitty/",icon:"instagram"}]},IMAGE_CATEGORY:{VECTOR:"vector",WEB_DESIGN:"web-design",ANIMATION:"animation"}},m={SCREENS:{HOME:{},ABOUT:{}},DESIGNS:[{TITLE:"Cake",IMAGE_SOURCE:"cake.png",LINK:"https://dribbble.com/shots/10986702-Cake",CATEGORY:[s.IMAGE_CATEGORY.VECTOR]},{TITLE:"Cheeky Ghost",IMAGE_SOURCE:"cheeky_ghost.gif",LINK:"https://dribbble.com/shots/10986702-Cake",CATEGORY:[s.IMAGE_CATEGORY.VECTOR,s.IMAGE_CATEGORY.ANIMATION]},{TITLE:"Dessert",IMAGE_SOURCE:"dessert.png",LINK:"https://dribbble.com/shots/11836231-Dessert",CATEGORY:[s.IMAGE_CATEGORY.VECTOR]}]},E=n(8),u=n(9),p=n(12),d=n(11),h=(n(25),function(e){var t=Object(a.useRef)(null),n=function(e){if(t.current){var n=t.current.offsetTop;"work"===e&&(n+=t.current.offsetHeight),window.scroll({left:0,top:n,behavior:"smooth"})}};return c.a.createElement("div",{className:"banner-wrapper"},c.a.createElement("div",{className:"banner-image"},c.a.createElement("section",{className:"section top-section"},c.a.createElement("div",{className:"content-container content-theme-dark"},c.a.createElement("div",{className:"content-inner"},c.a.createElement("div",{className:"content-center"},c.a.createElement("h1",null," ".concat(e.bannerText," ")),c.a.createElement("div",{className:"banner-scroller"},c.a.createElement(P,{color:"medium",onClick:function(){n("intro")}})))))),c.a.createElement("section",{className:"section bottom-section",ref:t},c.a.createElement("div",{className:"content-container content-theme-light"},c.a.createElement("div",{className:"content-inner"},c.a.createElement("div",{className:"content-center"},c.a.createElement("div",{className:"text"},c.a.createElement("div",{className:"text-top"},e.links.map((function(e){return c.a.createElement(G,{key:e.icon,icon:e.icon,link:e.link,target:"_blank"})}))),c.a.createElement("h1",null," ",e.bannerText," "),c.a.createElement("div",{className:"text-bottom"},c.a.createElement("div",null,"UX Designer \xa0|\xa0 Find me @tangentkitty over the web"))),c.a.createElement("div",{className:"banner-scroller"},c.a.createElement(P,{color:"dark",onClick:function(){n("work")}}))))))))});h.defaultProps={bannerText:"",links:[]};var f=h,T=(n(26),function(e){return c.a.createElement("div",{className:"container ".concat(e.size," ").concat(e.padding," ").concat(e.height)})});T.defaultProps={size:"",padding:"",height:"",links:[]};var v=T,N=(n(27),function(e){return c.a.createElement("li",{className:"menu-item ".concat(e.active)},c.a.createElement(l.b,{to:e.path,className:e.active},c.a.createElement("span",null,e.title)))});N.defaultProps={active:"",title:"",path:""};var O=N,k=(n(33),function(e){return c.a.createElement("ul",{className:"menu"},c.a.createElement(O,{title:"My Work",path:s.APPLICATION.ROUTES.HOME,active:e.path===s.APPLICATION.ROUTES.HOME?"active":""}),c.a.createElement(O,{title:"Know Me!",path:s.APPLICATION.ROUTES.ABOUT,active:e.path===s.APPLICATION.ROUTES.ABOUT?"active":""}))});k.defaultProps={path:""};var b=k,A=(n(34),function(e){return c.a.createElement("div",{className:"header-wrapper"},c.a.createElement("div",{className:"menu-wrapper"},c.a.createElement(b,{path:e.path})))});A.defaultProps={path:""};var I=A,C=(n(35),function(e){return c.a.createElement("div",{className:"list-wrapper ".concat(e.column)},function(){var t=[];return e.data.forEach((function(e,n){t.push(c.a.createElement("div",{className:"tiles",key:n},c.a.createElement(R,{data:e})))})),t}())});C.defaultProps={data:[],column:"three"};var g=C,w=(n(36),function(e){var t=e.data,n=t.TITLE,a=t.IMAGE_SOURCE;return c.a.createElement("div",{className:"tile-wrapper"},c.a.createElement("div",{className:"tile-content"},c.a.createElement("img",{className:"tile-image",src:a,alt:n}),c.a.createElement("div",{className:"tile-overlay"},c.a.createElement("div",{className:"hover-text"},n))))});w.defaultProps={data:{}};var R=w,S=(n(37),function(e){var t;return t="down"!==e.type?c.a.createElement("i",{className:"scroll-icon fa ".concat(e.type)}):c.a.createElement("div",{className:"scroll-text"}," click to scroll "),c.a.createElement("div",{className:"scroller-wrapper"},c.a.createElement("div",{className:"scroller ".concat(e.color),onClick:function(){e.onClick()}},t))});S.defaultProps={type:"down",color:"light"};var P=S,y=(n(38),function(e){return c.a.createElement("a",{key:e.icon,href:e.link,className:"social-links",target:e.target,rel:"noopener noreferrer"},c.a.createElement("i",{className:"scroll-icon fa fa-".concat(e.icon)}))});y.defaultProps={icon:"",link:"",target:"_blank"};var G=y,L=(n(39),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(E.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){window.addEventListener("scroll",a.checkScroller)},a.componentWillUnmount=function(){window.removeEventListener("scroll",a.checkScroller)},a.checkScroller=function(e){e.target.scrollingElement.scrollTop>=600?a.setState({scrollToTopButton:"active"}):"active"===a.state.scrollToTopButton&&a.setState({scrollToTopButton:""})},a.scrollToTop=function(){window.scroll({left:0,top:0,behavior:"smooth"})},a.state={scrollToTopButton:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=(this.props&&this.props.location||null).pathname,n=m.DESIGNS||{},a=Object.values(n)||[];return c.a.createElement("div",{className:"home-screen-wrapper"},c.a.createElement(I,{path:t}),c.a.createElement("div",{className:"banner-container"},c.a.createElement(f,{bannerText:s.APPLICATION.SCREENS.HOME.BANNER_TEXT,links:s.APPLICATION.SOCIAL})),c.a.createElement(g,{data:a}),c.a.createElement("div",{className:"scroll-to-top-wrapper ".concat(this.state.scrollToTopButton)},c.a.createElement(P,{type:"fa-angle-up",onClick:function(){e.scrollToTop()}})))}}]),n}(c.a.Component)),M=(n(40),function(e){Object(p.a)(n,e);var t=Object(d.a)(n);function n(){return Object(E.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=(this.props&&this.props.location||null).pathname;return c.a.createElement("div",{className:"about-me-wrapper"},c.a.createElement(I,{path:e}),c.a.createElement(v,{padding:"padding-medium",height:"full"}))}}]),n}(c.a.Component)),U=function(){return c.a.createElement(l.a,null,c.a.createElement(i.a,{path:s.APPLICATION.ROUTES.HOME,exact:!0,component:L}),c.a.createElement(i.a,{path:s.APPLICATION.ROUTES.ABOUT,component:M}))},_=(n(41),function(){return c.a.createElement(U,null)});o.a.render(c.a.createElement(_,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.eb6a5dc1.chunk.js.map