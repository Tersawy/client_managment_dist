"use strict";(self["webpackChunkclient_management"]=self["webpackChunkclient_management"]||[]).push([[252],{9499:function(e,t,s){s.r(t),s.d(t,{default:function(){return S}});var a=function(){var e=this,t=e._self._c;return t("dashboard-content",[t("div",{staticClass:"d-flex flex-wrap w-100 mb-3"},[e.$isAdmin?t("BaseDropdownSelect",{staticClass:"mb-3 mr-3",attrs:{options:e.$store.getters.userOptions,label:"Created By",bordered:""},model:{value:e.filters.created_by,callback:function(t){e.$set(e.filters,"created_by",t)},expression:"filters.created_by"}}):e._e(),e.$isAdmin?t("BaseDropdownSelect",{staticClass:"mr-3 mb-3",attrs:{options:e.$store.getters.userOptions,label:"Updated By",bordered:""},model:{value:e.filters.updated_by,callback:function(t){e.$set(e.filters,"updated_by",t)},expression:"filters.updated_by"}}):e._e(),t("BaseDropdownSelect",{staticClass:"mr-3 mb-3",attrs:{options:e.statusOptions,label:"Status",bordered:""},model:{value:e.filters.status,callback:function(t){e.$set(e.filters,"status",t)},expression:"filters.status"}}),t("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.ClientFormModal",modifiers:{ClientFormModal:!0}}],staticClass:"align-self-end ml-lg-auto text-nowrap mb-3",attrs:{variant:"primary"}},[e._v("Add Client")])],1),t("b-table",{attrs:{fields:e.fields,items:e.$store.state.dashboard.clients.results,"per-page":e.perPage,"current-page":1,hover:"",outlined:"",borderless:"",responsive:"",stacked:"md","head-variant":"light","thead-class":"text-nowrap","table-class":"mb-2","show-empty":"",busy:e.isLoading},scopedSlots:e._u([{key:"cell(#)",fn:function({index:t}){return[e._v(" "+e._s(t+1)+" ")]}},{key:"cell(created_at)",fn:function({value:s}){return[t("span",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip"}],attrs:{role:"button",title:new Date(s).toLocaleString()}},[e._v(e._s(e.$timeAgo.format(new Date(s))))])]}},{key:"cell(is_active)",fn:function({item:s}){return[t("b-form-checkbox",{attrs:{switch:""},on:{change:function(t){return e.changeStatus(t,s)}},model:{value:s.is_active,callback:function(t){e.$set(s,"is_active",t)},expression:"item.is_active"}})]}},{key:"cell(actions)",fn:function({item:s}){return[t("div",{staticClass:"d-flex align-items-center"},[t("a",{staticClass:"mr-3 text-success",attrs:{role:"button"},on:{click:function(t){return e.openEditModal(s)}}},[t("BIconPencilSquare",{attrs:{scale:"1.3"}})],1),t("a",{staticClass:"text-danger",attrs:{role:"button"},on:{click:function(t){return e.$refs.DeleteClientModal.open(s)}}},[t("BIconTrash",{attrs:{scale:"1.3"}})],1)])]}}])}),t("BasePagination",{attrs:{total:e.$store.state.dashboard.clients.count,perPage:e.perPage},model:{value:e.page,callback:function(t){e.page=t},expression:"page"}}),t("ClientFormModal"),t("DeleteModal",{ref:"DeleteClientModal",attrs:{field:"Client"},on:{ok:e.deleteClient}})],1)},i=[],r=(s(7658),s(436)),l=s(4749),n=s(581),o=s(1443),c=s(8752),d=function(){var e=this,t=e._self._c;return t("default-modal",{attrs:{id:"ClientFormModal",isBusy:e.isBusy,title:e.formTitle,stayOpen:e.modalSettings.stayOpen,showStayOpenBtn:e.modalSettings.showStayOpenBtn},on:{ok:e.handleSave,hidden:e.resetForm,show:e.show,"update:stayOpen":function(t){return e.$set(e.modalSettings,"stayOpen",t)},"update:stay-open":function(t){return e.$set(e.modalSettings,"stayOpen",t)}}},[t("div",{staticClass:"client-form py-3"},[t("b-form",{on:{submit:e.handleSave}},[t("b-row",{attrs:{cols:"1","cols-md":"2"}},[t("b-col",{staticClass:"mb-2"},[t("BaseInput",{attrs:{placeholder:"Full name",required:"",errorMsg:e.$clientErrorMsg("full_name")},model:{value:e.client.full_name,callback:function(t){e.$set(e.client,"full_name",t)},expression:"client.full_name"}})],1),t("b-col",{staticClass:"mb-2"},[t("BaseInput",{attrs:{type:"email",placeholder:"Email",required:"",errorMsg:e.$clientErrorMsg("email")},model:{value:e.client.email,callback:function(t){e.$set(e.client,"email",t)},expression:"client.email"}})],1),t("b-col",{staticClass:"mb-2"},[t("BaseInput",{attrs:{placeholder:"Hardware ID",required:"",errorMsg:e.$clientErrorMsg("hwID")},model:{value:e.client.hwID,callback:function(t){e.$set(e.client,"hwID",t)},expression:"client.hwID"}})],1),t("b-col",{staticClass:"mb-2"},[t("BaseInput",{attrs:{placeholder:"Max threads",required:"",errorMsg:e.$clientErrorMsg("max_threads")},model:{value:e.client.max_threads,callback:function(t){e.$set(e.client,"max_threads",t)},expression:"client.max_threads"}})],1),t("b-col",{staticClass:"mb-2"},[t("BaseInput",{attrs:{placeholder:"Max session",required:"",errorMsg:e.$clientErrorMsg("max_session")},model:{value:e.client.max_session,callback:function(t){e.$set(e.client,"max_session",t)},expression:"client.max_session"}})],1),t("b-col",{staticClass:"mb-2"},[t("BaseInput",{attrs:{placeholder:"Panel username",required:"",errorMsg:e.$clientErrorMsg("panel_username")},model:{value:e.client.panel_username,callback:function(t){e.$set(e.client,"panel_username",t)},expression:"client.panel_username"}})],1),t("b-col",{staticClass:"mb-2"},[t("BaseInput",{attrs:{placeholder:"Panel password",required:"",errorMsg:e.$clientErrorMsg("panel_password")},model:{value:e.client.panel_password,callback:function(t){e.$set(e.client,"panel_password",t)},expression:"client.panel_password"}})],1),t("b-col",{staticClass:"mb-2"},[t("BaseInput",{attrs:{placeholder:"Panel server ip",required:"",errorMsg:e.$clientErrorMsg("panel_server_ip")},model:{value:e.client.panel_server_ip,callback:function(t){e.$set(e.client,"panel_server_ip",t)},expression:"client.panel_server_ip"}})],1),t("b-col",{staticClass:"mb-2"},[t("BaseInput",{attrs:{placeholder:"User group",required:"",errorMsg:e.$clientErrorMsg("user_group")},model:{value:e.client.user_group,callback:function(t){e.$set(e.client,"user_group",t)},expression:"client.user_group"}})],1),t("b-col",{staticClass:"mb-2"},[t("BaseInput",{attrs:{placeholder:"Number of random to check",required:"",errorMsg:e.$clientErrorMsg("number_of_random_to_check")},model:{value:e.client.number_of_random_to_check,callback:function(t){e.$set(e.client,"number_of_random_to_check",t)},expression:"client.number_of_random_to_check"}})],1),e.$isAdmin?t("b-col",{staticClass:"mb-2"},[t("BaseDropdownSelect",{staticClass:"mr-3 mb-3 w-100 custom_select",attrs:{options:e.userOptions,bordered:""},model:{value:e.client.created_by,callback:function(t){e.$set(e.client,"created_by",t)},expression:"client.created_by"}})],1):e._e()],1),t("input",{attrs:{type:"submit",hidden:""}})],1)],1)])},u=[],p=s(6611),m=s(5008),h=s(3339),_=s(4951),b=s(5795),f=s(3822),g={components:{DefaultModal:p.Z,BIconEye:c.unT,BIconEyeSlash:c.qa2,BaseInput:m.Z,BaseDropdownSelect:l.Z},mixins:[_.oE,(0,h.Z)("client")],data:()=>({client:{full_name:"",email:"",hwID:"",max_threads:"",panel_username:"",panel_password:"",panel_server_ip:"",max_session:"",number_of_random_to_check:"",user_group:"",created_by:""},isBusy:!1,modalSettings:{stayOpen:!1,showStayOpenBtn:!0}}),validations:{client:{full_name:{required:b.C1,minLength:(0,b.Ei)(3),maxLength:(0,b.BS)(54)},hwID:{required:b.C1},max_threads:{required:b.C1},email:{required:b.C1,email:b.Do},panel_username:{required:b.C1},panel_password:{required:b.C1},panel_server_ip:{required:b.C1},max_session:{required:b.C1},number_of_random_to_check:{required:b.C1},user_group:{required:b.C1},created_by:{required:(0,b.CF)((function(){return this.$isAdmin}))}}},computed:{...(0,f.rn)({oldClient:e=>e.dashboard.clients.one}),isUpdate(){return!!this.oldClient.id},formTitle(){return this.isUpdate?"Edit Client":"Create Client"},userOptions(){let e=this.$store.state.dashboard.users.options;return[{name:"Select User",id:"",disabled:!0},...e]}},methods:{...(0,f.nv)(["createClient","updateClient"]),show(){if(this.isUpdate){for(let e in this.client)"password"!=e&&("created_by"!=e||"object"!==typeof this.oldClient.created_by?this.client[e]=this.oldClient[e]||"":this.client.created_by=this.oldClient.created_by.id);this.client.id=this.oldClient.id,this.modalSettings.showStayOpenBtn=!1}else this.resetForm(),this.modalSettings.showStayOpenBtn=!0;setTimeout((()=>{this.$refs?.inputName?.$children[0]?.$children[0]?.focus()}),300)},async handleSave(e){if(e.preventDefault(),this.$v.$touch(),!this.$v.client.$invalid){this.isBusy=!0;try{let e=this.isUpdate?this.updateClient:this.createClient;await e(this.client);let t=`Client has been ${this.isUpdate?"updated":"created"} successfully`;if(this.$fireMessage({message:t}),this.resetForm(),!this.modalSettings.showStayOpenBtn||!this.modalSettings.stayOpen)return this.$bvModal.hide("ClientFormModal");this.$refs?.inputName?.$children[0]?.$children[0]?.focus()}catch(t){this.$setClientErrors(t.errors)}finally{this.isBusy=!1}}},resetForm(){for(let e in this.client)this.client[e]="";this.$store.commit("SET_ONE_CLIENT",{}),this.$resetClientErrors(),this.$nextTick(this.$v.$reset)}}},C=g,y=s(1001),$=(0,y.Z)(C,d,u,!1,null,null,null),v=$.exports,w=s(6614),k={name:"ClientsView",components:{DashboardContent:r.Z,BaseDropdownSelect:l.Z,BaseCheckbox:n.Z,BIconPencilSquare:c.Sle,BIconTrash:c.DkS,BasePagination:o.Z,ClientFormModal:v,DeleteModal:w.Z},data(){return{statusOptions:[{name:"Any Status",id:""},{name:"Active",id:"active"},{name:"Not Active",id:"not_active"}],filters:{created_by:"",updated_by:"",status:""},perPage:10,page:1,isLoading:!1}},mounted(){this.getClients(),this.$isAdmin&&this.$store.dispatch("getUsers","?type=options").then((e=>this.$store.commit("SET_USER_OPTIONS",e)))},watch:{filters:{handler(){this.page=1,this.getClients()},deep:!0},perPage(){this.getClients()},page(){this.getClients()}},computed:{fields(){let e=[{key:"#",tdClass:"text-md-center",thClass:"text-md-center"},{key:"full_name"},{key:"email"},{key:"hwID",label:"Hardware ID"},{key:"max_threads",label:"Max threads",tdClass:"pl-md-4"},{key:"is_active"}];return this.$isAdmin&&e.push({key:"created_by.username",label:"Created by"}),e=[...e,{key:"created_at",formatter:e=>e&&new Date(e).toDateString()},{key:"actions"}],e}},methods:{getClients(){this.isLoading=!0;let e=`?per_page=${this.perPage}&page=${this.page}&status=${this.filters.status}&created_by=${this.filters.created_by}&updated_by=${this.filters.updated_by}`;return this.$store.dispatch("getClients",e).finally((()=>this.isLoading=!1))},openEditModal(e){this.$store.commit("SET_ONE_CLIENT",e),this.$nextTick((()=>{this.$bvModal.show("ClientFormModal")}))},async changeStatus(e,t){t.is_active=e;try{await this.$store.dispatch("changeClientStatus",t),this.$fireMessage()}catch(s){this.$fireMessage({type:"danger"})}},async deleteClient(e){try{this.$refs.DeleteClientModal.setBusy(!0),await this.$store.dispatch("deleteClient",e),this.$fireMessage({message:"Deleted Successfully"})}catch(t){this.$fireMessage({type:"danger"})}finally{this.$refs.DeleteClientModal.close()}}}},x=k,M=(0,y.Z)(x,a,i,!1,null,null,null),S=M.exports}}]);