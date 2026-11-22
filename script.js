const A="ABCDEFGHIJKLMNOPQRSTUVWXYZ",S=360/26,NS="http://www.w3.org/2000/svg",$=i=>document.getElementById(i),M=n=>(n%26+26)%26;
const dec=(w,s)=>[...w].map(c=>A[M(A.indexOf(c)-s)]).join(""),enc=(w,s)=>dec(w,-s);

/* ===== النصوص: عربي / English ===== */
const T={
ar:{title:"تحدّي قيصر | لعبة فك الشفرة",h1:"تحدّي قيصر 🔐",lead:"وصلتك رسالة سرية من هاكر! ساعد قيصر-بوت يشفّر ويفك ويكسر الشفرات، وأثبت إنك محقق أمن سيبراني حقيقي. 3 مراحل، ولكل مرحلة مؤقت ⏱ فلا تتأخر!",ph:"اسمك (اختياري)",go:"ابدأ التحدي",st1:"1 شفّر",st2:"2 فُكّ",st3:"3 اكسر",chk:"تحقق",live:"النص عند هذه الإزاحة",shift:"الإزاحة",
 lose1:"⏰ انتهى الوقت!",lose2:"حظاً أوفر 🍀",ansWas:"الإجابة الصحيحة كانت",noGive:"لا تيأس، كل محقق يبدأ بمحاولة!",retry:"جرّب مرة ثانية 🔄",
 whyQ:"💡 ليش شفرة قيصر ضعيفة؟",whyA:"لأن فيها 25 احتمال بس، وأي أحد يجرّبها كلها في دقائق. عشان كذا الأنظمة الحديثة تستخدم تشفير أقوى بكثير.",bruteBtn:"🔓 شوف الـ25 احتمال لرسالة",again:"لاعب جديد 🔄",capCert:"اضغط على الشهادة لتكبيرها 🔍",close:"إغلاق ✕",credit:"صُمم بواسطة المهندسة نجد الشمري",
 G:"أنا قيصر-بوت 🤖 ساعدني أفك رسائل الهاكرز السرية!",typeHint:"اضغط على الخانات واكتب إجابتك من الكيبورد ⌨️",kb:"غيّر لغة الكيبورد للإنجليزي 🌐",
 hint0:"💡 تلميح (−1 نجمة)",hintN:"💡 تلميح آخر (−1 نجمة)",hintD:"💡 انتهت التلميحات (3 من 3)",hintOf:n=>"💡 تلميح "+n+" من 3: ",
 next:"المرحلة التالية",result:"شوف النتيجة 🏆",empty:"اكتب إجابتك أول 😉",ok:"🎉 صح عليك! ",bad:"قريب! راجع الحروف وجرّب مرة ثانية 💪",botHint:"🤖 تلميح من قيصر-بوت: ",loseB:"حظاً أوفر 🍀 لا تيأس وجرّب مرة ثانية!",
 tap:"اضغط على أي حرف في الحلقة الخارجية 👆",outer:"خارجي",inner:"داخلي",mean:"المعنى: ",first:"أول حرف في الإجابة: ",
 endH:n=>"أحسنت"+(n?" يا "+n:"")+"! 🎉",endB:r=>"🎉 صرت "+r+"! مبروك على شهادتك 🏆"},
en:{title:"Caesar Challenge | Cipher Game",h1:"Caesar Challenge 🔐",lead:"A secret message from a hacker just arrived! Help Caesar-Bot encrypt, decrypt and crack ciphers, and prove you’re a real cybersecurity investigator. 3 stages, each with a timer ⏱ — don’t be late!",ph:"Your name (optional)",go:"Start the challenge",st1:"1 Encrypt",st2:"2 Decrypt",st3:"3 Crack",chk:"Check",live:"Text at this shift",shift:"Shift",
 lose1:"⏰ Time’s up!",lose2:"Better luck next time 🍀",ansWas:"The correct answer was",noGive:"Don’t give up — every investigator starts with an attempt!",retry:"Try again 🔄",
 whyQ:"💡 Why is the Caesar cipher weak?",whyA:"It has only 25 possible keys, so anyone can try them all in minutes. That’s why modern systems use much stronger encryption.",bruteBtn:"🔓 See all 25 possibilities for",again:"New player 🔄",capCert:"Tap the certificate to enlarge 🔍",close:"Close ✕",credit:"Designed by Eng. Najd Alshammari",
 G:"I’m Caesar-Bot 🤖 Help me crack the hackers’ secret messages!",typeHint:"Tap the boxes and type your answer on the keyboard ⌨️",kb:"Switch your keyboard to English 🌐",
 hint0:"💡 Hint (−1 star)",hintN:"💡 Another hint (−1 star)",hintD:"💡 No more hints (3 of 3)",hintOf:n=>"💡 Hint "+n+" of 3: ",
 next:"Next stage",result:"See result 🏆",empty:"Type your answer first 😉",ok:"🎉 Correct! ",bad:"Close! Check the letters and try again 💪",botHint:"🤖 Hint from Caesar-Bot: ",loseB:"Better luck next time 🍀 Don’t give up — try again!",
 tap:"Tap any letter on the outer ring 👆",outer:"Outer",inner:"Inner",mean:"Meaning: ",first:"First letter of the answer: ",
 endH:n=>"Well done"+(n?", "+n:"")+"! 🎉",endB:r=>"🎉 Your title: "+r+" — congratulations! 🏆"}};
