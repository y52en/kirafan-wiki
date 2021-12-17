(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2abf2613"],{"1e52":function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.questLibrary?e("div",[e("div",{staticClass:"float-right px-4 hidden-xs-only"},[e("v-img",{attrs:{width:4*t.$size(),height:t.$size(),contain:"",src:t.questLibrary.icon}})],1),t.questLibrary.badge?e("KeyValue",{staticClass:"pl-4 pr-2 pt-2 float-left",attrs:{k:t.questLibrary.badge}}):t._e(),5==t.questLibrary.category||6==t.questLibrary.category?[e("p",{staticClass:"display px-4 primary--text"},[t._v(t._s(t.$t("Quest Library Categories."+t.questLibrary.category)))]),e("p",{staticClass:"px-4 primary--text"},[t._v(t._s(t.$name(t.questLibrary.name)))])]:[e("p",{staticClass:"display px-4 primary--text"},[t._v(t._s(t.$name(t.questLibrary.name,!0)))]),e("p",{directives:[{name:"show",rawName:"v-show",value:"ja"!=t.$i18n.locale,expression:"$i18n.locale!='ja'"}],staticClass:"px-4"},[e("span",[t._v("日本語：")]),e("span",{staticClass:"primary--text"},[t._v(t._s(t.questLibrary.name))])])],e("div",{staticClass:"px-4 hidden-sm-and-up"},[e("v-img",{attrs:{src:t.questLibrary.icon}})],1),e("div",{staticClass:"pb-4"}),t.questLibrary.category<3?e("v-list-item",{attrs:{to:"/scenariolibrary/"+(0==t.questLibrary.category?t.id-t.id%100+t.id%10:t.id)}},[e("v-list-item-title",{staticClass:"primary--text"},[t._v(t._s(t.$t("Scenarios")))]),e("v-list-item-action",{staticClass:"ma-0"},[e("v-icon",[t._v("mdi-chevron-right")])],1)],1):5==t.questLibrary.category||6==t.questLibrary.category?e("v-list-item",{attrs:{to:"/title/"+t.id%1e3}},[e("v-list-item-title",{staticClass:"primary--text"},[t._v(t._s(t.$t("Title")))]),e("v-list-item-action",{staticClass:"ma-0"},[e("v-icon",[t._v("mdi-chevron-right")])],1)],1):t._e(),1==t.questLibrary.category?e("v-list-item",{directives:[{name:"show",rawName:"v-show",value:"ja"==t.$i18n.locale,expression:"$i18n.locale=='ja'"}],attrs:{target:"_blank",href:t.$const.wikiwiki.quest.format(t.questLibrary.name)}},[e("v-list-item-title",{staticClass:"primary--text"},[t._v("イベント攻略 - "+t._s(t.$t("Wikiwiki.Title")))]),e("v-list-item-action",{staticClass:"ma-0"},[e("v-icon",[t._v("mdi-open-in-new")])],1)],1):t._e(),e("v-divider"),e("Ad",{key:"quest-library-ad-"+t.id}),e("div",{directives:[{name:"show",rawName:"v-show",value:1==t.questLibrary.category,expression:"questLibrary.category==1"}]},[e("v-divider",{staticClass:"mb-4"}),e("div",{staticClass:"float-right pr-4"},[e("v-btn",{attrs:{icon:""},on:{click:function(s){t.show=!t.show}}},[t.show?e("v-icon",[t._v("mdi-chevron-up")]):e("v-icon",[t._v("mdi-chevron-down")])],1)],1),e("p",{staticClass:"px-4 title primary--text",on:{click:function(s){t.show=!0}}},[t._v(t._s(t.$t("Event Information")))])],1),e("v-expand-transition",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t.event.m_Url?e("v-list-item",{attrs:{href:t.event.m_Url,target:"_blank"}},[e("v-list-item-title",{staticClass:"primary--text"},[t._v(t._s(t.$t("Event Abstract")))]),e("v-list-item-action",{staticClass:"ma-0"},[e("v-icon",[t._v("mdi-open-in-new")])],1)],1):t._e(),1==t.questLibrary.category?[e("v-divider",{staticClass:"mb-4"}),e("ItemCategory",{attrs:{id:t.id,questLibrary:""}})]:t._e(),t.eventBonus?[e("v-divider",{staticClass:"mb-4"}),e("EventBonus",{attrs:{id:t.id}})]:t._e()],2)]),t._l(t.questLibrary.quests,(function(t){return[e("v-divider"),e("Quest",{key:"questlibrary-quest-"+t,attrs:{id:t}})]}))],2):e("div",{staticClass:"pa-4"},[e("KeyValue",{attrs:{k:t.$t("No Quest")}})],1)},a=[],r=(e("4de4"),e("fe68")),n=e("c437"),c=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("p",{staticClass:"px-4 title primary--text"},[t._v(t._s(t.$t("Event Bonus")))]),e("Scroller",{attrs:{icon:t.$size(64)}},[t._l(t.characters,(function(s){return e("div",{key:"questlibrary-eventbonus-"+s.m_CharaID,staticClass:"ml-4"},[e("router-link",{attrs:{to:"/character/"+s.m_CharaID}},[e("CharaIcon",{attrs:{id:s.m_CharaID,size:t.$size(64)}})],1),e("div",{staticClass:"caption text-center"},t._l(s.m_ItemIDs,(function(i,a){return-1!=i?e("div",{key:"questlibrary-eventbonus-item-"+s.m_CharaID+"-"+i,staticClass:"d-flex justify-center"},[e("v-avatar",{staticClass:"mr-1",attrs:{size:t.$size(32)}},[e("v-img",{attrs:{src:t.$asset.itemicon.format(i)+".jpg"}})],1),e("div",{staticClass:"d-flex justify-center flex-column"},[t._v("+"+t._s(s.m_Pluses[a]))])],1):t._e()})),0)],1)})),e("div",{staticClass:"pl-4"})],2)],1)},o=[],l={name:"EventBonus",props:["id"],computed:{characters:function(){var t=this;return this.$db.EventQuestDropExt.filter((function(s){return s.m_EventType==t.id&&s.m_CharaID%10==0}))}}},u=l,m=e("2877"),v=e("6544"),d=e.n(v),p=e("8212"),y=e("adda"),h=Object(m["a"])(u,c,o,!1,null,null,null),_=h.exports;d()(h,{VAvatar:p["a"],VImg:y["a"]});var f={name:"QuestLibrary",props:["id"],components:{Quest:n["a"],ItemCategory:r["a"],EventBonus:_},data:function(){return{show:!1}},computed:{questLibrary:function(){return this.$db.QuestLibraryList[this.id]},event:function(){return 1==this.questLibrary.category&&this.$db.Events[this.id]||{}},eventBonus:function(){var t=this;return this.$db.EventQuestDropExt.filter((function(s){return s.m_EventType==t.id})).length}}},b=f,q=e("8336"),C=e("ce7e"),x=e("0789"),$=e("132d"),g=e("da13"),L=e("1800"),I=e("5d23"),w=Object(m["a"])(b,i,a,!1,null,null,null);s["default"]=w.exports;d()(w,{VBtn:q["a"],VDivider:C["a"],VExpandTransition:x["a"],VIcon:$["a"],VImg:y["a"],VListItem:g["a"],VListItemAction:L["a"],VListItemTitle:I["d"]})},c437:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("v-list-item",{attrs:{to:"/quest/"+t.id}},[t.character?e("v-list-item-avatar",{staticClass:"mx-auto mr-2 mr-md-4",attrs:{size:t.$size()}},[e("CharaIcon",{attrs:{id:t.quest.section,size:t.$size()}})],1):e("v-list-item-avatar",{staticClass:"mx-auto mr-2 mr-md-4",attrs:{color:"primary",size:t.$size(32)}},[e("span",{staticClass:"white--text"},[t._v(t._s(t.quest.section))])]),e("v-list-item-content",{staticClass:"mr-auto ml-0"},[e("v-list-item-title",[t.quest.name?e("span",[t._v(t._s(t.quest.name))]):e("span",[t._v(t._s(t.$t("Quest"))+" "+t._s(t.id))]),t.quest.stamina&&-1!=t.quest.stamina?e("div",{staticClass:"float-right"},[e("v-avatar",{attrs:{size:t.$size()/2.5,tile:""}},[e("v-img",{attrs:{src:t.$asset.commonuiatlas.format("StaminaIcon")+".png",contain:""}})],1),e("small",[t._v(" "+t._s(t.quest.stamina))])],1):t._e(),t.quest.exId2&&-1!=t.quest.exId2?e("div",{staticClass:"float-right"},[e("v-avatar",{attrs:{size:t.$size()/2.5}},[e("v-img",{attrs:{src:t.$asset.itemicon.format(t.quest.exId2)+".jpg"}})],1),1!=t.quest.ex2Amount?e("small",[t._v(" "+t._s(t.quest.ex2Amount))]):t._e()],1):t._e()]),e("v-list-item-subtitle",{staticClass:"d-flex align-center pt-2"},[e("span",{staticClass:"hidden-xs-only pr-2"},[t._v(t._s(t.$t("Enemies")))]),e("div",{staticClass:"d-flex flex-row",attrs:{icon:t.$size(32)}},t._l(t.quest.enemyResourceIDs,(function(s){return e("div",{key:"questlibrary-quest-enemy-"+s,staticClass:"mr-2"},[e("v-avatar",{attrs:{size:t.$size(32)}},[e("v-img",{attrs:{src:t.$asset.ordericon.format(s)+".jpg"}})],1)],1)})),0)]),t.quest.items.length?e("v-list-item-subtitle",{staticClass:"d-flex align-center pt-2"},[e("span",{staticClass:"hidden-xs-only pr-2"},[t._v(t._s(t.$t("Drops")))]),e("div",{staticClass:"d-flex flex-row flex-wrap",attrs:{icon:t.$size(32)}},t._l(t.itemOrder,(function(s,i){return e("div",{key:"questlibrary-quest-item-"+i,staticClass:"mr-2 d-flex"},[e("v-avatar",{staticClass:"mr-1",attrs:{size:t.$size(32)}},[e("v-img",{attrs:{src:t.$asset.itemicon.format(t.items[i])+".jpg"}})],1),e("div",{staticClass:"d-flex justify-center flex-column"},[e("div",{staticClass:"caption",staticStyle:{"line-height":"1rem"},domProps:{innerHTML:t._s(t.amounts[i])}})])],1)})),0)]):t._e()],1)],1)},a=[],r=(e("99af"),e("c975"),e("d81d"),e("fb6a"),e("4e827"),e("b680"),e("acd8"),{name:"Quest",props:["id"],computed:{quest:function(){return this.$db.QuestList[this.id]},character:function(){return this.$db.CharacterList[this.quest.section]},itemOrder:function(){var t=this;return this.quest.itemIDs.slice().sort((function(s,e){return t.$db.ItemList[e].type-t.$db.ItemList[s].type})).map((function(s){return t.quest.itemIDs.indexOf(s)}))},items:function(){var t=this;return this.itemOrder.map((function(s){return t.quest.itemIDs[s]}))},amounts:function(){var t=this;return this.itemOrder.map((function(s){return["".concat(t.quest.itemNums[s]),"".concat(t.quest.itemNums[s]," +<br>").concat(t.quest.itemGroups[s]," B"),"".concat(parseFloat((t.quest.itemNums[s]/t.quest.itemGroups[s]).toFixed(2)),"×").concat(t.quest.itemGroups[s]),"(".concat(parseFloat((t.quest.itemNums[s]/t.quest.itemGroups[s]).toFixed(2)),"+B)<br>×").concat(t.quest.itemGroups[s])][t.isEventBonus(t.quest.itemIDs[s])+2*t.$s.questDropsGrouped]}))}},methods:{isEventBonus:function(t){return this.$db.ItemList[t].isEventBonus}}}),n=r,c=e("2877"),o=e("6544"),l=e.n(o),u=e("8212"),m=e("adda"),v=e("da13"),d=e("8270"),p=e("5d23"),y=Object(c["a"])(n,i,a,!1,null,null,null);s["a"]=y.exports;l()(y,{VAvatar:u["a"],VImg:m["a"],VListItem:v["a"],VListItemAvatar:d["a"],VListItemContent:p["b"],VListItemSubtitle:p["c"],VListItemTitle:p["d"]})},fe68:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("p",{staticClass:"px-4 title primary--text"},[t._v(t._s(t.name))]),e("Scroller",{attrs:{icon:t.$size(64)}},[t._l(t.items,(function(s){return e("div",{key:"items-item-"+s.m_ID,staticClass:"ml-4",style:{width:t.$size(64)+"px"}},[e("router-link",{attrs:{to:"/item/"+s.m_ID}},[e("v-avatar",{attrs:{size:t.$size(64)}},[e("v-img",{attrs:{src:t.$asset.itemicon.format(s.m_ID)+".jpg"}})],1),e("div",{staticClass:"caption text-center two-lines"},[t._v(t._s(t.$name(s.m_Name)))])],1)],1)})),e("div",{staticClass:"pl-4"})],2),t.items.length?t._e():e("KeyValue",{staticClass:"px-4",attrs:{k:t.$t("No Item")}})],1)},a=[],r=(e("4de4"),{name:"Category",props:{id:{},questLibrary:Boolean},computed:{items:function(){var t=this;return this.$db.ItemListArray.filter((function(s){return s.category==t.id}))},name:function(){return this.questLibrary?this.$t("Items"):10==Math.floor(this.id/100)?this.$t("Item Category Event").format({event:this.$name(this.$db.ADVLibraryList[this.id].m_ListName)}):this.$t("Item Category.".concat(this.id))}}}),n=r,c=e("2877"),o=e("6544"),l=e.n(o),u=e("8212"),m=e("adda"),v=Object(c["a"])(n,i,a,!1,null,null,null);s["a"]=v.exports;l()(v,{VAvatar:u["a"],VImg:m["a"]})}}]);
//# sourceMappingURL=chunk-2abf2613.c6110205.js.map