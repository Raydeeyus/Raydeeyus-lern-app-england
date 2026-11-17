/* =========================================================
   Klausuren-App: Psychologie (11 LK)
   System, Interaktion & Kommunikation · Klausur 18.11.2026
   Wird VOR klausur.js geladen und liefert MODS (eigene Reiter je Kategorie).
   ========================================================= */

/* ---------- Fachbegriffe ---------- */
// p = Pflicht (aus dem Unterricht), e = Ergänzung
const PS_BEGRIFFE=[
 {g:'System',t:'Ganzheitspsychologie',d:'Grundgedanke über dem ganzen Thema: Ein Mensch wird nicht isoliert betrachtet, sondern nur im Ganzen verstanden – mit seinen Beziehungen und dem System, in dem er lebt. Steckt in der Übersummation („Das Ganze ist mehr als die Summe seiner Teile“) und in der Interdependenz (alles hängt zusammen).',p:1},
 {g:'System',t:'System',d:'Ein Aggregat (eine Ansammlung) von Objekten, die alle miteinander in Wechselbeziehung stehen.',p:1},
 {g:'System',t:'Soziales System',d:'System aus Menschen (z. B. Familie, Klasse, Freundeskreis), die über Interaktions- und Kommunikationsprozesse wechselseitig verbunden sind. Menschen leben immer in Systemen – und meist in mehreren gleichzeitig.',p:1},
 {g:'System',t:'Systemgrenze',d:'Grenze, die festlegt, wer zum System gehört. Soziale Systeme haben offene Systemgrenzen: Äußere und innere Einflüsse wirken hinein und heraus.',p:1},
 {g:'System',t:'Äußere und innere Einflüsse',d:'Einflüsse von außerhalb (z. B. Arbeit, Schule, Freunde) und von innerhalb des Systems (z. B. Stimmung, Bedürfnisse eines Mitglieds), die auf das System wirken.',p:1},
 {g:'System',t:'Wechselbeziehung',d:'Jedes Systemmitglied steht mit jedem anderen in Beziehung („jeder mit jedem“) und beeinflusst es gegenseitig.',p:1},
 {g:'System',t:'Systemprozesse',d:'Abläufe, die in einem System stattfinden – vor allem Interaktion und Kommunikation zwischen den Mitgliedern.',p:1},
 {g:'System',t:'Interdependenz',d:'Verändert sich das Erleben/Verhalten eines Systemmitglieds, so verändern sich Erleben/Verhalten aller anderen Systemmitglieder. Bringt einer Bewegung ins System, geraten alle in Bewegung.',p:1},
 {g:'System',t:'Übersummation',d:'Die Eigenschaften eines Systems können nur aus den Interaktionsbedingungen der Systemmitglieder erschlossen werden. Diese Interaktionen bestimmen die Qualität des Gesamtsystems („Das Ganze ist mehr als die Summe seiner Teile“).',p:1},
 {g:'System',t:'Rückkopplung',d:'Da Kommunikation kreisförmig verläuft, wirkt jede Reaktion auf den Ausgangspunkt zurück. Dadurch kommt es in Kommunikationsprozessen zu Rückkopplungen.',p:1},
 {g:'System',t:'Positive Rückkopplung',d:'Das System entfernt sich von seinem Normzustand (Abweichung verstärkt sich, Aufschaukeln, Eskalation). Das kann unter Umständen bis zum Zerfall des Systems führen.',p:1},
 {g:'System',t:'Negative Rückkopplung',d:'Das System bleibt in seinem Normalzustand (Abweichungen werden ausgeglichen). Für das System besteht keine Bedrohung.',p:1},
 {g:'System',t:'Normzustand / Normalzustand',d:'Der „normale“, eingespielte Zustand eines Systems, von dem es sich bei positiver Rückkopplung entfernt.',p:1},
 {g:'System',t:'Fließgleichgewicht',d:'Jedes System existiert in einem Fließgleichgewicht. Dieses Gleichgewicht ist relativ, also kein absoluter (fester) Zustand – es bewegt sich ständig leicht.',p:1},
 {g:'System',t:'Gegenmaßnahmen',d:'Bei Störungen ist jedes System bestrebt, seinen Gleichgewichtszustand mit Hilfe von Gegenmaßnahmen aufrechtzuerhalten bzw. wiederherzustellen.',p:1},
 {g:'System',t:'Systemtheorie',d:'Erklärt Erleben und Verhalten von Menschen dadurch, dass sie in Systemen leben, in denen sie mit anderen über Interaktions- und Kommunikationsprozesse wechselseitig verbunden sind.',p:1},
 {g:'Kommunikation',t:'Soziale Kommunikation',d:'Die Aufnahme, die Vermittlung und der Austausch von Informationen zwischen zwei oder mehreren Personen.',p:1},
 {g:'Kommunikation',t:'Soziale Interaktion',d:'Bezeichnung für das wechselseitig aufeinander bezogene Verhalten zwischen Menschen; das Geschehen zwischen Personen, die wechselseitig aufeinander reagieren sowie sich gegenseitig beeinflussen und steuern.',p:1},
 {g:'Kommunikation',t:'Regelkreis',d:'Soziale Kommunikation ist ein Regelkreis: Sie erklärt sich aus dem Wechselspiel der beteiligten Personen. Es geht um wechselseitige Einflussnahme und nicht um Anfang und Ende – Kommunikation ist kreisförmig.',p:1},
 {g:'Kommunikation',t:'Linear (Ursache – Wirkung)',d:'Gegenmodell zum Regelkreis: A wirkt einseitig auf B (A → B). Reicht für soziale Kommunikation nicht aus, weil B immer auch auf A zurückwirkt.',p:1},
 {g:'Kommunikation',t:'Sender',d:'Person, die eine Nachricht mit einer bestimmten Absicht verschlüsselt und übermittelt. Im Regelkreis wird der Empfänger durch seine Reaktion selbst zum Sender.',p:1},
 {g:'Kommunikation',t:'Empfänger',d:'Person, die die Nachricht aufnimmt, entschlüsselt (decodiert) und darauf reagiert.',p:1},
 {g:'Kommunikation',t:'Absicht',d:'Das, was der Sender mit seiner Nachricht erreichen bzw. ausdrücken will.',p:1},
 {g:'Kommunikation',t:'Kodierung',d:'Verschlüsselung der Absicht in Zeichen (Worte, Mimik, Gestik, Tonfall …).',p:1},
 {g:'Kommunikation',t:'Übermittlung (Medium, Kanal, Mittel)',d:'Der Weg, auf dem die Nachricht zum Empfänger gelangt, z. B. gesprochenes Wort, Brief, Handy-Nachricht.',p:1},
 {g:'Kommunikation',t:'Decodierung',d:'Entschlüsselung der Nachricht durch den Empfänger. Hier entstehen leicht Missverständnisse, weil der Empfänger anders entschlüsseln kann, als der Sender es gemeint hat.',p:1},
 {g:'Kommunikation',t:'Reaktion',d:'Antwort des Empfängers auf die decodierte Nachricht – damit wird er selbst zum Sender, und der Kreis schließt sich.',p:1},
 {g:'Kommunikation',t:'Funktionen der Kommunikation',d:'Aufrechterhaltung von Beziehungen · Ermöglichung eines geordneten Zusammenlebens · Befriedigung der Bedürfnisse · Konfliktvermeidung/-bewältigung · Wissenserweiterung · Ermöglichung eines gesellschaftlichen Zusammenlebens.',p:1},
 {g:'Kommunikation',t:'Kommunikationsstörung',d:'Missverständnis oder Konflikt in der Kommunikation. Kommunikationsstörungen werden mit Modellen erklärt – sie zeigen sich im System als positive Rückkopplung.',p:1},
 {g:'Vier-Seiten-Modell',t:'Vier-Seiten-Modell',d:'Kommunikationsmodell von Friedemann Schulz von Thun: Jede Nachricht hat vier Seiten (Sachinhalt, Selbstoffenbarung, Beziehung, Appell). Der Sender spricht mit vier „Schnäbeln“, der Empfänger hört mit vier „Ohren“.',p:1},
 {g:'Vier-Seiten-Modell',t:'Sachinhalt',d:'Mitteilung von Sachinformationen. Frage: „Worüber informiere ich?“',p:1},
 {g:'Vier-Seiten-Modell',t:'Selbstoffenbarung',d:'Information über die Person des Senders (Gefühle, Stimmung, Einstellung). Frage: „Was gebe ich von mir preis?“',p:1},
 {g:'Vier-Seiten-Modell',t:'Beziehung',d:'Aufschluss über das Verhältnis zwischen Sender und Empfänger. Fragen: „Wie stehe ich zu dir? Was halte ich von dir?“',p:1},
 {g:'Vier-Seiten-Modell',t:'Appell',d:'Einflussnahme auf den Empfänger. Frage: „Wozu möchte ich dich veranlassen?“',p:1},
 {g:'Vier-Seiten-Modell',t:'Vier Ohren / vier Schnäbel',d:'Der Sender sendet auf allen vier Ebenen zugleich; der Empfänger kann mit jedem der vier Ohren hören. Hört er mit einem anderen Ohr, als gemeint war (oft mit dem Beziehungsohr), entsteht ein Missverständnis.',p:1},
 {g:'Ergänzung',t:'Metakommunikation',d:'Kommunikation über die Kommunikation: „Wie hast du das gemeint?“, „Wie reden wir eigentlich miteinander?“ Wichtigste Gegenmaßnahme bei Störungen.',p:0},
 {g:'Ergänzung',t:'Ich-Botschaft',d:'Der Sprecher äußert eigene Gefühle und Wünsche („Ich mache mir Sorgen, wenn …“) statt Vorwürfe („Du bist immer …“). Macht die Selbstoffenbarung klar und entlastet die Beziehungsseite.',p:0},
 {g:'Ergänzung',t:'Aktives Zuhören',d:'Aufmerksam zuhören, ausreden lassen, nachfragen und das Gehörte mit eigenen Worten wiedergeben, um zu prüfen, ob man richtig verstanden hat.',p:0},
 {g:'Ergänzung',t:'Kongruenz',d:'Übereinstimmung von Gesagtem, Tonfall und Körpersprache (Echtheit). Inkongruente Nachrichten („Ist schon gut!“ mit wütendem Blick) führen zu Missverständnissen.',p:0},
 {g:'Ergänzung',t:'Axiome nach Paul Watzlawick',d:'Fünf Grundregeln der Kommunikation, z. B. „Man kann nicht nicht kommunizieren“ und „Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt“. Im Unterricht als zweites Modell zur Erklärung positiver Rückkopplung genannt.',p:0},
 {g:'Ergänzung',t:'Interpunktion',d:'Watzlawick: Jeder setzt den „Anfang“ eines Streits woanders („Ich meckere, weil du dich zurückziehst“ – „Ich ziehe mich zurück, weil du meckerst“). Passt zum Regelkreis: Kommunikation hat keinen Anfang und kein Ende.',p:0}
];