let lang="ar";
const t=k=>T[lang][k];

const L=[
{ar:{t:"المرحلة 1 · التشفير",task:"شفّر الكلمة بإزاحة +3 للأمام.",how:"لفّ القرص لين تصير الإزاحة 3، بعدها دوّر على كل حرف في الحلقة الخارجية واقرأ مقابله في الحلقة الداخلية."},en:{t:"Stage 1 · Encryption",task:"Encrypt the word with a +3 shift forward.",how:"Turn the wheel until the shift is 3, then find each letter on the outer ring and read its match on the inner ring."}},
{ar:{t:"المرحلة 2 · فك التشفير",task:"فُكّ تشفير الكلمة بالرجوع 3 خطوات للخلف.",how:"اضبط القرص على 3، وابحث عن كل حرف في الحلقة الداخلية، والحرف اللي فوقه في الخارجية هو الأصلي."},en:{t:"Stage 2 · Decryption",task:"Decrypt the word by going back 3 steps.",how:"Set the wheel to 3, find each letter on the inner ring — the letter above it on the outer ring is the original."}},
{k:1,ar:{t:"المرحلة 3 · كسر الشفرة",task:"كلمة مخفية من عالم البرمجة، وما أعطيناك المفتاح!",how:"لفّ القرص وجرّب الإزاحات وحدة وحدة، وراقب النص المفكوك في الشاشة لين تطلع لك كلمة معروفة."},en:{t:"Stage 3 · Code Breaking",task:"A hidden word from the programming world — and we’re not giving you the key!",how:"Turn the wheel and try the shifts one by one, watching the decoded text until a familiar word appears."}}];

