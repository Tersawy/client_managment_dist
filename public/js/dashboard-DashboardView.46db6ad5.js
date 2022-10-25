"use strict";(self["webpackChunkclient_management"]=self["webpackChunkclient_management"]||[]).push([[74],{485:function(t,s,e){e.d(s,{Z:function(){return u}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"activity d-flex align-items-center",attrs:{id:t._id,role:"button"}},[s("b-avatar",{style:{backgroundColor:t.icon.bgColor,color:t.icon.color||"#fff"},attrs:{size:"2.5rem"}},[t.activity.action?[s(t.icon.component,t._b({tag:"component"},"component",t.icon.props,!1))]:t._e()],2),s("div",{staticClass:"activity-content ml-2 fs-"},[t._v(" "+t._s(t.title)+" "),t.$isAdmin?s("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.by))]):t._e()]),s("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip"}],staticClass:"text-gray ml-auto fs-sm",attrs:{role:"button",title:t.tooltipDate}},[t._v(t._s(t.date))]),s("b-popover",{attrs:{target:t._id,triggers:["hover","click"],placement:"top"},on:{show:t.popoverShown}},[t.isLoading||!t.isFieldLoaded?s("b-spinner",{staticClass:"mx-1",attrs:{small:"",variant:"primary"}}):t._e(),t.isFieldLoaded?[t.isClient?s("b-row",{attrs:{cols:"2","no-gutters":""}},[s("b-col",{staticClass:"pl-2 py-2"},[t._v("Full name")]),s("b-col",{staticClass:"py-2"},[t._v(t._s(t.field.full_name))]),s("b-col",{staticClass:"bg-light pl-2 py-2"},[t._v("Email")]),s("b-col",{staticClass:"bg-light py-2"},[s("a",{attrs:{href:`mailto:${t.field.email}`,target:"_blank"}},[t._v(t._s(t.field.email))])]),s("b-col",{staticClass:"pl-2 py-2"},[t._v("Hardware ID")]),s("b-col",{staticClass:"py-2"},[t._v(t._s(t.field.hwID))]),s("b-col",{staticClass:"bg-light pl-2 py-2"},[t._v("Max threads")]),s("b-col",{staticClass:"bg-light py-2"},[t._v(t._s(t.field.max_threads))]),s("b-col",{staticClass:"pl-2 py-2"},[t._v("Created at")]),s("b-col",{staticClass:"py-2"},[t._v(t._s(t.$timeAgo.format(new Date(t.field.created_at))))])],1):s("b-row",{attrs:{cols:"2","no-gutters":""}},[s("b-col",{staticClass:"pl-2 py-2"},[t._v("Full name")]),s("b-col",{staticClass:"py-2"},[t._v(t._s(t.field.first_name)+" "+t._s(t.field.last_name))]),s("b-col",{staticClass:"bg-light pl-2 py-2"},[t._v("Username")]),s("b-col",{staticClass:"bg-light py-2"},[t._v(t._s(t.field.username))]),s("b-col",{staticClass:"pl-2 py-2"},[t._v("Email")]),s("b-col",{staticClass:"py-2"},[s("a",{attrs:{href:`mailto:${t.field.email}`,target:"_blank"}},[t._v(t._s(t.field.email))])]),s("b-col",{staticClass:"bg-light pl-2 py-2"},[t._v("Created at")]),s("b-col",{staticClass:"bg-light py-2"},[t._v(t._s(t.$timeAgo.format(new Date(t.field.created_at))))])],1)]:t._e()],2)],1)},i=[],l=e(5130),n=e(8752),r={props:{activity:{type:Object,required:!0}},components:{BAvatar:l.SH,BIconPlus:n.s3j,BIconPencilFill:n.Ybx,BIconTrash:n.DkS,BIconCheck2:n._$q,BIconX:n.uR$},data(){return{actions:{create:{component:n.s3j,bgColor:"#0fbcf9",props:{scale:2}},update:{component:n.Ybx,bgColor:"#04b161",props:{}},delete:{component:n.DkS,bgColor:"#f53b57",props:{scale:1.3}},activate:{component:n._$q,bgColor:"#2980b9",props:{scale:1.5}},deactivate:{component:n.uR$,bgColor:"#ffd32a",color:"#333",props:{scale:1.7}}},isLoading:!0}},computed:{_id(){return"activity_"+this._uid},icon(){return this.actions[this.activity.action]||{}},title(){let{model:t,action:s}=this.activity;return t=t&&t.charAt(0).toUpperCase()+t.slice(1),this.$isAdmin?`${t} has been ${s}d by`:`${t} has been ${s}d`},by(){let t=this.activity.created_by,s=this.$me.id==t?.id?"me":`${t.first_name}  ${t.last_name}`;return s},date(){return this.$timeAgo.format(new Date(this.activity.created_at))},tooltipDate(){return new Date(this.activity.created_at).toLocaleString()},isClient(){return"client"==this.activity.model},isFieldLoaded(){return"object"===typeof this.field&&Object.keys(this.field).length>0},field(){return this.activity.field_id}},methods:{async popoverShown(){if(!this.isFieldLoaded){this.isLoading=!0;try{await this.$store.dispatch("getLogField",this.activity)}catch(t){console.log(t)}finally{this.isLoading=!1}}}}},o=r,c=e(1001),d=(0,c.Z)(o,a,i,!1,null,null,null),u=d.exports},436:function(t,s,e){e.d(s,{Z:function(){return h}});var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"dashboard_content"},[s("base-container",{staticClass:"pt-4"},[s("b-breadcrumb",{staticClass:"bg-white border rounded shadow-sm font-weight-600 mb-4"},[s("b-breadcrumb-item",{staticClass:"d-flex align-items-center",attrs:{to:{name:"dashboard"},active:!t._breads.length}},[s("IconDashboard",{staticClass:"mr-1",staticStyle:{width:"22px"}}),t._v(" Dashboard ")],1),t._l(t._breads,(function(e,a){return s("b-breadcrumb-item",{key:a,attrs:{active:a==t._breads.length-1}},[e.component?s(e.icon,{tag:"component",class:e.class||"",style:e.style||""}):t._e(),t._v(" "+t._s(t._f("capitalize")(e.title))+" ")],1)}))],2),t.noWrap?t._t("default"):s("div",{staticClass:"bg-white px-3 py-4 rounded shadow-sm"},[t._t("default")],2)],2)],1)},i=[],l=function(){var t=this,s=t._self._c;return s("div",{staticClass:"base_container"},[t._t("default")],2)},n=[],r={},o=r,c=e(1001),d=(0,c.Z)(o,l,n,!1,null,"4dea56fd",null),u=d.exports,p=e(5301),b={components:{BaseContainer:u,IconDashboard:p.Z},props:{breads:{type:Array,default:()=>[]},noWrap:{type:Boolean,default:!1}},computed:{_breads(){if(this.breads.length>0)return this.breads;let t=this.$route.name;if("dashboard"==t)return[];let s=t.split(".");return s.length<=1?[]:[{title:s[1]}]}}},_=b,m=(0,c.Z)(_,a,i,!1,null,null,null),h=m.exports},9683:function(t,s,e){e.r(s),e.d(s,{default:function(){return g}});var a=function(){var t=this,s=t._self._c;return s("dashboard-content",{attrs:{noWrap:""}},[s("b-row",{attrs:{"align-h":"center"}},[s("b-col",{staticClass:"mb-4",attrs:{cols:"12",sm:"4"}},[s("card-stats",{attrs:{title:"Clients",number:t.clientsCount},scopedSlots:t._u([{key:"icon",fn:function(){return[s("IconClients")]},proxy:!0}])})],1),t.$isAdmin?s("b-col",{staticClass:"mb-4",attrs:{cols:"12",sm:"4"}},[s("card-stats",{attrs:{title:"Users",number:t.usersCount},scopedSlots:t._u([{key:"icon",fn:function(){return[s("IconUsers")]},proxy:!0}],null,!1,631656522)})],1):t._e(),s("b-col",{staticClass:"mb-4",attrs:{cols:"12",sm:"4"}},[s("card-stats",{attrs:{title:"Inactive Clients",number:t.clientsInactiveCount,"number-variant":"danger"},scopedSlots:t._u([{key:"icon",fn:function(){return[s("IconClients")]},proxy:!0}])})],1),s("b-col",{staticClass:"mb-4",attrs:{md:"7",lg:"8"}},[s("b-card",{attrs:{"header-class":"py-2 font-weight-bold",header:"Recent Activities"}},t._l(t.logs,(function(t,e){return s("Activity",{key:e,staticClass:"border-bottom py-3",attrs:{activity:t}})})),1)],1),s("b-col",{staticClass:"mb-3",attrs:{md:"5",lg:"4"}},[s("b-card",{attrs:{"header-class":"py-2 font-weight-bold",header:"Recent Clients","body-class":"p-0"}},[s("b-table",{staticClass:"mb-0",attrs:{fields:t.fields,items:t.clients,"per-page":15,"current-page":t.currentPage,hover:"",borderless:"",responsive:"","thead-class":"text-nowrap border-bottom fs-md text-muted","tbody-tr-class":"border-bottom fs-md text-muted"}})],1)],1)],1)],1)},i=[],l=e(436),n=e(6852),r=e(9497),o=function(){var t=this,s=t._self._c;return s("div",{staticClass:"stats_card"},[s("h2",{staticClass:"stats_card_title"},[t.$slots.icon?s("div",{staticClass:"stats_card_title_icon"},[t._t("icon")],2):t._e(),s("div",{staticClass:"stats_card_title_text"},[t._v(t._s(t.title))])]),s("div",{class:`stats_card_number text-${t.numberVariant}`},[t._v(t._s(t.number))])])},c=[],d={props:{title:{type:String,default:""},number:{type:Number,default:0},numberVariant:{type:String,default:"primary"}}},u=d,p=e(1001),b=(0,p.Z)(u,o,c,!1,null,null,null),_=b.exports,m=e(485),h={name:"DashboardView",components:{DashboardContent:l.Z,IconClients:n.Z,IconUsers:r.Z,CardStats:_,Activity:m.Z},data(){return{fields:[{key:"full_name",tdClass:"pl-3",thClass:"pl-3"},{key:"email"}],currentPage:1,clientsCount:0,usersCount:0,clientsInactiveCount:0}},mounted(){this.$store.dispatch("getClients","?type=count").then((t=>this.clientsCount=t.count)),this.$isAdmin&&this.$store.dispatch("getUsers","?type=count").then((t=>this.usersCount=t.count)),this.$store.dispatch("getClients","?type=inactive-count").then((t=>this.clientsInactiveCount=t.count)),this.$store.dispatch("getClients","?per_page=10"),this.$store.dispatch("getLogs","?per_page=8")},computed:{clients(){return this.$store.state.dashboard.clients.results},logs(){return this.$store.state.dashboard.logs.results}}},f=h,v=(0,p.Z)(f,a,i,!1,null,null,null),g=v.exports}}]);