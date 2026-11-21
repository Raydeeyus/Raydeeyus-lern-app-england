/* =========================================================
   Klausuren-App: Fächer, Kategorien (Unterricht / Klausurvorbereitung)
   und die Klausurvorbereitung Geschichte: Karl I. 1603–1649 + Cromwell
   ========================================================= */

/* ---------- Fächer ----------
   Jedes Fach hat IMMER die beiden Kategorien "unterricht" und "klausur".
   tabs: "U" = bisherige England-App, "K" = Klausurvorbereitung Karl I.
   mod: eigenes Modul mit eigenen Reitern (siehe MODS, z. B. in psychologie.js, deutsch.js, sport.js, kunst.js, mathe.js).
   Leere Kategorie = kein Eintrag in kat. Neues Fach: einfach hier ergänzen. */
const FAECHER=[
 {id:"geschichte",name:"Geschichte",c:"--crown",cs:"--crown-soft",klausur:"2026-11-17",thema:"Karl I. und Cromwell",
  kat:{unterricht:{tabs:"U",desc:"England 1509–1714 · Krone gegen Parlament"},
       klausur:{tabs:"K",desc:"Karl I. 1603–1649 · danach Cromwell"}}},
 {id:"mathe",name:"Mathe",c:"--ma",cs:"--ma-soft",klausur:"2026-11-23",thema:"Kurvendiskussion · Ableitungen · Tangenten · Extrempunkte",
  kat:{unterricht:{mod:"maU",desc:"Nullstellen & Skizzieren, Änderungsraten, Steigungswinkel, Tangente & Normale, Ableitungen, graphisches Differenzieren, Extrempunkte, Formeln"},
       klausur:{mod:"maK",desc:"Was drankommt, Rezepte für jeden Aufgabentyp, OHiMi-Training, Probeklausur, Üben"}}},
 {id:"kunst",name:"Kunst",c:"--gold",cs:"--gold-soft",klausur:"2026-11-25",thema:"Fotografie zwischen Dokumentation und Inszenierung",
  kat:{unterricht:{mod:"kuU",desc:"Einführung, Fotografie & Wirklichkeit, Gestaltungsmittel & Bildkomposition, Genres, Begriffe"},
       klausur:{mod:"kuK",desc:"Was drankommt, Theorie, Gestaltungsmittel, Fotoanalyse mit Muster, Probe, Üben"}}},
 {id:"sport",name:"Sport",c:"--parl",cs:"--parl-soft",klausur:"2026-11-26",thema:"Trainingsmethoden · Superkompensation · Belastungssteigerung",
  kat:{unterricht:{mod:"spU",desc:"Trainingsmethoden, Anpassung & Superkompensation, Trainingsprinzipien, Begriffe"},
       klausur:{mod:"spK",desc:"Was drankommt, 4 Methoden, Superkompensation mit Skizze, Belastungssteigerung, Probe, Üben"}}},
 {id:"psychologie",name:"Psychologie",c:"--psy",cs:"--psy-soft",klausur:"2026-11-18",thema:"System, Interaktion & Kommunikation",
  kat:{unterricht:{mod:"psyU",desc:"Mitschrift: Systeme, Kommunikation, Vier-Seiten-Modell"},
       klausur:{mod:"psyK",desc:"Ablauf, Fachbegriffe, Modelle, Probeklausur, Üben"}}},
 {id:"deutsch",name:"Deutsch",c:"--de",cs:"--de-soft",klausur:"2026-11-20",thema:"Materialgestützt argumentieren · Sprachwandel",
  kat:{unterricht:{mod:"deU",desc:"Sprachwandel, Varietäten, Polenz & Co., Internetsprache, Medien, Hate Speech"},
       klausur:{mod:"deK",desc:"Ablauf, Vertreter, Material, Argumente, Musteraufsätze, Üben"}}}
];
const KATS={
 unterricht:{name:"Unterricht",c:"--parl",icon:`<svg viewBox="0 0 24 24"><path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 19V5M9 8h6M9 12h6"/></svg>`},
 klausur:{name:"Klausurvorbereitung",c:"--crown",icon:`<svg viewBox="0 0 24 24"><path d="M9 4h6v3H9z"/><path d="M9 5H6v16h12V5h-3"/><path d="M9 13l2 2 4-4"/></svg>`}
};
const FOLDER_SVG=`<svg class="fi" viewBox="0 0 52 44" aria-hidden="true"><path d="M3 9a4 4 0 0 1 4-4h12l5 5h21a4 4 0 0 1 4 4v23a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4z"/></svg>`;
const WT=["So","Mo","Di","Mi","Do","Fr","Sa"];
function klausurInfo(d){
  if(!d)return "";
  const t=new Date(d+"T00:00:00"),now=new Date();now.setHours(0,0,0,0);
  const n=Math.round((t-now)/864e5);
  const dat=`${WT[t.getDay()]}, ${t.getDate()}.${t.getMonth()+1}.`;
  if(n<0)return "";
  return `Klausur ${dat} · ${n===0?"heute":n===1?"morgen":"in "+n+" Tagen"}`;
}

/* ---------- Klausur-Zeitstrahl 1603–1660 ----------
   [Datum, Titel, Erklärung, Pflichtdatum (1), Seite: k = König handelt, p = Parlament/Armee, n = neutral] */
