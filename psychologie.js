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
 {g:'Aufgabe 3',t:'Metakommunikation',d:'Kommunikation über die Kommunikation: „Wie hast du das gemeint?“, „Wie reden wir eigentlich miteinander?“ Wichtigste Gegenmaßnahme bei Störungen.',p:0},
 {g:'Aufgabe 3',t:'Ich-Botschaft',d:'Der Sprecher äußert eigene Gefühle und Wünsche („Ich mache mir Sorgen, wenn …“) statt Vorwürfe („Du bist immer …“). Macht die Selbstoffenbarung klar und entlastet die Beziehungsseite.',p:0},
 {g:'Aufgabe 3',t:'Aktives Zuhören',d:'Aufmerksam zuhören, ausreden lassen, nachfragen und das Gehörte mit eigenen Worten wiedergeben, um zu prüfen, ob man richtig verstanden hat.',p:0},
 {g:'Aufgabe 3',t:'Kongruenz',d:'Übereinstimmung von Gesagtem, Tonfall und Körpersprache (Echtheit). Inkongruente Nachrichten („Ist schon gut!“ mit wütendem Blick) führen zu Missverständnissen.',p:0},
 {g:'Aufgabe 3',t:'Axiome nach Paul Watzlawick',d:'Fünf Grundregeln der Kommunikation, z. B. „Man kann nicht nicht kommunizieren“ und „Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt“. Im Unterricht als zweites Modell zur Erklärung positiver Rückkopplung genannt.',p:0},
 {g:'Aufgabe 3',t:'Interpunktion',d:'Watzlawick: Jeder setzt den „Anfang“ eines Streits woanders („Ich meckere, weil du dich zurückziehst“ – „Ich ziehe mich zurück, weil du meckerst“). Passt zum Regelkreis: Kommunikation hat keinen Anfang und kein Ende.',p:0},
 {g:'Aufgabe 3',t:'Gelingende (erfolgreiche) Kommunikation',d:'Die Nachricht kommt so an, wie sie gemeint war; beide fühlen sich verstanden und respektiert, die Beziehung bleibt intakt. Im System: negative Rückkopplung – das Fließgleichgewicht bleibt erhalten.',p:0},
 {g:'Aufgabe 3',t:'Misslingende Kommunikation',d:'Die Nachricht wird anders verstanden als gemeint oder verletzt die Beziehung. Es entstehen Konflikte, die sich aufschaukeln – positive Rückkopplung, das System entfernt sich vom Normzustand.',p:0},
 {g:'Aufgabe 3',t:'Du-Botschaft',d:'Aussage, die den anderen bewertet oder beschuldigt („Du bist immer …“). Führt zu Verteidigung und Gegenangriff. Gegenstück: Ich-Botschaft.',p:0},
 {g:'Aufgabe 3',t:'Implizite (versteckte) Botschaft',d:'Das Eigentliche wird nicht ausgesprochen, sondern steckt zwischen den Zeilen (Tonfall, Andeutung). Der Empfänger muss raten. Gegenstück: explizite (klare) Botschaft.',p:0},
 {g:'Aufgabe 3',t:'Einseitige Empfangsgewohnheiten',d:'Schulz von Thun: Jemand hört gewohnheitsmäßig mit einem „übergroßen“ Ohr – z. B. Beziehungsohr (nimmt alles persönlich), Sachohr (überhört Gefühle), Selbstoffenbarungsohr (deutet alles nur beim anderen), Appellohr (will es allen recht machen).',p:0},
 {g:'Aufgabe 3',t:'Symmetrische Eskalation',d:'Watzlawick: Beide wollen „oben“ sein, jeder setzt noch einen drauf – der Streit schaukelt sich hoch (= positive Rückkopplung).',p:0},
 {g:'Aufgabe 3',t:'Grundhaltungen nach Carl Rogers',d:'Drei Haltungen für gelingende Kommunikation: Empathie (einfühlendes Verstehen), Wertschätzung (Akzeptanz ohne Bedingungen) und Echtheit (Kongruenz).',p:0}
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
 {q:'Welche Aussage ist eine Ich-Botschaft?',o:['„Ich mache mir Sorgen, wenn du so spät kommst.“','„Du kommst immer zu spät!“','„Du bist echt unzuverlässig.“','„Kannst du nicht einmal pünktlich sein?“'],r:0},
 {q:'Welches Merkmal gehört zu misslingender Kommunikation?',o:['Verallgemeinerungen wie „immer“ und „nie“','Metakommunikation','Aktives Zuhören','Kongruenz'],r:0},
 {q:'Welche drei Grundhaltungen nennt Carl Rogers für gelingende Kommunikation?',o:['Empathie, Wertschätzung, Echtheit','Sachinhalt, Beziehung, Appell','Kodierung, Übermittlung, Decodierung','Interdependenz, Übersummation, Rückkopplung'],r:0},
 {q:'Was ist Metakommunikation?',o:['Kommunikation über die Kommunikation („Wie hast du das gemeint?“)','Kommunikation ohne Worte','Ein Streit, der eskaliert','Kommunikation über das Handy'],r:0},
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
const PS_CHECK=["Definition System, Interdependenz, Übersummation auswendig","Positive vs. negative Rückkopplung sicher erklären","Fließgleichgewicht + Gegenmaßnahmen","Definition soziale Kommunikation & soziale Interaktion","Regelkreis aufzählen (Sender → Absicht → Kodierung → Übermittlung → Empfänger → Decodierung → Reaktion)","6 Funktionen der Kommunikation","Vier Seiten mit Leitfragen","Systemskizze einmal frei auf Papier gezeichnet","Probeklausur Aufgabe 2 selbst versucht","Merkmale erfolgreicher und misslingender Kommunikation (je mind. 5, mit Beispiel)"];
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
  <div class="step"><span class="afb">Aufgabe 3 · AFB III</span><h3>Merkmale erfolgreicher und misslingender Kommunikation</h3><ol>
   <li><b>Einleitung:</b> gelingende und misslingende Kommunikation definieren, Bezug zum System (negative/positive Rückkopplung).</li>
   <li><b>Misslingend:</b> 3–4 Merkmale nennen, mit Modell erklären, am Fall belegen (Zeilen!).</li>
   <li><b>Erfolgreich:</b> jeweils das Gegenstück – am Fall belegen oder zeigen, wie man es besser hätte sagen können.</li>
   <li><b>Fazit:</b> Welche Merkmale sind am wichtigsten und warum? Grenzen nennen.</li></ol>
   <p class="ex" style="margin-top:8px"><a href="#/psychologie/klausur/aufgabe3"><b>→ Alle Merkmale mit Beispielen im Reiter „Aufgabe 3“</b></a></p></div>

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
  <div class="aufg"><h3>3. Erörtern Sie Merkmale erfolgreicher und misslingender Kommunikation unter Bezug auf das Fallbeispiel.</h3><p class="meta">AFB III</p></div>
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
  <details class="entry"><summary><h3>Aufgabe 3 · Erfolgreiche und misslingende Kommunikation</h3></summary><div class="inner ml">
   <p><b>Einleitung:</b> Kommunikation gelingt, wenn eine Nachricht so ankommt, wie sie gemeint war, und die Beziehung dabei nicht beschädigt wird – im System bleibt das Fließgleichgewicht erhalten. Sie misslingt, wenn Missverständnisse oder Verletzungen entstehen, die sich – wie bei Familie Berger – zu einer positiven Rückkopplung aufschaukeln.</p>
   <p><b>Merkmale misslingender Kommunikation</b></p>
   <p><b>1. Versteckte Botschaften und das „falsche Ohr“:</b> Sabine sagt nur „Der Bus fährt in zehn Minuten“ (Z. 5), obwohl sie eigentlich Angst hat, dass Lena Ärger bekommt (Z. 27 f.). Ihre Selbstoffenbarung bleibt versteckt, und Lena hört mit dem übergroßen Beziehungsohr Bevormundung heraus (Z. 6 f.).</p>
   <p><b>2. Du-Botschaften, Vorwürfe und Verallgemeinerungen:</b> „Dann benimm dich auch nicht wie eins“ (Z. 8), „Immer musst du an mir herummeckern!“ (Z. 10) und „Du sitzt ja nur da und liest“ (Z. 13 f.) greifen den anderen an. Sabine wärmt zudem alte Themen auf (Z. 8 f.). Jeder Vorwurf provoziert einen Gegenvorwurf – es kommt zur Eskalation (Z. 6–16).</p>
   <p><b>3. Ironie und abwertende Körpersprache:</b> Augenverdrehen (Z. 6), die hart abgestellte Dose (Z. 7 f.), Jens’ „falls dir das entgangen ist“ (Z. 15 f.) und das Türknallen (Z. 17) senden auf der Beziehungsebene Abwertung.</p>
   <p><b>4. Ignorieren und Rückzug:</b> Tims Frage bleibt unbeantwortet (Z. 18 f.), danach reden die Eltern nur noch das Nötigste (Z. 20 f.). Nach Watzlawick kann man nicht nicht kommunizieren – das Schweigen wird als Ablehnung verstanden. Wegen der Interdependenz reagiert Tim mit Bauchschmerzen (Z. 22 f.).</p>
   <p><b>5. Ungünstiger Rahmen:</b> Der Konflikt beginnt im morgendlichen Stress (Z. 1–5).</p>
   <p><b>Merkmale erfolgreicher Kommunikation</b></p>
   <p><b>1. Metakommunikation und Ich-Botschaften:</b> Sabine und Jens sprechen später darüber, was sie eigentlich gemeint haben (Z. 26–30), und senden Ich-Botschaften: „Ich hatte einfach Angst …“ (Z. 27), „Ich wollte dir eigentlich helfen …“ (Z. 29).</p>
   <p><b>2. Aktives Zuhören:</b> Im Familiengespräch darf jeder sprechen, ohne unterbrochen zu werden (Z. 31 f.).</p>
   <p><b>3. Wertschätzung:</b> Lenas Gefühl, wie ein Kind behandelt zu werden, wird ernst genommen (Z. 32–34), und sie bekommt Verantwortung (Z. 34 f.).</p>
   <p><b>4. Alle einbeziehen, konkrete Vereinbarungen:</b> Alle vier setzen sich zusammen (Z. 31) und treffen konkrete Absprachen (Z. 34–36). Tim wirkt erleichtert (Z. 36).</p>
   <p><b>5. Passender Rahmen:</b> Das Gespräch findet in Ruhe am Wochenende statt (Z. 31).</p>
   <p><b>Fazit:</b> Am wichtigsten sind Ich-Botschaften und Metakommunikation, weil der Konflikt auf der Beziehungsebene entstanden ist und genau dort gelöst werden muss. Der Fall zeigt außerdem, dass in einem System alle einbezogen werden müssen, da wegen der Interdependenz auch Unbeteiligte leiden. Allerdings sind diese Merkmale im Alltag, besonders unter Zeitdruck, schwer umzusetzen. Außerdem entscheidet der Empfänger selbst, mit welchem Ohr er hört, und gelingende Kommunikation braucht immer beide Seiten. Missverständnisse lassen sich daher nie ganz vermeiden – durch Metakommunikation lassen sie sich aber rechtzeitig auflösen.</p>
  </div></details>`;
}

/* ---------- Üben ---------- */
function psUeben(el){
  let mode=store.get("psMode","karten");
  el.innerHTML=`<div class="seg ps-four"><button type="button" data-m="karten">Karten</button><button type="button" data-m="quiz">Quiz</button><button type="button" data-m="vier">Vier Seiten</button><button type="button" data-m="a3">Aufgabe 3</button></div><div id="psUe" class="view" style="gap:14px"></div>`;
  const set=m=>{mode=m;store.set("psMode",m);el.querySelectorAll(".seg button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.m===m));({karten:psKarten,quiz:psQuiz,vier:psVier,a3:psA3Trainer}[m]||psKarten)(psEl("psUe"))};
  el.querySelectorAll(".seg button").forEach(b=>b.onclick=()=>set(b.dataset.m));
  set(mode);
}
function psKarten(box){
  const only=store.get("psNurPflicht",false);
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
      psEl("psEx").innerHTML=(it.after?`<div class="ps-better">${it.after}</div>`:"")+`<button class="btn primary" type="button" id="psNx" style="width:100%">Weiter</button>`;
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

/* ---------- Aufgabe 3: erfolgreiche & misslingende Kommunikation ---------- */
const PS_A3=[
 {no:'Versteckte Botschaften',no_d:'Man sagt nicht direkt, was man meint oder fühlt. Das Eigentliche steckt zwischen den Zeilen – der Empfänger muss raten.',
  ja:'Klare Botschaften',ja_d:'Offen sagen, was man meint, fühlt und möchte – Selbstoffenbarung und Appell werden ausgesprochen.',
  m:'Vier-Seiten-Modell (Schulz von Thun): implizite vs. explizite Botschaften',
  bn:'Sabine sagt nur „Der Bus fährt in zehn Minuten“ (Z. 5), meint aber ihre Sorge (Z. 27 f.).',bj:'Später spricht sie es aus: „Ich hatte einfach Angst …“ (Z. 27 f.).'},
 {no:'Mit dem „falschen Ohr“ hören',no_d:'Der Empfänger hört einseitig, meist mit einem übergroßen Beziehungsohr: Er bezieht alles auf sich und fühlt sich angegriffen.',
  ja:'Mit allen vier Ohren hören und nachfragen',ja_d:'Bewusst prüfen, was gemeint sein könnte, und bei Unklarheit nachfragen („Wie meinst du das?“).',
  m:'Vier-Seiten-Modell: einseitige Empfangsgewohnheiten (übergroßes Ohr)',
  bn:'Lena hört „Du traust mir nichts zu“ (Z. 6 f.); Sabine hört Jens’ Hilfe als Angriff (Z. 12–14).',bj:'Jens erkennt: „Das kam wohl anders bei dir an.“ (Z. 30)'},
 {no:'Du-Botschaften und Vorwürfe',no_d:'Aussagen, die den anderen bewerten oder beschuldigen („Du bist …“, „Du machst nie …“). Der andere geht in die Verteidigung.',
  ja:'Ich-Botschaften',ja_d:'Eigene Gefühle und Wünsche ausdrücken („Ich mache mir Sorgen, wenn …“, „Ich wünsche mir …“), ohne den anderen anzugreifen.',
  m:'Thomas Gordon (Ich-Botschaften); Vier-Seiten-Modell: klare Selbstoffenbarung statt Angriff auf der Beziehungsseite',
  bn:'„Du sitzt ja nur da und liest.“ (Z. 13 f.); „Dann benimm dich auch nicht wie eins.“ (Z. 8)',bj:'„Ich hatte einfach Angst, dass …“ (Z. 27 f.); „Ich wollte dir eigentlich helfen …“ (Z. 29)'},
 {no:'Verallgemeinern und alte Themen aufwärmen',no_d:'„Immer“, „nie“, „ständig“ – und alte Konflikte werden mit in den Streit gezogen. Aus einem kleinen Anlass wird ein Grundsatzstreit.',
  ja:'Konkret beim aktuellen Thema bleiben',ja_d:'Nur über die aktuelle Situation sprechen, konkret beschreiben, was stört, und eine konkrete Lösung suchen.',
  m:'Regelkreis: Eine Verallgemeinerung provoziert eine Gegen-Verallgemeinerung → positive Rückkopplung',
  bn:'„Immer musst du an mir herummeckern! Bei Tim sagst du nie was.“ (Z. 10 f.); Sabine bringt „gestern“ und das Zimmer ins Spiel (Z. 8 f.).',bj:'Konkrete Vereinbarung: Lena stellt ihren Wecker selbst (Z. 34 f.).'},
 {no:'Ironie und Abwertung',no_d:'Sarkastische oder herablassende Bemerkungen verletzen auf der Beziehungsseite – auch wenn der Sachinhalt stimmt.',
  ja:'Wertschätzung und Respekt',ja_d:'Den anderen als Person ernst nehmen und achten, auch wenn man in der Sache anderer Meinung ist (Rogers: Wertschätzung).',
  m:'Vier-Seiten-Modell (Beziehungsseite); Watzlawick: Der Beziehungsaspekt bestimmt den Inhalt; Rogers: Wertschätzung',
  bn:'„… falls dir das entgangen ist.“ (Z. 15 f.); „Schlachtfeld“ (Z. 9)',bj:'Lenas Gefühl wird ernst genommen (Z. 32–34), und sie bekommt Verantwortung (Z. 34 f.).'},
 {no:'Widersprüchliche oder abwertende Körpersprache',no_d:'Worte und Körpersprache passen nicht zusammen (inkongruent), oder die Körpersprache wertet ab: Augenverdrehen, Türknallen, Seufzen.',
  ja:'Kongruenz (Echtheit)',ja_d:'Worte, Tonfall, Mimik und Gestik passen zusammen; man ist ehrlich und meint, was man sagt (Rogers: Echtheit).',
  m:'Watzlawick: analoge (nonverbale) Kommunikation; Schulz von Thun: kongruente/inkongruente Nachrichten; Rogers: Echtheit',
  bn:'Lena verdreht die Augen (Z. 6), Sabine stellt die Dose hart ab (Z. 7 f.), Lena knallt die Tür (Z. 17).',bj:'Sabine sagt offen, wie gestresst sie morgens ist (Z. 34) – Worte und Gefühl stimmen überein.'},
 {no:'Ignorieren, Schweigen, Rückzug',no_d:'Fragen bleiben unbeantwortet, man redet nur das Nötigste oder zieht sich zurück. Auch das ist eine Botschaft – meist: „Du bist mir nicht wichtig.“',
  ja:'Aktiv zuhören und alle einbeziehen',ja_d:'Sich zuwenden, ausreden lassen, nachfragen und Gehörtes wiedergeben; alle Systemmitglieder kommen zu Wort (Rogers: Empathie).',
  m:'Watzlawick: „Man kann nicht nicht kommunizieren.“; Systemtheorie: Interdependenz; Gordon/Rogers: aktives Zuhören',
  bn:'Niemand antwortet Tim (Z. 18 f.); die Eltern reden nur das Nötigste (Z. 20 f.); Lena zieht sich zurück (Z. 21 f.).',bj:'Jeder darf sprechen, ohne unterbrochen zu werden (Z. 31 f.); Tim wirkt erleichtert (Z. 36).'},
 {no:'Eskalation: jeder setzt einen drauf',no_d:'Auf jeden Angriff folgt ein Gegenangriff; jeder sieht die Schuld beim anderen („Du hast angefangen!“). Der Streit schaukelt sich hoch = positive Rückkopplung.',
  ja:'Deeskalieren',ja_d:'Einer steigt aus dem Kreislauf aus: nicht zurückschlagen, Pause machen, ruhig bleiben, später in Ruhe weiterreden.',
  m:'Watzlawick: symmetrische Eskalation, Interpunktion; Systemtheorie: positive Rückkopplung',
  bn:'Lena ↔ Sabine (Z. 6–11), dann Sabine ↔ Jens (Z. 12–16).',bj:'Tims Zettel unterbricht den Kreislauf (Z. 24 f.); die Eltern reden in Ruhe (Z. 26–30).'},
 {no:'Keine Metakommunikation',no_d:'Niemand spricht darüber, wie etwas gemeint war oder angekommen ist. Missverständnisse bleiben bestehen.',
  ja:'Metakommunikation',ja_d:'Über die Kommunikation selbst sprechen: „Wie hast du das gemeint?“, „So kam das bei mir an …“, „Wie reden wir eigentlich miteinander?“',
  m:'Watzlawick und Schulz von Thun: Metakommunikation als wichtigste Gegenmaßnahme',
  bn:'Im ganzen Streit fragt niemand nach (Z. 5–17).',bj:'„Ich glaube, ich wollte Lena … gar nicht kritisieren.“ (Z. 26 f.); „Das kam wohl anders bei dir an.“ (Z. 30)'},
 {no:'Ungünstiger Rahmen',no_d:'Heikle Themen werden unter Zeitdruck, im Stress oder „zwischen Tür und Angel“ angesprochen.',
  ja:'Passender Zeitpunkt und Rahmen',ja_d:'Sich Zeit nehmen, Ruhe, alle Beteiligten dabei, klare Gesprächsregeln.',
  m:'Regelkreis: Übermittlung (Situation, Kanal); äußere Einflüsse (Stress) wirken ins System',
  bn:'Montagmorgen, Hektik, der Bus fährt gleich (Z. 1–5).',bj:'Familiengespräch am Wochenende mit der Regel „ausreden lassen“ (Z. 31 f.).'}
];
const PS_A3Q=[
 {s:'„Immer musst du an mir herummeckern!“',k:3,b:'„Ich fühle mich gerade kritisiert. Was genau stört dich?“'},
 {s:'„Du sitzt ja nur da und liest.“',k:2,b:'„Ich fühle mich morgens mit allem allein. Kannst du mir helfen?“'},
 {s:'„Ich arbeite auch den ganzen Tag, falls dir das entgangen ist.“',k:4,b:'„Ich bin auch erschöpft. Lass uns die Aufgaben neu verteilen.“'},
 {s:'Lena verdreht die Augen und knallt später die Haustür zu.',k:5,b:'Ruhig sagen, dass man sich ärgert: „Das nervt mich gerade.“'},
 {s:'Tim fragt etwas – niemand antwortet ihm.',k:6,b:'Sich kurz zuwenden: „Gute Frage, Tim. Wir reden gleich darüber.“'},
 {s:'Sabine sagt „Der Bus fährt in zehn Minuten“, meint aber: „Ich habe Angst, dass du Ärger bekommst.“',k:0,b:'„Ich mache mir Sorgen, dass du wieder zu spät kommst.“'},
 {s:'Lena hört bei „Der Bus fährt in zehn Minuten“ nur: „Du traust mir nichts zu.“',k:1,b:'Nachfragen: „Meinst du, ich schaffe das nicht allein?“'},
 {s:'„Gestern warst du zu spät, und dein Zimmer ist ein Schlachtfeld!“',k:3,b:'Beim Thema bleiben: „Mir geht es gerade nur um den Bus.“'},
 {s:'Beide werden immer lauter, jeder setzt noch einen drauf.',k:7,b:'Einer steigt aus: „Stopp – lass uns heute Abend in Ruhe reden.“'},
 {s:'„Ich streite doch nur, weil DU angefangen hast!“',k:7,b:'Die Schuldfrage weglassen: „Wie kommen wir da gemeinsam raus?“'},
 {s:'Ein Grundsatzstreit beginnt mitten im Morgenstress.',k:9,b:'Einen ruhigen Zeitpunkt wählen, z. B. am Wochenende.'},
 {s:'„Ist schon okay“, sagt sie mit zusammengebissenen Zähnen.',k:5,b:'Ehrlich sein: „Ehrlich gesagt ärgert mich das.“'},
 {s:'Alle reden aneinander vorbei, keiner fragt, wie es gemeint war.',k:8,b:'„Wie hast du das gerade gemeint?“'},
 {s:'Die Eltern reden tagelang nur noch das Nötigste.',k:6,b:'Das Gespräch suchen: „Ich merke, dass wir kaum noch reden. Können wir darüber sprechen?“'}
];
function psAufgabe3(el){
  el.innerHTML=`
  <p class="meta" style="margin:0">Gängige Merkmale aus den Modellen (Schulz von Thun, Watzlawick, Rogers, Gordon) – mit Beispielen aus der Probeklausur. Falls ihr im Unterricht andere Merkmale hattet, nimm die!</p>
  <section class="tx"><span class="tx-y">Definitionen</span><h2>Wann gelingt Kommunikation – wann misslingt sie?</h2>
   ${psDef("Gelingende (erfolgreiche) Kommunikation","Die Nachricht kommt so an, wie sie gemeint war; beide fühlen sich verstanden und respektiert, die Beziehung bleibt intakt. Im System: negative Rückkopplung – das Fließgleichgewicht bleibt erhalten.")}
   ${psDef("Misslingende Kommunikation","Die Nachricht wird anders verstanden als gemeint oder verletzt die Beziehung. Es entstehen Konflikte, die sich aufschaukeln – positive Rückkopplung, das System entfernt sich vom Normzustand.")}
   <p class="ex"><b>Lerntrick:</b> Jedes misslingende Merkmal hat ein erfolgreiches Gegenstück. Lerne sie als Paare – dann hast du in der Klausur automatisch beide Seiten.</p>
  </section>
  <h2 class="sec">Auf einen Blick</h2>
  ${psTable(["✗ Misslingend","✓ Erfolgreich"],PS_A3.map(x=>[`<b class="ps-bez">${x.no}</b>`,`<b class="ps-selbst">${x.ja}</b>`]))}
  <h2 class="sec">Die 10 Paare genau erklärt</h2>
  ${PS_A3.map((x,i)=>`<details class="entry"><summary><h3>${i+1}. ${x.no} ↔ ${x.ja}</h3></summary><div class="inner">
    <div class="ps-pair no"><b>✗ ${x.no}</b><p>${x.no_d}</p><p class="ps-bsp"><b>Im Fall:</b> ${x.bn}</p></div>
    <div class="ps-pair ja"><b>✓ ${x.ja}</b><p>${x.ja_d}</p><p class="ps-bsp"><b>Im Fall:</b> ${x.bj}</p></div>
    <p class="meta"><b>Modell:</b> ${x.m}</p></div></details>`).join("")}
  <h2 class="sec">Die Modelle dahinter</h2>
  <section class="tx"><span class="tx-y">Schulz von Thun</span><h2>Einseitige Empfangsgewohnheiten</h2>
   <p>Missverständnisse entstehen oft, weil jemand gewohnheitsmäßig mit einem „übergroßen“ Ohr hört:</p>
   ${psTable(["Übergroßes …","Folge"],[
     ['<b class="ps-sach">Sach-Ohr</b>',"Gefühle und Beziehungsprobleme werden überhört und nur sachlich diskutiert."],
     ['<b class="ps-bez">Beziehungs-Ohr</b>',"Alles wird persönlich genommen und als Angriff verstanden (Lena und Sabine im Fall)."],
     ['<b class="ps-selbst">Selbstoffenbarungs-Ohr</b>',"Alles wird nur als Zustand des anderen gedeutet („Der hat ja nur schlechte Laune“) – nichts kommt wirklich an."],
     ['<b class="ps-app">Appell-Ohr</b>',"Man will es allen recht machen und hört überall Aufforderungen heraus."]])}
   <p class="meta" style="margin-top:8px">Außerdem: <b>explizite vs. implizite</b> Botschaften und <b>kongruente vs. inkongruente</b> Nachrichten.</p>
  </section>
  <section class="tx"><span class="tx-y">Paul Watzlawick</span><h2>Typische Störungen je Axiom</h2>
   ${psTable(["Axiom","Typische Störung"],[
     ["1 · Man kann nicht nicht kommunizieren","Schweigen und Ignorieren werden als Botschaft verstanden – meist als Ablehnung."],
     ["2 · Inhalts- und Beziehungsaspekt","Ein Beziehungskonflikt wird auf der Sachebene ausgetragen (man streitet über den Bus, meint aber die Beziehung)."],
     ["3 · Interpunktion","Jeder sieht die Ursache beim anderen („Du hast angefangen!“) → Teufelskreis."],
     ["4 · Digital und analog","Worte und Körpersprache widersprechen sich; Ironie wird falsch verstanden."],
     ["5 · Symmetrisch / komplementär","Symmetrische Eskalation (jeder will gewinnen) oder starre Komplementarität (einer ist immer unterlegen)."]])}
  </section>
  <section class="tx"><span class="tx-y">Carl Rogers · Thomas Gordon</span><h2>Was Kommunikation gelingen lässt</h2>
   <p><b>Drei Grundhaltungen nach Rogers:</b></p>
   <ul class="ps-ul"><li><b>Empathie</b> – einfühlendes Verstehen: sich in den anderen hineinversetzen.</li><li><b>Wertschätzung</b> – den anderen ohne Bedingungen als Person akzeptieren.</li><li><b>Echtheit (Kongruenz)</b> – ehrlich sein; Worte, Gefühle und Körpersprache passen zusammen.</li></ul>
   <p><b>Gordon:</b> <b>Ich-Botschaften</b> statt Du-Botschaften und <b>aktives Zuhören</b> (zuhören, nachfragen, mit eigenen Worten wiedergeben).</p>
  </section>
  <h2 class="sec">So schreibst du Aufgabe 3</h2>
  <div class="step"><span class="afb">Aufbau</span><ol>
   <li><b>Einleitung:</b> gelingende und misslingende Kommunikation definieren, Bezug zum System (negative/positive Rückkopplung).</li>
   <li><b>Misslingend:</b> 3–4 Merkmale nennen, mit Modell erklären, am Fall belegen (Zeilen!).</li>
   <li><b>Erfolgreich:</b> jeweils das Gegenstück – am Fall belegen oder zeigen, wie die Person es besser hätte sagen können.</li>
   <li><b>Fazit / Urteil:</b> Welche Merkmale sind am wichtigsten und warum? Grenzen nennen.</li></ol></div>
  <div class="step"><span class="afb">Grenzen fürs Fazit</span><ul>
   <li>Im Stress und bei starken Gefühlen schwer umzusetzen.</li>
   <li>Der Empfänger entscheidet selbst, mit welchem Ohr er hört – Missverständnisse lassen sich nie ganz vermeiden.</li>
   <li>Gelingende Kommunikation braucht beide Seiten; einer allein kann sie nicht erzwingen.</li>
   <li>Ungleiche Machtverhältnisse (Eltern – Kind, komplementäre Beziehung) erschweren Gespräche auf Augenhöhe.</li>
   <li>Techniken wie Ich-Botschaften wirken unecht, wenn die Haltung (Wertschätzung, Echtheit) fehlt.</li></ul></div>
  <div class="step"><span class="afb">Satzbausteine</span><ul>
   <li>„Ein Merkmal misslingender Kommunikation ist …. Dies zeigt sich im Fallbeispiel, als … (Z. …).“</li>
   <li>„Nach dem Vier-Seiten-Modell lässt sich das so erklären: …“</li>
   <li>„Erfolgreicher wäre es gewesen, wenn … eine Ich-Botschaft gesendet hätte, z. B.: ‚…‘.“</li>
   <li>„Dass dies wirkt, zeigt sich am Ende des Falls: … (Z. …).“</li>
   <li>„Einerseits …, andererseits …“</li>
   <li>„Abschließend lässt sich festhalten, dass … besonders wichtig ist, weil …“</li></ul></div>
  <p class="ex"><a href="#/psychologie/klausur/ueben" onclick="store.set('psMode','a3')"><b>→ Üben: Merkmale im Text erkennen</b></a></p>`;
}
function psA3Trainer(box){
  const items=shuffle(PS_A3Q).slice(0,10).map(it=>{
    const others=shuffle(PS_A3.map((x,i)=>i).filter(i=>i!==it.k)).slice(0,3);
    return {pre:'<p class="meta" style="margin:0">Welches Merkmal misslingender Kommunikation zeigt sich hier?</p>',ask:it.s,
      opts:shuffle([it.k,...others]).map(i=>({h:PS_A3[i].no,r:i===it.k})),
      after:`<b>✓ Besser (${PS_A3[it.k].ja}):</b> ${it.b}`};
  });
  psQuizRun(box,items,"psA3Best",psA3Trainer);
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
<tr class="ph"><td colspan="2">Aufgabe 3: misslingend → erfolgreich</td></tr>
<tr><td>Versteckte Botschaft</td><td>→ klar sagen, was man meint</td></tr>
<tr><td>Falsches Ohr</td><td>→ mit vier Ohren hören, nachfragen</td></tr>
<tr><td>Du-Botschaft, Vorwurf</td><td>→ Ich-Botschaft</td></tr>
<tr><td>„Immer“, „nie“, alte Themen</td><td>→ konkret beim Thema bleiben</td></tr>
<tr><td>Ironie, Abwertung</td><td>→ Wertschätzung, Respekt</td></tr>
<tr><td>Abwertende Körpersprache</td><td>→ Kongruenz (Echtheit)</td></tr>
<tr><td>Ignorieren, Rückzug</td><td>→ aktiv zuhören, alle einbeziehen</td></tr>
<tr><td>Eskalation</td><td>→ deeskalieren, Pause</td></tr>
<tr><td>Keine Metakommunikation</td><td>→ Metakommunikation</td></tr>
<tr><td>Stress, Zeitdruck</td><td>→ passender Rahmen</td></tr>
</tbody></table><p class="tip" style="margin:10px 0 0">Klausur: AFB I zusammenfassen (Zeilen!) · AFB II Systemskizze + positive Rückkopplung mit Vier-Seiten-Modell · AFB III Merkmale erfolgreicher und misslingender Kommunikation.</p>`;

