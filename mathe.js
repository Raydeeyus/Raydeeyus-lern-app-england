/* =========================================================
   Klausuren-App: Mathe · Kurvendiskussion (Klausur Mo 23.11.2026)
   Wird NACH kunst.js und VOR klausur.js geladen und ergänzt MODS (maU / maK).
   Klausurrelevant laut Mail von Herrn Reiter: Nullstellen (ohne Polynomdivision), Skizzieren,
   Achsenschnittpunkte, mittlere und lokale Änderungsrate, Steigung und Steigungswinkel,
   Schnittpunkte und Schnittwinkel, Tangente und Normale, Ableitungen (Parameter, rationale
   Exponenten), graphisches Differenzieren (NEW-Regel), Extrempunkte (f' = 0, f'' ≠ 0).
   OHiMi-Teil (ohne Hilfsmittel): 30 Minuten.

   Schreibweise in den Texten (mx() wandelt sie in HTML um):
   §…§ = Formel im Fließtext · x^2, x^(1/2) = Hochzahl · x_0, x_(1,2) = Index
   [[Zähler // Nenner]] = Bruch · √(…) = Wurzel mit Strich
   ========================================================= */

/* ---------- Hilfen ---------- */
const maEl=id=>document.getElementById(id);
function mx(s){
  s=s.replace(/\[\[(.+?) \/\/ (.+?)\]\]/g,'<span class="ma-fr"><span>$1</span><span>$2</span></span>');
  s=s.replace(/\^\(([^()]*)\)/g,"<sup>$1</sup>").replace(/\^(−?\d+|[a-zA-Z])/g,"<sup>$1</sup>");
  s=s.replace(/_\(([^()]*)\)/g,"<sub>$1</sub>").replace(/_(\d+|[a-zA-Z])/g,"<sub>$1</sub>");
  let i,out="";
  while((i=s.indexOf("√("))>=0){let d=0,j=i+1;for(;j<s.length;j++){if(s[j]==="(")d++;else if(s[j]===")"){d--;if(!d)break}}
    out+=s.slice(0,i)+'√<span class="ma-rt">'+s.slice(i+2,j)+"</span>";s=s.slice(j+1)}
  s=out+s;
  return s.replace(/§([^§]+)§/g,(m,c)=>'<span class="ma-m">'+c.split(" ⇒ ").join('</span> <span class="ma-m">⇒ ')+"</span>");
}
const maFB=(f,n,key)=>`<div class="ma-fb${key?" key":""}">${f}${n?`<span class="n">${n}</span>`:""}</div>`;
const maBsp=(t,h)=>{let l=t||"Beispiel",hd="";if(t&&t.includes("§")){l="Beispiel";hd=`<div class="ma-bt">${t.replace(/^Beispiel\s*/,"")}</div>`}return `<div class="ma-bsp"><span class="l">${l}</span>${hd}${h}</div>`};
const maCalc=a=>`<div class="ma-calc">${a.map(l=>`<div>${l}</div>`).join("")}</div>`;
const maC=t=>`<span class="c">${t}</span>`;
const maWarn=h=>`<div class="ma-warn"><b>Achtung</b>${h}</div>`;
const maTag=(t,c)=>`<span class="ma-tag${c?" "+c:""}">${t}</span>`;
const maTable=(head,rows)=>`<div class="ma-tw"><table class="ps-tab"><thead><tr>${head.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const maSteps=(a,t)=>`<div class="step ma-steps"><span class="afb">${t||"So gehst du vor"}</span><ol>${a.map(x=>`<li>${x}</li>`).join("")}</ol></div>`;
const maParts=(a,type)=>`<ol class="ma-parts" type="${type||"a"}">${a.map(x=>`<li>${x}</li>`).join("")}</ol>`;
const maNum=x=>String(+(+x).toFixed(2)).replace(".",",").replace("-","−");

/* ---------- Funktionsgraphen (SVG) ----------
   o.xr / o.yr = Bereich, o.eq = gleiche Einheiten auf beiden Achsen (für Winkel),
   o.fns = [{f, c, l, lx, dash, lw}], o.pts = [{x, y, l, c, dx, dy, a}], o.seg = Strecken,
   o.vl = senkrechte Hilfslinien, o.tx = Texte, o.extra(X, Y) = eigenes SVG */
let maPid=0;
function maPlot(o){
  const W=o.w||420,p=o.pad||24,[x0,x1]=o.xr,[y0,y1]=o.yr;
  const H=o.h||(o.eq?Math.round((W-2*p)*(y1-y0)/(x1-x0)+2*p):260);
  const X=x=>+(p+(x-x0)/(x1-x0)*(W-2*p)).toFixed(1),Y=y=>+(H-p-(y-y0)/(y1-y0)*(H-2*p)).toFixed(1);
  const id="mac"+(++maPid),sx=o.sx||1,sy=o.sy||1,lx=o.lx||sx,ly=o.ly||sy,fs=o.fs||10.5;
  let s=`<svg class="ma-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${o.aria||"Funktionsgraph"}"><defs><clipPath id="${id}"><rect x="${p}" y="${p}" width="${W-2*p}" height="${H-2*p}"/></clipPath><marker id="${id}m" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--fg)"/></marker></defs>`;
  if(o.grid!==false){
    for(let x=Math.ceil(x0/sx-1e-9)*sx;x<=x1+1e-9;x+=sx)s+=`<line class="g" x1="${X(x)}" y1="${p}" x2="${X(x)}" y2="${H-p}"/>`;
    for(let y=Math.ceil(y0/sy-1e-9)*sy;y<=y1+1e-9;y+=sy)s+=`<line class="g" x1="${p}" y1="${Y(y)}" x2="${W-p}" y2="${Y(y)}"/>`;
  }
  const ax=y0<=0&&y1>=0?Y(0):H-p,ay=x0<=0&&x1>=0?X(0):p;
  s+=`<line class="ax" x1="${p-6}" y1="${ax}" x2="${W-p+14}" y2="${ax}" marker-end="url(#${id}m)"/><line class="ax" x1="${ay}" y1="${H-p+6}" x2="${ay}" y2="${p-14}" marker-end="url(#${id}m)"/>
   <text x="${W-6}" y="${ax-8}" text-anchor="end" font-size="12" font-weight="700">${o.xl||"x"}</text><text x="${ay+7}" y="${p-6}" font-size="12" font-weight="700">${o.yl||"y"}</text>`;
  if(o.ticks!==false){
    for(let x=Math.ceil(x0/lx-1e-9)*lx;x<=x1+1e-9;x+=lx){if(Math.abs(x)<1e-9)continue;
      s+=`<line class="ax" x1="${X(x)}" y1="${ax-3}" x2="${X(x)}" y2="${ax+3}"/><text class="tk" x="${X(x)}" y="${ax+13}" text-anchor="middle" font-size="${fs}">${maNum(x)}</text>`}
    for(let y=Math.ceil(y0/ly-1e-9)*ly;y<=y1+1e-9;y+=ly){if(Math.abs(y)<1e-9)continue;
      s+=`<line class="ax" x1="${ay-3}" y1="${Y(y)}" x2="${ay+3}" y2="${Y(y)}"/><text class="tk" x="${ay-6}" y="${Y(y)+3.5}" text-anchor="end" font-size="${fs}">${maNum(y)}</text>`}
  }
  (o.vl||[]).forEach(v=>{s+=`<line x1="${X(v.x)}" y1="${p}" x2="${X(v.x)}" y2="${H-p}" style="stroke:var(${v.c||"--muted"})" stroke-width="1.3" stroke-dasharray="5 4"/>`});
  (o.fns||[]).forEach(F=>{let d="",pen=false;const n=o.n||260,span=y1-y0;
    for(let i=0;i<=n;i++){const x=x0+(x1-x0)*i/n,y=F.f(x);
      if(!isFinite(y)||y>y1+span||y<y0-span){pen=false;continue}
      d+=(pen?"L":"M")+X(x)+","+Y(y);pen=true}
    s+=`<path d="${d}" clip-path="url(#${id})" fill="none" style="stroke:var(${F.c||"--ma"})" stroke-width="${F.lw||2.6}" stroke-linecap="round"${F.dash?` stroke-dasharray="${F.dash}"`:""}/>`;
    if(F.l){const lxx=F.lx!==undefined?F.lx:x1-(x1-x0)*.1;s+=`<text x="${X(lxx)+(F.dx||0)}" y="${Y(F.f(lxx))+(F.dy!==undefined?F.dy:-9)}" font-size="12.5" font-weight="700" text-anchor="${F.a||"middle"}" style="fill:var(${F.c||"--ma"})">${F.l}</text>`}
  });
  (o.seg||[]).forEach(L=>{s+=`<line x1="${X(L.a[0])}" y1="${Y(L.a[1])}" x2="${X(L.b[0])}" y2="${Y(L.b[1])}" clip-path="url(#${id})" style="stroke:var(${L.c||"--fg"})" stroke-width="${L.lw||1.6}"${L.dash?` stroke-dasharray="${L.dash}"`:""}/>`});
  if(o.extra)s+=o.extra(X,Y);
  (o.pts||[]).forEach(P=>{s+=`<circle cx="${X(P.x)}" cy="${Y(P.y)}" r="4.3" style="fill:var(${P.c||"--fg"})"/>`;
    if(P.l)s+=`<text x="${X(P.x)+(P.dx!==undefined?P.dx:7)}" y="${Y(P.y)+(P.dy!==undefined?P.dy:-8)}" font-size="11.5" font-weight="700" text-anchor="${P.a||"start"}" style="fill:var(${P.c||"--fg"})">${P.l}</text>`});
  (o.tx||[]).forEach(T=>{s+=`<text x="${X(T.x)}" y="${Y(T.y)}" font-size="${T.fs||11}" font-weight="${T.w||700}" text-anchor="${T.a||"middle"}" style="fill:var(${T.c||"--fg"})">${T.t}</text>`});
  return s+"</svg>";
}
// Winkelbogen (nur bei o.eq richtig): Scheitel (vx|vy), Winkel a1 → a2 in Grad
function maArc(X,Y,vx,vy,a1,a2,r,c,lbl){
  const R=a=>a*Math.PI/180,px=a=>(X(vx)+r*Math.cos(R(a))).toFixed(1),py=a=>(Y(vy)-r*Math.sin(R(a))).toFixed(1),am=(a1+a2)/2;
  return `<path d="M${px(a1)},${py(a1)} A${r},${r} 0 0 ${a2>a1?0:1} ${px(a2)},${py(a2)}" fill="none" style="stroke:var(${c})" stroke-width="2"/>`+
   (lbl?`<text x="${(X(vx)+(r+13)*Math.cos(R(am))).toFixed(1)}" y="${(Y(vy)-(r+13)*Math.sin(R(am))+4).toFixed(1)}" text-anchor="middle" font-size="12.5" font-weight="700" style="fill:var(${c})">${lbl}</text>`:"");
}
// rechter Winkel zwischen Tangente (Steigung m) und Normale im Punkt (x|y)
function maRight(X,Y,x,y,m,c){
  let u=[1,-m];const L=Math.hypot(u[0],u[1]);u=[u[0]/L*11,u[1]/L*11];const v=[u[1],-u[0]],P=[X(x),Y(y)];
  return `<polyline points="${P[0]+u[0]},${P[1]+u[1]} ${P[0]+u[0]+v[0]},${P[1]+u[1]+v[1]} ${P[0]+v[0]},${P[1]+v[1]}" fill="none" style="stroke:var(${c})" stroke-width="1.6"/><circle cx="${P[0]+(u[0]+v[0])/2}" cy="${P[1]+(u[1]+v[1])/2}" r="1.6" style="fill:var(${c})"/>`;
}

/* ---------- Die Themen aus der Mail ---------- */
const MA_THEMEN=[
 ["Nullstellen ganzrationaler Funktionen","alle Verfahren außer Polynomdivision","funktionen"],
 ["Skizzieren von Funktionsgraphen","Globalverlauf, Nullstellen, Vielfachheit","funktionen"],
 ["Schnittpunkte mit den Koordinatenachsen","S_y(0 | f(0)) und N(x | 0)","funktionen"],
 ["Mittlere Änderungsrate = Sekantensteigung","[[f(b) − f(a) // b − a]]","steigung"],
 ["Lokale Änderungsrate = Tangentensteigung","f'(x_0) – ohne h-Methode und ohne Herleitung","steigung"],
 ["Steigung und Steigungswinkel an einer Stelle x_0","m = f'(x_0), α = tan^(−1)(m)","steigung"],
 ["Schnittpunkte und Schnittwinkel zweier Graphen","gleichsetzen, Winkel ≤ 90°","steigung"],
 ["Tangentengleichung und Normalengleichung","t(x) und n(x) mit m_n = −[[1 // m_t]]","steigung"],
 ["Ableitungen","mit Parametern und rationalen Exponenten (√(x), [[1 // x]])","ableitung"],
 ["Graphisches Differenzieren","Zusammenhänge f ↔ f', NEW-Regel, f' skizzieren","ableitung"],
 ["Extrempunkte","f'(x) = 0 notwendig, f''(x) < 0 bzw. > 0 hinreichend","extrema"]
];

/* ---------- Formelsammlung ---------- */
const MA_FORMELN=[
 {g:"Nullstellen",t:"Satz vom Nullprodukt",f:"a · b = 0 ⇔ a = 0 oder b = 0",n:"Nach dem Ausklammern jeden Faktor einzeln null setzen."},
 {g:"Nullstellen",t:"pq-Formel",f:"x^2 + px + q = 0 ⇒ x_(1,2) = −[[p // 2]] ± √(([[p // 2]])^2 − q)",n:"Nur in Normalform: Vor x² muss eine 1 stehen. Sonst erst durch die Zahl vor x² teilen."},
 {g:"Nullstellen",t:"abc-Formel (Mitternachtsformel)",f:"ax^2 + bx + c = 0 ⇒ x_(1,2) = [[−b ± √(b^2 − 4ac) // 2a]]",n:"Geht auch ohne vorher zu teilen."},
 {g:"Nullstellen",t:"Substitution",f:"x^4 + bx^2 + c = 0 → z = x^2 → z^2 + bz + c = 0",n:"Danach Rücksubstitution: x = ±√(z), nur für z ≥ 0."},
 {g:"Nullstellen",t:"Gerade Hochzahl: zwei Lösungen",f:"x^2 = 9 ⇒ x = ±3 · x^4 = 16 ⇒ x = ±2",n:"Bei ungerader Hochzahl nur eine: x³ = −8 ⇒ x = −2."},
 {g:"Nullstellen",t:"Vielfachheit",f:"(x − a)^2 ⇒ berührt · (x − a) oder (x − a)^3 ⇒ schneidet",n:"Gerade Vielfachheit: berührt (kein Vorzeichenwechsel). Ungerade: schneidet."},
 {g:"Graphen",t:"Achsenschnittpunkte",f:"S_y(0 | f(0)) · N(x_0 | 0) mit f(x_0) = 0",n:"Punkte immer mit beiden Koordinaten angeben."},
 {g:"Graphen",t:"Globalverlauf",f:"bestimmt durch den Term a_n x^n mit der höchsten Potenz",n:"gerade & a > 0: ↖ ↗ · gerade & a < 0: ↙ ↘ · ungerade & a > 0: ↙ ↗ · ungerade & a < 0: ↖ ↘"},
 {g:"Graphen",t:"Symmetrie",f:"nur gerade Hochzahlen ⇒ achsensymmetrisch zur y-Achse · nur ungerade ⇒ punktsymmetrisch zum Ursprung",n:"Eine Zahl ohne x zählt als gerade (x⁰)."},
 {g:"Änderungsraten",t:"Mittlere Änderungsrate (Sekantensteigung)",f:"m = [[f(b) − f(a) // b − a]] = [[Δy // Δx]]",n:"Durchschnittliche Änderung im Intervall [a; b]. Einheit: Einheit von y pro Einheit von x."},
 {g:"Änderungsraten",t:"Lokale Änderungsrate (Tangentensteigung)",f:"m = f'(x_0)",n:"Steigung genau an der Stelle x₀: f'(x) bilden, x₀ einsetzen."},
 {g:"Steigung & Winkel",t:"Steigungswinkel",f:"tan(α) = m ⇒ α = tan^(−1)(m)",n:"Taschenrechner auf DEG (Grad)! m = 1 ⇒ 45°, m = 0 ⇒ 0°, negatives α ⇒ Graph fällt."},
 {g:"Steigung & Winkel",t:"Schnittwinkel zweier Graphen",f:"γ = |α_1 − α_2| · ist γ > 90°, dann 180° − γ",n:"Alternativ: tan(γ) = |(m₁ − m₂) / (1 + m₁·m₂)|"},
 {g:"Steigung & Winkel",t:"Senkrecht und parallel",f:"senkrecht: m_1 · m_2 = −1 · parallel: m_1 = m_2",n:""},
 {g:"Steigung & Winkel",t:"Tangentengleichung",f:"t(x) = f'(x_0) · (x − x_0) + f(x_0)",n:"Oder: y = mx + b mit m = f'(x₀), dann den Berührpunkt einsetzen und b ausrechnen."},
 {g:"Steigung & Winkel",t:"Normalengleichung",f:"n(x) = −[[1 // f'(x_0)]] · (x − x_0) + f(x_0)",n:"Die Normale steht senkrecht auf der Tangente: m_n = −1 / m_t."},
 {g:"Ableitungen",t:"Potenzregel",f:"f(x) = x^n ⇒ f'(x) = n · x^(n−1)",n:"Hochzahl nach vorne, Hochzahl minus 1. Gilt für alle Hochzahlen, auch negative und Brüche."},
 {g:"Ableitungen",t:"Faktor- und Summenregel",f:"(a · g)' = a · g' · (g + h)' = g' + h'",n:"Zahlen vor x bleiben stehen, jeder Summand wird einzeln abgeleitet."},
 {g:"Ableitungen",t:"Konstante und lineares Glied",f:"(c)' = 0 · (a · x)' = a",n:"Auch Parameter ohne x (z. B. t²) fallen weg."},
 {g:"Ableitungen",t:"Wurzel ableiten",f:"√(x) = x^(1/2) ⇒ f'(x) = [[1 // 2]]x^(−1/2) = [[1 // 2√(x)]]",n:"Erst als Potenz schreiben!"},
 {g:"Ableitungen",t:"1/x ableiten",f:"[[1 // x]] = x^(−1) ⇒ f'(x) = −x^(−2) = −[[1 // x^2]]",n:"Und [[1 // x^2]] = x^(−2) ⇒ −2x^(−3) = −[[2 // x^3]]"},
 {g:"Ableitungen",t:"Potenzgesetze",f:"x^(−n) = [[1 // x^n]] · x^(1/n) = <sup>n</sup>√(x) · x^a · x^b = x^(a+b)",n:"Brauchst du zum Umschreiben vor dem Ableiten."},
 {g:"Ableitungen",t:"Parameter",f:"f_t(x) = tx^3 − t^2x ⇒ f_t'(x) = 3tx^2 − t^2",n:"Parameter wie eine Zahl behandeln, abgeleitet wird nur nach x."},
 {g:"Ableitungen",t:"NEW-Regel",f:"Nullstelle von f' = Extremstelle von f · Extremstelle von f' = Wendestelle von f",n:"f steigt ⇔ f' > 0 · f fällt ⇔ f' < 0"},
 {g:"Extrempunkte",t:"Notwendiges Kriterium",f:"f'(x_E) = 0",n:"Waagerechte Tangente."},
 {g:"Extrempunkte",t:"Hinreichendes Kriterium",f:"f'(x_E) = 0 und f''(x_E) < 0 ⇒ Hochpunkt · f''(x_E) > 0 ⇒ Tiefpunkt",n:"y-Wert immer in f einsetzen: E(x_E | f(x_E))."},
 {g:"Extrempunkte",t:"Krümmung",f:"f''(x) > 0: linksgekrümmt ∪ · f''(x) < 0: rechtsgekrümmt ∩",n:"∪ hat unten einen Tiefpunkt, ∩ oben einen Hochpunkt."}
];