const KZ=[
 {name:"Jakob I.: Gottesgnadentum gegen Unterhaus",span:"1603–1625",bg:"--e2",note:"Der Grundkonflikt entsteht: Wer hat das letzte Wort, der König oder das Parlament?",ev:[
  ["24. März 1603","Jakob I. wird König von England","Elisabeth I. stirbt kinderlos, die Tudors enden. Jakob VI. von Schottland regiert jetzt beide Länder (Personalunion). Er bringt das Gottesgnadentum mit, das er schon 1598 in „The True Law of Free Monarchies“ beschrieben hat: Der König ist nur Gott Rechenschaft schuldig.",1,"k"],
  ["1604","Apology of the Commons","Das Unterhaus antwortet: Seine Rechte (Steuerbewilligung, Redefreiheit) sind ererbt wie Eigentum und kein Geschenk des Königs. Damit ist der Grundkonflikt da.",1,"p"],
  ["5. Nov. 1605","Pulververschwörung (Gunpowder Plot)","Katholische Verschwörer um Guy Fawkes wollen König und Parlament in die Luft sprengen. Der Plan fliegt auf. Die Angst vor Katholiken wächst stark.",0,"n"],
  ["1610","Streit um Steuern und Proklamationen","Der „Great Contract“ (feste Einnahmen für den König gegen Verzicht auf alte Abgaben) scheitert. Richter Edward Coke entscheidet: Der König darf per Proklamation kein neues Recht schaffen.",0,"p"],
  ["1614","„Addled Parliament“","Das Parlament bewilligt kein Geld, Jakob löst es nach acht Wochen auf und regiert danach sieben Jahre ohne Parlament.",0,"k"],
  ["1621","Protestation des Unterhauses","Das Unterhaus besteht auf Redefreiheit, auch über Außenpolitik. Jakob reißt die Seite eigenhändig aus dem Protokollbuch und löst das Parlament auf.",0,"k"],
  ["1623","Spanische Heirat scheitert","Prinz Karl und Jakobs Favorit Buckingham reisen nach Madrid, die Heirat mit der spanischen Prinzessin platzt. England steuert auf einen Krieg mit Spanien zu.",0,"n"]
 ]},
 {name:"Karl I.: Kriege, Geldnot, Petition of Right",span:"1625–1629",bg:"--e3",note:"Karl braucht Geld für Kriege, das Parlament gibt es nur gegen Rechte.",ev:[
  ["27. März 1625","Karl I. wird König","Noch fester vom Gottesgnadentum überzeugt als sein Vater. Er heiratet die katholische Französin Henrietta Maria und hört ganz auf seinen Favoriten Buckingham. Beides macht ihn bei Protestanten verdächtig.",1,"k"],
  ["1625","Krieg gegen Spanien","Die Flottenexpedition nach Cádiz scheitert. Das Parlament bewilligt die Zölle (Tonnage and Poundage) nur für ein Jahr statt wie üblich auf Lebenszeit. Karl erhebt sie trotzdem weiter.",0,"k"],
  ["1626/27","Zwangsanleihe (Forced Loan)","Ohne Parlament verlangt Karl „Darlehen“, die in Wahrheit Steuern sind. Wer nicht zahlt, kommt ohne Anklage in Haft (Fall der fünf Ritter 1627) oder muss Soldaten bei sich aufnehmen.",1,"k"],
  ["1627","Krieg auch gegen Frankreich","Buckinghams Angriff auf die Île de Ré (bei La Rochelle) endet in einer Katastrophe. England kämpft jetzt gegen Spanien und Frankreich zugleich, das Geld fehlt.",0,"k"],
  ["7. Juni 1628","Petition of Right","Geld gibt es nur gegen Rechte: keine Steuern und Darlehen ohne Parlamentsbeschluss, keine Haft ohne Anklage, keine Einquartierung von Soldaten bei Bürgern, kein Kriegsrecht im Frieden. Karl stimmt aus Geldnot zu.",1,"p"],
  ["Aug. 1628","Buckingham ermordet","Der verhasste Favorit wird von einem Offizier erstochen. In London wird gefeiert, Karl gibt dem Parlament eine Mitschuld.",0,"n"],
  ["2. März 1629","Tumult im Unterhaus, Auflösung","Abgeordnete halten den Sprecher auf seinem Stuhl fest und beschließen Resolutionen gegen Karls Zölle und Kirchenpolitik. Karl löst das Parlament auf und lässt Anführer wie John Eliot verhaften.",1,"k"]
 ]},
 {name:"Persönliche Herrschaft",span:"1629–1640",bg:"--e1",note:"Elf Jahre ohne Parlament („Eleven Years' Tyranny“). Geld kommt aus alten Abgaben.",ev:[
  ["1629–1640","Elfjährige Tyrannei","Karl regiert ohne Parlament. Er schließt Frieden mit Frankreich (1629) und Spanien (1630), weil Krieg zu teuer ist, und treibt Geld über alte, vergessene Abgaben ein.",1,"k"],
  ["1633","William Laud wird Erzbischof von Canterbury","Er setzt eine prunkvolle, hochkirchliche Linie durch (Altar, Zeremonien). Puritaner sehen darin Katholizismus. Kritiker bestraft das Sondergericht Star Chamber hart.",1,"k"],
  ["1634/35","Ship Money für das ganze Land","Das Schiffsgeld zahlten früher nur Küstenorte im Krieg. Karl verlangt es jetzt jedes Jahr von allen Grafschaften, auch im Frieden. Eine Steuer ohne Parlament.",1,"k"],
  ["Juli 1637","Gebetbuch für Schottland","Karl zwingt den presbyterianischen Schotten das anglikanische Gebetbuch auf. In Edinburgh gibt es Tumulte. 1638 schwören die Schotten im National Covenant, ihre Kirche zu verteidigen.",1,"k"],
  ["1637/38","Hampden-Prozess","Der Abgeordnete John Hampden verweigert das Ship Money. Die Richter entscheiden nur knapp (7 zu 5) für den König. Der Widerstand wächst, viele zahlen nicht mehr.",0,"p"],
  ["1639–1640","Bischofskriege","Zwei Kriege gegen die Schotten. Karl hat kein Geld für eine richtige Armee und verliert. 1640 besetzen die Schotten Nordengland und müssen bezahlt werden.",1,"n"]
 ]},
 {name:"Langes Parlament und Weg in den Krieg",span:"1640–1642",bg:"--e4",note:"Karl muss das Parlament einberufen. Es baut seine Herrschaft ab, dann kommt der Bruch.",ev:[
  ["April 1640","Kurzes Parlament","Karl braucht Geld für den Krieg gegen die Schotten. Das Parlament will erst über seine Beschwerden reden. Karl löst es nach drei Wochen auf.",1,"k"],
  ["3. Nov. 1640","Langes Parlament","Nach der Niederlage muss Karl wieder ein Parlament einberufen. Unter John Pym nutzt es seine Notlage und baut die persönliche Herrschaft ab. (Es besteht formal bis 1660.)",1,"p"],
  ["1641","Reformgesetze","Triennial Act: spätestens alle drei Jahre ein Parlament. Dieses Parlament darf nur mit eigener Zustimmung aufgelöst werden. Ship Money wird verboten, die Sondergerichte Star Chamber und High Commission werden abgeschafft.",1,"p"],
  ["12. Mai 1641","Hinrichtung Straffords","Karls wichtigster Berater Thomas Wentworth, Earl of Strafford, wird per Gesetz (Bill of Attainder) zum Tode verurteilt. Karl unterschreibt unter dem Druck der Londoner Menge. Erzbischof Laud kommt in den Tower.",0,"p"],
  ["Okt. 1641","Aufstand in Irland","Irische Katholiken erheben sich, Tausende Protestanten sterben. Man braucht ein Heer, aber keiner traut dem anderen den Oberbefehl an: König oder Parlament?",1,"n"],
  ["22. Nov. 1641","Grand Remonstrance","Das Unterhaus listet über 200 Missstände seit 1625 auf und fordert Minister, denen das Parlament vertraut. Nur knapp angenommen (159 zu 148): Das Parlament spaltet sich.",1,"p"],
  ["4. Jan. 1642","Karl dringt ins Unterhaus ein","Mit bewaffneten Soldaten will er fünf Abgeordnete (u. a. Pym und Hampden) verhaften. Sie sind gewarnt und geflohen. Gewalt gegen das Parlament zerstört das letzte Vertrauen, Karl verlässt London.",1,"k"],
  ["März–Juni 1642","Miliz-Verordnung und 19 Forderungen","Das Parlament übernimmt ohne den König die Kontrolle über die Miliz. In den Nineteen Propositions verlangt es Mitsprache bei Ministern, Armee und Kirche. Karl lehnt ab.",0,"p"]
 ]},
 {name:"Bürgerkriege und Prozess",span:"1642–1649",bg:"--e5",note:"Kavaliere (König) gegen Rundköpfe (Parlament). Am Ende verurteilt die Armee den König.",ev:[
  ["22. Aug. 1642","Beginn des Bürgerkriegs","Karl hisst in Nottingham seine Fahne. Kavaliere (Adel, Anglikaner, Norden und Westen) gegen Rundköpfe (Puritaner, London, Kaufleute, Süden und Osten, die Flotte).",1,"n"],
  ["Okt. 1642","Schlacht bei Edgehill","Die erste große Schlacht endet unentschieden. Der Krieg wird lang.",0,"n"],
  ["1643","Bündnis mit den Schotten","Im Solemn League and Covenant verbündet sich das Parlament mit den Schotten. Gegenleistung: eine Kirchenreform nach presbyterianischem Vorbild.",0,"p"],
  ["2. Juli 1644","Schlacht bei Marston Moor","Parlament und Schotten siegen, Nordengland ist für den König verloren. Cromwells Reiterei (die „Ironsides“) entscheidet die Schlacht.",1,"p"],
  ["1645","New Model Army","Neue Berufsarmee des Parlaments: regelmäßiger Sold, Beförderung nach Leistung statt Herkunft, stark puritanisch. Oberbefehl Thomas Fairfax, Reiterei Oliver Cromwell.",1,"p"],
  ["14. Juni 1645","Schlacht bei Naseby","Entscheidender Sieg der New Model Army. Erbeutete Briefe zeigen: Karl wollte Truppen aus Irland und dem Ausland holen.",1,"p"],
  ["Mai 1646","Karl ergibt sich den Schotten","Ende des Ersten Bürgerkriegs. 1647 liefern die Schotten ihn gegen Geld an das Parlament aus.",0,"p"],
  ["1647","Streit unter den Siegern","Parlament und Armee streiten. Die Armee nimmt den König in ihre Gewalt, radikale Levellers fordern das Wahlrecht für alle Männer (Putney Debates). Karl flieht und verbündet sich heimlich mit den Schotten.",0,"n"],
  ["1648","Zweiter Bürgerkrieg","Aufstände von Royalisten und ein schottisches Heer. Cromwell siegt bei Preston (August). Für die Armee ist Karl jetzt ein „Mann des Blutes“, der den Krieg erneut verschuldet hat.",1,"p"],
  ["6. Dez. 1648","Pride's Purge","Soldaten unter Oberst Thomas Pride hindern über 100 Abgeordnete, die noch mit dem König verhandeln wollen, am Betreten des Parlaments. Übrig bleibt das Rumpfparlament.",1,"p"],
  ["Jan. 1649","Prozess gegen den König","Das Rumpfparlament setzt einen Sondergerichtshof ein (Vorsitz John Bradshaw). Anklage: Hochverrat gegen das Volk. Karl erkennt das Gericht nicht an. Am 27. Januar wird er zum Tode verurteilt, 59 Richter unterschreiben, darunter Cromwell.",1,"p"],
  ["30. Jan. 1649","Hinrichtung Karls I.","Vor dem Banqueting House in Whitehall (London) enthauptet. Erstmals verurteilt ein Gericht im Namen des Volkes seinen König. Ein Schock für ganz Europa.",1,"p"]
 ]},
 {name:"Danach: Cromwell und die Republik",span:"1649–1660",bg:"--gold-soft",note:"Erst Republik, dann Militärdiktatur, am Ende kommt der König zurück.",ev:[
  ["März–Mai 1649","Republik: Commonwealth of England","Monarchie und House of Lords werden abgeschafft, England wird Republik. Formell regiert das Rumpfparlament mit einem Staatsrat, tatsächlich die Armee.",1,"p"],
  ["1649/50","Cromwell in Irland","Er schlägt den Widerstand der irischen Katholiken und Royalisten brutal nieder (Massaker von Drogheda und Wexford). Viel Land wird enteignet und an Protestanten gegeben.",1,"n"],
  ["1650/51","Siege über die Schotten","Die Schotten krönen Karls Sohn zum König Karl II. Cromwell siegt bei Dunbar (1650) und Worcester (3. Sept. 1651). Karl II. flieht nach Frankreich.",0,"n"],
  ["1651","Navigationsakte","Waren dürfen nur auf englischen Schiffen oder Schiffen des Herkunftslandes nach England. Richtet sich gegen den niederländischen Handel und führt zum Krieg mit den Niederlanden (1652–54).",0,"n"],
  ["20. Apr. 1653","Cromwell jagt das Rumpfparlament davon","Mit Soldaten löst er das Parlament auf, weil es keine Reformen und Neuwahlen zustande bringt. Ein ernanntes Parlament frommer Männer (Barebone's Parliament) scheitert nach wenigen Monaten.",1,"n"],
  ["16. Dez. 1653","Cromwell wird Lordprotektor","Grundlage ist das Instrument of Government, die erste und einzige geschriebene Verfassung Englands. Formal teilen sich Protektor, Staatsrat und Parlament die Macht, tatsächlich entscheidet die Armee.",1,"n"],
  ["1655–1657","Herrschaft der Generalmajore","England wird in Militärbezirke unter Generalmajoren aufgeteilt. Puritanische Sittengesetze: Theater geschlossen, Pferderennen, Wirtshäuser und Feste (sogar Weihnachten) eingeschränkt. Sehr unbeliebt.",1,"n"],
  ["1657","Cromwell lehnt die Krone ab","Das Parlament bietet ihm in der Humble Petition and Advice den Königstitel an. Er lehnt ab, weil die Armee dagegen ist, darf aber seinen Nachfolger bestimmen. Ein König in allem außer dem Namen.",0,"n"],
  ["3. Sept. 1658","Cromwell stirbt","Sein Sohn Richard wird Lordprotektor, hat aber keinen Rückhalt in der Armee und tritt 1659 zurück. Es droht Chaos.",1,"n"],
  ["1660","Monck und die Restauration","General George Monck zieht mit seinem Heer aus Schottland nach London und sorgt für freie Wahlen. Karl II. verspricht in der Erklärung von Breda Straffreiheit und Zusammenarbeit mit dem Parlament. Am 29. Mai 1660 zieht er in London ein.",1,"k"],
  ["30. Jan. 1661","Rache an den Toten","Am 12. Jahrestag der Hinrichtung Karls I. wird Cromwells Leiche ausgegraben und symbolisch gehängt, sein Kopf auf eine Stange gesteckt. Mehrere Königsmörder werden hingerichtet.",0,"k"]
 ]}
];
const KEV=KZ.flatMap((e,ei)=>e.ev.map(([d,t,x,star,side],i)=>({d,t,x,star,side,ei,yr:+d.match(/\d{4}/)[0]})));
KEV.forEach((e,i)=>e.i=i);