/* ---------- Module für die Navigation ----------
   Ein Fach kann statt tabs:"U"/"K" ein eigenes Modul haben (mod:"psyU" / "psyK").
   Jedes Modul bringt seine Reiter, Titel, Ansichten und den Merken-Inhalt mit. */
const PS_ICON={
  a3:`<svg viewBox="0 0 24 24"><path d="M3 12l3 3 5-6"/><path d="M14 9l6 6M20 9l-6 6"/></svg>`,
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
  psyK:{tabs:[["ablauf","Ablauf","ablauf"],["begriffe","Begriffe","lex"],["modelle","Modelle","modell"],["aufgabe3","Aufgabe 3","a3"],["probe","Probe","probe"],["ueben","Üben","ueben"]],
    titles:{ablauf:["Ablauf","Klausuraufbau, Tipps, Checkliste"],begriffe:["Fachbegriffe",`${PS_BEGRIFFE.length} Begriffe zum Lernen`],modelle:["Modelle","Übersicht zu jedem Modell"],aufgabe3:["Aufgabe 3","Erfolgreiche & misslingende Kommunikation"],probe:["Probeklausur","Fallbeispiel mit Musterlösung"],ueben:["Üben","Karteikarten, Quiz, Vier-Seiten-Trainer"]},
    views:{ablauf:psAblauf,begriffe:psBegriffe,modelle:psModelle,aufgabe3:psAufgabe3,probe:psProbe,ueben:psUeben},
    merk:["Das Wichtigste auf einen Blick","System & Kommunikation",PS_MERK]}
};