/* ---------- Rezepte (Schritt für Schritt) ---------- */
const MA_REZ=[
 {t:"Nullstellen berechnen",typ:"„Berechne die Nullstellen von f.“ · „Bestimme die Schnittpunkte mit der x-Achse.“",
  s:["Ansatz: §f(x) = 0§.","Verfahren wählen: nur ein x-Term → direkt auflösen · keine Zahl ohne x → x ausklammern · quadratisch → pq-Formel · nur x⁴, x² und Zahl → Substitution · schon ein Produkt → ablesen.","Lösen. Bei geraden Hochzahlen an ± denken!","Höchstens so viele Nullstellen wie der Grad.","Als Punkte angeben: §N(x | 0)§."],
  b:maCalc(["§x^3 − 2x^2 − 3x = 0§","§x · (x^2 − 2x − 3) = 0§ "+maC("x ausklammern"),"§x_1 = 0§ oder §x^2 − 2x − 3 = 0§","§x = 1 ± √(1 + 3) = 1 ± 2§ "+maC("pq-Formel, p = −2, q = −3"),"§x_2 = 3§, §x_3 = −1§ ⇒ §N_1(−1 | 0)§, §N_2(0 | 0)§, §N_3(3 | 0)§"])},
 {t:"Schnittpunkte mit den Koordinatenachsen",typ:"„Bestimme die Schnittpunkte des Graphen mit den Koordinatenachsen.“",
  s:["y-Achse: §x = 0§ einsetzen → §S_y(0 | f(0))§. Bei ganzrationalen Funktionen ist das die Zahl ohne x.","x-Achse: Nullstellen berechnen (Rezept 1) → §N(x | 0)§."],
  b:maCalc(["§f(x) = x^2 − x − 6§","§f(0) = −6§ ⇒ §S_y(0 | −6)§","§x^2 − x − 6 = 0 ⇒ x = 0,5 ± √(0,25 + 6) = 0,5 ± 2,5§","⇒ §N_1(−2 | 0)§, §N_2(3 | 0)§"])},
 {t:"Graph skizzieren",typ:"„Skizziere den Graphen von f.“",
  s:["Globalverlauf am Term mit der höchsten Potenz ablesen.","Nullstellen mit Vielfachheit eintragen (doppelt = berühren, einfach = schneiden).","y-Achsenabschnitt §f(0)§ eintragen.","Symmetrie prüfen.","Extrempunkte (falls berechnet) eintragen, sonst 2–3 Werte ausrechnen.","Glatt durchzeichnen, ohne Ecken."],
  b:`<p>§f(x) = x^4 − 4x^2 = x^2(x^2 − 4)§: Grad 4, vorne +1 ⇒ links und rechts nach oben · §x = 0§ doppelt (berührt), §x = ±2§ einfach · nur gerade Hochzahlen ⇒ symmetrisch zur y-Achse · Tiefpunkte §T(±√(2) | −4)§, Hochpunkt §H(0 | 0)§.</p>`+maPlot({xr:[-2.8,2.8],yr:[-5,4],h:220,fns:[{f:x=>x**4-4*x*x,l:"f",lx:2.35,dx:12}],pts:[{x:0,y:0,l:"H",c:"--crown",dy:-9},{x:-Math.SQRT2,y:-4,l:"T",c:"--parl",dy:16,dx:-4,a:"end"},{x:Math.SQRT2,y:-4,l:"T",c:"--parl",dy:16},{x:-2,y:0,c:"--ma"},{x:2,y:0,c:"--ma"}],aria:"Graph von x hoch 4 minus 4 x Quadrat"})},
 {t:"Mittlere Änderungsrate",typ:"„Berechne die mittlere Änderungsrate im Intervall [a; b].“ · „Wie stark … durchschnittlich …?“",
  s:["§f(a)§ und §f(b)§ ausrechnen.","§m = [[f(b) − f(a) // b − a]]§","Im Sachzusammenhang: Einheit (y-Einheit pro x-Einheit) und Antwortsatz mit „im Mittel“ / „durchschnittlich“."],
  b:maCalc(["§f(x) = x^3 − 2x§, Intervall §[0; 2]§","§f(0) = 0§, §f(2) = 8 − 4 = 4§","§m = [[4 − 0 // 2 − 0]] = 2§"])},
 {t:"Steigung an einer Stelle (lokale Änderungsrate)",typ:"„Bestimme die Steigung des Graphen an der Stelle x₀.“ · „Wie schnell ändert sich … zum Zeitpunkt …?“",
  s:["§f'(x)§ bilden.","§x_0§ einsetzen: §m = f'(x_0)§.","Deuten: §f'(x_0) > 0§ steigt / nimmt zu, §f'(x_0) < 0§ fällt / nimmt ab. In Anwendungen mit Einheit."],
  b:maCalc(["§f(x) = x^3 − 2x ⇒ f'(x) = 3x^2 − 2§","§f'(−1) = 3 · 1 − 2 = 1§"])},
 {t:"Steigungswinkel",typ:"„Berechne den Steigungswinkel an der Stelle x₀.“ · „Unter welchem Winkel schneidet der Graph die x-Achse?“",
  s:["§m = f'(x_0)§ berechnen.","§α = tan^(−1)(m)§ – Taschenrechner auf DEG.","Negativer Winkel: Der Graph fällt dort (Betrag = Winkel zur x-Achse).","Schnittwinkel mit der x-Achse: Steigungswinkel an der Nullstelle."],
  b:maCalc(["§m = f'(−1) = 1 ⇒ α = tan^(−1)(1) = 45°§","§m = f'(0) = −2 ⇒ α = tan^(−1)(−2) ≈ −63,43°§ "+maC("fällt unter 63,43°")])},
 {t:"Stelle mit bestimmter Steigung oder bestimmtem Winkel",typ:"„An welcher Stelle hat f die Steigung 10?“ · „… den Steigungswinkel 45°?“ · „Wo ist die Tangente parallel zu y = 4x + 1?“",
  s:["Winkel gegeben? Erst §m = tan(α)§ ausrechnen (§tan 45° = 1§).","Parallel zu einer Geraden heißt: gleiche Steigung.","§f'(x) = m§ setzen und nach x auflösen.","y-Werte in f einsetzen: Punkte angeben."],
  b:maCalc(["§f'(x) = 3x^2 − 2 = 10§","§3x^2 = 12 ⇒ x^2 = 4 ⇒ x = ±2§","§f(2) = 4§, §f(−2) = −4§ ⇒ §P(2 | 4)§, §Q(−2 | −4)§"])},
 {t:"Schnittpunkte zweier Graphen",typ:"„Bestimme die Schnittpunkte der Graphen von f und g.“",
  s:["Gleichsetzen: §f(x) = g(x)§.","Alles auf eine Seite: §… = 0§.","Mit einem Nullstellen-Verfahren lösen.","x in f oder g einsetzen ⇒ §S(x | y)§."],
  b:maCalc(["§f(x) = x^2 − 1§, §g(x) = x + 1§","§x^2 − 1 = x + 1 ⇒ x^2 − x − 2 = 0§","§x = 0,5 ± √(0,25 + 2) = 0,5 ± 1,5 ⇒ x_1 = 2, x_2 = −1§","§S_1(2 | 3)§, §S_2(−1 | 0)§"])},
 {t:"Schnittwinkel zweier Graphen",typ:"„Unter welchem Winkel schneiden sich die Graphen?“",
  s:["Schnittstelle §x_S§ bestimmen (Rezept 8).","§m_1 = f'(x_S)§ und §m_2 = g'(x_S)§.","§α_1 = tan^(−1)(m_1)§, §α_2 = tan^(−1)(m_2)§.","§γ = |α_1 − α_2|§. Ist §γ > 90°§, dann §180° − γ§."],
  b:maCalc(["in §S_1(2 | 3)§: §m_1 = f'(2) = 4 ⇒ α_1 ≈ 75,96°§","§m_2 = g'(2) = 1 ⇒ α_2 = 45°§","§γ = 75,96° − 45° ≈ 30,96°§"])},
 {t:"Tangentengleichung",typ:"„Bestimme die Gleichung der Tangente an den Graphen von f im Punkt P(x₀ | f(x₀)).“",
  s:["y-Wert: §f(x_0)§.","§f'(x)§ bilden, Steigung §m = f'(x_0)§.","Einsetzen: §t(x) = m · (x − x_0) + f(x_0)§.","Ausmultiplizieren und zusammenfassen."],
  b:maCalc(["§f(x) = x^3 − 2x§, §x_0 = 1§: §f(1) = −1§","§f'(x) = 3x^2 − 2 ⇒ m = f'(1) = 1§","§t(x) = 1 · (x − 1) − 1 = x − 2§"])},
 {t:"Normalengleichung",typ:"„Bestimme die Gleichung der Normalen im Punkt P.“",
  s:["Wie bei der Tangente: §f(x_0)§ und §m_t = f'(x_0)§.","Normalensteigung: §m_n = −[[1 // m_t]]§ (Kehrwert, Vorzeichen umdrehen).","Einsetzen: §n(x) = m_n · (x − x_0) + f(x_0)§.","Sonderfall §m_t = 0§: Die Normale ist senkrecht: §x = x_0§."],
  b:maCalc(["§m_t = 1 ⇒ m_n = −1§","§n(x) = −1 · (x − 1) − 1 = −x§"])},
 {t:"Ableiten",typ:"„Bilde die erste und zweite Ableitung.“",
  s:["Klammern ausmultiplizieren.","Wurzeln und Brüche als Potenzen schreiben.","Parameter wie Zahlen behandeln.","Potenz-, Faktor- und Summenregel anwenden.","Am Ende wieder als Wurzel / Bruch schreiben."],
  b:maCalc(["§f_a(x) = ax^3 + [[2 // x]] − 4√(x) + a^2§","§= ax^3 + 2x^(−1) − 4x^(1/2) + a^2§","§f_a'(x) = 3ax^2 − 2x^(−2) − 2x^(−1/2)§","§= 3ax^2 − [[2 // x^2]] − [[2 // √(x)]]§"])},
 {t:"Extrempunkte",typ:"„Bestimme die Extrempunkte von f.“ · „Wann ist … am größten?“",
  s:["§f'(x)§ und §f''(x)§ bilden.","Notwendig: §f'(x) = 0§ lösen ⇒ mögliche Extremstellen.","Hinreichend: in §f''§ einsetzen. §f'' < 0§ ⇒ Hochpunkt, §f'' > 0§ ⇒ Tiefpunkt.","y-Werte in §f§ einsetzen.","Punkte angeben: §H(… | …)§, §T(… | …)§."],
  b:maCalc(["§f(x) = −x^3 + 3x^2§","§f'(x) = −3x^2 + 6x§, §f''(x) = −6x + 6§","§−3x(x − 2) = 0 ⇒ x_1 = 0, x_2 = 2§","§f''(0) = 6 > 0§ ⇒ TP, §f''(2) = −6 < 0§ ⇒ HP","§T(0 | 0)§, §H(2 | 4)§"])},
 {t:"Graph der Ableitung skizzieren",typ:"„Skizziere den Graphen von f' in das Koordinatensystem.“",
  s:["Hoch- und Tiefpunkte von f: dort Nullstellen von §f'§ einzeichnen.","Steilste Stelle (Wendestelle) von f: dort Hoch- oder Tiefpunkt von §f'§.","Wo f steigt: §f'§ oberhalb der x-Achse. Wo f fällt: unterhalb.","Steigung an einer Stelle mit Steigungsdreieck schätzen ⇒ Höhe von §f'§.","Grad um 1 kleiner: kubisch → Parabel, Parabel → Gerade."],
  b:`<p>Ausführlich mit Bild im Bereich <a href="#/mathe/unterricht/ableitung">Unterricht · Ableitung</a>. Üben: <a href="#/mathe/klausur/ueben">Üben · Graphen</a>.</p>`},
 {t:"Aussagen über f aus dem Graphen von f'",typ:"„Abgebildet ist der Graph von f'. Beurteile die Aussagen.“",
  s:["Nullstelle von §f'§ mit Vorzeichenwechsel + → − ⇒ Hochpunkt von f, − → + ⇒ Tiefpunkt.","§f' > 0§ ⇒ f steigt, §f' < 0§ ⇒ f fällt.","Hoch-/Tiefpunkt von §f'§ ⇒ Wendestelle (steilste Stelle) von f.","Die Höhe von f (z. B. §f(0) > 0§) kann man aus §f'§ nicht ablesen!","Immer mit „wahr/falsch, weil …“ begründen."],
  b:`<p class="ma-say">„Die Aussage ist wahr, denn §f'(3) = 0§ und §f'§ wechselt dort das Vorzeichen von + nach −. Also hat f bei §x = 3§ einen Hochpunkt.“</p>`},
 {t:"Parameter bestimmen, sodass sich zwei Graphen berühren",typ:"„Wie muss a gewählt werden, damit g die Gerade berührt?“ · „… tangential anschließen“ · „… ohne Knick übergehen“",
  s:["<b>Berühren</b> (tangential, ohne Knick) heißt: Im Berührpunkt §x_0§ sind <b>y-Wert und Steigung gleich</b>.","Zwei Gleichungen aufstellen: <b>I</b> §g(x_0) = f(x_0)§ und <b>II</b> §g'(x_0) = f'(x_0)§. Zwei Unbekannte (Parameter und §x_0§), zwei Gleichungen.","Eine Gleichung nach dem Parameter auflösen und in die andere einsetzen ⇒ §x_0§.","Parameter ausrechnen, Berührpunkt mit beiden Koordinaten angeben, Probe machen."],
  b:maCalc(["§f(x) = [[1 // 2]]x + 2§, §g(x) = a√(x)§, §g'(x) = [[a // 2√(x)]]§","II §[[a // 2√(x_0)]] = [[1 // 2]] ⇒ a = √(x_0)§","I §√(x_0) · √(x_0) = [[1 // 2]]x_0 + 2 ⇒ x_0 = [[1 // 2]]x_0 + 2 ⇒ x_0 = 4§","§a = √(4) = 2§, Berührpunkt §B(4 | 4)§ · ganze Aufgabe: Probe B3"])},
 {t:"Anwendungsaufgabe übersetzen",typ:"Textaufgabe mit Zeit, Höhe, Temperatur, Menge …",
  s:["Frage in Mathe übersetzen (Tabelle unten).","Rechnen.","Antwortsatz mit Einheit und im Sachzusammenhang."],
  b:maTable(["Frage","Mathe"],[["Anfangswert, zu Beginn","§f(0)§"],["Wann wird der Wert W erreicht?","§f(x) = W§ lösen"],["Beginn / Ende, wann null?","Nullstellen"],["durchschnittliche Änderung zwischen a und b","mittlere Änderungsrate"],["Wie schnell ändert sich … zum Zeitpunkt t?","§f'(t)§"],["Wann ändert es sich mit der Rate k?","§f'(t) = k§"],["Wann am größten / kleinsten?","Extrempunkte, Ränder prüfen"],["nimmt zu / nimmt ab","§f'(t) > 0§ / §f'(t) < 0§"],["Wann am stärksten zu- oder abnehmend?","Extrempunkt von §f'§: §f''(t) = 0§"],["Wie steil? Welcher Winkel?","§α = tan^(−1)(f'(x))§"],["Wo treffen sich …?","gleichsetzen"]])}
];

/* ---------- Typische Fehler ---------- */
const MA_FEHLER=[
 ["y-Wert des Extrempunkts in §f'§ eingesetzt","immer in §f§ einsetzen – in §f'§ kommt immer 0 heraus"],
 ["§x^2 = 9 ⇒ x = 3§","§x = 3§ und §x = −3§"],
 ["pq-Formel bei §2x^2 − 4x − 6 = 0§ direkt angewendet","erst durch 2 teilen: §x^2 − 2x − 3 = 0§"],
 ["Bei der Substitution nur z angegeben","rücksubstituieren: §x^2 = z ⇒ x = ±√(z)§"],
 ["Durch x geteilt statt ausgeklammert","ausklammern, sonst geht §x = 0§ verloren"],
 ["§(√(x))' = √(x)§ oder §([[1 // x]])' = 1§","erst umschreiben: §[[1 // 2√(x)]]§ und §−[[1 // x^2]]§"],
 ["§f_t(x) = x^2 + t^2 ⇒ f_t'(x) = 2x + 2t§","§t^2§ ist eine Zahl ⇒ fällt weg: §2x§"],
 ["Normale: nur das Vorzeichen umgedreht (§m_n = −2§ statt §−[[1 // 2]]§)","Kehrwert und Vorzeichen: §m_n = −[[1 // m_t]]§"],
 ["Schnittwinkel 108° angegeben","über 90° ⇒ §180° − 108° = 72°§"],
 ["Taschenrechner im RAD-Modus: §tan^(−1)(1) = 0,785§","auf DEG stellen: §45°§"],
 ["Nullstelle als „x = 2“ statt als Punkt angegeben, wenn nach Schnittpunkten gefragt war","§N(2 | 0)§"],
 ["Anwendungsaufgabe ohne Antwortsatz","Satz mit Einheit: „… steigt um 1,5 °C pro Stunde.“"]
];

/* ---------- Checkliste ---------- */
const MA_CHECK=[
 "Ich erkenne, welches Nullstellen-Verfahren passt, und kann alle fünf.",
 "Ich denke bei §x^2 = …§ an beide Lösungen (±).",
 "Ich kann den Globalverlauf ablesen und einen Graphen mit Nullstellen und Vielfachheit skizzieren.",
 "Ich gebe Schnittpunkte immer als Punkt §(x | y)§ an.",
 "Ich kann die mittlere Änderungsrate berechnen und mit Einheit deuten.",
 "Ich kann §f'(x_0)§ als lokale Änderungsrate / Tangentensteigung berechnen und deuten.",
 "Ich kann Steigungswinkel mit §tan^(−1)§ berechnen und weiß §tan 45° = 1§.",
 "Ich kann Schnittpunkte zweier Graphen und den Schnittwinkel (≤ 90°) berechnen.",
 "Ich kann Tangenten- und Normalengleichung aufstellen.",
 "Ich kann ableiten – auch mit Parametern, §√(x)§ und §[[1 // x]]§.",
 "Ich kann aus dem Graphen von f den Graphen von §f'§ skizzieren (NEW-Regel).",
 "Ich kann aus dem Graphen von §f'§ Aussagen über f begründen.",
 "Ich kann Extrempunkte mit §f' = 0§ und §f''§ bestimmen und setze den y-Wert in §f§ ein.",
 "Mein Taschenrechner ist erlaubt, funktioniert und steht auf DEG."
];