/* ---------- Personen ---------- [Name, Rolle, Erklärung] */
const KP=[
 ["Jakob I.","König 1603–1625","Erster Stuart auf dem englischen Thron, vorher schon Jakob VI. von Schottland. Vertritt das Gottesgnadentum."],
 ["Karl I.","König 1625–1649","Sohn Jakobs. Regiert 1629–1640 ohne Parlament, verliert den Bürgerkrieg, wird 1649 hingerichtet."],
 ["Henrietta Maria","Königin, Frau Karls I.","Katholische französische Prinzessin. Weckt die Angst vor katholischem Einfluss am Hof."],
 ["Herzog von Buckingham","Favorit von Jakob I. und Karl I.","George Villiers. Verantwortlich für die gescheiterten Kriege gegen Spanien und Frankreich. 1628 ermordet."],
 ["William Laud","Erzbischof von Canterbury ab 1633","Setzt hochkirchliche Formen durch und verfolgt Puritaner. 1641 eingesperrt, 1645 hingerichtet."],
 ["Earl of Strafford","Wichtigster Berater Karls","Thomas Wentworth. Regiert hart in Irland. 1641 auf Druck des Langen Parlaments hingerichtet."],
 ["John Pym","Anführer des Langen Parlaments","Organisiert den Widerstand 1640–1642, treibt die Grand Remonstrance voran. Einer der fünf Abgeordneten."],
 ["John Hampden","Abgeordneter","Verweigert das Ship Money (Prozess 1637/38). Einer der fünf Abgeordneten, fällt 1643 im Krieg."],
 ["Oliver Cromwell","Feldherr, Lordprotektor 1653–1658","Puritanischer Landadliger aus dem Unterhaus. Führt die Reiterei der New Model Army, treibt die Hinrichtung des Königs voran und regiert ab 1653 als Militärdiktator."],
 ["Thomas Fairfax","Oberbefehlshaber der New Model Army","Siegt bei Naseby 1645. Lehnt die Hinrichtung des Königs ab."],
 ["Thomas Pride","Oberst der Armee","Säubert am 6. Dezember 1648 das Parlament (Pride's Purge)."],
 ["John Bradshaw","Richter","Vorsitzender des Gerichts, das Karl I. im Januar 1649 zum Tode verurteilt."],
 ["Richard Cromwell","Lordprotektor 1658–1659","Sohn Olivers. Ohne Rückhalt in der Armee, tritt nach wenigen Monaten zurück."],
 ["George Monck","General","Zieht 1660 aus Schottland nach London und ebnet den Weg zur Restauration."],
 ["Karl II.","König 1660–1685","Sohn Karls I. Flieht 1651 nach Frankreich, kehrt 1660 zurück (Restauration)."]
];

/* ---------- Begriffe ---------- [Begriff, Zeit, Bedeutung] */
const KB=[
 ["Gottesgnadentum (Divine Right of Kings)","","Der König hat seine Macht direkt von Gott und ist nur Gott Rechenschaft schuldig, nicht dem Parlament oder dem Volk."],
 ["Steuerbewilligungsrecht","","Nur das Parlament darf neue Steuern erlauben. Die wichtigste Waffe des Parlaments gegen den König, begründet mit der Magna Carta (1215)."],
 ["Magna Carta","1215","Urkunde, in der König Johann dem Adel Rechte garantierte, z. B. keine Abgaben ohne Zustimmung und keine Haft ohne Urteil. Das Parlament beruft sich im 17. Jh. immer wieder darauf."],
 ["Puritaner","","Strenge Protestanten, die die anglikanische Kirche von allem „Katholischen“ reinigen wollen (lat. purus = rein). Stark im Unterhaus und in der Armee."],
 ["Tonnage and Poundage","1625","Zölle auf Wein und andere Waren. Das Parlament bewilligt sie Karl nur für ein Jahr, er erhebt sie trotzdem weiter."],
 ["Forced Loan (Zwangsanleihe)","1626/27","„Darlehen“, das Karl ohne Parlament von den Untertanen verlangt. In Wahrheit eine Steuer. Verweigerer kommen ohne Anklage in Haft."],
 ["Petition of Right","1628","Bittschrift des Parlaments: keine Steuern ohne Parlament, keine Haft ohne Anklage, keine Zwangseinquartierung, kein Kriegsrecht im Frieden. Karl stimmt zu, hält sich aber nicht daran."],
 ["Personal Rule / Elfjährige Tyrannei","1629–1640","Die elf Jahre, in denen Karl I. ohne Parlament regiert."],
 ["Ship Money","1634–1640","Alte Abgabe der Küstenorte zum Bau von Kriegsschiffen. Karl verlangt sie jedes Jahr von ganz England. 1641 vom Langen Parlament verboten."],
 ["Star Chamber","bis 1641","Königliches Sondergericht ohne Geschworene. Bestraft Kritiker des Königs und der Kirche hart. 1641 abgeschafft."],
 ["National Covenant","1638","Schwur der Schotten, ihre presbyterianische Kirche gegen Karls Gebetbuch zu verteidigen."],
 ["Presbyterianer","","Protestanten (v. a. in Schottland), deren Kirche nicht von Bischöfen, sondern von gewählten Ältesten (Presbytern) geleitet wird."],
 ["Kurzes Parlament","April–Mai 1640","Parlament, das Karl für den Krieg gegen die Schotten einberuft und nach drei Wochen wieder auflöst."],
 ["Langes Parlament","1640–1660","Parlament ab November 1640. Baut Karls Herrschaft ab, führt den Bürgerkrieg. Nach 1648 nur noch als Rumpfparlament."],
 ["Triennial Act","1641","Gesetz: Spätestens alle drei Jahre muss ein Parlament zusammentreten."],
 ["Bill of Attainder","1641","Gesetz, mit dem das Parlament jemanden ohne normalen Prozess zum Tode verurteilt. So wird Strafford hingerichtet."],
 ["Grand Remonstrance","1641","Große Beschwerdeschrift des Unterhauses mit über 200 Vorwürfen gegen Karls Regierung. Nur knapp angenommen, das Parlament spaltet sich."],
 ["Nineteen Propositions","1642","19 Forderungen des Parlaments: Kontrolle über Minister, Armee und Kirche. Karl lehnt ab, kurz danach beginnt der Krieg."],
 ["Kavaliere","1642–1651","Anhänger des Königs (Royalisten): großer Teil des Adels, Anglikaner, Katholiken, Norden und Westen."],
 ["Rundköpfe","1642–1651","Anhänger des Parlaments: Puritaner, viele aus Gentry und Bürgertum, London, Süden und Osten. Name nach dem kurzen Haarschnitt."],
 ["New Model Army","1645","Berufsarmee des Parlaments: regelmäßiger Sold, Beförderung nach Leistung, puritanisch. Siegt bei Naseby. Wird später selbst zur politischen Macht."],
 ["Levellers","1647","Radikale Gruppe in der Armee („Gleichmacher“). Fordern Wahlrecht für alle Männer und Gleichheit vor dem Gesetz (Putney Debates)."],
 ["Pride's Purge","1648","„Säuberung“ des Parlaments durch Oberst Pride: Über 100 verhandlungsbereite Abgeordnete werden ausgeschlossen."],
 ["Rumpfparlament","1648–1653","Der Rest des Langen Parlaments nach Pride's Purge. Verurteilt den König und ruft die Republik aus."],
 ["Hochverrat","1649","Verbrechen gegen den Staat. Neu war: Karl wird wegen Verrats am Volk angeklagt, nicht wegen Verrats am König."],
 ["Commonwealth","1649–1653","Die englische Republik ohne König und House of Lords. Tatsächlich herrscht die Armee."],
 ["Lordprotektor","1653–1659","Titel Cromwells (und kurz seines Sohnes Richard) als Staatsoberhaupt auf Lebenszeit."],
 ["Instrument of Government","1653","Erste und einzige geschriebene Verfassung Englands. Macht Cromwell zum Lordprotektor."],
 ["Generalmajore","1655–1657","Offiziere, die unter Cromwell die Militärbezirke Englands regieren und puritanische Sittengesetze durchsetzen."],
 ["Restauration","1660","Wiederherstellung der Monarchie mit Karl II., auch House of Lords und anglikanische Kirche kehren zurück."],
 ["Traditionsquelle","Methode","Quelle, die bewusst für andere oder die Nachwelt verfasst wurde (z. B. Petition, Rede, Chronik). Gegenteil: Überrestquelle."]
];

/* ---------- Ansichten ---------- */
const $=id=>document.getElementById(id);

/* Zeitstrahl */
const kevLi=([d,t,x,star,side])=>`<li class="ev ${side}${star?" big":""}"><span class="node ${side}"></span><div class="card"><span class="yr">${d}</span><h3>${t}</h3><p>${x}</p></div></li>`;
$("k-zeit").innerHTML=`
  <div class="legend"><span><i class="dot k"></i>König handelt</span><span><i class="dot p"></i>Parlament / Armee handelt</span><span><i class="dot n"></i>Krieg, Kirche, Cromwell</span><span><b style="color:var(--gold)">★</b> Pflichtdatum</span></div>
  <div class="row"><button id="konly" class="toggle" aria-pressed="false" type="button">Nur Pflichtdaten ★</button></div>
  <div class="erachips">${KZ.map((e,i)=>`<a href="#kera${i}" style="--ec:var(${e.bg})">${e.span}</a>`).join("")}</div>
  ${KZ.map((e,i)=>`<section class="era" id="kera${i}" style="--eb:var(${e.bg})">
    <div class="era-head"><h2>${e.name}</h2><span class="span">${e.span}</span><p>${e.note}</p></div>
    <ol class="spine">${e.ev.map(kevLi).join("")}</ol></section>`).join("")}
  <div class="result"><b>Roter Faden:</b> Gottesgnadentum gegen ererbte Rechte, ausgetragen über das Geld. Karl bricht sein Wort (1628), regiert ohne Parlament (1629–40), scheitert an Schottland (1637–40), greift das Parlament an (1642), verliert den Krieg und wird 1649 hingerichtet. Danach herrscht nicht das Parlament, sondern Cromwells Armee. 1660 kommt der König zurück.</div>`;
function kOnly(on){$("k-zeit").classList.toggle("only",on);$("konly").setAttribute("aria-pressed",on);store.set("konly",on)}
$("konly").onclick=e=>kOnly(e.currentTarget.getAttribute("aria-pressed")!=="true");
kOnly(store.get("konly",false));