/* ===== بنوك الكلمات (أحرف إنجليزية كبيرة فقط، والمفتاح +3) ===== */
const W1={CODE:["شفرة","Instructions written for computers"],DATA:["بيانات","Facts and information stored by computers"],WEB:["الويب","The network of pages on the internet"],APP:["تطبيق","A program on your phone"],FILE:["ملف","A saved document on a device"]},
W2={KEY:["مفتاح","Used to lock and unlock secret messages"],LOCK:["قفل","Keeps something closed and protected"],HIDE:["إخفاء","To keep something out of sight"],SAFE:["آمن","Protected and secure"]},
/* المرحلة 3: [تلميح عربي, النطق بالعربي, تلميح إنجليزي 1, تلميح إنجليزي 2] */
W3={PYTHON:["شعارها أفعى 🐍","بايثون","Its logo is a snake 🐍","Beginner-friendly and loved for AI and data science"],
JAVA:["شعارها فنجان قهوة ☕","جافا","Its logo is a cup of coffee ☕","Runs on billions of devices, including Android apps"],
SWIFT:["لغة أبل لتطبيقات الآيفون 🍎","سويفت","Apple’s language for iPhone apps 🍎","Apple’s modern successor to Objective-C"],
KOTLIN:["لغة مفضّلة لتطبيقات أندرويد 🤖","كوتلن","A preferred language for Android apps 🤖","Made by JetBrains"],
RUBY:["اسمها حجر كريم أحمر 💎","روبي","Named after a red gemstone 💎","Famous for the Rails web framework"],
GO:["لغة جوجل واسمها حرفين بس 🐹","جو","Made by Google, named with just two letters 🐹","Its mascot is a gopher"],
RUST:["اسمها يعني الصدأ، وشعارها ترس ⚙️","راست","Its name means corrosion on metal, and its logo is a gear ⚙️","Loved for fast, memory-safe systems programming"],
HTML:["هي اللي تبني هيكل صفحات الويب 🌐","لغة ترميز صفحات الويب","It builds the structure of web pages 🌐","HyperText Markup Language"],
JAVASCRIPT:["اللي تخلي صفحات الويب تتحرك وتتفاعل ⚡","جافاسكريبت","It makes web pages move and respond ⚡","Runs in every web browser"],
FLASK:["إطار عمل لبناء مواقع الويب بلغة بايثون 🧪","إطار عمل فلاسك","A framework for building websites with Python 🧪","A lightweight micro-framework"]};
const last=[],pick=(o,i)=>{const a=Object.keys(o);let x;do{x=a[Math.floor(Math.random()*a.length)]}while(x==last[i]);return last[i]=x};
function round(i){
 if(i==0){const p=pick(W1,0),a=enc(p,3);return{w:p,a:a,m:W1[p],h:{
  ar:["ابدأ بأول حرف: تحرّك 3 خطوات للأمام وشوف وين توصل.","كل حرف يتقدم 3 خطوات: A يصير D، وB يصير E… كمّل على نفس النمط.",T.ar.first+a[0]],
  en:["Start with the first letter: move it 3 steps forward and see where it lands.","Every letter moves 3 steps forward: A becomes D, B becomes E… keep the same pattern.",T.en.first+a[0]]}}}
 if(i==1){const p=pick(W2,1);return{w:enc(p,3),a:p,h:{
  ar:["ابدأ بأول حرف وارجع 3 خطوات للخلف.","المعنى بالعربي: "+W2[p][0],T.ar.first+p[0]],
  en:["Start with the first letter and go back 3 steps.","Meaning: "+W2[p][1],T.en.first+p[0]]}}}
 const p=pick(W3,2),w=W3[p];return{w:enc(p,3),a:p,k:3,h:{ar:[w[0],"المعنى بالعربي: "+w[1],T.ar.first+p[0]],en:[w[2],w[3],T.en.first+p[0]]}}
}

/* ===== المؤقت: الثواني لكل مرحلة (في المرحلة 3 البوت يرسل تلميح تلقائي عند نصف الوقت) ===== */
const TM=[90,90,150];
let tv,left=0;
const paint=()=>{const e=$("tm");e.textContent="⏱ "+Math.floor(left/60)+":"+String(left%60).padStart(2,"0");e.classList.toggle("low",left<=15)};
function stopT(){clearInterval(tv)}
function startT(i){
 stopT();left=TM[i];paint();
 tv=setInterval(()=>{
  left--;paint();if(left>0&&left<=10)beep(left<=3?880:660,.1);
  if(i==2&&left==TM[2]/2)say(t("botHint")+cr.h[lang][0],"hint");
  if(left<=0){stopT();lose()}
 },1000);
}
function lose(){
 show("s-lose");document.activeElement.blur();$("la").textContent=cr.a;
 say(t("loseB"),"bad");mood("sad");fx([300,220]);touch();
}

/* ===== ألقاب الفائزين + قيصر-بوت ===== */
const RK=[{t:"Tech Star",e:"⭐"},{t:"Cyber Pioneer",e:"🚀"},{t:"Digital Investigator",e:"🔍"},{t:"Vulnerability Hunter",e:"🛡️"},{t:"Encryption Genius",e:"🔐"}],
say=(s,c)=>{$("fb").textContent=s;$("fb").className=c||""},
mood=(m,d)=>{$("bot").setAttribute("class","bot "+m);clearTimeout(mood.t);if(d)mood.t=setTimeout(()=>mood(""),1800)};

