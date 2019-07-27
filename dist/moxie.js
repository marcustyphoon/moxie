!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var s=new class{constructor(){this.loadSkill=this.loadSkill.bind(this),this.data={}}load(e){return Promise.all(Object.keys(e).map(this.loadSkill))}async loadSkill(e){try{const t=await fetch(`api-cache/${e}.json`),n=await t.json();this.data[e]=n}catch(t){console.log("could not fetch",e)}}get(e){return this.data[e]}},o=5736,a=5737,r=42086,i=40183,l=43470,c=42264,d=44857,u=5539,h=45313,f=43803,p=5557,g=42416,m=5516,w=5531,b=5517,y=44597,v=33162,S=30868,k=10285,_=10229,A=10190,$=43761,L=44321,C=21750,x=10221,E=10174,M=10267,D=10282,F=30525,B=29856,R=30814,P=10236,O=43638,T="-12",N="-11",j="-8",q="-6",W="-16",G="-14",H="-10",I="-7",J="-5",U=5624,X=27890,z=29613,K=14354,Y=44846,Z=9098,V=9089,Q=9154,ee=29632,te=30232,ne=30029,se=45717,oe=12492,ae=33902,re=45600,ie=28357;class le{constructor(e,t,n){this.start=e,this.end=t,this.label=n}render(e){const t=document.createElement("li");t.classList.add("mishap");const n=document.createElement("a"),s=((this.start-e.start)/1e3).toFixed(2),o=((this.end-e.start)/1e3).toFixed(2);return n.dataset.start=this.start,n.dataset.end=this.end,n.innerHTML=`${s}s&mdash;${o}s`,n.href="#",n.classList.add("time-link"),t.appendChild(n),this.label&&t.appendChild(document.createTextNode(" "+this.label)),t}}const ce=document.querySelector(".report-card-items");function de(e,t,n){if(0!==e.casts.length)switch(n.id){case"weaver_power_btth_small":case"weaver_power_fa_small":he(e),fe(e),pe(e),function(e){let t=e.start+16e3,n=3,s=0;const o=[];let a=!1;for(const r of e.casts)if(r.id===u){a=!0;let e=-1;for(;r.start>t&&t>=0;)n<3?n+=1:(s+=1,e=Math.min(e,t)),t+=16e3;e>0&&o.push(new le(e,r.start)),n-=1,t<0&&(t=r.start+16e3)}t<e.end&&(s+=Math.floor((e.end-t)/16e3),o.push(new le(t,e.end)));if(!a)return;let r="D";s<1?r="S":s<2?r="A":s<4?r="B":s<6&&(r="C");if(t>=0){ue(e,r,`Lost ${s} ${1===s?"charge":"charges"} of Arcane Blast`,o)}else ue(e,"S","Missing Arcane Blast casts",[])}(e),ge(e),me(e,g,100),function(e,t){let{firstStart:n,firstEnd:s,secondStart:o,secondEnd:a}=we(t.casts),{firstStart:r,firstEnd:i,secondStart:l,secondEnd:c}=we(e.casts);if(console.log(we(t.casts),we(e.casts)),r<0)return void ue(e,"D","Didn't use FGS at all",[]);if(l<0)return void ue(e,"D","Didn't pick up second FGS",[]);const d=i-r,u=c-l,h=s-n,f=a-o,p=r-e.start-n+(d-h)+(l-e.start-o)+(u-f);console.log("fgs diff",p,r,i,l,c);let g="D";p<500?g="S":p<1e3?g="A":p<2e3?g="B":p<4e3&&(g="C");function m(e){return`${10*Math.round(e/10)/1e3}s`}console.log("wait what",o);const w=[new le(r,i,`First FGS (bench is ${m(n)}-${m(s)})`),new le(l,c,`Second FGS (bench is ${m(o)}-${m(a)})`)];ue(e,g,`Goofed around with FGS for ${(p/1e3).toFixed(2)} seconds`,w)}(e,n),be(e,o),be(e,a);break;case"weaver_power_btth_large":case"weaver_power_fa_large":he(e),fe(e),pe(e),ge(e),me(e,g,100),be(e,a);break;case"daredevil_power":he(e,!0),fe(e),me(e,y,30),me(e,v,65),be(e,S);break;case"mirage":he(e),fe(e),ye(e,L,42/144),ye(e,$,16/144),be(e,k),be(e,_),be(e,A);break;case"chrono_power_gs":{he(e),fe(e);const t={resets:new Set([C])},n=Object.assign({leniency:2},t);be(e,C),be(e,x,n),be(e,E,t),be(e,M,t),be(e,F);break}case"chrono_power_focus":{he(e),fe(e);const t={resets:new Set([C])},n=Object.assign({leniency:2},t);be(e,C),be(e,E,t),be(e,M,t),be(e,D,n);break}case"chrono_power_boon":{he(e),fe(e);const t={resets:new Set([C])},n=Object.assign({leniency:2},t);be(e,C),be(e,E,n),be(e,P),be(e,R),be(e,B);break}case"chrono_condi_boon":he(e),fe(e),be(e,P),be(e,R),be(e,B);break;case"firebrand_condi":case"firebrand_condi_quick":he(e),fe(e),function(e,t,n,o){const a=s.get(t);if(!a)return void console.warn("Missing skill data",t);let r=o,i=e.start+n,l=0;const c=[];let d=!1;for(const s of e.casts)if(s.id===t){d=!0;let e=-1;for(;s.start>i&&i>=0;)r<o?r+=1:(l+=1,e=Math.min(e,i)),i+=n;e>0&&c.push(new le(e,s.start)),r-=1,i<0&&(i=s.start+n)}i<e.end&&(l+=Math.floor((e.end-i)/n),c.push(new le(i,e.end)));if(!d)return;let u="D";l<1?u="S":l<2?u="A":l<4?u="B":l<6&&(u="C");if(i>=0){const t=`Lost ${l} ${1===l?"charge":"charges"} of ${a.name}`;ue(e,u,t,c)}}(e,Y,12800,4),function(e,t,n){const o=s.get(t);if(!o)return void console.warn("Missing skill data",t);const a=[];for(const n of e.casts)n.fired&&n.id===t&&a.push(new le(n.start,n.end));let r="D",i=a.length;i-=n,i<1?r="S":i<2?r="A":i<4?r="B":i<6&&(r="C");i+=n;const l=1===i?"time":"times",c=`Cast bad skill ${o.name} ${i} ${l}`;ue(e,r,c,a)}(e,Z,6),function(e,t,n,o){const a=s.get(t);if(!a)return void console.warn("Missing skill data",t);const r=[];let i=[],l=0;for(const s of e.casts)if(s.fired)if(s.id===t)i.push(s),i.length>n&&(r.push(new le(s.start,s.end)),l+=s.end-s.start);else{if(0===i.length)continue;s.start-i[0].end>o&&(i=[])}let c="D",d=r.length;d<1?c="S":d<2?c="A":d<4?c="B":d<6&&(c="C");const u=1===d?"time":"times",h=`Spammed ${a.name} too much ${d} ${u} (lost ${(l/1e3).toFixed(2)}s)`;ue(e,c,h,r)}(e,V,2,5e3);break;case"soulbeast_power_moa_gs":case"soulbeast_power_moa_lb":he(e),fe(e),be(e,se),be(e,oe),me(e,ae,45),me(e,re,97);break;case"renegade_kalla":case"renegade_shiro":he(e),fe(e),function(e,t,n){const o=s.get(t);if(!o)return void console.warn("Missing skill data",t);let a=[],r=[];for(const s of e.casts)if(s.id===t&&(r.push(s.end-s.start),s.end-s.start>n)){let e=(s.end-s.start-n)/1e3;a.push(new le(s.start+n,s.end,`Over by ${e.toFixed(2)}s`))}console.log("cast times",r);let i=0;for(let e of r)i+=e-n;let l="D";i<200?l="S":i<500?l="A":i<1e3?l="B":i<2e3&&(l="C");const c=`Left ${(i/1e3).toFixed(2)}s worth of ${o.name} uncancelled`;ue(e,l,c,a)}(e,ie,600),ve(e);break;default:console.warn("Nothing cool to do for",n.id),he(e),fe(e),ve(e)}else console.warn("Log has no casts")}function ue(e,t,n,s){const o=document.createElement("li");o.classList.add("report-card-item");const a=document.createElement("span");a.classList.add("grade","grade-"+t.toLowerCase()),a.textContent=t;const r=document.createElement("span");r.classList.add("explanation"),r.textContent=n;const i=document.createElement("div");i.classList.add("report-card-item-expander"),i.textContent="Show Mishaps",i.addEventListener("click",(function(){o.classList.contains("open")?(i.textContent="Show Mishaps",o.classList.remove("open"),o.parentNode.classList.remove("single")):(i.textContent="Hide Mishaps",o.classList.add("open"),o.parentNode.classList.add("single"))})),o.appendChild(a),o.appendChild(document.createTextNode(" ")),o.appendChild(r),o.appendChild(i);const l=document.createElement("ul");l.classList.add("mishap-list");for(let t of s)l.appendChild(t.render(e));o.appendChild(l),ce.appendChild(o),console.log("additional data",s)}function he(e,t){const n=[];for(const t of e.casts){if(!t.fired)continue;let e=s.get(t.id);if(e&&e.slot){if("Weapon_1"!==e.slot)continue;if(!e.prev_chain&&e.next_chain&&n.push([t]),e.prev_chain){if(!n[n.length-1]){console.warn("Phantom chain!",t);continue}n[n.length-1].push(t)}}}let o={chains:[],total:0},a={chains:[],total:0};for(let e of n)3!==e.length&&(console.log("bad chain of length",e.length),e.length>3&&console.log("wait what",e),1===e.length?(o.total+=e[e.length-1].end-e[0].start,o.chains.push(e)):2===e.length&&(a.total+=e[e.length-1].end-e[0].start,a.chains.push(e)));console.log("wastedOne",o),console.log("wastedTwo",a);const r=e.casts[e.casts.length-1].end-e.casts[0].start;if(console.log("eliminating one",1-(r-o.total)/r),console.log("eliminating two",1-(r-a.total)/r),t){let t="";t=0===o.chains.length?"S":o.chains.length<3?"A":o.chains.length<7?"B":o.chains.length<15?"C":"D";let n="attack";1!==o.chains.length&&(n+="s"),ue(e,t,`Let ${o.chains.length} single auto ${n} happen`,o.chains.map(e=>new le(e[0].start,e[e.length-1].end)))}let i="";i=0===a.chains.length?"S":a.chains.length<2?"A":a.chains.length<5?"B":"C";let l=`Missed ${a.chains.length} auto chain finisher`;1!==a.chains.length&&(l+="s"),ue(e,i,l,a.chains.map(e=>new le(e[0].start,e[e.length-1].end)))}function fe(e){let t=0,n=[],s=0,o=[],a=-1;for(const r of e.casts)if(r.end!==r.start){if(a>0){let s=r.start-a;s<0?console.log("WHAT",r):(t+=s,s>30&&n.push(new le(a,r.start,e.skills[r.id]||"Unknown skill")))}r.fired||(s+=r.end-r.start,r.end-r.start>30&&o.push(new le(r.start,r.end,e.skills[r.id]||"Unknown skill"))),a=r.end}console.log("deadspace",t),console.log("cancels",s);let r=a-e.casts[0].start;console.log("out of",r),console.log("kills your deeps by",1-(r-t-s)/r);let i="B";t<5e3?i="S":t<1e4&&(i="A"),ue(e,i,`Did nothing for ${(t/1e3).toFixed(2)} seconds`,n);let l="B";s<5e3?l="S":s<1e4&&(l="A"),ue(e,l,`Canceled skills for ${(s/1e3).toFixed(2)} seconds`,o)}function pe(e){let t=e.buffs[r];const n=e.buffs[l];if(!t){t=[];let n=1e3,s=5*n,o=e.start-s-n;for(const a of e.casts){if(a.id!==i)continue;let r=a.start-n;r-o<s||(o>e.start&&t.push({Remove:Math.min(o+s,r-1)}),o=r,t.push({Apply:r}))}o>e.start&&t.push({Remove:Math.min(o+s,e.end)})}let s=0,o=-1,a=[],c=0;for(let e of t){if(e.Apply){o<0&&(o=e.Apply);continue}if(e.Remove&&o<0)continue;const t=e.Remove;let r=0;const i=t-o;let l=-1;for(let e=s;e<n.length;e++){let a=n[e];if(a.Apply){l<0&&(l=a.Apply,s=e);continue}if(a.Remove&&l<0)continue;const c=a.Remove;if(c>o&&l<t&&(r+=Math.min(c,t)-Math.max(o,l)),c<t&&l>o){r+=i;break}if(l=-1,c>t)break}const d=r/i;c+=1,d<.8&&a.push({coverage:d,mishap:new le(o,t,`${Math.floor(100*d)}%`)}),o=-1}console.log(a);let d=`Misaligned ${a.length}/${c} Primordial Stance`;1!==a.length&&(d+="s");let u="D";a.length<1?u="S":a.length<2?u="A":a.length<4?u="B":a.length<6&&(u="C"),ue(e,u,d,a.map(e=>e.mishap))}function ge(e){if(!e.buffs.hasOwnProperty(l))return;const t={[h]:!0,[f]:!0,[o]:!0,[p]:!0},n=[],s=e.buffs[l].filter(e=>e.hasOwnProperty("Remove")).values(),a=e.buffs[c].filter(e=>e.hasOwnProperty("Remove")).values();let r=s.next(),i=s.next();for(const o of e.casts){for(;r.value&&r.value.Remove<o.start;)r=s.next();for(;i.value&&i.value.Remove<o.start;)i=a.next();r.value&&r.value.Remove<o.end&&(console.log("ff transition",o,e.skills[o.id]),t[o.id]||n.push(new le(o.start,o.end,e.skills[o.id]))),i.value&&i.value.Remove<o.end&&(console.log("aa transition",o,e.skills[o.id]),t[o.id]||n.push(new le(o.start,o.end,e.skills[o.id])))}let d="D";n.length<1?d="S":n.length<3?d="A":n.length<6?d="B":n.length<14&&(d="C");let u=`Switched attunements during ${n.length} unsafe skill`;1!==n.length&&(u+="s"),ue(e,d,u,n)}function me(e,t,n){const s=e.buffs[t];let o=0,a=-1,r=-1,i=[];for(let e of s)e.Apply&&a<0&&(r>0&&(e.Apply-r>30&&i.push(new le(r,e.Apply)),o+=e.Apply-r),a=e.Apply),e.Remove&&(r=e.Remove,a=-1);const l=(o/1e3).toFixed(2),c=100-Math.floor(100*o/(e.end-e.start));let d="D";const u=(n-c)/n;u<.02?d="S":u<.05?d="A":u<.1?d="B":u<.25&&(d="C"),ue(e,d,`Had ${c}% uptime on ${e.skills[t]} (dropped for ${l}s, target ${n}%)`,i)}function we(e){let t=-1,n=-1,s=-1,o=-1,a=!0;for(const r of e)if(a)r.id===m&&(t=r.start),r.id===w&&(n=r.end,a=!1);else{if(!(o<0))break;r.id===b&&(console.log("secondStart",r.start),s=r.start),r.id===w&&(o=r.end)}return{firstStart:t,firstEnd:n,secondStart:s,secondEnd:o}}function be(e,t,n={}){const o=s.get(t);if(!o)return void console.warn("Missing skill data",t);let a;for(let e of o.facts)"Recharge"===e.type&&(a=1e3*e.value/1.25);if(!a)return void console.warn("Missing skill recharge",t,o);let r=e.start+a,i=0;const l=[];let c=n.resets;for(const n of e.casts)if(c&&c.has(n.id)&&(r=n.end),n.id===t){if(n.start>r){let e=n.start-r;e>200&&l.push(new le(r,n.start)),i+=e}r=n.end+a}let d=Math.floor(i/a),u="D";const h=n.leniency||0;d-=h,d<1?u="S":d<2?u="A":d<4?u="B":d<6&&(u="C"),d+=h,ue(e,u,`Lost ${d} ${1===d?"cast":"casts"} of ${o.name}`,l)}function ye(e,t,n){const o=s.get(t);if(!o)return void console.warn("Missing skill data",t);let a=0;for(const n of e.casts)n.id===t&&(a+=1);let r="D";const i=Math.floor(n*(e.end-e.start)/1e3);i-a<1?r="S":i-a<2?r="A":i-a<4?r="B":i-a<6&&(r="C");const l=1===a?"time":"times";ue(e,r,`Cast ${o.name} ${a}/${i} ${l}`,[])}function ve(e){ue(e,"S","Missing build-specific advice",[])}const Se={Tempest:!0,Weaver:!0,Chronomancer:!0,Mirage:!0,Reaper:!0,Holosmith:!0,Soulbeast:!0,Daredevil:!0,Dragonhunter:!0,Firebrand:!0,Herald:!0,Renegade:!0,Berserker:!0};class ke{constructor(e){this.boss=e.boss||"Unknown",console.log(e.players),this.players=e.players.filter(e=>Se[e.profession]),this.onSelect=this.onSelect.bind(this),this.elt=null,this.playerSelect=null,this.listener=null}render(){this.elt=document.createElement("div"),this.elt.classList.add("target-select");let e=document.createElement("div");e.classList.add("target-select-boss-label"),e.textContent=this.boss,this.elt.appendChild(e),this.playerSelect=document.createElement("select"),this.playerSelect.classList.add("target-select-player-select");for(let e of this.players){let t=document.createElement("option");t.textContent=e.name,t.value=e.name,this.playerSelect.appendChild(t)}this.elt.appendChild(this.playerSelect);let t=document.createElement("input");t.classList.add("target-select-submit"),t.type="button",t.value="Analyze",t.addEventListener("click",this.onSelect),this.elt.appendChild(t),document.querySelector(".target-select-container").appendChild(this.elt)}remove(){this.elt.parentNode.classList.add("hidden"),this.elt.parentNode.removeChild(this.elt),this.playerSelect=null,this.elt=null}onSelect(){let e=null;for(let t of this.players)this.playerSelect.value===t.name&&(e=t);this.remove(),this.listener(e),this.listener=null}}function _e(e,t){if(e.skillMap)for(const n in e.skillMap){const s=e.skillMap[n];s.id||(s.id=n.substr(1)),t.push(s)}if(e.buffMap)for(const n in e.buffMap){const s=e.buffMap[n];s.id||(s.id=n.substr(1)),t.push(s)}let n={},s={},o={},a=e.players.map((e,t)=>Object.assign({id:t},e)),r=!1;for(let t=0;t<e.players.length;t++){if(e.players[t].hasOwnProperty("details")){let{buffs:o,casts:a}=Ae(e.players[t].details);n[t]=o,s[t]=a}else{let{buffs:o,casts:a}=$e(e.players[t]);r=!0,n[t]=o,s[t]=a}const a=e.players[t].targetDamage1S;a&&a[0]&&(o[t]=a[0][0])}let i={};for(let e of t)i[e.id]=e.name;let l=r?1:1e3;return{boss:e.fightName,players:a,start:e.phases[0].start*l,end:e.phases[0].end*l,skills:i,casts:s,buffs:n,targetDamage1S:o}}function Ae(e){let t={};for(let n of e.boonGraph[0]){t[n.id]=[];for(let e of n.states){let s=1e3*e[0];0===e[1]?t[n.id].push({Remove:s}):t[n.id].push({Apply:s})}}let n=[];for(let t of e.rotation)if(t[0])for(let t of e.rotation[0]){let e=1e3*t[0],s=t[1],o=t[2],a=t[3];t[4];n.push({id:s,start:e,end:e+o,fired:2!==a})}return{buffs:t,casts:n}}function $e(e){let t={},n=[];for(let n of e.buffUptimes){t[n.id]=[];for(let e of n.states){let[s,o]=e;0===o?t[n.id].push({Remove:s}):t[n.id].push({Apply:s})}}e.rotation||(e.rotation=[]);for(let t of e.rotation){let e=t.id;for(let s of t.skills){let t=s.castTime,o=t+s.duration,a=s.duration+s.timeGained>0;n.push({id:e,start:t,end:o,fired:a})}}return{buffs:t,casts:n}}var Le={parseJson:function(e){return _e(e,[])},getJson:async function(e){const t=await fetch(`https://dps.report/getJson?permalink=${e}`),n=await t.json();if(!n.hasOwnProperty("error"))return _e(n,[]);alert(`failed to fetch that log, message from dps.report: "${n.error}"`)}};async function Ce(e,t){const n=`./benchmarks/${e}.json`,s=await fetch(n),o=await s.json(),a=Le.parseJson(o);if(a.casts=a.casts[0],a.buffs=a.buffs[0],a.targetDamage1S=a.targetDamage1S[0],"deadeye_rifle"===e)for(let e=0;e<a.targetDamage1S;e++)a.targetDamage1S[e]=38100*a.targetDamage1S[e]/40720;return a.id=e,t||(a.name=e.replace(/_/g," ")),a}function xe(e,t){for(let n of e.casts)if(n.id===t)return!0;return!1}const Ee={[i]:!0},Me={5663:"4",43995:"F2"};var De=function(e,t,n,o,a,r){const{railHeight:i,railPad:l,timeToX:c}=a;for(const a of n){if(Ee[a.id])continue;const n=document.createElementNS("http://www.w3.org/2000/svg","g"),d=document.createElementNS("http://www.w3.org/2000/svg","title");let u=t.skills[a.id]||a.id;u+=` (${`${((a.start-t.start)/1e3).toFixed(2)}s`}, ${`${((a.end-a.start)/1e3).toFixed(2)}s`})`,d.textContent=u;const h=document.createElementNS("http://www.w3.org/2000/svg","rect");h.classList.add("cast"),a.fired||h.classList.add("cancel"),r&&h.classList.add(r);let f=null,p=s.get(a.id);if(p&&p.slot){let e="",t=p.slot.match(/(Weapon|Downed)_(\d)/);if(t&&t.length>0)e=t[2],p.prev_chain&&!p.next_chain&&(e+="f");else if("Elite"===p.slot)e="E";else if("Utility"===p.slot)e="U";else if("Heal"===p.slot)e="H";else if("Toolbelt"===p.slot)e="T";else{let t=p.slot.match(/Profession_(\d)/);t&&t.length>0&&(e="F"+t[1])}f=e}else if(t.skills[a.id]){let e=t.skills[a.id];if("Dodge"===e)f="D";else if(e.startsWith("Chapter")){let t=e.match(/Chapter (\d)/);t&&t.length>0&&(f="C"+t[1])}else e.startsWith("Epilogue")&&(f="C5")}!f&&Me.hasOwnProperty(a.id)&&(f=Me[a.id]);let g=null;f?(g=document.createElementNS("http://www.w3.org/2000/svg","text"),g.setAttribute("x",c(a.start)),g.setAttribute("y",(i+l)*o+i/2),g.classList.add("name"),g.textContent=f):console.warn("No label for skill",a.id,p,t.skills[a.id]),h.setAttribute("x",c(a.start)),h.setAttribute("y",(i+l)*o);const m=c(a.end)-c(a.start);m>6?h.setAttribute("width",m):(h.setAttribute("width",2),h.classList.add("cast-instant")),h.setAttribute("height",i),n.appendChild(d),n.appendChild(h),g&&n.appendChild(g),e.appendChild(n)}};const Fe={"Do Nothing Transformation Buff":!0,"Conjure Fire Attributes":!0,"Conjure Fiery Greatsword":!0,"Number of Boons":!0,"Ride the Lightning":!0,"Signet of Restoration":!0,"Elemental Refreshment":!0,"Fire Aura":!0,"Fire Attunement":!0,"Water Attunement":!0,"Air Attunement":!0,"Earth Attunement":!0,"The Light of Deldrimor":!0,"Hylek Language Effect":!0,"Incoming!":!0,"Jump Mushroom Knowledge":!0,"Mushroom Tracking Knowledge":!0,"Nuhoch Alchemy":!0,"Radiant Attunement":!0,"Speed Mushroom Knowledge":!0,"Solar Beam":!0,"Stealth Gliding":!0,"Xera's Fury":!0},Be={"Fire/Fire":0,"Earth/Fire":1,"Earth/Earth":2,"Fire/Earth":3,"Fire/Water":4,"Water/Fire":5,"Water/Earth":6,"Air/Water":7,"Air/Fire":8,"Air/Air":9,"Fire/Air":10,"Primordial Stance":11,"Elements of Rage":12,"Signet of Fire":13,"Glyph of Elemental Power (Fire)":14,"Magnetic Wave":15,"Weaver's Prowess":16,"Fencer's Finess":0,"Time Anchored":1,"Signet of the Ether":2,"Assassin's Signet (Passive)":0,"Assassin's Signet (Active)":1,"Bounding Dodger":2,Revealed:3,"Mirage Cloak":0,"Compounding Power":1,"Legendary Demon Stance":0,"Legendary Assassin Stance":1,"Legendary Renegade Stance":2,"Embrace the Darkness":3,"Impossible Odds":4,"Razorclaw's Rage":5,"Improved Kalla's Fervor":6,"Zealot's Flame":0,"Renewed Focus":1,"Ashes of the Just":2,"Symbolic Avenger":0,"Shield of Wrath":1,"Spear of Justice":2,Justice:3,"One Wolf Pack":0,"Sharpening Stone":1,"Sic 'Em!":2,"Twice as Vicious":3,"Reaper's Shroud":0};function Re(e,t,n,s){const o=document.createElementNS("http://www.w3.org/2000/svg","g"),a=document.createElementNS("http://www.w3.org/2000/svg","title"),r=document.createElementNS("http://www.w3.org/2000/svg","rect");return r.setAttribute("x",e),r.setAttribute("y",t),r.setAttribute("height",n),r.classList.add("buff"),s?r.classList.add("buff-outline"):o.appendChild(a),o.appendChild(r),o}function Pe(e,t,n){const s=e.querySelector("rect");s.setAttribute("width",t(n)-s.getAttribute("x"));const o=e.querySelector("title");if(!o)return;const a=parseFloat(e.dataset.start),r=(parseFloat(e.dataset.start)/1e3).toFixed(2),i=((n-a)/1e3).toFixed(2);o.textContent=`${r}s, ${i}s`}var Oe=function(e,t,n,s,o,a,r){const{railHeight:i,railPad:l,timeToX:c}=o;!function(e){const t=e.buffs;if(!t.hasOwnProperty(ee))return void console.log("no spear",e);const n=t[ee],s=[];for(const e of n){if(!e.hasOwnProperty("Remove"))continue;const t=e.Remove;if(0===t)continue;const n=7980;s.push({Apply:t}),s.push({Remove:t+n})}t[te]=s,e.skills[te]="Justice",console.log("did the thing",e)}(n);let d=n.buffs;if(!a){d={};for(const e in n.buffs){const t=n.skills[e];Be.hasOwnProperty(t)&&(d[e]=n.buffs[e])}}const u=Object.keys(d).sort((e,t)=>{let s=n.skills[e],o=n.skills[t];return Be.hasOwnProperty(s)?Be.hasOwnProperty(o)?Be[s]-Be[o]:-1:Be.hasOwnProperty(o)?1:s.localeCompare(o)});let h=s;for(const s of u){if(!/^[A-Z]/.test(n.skills[s]))continue;if(n.skills[s].startsWith("Guild"))continue;if(Fe[n.skills[s]])continue;const o=[];for(const t of d[s]){if(t.Apply){const e=Re(c(t.Apply),(i+l)*h,i,r);e.dataset.start=t.Apply,o.push(e)}if(t.Remove){let s=o.pop();s||(s=Re(c(n.start),(i+l)*h,i,r),s.dataset.start=n.start),Pe(s,c,t.Remove),e.appendChild(s)}}for(const t of o.reverse())Pe(t,c,n.end),e.appendChild(t);if(!r){const e=document.createElementNS("http://www.w3.org/2000/svg","text");e.textContent=n.skills[s],e.setAttribute("x",0),e.setAttribute("y",h*(i+l)+i/2),e.classList.add("name"),t.appendChild(e)}h+=1}return h-s};function Te(e){const t=new Array(e.length);let n=0;for(let s=0;s<e.length;s++){let o=0;s>=10&&(o=e[s-10]);let a=(e[s]-o)/10;t[s]=a,n=Math.max(a,n)}return{dps10s:t,max:n}}function Ne(e,t){const{railHeight:n,railPad:s}=t;let o=2*(n+s)+s,a=1.5*e,r=Math.log(a-e),i=Math.log(a);return function(e){const t=Math.log(a-e);return(r-t)/(r-i)*o+s}}function je(e,t,n,s){const{timeToX:o}=s;let a="",r=Ne(n,s);for(let n=0;n<t.length;n++){a+=0===n?"M":"L",a+=o(1e3*n+e.start)+" "+r(t[n])+" "}const i=document.createElementNS("http://www.w3.org/2000/svg","path");return i.setAttribute("d",a),i.classList.add("dps-path"),i}class qe{constructor(e,t,n,s,o){this.dps10s=t,this.benchDps10s=n,this.timeToX=o.timeToX,this.toY=Ne(s,o),this.elt=document.createElementNS("http://www.w3.org/2000/svg","g"),this.elt.classList.add("tooltip"),this.elt.classList.add("tooltip-hidden"),this.diffLine=document.createElementNS("http://www.w3.org/2000/svg","path"),this.diffLine.classList.add("tooltip-path"),this.explanation=document.createElementNS("http://www.w3.org/2000/svg","text"),this.explanation.classList.add("tooltip-explanation"),this.elt.appendChild(this.diffLine),this.elt.appendChild(this.explanation),e.appendChild(this.elt)}show(e,t){if(t<0)return;let n=this.timeToX(e);this.elt.setAttribute("transform",`translate(${n} 0)`),this.diffLine.setAttribute("d","");let s="",o=0;if(t<this.dps10s.length){let e=this.dps10s[t],n=this.toY(e);if(o=n,t<this.benchDps10s.length){let a=this.benchDps10s[t],r=this.toY(a);o=Math.min(o,(n+r)/2);let i=`M0 ${n} L0 ${r}`;this.diffLine.setAttribute("d",i);let l=e-a;s=`${l>0?"Ahead":"Behind"} ${Math.abs(Math.round(l))} at ${t}s (${Math.round(e)} vs ${Math.round(a)})`}else s=`${Math.round(e)}`}this.explanation.textContent=s,this.explanation.setAttribute("x",2),this.explanation.setAttribute("y",o),this.elt.classList.remove("tooltip-hidden")}hide(){this.elt.classList.add("tooltip-hidden")}}var We=function(e,t,n,s){const{railHeight:o,railPad:a,xToTime:r}=s,{dps10s:i,max:l}=Te(t.targetDamage1S),{dps10s:c,max:d}=Te(n.targetDamage1S),u=Math.max(l,d),h=je(t,i,u,s),f=je(t,c,u,s);f.classList.add("dps-path-benchmark"),e.appendChild(f),e.appendChild(h);let p=2*(o+a)+a;const g=new qe(e,i,c,u,s),m=e.parentNode;let w;e.addEventListener("mousemove",(function(e){if(w||(w=m.getBoundingClientRect()),e.clientY-w.top>p)return void g.hide();let n=e.clientX+m.scrollLeft-w.left,s=r(n),o=Math.round((s-t.start)/1e3);g.show(1e3*o+t.start,o)})),e.addEventListener("mouseleave",(function(){g.hide()}))};const Ge=["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a","Enter"],He={notAGoodPlayer:["you are $bad","you make me sick","you should have slash gee geed before you logged in","you should uninstall","uninstall","unplug your computer","you are too heavy for north america, go to europe","you must be from north america","is that you jil","go back to ERPing","I digital vomited in my digital mouth","go play $mmo","think about all the people you have let down with your $bad gameplay","if you want to be rewarded for being so $bad just play $mmo","blocked and reported","why not try some world bosses instead","gwen called, she wants you to uninstall","you made taimi cry","you make gorrik wish he could have joined blish","palawa joko came back but you are so $bad it killed him again","I would rather be in the realm of torment than evaluating gameplay this $bad","thank you for giving me your account name so I can block you"],wastedTime:["in that time I simulated $bigNumber universes, in all of them you were $bad","it took me zero point zero zero $number $number seconds to realize you will never get good","it takes just two minutes to uninstall","you could have downloaded $mmo in that time","were you $afk"],afraid:["afraid","scared"],bad:["trash","bad","terrible","garbage","subpar","disappointing"],mmo:["wow","ffxiv","eso","runescape","guild wars one"],bigNumber:["$number billion","$number hundred $doubleDigitNumber million $number hundred $doubleDigitNumber thousand $number hundred $doubleDigitNumber"],number:["one","two","three","four","five","six","seven","eight","nine"],doubleDigitNumber:["seventeen","twelve","twenty $number","thirty $number","forty $number","fifty $number","sixty $number","seventy $number","eighty $number","ninety $number"],afk:["afk","walking the dog","on a bio break","busy losing a raid tournament because you messed up reflect"],lostCast:["you may hate $spell but I hate your inability to play more","you do realize $spell does damage","$spell is your friend, unlike me","poor thing, in your hands $spell is just as nonexistent as zojja"]},Ie=JSON.stringify(He);function Je(e){for(;e.includes("$");){const t=/\$(\w+)/.exec(e);if(!t)return e;const n=He[t[1]];if(!n||0===n.length)return console.warn("Unable to substitute",t[1]),e;const s=n[Math.floor(Math.random()*n.length)];e=e.replace(t[0],s)}return e}function Ue(){const e=function(){const e=document.querySelectorAll(".report-card-item");if(0===e.length)return"too $afraid to upload a log? $notAGoodPlayer";let t="";for(const n of e){if("S"===n.querySelector(".grade").textContent)continue;let e=`you ${n.querySelector(".explanation").textContent.toLowerCase()}.`;e=e.replace("/"," out of an ideal ");let s="notAGoodPlayer";Math.random()>.3&&(e.includes("cast")?s="lostCast":e.includes("seconds")&&(s="wastedTime"));const o=He[s];n.dataset.spell?He.spell=[n.dataset.spell]:He.spell=["that spell","that ability","that skill","that spell","that ability","that skill","pressing keys"];const a=Math.floor(Math.random()*o.length),r=Je(o[a]);He[s].splice(a,1),0===He[s].length&&(He[s]=JSON.parse(Ie)[s]),t+=`${e} ${r}. `}return""===t?"maybe you aren't completely $bad. just kidding, $notAGoodPlayer":t}();console.log("doing the thing",e),function(e){const t=window.speechSynthesis,n=new SpeechSynthesisUtterance(e);for(let e of t.getVoices())"Daniel"===e.name&&(n.voice=e);n.rate=1.2,t.speak(n)}(e)}let Xe=0;var ze=function(){document.body.addEventListener("keydown",(function(e){let t=Ge[Xe];e.key===t?(Xe+=1,Xe>=Ge.length&&(Ue(),Xe=0)):Xe=0}))};const Ke=document.querySelector(".setup-container");function Ye(e){console.log("log",e);let t=new ke(e);t.listener=function(t){!async function(e,t){console.log(t,e),e.casts=e.casts[t.id],e.buffs=e.buffs[t.id],e.targetDamage1S=e.targetDamage1S[t.id],e.casts.sort((function(e,t){return e.start-t.start}));const n={};for(let t of e.casts)n[t.id]=!0;for(let t in e.skills)/^[A-Z]/.test(e.skills[t])&&(n[t]=!0);let a=await function(e,t){const n=t.profession;if("Tempest"===n){if(t.weapons.includes("Dagger")){return Ce(e.skills.hasOwnProperty(o)?"tempest_condi_gos":"tempest_condi_ele")}return Ce("tempest_power")}if("Weaver"===n){if(!e.skills.hasOwnProperty(O)){if(t.weapons.includes("Staff"))return Ce("weaver_power_staff");{let t=e.buffs.hasOwnProperty(j);return xe(e,U)?Ce(t?"weaver_power_fa_large":"weaver_power_btth_large"):Ce(t?"weaver_power_fa_small":"weaver_power_btth_small")}}if(t.weapons.includes("Sword"))return Ce("weaver_condi_sword");if(t.weapons.includes("Dagger"))return Ce("weaver_condi_dagger")}if("Chronomancer"===n)return t.weapons.includes("Shield")?t.weapons.includes("Scepter")?Ce("chrono_condi_boon"):Ce("chrono_power_boon"):t.weapons.includes("Greatsword")?xe(e,P)?Ce("chrono_power_quick_gs"):Ce("chrono_power_gs"):t.weapons.includes("Scepter")?Ce("chrono_condi"):xe(e,P)?Ce("chrono_power_quick_focus"):Ce("chrono_power_focus");if("Mirage"===n)return Ce("mirage");if("Reaper"===n)return Ce("reaper");if("Holosmith"===n)return t.weapons.includes("Sword")?Ce("holo_power_sword"):t.weapons.includes("Rifle")?Ce("holo_power_rifle"):Ce("holo_condi");if("Soulbeast"===n)return t.weapons.includes("Shortbow")?Ce("soulbeast_condi_sb"):t.weapons.includes("Torch")?Ce("soulbeast_condi"):t.weapons.includes("Greatsword")?Ce("soulbeast_power_moa_gs"):Ce("soulbeast_power_moa_lb");if("Daredevil"===n)return t.weapons.includes("Staff")?Ce("daredevil_power"):Ce("daredevil_condi");if("Deadeye"===n){if(t.weapons.includes("Rifle"))return Ce("deadeye_rifle");if(t.weapons.includes("Pistol"))return Ce("deadeye_condi")}if("Dragonhunter"===n)return t.weapons.includes("Sword")?xe(e,ne)?Ce("dragonhunter_sword_virtues"):Ce("dragonhunter_sword"):Ce("dragonhunter_scepter");if("Guardian"===n)return Ce("guardian");if("Firebrand"===n)return xe(e,Q)?Ce("firebrand_condi"):t.weapons.includes("Greatsword")?Ce("firebrand_power_quick"):Ce("firebrand_condi_quick");if("Herald"===n)return Ce("herald_boon");if("Renegade"===n)return t.weapons.includes("Sword")?Ce("renegade_alac"):e.buffs.hasOwnProperty(X)?Ce("renegade_shiro"):Ce("renegade_kalla");if("Berserker"===n){return t.weapons.includes("Longbow")?xe(e,z)?Ce("berserker_condi"):Ce("berserker_condi_banners"):xe(e,K)?Ce("berserker_power"):Ce("berserker_power_banners")}return Promise.resolve({targetDamage10S:[],casts:[]})}(e,t);for(let e of a.casts)n[e.id]=!0;await s.load(n),document.getElementById("benchmark-name").textContent=a.name,a.casts.sort((function(e,t){return e.start-t.start})),document.querySelector(".container").classList.remove("hidden");const r=(e.end-e.start)/20,i=document.querySelector(".timeline"),u=document.querySelector(".gameplay-video"),h=document.createElement("div");h.classList.add("board-container"),h.classList.add("show-benchmark");const f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.style.width=r+"px",f.classList.add("board"),h.appendChild(f);const p=document.createElementNS("http://www.w3.org/2000/svg","svg");p.classList.add("legend"),p.classList.add("show-benchmark");const g=document.createElementNS("http://www.w3.org/2000/svg","rect");function m(t){return r*(t-e.start)/(e.end-e.start)}function w(t){return t/r*(e.end-e.start)+e.start}g.setAttribute("x",0),g.setAttribute("y",0),g.setAttribute("width",2),g.classList.add("needle"),f.appendChild(g),i.appendChild(p),i.appendChild(h);const b={[l]:"Fire/Fire",[q]:"Fire/Air",[J]:"Fire/Water",[I]:"Fire/Earth",[c]:"Air/Air",[T]:"Air/Water",[N]:"Air/Fire",[j]:"Water/Fire",[H]:"Water/Earth",[d]:"Earth/Earth",[W]:"Earth/Air",[G]:"Earth/Fire"};for(const t in b)e.skills[t]=b[t],a.skills[t]=b[t];for(const t of a.casts)t.start+=e.start,t.end+=e.start;const y={railHeight:20,railPad:4,width:r,timeToX:m,xToTime:w},v={showBenchmark:!0,showDps:!0,showBoringBuffs:!1,videoOffset:1.8,castLabelType:"icons"},S=document.getElementById("show-benchmark");S.checked=v.showBenchmark;const k=document.getElementById("show-dps");k.checked=v.showDps;const _=document.getElementById("show-boring-buffs");_.checked=v.showBoringBuffs;const A=document.getElementById("cast-label-type");function $(n){return function(s){console.log("onchange",n,s,s.target),v[n]=s.target.checked,Ze(e,a,t,y,v)}}A.value=v.castLabelType,S.addEventListener("change",$("showBenchmark")),k.addEventListener("change",$("showDps")),_.addEventListener("change",$("showBoringBuffs")),A.addEventListener("change",(function(){v.castLabelType=A.value})),Ze(e,a,t,y,v);let L=h.getBoundingClientRect();function C(t,n){const s=m(t);g.setAttribute("x",s),(!n||s<h.scrollLeft||s>h.scrollLeft+L.width)&&(h.scrollLeft=s-L.width/2),n&&(u.currentTime=(t-e.start)/1e3+v.videoOffset)}f.addEventListener("click",(function(e){C(w(e.clientX+h.scrollLeft-L.left),!0)})),document.body.addEventListener("click",(function(e){if(e.target.classList.contains("time-link")){e.preventDefault();let t=parseFloat(e.target.dataset.start);t&&C(t,!0)}})),u.addEventListener("timeupdate",(function(){C(1e3*(u.currentTime-v.videoOffset)+e.start)})),de(e,0,a),ze()}(e,t)},t.render()}function Ze(e,t,n,s,o){const{railHeight:a,railPad:r}=s,i=document.querySelector(".board"),l=document.querySelector(".legend"),c=document.querySelector(".needle");i.innerHTML="",l.innerHTML="";let d=0;if(o.showDps){We(i,e,t,s);const n=document.createElementNS("http://www.w3.org/2000/svg","text");n.textContent="Damage per 10s",n.setAttribute("x",0),n.setAttribute("y",a/2),n.classList.add("name"),l.appendChild(n),d+=3}if(o.showBenchmark){De(i,e,t.casts,d,s,"benchmark");const n=document.createElementNS("http://www.w3.org/2000/svg","text");n.textContent="Benchmark",n.setAttribute("x",0),n.setAttribute("y",d*(a+r)+a/2),n.classList.add("name"),l.appendChild(n),d+=1,function(e,t){let n={};for(let s in e.buffs)t.buffs.hasOwnProperty(s)?n[s]=t.buffs[s]:n[s]=[];t.buffs=n}(e,t),Oe(i,l,t,d+1,s,o.showBoringBuffs,!0)}De(i,e,e.casts,d,s);const u=Oe(i,l,e,d+1,s,o.showBoringBuffs,!1)+1+d;i.style.height=u*(a+r)-r+"px",l.style.height=u*(a+r)-r+"px",c.setAttribute("height",u*(a+r)-r),i.appendChild(c)}!async function(){const e=document.querySelector(".dpsreport-text"),t=document.querySelector(".dpsreport-submit");function n(){let o=e.value.trim();if(!/^https:\/\/dps\.report\/[^/]+$/.test(o))return void alert("Paste in format https://dps.report/Sosx-20180802-193036_cairn");let a=new URL(o);var r;t.value="Fetching",t.removeEventListener("click",n),t.removeEventListener("keypress",s),r=a.pathname.substr(1),Le.getJson(r).then((function(e){e&&(Ke.classList.add("hidden"),Ye(e))})).catch(e=>{alert("failed to fetch that log, typo maybe?")})}function s(e){"Enter"===e.key&&n()}t.addEventListener("click",n),e.addEventListener("keypress",s);let o=document.getElementById("log-input");o.addEventListener("change",(function(){document.querySelector("#log-input + label").textContent="Parsing";let e=o.files[0];setTimeout((function(){!function(e){const t=new FileReader;t.onload=function(e){try{const t=e.target.result;let n=Le.parseJson(JSON.parse(t));Ke.classList.add("hidden"),Ye(n)}catch(e){alert("Failed to parse log file, should be JSON blob")}},t.readAsText(e)}(e)}),100)})),Ke.classList.remove("hidden");let a=document.querySelector(".gameplay-video-container"),r=document.querySelector(".gameplay-video"),i=document.getElementById("video-input");i.addEventListener("change",(function(){let e=document.querySelector("#video-input + label");e.textContent="Uploading";let t=i.files[0];setTimeout((function(){const n=new FileReader;n.onload=function(e){console.log("woot");let n=document.createElement("source");n.src=e.target.result,n.type=t.type,r.appendChild(n),a.classList.remove("no-video")},n.onprogress=function(t){if(t.lengthComputable){let n=Math.floor(100*t.loaded/t.total)+"%";e.textContent="Uploading "+n}},n.readAsDataURL(t)}),100)}))}()}]);