(this.webpackJsonpmetronome=this.webpackJsonpmetronome||[]).push([[0],{63:function(e,t,a){e.exports=a(86)},68:function(e,t,a){},86:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),s=a.n(r),o=(a(68),a(121)),c=a(44),l=a(126),u=a(12),p=a(13),m=a(15),h=a(14),d=a(16),y=a(11),b=a.n(y),v=a(88),f=a(116),E=a(120),g=a(130),P=a(122),k=a(128),B=a(127),S={textTransform:"none"},w={margin:10},j={margin:10},M=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"addBpm",value:function(e){var t=parseInt(this.props.currentBpm,10)+parseInt(e,10);t<0||this.updateMetronomeBpm(t)}},{key:"updateMetronomeBpm",value:function(e){this.props.updateBpm(e)}},{key:"multiplyBpmBy",value:function(e){var t=Math.floor(parseInt(this.props.currentBpm,10)*parseFloat(e,10));t<0||this.updateMetronomeBpm(t)}},{key:"isPositiveRealNumber",value:function(e){return!(isNaN(e)||e<0)}},{key:"createAdornment",value:function(){return"Quarter"===this.props.tempoStyle?{startAdornment:i.a.createElement(f.a,{position:"start"},"\u2669 = ")}:{endAdornment:i.a.createElement(f.a,{position:"end"},"BPM ")}}},{key:"changeTempoStyle",value:function(e){var t=e.target.value;"Quarter"!==t&&"BPM"!==t||this.props.changeTempoStyle(t)}},{key:"handleInput",value:function(e){var t=e.target.value;this.isPositiveRealNumber(t)&&this.updateMetronomeBpm(t)}},{key:"render",value:function(){return i.a.createElement(E.a,{variant:"outlined"},i.a.createElement(c.a,{variant:"caption",style:j},"Tempo"),i.a.createElement(o.a,{container:!0,spacing:1,alignItems:"center",justify:"center",direction:"row"},i.a.createElement(o.a,{item:!0,style:w},i.a.createElement(g.a,{"aria-label":"Tempostyle",label:"Tempostyle",name:"Tempostyle",value:this.props.tempoStyle,onChange:this.changeTempoStyle.bind(this)},i.a.createElement(P.a,{value:"Quarter",control:i.a.createElement(k.a,null),label:"Quarter Notes per Minute"}),i.a.createElement(P.a,{value:"BPM",control:i.a.createElement(k.a,null),label:"Beats per Minute"}))),i.a.createElement(o.a,{item:!0,style:w},i.a.createElement(B.a,{InputProps:this.createAdornment(),id:"username",onChange:this.handleInput.bind(this),value:this.props.currentBpm,placeholder:"0",margin:"normal",label:"Enter Tempo",variant:"standard",autoFocus:!0})),i.a.createElement(o.a,{item:!0,style:w},i.a.createElement(o.a,{container:!0,alignItems:"center",justify:"center",spacing:1,direction:"row"},i.a.createElement(o.a,{item:!0},i.a.createElement(v.a,{"aria-label":"+10",onClick:this.addBpm.bind(this,"+10"),variant:"contained"},"+10")),i.a.createElement(o.a,{item:!0},i.a.createElement(v.a,{"aria-label":"x1.5",style:S,onClick:this.multiplyBpmBy.bind(this,"1.5"),variant:"contained"},"x1.5")),i.a.createElement(o.a,{item:!0},i.a.createElement(v.a,{"aria-label":"x2",style:S,onClick:this.multiplyBpmBy.bind(this,"2"),variant:"contained"},"x2.0"))),i.a.createElement(o.a,{container:!0,justify:"center",alignItems:"center",spacing:1,direction:"row"},i.a.createElement(o.a,{item:!0},i.a.createElement(v.a,{"aria-label":"-10",onClick:this.addBpm.bind(this,"-10"),variant:"contained"},"-10")),i.a.createElement(o.a,{item:!0},i.a.createElement(v.a,{"aria-label":"\xf71.5",onClick:this.multiplyBpmBy.bind(this,"0.75"),variant:"contained"},"\xf71.5")),i.a.createElement(o.a,{item:!0},i.a.createElement(v.a,{"aria-label":"\xf72",onClick:this.multiplyBpmBy.bind(this,"0.5"),variant:"contained"},"\xf72"))))))}}]),t}(n.Component),O=a(132),C=a(129),A=a(54),T=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={counterRythm:1,basicPulse:1},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"updateCounterRythm",value:function(e){return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(isNaN(e.target.value)||parseInt(e)<=0)){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,b.a.awrap(this.setState({counterRythm:e.target.value}));case 6:case"end":return t.stop()}}),null,this)}},{key:"updateBasicPulse",value:function(e){return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(isNaN(e.target.value)||parseInt(e)<=0)){t.next=4;break}return t.abrupt("return");case 4:return t.next=6,b.a.awrap(this.setState({basicPulse:e.target.value}));case 6:case"end":return t.stop()}}),null,this)}},{key:"createOptions",value:function(e){for(var t=[],a=1;a<e+1;a++)t.push(i.a.createElement("option",{key:a,value:a},a));return t}},{key:"playPolyrythm",value:function(){this.props.playPolyrythm(this.state.counterRythm,this.state.basicPulse)}},{key:"render",value:function(){var e=this;return i.a.createElement(E.a,{variant:"outlined"},i.a.createElement(c.a,{style:j,variant:"caption"},"Polyrythm"),i.a.createElement(o.a,{container:!0,alignItems:"center",justify:"center",direction:"row"},i.a.createElement(o.a,{item:!0,style:w},i.a.createElement(O.a,null,i.a.createElement(C.a,{htmlFor:"Counterrythm-Input"},"Counterrythm"),i.a.createElement(A.a,{id:"Counterrythm-Input",onChange:function(t){return e.updateCounterRythm(t)}},this.createOptions(25)))),i.a.createElement(o.a,{item:!0,style:w},i.a.createElement(c.a,null," against ")),i.a.createElement(o.a,{item:!0,style:w},i.a.createElement(O.a,null,i.a.createElement(C.a,{htmlFor:"Basic-Pulse-Input"},"Basic\xa0Pulse"),i.a.createElement(A.a,{id:"Basic-Pulse-Input",onChange:function(t){return e.updateBasicPulse(t)}},this.createOptions(25)))),i.a.createElement(o.a,{item:!0,style:w},i.a.createElement(v.a,{variant:"contained","aria-label":"Play-Polyrythm",onClick:function(){return e.playPolyrythm()}},"Play Polyrythm"))))}}]),t}(n.Component),L=a(123),I=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleClick",value:function(e){this.props.changeSubdivision(e)}},{key:"createButtonGroups",value:function(e){for(var t=[],a=1;a<=e;a++){var n=this.props.beatAccentuation.get(a-1),r="\u2588".repeat(n);0===r.length&&(r="mute"),t.push(i.a.createElement(o.a,{key:a,item:!0},i.a.createElement(o.a,{container:!0,alignItems:"center",direction:"column"},i.a.createElement(o.a,{item:!0},i.a.createElement(c.a,null,r)),i.a.createElement(o.a,{item:!0},i.a.createElement(L.a,{key:"upTo"+a,size:"small"},i.a.createElement(v.a,{size:"small",onClick:this.props.changeSubdivision.bind(this,a),variant:"outlined",value:n,"aria-label":"Subdivision "+a},a))))))}return i.a.createElement(o.a,{container:!0,style:w,direction:"row"},t)}},{key:"render",value:function(){return i.a.createElement(E.a,{variant:"outlined"},i.a.createElement(c.a,{variant:"caption",style:j},"Beat Accents"),this.createButtonGroups(this.props.numberOfSubdivisions))}}]),t}(n.Component),U=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"isPositiveRealNumber",value:function(e){return!(isNaN(e)||e<0)}},{key:"updateBeatsPerMeasure",value:function(e){var t=e.target.value.trim();this.isPositiveRealNumber(t)&&this.props.updateTimeSignature(t,this.props.beatUnit)}},{key:"updateBeatUnit",value:function(e){var t=e.target.value.trim();this.isPositiveRealNumber(t)&&this.props.updateTimeSignature(this.props.beatsPerMeasure,t)}},{key:"render",value:function(){return i.a.createElement(E.a,{variant:"outlined"},i.a.createElement(c.a,{style:j,variant:"caption"},"Time Signature"),i.a.createElement(o.a,{container:!0,alignItems:"center",justify:"center",direction:"column"},i.a.createElement(o.a,{item:!0,style:w},i.a.createElement(B.a,{variant:"standard",id:"BeatsPerMeasureInput",value:this.props.beatsPerMeasure,onChange:this.updateBeatsPerMeasure.bind(this),label:"Beats per Measure"})),i.a.createElement(o.a,{item:!0,style:w},i.a.createElement(B.a,{variant:"standard",id:"BeatUnitInput",value:this.props.beatUnit,onChange:this.updateBeatUnit.bind(this),label:"Beat Unit"}))))}}]),t}(n.Component),x=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={beatUnitsPerMinute:a.props.defaultBpm,subdivisionsPerBeat:a.props.defaultSubdivisionsPerBeat,beatUnit:a.props.defaultBeatUnit,beatsPerMeasure:a.props.defaultBeatsPerMeasure,isPlaying:!1,beatAccentuation:a.props.defaultBeatAccentuation,tempoStyle:a.props.tempoStyle},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"updatePlayingLoop",value:function(){!0===this.state.isPlaying&&this.playLoop()}},{key:"updateTempo",value:function(){!0===this.state.isPlaying&&this.props.updateTempo(this.state.beatUnitsPerMinute,this.state.tempoStyle,this.state.beatUnit,this.state.subdivisionsPerBeat)}},{key:"playLoop",value:function(){this.setState({isPlaying:!0}),this.props.updateBeatLoop(this.state.beatsPerMeasure,this.state.subdivisionsPerBeat,this.state.beatAccentuation,this.state.tempoStyle,this.state.beatUnitsPerMinute,this.state.beatUnit)}},{key:"stopLoop",value:function(){this.setState({isPlaying:!1}),this.props.stopPlaying()}},{key:"playPolyrythm",value:function(e,t){var a;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a=this.createPolyrythmAccents(e,t),n.next=3,b.a.awrap(this.setState({beatsPerMeasure:e*t,beatUnit:e*t,beatAccentuation:a}));case 3:this.playLoop();case 4:case"end":return n.stop()}}),null,this)}},{key:"createPolyrythmAccents",value:function(e,t){var a=new Map;a.set(0,3);for(var n=1;n<e*t;n++)n%e===0?a.set(n,2):n%t===0?a.set(n,1):a.set(n,0);return a}},{key:"changeAccentuation",value:function(e){var t,a;return b.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t=this.state.beatAccentuation.get(e-1)||0,a=new Map(this.state.beatAccentuation).set(e-1,(t+1)%4),n.next=4,b.a.awrap(this.setState({beatAccentuation:a}));case 4:this.updatePlayingLoop();case 5:case"end":return n.stop()}}),null,this)}},{key:"changeTempoStyle",value:function(e){return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.awrap(this.setState({tempoStyle:e}));case 2:this.updateTempo();case 3:case"end":return t.stop()}}),null,this)}},{key:"updateBpm",value:function(e){return b.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.awrap(this.setState({beatUnitsPerMinute:e}));case 2:this.updateTempo();case 3:case"end":return t.stop()}}),null,this)}},{key:"updateTimeSignature",value:function(e,t){var a,n;return b.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:for(a=new Map(this.state.beatAccentuation),n=this.state.beatsPerMeasure;n<e;n++)a.set(parseInt(n),1);return i.next=4,b.a.awrap(this.setState({beatsPerMeasure:e,beatUnit:t,beatAccentuation:a}));case 4:this.updatePlayingLoop();case 5:case"end":return i.stop()}}),null,this)}},{key:"render",value:function(){return i.a.createElement("div",{style:{padding:20}}," ",i.a.createElement(o.a,{container:!0,spacing:2,alignItems:"center",justify:"center",direction:"column"},i.a.createElement(o.a,{item:!0},i.a.createElement(M,{defaultBpm:this.state.beatUnitsPerMinute,changeTempoStyle:this.changeTempoStyle.bind(this),updateBpm:this.updateBpm.bind(this),currentBpm:this.state.beatUnitsPerMinute,tempoStyle:this.state.tempoStyle})),i.a.createElement(o.a,{item:!0},i.a.createElement(U,{beatUnit:this.state.beatUnit,beatsPerMeasure:this.state.beatsPerMeasure,updateTimeSignature:this.updateTimeSignature.bind(this)})),i.a.createElement(o.a,{item:!0},i.a.createElement(o.a,{container:!0,justify:"center",spacing:2,column:"row"},i.a.createElement(o.a,{item:!0},i.a.createElement(v.a,{"aria-label":"Play Sound",variant:"contained",onClick:this.playLoop.bind(this)},"Play sound")),i.a.createElement(o.a,{item:!0},i.a.createElement(v.a,{"aria-label":"Stop Sound",variant:"contained",onClick:this.stopLoop.bind(this)},"Stop sound")))),i.a.createElement(o.a,{item:!0},i.a.createElement(T,{playPolyrythm:this.playPolyrythm.bind(this)})),i.a.createElement(o.a,{item:!0},i.a.createElement(I,{changeSubdivision:this.changeAccentuation.bind(this),beatAccentuation:this.state.beatAccentuation,numberOfSubdivisions:this.state.beatsPerMeasure}))))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).state={loop:null},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"updateBeatLoop",value:function(e,t,a,n,i,r){var s=this.createBeatLoop(e,t,a);this.setState({loop:s}),"Quarter"===n?this.props.midiPlayback.current.startPlayLoop(s,i,1/(r*t)):this.props.midiPlayback.current.startPlayLoop(s,i,1/(4*t))}},{key:"updateTempo",value:function(e,t,a,n){"Quarter"===t?this.props.midiPlayback.current.startPlayLoop(this.state.loop,e,1/(a*n)):this.props.midiPlayback.current.startPlayLoop(this.state.loop,e,1/(4*n))}},{key:"createBeatLoop",value:function(e,t,a){if(!e)return[[[],[]]];for(var n=[[200],[]],i=[[210],[]],r=[[205],[]],s=[[],[]],o=[],c=0;c<e*t;c++){switch(a.get(c)){case 1:o[c]=i;break;case 2:o[c]=r;break;case 3:o[c]=n;break;case 0:o[c]=s;break;default:o[c]=s}}return o}},{key:"stopPlaying",value:function(){this.props.midiPlayback.current.stopPlayLoop()}},{key:"render",value:function(){return i.a.createElement(x,{defaultSubdivisionsPerBeat:"1",defaultBeatUnit:"4",defaultBeatsPerMeasure:"4",defaultBpm:"120",defaultBeatAccentuation:new Map([[0,3],[1,1],[2,1],[3,1]]),tempoStyle:"Quarter",updateBeatLoop:this.updateBeatLoop.bind(this),updateTempo:this.updateTempo.bind(this),stopPlaying:this.stopPlaying.bind(this)})}}]),t}(n.Component),R=a(55),Q=a.n(R),W=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"startPlayLoop",value:function(e,t,a){this.midiSounds.startPlayLoop(e,t,a)}},{key:"stopPlayLoop",value:function(){this.midiSounds.stopPlayLoop()}},{key:"componentDidMount",value:function(){this.midiSounds.setEchoLevel(0),this.midiSounds.setMasterVolume(1)}},{key:"render",value:function(){var e=this;return i.a.createElement(Q.a,{ref:function(t){return e.midiSounds=t},appElementName:"root",drums:[200,205,210]})}}]),t}(n.Component),F=a(124),G=a(125);var J=function(){return i.a.createElement(F.a,{position:"static",color:"primary"},i.a.createElement(G.a,null,i.a.createElement(c.a,{variant:"h6",color:"initial"},"Metronome")))};var z=function(){var e=i.a.createRef();return i.a.createElement("div",{className:"App"},i.a.createElement(J,null),i.a.createElement(o.a,{container:!0,direction:"column",alignItems:"center"},i.a.createElement(o.a,{item:!0},i.a.createElement(N,{midiPlayback:e})),i.a.createElement(o.a,{item:!0},i.a.createElement(W,{ref:e})),i.a.createElement(o.a,{item:!0},i.a.createElement(c.a,null,"Check out the Code on\xa0",i.a.createElement(l.a,{href:"https://github.com/JanKneiphof/ReactMetronome",target:"_blank",rel:"noreferrer"},"Github")))))},D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function K(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}s.a.render(i.a.createElement(z,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/ReactMetronome",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/ReactMetronome","/service-worker.js");D?(!function(e,t){fetch(e).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):K(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):K(t,e)}))}}()}},[[63,1,2]]]);
//# sourceMappingURL=main.f3a2e7d5.chunk.js.map