/* Lernzettel */
$("k-lern").innerHTML=`<p class="tip" style="margin:0">Die ganze Geschichte von 1603 bis 1660 am Stück. Fett ist, was du in der Klausur nennen solltest. Unten: Ursachen, Personen und die Gründe auf einen Blick.</p>
<div class="erachips tx-chips"><a href="#kl0">1603–1625</a><a href="#kl1">1625–1629</a><a href="#kl2">1629–1640</a><a href="#kl3">1637–1642</a><a href="#kl4">1642–1646</a><a href="#kl5">1646–1649</a><a href="#kl6">Cromwell</a><a href="#kl7">Ursachen</a><a href="#kl8">Personen</a><a href="#kl9">Kurz</a></div>

<section class="tx" id="kl0"><span class="tx-y">1603–1625 · Jakob I.</span><h2>Gottesgnadentum gegen ererbte Rechte</h2>
<p>1603 stirbt Elisabeth I. kinderlos, die Tudors enden. Ihr Nachfolger ist der schottische König <b>Jakob VI.</b>, der als <b>Jakob I.</b> nun beide Länder regiert (Personalunion). Er bringt aus Schottland eine feste Überzeugung mit: das <b>Gottesgnadentum (Divine Right of Kings)</b>. Der König hat seine Macht direkt von Gott, steht über den Gesetzen und ist nur Gott Rechenschaft schuldig. Das Parlament darf beraten, aber nicht mitbestimmen.</p>
<p>Das <b>Unterhaus</b> sieht das anders. Es beruft sich auf die <b>Magna Carta (1215)</b>, das Common Law und jahrhundertelange Praxis: Seine Rechte, vor allem das <b>Steuerbewilligungsrecht</b> und die Redefreiheit, sind <b>ererbt</b> und kein Geschenk des Königs (<b>Apology 1604</b>). Zwei Rechtsauffassungen stehen sich gegenüber, die nicht zusammenpassen.</p>
<p>Dazu kommt das <b>Geld</b>: Die Preise steigen, die Einnahmen der Krone schrumpfen, und Jakobs Hof ist verschwenderisch. Neue Steuern kann nur das Parlament bewilligen, und das verlangt dafür Mitsprache. Jakob löst Parlamente im Streit auf (1614, 1621). Und es gibt die <b>Religion</b>: Die <b>Puritaner</b> wollen die anglikanische Kirche von allem „Katholischen“ reinigen, Jakob hält an den Bischöfen fest. Die <b>Pulververschwörung 1605</b> verstärkt die Angst vor Katholiken.</p></section>

<section class="tx" id="kl1"><span class="tx-y">1625–1629 · Karl I.</span><h2>Kriege, Geldnot und die Petition of Right</h2>
<p>1625 wird <b>Karl I.</b> König. Er glaubt noch fester an das Gottesgnadentum als sein Vater, ist aber steif und wenig geschickt im Umgang mit Menschen. Er heiratet die katholische Französin <b>Henrietta Maria</b> und vertraut ganz seinem Favoriten, dem <b>Herzog von Buckingham</b>. Beides macht ihn bei Protestanten verdächtig.</p>
<p>Karl führt <b>teure, erfolglose Kriege</b> gegen <b>Spanien</b> (Cádiz 1625) und <b>Frankreich</b> (Île de Ré 1627). Das Parlament bewilligt zu wenig Geld und die Zölle nur für ein Jahr. Karl hilft sich selbst: Er verlangt eine <b>Zwangsanleihe (Forced Loan)</b>, lässt Zahlungsverweigerer <b>ohne Anklage einsperren</b>, <b>quartiert Soldaten bei Bürgern ein</b> und verhängt <b>Kriegsrecht</b>.</p>
<p>1628 braucht er wieder Geld. Das Parlament nutzt die Notlage als Druckmittel: Erst wenn Karl die <b>Petition of Right (7. Juni 1628)</b> annimmt, bewilligt es Steuern. Sie verbietet genau seine Methoden: Steuern und Darlehen ohne Parlamentsbeschluss, willkürliche Haft, Zwangseinquartierung und Kriegsrecht im Frieden. Karl stimmt zu, <b>hält sich aber nicht daran</b> und erhebt die Zölle weiter. Als Abgeordnete im März 1629 den Sprecher festhalten, um Beschlüsse gegen ihn zu fassen, <b>löst Karl das Parlament auf</b>.</p></section>

<section class="tx" id="kl2"><span class="tx-y">1629–1640 · Persönliche Herrschaft</span><h2>Elf Jahre ohne Parlament</h2>
<p>Karl regiert jetzt <b>ohne Parlament</b> („Personal Rule“, seine Gegner sagen <b>„Eleven Years' Tyranny“</b>). Er schließt Frieden mit Frankreich und Spanien, denn ohne Krieg braucht er weniger Geld. Den Rest holt er sich über <b>alte, vergessene Abgaben</b>: Strafen für Adlige, die sich nicht zum Ritter schlagen ließen, Strafen für Bauten in alten königlichen Wäldern, Verkauf von Monopolen und vor allem das <b>Ship Money</b>. Diese Flottenabgabe zahlten früher nur Küstenorte im Krieg. Ab <b>1635</b> verlangt Karl sie <b>jedes Jahr von ganz England</b>, also eine Steuer ohne Parlament. Als <b>John Hampden</b> nicht zahlt, gewinnt der König den Prozess 1637/38 nur knapp mit 7 zu 5 Richterstimmen.</p>
<p>In der Kirche setzt Erzbischof <b>William Laud</b> (ab 1633) eine hochkirchliche Linie durch: Altäre, Zeremonien, prunkvolle Gottesdienste. Für Puritaner ist das verkappter Katholizismus. Kritiker werden vom Sondergericht <b>Star Chamber</b> hart bestraft. Die Unzufriedenheit wächst, aber ohne Parlament hat sie keine Stimme.</p></section>

<section class="tx" id="kl3"><span class="tx-y">1637–1642 · Der Weg in den Krieg</span><h2>Schottland, Langes Parlament, Bruch</h2>
<p>Den Anstoß gibt <b>Schottland</b>. 1637 zwingt Karl den presbyterianischen Schotten das <b>anglikanische Gebetbuch</b> auf. Die Schotten schwören im <b>National Covenant (1638)</b>, ihre Kirche zu verteidigen. In den <b>Bischofskriegen (1639/40)</b> hat Karl kein Geld für eine richtige Armee und verliert. Er muss das Parlament einberufen: Das <b>Kurze Parlament</b> (April 1640) will zuerst über Beschwerden reden und wird nach drei Wochen aufgelöst. Nachdem die Schotten Nordengland besetzt haben, kommt im November 1640 das <b>Lange Parlament</b>.</p>
<p>Unter <b>John Pym</b> baut es die persönliche Herrschaft ab: Karls Berater <b>Strafford wird 1641 hingerichtet</b>, Laud eingesperrt. Der <b>Triennial Act</b> schreibt vor, dass spätestens alle drei Jahre ein Parlament tagt, und dieses Parlament darf nicht ohne eigene Zustimmung aufgelöst werden. <b>Ship Money wird verboten</b>, die Sondergerichte wie die Star Chamber werden abgeschafft. Bis hierhin ist sich das Parlament fast einig.</p>
<p>Dann spaltet es sich. Nach dem <b>Aufstand in Irland</b> (Oktober 1641) braucht man ein Heer, aber keine Seite traut der anderen den Oberbefehl an. Die <b>Grand Remonstrance</b> (November 1641) listet alle Missstände auf und wird nur knapp angenommen, gemäßigte Abgeordnete wechseln zum König. Am <b>4. Januar 1642</b> dringt Karl mit Soldaten ins Unterhaus ein, um <b>fünf Abgeordnete</b> (darunter Pym und Hampden) zu verhaften. Sie sind gewarnt und geflohen. Der König hat Gewalt gegen das Parlament angewendet. Er verlässt London, beide Seiten rüsten auf. Am <b>22. August 1642</b> hisst er in Nottingham seine Fahne: <b>Der Bürgerkrieg beginnt.</b></p></section>

<section class="tx" id="kl4"><span class="tx-y">1642–1646 · Erster Bürgerkrieg</span><h2>Kavaliere gegen Rundköpfe</h2>
<p>Für den König kämpfen die <b>Kavaliere</b> (Royalisten): ein großer Teil des Adels, Anglikaner, Katholiken, der Norden und Westen. Für das Parlament die <b>Rundköpfe</b>: Puritaner, viele aus Gentry und Bürgertum, <b>London</b> mit seinen Kaufleuten, der reiche Süden und Osten und die <b>Flotte</b>. Das Parlament hat damit das meiste Geld.</p>
<p>Nach dem Unentschieden bei <b>Edgehill (1642)</b> verbündet sich das Parlament 1643 mit den <b>Schotten</b>. 1644 siegen sie bei <b>Marston Moor</b>, entscheidend ist die Reiterei von <b>Oliver Cromwell</b>. 1645 gründet das Parlament die <b>New Model Army</b>: eine Berufsarmee mit regelmäßigem Sold, Beförderung nach Leistung statt nach Herkunft und starkem puritanischem Glauben. Bei <b>Naseby (14. Juni 1645)</b> vernichtet sie das Heer des Königs. 1646 ergibt sich Karl den Schotten, die ihn 1647 an das Parlament ausliefern.</p></section>

<section class="tx" id="kl5"><span class="tx-y">1646–1649 · Vom Sieg zur Hinrichtung</span><h2>Warum der König sterben musste</h2>
<p>Nach dem Sieg streiten die Gewinner. Das <b>Parlament</b> will sich mit dem König einigen und eine presbyterianische Staatskirche. Die <b>Armee</b> will Religionsfreiheit und ihren Sold, die radikalen <b>Levellers</b> fordern sogar das Wahlrecht für alle Männer (<b>Putney Debates 1647</b>). Karl spielt beide Seiten gegeneinander aus und verbündet sich heimlich mit den Schotten. Das führt <b>1648</b> zum <b>Zweiten Bürgerkrieg</b>, den Cromwell bei <b>Preston</b> gewinnt.</p>
<p>Jetzt hält die Armee Karl für einen „Mann des Blutes“, dem man nie mehr trauen kann. Bei <b>Pride's Purge (6. Dezember 1648)</b> hindern Soldaten über hundert verhandlungsbereite Abgeordnete am Betreten des Parlaments. Das übrige <b>Rumpfparlament</b> richtet einen Sondergerichtshof ein. Die Anklage lautet auf <b>Hochverrat gegen das englische Volk</b>. Karl erkennt das Gericht nicht an, weil kein irdisches Gericht über einen König urteilen dürfe, und verteidigt sich nicht. Am <b>30. Januar 1649</b> wird er vor dem Banqueting House in Whitehall <b>enthauptet</b>. Ein König, verurteilt in einem Prozess im Namen des Volkes: Das hat es in Europa noch nie gegeben.</p></section>

<section class="tx" id="kl6"><span class="tx-y">1649–1660 · Danach</span><h2>Cromwell: Republik, Militärdiktatur, Rückkehr des Königs</h2>
<p>Im Frühjahr 1649 schafft das Rumpfparlament <b>Monarchie und House of Lords</b> ab. England wird eine <b>Republik</b>, das <b>Commonwealth</b>. Die eigentliche Macht hat aber die <b>Armee</b> mit <b>Oliver Cromwell</b> an der Spitze. Er schlägt <b>Irland</b> (Drogheda, Wexford 1649) und <b>Schottland</b> (Dunbar 1650, Worcester 1651) brutal nieder. Karl II., der Sohn des Hingerichteten, flieht nach Frankreich. Die <b>Navigationsakte 1651</b> stärkt den englischen Handel gegen die Niederländer.</p>
<p>Weil das Rumpfparlament keine Reformen und Neuwahlen zustande bringt, <b>jagt Cromwell es 1653 mit Soldaten davon</b>. Nach dem <b>Instrument of Government</b>, der ersten geschriebenen Verfassung Englands, wird er im Dezember 1653 <b>Lordprotektor</b> auf Lebenszeit. Tatsächlich ist das eine <b>Militärdiktatur</b>: Ab 1655 regieren <b>Generalmajore</b> die Regionen, puritanische Sittengesetze schließen Theater und schränken Feste ein. 1657 bietet ihm das Parlament die <b>Königskrone</b> an. Cromwell lehnt ab, darf aber seinen Nachfolger bestimmen.</p>
<p>Nach Cromwells Tod am <b>3. September 1658</b> wird sein Sohn <b>Richard</b> Lordprotektor, findet aber keinen Rückhalt in der Armee und tritt 1659 zurück. Es droht Chaos. General <b>George Monck</b> zieht 1660 mit seinem Heer aus Schottland nach London und sorgt für Wahlen. Das neue Parlament holt <b>Karl II.</b> zurück (<b>Restauration, 29. Mai 1660</b>). Cromwells Leiche wird 1661 ausgegraben und symbolisch hingerichtet. Die Lehre: Ohne König endete England nicht in der Herrschaft des Parlaments, sondern in der Herrschaft der Armee.</p></section>

<section class="tx" id="kl7"><span class="tx-y">Auf einen Blick</span><h2>Ursachen, Gründe, Folgen</h2>
<div class="step"><span class="afb">Ursachen des Konflikts (typisch für Aufgabe 1)</span><ul>
<li><b>Ideologisch:</b> Gottesgnadentum der Stuarts gegen die ererbten Rechte des Parlaments (Magna Carta, Common Law, Apology 1604).</li>
<li><b>Finanziell:</b> Geldnot der Krone (Preisanstieg, teurer Hof, Kriege gegen Spanien und Frankreich). Nur das Parlament darf Steuern bewilligen.</li>
<li><b>Religiös:</b> Puritaner gegen Lauds Hochkirche, Angst vor Katholiken (katholische Königin, Pulververschwörung 1605, Irland 1641).</li>
<li><b>Persönlich:</b> Karls Starrsinn, seine Wortbrüche (Petition of Right) und seine Favoriten (Buckingham, Strafford).</li>
<li><b>Auslöser:</b> Gebetbuch für Schottland 1637, Aufstand in Irland 1641, Karls Sturm aufs Unterhaus am 4. Januar 1642.</li></ul></div>
<div class="step" style="margin-top:10px"><span class="afb">Warum gewinnt das Parlament den Krieg?</span><ul>
<li>London, die Kaufleute und der reiche Süden und Osten bringen Geld, die Flotte steht beim Parlament.</li>
<li>Bündnis mit den Schotten (1643).</li>
<li>New Model Army: Berufsarmee, Leistung statt Herkunft, Glaubenseifer. Cromwell als Feldherr.</li></ul></div>
<div class="step" style="margin-top:10px"><span class="afb">Warum scheitert die Republik?</span><ul>
<li>Sie beruht auf der Macht der Armee, nicht auf Zustimmung im Volk.</li>
<li>Cromwell jagt selbst Parlamente davon, Generalmajore und puritanische Sittengesetze sind verhasst.</li>
<li>Nach Cromwells Tod gibt es keinen starken Nachfolger, es droht Chaos. Die Rückkehr des Königs verspricht Ordnung.</li></ul></div></section>

<section class="tx" id="kl8"><span class="tx-y">Wer ist wer?</span><h2>Personen</h2>
<div class="pers">${KP.map(([n,r,x])=>`<div><b>${n}</b><span>${r}</span>${x}</div>`).join("")}</div></section>

<section class="tx" id="kl9" style="border:2px solid var(--gold)"><span class="tx-y">Kurz und knapp</span><h2>Karl I. in 10 Punkten</h2>
<ol class="chk" style="padding-left:1.3em;gap:7px">
<li><b>1625</b> König. Glaubt fest an das <b>Gottesgnadentum</b>, katholische Frau, Favorit Buckingham.</li>
<li><b>Geldnot</b> durch teure, erfolglose Kriege gegen Spanien und Frankreich. Hilft sich mit <b>Zwangsanleihe</b>, Haft ohne Anklage und Einquartierung.</li>
<li><b>1628 Petition of Right:</b> Geld nur gegen Rechte (keine Steuern ohne Parlament, keine willkürliche Haft). Karl unterschreibt aus Geldnot, hält sich nicht daran.</li>
<li><b>1629–1640 elfjährige Tyrannei:</b> regiert ohne Parlament, Geld über <b>Ship Money</b>, Laud verfolgt Puritaner.</li>
<li><b>1637</b> Gebetbuch für Schottland, <b>Bischofskriege</b> verloren. Er muss das Parlament einberufen.</li>
<li><b>1640 Langes Parlament</b> (Pym): Strafford hingerichtet, Ship Money verboten, Triennial Act.</li>
<li><b>1641</b> Aufstand in Irland, <b>Grand Remonstrance</b> spaltet das Parlament.</li>
<li><b>4. Jan. 1642</b> Sturm aufs Unterhaus (5 Abgeordnete), <b>22. Aug. 1642</b> Bürgerkrieg: Kavaliere gegen Rundköpfe.</li>
<li>Cromwells <b>New Model Army</b> siegt (Marston Moor 1644, <b>Naseby 1645</b>). Karl verbündet sich mit den Schotten, <b>zweiter Bürgerkrieg 1648</b> verloren.</li>
<li><b>Pride's Purge</b> (Dez. 1648), Rumpfparlament klagt ihn wegen Hochverrats an. <b>30. Jan. 1649 hingerichtet.</b></li></ol>
<p style="margin-top:10px"><b>Danach:</b> Republik (1649), Cromwell Lordprotektor (1653) = Militärdiktatur, stirbt 1658, <b>1660 Restauration</b> mit Karl II.</p>
<p class="ex"><b>Merksatz:</b> Karl wollte ohne Parlament regieren, brauchte aber dessen Geld. Seine Wortbrüche führten erst zum Krieg und dann zu seiner Hinrichtung.</p></section>`;