/* ---------- Quiz ---------- */
const MA_QUIZ=[
 {q:"Welche Bedingung ist notwendig für eine Extremstelle §x_E§?",o:["§f'(x_E) = 0§","§f(x_E) = 0§","§f''(x_E) = 0§","§f'(x_E) > 0§"],r:0,x:"Am Hoch- oder Tiefpunkt ist die Tangente waagerecht, also die Steigung 0."},
 {q:"§f'(2) = 0§ und §f''(2) = −3§. Was hat f bei §x = 2§?",o:["einen Hochpunkt","einen Tiefpunkt","eine Nullstelle","nichts Besonderes"],r:0,x:"§f'' < 0§ ⇒ rechtsgekrümmt (∩) ⇒ Hochpunkt."},
 {q:"§f'(−1) = 0§ und §f''(−1) = 4§. Was hat f bei §x = −1§?",o:["einen Tiefpunkt","einen Hochpunkt","eine Nullstelle","einen Sattelpunkt"],r:0,x:"§f'' > 0§ ⇒ linksgekrümmt (∪) ⇒ Tiefpunkt."},
 {q:"Du hast die Extremstelle §x = 3§. Wo setzt du 3 ein, um den y-Wert zu bekommen?",o:["in §f(x)§","in §f'(x)§","in §f''(x)§","nirgends, y = 0"],r:0,x:"Der Punkt liegt auf dem Graphen von f, also §E(3 | f(3))§."},
 {q:"Die Tangente hat die Steigung 4. Welche Steigung hat die Normale?",o:["§−[[1 // 4]]§","§−4§","§[[1 // 4]]§","§4§"],r:0,x:"§m_n = −[[1 // m_t]] = −[[1 // 4]]§ (Kehrwert und Vorzeichen umdrehen)."},
 {q:"Was ist die Ableitung von §f(x) = √(x)§?",o:["§[[1 // 2√(x)]]§","§[[1 // 2]]√(x)§","§2√(x)§","§[[1 // √(x)]]§"],r:0,x:"§√(x) = x^(1/2) ⇒ [[1 // 2]]x^(−1/2) = [[1 // 2√(x)]]§"},
 {q:"Was ist die Ableitung von §f(x) = [[1 // x]]§?",o:["§−[[1 // x^2]]§","§[[1 // x^2]]§","§−[[1 // x]]§","§0§"],r:0,x:"§[[1 // x]] = x^(−1) ⇒ −1 · x^(−2) = −[[1 // x^2]]§"},
 {q:"§f_t(x) = tx^3 + t^2§. Was ist §f_t'(x)§?",o:["§3tx^2§","§3tx^2 + 2t§","§3x^2 + 2t§","§3tx^2 + t^2§"],r:0,x:"§t^2§ ist eine Konstante und fällt weg."},
 {q:"Mittlere Änderungsrate von §f(x) = x^2§ im Intervall §[1; 4]§?",o:["5","15","8","2,5"],r:0,x:"§[[16 − 1 // 4 − 1]] = [[15 // 3]] = 5§"},
 {q:"Welcher Steigungswinkel gehört zur Steigung §m = 1§?",o:["45°","1°","90°","60°"],r:0,x:"§tan(45°) = 1§"},
 {q:"Der Steigungswinkel an einer Stelle ist −30°. Was heißt das?",o:["Der Graph fällt dort.","Der Graph steigt dort.","Dort ist ein Tiefpunkt.","Der Taschenrechner ist falsch eingestellt."],r:0,x:"Negative Steigung ⇒ negativer Winkel ⇒ fallend (unter 30° zur x-Achse)."},
 {q:"Im Schnittpunkt gilt §α_1 = 70°§ und §α_2 = −40°§. Wie groß ist der Schnittwinkel?",o:["70°","110°","30°","20°"],r:0,x:"§|70° − (−40°)| = 110° > 90° ⇒ 180° − 110° = 70°§"},
 {q:"Wie viele Nullstellen kann eine Funktion 4. Grades höchstens haben?",o:["4","3","5","unendlich viele"],r:0,x:"Höchstens so viele wie der Grad."},
 {q:"Globalverlauf von §f(x) = −2x^3 + x§?",o:["von links oben nach rechts unten","von links unten nach rechts oben","links und rechts nach oben","links und rechts nach unten"],r:0,x:"Ungerader Grad, negativer Faktor vorne ⇒ ↖ ↘."},
 {q:"Welches Verfahren passt zu §x^4 − 13x^2 + 36 = 0§?",o:["Substitution §z = x^2§","x ausklammern","direkt auflösen","Polynomdivision"],r:0,x:"Nur x⁴, x² und eine Zahl ⇒ Substitution."},
 {q:"Welches Verfahren passt zu §x^3 − 5x^2 = 0§?",o:["§x^2§ ausklammern + Satz vom Nullprodukt","Substitution","pq-Formel sofort","direkt auflösen"],r:0,x:"Keine Zahl ohne x ⇒ ausklammern: §x^2(x − 5) = 0§."},
 {q:"§f(x) = (x − 2)^2(x + 1)§. Was passiert bei §x = 2§?",o:["Der Graph berührt die x-Achse.","Der Graph schneidet die x-Achse.","Der Graph schneidet die y-Achse.","Nichts, 2 ist keine Nullstelle."],r:0,x:"Doppelte Nullstelle ⇒ berühren (dort Hoch- oder Tiefpunkt)."},
 {q:"Der Graph von §f'§ hat bei §x = 1§ eine Nullstelle mit Vorzeichenwechsel von + nach −. Dann hat f bei §x = 1§ …",o:["einen Hochpunkt","einen Tiefpunkt","eine Nullstelle","einen Wendepunkt"],r:0,x:"f steigt erst (f' > 0), dann fällt f (f' < 0) ⇒ Hochpunkt."},
 {q:"Der Graph von §f'§ hat bei §x = 0§ einen Hochpunkt. Dann hat f bei §x = 0§ …",o:["eine Wendestelle (dort steigt f am stärksten)","einen Hochpunkt","eine Nullstelle","einen Tiefpunkt"],r:0,x:"NEW-Regel: Extremstelle von f' = Wendestelle von f."},
 {q:"f ist eine Funktion 3. Grades. Was für ein Graph ist §f'§?",o:["eine Parabel","eine Gerade","eine Funktion 4. Grades","eine waagerechte Gerade"],r:0,x:"Beim Ableiten sinkt der Grad um 1."},
 {q:"Wo f streng monoton fällt, liegt der Graph von §f'§ …",o:["unterhalb der x-Achse","oberhalb der x-Achse","auf der x-Achse","immer im Ursprung"],r:0,x:"Fallend ⇔ negative Steigung ⇔ §f' < 0§."},
 {q:"Tangente an f in §x_0 = 1§ mit §f(1) = 3§ und §f'(1) = 2§?",o:["§y = 2x + 1§","§y = 3x + 2§","§y = 2x + 3§","§y = 2x − 1§"],r:0,x:"§t(x) = 2(x − 1) + 3 = 2x + 1§"},
 {q:"Was gibt §f'(x_0)§ an?",o:["die Steigung der Tangente an der Stelle §x_0§","die mittlere Steigung zwischen 0 und §x_0§","den y-Wert an der Stelle §x_0§","die Nullstelle von f"],r:0,x:"Lokale Änderungsrate = Tangentensteigung."},
 {q:"§x^2 = 25§. Lösungen?",o:["§x = 5§ und §x = −5§","nur §x = 5§","§x = 12,5§","keine"],r:0,x:"Gerade Hochzahl ⇒ zwei Lösungen."},
 {q:"Wann darfst du die pq-Formel direkt anwenden?",o:["wenn die Gleichung die Form §x^2 + px + q = 0§ hat","immer, auch bei §3x^2 + …§","bei §x^4§-Gleichungen","bei §x^3 − 4x = 0§"],r:0,x:"Vor x² muss eine 1 stehen (Normalform)."},
 {q:"Zwei Geraden mit §m_1 = 2§ und §m_2 = −[[1 // 2]]§ schneiden sich unter …",o:["90°","45°","0°","30°"],r:0,x:"§m_1 · m_2 = −1§ ⇒ senkrecht."},
 {q:"Ableitung von §f_a(x) = a^2x + a§?",o:["§a^2§","§2a§","§2ax + 1§","§a^2 + 1§"],r:0,x:"§a^2§ ist der Faktor vor x, a allein fällt weg."},
 {q:"Wie heißt die lokale Änderungsrate noch?",o:["Ableitung bzw. Tangentensteigung","Sekantensteigung","Differenzenquotient","Achsenabschnitt"],r:0,x:"Die Sekantensteigung (Differenzenquotient) ist die mittlere Änderungsrate."}
];

/* ---------- Ableiten: besondere Fälle (Wurzel, Bruch, Parameter, Klammern) ---------- */
const MA_ABL=[
 ["√(x)","[[1 // 2√(x)]]",["[[1 // 2]]√(x)","2√(x)","[[1 // √(x)]]"]],
 ["[[1 // x]]","−[[1 // x^2]]",["[[1 // x^2]]","−[[1 // x]]","0"]],
 ["[[3 // x]]","−[[3 // x^2]]",["[[3 // x^2]]","−[[1 // 3x^2]]","−[[3 // x]]"]],
 ["[[1 // x^2]]","−[[2 // x^3]]",["[[2 // x^3]]","−[[1 // 2x]]","−[[2 // x]]"]],
 ["6√(x)","[[3 // √(x)]]","3√(x)|[[6 // √(x)]]|[[1 // 12√(x)]]".split("|")],
 ["x√(x)","[[3 // 2]]√(x)",["√(x)","[[1 // 2√(x)]]","[[3 // 2]]x"]],
 ["f_t(x) = tx^2 + t^3","2tx",["2tx + 3t^2","x^2 + 3t^2","2x"]],
 ["f_a(x) = ax^3 − a^2x","3ax^2 − a^2",["3ax^2 − 2ax","3x^2 − 2a","3ax^2"]],
 ["f_k(x) = kx^4 − 2kx","4kx^3 − 2k",["4x^3 − 2","4kx^3 − 2kx","4kx^3"]],
 ["x^2(x + 4)","3x^2 + 8x",["2x","3x^2 + 4","2x^2 + 8x"]],
 ["(x − 2)^2","2x − 4",["2x","2x + 4","2x − 2"]],
 ["[[1 // 2]]x^4 − [[1 // 3]]x^3","2x^3 − x^2",["2x^3 − [[1 // 3]]x^2","[[1 // 2]]x^3 − [[1 // 3]]x^2","2x^4 − x^3"]],
 ["[[1 // 3]]x^3 + 5","x^2",["x^2 + 5","[[1 // 3]]x^2","3x^2"]],
 ["x^(−3)","−3x^(−4)",["−3x^(−2)","3x^(−4)","−2x^(−4)"]],
 ["x^(1/3)","[[1 // 3]]x^(−2/3)",["[[1 // 3]]x^(−1/3)","3x^(2/3)","[[1 // 3]]x^(2/3)"]],
 ["[[1 // √(x)]]","−[[1 // 2]]x^(−3/2)",["[[1 // 2]]x^(−1/2)","−[[1 // 2]]x^(−1/2)","−[[1 // 2]]x^(1/2)"]]
];

/* =========================================================
   UNTERRICHT
   ========================================================= */
// Laufendes Beispiel: f(x) = −x³ + 3x + 2 = −(x + 1)²(x − 2)
const maF1=x=>-(x**3)+3*x+2,maF1d=x=>-3*x*x+3;

function mauFunktionen(el){
  const mini=(f,cap,sub)=>`<figure>${maPlot({w:200,h:150,pad:14,xr:[-2.2,2.2],yr:[-3,3],grid:false,ticks:false,fns:[{f,lw:2.8}],aria:cap})}<figcaption><b>${cap}</b>${sub}</figcaption></figure>`;
  el.innerHTML=mx(`
  <div class="erachips ma-chips"><a href="#mf1">Grundbegriffe</a><a href="#mf2">Nullstellen</a><a href="#mf3">Vielfachheit</a><a href="#mf4">Achsenschnittpunkte</a><a href="#mf5">Skizzieren</a></div>

  <section class="tx" id="mf1"><span class="tx-y">Grundlagen</span><h2>Ganzrationale Funktionen</h2>
   <p>Eine ganzrationale Funktion ist eine Summe aus Potenzen von x mit Zahlen davor:</p>
   ${maFB("f(x) = a_n x^n + … + a_2 x^2 + a_1 x + a_0","a_n ≠ 0 · die Hochzahlen sind natürliche Zahlen (0, 1, 2, 3, …)")}
   <p>Beispiel: §f(x) = 2x^3 − 4x + 1§</p>
   ${maTable(["Begriff","Bedeutung","Beispiel"],[["Grad","höchste Hochzahl","3"],["Leitkoeffizient","Zahl vor der höchsten Potenz","2"],["absolutes Glied","Zahl ohne x = y-Achsenabschnitt","1"]])}
   <h3 class="ps-h">Symmetrie (hilft beim Skizzieren)</h3>
   <ul class="ps-ul"><li>Nur <b>gerade</b> Hochzahlen (x⁴, x², Zahl) ⇒ <b>achsensymmetrisch zur y-Achse</b>, z. B. §f(x) = x^4 − 2x^2 + 1§.</li>
    <li>Nur <b>ungerade</b> Hochzahlen (x³, x) ⇒ <b>punktsymmetrisch zum Ursprung</b>, z. B. §f(x) = x^3 − 4x§.</li>
    <li>Gemischt ⇒ keine dieser beiden Symmetrien.</li></ul>
  </section>

  <section class="tx" id="mf2"><span class="tx-y">Thema 1</span><h2>Nullstellen berechnen</h2>
   <p>Nullstellen sind die x-Werte, an denen der Graph die x-Achse schneidet oder berührt. Der Ansatz ist immer §f(x) = 0§. Eine Funktion vom Grad n hat <b>höchstens n</b> Nullstellen.</p>
   <p class="ex">Polynomdivision kommt laut Mail <b>nicht</b> dran. Alles lässt sich mit diesen fünf Verfahren lösen:</p>
   ${maTable(["So sieht die Gleichung aus","Verfahren"],[["nur ein x-Term: §2x^3 − 16 = 0§","① direkt auflösen"],["keine Zahl ohne x: §x^3 − 4x = 0§","② x ausklammern + Satz vom Nullprodukt"],["quadratisch: §x^2 − 2x − 8 = 0§","③ pq-Formel (oder abc-Formel)"],["nur x⁴, x² und Zahl: §x^4 − 5x^2 + 4 = 0§","④ Substitution §z = x^2§"],["schon ein Produkt: §(x − 1)^2(x + 3) = 0§","⑤ Faktoren einzeln null setzen"]])}

   <h3 class="ps-h">① Direkt auflösen</h3>
   ${maCalc(["§2x^3 − 16 = 0§ "+maC("| + 16"),"§2x^3 = 16§ "+maC("| : 2"),"§x^3 = 8§ "+maC("| dritte Wurzel"),"§x = 2§"])}
   <p>Bei <b>geraden</b> Hochzahlen gibt es zwei Lösungen: §x^2 = 9 ⇒ x = ±3§, §x^4 = 16 ⇒ x = ±2§. Bei ungeraden nur eine, auch für negative Zahlen: §x^3 = −8 ⇒ x = −2§. §x^2 = −4§ hat keine Lösung.</p>

   <h3 class="ps-h">② Ausklammern + Satz vom Nullprodukt</h3>
   ${maFB("a · b = 0 ⇔ a = 0 oder b = 0","Ein Produkt ist null, wenn einer der Faktoren null ist.",1)}
   ${maCalc(["§x^3 − 4x = 0§","§x · (x^2 − 4) = 0§ "+maC("x ausklammern"),"§x_1 = 0§ oder §x^2 − 4 = 0 ⇒ x^2 = 4 ⇒ x_2 = 2, x_3 = −2§"])}
   <p>Immer die höchstmögliche Potenz ausklammern: §x^4 − 3x^3 = x^3(x − 3)§ ⇒ §x = 0§ (dreifach) und §x = 3§.</p>
   ${maWarn("Nie durch x teilen – dann geht die Lösung §x = 0§ verloren.")}

   <h3 class="ps-h">③ pq-Formel</h3>
   ${maFB("x^2 + px + q = 0 ⇒ x_(1,2) = −[[p // 2]] ± √(([[p // 2]])^2 − q)","nur in Normalform: Vor x² muss eine 1 stehen",1)}
   ${maCalc(["§x^2 − 2x − 8 = 0§ "+maC("p = −2, q = −8"),"§x = 1 ± √(1 + 8) = 1 ± 3§","§x_1 = 4§, §x_2 = −2§"])}
   <p>Steht eine Zahl vor x², erst durch sie teilen: §3x^2 − 6x − 9 = 0§ §| : 3§ ⇒ §x^2 − 2x − 3 = 0§ ⇒ §x = 1 ± 2§ ⇒ §x_1 = 3§, §x_2 = −1§.</p>
   <p>Unter der Wurzel (Diskriminante): <b>positiv</b> ⇒ zwei Lösungen, <b>0</b> ⇒ eine, <b>negativ</b> ⇒ keine.</p>
   ${maFB("ax^2 + bx + c = 0 ⇒ x_(1,2) = [[−b ± √(b^2 − 4ac) // 2a]]","abc-Formel (Mitternachtsformel) – geht ohne vorher zu teilen")}
   <p class="ex"><b>Kontrolle ohne Taschenrechner (Vieta):</b> Bei §x^2 + px + q = 0§ gilt §x_1 + x_2 = −p§ und §x_1 · x_2 = q§. Beispiel §x^2 − 5x + 6 = 0§: 2 + 3 = 5 und 2 · 3 = 6 ⇒ §x = 2§, §x = 3§.</p>

   <h3 class="ps-h">④ Substitution</h3>
   <p>Bei Gleichungen mit nur x⁴, x² und einer Zahl ersetzt du §x^2§ durch §z§:</p>
   ${maCalc(["§x^4 − 5x^2 + 4 = 0§ "+maC("z = x²"),"§z^2 − 5z + 4 = 0§","§z = 2,5 ± √(6,25 − 4) = 2,5 ± 1,5 ⇒ z_1 = 4, z_2 = 1§","Rücksubstitution: §x^2 = 4 ⇒ x = ±2§ · §x^2 = 1 ⇒ x = ±1§"])}
   ${maWarn("Rücksubstitution nie vergessen! Ein negatives z (z. B. §x^2 = −3§) liefert keine Nullstelle.")}

   <h3 class="ps-h">⑤ Produkt: ablesen</h3>
   <p>§f(x) = 2(x − 1)^2(x + 3)§ ⇒ §x = 1§ (doppelt) und §x = −3§. Vorzeichen in der Klammer umdrehen. Der Faktor 2 liefert keine Nullstelle.</p>
   ${maBsp("Kombination",maCalc(["§x^4 − 3x^3 − 4x^2 = 0§","§x^2 · (x^2 − 3x − 4) = 0§ "+maC("x² ausklammern"),"§x = 0§ (doppelt) oder §x = 1,5 ± √(2,25 + 4) = 1,5 ± 2,5§","§x = 4§, §x = −1§"]))}
  </section>

  <section class="tx" id="mf3"><span class="tx-y">Thema 2</span><h2>Vielfachheit von Nullstellen</h2>
   <p>Ein Faktor §(x − a)§ kann mehrfach vorkommen. Daran siehst du, wie der Graph durch die Nullstelle läuft:</p>
   ${maTable(["Faktor","Vielfachheit","Graph bei x = a"],[["§(x − a)§","einfach","<b>schneidet</b> die x-Achse (Vorzeichenwechsel)"],["§(x − a)^2§","doppelt","<b>berührt</b> die x-Achse (kein Vorzeichenwechsel) – dort ist ein Hoch- oder Tiefpunkt"],["§(x − a)^3§","dreifach","schneidet flach (Sattelpunkt)"]])}
   <div class="ma-g2 plots">
    <figure>${maPlot({w:300,h:200,pad:20,xr:[-3,2.6],yr:[-2.5,4],fs:10,fns:[{f:x=>.5*(x+2)*(x-1)**2}],pts:[{x:-2,y:0,c:"--crown",l:"einfach",dx:-7,dy:-9,a:"end"},{x:1,y:0,c:"--parl",l:"doppelt",dx:0,dy:-13,a:"middle"}],aria:"einfache und doppelte Nullstelle"})}<figcaption><b>§f(x) = 0,5(x + 2)(x − 1)^2§</b>schneidet bei −2, berührt bei 1</figcaption></figure>
    <figure>${maPlot({w:300,h:200,pad:20,xr:[-2.2,2.2],yr:[-2.5,2.5],fs:10,fns:[{f:x=>.4*x**3}],pts:[{x:0,y:0,c:"--gold",l:"dreifach",dx:-8,dy:-10,a:"end"}],aria:"dreifache Nullstelle"})}<figcaption><b>§g(x) = 0,4x^3§</b>dreifach bei 0: schneidet flach</figcaption></figure>
   </div>
   <p class="ex"><b>Merke:</b> gerade Vielfachheit ⇒ berührt · ungerade Vielfachheit ⇒ schneidet.</p>
  </section>

  <section class="tx" id="mf4"><span class="tx-y">Thema 3</span><h2>Schnittpunkte mit den Koordinatenachsen</h2>
   ${maFB("y-Achse: S_y(0 | f(0)) · x-Achse: f(x) = 0 ⇒ N(x_0 | 0)",null,1)}
   <ul class="ps-ul"><li><b>y-Achse:</b> §x = 0§ einsetzen. Bei ganzrationalen Funktionen ist §f(0)§ einfach die Zahl ohne x.</li><li><b>x-Achse:</b> Nullstellen berechnen.</li></ul>
   ${maBsp(null,maCalc(["§f(x) = x^3 − x^2 − 6x§ ⇒ §f(0) = 0§ ⇒ §S_y(0 | 0)§","§x(x^2 − x − 6) = 0 ⇒ x = 0§ oder §x = 0,5 ± √(0,25 + 6) = 0,5 ± 2,5§","§N_1(−2 | 0)§, §N_2(0 | 0)§, §N_3(3 | 0)§"]))}
   ${maWarn("Schnittpunkte immer als Punkt mit beiden Koordinaten angeben.")}
  </section>

  <section class="tx" id="mf5"><span class="tx-y">Thema 4</span><h2>Funktionsgraphen skizzieren</h2>
   <h3 class="ps-h">Globalverlauf</h3>
   <p>Für sehr große und sehr kleine x bestimmt nur der Term mit der <b>höchsten Potenz</b> den Verlauf:</p>
   ${maTable(["Term vorne","Grad gerade","Grad ungerade"],[["§a > 0§","↖ ↗ links oben, rechts oben","↙ ↗ links unten, rechts oben"],["§a < 0§","↙ ↘ links unten, rechts unten","↖ ↘ links oben, rechts unten"]])}
   <div class="ma-g2 four">${mini(x=>x*x-1,"x² (gerade, +)","↖ ↗")}${mini(x=>-x*x+1,"−x² (gerade, −)","↙ ↘")}${mini(x=>x**3-x,"x³ (ungerade, +)","↙ ↗")}${mini(x=>-(x**3)+x,"−x³ (ungerade, −)","↖ ↘")}</div>
   ${maSteps(["<b>Globalverlauf</b> am Term mit der höchsten Potenz ablesen.","<b>Nullstellen</b> mit Vielfachheit eintragen (schneiden / berühren).","<b>y-Achsenabschnitt</b> §f(0)§ eintragen.","<b>Symmetrie</b> prüfen.","<b>Extrempunkte</b> eintragen (falls berechnet), sonst ein paar Werte ausrechnen.","Glatt durchzeichnen – ein Graph vom Grad n hat höchstens n − 1 Extrempunkte."],"So skizzierst du")}
   ${maBsp("Beispiel §f(x) = −x^3 + 3x + 2 = −(x + 1)^2(x − 2)§",`<ul class="ps-ul"><li>−x³ ⇒ von links oben nach rechts unten</li><li>§x = −1§ doppelt (berührt), §x = 2§ einfach (schneidet)</li><li>§S_y(0 | 2)§ · Wertetabelle: §f(−2) = 4§</li><li>Extrempunkte (Reiter Extrema): §T(−1 | 0)§, §H(1 | 4)§</li></ul>`+maPlot({xr:[-2.6,3],yr:[-3,6],h:250,fns:[{f:maF1,l:"f",lx:-1.95,dx:-12,dy:4}],pts:[{x:-1,y:0,l:"T(−1|0)",c:"--parl",dy:18,dx:-4,a:"end"},{x:1,y:4,l:"H(1|4)",c:"--crown",dy:-10,dx:4},{x:2,y:0,c:"--ma",l:"N(2|0)",dx:8,dy:-6},{x:0,y:2,c:"--ma",l:"S_y",dx:-8,dy:-6,a:"end"}],aria:"Graph von minus x hoch 3 plus 3x plus 2"}).replace("S_y","Sᵧ"))}
  </section>`);
}

