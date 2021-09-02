(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d2079af"],{a0f0:function(t,i,e){"use strict";e.r(i);var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.title?e("div",[e("div",{staticClass:"float-right px-4 hidden-xs-only"},[e("v-img",{attrs:{width:4*t.$size(),height:t.$size(),contain:"",src:t.icon}})],1),e("p",{staticClass:"display px-4 primary--text"},[t._v(t._s(t.$name(t.title.m_DisplayName,!0)))]),e("p",{directives:[{name:"show",rawName:"v-show",value:"ja"!=t.$i18n.locale,expression:"$i18n.locale!='ja'"}],staticClass:"px-4"},[e("span",[t._v("日本語：")]),e("span",{staticClass:"primary--text"},[t._v(t._s(t.title.m_DisplayName))])]),e("div",{staticClass:"px-4 hidden-sm-and-up"},[e("v-img",{attrs:{src:t.icon}})],1),e("div",{staticClass:"pb-4"}),e("p",{staticClass:"px-4",class:{small:t.$vuetify.breakpoint.xsOnly},domProps:{innerHTML:t._s(t.title.m_Descript.replace(/\n/g,"<br>"))}}),e("v-list-item",{attrs:{to:"/scenariolibrary/"+(5e3+parseInt(t.id))}},[e("v-list-item-title",{staticClass:"primary--text"},[t._v(t._s(t.$t("Scenarios")))]),e("v-list-item-action",{staticClass:"ma-0"},[e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-list-item",{attrs:{to:"/questlibrary/"+(5e3+parseInt(t.id))}},[e("v-list-item-title",{staticClass:"primary--text"},[t._v(t._s(t.$t("Quest Library Categories.5")))]),e("v-list-item-action",{staticClass:"ma-0"},[e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-list-item",{attrs:{to:"/questlibrary/"+(6e3+parseInt(t.id))}},[e("v-list-item-title",{staticClass:"primary--text"},[t._v(t._s(t.$t("Quest Library Categories.6")))]),e("v-list-item-action",{staticClass:"ma-0"},[e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("v-divider"),e("Ad",{key:"title-ad-"+t.id}),22==t.id?[e("v-divider",{staticClass:"mb-4"}),e("p",{staticClass:"title px-4 primary--text"},[t._v(t._s(t.$t("Names")))]),e("Scroller",{attrs:{icon:t.$size(64)}},[t._l(t.$db.OriginalCharaLibraryListArray,(function(i){return i.namedType?e("div",{key:"title-original-character-"+i.m_ID,staticClass:"ml-4",style:{width:t.$size(64)+"px"}},[e("router-link",{attrs:{to:"/named/"+i.namedType}},[e("CharaIcon",{attrs:{original:"",id:i.m_ID,size:t.$size(64)}}),e("div",{staticClass:"caption text-center two-lines"},[t._v(t._s(t.$name(i.m_Title)))])],1)],1):t._e()})),e("div",{staticClass:"pl-4"})],2),e("p",{staticClass:"px-4 subtitle-1"},[t._v(t._s(t.$t("Non-Player Characters")))]),e("Scroller",{attrs:{icon:t.$size(64)}},[t._l(t.$db.OriginalCharaLibraryListArray,(function(i){return i.namedType||-1!=i.m_CondAdvID?t._e():e("div",{key:"title-original-character-"+i.m_ID,staticClass:"ml-4",style:{width:t.$size(64)+"px"}},[e("router-link",{attrs:{to:"/originalcharacter/"+i.m_ID}},[e("CharaIcon",{attrs:{original:"",id:i.m_ID,size:t.$size(64)}}),e("div",{staticClass:"caption text-center two-lines"},[t._v(t._s(t.$name(i.m_Title)))])],1)],1)})),e("div",{staticClass:"pl-4"})],2),e("p",{staticClass:"px-4 subtitle-1"},[t._v(t._s(t.$t("Event Characters")))]),e("Scroller",{attrs:{icon:t.$size(64)}},[t._l(t.$db.OriginalCharaLibraryListArray,(function(i){return i.namedType||-1==i.m_CondAdvID?t._e():e("div",{key:"title-original-character-"+i.m_ID,staticClass:"ml-4",style:{width:t.$size(64)+"px"}},[e("router-link",{attrs:{to:"/originalcharacter/"+i.m_ID}},[e("CharaIcon",{attrs:{original:"",id:i.m_ID,size:t.$size(64)}}),e("div",{staticClass:"caption text-center two-lines"},[t._v(t._s(t.$name(i.m_Title)))])],1)],1)})),e("div",{staticClass:"pl-4"})],2)]:[e("v-divider",{staticClass:"mb-4"}),e("p",{staticClass:"title px-4 primary--text"},[t._v(t._s(t.$t("Names")))]),e("Scroller",{attrs:{icon:t.$size(64)}},[t._l(t.names,(function(i){return e("div",{key:"title-names-"+i.m_NamedType,staticClass:"ml-4",style:{width:t.$size(64)+"px"}},[e("router-link",{attrs:{to:"/named/"+i.m_NamedType}},[e("CharaIcon",{attrs:{named:"",id:i.m_NamedType,size:t.$size(64)}}),e("div",{staticClass:"caption text-center two-lines"},[t._v(t._s(t.$name(i.fullName)))])],1)],1)})),e("div",{staticClass:"pl-4"})],2)],e("v-divider"),e("v-row",{attrs:{"no-gutters":""}},[e("v-col",[e("v-list-item",{attrs:{to:"/characters?title="+t.id}},[e("v-list-item-content",[e("v-list-item-subtitle",{staticClass:"text-center"},[t._v(t._s(t.$t("Number of Characters")))]),e("v-list-item-title",{staticClass:"text-center"},[t._v(t._s(t.count(0)))])],1)],1)],1),e("v-col",[e("v-list-item",{attrs:{to:"/characters?title="+t.id+"&rare=4"}},[e("v-list-item-content",[e("v-list-item-subtitle",{staticClass:"text-center"},[t._v(t._s(t.$t("Rares.4")))]),e("v-list-item-title",{staticClass:"text-center"},[t._v(t._s(t.count(4)))])],1)],1)],1),e("v-col",[e("v-list-item",{attrs:{to:"/characters?title="+t.id+"&rare=3"}},[e("v-list-item-content",[e("v-list-item-subtitle",{staticClass:"text-center"},[t._v(t._s(t.$t("Rares.3")))]),e("v-list-item-title",{staticClass:"text-center"},[t._v(t._s(t.count(3)))])],1)],1)],1),e("v-col",[e("v-list-item",{attrs:{to:"/characters?title="+t.id+"&rare=2"}},[e("v-list-item-content",[e("v-list-item-subtitle",{staticClass:"text-center"},[t._v(t._s(t.$t("Rares.2")))]),e("v-list-item-title",{staticClass:"text-center"},[t._v(t._s(t.count(2)))])],1)],1)],1)],1),e("Achievements",{attrs:{id:t.id}}),t._l(t.orbs,(function(t){return[e("v-divider"),e("Orb",{key:"title-orb-"+t.m_ID,attrs:{id:t.m_ID}})]})),t._l(t.townObjects,(function(t){return[e("v-divider"),e("TownObject",{key:"title-townobject-"+t.m_ID,attrs:{id:t.m_ID}})]}))],2):e("div",{staticClass:"pa-4"},[e("KeyValue",{attrs:{k:t.$t("No Title")}})],1)},a=[],r=(e("4de4"),e("1e9f")),n=e("2b4e"),l=function(){var t=this,i=t.$createElement,e=t._self._c||i;return t.achievements.length?e("div",[e("v-divider",{staticClass:"mb-4"}),e("p",{staticClass:"px-4 title primary--text"},[t._v(t._s(t.$t("Achievements")))]),e("div",{staticClass:"px-2 mb-2"},[e("v-row",{attrs:{"no-gutters":""}},t._l(t.achievements,(function(i){return e("v-col",{key:"achievement-"+i.id,attrs:{cols:"12",sm:"4"}},[e("div",{staticClass:"px-2 mb-2"},[e("a",{attrs:{href:t.$asset.achievement.format(i.id)+".png",target:"_blank"}},[e("v-img",{attrs:{src:t.$asset.achievement.format(i.id)+".png",height:"60",contain:""}})],1)])])})),1)],1)],1):t._e()},c=[],o={name:"Achievements",props:["id"],computed:{achievements:function(){var t=this;return this.$db.AchievementListArray.filter((function(i){return 2==i.type&&i.trigger==t.id}))}}},m=o,v=e("2877"),d=e("6544"),_=e.n(d),p=e("62ad"),u=e("ce7e"),h=e("adda"),C=e("0fd9"),y=Object(v["a"])(m,l,c,!1,null,null,null),b=y.exports;_()(y,{VCol:p["a"],VDivider:u["a"],VImg:h["a"],VRow:C["a"]});var $={name:"Title",props:["id"],components:{Orb:r["a"],TownObject:n["a"],Achievements:b},computed:{title:function(){return this.$db.TitleList[this.id]},icon:function(){return this.$asset.contentslogo.format(this.id)+".png"},names:function(){var t=this;return this.$db.NamedListArray.filter((function(i){return i.m_TitleType==t.id}))},orbs:function(){var t=this;return this.$db.MasterOrbListArray.filter((function(i){return i.m_TitleType==t.id}))},townObjects:function(){var t=this;return this.$db.TownObjectListArray.filter((function(i){return i.m_TitleType==t.id}))}},methods:{count:function(t){var i=this;return this.$db.CharacterListArray.filter((function(e){return e.m_CharaID%10==0&&(!t||e.m_Rare==t)&&i.$db.NamedList[e.m_NamedType].m_TitleType==i.id&&!0})).length}}},f=$,x=e("132d"),g=e("da13"),I=e("1800"),w=e("5d23"),T=Object(v["a"])(f,s,a,!1,null,null,null);i["default"]=T.exports;_()(T,{VCol:p["a"],VDivider:u["a"],VIcon:x["a"],VImg:h["a"],VListItem:g["a"],VListItemAction:I["a"],VListItemContent:w["b"],VListItemSubtitle:w["c"],VListItemTitle:w["d"],VRow:C["a"]})}}]);
//# sourceMappingURL=chunk-2d2079af.7e10b75c.js.map