(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f1c197a"],{"48e3":function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("4de4"),core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_filter__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("c975"),core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es_array_index_of__WEBPACK_IMPORTED_MODULE_1__),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("d81d"),core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_2__),core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("fb6a"),core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("a434"),core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es_array_splice__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("b0c0"),core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_5__),core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("d3b7"),core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_6__),core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("4d63"),core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_7__),core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("25f0"),core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_8__),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("5319"),core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_9__),core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("498a"),core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(core_js_modules_es_string_trim__WEBPACK_IMPORTED_MODULE_10__),_components_Skill_parser__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("eb1a"),_Weapon__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("1715");__webpack_exports__["a"]={name:"Weapons",components:{Weapon:_Weapon__WEBPACK_IMPORTED_MODULE_12__["a"]},data:function(){return{show:20,input:""}},computed:{_weaponList:function(){return this.$db.WeaponListArray.filter((function(_){return 0==_.m_EvolvedCount&&!_.default}))},weaponList:function weaponList(){var _this=this,weaponList=this._weaponList.filter((function(weapon){try{var character=-1==weapon.m_EquipableCharaID?{}:_this.$db.CharacterList[weapon.m_EquipableCharaID-weapon.m_EquipableCharaID%10],named=void 0==character.m_NamedType?{}:_this.$db.NamedList[character.m_NamedType];return(!_this.query.name||!_this.query.name.length||_this.query.name.map((function(_){return RegExp(_.replace(/\s/g,""),"i")})).some((function(_){return[character.m_Name,_this.$name(character.m_Name),named.m_ResouceBaseName,named.m_NickName,named.m_FullName,named.fullName,_this.$name(named.fullName),weapon.m_WeaponName,_this.$name(weapon.m_WeaponName)].some((function(e){return _.test(e&&e.replace(/\s/g,""))}))})))&&(!_this.query.title||!_this.query.title.length||_this.query.title.some((function(_){return _this.$db.NamedList[character.m_NamedType].m_TitleType==_})))&&(!_this.query.rare||!_this.query.rare.length||_this.query.rare.some((function(_){return weapon.m_Rare==_})))&&(!_this.query.class||!_this.query.class.length||_this.query.class.some((function(_){return weapon.m_ClassType==_})))&&(!_this.query.evolution||!_this.query.evolution.length||_this.query.evolution.some((function(_){return weapon.maxEvolution==_})))&&(!_this.query.skill||!_this.query.skill.length||_this.query.skill.some((function(skillEval){return[weapon.m_SkillID,_this.$db.WeaponList[weapon.m_ID+weapon.maxEvolution].m_SkillID].filter((function(_){return _&&-1!=_})).some((function(skillID){return _this.$db.SkillContentList_WPN[skillID].m_Datas.some((function(data){var amount=_components_Skill_parser__WEBPACK_IMPORTED_MODULE_11__["a"].amount,amounts=_components_Skill_parser__WEBPACK_IMPORTED_MODULE_11__["a"].amounts,isTargetAll=_components_Skill_parser__WEBPACK_IMPORTED_MODULE_11__["a"].isTargetAll;return eval(skillEval,data,amount,amounts,isTargetAll)}))}))})))&&(!_this.query.eval||!_this.query.eval.length||_this.query.eval.some((function(e){return eval(e)})))}catch(e){return console.log(e),!1}}));return weaponList},disabled:function(){return"Weapons"!=this.$route.name||this.show>=this.weaponList.length},query:function(){var _={};for(var e in this.$route.query)Array.isArray(this.$route.query[e])?_[e]=this.$route.query[e].slice():_[e]=[this.$route.query[e]];return _},rares:function(){return[2,3,4]},classes:function(){return["ClassIconFighter","ClassIconMagician","ClassIconPriest","ClassIconKnight","ClassIconAlchemist"]}},methods:{enter:function(){if(0!=this.input.trim().length){var _=this.input.indexOf("=");if(-1!=_){var e=this.input.slice(0,_).trim(),t=this.input.slice(_+1).trim();this.q(e,t)}else{var s="name",i=this.input.trim();this.q(s,i)}this.input=""}},q:function(_,e){var t=e.toString(),s=this.query;if(s[_]){var i=s[_].indexOf(t);-1!=i?s[_].splice(i,1):s[_].push(t)}else s[_]=[t];this.$router.replace({query:s})},load:function(){this.show+=10}},watch:{weaponList:function(){this.show=20}}}},"73e5":function(_,e,t){"use strict";t.r(e);var s=function(){var _=this,e=_.$createElement,t=_._self._c||e;return t("div",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:_.load,expression:"load"}],attrs:{"infinite-scroll-disabled":"disabled","infinite-scroll-distance":"128"}},[t("p",{staticClass:"display px-4 primary--text"},[_._v(_._s(_.$t("Weapons"))+" ("+_._s(_.weaponList.length)+")")]),t("div",{staticClass:"px-4 mb-2"},[Object.values(_.query).flat().length?t("v-chip",{staticClass:"float-right",on:{click:function(e){return _.$router.push({query:{}})}}},[t("v-icon",[_._v("mdi-delete")])],1):_._e(),0==Object.values(_.query).flat().length?t("v-chip",{key:"weapons-query-empty",staticClass:"mb-2 mr-2"},[_._v(_._s(_.$t("All")))]):_._e(),_._l(_.query,(function(e,s){return[_._l(e,(function(e){return[t("v-chip",{key:"weapons-query-"+s+"-"+e,staticClass:"mb-2 mr-2",on:{click:function(t){_.input=s+" = "+e}}},[t("span",{staticClass:"pr-1 d-block",staticStyle:{"max-width":"256px",overflow:"hidden"}},[_.$s.advancedFilter?[t("span",{staticClass:"primary--text",staticStyle:{"font-weight":"550"}},[_._v(_._s(s)+" = ")]),t("span",[_._v(_._s(e))])]:"rare"==s?[t("span",[_._v(_._s(_.$t("Rares."+e)))])]:"class"==s?[t("span",[_._v(_._s(_.$t("Classes."+e)))])]:"element"==s?[t("span",[_._v(_._s(_.$t("Elements."+e)))])]:"title"==s?[t("span",[_._v(_._s(_.$name(_.$db.TitleList[e].m_DisplayName)))])]:"skill"==s?[t("span",{staticClass:"primary--text",staticStyle:{"font-weight":"550"}},[_._v("skill")])]:"name"==s?[t("span",[_._v(_._s(e))])]:[t("span",{staticClass:"primary--text",staticStyle:{"font-weight":"550"}},[_._v(_._s(s)+" = ")]),t("span",[_._v(_._s(e))])]],2),t("v-icon",{attrs:{small:""},on:{click:function(t){return _.q(s,e)}}},[_._v("mdi-close")])],1)]}))]}))],2),t("v-divider"),t("v-row",{staticClass:"my-2",attrs:{"no-gutters":""}},[t("v-col",{attrs:{cols:"12",lg:"6"}},[t("v-list-item",{attrs:{dense:""}},[t("v-list-item-content",[t("v-list-item-title",[_._v(_._s(_.$t("Rare")))])],1),t("v-list-item-action",{staticClass:"ma-0 d-flex flex-row align-center"},_._l(_.rares,(function(e){return t("v-chip",{key:"weapons-filters-rare-"+e,staticClass:"ml-1",on:{click:function(t){return _.q("rare",e)}}},[_._v(_._s(_.$t("Rares."+e)))])})),1)],1),t("v-list-item",{attrs:{dense:""}},[t("v-list-item-content",[t("v-list-item-title",[_._v(_._s(_.$t("Class")))])],1),t("v-list-item-action",{staticClass:"ma-0 d-flex flex-row align-center"},_._l(_.classes,(function(e,s){return t("v-avatar",{key:"weapons-filters-class-"+s,staticClass:"ml-1",attrs:{size:"32"}},[t("v-img",{attrs:{src:_.$asset.commonuiatlas.format(e)+".png"},on:{click:function(e){return _.q("class",s)}}})],1)})),1)],1),t("v-list-item",{attrs:{dense:""}},[t("v-list-item-content",[t("v-list-item-title",[_._v(_._s(_.$t("Evolution")))])],1),t("v-list-item-action",{staticClass:"ma-0 d-flex flex-row align-center"},[t("v-chip",{staticClass:"ml-1",on:{click:function(e){return _.q("evolution",0)}}},[_._v("0")]),t("v-chip",{staticClass:"ml-1",on:{click:function(e){return _.q("evolution",3)}}},[_._v("3")]),t("v-chip",{staticClass:"ml-1",on:{click:function(e){return _.q("evolution",4)}}},[_._v("4")])],1)],1)],1),t("v-col",{attrs:{cols:"12",lg:"6"}},[t("v-menu",{attrs:{"offset-x":"","max-width":"256"},scopedSlots:_._u([{key:"activator",fn:function(e){var s=e.on;return[t("v-list-item",_._g({attrs:{dense:""}},s),[t("v-list-item-content",[t("v-list-item-title",[_._v(_._s(_.$t("Title")))])],1),t("v-list-item-action",{staticClass:"ma-0"},[t("v-icon",[_._v("mdi-chevron-right")])],1)],1)]}}])},[t("v-list",{staticClass:"overflow-y-auto",attrs:{dense:"","max-height":"calc(100vh - 24px)"}},_._l(_.$db.TitleListArray,(function(e){return t("v-list-item",{key:"weapons-filter-title-"+e.m_TitleType,on:{click:function(t){return _.q("title",e.m_TitleType)}}},[t("v-list-item-content",[t("v-list-item-title",[_._v(_._s(_.$name(e.m_DisplayName)))])],1)],1)})),1)],1),t("v-dialog",{attrs:{"max-width":"512"},scopedSlots:_._u([{key:"activator",fn:function(e){var s=e.on;return[t("v-list-item",_._g({attrs:{dense:""}},s),[t("v-list-item-content",[t("v-list-item-title",[_._v(_._s(_.$t("Skill")))])],1),t("v-list-item-action",{staticClass:"ma-0"},[t("v-icon",[_._v("mdi-dots-horizontal")])],1)],1)]}}])},[t("SkillSelector",{attrs:{push:function(e){return _.q("skill",e)}}})],1),t("v-list-item",{attrs:{dense:""},on:{click:function(_){}}},[t("v-list-item-content",[t("v-list-item-title",[_._v(_._s(_.$t("Passive Skill")))])],1),t("v-list-item-action",{staticClass:"ma-0"},[t("v-icon",[_._v("mdi-dots-horizontal")])],1)],1)],1)],1),t("v-text-field",{staticClass:"px-4",attrs:{dense:"",placeholder:_.$t("Input.Filter")},on:{keydown:function(e){return!e.type.indexOf("key")&&_._k(e.keyCode,"enter",13,e.key,"Enter")?null:_.enter(e)}},model:{value:_.input,callback:function(e){_.input=e},expression:"input"}}),_._l(_.weaponList.slice(0,_.show),(function(e,s){return[_.$ad(s)?[t("v-divider"),t("Ad",{key:"weapons-ad-"+s})]:_._e(),t("v-divider"),t("Weapon",{key:"weapons-weapon-"+e.m_ID,attrs:{id:e.m_ID}})]}))],2)},i=[],a=t("48e3"),r=a["a"],n=t("2877"),l=t("6544"),o=t.n(l),c=t("8212"),u=t("cc20"),m=t("62ad"),p=t("169a"),d=t("ce7e"),v=t("132d"),E=t("adda"),f=t("8860"),h=t("da13"),D=t("1800"),y=t("5d23"),w=t("e449"),O=t("0fd9"),P=t("8654"),C=Object(n["a"])(r,s,i,!1,null,null,null);e["default"]=C.exports;o()(C,{VAvatar:c["a"],VChip:u["a"],VCol:m["a"],VDialog:p["a"],VDivider:d["a"],VIcon:v["a"],VImg:E["a"],VList:f["a"],VListItem:h["a"],VListItemAction:D["a"],VListItemContent:y["b"],VListItemTitle:y["d"],VMenu:w["a"],VRow:O["a"],VTextField:P["a"]})}}]);
//# sourceMappingURL=chunk-9f1c197a.cd3577e9.js.map