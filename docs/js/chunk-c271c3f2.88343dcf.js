(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c271c3f2"],{1664:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return t.adv?e("div",[e("p",{staticClass:"display px-4 primary--text"},[t._v(t._s(t.adv.m_Title))]),-1!=t.adv.m_LibraryID?[e("p",{staticClass:"px-4 primary--text"},[t.adv.m_ScriptTextName?[e("span",[t._v(t._s(t.$t("Section").format(parseInt(t.adv.m_ScriptTextName.slice(-2)))))]),e("span",[t._v(" — ")])]:t._e(),e("span",[t._v(t._s(t.$name(t.$db.ADVLibraryList[t.adv.m_LibraryID].m_ListName)))])],2),e("div",{staticClass:"px-4 mb-4"},[e("div",{staticClass:"float-right"},[e("v-btn",{attrs:{icon:"",disabled:!t.scenarios[t.index+1]},on:{click:function(a){return t.$router.replace("/scenario/"+t.scenarios[t.index+1].m_AdvID)}}},[e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("div",[e("v-btn",{attrs:{icon:"",disabled:!t.scenarios[t.index-1]},on:{click:function(a){return t.$router.replace("/scenario/"+t.scenarios[t.index-1].m_AdvID)}}},[e("v-icon",[t._v("mdi-chevron-left")])],1)],1)])]:t._e(),e("v-divider"),t.adv.m_ScriptTextName?t.loading?e("div",{staticClass:"py-4 text-center"},[e("v-progress-circular",{attrs:{indeterminate:"",color:"primary"}})],1):[t._l(t.text,(function(t){return e("div",{key:"scenario-text-"+t.m_id},[e("Item",{attrs:{item:t}})],1)})),e("v-divider"),e("Ad",{key:"scenario-ad-"+t.id}),-1!=t.adv.m_LibraryID?[e("v-divider",{staticClass:"mb-4"}),e("div",{staticClass:"px-4"},[e("div",{staticClass:"float-right"},[e("v-btn",{attrs:{icon:"",disabled:!t.scenarios[t.index+1]},on:{click:function(a){return t.$router.replace("/scenario/"+t.scenarios[t.index+1].m_AdvID)}}},[e("v-icon",[t._v("mdi-chevron-right")])],1)],1),e("div",[e("v-btn",{attrs:{icon:"",disabled:!t.scenarios[t.index-1]},on:{click:function(a){return t.$router.replace("/scenario/"+t.scenarios[t.index-1].m_AdvID)}}},[e("v-icon",[t._v("mdi-chevron-left")])],1)],1)])]:t._e()]:e("div",{staticClass:"pa-4"},[e("KeyValue",{attrs:{k:t.$t("No Scenario")}})],1)],2):e("div",{staticClass:"pa-4"},[e("KeyValue",{attrs:{k:t.$t("No Scenario")}})],1)},r=[],s=(e("4de4"),e("a434"),e("b0c0"),e("e25e"),e("5319"),e("498a"),e("bc3a")),n=e.n(s),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-list-item",[t.character?e("v-list-item-avatar",{staticClass:"mx-auto mr-2 mr-md-4",attrs:{size:t.$size(),tile:""},on:{click:function(a){return t.$router.push("/standpic/"+t.character.m_ResourceBaseName)}}},[0==t.character.m_Datas[0].m_FaceReferenceImageType&&-1!=t.character.m_Datas[0].m_FacePattern?e("v-img",{attrs:{src:t.$asset.standpic.format(t.base,t.base+"_face_0_default")+".png"}}):0==t.character.m_Datas[0].m_FaceReferenceImageType&&-1==t.character.m_Datas[0].m_FacePattern?e("div",{style:t.style("standpic_0")}):1==t.character.m_Datas[0].m_FaceReferenceImageType?e("div",{style:t.style("face_0_default")}):t._e()],1):e("v-list-item-avatar",{staticClass:"mx-auto mr-2 mr-md-4",attrs:{size:t.$size(),tile:""}}),e("v-list-item-content",{staticClass:"mr-auto ml-0",staticStyle:{"max-width":"384px"}},[e("v-list-item-subtitle",{staticClass:"primary--text",domProps:{innerHTML:t._s(t.name)}}),e("div",{style:{"line-height":1.5,"font-size":t.$vuetify.breakpoint.xsOnly?"70%":null},domProps:{innerHTML:t._s(t.text)}})],1)],1)},o=[],m=(e("99af"),e("c975"),e("1276"),{name:"Item",props:["item"],computed:{id:function(){return this.item.m_charaName.split("$")[1]||this.item.m_charaName},character:function(){return this.$db.ADVCharacterList[this.id]},name:function(){return-1==this.item.m_charaName.indexOf("$")?this.character?this.character.m_DisplayName:this.item.m_charaName:this.item.m_charaName.split("$")[0]},position:function(){var t=this.character.m_Datas[0].m_FaceX,a=this.character.m_Datas[0].m_FaceY,e=this.$size()*this.scale/2;return"".concat(e-t,"px ").concat(e-a,"px")},scale:function(){return 200/this.$size()},base:function(){return this.character.m_ResourceBaseName.toLowerCase()},text:function(){return this.item.m_text.replace(/\n/g,"<br>").replace(/<color=(.*?)>(.*?)<\/color>/g,(function(t,a,e){return'<span style="color: '.concat(a,'">').concat(e,"</span>")}))}},methods:{style:function(t){return{"min-height":"".concat(this.$size()*this.scale,"px"),"min-width":"".concat(this.$size()*this.scale,"px"),transform:"scale(".concat(1/this.scale,")"),"background-image":"url(".concat(this.$asset.standpic.format(this.base,"".concat(this.base,"_").concat(t)),".png)"),"background-position":this.position}}}}),d=m,l=e("2877"),h=e("6544"),u=e.n(h),v=e("adda"),p=e("da13"),_=e("8270"),f=e("5d23"),x=Object(l["a"])(d,c,o,!1,null,null,null),b=x.exports;u()(x,{VImg:v["a"],VListItem:p["a"],VListItemAvatar:_["a"],VListItemContent:f["b"],VListItemSubtitle:f["c"]});var y={name:"Scenario",props:["id"],components:{Item:b},data:function(){return{loading:0,text:null}},computed:{adv:function(){return this.$db.ADVList[this.id]},categories:function(){return{1:{name:"story",path:"Story"},2:{name:"event",path:"Event"},3:{name:"chara",path:"CharaEvent"},4:{name:"chara",path:"CrossEvent"},5:{name:"weapon",path:"WeaponEvent"},6:{name:"other",path:"Other"},7:{name:"writer",path:"Writer"}}},scenarios:function(){for(var t=this,a=-1==this.adv.m_LibraryID?[]:this.$db.ADVListArray.filter((function(a){return a.m_LibraryID==t.adv.m_LibraryID})),e=0;e<a.length;e++)e>0&&a[e].m_ScriptTextName&&a[e].m_ScriptTextName==a[e-1].m_ScriptTextName&&(a[e-1].m_Title=a[e-1].m_Title.replace("（イントロ）","").replace("イントロ","").trim(),a.splice(e,1),e-=1);return a},index:function(){for(var t in this.scenarios)if(this.scenarios[t].m_AdvID==this.id)return parseInt(t)}},methods:{load:function(){var t=this;if(this.adv&&this.adv.m_ScriptTextName){this.loading+=1;var a=this.loading;n.a.get(this.$asset.advscript.format(this.categories[this.adv.m_Category].name,this.categories[this.adv.m_Category].path,this.adv.m_ScriptTextName)+".json").then((function(e){a==t.loading&&(t.text=e.data,t.loading=0)}))}}},watch:{id:function(){this.load()}},mounted:function(){this.load()}},g=y,$=(e("dd45"),e("8336")),I=e("ce7e"),D=e("132d"),C=e("490a"),L=Object(l["a"])(g,i,r,!1,null,"3cc0d38f",null);a["default"]=L.exports;u()(L,{VBtn:$["a"],VDivider:I["a"],VIcon:D["a"],VProgressCircular:C["a"]})},9119:function(t,a,e){},dd45:function(t,a,e){"use strict";var i=e("9119"),r=e.n(i);r.a}}]);
//# sourceMappingURL=chunk-c271c3f2.88343dcf.js.map