function mauSteigung(el){
  el.innerHTML=mx(`
  <div class="erachips ma-chips"><a href="#ms1">Mittlere Änderungsrate</a><a href="#ms2">Lokale Änderungsrate</a><a href="#ms3">Steigungswinkel</a><a href="#ms4">Schnittwinkel</a><a href="#ms5">Tangente & Normale</a></div>

  <section class="tx" id="ms1"><span class="tx-y">Thema 5</span><h2>Mittlere Änderungsrate = Sekantensteigung</h2>
   ${maFB("m = [[f(b) − f(a) // b − a]] = [[Δy // Δx]]","Differenzenquotient im Intervall [a; b]",1)}
   <p>Das ist die Steigung der Geraden (<b>Sekante</b>) durch die beiden Kurvenpunkte §P(a | f(a))§ und §Q(b | f(b))§. Sie sagt, wie stark sich f im Intervall <b>im Durchschnitt</b> pro x-Einheit ändert.</p>
   ${maPlot({xr:[-1,4],yr:[-1,10],h:250,ly:2,fns:[{f:x=>x*x,l:"f",lx:-.75,dx:-10,dy:2},{f:x=>4*x-3,c:"--crown",lw:2,l:"Sekante",lx:2.05,dx:-8,dy:0,a:"end"}],seg:[{a:[1,1],b:[3,1],c:"--muted",dash:"5 4"},{a:[3,1],b:[3,9],c:"--muted",dash:"5 4"}],pts:[{x:1,y:1,l:"P(1|1)",c:"--crown",dx:-6,dy:-8,a:"end"},{x:3,y:9,l:"Q(3|9)",c:"--crown",dx:-8,dy:-4,a:"end"}],tx:[{x:2,y:.25,t:"Δx = 2",c:"--muted"},{x:3.38,y:5,t:"Δy = 8",c:"--muted"}],aria:"Sekante an die Normalparabel"})}
   ${maBsp(null,maCalc(["§f(x) = x^2§ im Intervall §[1; 3]§","§m = [[f(3) − f(1) // 3 − 1]] = [[9 − 1 // 2]] = 4§"]))}
   <h3 class="ps-h">In Anwendungsaufgaben</h3>
   <p>Die Einheit ist „Einheit von y pro Einheit von x“. Temperatur §T(t)§ in °C, t in Stunden: §T(8) = 12§, §T(12) = 18§ ⇒ §m = [[18 − 12 // 12 − 8]] = 1,5§ °C pro Stunde.</p>
   <p class="ma-say">„Zwischen 8 und 12 Uhr steigt die Temperatur im Mittel um 1,5 °C pro Stunde.“</p>
  </section>

  <section class="tx" id="ms2"><span class="tx-y">Thema 6</span><h2>Lokale Änderungsrate = Tangentensteigung</h2>
   <p>Schiebt man b immer näher an a heran, wird aus der Sekante die <b>Tangente</b>. Ihre Steigung ist die <b>lokale (momentane) Änderungsrate</b> – die Ableitung §f'(x_0)§.</p>
   ${maFB("f'(x_0) = Steigung des Graphen in x_0 = Steigung der Tangente = momentane Änderungsrate",null,1)}
   ${maPlot({xr:[-1,3.5],yr:[-2,9],h:250,ly:2,fns:[{f:x=>4*x-3,c:"--muted",lw:1.3,dash:"4 4"},{f:x=>3*x-2,c:"--muted",lw:1.3,dash:"4 4"},{f:x=>2.5*x-1.5,c:"--muted",lw:1.3,dash:"4 4"},{f:x=>x*x,l:"f",lx:-.75,dx:-10,dy:2},{f:x=>2*x-1,c:"--crown",lw:2.4,l:"Tangente",lx:3.05,dx:4,dy:20,a:"start"}],pts:[{x:1,y:1,l:"x₀ = 1",c:"--crown",dx:10,dy:16}],tx:[{x:2.05,y:7.2,t:"Sekanten",c:"--muted",a:"end"}],aria:"Sekanten werden zur Tangente"})}
   <p class="ex">Die Herleitung (h-Methode, Differentialquotient) brauchst du laut Mail <b>nicht</b>. In der Klausur bildest du §f'(x)§ mit den Ableitungsregeln und setzt §x_0§ ein.</p>
   ${maBsp(null,maCalc(["§f(x) = x^2 ⇒ f'(x) = 2x ⇒ f'(1) = 2§"])+`<p class="ma-say">„An der Stelle §x = 1§ hat der Graph die Steigung 2.“</p>`)}
   ${maTable(["","mittlere Änderungsrate","lokale Änderungsrate"],[["wo?","über ein Intervall §[a; b]§","an einer Stelle §x_0§"],["Gerade","Sekante (2 Punkte)","Tangente (berührt in 1 Punkt)"],["Formel","§[[f(b) − f(a) // b − a]]§","§f'(x_0)§"],["Satz","„im Mittel / durchschnittlich …“","„genau zu diesem Zeitpunkt …“"]])}
   <p>Vorzeichen: §f'(x_0) > 0§ ⇒ steigt / nimmt zu, §f'(x_0) < 0§ ⇒ fällt / nimmt ab. Beispiel: Ist §s(t)§ der Weg, dann ist §s'(t)§ die Geschwindigkeit genau zum Zeitpunkt t.</p>
  </section>

  <section class="tx" id="ms3"><span class="tx-y">Thema 7</span><h2>Steigung und Steigungswinkel an einer Stelle</h2>
   ${maFB("m = f'(x_0)<br>tan(α) = m ⇒ α = tan^(−1)(m)","α ist der Winkel zwischen der Tangente und der x-Achse",1)}
   ${maPlot({xr:[-.6,4.4],yr:[-.6,4.2],eq:true,fns:[{f:x=>x*x/2,l:"f",lx:2.7,dx:-12},{f:x=>2*x-2,c:"--crown",lw:2,l:"Tangente",lx:2.95,dx:8,dy:2,a:"start"}],pts:[{x:2,y:2,l:"B(2|2)",c:"--crown",dx:10,dy:6}],extra:(X,Y)=>maArc(X,Y,1,0,0,63.43,30,"--gold","α"),aria:"Steigungswinkel der Tangente"})}
   ${maSteps(["§f'(x)§ bilden.","Steigung §m = f'(x_0)§ berechnen.","§α = tan^(−1)(m)§ – Taschenrechner: SHIFT + tan, Modus <b>DEG</b>!"])}
   ${maBsp(null,maCalc(["§f(x) = 0,5x^2§, §x_0 = 2§","§f'(x) = x ⇒ m = f'(2) = 2§","§α = tan^(−1)(2) ≈ 63,43°§"]))}
   <h3 class="ps-h">Werte zum Merken (für OHiMi)</h3>
   ${maTable(["Steigung","Winkel","Bedeutung"],[["0","0°","waagerecht (z. B. Hoch- oder Tiefpunkt)"],["1","45°","steigt so stark wie die 1. Winkelhalbierende"],["−1","−45°","fällt unter 45°"],["§√(3) ≈ 1,73§","60°",""],["§[[1 // √(3)]] ≈ 0,58§","30°",""],["sehr groß","fast 90°","fast senkrecht"]])}
   <p>Ein <b>negativer Winkel</b> heißt: Der Graph <b>fällt</b> dort. Antwort z. B.: „Der Graph fällt an dieser Stelle unter einem Winkel von 63,43° zur x-Achse.“</p>
   <h3 class="ps-h">Umgekehrt: Wo hat der Graph einen bestimmten Winkel?</h3>
   ${maCalc(["45° ⇒ §m = tan(45°) = 1§","§f'(x) = x = 1 ⇒ x = 1§ ⇒ Punkt §(1 | 0,5)§"])}
  </section>

  <section class="tx" id="ms4"><span class="tx-y">Thema 8</span><h2>Schnittpunkte und Schnittwinkel zweier Graphen</h2>
   <h3 class="ps-h">Schnittpunkte</h3>
   <p>Gleichsetzen §f(x) = g(x)§, alles auf eine Seite bringen, mit einem Nullstellen-Verfahren lösen und den y-Wert in f oder g ausrechnen.</p>
   <h3 class="ps-h">Schnittwinkel</h3>
   ${maSteps(["Schnittstelle §x_S§ berechnen.","Steigungen: §m_1 = f'(x_S)§, §m_2 = g'(x_S)§.","Winkel: §α_1 = tan^(−1)(m_1)§, §α_2 = tan^(−1)(m_2)§.","§γ = |α_1 − α_2|§.","Ist §γ > 90°§, nimm §180° − γ§. Der Schnittwinkel liegt immer zwischen 0° und 90°."])}
   ${maFB("tan(γ) = |[[m_1 − m_2 // 1 + m_1 · m_2]]|","Formel als Alternative (falls ihr sie hattet) – liefert direkt den Winkel ≤ 90°")}
   <p>Sonderfälle: §m_1 · m_2 = −1§ ⇒ senkrecht (90°). §m_1 = m_2§ ⇒ die Graphen berühren sich (0°).</p>
   ${maBsp("Beispiel §f(x) = x^2§, §g(x) = −x + 2§",maCalc(["§x^2 = −x + 2 ⇒ x^2 + x − 2 = 0§","§x = −0,5 ± √(0,25 + 2) = −0,5 ± 1,5 ⇒ x_1 = 1, x_2 = −2§","§S_1(1 | 1)§, §S_2(−2 | 4)§","in §S_1§: §m_1 = f'(1) = 2 ⇒ α_1 ≈ 63,43°§","§m_2 = g'(1) = −1 ⇒ α_2 = −45°§","§|63,43° − (−45°)| = 108,43° > 90°§ ⇒ §γ = 180° − 108,43° = 71,57°§"])+
     maPlot({xr:[-2.6,2.4],yr:[-.8,5.2],h:240,fns:[{f:x=>x*x,l:"f",lx:-2.2,dx:-10,dy:4},{f:x=>-x+2,c:"--psy",l:"g",lx:2.1,dx:6,dy:-4},{f:x=>2*x-1,c:"--crown",lw:1.4,dash:"5 4"}],pts:[{x:1,y:1,l:"S₁(1|1)",c:"--crown",dx:12,dy:28},{x:-2,y:4,l:"S₂(−2|4)",c:"--crown",dx:10,dy:-6}],aria:"Parabel und Gerade schneiden sich"}))}
   <p>Schnittwinkel mit der <b>x-Achse</b> = Betrag des Steigungswinkels an der Nullstelle.</p>
  </section>

  <section class="tx" id="ms5"><span class="tx-y">Thema 9</span><h2>Tangentengleichung und Normalengleichung</h2>
   ${maFB("t(x) = f'(x_0) · (x − x_0) + f(x_0)","Tangente: berührt den Graphen im Punkt B(x_0 | f(x_0)) mit derselben Steigung",1)}
   ${maFB("n(x) = −[[1 // f'(x_0)]] · (x − x_0) + f(x_0)","Normale: steht in B senkrecht auf der Tangente, denn m_t · m_n = −1",1)}
   ${maPlot({xr:[-1,5],yr:[-1,4.6],eq:true,fns:[{f:x=>x*x/2,l:"f",lx:-.75,dx:-8,dy:-2},{f:x=>2*x-2,c:"--crown",lw:2.2,l:"Tangente t",lx:3.05,dx:8,dy:4,a:"start"},{f:x=>-.5*x+3,c:"--psy",lw:2.2,l:"Normale n",lx:4.1,dx:0,dy:-9}],pts:[{x:2,y:2,l:"B(2|2)",c:"--fg",dx:14,dy:5}],extra:(X,Y)=>maRight(X,Y,2,2,2,"--fg"),aria:"Tangente und Normale an eine Parabel"})}
   ${maSteps(["y-Wert berechnen: §f(x_0)§.","§f'(x)§ bilden, Steigung §m = f'(x_0)§.","Tangente: §t(x) = m · (x − x_0) + f(x_0)§.","Normale: Steigung §m_n = −[[1 // m]]§ (Kehrwert, Vorzeichen umdrehen), gleicher Punkt.","Ausmultiplizieren und zusammenfassen."])}
   ${maBsp("Beispiel §f(x) = 0,5x^2§, §x_0 = 2§",maCalc(["§f(2) = 2§, §f'(x) = x ⇒ f'(2) = 2§","Tangente: §t(x) = 2 · (x − 2) + 2 = 2x − 2§","Normale: §m_n = −[[1 // 2]]§ ⇒ §n(x) = −0,5 · (x − 2) + 2 = −0,5x + 3§"]))}
   <p><b>Andere Methode:</b> §y = mx + b§ mit §m = 2§ und dem Punkt §B(2 | 2)§: §2 = 2 · 2 + b ⇒ b = −2§ ⇒ §t(x) = 2x − 2§.</p>
   <p><b>Sonderfall:</b> §f'(x_0) = 0§ ⇒ Tangente waagerecht §t(x) = f(x_0)§, Normale senkrecht §x = x_0§.</p>
   <p><b>Umgekehrte Aufgaben:</b> „Tangente parallel zu §y = 3x − 1§“ ⇒ §f'(x) = 3§ lösen. „Wo hat f die Steigung m?“ ⇒ §f'(x) = m§.</p>
  </section>`);
}

