(window.webpackJsonpBookTicketsOnline=window.webpackJsonpBookTicketsOnline||[]).push([[0],{22:function(e,t,a){e.exports=a(38)},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(13),s=a.n(i),c=(a(27),a(19)),l=a(10),r=a(2),m=a(3),u=a(5),h=a(4),d=a(6),p=function(e){function t(){return Object(r.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("button",{className:"f6 link dim ph3 pv2 mb2 dib white bg-black",onClick:this.props.show,ref:this.props.buttonRef},"Book Now")}}]),t}(n.Component),b=(a(28),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).handleSubmit=function(){var t=document.getElementById("seatInput").value,a=e.state.movie.seatsAvailable;console.log("Value Entered: "+t),console.log("Seats Available: "+a),t>a?alert("You can't book more than the Available Seats"):(window.localStorage.name=e.state.movie.name,window.localStorage.poster=e.state.movie.poster,window.localStorage.seat=t,null!=window.localStorage.seat&&e.props.func())},e.state={movie:[]},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({movie:this.props.movieDetails}),console.log("Mounted!")}},{key:"render",value:function(){return s.a.createPortal(o.a.createElement("aside",{className:"modal-cover",onKeyDown:this.props.keyDown,tabIndex:"-1",onClick:this.props.onClickOutside},o.a.createElement("div",{className:"modal-area",ref:this.props.modalRef},o.a.createElement("button",{className:"_modal-close",onClick:this.props.closeModal,ref:this.props.buttonRef},o.a.createElement("span",{id:"close-modal",className:"_hide-visual"},"Close"),o.a.createElement("svg",{className:"_modal-close-icon",viewBox:"0 0 40 40"},o.a.createElement("path",{d:"M 10,10 L 30,30 M 30,10 L 10,30"}))),o.a.createElement("div",{className:"modal-body tc"},o.a.createElement("div",{className:"tc"},o.a.createElement("h1",null,"Book Movies Online"),o.a.createElement("img",{alt:"movies",src:"".concat(this.state.movie.poster)}),o.a.createElement("h2",null,this.state.movie.name),o.a.createElement("div",null,o.a.createElement("h4",null,"Available Seats: ",this.state.movie.seatsAvailable)),o.a.createElement("h3",null,"How many seats ?"),o.a.createElement("input",{type:"number",id:"seatInput",className:"tc br4 pa1",placeholder:"Enter Number of Seats"}),o.a.createElement("button",{className:"tc dim white bg-black pa1 mh2",onClick:this.handleSubmit},"Submit"))))),document.body)}}]),t}(n.Component)),g=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).showModal=function(){e.setState({isShown:!0},(function(){e.closeButton.focus()}))},e.closeModal=function(){e.setState({isShown:!1}),e.triggerButton.focus()},e.onKeyDown=function(t){27===t.keyCode&&e.closeModal()},e.onClickOutside=function(t){e.modal&&e.modal.contains(t.target)||e.closeModal()},e.state={isShown:!1},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,{show:this.showModal,buttonRef:function(t){return e.triggerButton=t}}),this.state.isShown?o.a.createElement(b,{closeModal:this.closeModal,keyDown:this.onKeyDown,modalRef:function(t){return e.modal=t},buttonRef:function(t){return e.closeButton=t},onClickOutside:this.onClickOutside,func:this.props.func,movieDetails:this.props.movieDetails}):o.a.createElement(o.a.Fragment,null))}}]),t}(n.Component),v=(a(29),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={movie:[]},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({movie:this.props.movieDetails})}},{key:"render",value:function(){return o.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 card"},o.a.createElement("img",{alt:"movies",src:"".concat(this.state.movie.poster)}),o.a.createElement("div",null,o.a.createElement("h2",null,this.state.movie.name),o.a.createElement("p",null,this.state.movie.lang),o.a.createElement(g,{func:this.props.func,movieDetails:this.state.movie})))}}]),t}(n.Component)),f=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={movieList:[]},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({movieList:this.props.movies})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"pa2"},this.state.movieList.map((function(t,a){return o.a.createElement(v,{movieDetails:e.state.movieList[a],func:e.props.func})})))}}]),t}(n.Component),E=function(e){e.searchField;var t=e.searchChange;return o.a.createElement("div",null,o.a.createElement("input",{className:"tc ma2 pa3 br4 b--green bg-lightest-blue",placeholder:"Search by Name",type:"search",onChange:t}))},w=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"2px ridge black",height:"45rem"}},e.children)},N=[{id:1,name:"Bad Boys 3",lang:"English/Hindi/Tamil/Telugu",poster:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRkPE0us5SIkt9fhXCL4GOD_sLdXrZPiuEZDzJBBNdURla5WIcb",seatsAvailable:"10"},{id:2,name:"Birds Of Prey",lang:"English/Tamil",poster:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ6c5Q87mDGLXDv0p52fOLsUjzSR1KQ0IJHfH5JMPGgYBNkyfxx",seatsAvailable:"19"},{id:3,name:"Black Widow",lang:"English/Hindi/Tamil/Telugu",poster:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQjxCCUvBHJohfamSUnNEOmd_QdFLsw57qsWOcn2mmYyD9DAbVG",seatsAvailable:"7"},{id:4,name:"Dolittle",lang:"English",poster:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSoar8y_ZLMjpU2DUCmYy4twmLqIGwLIUr7OHvV4oGYWYt3aB0-",seatsAvailable:"25"},{id:5,name:"Fast & Furious 9",lang:"English/Hindi/Tamil/Telugu",poster:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT1G5qR-ECs-5BbsK79TbF37t7WMKHxhNFePO1Q5xe5BpMU8zU2",seatsAvailable:"34"},{id:6,name:"Free Guy",lang:"English",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlVQh4aqoTCM5mN2QeNmMyqt3M-dCpYg79NVag26imqLr03VeP",seatsAvailable:"23"},{id:7,name:"Jungle Cruise",lang:"English/Hindi",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXuT76vjQ0ajV-IdGUsr1CYln8Bx_ahhJ0ruNYwiA0msCbSqS8",seatsAvailable:"15"},{id:8,name:"Mulan",lang:"English/Chinese",poster:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcReK-PKsiDepwOj-RQX3j_8OkMsyVRMSjXhN5IJU4QXo7dwnhzP",seatsAvailable:"16"},{id:9,name:"No Time To Die",lang:"English/Hindi/Tamil/Telugu",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3FIXs2TB2e7fToTo8_rSMygr7-OjR0DhfLpj7QVk1TH2RGaUc",seatsAvailable:"17"},{id:10,name:"Scoob!",lang:"English",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrULjSp6AgLXN7pcum4bCN6Zl4--zJ1Y7aB880I_qpQuGpWlb",seatsAvailable:"27"},{id:11,name:"Sonic The Hedgehog",lang:"English/Hindi",poster:"https://www.aceshowbiz.com/images/still/sonic-the-hedgehog-poster03.jpg",seatsAvailable:"14"},{id:12,name:"Tenet",lang:"English/Hindi/Tamil",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR82mwaQa5M-2Ykma7dbNTLtVhKPff8KVWkirzh6LMku9cV5Icq",seatsAvailable:"10"},{id:13,name:"The King's Man",lang:"English",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJm8GL0Zv4qpdTbe5Wkfv_XJNP5zNS4sI-ZwtfnjnHAB8uDA-U",seatsAvailable:"20"},{id:14,name:"Top Gun 2",lang:"English/Hindi",poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NGKKI9_WhX5B8FBicetcfvfNE1g-2e--MvIBGdhNOpmNVmUY",seatsAvailable:"30"},{id:15,name:"Underwater",lang:"English/Hindi",poster:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT47RFDMFuIaqvIf2ihomC2Ung69HlBleD-L3L8NjPkKEbJGUot",seatsAvailable:"38"},{id:16,name:"Wonder Woman 1984",lang:"English/Hindi/Tamil/Telugu",poster:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSsZ1Q7j718LmVDMazZqLZ4E7A-jmauhNy38LGMVfp64B0o5Jet",seatsAvailable:"7"}],k=(a(30),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.submitButton=function(){e.props.history.push("/booking")},e.state={searchField:""},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=N.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"f1"},"Book Movies Online"),o.a.createElement(E,{searchChange:this.onSearchChange}),o.a.createElement(w,null,o.a.createElement(f,{movies:t,func:this.submitButton})))}}]),t}(n.Component)),y=(a(31),function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).clearFunction=function(){window.localStorage.clear(),window.open("about:blank","_self"),window.close()},e.homeFunction=function(){window.localStorage.clear(),e.props.history.push("/")},e.state={movie:[]},e}return Object(d.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,window.localStorage.seat>0?o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"tc mt5"},"Your Ticket Confirmation"),o.a.createElement("div",{className:"flex flex-wrap justify-center infoCard"},o.a.createElement("div",{className:"pa2 mr3"},o.a.createElement("img",{alt:"bookPoster",src:"".concat(window.localStorage.poster),className:"mainPoster"})),o.a.createElement("div",{className:"pa2 ml3"},o.a.createElement("h2",{className:"tc mt4"},"Movie Name: ",window.localStorage.name),o.a.createElement("h3",{className:"tc mt4"},"Seats Booked: ",window.localStorage.seat),o.a.createElement("h3",{className:"tc mt4"},"Venue: Kalam Center, Prodapt Solutions"),o.a.createElement("img",{alt:"qr",src:"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=".concat(window.localStorage.name),className:"qrImg mt4"}),o.a.createElement("p",{className:"mt4"},"Your Tickets have been confirmed for"," ",window.localStorage.name," movie."),o.a.createElement("p",null,"Please show the QR Code while entering the Venue."))),o.a.createElement("button",{className:"tc f6 link dim ph3 pv2 mb2 mt5 mr4 dib white bg-black",onClick:this.clearFunction},"Close"),o.a.createElement("button",{className:"tc f6 link dim ph3 pv2 mb2 mt5 ml4 dib white bg-black",onClick:this.homeFunction},"Home")):o.a.createElement("div",{className:"tc"},o.a.createElement("h1",{className:"tc mt7"},"ERROR !! Page Not Found"),o.a.createElement("button",{className:"tc f6 link dim ph3 pv2 mb2 mt5 dib white bg-black",onClick:this.homeFunction},"Home")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(32);var O=o.a.createElement(c.a,null,o.a.createElement("div",null,o.a.createElement(l.a,{exact:!0,path:"/",component:k}),o.a.createElement(l.a,{path:"/booking",component:y})));s.a.render(O,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.86fb8fc1.chunk.js.map