/* ===== الشهادة (عربي + English) تظهر في نافذة كبيرة ===== */
let LN,LR;
const showCert=()=>{$("oim").src=cert(LN,LR);$("ov").hidden=false};
function cert(n,r){
 const pt=matchMedia("(orientation:portrait)").matches,W=pt?900:1200,H=pt?1200:800,m=W/2,k=H/800,z=pt?1.1:1;
 const c=document.createElement("canvas");c.width=W;c.height=H;const x=c.getContext("2d");
 const F="Tajawal,'Geeza Pro','Noto Sans Arabic',system-ui,sans-serif";
 const rr=(a,b,w,h,q)=>{x.beginPath();x.moveTo(a+q,b);x.arcTo(a+w,b,a+w,b+h,q);x.arcTo(a+w,b+h,a,b+h,q);x.arcTo(a,b+h,a,b,q);x.arcTo(a,b,a+w,b,q);x.closePath()};
 const tx=(s,y,w,px,col,d)=>{px=Math.round(px*z);x.font=w+" "+px+"px "+F;const mw=x.measureText(s).width,lim=W-170;if(mw>lim){px=Math.floor(px*lim/mw);x.font=w+" "+px+"px "+F}x.fillStyle=col;x.direction=d||"rtl";x.fillText(s,m,y*k)};
 const g=x.createLinearGradient(0,0,W,H);g.addColorStop(0,"#060a14");g.addColorStop(1,"#0f2347");x.fillStyle=g;x.fillRect(0,0,W,H);
 x.strokeStyle="rgba(34,211,238,.09)";x.lineWidth=1;
 for(let i=0;i<=W;i+=40){x.beginPath();x.moveTo(i,0);x.lineTo(i,H);x.stroke()}
 for(let i=0;i<=H;i+=40){x.beginPath();x.moveTo(0,i);x.lineTo(W,i);x.stroke()}
 x.strokeStyle="#22d3ee";x.lineWidth=6;rr(30,30,W-60,H-60,28);x.stroke();x.strokeStyle="#4ade80";x.lineWidth=2;rr(48,48,W-96,H-96,20);x.stroke();
 const bot=ox=>{x.fillStyle="#fbbf24";x.beginPath();x.moveTo(ox+5,110);x.quadraticCurveTo(ox+55,40,ox+105,110);x.lineTo(ox+90,112);x.quadraticCurveTo(ox+55,72,ox+20,112);x.fill();
  x.fillStyle="#111d38";rr(ox,105,110,90,24);x.fill();x.strokeStyle="#22d3ee";x.lineWidth=4;x.stroke();
  x.fillStyle="#04101c";rr(ox+14,120,82,52,14);x.fill();x.fillStyle="#22d3ee";
  [37,73].forEach(d=>{x.beginPath();x.arc(ox+d,142,8,0,7);x.fill()});
  x.beginPath();x.arc(ox+55,148,14,.2,2.94);x.stroke()};
 bot(80);bot(W-190);
 x.textAlign="center";
 tx("شهادة إنجاز",155,"800",64,"#e6f1ff");
 tx("Certificate of Achievement",205,"500",34,"#22d3ee","ltr");
 tx("تحدّي قيصر · Caesar Challenge",255,"500",30,"#8aa0c4");
 tx("تُمنح إلى · Awarded to",325,"500",30,"#8aa0c4");
 tx(n||"محقق شفرات · Cyber Detective",425,"800",88,"#4ade80");
 tx(r.e+" "+r.t,525,"800",56,"#fbbf24","ltr");
 tx("★".repeat(tot)+"☆".repeat(9-tot),600,"800",48,"#22d3ee","ltr");
 tx("النقاط · Score: "+tot+" / 9",660,"500",30,"#8aa0c4");
 tx(new Date().toLocaleDateString(lang=="ar"?"ar":"en-GB",{day:"numeric",month:"long",year:"numeric"}),725,"500",26,"#8aa0c4",lang=="ar"?"rtl":"ltr");
 return c.toDataURL("image/png");
}

