(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{111:function(e,t,a){e.exports=a.p+"static/media/Logo.7839023b.png"},139:function(e,t,a){},247:function(e,t,a){},250:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),l=a(45),c=a.n(l),r=(a(313),a(83)),i=a(84),o=a(214),m=a(85),d=a(215),u=a(249),h=a(450),g=a(251),p=a(434),f=a(448),E=a(228),b=a(452),y=a(435),k=a(90),v=a.n(k),N=a(110),S=(a(139),a(440)),w=a(439),j=a(111),x=a.n(j),I=a(6),R=a(95),C=a(442),L=a(164),O=a(444),D=a(443),A=a(449),F=a(445),P=a(60),B=a(451),_=a(42),U=a.n(_),M=a(281),H=a.n(M),T=(a(335),s.a.createElement(P.a,{style:{fontSize:72},spin:!0})),z=s.a.createElement(P.a,{style:{fontSize:24},spin:!0}),W=C.a.Dragger,G=L.a.Option,J=O.a.Meta,Y=new Map([["On Hold","yellow"],["Pending Licensor Review","yellow"],["Pending Admin Review","yellow"],["Rejected By Licensor","red"],["Rejected By Admin","red"],["Final Rejected By Admin","red"],["Approved By Admin With Changes","green"],["Approved By Licensor With Changes","green"],["Approved By Admin","green"],["Approved By Licensor","green"]]),q=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={designs:null,clients:null,treeData:null,image:null,files:null,FILEBASE64URI:null,imageName:"",category:"",title:"",clientID:"",desc:"",is_expedited:!1,pageNum:1,uploading:!1},a.onPost=a.onPost.bind(Object(R.a)(Object(R.a)(a))),a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(N.a)(v.a.mark(function e(){var t,a,n,s=this;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t={method:"get",url:"https://thehangloosehutbackend.herokuapp.com/designs",headers:{}},U()(t).then(function(e){s.setState({designs:e.data.designs.data})}).catch(function(e){u.a.error({message:"".concat(e),placement:"bottomRight"})}),a={method:"get",url:"https://thehangloosehutbackend.herokuapp.com/clients"},U()(a).then(function(e){console.log(e),s.setState({clients:e.data.clients.data})}).catch(function(e){u.a.error({message:"test ".concat(e),placement:"bottomRight"})}),n={method:"get",url:"https://thehangloosehutbackend.herokuapp.com/categories"},U()(n).then(function(e){var t=[];e.data.categories.map(function(e){t.push({title:e[0],value:H()(),children:e[1],selectable:!1})}),s.setState({treeData:t})}).catch(function(e){u.a.error({message:"".concat(e),placement:"bottomRight"})});case 6:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"onPost",value:function(){var e=this;if(""===this.state.imageName&&!this.state.title||""===this.state.category||""===this.state.clientID||""===this.state.desc||null===this.state.image||0!=this.state.uploading)u.a.error({message:"Complete the form",placement:"bottomRight"}),this.setState({uploading:!1});else{this.setState({uploading:!0});var t={method:"post",url:"https://thehangloosehutbackend.herokuapp.com/designs/",data:{title:0===this.state.title.length?this.state.imageName.substring(0,this.state.imageName.lastIndexOf(".")):this.state.title,product_category_id:Number(this.state.category),image:this.state.image,image_filename:this.state.imageName.substring(0,this.state.imageName.lastIndexOf(".")),description:this.state.desc.substring(this.state.desc.lastIndexOf("/")+1),primary_client_id:this.state.clientID,is_expedited:this.state.is_expedited}};U()(t).then(function(t){var a={method:"post",url:"https://thehangloosehutbackend.herokuapp.com/tagreview?taskid=".concat(e.state.desc.substring(e.state.desc.lastIndexOf("/")+1)),headers:{}};U()(a).then(function(t){var a={method:"get",url:"https://thehangloosehutbackend.herokuapp.com/gettask?taskid=".concat(e.state.desc.substring(e.state.desc.lastIndexOf("/")+1)),headers:{}};U()(a).then(function(t){e.setState({ParentID:t.data.task.data.parent.gid});var a={method:"get",url:"https://thehangloosehutbackend.herokuapp.com/getsubtask?taskid=".concat(t.data.task.data.parent.gid),headers:{}};U()(a).then(function(t){var a=!0;Promise.all(t.data.subtasks.data.map(function(e){return U.a.get("https://thehangloosehutbackend.herokuapp.com/gettask?taskid=".concat(e.gid))})).then(function(t){if(t.map(function(e){0===e.data.task.data.tags.length?a=!1:"1202253595593946"!==e.data.task.data.tags[0].gid&&(a=!1)}),!0===a){var n={method:"post",url:"https://thehangloosehutbackend.herokuapp.com/movetask?taskid=".concat(e.state.ParentID,"&sectionid=1202204681516966"),headers:{}};U()(n).then(function(t){u.a.success({message:"Successfully uploaded design to affinity",description:"Moved asana task",placement:"bottomRight"}),e.setState({uploading:!1,category:"",title:"",clientID:"",desc:"",is_expedited:!1,files:null,imageName:"",FILEBASE64URI:null,image:null});U()({method:"get",url:"https://thehangloosehutbackend.herokuapp.com/designs",headers:{}}).then(function(t){e.setState({designs:t.data.designs.data})}).catch(function(e){u.a.error({message:"".concat(e),placement:"bottomRight"})})}).catch(function(e){u.a.error({message:"".concat(e),placement:"bottomRight"})})}else{u.a.success({message:"Successfully uploaded design to affinity",placement:"bottomRight"}),e.setState({uploading:!1,category:"",title:"",clientID:"",desc:"",is_expedited:!1,files:null,imageName:"",FILEBASE64URI:null,image:null});U()({method:"get",url:"https://thehangloosehutbackend.herokuapp.com/designs",headers:{}}).then(function(t){e.setState({designs:t.data.designs.data})}).catch(function(e){u.a.error({message:"".concat(e),placement:"bottomRight"})})}})}).catch(function(e){u.a.error({message:"".concat(e),placement:"bottomRight"})})}).catch(function(e){u.a.error({message:"".concat(e),placement:"bottomRight"})})}).catch(function(e){u.a.error({message:"".concat(e),placement:"bottomRight"})})}).catch(function(e){u.a.error({message:"".concat(e),placement:"bottomRight"})})}}},{key:"render",value:function(){var e=this,t={name:"file",multiple:!1,fileList:[],onRemove:function(t){e.setState({fileList:null,FILEBASE64URI:null,image:null})},beforeUpload:function(t){var a=new FileReader;return a.readAsDataURL(t),a.onload=function(){var n={name:t.name,type:t.type,size:Math.round(t.size/1e3)+" kB",base64:a.result,file:t};e.setState({files:t,imageName:n.name,FILEBASE64URI:n.base64,image:n.base64.slice(23)})},!1}};return s.a.createElement("div",{className:"upload mt3 mb3"},s.a.createElement(g.a,{justify:"centre",className:"dashboard-designs-header w-100 pr3 pl3"},s.a.createElement(p.a,{lg:3,className:"f4"},"Upload Design"),s.a.createElement(p.a,{lg:21})),s.a.createElement(w.a,null),s.a.createElement(g.a,{justify:"center",gutter:16,className:"mb3"},s.a.createElement(p.a,{lg:11},s.a.createElement(W,t,this.state.FILEBASE64URI&&s.a.createElement("img",{src:this.state.FILEBASE64URI,width:"500px"}),s.a.createElement("p",{className:"ant-upload-drag-icon"},s.a.createElement(B.a,null)),s.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),s.a.createElement("p",{className:"ant-upload-hint"},"Supported files: jpg and jpeg only"))),s.a.createElement(p.a,{lg:11},s.a.createElement("div",{className:"pb1 pa2 f5 b"},"Title"),s.a.createElement(f.a,{className:"",placeholder:0===this.state.imageName.length?"Enter design title":this.state.imageName.substring(0,this.state.imageName.lastIndexOf(".")),onChange:function(t){return e.setState({title:t.target.value})},value:this.state.title}),s.a.createElement("div",{className:"pb1 pa2 f5 b"},"Description"),s.a.createElement(f.a,{className:"",placeholder:"Enter design description",onChange:function(t){return e.setState({desc:t.target.value})},value:this.state.desc}),s.a.createElement("div",{className:"pb1 pa2 f5 b"},"Primary Licensor"),s.a.createElement(L.a,{defaultOpen:"",onChange:function(t){e.setState({clientID:t})},className:"w-100",placeholder:"Select province",value:this.state.clientID},this.state.clients?this.state.clients.map(function(e,t){return s.a.createElement(G,{key:t,value:e.id},e.name)}):s.a.createElement(G,{value:0},s.a.createElement(g.a,{className:"w-100",justify:"center"},s.a.createElement(p.a,{lg:2},s.a.createElement(S.a,{indicator:T,className:""}))))),s.a.createElement("div",{className:"pb1 pa2 f5 b"},"Category"),s.a.createElement(D.a,{style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:this.state.treeData,placeholder:"Select Category",onChange:function(t){e.setState({category:t})},value:this.state.category}),s.a.createElement("div",{className:"pb1 pa2 f5 b"},"Expedite"),s.a.createElement(A.a.Group,{className:"tc",onChange:function(t){e.setState({is_expedited:t.target.value})},value:this.state.is_expedited},s.a.createElement(A.a,{value:!0},"Yes"),s.a.createElement(A.a,{value:!1},"No")))),s.a.createElement(g.a,{justify:"center mb3 pt3"},!1===this.state.uploading?s.a.createElement(E.a,{className:"",style:{minWidth:"32px"},type:"primary",onClick:function(){e.onPost()}},"Upload to Affinity"):s.a.createElement(E.a,{className:"",style:{minWidth:"32px"},type:"primary",onClick:function(){e.onPost()}},s.a.createElement(S.a,{indicator:z,className:"dashboard-designs-spin"}))),s.a.createElement(g.a,{className:"dashboard-designs w-100 ma3"},s.a.createElement(g.a,{justify:"centre",className:"dashboard-designs-header w-100 pr3 pl3"},s.a.createElement(p.a,{lg:5,className:"f4"},"Past Designs"),s.a.createElement(p.a,{lg:19})),s.a.createElement(w.a,null),null==this.state.designs?s.a.createElement(g.a,{className:"w-100 mb3",justify:"center"},s.a.createElement(p.a,{lg:2},s.a.createElement(S.a,{indicator:T,className:""}))):s.a.createElement(s.a.Fragment,null,s.a.createElement(g.a,{justify:"center",gutter:16,className:"w-100"},this.state.designs.slice(4*(this.state.pageNum-1),4*this.state.pageNum).map(function(e,t){return s.a.createElement(p.a,{key:t,lg:6},s.a.createElement(O.a,{hoverable:!0,className:"dashboard-designs-card",cover:s.a.createElement(g.a,{justify:"center",align:"middle",className:"dashboard-designs-card-image-wrapper"},s.a.createElement(p.a,{className:"pa2"},s.a.createElement("img",{alt:"example",className:"dashboard-designs-card-image",src:e.iterations[0].image.urls.or})))},s.a.createElement(J,{title:s.a.createElement(g.a,{justify:"center"},s.a.createElement(p.a,{span:8},e.title?e.title.length>15?e.title.slice(0,14)+"...":e.title:""),s.a.createElement(p.a,{span:12,offset:4},e.primary_client?e.primary_client.name.length>15?e.primary_client.name.slice(0,14)+"...":e.primary_client.name:"")),description:s.a.createElement("span",{className:Y.get(e.phase.name)},e.phase.name)})))})),s.a.createElement(g.a,{className:"w-100 pt3",justify:"center"},s.a.createElement(p.a,{lg:7},s.a.createElement(F.a,{pageSize:4,total:this.state.designs.length,onChange:function(t){return e.setState({pageNum:t})}}))))))}}]),t}(n.Component),K=a(446),Q=a(453),V=h.a.Content,X=h.a.Footer,Z=s.a.createElement(P.a,{style:{fontSize:72},spin:!0}),$=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={designs:null,taskData:[],Fetched:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(N.a)(v.a.mark(function e(){var t,a,n=this;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=[],a={method:"get",url:"https://thehangloosehutbackend.herokuapp.com/fetchtasks?gid=1202204681516973",headers:{}},U()(a).then(function(e){t.push({x:Math.round(e.data.tasks.data.length,0),y:Math.round(e.data.tasks.data.length,0)});U()({method:"get",url:"https://thehangloosehutbackend.herokuapp.com/fetchtasks?gid=1202204681516966",headers:{}}).then(function(e){t.push({x:Math.round(e.data.tasks.data.length,0),y:Math.round(e.data.tasks.data.length,0)});U()({method:"get",url:"https://thehangloosehutbackend.herokuapp.com/fetchtasks?gid=1202204681516958",headers:{}}).then(function(e){t.push({x:Math.round(e.data.tasks.data.length,0),y:Math.round(e.data.tasks.data.length,0)}),n.setState({Fetched:!0})}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)})}).catch(function(e){console.log(e)}),this.setState({taskData:t});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return s.a.createElement(h.a,{className:"content-background"},s.a.createElement(g.a,{className:"header",align:"center"},s.a.createElement(p.a,null,s.a.createElement("img",{alt:"TheHangLooseHut",className:"header-logo",src:x.a}))),s.a.createElement(g.a,{style:{minHeight:"85vh"},gutter:16},s.a.createElement(p.a,{lg:6},this.state.Fetched?s.a.createElement("div",{className:"asana ma3"},s.a.createElement(g.a,null,s.a.createElement(p.a,{className:"f4"},"Asana Logistics",s.a.createElement(w.a,null))),s.a.createElement(g.a,null,s.a.createElement(p.a,null,s.a.createElement(K.a,{data:this.state.taskData,animate:{duration:2e3},colorScale:["#76473C","#3C763D","#3C4776"],style:{data:{stroke:"black",strokeWidth:.2}}}))),s.a.createElement(g.a,null,s.a.createElement(p.a,null,s.a.createElement(Q.a,{x:125,y:50,title:"Legend",centerTitle:!0,orientation:"vertical",gutter:20,style:{border:{stroke:"black"},title:{fontSize:20}},data:[{name:"Customer Review",symbol:{fill:"#76473C"}},{name:"Approved From Affinity",symbol:{fill:"#3C763D"}},{name:"Uploaded to Affinity",symbol:{fill:"#3C4776"}}]})))):s.a.createElement(g.a,{className:"w-100 ma3",justify:"center"},s.a.createElement(p.a,{lg:2},s.a.createElement(S.a,{indicator:Z,className:""})))),s.a.createElement(p.a,{lg:18},s.a.createElement(V,{style:{padding:"0px 0px 0px 16px"}},s.a.createElement(I.c,null,s.a.createElement(I.a,{exact:!0,path:"/TheHangLooseHut/",element:s.a.createElement(q,null)}))))),s.a.createElement(X,{className:"footer",style:{textAlign:"center"}},"\xa9 THE HANG LOOSE HUT 2022"))}}]),t}(n.Component),ee=(a(247),function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,s=new Array(n),l=0;l<n;l++)s[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={loginState:"LoggedIn",username:"",password:""},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"Login",value:function(){var e=this,t={method:"get",url:"https://thehangloosehutbackend.herokuapp.com/login?id=".concat(this.state.username,"&pwd=").concat(this.state.password)};""!==this.state.password&&""!==this.state.username?U()(t).then(function(t){!0===t.data?e.setState({loginState:"LoggedIn"}):u.a.error({message:"Incorrect username or Password",placement:"bottomRight"})}).catch(function(e){console.log(e)}):u.a.error({message:"Enter Username and Password",placement:"bottomRight"})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",null,"LoggedIn"===this.state.loginState?s.a.createElement(h.a,{className:"site-layout"},s.a.createElement($,null)):s.a.createElement("div",{className:"login-page"},s.a.createElement(g.a,{className:"header",align:"center"},s.a.createElement(p.a,null,s.a.createElement("img",{alt:"TheHangLooseHut",className:"header-logo",src:x.a}))),s.a.createElement(g.a,{className:"login-box",justify:"bottom",align:"center"},s.a.createElement(p.a,{className:"f3 login-form"},s.a.createElement(f.a,{className:"",placeholder:"Enter Username",onChange:function(t){return e.setState({username:t.target.value})}}),s.a.createElement(f.a.Password,{placeholder:"Enter Password",iconRender:function(e){return e?s.a.createElement(b.a,null):s.a.createElement(y.a,null)},onChange:function(t){return e.setState({password:t.target.value})}}),s.a.createElement(g.a,{justify:"middle",align:"center",className:"mt3"},s.a.createElement(E.a,{className:"",type:"primary",onClick:function(){e.Login()}},"Login"))))))}}]),t}(n.Component)),te=a(227),ae=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,441)).then(function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,l=t.getLCP,c=t.getTTFB;a(e),n(e),s(e),l(e),c(e)})};c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(te.a,null,s.a.createElement(ee,null))),document.getElementById("root")),ae()},308:function(e,t,a){e.exports=a(250)},335:function(e,t,a){}},[[308,3,2]]]);
//# sourceMappingURL=main.46eceec7.chunk.js.map