/* ---------- Fallbeispiel (fiktiv, mit Zeilen) ---------- */
const PS_FALL=[
'Es ist Montagmorgen, kurz nach sieben, bei Familie Berger. Vater',
'Jens (46) liest am Küchentisch die Zeitung, Mutter Sabine (44) packt',
'hektisch die Brotdosen. Die 16-jährige Lena kommt als Letzte in die',
'Küche, das Handy in der Hand. Ihr Bruder Tim (12) isst schweigend.',
'Sabine sieht Lena an und sagt: „Der Bus fährt in zehn Minuten.“',
'Lena verdreht die Augen: „Ich weiß selbst, wann mein Bus fährt.',
'Ich bin doch kein kleines Kind mehr!“ Sabine stellt die Dose hart',
'auf den Tisch: „Dann benimm dich auch nicht wie eins. Gestern bist',
'du zu spät gekommen, und dein Zimmer sieht aus wie ein Schlachtfeld.“',
'Lena wird laut: „Immer musst du an mir herummeckern! Bei Tim sagst',
'du nie was.“ Tim zieht den Kopf ein und starrt auf seinen Teller.',
'Jens legt die Zeitung weg: „Jetzt beruhigt euch mal beide.“ Sabine',
'fühlt sich angegriffen: „Ach, und ich bin jetzt die Böse? Du sitzt',
'ja nur da und liest. Um alles hier muss ich mich allein kümmern.“',
'Jens antwortet gereizt: „Ich arbeite auch den ganzen Tag, falls dir',
'das entgangen ist.“ Lena nutzt den Moment, schnappt sich ihre Jacke',
'und knallt die Haustür hinter sich zu – ohne Frühstück.',
'Tim fragt leise, ob er heute bei seinem Freund übernachten darf.',
'Niemand antwortet ihm. Er schiebt seinen Teller weg und geht in',
'sein Zimmer. In den folgenden Tagen reden Sabine und Jens nur',
'noch das Nötigste miteinander. Lena verbringt die Abende fast nur',
'noch in ihrem Zimmer oder bei Freundinnen, und Tim klagt morgens',
'immer häufiger über Bauchschmerzen, wenn er zur Schule soll.',
'Am Donnerstagabend findet Jens einen Zettel von Tim auf dem',
'Küchentisch: „Warum streitet ihr nur noch?“ Jens zeigt Sabine den',
'Zettel. Beide sind betroffen. Sabine sagt: „Ich glaube, ich wollte',
'Lena am Montag gar nicht kritisieren. Ich hatte einfach Angst,',
'dass sie wieder zu spät kommt und Ärger in der Schule bekommt.“',
'Jens nickt: „Und ich wollte dir eigentlich helfen, nicht dich',
'angreifen. Das kam wohl anders bei dir an.“',
'Am Wochenende setzen sich alle vier zusammen. Jeder darf sagen,',
'wie es ihm in der Woche ging, ohne unterbrochen zu werden. Lena',
'erklärt, dass sie sich von der Mutter oft wie ein Kind behandelt',
'fühlt. Sabine erzählt, wie gestresst sie morgens ist. Die Familie',
'vereinbart, dass Lena ihren Wecker selbst stellt und die Eltern',
'die Morgenaufgaben neu verteilen. Tim wirkt erleichtert. Er fragt,',
'ob sie so ein Gespräch öfter machen können.'
];

/* ---------- Vier-Seiten-Trainer ---------- */
const PS_VS=[
 {s:'Mutter zur Tochter: „Der Bus fährt in zehn Minuten.“',a:{sach:'Der Bus fährt in zehn Minuten ab.',selbst:'Ich mache mir Sorgen, dass du zu spät kommst.',bez:'Ich traue dir nicht zu, selbst auf die Zeit zu achten.',app:'Beeil dich!'}},
 {s:'Beifahrer: „Du, die Ampel da vorne ist grün!“',a:{sach:'Die Ampel ist grün.',selbst:'Ich habe es eilig.',bez:'Du brauchst meine Hilfe beim Fahren.',app:'Fahr los!'}},
 {s:'Lehrerin: „Die Hausaufgaben fehlen schon wieder.“',a:{sach:'Die Hausaufgaben wurden nicht abgegeben.',selbst:'Ich bin enttäuscht und genervt.',bez:'Ich halte dich für unzuverlässig.',app:'Mach deine Hausaufgaben!'}},
 {s:'Freundin: „Du hast dich ja lange nicht gemeldet.“',a:{sach:'Wir hatten länger keinen Kontakt.',selbst:'Ich habe dich vermisst / bin gekränkt.',bez:'Ich bin dir anscheinend nicht wichtig.',app:'Melde dich öfter bei mir!'}},
 {s:'Vater: „Hier ist es aber kalt.“',a:{sach:'Die Temperatur im Raum ist niedrig.',selbst:'Ich friere.',bez:'Du hättest das merken können.',app:'Mach das Fenster zu!'}},
 {s:'Schüler zum Mitschüler: „Hast du das schon wieder vergessen?“',a:{sach:'Du hast etwas vergessen.',selbst:'Ich bin genervt.',bez:'Du bist vergesslich, ich bin zuverlässiger als du.',app:'Denk nächstes Mal daran!'}}
];
const PS_SEITEN={sach:['Sachinhalt','ps-sach'],selbst:['Selbstoffenbarung','ps-selbst'],bez:['Beziehung','ps-bez'],app:['Appell','ps-app']};

/* ---------- Quiz ---------- */
const PS_QUIZ=[
 {q:'Was ist der Kerngedanke der Ganzheitspsychologie?',o:['Ein Mensch wird nur im Ganzen verstanden – mit seinen Beziehungen und seinem System.','Jeder Mensch wird für sich allein untersucht.','Nur das Verhalten zählt, nicht die Beziehungen.','Kommunikation verläuft immer linear.'],r:0},
 {q:'Was versteht man unter „Interdependenz“?',o:['Verändert sich Erleben/Verhalten eines Systemmitglieds, verändern sich Erleben/Verhalten aller anderen.','Jedes Systemmitglied ist vom System unabhängig.','Das System hat eine geschlossene Grenze.','Das System bleibt immer im Normalzustand.'],r:0},
 {q:'Eine positive Rückkopplung liegt vor, wenn …',o:['das System sich von seinem Normzustand entfernt.','das System in seinem Normalzustand bleibt.','sich alle gut verstehen.','die Kommunikation linear verläuft.'],r:0},
 {q:'Was kann eine positive Rückkopplung im Extremfall bewirken?',o:['den Zerfall des Systems','ein absolutes Gleichgewicht','eine geschlossene Systemgrenze','nichts, sie ist immer harmlos'],r:0},
 {q:'Das Fließgleichgewicht ist …',o:['relativ – kein absoluter Zustand.','ein fester, unveränderlicher Zustand.','nur in Familien vorhanden.','dasselbe wie positive Rückkopplung.'],r:0},
 {q:'Wie sind die Systemgrenzen sozialer Systeme?',o:['offen – äußere und innere Einflüsse wirken','geschlossen','es gibt keine Grenzen','nur nach außen offen'],r:0},
 {q:'Was besagt „Übersummation“?',o:['Die Eigenschaften eines Systems ergeben sich aus den Interaktionen seiner Mitglieder.','Ein System ist die Summe seiner Mitglieder.','Je mehr Mitglieder, desto besser das System.','Jedes Mitglied bestimmt das System allein.'],r:0},
 {q:'Warum ist Kommunikation ein Regelkreis?',o:['Es geht um wechselseitige Einflussnahme ohne Anfang und Ende – kreisförmig.','Weil immer A auf B wirkt (Ursache → Wirkung).','Weil nur ein Sender spricht.','Weil es feste Regeln für Gespräche gibt.'],r:0},
 {q:'Welcher Schritt folgt im Regelkreis auf die „Übermittlung“?',o:['Empfänger nimmt auf und decodiert','Absicht','Kodierung','Ende der Kommunikation'],r:0},
 {q:'„Was gebe ich von mir preis?“ gehört zu …',o:['Selbstoffenbarung','Sachinhalt','Beziehung','Appell'],r:0},
 {q:'„Wie stehe ich zu dir? Was halte ich von dir?“ gehört zu …',o:['Beziehung','Appell','Sachinhalt','Selbstoffenbarung'],r:0},
 {q:'„Wozu möchte ich dich veranlassen?“ gehört zu …',o:['Appell','Beziehung','Selbstoffenbarung','Sachinhalt'],r:0},
 {q:'Von wem stammt das Vier-Seiten-Modell?',o:['Friedemann Schulz von Thun','Paul Watzlawick','Sigmund Freud','Carl Rogers'],r:0},
 {q:'Was ist KEINE Funktion der Kommunikation laut Unterricht?',o:['Abgrenzung der Systemgrenze','Aufrechterhaltung von Beziehungen','Wissenserweiterung','Konfliktvermeidung/-bewältigung'],r:0},
 {q:'Womit reagiert ein System auf Störungen?',o:['mit Gegenmaßnahmen, um das Fließgleichgewicht wiederherzustellen','gar nicht','immer mit Zerfall','mit dem Schließen der Systemgrenze'],r:0},
 {q:'Mit welchem Modell kann man laut Unterricht positive Rückkopplung außer dem Vier-Seiten-Modell erklären?',o:['Axiome der Kommunikation von Paul Watzlawick','Regelkreis der Heizung','Stufenmodell von Erikson','Eisbergmodell der Wirtschaft'],r:0}
];