/* ===== الحالة ===== */
let pos=0,ang=0,raf,sel=null,cur=-1,st=3,wr=0,hn=0,tot=0,snd=true,dn=0,idle,cr;
function mk(p,tag,at,tx){const e=document.createElementNS(NS,tag);for(const k in at)e.setAttribute(k,at[k]);if(tx)e.textContent=tx;p.appendChild(e);return e}
for(let i=0;i<26;i++){
 const g=mk($("outer"),"g",{transform:`rotate(${i*S}) translate(0 -126)`,class:"ol"});
 mk(g,"circle",{r:13,fill:"transparent"});mk(g,"text",{dy:".35em"},A[i]);
 g.onclick=()=>{sel=i;upd();tick()};
 mk($("ring"),"text",{transform:`rotate(${i*S}) translate(0 -85)`,dy:".35em",class:"il"},A[i]);
 mk($("outer"),"line",{y1:-108,y2:-144,transform:"rotate("+(i+.5)*S+")",class:"dv"});
 mk($("ring"),"line",{y1:-66,y2:-104,transform:"rotate("+(i+.5)*S+")",class:"dv"});
}
function beep(f,d){if(!snd)return;try{const c=beep.c||(beep.c=new AudioContext()),o=c.createOscillator(),g=c.createGain();o.frequency.value=f;g.gain.value=.05;o.connect(g);g.connect(c.destination);o.start();o.stop(c.currentTime+d)}catch(e){}}
const fx=a=>a.forEach((f,i)=>setTimeout(()=>beep(f,.12),i*110)),tick=()=>beep(520,.03);
function conf(n){for(let i=0;i<n;i++){const e=document.createElement("i");e.className="cf";e.style.cssText="left:"+Math.random()*100+"vw;background:"+["#f0c35a","#b9a2ff","#5eead4","#fda4af","#8b5cf6"][i%5]+";animation-delay:"+Math.random()*.4+"s;--d:"+(Math.random()*120-60)+"px";document.body.appendChild(e);setTimeout(()=>e.remove(),2700)}}
function rot(){const to=-pos*S,from=ang,t0=performance.now();cancelAnimationFrame(raf);(function f(ts){const p=Math.min(1,(ts-t0)/450),e=1-Math.pow(1-p,3);ang=from+(to-from)*e;$("ring").setAttribute("transform","rotate("+ang+")");if(p<1)raf=requestAnimationFrame(f)})(t0)}
function upd(){
 $("kv").textContent="+"+M(pos);$("lt").textContent=cr?dec(cr.w,pos):"";
 const h=$("hl");
 if(sel===null){h.setAttribute("visibility","hidden");$("ro").textContent=t("tap")}
 else{h.removeAttribute("visibility");h.setAttribute("transform","rotate("+sel*S+")");$("ro").innerHTML=t("outer")+" <bdi>"+A[sel]+"</bdi> ⇄ "+t("inner")+" <bdi>"+A[M(sel+pos)]+"</bdi>"}
}
function turn(d,q){pos+=d;upd();rot();if(!q)tick()}
function show(id){["s-start","s-play","s-end","s-lose"].forEach(s=>$(s).hidden=s!=id)}
function steps(){document.querySelectorAll("#stp li").forEach((li,i)=>{li.className=i<dn?"done":i==cur?"on":""})}
function sync(){const v=$("ans").value;$("slots").querySelectorAll("b").forEach((b,i)=>{b.textContent=v[i]||"";b.classList.toggle("cur",i==v.length&&!$("ans").disabled)})}
const glow=()=>{$("wheel").classList.add("win");setTimeout(()=>$("wheel").classList.remove("win"),1400)};
const touch=()=>{clearTimeout(idle);idle=setTimeout(()=>$("ag").click(),60000)};

/* نصوص المرحلة الحالية (تتحدث عند تبديل اللغة) */
function lvText(){
 const l=L[cur][lang];$("ttl").textContent=l.t;$("task").textContent=l.task;$("how").textContent=l.how;
 $("mean").textContent=cr.m?t("mean")+cr.m[lang=="ar"?0:1]:"";
 $("next").textContent=cur<2?t("next"):t("result");
 $("hint").textContent=hn<1?t("hint0"):hn<3?t("hintN"):t("hintD");
}
function load(i){
 cur=i;dn=i;cr=round(i);st=3;wr=0;hn=0;
 $("sr").textContent="⭐ "+tot;steps();lvText();
 $("tiles").innerHTML=[...cr.w].map(c=>"<span>"+c+"</span>").join("");$("tiles").dataset.n=cr.w.length;
 $("live").hidden=!L[i].k;
 const a=$("ans"),sl=$("slots");a.value="";a.maxLength=cr.a.length;a.disabled=false;sl.className="slots";sl.dataset.n=cr.a.length;mood("");
 sl.querySelectorAll("b").forEach(b=>b.remove());[...cr.a].forEach(()=>sl.append(document.createElement("b")));sync();
 say(t("typeHint"),"mt");
 $("chk").hidden=false;$("next").hidden=true;$("hint").hidden=false;$("hint").disabled=false;
 pos=0;sel=null;upd();rot();startT(i);if(matchMedia("(pointer:fine)").matches)a.focus();
}
function chk(){
 const v=$("ans").value.toUpperCase(),a=$("ans"),sl=$("slots");
 if(!v){say(t("empty"),"bad");return}
 if(v==cr.a){
  tot+=st;dn=cur+1;say(t("ok")+"★".repeat(st)+"☆".repeat(3-st),"ok");
  a.disabled=true;sl.className="slots ok";sync();$("chk").hidden=true;$("hint").hidden=true;$("next").hidden=false;
  $("sr").textContent="⭐ "+tot;steps();stopT();glow();mood("happy",1);conf(40);fx([660,880,1100]);
 }else{
  if(++wr==3&&st>1)st--;
  say(t("bad"),"bad");
  sl.classList.remove("bad");void sl.offsetWidth;sl.classList.add("bad");fx([200]);mood("sad",1);
 }
}
function end(){
 show("s-end");document.activeElement.blur();const n=$("name").value.trim(),r=RK[tot<=4?0:tot<=6?1:tot==7?2:tot==8?3:4];
 LN=n;LR=r;$("eh").textContent=t("endH")(n);$("cim").src=cert(n,r);showCert();say(t("endB")(r.t),"ok");mood("happy");
 $("bg").innerHTML=Array.from({length:25},(_,i)=>`<div class="${i+1==cr.k?"hit":""}"><small>+${i+1}</small>${dec(cr.w,i+1)}</div>`).join("");
 $("bw").textContent=cr.w;$("bg").hidden=true;pos=cr.k;sel=null;upd();rot();glow();conf(90);fx([523,659,784,1047]);touch();
}

