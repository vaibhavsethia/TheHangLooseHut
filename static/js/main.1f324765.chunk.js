(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{166:function(e,t,a){e.exports=a.p+"static/media/Logo.7839023b.png"},236:function(e,t,a){},238:function(e,t,a){},241:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(44),l=a.n(r),c=(a(315),a(317),a(53)),i=a(54),o=a(58),m=a(55),u=a(59),d=a(451),g=a(240),h=a(242),p=a(445),f=a(457),E=a(212),y=a(461),b=a(462),N=a(460),v=(a(319),a(11));var k=function(e){return function(t){var a=Object(v.f)();return s.a.createElement(e,Object.assign({},t,{navigate:a}))}}(function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.navigate;return s.a.createElement("div",{className:"sider-custom"},s.a.createElement(N.a,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline"},s.a.createElement(N.a.Item,{className:"sidebar-text",key:"1",icon:s.a.createElement(y.a,null),onClick:function(){return e("/")}},"Dashboard"),s.a.createElement(N.a.Item,{className:"sidebar-text",key:"2",icon:s.a.createElement(b.a,null),onClick:function(){return e("/upload")}},"Upload Design")))}}]),t}(n.Component)),j=(a(369),a(166)),w=a.n(j),O=a(64),S=a.n(O),C=a(89),I=a(52),L=a.n(I),x=a(455),A=a(449),D=a(450),F=a(456),_=a(458),R=a(464),B=a(68),U=(a(390),s.a.createElement(B.a,{style:{fontSize:72},spin:!0})),H=x.a.Meta,P=new Map([["On Hold","yellow"],["Pending Licensor Review","yellow"],["Pending Admin Review","yellow"],["Rejected By Licensor","red"],["Rejected By Admin","red"],["Final Rejected By Admin","red"],["Approved By Admin With Changes","green"],["Approved By Licensor With Changes","green"],["Approved By Admin","green"],["Approved By Licensor","green"]]),T=[{gid:"1201675561988415",name:"Untitled section",resource_type:"section"},{gid:"1202110923593137",name:"Order Form Inquiry",resource_type:"section"},{gid:"1201697191761872",name:"GENERAL",resource_type:"section"},{gid:"1201676388962279",name:"CHECK AFFINITY",resource_type:"section"},{gid:"1201681956608998",name:"Pending approval after affinity",resource_type:"section"},{gid:"1201713389856031",name:"FEEDBACK",resource_type:"section"},{gid:"1202204681516958",name:"Approved From Affinity",resource_type:"section"},{gid:"1202204681516963",name:"Rejected From Affinity",resource_type:"section"},{gid:"1202204681516966",name:"Uploaded to Affinity",resource_type:"section"},{gid:"1202204681516973",name:"Customer Review",resource_type:"section"}],z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={designs:null,pageNum:1,taskData:[]},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(C.a)(S.a.mark(function e(){var t,a,n=this;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t={method:"get",url:"https://thehangloosehutbackend.herokuapp.com/designs",headers:{}},L()(t).then(function(e){n.setState({designs:e.data.designs.data})}).catch(function(e){console.log(e)}),a=[],T.forEach(function(e){var t={method:"get",url:"https://thehangloosehutbackend.herokuapp.com/fetchtasks?gid=".concat(e.gid),headers:{}};L()(t).then(function(e){a.push({x:e.data.tasks.data.length,y:e.data.tasks.data.length})}).catch(function(e){console.log(e)})}),this.setState({taskData:a});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"dashboard mt3"},6!==this.state.taskData.length?s.a.createElement(h.a,{className:"w-100",justify:"center"},s.a.createElement(p.a,{lg:2},s.a.createElement(A.a,{indicator:U,className:"dashboard-designs-spin"}))):s.a.createElement(h.a,null,s.a.createElement(p.a,{lg:12},s.a.createElement(_.a,{data:this.state.taskData,animate:{duration:2e3},colorScale:["#262626","#454444","#636363","#737373","#878787","#999999"],style:{data:{stroke:"black",strokeWidth:.2}}})),s.a.createElement(p.a,{lg:12},s.a.createElement(R.a,{x:125,y:50,title:"Legend",centerTitle:!0,orientation:"vertical",gutter:20,style:{border:{stroke:"black"},title:{fontSize:20}},data:[{name:"Untitled section",symbol:{fill:"#262626"}},{name:"Order Form Inquiry",symbol:{fill:"#454444"}},{name:"GENERAL",symbol:{fill:"#636363"}},{name:"CHECK AFFINITY",symbol:{fill:"#737373"}},{name:"Pending approval after affinity",symbol:{fill:"#878787"}},{name:"FEEDBACK",symbol:{fill:"#999999"}}]}))),s.a.createElement(h.a,{className:"dashboard-designs w-100 mr3 mt3"},s.a.createElement(h.a,{justify:"centre",className:"dashboard-designs-header w-100 pr3 pl3"},s.a.createElement(p.a,{lg:5,className:""},"Past Designs"),s.a.createElement(p.a,{lg:19})),s.a.createElement(D.a,null),null==this.state.designs?s.a.createElement(h.a,{className:"w-100",justify:"center"},s.a.createElement(p.a,{lg:2},s.a.createElement(A.a,{indicator:U,className:"dashboard-designs-spin"}))):s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{justify:"center",gutter:16,className:"w-100"},this.state.designs.slice(4*(this.state.pageNum-1),4*this.state.pageNum).map(function(e,t){return s.a.createElement(p.a,{lg:6},s.a.createElement(x.a,{key:t,hoverable:!0,className:"dashboard-designs-card",cover:s.a.createElement(h.a,{justify:"center",align:"middle",className:"dashboard-designs-card-image-wrapper"},s.a.createElement(p.a,{className:"pa2"},s.a.createElement("img",{alt:"example",className:"dashboard-designs-card-image",src:e.iterations[0].image.urls.or})))},s.a.createElement(H,{title:s.a.createElement(h.a,{justify:"center"},s.a.createElement(p.a,{span:8},e.title?e.title.length>15?e.title.slice(0,14)+"...":e.title:""),s.a.createElement(p.a,{span:12,offset:4},e.primary_client?e.primary_client.name.length>15?e.primary_client.name.slice(0,14)+"...":e.primary_client.name:"")),description:s.a.createElement("span",{className:P.get(e.phase.name)},e.phase.name)})))})),s.a.createElement(h.a,{className:"w-100 pt3",justify:"center"},s.a.createElement(p.a,{lg:7},s.a.createElement(F.a,{pageSize:4,total:this.state.designs.length,onChange:function(t){return e.setState({pageNum:t})}}))))))}}]),t}(n.Component),M=a(453),K=a(207),G=a(454),W=a(463),Y=a(293),q=a.n(Y),J=(a(443),s.a.createElement(B.a,{style:{fontSize:72},spin:!0})),Q=M.a.Dragger,V=K.a.Option,X=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={clients:null,category:"",title:"",location:"",clientID:"",treeData:null,desc:"",image:null,imageName:"",mainLink:"",files:null,FILEBASE64URI:null},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(C.a)(S.a.mark(function e(){var t,a,n=this;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t={method:"get",url:"https://thehangloosehutbackend.herokuapp.com/clients"},L()(t).then(function(e){n.setState({clients:e.data.clients.data})}).catch(function(e){console.log(e)}),a={method:"get",url:"https://thehangloosehutbackend.herokuapp.com/categories"},L()(a).then(function(e){var t=[];e.data.categories.map(function(e){t.push({title:e[0],value:q()(),children:e[1],selectable:!1})}),n.setState({treeData:t})}).catch(function(e){console.log(e)});case 4:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}()},{key:"onPost",value:function(){var e=this;if(""!==this.state.imageName&&""!==this.state.category&&""!==this.state.clientID&&""!==this.state.desc&&null!==this.state.image){var t={method:"post",url:"https://thehangloosehutbackend.herokuapp.com/designs/",data:{title:0===this.state.title.length?this.state.imageName.substring(0,this.state.imageName.lastIndexOf(".")):this.state.title,product_category_id:Number(this.state.category),image:this.state.image,image_filename:this.state.imageName.substring(0,this.state.imageName.lastIndexOf(".")),description:this.state.desc.substring(this.state.desc.lastIndexOf("/")+1),primary_client_id:this.state.clientID,is_expedited:!0}};L()(t).then(function(t){if(t.error)g.a.error({message:"Design failed to upload.",placement:"bottomRight"});else{var a={method:"post",url:"https://thehangloosehutbackend.herokuapp.com/movetask?taskid=".concat(e.state.desc.substring(e.state.desc.lastIndexOf("/")+1),"&sectionid=","1202204681516966"),headers:{}};L()(a).then(function(t){g.a.success({message:"".concat(e.state.title," design uploaded successfully to Affinity."),placement:"bottomRight"})}).catch(function(e){console.log(e)})}}).catch(function(e){g.a.error({message:"".concat(e),placement:"bottomRight"}),console.log(e)})}else g.a.error({message:"Complete the form",placement:"bottomRight"})}},{key:"render",value:function(){var e=this,t=(this.state.files,{name:"file",multiple:!1,fileList:[],onRemove:function(t){e.setState(function(e){return{fileList:null,FILEBASE64URI:null,image:null}})},beforeUpload:function(t){var a=new FileReader;return a.readAsDataURL(t),a.onload=function(){var n={name:t.name,type:t.type,size:Math.round(t.size/1e3)+" kB",base64:a.result,file:t};e.setState(function(e){return{files:t,imageName:n.name,FILEBASE64URI:n.base64,image:n.base64.slice(23)}})},!1}});return s.a.createElement("div",{className:"upload mt3"},s.a.createElement(h.a,{justify:"centre",className:"dashboard-designs-header w-100 pr3 pl3"},s.a.createElement(p.a,{lg:3,className:""},"Upload Design"),s.a.createElement(p.a,{lg:21})),s.a.createElement(D.a,null),s.a.createElement(h.a,{justify:"center",gutter:16,className:"mb3"},s.a.createElement(p.a,{lg:11},s.a.createElement(Q,t,this.state.FILEBASE64URI&&s.a.createElement("img",{src:this.state.FILEBASE64URI,width:"500px"}),s.a.createElement("p",{className:"ant-upload-drag-icon"},s.a.createElement(W.a,null)),s.a.createElement("p",{className:"ant-upload-text"},"Click or drag file to this area to upload"),s.a.createElement("p",{className:"ant-upload-hint"},"Supported files: jpg, jpeg, png, pdf."))),s.a.createElement(p.a,{lg:11},s.a.createElement("div",{className:"pb1 pa2 f5 b"},"Title"),s.a.createElement(f.a,{className:"",placeholder:0===this.state.imageName.length?"Enter design title":this.state.imageName.substring(0,this.state.imageName.lastIndexOf(".")),onChange:function(t){return e.setState({title:t.target.value})}}),s.a.createElement("div",{className:"pb1 pa2 f5 b"},"Description"),s.a.createElement(f.a,{className:"",placeholder:"Enter design description",onChange:function(t){return e.setState({desc:t.target.value})}}),s.a.createElement("div",{className:"pb1 pa2 f5 b"},"Primary Licensor"),s.a.createElement(K.a,{defaultOpen:"",onChange:function(t){e.setState({clientID:t})},className:"w-100",placeholder:"Select province"},this.state.clients?this.state.clients.map(function(e,t){return s.a.createElement(V,{key:t,value:e.id},e.name)}):s.a.createElement(V,{value:0},s.a.createElement(h.a,{className:"w-100",justify:"center"},s.a.createElement(p.a,{lg:2},s.a.createElement(A.a,{indicator:J,className:"dashboard-designs-spin"}))))),s.a.createElement("div",{className:"pb1 pa2 f5 b"},"Category"),s.a.createElement(G.a,{style:{width:"100%"},dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:this.state.treeData,placeholder:"Select Category",onChange:function(t){e.setState({category:t})}}))),s.a.createElement(h.a,{justify:"center mb3 pt3"},s.a.createElement(E.a,{className:"",type:"primary",onClick:function(){e.onPost()}},"Upload to Affinity")))}}]),t}(n.Component),Z=(a(236),s.a.createElement(B.a,{style:{fontSize:72},spin:!0})),$=x.a.Meta,ee=f.a.Search,te=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={search:"",desigs:null,filter:"",pageNum:1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(C.a)(S.a.mark(function e(){var t,a=this;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t={method:"get",url:"https://thehangloosehutbackend.herokuapp.com/designs?page="+this.state.pageNum,body:{}},L()(t).then(function(e){a.setState({designs:e.data.designs.data})}).catch(function(e){console.log(e)});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"UpdateDesigns",value:function(){var e=Object(C.a)(S.a.mark(function e(t){var a,n=this;return S.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({designs:null}),a={method:"get",url:"https://thehangloosehutbackend.herokuapp.com/designs?page="+t,body:{}},L()(a).then(function(e){n.setState({designs:e.data.designs.data})}).catch(function(e){console.log(e)});case 3:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=null==this.state.designs?null:this.state.designs.filter(function(t){return t.title.toLowerCase().includes(e.state.search.toLowerCase())});return console.log(t),s.a.createElement("div",{className:"status mt3 mb3"},s.a.createElement(h.a,{justify:"centre",className:"dashboard-designs-header w-100 pr3 pl3"},s.a.createElement(p.a,{lg:3,className:""},"Past Designs"),s.a.createElement(p.a,{lg:17}),s.a.createElement(p.a,{lg:4},s.a.createElement(ee,{className:"dashboard-designs-search-button",placeholder:"input search text",onSearch:function(t){return e.setState({search:t})},enterButton:!0}))),s.a.createElement(D.a,null),null==t?s.a.createElement(h.a,{className:"w-100",justify:"center"},s.a.createElement(p.a,{lg:2},s.a.createElement(A.a,{indicator:Z,className:"dashboard-designs-spin"}))):0===t.length?s.a.createElement("div",{className:"tc w-100 dashboard-designs-oops"},s.a.createElement("p",{className:"f1 b"},"Oops !!!"),s.a.createElement("p",{className:"f2"},"Your search did not match any result")):s.a.createElement(s.a.Fragment,null,s.a.createElement(h.a,{justify:"center",gutter:16,className:"w-100"},t.map(function(e,t){return s.a.createElement(p.a,{className:"mt2 mb2",lg:4},s.a.createElement(x.a,{key:t,hoverable:!0,className:"status-designs-card",cover:s.a.createElement(h.a,{justify:"center",align:"middle",className:"status-designs-card-image-wrapper"},s.a.createElement(p.a,{className:"pa2"},s.a.createElement("img",{alt:"example",className:"status-designs-card-image",src:e.iterations[0].image.urls.or})))},s.a.createElement($,{title:s.a.createElement(h.a,{justify:"center"},s.a.createElement(p.a,{span:8},e.title),s.a.createElement(p.a,{span:12,offset:4},e.primary_client?e.primary_client.name.length>10?e.primary_client.name.slice(0,9)+"...":e.primary_client.name:"")),description:e.phase.name})))})),s.a.createElement(h.a,{className:"w-100 pt3",justify:"center"},s.a.createElement(p.a,{lg:8},s.a.createElement(F.a,{pageSize:30,total:2710,onChange:function(t){return e.UpdateDesigns(t)},showSizeChanger:!1})))))}}]),t}(n.Component),ae=d.a.Content,ne=d.a.Footer,se=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,{className:"content-background"},s.a.createElement(h.a,{className:"header",align:"center"},s.a.createElement(p.a,null,s.a.createElement("img",{alt:"TheHangLooseHut",className:"header-logo",src:w.a}))),s.a.createElement(ae,{style:{padding:"0 0px 0px 16px"}},s.a.createElement(v.c,null,s.a.createElement(v.a,{exact:!0,path:"/",element:s.a.createElement(z,null)}),s.a.createElement(v.a,{exact:!0,path:"/status",element:s.a.createElement(te,null)}),s.a.createElement(v.a,{exact:!0,path:"/upload",element:s.a.createElement(X,null)}))),s.a.createElement(ne,{className:"footer",style:{textAlign:"center"}},"\xa9 THE HANG LOOSE HUT 2022"))}}]),t}(n.Component),re=(a(238),d.a.Sider),le=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={collapsed:!1,loginState:"LoggedIn",username:"",password:""},a.onCollapse=function(e){a.setState({collapsed:e})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"Login",value:function(){var e=this,t={method:"get",url:"https://thehangloosehutbackend.herokuapp.com/login?id=".concat(this.state.username,"&pwd=").concat(this.state.password)};L()(t).then(function(t){!0===t.data?e.setState({loginState:"LoggedIn"}):g.a.error({message:"Incorrect username or Password",placement:"bottomRight"})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this,t=this.state.collapsed;return s.a.createElement("div",null,"LoggedIn"===this.state.loginState?s.a.createElement(d.a,{style:{minHeight:"100vh"}},s.a.createElement(re,{collapsible:!0,collapsed:t,onCollapse:this.onCollapse},s.a.createElement(k,null)),s.a.createElement(d.a,{className:"site-layout"},s.a.createElement(se,null))):s.a.createElement("div",{className:"login-page"},s.a.createElement(h.a,{className:"header",align:"center"},s.a.createElement(p.a,null,s.a.createElement("img",{alt:"TheHangLooseHut",className:"header-logo",src:w.a}))),s.a.createElement(h.a,{className:"login-box",justify:"bottom",align:"center"},s.a.createElement(p.a,{className:"f3 login-form"},s.a.createElement(f.a,{className:"",placeholder:"Enter username",onChange:function(t){return e.setState({username:t.target.value})}}),s.a.createElement(f.a,{className:"",placeholder:"Enter password",onChange:function(t){return e.setState({password:t.target.value})}}),s.a.createElement(h.a,{justify:"middle",align:"center",className:"mt3"},s.a.createElement(E.a,{className:"",type:"primary",onClick:function(){e.Login()}},"Login"))))))}}]),t}(n.Component),ce=a(113),ie=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,452)).then(function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),r(e),l(e)})};l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ce.a,null,s.a.createElement(le,null))),document.getElementById("root")),ie()},310:function(e,t,a){e.exports=a(241)},315:function(e,t,a){},319:function(e,t,a){},369:function(e,t,a){},390:function(e,t,a){},443:function(e,t,a){}},[[310,3,2]]]);
//# sourceMappingURL=main.1f324765.chunk.js.map