/* ---------- SVG-Skizzen ---------- */
function psSvgSystem(){
  const P=[[115,85,'P1'],[245,85,'P2'],[115,175,'P3'],[245,175,'P4']];
  let lines='';
  for(let i=0;i<P.length;i++)for(let j=i+1;j<P.length;j++){
    const [x1,y1]=P[i],[x2,y2]=P[j];const dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy),k=22/L;
    lines+=`<line x1="${x1+dx*k}" y1="${y1+dy*k}" x2="${x2-dx*k}" y2="${y2-dy*k}" stroke="var(--crown)" stroke-width="1.8" marker-start="url(#ps-ah)" marker-end="url(#ps-ah)"/>`;
  }
  const nodes=P.map(([x,y,t])=>`<circle cx="${x}" cy="${y}" r="18" fill="var(--surface)" stroke="var(--fg)" stroke-width="1.6"/><text x="${x}" y="${y+5}" text-anchor="middle" font-size="14" font-weight="700">${t}</text>`).join('');
  return `<svg viewBox="0 0 420 300" role="img" aria-label="Systemskizze">
  <defs><marker id="ps-ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--crown)"/></marker>
  <marker id="ps-ah2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="var(--psy)"/></marker></defs>
  <ellipse cx="180" cy="130" rx="140" ry="98" fill="none" stroke="var(--psy)" stroke-width="2" stroke-dasharray="9 7"/>
  ${lines}${nodes}
  <rect x="128" y="121" width="104" height="18" rx="9" fill="var(--surface)" stroke="var(--line)"/><text x="180" y="134" text-anchor="middle" font-size="11" style="fill:var(--muted)">Fließgleichgewicht</text>
  <line x1="355" y1="40" x2="300" y2="70" stroke="var(--psy)" stroke-width="2" marker-start="url(#ps-ah2)" marker-end="url(#ps-ah2)"/>
  <text x="414" y="28" text-anchor="end" font-size="12" font-weight="700" style="fill:var(--psy)">äußere Einflüsse</text>
  <line x1="372" y1="215" x2="312" y2="190" stroke="var(--psy)" stroke-width="2" marker-start="url(#ps-ah2)" marker-end="url(#ps-ah2)"/>
  <text x="414" y="240" text-anchor="end" font-size="12" font-weight="700" style="fill:var(--psy)">offene Systemgrenze</text>
  <text x="414" y="254" text-anchor="end" font-size="11" style="fill:var(--muted)">(gestrichelt = durchlässig)</text>
  <text x="10" y="252" font-size="12" font-weight="700" style="fill:var(--crown)">↔ Wechselbeziehungen: jeder mit jedem</text>
  <text x="10" y="268" font-size="11" style="fill:var(--muted)">→ Interdependenz · Übersummation</text>
  <text x="10" y="290" font-size="11" style="fill:var(--muted)">P = Person / Systemmitglied (z. B. Mutter, Vater, Tochter, Sohn)</text>
  </svg>`;
}
function psSvgRegelkreis(){
  const N=['Sender A:\nAbsicht','Kodierung','Übermittlung\n(Medium, Kanal)','Empfänger B','Decodierung','Reaktion →\nB wird Sender','Kodierung +\nÜbermittlung','A empfängt,\ndecodiert, reagiert'];
  const cx=200,cy=160,r=118,w=104,h=38;
  const pos=N.map((_,i)=>{const a=(-90+i*45)*Math.PI/180;return [cx+r*Math.cos(a)*1.25,cy+r*Math.sin(a)]});
  let s=`<svg viewBox="0 0 400 320" role="img" aria-label="Kommunikation als Regelkreis"><defs><marker id="ps-rk" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--psy)"/></marker></defs>`;
  for(let i=0;i<N.length;i++){
    const [x1,y1]=pos[i],[x2,y2]=pos[(i+1)%N.length];const dx=x2-x1,dy=y2-y1,L=Math.hypot(dx,dy);
    const k1=Math.min(0.42,28/L+0.18);
    s+=`<line x1="${x1+dx*k1}" y1="${y1+dy*k1}" x2="${x2-dx*k1}" y2="${y2-dy*k1}" stroke="var(--psy)" stroke-width="1.8" marker-end="url(#ps-rk)"/>`;
  }
  pos.forEach(([x,y],i)=>{
    const t=N[i].split('\n');const hl=(i===0||i===3);
    s+=`<rect x="${x-w/2}" y="${y-h/2}" width="${w}" height="${h}" rx="8" fill="${hl?'var(--psy-soft)':'var(--surface)'}" stroke="var(--line)"/>`;
    t.forEach((tt,j)=>{s+=`<text x="${x}" y="${y+(j-(t.length-1)/2)*13+4}" text-anchor="middle" font-size="11" font-weight="${hl?700:500}">${psEsc(tt)}</text>`});
  });
  s+=`<text x="${cx}" y="${cy-2}" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--crown)">Soziale Kommunikation</text><text x="${cx}" y="${cy+14}" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--crown)">als Regelkreis</text></svg>`;
  return s;
}
function psSvgLinear(){
  return `<svg viewBox="0 0 400 110" role="img" aria-label="Linear vs. Regelkreis"><defs><marker id="ps-la" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--fg)"/></marker></defs>
  <text x="20" y="52" font-size="14" font-weight="700">A</text><line x1="36" y1="47" x2="150" y2="47" stroke="var(--fg)" stroke-width="2" marker-end="url(#ps-la)"/><text x="158" y="52" font-size="14" font-weight="700">B</text>
  <text x="95" y="90" text-anchor="middle" font-size="12" style="fill:var(--muted)">linear: Ursache → Wirkung</text>
  <circle cx="300" cy="47" r="30" fill="none" stroke="var(--fg)" stroke-width="2"/><path d="M300,17 l8,-4 l-2,8" fill="var(--fg)"/><path d="M300,77 l-8,4 l2,-8" fill="var(--fg)"/>
  <text x="258" y="52" font-size="14" font-weight="700">A</text><text x="336" y="52" font-size="14" font-weight="700">B</text>
  <text x="300" y="100" text-anchor="middle" font-size="12" style="fill:var(--muted)">Regelkreis: kein Anfang, kein Ende</text></svg>`;
}
function psSvgVierSeiten(){
  return `<svg viewBox="0 0 440 250" role="img" aria-label="Vier-Seiten-Modell"><defs><marker id="ps-va" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--muted)"/></marker></defs>
  <rect x="10" y="105" width="70" height="34" rx="17" fill="var(--psy-soft)"/><text x="45" y="127" text-anchor="middle" font-size="13" font-weight="700">Sender</text>
  <rect x="360" y="105" width="74" height="34" rx="17" fill="var(--psy-soft)"/><text x="397" y="127" text-anchor="middle" font-size="13" font-weight="700">Empfänger</text>
  <line x1="84" y1="122" x2="148" y2="122" stroke="var(--muted)" stroke-width="2" marker-end="url(#ps-va)"/>
  <line x1="292" y1="122" x2="356" y2="122" stroke="var(--muted)" stroke-width="2" marker-end="url(#ps-va)"/>
  <text x="116" y="112" text-anchor="middle" font-size="10" style="fill:var(--muted)">4 Schnäbel</text><text x="324" y="112" text-anchor="middle" font-size="10" style="fill:var(--muted)">4 Ohren</text>
  <line x1="152" y1="52" x2="288" y2="52" stroke="var(--psy)" stroke-width="7"/>
  <line x1="288" y1="52" x2="288" y2="192" stroke="var(--gold)" stroke-width="7"/>
  <line x1="152" y1="192" x2="288" y2="192" stroke="var(--crown)" stroke-width="7"/>
  <line x1="152" y1="52" x2="152" y2="192" stroke="var(--parl)" stroke-width="7"/>
  <text x="220" y="127" text-anchor="middle" font-size="15" font-weight="700">Nachricht</text>
  <text x="220" y="38" text-anchor="middle" font-size="13" font-weight="700" style="fill:var(--psy)">Sachinhalt</text>
  <text x="220" y="20" text-anchor="middle" font-size="10.5" style="fill:var(--muted)">Worüber informiere ich?</text>
  <text x="220" y="212" text-anchor="middle" font-size="13" font-weight="700" style="fill:var(--crown)">Beziehung</text>
  <text x="220" y="228" text-anchor="middle" font-size="10.5" style="fill:var(--muted)">Wie stehe ich zu dir? Was halte ich von dir?</text>
  <text x="140" y="90" text-anchor="end" font-size="12" font-weight="700" style="fill:var(--parl)">Selbst-</text>
  <text x="140" y="104" text-anchor="end" font-size="12" font-weight="700" style="fill:var(--parl)">offenbarung</text>
  <text x="140" y="160" text-anchor="end" font-size="10" style="fill:var(--muted)">Was gebe ich</text><text x="140" y="172" text-anchor="end" font-size="10" style="fill:var(--muted)">von mir preis?</text>
  <text x="300" y="90" font-size="12" font-weight="700" style="fill:var(--gold)">Appell</text>
  <text x="300" y="160" font-size="10" style="fill:var(--muted)">Wozu möchte ich</text><text x="300" y="172" font-size="10" style="fill:var(--muted)">dich veranlassen?</text>
  </svg>`;
}
function psSvgRueck(){
  return `<div class="ps-grid2">
  <div class="ps-mini"><b>Negative Rückkopplung</b><svg viewBox="0 0 200 100" style="overflow:visible"><line x1="5" y1="45" x2="195" y2="45" stroke="var(--muted)" stroke-dasharray="4 4"/><path d="M5,45 C20,25 35,25 50,45 S80,62 95,45 S120,35 135,45 S160,50 195,45" fill="none" stroke="var(--parl)" stroke-width="2.5"/><text x="195" y="60" text-anchor="end" font-size="9" style="fill:var(--muted)">Normzustand</text></svg><div class="meta">Abweichung wird ausgeglichen → bleibt im Normzustand</div></div>
  <div class="ps-mini"><b>Positive Rückkopplung</b><svg viewBox="0 0 200 100" style="overflow:visible"><line x1="5" y1="45" x2="195" y2="45" stroke="var(--muted)" stroke-dasharray="4 4"/><path d="M5,45 C15,38 25,38 35,47 S55,60 70,40 S100,15 120,55 S160,95 175,8" fill="none" stroke="var(--crown)" stroke-width="2.5"/><text x="170" y="14" text-anchor="end" font-size="10" font-weight="700" style="fill:var(--crown)">Zerfall?</text></svg><div class="meta">Abweichung schaukelt sich auf → weg vom Normzustand</div></div></div>`;
}