/* Test & Musterlösung (nach dem Erwartungshorizont der Leistungskontrolle) */
const be=n=>` <span class="be">${n} BE</span>`;
$("k-test").innerHTML=`<p class="tip" style="margin:0">Eure Leistungskontrolle „Krone versus Parlament“ mit Musterlösung nach dem Erwartungshorizont. Erst selbst versuchen, dann aufklappen. Darunter: Quellen und Leitfragen, die in der Klausur genauso drankommen könnten.</p>

<h2 class="sec">Die Probe-Klausur</h2>
<p class="meta" style="margin:0">30 BE gesamt: 27 Inhalt + 3 Darstellung</p>
<div class="aufg"><span class="afb" style="font-size:.74rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--gold)">Aufgabe 1 · AFB I/II · 6 BE</span><h3>Historischer Kontext</h3><p>Erläutern Sie die politischen und ideologischen Ursachen, die in der ersten Hälfte des 17. Jahrhunderts zum Konflikt zwischen der Stuart-Dynastie (insbesondere unter Jakob I.) und dem englischen Parlament führten.</p></div>
<div class="aufg"><span class="afb" style="font-size:.74rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--gold)">M1 · Auszug aus der Petition of Right</span>
<p class="meta">Autor: Englisches Parlament (Ober- und Unterhaus) · Adressat: König Karl I. · 7. Juni 1628. Aus Geldnot musste Karl I. das Parlament einberufen. Es bewilligte neue Steuern erst, nachdem er das Dokument unterzeichnet hatte.</p>
<div class="src"><ol>
<li>„Wir, die geistlichen und weltlichen Lords und die Gemeinen im Parlament versammelt, machen</li>
<li>dem König untertänigst unsere Vorstellungen: Dass […] niemand künftig gezwungen werden soll,</li>
<li>irgendeine Gabe, ein Darlehen oder eine Steuer […] zu zahlen ohne gemeinsame Zustimmung</li>
<li>durch einen Parlamentsbeschluss; und dass niemand zur Ablegung eines Eides gezwungen, in</li>
<li>Haft genommen oder in anderer Weise belästigt oder beunruhigt werde, weil er sich weigert, solche</li>
<li>ungesetzlichen Abgaben zu zahlen. […]</li>
<li>Ebenso wurden in letzter Zeit große Abteilungen von Soldaten und Matrosen in verschiedene Graf-</li>
<li>schaften des Reiches verlegt, und die Einwohner wurden gegen ihren Willen gezwungen, sie in ihre</li>
<li>Häuser aufzunehmen und sie dort zu versorgen […]. Und dass kein freier Mann auf solche Weise</li>
<li>in Haft genommen oder eingekerkert werde [ohne richterlichen Beschluss und Anklage].“</li></ol></div></div>
<div class="aufg"><span class="afb" style="font-size:.74rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--gold)">Aufgabe 2 · AFB II · 12 BE</span><h3>Quellenanalyse</h3><p>a) Verfassen Sie einen vollständigen Einleitungssatz zur Quelle und fassen Sie die zentralen Forderungen des Parlaments in eigenen Worten zusammen.${be(4)}</p><p>b) Ordnen Sie die Quelle in die Regierungszeit Karls I. ein und erklären Sie konkret am Text, gegen welche absolutistischen Maßnahmen des Königs sich die Forderungen richteten.${be(8)}</p></div>
<div class="aufg"><span class="afb" style="font-size:.74rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--gold)">Aufgabe 3 · AFB III · 9 BE</span><h3>Urteilsbildung: „Die Petition of Right (1628) – Ein dauerhafter Sieg des Parlamentarismus?“</h3><p>Nehmen Sie kritisch Stellung, indem Sie ein abwägendes Werturteil formulieren. Beziehen Sie zwingend die unmittelbare Reaktion Karls I. ein (die „elfjährige Tyrannei“ ab 1629).</p></div>

<h2 class="sec">Musterlösung</h2>
<details class="entry"><summary><h3>Aufgabe 1: Historischer Kontext</h3><span class="yr">6 BE</span></summary><div class="inner ml">
<p>Der Konflikt zwischen den Stuarts und dem englischen Parlament hatte ideologische, politische und finanzielle Ursachen. Ideologisch prallten zwei Rechtsauffassungen aufeinander. Mit Jakob I., der 1603 als König von Schottland auch den englischen Thron bestieg, kam das Gottesgnadentum (Divine Right of Kings) nach England. Jakob hatte diese Lehre schon 1598 in seiner Schrift „The True Law of Free Monarchies“ dargelegt: Der König erhalte seine Macht direkt von Gott und sei deshalb nur Gott verantwortlich, nicht aber einem weltlichen Parlament.${be(2)}</p>
<p>Dieses absolutistische Verständnis kollidierte mit dem Selbstbewusstsein des Unterhauses. Gestützt auf die Magna Carta von 1215, das Common Law und jahrzehntelange Praxis beharrte es auf seinen traditionellen Mitbestimmungsrechten, vor allem auf dem Steuerbewilligungsrecht und der Redefreiheit. In der „Apology“ von 1604 erklärte es, diese Rechte seien ererbt und kein Geschenk des Königs, der sie deshalb auch nicht nehmen könne.${be(2)}</p>
<p>Verschärft wurde der Gegensatz durch die Finanzkrise der Krone. Unter Karl I. (ab 1625) verschlangen kostspielige und erfolglose Kriege gegen Spanien und Frankreich große Summen. Der König brauchte dringend Steuern, die nur das Parlament bewilligen durfte. Dieses verweigerte sie oder knüpfte sie an Bedingungen, sodass der Streit ums Geld zum Machtkampf wurde. Religiöse Spannungen zwischen den Puritanern und der katholikenfreundlich wirkenden Krone kamen hinzu.${be(2)}</p>
<div class="ex"><b>Punkte-Check:</b> Gottesgnadentum mit Jakob I. ab 1603 · Parlament beruft sich auf Magna Carta und Tradition · Geldnot und Kriege unter Karl I. ab 1625</div></div></details>

<details class="entry"><summary><h3>Aufgabe 2a: Einleitung und Inhalt</h3><span class="yr">4 BE</span></summary><div class="inner ml">
<p>Bei der vorliegenden Quelle handelt es sich um einen Auszug aus der „Petition of Right“, einer Traditionsquelle in Form einer Bittschrift, die das englische Parlament (Ober- und Unterhaus) verfasst und am 7. Juni 1628 an König Karl I. gerichtet hat. Thema ist der Schutz der Untertanen vor willkürlichen Maßnahmen der Krone.${be(2)}</p>
<p>Das Parlament fordert, dass künftig niemand mehr gezwungen werden dürfe, ohne gemeinsame Zustimmung durch einen Parlamentsbeschluss Abgaben, Darlehen oder Steuern zu zahlen (Z. 2–4). Wer sich weigere, solche ungesetzlichen Abgaben zu leisten, dürfe dafür weder zu einem Eid gezwungen noch verhaftet oder auf andere Weise bedrängt werden (Z. 4–6). Außerdem beklagt es, dass Soldaten und Matrosen gegen den Willen der Einwohner in deren Häusern einquartiert worden seien (Z. 7–9), und verlangt, dass kein freier Mann ohne richterlichen Beschluss und Anklage eingesperrt werde (Z. 9–10).${be(2)}</p>
<div class="ex"><b>Punkte-Check:</b> TATT vollständig (Traditionsquelle, Parlament, an Karl I., 7. Juni 1628, Petition of Right) · drei Verbote: Steuern ohne Parlament, willkürliche Haft, Zwangseinquartierung · Konjunktiv I und Zeilenangaben</div></div></details>

<details class="entry"><summary><h3>Aufgabe 2b: Kontext und Textarbeit</h3><span class="yr">8 BE</span></summary><div class="inner ml">
<p>Die Petition entstand in den ersten Regierungsjahren Karls I., der 1625 König wurde. Karl führte kostspielige und erfolglose Kriege gegen Spanien (Cádiz 1625) und Frankreich (Île de Ré 1627). Weil das Parlament ihm zu wenig Geld bewilligte, war er 1628 erneut in akuter Geldnot und musste es einberufen. Das Parlament nutzte diese Notlage als politisches Druckmittel: Es bewilligte neue Steuern erst, nachdem der König die Petition angenommen hatte. So setzte es bürgerliche und parlamentarische Grundrechte durch.${be(3)}</p>
<p>Die Forderung, niemand dürfe ohne Parlamentsbeschluss zu einer Gabe, einem Darlehen oder einer Steuer gezwungen werden (Z. 2–4), richtet sich direkt gegen Karls Praxis, ohne Parlament Geld einzutreiben. 1626/27 hatte er eine Zwangsanleihe (Forced Loan) verlangt, die in Wahrheit eine Steuer war, und die Zölle ohne Bewilligung weiter erhoben. Wer nicht zahlte, wurde ohne Anklage ins Gefängnis geworfen, wie im Fall der fünf Ritter 1627. Dagegen wenden sich Z. 4–6 und die Forderung, kein freier Mann dürfe ohne richterlichen Beschluss eingekerkert werden (Z. 9–10). Das Parlament verlangt damit ein ordentliches Verfahren, wie es schon die Magna Carta garantiert hatte.${be("2,5")}</p>
<p>Die Klage über die Einquartierung von Soldaten und Matrosen (Z. 7–9) kritisiert die militärische Last, die aus Karls verlustreichen und teuren Kriegen entstand. Die Truppen für die Feldzüge wurden bei der Zivilbevölkerung untergebracht, die sie gegen ihren Willen versorgen musste. Teilweise setzte Karl die Einquartierung sogar gezielt als Strafe gegen Zahlungsverweigerer ein. Insgesamt macht die Quelle deutlich, dass das Parlament nicht nur einzelne Missstände beklagt, sondern grundsätzlich festhält: Auch der König steht nicht über dem Gesetz.${be("2,5")}</p>
<div class="ex"><b>Punkte-Check:</b> Geldnot Karls als Druckmittel des Parlaments · Steuer und Haft ↔ Zwangsanleihe und Verhaftung von Verweigerern · Militär ↔ Einquartierung durch die teuren Kriege · jeweils mit Zeilenangabe</div></div></details>

<details class="entry"><summary><h3>Aufgabe 3: Urteil</h3><span class="yr">9 BE</span></summary><div class="inner ml">
<p>Ob die Petition of Right ein dauerhafter Sieg des Parlamentarismus war, lässt sich nur beantworten, wenn man ihre kurzfristige und ihre langfristige Wirkung unterscheidet.</p>
<p>Für einen Sieg spricht, dass die Petition ein Meilenstein der englischen Verfassungsgeschichte ist. Zum ersten Mal zwang das Parlament einen Stuart-König formell, grundlegende Rechte der Untertanen anzuerkennen: keine Steuern ohne Parlament, keine Haft ohne Anklage, keine Zwangseinquartierung. Damit festigte es seine Steuerhoheit und stellte klar, dass auch der König an das Recht gebunden ist. Das widersprach direkt dem Gottesgnadentum.${be(3)}</p>
<p>Gegen einen dauerhaften Sieg spricht vor allem die unmittelbare Reaktion Karls I. Er hatte nur aus akuter Geldnot unterschrieben und hielt sich nicht an das Dokument. Er erhob die Zölle weiter, und als das Unterhaus 1629 dagegen protestierte, löste er das Parlament auf. Elf Jahre lang regierte er völlig autokratisch ohne Parlament („Eleven Years' Tyranny“, 1629–1640) und finanzierte sich über alte Abgaben, vor allem das ab 1635 auf ganz England ausgeweitete Ship Money. Die Petition enthielt keine Mittel, um ihre Einhaltung zu erzwingen.${be(3)}</p>
<p>Kurzfristig war die Petition of Right deshalb kein Sieg, denn sie konnte die elfjährige Tyrannei nicht verhindern. Langfristig zog sie jedoch eine rote Linie für die Rechte des Parlaments. Dass Karl sie immer wieder überschritt, führte 1642 zum Englischen Bürgerkrieg, 1649 zur Hinrichtung des Königs und schließlich, mit der Bill of Rights 1689, zur endgültigen Durchsetzung des Parlamentarismus. Aus heutiger Sicht ist die Petition positiv zu bewerten, weil sie Grundsätze formulierte, die in jedem Rechtsstaat gelten: keine Steuern ohne gewählte Vertretung und keine Freiheitsentziehung ohne Richter (vgl. Art. 104 GG). Sie war also kein dauerhafter Sieg, aber der Anfang des Weges dorthin.${be(3)}</p>
<div class="ex"><b>Punkte-Check:</b> Pro: Meilenstein, König formell gebunden, Steuerhoheit · Kontra: nur aus Geldnot unterschrieben, Auflösung 1629, elf Jahre ohne Parlament, Ship Money · Fazit: kurzfristig kein Sieg, langfristig rote Linie → 1642 Bürgerkrieg → 1649 Hinrichtung → Parlamentarismus</div></div></details>

<div class="step"><span class="afb">Darstellungsleistung · 3 BE</span><h3>So holst du die Form-Punkte</h3><ul>
<li>Alles im <b>strukturierten Fließtext</b>, ein Absatz pro Gedanke, keine Stichpunkte.</li>
<li><b>Fachbegriffe</b> benutzen: Gottesgnadentum, Absolutismus, Steuerbewilligungsrecht, Traditionsquelle, Personal Rule.</li>
<li>Quellenwiedergabe im <b>Konjunktiv I</b> („Das Parlament fordere …“), Zeitform <b>Präsens</b>.</li>
<li>Jede Aussage mit <b>Zeilenangabe</b> belegen (Z. 2–4) oder kurz zitieren.</li>
<li><b>Operatoren</b> beachten: erläutern (mit Beispielen erklären), zusammenfassen (eigene Worte), einordnen (Kontext), Stellung nehmen (Pro, Kontra, Fazit).</li></ul></div>

<h2 class="sec">Quellen, die drankommen könnten</h2>
<p class="tip" style="margin:0">Für jede: TATT-Satz und Kontext stehen schon. Jakob I. 1598 und die Apology 1604 findest du im Unterricht unter „Kurz“.</p>
${[
 ["Ship-Money-Befehl","1634/35","Karl I. an die Sheriffs der Grafschaften","Königlicher Befehl (Writ)","Das Königreich sei durch Piraten und feindliche Flotten bedroht. Darum solle jede Grafschaft ein ausgerüstetes Kriegsschiff stellen oder das Geld dafür zahlen.","Personal Rule ohne Parlament. Mit dem Notstand begründet Karl eine jährliche Steuer für ganz England, auch im Frieden. Bricht die Petition of Right. Hampden-Prozess 1637/38, 1641 vom Langen Parlament verboten."],
 ["Grand Remonstrance","22. Nov. 1641","Unterhaus, an den König und gedruckt fürs Volk","Beschwerdeschrift","Seit 1625 habe eine böswillige Partei aus Katholiken, Bischöfen und schlechten Ratgebern das Land beherrscht. Aufgezählt werden Steuern ohne Parlament, Sondergerichte und Kirchenpolitik. Gefordert werden Minister, denen das Parlament vertraut, und eine Kirchenreform.","Langes Parlament nach dem Irland-Aufstand. Nur 159 zu 148 angenommen: Das Parlament spaltet sich, Gemäßigte wechseln zum König. Wenige Wochen später der Sturm aufs Unterhaus."],
 ["Nineteen Propositions und Karls Antwort","Juni 1642","Parlament an Karl I. / Karl I. an das Parlament","Forderungskatalog / Erwiderung","Das Parlament verlangt Zustimmung zu Ministern und Richtern, Kontrolle über Miliz und Festungen und eine Kirchenreform. Karl antwortet, damit wäre er nur noch der Schatten eines Königs. England sei eine gemischte Monarchie aus König, Lords und Commons, die sich gegenseitig im Gleichgewicht halten.","Letzter Verhandlungsversuch nach dem Sturm aufs Unterhaus. Das Parlament greift jetzt selbst nach Rechten, die es vorher nie hatte. Karls Ablehnung, wenige Wochen später Kriegsbeginn (22. August 1642)."],
 ["Karl I. vor Gericht","20.–27. Jan. 1649","Karl I. vor dem High Court of Justice","Rede / Verhörprotokoll","Karl fragt, mit welcher rechtmäßigen Autorität man ihn anklage. Ein König könne von keinem irdischen Gericht gerichtet werden. Er verteidige nicht nur sich, sondern die Freiheit des Volkes gegen eine Willkürherrschaft.","Nach Pride's Purge. Das Gericht wurde nur vom Rumpfparlament ohne Oberhaus eingesetzt, rechtlich also zweifelhaft. Karl verweigert die Verteidigung, um das Gericht nicht anzuerkennen. Gottesgnadentum bis zum Schluss."],
 ["Todesurteil gegen Karl I.","27. Jan. 1649","High Court of Justice (59 Unterschriften, u. a. Cromwell)","Urteil","Karl Stuart habe als Tyrann, Verräter, Mörder und Feind des Volkes Krieg gegen Parlament und Volk geführt. Er solle durch Enthauptung hingerichtet werden.","Erstmals wird ein König im Namen des Volkes verurteilt. Hinrichtung am 30. Januar 1649. Nach der Restauration 1660 werden viele Unterzeichner als Königsmörder verfolgt."],
 ["Gesetz zur Abschaffung des Königtums","17. März 1649","Rumpfparlament","Gesetz","Das Amt des Königs sei unnötig, belastend und gefährlich für die Freiheit, Sicherheit und das Wohl des Volkes. Es wird abgeschafft, niemand darf sich mehr König nennen.","Beginn der Republik (Commonwealth). Kurz darauf wird auch das House of Lords abgeschafft. Tatsächlich herrscht die Armee."],
 ["Instrument of Government","16. Dez. 1653","Offiziersrat der Armee","Verfassung","Die höchste Gewalt liege beim Lordprotektor und dem Parlament. Der Protektor regiert mit einem Staatsrat, ein Parlament soll mindestens alle drei Jahre tagen. Oliver Cromwell wird Lordprotektor auf Lebenszeit.","Nach der Auflösung des Rumpfparlaments. Erste geschriebene Verfassung Englands. Auf dem Papier Gewaltenteilung, tatsächlich Militärdiktatur (Generalmajore ab 1655)."]
].map(([t,d,a,art,inh,ko])=>`<details class="entry"><summary><h3>${t}</h3><span class="yr">${d}</span></summary><div class="inner">
<div><span class="lbl o">TATT</span><p>${t} · ${art} · ${a} · ${d}</p></div>
<div><span class="lbl d">Kernaussage</span><p>${inh}</p></div>
<div><span class="lbl" style="color:var(--crown)">Kontext</span><p>${ko}</p></div></div></details>`).join("")}

<h2 class="sec">Leitfragen fürs Urteil</h2>
<p class="tip" style="margin:0">Immer: These, Pro, Kontra, Fazit. Sachurteil aus der Sicht von damals, Werturteil mit heutigen Maßstäben.</p>
${[
 ["War Karl I. selbst schuld am Bürgerkrieg?",["Brach die Petition of Right","Regierte elf Jahre ohne Parlament, Ship Money","Zwang den Schotten das Gebetbuch auf","Stürmte am 4. Januar 1642 das Unterhaus"],["Geldnot und Streit hatte er von Jakob I. geerbt","Das Parlament ging 1641/42 selbst über alte Rechte hinaus (Grand Remonstrance, Miliz)","Irland-Aufstand und religiöse Ängste heizten an"],"Der Konflikt war seit 1603 angelegt. Den Krieg machten aber Karls Wortbrüche und seine Gewalt gegen das Parlament unvermeidlich: Hauptverantwortung bei ihm."],
 ["Die Hinrichtung Karls I.: gerechte Strafe oder Rechtsbruch?",["Karl hatte trotz Niederlage einen zweiten Krieg begonnen","Ihm war nicht mehr zu trauen („Mann des Blutes“)","Grundsatz: Auch der Herrscher steht unter dem Recht"],["Gericht nur vom Rumpfparlament nach Pride's Purge eingesetzt, ohne Lords","Die Mehrheit der Engländer war dagegen, auch Fairfax","Ergebnis war nicht Freiheit, sondern Cromwells Militärherrschaft"],"Politisch aus Sicht der Armee folgerichtig, rechtlich ein Bruch. Heute: Die Idee, dass niemand über dem Gesetz steht, ist modern, das Verfahren und die Todesstrafe (Art. 102 GG) sind es nicht."],
 ["Oliver Cromwell: Befreier oder Diktator?",["Besiegte den absolutistischen König","Mehr Religionsfreiheit für Protestanten","Stärkte Englands Handel und Flotte (Navigationsakte)"],["Jagte 1653 das Rumpfparlament mit Soldaten davon, löste auch spätere Parlamente auf","Herrschaft der Armee und der Generalmajore","Brutale Massaker in Irland","Lehnte die Krone ab, durfte aber seinen Nachfolger bestimmen"],"Er befreite England vom Absolutismus, regierte dann aber selbst ohne echtes Parlament. Das Paradox: Der Kampf für die Rechte des Parlaments endete in einer Militärdiktatur."]
].map(([q,pro,con,f])=>`<div class="step"><h3>${q}</h3><div class="pk"><div class="pro"><b>Pro</b><ul>${pro.map(x=>`<li>${x}</li>`).join("")}</ul></div><div class="con"><b>Kontra</b><ul>${con.map(x=>`<li>${x}</li>`).join("")}</ul></div></div><p class="ex"><b>Fazit:</b> ${f}</p></div>`).join("")}`;