/* ===== اللغة ===== */
function applyLang(){
 const d=document.documentElement;d.lang=lang;d.dir=lang=="ar"?"rtl":"ltr";document.title=t("title");
 document.querySelectorAll("[data-i]").forEach(e=>e.textContent=t(e.dataset.i));
 $("name").placeholder=t("ph");$("lg").textContent=lang=="ar"?"EN":"عربي";
 const s=["s-start","s-play","s-end","s-lose"].find(x=>!$(x).hidden);
 if(s=="s-play"){lvText();say(t("typeHint"),"mt")}
 else if(s=="s-end"){$("eh").textContent=t("endH")(LN);say(t("endB")(LR.t),"ok")}
 else if(s=="s-lose")say(t("loseB"),"bad");
 else say(t("G"));
 upd();
}

/* ===== الكتابة من كيبورد الجهاز (لابتوب / جوال / آيباد) ===== */
function key(c){
 const a=$("ans");if(a.disabled||$("s-play").hidden)return;
 if(c=="⌫")a.value=a.value.slice(0,-1);else if(a.value.length<a.maxLength)a.value+=c;
 $("slots").classList.remove("bad");sync();tick();
}
document.addEventListener("keydown",e=>{
 if(e.target.tagName=="INPUT"||e.ctrlKey||e.metaKey||e.altKey)return;
 if(e.key=="ArrowRight")turn(1);else if(e.key=="ArrowLeft")turn(-1);
 else if(/^[a-z]$/i.test(e.key))key(e.key.toUpperCase());
 else if(e.key=="Backspace")key("⌫");
 else if(e.key=="Enter"&&e.target.tagName!="BUTTON"&&!$("s-play").hidden&&!$("chk").hidden)chk();
});
$("ans").onkeydown=e=>{if(e.key=="Enter")chk()};
$("ans").oninput=e=>{const v=e.target.value,c=v.replace(/[^a-zA-Z]/g,"").toUpperCase();e.target.value=c;if(c.length<v.length)say(t("kb"),"bad");$("slots").classList.remove("bad");sync()};

/* ===== الأزرار ===== */
$("go").onclick=()=>{tot=0;show("s-play");load(0)};
$("next").onclick=()=>cur<2?load(cur+1):end();
$("ag").onclick=()=>{clearTimeout(idle);stopT();$("ov").hidden=true;$("name").value="";cur=-1;show("s-start");pos=0;sel=null;say(t("G"));mood("");upd();rot()};
$("rt").onclick=()=>{clearTimeout(idle);tot=0;show("s-play");load(0)};
$("bb").onclick=()=>{$("bg").hidden=!$("bg").hidden};
$("chk").onclick=chk;
$("hint").onclick=()=>{say(t("hintOf")(hn+1)+cr.h[lang][hn],"hint");hn++;st=Math.max(1,st-1);lvText();if(hn>=3)$("hint").disabled=true};
$("inc").onclick=()=>turn(1);$("dec").onclick=()=>turn(-1);
$("mute").onclick=e=>{snd=!snd;e.target.textContent=snd?"🔊":"🔇"};
$("lg").onclick=()=>{lang=lang=="ar"?"en":"ar";applyLang()};
$("cim").onclick=showCert;
$("ov").onclick=e=>{if(e.target.tagName!="IMG")$("ov").hidden=true};
addEventListener("resize",()=>{if(!$("ov").hidden)$("oim").src=cert(LN,LR)});
document.addEventListener("pointerdown",()=>{if(!$("s-end").hidden||!$("s-lose").hidden)touch()});
setInterval(()=>{if(!$("s-start").hidden)turn(1,1)},1700);
applyLang();