/* ---------- Hilfen ---------- */
const psEsc=s=>String(s).replace(/[&<>]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;"}[c]));
const psEl=id=>document.getElementById(id);
const psTag=(t,ext)=>`<span class="ps-tag${ext?" ext":""}">${t}</span>`;
const psDef=(t,d)=>`<div class="ps-def"><b>${t}</b>${d}</div>`;
const psTable=(head,rows)=>`<table class="ps-tab"><thead><tr>${head.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table>`;
const PS_SIDE={sach:'<b class="ps-sach">Sachinhalt</b>',selbst:'<b class="ps-selbst">Selbstoffenbarung</b>',bez:'<b class="ps-bez">Beziehung</b>',app:'<b class="ps-app">Appell</b>'};

/* ---------- Unterricht: Mitschrift ---------- */
function psMitschrift(el){
  el.innerHTML=`
  <section class="tx"><span class="tx-y">Der Rahmen für alles</span><h2>Ganzheitspsychologie</h2>
   <p><b>Kerngedanke:</b> Man betrachtet einen Menschen nicht isoliert. Man versteht ihn nur <b>im Ganzen</b> – mit seinen Beziehungen und dem System, in dem er lebt. Die Systemtheorie ist genau diese ganzheitliche Sichtweise.</p>
   ${psTable(["Verbindung zu …","Warum?"],[
     ["<b>Übersummation</b>","Die Ganzheitsidee schlechthin: „Das Ganze ist mehr als die Summe seiner Teile.“ Ein System versteht man nicht, wenn man nur die einzelnen Personen anschaut – sondern wie sie miteinander umgehen."],
     ["<b>Interdependenz</b>","Weil alles zusammenhängt, betrifft der Streit zwischen zwei Personen das ganze System (im Probefall leidet Tim mit, obwohl er nicht beteiligt war)."]])}
   <h3 class="ps-h">So nutzt du sie in der Klausur</h3>
   <ul class="ps-ul"><li><b>Aufgabe 2 – Einstiegssatz:</b> „Aus Sicht der Ganzheitspsychologie bzw. Systemtheorie lässt sich das Verhalten der Familienmitglieder nur verstehen, wenn man die Familie als Ganzes betrachtet …“</li>
   <li><b>Aufgabe 3 – Begründung:</b> Erfolgreiche Kommunikation muss alle Systemmitglieder einbeziehen, weil das System nur als Ganzes ins Gleichgewicht zurückfindet.</li></ul>
   <p class="ex">Steht nicht auf dem Zettel „Klausurrelevant“ – eine eigene Aufgabe dazu ist unwahrscheinlich. Die Grundidee reicht, keine Namen oder Geschichte lernen.</p>
  </section>

  <section class="tx"><span class="tx-y">Prüfungsrelevant</span><h2>Soziale Systeme</h2>
   <p class="meta">Einführung in die Ganzheitspsychologie – soziale Systeme und Kommunikation</p>
   <p><b>Menschen leben immer in Systemen.</b> Es gibt immer mehrere Systeme (Familie, Klasse, Freundeskreis …). Wenn einer Bewegung in das System bringt, werden alle Systemteilnehmer in Bewegung gebracht (wie beim Modell im Raum gezeigt).</p>
   ${psSvgSystem()}
   ${psDef("System","ist ein Aggregat von Objekten, die <u>alle miteinander</u> in Wechselbeziehung stehen. In Systemen laufen Systemprozesse ab.")}
   <p>Soziale Systeme haben <b>offene Systemgrenzen</b> – es gibt äußere und innere Einflüsse.</p>
   <h3 class="ps-h">Merkmale eines Systems</h3>
   ${psDef("Interdependenz","Verändert sich das Erleben/Verhalten eines Systemmitglieds, so verändern sich Erleben/Verhalten aller anderen Systemmitglieder.")}
   ${psDef("Übersummation","Die Eigenschaften eines Systems können nur aus den Interaktionsbedingungen der Systemmitglieder erschlossen werden. Diese Interaktionen bestimmen die Qualität des Gesamtsystems.")}
   <h3 class="ps-h">Rückkopplung</h3>
   <p>Kommunikation verläuft kreisförmig. Es kommt somit in Kommunikationsprozessen zu <b>Rückkopplungen</b>.</p>
   <ul class="ps-ul"><li><b class="ps-bez">Positive Rückkopplung:</b> Das System entfernt sich von seinem Normzustand. Dies kann unter Umständen so weit gehen, dass es zum Zerfall des Systems kommt.</li>
   <li><b class="ps-selbst">Negative Rückkopplung:</b> Das System bleibt in seinem Normalzustand.</li></ul>
   ${psSvgRueck()}
   <h3 class="ps-h">Fließgleichgewicht</h3>
   <p>Jedes System existiert in einem <b>Fließgleichgewicht</b>. Dieses Gleichgewicht ist relativ, es ist kein absoluter Zustand. Bei Störungen des Systems ist jedes System bestrebt, seinen Gleichgewichtszustand mithilfe von <b>Gegenmaßnahmen</b> aufrechtzuerhalten.</p>
   <h3 class="ps-h">Erklärung von Erleben/Verhalten mit Hilfe der Systemtheorie</h3>
   <p>Menschen leben in Systemen, in denen sie mit anderen Menschen über Interaktions- und Kommunikationsprozesse wechselseitig verbunden sind. In den Beziehungen kommt es zu Rückkopplungsprozessen. Sind diese negativ, besteht für das System keine Bedrohung. Kommt es nun zu positiven Rückkopplungen, ist jedes Systemmitglied bemüht, mit Gegenmaßnahmen das Fließgleichgewicht wiederherzustellen.</p>
   <p class="ex">Positive Rückkopplungen werden mit Hilfe eines <b>Kommunikationsmodells</b> erklärt, z. B. dem <b>Vier-Seiten-Modell</b> oder den <b>Axiomen der Kommunikation von Paul Watzlawick</b>.</p>
  </section>

  <section class="tx"><span class="tx-y">Definitionen</span><h2>Soziale Interaktion und Kommunikation</h2>
   ${psDef("Soziale Kommunikation","Darunter versteht man die Aufnahme, die Vermittlung und den Austausch von Informationen zwischen zwei oder mehreren Personen.")}
   ${psDef("Soziale Interaktion","gilt als Bezeichnung für das wechselseitig aufeinander bezogene Verhalten zwischen Menschen, für das Geschehen zwischen Personen, die wechselseitig aufeinander reagieren sowie sich gegenseitig beeinflussen und steuern.")}
   <h3 class="ps-h">Kommunikation als Regelkreis</h3>
   <p>Soziale Kommunikation stellt einen <b>Regelkreis</b> dar, welcher sich aus dem Wechselspiel zwischen den an der Kommunikation beteiligten Personen erklären lässt. Kommunikation, in der es um wechselseitige Einflussnahme und nicht um Anfang und Ende geht, ist kreisförmig.</p>
   ${psSvgLinear()}${psSvgRegelkreis()}
   <h3 class="ps-h">Funktionen der Kommunikation</h3>
   <ul class="ps-ul"><li>Aufrechterhaltung von Beziehungen</li><li>Ermöglichung eines geordneten Zusammenlebens</li><li>Befriedigung der Bedürfnisse</li><li>Konfliktvermeidung / -bewältigung</li><li>Wissenserweiterung</li><li>Ermöglichung eines gesellschaftlichen Zusammenlebens</li></ul>
   <p class="ex"><b>Merke:</b> Erklärt werden immer <b>Kommunikationsstörungen</b> (= positive Rückkopplung).</p>
  </section>

  <section class="tx"><span class="tx-y">Friedemann Schulz von Thun</span><h2>Das Vier-Seiten-Modell</h2>
   ${psSvgVierSeiten()}
   ${psTable(["Seite","Bedeutung","Leitfrage"],[
     [PS_SIDE.sach,"Mitteilung von Sachinformationen","Worüber informiere ich?"],
     [PS_SIDE.selbst,"Information über die Person des Senders","Was gebe ich von mir preis?"],
     [PS_SIDE.bez,"Aufschluss über das Verhältnis zwischen Sender und Empfänger","Wie stehe ich zu dir? Was halte ich von dir?"],
     [PS_SIDE.app,"Einflussnahme auf den Empfänger","Wozu möchte ich dich veranlassen?"]])}
   <p class="meta" style="margin-top:8px">Der Sender sendet auf allen vier Ebenen (Sach-, Beziehungs-, Selbstoffenbarungs-, Appellebene), der Empfänger hört mit vier Ohren.</p>
  </section>`;
}

/* ---------- Modelle (beide Kategorien) ---------- */
function psModelle(el){
  el.innerHTML=`
  <div class="erachips tx-chips"><a href="#pm1">System</a><a href="#pm2">Rückkopplung</a><a href="#pm3">Regelkreis</a><a href="#pm4">Vier-Seiten</a><a href="#pm5">Watzlawick</a></div>

  <section class="tx" id="pm1"><span class="tx-y">Modell 1 · AFB II: Skizze!</span><h2>Das soziale System</h2>
   <p><b>Kernaussage:</b> Menschen leben immer in Systemen. Alle Mitglieder stehen in Wechselbeziehung – verändert sich einer, verändern sich alle.</p>
   ${psSvgSystem()}
   ${psTable(["Bestandteil","Was es bedeutet"],[
     ["<b>Systemmitglieder</b>","die Personen (P1, P2 …) – im Fall mit Namen eintragen"],
     ["<b>Wechselbeziehungen</b>","Doppelpfeile „jeder mit jedem“"],
     ["<b>Offene Systemgrenze</b>","gestrichelter Kreis – äußere und innere Einflüsse"],
     ["<b>Interdependenz</b>","Veränderung bei einem → Veränderung bei allen"],
     ["<b>Übersummation</b>","Qualität des Systems ergibt sich aus den Interaktionen"],
     ["<b>Fließgleichgewicht</b>","relatives Gleichgewicht, durch Gegenmaßnahmen gehalten"]])}
   <div class="step" style="margin-top:12px"><span class="afb">So zeichnest du die Systemskizze (halbe Seite!)</span><ol>
    <li>Großen <b>gestrichelten Kreis</b> zeichnen → beschriften: „offene Systemgrenze“.</li>
    <li>Alle <b>Personen aus dem Fall mit Namen</b> (und Rolle) in den Kreis setzen.</li>
    <li><b>Doppelpfeile zwischen allen</b> Personen („jeder mit jedem“) → „Wechselbeziehungen / Interdependenz“.</li>
    <li><b>Pfeile von außen</b> über die Grenze → „äußere Einflüsse“ + die konkreten Einflüsse aus dem Text (Arbeit, Schule, Freunde …).</li>
    <li>In die Mitte „<b>Fließgleichgewicht</b>“; die Konfliktlinie dick oder farbig → „positive Rückkopplung“.</li>
    <li>Überschrift „Systemskizze Familie X“ + kurze Legende.</li></ol></div>
  </section>

  <section class="tx" id="pm2"><span class="tx-y">Modell 2</span><h2>Rückkopplung und Fließgleichgewicht</h2>
   <p><b>Kernaussage:</b> Weil Kommunikation kreisförmig verläuft, wirkt jede Reaktion zurück.</p>
   ${psSvgRueck()}
   ${psTable(["","Positive Rückkopplung","Negative Rückkopplung"],[
     ["<b>Was passiert?</b>","System entfernt sich vom Normzustand","System bleibt im Normalzustand"],
     ["<b>Folge</b>","Aufschaukeln, Eskalation – im Extremfall Zerfall","keine Bedrohung für das System"],
     ["<b>Reaktion</b>","Mitglieder versuchen mit Gegenmaßnahmen das Fließgleichgewicht wiederherzustellen","–"],
     ["<b>Erklärt mit</b>","Kommunikationsmodell (Vier-Seiten-Modell, Watzlawick)","–"]])}
   <p class="ex" style="margin-top:10px"><b>Achtung:</b> „Positiv“ heißt hier <b>nicht</b> „gut“! Positive Rückkopplung = Abweichung wird <i>verstärkt</i> (Streit schaukelt sich hoch). Negative Rückkopplung = Abweichung wird <i>gedämpft</i>.</p>
  </section>

  <section class="tx" id="pm3"><span class="tx-y">Modell 3</span><h2>Kommunikation als Regelkreis</h2>
   <p><b>Kernaussage:</b> Kommunikation ist keine Einbahnstraße (linear, A → B), sondern ein Kreis: Der Empfänger reagiert und wird dadurch selbst zum Sender. Es gibt keinen Anfang und kein Ende.</p>
   ${psSvgLinear()}${psSvgRegelkreis()}
   <ol class="ps-ul"><li><b>Sender</b> hat eine <b>Absicht</b></li><li>→ <b>Kodierung</b> (in Worte, Gestik, Mimik)</li><li>→ <b>Übermittlung</b> (Medium, Kanal, Mittel)</li><li>→ <b>Empfänger</b> nimmt auf → <b>Decodierung</b></li><li>→ <b>Reaktion</b>: Empfänger wird Sender → Absicht → Kodierung → Übermittlung → der erste Sender wird Empfänger …</li></ol>
   <p class="ex"><b>Wo entstehen Störungen?</b> Vor allem bei Kodierung und Decodierung: Der Empfänger entschlüsselt anders, als der Sender es gemeint hat. Genau das zeigt das Vier-Seiten-Modell genauer.</p>
  </section>

  <section class="tx" id="pm4"><span class="tx-y">Modell 4 · AFB II</span><h2>Vier-Seiten-Modell (Schulz von Thun)</h2>
   <p><b>Kernaussage:</b> Jede Nachricht hat vier Seiten. Der Sender sendet mit vier „Schnäbeln“, der Empfänger hört mit vier „Ohren“. Missverständnisse entstehen, wenn mit einem anderen Ohr gehört wird, als gesendet wurde.</p>
   ${psSvgVierSeiten()}
   ${psTable(["Seite","Leitfrage","Beispiel: „Der Bus fährt in zehn Minuten.“"],[
     [PS_SIDE.sach,"Worüber informiere ich?","Der Bus fährt in 10 Minuten ab."],
     [PS_SIDE.selbst,"Was gebe ich von mir preis?","Ich mache mir Sorgen, dass du zu spät kommst."],
     [PS_SIDE.bez,"Wie stehe ich zu dir? Was halte ich von dir?","Ich traue dir nicht zu, selbst darauf zu achten."],
     [PS_SIDE.app,"Wozu möchte ich dich veranlassen?","Beeil dich!"]])}
   <div class="step" style="margin-top:12px"><span class="afb">Positive Rückkopplung mit dem Modell erklären</span><ol>
    <li>Äußerung des Senders zitieren (mit Zeile).</li><li>Was hat der Sender gemeint? → meist Sachinhalt, Selbstoffenbarung oder Appell.</li>
    <li>Mit welchem Ohr hört der Empfänger? → meist <b>Beziehungsohr</b> (fühlt sich angegriffen/bevormundet) – mit Zeile belegen.</li>
    <li>Reaktion des Empfängers = neue Nachricht, die beim anderen wieder auf dem Beziehungsohr ankommt → Kreis.</li>
    <li>Folge: Streit schaukelt sich auf, System entfernt sich vom Normzustand = <b>positive Rückkopplung</b>.</li>
    <li>Interdependenz: Auswirkungen auf die <b>anderen</b> Systemmitglieder zeigen.</li>
    <li>Gegenmaßnahmen nennen, mit denen das Fließgleichgewicht wiederhergestellt wird.</li></ol></div>
  </section>

  <section class="tx" id="pm5"><span class="tx-y">Modell 5 · Ergänzung</span><h2>Axiome der Kommunikation (Paul Watzlawick)</h2>
   <p class="meta">Im Unterricht nur als zweites mögliches Modell genannt – für den Fall, dass im Text eher Watzlawick passt.</p>
   <ol class="ps-ul"><li><b>Man kann nicht nicht kommunizieren.</b> Auch Schweigen oder Weggehen ist eine Nachricht.</li>
   <li><b>Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt</b>, wobei der Beziehungsaspekt den Inhalt bestimmt.</li>
   <li><b>Interpunktion:</b> Jeder sieht den „Anfang“ des Streits beim anderen – passt genau zum Regelkreis.</li>
   <li><b>Digitale und analoge Kommunikation:</b> Worte (digital) und Körpersprache/Tonfall (analog).</li>
   <li><b>Symmetrische oder komplementäre Kommunikation:</b> auf Augenhöhe oder ungleich (z. B. Eltern – Kind).</li></ol>
  </section>`;
}

/* ---------- Klausurvorbereitung: Ablauf ---------- */
const PS_CHECK=["Definition System, Interdependenz, Übersummation auswendig","Positive vs. negative Rückkopplung sicher erklären","Fließgleichgewicht + Gegenmaßnahmen","Definition soziale Kommunikation & soziale Interaktion","Regelkreis aufzählen (Sender → Absicht → Kodierung → Übermittlung → Empfänger → Decodierung → Reaktion)","6 Funktionen der Kommunikation","Vier Seiten mit Leitfragen","Systemskizze einmal frei auf Papier gezeichnet","Probeklausur Aufgabe 2 selbst versucht","Merkmale erfolgreicher Kommunikation (mind. 5)"];
function psAblauf(el){
  el.innerHTML=`
  <h2 class="sec">So ist die Klausur aufgebaut</h2>
  <p class="meta" style="margin:0">Material: ein Fallbeispiel als Text mit ca. 70 Zeilen</p>
  <div class="step"><span class="afb">Aufgabe 1 · AFB I · ca. 30 %</span><h3>Fallbeispiel fachlich sinnvoll zusammenfassen</h3><ul>
   <li><b>Einleitungssatz:</b> „Der Text ‚Titel‘ aus (Quelle, Jahr) handelt von …“ (Wer? Wo? Worum geht es?)</li>
   <li><b>Nach Kriterien gliedern</b>, nicht nacherzählen – z. B. Ausgangssituation & Personen → Auslöser → Eskalation → Folgen für die einzelnen Mitglieder → Lösung/Gegenmaßnahmen.</li>
   <li><b>Präsens</b>, eigene Worte, <b>keine Bewertung</b> und keine Deutung (die kommt erst in Aufgabe 2).</li>
   <li>Schon hier <b>Fachbegriffe</b> verwenden (Systemmitglieder, Konflikt, Kommunikation …).</li>
   <li><b>Zeilenangaben</b>: (Z. 12), (Z. 20–23), (vgl. Z. 5 f.) – <b>mindestens 3 pro Seite</b>.</li></ul></div>
  <div class="step"><span class="afb">Aufgabe 2 · AFB II · Anwendung</span><h3>Systemskizze + positive Rückkopplung erklären</h3><ol>
   <li>Mit einer <b>großzügigen Systemskizze</b> beginnen (halbe Seite, vollständig beschriftet). <a href="#/psychologie/klausur/modelle">→ Anleitung bei Modelle</a></li>
   <li>Kurz <b>System definieren</b> und auf den Fall übertragen (Wer gehört dazu? Welche Einflüsse?). Guter Einstieg: „Aus Sicht der <b>Ganzheitspsychologie</b> bzw. Systemtheorie lässt sich das Verhalten nur verstehen, wenn man die Familie als Ganzes betrachtet …“</li>
   <li><b>Positive Rückkopplung definieren</b>: System entfernt sich vom Normzustand, im Extremfall Zerfall.</li>
   <li><b>Vier-Seiten-Modell kurz vorstellen</b> (Schulz von Thun, 4 Seiten, 4 Ohren).</li>
   <li><b>Am Fall erklären</b>: Äußerung → gemeint vs. gehört → Reaktion → Aufschaukeln. Jede Behauptung mit <b>Zeile</b> belegen!</li>
   <li><b>Interdependenz</b> zeigen: Was passiert mit den anderen Mitgliedern?</li>
   <li><b>Gegenmaßnahmen</b> → Fließgleichgewicht wird wiederhergestellt (falls im Text).</li></ol></div>
  <div class="step"><span class="afb">Aufgabe 3 · AFB III</span><h3>Merkmale erfolgreicher Kommunikation</h3>
   <p class="meta">Steht nicht in deinen Mitschriften – das sind die gängigen Merkmale, abgeleitet aus den Modellen:</p>
   ${psTable(["Merkmal","Abgeleitet aus …"],[
     ["<b>Klare, eindeutige Botschaften</b> – alle vier Seiten bewusst senden","Vier-Seiten-Modell"],
     ["<b>Mit allen vier Ohren hören</b>, nicht nur mit dem Beziehungsohr","Vier-Seiten-Modell"],
     ["<b>Ich-Botschaften statt Du-Vorwürfe</b> („Ich mache mir Sorgen …“)","Selbstoffenbarung klar machen"],
     ["<b>Aktives Zuhören</b>: ausreden lassen, nachfragen, Gehörtes wiedergeben","Decodierung im Regelkreis prüfen"],
     ["<b>Metakommunikation</b>: über das Reden reden („Wie hast du das gemeint?“)","Gegenmaßnahme im System"],
     ["<b>Wertschätzung & Respekt</b> auf der Beziehungsebene","Beziehungsseite / Watzlawick"],
     ["<b>Kongruenz</b>: Worte, Tonfall, Körpersprache passen zusammen","Watzlawick (digital/analog)"],
     ["<b>Alle Systemmitglieder einbeziehen</b>, gemeinsame Vereinbarungen","Ganzheitspsychologie, Interdependenz, Fließgleichgewicht"],
     ["<b>Passender Zeitpunkt & Rahmen</b> (nicht im Stress zwischen Tür und Angel)","Übermittlung (Kanal, Situation)"]])}
   <p class="ex" style="margin-top:8px"><b>Aufbau:</b> Merkmal nennen → mit Modell begründen → <b>auf den Fall beziehen</b> (Was lief schief? Was hilft? mit Zeile) → am Ende <b>Fazit</b>: Welche Merkmale sind besonders wichtig und warum? Auch Grenzen nennen (im Stress schwer umzusetzen, Machtgefälle).</p></div>

  <h2 class="sec">Zeitplan und Satzbausteine</h2>
  <div class="step"><p><b>Vorschlag:</b> Text lesen & farbig markieren (Personen, Äußerungen, Folgen, Lösung) ca. 15 % der Zeit · Aufgabe 1 ca. 25 % · Aufgabe 2 ca. 40 % · Aufgabe 3 ca. 20 %.</p><ul>
   <li>„Bei der Familie X handelt es sich um ein soziales System, da …“</li>
   <li>„Die Äußerung von A (Z. …) enthält auf der Sachebene …, als Appell …“</li>
   <li>„B hört die Nachricht jedoch vor allem mit dem Beziehungsohr, was daran deutlich wird, dass … (Z. …).“</li>
   <li>„Dadurch kommt es zu einer positiven Rückkopplung: Der Konflikt schaukelt sich auf und das System entfernt sich von seinem Normzustand.“</li>
   <li>„Aufgrund der Interdependenz wirkt sich der Konflikt auch auf C aus, der/die … (Z. …).“</li>
   <li>„Mit … (Z. …) setzt eine Gegenmaßnahme ein, durch die das Fließgleichgewicht wiederhergestellt wird.“</li></ul></div>

  <h2 class="sec">Checkliste für heute Abend</h2>
  <div class="step ps-chk" id="psChk"></div>`;
  const done=store.get("psChk",{});
  psEl("psChk").innerHTML=PS_CHECK.map((t,i)=>`<label><input type="checkbox" data-i="${i}" ${done[i]?"checked":""}> <span>${t}</span></label>`).join("");
  psEl("psChk").querySelectorAll("input").forEach(c=>c.onchange=()=>{done[c.dataset.i]=c.checked;store.set("psChk",done)});
}

/* ---------- Begriffe ---------- */
function psBegriffe(el){
  const n=PS_BEGRIFFE.filter(b=>b.p).length;
  el.innerHTML=`<input class="ps-q" id="psQ" type="search" placeholder="Begriff suchen …" autocomplete="off">
   <p class="meta" style="margin:0">${n} Begriffe aus dem Unterricht · ${PS_BEGRIFFE.length-n} Ergänzungen ${psTag("Ergänzung",1)} (helfen v. a. bei Aufgabe 3)</p><div id="psBl" class="view" style="gap:10px"></div>`;
  const draw=()=>{
    const q=psEl("psQ").value.toLowerCase();let html="",last="";
    PS_BEGRIFFE.filter(b=>!q||(b.t+b.d).toLowerCase().includes(q)).forEach(b=>{
      if(b.g!==last){html+=`<h2 class="sec">${b.g}</h2>`;last=b.g}
      html+=`<details class="entry"><summary><h3>${b.t}${b.p?"":" "+psTag("Ergänzung",1)}</h3></summary><div class="inner"><p>${b.d}</p></div></details>`;
    });
    psEl("psBl").innerHTML=html||'<p class="meta">Nichts gefunden.</p>';
  };
  psEl("psQ").oninput=draw;draw();
}

/* ---------- Probeklausur ---------- */
function psProbe(el){
  el.innerHTML=`
  <p class="meta" style="margin:0">Selbst ausgedachtes Fallbeispiel (kürzer als die echten 70 Zeilen), damit du den Ablauf üben kannst. Erst selbst schreiben, dann die Musterlösung aufklappen.</p>
  <h2 class="sec">Material: „Ein ganz normaler Montag“</h2>
  <div class="src"><ol>${PS_FALL.map(l=>`<li>${psEsc(l)}</li>`).join("")}</ol></div>
  <h2 class="sec">Aufgaben</h2>
  <div class="aufg"><h3>1. Fassen Sie das Fallbeispiel fachlich sinnvoll zusammen.</h3><p class="meta">AFB I</p></div>
  <div class="aufg"><h3>2. Stellen Sie die Familie Berger in einer Systemskizze dar und erklären Sie die positive Rückkopplung im Fallbeispiel anhand des Vier-Seiten-Modells.</h3><p class="meta">AFB II</p></div>
  <div class="aufg"><h3>3. Erörtern Sie Merkmale erfolgreicher Kommunikation unter Bezug auf das Fallbeispiel.</h3><p class="meta">AFB III</p></div>
  <h2 class="sec">Musterlösungen</h2>
  <details class="entry"><summary><h3>Aufgabe 1 · Zusammenfassung</h3></summary><div class="inner ml">
   <p>In dem fiktiven Fallbeispiel „Ein ganz normaler Montag“ geht es um einen Konflikt in der vierköpfigen Familie Berger, der sich aus einer alltäglichen Äußerung beim Frühstück entwickelt und erst durch ein gemeinsames Familiengespräch gelöst wird.</p>
   <p><b>Ausgangssituation:</b> An einem Montagmorgen sitzt die Familie in der Küche: Vater Jens liest Zeitung, Mutter Sabine bereitet hektisch die Brotdosen vor, Sohn Tim (12) isst, Tochter Lena (16) kommt als Letzte (vgl. Z. 1–4).</p>
   <p><b>Auslöser und Eskalation:</b> Sabine weist Lena darauf hin, dass der Bus bald fährt (Z. 5). Lena reagiert genervt und fühlt sich wie ein Kind behandelt (Z. 6 f.). Daraufhin kritisiert Sabine weitere Verhaltensweisen Lenas (Z. 7–9), Lena wirft ihr vor, sie ungerecht zu behandeln (Z. 10 f.). Als Jens schlichten will (Z. 12), fühlt sich Sabine angegriffen und wirft ihm vor, sie mit allem allein zu lassen (Z. 12–14). Jens antwortet gereizt (Z. 15 f.), Lena verlässt wütend das Haus (Z. 16 f.).</p>
   <p><b>Folgen für die Familienmitglieder:</b> Tims Frage wird übergangen und er zieht sich zurück (Z. 18–20). In den folgenden Tagen sprechen die Eltern kaum miteinander, Lena meidet die Familie und Tim klagt über Bauchschmerzen vor der Schule (Z. 20–23).</p>
   <p><b>Lösung:</b> Ein Zettel von Tim (Z. 24 f.) bringt die Eltern dazu, über ihre eigentlichen Absichten zu sprechen (Z. 26–30). In einem Familiengespräch am Wochenende äußern alle ihre Sicht, ohne unterbrochen zu werden, und treffen neue Vereinbarungen (Z. 31–36). Tim wirkt erleichtert und wünscht sich solche Gespräche öfter (Z. 36 f.).</p>
  </div></details>
  <details class="entry"><summary><h3>Aufgabe 2 · Systemskizze + positive Rückkopplung</h3></summary><div class="inner ml">
   <p><b>Systemskizze:</b> gestrichelter Kreis „offene Systemgrenze – Familie Berger“, darin Jens (Vater), Sabine (Mutter), Lena (16), Tim (12), Doppelpfeile zwischen allen. Von außen: Arbeit (Jens, Z. 15), Schule/Bus (Lena, Tim, Z. 5, 23), Freunde (Z. 18, 22). Konfliktlinien Sabine ↔ Lena und Sabine ↔ Jens dick markiert („positive Rückkopplung“), in der Mitte „Fließgleichgewicht“.</p>
   <p><b>System:</b> Die Familie Berger ist ein soziales System, da ihre vier Mitglieder alle miteinander in Wechselbeziehung stehen und über Interaktions- und Kommunikationsprozesse verbunden sind. Die Systemgrenze ist offen, äußere Einflüsse wie Jens’ Arbeit (Z. 15) oder die Schule (Z. 23) wirken hinein.</p>
   <p><b>Positive Rückkopplung</b> liegt vor, wenn sich das System von seinem Normzustand entfernt; im Extremfall kann es zerfallen. Erklären lässt sich das mit dem Vier-Seiten-Modell von Schulz von Thun: Jede Nachricht hat einen Sachinhalt, eine Selbstoffenbarung, eine Beziehungsseite und einen Appell; der Empfänger kann mit jedem der vier Ohren hören.</p>
   <p><b>Anwendung:</b> Sabines Satz „Der Bus fährt in zehn Minuten“ (Z. 5) enthält auf der <b class="ps-sach">Sachebene</b> die Abfahrtszeit, als <b class="ps-selbst">Selbstoffenbarung</b> ihre Sorge, dass Lena zu spät kommt (vgl. Z. 27 f.), und als <b class="ps-app">Appell</b> „Beeil dich!“. Lena hört die Nachricht jedoch mit dem <b class="ps-bez">Beziehungsohr</b> – „Ich bin doch kein kleines Kind mehr!“ (Z. 7) –, sie versteht: „Du traust mir nichts zu.“ Ihre Reaktion kommt bei Sabine wiederum als Angriff auf der Beziehungsebene an, sodass sie mit weiteren Vorwürfen reagiert (Z. 7–9). Lena antwortet mit dem Vorwurf der Ungerechtigkeit (Z. 10 f.). Jeder reagiert auf die Reaktion des anderen – Kommunikation verläuft als Regelkreis, und der Konflikt schaukelt sich auf.</p>
   <p>Auch Jens’ Appell „Jetzt beruhigt euch mal beide“ (Z. 12) war als Hilfe gemeint (Z. 29 f.), Sabine hört ihn aber mit dem Beziehungsohr als Kritik an ihr (Z. 12–14) und greift ihn an. Jens reagiert gereizt (Z. 15 f.). Damit weitet sich die positive Rückkopplung auf das Elternpaar aus.</p>
   <p><b>Interdependenz:</b> Der Konflikt verändert das Verhalten aller Mitglieder: Lena flieht aus dem Haus (Z. 16 f.) und zieht sich auch später zurück (Z. 21 f.), die Eltern reden nur noch das Nötigste (Z. 20 f.), und Tim, der gar nicht beteiligt war, wird übergangen (Z. 19) und bekommt Bauchschmerzen (Z. 22 f.). Das System hat sich deutlich von seinem Normzustand entfernt.</p>
   <p><b>Gegenmaßnahmen:</b> Tims Zettel (Z. 24 f.) wirkt als Gegenmaßnahme. Sabine und Jens klären, was sie eigentlich gemeint haben (Z. 26–30), und im Familiengespräch (Z. 31–36) werden neue Regeln vereinbart. So wird das Fließgleichgewicht wiederhergestellt.</p>
  </div></details>
  <details class="entry"><summary><h3>Aufgabe 3 · Merkmale erfolgreicher Kommunikation</h3></summary><div class="inner ml">
   <p>Erfolgreiche Kommunikation liegt vor, wenn die Nachricht so ankommt, wie sie gemeint war, und die Beziehung dabei nicht beschädigt wird.</p>
   <p><b>1. Klare Selbstoffenbarung / Ich-Botschaften:</b> Hätte Sabine gesagt „Ich mache mir Sorgen, dass du Ärger in der Schule bekommst“, wäre ihre eigentliche Absicht (Z. 27 f.) deutlich geworden und Lena hätte sich weniger bevormundet gefühlt.</p>
   <p><b>2. Mit vier Ohren hören / nachfragen:</b> Lena und Sabine hören beide vorwiegend mit dem Beziehungsohr. Nachfragen („Wie meinst du das?“) hätte die Eskalation stoppen können.</p>
   <p><b>3. Metakommunikation:</b> Das Gespräch der Eltern (Z. 26–30) zeigt, wie hilfreich es ist, über die Kommunikation selbst zu sprechen.</p>
   <p><b>4. Aktives Zuhören und Ausreden-Lassen:</b> Im Familiengespräch darf jeder sprechen, ohne unterbrochen zu werden (Z. 31 f.) – erst dadurch werden die Sichtweisen verstanden.</p>
   <p><b>5. Alle Systemmitglieder einbeziehen:</b> Wegen der Interdependenz leidet auch Tim (Z. 22 f.). Erfolgreich ist die Lösung erst, als alle vier beteiligt sind und gemeinsam Vereinbarungen treffen (Z. 35 f.).</p>
   <p><b>6. Passender Rahmen:</b> Der Streit entsteht im morgendlichen Stress (Z. 3), das klärende Gespräch findet in Ruhe am Wochenende statt (Z. 31).</p>
   <p><b>Fazit:</b> Besonders wichtig sind Ich-Botschaften und Metakommunikation, weil sie direkt an der Beziehungsseite ansetzen, auf der der Konflikt entstanden ist. Allerdings sind diese Merkmale im Alltag, gerade unter Zeitdruck, schwer umzusetzen; Kommunikation lässt sich nie vollständig kontrollieren, da der Empfänger immer selbst entscheidet, mit welchem Ohr er hört.</p>
  </div></details>`;
}

/* ---------- Üben ---------- */
function psUeben(el){
  let mode=store.get("psMode","karten");
  el.innerHTML=`<div class="seg three"><button type="button" data-m="karten">Karteikarten</button><button type="button" data-m="quiz">Quiz</button><button type="button" data-m="vier">Vier Seiten</button></div><div id="psUe" class="view" style="gap:14px"></div>`;
  const set=m=>{mode=m;store.set("psMode",m);el.querySelectorAll(".seg button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.m===m));({karten:psKarten,quiz:psQuiz,vier:psVier})[m](psEl("psUe"))};
  el.querySelectorAll(".seg button").forEach(b=>b.onclick=()=>set(b.dataset.m));
  set(mode);
}
function psKarten(box){
  const only=store.get("psNurPflicht",true);
  let deck=shuffle(PS_BEGRIFFE.filter(b=>!only||b.p)),total=deck.length,known=0,flip=false;
  const draw=()=>{
    if(!deck.length){box.innerHTML=`<div class="done"><span class="big">${total} / ${total}</span><p>Alle Karten gewusst!</p><button class="btn primary" type="button" id="psAgain">Nochmal</button></div>`;psEl("psAgain").onclick=()=>psKarten(box);return}
    const c=deck[0];
    box.innerHTML=`<div class="row"><button type="button" class="toggle" id="psNp" aria-pressed="${only}">Nur Unterricht</button></div>
     <div class="progress"><span>${known} von ${total} gewusst</span><span>noch ${deck.length}</span></div><div class="bar"><i style="width:${known/total*100}%"></i></div>
     <div class="flash" id="psFc"><span class="kind">${c.g}</span><div class="front">${c.t}</div>${flip?`<div class="back"><p>${c.d}</p></div>`:'<span class="hint">Tippen zum Umdrehen</span>'}</div>
     ${flip?'<div class="btns"><button class="btn no" type="button" id="psNo">Nochmal</button><button class="btn yes" type="button" id="psYes">Gewusst</button></div>':""}`;
    psEl("psNp").onclick=()=>{store.set("psNurPflicht",!only);psKarten(box)};
    psEl("psFc").onclick=()=>{flip=!flip;draw()};
    if(flip){psEl("psYes").onclick=()=>{deck.shift();known++;flip=false;draw()};
             psEl("psNo").onclick=()=>{const k=deck.shift();deck.splice(Math.min(3,deck.length),0,k);flip=false;draw()}}
  };draw();
}
function psQuizRun(box,items,bestKey,render){
  let i=0,pts=0,lock=false;
  const draw=()=>{
    if(i>=items.length){const best=Math.max(store.get(bestKey,0),pts);store.set(bestKey,best);
      box.innerHTML=`<div class="done"><span class="big">${pts} / ${items.length}</span><p>${pts>=items.length*0.8?"Super, das sitzt!":pts>=items.length*0.5?"Gut! Schau dir die Fehler nochmal bei Begriffe und Modelle an.":"Lies die Mitschrift nochmal durch und versuch es dann erneut."}</p><p class="tip">Bestwert: ${best} / ${items.length}</p><button class="btn primary" type="button" id="psAgain">Nochmal</button></div>`;
      psEl("psAgain").onclick=()=>render(box);return}
    const it=items[i];
    box.innerHTML=`<div class="progress"><span>Frage ${i+1} von ${items.length}</span><span>${pts} richtig</span></div><div class="bar"><i style="width:${i/items.length*100}%"></i></div>
     <div class="q">${it.pre||""}<div class="ask">${it.ask}</div><div class="opts">${it.opts.map((o,j)=>`<button type="button" data-j="${j}">${o.h}</button>`).join("")}</div><div id="psEx"></div></div>`;
    box.querySelector(".opts").onclick=e=>{const b=e.target.closest("button");if(!b||lock)return;lock=true;
      const j=+b.dataset.j;if(it.opts[j].r)pts++;
      box.querySelectorAll(".opts button").forEach((x,k)=>{if(it.opts[k].r)x.classList.add("right");else if(k===j)x.classList.add("wrong")});
      psEl("psEx").innerHTML=`<button class="btn primary" type="button" id="psNx" style="width:100%">Weiter</button>`;
      psEl("psNx").onclick=()=>{lock=false;i++;draw()}};
  };draw();
}
function psQuiz(box){
  const items=shuffle(PS_QUIZ).slice(0,10).map(q=>({ask:q.q,opts:shuffle(q.o.map((t,i)=>({h:t,r:i===q.r})))}));
  psQuizRun(box,items,"psQuizBest",psQuiz);
}
function psVier(box){
  const items=shuffle(PS_VS.flatMap(v=>Object.keys(v.a).map(k=>({s:v.s,t:v.a[k],k})))).slice(0,12)
    .map(it=>({pre:`<p class="meta" style="margin:0">${it.s}</p>`,ask:`„${it.t}“`,opts:Object.keys(PS_SIDE).map(k=>({h:PS_SIDE[k],r:k===it.k}))}));
  psQuizRun(box,items,"psVierBest",psVier);
}

/* ---------- Merken ---------- */
const PS_MERK=`<table class="mtab"><tbody>
<tr class="ph"><td colspan="2">System</td></tr>
<tr><td>System</td><td>Aggregat von Objekten, die alle miteinander in Wechselbeziehung stehen</td></tr>
<tr><td>Interdependenz</td><td>Ändert sich einer, ändern sich alle</td></tr>
<tr><td>Übersummation</td><td>Qualität des Systems ergibt sich aus den Interaktionen</td></tr>
<tr><td>Positive RK</td><td>System entfernt sich vom Normzustand → im Extremfall Zerfall</td></tr>
<tr><td>Negative RK</td><td>System bleibt im Normalzustand</td></tr>
<tr><td>Fließgleichgewicht</td><td>relativ, kein absoluter Zustand; wird mit Gegenmaßnahmen gehalten</td></tr>
<tr class="ph"><td colspan="2">Kommunikation</td></tr>
<tr><td>Kommunikation</td><td>Aufnahme, Vermittlung und Austausch von Informationen zwischen zwei oder mehr Personen</td></tr>
<tr><td>Interaktion</td><td>wechselseitig aufeinander bezogenes Verhalten; reagieren, beeinflussen, steuern sich gegenseitig</td></tr>
<tr><td>Regelkreis</td><td>Sender → Absicht → Kodierung → Übermittlung → Empfänger → Decodierung → Reaktion (wird Sender) …</td></tr>
<tr class="ph"><td colspan="2">Vier-Seiten-Modell (Schulz von Thun)</td></tr>
<tr><td>Sachinhalt</td><td>Worüber informiere ich?</td></tr>
<tr><td>Selbstoffenbarung</td><td>Was gebe ich von mir preis?</td></tr>
<tr><td>Beziehung</td><td>Wie stehe ich zu dir? Was halte ich von dir?</td></tr>
<tr><td>Appell</td><td>Wozu möchte ich dich veranlassen?</td></tr>
</tbody></table><p class="tip" style="margin:10px 0 0">Klausur: AFB I zusammenfassen (Zeilen!) · AFB II Systemskizze + positive Rückkopplung mit Vier-Seiten-Modell · AFB III Merkmale erfolgreicher Kommunikation.</p>`;

/* ---------- Module für die Navigation ----------
   Ein Fach kann statt tabs:"U"/"K" ein eigenes Modul haben (mod:"psyU" / "psyK").
   Jedes Modul bringt seine Reiter, Titel, Ansichten und den Merken-Inhalt mit. */
const PS_ICON={
  text:`<svg viewBox="0 0 24 24"><path d="M6 3h9l4 4v14H6z"/><path d="M14 3v5h5M9 12h7M9 16h7"/></svg>`,
  modell:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8" stroke-dasharray="3 3"/><circle cx="9" cy="10" r="1.6"/><circle cx="15" cy="10" r="1.6"/><circle cx="12" cy="15" r="1.6"/></svg>`,
  ablauf:`<svg viewBox="0 0 24 24"><path d="M9 4h6v3H9z"/><path d="M9 5H6v16h12V5h-3"/><path d="M9 13l2 2 4-4"/></svg>`,
  lex:`<svg viewBox="0 0 24 24"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M9 8h6"/></svg>`,
  probe:`<svg viewBox="0 0 24 24"><path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13 7l4 4"/></svg>`,
  ueben:`<svg viewBox="0 0 24 24"><rect x="3" y="6" width="14" height="12" rx="2"/><path d="M7 3h12a2 2 0 0 1 2 2v10"/></svg>`
};
const MODS={
  psyU:{tabs:[["mitschrift","Mitschrift","text"],["modelle","Modelle","modell"]],
    titles:{mitschrift:["Mitschrift","System, Interaktion & Kommunikation"],modelle:["Modelle","Übersicht zu jedem Modell"]},
    views:{mitschrift:psMitschrift,modelle:psModelle},
    merk:["Das Wichtigste auf einen Blick","System & Kommunikation",PS_MERK]},
  psyK:{tabs:[["ablauf","Ablauf","ablauf"],["begriffe","Begriffe","lex"],["modelle","Modelle","modell"],["probe","Probe","probe"],["ueben","Üben","ueben"]],
    titles:{ablauf:["Ablauf","Klausuraufbau, Tipps, Checkliste"],begriffe:["Fachbegriffe",`${PS_BEGRIFFE.length} Begriffe zum Lernen`],modelle:["Modelle","Übersicht zu jedem Modell"],probe:["Probeklausur","Fallbeispiel mit Musterlösung"],ueben:["Üben","Karteikarten, Quiz, Vier-Seiten-Trainer"]},
    views:{ablauf:psAblauf,begriffe:psBegriffe,modelle:psModelle,probe:psProbe,ueben:psUeben},
    merk:["Das Wichtigste auf einen Blick","System & Kommunikation",PS_MERK]}
};