/* ---------- Üben ---------- */
const KU=$("k-ueben");
let kMode=store.get("kmode","karten"),kDeckSel=store.get("kdeck","daten");
const DECKS={
 daten:()=>KEV.filter(e=>e.star).map(e=>({kind:"Was geschah?",front:e.d,back:`<p><b>${e.t}</b></p><p>${e.x}</p>`})),
 personen:()=>KP.map(([n,r,x])=>({kind:"Wer war das?",front:n,back:`<p><b>${r}</b></p><p>${x}</p>`})),
 begriffe:()=>KB.map(([n,y,d])=>({kind:"Was bedeutet das?"+(y?" · "+y:""),front:n,back:`<p>${d}</p>`}))
};
DECKS.alles=()=>[...DECKS.daten(),...DECKS.personen(),...DECKS.begriffe()];
function kRender(){
  KU.innerHTML=`<div class="seg three"><button type="button" data-m="karten" aria-pressed="${kMode==="karten"}">Karteikarten</button><button type="button" data-m="quiz" aria-pressed="${kMode==="quiz"}">Daten-Quiz</button><button type="button" data-m="ord" aria-pressed="${kMode==="ord"}">Reihenfolge</button></div><div id="kue" class="view"></div>`;
  ({karten:kCards,quiz:kQuiz,ord:kOrd})[kMode]();
}
KU.addEventListener("click",e=>{const b=e.target.closest(".seg button");if(b){kMode=b.dataset.m;store.set("kmode",kMode);kRender()}});

