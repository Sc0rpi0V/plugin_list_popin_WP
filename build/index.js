!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=31)}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.regeneratorRuntime},function(e,t,n){var o=n(26),r=n(27),s=n(14),i=n(28);e.exports=function(e,t){return o(e)||r(e,t)||s(e,t)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.htmlEntities},function(e,t){e.exports=window.wp.keycodes},function(e,t){e.exports=window.wp.apiFetch},function(e,t,n){var o=n(23),r=n(24),s=n(14),i=n(25);e.exports=function(e){return o(e)||r(e)||s(e)||i()},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(e,t,n,o,r,s,i){try{var a=e[s](i),c=a.value}catch(e){return void n(e)}a.done?t(c):Promise.resolve(c).then(o,r)}e.exports=function(e){return function(){var t=this,o=arguments;return new Promise((function(r,s){var i=e.apply(t,o);function a(e){n(i,r,s,a,c,"next",e)}function c(e){n(i,r,s,a,c,"throw",e)}a(void 0)}))}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},e.exports.default=e.exports,e.exports.__esModule=!0,n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var o=n(13);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var o=n(29);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){var o=n(30).default,r=n(3);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=window.wp.compose},function(e,t){e.exports=window.wp.data},function(e,t){e.exports=window.wp.url},function(e,t,n){var o=n(13);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e){if(Array.isArray(e))return e},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],_n=!0,o=!1,r=void 0;try{for(var s,i=e[Symbol.iterator]();!(_n=(s=i.next()).done)&&(n.push(s.value),!t||n.length!==t);_n=!0);}catch(e){o=!0,r=e}finally{try{_n||null==i.return||i.return()}finally{if(o)throw r}}return n}},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},e.exports.default=e.exports,e.exports.__esModule=!0,n(t,o)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},function(e,t,n){"use strict";n.r(t);var o=n(15),r=n(1),s=n(10),i=n.n(s),a=n(6),c=n.n(a),l=n(0),u=n(4),p=n(2),d=n(11),f=n.n(d),b=n(16),m=n.n(b),g=n(17),y=n.n(g),h=n(3),x=n.n(h),v=n(18),_=n.n(v),O=n(19),j=n.n(O),w=n(12),S=n.n(w),E=n(5),k=n.n(E),P=n(7),N=n(8),T=n(20),C=n(21),M=n(22),A=n(9),I=n.n(A);function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}var D=function(e){return e.stopPropagation()},B={border:"3px solid lightgrey",padding:"5px",borderRadius:"7px",marginRight:"10px",fontSize:"80%"},L=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;return function(){for(var o=this,r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];clearTimeout(t),t=setTimeout((function(){e.apply(o,s)}),n)}},q=function(e){_()(i,e);var t,n,o,s=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S()(n);if(o){var r=S()(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return j()(this,e)});function i(){var e;return m()(this,i),(e=s.apply(this,arguments)).onChange=e.onChange.bind(x()(e)),e.onKeyDown=e.onKeyDown.bind(x()(e)),e.bindListNode=e.bindListNode.bind(x()(e)),e.updateSuggestions=L(e.updateSuggestions.bind(x()(e)),200),e.limit=!!e.props.limit&&parseInt(e.props.limit),e.suggestionNodes=[],e.postTypes=null,e.state={posts:[],showSuggestions:!1,selectedSuggestion:null,input:""},e}return y()(i,[{key:"componentDidUpdate",value:function(){}},{key:"componentWillUnmount",value:function(){delete this.suggestionsRequest}},{key:"bindListNode",value:function(e){this.listNode=e}},{key:"bindSuggestionNode",value:function(e){var t=this;return function(n){t.suggestionNodes[e]=n}}},{key:"updateSuggestions",value:(t=f()(k.a.mark((function e(t){var n,o=this;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.length<2||/^https?:/.test(t))){e.next=3;break}return this.setState({showSuggestions:!1,selectedSuggestion:null,loading:!1}),e.abrupt("return");case 3:this.setState({showSuggestions:!0,selectedSuggestion:null,loading:!0}),(n=I()({path:Object(M.addQueryArgs)("/wp/v2/search",{search:t,per_page:20,type:"post",subtype:this.props.postType?this.props.postType:"any"})})).then((function(e){o.suggestionsRequest===n&&o.setState({posts:e,loading:!1})})).catch((function(){o.suggestionsRequest===n&&o.setState({loading:!1})})),this.suggestionsRequest=n;case 7:case"end":return e.stop()}}),e,this)}))),function(_x){return t.apply(this,arguments)})},{key:"onChange",value:function(e){var t=e.target.value;this.setState({input:t}),this.updateSuggestions(t)}},{key:"onKeyDown",value:function(e){var t=this.state,n=t.showSuggestions,o=t.selectedSuggestion,r=t.posts,s=t.loading;if(n&&r.length&&!s)switch(e.keyCode){case N.UP:e.stopPropagation(),e.preventDefault();var i=o?o-1:r.length-1;this.setState({selectedSuggestion:i});break;case N.DOWN:e.stopPropagation(),e.preventDefault();var a=null===o||o===r.length-1?0:o+1;this.setState({selectedSuggestion:a});break;case N.ENTER:if(null!==this.state.selectedSuggestion){e.stopPropagation();var c=this.state.posts[this.state.selectedSuggestion];this.selectLink(c)}}}},{key:"selectLink",value:function(e){var t=this;if(this.props.data){var n,o=!1,r={},s=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return R(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?R(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var o=0,r=function(){};return{s:r,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,i=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return i=e.done,e},e:function(e){a=!0,s=e},f:function(){try{i||null==n.return||n.return()}finally{if(a)throw s}}}}(this.props.data);try{for(s.s();!(n=s.n()).done;){var i=n.value;if(!e.hasOwnProperty(i))return void(o=!0);r[i]=e[i]}}catch(e){s.e(e)}finally{s.f()}if(!o)return this.props.onPostSelect(r),void this.setState({input:"",selectedSuggestion:null,showSuggestions:!1})}var a=this.getPostTypeData(e.subtype).restBase;I()({path:"/wp/v2/".concat(a,"/").concat(e.id)}).then(function(){var e=f()(k.a.mark((function e(n){var o,r,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=n.excerpt?n.excerpt.rendered:"",!n.featured_media){e.next=7;break}return e.next=4,I()({path:"/wp/v2/media/".concat(n.featured_media)});case 4:e.t0=e.sent,e.next=8;break;case 7:e.t0="";case 8:r=e.t0,s={title:Object(P.decodeEntities)(n.title.rendered),id:n.id,excerpt:Object(P.decodeEntities)(o),url:n.link,image:r,date:n.date,type:n.type,status:n.status},t.props.onPostSelect(s);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),this.setState({input:"",selectedSuggestion:null,showSuggestions:!1})}},{key:"renderSelectedPosts",value:function(){var e=this;return Object(l.createElement)("ul",null,this.props.posts.map((function(t,n){return Object(l.createElement)("li",{style:{display:"flex",justifyContent:"flex-start",alignItems:"center",flexWrap:"nowrap"},key:t.id},e.hasPostTypeData()&&Object(l.createElement)("span",{style:B},t.type),Object(l.createElement)("span",{style:{flex:1}},t.title),Object(l.createElement)("span",null,0!==n?Object(l.createElement)(p.Button,{style:{display:"inline-flex",padding:"8px 2px",textAlign:"center"},icon:"arrow-up-alt2",onClick:function(){e.props.posts.splice(n-1,0,e.props.posts.splice(n,1)[0]),e.props.onChange(e.props.posts),e.setState({state:e.state})}}):null,n!==e.props.posts.length-1?Object(l.createElement)(p.Button,{style:{display:"inline-flex",padding:"8px 2px",textAlign:"center"},icon:"arrow-down-alt2",onClick:function(){e.props.posts.splice(n+1,0,e.props.posts.splice(n,1)[0]),e.props.onChange(e.props.posts),e.setState({state:e.state})}}):null,Object(l.createElement)(p.Button,{style:{display:"inline-flex",textAlign:"center"},icon:"no",onClick:function(){e.props.posts.splice(n,1),e.props.onChange(e.props.posts),e.setState({state:e.state})}})))})))}},{key:"resolvePostTypes",value:function(e){if(null===this.postTypes&&null!=e){var t=e.map((function(e){return[e.slug,{slug:e.slug,displayName:e.labels.singular_name,restBase:e.rest_base}]}));this.postTypes=new Map(t)}}},{key:"getPostTypeData",value:function(e){return this.hasPostTypeData()?this.postTypes.get(e):{}}},{key:"hasPostTypeData",value:function(){return null!==this.postTypes}},{key:"render",value:function(){var e=this;this.resolvePostTypes(this.props.sourcePostTypes);var t=this.props,n=t.autoFocus,o=void 0===n||n,s=t.instanceId,i=t.limit,a=this.state,c=a.showSuggestions,u=a.posts,d=a.selectedSuggestion,f=a.loading,b=a.input,m=!!i&&this.props.posts.length>=i;return Object(l.createElement)(l.Fragment,null,this.renderSelectedPosts(),Object(l.createElement)("div",{className:"block-editor-url-input"},Object(l.createElement)("input",{autoFocus:o,type:"text","aria-label":"URL",required:!0,value:b,onChange:this.onChange,onInput:D,placeholder:m?Object(r.__)("Limted to ".concat(i," posts"),"gutenberg_admin"):Object(r.__)("Entrer le nom de la page ou article"),onKeyDown:this.onKeyDown,role:"combobox","aria-expanded":c,"aria-autocomplete":"list","aria-owns":"block-editor-url-input-suggestions-".concat(s),"aria-activedescendant":null!==d?"block-editor-url-input-suggestion-".concat(s,"-").concat(d):void 0,style:{width:"100%"},disabled:m}),f&&Object(l.createElement)(p.Spinner,null)),c&&!!u.length&&Object(l.createElement)(p.Popover,{position:"bottom",noArrow:!0,focusOnMount:!1},Object(l.createElement)("div",{className:"block-editor-url-input__suggestions",id:"block-editor-url-input-suggestions-".concat(s),ref:this.bindListNode,role:"listbox"},u.map((function(t,n){return Object(l.createElement)("button",{key:t.id,role:"option",tabIndex:"-1",id:"block-editor-url-input-suggestion-".concat(s,"-").concat(n),ref:e.bindSuggestionNode(n),className:"block-editor-url-input__suggestion ".concat(n===d?"is-selected":""),onClick:function(){return e.selectLink(t)},"aria-selected":n===d},Object(l.createElement)("div",{style:{display:"flex",alignItems:"center"}},e.hasPostTypeData()&&Object(l.createElement)("div",{style:B},t.subtype),Object(l.createElement)("div",null,Object(P.decodeEntities)(t.title)||"(no title)")))})))))}}]),i}(l.Component),U=Object(C.withSelect)((function(e){return{sourcePostTypes:(0,e("core").getPostTypes)({per_page:-1})}}))(Object(T.withInstanceId)(q));Object(o.registerBlockType)("create-block/gutenberg-list-popin",{apiVersion:2,description:Object(r.__)("Permet d'afficher une liste de titres d'articles avec panel","gutenberg_admin"),title:Object(r.__)("Liste de lien avec panel","gutenberg_admin"),edit:function(e){var t=e.attributes,n=t.title,o=t.category,s=t.listArticle,a=t.btnRandom,d=t.image,f=t.isVideo,b=t.urlVideo,m=e.setAttributes,g=s.map((function(e){return Object(l.createElement)("div",{className:"list-article-item list-article-item-".concat(e.id)},Object(l.createElement)("div",{className:"article-info"},Object(l.createElement)("a",{className:"article-link",href:e.url},Object(l.createElement)("p",{className:"article-title"},e.title))),Object(l.createElement)("div",{className:"article-info"},Object(l.createElement)("a",{href:e.url,className:"open-panel-bottom-post button","data-id":"".concat(e.id)},"+")))})),y=Object(l.useState)(null),h=c()(y,2),x=h[0],v=h[1],_=Object(l.useState)(!1),O=c()(_,2),j=O[0],w=O[1],S=Object(l.useState)(0),E=c()(S,2),k=E[0],P=E[1];Object(l.useEffect)((function(){v(document.querySelector("#block-"+e.clientId).querySelector("h2"))}),[]),Object(l.useEffect)((function(){x&&!j&&(x.addEventListener("input",(function(){P(x.innerText.length)})),w(!0))}),[x,j]);var N=Object(l.createElement)(l.Fragment,null,Object(l.createElement)("div",{className:"list-article-heading"},Object(l.createElement)(u.RichText,{tagName:"span",className:"list-article-category",disabled:!0,placeholder:Object(r.__)("Entrer une catégorie","gutenberg"),value:o,onChange:function(e){return m({category:e})}}),Object(l.createElement)(u.RichText,{tagName:"h2",className:"list-article-title",placeholder:Object(r.__)("Entrer un titre","gutenberg"),value:n,style:{backgroundColor:"".concat(k>50?"red":"white")},onChange:function(e){return m({title:e})}})),Object(l.createElement)("div",{className:"list-article"},g)),T=Object(l.createElement)(l.Fragment,null,Object(l.createElement)("div",{className:"list-article-image"},Object(l.createElement)("div",{className:"list-article-image-display"},Object(l.createElement)("img",{src:""!==d.url?d.url:""})),Object(l.createElement)(u.MediaUpload,{label:Object(r.__)("Sélection d'un visuel","gutenberg"),allowedTypes:["image"],value:d,onSelect:function(e){return m({image:e})},render:function(e){return t=e.open,n=Object(l.createElement)(p.Button,{isPrimary:!0,onClick:t,style:{marginBottom:"8px",marginRight:"4px"}},""!==d.url?Object(r.__)("Remplacer Image","gutenberg_admin"):Object(r.__)("Mettre une Image","gutenberg_admin")),o=Object(l.createElement)(p.Button,{isDestructive:!0,className:"remove-image",onClick:function(){return m({image:""})},style:{marginBottom:"8px"}},Object(r.__)("Supprimer","gutenberg_admin")),Object(l.createElement)("div",null,n,""!==d.url?o:"");var t,n,o}}),Object(l.createElement)(p.CheckboxControl,{label:Object(r.__)("Afficher une video au clic sur le visuel ?","gutenberg"),checked:f,onChange:function(e){return m({isVideo:e})}}),f?Object(l.createElement)(p.TextareaControl,{className:"url-video",label:Object(r.__)("Iframe de la video","gutenberg"),value:b,onChange:function(e){return m({urlVideo:e})}}):""));return[Object(l.createElement)(u.InspectorControls,null,Object(l.createElement)(p.PanelBody,{title:Object(r.__)("Liste Article","gutenberg"),initialOpen:!0,className:"form-list-article list-article"},Object(l.createElement)(U,{onPostSelect:function(e){var t=[].concat(i()(s),[e]);m({listArticle:t})},posts:s,onChange:function(e){m({listArticle:i()(e)})},postType:""}),Object(l.createElement)(p.CheckboxControl,{label:Object(r.__)("Affichage aléatoire","gutenberg"),checked:a,onChange:function(e){return m({btnRandom:e})}}))),Object(l.createElement)("div",Object(u.useBlockProps)(),Object(l.createElement)("div",{className:"wrapper-content"},Object(l.createElement)("div",{className:"col-left"},N),Object(l.createElement)("div",{className:"col-right"},T)))]}})}]);