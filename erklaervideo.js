/* Erklärvideo: animierte Szenen mit Sprachausgabe des Geräts (Web Speech API) und Untertiteln */
(function(){
const root=document.getElementById("z-video");
if(!root)return;

/* ---------- Drehbuch ----------
   bar = Anteil des Königs an der Macht in Prozent (rot), Rest = Parlament (grün)
   jede Zeile: [Sprechtext, zeige Punkt Nr. (oder null), neuer Balkenwert (oder null)] */
const PH=["Tudors","Frühe Stuarts","Bürgerkrieg","Republik","Glorreiche Rev."];
const S=[
 {kick:"Einführung",title:"Worum geht es?",years:"England 1509–1714",bar:50,pts:[],lines:[
  ["Englands Geschichte von 1509 bis 1714 dreht sich um eine einzige Frage.",null,null],
  ["Wer hat die Macht im Land: der König oder das Parlament?",null,50],
  ["Am Anfang ist der König fast allein der Chef.",null,90],
  ["Am Ende entscheidet das Parlament, was der König darf.",null,15],
  ["In diesem Video schauen wir uns an, wie es dazu kam. In fünf einfachen Schritten.",null,50]]},
 {kick:"Einführung",title:"Die zwei Gegner",years:"König gegen Parlament",bar:50,pts:[
  ["👑","Der König","will allein herrschen, „von Gottes Gnaden“","k"],
  ["🏛","Das Parlament","Oberhaus (Adel, Bischöfe) und Unterhaus (gewählte Vertreter)","p"],
  ["💰","Der Hebel","Neue Steuern darf nur das Parlament erlauben","g"]],lines:[
  ["Auf der einen Seite steht der König. Er glaubt, seine Macht kommt direkt von Gott. Das nennt man Gottesgnadentum.",0,null],
  ["Auf der anderen Seite steht das Parlament. Es hat zwei Kammern: das Oberhaus mit dem Adel und das Unterhaus mit gewählten Vertretern.",1,null],
  ["Und jetzt kommt der wichtigste Punkt: Der König braucht Geld, vor allem für Kriege. Aber neue Steuern darf nur das Parlament erlauben.",2,null],
  ["Merk dir: Geld ist der Hebel des Parlaments. Fast jeder Streit in dieser Zeit ist ein Streit ums Geld.",null,null]]},
 {kick:"Überblick",title:"Die ganze Geschichte in 5 Schritten",years:"1509–1714",overview:true,pts:[
  ["1509–1603","Tudors","Der König ist stark",88],
  ["1603–1642","Frühe Stuarts","Streit ums Geld",55],
  ["1642–1649","Bürgerkrieg","Das Parlament siegt, der König stirbt",8],
  ["1649–1685","Republik und Restauration","Kein König, dann kommt er zurück",45],
  ["1685–1714","Glorreiche Revolution","Das Parlament gewinnt endgültig",15]],lines:[
  ["Hier ist die ganze Geschichte auf einen Blick.",null,null],
  ["Erstens: die Tudors. Der König ist stark.",0,null],
  ["Zweitens: die frühen Stuarts. König und Parlament streiten ums Geld.",1,null],
  ["Drittens: der Bürgerkrieg. Das Parlament siegt, und der König wird hingerichtet.",2,null],
  ["Viertens: Republik und Restauration. Erst gibt es keinen König, dann kommt er zurück.",3,null],
  ["Fünftens: die Glorreiche Revolution. Das Parlament gewinnt endgültig.",4,null],
  ["Schau auf die Balken: Der rote Teil für den König wird immer kleiner, der grüne für das Parlament immer größer.",null,null]]},
 {ph:0,kick:"Schritt 1 von 5",title:"Die Tudors",years:"1509–1603",bar:85,pts:[
  ["1509","Heinrich VIII. wird König","k"],
  ["1534","Suprematsakte: Der König wird Oberhaupt der Kirche","k"],
  ["1558","Elisabeth I.: Mittelweg in der Religion, 1588 Sieg über die Armada","k"]],lines:[
  ["Schritt eins: die Tudors, von 1509 bis 1603.",null,null],
  ["Heinrich der Achte will unbedingt einen Sohn. Der Papst erlaubt ihm aber nicht, seine Ehe aufzulösen.",0,null],
  ["Also trennt sich Heinrich 1534 von Rom. Mit der Suprematsakte wird der König selbst das Oberhaupt der englischen Kirche.",1,90],
  ["Seine Tochter Elisabeth die Erste findet einen Mittelweg in der Religion und besiegt 1588 die spanische Armada.",2,null],
  ["Das Parlament gibt es zwar, aber es macht, was der König will. Die Krone ist auf ihrem Höhepunkt.",null,90]]},
 {ph:1,kick:"Schritt 2 von 5",title:"Die frühen Stuarts",years:"1603–1642",bar:90,pts:[
  ["1603","Jakob I.: „Ich muss mich nur vor Gott verantworten“","k"],
  ["1628","Petition of Right: Geld nur gegen Rechte","p"],
  ["1629–40","Karl I. regiert 11 Jahre ohne Parlament","k"],
  ["1640","Geldnot: Das Parlament muss wieder her","n"]],lines:[
  ["Schritt zwei: die frühen Stuarts, von 1603 bis 1642.",null,null],
  ["Jakob der Erste kommt aus Schottland und bringt das Gottesgnadentum mit. Er sagt: Ich muss mich nur vor Gott verantworten.",0,80],
  ["Das Unterhaus hält dagegen: Unsere Rechte sind alt und vererbt. Sie sind kein Geschenk des Königs.",null,65],
  ["Sein Sohn Karl der Erste braucht Geld für Kriege. 1628 bekommt er es nur, wenn er die Petition of Right unterschreibt: keine Steuern ohne Parlament, keine Haft ohne Grund.",1,50],
  ["Karl ist wütend und regiert elf Jahre lang ganz ohne Parlament. Das Geld treibt er mit einer alten Flottensteuer ein, dem Ship Money.",2,75],
  ["Doch dann gibt es Krieg mit Schottland. Karl ist pleite und muss 1640 das Parlament wieder einberufen. Jetzt stellt das Parlament die Forderungen.",3,50]]},
 {ph:2,kick:"Schritt 3 von 5",title:"Der Bürgerkrieg",years:"1642–1649",bar:50,pts:[
  ["1642","Karl stürmt das Unterhaus: Der Krieg beginnt","k"],
  ["⚔","Kavaliere (König) gegen Rundköpfe (Parlament)","n"],
  ["1645","Cromwells New Model Army siegt","p"],
  ["1649","Karl I. wird hingerichtet","p"]],lines:[
  ["Schritt drei: der Bürgerkrieg, von 1642 bis 1649.",null,null],
  ["Karl dringt mit Soldaten ins Unterhaus ein, um fünf Abgeordnete zu verhaften. Das geht schief, und es kommt zum Krieg.",0,55],
  ["Die Anhänger des Königs heißen Kavaliere, die Anhänger des Parlaments heißen Rundköpfe.",1,null],
  ["Oliver Cromwell baut für das Parlament eine Berufsarmee auf, die New Model Army. Sie besiegt den König.",2,30],
  ["1649 wird Karl der Erste hingerichtet. Ein König wird vom eigenen Volk verurteilt. Das ist ein Schock für ganz Europa.",3,5]]},
 {ph:3,kick:"Schritt 4 von 5",title:"Republik und Restauration",years:"1649–1685",bar:5,pts:[
  ["1649","Republik: kein König, kein Oberhaus","p"],
  ["1653","Cromwell regiert allein: Militärdiktatur","k"],
  ["1660","Restauration: Karl II. kommt zurück","k"],
  ["1679","Habeas-Corpus-Akte: keine Haft ohne Richter","p"]],lines:[
  ["Schritt vier: Republik und Restauration, von 1649 bis 1685.",null,null],
  ["England wird eine Republik, ohne König und ohne Oberhaus.",0,10],
  ["Aber 1653 jagt Cromwell das Parlament davon und regiert als Lordprotektor. Eigentlich ist das eine Militärdiktatur, nur ohne Krone.",1,65],
  ["Nach Cromwells Tod droht Chaos. 1660 holt man den König zurück: Karl den Zweiten. Das nennt man Restauration.",2,60],
  ["Das Parlament passt aber auf. 1679 beschließt es die Habeas-Corpus-Akte: Niemand darf ohne Richter eingesperrt werden.",3,40]]},
 {ph:4,kick:"Schritt 5 von 5",title:"Die Glorreiche Revolution",years:"1685–1714",bar:40,pts:[
  ["1685","Jakob II.: katholisch und absolutistisch","k"],
  ["1688","Glorreiche Revolution: Wilhelm kommt, Jakob flieht","p"],
  ["1689","Bill of Rights: nichts ohne das Parlament","p"],
  ["★","Ergebnis: konstitutionelle Monarchie","g"]],lines:[
  ["Schritt fünf: die Glorreiche Revolution, von 1685 bis 1714.",null,null],
  ["Jakob der Zweite ist katholisch und will wieder allein herrschen, mit einem eigenen stehenden Heer.",0,65],
  ["Als 1688 sein Sohn geboren wird, droht eine katholische Königsfamilie. Das Parlament holt Wilhelm von Oranien ins Land. Jakob flieht, fast ohne Blutvergießen.",1,25],
  ["1689 müssen Wilhelm und Maria die Bill of Rights unterschreiben: keine Steuern, keine Gesetze und keine Armee ohne das Parlament.",2,15],
  ["Damit ist England eine konstitutionelle Monarchie. Es gibt noch einen König, aber seine Macht ist durch Gesetze begrenzt.",3,15]]},
 {kick:"Zum Merken",title:"Das musst du wissen",years:"Die 3 wichtigsten Punkte",bar:15,pts:[
  ["1","Geld ist der Hebel: Steuern nur gegen Rechte","g"],
  ["2","1649: Hinrichtung des Königs, Tiefpunkt der Krone","p"],
  ["3","1689: Bill of Rights, Sieg des Parlaments","p"],
  ["→","Aus der absoluten wird eine konstitutionelle Monarchie","g"]],lines:[
  ["Zum Schluss die drei wichtigsten Punkte.",null,null],
  ["Erstens: Der Streit dreht sich ums Geld. Weil der König Steuern braucht, kann das Parlament dafür Rechte verlangen.",0,null],
  ["Zweitens: 1649 wird der König hingerichtet. Das ist der Tiefpunkt der Krone.",1,null],
  ["Drittens: 1689 kommt die Bill of Rights. Das Parlament hat endgültig gewonnen.",2,null],
  ["Kurz gesagt: Aus der absoluten Monarchie wird eine konstitutionelle Monarchie. Der König herrscht nicht mehr von Gottes Gnaden, sondern von Gnaden des Parlaments.",3,null]]}
];

/* ---------- Jahreszahlen für die Stimme in Worte umwandeln ---------- */
const ONES=["","eins","zwei","drei","vier","fünf","sechs","sieben","acht","neun","zehn","elf","zwölf","dreizehn","vierzehn","fünfzehn","sechzehn","siebzehn","achtzehn","neunzehn"];
const TENS=["","","zwanzig","dreißig","vierzig","fünfzig","sechzig","siebzig","achtzig","neunzig"];
const n99=n=>n<20?ONES[n]:(n%10?(n%10===1?"ein":ONES[n%10])+"und":"")+TENS[Math.floor(n/10)];
const year=y=>ONES[Math.floor(y/100)]+"hundert"+n99(y%100);
const speakable=t=>t.replace(/\b(1[5-7]\d\d)\b/g,m=>year(+m)).replace(/„|“/g,"");

/* ---------- Oberfläche ---------- */
const crown=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 18h18l-1.5-10-4.5 4-3-7-3 7-4.5-4z" fill="currentColor"/><rect x="3" y="19.5" width="18" height="2" rx="1" fill="currentColor"/></svg>`;
const house=`<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 9 12 3l10 6z" fill="currentColor"/><path d="M4.5 11h2v7h-2zM9 11h2v7H9zM13 11h2v7h-2zM17.5 11h2v7h-2zM3 19.5h18v2H3z" fill="currentColor"/></svg>`;
root.innerHTML=`
<div class="ev-stage" id="evStage">
  <div class="ev-steps" id="evSteps">${PH.map((p,i)=>`<span data-i="${i}"><b>${i+1}</b>${p}</span>`).join("")}</div>
  <div class="ev-body" id="evBody"></div>
  <div class="ev-power"><span class="ev-side k">${crown}König</span><div class="ev-bar"><i id="evBar"></i></div><span class="ev-side p">Parlament${house}</span></div>
  <div class="ev-sub" id="evSub" aria-live="polite"></div>
</div>
<div class="ev-ctrl">
  <button type="button" class="ev-btn" id="evPrev" aria-label="Vorheriger Abschnitt"><svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg></button>
  <button type="button" class="ev-btn ev-play" id="evPlay" aria-label="Abspielen"><svg viewBox="0 0 24 24" id="evIco"><path d="M8 5v14l11-7z" class="f"/></svg></button>
  <button type="button" class="ev-btn" id="evNext" aria-label="Nächster Abschnitt"><svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg></button>
</div>
<div class="ev-prog" id="evProg">${S.map((s,i)=>`<button type="button" data-i="${i}" aria-label="${s.title}"><i></i></button>`).join("")}</div>
<p class="tip ev-voice" id="evVoice"></p>
<ol class="chap ev-chap" id="evChap">${S.map((s,i)=>`<li><button type="button" data-i="${i}"><span class="t">${i+1}</span><span class="n"><b>${s.title}</b><span>${s.kick} · ${s.years}</span></span></button></li>`).join("")}</ol>`;

const $=id=>document.getElementById(id);
let si=0,li=0,playing=false,tok=0,timer=null,utt=null,voice=null;

function pickVoice(){
  if(!("speechSynthesis" in window))return null;
  const vs=speechSynthesis.getVoices().filter(v=>/^de(-|_|$)/i.test(v.lang));
  if(!vs.length)return null;
  const score=v=>(/premium|enhanced|neural|natural|online/i.test(v.name)?4:0)+(/anna|helena|petra|google deutsch|katja|conrad|marlene/i.test(v.name)?2:0)+(/de-DE/i.test(v.lang)?1:0)+(v.localService?0.5:0);
  return vs.sort((a,b)=>score(b)-score(a))[0];
}
function voiceInfo(){
  voice=pickVoice();
  $("evVoice").textContent=voice?`Stimme: ${voice.name}. Ton anmachen! Die Untertitel laufen mit.`:
    ("speechSynthesis" in window?"Auf diesem Gerät wurde noch keine deutsche Stimme gefunden. Die Untertitel laufen trotzdem automatisch.":"Dieser Browser kann nicht vorlesen. Die Untertitel laufen trotzdem automatisch.");
}
if("speechSynthesis" in window)speechSynthesis.onvoiceschanged=voiceInfo;
voiceInfo();

function state(){ // was bis zur aktuellen Zeile sichtbar ist
  const s=S[si];let shown=-1,bar=s.bar,cur=null;
  s.lines.slice(0,li+1).forEach(([,sh,b])=>{if(sh!==null){shown=Math.max(shown,sh);cur=sh}if(b!==null)bar=b});
  const last=s.lines[Math.min(li,s.lines.length-1)];
  return{shown,bar,cur:last[1]!==null?last[1]:null};
}
let renderedScene=-1;
function render(){
  const s=S[si],st=state();
  if(renderedScene!==si){
    renderedScene=si;
    const body=$("evBody");
    body.classList.remove("in");void body.offsetWidth;
    body.innerHTML=`<span class="ev-kick">${s.kick}</span><h2 class="ev-title">${s.title}</h2><span class="ev-years">${s.years}</span>`+
      (s.overview?`<ol class="ev-ov">${s.pts.map(([y,n,t,b],i)=>`<li data-i="${i}"><div class="ev-ovh"><b>${i+1}. ${n}</b><span>${y}</span></div><div class="ev-mini"><i style="width:${b}%"></i></div><span class="ev-ovt">${t}</span></li>`).join("")}</ol>`:
      `<ul class="ev-pts">${s.pts.map((p,i)=>p.length===4?`<li data-i="${i}" class="${p[3]} big"><span class="ev-ico">${p[0]}</span><span><b>${p[1]}</b><br>${p[2]}</span></li>`:`<li data-i="${i}" class="${p[2]}"><span class="ev-y">${p[0]}</span><span>${p[1]}</span></li>`).join("")}</ul>`);
    body.classList.add("in");
    document.querySelectorAll("#evSteps span").forEach(e=>e.classList.toggle("on",+e.dataset.i===s.ph));
    $("evSteps").classList.toggle("all",s.ph===undefined);
    document.querySelectorAll("#evChap button").forEach(b=>b.setAttribute("aria-current",+b.dataset.i===si));
  }
  document.querySelector(".ev-power").style.opacity=s.overview?.25:1;
  document.querySelectorAll("#evBody [data-i]").forEach(e=>{const i=+e.dataset.i;e.classList.toggle("vis",i<=st.shown);e.classList.toggle("cur",i===st.cur)});
  $("evBar").style.width=st.bar+"%";
  $("evSub").textContent=s.lines[li][0];
  document.querySelectorAll("#evProg button").forEach((b,i)=>b.querySelector("i").style.width=(i<si?100:i>si?0:Math.round((li+1)/s.lines.length*100))+"%");
}
function setIcon(){
  $("evIco").innerHTML=playing?`<path d="M7 5h4v14H7zM13 5h4v14h-4z" class="f"/>`:`<path d="M8 5v14l11-7z" class="f"/>`;
  $("evPlay").setAttribute("aria-label",playing?"Pause":"Abspielen");
}
function stopSpeech(){tok++;clearTimeout(timer);if("speechSynthesis" in window)speechSynthesis.cancel()}
function advance(){
  if(li+1<S[si].lines.length){li++;playLine();return}
  if(si+1<S.length){si++;li=0;const t=tok;timer=setTimeout(()=>{if(t===tok)playLine()},700);render();return}
  playing=false;setIcon();
}
function playLine(){
  render();if(!playing)return;
  const my=++tok,text=S[si].lines[li][0],words=text.split(/\s+/).length;
  const done=()=>{if(my!==tok)return;clearTimeout(timer);timer=setTimeout(()=>{if(my===tok)advance()},350)};
  if(voice){
    utt=new SpeechSynthesisUtterance(speakable(text));utt.voice=voice;utt.lang=voice.lang;utt.rate=.95;
    utt.onend=done;utt.onerror=done;
    speechSynthesis.speak(utt);
    timer=setTimeout(()=>{if(my===tok&&!speechSynthesis.speaking)done()},words*700+6000); // Absicherung, falls „onend“ ausbleibt
  }else timer=setTimeout(done,Math.max(2600,words*400));
}
function play(){if(si===S.length-1&&li===S[si].lines.length-1&&!playing){si=0;li=0}playing=true;setIcon();voiceInfo();if("speechSynthesis" in window)speechSynthesis.cancel();playLine()}
function pause(){playing=false;stopSpeech();setIcon()}
function go(i){stopSpeech();si=Math.max(0,Math.min(S.length-1,i));li=0;render();if(playing)playLine()}
$("evPlay").onclick=()=>playing?pause():play();
$("evPrev").onclick=()=>go(li>0?si:si-1);
$("evNext").onclick=()=>go(si+1);
$("evProg").onclick=e=>{const b=e.target.closest("button");if(b)go(+b.dataset.i)};
$("evChap").onclick=e=>{const b=e.target.closest("button");if(!b)return;go(+b.dataset.i);if(!playing)play();$("evStage").scrollIntoView({behavior:"smooth",block:"start"})};
document.addEventListener("visibilitychange",()=>{if(document.hidden&&playing)pause()});
window.EV_stop=()=>{if(playing)pause()};
render();setIcon();
})();