// Karteikarten
let kd=[],kKnown=0,kTotal=0;
function kCards(){kd=shuffle(DECKS[kDeckSel]());kKnown=0;kTotal=kd.length;kCardView()}
function kCardView(){
  const box=$("kue");
  const sel=`<div class="chips">${[["daten","Pflichtdaten"],["personen","Personen"],["begriffe","Begriffe"],["alles","Alles"]].map(([k,l])=>`<button type="button" class="toggle" data-d="${k}" aria-pressed="${kDeckSel===k}">${l}</button>`).join("")}</div>`;
  if(!kd.length){box.innerHTML=sel+`<div class="done"><span class="big">Geschafft!</span><p>Du hast alle ${kTotal} Karten gewusst.</p><button class="btn primary" type="button" id="kagain">Nochmal von vorn</button></div>`;$("kagain").onclick=kCards;kDeckBind();return}
  const c=kd[0];
  box.innerHTML=sel+`<div class="progress"><span>${kKnown} von ${kTotal} gewusst</span><span>noch ${kd.length}</span></div><div class="bar"><i style="width:${kKnown/kTotal*100}%"></i></div>
   <div class="flash" id="kfc" role="button" tabindex="0" aria-label="Karte umdrehen"><span class="kind">${c.kind}</span><div class="front">${c.front}</div><span class="hint">Überleg kurz, dann tippen zum Umdrehen.</span></div>
   <div class="btns" id="krate" hidden><button class="btn no" type="button" id="kno">Wusste ich nicht</button><button class="btn yes" type="button" id="kyes">Wusste ich</button></div>`;
  const fc=$("kfc");
  const flip=()=>{if(fc.dataset.f)return;fc.dataset.f=1;fc.innerHTML=`<span class="kind">${c.front}</span><div class="back">${c.back}</div>`;$("krate").hidden=false};
  fc.onclick=flip;fc.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();flip()}};
  $("kyes").onclick=()=>{kd.shift();kKnown++;kCardView()};
  $("kno").onclick=()=>{const x=kd.shift();kd.splice(Math.min(3,kd.length),0,x);kCardView()};
  kDeckBind();
}
function kDeckBind(){$("kue").querySelectorAll("[data-d]").forEach(b=>b.onclick=()=>{kDeckSel=b.dataset.d;store.set("kdeck",kDeckSel);kCards()})}