function mauAbleitung(el){
  const X0=-2.4,X1=2.6;
  el.innerHTML=mx(`
  <div class="erachips ma-chips"><a href="#ma1">Regeln</a><a href="#ma2">Wurzeln & Brüche</a><a href="#ma3">Parameter</a><a href="#ma4">Höhere Ableitungen</a><a href="#ma5">Graphisch</a><a href="#ma6">NEW-Regel</a></div>

  <section class="tx" id="ma1"><span class="tx-y">Thema 10</span><h2>Ableitungsregeln</h2>
   <p>Die Ableitungsfunktion §f'§ gibt für jedes x die Steigung von f an.</p>
   ${maFB("f(x) = x^n ⇒ f'(x) = n · x^(n−1)","Potenzregel: Hochzahl nach vorne, Hochzahl minus 1",1)}
   ${maFB("f(x) = a · x^n ⇒ f'(x) = a · n · x^(n−1)","Faktorregel: Die Zahl davor bleibt stehen")}
   ${maFB("f(x) = g(x) + h(x) ⇒ f'(x) = g'(x) + h'(x)","Summenregel: jeden Summanden einzeln ableiten")}
   ${maFB("f(x) = c ⇒ f'(x) = 0 · f(x) = a · x ⇒ f'(x) = a","Konstante fällt weg, beim x bleibt die Zahl davor")}
   ${maTable(["f(x)","f'(x)"],[["§x^5§","§5x^4§"],["§3x^4§","§12x^3§"],["§−2x^3§","§−6x^2§"],["§[[1 // 2]]x^2§","§x§"],["§7x§","§7§"],["§5§","§0§"]])}
   ${maBsp(null,maCalc(["§f(x) = 2x^4 − 3x^3 + [[1 // 2]]x^2 − 7x + 5§","§f'(x) = 8x^3 − 9x^2 + x − 7§"]))}
   ${maWarn("Klammern erst ausmultiplizieren: §f(x) = x^2(x − 3) = x^3 − 3x^2 ⇒ f'(x) = 3x^2 − 6x§. Ebenso §(x + 1)^2 = x^2 + 2x + 1 ⇒ 2x + 2§.")}
  </section>

  <section class="tx" id="ma2"><span class="tx-y">Rationale Exponenten</span><h2>Wurzeln und Brüche ableiten</h2>
   <p><b>Erst als Potenz schreiben</b>, dann die Potenzregel anwenden, am Ende zurückschreiben.</p>
   ${maTable(["so steht es da","als Potenz"],[["§√(x)§","§x^(1/2)§"],["§√(x^3)§ bzw. §x√(x)§","§x^(3/2)§"],["§[[1 // x]]§","§x^(−1)§"],["§[[1 // x^2]]§","§x^(−2)§"],["§[[1 // √(x)]]§","§x^(−1/2)§"],["§[[3 // x]]§","§3x^(−1)§"],["§[[1 // 2x]]§","§[[1 // 2]]x^(−1)§ (die 2 bleibt Faktor)"]])}
   ${maFB("x^(−n) = [[1 // x^n]] · x^(1/n) = <sup>n</sup>√(x) · x^(m/n) = <sup>n</sup>√(x^m)","Potenzgesetze")}
   ${maCalc(["§f(x) = √(x) = x^(1/2) ⇒ f'(x) = [[1 // 2]]x^(−1/2) = [[1 // 2√(x)]]§","§f(x) = [[1 // x]] = x^(−1) ⇒ f'(x) = −1 · x^(−2) = −[[1 // x^2]]§","§f(x) = [[1 // x^2]] = x^(−2) ⇒ f'(x) = −2x^(−3) = −[[2 // x^3]]§","§f(x) = [[4 // x]] = 4x^(−1) ⇒ f'(x) = −4x^(−2) = −[[4 // x^2]]§","§f(x) = 6√(x) = 6x^(1/2) ⇒ f'(x) = 3x^(−1/2) = [[3 // √(x)]]§","§f(x) = x√(x) = x^(3/2) ⇒ f'(x) = [[3 // 2]]x^(1/2) = 1,5√(x)§","§f(x) = [[1 // √(x)]] = x^(−1/2) ⇒ f'(x) = −[[1 // 2]]x^(−3/2)§"])}
   <p class="ex"><b>Rechnen mit der Hochzahl:</b> §[[1 // 2]] − 1 = −[[1 // 2]]§ · §−1 − 1 = −2§ · §−[[1 // 2]] − 1 = −[[3 // 2]]§ · §[[3 // 2]] − 1 = [[1 // 2]]§</p>
   ${maFB("(√(x))' = [[1 // 2√(x)]] · ([[1 // x]])' = −[[1 // x^2]]","Diese beiden auswendig – das spart im OHiMi-Teil Zeit",1)}
   <p>Definitionsbereich: §√(x)§ nur für §x ≥ 0§ (Ableitung für §x > 0§), §[[1 // x]]§ nicht für §x = 0§.</p>
  </section>

  <section class="tx" id="ma3"><span class="tx-y">Parameter</span><h2>Ableiten mit Parametern</h2>
   <p>Parameter (a, k, t …) sind feste Zahlen, die man nur noch nicht kennt. Du behandelst sie <b>wie eine Zahl</b> – abgeleitet wird nur nach x. Schreibweise: §f_t(x)§, §f_t'(x)§.</p>
   ${maTable(["f(x)","f'(x)","Hinweis"],[["§f_t(x) = tx^3 − 2t^2x§","§3tx^2 − 2t^2§","§t^2§ ist der Faktor vor x"],["§f_a(x) = ax^2 + a^2§","§2ax§","§a^2§ ist eine Konstante ⇒ fällt weg"],["§f_k(x) = x^3 − kx§","§3x^2 − k§",""],["§f_t(x) = [[1 // t]]x^2 + t§","§[[2 // t]]x§","§t§ allein fällt weg"],["§f_a(x) = a√(x)§","§[[a // 2√(x)]]§",""]])}
   ${maWarn("§t^2§ ohne x ist eine Zahl ⇒ Ableitung 0, nicht 2t!")}
  </section>

  <section class="tx" id="ma4"><span class="tx-y">f'' und f'''</span><h2>Höhere Ableitungen</h2>
   <p>§f''§ ist die Ableitung von §f'§, §f'''§ die Ableitung von §f''§.</p>
   ${maCalc(["§f(x) = x^4 − 2x^3 + 5§","§f'(x) = 4x^3 − 6x^2§","§f''(x) = 12x^2 − 12x§","§f'''(x) = 24x − 12§"])}
   <p>§f''§ sagt, wie sich die Steigung ändert – das ist die <b>Krümmung</b>:</p>
   ${maTable(["§f''(x)§","Krümmung","Bild"],[["§> 0§","linksgekrümmt (Steigung nimmt zu)","∪"],["§< 0§","rechtsgekrümmt (Steigung nimmt ab)","∩"]])}
   <p>Das brauchst du für das hinreichende Kriterium bei Extrempunkten.</p>
  </section>

  <section class="tx" id="ma5"><span class="tx-y">Thema 11</span><h2>Graphisches Differenzieren</h2>
   <p>Ohne Funktionsterm vom Graphen von f auf den Graphen von §f'§ schließen (oder umgekehrt). Grundidee: <b>§f'(x)§ ist an jeder Stelle die Steigung von f.</b></p>
   ${maTable(["Graph von f","Graph von f'"],[["steigt","liegt <b>oberhalb</b> der x-Achse (§f' > 0§)"],["fällt","liegt <b>unterhalb</b> der x-Achse (§f' < 0§)"],["Hochpunkt (steigt → fällt)","Nullstelle mit Vorzeichenwechsel <b>+ → −</b>"],["Tiefpunkt (fällt → steigt)","Nullstelle mit Vorzeichenwechsel <b>− → +</b>"],["Wendepunkt (steilste / flachste Stelle)","Hoch- oder Tiefpunkt"],["Sattelpunkt (waagerecht, kein Richtungswechsel)","Nullstelle ohne Vorzeichenwechsel (berührt)"],["linksgekrümmt ∪","steigt"],["rechtsgekrümmt ∩","fällt"],["Grad n (z. B. 3)","Grad n − 1 (z. B. Parabel)"],["Gerade mit Steigung m","waagerechte Gerade §y = m§"]])}
   <div class="ma-stack">
   ${maPlot({xr:[X0,X1],yr:[-3,6],h:220,lx:2,ly:2,yl:"f(x)",fns:[{f:maF1,l:"f",lx:-1.95,dx:-12,dy:4}],vl:[{x:-1,c:"--parl"},{x:0,c:"--gold"},{x:1,c:"--crown"}],pts:[{x:-1,y:0,c:"--parl",l:"T",dx:0,dy:20,a:"middle"},{x:1,y:4,c:"--crown",l:"H",dx:9,dy:-6},{x:0,y:2,c:"--gold",l:"W (steilste Stelle)",dx:9,dy:16}],tx:[{x:-1.75,y:-1.6,t:"fällt",c:"--muted",w:600},{x:-.45,y:3.2,t:"steigt",c:"--muted",w:600},{x:1.75,y:-1.6,t:"fällt",c:"--muted",w:600}],aria:"Graph von f"})}
   ${maPlot({xr:[X0,X1],yr:[-6,4],h:220,lx:2,ly:2,yl:"f'(x)",fns:[{f:maF1d,c:"--psy",l:"f'",lx:1.45,dx:12,dy:4,a:"start"}],vl:[{x:-1,c:"--parl"},{x:0,c:"--gold"},{x:1,c:"--crown"}],pts:[{x:-1,y:0,c:"--parl",l:"N (− → +)",dx:-7,dy:-8,a:"end"},{x:1,y:0,c:"--crown",l:"N (+ → −)",dx:7,dy:-8},{x:0,y:3,c:"--gold",l:"Hochpunkt",dx:9,dy:-6}],tx:[{x:-1.85,y:-1.6,t:"f' < 0",c:"--muted",w:600},{x:.5,y:1.1,t:"f' > 0",c:"--muted",w:600},{x:1.85,y:-1.6,t:"f' < 0",c:"--muted",w:600}],aria:"Graph von f Strich"})}
   </div>
   <p class="meta">oben §f(x) = −x^3 + 3x + 2§, unten §f'(x) = −3x^2 + 3§</p>
   ${maSteps(["Hoch- und Tiefpunkte von f suchen ⇒ dort hat §f'§ <b>Nullstellen</b>.","Steilste Stelle (Wendestelle) von f suchen ⇒ dort hat §f'§ einen <b>Hoch- oder Tiefpunkt</b>.","Abschnittsweise: Wo f steigt, liegt §f'§ oberhalb, wo f fällt, unterhalb der x-Achse.","Steigung an ein, zwei Stellen mit einem Steigungsdreieck schätzen ⇒ Höhe von §f'§ (hier §f'(0) = 3§).","Grad prüfen: §f'§ hat einen Grad weniger (kubisch → Parabel, Parabel → Gerade)."],"So skizzierst du f'")}
   <h3 class="ps-h">Rückwärts: vom Graphen von f' auf f schließen</h3>
   <ul class="ps-ul"><li>§f' > 0§ ⇒ f steigt · §f' < 0§ ⇒ f fällt</li><li>Nullstelle von §f'§ mit Vorzeichenwechsel + → − ⇒ <b>Hochpunkt</b> von f, − → + ⇒ <b>Tiefpunkt</b></li><li>Hoch- oder Tiefpunkt von §f'§ ⇒ Wendestelle von f</li></ul>
   ${maWarn("Aus §f'§ kannst du <b>nicht</b> ablesen, wie hoch der Graph von f liegt – f kann beliebig nach oben oder unten verschoben sein. Aussagen wie „§f(0) > 0§“ sind nicht entscheidbar.")}
  </section>

  <section class="tx" id="ma6"><span class="tx-y">Merkregel</span><h2>Die NEW-Regel</h2>
   <p><b>N</b> = Nullstelle · <b>E</b> = Extremstelle · <b>W</b> = Wendestelle. Jede Ableitung rutscht eine Stufe nach rechts:</p>
   <div class="ma-new" role="img" aria-label="NEW-Regel als Treppe">
    <span class="lb">f</span><span class="n">N</span><span class="e">E</span><span class="w">W</span><span></span><span></span>
    <span class="lb">f'</span><span></span><span class="n">N</span><span class="e">E</span><span class="w">W</span><span></span>
    <span class="lb">f''</span><span></span><span></span><span class="n">N</span><span class="e">E</span><span class="w">W</span>
   </div>
   <p>Senkrecht gelesen:</p>
   <ul class="ps-ul"><li>Die <b>Extremstellen von f</b> sind die <b>Nullstellen von f'</b>.</li><li>Die <b>Wendestellen von f</b> sind die <b>Extremstellen von f'</b> und die <b>Nullstellen von f''</b>.</li></ul>
   <p class="ex">Nur Nullstellen von §f'§ <b>mit Vorzeichenwechsel</b> sind Extremstellen von f.</p>
  </section>`);
}

function mauExtrema(el){
  const g=x=>x**3-6*x*x+9*x+1;
  el.innerHTML=mx(`
  <div class="erachips ma-chips"><a href="#me1">Begriffe</a><a href="#me2">Kriterien</a><a href="#me3">Schema</a><a href="#me4">4. Grad</a><a href="#me5">Parameter</a><a href="#me6">Anwendung</a></div>

  <section class="tx" id="me1"><span class="tx-y">Grundlagen</span><h2>Hoch- und Tiefpunkte</h2>
   ${maTable(["Begriff","Bedeutung"],[["Hochpunkt §H§ (lokales Maximum)","in seiner Umgebung der höchste Punkt"],["Tiefpunkt §T§ (lokales Minimum)","in seiner Umgebung der tiefste Punkt"],["Extremstelle §x_E§","nur der x-Wert"],["Extremwert §f(x_E)§","nur der y-Wert"],["Extrempunkt §E(x_E | f(x_E))§","der Punkt mit beiden Koordinaten"]])}
   <p>„Lokal“ heißt: nur im Vergleich zur Umgebung. Bei Anwendungsaufgaben mit Definitionsbereich auch die <b>Ränder</b> prüfen – der größte Wert insgesamt kann am Rand liegen.</p>
  </section>

  <section class="tx" id="me2"><span class="tx-y">Thema 12</span><h2>Notwendiges und hinreichendes Kriterium</h2>
   ${maFB("Notwendig: f'(x_E) = 0","An einem Hoch- oder Tiefpunkt ist die Tangente waagerecht.",1)}
   ${maFB("Hinreichend: f'(x_E) = 0 und f''(x_E) < 0 ⇒ Hochpunkt<br>f'(x_E) = 0 und f''(x_E) > 0 ⇒ Tiefpunkt","Das Vorzeichen von f'' entscheidet, welche Art es ist.",1)}
   ${maPlot({xr:[-.5,4.5],yr:[-1.8,7],h:260,lx:2,fns:[{f:g,l:"f",lx:4.2,dx:10,dy:6}],seg:[{a:[.3,5],b:[1.7,5],c:"--crown",lw:2},{a:[2.3,1],b:[3.7,1],c:"--parl",lw:2}],pts:[{x:1,y:5,l:"H(1|5): f'' < 0  ∩",c:"--crown",dx:0,dy:-12,a:"middle"},{x:3,y:1,l:"T(3|1): f'' > 0  ∪",c:"--parl",dx:0,dy:36,a:"middle"}],aria:"Hochpunkt und Tiefpunkt mit waagerechten Tangenten"})}
   <p class="ex"><b>Eselsbrücke:</b> §f'' < 0§ ⇒ ∩ (traurig ☹) ⇒ <b>Hochpunkt</b> · §f'' > 0§ ⇒ ∪ (lächelt ☺) ⇒ <b>Tiefpunkt</b>. Oder: „Minus ⇒ Maximum“.</p>
   <p>Warum reicht §f' = 0§ allein nicht? Bei §f(x) = x^3§ ist §f'(0) = 0§, aber dort ist kein Extrempunkt, sondern ein Sattelpunkt. Solche Sonderfälle (§f''(x_E) = 0§) kommen laut Mail noch nicht dran.</p>
  </section>

  <section class="tx" id="me3"><span class="tx-y">Musterlösung</span><h2>Das Schema an einem Beispiel</h2>
   <div class="aufg"><h3>Bestimme die Extrempunkte von §f(x) = x^3 − 6x^2 + 9x + 1§.</h3></div>
   ${maCalc([maC("1. Ableitungen"),"§f'(x) = 3x^2 − 12x + 9§","§f''(x) = 6x − 12§",maC("2. notwendig: f'(x) = 0"),"§3x^2 − 12x + 9 = 0§ "+maC("| : 3"),"§x^2 − 4x + 3 = 0 ⇒ x = 2 ± √(4 − 3) = 2 ± 1§","§x_1 = 1§, §x_2 = 3§",maC("3. hinreichend: in f'' einsetzen"),"§f''(1) = −6 < 0§ ⇒ Hochpunkt","§f''(3) = 6 > 0§ ⇒ Tiefpunkt",maC("4. y-Werte in f"),"§f(1) = 1 − 6 + 9 + 1 = 5§","§f(3) = 27 − 54 + 27 + 1 = 1§",maC("5. Ergebnis"),"§H(1 | 5)§, §T(3 | 1)§"])}
   ${maWarn("Den y-Wert immer in §f§ einsetzen – nicht in §f'§ (da kommt immer 0 heraus) und nicht in §f''§.")}
  </section>

  <section class="tx" id="me4"><span class="tx-y">Übung</span><h2>Funktion 4. Grades</h2>
   <div class="aufg"><h3>§f(x) = x^4 − 2x^2§</h3></div>
   ${maCalc(["§f'(x) = 4x^3 − 4x§, §f''(x) = 12x^2 − 4§","§4x(x^2 − 1) = 0 ⇒ x = 0§, §x = 1§, §x = −1§ "+maC("ausklammern"),"§f''(0) = −4 < 0§ ⇒ §H(0 | 0)§","§f''(1) = 8 > 0§ ⇒ §T(1 | −1)§","§f''(−1) = 8 > 0§ ⇒ §T(−1 | −1)§"])}
   ${maPlot({xr:[-1.9,1.9],yr:[-1.6,1.6],h:180,sx:.5,sy:.5,lx:1,ly:1,fns:[{f:x=>x**4-2*x*x,l:"f",lx:1.6,dx:12,dy:8}],pts:[{x:0,y:0,c:"--crown",l:"H",dx:8,dy:-6},{x:-1,y:-1,c:"--parl",l:"T",dx:0,dy:18,a:"middle"},{x:1,y:-1,c:"--parl",l:"T",dx:0,dy:18,a:"middle"}],aria:"Graph von x hoch 4 minus 2 x Quadrat"})}
  </section>

  <section class="tx" id="me5"><span class="tx-y">Parameter</span><h2>Extrempunkte mit Parameter</h2>
   <div class="aufg"><h3>§f_t(x) = x^3 − 3t^2x§ mit §t > 0§</h3></div>
   ${maCalc(["§f_t'(x) = 3x^2 − 3t^2§, §f_t''(x) = 6x§","§3x^2 − 3t^2 = 0 ⇒ x^2 = t^2 ⇒ x = t§ oder §x = −t§","§f_t''(t) = 6t > 0§ (weil §t > 0§) ⇒ Tiefpunkt","§f_t''(−t) = −6t < 0§ ⇒ Hochpunkt","§f_t(t) = t^3 − 3t^3 = −2t^3§ · §f_t(−t) = −t^3 + 3t^3 = 2t^3§","§T(t | −2t^3)§, §H(−t | 2t^3)§"])}
   <p class="ex">Genau gleich rechnen wie ohne Parameter. Die Angabe §t > 0§ brauchst du, um das Vorzeichen von §f''§ zu entscheiden.</p>
  </section>

  <section class="tx" id="me6"><span class="tx-y">Anwendung</span><h2>Extrempunkte in Sachaufgaben</h2>
   <p>„Wann ist … am größten / kleinsten / höchsten?“ ⇒ Extrempunkte berechnen, Ränder prüfen, Antwortsatz mit Einheit.</p>
   ${maBsp("Temperatur",`<p>§T(t) = −0,5t^2 + 6t + 4§ (T in °C, t in Stunden nach 6 Uhr, §0 ≤ t ≤ 12§). Wann ist es am wärmsten?</p>`+maCalc(["§T'(t) = −t + 6 = 0 ⇒ t = 6§","§T''(t) = −1 < 0§ ⇒ Hochpunkt","§T(6) = −18 + 36 + 4 = 22§","Ränder: §T(0) = 4§, §T(12) = 4§ – beide kleiner"])+`<p class="ma-say">„Um 12 Uhr ist es mit 22 °C am wärmsten.“</p>`)}
  </section>`);
}

