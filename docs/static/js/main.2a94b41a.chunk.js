(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(61)},61:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(27),l=a.n(c),i=a(3),r=a(4),o=a(6),m=a(5),u=a(7),d=a(66),h=a(63),p=a(62),b=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"has-text-centered"},s.a.createElement("h4",{className:"title is-4"},"Welcome to Assure!"),s.a.createElement(p.a,{to:"/user/new",className:"button is-primary is-rounded"},"I'm in need"),"\xa0\xa0",s.a.createElement(p.a,{to:"/donor/new",className:"button is-rounded"},"Let me help"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(p.a,{to:"/user",className:"button is-info is-rounded"},"Already signed up?"))}}]),t}(n.Component),g=a(1),f="http://localhost:3000",E=["food","clothes","furniture","appliances","electronics"],v=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.toggle,a=e.isActive,n=e.onChange,c=e.categories;return s.a.createElement("div",{className:"modal ".concat(a?"is-active":"")},s.a.createElement("div",{className:"modal-background"}),s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"box"},s.a.createElement("h5",{className:"title is-5"},"Categories"),E.map(function(e){return s.a.createElement("div",{className:"control",key:e},s.a.createElement("label",{className:"checkbox"},s.a.createElement("input",{name:e,type:"checkbox",checked:c.includes(e),onChange:n}),"\xa0",e.charAt(0).toUpperCase()+e.slice(1)))}))),s.a.createElement("button",{className:"modal-close is-large","aria-label":"close",onClick:t}))}}]),t}(n.Component),N=a(65),O=a(8),j=a.n(O),y=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={modalActive:!1,message:"",picIndex:0},a.nextImage=a.nextImage.bind(Object(g.a)(Object(g.a)(a))),a.toggleModal=a.toggleModal.bind(Object(g.a)(Object(g.a)(a))),a.onMessageChange=a.onMessageChange.bind(Object(g.a)(Object(g.a)(a))),a.ask=a.ask.bind(Object(g.a)(Object(g.a)(a))),a.blacklist=a.blacklist.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"nextImage",value:function(){var e=this;this.setState(function(t){var a=t.picIndex;return{picIndex:a===e.props.pictures.length?0:a+1}})}},{key:"toggleModal",value:function(){this.setState(function(e){return{modalActive:!e.modalActive}})}},{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"ask",value:function(){var e=this,t=this.state.message;t&&(this.toggleModal(),j.a.post("".concat(f,"/user/ask"),{id:localStorage.getItem("user_id"),itemId:this.props._id,message:t}).then(this.props.next).catch(function(){return e.props.history.push("/error")}))}},{key:"blacklist",value:function(){var e=this;console.log("hello"),j.a.post("".concat(f,"/user/blacklist"),{id:localStorage.getItem("user_id"),itemId:this.props._id}).then(this.props.next).catch(function(){return e.props.history.push("/error")})}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.description,n=e.pictures,c=e.next,l=this.state,i=l.modalActive,r=l.picIndex;return s.a.createElement("div",null,s.a.createElement("div",{className:"box"},s.a.createElement("h4",{className:"title is-4"},t),s.a.createElement("h6",{className:"subtitle is-6"},a),s.a.createElement("figure",{className:"media-left"},s.a.createElement("p",{className:"image"},s.a.createElement("img",{src:n[r],alt:""}))),s.a.createElement("div",{className:"field is-grouped is-grouped-centered"},s.a.createElement("p",{className:"control"},s.a.createElement("button",{className:"button is-rounded",onClick:this.toggleModal},s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-heart"})))),s.a.createElement("p",{className:"control"},s.a.createElement("button",{className:"button is-rounded",onClick:this.blacklist},s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-times"})))),s.a.createElement("p",{className:"control"},s.a.createElement("button",{className:"button is-rounded",onClick:c},s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-arrow-right"})))))),s.a.createElement("div",{className:"modal ".concat(i?"is-active":"")},s.a.createElement("div",{className:"modal-background"}),s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"box"},s.a.createElement("h5",{className:"title is-5"},"Ask for ",t),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Message to donor"),s.a.createElement("div",{className:"control"},s.a.createElement("textarea",{className:"textarea",onChange:this.onMessageChange})),s.a.createElement("p",{className:"help"},"Include informaton about availability and location.")),s.a.createElement("div",{className:"field is-grouped"},s.a.createElement("div",{className:"control"},s.a.createElement("button",{className:"button is-link",onClick:this.ask},"Send")),s.a.createElement("div",{className:"control"},s.a.createElement("button",{className:"button is-text",onClick:this.toggleModal},"Cancel")))))))}}]),t}(n.Component),k=Object(N.a)(y),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={index:0},a.next=a.next.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"next",value:function(){this.state.index===this.props.items.length-1?this.props.nextPage():this.setState(function(e){return{index:e.index+1}})}},{key:"render",value:function(){var e=this.props.items[this.state.index];return e?s.a.createElement(k,Object.assign({},e,{next:this.next})):null}}]),t}(n.Component),x=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"message is-danger"},s.a.createElement("div",{className:"message-body"},s.a.createElement("span",null,"There's nothing here"),"\xa0",s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-frown"}))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isLoaded:!1,items:[],categories:E.slice(0),range:5,location:null,filterActive:!1,page:1},a.toggleFilter=a.toggleFilter.bind(Object(g.a)(Object(g.a)(a))),a.onCategoryChange=a.onCategoryChange.bind(Object(g.a)(Object(g.a)(a))),a.changeRange=a.changeRange.bind(Object(g.a)(Object(g.a)(a))),a.nextPage=a.nextPage.bind(Object(g.a)(Object(g.a)(a))),a.getItems=a.getItems.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"toggleFilter",value:function(){var e=this;this.setState(function(e){return{filterActive:!e.filterActive}},function(){e.state.filterActive||e.getItems()})}},{key:"onCategoryChange",value:function(e){var t=this,a=e.target,n=a.name,s=a.checked;this.setState(function(e){var a=e.categories;if(s)a.push(n);else{var c=t.state.categories.indexOf(n);a.splice(c,1)}return{categories:a}})}},{key:"changeRange",value:function(){this.setState(function(e){return{range:e.range%25+5}},this.getItems)}},{key:"nextPage",value:function(){this.setState(function(e){return{page:e.page+1}},this.getItems)}},{key:"getItems",value:function(){var e=this,t=this.state,a=t.categories,n=t.range,s=t.location,c=t.page;j.a.get("".concat(f,"/user/items"),{params:{id:localStorage.getItem("user_id"),range:n,categories:a,location:s,page:c}}).then(function(t){return e.setState({isLoaded:!0,items:t.data})}).catch(function(){return e.setState({isLoaded:!0})})}},{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition(function(t){var a=t.coords;e.setState({location:[a.longitude,a.latitude]},e.getItems)})}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.items,n=e.categories,c=e.range,l=e.filterActive;return s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-6 is-offset-3"},s.a.createElement(v,{toggle:this.toggleFilter,isActive:l,onChange:this.onCategoryChange,categories:n}),s.a.createElement("div",{className:"field is-grouped"},s.a.createElement("p",{className:"control is-expanded"},s.a.createElement("button",{className:"button is-rounded is-fullwidth",onClick:this.toggleFilter},"Filter categories")),s.a.createElement("p",{className:"control is-expanded"},s.a.createElement("button",{className:"button is-rounded is-fullwidth",onClick:this.changeRange},"Travel up to ",c," mi")),s.a.createElement("p",{className:"control"},s.a.createElement(p.a,{to:"/user/chats",className:"button is-info is-rounded"},s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-comments"}))))),!t&&s.a.createElement("div",null,"Loading..."),s.a.createElement(C,{items:a,nextPage:this.nextPage}),t&&!a.length&&s.a.createElement(x,null)))}}]),t}(n.Component),I=a(14),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={email:"",firstName:"",lastName:""},a.handleInputChange=a.handleInputChange.bind(Object(g.a)(Object(g.a)(a))),a.onSubmit=a.onSubmit.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(I.a)({},n,a))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=this.props.type;j.a.post("".concat(f,"/").concat(a,"/new"),this.state).then(function(e){localStorage.setItem("".concat(a,"_id"),t.state.email),t.props.history.push("/".concat(a))}).catch(function(){return t.props.history.push("/error")})}},{key:"render",value:function(){return s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-4 is-offset-4"},s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Email"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input",name:"email",type:"text",placeholder:"janedoe@example.com",onChange:this.handleInputChange,required:!0}))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"First Name"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input",name:"firstName",type:"text",placeholder:"Jane",onChange:this.handleInputChange,required:!0}))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Last Name"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input",name:"lastName",type:"text",placeholder:"Doe",onChange:this.handleInputChange,required:!0}))),s.a.createElement("div",{className:"field is-grouped"},s.a.createElement("div",{className:"control"},s.a.createElement("button",{className:"button is-link"},"Submit")),s.a.createElement("div",{className:"control"},s.a.createElement(p.a,{to:"/",className:"button is-text"},"Cancel"))))))}}]),t}(n.Component),L=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(w,{type:"user",history:this.props.history})}}]),t}(n.Component),A=Object(N.a)(L),_=a(17),M=a.n(_),F=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e._id,a=e.itemName,n=e.firstName,c=e.lastMessage,l=e.type;return s.a.createElement(p.a,{to:"/".concat(l,"/chat/").concat(t),className:"media"},s.a.createElement("div",{className:"media-content"},s.a.createElement("div",{className:"content"},a&&s.a.createElement("span",{className:"title is-5"},a),s.a.createElement("p",null,s.a.createElement("small",null,M()(c.timestamp).fromNow()),"\xa0",s.a.createElement("span",null,c.message)))),s.a.createElement("div",{className:"media-right"},s.a.createElement("span",{className:"tag is-large is-rounded"},n)))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isLoaded:!1,chats:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat(f,"/user/chats"),{params:{id:localStorage.getItem("user_id")}}).then(function(t){return e.setState({isLoaded:!0,chats:t.data})}).catch(function(){return e.setState({isLoaded:!0})})}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.chats;return s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-6 is-offset-3"},s.a.createElement(p.a,{to:"/user",className:"is-pulled-left button is-rounded"},s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-arrow-left"}))),s.a.createElement("h4",{className:"title is-4 has-text-centered"},"Messages"),!t&&s.a.createElement("div",null,"Loading..."),a.map(function(e){return s.a.createElement(F,Object.assign({},e,{key:e._id,type:"user"}))}),t&&!a.length&&s.a.createElement(x,null)))}}]),t}(n.Component),P=a(18),q=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props,t=e.timestamp,a=e.message,n=e.sender_type,c=e.type,l=e.user,i=e.donor,r=s.a.createElement("p",{className:"control"},s.a.createElement("span",{className:"tag is-rounded is-".concat("donor"===n?"info":"success")},("donor"===n?i:l)[0].firstName.charAt(0).toUpperCase())),o=s.a.createElement("p",{className:"control"},s.a.createElement("span",{className:"tag is-medium"},a),s.a.createElement("span",{className:"help"},M()(t).fromNow()));return n===c?s.a.createElement("div",{className:"field is-grouped is-grouped-right"},o,r):s.a.createElement("div",{className:"field is-grouped"},r,o)}}]),t}(n.Component),R=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isLoaded:!1,chat:null,message:"",isConnected:!1},a.onMessageChange=a.onMessageChange.bind(Object(g.a)(Object(g.a)(a))),a.send=a.send.bind(Object(g.a)(Object(g.a)(a))),a.unavailable=a.unavailable.bind(Object(g.a)(Object(g.a)(a))),a.socketConnect=a.socketConnect.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"onMessageChange",value:function(e){this.setState({message:e.target.value})}},{key:"send",value:function(){var e=this.state.message;if(e){var t,a=this.props.type,n=(t={message:e},Object(I.a)(t,"".concat(a,"_id"),localStorage.getItem("".concat(a,"_id"))),Object(I.a)(t,"timestamp",Date.now()),t);this.socket.send(JSON.stringify(Object(P.a)({id:this.state.chat._id},n)))}}},{key:"unavailable",value:function(){var e=this;j.a.post("".concat(f,"/donor/item/unavailable"),{id:localStorage.getItem("donor_id"),itemId:this.state.chat.item_id,userId:this.state.chat.user[0]._id}).then(function(){return e.props.history.push("/donor")}).catch(function(){return e.props.history.push("/error")})}},{key:"socketConnect",value:function(){var e=this;this.socket=new WebSocket("ws://localhost:40510/","protocolOne"),this.socket.onopen=function(){return e.setState({isConnected:!0})},this.socket.onmessage=function(t){var a=JSON.parse(t.data);a.id===e.state.chat._id&&e.setState(function(e){var t=e.chat;return t.messages.push(a),{chat:t,message:""}})}}},{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat(f,"/chat"),{params:{id:this.props.id}}).then(function(t){e.setState({isLoaded:!0,chat:t.data}),e.socketConnect()}).catch(function(){return e.props.history.push("/error")})}},{key:"render",value:function(){var e=this.props.type,t=this.state,a=t.isLoaded,n=t.chat,c=t.message,l=t.isConnected;return a?s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-4 is-offset-4"},"donor"===e&&s.a.createElement("div",null,s.a.createElement(p.a,{to:"/donor/item/".concat(n.item_id),className:"is-pulled-left button is-rounded"},s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-arrow-left"}))),s.a.createElement("button",{className:"is-pulled-right button is-rounded",onClick:this.unavailable},s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-check"}))),s.a.createElement("h4",{className:"title is-4 has-text-centered"},"Talking to ",n.user[0].firstName)),"user"===e&&s.a.createElement("div",null,s.a.createElement(p.a,{to:"/user/chats",className:"is-pulled-left button is-rounded"},s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-arrow-left"}))),s.a.createElement("h4",{className:"title is-4 has-text-centered"},"Talking to ",n.donor[0].firstName)),s.a.createElement("br",null),s.a.createElement("div",{style:{maxHeight:"80%",overflowY:"scroll"}},n.messages.map(function(t,a){return s.a.createElement(q,Object.assign({key:a},t,{type:e,user:n.user,donor:n.donor}))})),s.a.createElement("br",null),s.a.createElement("div",{className:"field has-addons"},s.a.createElement("div",{className:"control is-expanded"},s.a.createElement("input",{className:"input",type:"text",value:c,placeholder:"Type a message",onChange:this.onMessageChange,required:!0})),s.a.createElement("div",{className:"control"},s.a.createElement("button",{className:"button is-info",onClick:this.send},s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-paper-plane"}))))),!l&&s.a.createElement("p",{className:"help is-danger"},"Waiting to connect..."))):s.a.createElement("div",{className:"has-text-centered"},"Loading...")}}]),t}(n.Component),T=Object(N.a)(R),J=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(T,{id:this.props.match.params.id,type:"user"})}}]),t}(n.Component),U=Object(N.a)(J),W=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isAvailable:a.props.available},a.unavailable=a.unavailable.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"unavailable",value:function(){var e=this;j.a.post("".concat(f,"/donor/item/unavailable"),{id:localStorage.getItem("donor_id"),itemId:this.props._id}).then(function(){return e.setState({isAvailable:!1})}).catch(function(){return e.props.history.push("/error")})}},{key:"render",value:function(){var e=this.props,t=e._id,a=e.name,n=e.description,c=e.pictures,l=e.count;return this.state.isAvailable?s.a.createElement("article",{className:"media"},c.length>0&&s.a.createElement("figure",{className:"media-left"},s.a.createElement("p",{className:"image is-64x64"},s.a.createElement("img",{src:c[0],alt:""}))),s.a.createElement("div",{className:"media-content"},s.a.createElement("div",{className:"content"},s.a.createElement("p",null,s.a.createElement("strong",null,a),s.a.createElement("br",null),n))),s.a.createElement("div",{className:"media-right"},l>0&&s.a.createElement(p.a,{to:"/donor/item/".concat(t),className:"tag is-info"},l," requests"),"\xa0",s.a.createElement("button",{className:"delete",onClick:this.unavailable}))):null}}]),t}(n.Component),B=Object(N.a)(W),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isLoaded:!1,items:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat(f,"/donor/items"),{params:{id:localStorage.getItem("donor_id")}}).then(function(t){return e.setState({isLoaded:!0,items:t.data})}).catch(function(){return e.setState({isLoaded:!0})})}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.items;return s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-4 is-offset-4"},s.a.createElement(p.a,{to:"/donor/item/new",className:"is-pulled-left button is-rounded"},s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-plus"}))),s.a.createElement("h4",{className:"title is-4 has-text-centered"},"My items"),!t&&s.a.createElement("div",null,"Loading..."),a.map(function(e){return s.a.createElement(B,Object.assign({},e,{key:e._id}))}),t&&!a.length&&s.a.createElement(x,null)))}}]),t}(n.Component),G=Object(N.a)(z),Y=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(w,{type:"donor",history:this.props.history})}}]),t}(n.Component),H=Object(N.a)(Y),$=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={name:"",location:"",lastName:"",category:E[0],pictures:[]},a.onFileChange=a.onFileChange.bind(Object(g.a)(Object(g.a)(a))),a.handleInputChange=a.handleInputChange.bind(Object(g.a)(Object(g.a)(a))),a.onSubmit=a.onSubmit.bind(Object(g.a)(Object(g.a)(a))),a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"onFileChange",value:function(e){for(var t=this,a=e.target.files,n=0;n<a.length;n++){var s=a[n];if(!s.type.match("image.*"))return;var c=new FileReader;c.onload=function(e){console.log(e.target.result),t.setState(function(t){var a=t.pictures;return a.push(e.target.result),{pictures:a}})},c.readAsDataURL(s)}}},{key:"handleInputChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,n=t.name;this.setState(Object(I.a)({},n,a))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a=this.state.location;j.a.get("https://maps.googleapis.com/maps/api/geocode/json?address=".concat(encodeURIComponent(a),"&key=").concat("AIzaSyA9YCBo0o7ve-89itysUh6JT1CSfd9nB1A")).then(function(e){if(!(e.data&&e.data.results&&e.data.results.length>0))throw new Error("Not found");var a=e.data.results[0].geometry.location,n=a.lat,s=[a.lng,n];j.a.post("".concat(f,"/donor/item/new"),Object(P.a)({id:localStorage.getItem("donor_id")},t.state,{location:s})).then(function(e){return t.props.history.push("/donor")}).catch(function(){return t.props.history.push("/error")})}).catch(function(){})}},{key:"render",value:function(){var e=this.state.pictures;return s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"column is-4 is-offset-4"},s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Name"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input",name:"name",type:"text",placeholder:"Tinder Gold Subscription",onChange:this.handleInputChange,required:!0}))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Description"),s.a.createElement("div",{className:"control"},s.a.createElement("textarea",{className:"textarea",name:"description",placeholder:"Give some details about the item",onChange:this.handleInputChange}))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Location"),s.a.createElement("div",{className:"control"},s.a.createElement("input",{className:"input",name:"location",type:"text",placeholder:"123 Amazing St, Pittsburgh, PA",onChange:this.handleInputChange,required:!0}))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Pictures"),s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"file has-name"},s.a.createElement("label",{className:"file-label"},s.a.createElement("input",{className:"file-input",type:"file",accept:"image/*",name:"pictures",onChange:this.onFileChange}),s.a.createElement("span",{className:"file-cta"},s.a.createElement("span",{className:"file-icon"},s.a.createElement("i",{className:"fas fa-upload"})),s.a.createElement("span",{className:"file-label"},"Choose a file\u2026")),s.a.createElement("span",{className:"file-name"},e.length," files selected"))))),s.a.createElement("div",{className:"field"},s.a.createElement("label",{className:"label"},"Category"),s.a.createElement("div",{className:"control"},s.a.createElement("div",{className:"select"},s.a.createElement("select",{name:"category",onChange:this.handleInputChange},E.map(function(e){return s.a.createElement("option",{name:e,key:e},e.charAt(0).toUpperCase()+e.slice(1))}))))),s.a.createElement("div",{className:"field is-grouped"},s.a.createElement("div",{className:"control"},s.a.createElement("button",{className:"button is-link"},"Submit")),s.a.createElement("div",{className:"control"},s.a.createElement(p.a,{to:"/donor",className:"button is-text"},"Cancel"))))))}}]),t}(n.Component),K=Object(N.a)($),Q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={isLoaded:!1,chats:[]},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat(f,"/donor/item/chats"),{params:{id:localStorage.getItem("donor_id"),itemId:this.props.match.params.id}}).then(function(t){return e.setState({isLoaded:!0,chats:t.data})}).catch(function(){return e.setState({isLoaded:!0})})}},{key:"render",value:function(){var e=this.state,t=e.isLoaded,a=e.chats;return s.a.createElement("div",null,s.a.createElement(p.a,{to:"/donor",className:"is-pulled-left button is-rounded"},s.a.createElement("span",{className:"icon is-small"},s.a.createElement("i",{className:"fas fa-arrow-left"}))),s.a.createElement("h4",{className:"title is-4 has-text-centered"},"Messages for item"),!t&&s.a.createElement("div",null,"Loading..."),a.map(function(e){return s.a.createElement(F,Object.assign({},e,{key:e._id,type:"donor"}))}))}}]),t}(n.Component),V=Object(N.a)(Q),X=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(T,{id:this.props.match.params.id,type:"donor"})}}]),t}(n.Component),Z=Object(N.a)(X),ee=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"has-text-centered has-text-danger"},"An error has occurred.")}}]),t}(n.Component),te=(a(59),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"hero is-light is-bold is-fullheight"},s.a.createElement("div",{className:"hero-body"},s.a.createElement("div",{className:"container"},s.a.createElement(d.a,null,s.a.createElement(h.a,{exact:!0,path:"/",component:b}),s.a.createElement(h.a,{exact:!0,path:"/user",component:S}),s.a.createElement(h.a,{path:"/user/new",component:A}),s.a.createElement(h.a,{path:"/user/chats",component:D}),s.a.createElement(h.a,{path:"/user/chat/:id",component:U}),s.a.createElement(h.a,{exact:!0,path:"/donor",component:G}),s.a.createElement(h.a,{path:"/donor/new",component:H}),s.a.createElement(h.a,{path:"/donor/item/new",component:K}),s.a.createElement(h.a,{path:"/donor/item/:id",component:V}),s.a.createElement(h.a,{path:"/donor/chat/:id",component:Z}),s.a.createElement(h.a,{component:ee})))))}}]),t}(n.Component)),ae=a(64);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(ae.a,null,s.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,2,1]]]);
//# sourceMappingURL=main.2a94b41a.chunk.js.map