// Daten-Quiz: 10 Fragen aus 1603–1661
let kq=[],kqi=0,kpts=0;
function kQuiz(){
  kq=shuffle(KEV).slice(0,10).map(ev=>{
    const others=shuffle(KEV.filter(x=>x.yr!==ev.yr));
    if(Math.random()<.5){
      return {ask:`Was geschah ${ev.d}?`,opts:shuffle([ev.t,...others.slice(0,3).map(o=>o.t)]),right:ev.t,ev};
    }
    const ds=[];others.forEach(o=>{if(ds.length<3&&!ds.some(d=>d.match(/\d{4}/)[0]===o.d.match(/\d{4}/)[0]))ds.push(o.d)});
    return {ask:`Wann? „${ev.t}“`,opts:shuffle([ev.d,...ds]),right:ev.d,ev};
  });kqi=0;kpts=0;kQuizView();
}
function kQuizView(){
  const box=$("kue");
  if(kqi>=kq.length){const best=Math.max(store.get("kbest",0),kpts);store.set("kbest",best);
    box.innerHTML=`<div class="done"><span class="big">${kpts} / ${kq.length}</span><p>${kpts>=9?"Super, das sitzt!":kpts>=6?"Gut! Schau dir die falschen Daten im Zeitstrahl nochmal an.":"Lies den Zeitstrahl nochmal durch und versuch es dann erneut."}</p><span class="tip">Dein Bestwert: ${best} / ${kq.length}</span><button class="btn primary" type="button" id="kagain">Neue 10 Fragen</button></div>`;
    $("kagain").onclick=kQuiz;return}
  const q=kq[kqi];
  box.innerHTML=`<div class="progress"><span>Frage ${kqi+1} von ${kq.length}</span><span>${kpts} richtig</span></div><div class="bar"><i style="width:${kqi/kq.length*100}%"></i></div>
   <div class="q"><div class="ask">${q.ask}</div><div class="opts">${q.opts.map(o=>`<button type="button" data-o="${o.replace(/"/g,"&quot;")}">${o}</button>`).join("")}</div><div id="kex"></div></div>`;
  let lock=false;
  box.querySelector(".opts").onclick=e=>{const b=e.target.closest("button");if(!b||lock)return;lock=true;
    if(b.dataset.o===q.right)kpts++;
    box.querySelectorAll(".opts button").forEach(x=>{if(x.dataset.o===q.right)x.classList.add("right");else if(x===b)x.classList.add("wrong")});
    $("kex").innerHTML=`<div class="expl"><b>${q.ev.d}: ${q.ev.t}.</b> ${q.ev.x}</div><button class="btn primary" type="button" id="knx" style="width:100%;margin-top:10px">${kqi+1<kq.length?"Weiter":"Ergebnis anzeigen"}</button>`;
    $("knx").onclick=()=>{kqi++;kQuizView()}};
}

// Reihenfolge: 5 Ereignisse in die richtige Reihenfolge tippen
let ko=[],kpick=[];
function kOrd(){
  const pool=shuffle(KEV),sel=[];
  for(const e of pool){if(sel.length<5&&!sel.some(s=>s.yr===e.yr))sel.push(e)}
  ko=sel;kpick=[];kOrdView();
}
function kOrdView(){
  const box=$("kue");
  if(kpick.length===ko.length){
    const right=ko.slice().sort((a,b)=>a.i-b.i);let n=0;
    const res=right.map((e,i)=>{const ok=kpick[i]===e;if(ok)n++;return `<li class="${ok?"":"wrong"}"><b>${e.d}</b> · ${e.t}${ok?"":` <span class="meta">(du: Platz ${kpick.indexOf(e)+1})</span>`}</li>`}).join("");
    const best=Math.max(store.get("kordbest",0),n);store.set("kordbest",best);
    box.innerHTML=`<div class="done" style="padding:8px 0"><span class="big">${n} / ${ko.length}</span><p>${n===ko.length?"Perfekte Reihenfolge!":"So ist es richtig:"}</p></div><ol class="ordres">${res}</ol><button class="btn primary" type="button" id="kagain">Neue Runde</button>`;
    $("kagain").onclick=kOrd;return}
  box.innerHTML=`<p class="tip" style="margin:0">Tippe die Ereignisse in der zeitlichen Reihenfolge an, das früheste zuerst.</p>
   <div class="q ord"><div class="opts">${ko.map((e,i)=>{const p=kpick.indexOf(e);return `<button type="button" data-i="${i}" class="${p>=0?"pick":""}"><span class="num">${p>=0?p+1:""}</span>${e.t}</button>`}).join("")}</div></div>
   <button class="btn" type="button" id="kreset">Zurücksetzen</button>`;
  box.querySelector(".opts").onclick=e=>{const b=e.target.closest("button");if(!b)return;const ev=ko[+b.dataset.i];
    const p=kpick.indexOf(ev);if(p>=0)kpick.splice(p,1);else kpick.push(ev);kOrdView()};
  $("kreset").onclick=()=>{kpick=[];kOrdView()};
}
kRender();

/* ---------- Merken (Kurzfassung je Bereich) ---------- */
const MERK_K=`<table class="mtab"><tbody>${KZ.map(e=>`<tr class="ph"><td colspan="2">${e.span} · ${e.name}</td></tr>`+e.ev.filter(x=>x[3]).map(([d,t])=>`<tr><td>${d}</td><td>${t}</td></tr>`).join("")).join("")}</tbody></table><p class="tip" style="margin:10px 0 0">Das sind alle Pflichtdaten ★. Erklärungen stehen im Zeitstrahl.</p>`;
function setMerk(k){
  document.querySelector(".merk-kick").textContent=k==="K"?"Pflichtdaten zum Auswendiglernen":"Kurzfassung zum Merken";
  $("merkTtl").textContent=k==="K"?"Karl I. und Cromwell 1603–1660":"Herrscher 1509–1714";
  $("merkBody").innerHTML=k==="K"?MERK_K:MERK_U;
}

/* ---------- Navigation (Hash-Routen) ----------
   #/                               Startseite (Fächer)
   #/geschichte                     Fach: Unterricht oder Klausurvorbereitung
   #/geschichte/unterricht/zeit     Bereich mit Reitern */
const UTABS=["zeit","lex","text","kurz","ueben"],KTABS=["kzeit","klern","ktest","kueben"];
const KTITLES={kzeit:["Zeitstrahl","Karl I. 1603–1649 · danach Cromwell"],klern:["Lernzettel","Die ganze Geschichte zum Auswendiglernen"],ktest:["Test","Probe-Klausur, Musterlösung, Quellen"],kueben:["Üben","Karteikarten, Daten-Quiz, Reihenfolge"]};
const navU=$("navU"),navK=$("navK"),navM=$("navM");
const MODS_=typeof MODS==="undefined"?{}:MODS;
function renderHome(){
  $("v-home").innerHTML=`<div class="folders">${FAECHER.map(F=>{const info=klausurInfo(F.klausur);const n=Object.keys(F.kat).length;
    return `<a class="folder" href="#/${F.id}" style="--fc:var(${F.c});--fs:var(${F.cs})">${FOLDER_SVG}<span class="ft"><h2>${F.name}</h2>${info?`<span class="badge">${info}</span>`:""}<p>${n?(F.thema?F.thema:"Unterricht und Klausurvorbereitung"):"Noch leer"}</p></span><span class="chev">›</span></a>`}).join("")}</div>`;
}
function renderFach(F){
  const info=klausurInfo(F.klausur);
  $("v-fach").innerHTML=(info?`<span class="badge">${info}</span>`:"")+Object.entries(KATS).map(([k,K])=>{const a=F.kat[k];
    return `<a class="kat" href="#/${F.id}/${k}" style="--kc:var(${K.c})"><span class="kh">${K.icon}<h2>${K.name}</h2><span class="chev">›</span></span><p class="${a?"":"leer-l"}">${a?a.desc:"Noch keine Inhalte"}</p></a>`}).join("");
}
function hdr(t,s){$("ttl").textContent=t;$("sub").textContent=s;$("sub").hidden=!s}
function back(lbl,href){const b=$("back");b.hidden=!lbl;if(lbl){$("backLbl").textContent=lbl;b.onclick=()=>{location.hash=href}}}
function route(){
  const p=location.hash.replace(/^#\/?/,"").split("/").filter(Boolean);
  const F=FAECHER.find(x=>x.id===p[0]),k=p[1],t=p[2];
  document.querySelectorAll("main>section").forEach(s=>s.hidden=true);
  navU.hidden=navK.hidden=navM.hidden=true;$("merkBtn").hidden=true;
  let vis;
  if(!F){vis="v-home";renderHome();hdr("Klausuren","Wähle ein Fach");back();document.title="Klausuren"}
  else if(!KATS[k]){vis="v-fach";renderFach(F);hdr(F.name,"Unterricht oder Klausurvorbereitung?");back("Klausuren","#/");document.title=F.name+" · Klausuren"}
  else{
    const A=F.kat[k];back(F.name,"#/"+F.id);document.title=KATS[k].name+" · "+F.name;
    if(!A){vis="v-leer";hdr(KATS[k].name,F.name);$("v-leer").innerHTML=`<div class="leer"><b>Noch leer</b><span>Hier kommt bald der Stoff für ${F.name} rein.</span></div>`}
    else if(A.mod&&MODS_[A.mod]){
      const M=MODS_[A.mod],ids=M.tabs.map(x=>x[0]),key="mtab_"+A.mod;
      let v=ids.includes(t)?t:store.get(key,ids[0]);if(!ids.includes(v))v=ids[0];
      if(v!==t)history.replaceState(null,"",`#/${F.id}/${k}/${v}`);
      store.set(key,v);
      navM.style.gridTemplateColumns=`repeat(${ids.length},1fr)`;
      navM.innerHTML=M.tabs.map(([id,l,ic])=>`<button role="tab" data-v="${id}" aria-selected="${id===v}" type="button">${PS_ICON[ic]||""}${l}</button>`).join("");
      navM.hidden=false;
      vis="m-view";$("m-view").innerHTML="";M.views[v]($("m-view"));
      hdr(M.titles[v][0],M.titles[v][1]);
      if(M.merk){$("merkBtn").hidden=false;document.querySelector(".merk-kick").textContent=M.merk[0];$("merkTtl").textContent=M.merk[1];$("merkBody").innerHTML=M.merk[2]}
    }
    else{
      const U_=A.tabs==="U",tabs=U_?UTABS:KTABS,key=U_?"tab":"ktab";
      let v=tabs.includes(t)?t:store.get(key,tabs[0]);if(!tabs.includes(v))v=tabs[0];
      if(v!==t)history.replaceState(null,"",`#/${F.id}/${k}/${v}`);
      store.set(key,v);
      const nav=U_?navU:navK;nav.hidden=false;
      nav.querySelectorAll("button").forEach(b=>b.setAttribute("aria-selected",b.dataset.v===v));
      vis=(U_?"v-":"k-")+(U_?v:v.slice(1));
      const T_=(U_?TITLES:KTITLES)[v];hdr(T_[0],T_[1]);
      $("merkBtn").hidden=false;setMerk(A.tabs);
    }
  }
  $(vis).hidden=false;window.scrollTo(0,0);
}
[navU,navK,navM].forEach(n=>n.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;
  const p=location.hash.replace(/^#\/?/,"").split("/");location.hash=`#/${p[0]}/${p[1]}/${b.dataset.v}`}));
// Sprungmarken innerhalb einer Seite (#era0, #tx3 …) scrollen, statt die Route zu ändern
document.addEventListener("click",e=>{if(e.defaultPrevented)return;const a=e.target.closest('a[href^="#"]');if(!a)return;
  const h=a.getAttribute("href");if(h.startsWith("#/"))return;e.preventDefault();const el=document.querySelector(h);if(el)el.scrollIntoView({behavior:"smooth"})});
window.addEventListener("hashchange",route);
route();