function mauFormeln(el){
  el.innerHTML=`<input class="ps-q" id="maQ" type="search" placeholder="Formel suchen, z. B. Normale …" autocomplete="off"><div id="maFl" class="view" style="gap:10px"></div>`;
  const draw=()=>{
    const q=maEl("maQ").value.toLowerCase();let html="",last="";
    MA_FORMELN.filter(b=>!q||(b.g+b.t+b.f+b.n).toLowerCase().includes(q)).forEach(b=>{
      if(b.g!==last){html+=`<h2 class="sec">${b.g}</h2>`;last=b.g}
      html+=`<div class="ma-fc"><h3>${b.t}</h3>${maFB(b.f,b.n)}</div>`;
    });
    maEl("maFl").innerHTML=html?mx(html):'<p class="meta">Nichts gefunden.</p>';
  };
  maEl("maQ").oninput=draw;draw();
}

/* =========================================================
   KLAUSURVORBEREITUNG
   ========================================================= */
function makAblauf(el){
  el.innerHTML=mx(`
  <div class="step ma-must"><span class="afb">So läuft die Klausur</span><ul>
   <li><b>Teil 1: OHiMi (ohne Hilfsmittel)</b> – 30 Minuten, kein Taschenrechner. Die Zahlen sind deshalb „glatt“. Üben im Reiter <a href="#/mathe/klausur/ohimi">OHiMi</a>.</li>
   <li><b>Teil 2: mit Taschenrechner.</b></li>
   <li>Alle Themen können in <b>Anwendungsaufgaben in allen Kombinationen</b> vorkommen.</li></ul></div>

  <div class="step"><span class="afb">Taschenrechner – unbedingt mitbringen</span><ul>
   <li>Es werden <b>keine</b> Taschenrechner ausgegeben. Du brauchst einen <b>eigenen, funktionierenden</b>.</li>
   <li>Erlaubt nur: <b>nicht programmierbar</b>, <b>nicht grafikfähig</b>, <b>kann nicht differenzieren oder integrieren</b>.</li>
   <li>Empfohlenes Modell von der <a href="https://www.taschenrechner.de/shop/artikel/details/IQ-Z8PlusV2" target="_blank" rel="noopener">Taschenrechner-Homepage (IQ-Z8PlusV2)</a>.</li>
   <li>Vorher prüfen: Batterie, Modus <b>DEG</b> (Grad, nicht RAD), §tan^(−1)§ = SHIFT + tan.</li></ul></div>

  <h2 class="sec">Das kommt dran</h2>
  <p class="meta" style="margin:0">Die 11 Themen aus der Mail von Herrn Reiter – antippen führt zur Erklärung:</p>
  <div class="ma-topics">${MA_THEMEN.map(([t,d,tab],i)=>`<a class="ma-topic" href="#/mathe/unterricht/${tab}"><span class="n">${i+1}</span><b>${t}</b><span class="d">${d}</span></a>`).join("")}</div>

  <div class="step"><span class="afb">Kommt nicht dran</span><ul>
   <li>Polynomdivision</li>
   <li>h-Methode und jede andere Herleitung des Differentialquotienten</li>
   <li>Sonderfälle bei Extrempunkten (§f''(x_E) = 0§)</li>
   <li>Wendepunkte stehen nicht extra in der Liste – beim graphischen Differenzieren brauchst du sie aber als „steilste Stelle“.</li></ul></div>

  <h2 class="sec">Lernplan bis zur Klausur</h2>
  <div class="ma-plan">
   <div><b>Tag 1</b><ul><li>Ableiten (auch §√(x)§, §[[1 // x]]§, Parameter) → <a href="#/mathe/klausur/ueben">Üben · Ableiten</a></li><li>Nullstellen: alle 5 Verfahren → Rezept 1 + 2</li><li>Graphisches Differenzieren + NEW-Regel → <a href="#/mathe/klausur/ueben">Üben · Graphen</a></li><li>OHiMi-Aufgaben ohne Taschenrechner</li></ul></div>
   <div><b>Tag 2</b><ul><li>Änderungsraten, Steigungswinkel → Rezept 4–7</li><li>Schnittpunkte, Schnittwinkel, Tangente, Normale → Rezept 8–11</li><li>Extrempunkte → Rezept 13</li><li><a href="#/mathe/klausur/probe">Probeklausur</a>: Teil A mit Stoppuhr (30 min), dann Teil B</li></ul></div>
   <div><b>Klausurtag</b><ul><li>„Merken“ oben rechts durchlesen</li><li>Checkliste unten abhaken</li><li>Taschenrechner einpacken, auf DEG</li></ul></div>
  </div>

  <h2 class="sec">Operatoren</h2>
  ${maTable(["Operator","Was du tun musst"],[["angeben, nennen","Ergebnis ohne Rechnung hinschreiben"],["berechnen","Rechenweg zeigen, Ergebnis angeben"],["bestimmen, ermitteln","Weg frei wählen (Rechnung oder Begründung), Ergebnis angeben"],["skizzieren","wesentliche Eigenschaften zeichnen (Nullstellen, Extrema, Verlauf), nicht exakt"],["zeichnen","genau in ein Koordinatensystem"],["zeigen, nachweisen","Schritt für Schritt bestätigen, dass die Aussage stimmt"],["begründen","mit Fachbegriffen erklären, warum"],["untersuchen","prüfen und das Ergebnis begründen"],["interpretieren, deuten","Ergebnis im Sachzusammenhang mit Einheit erklären"]])}

  <h2 class="sec">Typische Fehler</h2>
  ${MA_FEHLER.map(([x,v])=>`<div class="ku-fix"><span class="x">✗ ${x}</span><span class="v">✓ ${v}</span></div>`).join("")}

  <h2 class="sec">Checkliste</h2>
  <div class="step ps-chk" id="maChk"></div>`);
  const done=store.get("maChk",{});
  maEl("maChk").innerHTML=mx(MA_CHECK.map((t,i)=>`<label><input type="checkbox" data-i="${i}" ${done[i]?"checked":""}> <span>${t}</span></label>`).join(""));
  maEl("maChk").querySelectorAll("input").forEach(c=>c.onchange=()=>{done[c.dataset.i]=c.checked;store.set("maChk",done)});
}

function makRezepte(el){
  el.innerHTML=mx(`<p class="meta" style="margin:0">Für jede Aufgabenart das Vorgehen Schritt für Schritt mit einem kurzen Beispiel. Antippen zum Aufklappen.</p>
  <div class="erachips ma-chips" id="maRzChips">${MA_REZ.map((r,i)=>`<a href="#mr${i+1}">${i+1} ${r.t.split(" ")[0]}</a>`).join("")}</div>
  ${MA_REZ.map((r,i)=>`<details class="entry ma-rz" id="mr${i+1}"><summary><h3><span class="nr">${i+1}</span>${r.t}</h3></summary><div class="inner">
   <p class="meta">${r.typ}</p>${maSteps(r.s,"Schritte")}${maBsp(null,r.b)}</div></details>`).join("")}`);
  maEl("maRzChips").addEventListener("click",e=>{const a=e.target.closest("a");if(!a)return;const d=document.querySelector(a.getAttribute("href"));if(d)d.open=true});
}

/* ---------- OHiMi: ohne Hilfsmittel ---------- */
const MA_OHIMI=[
 ["Leite ab: §f(x) = 5x^4 − 3x^2 + 2x − 9§","§f'(x) = 20x^3 − 6x + 2§"],
 ["Leite ab: §f(x) = [[2 // x]] + 4√(x)§","§f(x) = 2x^(−1) + 4x^(1/2)§ ⇒ §f'(x) = −2x^(−2) + 2x^(−1/2) = −[[2 // x^2]] + [[2 // √(x)]]§"],
 ["Leite zweimal ab: §f_t(x) = tx^3 − t^2x^2 + t§","§f_t'(x) = 3tx^2 − 2t^2x§ · §f_t''(x) = 6tx − 2t^2§"],
 ["Leite ab: §f(x) = x^2(2x − 1)§","Erst ausmultiplizieren: §f(x) = 2x^3 − x^2§ ⇒ §f'(x) = 6x^2 − 2x§"],
 ["Nullstellen von §f(x) = x^3 − 16x§","§x(x^2 − 16) = 0§ ⇒ §x_1 = 0§, §x_2 = 4§, §x_3 = −4§"],
 ["Nullstellen von §f(x) = x^4 − 13x^2 + 36§","§z = x^2§: §z^2 − 13z + 36 = 0 ⇒ z = 6,5 ± √(42,25 − 36) = 6,5 ± 2,5§ ⇒ §z = 9§ oder §z = 4§ ⇒ §x = ±3§, §x = ±2§"],
 ["Nullstellen von §f(x) = −x^2 + 6x − 8§","§· (−1)§: §x^2 − 6x + 8 = 0 ⇒ x = 3 ± √(9 − 8) = 3 ± 1§ ⇒ §x_1 = 4§, §x_2 = 2§ (Vieta: 2 + 4 = 6, 2 · 4 = 8 ✓)"],
 ["Mittlere Änderungsrate von §f(x) = x^3§ im Intervall §[−1; 2]§","§[[f(2) − f(−1) // 2 − (−1)]] = [[8 − (−1) // 3]] = [[9 // 3]] = 3§"],
 ["Tangente und Normale an §f(x) = x^3§ in §x_0 = 1§","§f(1) = 1§, §f'(x) = 3x^2 ⇒ f'(1) = 3§ ⇒ §t(x) = 3(x − 1) + 1 = 3x − 2§ · §m_n = −[[1 // 3]]§ ⇒ §n(x) = −[[1 // 3]](x − 1) + 1 = −[[1 // 3]]x + [[4 // 3]]§"],
 ["An welcher Stelle hat §f(x) = x^2 − 3x§ den Steigungswinkel 45°?","§tan 45° = 1§ ⇒ §f'(x) = 2x − 3 = 1 ⇒ x = 2§ ⇒ §P(2 | −2)§"],
 ["Extrempunkte von §f(x) = x^3 − 3x§","§f'(x) = 3x^2 − 3 = 0 ⇒ x = ±1§ · §f''(x) = 6x§: §f''(−1) = −6 < 0 ⇒ H(−1 | 2)§, §f''(1) = 6 > 0 ⇒ T(1 | −2)§"],
 ["§f'(3) = 0§ und §f''(3) = −2§. Was folgt?","f hat bei §x = 3§ einen Hochpunkt (hinreichendes Kriterium, §f'' < 0§)."],
 ["Der Graph von f ist eine nach unten geöffnete Parabel mit Scheitel §S(2 | 5)§. Beschreibe den Graphen von §f'§.","Eine fallende Gerade mit Nullstelle bei §x = 2§: links davon steigt f ⇒ §f' > 0§, rechts fällt f ⇒ §f' < 0§."],
 ["Zwei Graphen haben im Schnittpunkt die Steigungen 1 und −1. Schnittwinkel?","§α_1 = 45°§, §α_2 = −45°§ ⇒ §γ = 90°§ (senkrecht, denn §1 · (−1) = −1§)."]
];
function makOhimi(el){
  el.innerHTML=mx(`
  <div class="step ma-must"><span class="afb">30 Minuten ohne Taschenrechner</span><p>Alles muss sich im Kopf oder auf dem Papier rechnen lassen. Typisch sind:</p><ul>
   <li>Ableitungen (auch §√(x)§, §[[1 // x]]§ und mit Parametern)</li><li>Nullstellen mit Ausklammern, pq-Formel und Substitution (glatte Zahlen)</li><li>Graphisches Differenzieren: §f'§ skizzieren oder Aussagen anhand des Graphen von §f'§ beurteilen</li><li>Tangente / Normale, Extrempunkte einfacher Funktionen</li><li>Winkel nur mit Standardwerten (z. B. 45°)</li></ul></div>

  <h2 class="sec">Rechnen ohne Taschenrechner</h2>
  <div class="ma-g2 txt">
   <div class="ps-mini"><b>Potenzen</b>§x^a · x^b = x^(a+b)§<br>§[[x^a // x^b]] = x^(a−b)§<br>§x^(−n) = [[1 // x^n]]§ · §x^(1/2) = √(x)§</div>
   <div class="ps-mini"><b>Brüche</b>§[[a // b]] · [[c // d]] = [[ac // bd]]§<br>durch einen Bruch teilen = mit dem Kehrwert malnehmen<br>§[[1 // 2]] − 1 = −[[1 // 2]]§</div>
   <div class="ps-mini"><b>Binomische Formeln</b>§(a + b)^2 = a^2 + 2ab + b^2§<br>§(a − b)^2 = a^2 − 2ab + b^2§<br>§(a + b)(a − b) = a^2 − b^2§</div>
   <div class="ps-mini"><b>Quadratzahlen</b>11² = 121 · 12² = 144 · 13² = 169 · 14² = 196 · 15² = 225 · 16² = 256 · 0,5² = 0,25 · 1,5² = 2,25 · 2,5² = 6,25 · 3,5² = 12,25</div>
   <div class="ps-mini"><b>tan-Werte</b>§tan 0° = 0§ · §tan 45° = 1§<br>§tan(−45°) = −1§ · §tan 60° = √(3)§<br>§tan 30° = [[√(3) // 3]]§</div>
   <div class="ps-mini"><b>Vieta (Kontrolle)</b>§x^2 + px + q = 0§: §x_1 + x_2 = −p§, §x_1 · x_2 = q§<br>§x^2 − 7x + 10 = 0§ ⇒ 2 und 5</div>
  </div>

  <h2 class="sec">Übungsaufgaben</h2>
  <p class="meta" style="margin:0">Erst auf Papier lösen, dann aufklappen.</p>
  ${MA_OHIMI.map(([q,a],i)=>`<details class="entry"><summary><h3>${i+1}. ${q}</h3></summary><div class="inner"><p class="ma-sol">${a}</p></div></details>`).join("")}`);
}

