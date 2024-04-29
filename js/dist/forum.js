(()=>{var t={n:a=>{var o=a&&a.__esModule?()=>a.default:()=>a;return t.d(o,{a:o}),o},d:(a,o)=>{for(var e in o)t.o(o,e)&&!t.o(a,e)&&Object.defineProperty(a,e,{enumerable:!0,get:o[e]})},o:(t,a)=>Object.prototype.hasOwnProperty.call(t,a),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},a={};(()=>{"use strict";t.r(a),t.d(a,{default:()=>et});const o=flarum.core.compat["common/extend"],e=flarum.core.compat["forum/components/IndexPage"];var s=t.n(e);const r=flarum.core.compat["common/components/LinkButton"];var i=t.n(r);const n=flarum.core.compat["common/Model"];var c=t.n(n);const l=flarum.core.compat["tags/models/Tag"];var d=t.n(l);function u(t,a){return u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,a){return t.__proto__=a,t},u(t,a)}function g(t,a){t.prototype=Object.create(a.prototype),t.prototype.constructor=t,u(t,a)}const h=flarum.core.compat["forum/app"];var p=t.n(h);const f=flarum.core.compat["common/components/Page"];var v=t.n(f);const C=flarum.core.compat["common/components/LoadingIndicator"];var y=t.n(C);const b=flarum.core.compat["common/helpers/listItems"];var T=t.n(b);const w=flarum.core.compat["common/utils/ItemList"];var P=t.n(w);const k=flarum.core.compat["common/utils/extractText"];var N=t.n(k);const I=flarum.core.compat["common/utils/classList"];var L=t.n(I);const x=flarum.core.compat["tags/utils/sortTags"];var A=t.n(x);const D=flarum.core.compat["tags/helpers/tagLabel"];var M=t.n(D);const _=flarum.core.compat["common/Component"];var S=t.n(_);const O=flarum.core.compat["common/components/Link"];var U=t.n(O);const B=flarum.core.compat["common/helpers/icon"];var W=t.n(B),j=function(t){function a(){return t.apply(this,arguments)||this}g(a,t);var o=a.prototype;return o.view=function(){return m("div",{class:L()("StatWidget",{"Categories-compactMobileModeEnabled":!!p().forum.attribute("categories.compactMobile")},this.attrs.className)},this.content().toArray())},o.content=function(){var t,a=new(P());return a.add("count",m("div",{class:"StatWidget-count"},this.attrs.count),100),a.add("label",m("div",((t={class:"StatWidget-label"}).class=this.attrs.className+"muted",t),m("span",{className:"Categories-showOnMobile"},W()(this.attrs.icon)),m("span",{className:"Categories-hideOnMobile"},this.attrs.label)),80),a},a}(S());const E=flarum.core.compat["common/helpers/avatar"];var R=t.n(E);const V=flarum.core.compat["common/helpers/username"];var F=t.n(V);const z=flarum.core.compat["common/helpers/humanTime"];var H=t.n(z);const G=flarum.core.compat["common/utils/string"],q=flarum.core.compat["forum/components/UserCard"];var J=t.n(q);const K=flarum.core.compat["common/helpers/textContrastClass"];var Q=t.n(K),X=function(t){function a(){for(var a,o=arguments.length,e=new Array(o),s=0;s<o;s++)e[s]=arguments[s];return(a=t.call.apply(t,[this].concat(e))||this).cardVisible=void 0,a}g(a,t);var o=a.prototype;return o.oninit=function(a){t.prototype.oninit.call(this,a),this.cardVisible=!1},o.view=function(){var t,a=this.attrs.discussion;return a?(a.lastPostedUser(),m(U(),{class:"LastDiscussion",href:p().route.discussion(a,null!=(t=a.lastPostNumber())?t:0)},this.content().toArray())):m("div",{class:"LastDiscussion"},p().translator.trans("askvortsov-categories.forum.last_discussion_widget.no_discussions"))},o.content=function(){var t=new(P()),a=this.attrs.discussion,o=a.lastPostedUser(),e="auto-color-text";this.attrs.selectedTag.isChild,this.attrs.selectedTag.isBackgroundTagColored&&(e=Q()(this.attrs.selectedTag.tag.color())),t.add("avatar",m(U(),{className:"LastDiscussion-avatar",href:o?p().route.user(o):"#","aria-label":N()(F()(o))},!!o&&R()(o)),100),t.add("mainContent",m("div",{class:L()("LastDiscussion-content",e)},m("div",{class:L()("LastDiscussion-bottomRow",e+"muted")},H()(a.lastPostedAt())," ",m(U(),{className:L()("LastDiscussion-usernameLink",e+"muted"),href:o?p().route.user(o):"#"},m("span",{style:{display:"inline",margin:"0 4px"},role:"presentation"},"|"),F()(o))),m("div",{class:"LastDiscussion-topRow"},(0,G.truncate)(a.title(),26))),50);var s=null;return o&&this.cardVisible&&(s=J().component({user:o,className:"UserCard--popover",controlsButtonClassName:"Button Button--icon Button--flat"})),t.add("card",m("div",{class:"LastDiscussion-userCardContainer"},s),10),t},o.oncreate=function(a){var o,e=this;t.prototype.oncreate.call(this,a),this.$().on("mouseover",".LastDiscussion-avatar, .LastDiscussion-usernameLinkUserCard, .username, .UserCard",(function(){clearTimeout(o),o=window.setTimeout(e.showCard.bind(e),300)})).on("mouseout",".LastDiscussion-avatar, .LastDiscussion-usernameLinkUserCard, .username, .UserCard",(function(){clearTimeout(o),o=window.setTimeout(e.hideCard.bind(e),150)}))},o.onremove=function(a){t.prototype.onremove.call(this,a),this.$().off("mouseover mouseout")},o.showCard=function(){var t=this;this.cardVisible=!0,m.redraw(),setTimeout((function(){return t.$(".UserCard").addClass("in")}))},o.hideCard=function(){$(".UserCard").removeClass("in"),this.cardVisible=!1,m.redraw()},a}(S()),Y=function(t){function a(){for(var a,o=arguments.length,e=new Array(o),s=0;s<o;s++)e[s]=arguments[s];return(a=t.call.apply(t,[this].concat(e))||this).tag=void 0,a.isChild=void 0,a.collapsed=void 0,a.compactMobileMode=void 0,a.tagLocked=void 0,a}g(a,t);var o=a.prototype;return o.oninit=function(a){t.prototype.oninit.call(this,a),this.tag=this.attrs.model,this.isChild=null!=this.attrs.parent&&null!=this.attrs.parent,this.collapsed=!1,"function"==typeof this.tag.isUnlocked&&(!this.tag.isGroupProtected()&&!this.tag.isPasswordProtected()||this.tag.isUnlocked()||(this.tagLocked={icon:this.tag.isPasswordProtected()?W()("fas fa-lock"):W()("fas fa-user-lock"),text:this.tag.isPasswordProtected()?p().translator.trans("datlechin-tag-passwords.forum.tags_page.password_protected"):p().translator.trans("datlechin-tag-passwords.forum.tags_page.group_protected"),isVisible:1==this.tag.isProtectedTagDisplayedForTagsPage()})),window.addEventListener("resize",(function(){m.redraw()}))},o.view=function(){var t=this.tag;return t?this.tagLocked&&!this.tagLocked.isVisible?null:(this.compactMobileMode=!!p().forum.attribute("categories.compactMobile"),m("li",{className:L()("TagCategory","TagCategory-"+t.slug(),{SubCategory:this.isChild,ParentCategory:!this.isChild,compactMobile:this.compactMobileMode})},this.categoryItems().toArray())):null},o.categoryItems=function(){var t=this,o=new(P()),e=this.tag,s=this.isChild?[]:A()(e.children()||[]),r={};return this.isChild?this.attrs.enablePrimaryChildTagColor&&(r.backgroundColor=this.tag.color()):this.attrs.enablePrimaryTagColor&&(r.backgroundColor=this.tag.color()),o.add("link",m(U(),{className:"TagCategory-content "+(p().forum.attribute("categories.compactMobile")?"compactMobile":"")+" TagCategory-content-"+e.slug(),style:r,href:p().route.tag(e)},this.contentItems().toArray()),100),this.compactMobileMode||this.isChild||o.add("children",m("ol",{className:"TagCategory-subTagList"},s.map((function(o){return[a.component({model:o,parent:t,enablePrimaryChildTagColor:t.attrs.enablePrimaryChildTagColor})]}))),10),o},o.contentItems=function(){var t=this,o=new(P()),e=this.isChild?[]:A()(this.tag.children()||[]),s="auto-color-text";return(this.attrs.enablePrimaryTagColor||this.isChild&&this.attrs.enablePrimaryChildTagColor)&&(s=Q()(this.tag.color())),o.add("alignStart",m("div",{className:L()("TagCategory-alignStart",s)},this.alignStartItems().toArray()),100),o.add("alignEnd",m("div",{className:L()("TagCategory-alignEnd",s)},this.alignEndItems().toArray()),50),!this.isChild&&this.compactMobileMode&&!this.collapsed&&o.add("children",m("ol",{className:"TagCategory-subTagList"},e.map((function(o){return[a.component({model:o,parent:t,enablePrimaryChildTagColor:t.attrs.enablePrimaryChildTagColor})]}))),10),o},o.alignStartItems=function(){var t=this,a=new(P()),o=this.isChild?[]:A()(this.tag.children()||[]),e={};return this.isChild?this.attrs.enablePrimaryChildTagColor||(e.color=this.tag.color()):this.attrs.enablePrimaryTagColor||(e.color=this.tag.color()),a.add("icon",m("span",{className:"TagCategory-icon",style:e},this.iconItems().toArray()),100),a.add("main",m("div",{className:"TagCategory-main"},this.mainItems().toArray()),50),o.length&&a.add("toggleArrow",m("button",{className:"TagCategory-toggleArrow Button--ua-reset",onclick:function(a){t.toggleArrow(a)}},W()(this.collapsed?"fas fa-caret-down":"fas fa-caret-up")),10),a},o.alignEndItems=function(){var t=new(P());if(this.tagLocked)return t.add("locked",m("div",{className:"TagCategory-locked"},this.lockedItems().toArray()),100),t;var a=this.tag;return t.add("stats",m("div",{className:"TagCategory-stats StatWidgetList"},this.statItems().toArray()),100),t.add("lastDiscussion",m("div",{className:L()("TagCategory-lastDiscussion",{empty:!a.lastPostedDiscussion()})},this.lastDiscussionItems().toArray()),50),t},o.lockedItems=function(){var t=new(P()),a=this.compactMobileMode?"fa-stack fa-1x":"fa-stack fa-2x";return t.add("icon",m("span",{className:a},m("i",{className:"fa-stack-2x",style:{color:this.tag.color()}}),this.tagLocked.icon),10),t.add("LockedText",m("div",{className:L()("TagCategory-lockedText")},this.tagLocked.text),50),t},o.iconItems=function(){var t=new(P());if(this.tag.icon()&&this.isChild){var a={},o=["fa-stack-1x CategoryIcon"];p().forum.attribute("categories.childBareIcon")?this.attrs.enablePrimaryChildTagColor?a.color=this.tag.color():o.push("NoBackgroundCategoryIcon","auto-child-color"):this.attrs.enablePrimaryChildTagColor?o.push(Q()(this.tag.color())):a.color=this.tag.color();var e=this.compactMobileMode?"fa-stack fa-1x":"fa-stack fa-2x";t.add("icon",m("span",{className:e},!!p().forum.attribute("categories.childBareIcon")&&m("i",{className:"fa fa-circle fa-stack-2x icon-background",style:this.attrs.enablePrimaryChildTagColor?{}:{color:this.tag.color()}}),W()(this.tag.icon(),{className:L()(o),style:a})),10)}else if(this.tag.icon()&&!p().forum.attribute("categories.parentRemoveIcon")){var s=this.compactMobileMode?"fa-stack fa-2x":"fa-stack fa-3x";t.add("icon",m("span",{className:s},W()(this.tag.icon(),{className:"fa-stack-1x CategoryIcon"})),10)}return t},o.mainItems=function(){var t=new(P());t.add("name",m("h4",{className:"TagCategory-name"},this.tag.name()),15);var a="auto-color-text";return this.isChild?this.attrs.enablePrimaryChildTagColor&&(a=Q()(this.tag.color())+"muted"):this.attrs.enablePrimaryTagColor&&(a=Q()(this.tag.color())+"muted"),!this.tag.description()||!this.isChild&&p().forum.attribute("categories.parentRemoveDescription")||t.add("description",m("div",{className:L()("TagCategory-description",a)},this.tag.description()),10),t},o.statItems=function(){var t=new(P()),a="auto-color-text";return this.isChild?this.attrs.enablePrimaryChildTagColor&&(a=Q()(this.tag.color())):this.attrs.enablePrimaryTagColor&&(a=Q()(this.tag.color())),!this.isChild&&p().forum.attribute("categories.parentRemoveStats")||(t.add("discussionCount",j.component({count:Intl.NumberFormat().format(this.tag.discussionCount()),label:p().translator.trans("askvortsov-categories.forum.stat-widgets.discussion_label"),icon:"fas fa-file-alt",className:a}),15),t.add("postCount",j.component({count:Intl.NumberFormat().format(this.tag.postCount()),label:p().translator.trans("askvortsov-categories.forum.stat-widgets.post_label"),icon:"fas fa-comment",className:a}),10)),t},o.lastDiscussionItems=function(){var t=new(P());return!this.isChild&&p().forum.attribute("categories.parentRemoveLastDiscussion")||t.add("lastDiscussion",X.component({discussion:this.tag.lastPostedDiscussion(),selectedTag:{tag:this.tag,isChild:this.isChild,isBackgroundTagColored:this.isChild?this.attrs.enablePrimaryChildTagColor:this.attrs.enablePrimaryTagColor}}),10),t},o.oncreate=function(a){t.prototype.oncreate.call(this,a),this.$(".TagCategory-content,.TagCategory-toggleArrow").on("mouseenter",(function(t){$(this).addClass("hover"),($(this).parent().hasClass("SubCategory")||$(this).hasClass("TagCategory-toggleArrow"))&&$(this).closest(".ParentCategory").children(".TagCategory-content").removeClass("hover")})),this.$(".TagCategory-content,.TagCategory-toggleArrow").on("mouseleave",(function(t){$(this).removeClass("hover"),($(this).parent().hasClass("SubCategory")||$(this).hasClass("TagCategory-toggleArrow"))&&$(this).closest(".ParentCategory").children(".TagCategory-content").addClass("hover")}))},o.onremove=function(a){t.prototype.onremove.call(this,a),this.$(".TagCategory-content,.TagCategory-toggleArrow").off("mouseenter"),this.$(".TagCategory-content,.TagCategory-toggleArrow").off("mouseleave")},o.toggleArrow=function(t){t.preventDefault(),t.stopPropagation(),this.collapsed=!this.collapsed,m.redraw()},a}(S()),Z=function(t){function a(){for(var a,o=arguments.length,e=new Array(o),s=0;s<o;s++)e[s]=arguments[s];return(a=t.call.apply(t,[this].concat(e))||this).tags=void 0,a.loading=void 0,a}g(a,t);var o=a.prototype;return o.oninit=function(a){var o=this;t.prototype.oninit.call(this,a),p().history.push("categories",N()(p().translator.trans("askvortsov-category.forum.header.back_to_categories_tooltip"))),this.tags=[];var e=p().preloadedApiDocument();e?this.tags=A()(e.filter((function(t){return!t.isChild()}))):(this.loading=!0,p().tagList.load(["parent","children","lastPostedDiscussion","lastPostedDiscussion.lastPostedUser"]).then((function(){o.tags=A()(p().store.all("tags").filter((function(t){return!t.isChild()}))),o.loading=!1,m.redraw()})))},o.view=function(){return this.loading?m(y(),null):m("div",{className:L()(["CategoriesPage","container"])},this.pageItems().toArray())},o.pageItems=function(){var t=new(P());return t.add("hero",s().prototype.hero(),100),t.add("container",this.containerItems().toArray(),50),t},o.containerItems=function(){var t=new(P()),a=s().prototype.view();return t.add("container",m("div",{className:p().forum.attribute("categories.fullPageDesktop")?"container topNavContainer":"container sideNavContainer"},this.contentItems().toArray()),50),(p().forum.attribute("categories.widgetHeader")||p().forum.attribute("categories.widgetFooter"))&&a.children.length>1&&a.children[1].children&&a.children[1].children.forEach((function(a,o){a.attrs.className||(p().forum.attribute("categories.widgetHeader")&&0==o?t.add("header-widget",a,100):p().forum.attribute("categories.widgetFooter")&&t.add("footer-widget",a,0))})),t},o.contentItems=function(){var t=new(P()),a=this.tags.filter((function(t){return null!==t.position()})),o=this.tags.filter((function(t){return null===t.position()}));if(t.add("sideNav",m("nav",{className:p().forum.attribute("categories.fullPageDesktop")?"CategoriesPage-nav IndexPage-nav topNav":"CategoriesPage-nav IndexPage-nav sideNav"},m("ul",null,T()(s().prototype.sidebarItems().toArray()))),100),t.add("categoriesList",m("div",{className:"CategoriesPage-content sideNavOffset"},m("ol",{className:"TagCategoryList"},a.map((function(t){return Y.component({model:t,enablePrimaryTagColor:p().forum.attribute("categories.enablePrimaryTagColor"),enablePrimaryChildTagColor:p().forum.attribute("categories.enablePrimaryChildTagColor")})}))),o.length?m("div",{className:"TagCloud"},o.map((function(t){return[M()(t,{link:!0})," "]}))):""),50),p().forum.attribute("categories.widgetRight")){var e=s().prototype.view();e.children.length>1&&e.children[1].children.length>1&&3===e.children[1].children[1].children.length&&t.add("widget",e.children[1].children[1].children[2],0)}return t},o.oncreate=function(a){t.prototype.oncreate.call(this,a),p().setTitle(N()(p().translator.trans("askvortsov-categories.forum.all_categories.meta_title_text")))},a}(v());const tt=flarum.core.compat["tags/forum/components/TagsPage"];var at=t.n(tt);function ot(t,a){var o=app.forum.attribute("categories.keepTagsNav"),e=app.current.matches(Z)||app.current.matches(at());for(var s in t.items)a(s)&&(s.startsWith("tag")?"tags"==s?o||t.remove(s):e&&t.remove(s):app.forum.attribute("categories.widgetLeft")||t.remove(s));return t}flarum.core.compat["extensions/afrux-forum-widgets-core/common/utils/sortWidgets"],app.initializers.add("askvortsov/flarum-categories",(function(){app.routes.categories={path:"/categories",component:Z},d().prototype.postCount=c().attribute("postCount"),(0,o.extend)(s().prototype,"navItems",(function(t){return t.add("categories",m(i(),{icon:"fas fa-th-list",href:app.route("categories")},app.translator.trans("askvortsov-categories.forum.index.categories_link")),-9.5),app.current.matches(Z)||app.current.matches(at())?t.remove("moreTags"):t.has("moreTags")&&t.replace("moreTags",m(i(),{href:app.route("categories")},app.translator.trans("flarum-tags.forum.index.more_link"))),ot(t,(function(t){return t.startsWith("tag")})),t})),(0,o.extend)(s().prototype,"sidebarItems",(function(t){ot(t,(function(t){return"newDiscussion"!==t&&"nav"!==t}))}))}));const et={"components/CategoriesPage":Z,"components/Category":Y,"components/LastDiscussionWidget":X,"components/StatWidget":j}})(),module.exports=a})();
//# sourceMappingURL=forum.js.map