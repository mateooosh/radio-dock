(function(){var t={5549:function(t,a,i){"use strict";var e=i(3862),o=i(3396),s=i(65);const n={class:"control-bar"},r={class:"controls"};function l(t,a,i,e,s,l){const d=(0,o.up)("van-image"),c=(0,o.up)("van-notice-bar"),u=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",n,[t.$store.state.activeStation.favicon?((0,o.wg)(),(0,o.j4)(d,{key:0,fit:"cover",round:"",radius:8,width:"40px",height:"40px",src:t.$store.state.activeStation.favicon},null,8,["src"])):(0,o.kq)("",!0),(0,o.Wm)(c,{class:"details",text:t.$store.state.activeStation?.name||"Choose station..."},null,8,["text"]),(0,o._)("div",r,[(0,o.Wm)(u,{icon:"fa-solid fa-backward-step",size:"xl"}),t.$store.state.isLoading?((0,o.wg)(),(0,o.j4)(u,{key:0,icon:"fa-solid fa-spinner",size:"2xl",class:"spin"})):t.$store.state.isPlaying?((0,o.wg)(),(0,o.j4)(u,{key:1,onClick:t.pauseAudio,icon:"fa-solid fa-stop",size:"2xl"},null,8,["onClick"])):((0,o.wg)(),(0,o.j4)(u,{key:2,onClick:t.playAudio,icon:"fa-solid fa-play",size:"2xl"},null,8,["onClick"])),(0,o.Wm)(u,{icon:"fa-solid fa-forward-step",size:"xl"})])])}var d=(0,o.aZ)({name:"ControlBar",store:s.oR,mounted(){"mediaSession"in navigator&&(navigator.mediaSession.setActionHandler("pause",(()=>this.pauseAudio())),navigator.mediaSession.setActionHandler("play",(()=>this.playAudio())))},methods:{pauseAudio(){this.$store.commit("setIsPlaying",!1),this.$store.dispatch("pause")},playAudio(){this.$store.commit("setIsLoading",!0),this.$store.dispatch("play")}}}),c=i(89);const u=(0,c.Z)(d,[["render",l],["__scopeId","data-v-4d83ac6e"]]);var v=u,h=(0,o.aZ)({__name:"App",setup(t){const a=(0,s.oR)();return(0,o.bv)((()=>{a.commit("setFavoriteStations",JSON.parse(localStorage.getItem("favorites")||"[]"));const t=JSON.parse(localStorage.getItem("activeStation")||"{}");a.commit("setActiveStation",t),a.commit("setAudio",new Audio(t?.url_resolved))})),(t,a)=>{const i=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(i),(0,o.Wm)(v)],64)}}});const m=h;var p=m,f=i(5431),g=i(5941);(0,f.z)("/radio-dock/service-worker.js",{ready(){g.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){g.log("Service worker has been registered.")},cached(){g.log("Content has been cached for offline use.")},updatefound(){g.log("New content is downloading.")},updated(){g.log("New content is available; please refresh.")},offline(){g.log("No internet connection found. App is running in offline mode.")},error(t){g.error("Error during service worker registration:",t)}});var y=i(2483);const w=t=>((0,o.dD)("data-v-67a5cc2e"),t=t(),(0,o.Cn)(),t),S={class:"home-view"},_={class:"stations-section"},k={class:"stations-title"},b=w((()=>(0,o._)("span",null,"Favorites",-1))),L={class:"stations-section"},$={class:"stations-title"},C=w((()=>(0,o._)("span",null,"Popular",-1))),D={class:"stations-column"};function F(t,a,i,e,s,n){const r=(0,o.up)("SearchBar"),l=(0,o.up)("font-awesome-icon"),d=(0,o.up)("RadioStation"),c=(0,o.up)("data-load-status");return(0,o.wg)(),(0,o.iD)("div",S,[(0,o.Wm)(r),(0,o._)("div",_,[(0,o._)("div",k,[b,(0,o.Wm)(l,{icon:"fa-solid fa-heart",size:"l"})]),(0,o.Wm)(c,{"has-data":t.hasFavoriteStations,class:"stations-column"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.$store.state.favoriteStations,((t,a)=>((0,o.wg)(),(0,o.j4)(d,{key:a,station:t},null,8,["station"])))),128))])),_:1},8,["has-data"])]),(0,o._)("div",L,[(0,o._)("div",$,[C,(0,o.Wm)(l,{icon:"fa-solid fa-fire",size:"l"}),(0,o._)("span",{class:"stations-title-see-all",onClick:a[0]||(a[0]=(...a)=>t.seeAll&&t.seeAll(...a))},"See all")]),(0,o.Wm)(c,{"is-loading":t.isLoading,"has-data":t.hasData,"has-error":t.hasError},{default:(0,o.w5)((()=>[(0,o._)("div",D,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.mostVotedStations,((t,a)=>((0,o.wg)(),(0,o.j4)(d,{key:a,station:t},null,8,["station"])))),128))])])),_:1},8,["is-loading","has-data","has-error"])])])}i(7658);var I=i(7139),P=i(4870);const A={class:"search-bar"},O=["onKeydown"];var x=(0,o.aZ)({__name:"SearchBar",props:{queryOnInit:{type:String,default:""},isHiddenOnInit:{type:Boolean,default:!0}},setup(t){const a=t,i=(0,y.tv)(),s=(0,P.qj)({isHidden:a.isHiddenOnInit,animate:!1,query:a.queryOnInit,timeout:null}),n=(0,P.iH)(null),r=(0,P.iH)(null),l=()=>{s.timeout=setTimeout((()=>{s.isHidden=!0}),100)},d=()=>{i.push(`/radio-dock/search/${s.query}`)},c=()=>{clearTimeout(s.timeout),s.isHidden?s.isHidden=!1:s.query?d():s.isHidden=!0},u=()=>{s.animate=!s.animate},v=(0,o.Fl)((()=>{const t=[];return s.isHidden&&t.push("hidden"),s.animate&&t.push("animate"),t}));return(0,o.YP)((()=>s.isHidden),(t=>{u(),t||(0,o.Y3)((()=>{r.value?.focus()}))})),(t,a)=>{const i=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",A,[(0,o._)("div",{class:(0,I.C_)((0,P.SU)(v)),ref_key:"searchBar",ref:n,onAnimationend:u},[s.isHidden?(0,o.kq)("",!0):(0,o.wy)(((0,o.wg)(),(0,o.iD)("input",{key:0,ref_key:"input",ref:r,class:"input",type:"text","onUpdate:modelValue":a[0]||(a[0]=t=>s.query=t),onKeydown:(0,e.D2)(d,["enter"]),onBlur:l},null,40,O)),[[e.nr,s.query]]),(0,o._)("div",{class:"icon",onClick:c},[(0,o.Wm)(i,{icon:"fa-solid fa-magnifying-glass",size:"xl",color:"#5E2F83"})])],34)])}}});const H=(0,c.Z)(x,[["__scopeId","data-v-2ad3ba5f"]]);var W=H;const z={class:"radio-station"},j={class:"radio-station-image"},q={class:"radio-station-details"},B={class:"radio-station-name"},E={class:"radio-station-tags"},N={class:"radio-station-actions"};function Z(t,a,i,e,s,n){const r=(0,o.up)("van-image"),l=(0,o.up)("font-awesome-icon"),d=(0,o.up)("Tag");return(0,o.wg)(),(0,o.iD)("div",z,[(0,o._)("div",j,[t.hasFavicon?((0,o.wg)(),(0,o.j4)(r,{key:0,fit:"cover",round:"",radius:16,width:"100px",height:"100px",src:t.station.favicon},null,8,["src"])):((0,o.wg)(),(0,o.j4)(l,{key:1,icon:"fa-solid fa-radio",size:"4x",style:{color:"#5E2F83"}}))]),(0,o._)("div",q,[(0,o._)("div",B,(0,I.zw)(t.station.name),1),(0,o._)("div",E,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.tagsArray,(t=>((0,o.wg)(),(0,o.j4)(d,{key:t,content:t},null,8,["content"])))),128))]),(0,o._)("div",N,[(0,o._)("button",{onClick:a[0]||(a[0]=(...a)=>t.togglePlayer&&t.togglePlayer(...a)),class:(0,I.C_)({inactive:t.isCurrentlyLoadingOrPlaying})},[(0,o.Wm)(l,{icon:t.mainButtonIconName,class:(0,I.C_)({spin:t.isCurrentlyLoading})},null,8,["icon","class"]),(0,o._)("span",null,(0,I.zw)(t.playerLabel),1)],2),(0,o._)("button",{class:(0,I.C_)({inactive:t.isFavorite})},[(0,o.Wm)(l,{icon:"fa-solid fa-fire"}),(0,o._)("span",{onClick:a[1]||(a[1]=(...a)=>t.toggleObservation&&t.toggleObservation(...a))},(0,I.zw)(t.observationLabel),1)],2)])])])}const T={class:"tag"};function R(t,a,i,e,s,n){return(0,o.wg)(),(0,o.iD)("div",T,(0,I.zw)(t.content),1)}var V=(0,o.aZ)({name:"Tag",props:{content:{type:String,default:""}}});const J=(0,c.Z)(V,[["render",R],["__scopeId","data-v-13b9f690"]]);var Y=J,K=i(4806),U=i.n(K),M=i(2392),G=(i(7950),(0,o.aZ)({name:"RadioStation",store:s.oR,components:{Tag:Y},props:{station:{}},methods:{togglePlayer(){this.isCurrentlyLoading||(this.isCurrentlyPlaying?this.pauseStation():this.playStation())},toggleObservation(){this.isFavorite?this.removeFromFavorites():this.addToFavorites()},playStation(){this.$store.commit("setIsPlaying",!1),this.$store.dispatch("pause"),this.$store.commit("setActiveStation",this.station),this.$store.commit("setAudio",new Audio(this.station.url_resolved)),this.$store.commit("setIsLoading",!0),this.$store.dispatch("play")},pauseStation(){this.$store.commit("setIsPlaying",!1),this.$store.dispatch("pause")},addToFavorites(){this.$store.commit("addStationToFavorites",this.station),(0,M.NU)({type:"success",message:`${this.station.name} added to favorites`})},removeFromFavorites(){this.$store.commit("removeFromFavorites",this.station.stationuuid),(0,M.NU)({type:"warning",message:`${this.station.name} removed from favorites`})}},computed:{hasFavicon(){return this.station.favicon},tagsArray(){return U().filter(U().split(this.station.tags,","),(t=>!U().isEmpty(t)))},isCurrentlyLoading(){return this.$store.state.isLoading&&this.$store.state.activeStation.stationuuid===this.station.stationuuid},isCurrentlyPlaying(){return this.$store.state.isPlaying&&this.$store.state.activeStation.stationuuid===this.station.stationuuid},isCurrentlyLoadingOrPlaying(){return this.isCurrentlyLoading||this.isCurrentlyPlaying},isFavorite(){return U().some(this.$store.state.favoriteStations,["stationuuid",this.station.stationuuid])},playerLabel(){return this.isCurrentlyLoading?"Loading":this.isCurrentlyPlaying?"Pause":"Play"},mainButtonIconName(){return this.isCurrentlyLoading?"fa-solid fa-spinner":this.isCurrentlyPlaying?"fa-solid fa-stop":"fa-solid fa-play"},observationLabel(){return this.isFavorite?"Unobserve":"Observe"}}}));const Q=(0,c.Z)(G,[["render",Z],["__scopeId","data-v-6026ed2a"]]);var X=Q;const tt=t=>((0,o.dD)("data-v-7ba15512"),t=t(),(0,o.Cn)(),t),at={class:"data-load-status"},it={key:0},et={key:1,class:"error"},ot=tt((()=>(0,o._)("div",null,"Something went wrong",-1))),st={key:3,class:"no-data"},nt=tt((()=>(0,o._)("div",null,"No data found",-1)));var rt=(0,o.aZ)({__name:"DataLoadStatus",props:{isLoading:{type:Boolean,default:!1},hasData:{type:Boolean,default:!0},hasError:{type:Boolean,default:!1}},setup(t){return(a,i)=>{const e=(0,o.up)("van-loading"),s=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("div",at,[t.isLoading?((0,o.wg)(),(0,o.iD)("div",it,[(0,o.Wm)(e,{type:"spinner",color:"#5E2F83",size:"70px"})])):t.hasError?((0,o.wg)(),(0,o.iD)("div",et,[(0,o.Wm)(s,{icon:"fa-solid fa-triangle-exclamation",size:"3x",style:{color:"#d50000"}}),ot])):t.hasData?(0,o.WI)(a.$slots,"default",{key:2}):((0,o.wg)(),(0,o.iD)("div",st,[(0,o.Wm)(s,{icon:"fa-solid fa-triangle-exclamation",size:"3x",style:{color:"#9d9d9d"}}),nt]))])}}});const lt=(0,c.Z)(rt,[["__scopeId","data-v-7ba15512"]]);var dt=lt;const ct=i(2663);var ut=(0,o.aZ)({name:"HomeView",components:{DataLoadStatus:dt,SearchBar:W,RadioStation:X},store:s.oR,data(){return{isLoading:!0,hasData:!1,hasError:!1,query:"",mostVotedStations:[]}},methods:{async getMostVotedStations(){this.mostVotedStations=await ct.getStations({by:"topvote",limit:10}),this.isLoading=!1,this.hasData=!0},seeAll(){alert("Not implemented yet ;)")}},mounted(){try{this.getMostVotedStations()}catch{this.hasError=!0}},computed:{hasFavoriteStations(){return!U().isEmpty(this.$store.state.favoriteStations)}}});const vt=(0,c.Z)(ut,[["render",F],["__scopeId","data-v-67a5cc2e"]]);var ht=vt;const mt=t=>((0,o.dD)("data-v-e1489c16"),t=t(),(0,o.Cn)(),t),pt={class:"search-view"},ft={class:"stations-title"},gt=mt((()=>(0,o._)("span",null,"Popular",-1))),yt={class:"stations-column"};function wt(t,a,i,e,s,n){const r=(0,o.up)("SearchBar"),l=(0,o.up)("font-awesome-icon"),d=(0,o.up)("RadioStation"),c=(0,o.up)("data-load-status");return(0,o.wg)(),(0,o.iD)("div",pt,[(0,o.Wm)(r,{"query-on-init":t.$route.params.query,"is-hidden-on-init":!1},null,8,["query-on-init"]),(0,o._)("div",null,[(0,o._)("div",ft,[gt,(0,o.Wm)(l,{icon:"fa-solid fa-fire"})]),(0,o.Wm)(c,{"is-loading":t.isLoading,"has-data":t.hasData,"has-error":t.hasError},{default:(0,o.w5)((()=>[(0,o._)("div",yt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.stations,((t,a)=>((0,o.wg)(),(0,o.j4)(d,{key:a,station:t},null,8,["station"])))),128))])])),_:1},8,["is-loading","has-data","has-error"])])])}var St=i(2663),_t=i.n(St),kt=(0,o.aZ)({name:"SearchView",components:{DataLoadStatus:dt,SearchBar:W,RadioStation:X},data(){return{stations:[],isLoading:!0,hasData:!1,hasError:!1}},mounted(){this.searchStations()},methods:{async searchStations(){this.stations=await _t().searchStations({name:this.$route.params.query,limit:20,order:"votes",reverse:!0}),this.isLoading=!1,this.hasData=!0}}});const bt=(0,c.Z)(kt,[["render",wt],["__scopeId","data-v-e1489c16"]]);var Lt=bt;const $t=[{path:"/",redirect:{name:"home"}},{path:"/radio-dock/",name:"home",component:ht},{path:"/radio-dock/search/:query",name:"search",component:Lt}],Ct=(0,y.p7)({history:(0,y.r5)(),routes:$t});var Dt=Ct,Ft=(0,s.MT)({state:{activeStation:{},isPlaying:!1,isLoading:!1,audio:new Audio,favoriteStations:new Array([])},getters:{},mutations:{setActiveStation(t,a){t.activeStation=a,localStorage.setItem("activeStation",JSON.stringify(t.activeStation))},setIsPlaying(t,a){t.isPlaying=a},setIsLoading(t,a){t.isLoading=a},setAudio(t,a){t.audio=a},setFavoriteStations(t,a){t.favoriteStations=a},addStationToFavorites(t,a){t.favoriteStations.push(a),localStorage.setItem("favorites",JSON.stringify(t.favoriteStations))},removeFromFavorites(t,a){t.favoriteStations=U().filter(t.favoriteStations,(t=>t.stationuuid!==a)),localStorage.setItem("favorites",JSON.stringify(t.favoriteStations))}},actions:{play({state:t}){t.audio?.play().then((()=>{t.audio?.addEventListener("error",(()=>{setTimeout((()=>{this.dispatch("play")}),1e3)})),this.commit("setIsPlaying",!0)})).finally((()=>this.commit("setIsLoading",!1)))},pause({state:t}){t.audio?.pause()}},modules:{}}),It=i(9545),Pt=i(4821),At=i(4250),Ot=i(3),xt=i(1254),Ht=i(316),Wt=i(4035),zt=i(2229),jt=i(7404),qt=(i(5110),i(3494)),Bt=i(7749),Et=i(8539);qt.vI.add(Et.zc,Et.Bg$,Et.Jwg,Et.J0P,Et.Rpv,Et.m6i,Et.P6O,Et.ik8,Et.LM3,Et.Y$T),(0,e.ri)(p).use(Ft).use(Dt).use(It.zx).use(Pt.aV).use(At.bL).use(Ot.Ee).use(xt.ol).use(Ht.JO).use(Wt.P8).use(zt.gb).use(jt.gU).component("font-awesome-icon",Bt.GN).mount("#app")},6903:function(t){"use strict";t.exports=dns},4654:function(){},2361:function(){},4616:function(){}},a={};function i(e){var o=a[e];if(void 0!==o)return o.exports;var s=a[e]={id:e,loaded:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.m=t,function(){var t=[];i.O=function(a,e,o,s){if(!e){var n=1/0;for(c=0;c<t.length;c++){e=t[c][0],o=t[c][1],s=t[c][2];for(var r=!0,l=0;l<e.length;l++)(!1&s||n>=s)&&Object.keys(i.O).every((function(t){return i.O[t](e[l])}))?e.splice(l--,1):(r=!1,s<n&&(n=s));if(r){t.splice(c--,1);var d=o();void 0!==d&&(a=d)}}return a}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[e,o,s]}}(),function(){i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,{a:a}),a}}(),function(){i.d=function(t,a){for(var e in a)i.o(a,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:a[e]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)}}(),function(){i.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){var t={143:0};i.O.j=function(a){return 0===t[a]};var a=function(a,e){var o,s,n=e[0],r=e[1],l=e[2],d=0;if(n.some((function(a){return 0!==t[a]}))){for(o in r)i.o(r,o)&&(i.m[o]=r[o]);if(l)var c=l(i)}for(a&&a(e);d<n.length;d++)s=n[d],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(c)},e=self["webpackChunkradio_dock"]=self["webpackChunkradio_dock"]||[];e.forEach(a.bind(null,0)),e.push=a.bind(null,e.push.bind(e))}();var e=i.O(void 0,[998],(function(){return i(5549)}));e=i.O(e)})();
//# sourceMappingURL=app.76716057.js.map