/* ---------- Probeklausur ---------- */
const maHill=x=>-.02*x**3+.3*x*x;
const maFd=x=>-.5*x*x+x+1.5; // Graph von f' in Aufgabe A4
function makProbe(el){
  el.innerHTML=mx(`
  <p class="meta" style="margin:0">Selbst erstellt nach den Themen aus der Mail. Teil A ohne Taschenrechner mit Stoppuhr (30 min), dann Teil B mit Taschenrechner. Erst auf Papier, dann die Lösungen aufklappen.</p>

  <h2 class="sec">Teil A · ohne Hilfsmittel</h2>
  <div class="aufg"><h3>A1 · Bilde jeweils die erste Ableitung.</h3>${maParts(["§f(x) = 4x^3 − 2x^2 + 7§","§f(x) = 3√(x)§","§f(x) = [[2 // x]]§","§f_t(x) = tx^4 − t^2x§","§f(x) = x^2(x − 3)§"])}</div>
  <div class="aufg"><h3>A2 · Berechne die Nullstellen.</h3>${maParts(["§f(x) = x^3 − 9x§","§f(x) = x^4 − 10x^2 + 9§","§f(x) = 3x^2 + 3x − 18§"])}</div>
  <div class="aufg"><h3>A3 · Bestimme die Gleichung der Tangente und der Normalen an den Graphen von §f(x) = x^2 − 4x + 1§ an der Stelle §x_0 = 3§.</h3></div>
  <div class="aufg"><h3>A4 · Abgebildet ist der Graph der <u>Ableitung</u> §f'§ einer Funktion f. Entscheide begründet, ob die Aussagen wahr, falsch oder nicht entscheidbar sind.</h3>
   ${maPlot({xr:[-2.2,4.4],yr:[-3,3],h:220,yl:"f'(x)",fns:[{f:maFd,c:"--psy",l:"f'",lx:3.7,dx:12,dy:2}],aria:"Graph von f Strich: nach unten geöffnete Parabel mit Nullstellen bei minus 1 und 3"})}
   ${maParts(["f hat bei §x = −1§ einen Tiefpunkt.","f ist für §0 < x < 2§ streng monoton steigend.","f hat bei §x = 1§ einen Hochpunkt.","f hat bei §x = 3§ einen Hochpunkt.","§f(0) > 0§"],"1")}</div>
  <div class="aufg"><h3>A5 · Bestimme die Extrempunkte von §f(x) = −x^3 + 12x§.</h3></div>
  <div class="aufg"><h3>A6 · Skizziere den Graphen von §f(x) = (x + 2)(x − 1)^2§.</h3></div>

  <h2 class="sec">Teil B · mit Taschenrechner</h2>
  <div class="aufg"><h3>B1 · Die Gipfelbahn</h3>
   <p>Das Profil eines Hügels wird für §0 ≤ x ≤ 15§ beschrieben durch §f(x) = −0,02x^3 + 0,3x^2§ (x und f(x) in 10 m). Eine Standseilbahn fährt geradlinig entlang §g(x) = x§ vom Tal zum Gipfel.</p>
   ${maPlot({xr:[-.5,16],yr:[-1,11.5],eq:true,sx:1,sy:1,lx:5,ly:5,fns:[{f:x=>x>=0&&x<=15?maHill(x):NaN,l:"f (Hügel)",lx:13.4,dx:10,dy:-6,a:"start"},{f:x=>x>=0&&x<=11?x:NaN,c:"--psy",lw:2,l:"g (Bahn)",lx:3,dx:-8,dy:-4,a:"end"}],aria:"Hügelprofil mit geradliniger Bahn"})}
   ${maParts(["Berechne die Schnittpunkte von f mit den Koordinatenachsen und deute sie.","Bestimme den Gipfel des Hügels (notwendiges und hinreichendes Kriterium).","Berechne die durchschnittliche Steigung des Hangs vom Tal §(0 | 0)§ bis zum Gipfel und den zugehörigen Winkel.","Berechne Steigung und Steigungswinkel des Hangs bei §x = 5§ und vergleiche mit c).","Bestimme die Stellen, an denen der Hang genau 45° steil ist.","Berechne die Schnittpunkte von Bahn und Hügel. Begründe, wo die Bahn durch einen Tunnel fährt, und berechne den Schnittwinkel am Tunneleingang.","Bei §P(12 | f(12))§ wird ein Schutzzaun senkrecht zum Hang aufgestellt. Bestimme die Gleichung der Tangente an den Hang in P und der Geraden, auf der der Zaun steht (Normale).","<i>Knobelaufgabe:</i> Zeige, dass der Hang bei §x = 5§ am steilsten ist."])}</div>
  <div class="aufg"><h3>B2 · Wachstum einer Pflanze</h3>
   <p>Die Höhe einer Pflanze wird beschrieben durch §h(t) = 4√(t)§ (h in cm, t in Tagen, §0 ≤ t ≤ 30§).</p>
   ${maParts(["Berechne die durchschnittliche Wachstumsgeschwindigkeit in den ersten 16 Tagen.","Bestimme §h'(t)§ und die momentane Wachstumsgeschwindigkeit nach 9 Tagen.","Wann wächst die Pflanze nur noch 0,5 cm pro Tag?","Begründe mit §h'(t)§, dass die Pflanze immer langsamer wächst.","Bestimme die Tangente an den Graphen von h bei §t = 4§ und deute sie."])}</div>

  <div class="aufg"><h3>B3 · Bahnstrecke ${maTag("schwer")}</h3>
   <p class="meta" style="margin:0">Beispielaufgabe aus dem Buch (Nr. 17)</p>
   <p>Eine neue Bahnstrecke verläuft entlang der Geraden §f(x) = [[1 // 2]]x + 2§. Vom Reparaturwerk §P(0 | 0)§ aus soll ein Anschlussgleis §g(x) = a√(x)§ (mit §a > 0§) so gebaut werden, dass es <b>tangential</b> in die Strecke mündet. Die x-Achse zeigt nach Osten, die y-Achse nach Norden.</p>
   ${maPlot({xr:[-.6,9.4],yr:[-.6,7.4],eq:true,sx:1,sy:1,lx:2,ly:2,fns:[{f:x=>.5*x+2,c:"--crown",lw:2.4,l:"Bahn f",lx:7.6,dx:0,dy:-10},{f:x=>x>=0?3*Math.sqrt(x):NaN,c:"--muted",lw:1.6,dash:"5 4",l:"a zu groß",lx:2.2,dx:-6,dy:-6,a:"end"},{f:x=>x>=0?1.2*Math.sqrt(x):NaN,c:"--muted",lw:1.6,dash:"5 4",l:"a zu klein",lx:8.2,dx:0,dy:16}],pts:[{x:0,y:0,c:"--fg",l:"P",dx:6,dy:14}],aria:"Gerade f und zwei Kurven a mal Wurzel x: eine schneidet die Gerade, eine bleibt darunter"})}
   ${maParts(["Wie muss a gewählt werden? Wo liegt der Anschlusspunkt B?","In welchem Punkt verläuft das Anschlussgleis genau in Richtung Nordosten?"])}</div>

  <h2 class="sec">Lösungen Teil A</h2>
  <details class="entry"><summary><h3>A1 · Ableitungen</h3></summary><div class="inner">${maCalc(["a) §f'(x) = 12x^2 − 4x§","b) §3x^(1/2) ⇒ f'(x) = [[3 // 2]]x^(−1/2) = [[3 // 2√(x)]]§","c) §2x^(−1) ⇒ f'(x) = −2x^(−2) = −[[2 // x^2]]§","d) §f_t'(x) = 4tx^3 − t^2§","e) §x^3 − 3x^2 ⇒ f'(x) = 3x^2 − 6x§"])}</div></details>
  <details class="entry"><summary><h3>A2 · Nullstellen</h3></summary><div class="inner">${maCalc(["a) §x(x^2 − 9) = 0 ⇒ x_1 = 0, x_2 = 3, x_3 = −3§","b) §z = x^2§: §z^2 − 10z + 9 = 0 ⇒ z = 5 ± √(25 − 9) = 5 ± 4§","§z = 9 ⇒ x = ±3§ · §z = 1 ⇒ x = ±1§","c) §| : 3§: §x^2 + x − 6 = 0 ⇒ x = −0,5 ± √(0,25 + 6) = −0,5 ± 2,5§","§x_1 = 2§, §x_2 = −3§"])}</div></details>
  <details class="entry"><summary><h3>A3 · Tangente und Normale</h3></summary><div class="inner">${maCalc(["§f(3) = 9 − 12 + 1 = −2§","§f'(x) = 2x − 4 ⇒ f'(3) = 2§","§t(x) = 2(x − 3) − 2 = 2x − 8§","§m_n = −[[1 // 2]]§ ⇒ §n(x) = −[[1 // 2]](x − 3) − 2 = −0,5x − 0,5§"])}</div></details>
  <details class="entry"><summary><h3>A4 · Graph von f'</h3></summary><div class="inner">
   <p class="ma-sol">(1) <b>Wahr:</b> §f'(−1) = 0§ und §f'§ wechselt dort das Vorzeichen von − nach +. f fällt erst und steigt dann ⇒ Tiefpunkt.</p>
   <p class="ma-sol">(2) <b>Wahr:</b> Für §0 < x < 2§ liegt der Graph von §f'§ oberhalb der x-Achse, also §f'(x) > 0§ ⇒ f steigt.</p>
   <p class="ma-sol">(3) <b>Falsch:</b> §f'(1) = 2 ≠ 0§, also kein Extrempunkt. Bei §x = 1§ hat §f'§ seinen Hochpunkt ⇒ dort steigt f am stärksten (Wendestelle).</p>
   <p class="ma-sol">(4) <b>Wahr:</b> §f'(3) = 0§ mit Vorzeichenwechsel von + nach − ⇒ Hochpunkt.</p>
   <p class="ma-sol">(5) <b>Nicht entscheidbar:</b> Der Graph von §f'§ sagt nur etwas über die Steigung von f, nicht über die Höhe. f kann beliebig nach oben oder unten verschoben sein.</p></div></details>
  <details class="entry"><summary><h3>A5 · Extrempunkte</h3></summary><div class="inner">${maCalc(["§f'(x) = −3x^2 + 12§, §f''(x) = −6x§","§−3x^2 + 12 = 0 ⇒ x^2 = 4 ⇒ x = 2§ oder §x = −2§","§f''(2) = −12 < 0§ ⇒ Hochpunkt, §f(2) = −8 + 24 = 16§","§f''(−2) = 12 > 0§ ⇒ Tiefpunkt, §f(−2) = 8 − 24 = −16§","§H(2 | 16)§, §T(−2 | −16)§"])}</div></details>
  <details class="entry"><summary><h3>A6 · Skizze</h3></summary><div class="inner">
   <ul class="ps-ul"><li>Ausmultipliziert §x^3 − 3x + 2§: Grad 3, vorne + ⇒ von links unten nach rechts oben</li><li>§x = −2§ einfach (schneidet), §x = 1§ doppelt (berührt ⇒ dort Tiefpunkt)</li><li>§S_y(0 | 2)§</li></ul>
   ${maPlot({xr:[-2.8,2.3],yr:[-2,5],h:220,fns:[{f:x=>(x+2)*(x-1)**2,l:"f",lx:2,dx:10,dy:6}],pts:[{x:-2,y:0,c:"--ma",l:"N(−2|0)",dx:-6,dy:16,a:"end"},{x:1,y:0,c:"--parl",l:"berührt",dx:0,dy:18,a:"middle"},{x:0,y:2,c:"--ma",l:"(0|2)",dx:8,dy:-6},{x:-1,y:4,c:"--crown",l:"H(−1|4)",dx:0,dy:-10,a:"middle"}],aria:"Skizze der Funktion"})}
   <p class="meta">Der Hochpunkt §H(−1 | 4)§ ist nicht verlangt, macht die Skizze aber genauer.</p></div></details>

  <h2 class="sec">Lösungen Teil B</h2>
  <details class="entry"><summary><h3>B1 a) Achsenschnittpunkte</h3></summary><div class="inner">${maCalc(["§f(0) = 0 ⇒ S_y(0 | 0)§","§−0,02x^3 + 0,3x^2 = 0 ⇒ x^2(−0,02x + 0,3) = 0§","§x = 0§ (doppelt) oder §−0,02x + 0,3 = 0 ⇒ x = 15§","§N_1(0 | 0)§, §N_2(15 | 0)§"])}<p class="ma-say">Der Hügel beginnt im Ursprung und endet 150 m weiter. Bei §x = 0§ berührt der Graph die x-Achse: Der Hang beginnt waagerecht.</p></div></details>
  <details class="entry"><summary><h3>B1 b) Gipfel</h3></summary><div class="inner">${maCalc(["§f'(x) = −0,06x^2 + 0,6x§, §f''(x) = −0,12x + 0,6§","§−0,06x(x − 10) = 0 ⇒ x = 0§ oder §x = 10§","§f''(10) = −0,6 < 0§ ⇒ Hochpunkt · §f''(0) = 0,6 > 0§ ⇒ Tiefpunkt","§f(10) = −20 + 30 = 10 ⇒ H(10 | 10)§"])}<p class="ma-say">Der Gipfel liegt 100 m (waagerecht) vom Start entfernt und ist 100 m hoch.</p></div></details>
  <details class="entry"><summary><h3>B1 c) Durchschnittliche Steigung</h3></summary><div class="inner">${maCalc(["§m = [[f(10) − f(0) // 10 − 0]] = [[10 // 10]] = 1§","§α = tan^(−1)(1) = 45°§"])}<p class="ma-say">Vom Tal zum Gipfel steigt der Hang im Mittel um 100 %, das entspricht 45°.</p></div></details>
  <details class="entry"><summary><h3>B1 d) Steigung bei x = 5</h3></summary><div class="inner">${maCalc(["§f'(5) = −0,06 · 25 + 0,6 · 5 = −1,5 + 3 = 1,5§","§α = tan^(−1)(1,5) ≈ 56,31°§"])}<p class="ma-say">Bei §x = 5§ ist der Hang mit 56,31° deutlich steiler als im Durchschnitt (45°).</p></div></details>
  <details class="entry"><summary><h3>B1 e) Wo genau 45°?</h3></summary><div class="inner">${maCalc(["§tan 45° = 1 ⇒ f'(x) = 1§","§−0,06x^2 + 0,6x − 1 = 0§ "+maC("| : (−0,06)"),"§x^2 − 10x + 16,67 = 0§","§x = 5 ± √(25 − 16,67) ≈ 5 ± 2,89§","§x_1 ≈ 2,11§, §x_2 ≈ 7,89§"])}<p class="ma-say">Bei etwa 21 m und 79 m ist der Hang genau 45° steil, dazwischen steiler.</p></div></details>
  <details class="entry"><summary><h3>B1 f) Bahn, Tunnel, Schnittwinkel</h3></summary><div class="inner">${maCalc(["§−0,02x^3 + 0,3x^2 = x ⇒ x(−0,02x^2 + 0,3x − 1) = 0§","§x = 0§ oder §x^2 − 15x + 50 = 0§ "+maC("| : (−0,02)"),"§x = 7,5 ± √(56,25 − 50) = 7,5 ± 2,5 ⇒ x = 5§, §x = 10§","§S_1(0 | 0)§, §S_2(5 | 5)§, §S_3(10 | 10)§","Test: §f(7) = 7,84 > g(7) = 7§ ⇒ zwischen 5 und 10 liegt der Hügel über der Bahn ⇒ Tunnel","Tunneleingang §S_2§: §f'(5) = 1,5 ⇒ α_1 ≈ 56,31°§ · §g'(5) = 1 ⇒ α_2 = 45°§","§γ = 56,31° − 45° ≈ 11,31°§"])}<p class="ma-say">Zwischen 50 m und 100 m fährt die Bahn im Tunnel, sie trifft unter etwa 11,3° auf den Hang. Bei §S_3§ (Gipfel, §f'(10) = 0§) beträgt der Schnittwinkel 45°.</p></div></details>
  <details class="entry"><summary><h3>B1 g) Tangente und Normale in P</h3></summary><div class="inner">${maCalc(["§f(12) = −34,56 + 43,2 = 8,64 ⇒ P(12 | 8,64)§","§f'(12) = −8,64 + 7,2 = −1,44§","§t(x) = −1,44(x − 12) + 8,64 = −1,44x + 25,92§","§m_n = −[[1 // −1,44]] ≈ 0,694§","§n(x) = 0,694(x − 12) + 8,64 ≈ 0,694x + 0,307§"])}</div></details>
  <details class="entry"><summary><h3>B1 h) Steilste Stelle</h3></summary><div class="inner"><p>Am steilsten heißt: §f'§ ist maximal. Also die Extrempunkte von §f'§ bestimmen (gleiches Schema, eine Ableitung weiter):</p>${maCalc(["§(f')'(x) = f''(x) = −0,12x + 0,6 = 0 ⇒ x = 5§","§f'''(x) = −0,12 < 0§ ⇒ Hochpunkt von §f'§","§f'(5) = 1,5§, also ca. 56,31°"])}<p class="meta">Nach der NEW-Regel ist §x = 5§ die Wendestelle von f.</p></div></details>
  <details class="entry"><summary><h3>B2 · Pflanze</h3></summary><div class="inner">${maCalc(["a) §[[h(16) − h(0) // 16 − 0]] = [[16 − 0 // 16]] = 1§ cm pro Tag","b) §h(t) = 4t^(1/2) ⇒ h'(t) = 2t^(−1/2) = [[2 // √(t)]]§ · §h'(9) = [[2 // 3]] ≈ 0,67§ cm pro Tag","c) §[[2 // √(t)]] = 0,5 ⇒ √(t) = 4 ⇒ t = 16§ ⇒ nach 16 Tagen","d) Je größer t, desto größer §√(t)§, desto kleiner §[[2 // √(t)]]§. §h'§ nimmt also ab, bleibt aber positiv: Die Pflanze wächst immer weiter, nur langsamer.","e) §h(4) = 8§, §h'(4) = 1§ ⇒ §y = 1 · (t − 4) + 8 = t + 4§"])}<p class="ma-say">Die Tangente beschreibt, wie die Pflanze weiterwachsen würde, wenn sie ab Tag 4 gleichmäßig mit 1 cm pro Tag wüchse.</p></div></details>
  <details class="entry"><summary><h3>B3 a) Parameter a und Anschlusspunkt B</h3></summary><div class="inner">
   ${maSteps(["<b>Tangential</b> heißt: Das Gleis geht ohne Knick in die Strecke über. Im Anschlusspunkt §B(x_0 | y_0)§ müssen also <b>der y-Wert</b> und <b>die Steigung</b> gleich sein.","Unbekannt sind a und §x_0§ – zwei Unbekannte, also brauchst du zwei Gleichungen: I gleicher y-Wert, II gleiche Steigung."],"Die Idee")}
   ${maCalc(["§g(x) = a · x^(1/2) ⇒ g'(x) = [[a // 2]]x^(−1/2) = [[a // 2√(x)]]§","§f'(x) = [[1 // 2]]§","<b>II</b> gleiche Steigung: §[[a // 2√(x_0)]] = [[1 // 2]]§ "+maC("| · 2√(x₀)"),"§a = √(x_0)§","<b>I</b> gleicher y-Wert: §a · √(x_0) = [[1 // 2]]x_0 + 2§","a einsetzen: §√(x_0) · √(x_0) = [[1 // 2]]x_0 + 2§","§x_0 = [[1 // 2]]x_0 + 2§ "+maC("| − ½x₀"),"§[[1 // 2]]x_0 = 2 ⇒ x_0 = 4§","§a = √(4) = 2§ · §f(4) = 2 + 2 = 4 ⇒ B(4 | 4)§","Probe: §g(4) = 2 · 2 = 4§ ✓ · §g'(4) = [[2 // 2 · 2]] = [[1 // 2]]§ ✓"])}
   <p class="ma-say">Für §a = 2§, also §g(x) = 2√(x)§, mündet das Anschlussgleis im Punkt §B(4 | 4)§ tangential in die Bahnstrecke.</p>
   ${maPlot({xr:[-.6,9.4],yr:[-.6,7.4],eq:true,sx:1,sy:1,lx:2,ly:2,fns:[{f:x=>.5*x+2,c:"--crown",lw:2.4,l:"f",lx:8.4,dx:0,dy:-10},{f:x=>x>=0?2*Math.sqrt(x):NaN,c:"--ma",l:"g(x) = 2√x",lx:8,dx:4,dy:20}],pts:[{x:0,y:0,c:"--fg",l:"P",dx:6,dy:14},{x:4,y:4,c:"--parl",l:"B(4|4)",dx:-8,dy:-10,a:"end"}],aria:"Gerade f und Anschlussgleis g gleich 2 Wurzel x, die sich im Punkt B 4 4 berühren"})}
   <details class="entry"><summary><h3>Zweiter Lösungsweg (Gleichsetzen)</h3></summary><div class="inner">
    ${maCalc(["Gleichsetzen: §a√(x) = [[1 // 2]]x + 2§","Ersetze §u = √(x)§, dann ist §x = u^2§: §[[1 // 2]]u^2 − au + 2 = 0§ "+maC("| · 2"),"§u^2 − 2au + 4 = 0 ⇒ u = a ± √(a^2 − 4)§ (pq-Formel)","Berühren = genau <b>ein</b> gemeinsamer Punkt ⇒ unter der Wurzel muss 0 stehen:","§a^2 − 4 = 0 ⇒ a = 2§ (da §a > 0§)","§u = a = 2 ⇒ √(x) = 2 ⇒ x = 4 ⇒ B(4 | 4)§"])}</div></details></div></details>
  <details class="entry"><summary><h3>B3 b) Richtung Nordosten</h3></summary><div class="inner">
   ${maSteps(["Nordosten liegt genau zwischen Osten (x-Richtung) und Norden (y-Richtung) ⇒ <b>Steigungswinkel 45°</b>.","§m = tan(45°) = 1§ ⇒ die Stelle suchen, an der §g'(x) = 1§ ist."],"Die Idee")}
   ${maCalc(["§g'(x) = [[2 // 2√(x)]] = [[1 // √(x)]]§","§[[1 // √(x)]] = 1§ "+maC("| · √x"),"§√(x) = 1 ⇒ x = 1§","§g(1) = 2√(1) = 2 ⇒ Q(1 | 2)§"])}
   <p class="ma-say">Im Punkt §Q(1 | 2)§ verläuft das Gleis genau nach Nordosten. Vorher ist es steiler (eher nach Norden), danach flacher (eher nach Osten).</p>
   ${maPlot({xr:[-.6,6.4],yr:[-.6,5.4],eq:true,sx:1,sy:1,lx:1,ly:1,fns:[{f:x=>x>=0?2*Math.sqrt(x):NaN,c:"--ma",l:"g",lx:5.6,dx:0,dy:-10},{f:x=>x>=-.2&&x<=3.2?x+1:NaN,c:"--parl",lw:1.8,dash:"6 4",l:"45°",lx:3,dx:8,dy:0,a:"start"}],pts:[{x:1,y:2,c:"--parl",l:"Q(1|2)",dx:-8,dy:-8,a:"end"}],aria:"Graph von g mit Tangente der Steigung 1 im Punkt Q 1 2"})}</div></details>`);
}

