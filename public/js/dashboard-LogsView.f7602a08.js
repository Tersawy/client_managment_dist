"use strict";(self["webpackChunkclient_management"]=self["webpackChunkclient_management"]||[]).push([[930],{3257:function(t,e,s){s.d(e,{Z:function(){return p}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"activity d-flex align-items-center",attrs:{id:t._id,role:"button"}},[e("b-avatar",{style:{backgroundColor:t.icon.bgColor,color:t.icon.color||"#fff"},attrs:{size:"2.5rem"}},[t.activity.action?[e(t.icon.component,t._b({tag:"component"},"component",t.icon.props,!1))]:t._e()],2),e("div",{staticClass:"activity-content ml-2 fs-"},[t._v(" "+t._s(t.title)+" "),t.$isAdmin?e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.by))]):t._e()]),e("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip"}],staticClass:"text-gray ml-auto fs-sm",attrs:{role:"button",title:t.tooltipDate}},[t._v(t._s(t.date))]),e("b-popover",{attrs:{target:t._id,triggers:["hover","click"],placement:"top"},on:{show:t.popoverShown}},[t.isLoading||!t.isFieldLoaded?e("b-spinner",{staticClass:"mx-1",attrs:{small:"",variant:"primary"}}):t._e(),t.isFieldLoaded?[t.isClient?e("b-row",{attrs:{cols:"2","no-gutters":""}},[e("b-col",{staticClass:"pl-2 py-2"},[t._v("Full name")]),e("b-col",{staticClass:"py-2"},[t._v(t._s(t.field.full_name))]),e("b-col",{staticClass:"bg-light pl-2 py-2"},[t._v("Email")]),e("b-col",{staticClass:"bg-light py-2"},[e("a",{attrs:{href:"mailto:client@mail.com"}},[t._v(t._s(t.field.email))])]),e("b-col",{staticClass:"pl-2 py-2"},[t._v("Hardware ID")]),e("b-col",{staticClass:"py-2"},[t._v(t._s(t.field.hwID))]),e("b-col",{staticClass:"bg-light pl-2 py-2"},[t._v("Max threads")]),e("b-col",{staticClass:"bg-light py-2"},[t._v(t._s(t.field.max_threads))]),e("b-col",{staticClass:"pl-2 py-2"},[t._v("Created at")]),e("b-col",{staticClass:"py-2"},[t._v(t._s(t.$timeAgo.format(new Date(t.field.created_at))))])],1):e("b-row",{attrs:{cols:"2","no-gutters":""}},[e("b-col",{staticClass:"pl-2 py-2"},[t._v("Full name")]),e("b-col",{staticClass:"py-2"},[t._v(t._s(t.field.first_name)+" "+t._s(t.field.last_name))]),e("b-col",{staticClass:"bg-light pl-2 py-2"},[t._v("Username")]),e("b-col",{staticClass:"bg-light py-2"},[t._v(t._s(t.field.username))]),e("b-col",{staticClass:"pl-2 py-2"},[t._v("Email")]),e("b-col",{staticClass:"py-2"},[e("a",{attrs:{href:"mailto:client@mail.com"}},[t._v(t._s(t.field.email))])]),e("b-col",{staticClass:"bg-light pl-2 py-2"},[t._v("Created at")]),e("b-col",{staticClass:"bg-light py-2"},[t._v(t._s(t.$timeAgo.format(new Date(t.field.created_at))))])],1)]:t._e()],2)],1)},i=[],o=s(5130),l=s(8752),n={props:{activity:{type:Object,required:!0}},components:{BAvatar:o.SH,BIconPlus:l.s3j,BIconPencilFill:l.Ybx,BIconTrash:l.DkS,BIconCheck2:l._$q,BIconX:l.uR$},data(){return{actions:{create:{component:l.s3j,bgColor:"#0fbcf9",props:{scale:2}},update:{component:l.Ybx,bgColor:"#04b161",props:{}},delete:{component:l.DkS,bgColor:"#f53b57",props:{scale:1.3}},activate:{component:l._$q,bgColor:"#2980b9",props:{scale:1.5}},deactivate:{component:l.uR$,bgColor:"#ffd32a",color:"#333",props:{scale:1.7}}},isLoading:!0}},computed:{_id(){return"activity_"+this._uid},icon(){return this.actions[this.activity.action]||{}},title(){let{model:t,action:e}=this.activity;return t=t&&t.charAt(0).toUpperCase()+t.slice(1),this.$isAdming?`${t} has been ${e}d by`:`${t} has been ${e}d`},by(){let t=this.activity.created_by,e=this.$me.id==t?.id?"me":`${t.first_name}  ${t.last_name}`;return e},date(){return this.$timeAgo.format(new Date(this.activity.created_at))},tooltipDate(){return new Date(this.activity.created_at).toLocaleString()},isClient(){return"client"==this.activity.model},isFieldLoaded(){return"object"===typeof this.field&&Object.keys(this.field).length>0},field(){return this.activity.field_id}},methods:{async popoverShown(){if(!this.isFieldLoaded){this.isLoading=!0;try{await this.$store.dispatch("getLogField",this.activity)}catch(t){console.log(t)}finally{this.isLoading=!1}}}}},r=n,c=s(1001),d=(0,c.Z)(r,a,i,!1,null,null,null),p=d.exports},1443:function(t,e,s){s.d(e,{Z:function(){return c}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"d-flex align-items-center justify-content-end"},[e("div",{staticClass:"mx-2 fs-sm"},[t._v(t._s(t.paginateFrom)+"-"+t._s(t.paginateTo)+" of "+t._s(t.total))]),e("b-pagination",{staticClass:"custom_pagination p-0",attrs:{"hide-goto-end-buttons":"","total-rows":t.total,"per-page":t.perPage},scopedSlots:t._u([{key:"prev-text",fn:function(){return[t._v(" < ")]},proxy:!0},{key:"next-text",fn:function(){return[t._v(" > ")]},proxy:!0}]),model:{value:t._value,callback:function(e){t._value=e},expression:"_value"}})],1)},i=[],o={props:{value:{type:Number,default:1},total:{type:Number,default:1},perPage:{type:Number,default:1}},computed:{_value:{get(){return this.value},set(t){this.$emit("input",t)}},paginateTo(){let t=this.value*this.perPage;return t>this.total&&(t=this.total),t},paginateFrom(){return(this.value-1)*this.perPage+1}}},l=o,n=s(1001),r=(0,n.Z)(l,a,i,!1,null,null,null),c=r.exports},4749:function(t,e,s){s.d(e,{Z:function(){return p}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dropdown_select_wrapper",class:{active:t.isFoucsed||t.isShown,required:t.required,is_invalid:!!t.errorMsg,bordered:t.bordered}},[e("div",{staticClass:"dropdown_select_control"},[t.label?e("div",{staticClass:"dropdown_select_label"},[t._v(t._s(t.label))]):t._e(),e("b-dropdown",{ref:"dropdown",staticClass:"dropdown_select",attrs:{block:"","toggle-class":"dropdown_select_btn d-flex justify-content-between align-items-center","menu-class":"w-100 p-0 shadow-lg border-0",variant:"text"},on:{shown:t.shown,hidden:t.hidden},scopedSlots:t._u([{key:"button-content",fn:function(){return[t._t("label",(function(){return[t.selectedOption?e("span",[t._v(t._s(t.selectedOption[t.fieldText]))]):t._e()]}))]},proxy:!0}],null,!0)},t._l(t.options,(function(s,a){return e("b-dropdown-item",{key:a,attrs:{disabled:s.disabled,"link-class":"px-3 py-2 "+(t.value==s[t.fieldValue]?"bg-light text-dark":"")},on:{click:function(e){return t.select(s)}}},[t._v(" "+t._s(s[t.fieldText])+" ")])})),1),t.errorMsg?e("div",{staticClass:"custom_input_error"},[t._v(t._s(t.errorMsg))]):t._e()],1)])},i=[],o=s(5327),l=s(1638),n={props:{label:{type:String},value:{type:[String,Number]},required:{type:Boolean,default:!1},options:{type:Array,default:()=>[]},errorMsg:{type:String,default:""},bordered:{type:Boolean,default:!1},fieldValue:{type:[String,Number],default:"id"},fieldText:{type:[String,Number],default:"name"}},components:{BDropdown:o.R,BDropdownItem:l.E},data(){return{isFoucsed:!1,isShown:!1}},mounted(){let t=this.$refs.dropdown?.$refs?.toggle;t&&(t.addEventListener("focus",(()=>{this.isFoucsed=!0})),t.addEventListener("blur",(()=>{this.isFoucsed=!1})))},computed:{val:{get(){return this.value},set(t){this.$emit("input",t)}},selectedOption(){return this.options.find((t=>t[this.fieldValue]==this.value))}},methods:{shown(){this.isShown=!0},hidden(){this.isShown=!1},select(t){this.val=t[this.fieldValue],this.$emit("change",t[this.fieldValue]),this.$emit("item-selected",t)}}},r=n,c=s(1001),d=(0,c.Z)(r,a,i,!1,null,null,null),p=d.exports},436:function(t,e,s){s.d(e,{Z:function(){return m}});var a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard_content"},[e("base-container",{staticClass:"pt-4"},[e("b-breadcrumb",{staticClass:"bg-white border rounded shadow-sm font-weight-600 mb-4"},[e("b-breadcrumb-item",{staticClass:"d-flex align-items-center",attrs:{to:{name:"dashboard"},active:!t._breads.length}},[e("IconDashboard",{staticClass:"mr-1",staticStyle:{width:"22px"}}),t._v(" Dashboard ")],1),t._l(t._breads,(function(s,a){return e("b-breadcrumb-item",{key:a,attrs:{active:a==t._breads.length-1}},[s.component?e(s.icon,{tag:"component",class:s.class||"",style:s.style||""}):t._e(),t._v(" "+t._s(t._f("capitalize")(s.title))+" ")],1)}))],2),t.noWrap?t._t("default"):e("div",{staticClass:"bg-white px-3 py-4 rounded shadow-sm"},[t._t("default")],2)],2)],1)},i=[],o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"base_container"},[t._t("default")],2)},l=[],n={},r=n,c=s(1001),d=(0,c.Z)(r,o,l,!1,null,"4dea56fd",null),p=d.exports,u=s(5301),b={components:{BaseContainer:p,IconDashboard:u.Z},props:{breads:{type:Array,default:()=>[]},noWrap:{type:Boolean,default:!1}},computed:{_breads(){if(this.breads.length>0)return this.breads;let t=this.$route.name;if("dashboard"==t)return[];let e=t.split(".");return e.length<=1?[]:[{title:e[1]}]}}},h=b,f=(0,c.Z)(h,a,i,!1,null,null,null),m=f.exports},1654:function(t,e,s){s.r(e),s.d(e,{default:function(){return b}});var a=function(){var t=this,e=t._self._c;return e("dashboard-content",[e("div",{staticClass:"d-flex align-items-center justify-content-xl-center flex-wrap w-100 mb-3"},[t.$isAdmin?e("BaseDropdownSelect",{staticClass:"mb-3 mr-3",attrs:{options:t.$store.getters.userOptions,label:"Created By",bordered:""},model:{value:t.filters.by,callback:function(e){t.$set(t.filters,"by",e)},expression:"filters.by"}}):t._e(),e("BaseDropdownSelect",{staticClass:"mr-3 mb-3",attrs:{options:t.$store.getters.clientOptions,label:"Client",bordered:""},model:{value:t.filters.client,callback:function(e){t.$set(t.filters,"client",e)},expression:"filters.client"}}),e("BaseDropdownSelect",{staticClass:"mr-3 mb-3",attrs:{options:t.actionOptions,label:"Action",bordered:""},model:{value:t.filters.action,callback:function(e){t.$set(t.filters,"action",e)},expression:"filters.action"}})],1),e("b-row",{staticClass:"mx-auto",staticStyle:{"max-width":"800px"}},[e("b-col",{staticClass:"border px-0",attrs:{cols:"12"}},[t._l(t.logs,(function(t,s){return e("Activity",{key:s,staticClass:"border-bottom py-2 px-3",attrs:{activity:t}})})),e("BasePagination",{attrs:{total:t.$store.state.dashboard.logs.count,perPage:t.perPage},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],2)],1)],1)},i=[],o=s(436),l=s(1443),n=s(4749),r=s(3257),c={name:"LogsView",components:{DashboardContent:o.Z,BaseDropdownSelect:n.Z,BasePagination:l.Z,Activity:r.Z},data(){return{filters:{by:"",action:"",client:""},perPage:10,page:1,actionOptions:[{name:"Any Action",id:""},{name:"Create",id:"create"},{name:"Update",id:"update"},{name:"Delete",id:"delete"},{name:"Activate",id:"activate"},{name:"Deactivate",id:"deactivate"}]}},mounted(){this.getLogs(),this.$store.dispatch("getClients","?type=options").then((t=>this.$store.commit("SET_CLIENT_OPTIONS",t))),this.$isAdmin&&this.$store.dispatch("getUsers","?type=options").then((t=>this.$store.commit("SET_USER_OPTIONS",t)))},watch:{filters:{handler(){this.page=1,this.getLogs()},deep:!0},page(){this.getLogs()}},computed:{logs(){return this.$store.state.dashboard.logs.results}},methods:{getLogs(){this.isLoading=!0;let t=`?per_page=${this.perPage}&page=${this.page}&action=${this.filters.action}&by=${this.filters.by}&client=${this.filters.client}`;return this.$store.dispatch("getLogs",t).finally((()=>this.isLoading=!1))}}},d=c,p=s(1001),u=(0,p.Z)(d,a,i,!1,null,null,null),b=u.exports}}]);