/* ---------- Üben ---------- */
function makUeben(el){
  let mode=store.get("maMode","karten");
  el.innerHTML=`<div class="seg ps-four"><button type="button" data-m="karten">Karten</button><button type="button" data-m="ableiten">Ableiten</button><button type="button" data-m="graphen">Graphen</button><button type="button" data-m="quiz">Quiz</button></div><div id="maUe" class="view" style="gap:14px"></div>`;
  const set=m=>{mode=m;store.set("maMode",m);el.querySelectorAll(".seg button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.m===m));({karten:maKarten,ableiten:maAbleiten,graphen:maGraphen,quiz:maQuiz}[m]||maKarten)(maEl("maUe"))};
  el.querySelectorAll(".seg button").forEach(b=>b.onclick=()=>set(b.dataset.m));
  set(mode);
}

// Karteikarten: Formeln oder Vorgehen (Rezepte)
function maKarten(box){
  const deckSel=store.get("maDeck","formeln");
  const DECK={
    formeln:()=>MA_FORMELN.map(b=>({g:b.g,t:b.t,d:maFB(b.f,b.n)})),
    vorgehen:()=>MA_REZ.map(r=>({g:"Vorgehen",t:r.t,d:`<ol class="ma-ol">${r.s.map(x=>`<li>${x}</li>`).join("")}</ol>`}))};
  let deck=shuffle(DECK[deckSel]()),total=deck.length,known=0,flip=false;
  const bindSel=()=>box.querySelectorAll("[data-d]").forEach(b=>b.onclick=()=>{store.set("maDeck",b.dataset.d);maKarten(box)});
  const draw=()=>{
    const sel=`<div class="seg"><button type="button" data-d="formeln" aria-pressed="${deckSel==="formeln"}">Formeln</button><button type="button" data-d="vorgehen" aria-pressed="${deckSel==="vorgehen"}">Vorgehen</button></div>`;
    if(!deck.length){box.innerHTML=sel+`<div class="done"><span class="big">${total} / ${total}</span><p>Alle Karten gewusst!</p><button class="btn primary" type="button" id="maAgain">Nochmal</button></div>`;maEl("maAgain").onclick=()=>maKarten(box);bindSel();return}
    const c=deck[0];
    box.innerHTML=sel+mx(`<div class="progress"><span>${known} von ${total} gewusst</span><span>noch ${deck.length}</span></div><div class="bar"><i style="width:${known/total*100}%"></i></div>
     <div class="flash" id="maFc"><span class="kind">${c.g}</span><div class="front" style="font-size:${c.t.length>34?"1.35rem":"1.6rem"}">${deckSel==="vorgehen"?"Wie gehst du vor: ":""}${c.t}${deckSel==="formeln"?" – wie lautet die Formel?":""}</div>${flip?`<div class="back">${c.d}</div>`:'<span class="hint">Erst selbst antworten, dann tippen zum Umdrehen</span>'}</div>
     ${flip?'<div class="btns"><button class="btn no" type="button" id="maNo">Nochmal</button><button class="btn yes" type="button" id="maYes">Gewusst</button></div>':""}`);
    bindSel();
    maEl("maFc").onclick=()=>{flip=!flip;draw()};
    if(flip){maEl("maYes").onclick=()=>{deck.shift();known++;flip=false;draw()};
             maEl("maNo").onclick=()=>{const k=deck.shift();deck.splice(Math.min(3,deck.length),0,k);flip=false;draw()}}
  };
  draw();
}

// gemeinsamer Ablauf für Quiz, Ableiten und Graphen
function maQuizRun(box,items,bestKey,render){
  let i=0,pts=0,lock=false;
  const draw=()=>{
    if(i>=items.length){const best=Math.max(store.get(bestKey,0),pts);store.set(bestKey,best);
      box.innerHTML=`<div class="done"><span class="big">${pts} / ${items.length}</span><p>${pts>=items.length*.8?"Super, das sitzt!":pts>=items.length*.5?"Gut! Schau dir die Fehler nochmal an.":"Lies die Erklärungen in den Reitern nochmal und versuch es dann erneut."}</p><p class="tip">Bestwert: ${best} / ${items.length}</p><button class="btn primary" type="button" id="maAgain">Nochmal</button></div>`;
      maEl("maAgain").onclick=()=>render(box);return}
    const it=items[i];
    box.innerHTML=mx(`<div class="progress"><span>Frage ${i+1} von ${items.length}</span><span>${pts} richtig</span></div><div class="bar"><i style="width:${i/items.length*100}%"></i></div>
     <div class="q">${it.pre||""}<div class="ask"><span class="ma-ask">${it.ask}</span></div><div class="opts${it.cls?" "+it.cls:""}">${it.opts.map((o,j)=>`<button type="button" data-j="${j}">${o.h}</button>`).join("")}</div><div id="maEx"></div></div>`);
    box.querySelector(".opts").onclick=e=>{const b=e.target.closest("button");if(!b||lock)return;lock=true;
      const j=+b.dataset.j;if(it.opts[j].r)pts++;
      box.querySelectorAll(".opts button").forEach((x,k)=>{if(it.opts[k].r)x.classList.add("right");else if(k===j)x.classList.add("wrong")});
      maEl("maEx").innerHTML=mx((it.after?`<div class="expl">${it.after}</div>`:""))+`<button class="btn primary" type="button" id="maNx" style="width:100%;margin-top:10px">Weiter</button>`;
      maEl("maNx").onclick=()=>{lock=false;i++;draw()}};
  };draw();
}
function maQuiz(box){
  const items=shuffle(MA_QUIZ).slice(0,10).map(q=>({ask:q.q,after:q.x,opts:shuffle(q.o.map((t,i)=>({h:t,r:i===q.r})))}));
  maQuizRun(box,items,"maQuizBest",maQuiz);
}

// Ableiten: 5 zufällige ganzrationale Funktionen + 5 besondere Fälle
const maRi=(a,b)=>a+Math.floor(Math.random()*(b-a+1));
function maPolyStr(t){
  let s="";t.forEach(([c,e])=>{if(!c)return;const a=Math.abs(c),body=e===0?String(a):(a===1?"":String(a))+(e===1?"x":"x^"+e);
    s+=(s?(c<0?" − ":" + "):(c<0?"−":""))+body});
  return s||"0";
}
function maPolyItem(){
  const nz=()=>{let c=0;while(!c)c=maRi(-6,6);return c};
  const top=maRi(2,4),low=shuffle([...Array(top).keys()]).slice(0,maRi(1,2));
  const T=[top,...low].sort((a,b)=>b-a).map(e=>[nz(),e]),V=T.filter(([,e])=>e>0);
  const right=maPolyStr(V.map(([c,e])=>[c*e,e-1])),k0=T.find(([,e])=>e===0);
  const W=[maPolyStr(V.map(([c,e])=>[c*e,e])),maPolyStr(V.map(([c,e])=>[c,e-1])),
    maPolyStr(V.map(([c,e],i)=>[i===V.length-1?-c*e:c*e,e-1]))];
  if(k0)W.push(maPolyStr([...V.map(([c,e])=>[c*e,e-1]),k0]));
  const wr=shuffle([...new Set(W)].filter(w=>w!==right)).slice(0,3);
  return {ask:`§f(x) = ${maPolyStr(T)}§`,opts:shuffle([{h:`§${right}§`,r:1},...wr.map(w=>({h:`§${w}§`,r:0}))]),
    after:`Jeden Summanden einzeln: Hochzahl nach vorne, Hochzahl minus 1${k0?", die Zahl ohne x fällt weg":""}. §f'(x) = ${right}§`};
}
function maAbleiten(box){
  const sp=shuffle(MA_ABL).slice(0,5).map(([q,r,w])=>({ask:q.includes("=")?`§${q}§`:`§f(x) = ${q}§`,
    opts:shuffle([{h:`§${r}§`,r:1},...w.map(x=>({h:`§${x}§`,r:0}))]),after:`Richtig ist §${r}§. Wurzeln und Brüche erst als Potenz schreiben, Parameter wie Zahlen behandeln.`}));
  const items=shuffle([...sp,...Array.from({length:5},maPolyItem)]).map(it=>({...it,pre:'<p class="meta" style="margin:0">Was ist die Ableitung?</p>'}));
  maQuizRun(box,items,"maAblBest",maAbleiten);
}

// Graphen: Welcher Graph gehört zu f' (oder zu f)?
function maNice(x){const p=Math.pow(10,Math.floor(Math.log10(x))),n=x/p;return (n<1.5?1:n<3.5?2:n<7.5?5:10)*p}
function maMini(fs,cfg){
  let lo=0,hi=0;fs.forEach(f=>{for(let x=-4;x<=4;x+=.05){const y=f(x);if(isFinite(y)){lo=Math.min(lo,y);hi=Math.max(hi,y)}}});
  const pad=(hi-lo)*.12||1,st=maNice((hi-lo)/4||1);
  return maPlot({w:cfg.w||340,h:cfg.h||150,pad:18,xr:[-4.3,4.3],yr:[lo-pad,hi+pad],sy:st,ly:st,fs:9,yl:cfg.yl,fns:fs.map(f=>({f,c:cfg.c,lw:2.6})),aria:cfg.aria||"Graph"});
}
function maGraphItem(){
  const s=Math.random()<.5?1:-1,rev=Math.random()<.35,cubic=Math.random()<.65;
  let f,d,txt;
  if(cubic){
    const p=maRi(-3,0),q=p+maRi(2,3),k=s*(q-p===2?1:.5);
    const F=x=>k*(x**3/3-(p+q)*x*x/2+p*q*x),C=-(F(p)+F(q))/2;
    f=x=>F(x)+C;d=x=>k*(x-p)*(x-q);
    txt=`f hat bei §x = ${maNum(p)}§ einen ${k>0?"Hochpunkt":"Tiefpunkt"} und bei §x = ${maNum(q)}§ einen ${k>0?"Tiefpunkt":"Hochpunkt"} ⇒ dort hat §f'§ seine Nullstellen. Dazwischen ${k>0?"fällt":"steigt"} f, also liegt §f'§ dort ${k>0?"unterhalb":"oberhalb"} der x-Achse.`;
  }else{
    const p=maRi(-2,2),k=s*(Math.random()<.5?.5:1),c=maRi(-2,2);
    f=x=>k*(x-p)**2+c;d=x=>2*k*(x-p);
    txt=`f hat bei §x = ${maNum(p)}§ einen ${k>0?"Tiefpunkt":"Hochpunkt"} ⇒ §f'§ ist eine Gerade mit Nullstelle bei §x = ${maNum(p)}§. Links davon ${k>0?"fällt":"steigt"} f (§f' ${k>0?"<":">"} 0§), rechts ${k>0?"steigt":"fällt"} f.`;
  }
  const shown=rev?d:f,target=rev?f:d,del=Math.random()<.5?1:-1;
  const opts=shuffle([{g:target,r:1},{g:x=>-target(x),r:0},{g:x=>target(x-del),r:0}]);
  return {pre:maMini([shown],{c:rev?"--psy":"--ma",yl:rev?"f'(x)":"f(x)",h:170,aria:rev?"gegebener Graph von f Strich":"gegebener Graph von f"}),
    ask:rev?"Das ist der Graph von §f'§. Welcher Graph kann zu §f§ gehören?":"Das ist der Graph von §f§. Welcher Graph gehört zu §f'§?",
    cls:"ma-gopts",opts:opts.map((o,j)=>({h:`<span class="ma-gl">${"ABC"[j]}</span>`+maMini([o.g],{c:rev?"--ma":"--psy",h:120,aria:"Antwort "+"ABC"[j]}),r:o.r})),
    after:txt+(rev?" Die Höhe von f lässt sich aus §f'§ nicht ablesen – f darf nach oben oder unten verschoben sein.":"")};
}
function maGraphen(box){
  maQuizRun(box,Array.from({length:8},maGraphItem),"maGraphBest",maGraphen);
}

/* ---------- Merken ---------- */
const MA_MERK=mx(`<table class="mtab"><tbody>
<tr class="ph"><td colspan="2">Nullstellen & Graphen</td></tr>
<tr><td>Ansatz</td><td>§f(x) = 0§ · höchstens so viele Nullstellen wie der Grad</td></tr>
<tr><td>Verfahren</td><td>auflösen (an ± denken) · ausklammern + Nullprodukt · pq-Formel · Substitution §z = x^2§ · Produkt ablesen</td></tr>
<tr><td>pq-Formel</td><td>§x = −[[p // 2]] ± √(([[p // 2]])^2 − q)§ (vor x² eine 1!)</td></tr>
<tr><td>Vielfachheit</td><td>gerade ⇒ berührt · ungerade ⇒ schneidet</td></tr>
<tr><td>Achsen</td><td>§S_y(0 | f(0))§ · §N(x_0 | 0)§</td></tr>
<tr><td>Skizze</td><td>Globalverlauf (höchste Potenz) · Nullstellen · §f(0)§ · Symmetrie · Extrema</td></tr>
<tr class="ph"><td colspan="2">Änderungsraten & Winkel</td></tr>
<tr><td>mittlere</td><td>§[[f(b) − f(a) // b − a]]§ = Sekantensteigung</td></tr>
<tr><td>lokale</td><td>§f'(x_0)§ = Tangentensteigung</td></tr>
<tr><td>Winkel</td><td>§α = tan^(−1)(m)§ · DEG · §m = 1 ⇒ 45°§</td></tr>
<tr><td>Schnittwinkel</td><td>§γ = |α_1 − α_2|§, über 90° ⇒ §180° − γ§</td></tr>
<tr><td>Tangente</td><td>§t(x) = f'(x_0)(x − x_0) + f(x_0)§</td></tr>
<tr><td>Normale</td><td>§m_n = −[[1 // f'(x_0)]]§, gleicher Punkt</td></tr>
<tr class="ph"><td colspan="2">Ableiten</td></tr>
<tr><td>Potenzregel</td><td>§(x^n)' = n · x^(n−1)§ · Zahl ohne x fällt weg</td></tr>
<tr><td>Wurzel, Bruch</td><td>§(√(x))' = [[1 // 2√(x)]]§ · §([[1 // x]])' = −[[1 // x^2]]§ · erst umschreiben</td></tr>
<tr><td>Parameter</td><td>wie eine Zahl · §t^2§ allein fällt weg</td></tr>
<tr><td>graphisch</td><td>f steigt ⇔ §f' > 0§ · Extremum von f ⇔ Nullstelle von §f'§ · Wendestelle von f ⇔ Extremum von §f'§</td></tr>
<tr class="ph"><td colspan="2">Extrempunkte</td></tr>
<tr><td>notwendig</td><td>§f'(x_E) = 0§</td></tr>
<tr><td>hinreichend</td><td>§f''(x_E) < 0§ ⇒ Hochpunkt · §f''(x_E) > 0§ ⇒ Tiefpunkt</td></tr>
<tr><td>y-Wert</td><td>in §f§ einsetzen!</td></tr>
</tbody></table><p class="tip" style="margin:10px 0 0">Taschenrechner: eigener, nicht programmierbar, nicht grafikfähig, auf DEG. OHiMi-Teil: 30 min.</p>`);

/* ---------- Module für die Navigation ---------- */
if(typeof PS_ICON!=="undefined")Object.assign(PS_ICON,{
  ma_fn:`<svg viewBox="0 0 24 24"><path d="M3 12h18M12 3v18"/><path d="M4 20c3-14 6-14 8-8s5 6 8-8"/></svg>`,
  ma_steig:`<svg viewBox="0 0 24 24"><path d="M3 19c6 0 10-4 14-14"/><path d="M4 21L21 6"/><circle cx="12" cy="13" r="1.6"/></svg>`,
  ma_abl:`<svg viewBox="0 0 24 24"><path d="M3 18c3-10 6-12 9-12s6 2 9 12"/><path d="M5 6h4M7 4v4"/></svg>`,
  ma_ext:`<svg viewBox="0 0 24 24"><path d="M2 19c4-13 7-13 10-6s6 7 10-6"/><path d="M4 6h6M14 20h6"/></svg>`,
  ma_formel:`<svg viewBox="0 0 24 24"><path d="M18 5H6l6 7-6 7h12"/></svg>`,
  ma_rez:`<svg viewBox="0 0 24 24"><path d="M10 6h10M10 12h10M10 18h10"/><path d="M4 6l1.5 1.5L8 5M4 12l1.5 1.5L8 11M4 18l1.5 1.5L8 17"/></svg>`,
  ma_ohne:`<svg viewBox="0 0 24 24"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M8 7h8M8 11h1M12 11h1M15 11h1M8 15h1M12 15h1M15 15h1"/><path d="M3 3l18 18"/></svg>`
});
if(typeof MODS!=="undefined")Object.assign(MODS,{
  maU:{tabs:[["funktionen","Funktionen","ma_fn"],["steigung","Steigung","ma_steig"],["ableitung","Ableitung","ma_abl"],["extrema","Extrema","ma_ext"],["formeln","Formeln","ma_formel"]],
    titles:{funktionen:["Funktionen","Nullstellen, Achsenschnittpunkte, Skizzieren"],steigung:["Steigung","Änderungsraten, Winkel, Tangente & Normale"],ableitung:["Ableitung","Regeln, Wurzeln & Brüche, Parameter, graphisch"],extrema:["Extrempunkte","notwendiges und hinreichendes Kriterium"],formeln:["Formeln",`${MA_FORMELN.length} Formeln, durchsuchbar`]},
    views:{funktionen:mauFunktionen,steigung:mauSteigung,ableitung:mauAbleitung,extrema:mauExtrema,formeln:mauFormeln},
    merk:["Das Wichtigste auf einen Blick","Kurvendiskussion",MA_MERK]},
  maK:{tabs:[["ablauf","Ablauf","ablauf"],["rezepte","Rezepte","ma_rez"],["ohimi","OHiMi","ma_ohne"],["probe","Probe","probe"],["ueben","Üben","ueben"]],
    titles:{ablauf:["Was drankommt","Themen, Taschenrechner, Lernplan, Checkliste"],rezepte:["Rezepte",`${MA_REZ.length} Aufgabentypen Schritt für Schritt`],ohimi:["OHiMi","30 Minuten ohne Hilfsmittel"],probe:["Probeklausur","Teil A ohne, Teil B mit Taschenrechner"],ueben:["Üben","Karten, Ableiten, Graphen, Quiz"]},
    views:{ablauf:makAblauf,rezepte:makRezepte,ohimi:makOhimi,probe:makProbe,ueben:makUeben},
    merk:["Das Wichtigste auf einen Blick","Kurvendiskussion",MA_MERK]}
});
