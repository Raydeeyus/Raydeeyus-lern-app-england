/* =========================================================
   Klausuren-App: Deutsch (GK 12/1)
   Materialgestütztes Schreiben eines argumentativen Textes
   Sprachwandel · digitale Kommunikation · Medien · Klausur 20.11.2026
   Wird NACH psychologie.js und VOR klausur.js geladen und ergänzt MODS (deU / deK).
   Markierungen in Texten: [M1] Material · [U1] Unterricht · [E] eigene Erfahrung
   ========================================================= */

/* ---------- Vertreter und Modelle ----------
   s: U = aus dem Unterricht, M = aus dem Material (beides möglich: "UM") */
const DE_VERTRETER=[
 {g:'Faktoren des Sprachwandels',n:'Peter von Polenz',w:'Sprachwissenschaftler · vier Motive des Sprachwandels',s:'U',
  k:'Als Kern des Sprachwandels nennt er vier Motive: <b>1. Sprachökonomie</b> – Bequemlichkeit und Zeitersparnis („keine Zeit“, Kosten-Nutzen-Abwägung). <b>2. Innovation</b> – neue Begriffe für neue oder kreative Bedürfnisse. <b>3. Variation</b> – flexible Anpassung der Sprache an den jeweiligen Zweck (welche Situation, welche Sprache?). <b>4. Soziokulturelle Evolution</b> – Sprachwandel als Folge gesellschaftlicher Veränderungen (Einfluss anderer Sprachkulturen, mediale Veränderungen, Globalisierung).',
  use:'Dein Allzweck-Werkzeug: Damit erklärst du fast jedes Phänomen als <b>normalen Sprachwandel</b>. „we“, „lol“ = Sprachökonomie · „posten“, „liken“, „Emoji“ = Innovation · Chat anders als Aufsatz = Variation · Sprachnachrichten, Anglizismen = soziokulturelle Evolution.',
  f:'„Der Sprachwissenschaftler Peter von Polenz nennt die Sprachökonomie als ein zentrales Motiv des Sprachwandels: Menschen wählen aus Bequemlichkeit und Zeitersparnis den kürzesten Ausdruck – genau das passiert, wenn wir ‚we‘ statt ‚Wochenende‘ tippen.“'},
 {g:'Faktoren des Sprachwandels',n:'Wolfgang Krischke',w:'„Triebkräfte des sprachlichen Umbruchs“ (2009)',s:'U',
  k:'Treiber des Sprachwandels sind <b>Globalisierung, Digitalisierung, Migration und Medien</b>. Er beschreibt drei Phänomene: das <b>„Schreibsprechen“</b> in E-Mails und Chatforen (Durchmischung von Mündlichkeit und Schriftlichkeit), vielfältige <b>Sprachmischungen</b> im Einwanderungsland Deutschland und den <b>Einfluss des Englischen</b> durch Globalisierung und Digitalisierung. Bewertung: Vorteil <b>Effizienz</b>, Nachteil <b>Grammatikabbau und Verflachung</b>. Forderung: Die Standardsprache sollte immer im Fokus der Bildung liegen.',
  use:'Ideal für die <b>Gegenseite</b> (Grammatikabbau, Verflachung) – und für den <b>Schluss</b> als Lösung: Sprachwandel ja, aber die Schule sichert die Standardsprache. So wirkst du differenziert.',
  f:'„Zwar sieht der Sprachwissenschaftler Wolfgang Krischke im ‚Schreibsprechen‘ der Chats auch die Gefahr eines Grammatikabbaus. Er fordert aber nicht, die Chatsprache zu verbieten, sondern die Standardsprache im Fokus der Bildung zu behalten.“'},
 {g:'Digitale Kommunikation',n:'Christa Dürscheid',w:'Linguistin, Universität Zürich · Modell und Studie',s:'UM',
  k:'<b>Modell (Unterricht):</b> Sie unterscheidet <b>medial</b> (Wie wird übertragen? gesprochen = phonisch, geschrieben = grafisch) und <b>konzeptionell</b> (Wie ist die Sprache gestaltet?): konzeptionelle Mündlichkeit = <b>Sprache der Nähe</b>, konzeptionelle Schriftlichkeit = <b>Sprache der Distanz</b>. Eine WhatsApp-Nachricht ist medial schriftlich, aber konzeptionell mündlich. Chats sind <b>quasi-synchron</b>, wenn alle gleichzeitig online sind (Dürscheid/Frick 2014).<br><b>Studie (Material):</b> Sie untersuchte in der Schweiz, wie sich E-Mail, Chat und SMS auf das Schreiben in der Schule auswirken. Ergebnis: Die meisten Schüler können unterscheiden, ob sie eine SMS oder einen Aufsatz schreiben. Außerdem stellt sie fest: „Die Texte werden immer informeller“ – vor allem durch WhatsApp, wo es auf schnelle Antworten ankommt.',
  z:'„Die Schreibkompetenz hat nicht nachgelassen – im Gegenteil. Sie ist breiter geworden.“',
  use:'Dein <b>stärkstes Argument gegen „Sprachverfall“</b>: Jugendliche wechseln je nach Situation zwischen Nähe- und Distanzsprache. Modell (U) und Studie (M) zählen als zwei getrennte Bezüge.',
  f:'„Nach dem Modell von Christa Dürscheid ist eine Chatnachricht zwar medial schriftlich, aber konzeptionell mündlich – eine Sprache der Nähe. Ein Aufsatz dagegen ist eine Sprache der Distanz. Wer beides beherrscht, verliert keine Sprache, sondern gewinnt eine dazu.“',
  x:'Ergänzung: Das Nähe-Distanz-Modell stammt ursprünglich von Peter Koch und Wulf Oesterreicher (1985); Dürscheid wendet es auf die digitale Kommunikation an.'},
 {g:'Digitale Kommunikation',n:'Volker Schlobinski',w:'Sprachwissenschaftler aus Hannover',s:'M',
  k:'Weil in Textnachrichten Gesichtsausdruck und Stimmlage fehlen, müssen Worte wie „haha“, „gähn“, „seufz“ oder „bäm“ Gefühle vermitteln. Er sieht keine Gefahr für die Sprache: Jugendliche seien trotzdem in der Lage, ordentliche Schulaufsätze zu schreiben.',
  z:'„Es macht keinen Sinn so zu schreiben wie Thomas Mann, wenn ich einen Tweet (…) mit 140 Zeichen verfasse.“',
  use:'Für das Argument <b>Situationsangemessenheit</b> und um Emojis und Inflektive als <b>Ausgleich für fehlende Mimik und Stimme</b> zu erklären (passt auch zu Sprachnachrichten: Die Stimme bringt die Gefühle zurück).',
  f:'„Der Sprachwissenschaftler Volker Schlobinski bringt es auf den Punkt: Es mache keinen Sinn, einen Tweet so zu schreiben wie Thomas Mann.“'},
 {g:'Digitale Kommunikation',n:'Katharina König & Tim Moritz Hector',w:'„Zur Theatralität von WhatsApp-Sprachnachrichten“',s:'M',
  k:'Sprachnachrichten sind nicht simultan wie ein Gespräch, sondern <b>asynchron</b> (quasi-synchron nur, wenn alle gleichzeitig im Chat aktiv sind). Sie sind <b>doppelt verzögert</b>: 30 Sekunden Einsprechen, Übermittlung, 30 Sekunden Anhören – bis Frage und Antwort ausgetauscht sind, vergehen über zwei Minuten. Im Gespräch laufen Produktion und Rezeption gleichzeitig (Auer 2000). Weitere „Nachteile“: nicht nutzbar, wenn ungewollte Mithörer da sind (z. B. im Seminar), weniger diskret, mehr Datenvolumen. Kritik im Netz: „sowas wie telefonieren für ganz Faule“ (Jodel). Ihre Fragen: Wann bieten Sprachnachrichten Vorteile, und welche Informationen übermitteln sie, die im Text verloren gehen? Durch mediale Mündlichkeit ermöglichen sie <b>Theatralität</b>, also kleine Aufführungen im Alltag (Goffman: „dramas to an audience“).',
  z:'Sprachnachrichten sind „in einem doppelten Sinn verzögert“.',
  use:'Für Kontra (Verzögerung, Diskretion, Aufwand) <b>und</b> Pro (die Stimme transportiert mehr als Text, Inszenierung, Kreativität). Achtung: nicht mit Werner König (Subsysteme) verwechseln!',
  f:'„Die Sprachwissenschaftler Katharina König und Tim Moritz Hector weisen darauf hin, dass Sprachnachrichten ‚in einem doppelten Sinn verzögert‘ sind.“'},
 {g:'Digitale Kommunikation',n:'Eike Kühl',w:'„Netzsprache: Lol-Speak wird offizielles Englisch“ (2011)',s:'M',
  k:'Das Oxford English Dictionary (OED), der „Wächter der englischen Sprache“, nimmt „lol“ und „OMG“ sowie das Herz-Symbol (I ♥ NY) auf. Kriterien: Ein Wort muss gebräuchlich sein, von der Allgemeinheit verstanden werden und schon eine Weile existieren (ca. fünf Jahre, so Redaktionsleiter Graeme Diamond). „Lol“ ist vielseitig: Heiterkeit (lol!), Verwunderung (lol?), Ironie (lol ey…) und Interjektion wie „hm“ oder „ok“. Laut OED sind solche Initialwörter mehr als bloße Abkürzungen. Kühl vergleicht „lol“ mit „cool“, das auch erst von allen Gesellschaftsschichten akzeptiert werden musste.',
  z:'Zwischenüberschrift: „Sprachwandel, nicht Sprachverrohung“ · Graeme Diamond: „Ein Wort sollte schon ein bisschen gelebt haben, bevor wir seine Biografie aufzeichnen.“',
  use:'Beleg dafür, dass Netzwörter <b>offiziell anerkannt</b> werden und <b>Ausdrucksmöglichkeiten erweitern</b>. Der Vergleich mit „cool“ ist ein starkes, anschauliches Beispiel.',
  f:'„Selbst das Oxford English Dictionary hat ‚lol‘ und ‚OMG‘ aufgenommen. Der Journalist Eike Kühl sieht darin keine Verrohung, sondern normalen Sprachwandel – so wie einst beim Wort ‚cool‘.“'},
 {g:'Varietäten-Modelle',n:'Helmut Henne',w:'Standardsprache und Varietäten („Mehrsprachigkeit, Sprachvielfalt“)',s:'U',
  k:'Die <b>Standardsprache</b> bildet das Zentrum und teilt sich in <b>vier Funktionalstile</b>: alltäglicher, arbeitssprachlicher, wissenschaftlicher und literarisch-künstlerischer Verkehr. Sie ist die Basis für die Literatursprache. Um das Zentrum liegen Literatur- und Mediensprache, außen <b>Fach-, Gruppen- und Umgangssprachen sowie Mundarten</b>. Standard- und „Sondersprachen“ beeinflussen sich in einer ständigen Wechselbeziehung.',
  use:'Internet- oder Jugendsprache ist eine <b>Varietät</b> – sie ersetzt die Standardsprache nicht, sondern steht in Wechselbeziehung mit ihr.',
  f:'„Nach dem Modell von Helmut Henne bleibt die Standardsprache das Zentrum, um das sich Fach-, Gruppen- und Umgangssprachen legen. Die Chatsprache ist nur eine weitere dieser Varietäten.“'},
 {g:'Varietäten-Modelle',n:'Werner König',w:'„Subsysteme des Deutschen“ (2011)',s:'U',
  k:'Sprache besteht aus feingliedrigen <b>Subsystemen</b> rund um ein Zentrum: die <b>Schulnorm</b> („Hast du etwas bekommen?“) und die Umgangssprache („Haste wos gekriegt?“). Darum herum: <b>Technolekte</b> (Fachsprachen aus Recht, Medizin, Technik, Wirtschaft, Sport, Mode …), <b>Regiolekte und Dialekte</b> („Häsch oppis übercho?“), <b>Soziolekte</b>, <b>Slang</b> („Zaster, Knast, high“), Poetolekte sowie die Sprache von Theologie, Literatur und Philosophie. König differenziert viel stärker nach Bereichen als Henne.',
  use:'Zeigt, wie <b>vielfältig</b> Sprache schon immer ist – Netzsprache ist ein weiteres Subsystem, die Schulnorm bleibt im Zentrum.',
  f:'„Werner König beschreibt das Deutsche als System aus vielen Subsystemen rund um die Schulnorm – vom Fachjargon bis zum Slang. Die Netzsprache reiht sich hier nur ein.“'},
 {g:'Varietäten-Modelle',n:'Heinrich Löffler',w:'„Varietäten des Deutschen“ (1994)',s:'U',
  k:'Stellt Sprache als <b>mehrdimensionales Beziehungsnetz</b> („Spinnennetz“) dar. Die <b>Hauptachse</b> verläuft zwischen <b>gesprochener und geschriebener</b> Sprache. Alle Varietäten sind miteinander verbunden: Dialekte, Soziolekte, Funktiolekte, Mediolekte, Genderlekte, Alterssprachen, Situolekte (Stile, Textsorten) und Idiolekte. Er will die Komplexität und Relativität jedes Einteilungsversuchs zeigen.',
  use:'Gut, um zu zeigen, dass im Chat die Grenze zwischen gesprochen und geschrieben <b>verschwimmt</b> (Mediolekt) und dass jeder Mensch mehrere Varietäten gleichzeitig nutzt.',
  f:'„Heinrich Löffler zeigt mit seinem ‚Spinnennetz‘-Modell, dass alle Varietäten zusammenhängen – auch gesprochene und geschriebene Sprache, die sich im Chat besonders nahekommen.“'},
 {g:'Medien im Wandel',n:'Bernhard Pörksen',w:'Medienwissenschaftler · „fünfte Gewalt“',s:'U',
  k:'Neben die drei Staatsgewalten und die vierte Gewalt (Massenmedien) sei die <b>digitale Öffentlichkeit</b> in sozialen Medien als <b>fünfte Gewalt</b> getreten – getragen von vielen Einzelnutzern („Konnektiv“ statt Kollektiv). Potenzial zum Guten (Missstände aufdecken, Sexismus thematisieren) und zum Schlechten (Mobbing, Shitstorms, Fake News). Gefahr einer <b>„Erregungsgesellschaft“</b>, in der laute, polarisierende Äußerungen den Diskurs bestimmen, und eines <b>„Modus der Kurzfristigkeit“</b>. Möglicher Vorteil: Demokratisierung der Kommunikation.',
  use:'Für Themen rund um Medien, Hate Speech, Shitstorms und Meinungsbildung.',
  f:'„Der Medienwissenschaftler Bernhard Pörksen spricht von einer ‚Erregungsgesellschaft‘, in der die lautesten Stimmen den Diskurs bestimmen.“'},
 {g:'Medien im Wandel',n:'Jochen Hörisch',w:'Neue Rolle des Journalismus',s:'U',
  k:'Journalisten sind nicht mehr „Gatekeeper“ (Türhüter), die bestimmen, worüber berichtet wird. Ihre neue Rolle: „Gatewatcher“, der die Kommunikation lenkt, oder <b>„Barkeeper“</b>, der einen „Nachrichten-Cocktail“ mixt und gehaltvolle Zusammenstellungen liefert.',
  use:'Medienwandel, Bürgerjournalismus, Fake News (Wer prüft heute die Nachrichten?).',
  f:'„Journalisten werden, wie Jochen Hörisch es ausdrückt, vom Türhüter zum ‚Barkeeper‘, der aus der Nachrichtenflut einen gehaltvollen Cocktail mixt.“'},
 {g:'Hate Speech',n:'Raul Krauthausen & Jörg Meibauer',w:'Zwei Definitionen von Hate Speech',s:'M',
  k:'Es gibt <b>keine einheitliche</b> wissenschaftliche Definition. Raul Krauthausen (Aktivist für Inklusion): „Hate Speech ist der sprachlich ausgedrückte Hass gegenüber einer Personengruppe oder einer Einzelperson wegen ihrer Zugehörigkeit zu einer Personengruppe.“ Jörg Meibauer (Professor, Uni Mainz): sprachlicher Ausdruck von Hass gegen Personen oder Gruppen, vor allem durch Ausdrücke, die der Herabsetzung und Verunglimpfung von Bevölkerungsgruppen dienen. Abgrenzung: <b>Hasspropaganda</b> (manipulative Beeinflussung der Öffentlichkeit) und <b>Cybermobbing</b> (Beleidigung, Bedrohung, Bloßstellung oder Belästigung von Einzelpersonen über Kommunikationsmedien).',
  use:'Definition in der Einleitung oder im ersten Argument. „Keine einheitliche Definition“ ist ein Argument gegen schnelle Verbote.'},
 {g:'Hate Speech',n:'Paul Sailer-Wlasits',w:'„Die Metastasen des Hasses“ (2019)',s:'M',
  k:'Hassreden sind „sprachliche Schatten“ der Kulturgeschichte (Beispiel NS-Diktatur). Hasssprache entsteht, wo Sprache in einen <b>„Modus der Anrede“</b> (Judith Butler) wechselt, den anderen auf eine Identität festlegt und als Gefahr definiert. Der Übergang vom Wort zur Tat ist ein qualitativer Sprung. Hasssprache kann sich nicht selbst mäßigen. Lösung – nur alle drei zusammen wirken: <b>langfristig politische Bildung</b> (wirksamste und günstigste Prävention), <b>mittelfristig behutsame Gesetze</b> (Vorsicht: Risiko für die Meinungsfreiheit), <b>kurzfristig Vorbilder</b> (Politiker, Medien – kostet nichts). Die kultivierte Gegenrede ist der kurzen, scharfen Hassrede rhetorisch unterlegen.',
  use:'Perfekt für den <b>Schluss</b> (mehrstufige Lösung) und zum Abwägen „Gesetze vs. Meinungsfreiheit“.',
  f:'„Wie Paul Sailer-Wlasits betont, greifen eindimensionale Lösungen zu kurz: Nur politische Bildung, behutsame Gesetze und gute Vorbilder zusammen können Hassrede eindämmen.“'},
 {g:'Hate Speech',n:'Jasna Strick',w:'Interview „Wie lebt es sich mit einem Shitstorm?“ (2015)',s:'M',
  k:'Feministin, Mitinitiatorin von #aufschrei (Grimme Online Award). Nach einem Vortrag über Hate Speech (2013) geriet sie in einen Shitstorm. Folgen: twittert weniger persönlich, Albträume, Angst vor fremden Männern bei Vorträgen, Handynummer veröffentlicht, kein Impressum mehr, meidet Familienfeste, Masterarbeit ein Semester später (mit finanziellen Folgen). Ihre Deutung: Shitstorms sollen Feministinnen zum Schweigen bringen.',
  use:'Anschaulicher Beleg für die <b>realen Folgen</b> von Hass im Netz.'},
 {g:'Hate Speech',n:'Sarah Bosetti',w:'„Ich hab nichts gegen Frauen, du Schlampe!“',s:'M',
  k:'Die Autorin antwortet auf Hasskommentare mit Liebesgedichten – Gegenrede mit Humor.',
  use:'Beispiel für <b>kreative Gegenrede</b> (Lösungsvorschlag im Schluss).'}
];

/* ---------- Material: Auszüge, die du verwenden kannst ---------- */
const DE_MAT=[
 {t:'Netzsprache: Lol-Speak wird offizielles Englisch',q:'Eike Kühl, 2011',th:'Internetsprache, Sprachwandel',
  kern:'Das Oxford English Dictionary nimmt „lol“, „OMG“ und das Herz-Symbol auf. Kühl wertet das als normalen Sprachwandel, nicht als Verrohung.',
  aus:['„lol“ und „OMG“ stehen künftig unter den rund 600.000 Einträgen des OED; zum ersten Mal auch ein Symbol (das Herz, ursprünglich von T-Shirts und Aufklebern).','Kriterien des OED: gebräuchlich, von der Allgemeinheit verstanden, mindestens ca. fünf Jahre alt.','„lol“ wurde im Juni 1990 erstmals im Usenet gesichtet, der Durchbruch kam mit Handys und Chatprogrammen.','„lol“ ist vielseitig: Heiterkeit, Verwunderung, Ironie, Interjektion (wie „hm“, „ok“) – laut OED mehr als eine bloße Abkürzung.','Sprachpuristen halten es für jugendlichen Slang oder „nichts als eine Abkürzung“.','Laut Studien nimmt der Gebrauch von „lol“ mit dem Alter ab; im Duden steht es im Abkürzungsverzeichnis.','Vergleich mit „cool“: auch kein Zeichen sprachlicher Verrohung, sondern normalen Sprachwandels.','Einmal ins OED aufgenommene Wörter werden nicht mehr gelöscht.']},
 {t:'Internetsprache: Verhunzt das Internet unser Deutsch?',q:'WirtschaftsWoche / dpa, 20.11.2014',th:'Internetsprache, Sprachverfall?',
  kern:'Sprachbewahrer befürchten einen Kulturverlust, Experten (Schlobinski, Dürscheid) geben Entwarnung: Digitale Kommunikation kann die Sprachgewandtheit sogar fördern.',
  aus:['Sprachpuristen „kommt das Grausen“, manche Eltern befürchten, Chatten, Bloggen und Twittern verhunze die Sprache ihrer Kinder.','Wir schreiben, wie wir sprechen: Wortsplitter, Satzfragmente, „We“ statt „Wochenende“; Präpositionen und Pronomen fallen weg oder verschmelzen.','Emotionale Ausdrücke: haha, gähn, seufz, mmmh, nom nom (lecker), bäm (Begeisterung).','Schlobinski: Wo Gesichtsausdruck und Stimmlage fehlen, müssen Worte Gefühle vermitteln.','Früher nutzten nur Computer-Nerds „lol“ und „omg“, heute sind sie für viele selbstverständlich (z. B. Rubriken bei Buzzfeed).','Lockerer Umgang mit Sprache auch in Kommentaren auf Seiten seriöser Unternehmen wie der Deutschen Bahn.','Dürscheid: „Die Texte werden immer informeller“ – vor allem durch WhatsApp, wo schnelle Antworten zählen.','Befürchtung der Sprachbewahrer: Junge Leute, bei denen Rechtschreibung und Grammatik noch nicht gefestigt sind, könnten kein korrektes Deutsch mehr lernen.','Schlobinski: kein Sinn, einen Tweet wie Thomas Mann zu schreiben; Jugendliche können trotzdem ordentliche Aufsätze schreiben.','Dürscheid-Studie: Die meisten Schüler unterscheiden SMS und Aufsatz, die Schreibkompetenz ist „breiter geworden“.','„Denn eine einheitliche Websprache gibt es nicht.“ Jedes Forum und jede Clique hat ein eigenes Vokabular – viel Sprachgefühl ist gefragt.']},
 {t:'Zur Theatralität von WhatsApp-Sprachnachrichten',q:'Katharina König / Tim Moritz Hector',th:'Sprachnachrichten',
  kern:'Sprachnachrichten sind asynchron und doppelt verzögert, haben praktische Nachteile – bieten aber durch die Stimme Möglichkeiten, die Textnachrichten fehlen (Theatralität).',
  aus:['Die Nachricht erscheint mit Play-Button, Länge und Profilbild; man kann navigieren, pausieren und wiederholen.','Nicht simultan wie ein Gespräch, sondern asynchron; quasi-synchron nur, wenn alle gleichzeitig aktiv sind (Dürscheid/Frick 2014).','„In einem doppelten Sinn verzögert“: Ein Aktions-Reaktions-Paar aus zwei 30-Sekunden-Nachrichten dauert über zwei Minuten.','Im Gespräch erfolgen Produktion und Rezeption gleichzeitig (Auer 2000) – ein entscheidender Unterschied.','Mit ungewollten Mithörern (z. B. im Seminar) weder aufnehm- noch abspielbar, weniger diskret, mehr Datenvolumen.','Kritik auf Jodel: nur eine Möglichkeit, „möglichst viel Belangloses in kurzer Zeit abzusondern“; „sowas wie telefonieren für ganz Faule“.','Forum: Es könne „verstörend wirken“, merkwürdig, allein ins Handy zu sprechen.','Leitfrage: Welche Informationen übermitteln Sprachnachrichten, die im Text verloren gehen? Mediale Mündlichkeit ermöglicht Theatralität („dramas to an audience“, Goffman).']},
 {t:'Sprachnachrichten-Statistiken 2026',q:'Kyle R., 2026 (mit Quellen je Zahl)',th:'Sprachnachrichten, Zahlen',
  kern:'Sprachnachrichten sind weit verbreitet, aber regelmäßig nutzt sie nur eine kleinere Gruppe. Der Text nennt zu jeder Zahl Quelle und Jahr.',
  aus:['WhatsApp: 7 Milliarden Sprachnachrichten pro Tag (WhatsApp 2022), rund 81.000 pro Sekunde – eine Untergrenze, die Zahl ist vier Jahre alt.','WhatsApp hat über 3 Milliarden monatlich aktive Nutzer (2025), 2020 waren es 2 Milliarden.','WeChat führte Sprachnachrichten 2011 ein, WhatsApp kurz danach, Apple 2014 bei iMessage.','Preply 2023: 2 von 3 US-Erwachsenen senden Sprachnachrichten – Gen Z 84 %, Millennials 63 %, Gen X 56 %, Babyboomer 47 %. Achtung: Branchenumfrage eines Sprachlern-Unternehmens, keine unabhängige Forschung.','41 % bemerken eine Zunahme, knapp 40 % halten Sprachnachrichten für gut genug, um ein Telefonat zu ersetzen (Preply).','48 % nutzen sie, um komplexe Gedanken zu vermitteln, 50 % sagen, sie hätten ihre Beziehungen gestärkt (Preply). WhatsApp: Gefühle und Begeisterung lassen sich über die Stimme natürlicher zeigen.','Aber: 68 % müssen eine Sprachnachricht mehrmals hören, 48 % finden sie aufwendiger als eine getippte Nachricht. Lesen ist für die meisten schneller als Zuhören.','Gestört fühlen sich am wenigsten Babyboomer (12 %), am häufigsten Millennials (37 %).','YouGov für Vox (2023): 62 % der US-Amerikaner haben schon einmal eine Sprachnachricht gesendet, rund 30 % wöchentlich, 43 % der 18- bis 29-Jährigen mindestens wöchentlich.','Gegenargument YouGov 2026 (2.442 Befragte): nur 10 % nutzen Sprachnachrichten regelmäßig, 41 % finden sie überhaupt nicht relevant.','Neu vernetzte Nutzer in Entwicklungsregionen sprechen eher, als dass sie tippen (nur eine Beobachtung, keine Messung).']},
 {t:'Hate Speech: Worum geht es?',q:'Arbeitsblatt nach vhs-ehrenamtsportal.de',th:'Hate Speech',
  kern:'Hassrede gibt es offline wie online; im Netz wird sie sichtbarer. Es gibt keine einheitliche Definition, aber typische Muster und rechtliche Grenzen.',
  aus:['Forsa-Umfrage 2016: Zwei Drittel von über 2.000 Befragten haben schon Hassrede im Internet gesehen (Tendenz steigend).','Keine einheitliche wissenschaftliche Definition; betont werden abwertende Sprache und das Verurteilen anderer Menschen.','10 typische Muster: falsche Aussagen, Gleichsetzung, Tarnung als Humor/Ironie, herabwürdigende Begriffe, Stereotype, Verallgemeinerungen, Wir/Die-Rhetorik, Verschwörungstheorien, Aufruf zu Gewalt, plakative Bildsprache.','Strafbar kann sein: Beleidigung (§ 185 StGB), üble Nachrede (§ 186), Verleumdung (§ 187), Volksverhetzung (§ 130).','Mai 2019: Amtsgericht Heilbronn verurteilt Hasskommentatoren zu insgesamt 47.000 € Geldstrafe.','Hassrede kann unauffällig auftreten und ist nicht immer leicht zu erkennen.','Betroffene können Hate Speech melden oder anzeigen.']},
 {t:'Wie lebt es sich mit einem Shitstorm?',q:'Interview mit Jasna Strick von Julia Schramm, 2015',th:'Hate Speech, Folgen',
  kern:'Die Feministin Jasna Strick beschreibt, wie ein Shitstorm ihr Leben verändert hat.',
  aus:['Auslöser: ein Vortrag (2013) über Hate Speech gegen die Initiatorinnen von #aufschrei.','Folgen: twittert weniger persönlich, Albträume, Angst bei Vorträgen, geht nicht an unterdrückte Nummern, kein Impressum mehr, privater Instagram-Account.','Sie meidet Familienfeste und schützt ihre Partnerschaft vor den Hatern.','Ihre Masterarbeit dauerte ein Semester länger, mit finanziellen Folgen.','Deutung: Shitstorms gegen Feministinnen sollen diese zum Schweigen bringen.','Unterstützung kam von ihrer Twitter-Timeline, Freundinnen und anderen Feministinnen.']},
 {t:'Umfragen zu Hate Speech (M2, M3)',q:'statista / LfM, forsa 2017 · g/d/p',th:'Hate Speech, Zahlen',
  kern:'Viele sehen Hass im Netz, wenige reagieren – und Betroffene halten sich mit eigenen Beiträgen zurück.',
  aus:['67 % der Onliner in Deutschland haben schon Hasskommentare gesehen (1.011 Befragte ab 14 Jahren, 2017).','Davon: 39 % haben sich näher damit befasst, 22 % den Kommentar gemeldet, 18 % kritisch geantwortet, 1 % Anzeige erstattet – 44 % haben nichts davon getan.','68 % der Betroffenen haben aus Sorge vor Hassrede schon auf einen Beitrag verzichtet oder vorsichtiger formuliert (Nicht-Betroffene: 37 %).']},
 {t:'Die Metastasen des Hasses',q:'Paul Sailer-Wlasits, 2019',th:'Hate Speech, Lösungen',
  kern:'Hassrede zerstört die Anerkennung zwischen Menschen und kann zur Tat führen. Nur lang-, mittel- und kurzfristige Maßnahmen zusammen helfen.',
  aus:['Hassreden sind „sprachliche Schatten“ der menschlichen Kulturgeschichte.','Hasssprache entsteht, wo Sprache in einen „Modus der Anrede“ (Judith Butler) wechselt und den anderen auf eine Identität festlegt.','Der Übergang vom Wort zur Tat bleibt ein qualitativer Sprung.','Langfristig: politische Bildung als wirksamste und günstigste Präventivmaßnahme.','Mittelfristig: behutsame gesetzliche Regelungen – aber das Risiko für die Meinungsfreiheit ist beträchtlich.','Kurzfristig: Vorbildfunktion von Politikern und Medien – sie ist im Unterschied zu staatlicher Repression kostenlos.','Die kultivierte Gegenrede ist rhetorisch im Nachteil gegenüber der kurzen, scharfen Hassrede.','Eindimensionale Lösungen greifen zu kurz.']}
];

/* ---------- Argumente nach Themen ----------
   b: Belege [Art, Text] mit Art M = Material, U = Unterricht, E = eigene Erfahrung
   ent: wie man das Argument entkräftet bzw. was die Gegenseite sagt */
const DE_ARG=[
 {id:'netz',t:'Internetsprache',q:'Verhunzt die Internetsprache unsere Sprache?',
  pos:'Gut vertretbar: „Nein – das ist normaler Sprachwandel“, wenn du die Sorge der Sprachbewahrer ernst nimmst und entkräftest. Auch „Ja, aber …“ ist möglich, wenn du es gut begründest.',
  pro:{h:'Nein – Sprachwandel, kein Sprachverfall',a:[
   {t:'Jugendliche wechseln je nach Situation die Sprache.',d:'Wer im Chat locker schreibt, kann trotzdem einen Aufsatz schreiben – die Schreibkompetenz wird sogar breiter.',
    b:[['M','Dürscheid-Studie: Die meisten Schüler unterscheiden SMS und Aufsatz; „Sie ist breiter geworden.“'],['U','Dürscheid: Chat = konzeptionell mündlich (Nähe), Aufsatz = konzeptionell schriftlich (Distanz).'],['U','Polenz: Variation – flexible Anpassung an den Zweck.'],['M','Schlobinski: kein Sinn, einen Tweet wie Thomas Mann zu schreiben.'],['E','Klassenchat vs. E-Mail an die Lehrkraft („Sehr geehrte Frau …“).']]},
   {t:'Abkürzen ist sprachökonomisch, nicht faul.',d:'Menschen wählen schon immer den kürzesten Ausdruck, wenn es die Situation erlaubt.',
    b:[['U','Polenz: Sprachökonomie (Bequemlichkeit, Zeitersparnis, Kosten-Nutzen).'],['U','Schulbuch: Sprachwissenschaftler sehen die Ursache des Sprachwandels in der Sprachökonomie.'],['M','„We“ statt „Wochenende“, Präpositionen fallen weg (WiWo/dpa).'],['U','Krischke: Vorteil Effizienz.']]},
   {t:'Netzsprache ist kreativ und erweitert den Ausdruck.',d:'Emojis, Inflektive und Akronyme ersetzen Mimik und Stimme, die im Text fehlen.',
    b:[['M','Kühl: „lol“ drückt Heiterkeit, Verwunderung und Ironie aus; laut OED mehr als eine Abkürzung.'],['M','Schlobinski: Wo Mimik und Stimme fehlen, müssen Worte Gefühle vermitteln.'],['U','Kritische Texte: Neue Sprachtrends werden für ihr schöpferisches Potenzial gelobt.'],['U','Polenz: Innovation – neue Wörter für neue Bedürfnisse.']]},
   {t:'Sprache hat sich schon immer verändert.',d:'Jede Epoche hat neue Wörter aufgenommen – heute kommen sie eben aus dem Netz.',
    b:[['U','Sprachgeschichte: „Bank, Risiko, Kapital“ (Italienisch), „Grenze, Gurke“ (Slawisch), „Universität“ (Latein); Rechtschreibung erst Ende des 19. Jh. geregelt.'],['M','Kühl: „cool“ war auch kein Zeichen der Verrohung, sondern normaler Sprachwandel.'],['M','Das OED nimmt „lol“ und „OMG“ offiziell auf.'],['U','Schulbuch: Jede Sprache durchläuft mit der Zeit einen Wandel.']]},
   {t:'Die Standardsprache bleibt das Zentrum.',d:'Netzsprache ist eine Varietät neben vielen anderen und ersetzt die Standardsprache nicht.',
    b:[['U','Henne: Standardsprache im Zentrum, umgeben von Fach-, Gruppen-, Umgangssprachen.'],['U','König: Schulnorm im Zentrum vieler Subsysteme.'],['M','„Eine einheitliche Websprache gibt es nicht“ – viel Sprachgefühl ist gefragt.']]},
   {t:'Jugendsprache ist kurzlebig und dient der Abgrenzung.',d:'Sie verändert sich schnell und war schon immer ein Zeichen von Gruppenzugehörigkeit.',
    b:[['U','Schulbuch: Jugendsprachen verändern sich besonders schnell; sobald Wörter in die Alltagssprache wandern, entstehen neue.'],['M','Kühl: Der Gebrauch von „lol“ nimmt mit dem Alter ab.']]}
  ]},
  con:{h:'Ja – Gefahr für die Standardsprache',a:[
   {t:'Grammatik und Rechtschreibung werden abgebaut.',d:'Wer ständig verkürzt schreibt, gewöhnt sich Fehler an.',
    b:[['U','Krischke: Nachteil Grammatikabbau und Verflachung.'],['U','Kritische Texte: Umstellungen und Normlockerungen wirken sich auf die Qualität der Hochsprache aus.'],['M','Sprachbewahrer: Jugendliche mit noch nicht gefestigter Rechtschreibung könnten kein korrektes Deutsch lernen.']],
    ent:'Dürscheid-Studie: Schreibkompetenz breiter, nicht schlechter. Schlobinski: Jugendliche schreiben trotzdem ordentliche Aufsätze. Lösung (Krischke): Standardsprache im Fokus der Schule.'},
   {t:'Die Grenzen verwischen – Texte werden immer informeller.',d:'Lockere Sprache taucht auch dort auf, wo sie nicht hingehört.',
    b:[['M','Dürscheid: „Die Texte werden immer informeller.“'],['M','Lockerer Ton sogar in Kommentaren auf Seiten seriöser Unternehmen (Deutsche Bahn).'],['U','Notiz: Die Schriftsprache bekommt den Charakter des Mündlichen („Schreibsprechen“, Krischke).']],
    ent:'Informeller heißt nicht falsch: Im Kommentarbereich ist Nähesprache angemessen. Entscheidend ist das Sprachgefühl für die Situation.'},
   {t:'Englisch verdrängt deutsche Wörter.',d:'Durch Globalisierung und Digitalisierung kommen immer mehr Anglizismen ins Deutsche.',
    b:[['U','Krischke: Einfluss des Englischen durch Globalisierung und Digitalisierung.'],['U','Notiz: Einfluss fremder Sprachen (Englisch, Arabisch, Türkisch, Slawisch).']],
    ent:'Sprachgeschichte: Fremdwörter gab es immer (Latein, Französisch, Italienisch). Kritische Texte: Englisch sorgt international für Verständnis.'},
   {t:'Missverständnisse durch Kürze.',d:'Telegrammstil und fehlende Zusammenhänge können Kommunikation misslingen lassen.',
    b:[['U','Schulbuch (X/Twitter): Gefahr von Unterkomplexität und misslingender Kommunikation.'],['U','Sprachökonomie: In den kritischen Texten auch als negativer Effekt notiert.']],
    ent:'Emojis, Inflektive und Rückfragen gleichen fehlende Mimik aus (Schlobinski); bei wichtigen Dingen wechselt man ohnehin das Medium.'}
  ]}},
 {id:'sprachnachricht',t:'Sprachnachrichten',q:'Sprachnachrichten – Bereicherung oder Zumutung?',
  pos:'Gut vertretbar: „Bereicherung – wenn man sie mit Rücksicht einsetzt“ (eingeschränkte Zustimmung). Wichtig: Zahlen immer mit Quelle und Jahr nennen und die Preply-Zahlen kritisch einordnen.',
  pro:{h:'Bereicherung',a:[
   {t:'Die Stimme transportiert Gefühle, Tonfall und Ironie.',d:'Was im Text verloren geht, kommt mit der Stimme zurück.',
    b:[['M','WhatsApp: Gefühle und Begeisterung lassen sich über die Stimme natürlicher zeigen.'],['M','Preply 2023: 50 % sagen, Sprachnachrichten hätten ihre Beziehungen gestärkt (Branchenumfrage!).'],['U','Dürscheid: medial und konzeptionell mündlich = Sprache der Nähe.'],['M','Schlobinski: Im Text müssen Worte die fehlende Mimik ersetzen.']]},
   {t:'Komplexe Gedanken lassen sich leichter erklären.',d:'Wer viel zu sagen hat, ist mit Sprechen schneller als mit Tippen.',
    b:[['M','Preply: 48 % nutzen Sprachnachrichten für komplexe Gedanken.'],['U','Polenz: Sprachökonomie für den Sender.'],['E','Beim Radfahren oder Kochen kann man nicht tippen.']]},
   {t:'Sie sind in allen Generationen angekommen.',d:'Das ist kein Jugendtrend, sondern ein Wandel der Kommunikation insgesamt.',
    b:[['M','7 Mrd. Sprachnachrichten täglich auf WhatsApp (2022).'],['M','Preply: auch 47 % der Babyboomer senden Sprachnachrichten.'],['U','Polenz: soziokulturelle Evolution (Folge technischer und gesellschaftlicher Veränderung).'],['E','Großeltern, denen das Tippen schwerfällt.']]},
   {t:'Sie sind kreativ und persönlich.',d:'Man kann mit der Stimme spielen, Geräusche einbauen, eine kleine Szene „aufführen“.',
    b:[['M','König/Hector: Theatralität, „dramas to an audience“ (Goffman).'],['U','Polenz: Innovation.']]},
   {t:'Sie machen Kommunikation zugänglicher.',d:'Für Menschen, die schlecht tippen oder schreiben können, sind sie eine Erleichterung.',
    b:[['M','Neu vernetzte Nutzer in Entwicklungsregionen sprechen eher, als dass sie tippen (nur Beobachtung).'],['E','Großeltern, Kinder, Menschen mit Lese-Rechtschreib-Schwäche.']]}
  ]},
  con:{h:'Zumutung',a:[
   {t:'Sie sind doppelt verzögert – kein echtes Gespräch.',d:'Ein kurzer Austausch dauert viel länger als ein Telefonat.',
    b:[['M','König/Hector: über zwei Minuten für ein Aktions-Reaktions-Paar aus 30-Sekunden-Nachrichten.'],['M','Auer: Im Gespräch laufen Produktion und Rezeption gleichzeitig.'],['U','Synchron vs. asynchron (Dürscheid).']],
    ent:'Dafür ist man zeitlich flexibel: Jeder hört, wann er Zeit hat. Für Dringendes ruft man an.'},
   {t:'Der Empfänger hat den Aufwand.',d:'Zuhören dauert länger als Lesen, man kann nicht überfliegen.',
    b:[['M','68 % müssen Sprachnachrichten mehrmals hören, 48 % finden sie aufwendiger (Preply).'],['M','Lesen ist für die meisten schneller als Zuhören.'],['U','Sprachökonomie gilt nur für den Sender (Polenz, gegen den Strich gelesen).']],
    ent:'Preply ist eine Branchenumfrage. Außerdem kann man Sprachnachrichten heute oft beschleunigt abspielen oder transkribieren.'},
   {t:'Sie passen nicht in jede Situation.',d:'Im Unterricht, im Bus oder in der Bibliothek kann man sie weder aufnehmen noch abhören.',
    b:[['M','König/Hector: ungewollte Mithörer, weniger diskret, mehr Datenvolumen.'],['U','Faktoren der Sprachverwendung: Situation und Medium.']],
    ent:'Dann wählt man eben die Textnachricht – genau das ist Variation (Polenz).'},
   {t:'Oft wird viel Belangloses erzählt.',d:'Lange Monologe ohne Struktur nerven.',
    b:[['M','Jodel: „sowas wie telefonieren für ganz Faule“.'],['M','37 % der Millennials fühlen sich von Sprachnachrichten gestört.'],['E','Die 4-Minuten-Nachricht, die nur „Treffen um 3“ sagt.']],
    ent:'Das ist eine Frage der Rücksicht, nicht des Mediums.'},
   {t:'Der Hype wird überschätzt.',d:'Viele haben es probiert, regelmäßig nutzen es wenige.',
    b:[['M','YouGov 2026: nur 10 % nutzen Sprachnachrichten regelmäßig, 41 % finden sie nicht relevant.'],['M','Die 7-Milliarden-Zahl ist von 2022 und stammt von WhatsApp selbst.']],
    ent:'Auch 10 % regelmäßige Nutzer bei über 3 Mrd. WhatsApp-Nutzern sind sehr viele Menschen.'}
  ]}},
 {id:'hate',t:'Hate Speech',q:'Hass im Netz – brauchen wir strengere Gesetze? Wie sollten wir reagieren?',
  pos:'Stark: „Gesetze allein reichen nicht – Bildung, Vorbilder und Zivilcourage müssen dazukommen“ (Sailer-Wlasits im Schluss).',
  pro:{h:'Für strengeres Vorgehen',a:[
   {t:'Hass im Netz hat reale Folgen.',d:'Betroffene leiden psychisch, ziehen sich zurück, Worte können zu Taten werden.',
    b:[['M','Jasna Strick: Albträume, Angst, Rückzug, Masterarbeit verzögert.'],['U','Schulbuch: Hatespeech als Nährboden für reale Übergriffe.'],['M','Sailer-Wlasits: Der Übergang vom Wort zur Tat ist ein qualitativer Sprung – aber er passiert.']]},
   {t:'Hass bringt andere zum Schweigen.',d:'Wenn Betroffene sich zurückziehen, verzerrt sich das Meinungsbild.',
    b:[['M','68 % der Betroffenen posten vorsichtiger oder gar nicht mehr (g/d/p).'],['U','Schulbuch: Verzerrung des Meinungsbilds, schweigende Mehrheit wird nicht wahrgenommen.'],['U','Pörksen: „Erregungsgesellschaft“ – die Lauten bestimmen den Diskurs.']]},
   {t:'Strafen wirken und setzen Grenzen.',d:'Meinungsfreiheit endet, wo Beleidigung und Volksverhetzung beginnen.',
    b:[['M','§§ 185–187, 130 StGB; Heilbronn 2019: 47.000 € Geldstrafe.'],['U','Schulbuch: 2021 musste ein 25-Jähriger 5.400 € zahlen, weil er den Hanauer Bürgermeister beleidigt und bedroht hatte.'],['U','Diskutierte Maßnahmen: Löschpflicht für Plattformen, Klarnamenpflicht, Strafverfolgung.']]},
   {t:'Viele sehen Hass, wenige handeln.',d:'Es braucht mehr Druck, damit gemeldet und gelöscht wird.',
    b:[['M','67 % haben Hasskommentare gesehen, nur 22 % gemeldet, 44 % nichts getan (forsa 2017).'],['U','Enthemmungseffekt: Hass verbreitet sich schnell, einfach und anonym.']]}
  ]},
  con:{h:'Gegen (nur) strengere Gesetze',a:[
   {t:'Die Meinungsfreiheit ist in Gefahr.',d:'Wenn der Staat entscheidet, was Hass ist, kann auch legitime Kritik gelöscht werden.',
    b:[['M','Sailer-Wlasits: Das Risiko der Beschädigung der Meinungsfreiheit ist beträchtlich.'],['U','Kontra-Argument „Sprachpolizei“ (Sprachreglementierung).']],
    ent:'Hassrede ist oft gar nicht von der Meinungsfreiheit gedeckt (Volksverhetzung, Beleidigung). Behutsame Gesetze mit klaren Regeln.'},
   {t:'Es gibt keine einheitliche Definition.',d:'Was genau verboten sein soll, ist schwer abzugrenzen.',
    b:[['M','Arbeitsblatt: keine einheitliche Definition; Hassrede tritt oft unauffällig auf.'],['M','Zwei unterschiedliche Definitionen: Krauthausen und Meibauer.']],
    ent:'Die 10 Muster (Wir/Die-Rhetorik, Stereotype …) helfen beim Erkennen; für Straftaten gibt es klare Paragrafen.'},
   {t:'Gesetze allein greifen zu kurz.',d:'Hass hat viele Ursachen – nur mehrere Maßnahmen zusammen helfen.',
    b:[['M','Sailer-Wlasits: langfristig Bildung, mittelfristig behutsame Gesetze, kurzfristig Vorbilder.'],['M','Sarah Bosetti: Gegenrede mit Liebesgedichten.'],['E','Selbst Kommentare melden, Betroffenen beistehen.']],
    ent:'Kein Widerspruch: Gesetze sind ein Baustein, aber eben nur einer.'}
  ]}},
 {id:'englisch',t:'Englisch & Mischung',q:'Bedrohen Anglizismen und Sprachmischungen das Deutsche?',
  pos:'Meist: „Nein – Sprachkontakt gab es immer; wichtig ist, dass die Standardsprache in der Schule gesichert wird.“',
  pro:{h:'Keine Bedrohung',a:[
   {t:'Sprachkontakt gab es immer.',d:'Deutsch hat sich durch fremde Einflüsse entwickelt.',
    b:[['U','Sprachgeschichte: Latein (Kloster, Universität), Französisch (Turnier, Lanze), Italienisch (Bank, Risiko), Slawisch (Grenze, Gurke).'],['U','Polenz: soziokulturelle Evolution – Einfluss anderer Sprachkulturen.']]},
   {t:'Mehrsprachigkeit ist eine Fähigkeit.',d:'Wer zwischen Sprachen oder Varietäten wechseln kann, kann mehr.',
    b:[['U','Schulbuch: Mehrsprachigkeit, Codeswitching abhängig von Kontext und Gesprächspartner.'],['E','Codeswitching in der Familie oder im Freundeskreis.']]},
   {t:'Englisch erleichtert Verständigung.',d:'In einer globalen Welt helfen gemeinsame Wörter.',
    b:[['U','Kritische Texte: Einfluss des Englischen sorgt für Verständnis.'],['U','Krischke: Globalisierung und Digitalisierung als Triebkräfte.']]}
  ]},
  con:{h:'Gefahr',a:[
   {t:'Endungen und Grammatik gehen verloren.',d:'In der mündlichen Umgangssprache fallen Endungen weg.',
    b:[['U','Schulbuch: Sprachkontakt mit Migrantensprachen verändert die Umgangssprache (Wegfall von Endungen).'],['U','Krischke: Grammatikabbau, Verflachung.']],
    ent:'Das betrifft vor allem die mündliche Umgangssprache, nicht die Standardsprache (Henne, König).'},
   {t:'Wer die Standardsprache nicht beherrscht, wird ausgegrenzt.',d:'Bildungschancen hängen an der Norm.',
    b:[['U','Kritische Texte: Hochsprachliche Regeln können Ungebildete und Zugewanderte benachteiligen.'],['U','Krischke: Standardsprache im Fokus der Bildung.']],
    ent:'Gerade deshalb: Standardsprache fördern, statt Mischsprachen abzuwerten.'}
  ]}},
 {id:'regel',t:'Gendern & Co.',q:'Soll Sprache reglementiert werden (gendergerechte, politisch korrekte, leichte Sprache)?',
  pos:'Thema aus dem Schaubild „Diskussionsfelder der Sprachreglementierung“. Sprachliche Richtlinien sind laut Schulbuch selbst ein Faktor des Sprachwandels.',
  pro:{h:'Pro',a:[
   {t:'Sprache beeinflusst das Denken.',d:'Wer alle nennt, denkt auch an alle.',
    b:[['U','Schaubild: Gendergerechte Sprache – Beeinflussung des Denkens, mehr Gleichberechtigung, Einbeziehen aller Menschen.'],['U','Politisch korrekte Sprache: gegen Stereotype, Vermeidung von Diskriminierungsgefühlen.']]},
   {t:'Leichte Sprache ermöglicht Teilhabe.',d:'Barrierefreiheit für Menschen mit Leseschwierigkeiten.',
    b:[['U','Schaubild: Integration und gesellschaftliche Teilhabe, reibungslosere Kommunikation.']]}
  ]},
  con:{h:'Kontra',a:[
   {t:'Sprache wird komplizierter.',d:'Regeln erschweren Lesen und Schreiben.',
    b:[['U','Schaubild: Verkomplizierung der Sprache; Leichte Sprache: weniger Ausdrucksfähigkeit.']],
    ent:'Es gibt einfache Lösungen (Doppelnennung, neutrale Formen).'},
   {t:'Sprache allein ändert die Wirklichkeit nicht.',d:'Ungerechtigkeit muss man im Handeln bekämpfen.',
    b:[['U','Schaubild: keine Auswirkung auf nichtsprachliche Ungerechtigkeiten; Vorwurf der „Sprachpolizei“; Erzeugung von Widerstand.']],
    ent:'Sprache und Handeln schließen sich nicht aus.'}
  ]}}
];

/* ---------- Fachbegriffe ---------- */
// p = aus dem Unterricht/Material, e = Ergänzung
const DE_BEGRIFFE=[
 {g:'Sprachwandel',t:'Sprachwandel',d:'Jede Sprache verändert sich mit der Zeit, im Mündlichen wie im Schriftlichen. Besonders schnell sichtbar bei Jugendsprachen. Einflussfaktoren laut Schulbuch: Globalisierung, Migration, Medien, sprachliche Richtlinien (z. B. Rechtschreibreform).',p:1},
 {g:'Sprachwandel',t:'Sprachökonomie',d:'Das Bestreben, mit möglichst wenig Aufwand (Zeit, Mühe) zu kommunizieren: Menschen bevorzugen den direkten und kürzesten Ausdruck (Bequemlichkeit, Zeitersparnis, Kosten-Nutzen-Abwägung). Laut Schulbuch sehen Sprachwissenschaftler hier die Ursache des Sprachwandels; bei Polenz das erste Motiv. Beispiele: „we“, „lol“, „haste“, Emojis statt Sätzen.',p:1},
 {g:'Sprachwandel',t:'Innovation (Polenz)',d:'Neue Begriffe für neue oder kreative Bedürfnisse (z. B. „posten“, „liken“, „Emoji“).',p:1},
 {g:'Sprachwandel',t:'Variation (Polenz)',d:'Flexible Anpassung der Sprache an den jeweiligen Zweck und die Situation (welche Situation, welche Sprache?).',p:1},
 {g:'Sprachwandel',t:'Soziokulturelle Evolution (Polenz)',d:'Sprachwandel als Folge gesellschaftlicher Veränderungen: Einfluss anderer Sprachkulturen, mediale Veränderungen, Globalisierung.',p:1},
 {g:'Sprachwandel',t:'Schreibsprechen (Krischke)',d:'Durchmischung von Mündlichkeit und Schriftlichkeit in E-Mails und Chatforen: Man schreibt, wie man spricht.',p:1},
 {g:'Sprachwandel',t:'Sprachbewahrer / Sprachpuristen',d:'Menschen, die die Sprache „rein“ halten wollen und im Sprachwandel einen Kulturverlust oder Sprachverfall sehen.',p:1},
 {g:'Sprachwandel',t:'Fremdwort / Lehnwort',d:'Wörter aus anderen Sprachen. Lehnwörter sind so angepasst, dass man ihre Herkunft kaum noch merkt (z. B. „Fenster“ aus dem Lateinischen), Fremdwörter erkennt man noch (z. B. „Risiko“). Anglizismus = Wort aus dem Englischen.',p:0},
 {g:'Varietäten',t:'Standardsprache',d:'Die Sprachform, die für das gesamte deutsche Sprachgebiet gilt und in Grammatiken und Wörterbüchern festgehalten wird. Veraltet: Hochsprache. Bezugszentrum der Sprache und selbst eine Varietät.',p:1},
 {g:'Varietäten',t:'Sprachvarietät / Sondersprache',d:'Eine bestimmte Ausprägung einer Einzelsprache, die diese ergänzt, erweitert oder modifiziert, jedoch nicht unabhängig von ihr existieren kann (z. B. Umgangssprache, Dialekt, Fachsprache, Gruppensprache).',p:1},
 {g:'Varietäten',t:'Dialekt / Mundart',d:'Regional begrenzte Sprachverwendung, die sich auf allen Sprachebenen (Aussprache bis Grammatik) von der Standardsprache unterscheidet. Reine Dialekte haben immer weniger Sprecher.',p:1},
 {g:'Varietäten',t:'Regiolekt',d:'Dialektal gefärbte Sprechweise, die entsteht, wenn sich Dialekte der Standardsprache annähern (Regionalsprache).',p:1},
 {g:'Varietäten',t:'Soziolekt',d:'Eigene Sprechweise einer sozialen Gruppe; grenzt nach außen ab und stärkt den Zusammenhalt (z. B. Jugendsprachen).',p:1},
 {g:'Varietäten',t:'Jugendsprache',d:'Keine einheitliche Sprache, sondern viele Sprechweisen in jugendlichen Umfeldern: spielerische Variation und Verfremdung. Verändert sich besonders schnell – werden Elemente in die Alltagssprache übernommen, entstehen neue.',p:1},
 {g:'Varietäten',t:'Fachsprache / Technolekt',d:'Sprache eines Fachgebiets (Recht, Medizin, Technik, Sport …), z. B. „Indizienbeweis“, „Herzinfarkt“.',p:1},
 {g:'Varietäten',t:'Umgangssprache',d:'Alltägliche, informelle Sprache zwischen Standard und Dialekt („Haste wos gekriegt?“).',p:1},
 {g:'Varietäten',t:'Funktionalstil (Henne)',d:'Verwendungsbereich der Standardsprache: alltäglicher, arbeitssprachlicher, wissenschaftlicher und literarisch-künstlerischer Verkehr.',p:1},
 {g:'Varietäten',t:'Idiolekt',d:'Die ganz persönliche Sprechweise eines einzelnen Menschen (bei Löffler).',p:1},
 {g:'Varietäten',t:'Mediolekt',d:'Varietät, die vom Medium geprägt ist (bei Löffler), z. B. Sprache im Chat oder im Fernsehen.',p:1},
 {g:'Varietäten',t:'Mehrsprachigkeit',d:'Nicht klar definiert: mehrere Sprachen in einem Land (Schweiz, Belgien) · Fähigkeit einer Person, sich in zwei oder mehr Sprachen zu verständigen (Bilingualität) · Verwendung mehrerer Varietäten einer Sprache (Beruf, Freizeit).',p:1},
 {g:'Varietäten',t:'Codeswitching',d:'Wechsel von einer Sprache oder Varietät in eine andere während des Sprechens, auch mitten im Satz – abhängig vom Kontext und vom Gesprächspartner.',p:1},
 {g:'Digitale Kommunikation',t:'Mediale Mündlichkeit',d:'Sprache wird gesprochen (phonische Tätigkeit), z. B. Gespräch, Sprachnachricht, Vortrag.',p:1},
 {g:'Digitale Kommunikation',t:'Mediale Schriftlichkeit',d:'Sprache wird geschrieben (grafische Tätigkeit), z. B. Brief, Chat, Aufsatz.',p:1},
 {g:'Digitale Kommunikation',t:'Konzeptionelle Mündlichkeit',d:'Sprache der Nähe: spontan, vertraut, locker, mit Verkürzungen und Umgangssprache – auch wenn sie geschrieben wird (z. B. WhatsApp).',p:1},
 {g:'Digitale Kommunikation',t:'Konzeptionelle Schriftlichkeit',d:'Sprache der Distanz: geplant, formell, sachlich, vollständige Sätze – auch wenn sie gesprochen wird (z. B. Vortrag, Nachrichtensprecher).',p:1},
 {g:'Digitale Kommunikation',t:'Synchron',d:'Gleichzeitige Kommunikation: Produktion und Rezeption laufen parallel (Gespräch, Telefonat).',p:1},
 {g:'Digitale Kommunikation',t:'Asynchron',d:'Zeitversetzte Kommunikation (Brief, E-Mail, Sprachnachricht).',p:1},
 {g:'Digitale Kommunikation',t:'Quasi-synchron',d:'Fast gleichzeitig: Chats, wenn alle gerade online sind (Dürscheid/Frick 2014).',p:1},
 {g:'Digitale Kommunikation',t:'Akronym / Initialwort',d:'Aus den Anfangsbuchstaben mehrerer Wörter gebildetes Kurzwort: lol (laughing out loud), omg (oh my god).',p:1},
 {g:'Digitale Kommunikation',t:'Emoticon',d:'Kunstwort aus „Emotion“ und „Icon“: eine Zeichenfolge, die einen Smiley nachbildet, z. B. :-) oder &lt;3.',p:1},
 {g:'Digitale Kommunikation',t:'Icon / Emoji',d:'Vorgefertigtes grafisches Symbol. Dient vor allem der schnellen Mitteilung von Gefühlen und Bewertungen.',p:1},
 {g:'Digitale Kommunikation',t:'Inflektiv',d:'Verbform ohne Flexionsendung, aus der Comicsprache: freu, grins, seufz.',p:1},
 {g:'Digitale Kommunikation',t:'Interjektion',d:'Ausruf- oder Empfindungswort wie „hm“, „ok“, „haha“, „bäm“; auch „lol“ wird so gebraucht.',p:1},
 {g:'Digitale Kommunikation',t:'Theatralität',d:'Sprachnachrichten ermöglichen kleine „Aufführungen“ im Alltag (Goffman: „dramas to an audience“), z. B. durch Stimme, Betonung, Geräusche (König/Hector).',p:1},
 {g:'Medien',t:'Bürgerjournalismus / Produser',d:'Jeder kann im Netz journalistisch tätig werden, Texte veröffentlichen, kommentieren: Der Einzelne ist nicht mehr nur Konsument, sondern auch Sender (Web 2.0, many-to-many).',p:1},
 {g:'Medien',t:'Gatekeeper',d:'Journalisten als „Türhüter“, die bestimmen, worüber berichtet wird – diese Rolle haben sie durch das Internet verloren (Hörisch: jetzt „Gatewatcher“ oder „Barkeeper“).',p:1},
 {g:'Medien',t:'Vierte Gewalt',d:'Die Massenmedien als gesellschaftliches Korrektiv neben Legislative, Exekutive, Judikative (Kontroll-, Meinungsbildungs-, Informationsfunktion).',p:1},
 {g:'Medien',t:'Fünfte Gewalt (Pörksen)',d:'Die digitale Öffentlichkeit in sozialen Medien, getragen von vielen vernetzten Einzelnutzern („Konnektiv“).',p:1},
 {g:'Medien',t:'Erregungsgesellschaft (Pörksen)',d:'Gesellschaft, in der vor allem laute, polarisierende Äußerungen den Diskurs bestimmen (Aufmerksamkeitskonkurrenz).',p:1},
 {g:'Medien',t:'Filterblase',d:'Algorithmen schlagen Beiträge mit gleicher Tendenz vor; die eigene Haltung wird verstärkt, Gegenargumente kommen kaum noch ins Blickfeld.',p:1},
 {g:'Medien',t:'Clickbaiting',d:'Reißerische Überschriften (engl. bait = Köder), die Neugier wecken, aber vom Inhalt kaum gedeckt sind.',p:1},
 {g:'Medien',t:'Troll / Social Bot',d:'Trolle stören Onlinediskussionen gezielt mit provokanten Beiträgen; Social Bots verbreiten automatisiert Meldungen.',p:1},
 {g:'Medien',t:'Fake News',d:'Falschnachrichten, die meist mit Täuschungsabsicht verbreitet werden; sprachlich: polarisierend, stark wertend, direkte Ansprache. Gegenmittel: Quellen prüfen, Faktenchecks (Correctiv, Mimikama).',p:1},
 {g:'Hate Speech',t:'Hate Speech / Hassrede',d:'Äußerungen, die Menschen abwerten oder angreifen und zu Hass und Gewalt gegen Personen(gruppen) aufrufen. Keine einheitliche Definition.',p:1},
 {g:'Hate Speech',t:'Hasspropaganda',d:'Will mit manipulativen Methoden Menschen und die Öffentlichkeit beeinflussen.',p:1},
 {g:'Hate Speech',t:'Cybermobbing',d:'Beleidigung, Bedrohung, Bloßstellung oder Belästigung von Einzelpersonen mithilfe von Kommunikationsmedien.',p:1},
 {g:'Hate Speech',t:'Shitstorm',d:'Massenhafte, oft beleidigende Kritik im Netz gegen eine Person oder Organisation.',p:1},
 {g:'Hate Speech',t:'Enthemmungseffekt',d:'Im Netz verbreitet sich Hass schnell, einfach und anonym, weil ein direktes Gegenüber fehlt.',p:1},
 {g:'Hate Speech',t:'Wir/Die-Rhetorik',d:'Typisches Hate-Speech-Muster: Eine Gruppe („die“) wird als Gefahr für „uns“ dargestellt.',p:1},
 {g:'Hate Speech',t:'Gegenrede (Counter Speech)',d:'Sachliche oder kreative Antwort auf Hasskommentare (z. B. Sarah Bosettis Liebesgedichte). Laut Sailer-Wlasits rhetorisch im Nachteil, weil sie begründen muss.',p:1},
 {g:'Textsorte',t:'Kommentar',d:'Meinungsbetonter Text zu einem aktuellen, strittigen Thema. Die eigene Meinung wird schon in der Einleitung deutlich, subjektiver Stil, rhetorische Mittel erlaubt, aber sachlich begründet.',p:1},
 {g:'Textsorte',t:'Erörterung',d:'Argumente zu einer Fragestellung; die eigene Meinung steht erst im Schluss. Sachlicher Stil ohne Humor und rhetorische Mittel.',p:1},
 {g:'Textsorte',t:'Glosse',d:'Kommentiert aktuelles Geschehen in sehr polemischem Ton und verspottet die Gegenposition persönlich.',p:1},
 {g:'Textsorte',t:'Stellungnahme / Leserbrief',d:'Übergeordnete Form des Kommentars: Man kommentiert ein Thema, das einen persönlich betrifft.',p:1},
 {g:'Textsorte',t:'Kolumne',d:'Erscheint regelmäßig, immer vom selben Autor, nicht unbedingt zu aktuellen Themen.',p:1},
 {g:'Textsorte',t:'Rezension / Kritik',d:'Unterart des Kommentars, beurteilt eine künstlerische Leistung (Buch, Film, Theaterstück).',p:1},
 {g:'Textsorte',t:'These · Begründung · Beleg · Beispiel',d:'Bausteine eines Arguments: Behauptung → Warum? → Beweis aus Material/Unterricht → anschauliches Beispiel (z. B. eigene Erfahrung) → Rückbezug zur These.',p:1},
 {g:'Textsorte',t:'Adressatenbezug',d:'Wortwahl an den Leserkreis anpassen: Schülerzeitung „wir“, „ihr“, einzelne Elemente der Jugendsprache; Tageszeitung ohne Modewörter. Nie durchgängig Umgangssprache.',p:1},
 {g:'Sprachreglementierung',t:'Leichte Sprache',d:'Ziel: Barrierefreiheit. Pro: Teilhabe, Gleichberechtigung. Kontra: Ausgrenzung, weniger Ausdrucksfähigkeit, Inhalt leidet.',p:1},
 {g:'Sprachreglementierung',t:'Politisch korrekte Sprache',d:'Ziel: Diskriminierungsfreiheit. Pro: beeinflusst Denken, gegen Stereotype. Kontra: ändert die Wirklichkeit nicht, „Sprachpolizei“, Vorwurf der Ideologisierung.',p:1},
 {g:'Sprachreglementierung',t:'Gendergerechte Sprache',d:'Ziel: mehr Gleichberechtigung. Pro: beeinflusst Denken, bezieht alle ein. Kontra: verkompliziert die Sprache, keine Wirkung auf nichtsprachliche Ungerechtigkeit, erzeugt Widerstand.',p:1}
];

/* ---------- Wer sagt was? ---------- */
const DE_WER=[
 ['„Die Schreibkompetenz hat nicht nachgelassen – im Gegenteil. Sie ist breiter geworden.“','Christa Dürscheid'],
 ['„Die Texte werden immer informeller.“','Christa Dürscheid'],
 ['Konzeptionelle Mündlichkeit = Sprache der Nähe, konzeptionelle Schriftlichkeit = Sprache der Distanz','Christa Dürscheid'],
 ['„Es macht keinen Sinn so zu schreiben wie Thomas Mann, wenn ich einen Tweet verfasse.“','Volker Schlobinski'],
 ['Wo Gesichtsausdruck und Stimmlage fehlen, müssen Worte Gefühle vermitteln.','Volker Schlobinski'],
 ['Vier Motive des Sprachwandels: Sprachökonomie, Innovation, Variation, soziokulturelle Evolution','Peter von Polenz'],
 ['„Schreibsprechen“ in E-Mails und Chats; Vorteil Effizienz, Nachteil Grammatikabbau','Wolfgang Krischke'],
 ['Die Standardsprache sollte immer im Fokus der Bildung liegen.','Wolfgang Krischke'],
 ['Standardsprache mit vier Funktionalstilen im Zentrum, umgeben von Fach-, Gruppen-, Umgangssprachen und Mundarten','Helmut Henne'],
 ['„Subsysteme des Deutschen“: Schulnorm im Zentrum, Technolekte, Regiolekte, Soziolekte, Slang','Werner König'],
 ['Varietäten als „Spinnennetz“, Hauptachse zwischen gesprochener und geschriebener Sprache','Heinrich Löffler'],
 ['„Lol“ ist kein Zeichen der Verrohung, sondern normaler Sprachwandel – wie einst „cool“.','Eike Kühl'],
 ['Sprachnachrichten sind „in einem doppelten Sinn verzögert“.','Katharina König & Tim Moritz Hector'],
 ['Die digitale Öffentlichkeit ist die „fünfte Gewalt“; Gefahr einer „Erregungsgesellschaft“.','Bernhard Pörksen'],
 ['Journalisten als „Barkeeper“, der einen Nachrichten-Cocktail mixt','Jochen Hörisch'],
 ['Politische Bildung ist die wirksamste und günstigste Präventivmaßnahme gegen Hassrede.','Paul Sailer-Wlasits'],
 ['„Hate Speech ist der sprachlich ausgedrückte Hass gegenüber einer Personengruppe oder einer Einzelperson wegen ihrer Zugehörigkeit zu einer Personengruppe.“','Raul Krauthausen'],
 ['Nach einem Vortrag über #aufschrei in einen Shitstorm geraten – twittert seitdem weniger persönlich.','Jasna Strick'],
 ['Antwortet auf Hasskommentare mit Liebesgedichten.','Sarah Bosetti']
];

/* ---------- Quiz ---------- */
// r = Index der richtigen Antwort
const DE_QUIZ=[
 {q:'Was gilt laut deiner Lehrkraft für die Klausur?',o:['Keine Zeilenangaben, aber je 4 Auszüge aus Material und Unterricht plus eigene Erfahrungen','Mindestens 3 Zeilenangaben pro Seite','Nur Material, kein Unterrichtswissen','Meinung erst im Schluss nennen'],r:0},
 {q:'Was gehört zur kommunikativen Situation in der Einleitung?',o:['Wer schreibt, für wen, wo es erscheint, Anlass und strittige Frage','Eine Zusammenfassung aller Materialien','Das stärkste Argument','Die Zeilenangaben der Materialien'],r:0},
 {q:'Eine WhatsApp-Nachricht ist nach Dürscheid …',o:['medial schriftlich, konzeptionell mündlich','medial mündlich, konzeptionell schriftlich','medial und konzeptionell schriftlich','medial und konzeptionell mündlich'],r:0},
 {q:'Ein Nachrichtensprecher liest einen vorbereiteten Text vor. Das ist …',o:['medial mündlich, konzeptionell schriftlich','medial schriftlich, konzeptionell mündlich','Sprache der Nähe','quasi-synchron'],r:0},
 {q:'Was ist KEIN Motiv des Sprachwandels nach Peter von Polenz?',o:['Grammatikunterricht','Sprachökonomie','Innovation','Soziokulturelle Evolution'],r:0},
 {q:'„we“ statt „Wochenende“ ist ein Beispiel für …',o:['Sprachökonomie','Innovation','Codeswitching','konzeptionelle Schriftlichkeit'],r:0},
 {q:'Was ist ein Inflektiv?',o:['grins, seufz, freu','lol, omg',':-) und &lt;3','„Haste wos gekriegt?“'],r:0},
 {q:'Welche Triebkräfte nennt Wolfgang Krischke?',o:['Globalisierung, Digitalisierung, Migration, Medien','Bequemlichkeit, Kreativität, Mode, Zufall','Schule, Familie, Freunde, Beruf','Latein, Französisch, Italienisch, Englisch'],r:0},
 {q:'Woher stammen „Bank“, „Risiko“ und „Kapital“?',o:['Aus dem Italienischen (Mittelhochdeutsch)','Aus dem Englischen (Gegenwart)','Aus dem Slawischen','Aus dem Indogermanischen'],r:0},
 {q:'Seit wann sind Rechtschreibung und Aussprache im Deutschen geregelt?',o:['Erst seit Ende des 19. Jahrhunderts','Seit Martin Luther','Seit dem Mittelalter','Seit der Rechtschreibreform 1996'],r:0},
 {q:'Warum sind Sprachnachrichten laut König/Hector „doppelt verzögert“?',o:['Aufnehmen und Anhören dauern jeweils so lange wie die Nachricht','Sie werden zweimal verschickt','Man muss sie zweimal hören','Das Netz ist zu langsam'],r:0},
 {q:'Was zeigt die YouGov-Umfrage 2026?',o:['Nur 10 % nutzen Sprachnachrichten regelmäßig','84 % der Gen Z senden Sprachnachrichten','7 Milliarden Sprachnachrichten pro Tag','68 % hören Sprachnachrichten mehrfach'],r:0},
 {q:'Warum solltest du die Preply-Zahlen vorsichtig zitieren?',o:['Branchenumfrage eines Sprachlern-Unternehmens, keine unabhängige Forschung','Sie sind über 20 Jahre alt','Sie stammen von WhatsApp','Sie beziehen sich nur auf Kinder'],r:0},
 {q:'Wie viele Betroffene von Hate Speech haben schon vorsichtiger formuliert oder auf einen Beitrag verzichtet?',o:['68 %','22 %','37 %','44 %'],r:0},
 {q:'Was unterscheidet den Kommentar von der Erörterung?',o:['Im Kommentar ist die Meinung schon in der Einleitung klar','Der Kommentar hat keine Argumente','Die Erörterung darf polemisch sein','Der Kommentar steht im Präteritum'],r:0},
 {q:'Wo steht das stärkste Argument?',o:['Am Ende des Hauptteils','In der Einleitung','Ganz am Anfang des Hauptteils','Im Schluss'],r:0},
 {q:'Was macht der Schluss eines Kommentars?',o:['Meinung auf den Punkt bringen, Bezug zur Einleitung, Appell oder Ausblick','Neue Argumente bringen','Die Materialien zusammenfassen','Die Gegenseite ausführlich darstellen'],r:0},
 {q:'Was ist Codeswitching?',o:['Wechsel zwischen Sprachen oder Varietäten beim Sprechen','Eine Programmiersprache','Ein Dialekt aus der Schweiz','Das Weglassen von Endungen'],r:0},
 {q:'Welche Kriterien hat das Oxford English Dictionary für neue Wörter?',o:['Gebräuchlich, allgemein verständlich, ca. fünf Jahre alt','Mindestens zehn Buchstaben','Nur aus dem Englischen','Von Jugendlichen erfunden'],r:0},
 {q:'Was empfiehlt Sailer-Wlasits langfristig gegen Hassrede?',o:['Politische Bildung','Strengere Strafen','Abschalten sozialer Netzwerke','Klarnamenpflicht'],r:0}
];

/* ---------- Checkliste ---------- */
const DE_CHECK=['Kommunikative Situation in der Einleitung (wer schreibt, für wen, wo, Anlass, Frage)','Eigene Position schon in der Einleitung deutlich','Mindestens 4 Auszüge aus dem Material – mit Autor oder Quelle, ohne Zeilenangaben','Mindestens 4 Bezüge zum Unterricht (Polenz, Dürscheid, Krischke, Henne/König/Löffler, Sprachgeschichte …)','Eigene Erfahrungen als Beispiele','Mindestens ein Gegenargument genannt und entkräftet','Stärkstes Argument am Ende des Hauptteils','Überleitungen, roter Faden','Adressaten passend angesprochen (Schülerzeitung: wir/ihr)','Standardsprache, Fachbegriffe, Präsens','Rhetorische Mittel (rhetorische Frage, Ellipse, Antithese …)','Schluss: Rückbezug zu Überschrift/Einleitung + Appell oder Ausblick','Treffende Überschrift','Wortzahl ungefähr eingehalten'];

/* ---------- Kurzfassungen (Karten und Merken) ---------- */
const DE_KURZ=[
 ['Peter von Polenz','4 Motive des Sprachwandels: Sprachökonomie, Innovation, Variation, soziokulturelle Evolution'],
 ['Wolfgang Krischke','Triebkräfte: Globalisierung, Digitalisierung, Migration, Medien · „Schreibsprechen“ · + Effizienz / − Grammatikabbau · Standardsprache in den Fokus der Bildung'],
 ['Christa Dürscheid','medial vs. konzeptionell · Nähe vs. Distanz · quasi-synchron · Studie: Schreibkompetenz „breiter geworden“ · Texte „immer informeller“'],
 ['Volker Schlobinski','Worte ersetzen fehlende Mimik und Stimme · Tweet nicht wie Thomas Mann · Jugendliche schreiben trotzdem gute Aufsätze'],
 ['Helmut Henne','Standardsprache mit 4 Funktionalstilen im Zentrum, außen Fach-, Gruppen-, Umgangssprachen, Mundarten · Wechselbeziehung'],
 ['Werner König','Subsysteme um Schulnorm und Umgangssprache: Technolekte, Regiolekte, Dialekte, Soziolekte, Slang …'],
 ['Heinrich Löffler','„Spinnennetz“ · Hauptachse gesprochen – geschrieben · alle Varietäten verbunden'],
 ['Eike Kühl','OED nimmt „lol“ und „OMG“ auf · „Sprachwandel, nicht Sprachverrohung“ · wie einst „cool“'],
 ['König & Hector','Sprachnachrichten: asynchron, doppelt verzögert, wenig diskret · Theatralität'],
 ['Bernhard Pörksen','fünfte Gewalt · Erregungsgesellschaft · Modus der Kurzfristigkeit'],
 ['Jochen Hörisch','Journalist vom Gatekeeper zum Gatewatcher bzw. „Barkeeper“'],
 ['Sailer-Wlasits','Hassrede: „Modus der Anrede“ · Lösung: Bildung + behutsame Gesetze + Vorbilder']
];

/* ---------- Helfer ---------- */
const deEl=id=>document.getElementById(id);
const DE_BN={M:'Material',U:'Unterricht',E:'Erfahrung'};
const deB=(t,n)=>`<span class="de-b ${t.toLowerCase()}" title="${DE_BN[t]||""}">${t}${n||""}</span>`;
const deMark=s=>s.replace(/ ?\[(M|U|E)(\d*)\]([.,;:!?]?)/g,(m,t,n,pu)=>`<span class="de-nb"> ${deB(t,n)}${pu}</span>`);
const deDef=(t,d)=>`<div class="ps-def de-def"><b class="de-dt">${t}</b>${d}</div>`;
const deTable=(head,rows)=>`<div class="de-tw"><table class="ps-tab"><thead><tr>${head.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const deChips=list=>`<nav class="erachips de-chips">${list.map(([id,l])=>`<a href="#${id}">${l}</a>`).join("")}</nav>`;
const deLegend=()=>`<p class="meta" style="margin:0">${deB("M")} Auszug aus dem Material · ${deB("U")} Wissen aus dem Unterricht · ${deB("E")} eigene Erfahrung</p>`;
const deWords=s=>s.replace(/<[^>]+>/g," ").replace(/\[(M|U|E)\d*\]/g," ").split(/\s+/).filter(w=>/[A-Za-zÄÖÜäöüß0-9]/.test(w)).length;

/* ---------- SVG: Henne und Löffler ---------- */
function deSvgHenne(){
  const c=160,ring=(r,st)=>`<circle cx="${c}" cy="${c}" r="${r}" style="fill:none;stroke:${st};stroke-width:1.6"/>`;
  const t=(x,y,s,sz,w)=>`<text x="${x}" y="${y}" text-anchor="middle" style="font-size:${sz}px;font-weight:${w||600}">${s}</text>`;
  return `<svg viewBox="0 0 320 320" role="img" aria-label="Modell von Helmut Henne">
   <circle cx="${c}" cy="${c}" r="72" style="fill:var(--de-soft);stroke:var(--de);stroke-width:2"/>${ring(105,"var(--de)")}${ring(150,"var(--line)")}
   ${t(c,138,"Standardsprache",12.5,800)}${t(c,154,"alltäglich",10,500)}${t(c,167,"arbeitssprachlich",10,500)}${t(c,180,"wissenschaftlich",10,500)}${t(c,193,"literarisch-künstlerisch",9,500)}
   ${t(c,76,"Literatursprache",11)}${t(c,254,"Mediensprache",11)}
   ${t(70,58,"Gruppensprachen",10.5)}${t(250,58,"Fachsprachen",10.5)}${t(62,270,"Mundarten",10.5)}${t(250,270,"Umgangssprachen",10.5)}
  </svg>`;
}
function deSvgLoeffler(){
  const L=["Dialekte","Funktiolekte","Mediolekte","Idiolekte","Situolekte","Alterssprachen","Genderlekte","Soziolekte"];
  const cx=160,cy=150,R=118,P=L.map((l,i)=>{const a=-Math.PI/2+i*2*Math.PI/L.length;return [cx+R*Math.cos(a),cy+R*Math.sin(a)*0.92,l]});
  let lines="";P.forEach((p,i)=>P.forEach((q,j)=>{if(j>i&&(j-i)%3!==0)lines+=`<line x1="${p[0].toFixed(1)}" y1="${p[1].toFixed(1)}" x2="${q[0].toFixed(1)}" y2="${q[1].toFixed(1)}" style="stroke:var(--line);stroke-width:1"/>`}));
  return `<svg viewBox="-8 0 336 300" role="img" aria-label="Modell von Heinrich Löffler">${lines}
   <circle cx="${cx}" cy="${cy}" r="46" style="fill:var(--de-soft);stroke:var(--de);stroke-width:2"/>
   <line x1="${cx-46}" y1="${cy}" x2="${cx+46}" y2="${cy}" style="stroke:var(--de);stroke-width:1.4"/>
   <text x="${cx}" y="${cy-10}" text-anchor="middle" style="font-size:11px;font-weight:800">gesprochen</text>
   <text x="${cx}" y="${cy+20}" text-anchor="middle" style="font-size:11px;font-weight:800">geschrieben</text>
   ${P.map(([x,y,l])=>`<rect x="${(x-42).toFixed(1)}" y="${(y-10).toFixed(1)}" width="84" height="20" rx="4" style="fill:var(--surface);stroke:var(--de)"/><text x="${x.toFixed(1)}" y="${(y+4).toFixed(1)}" text-anchor="middle" style="font-size:10px;font-weight:700">${l}</text>`).join("")}
  </svg>`;
}

/* =========================================================
   UNTERRICHT
   ========================================================= */
function deSprachwandel(el){
  el.innerHTML=`${deChips([["deGes","Sprachgeschichte"],["deFak","Sprachverwendung"],["deVar","Varietäten"],["deMod","Modelle"],["deWan","Faktoren des Wandels"],["deKri","Bewertung"],["deMeh","Mehrsprachigkeit"]])}
  <section class="tx" id="deGes"><span class="tx-y">Zeitstrahl</span><h2>Die Entwicklung der deutschen Sprache</h2>
   <p>Sprache hat sich <b>immer</b> verändert und immer Wörter aus anderen Sprachen aufgenommen. Das ist dein Joker gegen das Argument „Sprachverfall“.</p>
   ${deTable(["Epoche","Was passiert?","Wörter, die dazukamen"],[
    ["<b>Indoeuropäisch</b> (Indogermanisch)<br>5.–4. Jtd. v. Chr.","Daraus entwickeln sich fast alle europäischen Sprachen (außer Finnisch, Ungarisch), das Indische, Iranische, Armenische.","Kuh, Pflug, Rad, Dach, Arm, Knie, Vater, hundert"],
    ["<b>Germanisch</b><br>2. Jtd. v. Chr. – 500 n. Chr.","Germanische Sprachen: Deutsch, Englisch, Niederländisch, Dänisch, Schwedisch, Norwegisch, Isländisch.","Brot, Schiff, Segel, Helm, König, Volk"],
    ["<b>Althochdeutsch</b><br>ca. 500–1050","Frühes Mittelalter, Stammessprachen (Franken, Alemannen, Bayern, Thüringer). <b>Einfluss des Lateins</b> (Christentum).","Messe, Kapelle, Kloster, schreiben, Tinte, Rose · Literatur: Hildebrandslied"],
    ["<b>Mittelhochdeutsch</b><br>1050–1350","Hoch- und Spätmittelalter; wirtschaftliche, politische, kulturelle Veränderungen. <b>Einfluss des Französischen und Slawischen</b>.","Turnier, Lanze (Rittertum) · Grenze, Quark, Gurke (Slawisch) · Bank, Porto, Risiko, Kapital (Italienisch) · Nibelungenlied"],
    ["<b>Frühneuhochdeutsch</b><br>1350–1650","Frühe Neuzeit, viele Varianten und Schriftdialekte. <b>Einfluss des Lateinischen</b> (Bildung, Recht). Martin Luther.","Akademie, Universität, Studium, Grammatik, Justiz, Prozess, Kanone"],
    ["<b>Neuhochdeutsch</b><br>1650 – heute","Immer einheitlicher; <b>Rechtschreibung und Aussprache erst Ende des 19. Jh. geregelt</b>; 18. Jh. Blütezeit der Literatur, Latein zurückgedrängt; viele neue Fremdwörter.","Freiheit, Revolution, Industrie, Maschine, Lokomotive, Tunnel, Briefmarke · Lessing, Goethe, Schiller"]])}
   <p class="ex" style="margin-top:10px"><b>Für die Klausur:</b> „Schon immer haben fremde Einflüsse unsere Sprache bereichert: ‚Risiko‘ und ‚Kapital‘ kamen aus dem Italienischen, ‚Grenze‘ aus dem Slawischen – heute sind es eben ‚posten‘ und ‚liken‘.“ ${deB("U")}</p>
  </section>

  <section class="tx" id="deFak"><span class="tx-y">Schaubild</span><h2>Faktoren, die die Sprachverwendung beeinflussen</h2>
   <p>Wie jemand spricht oder schreibt, hängt ab von:</p>
   <div class="chips">${["regionale Herkunft","Alter","Beruf","soziale Schicht","Geschlecht","persönliche Merkmale","Situation","Medium der Äußerung","Funktion (auch Textsorte)"].map(x=>`<span class="de-chip">${x}</span>`).join("")}</div>
   <p style="margin-top:10px">Wichtig für jedes Thema: <b>Situation</b> und <b>Medium</b> bestimmen, welche Sprache angemessen ist – im Chat eine andere als im Aufsatz.</p>
  </section>

  <section class="tx" id="deVar"><span class="tx-y">Definitionen</span><h2>Standardsprache und Varietäten</h2>
   ${deDef("Deutsche Standardsprache","Die Sprachform, die für das gesamte deutsche Sprachgebiet gilt und in Grammatiken und Wörterbüchern festgehalten wird (veraltet: Hochsprache). Sie ist das Bezugszentrum – und selbst eine Varietät.")}
   ${deDef("Sprachvarietät / Sondersprache","Eine bestimmte Ausprägung einer Einzelsprache, die diese ergänzt, erweitert oder modifiziert, jedoch nicht unabhängig von ihr existieren kann: Umgangssprache, Dialekt, Fachsprache, Gruppensprache.")}
   <p>Die Varietäten beeinflussen sich gegenseitig (z. B. Wörter aus dem Sport in der Umgangssprache). Die Vielfalt beeinflusst auch die Standardsprache und trägt zum Sprachwandel bei.</p>
   ${deTable(["Varietät","Kurz erklärt"],[
    ["Dialekt","regional begrenzt, unterscheidet sich auf allen Ebenen (Aussprache bis Grammatik); immer weniger Sprecher"],
    ["Regiolekt","dialektal gefärbte Sprechweise, die entsteht, wenn sich Dialekte der Standardsprache annähern"],
    ["Soziolekt","Sprechweise einer sozialen Gruppe; grenzt ab und stärkt den Zusammenhalt"],
    ["Jugendsprache","keine einheitliche; spielerische Variation und Verfremdung; ändert sich besonders schnell – wandern Wörter in die Alltagssprache, entstehen neue"]])}
   <p class="meta" style="margin-top:8px">Notizen aus dem Unterricht: Die Schriftsprache bekommt den Charakter des Mündlichen · Einfluss fremder Sprachen (Englisch, Arabisch, Türkisch, Slawisch) · „Sprachfaulheit“</p>
  </section>

  <section class="tx" id="deMod"><span class="tx-y">Drei Modelle</span><h2>Henne, König, Löffler</h2>
   <h3 class="ps-h">Helmut Henne: Standardsprache im Zentrum</h3>
   ${deSvgHenne()}
   <p>Die <b>Standardsprache</b> ist das Zentrum und teilt sich in <b>vier Funktionalstile</b> (Alltag, Arbeit, Wissenschaft, Literatur/Kunst). Sie ist die Basis der Literatursprache. Außen: Fach-, Gruppen-, Umgangssprachen und Mundarten, dazu die Mediensprache. Standard und „Sondersprachen“ stehen in ständiger <b>Wechselbeziehung</b>.</p>
   <h3 class="ps-h">Werner König: Subsysteme des Deutschen (2011)</h3>
   <p>Im Zentrum die <b>Schulnorm</b> („Hast du etwas bekommen?“) mit der Umgangssprache („Haste wos gekriegt?“). Drumherum feingliedrige Subsysteme:</p>
   ${deTable(["Subsystem","Beispiel"],[["Technolekte (Recht, Medizin, Naturwissenschaften, Technik, Wirtschaft, Sport, Mode)","„der Indizienbeweis“, „der Herzinfarkt“, „der Boom“, „das Make-up“"],["Regiolekte / Dialekte","„Hasch was kriegt?“ / „Häsch oppis übercho?“"],["Soziolekte","„egal, wurscht, schnuppe“"],["Slang","„Zaster, Knast, high“"],["Theologie, Literatur, Poetolekte, Philosophie","„das ökumenische Gespräch“, „der kategorische Imperativ“"]])}
   <h3 class="ps-h">Heinrich Löffler: Varietäten als Spinnennetz (1994)</h3>
   ${deSvgLoeffler()}
   <p>Sprache als <b>mehrdimensionales Beziehungsnetz</b>. Die <b>Hauptachse</b> verläuft zwischen gesprochener und geschriebener Sprache, alle Varietäten sind miteinander verbunden. Löffler will die Komplexität und Relativität jeder Einteilung zeigen.</p>
   <h3 class="ps-h">Vergleich</h3>
   <div class="pk"><div class="pro"><b>Gemeinsam</b><ul><li>Henne und König stellen die Normsprache ins Zentrum</li><li>Die Norm ist von Varietäten „umlagert“</li><li>Varietäten beeinflussen sich gegenseitig</li></ul></div>
   <div class="con"><b>Unterschiede</b><ul><li>Henne teilt in Funktionalstile, König viel feiner nach Bereichen (-lekte)</li><li>König: Schulnorm statt „Standardsprache“ als Begriff</li><li>Löffler hat kein festes Zentrum, sondern ein Netz mit Achse gesprochen/geschrieben</li></ul></div></div>
  </section>

  <section class="tx" id="deWan"><span class="tx-y">Kernstück für die Klausur</span><h2>Faktoren des Sprachwandels</h2>
   <p><b>Schulbuch:</b> Jede Sprache wandelt sich. Einflussfaktoren: <b>Globalisierung, Migration, Medien</b> und <b>sprachliche Richtlinien</b> (z. B. Rechtschreibreform). Sprachwissenschaftler sehen die <b>Ursache in der Sprachökonomie</b>: Viele bevorzugen den direkten und kürzesten Ausdruck.</p>
   <h3 class="ps-h">Peter von Polenz: vier Motive</h3>
   ${deTable(["Motiv","Bedeutung","Beispiel aus der Netzsprache"],[
    ["<b>1. Sprachökonomie</b>","Bequemlichkeit, Zeitersparnis, Kosten-Nutzen-Abwägung („keine Zeit“)","„we“, „lol“, „vllt“, „haste“, Emoji statt Satz"],
    ["<b>2. Innovation</b>","neue Begriffe für neue oder kreative Bedürfnisse","„posten“, „liken“, „Emoji“, „Sprachnachricht“"],
    ["<b>3. Variation</b>","flexible Anpassung an den Zweck: welche Situation, welche Sprache?","Klassenchat vs. E-Mail an die Lehrkraft"],
    ["<b>4. Soziokulturelle Evolution</b>","Folge gesellschaftlicher Veränderungen: andere Sprachkulturen, Medien, Globalisierung","Anglizismen, Sprachnachrichten, Smartphone-Kommunikation"]])}
   ${deDef("Sprachökonomie","Mit möglichst geringem Aufwand möglichst effizient kommunizieren. Positiv: schnell, effizient, kreativ (Krischke: Effizienz). Negativ: Verkürzung, Grammatikabbau (in den kritischen Texten als negativer Effekt notiert). Achtung bei Sprachnachrichten: ökonomisch für den Sender, aufwendig für den Empfänger!")}
   <h3 class="ps-h">Wolfgang Krischke: Triebkräfte des sprachlichen Umbruchs (2009)</h3>
   <ul class="ps-ul"><li><b>„Schreibsprechen“</b> in E-Mails und Chatforen (Durchmischung von Mündlichkeit und Schriftlichkeit)</li><li>vielfältige <b>Sprachmischungen</b> im Einwanderungsland Deutschland</li><li><b>Einfluss des Englischen</b> durch Globalisierung und Digitalisierung</li><li>Bewertung: Vorteil <b>Effizienz</b>, Nachteil <b>Grammatikabbau / Verflachung</b></li><li>Forderung: Die <b>Standardsprache</b> sollte immer im Fokus der Bildung liegen.</li></ul>
   <p class="ex"><b>Zusammengefasst:</b> Globalisierung, Migration, Medien, sprachliche Richtlinien, Sprachökonomie.</p>
  </section>

  <section class="tx" id="deKri"><span class="tx-y">Kritische Texte</span><h2>Positiver oder negativer Effekt?</h2>
   <p>Erzielen die Triebkräfte des Sprachwandels einen positiven oder negativen Effekt?</p>
   <div class="pk"><div class="pro"><b>Positiv</b><ul><li>Neue Sprachtrends werden für ihr schöpferisches Potenzial und ihren ökonomischen Minimalismus begrüßt</li><li>radikale Vereinfachung (Simplifizierung) des grammatischen Systems</li><li>Einfluss des Englischen sorgt für Verständnis</li></ul></div>
   <div class="con"><b>Negativ</b><ul><li>Hochsprachliche Regeln können Ungebildete und Zugewanderte unterdrücken</li><li>Umstellungen und Normlockerungen wirken sich auf die Qualität der Hochsprache aus</li><li>Sprachökonomie</li><li>Abbau der Grammatik</li></ul></div></div>
  </section>

  <section class="tx" id="deMeh"><span class="tx-y">Wissen</span><h2>Mehrsprachigkeit, Codeswitching, Migration</h2>
   ${deDef("Mehrsprachigkeit","Nicht klar definiert: mehrere Sprachen in einem Land (Belgien, Schweiz) · Fähigkeit einer Person, sich in zwei oder mehr Sprachen zu behaupten (Bilingualität, Plurilingualität) · Verwendung mehrerer Varietäten einer Nationalsprache (Beruf, Freizeit).")}
   ${deDef("Codeswitching","Wechsel von einer Sprache oder Varietät in die andere, auch mitten im Satz – abhängig vom Kontext und vom Gesprächspartner.")}
   ${deDef("Migration und Sprachgebrauch","Der Kontakt des Deutschen mit Sprachen von Migranten verändert laut vielen Sprachwissenschaftlern die mündliche Umgangssprache (z. B. Wegfall von Endungen, neue Fremdwörter).")}
  </section>`;
}

function deDigital(el){
  el.innerHTML=`${deChips([["deDue","Dürscheid"],["deNet","Internetsprache"],["deSn","Sprachnachrichten"],["deMed","Medien im Wandel"],["deDis","Diskussionsfelder"],["deHs","Hate Speech"],["deReg","Sprachregeln"]])}
  <section class="tx" id="deDue"><span class="tx-y">Modell · nach Christa Dürscheid</span><h2>Mündlich oder schriftlich?</h2>
   ${deDef("Medial","Wie wird die Sprache übertragen? <b>Mediale Mündlichkeit</b> = Sprechen (phonisch), <b>mediale Schriftlichkeit</b> = Schreiben (grafisch).")}
   ${deDef("Konzeptionell","Wie ist die Sprache gestaltet? <b>Konzeptionelle Mündlichkeit</b> = Sprache der Nähe, <b>konzeptionelle Schriftlichkeit</b> = Sprache der Distanz.")}
   ${deTable(["","konzeptionell mündlich (Nähe)","konzeptionell schriftlich (Distanz)"],[
    ["<b>medial mündlich</b> (gesprochen)","Gespräch unter Freunden, Telefonat, Sprachnachricht","Vortrag, Nachrichtensprecher, vorgelesene Rede"],
    ["<b>medial schriftlich</b> (geschrieben)","WhatsApp-Chat, SMS, Kommentar unter einem Post","Aufsatz, Bewerbung, Gesetzestext, Zeitungsartikel"]])}
   <h3 class="ps-h">Merkmale <span class="ps-tag ext">Ergänzung</span></h3>
   <div class="pk"><div class="pro"><b>Sprache der Nähe</b><ul><li>vertraut, privat, spontan</li><li>Dialog, schnelle Reaktion</li><li>emotional, Umgangssprache</li><li>Ellipsen, Verkürzungen, Abkürzungen</li></ul></div>
   <div class="con"><b>Sprache der Distanz</b><ul><li>fremd, öffentlich, geplant</li><li>Monolog, Zeit zum Überarbeiten</li><li>sachlich, Standardsprache</li><li>vollständige, komplexe Sätze</li></ul></div></div>
   <p class="meta" style="margin-top:8px">Das Modell stammt ursprünglich von Koch und Oesterreicher (1985); im Unterricht habt ihr es „nach Christa Dürscheid“ gelernt – so kannst du es auch zitieren.</p>
   <h3 class="ps-h">Synchron, asynchron, quasi-synchron</h3>
   ${deTable(["Begriff","Bedeutung","Beispiel"],[["synchron","gleichzeitig: Produktion und Rezeption laufen parallel","Gespräch, Telefonat, Videocall"],["asynchron","zeitversetzt","Brief, E-Mail, Sprachnachricht"],["quasi-synchron","fast gleichzeitig, wenn alle gerade online sind (Dürscheid/Frick 2014)","WhatsApp-Chat"]])}
  </section>

  <section class="tx" id="deNet"><span class="tx-y">Internetsprache</span><h2>Eigene Form der Schrift- und Kommunikationskultur</h2>
   ${deTable(["Merkmal","Erklärung","Beispiel"],[
    ["Akronym / Initialwort","Kurzwort aus den Anfangsbuchstaben mehrerer Wörter","lol, omg, kp, vllt"],
    ["Emoticon","Kunstwort aus Emotion + Icon: Zeichenfolge, die einen Smiley nachbildet",":-) ;-) &lt;3"],
    ["Icon / Emoji","vorgefertigtes grafisches Symbol – schnelle Mitteilung von Gefühlen und Bewertungen","😂 👍 ❤️"],
    ["Inflektiv","Verbform ohne Flexionsendung (aus der Comicsprache)","freu, grins, seufz"],
    ["Verkürzung, Verschmelzung","mündliche Muster im Schriftlichen","„Hab nen Eis gegessen“, „machste“, „gehn essen“"],
    ["Wegfall von Präpositionen, Pronomen, Kommas","Sprachökonomie","„we?“ – „gehn essen“"],
    ["Interjektionen, Lautwörter","Gefühle ohne Mimik","haha, gähn, nom nom, bäm"],
    ["Großschreibung","zur Betonung","DAS IST JA KRASS"]])}
   <p class="ex" style="margin-top:10px">Alles zusammen ist <b>konzeptionelle Mündlichkeit</b>: mündliche Sprachmuster im schriftlichen Medium (Schulbuch, X/Twitter und WhatsApp). Krischke nennt das „Schreibsprechen“.</p>
  </section>

  <section class="tx" id="deSn"><span class="tx-y">Neuestes Material</span><h2>Sprachnachrichten</h2>
   <p><b>König/Hector:</b> asynchron, nicht simultan wie ein Gespräch; quasi-synchron nur, wenn alle online sind. <b>Doppelt verzögert</b>: Bei zwei 30-Sekunden-Nachrichten vergehen über zwei Minuten bis Frage und Antwort ausgetauscht sind. Nachteile: Mithörer, wenig diskret, mehr Datenvolumen; Kritik: „telefonieren für ganz Faule“. Chance: Stimme bringt mediale Mündlichkeit in den Chat → <b>Theatralität</b> (Goffman).</p>
   ${deTable(["Zahl","Quelle"],[["7 Mrd. Sprachnachrichten pro Tag auf WhatsApp (≈ 81.000 pro Sekunde)","WhatsApp 2022"],["über 3 Mrd. monatlich aktive WhatsApp-Nutzer","Meta 2025"],["Gen Z 84 %, Millennials 63 %, Gen X 56 %, Boomer 47 % senden Sprachnachrichten","Preply 2023 (Branchenumfrage!)"],["48 % für komplexe Gedanken · 50 %: Beziehungen gestärkt","Preply 2023"],["68 % hören mehrmals · 48 % finden sie aufwendiger","Preply 2023"],["62 % schon einmal gesendet · ca. 30 % wöchentlich","YouGov/Vox 2023"],["nur 10 % regelmäßig · 41 % „nicht relevant“","YouGov 2026"]])}
   <p class="ex" style="margin-top:10px"><b>Quellenkritik punktet:</b> „Diese Zahlen stammen allerdings aus einer Umfrage des Sprachlern-Unternehmens Preply und sind daher mit Vorsicht zu genießen.“</p>
  </section>

  <section class="tx" id="deMed"><span class="tx-y">Schulbuch · Medien im Wandel</span><h2>Vom Gatekeeper zur fünften Gewalt</h2>
   <h3 class="ps-h">Klassische Massenmedien (Fernsehen, Rundfunk, Presse)</h3>
   <ul class="ps-ul"><li><b>Kontrollfunktion</b> (Kritik der Mächtigen), <b>Meinungsbildungsfunktion</b>, <b>Informationsfunktion</b> → Journalismus als <b>vierte Gewalt</b></li><li>Qualitätskriterien: Aktualität, Originalität, Objektivität, Verständlichkeit; Pressekodex (Wahrhaftigkeit, Sorgfalt, Persönlichkeitsrechte)</li><li>Mediendemokratie: Tendenz zur Darstellungspolitik und Inszenierung; Agenda-Setting</li></ul>
   <h3 class="ps-h">Medienwandel</h3>
   <ul class="ps-ul"><li>Internet: Geschwindigkeit, Aktualität, hohe Verfügbarkeit</li><li><b>Bürgerjournalismus</b>: Jeder kann veröffentlichen, kommentieren („Produser“, Web 2.0, many-to-many) → demokratische Teilhabe</li><li><b>Verlust des Informationsmonopols</b>: Journalisten nicht mehr Gatekeeper, sondern Gatewatcher oder „Barkeeper“ (Hörisch)</li><li>Zeitungssterben, Paywalls, Aufmerksamkeitskonkurrenz → Dramatisierung, Skandalisierung („Brüllwettbewerb“), ungeprüfte Eilmeldungen; Chance: Erklärjournalismus</li><li>Kritik heute kaum noch per Leserbrief, sondern in Kommentaren → oft wenig konstruktiver Ton</li></ul>
   <h3 class="ps-h">Die „fünfte Gewalt“ (Bernhard Pörksen)</h3>
   <ul class="ps-ul"><li>digitale Öffentlichkeit als fünfte Gewalt, Vernetzung als Prinzip („Konnektiv“), spontane Selbstorganisation, radikaler Pluralismus</li><li>Potenzial zum Guten (Missstände aufdecken) und zum Schlechten (Mobbing, Shitstorms, Fake News)</li><li>Gefahr: <b>Erregungsgesellschaft</b>, „Modus der Kurzfristigkeit“ · Chance: Demokratisierung</li></ul>
  </section>

  <section class="tx" id="deDis"><span class="tx-y">Schulbuch</span><h2>Diskussionsfelder der digitalen Kommunikation</h2>
   ${deTable(["Feld","Das Wichtigste"],[
    ["YouTube","große Breite (Politikkritik bis Verschwörungserzählung) · direkte Kommunikation mit dem Publikum · teils konzeptionell schriftlich, oft spontan · Begrüßungsformel, direkte Ansprache, „Schreibt mal in die Kommentare …“"],
    ["X (Twitter)","280 Zeichen → Gefahr von Unterkomplexität, Telegrammstil, misslingender Kommunikation · „Gefällt mir“ → Polarisierung · Echtzeit → Shitstorms, Skandalisierung · Emojis, konzeptionelle Mündlichkeit"],
    ["Besonderheiten im Netz","Übermenge ohne Filterung · Clickbaiting · Trolle · Social Bots · Mikrotargeting · Filterblasen durch Algorithmen · Memes"],
    ["Fake News","Falschnachrichten mit Täuschungsabsicht (Hoax, Desinformation), meist zur Manipulation · polarisierend, stark wertend, direkte Ansprache · Gegenmittel: Quellen prüfen, Faktenchecks (Correctiv, Mimikama)"]])}
  </section>

  <section class="tx" id="deHs"><span class="tx-y">Material + Schulbuch</span><h2>Hate Speech</h2>
   ${deDef("Hate Speech (Hassrede)","Äußerungen, die Menschen abwerten oder angreifen und zu Hass und Gewalt gegen Personen(gruppen) aufrufen. Keine einheitliche Definition. Hintergründe: z. B. Fremdenfeindlichkeit, Antisemitismus, Homophobie. Nicht dasselbe wie Hasspropaganda oder Cybermobbing.")}
   <h3 class="ps-h">10 typische Muster</h3>
   <ol class="ps-ul"><li>bewusste Verbreitung uninformierter oder falscher Aussagen</li><li>Gleichsetzung</li><li>Tarnung als Humor oder Ironie</li><li>herabwürdigende Begriffe, sexistische oder rassistische Beleidigungen</li><li>Bedienen von Stereotypen</li><li>Verallgemeinerungen</li><li>Wir/Die-Rhetorik</li><li>Verschwörungstheorien</li><li>Befürwortung von oder Aufruf zu Gewalt</li><li>plakative Bildsprache</li></ol>
   <h3 class="ps-h">Folgen, Recht, Gegenmaßnahmen</h3>
   <ul class="ps-ul"><li><b>Enthemmungseffekt</b>: schnell, einfach, anonym, kein direktes Gegenüber</li><li>Folgen: Nährboden für reale Übergriffe; <b>Verzerrung des Meinungsbilds</b> – die schweigende Mehrheit wird nicht mehr wahrgenommen</li><li>Strafbar: Beleidigung (§ 185), üble Nachrede (§ 186), Verleumdung (§ 187), Volksverhetzung (§ 130 StGB) · Heilbronn 2019: 47.000 € · 2021: 5.400 € für Beleidigung und Bedrohung des Hanauer Bürgermeisters</li><li>Diskutiert: Löschpflicht für Plattformen, Klarnamenpflicht, konsequente Strafverfolgung · selbst melden, anzeigen, Gegenrede</li></ul>
  </section>

  <section class="tx" id="deReg"><span class="tx-y">Schaubild</span><h2>Diskussionsfelder der Sprachreglementierung</h2>
   ${deTable(["","Ziel","Pro","Kontra"],[
    ["<b>Leichte Sprache</b>","Barrierefreiheit","Teilhabe, Gleichberechtigung, reibungslosere Kommunikation","Verstärkung von Ausgrenzung, weniger Ausdrucksfähigkeit, Inhalt leidet"],
    ["<b>Politisch korrekte Sprache</b>","Diskriminierungsfreiheit","beeinflusst das Denken, gegen Stereotype, vermeidet Verletzungen","ändert die Wirklichkeit nicht, „Sprachpolizei“, übertriebener Minderheitenschutz, Ideologisierung"],
    ["<b>Gendergerechte Sprache</b>","Gleichberechtigung","beeinflusst das Denken, bezieht alle ein","verkompliziert die Sprache, keine Wirkung auf nichtsprachliche Ungerechtigkeit, erzeugt Widerstand"]])}
  </section>`;
}

function deBegriffe(el){
  const groups=[...new Set(DE_BEGRIFFE.map(b=>b.g))];
  el.innerHTML=`<input class="ps-q" id="deQ" type="search" placeholder="Begriff suchen …" autocomplete="off">
   <p class="meta" style="margin:0">${DE_BEGRIFFE.length} Begriffe · ${groups.join(" · ")}</p><div id="deBl" class="view" style="gap:10px"></div>`;
  const draw=()=>{
    const q=deEl("deQ").value.toLowerCase();let html="",last="";
    DE_BEGRIFFE.filter(b=>!q||(b.t+b.d).toLowerCase().includes(q)).forEach(b=>{
      if(b.g!==last){html+=`<h2 class="sec">${b.g}</h2>`;last=b.g}
      html+=`<details class="entry"><summary><h3>${b.t}${b.p?"":` <span class="ps-tag ext">Ergänzung</span>`}</h3></summary><div class="inner"><p>${b.d}</p></div></details>`;
    });
    deEl("deBl").innerHTML=html||'<p class="meta">Nichts gefunden.</p>';
  };
  deEl("deQ").oninput=draw;draw();
}

/* =========================================================
   KLAUSURVORBEREITUNG
   ========================================================= */
function deAblauf(el){
  el.innerHTML=`
  <div class="step de-must"><span class="afb">Vorgaben für deine Klausur</span><h3>Das musst du erfüllen</h3><ul>
   <li><b>Keine Zeilenangaben</b> – stattdessen Autor, Titel oder Quelle nennen.</li>
   <li><b>4 Auszüge aus dem Material</b> ${deB("M")} (Zitate, Zahlen, Aussagen).</li>
   <li><b>4 Bezüge aus dem Unterricht</b> ${deB("U")} (Polenz, Dürscheid, Krischke, Henne, König, Löffler, Sprachgeschichte …).</li>
   <li><b>Eigene Erfahrungen</b> ${deB("E")} als Beispiele.</li>
   <li><b>Kommunikative Situation in die Einleitung</b> (wer schreibt, für wen, wo, warum).</li></ul>
   <p class="ex">Übungsaufgabe aus dem Unterricht: „Verhunzt die Internetsprache unsere deutsche Sprache? Schreibe einen argumentativen Beitrag für Schüler und Lehrkräfte (ca. 400 Wörter).“ <a href="#/deutsch/klausur/muster"><b>→ Musteraufsatz</b></a></p></div>

  <h2 class="sec">Das Aufgabenformat</h2>
  <div class="step"><p>Du schreibst einen <b>argumentierenden Text</b> auf Grundlage mehrerer Materialien (meist 6–8 verschiedene Texte). Die Materialien sind deine <b>Recherche</b>, dazu kommt dein <b>Unterrichtswissen</b>.</p>
   <p style="margin-top:6px">Die Aufgabenstellung nennt: <b>1.</b> den strittigen Sachverhalt (Thema, Problem) · <b>2.</b> die Textsorte (Kommentar, Leserbrief, Essay …) und den Umfang · <b>3.</b> die Adressaten (wichtig für den Stil).</p></div>

  <h2 class="sec">Schreibplan in 5 Schritten</h2>
  <ol class="sum">
   <li><h3>Thema erfassen</h3><p>Aufgabe genau lesen: Was ist die strittige Frage? Welche Textsorte, wie viele Wörter, für wen?</p></li>
   <li><h3>Eigene Meinung festlegen</h3><p>Ja, nein oder „ja, aber“ – und welche Punkte du ansprechen willst.</p></li>
   <li><h3>Zielgruppe klären</h3><p>Schülerzeitung („wir“, „ihr“, ein paar Jugendwörter) oder Tageszeitung (ohne Modewörter)?</p></li>
   <li><h3>Hintergrundwissen sammeln und aktivieren</h3><p>Materialien lesen und markieren: <b>4 Auszüge</b> aussuchen ${deB("M")}. Daneben notieren, welches <b>Unterrichtswissen</b> passt ${deB("U")} und welche <b>eigene Erfahrung</b> ${deB("E")}.</p></li>
   <li><h3>Argumente sortieren – roter Faden!</h3><p>Ein Gegenargument zum Entkräften auswählen. Eigene Argumente steigernd ordnen: <b>stärkstes zum Schluss</b>.</p></li></ol>
  <p class="tip" style="margin:0">Zeit-Vorschlag: Materialien lesen und markieren ca. 25 % · Schreibplan ca. 15 % · Schreiben ca. 50 % · Überarbeiten ca. 10 %.</p>

  <h2 class="sec">Aufbau</h2>
  <div class="step"><span class="afb">Überschrift</span><p>Treffend, Interesse weckend, gern provokativ. Entweder das Problem schon benennen oder noch nichts verraten. Tipp: Erst am Ende formulieren. Beispiel: „Lol, OMG, bäm – verhunzt das Internet unser Deutsch?“</p></div>
  <div class="step"><span class="afb">Einleitung</span><ul>
   <li><b>Einstieg:</b> Zitat, Frage, aktueller Anlass, Beispiel oder Widerspruch.</li>
   <li><b>Kommunikative Situation:</b> Anlass (z. B. Projektwoche), Medium (Schülerzeitung, Homepage), Adressaten (Schüler und Lehrkräfte).</li>
   <li><b>Thema → strittiges Problem → eigene Meinung</b> (beim Kommentar schon hier!).</li>
   <li><b>Trick:</b> Einen Satz aus dem Material zitieren, dem du nicht zustimmst – und fragen: „Aber stimmt das?“</li></ul></div>
  <div class="step"><span class="afb">Hauptteil</span><ul>
   <li>Gegenargument nennen und <b>entkräften</b> („Zugegeben … Aber stimmt das wirklich?“).</li>
   <li>Eigene Argumente steigernd: <b>stärkstes Argument zum Schluss</b>.</li>
   <li>Jedes Argument mit Beleg (Material, Unterricht) und Beispiel (Erfahrung) untermauern.</li>
   <li>Abschnitte mit Überleitungen verbinden – roter Faden, Position nicht aus den Augen verlieren.</li></ul></div>
  <div class="step"><span class="afb">Schluss</span><ul>
   <li>Meinung noch einmal auf den Punkt bringen (kurz zusammenfassen).</li>
   <li><b>Bezug</b> zur Überschrift oder Einleitung herstellen (Text abrunden).</li>
   <li>Lösungsvorschlag, Forderung, Appell oder Ausblick in die Zukunft – den Leser zum Nachdenken anregen.</li></ul></div>

  <h2 class="sec">So baust du ein Argument</h2>
  <div class="step"><ol>
   <li><b>These:</b> Abkürzungen im Chat sind kein Zeichen von Faulheit.</li>
   <li><b>Begründung:</b> Sie sind sprachökonomisch – man wählt den kürzesten Ausdruck, wenn die Situation es erlaubt.</li>
   <li><b>Beleg Unterricht</b> ${deB("U")}: Peter von Polenz nennt Sprachökonomie als Motiv des Sprachwandels.</li>
   <li><b>Beleg Material</b> ${deB("M")}: Christa Dürscheid: Die meisten Schüler wissen genau, ob sie eine SMS oder einen Aufsatz schreiben.</li>
   <li><b>Beispiel</b> ${deB("E")}: „kp“ im Klassenchat, „Sehr geehrte Frau …“ in der E-Mail an die Lehrerin.</li>
   <li><b>Rückbezug:</b> Wer so wechselt, verhunzt die Sprache nicht, sondern beherrscht mehrere Varietäten.</li></ol></div>

  <h2 class="sec">Sprache und Stil</h2>
  <div class="step"><ul>
   <li><b>Adressatenbezug:</b> Schülerzeitung „wir“, „ihr“, einzelne Elemente der Jugendsprache · Tageszeitung ohne Modewörter und Jugendsprache.</li>
   <li><b>Keine durchgängige Umgangssprache</b> – sonst fehlt die Sachlichkeit.</li>
   <li><b>Standardsprache</b> und <b>Fachbegriffe</b> (Bildungssprache) zeigen Kompetenz.</li>
   <li><b>Subjektiver Stil</b> (deine Meinung, wertende Verben und Adjektive wie verbessern/gut, verschlimmern/schlecht) – <b>aber sachlich</b>: nicht ausfallend, belegbare Argumente mit Beispielen.</li>
   <li><b>Präsens!</b> Material in indirekter Rede: „Schlobinski betont, es <i>mache</i> keinen Sinn …“</li>
   <li><b>Rhetorische Mittel:</b> rhetorische Fragen, Ellipsen, Emphasen, Metaphern, Antithesen.</li></ul></div>

  <h2 class="sec">Formulierungen</h2>
  <details class="entry" open><summary><h3>Material einbauen – ohne Zeilen ${deB("M")}</h3></summary><div class="inner"><ul class="ps-ul">
   <li>„Wie die Linguistin Christa Dürscheid feststellt, …“</li>
   <li>„In einem Artikel der WirtschaftsWoche heißt es, …“</li>
   <li>„Eine Umfrage von YouGov aus dem Jahr 2026 zeigt, dass …“ / „Laut einer Statistik von statista …“</li>
   <li>„Der Journalist Eike Kühl bringt es auf den Punkt: ‚…‘“</li>
   <li>„Die Sprachwissenschaftler König und Hector weisen darauf hin, dass …“</li>
   <li>„In einem Interview berichtet die Bloggerin Jasna Strick, …“</li></ul></div></details>
  <details class="entry"><summary><h3>Unterricht einbauen ${deB("U")}</h3></summary><div class="inner"><ul class="ps-ul">
   <li>„Wie wir im Deutschunterricht gelernt haben, …“</li>
   <li>„Der Sprachwissenschaftler Peter von Polenz nennt vier Motive des Sprachwandels, darunter …“</li>
   <li>„Nach dem Modell von Christa Dürscheid ist eine Chatnachricht zwar medial schriftlich, aber konzeptionell mündlich.“</li>
   <li>„Ein Blick in die Sprachgeschichte zeigt, …“</li>
   <li>„Nach Helmut Henne bleibt die Standardsprache das Zentrum, …“</li></ul></div></details>
  <details class="entry"><summary><h3>Eigene Erfahrung ${deB("E")}</h3></summary><div class="inner"><ul class="ps-ul">
   <li>„Das kenne ich von mir selbst: …“</li>
   <li>„In unserem Klassenchat …“ / „Meine Oma schickt mir …“</li>
   <li>„Jeder von uns kennt die Situation: …“</li></ul></div></details>
  <details class="entry"><summary><h3>Gegenargument entkräften</h3></summary><div class="inner"><ul class="ps-ul">
   <li>„Zugegeben, die Sorge ist nachvollziehbar. Aber stimmt das wirklich?“</li>
   <li>„Zwar …, doch …“ · „Obwohl / Wenngleich behauptet wird, …, zeigt sich jedoch …“</li>
   <li>„Kritiker wenden ein, dass … Dieser Einwand greift jedoch zu kurz, denn …“</li></ul></div></details>
  <details class="entry"><summary><h3>Überleitungen und Schluss</h3></summary><div class="inner"><ul class="ps-ul">
   <li>außerdem, zudem, darüber hinaus, folglich, demzufolge · allerdings, jedoch · „Das stärkste Argument ist aber …“</li>
   <li>„Zusammenfassend lässt sich sagen …“ · „Es wird deutlich, dass …“ · „Anhand dieser Überlegungen zeigt sich …“</li>
   <li>„Es steht außer Frage, dass …“ · „Wie sich erkennen lässt …“</li>
   <li>Appell: „Deshalb mein Vorschlag an alle …“</li></ul></div></details>

  <h2 class="sec">Kommentar oder …?</h2>
  ${deTable(["Textsorte","Unterschied"],[
   ["<b>Kommentar</b>","Meinung schon am Anfang deutlich, subjektiv, rhetorische Mittel erlaubt"],
   ["Erörterung","Meinung erst im Schluss, sachlicher, ohne Humor und rhetorische Mittel"],
   ["Nachricht","objektiv, keine Wertung, nur informieren"],
   ["Stellungnahme / Leserbrief","Thema, das dich persönlich betrifft"],
   ["Glosse","sehr polemisch, verspottet die Gegenposition"],
   ["Kolumne","regelmäßig, immer derselbe Autor"],
   ["Kritik / Rezension","beurteilt eine künstlerische Leistung (Buch, Film …)"]])}

  <h2 class="sec">Checkliste</h2>
  <div class="step ps-chk" id="deChk"></div>`;
  const done=store.get("deChk",{});
  deEl("deChk").innerHTML=DE_CHECK.map((t,i)=>`<label><input type="checkbox" data-i="${i}" ${done[i]?"checked":""}> <span>${t}</span></label>`).join("");
  deEl("deChk").querySelectorAll("input").forEach(c=>c.onchange=()=>{done[c.dataset.i]=c.checked;store.set("deChk",done)});
}

function deVertreter(el){
  el.innerHTML=`<input class="ps-q" id="deVq" type="search" placeholder="Name oder Stichwort …" autocomplete="off">
   <p class="meta" style="margin:0">${DE_VERTRETER.length} Vertreter und Texte · ${deB("U")} aus dem Unterricht · ${deB("M")} aus dem Material. Unter jedem Namen: so nutzt du ihn im Argument.</p><div id="deVl" class="view" style="gap:10px"></div>`;
  const draw=()=>{
    const q=deEl("deVq").value.toLowerCase();let html="",last="";
    DE_VERTRETER.filter(v=>!q||(v.n+v.w+v.k+(v.use||"")).toLowerCase().includes(q)).forEach(v=>{
      if(v.g!==last){html+=`<h2 class="sec">${v.g}</h2>`;last=v.g}
      html+=`<details class="entry"><summary><h3>${v.n} ${[...v.s].map(t=>deB(t)).join("")}</h3></summary><div class="inner">
       <p class="meta" style="margin:0">${v.w}</p>
       <span class="lbl d">Kernaussagen</span><p>${v.k}</p>
       ${v.z?`<span class="lbl o">Zum Zitieren</span><p class="de-quote">${v.z}</p>`:""}
       ${v.use?`<span class="lbl d">So nutzt du es</span><p>${v.use}</p>`:""}
       ${v.f?`<p class="ex">${v.f}</p>`:""}
       ${v.x?`<p class="meta" style="margin:0">${v.x}</p>`:""}</div></details>`;
    });
    deEl("deVl").innerHTML=html||'<p class="meta">Nichts gefunden.</p>';
  };
  deEl("deVq").oninput=draw;draw();
}

function deMaterial(el){
  el.innerHTML=`<p class="meta" style="margin:0">Alle Texte aus deinen Unterlagen mit Auszügen, die du direkt als ${deB("M")} nutzen kannst. In der Klausur bekommst du eigene Materialien (meist 6–8 Texte) – tauchen diese hier auf, hast du einen Vorsprung; sonst ist alles hier mindestens Unterrichtswissen ${deB("U")}.</p>
  <p class="ex" style="margin:0"><b>Ohne Zeilenangaben zitieren:</b> immer Autor oder Quelle (+ Jahr) nennen. Zahlen nie ohne Quelle!</p>
  ${DE_MAT.map(m=>`<details class="entry"><summary><h3>${m.t}</h3><span class="yr">${m.th}</span></summary><div class="inner">
   <p class="meta" style="margin:0">${m.q}</p><p><b>Kern:</b> ${m.kern}</p>
   <span class="lbl o">Auszüge für deinen Text</span><ul class="ps-ul">${m.aus.map(a=>`<li>${a}</li>`).join("")}</ul></div></details>`).join("")}`;
}

function deArgumente(el){
  let cur=store.get("deArgT",DE_ARG[0].id);if(!DE_ARG.some(a=>a.id===cur))cur=DE_ARG[0].id;
  el.innerHTML=`<div class="row" id="deAt">${DE_ARG.map(a=>`<button type="button" class="toggle" data-t="${a.id}">${a.t}</button>`).join("")}</div><div id="deAb" class="view" style="gap:12px"></div>`;
  const card=(a,side)=>`<div class="de-arg ${side}"><h3>${a.t}</h3><p>${a.d}</p><ul>${a.b.map(([t,x])=>`<li>${deB(t)} ${x}</li>`).join("")}</ul>${a.ent?`<p class="de-ent"><b>${side==="con"?"So entkräftest du es":"Gegenseite"}:</b> ${a.ent}</p>`:""}</div>`;
  const draw=()=>{
    el.querySelectorAll("#deAt button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.t===cur));
    const A=DE_ARG.find(a=>a.id===cur);
    deEl("deAb").innerHTML=`<div class="aufg"><h3>${A.q}</h3><p class="meta">${A.pos}</p></div>${deLegend()}
     <h2 class="sec">${A.pro.h}</h2>${A.pro.a.map(a=>card(a,"pro")).join("")}
     <h2 class="sec">${A.con.h}</h2>${A.con.a.map(a=>card(a,"con")).join("")}`;
  };
  el.querySelector("#deAt").onclick=e=>{const b=e.target.closest("button");if(!b)return;cur=b.dataset.t;store.set("deArgT",cur);draw()};
  draw();
}

/* ---------- Musteraufsätze ---------- */
const DE_MUSTER=[
 {id:"m1",l:"Internetsprache",
  a:"Verhunzt die Internetsprache unsere deutsche Sprache? Schreibe einen argumentativen Beitrag für Schüler und Lehrkräfte (Schülerzeitung, ca. 400 Wörter). Kommunikative Situation in die Einleitung.",
  note:"Fortsetzung deines eigenen Entwurfs – Einleitung und die ersten Sätze sind von dir, sprachlich leicht geglättet. Mit ca. 500 Wörtern etwas lang: Für 400 Wörter kürzt du den Absatz zur Sprachökonomie auf einen Satz und streichst im Absatz zur Geschichte den Satz über die Rechtschreibung.",
  t:"Lol, OMG, bäm – verhunzt das Internet unser Deutsch?",
  p:["„Was machste we?“ – „gehn essen, nom nom“. Solche Nachrichten landen täglich auf unseren Handys. Viele Eltern und manche Lehrkräfte schütteln darüber den Kopf. Im Deutschunterricht haben wir uns deshalb im Rahmen der Projektwoche mit einer Frage beschäftigt, die wahrscheinlich auch im Lehrerzimmer häufig Thema ist: Verhunzt die Internetkommunikation unsere deutsche Sprache? Meine Antwort auf diese Frage ist ein ganz klares Nein!",
   "Zugegeben: Die Sorge der Sprachbewahrer ist nachvollziehbar. Im Chat lassen wir Präpositionen weg, schreiben „we“ statt „Wochenende“ und sparen uns die Kommas. Gerade bei Jugendlichen, bei denen Rechtschreibung und Grammatik noch nicht gefestigt sind, könnte das korrekte Deutsch auf der Strecke bleiben [M1]. Auch der Sprachwissenschaftler Wolfgang Krischke sieht im „Schreibsprechen“ neben mehr Effizienz die Gefahr eines Grammatikabbaus [U1]. Aber stimmt das wirklich? Die Forschung sagt etwas anderes. Die Linguistin Christa Dürscheid hat untersucht, wie sich E-Mails, SMS und Chats auf das Schreiben in der Schule auswirken. Ihr Ergebnis: Die meisten Schülerinnen und Schüler wissen genau, ob sie gerade eine Kurznachricht oder einen Aufsatz schreiben. „Die Schreibkompetenz hat nicht nachgelassen – im Gegenteil. Sie ist breiter geworden.“ [M2] Der Sprachwissenschaftler Volker Schlobinski bringt es auf den Punkt: Es mache keinen Sinn, einen Tweet so zu schreiben wie Thomas Mann [M3].",
   "Erklären lässt sich das mit dem Modell von Christa Dürscheid, das wir im Unterricht kennengelernt haben: Eine WhatsApp-Nachricht ist zwar medial schriftlich, also getippt, konzeptionell aber mündlich – eine Sprache der Nähe. Ein Aufsatz ist dagegen eine Sprache der Distanz [U2]. Das kenne ich von mir selbst: In unserem Klassenchat schreibe ich „kp“ und „vllt“, eine E-Mail an meine Deutschlehrerin beginne ich aber ganz selbstverständlich mit „Sehr geehrte Frau …“ [E]. Wer so zwischen den Situationen wechselt, verliert keine Sprache, sondern beherrscht mehrere.",
   "Dass wir im Chat abkürzen, ist außerdem kein Zeichen von Faulheit. Peter von Polenz nennt die Sprachökonomie als ein zentrales Motiv des Sprachwandels: Menschen wählen aus Bequemlichkeit und Zeitersparnis den kürzesten Ausdruck [U3]. Und wo Mimik und Stimme fehlen, zeigen Emojis oder Ausdrücke wie „seufz“ und „bäm“ unsere Gefühle. Ist das wirklich verhunzt – oder nicht eher kreativ?",
   "Das stärkste Argument liefert aber ein Blick in die Geschichte: Unsere Sprache hat sich schon immer verändert. „Risiko“ und „Kapital“ kamen aus dem Italienischen, „Grenze“ und „Gurke“ aus dem Slawischen, und eine einheitliche Rechtschreibung gibt es erst seit dem Ende des 19. Jahrhunderts [U4]. Heute kommen neue Wörter eben aus dem Netz: Sogar das Oxford English Dictionary hat „lol“ und „OMG“ aufgenommen, weil sie allgemein verständlich sind. Der Journalist Eike Kühl sieht darin keine Verrohung, sondern normalen Sprachwandel – so wie einst beim Wort „cool“ [M4].",
   "Lol, OMG, bäm – das Internet verhunzt unser Deutsch also nicht, es zeigt nur, dass Sprache lebt. Entscheidend ist, dass wir wissen, wann welche Sprache passt. Deshalb sollte die Standardsprache, wie Krischke fordert, im Mittelpunkt des Unterrichts bleiben [U1]. Mein Vorschlag an alle Lehrkräfte: Schimpfen Sie nicht über unsere Chats, sondern üben Sie mit uns den Wechsel zwischen Chat und Aufsatz. Und an alle Mitschülerinnen und Mitschüler: Schreibt im Chat ruhig „nom nom“ – aber in der Klausur lieber „lecker“."],
  why:["<b>Überschrift</b> greift die Chatsprache auf und stellt die Frage – im Schluss wieder aufgenommen.","<b>Einleitung:</b> Beispiel-Einstieg, kommunikative Situation (Deutschunterricht, Projektwoche, Schüler und Lehrkräfte) und klare Meinung.","<b>Gegenargument zuerst</b> und mit „Aber stimmt das wirklich?“ entkräftet – genau der Trick aus dem Unterricht.","<b>Steigernd:</b> Situationswechsel → Sprachökonomie → Sprachgeschichte als stärkstes Argument.","<b>4 × Material, 4 × Unterricht, eigene Erfahrung</b> – alle ohne Zeilenangaben, immer mit Namen.","<b>Rhetorische Mittel:</b> rhetorische Fragen, Ellipse („Zugegeben:“), Antithese (verhunzt – kreativ).","<b>Schluss:</b> Rückbezug zur Überschrift, Lösung (Krischke) und Appell an beide Adressatengruppen."]},
 {id:"m2",l:"Sprachnachrichten",
  a:"Sprachnachrichten – Bereicherung oder Zumutung? Verfassen Sie auf Grundlage der Materialien einen Kommentar für die Homepage Ihrer Schule. Leser: Schülerinnen und Schüler, Eltern und Lehrkräfte (ca. 400 Wörter). (Selbst ausgedachte Übungsaufgabe zum neuesten Material.)",
  note:"Position „Ja, aber“: Bereicherung mit Rücksicht. M3–M5 stammen aus demselben Statistik-Text – erlaubt, schöner ist es aber, verschiedene Materialien zu mischen.",
  t:"3:47 Minuten – warum Sprachnachrichten besser sind als ihr Ruf",
  p:["Es ist 22 Uhr. Ich will nur wissen, wann morgen unser Referatstreffen ist – und bekomme eine Sprachnachricht von 3:47 Minuten [E1]. Kein Wunder, dass viele genervt sind: Laut WhatsApp werden auf der Plattform jeden Tag rund sieben Milliarden Sprachnachrichten verschickt [M1]. Weil das Thema Schüler, Eltern und Lehrkräfte gleichermaßen betrifft, möchte ich auf unserer Schulhomepage Stellung beziehen: Sind Sprachnachrichten eine Bereicherung oder eine Zumutung? Meine Meinung: eine Bereicherung – wenn man sie mit Rücksicht einsetzt.",
   "Zugegeben, die Kritik ist berechtigt. Die Sprachwissenschaftler Katharina König und Tim Moritz Hector zeigen, dass Sprachnachrichten „in einem doppelten Sinn verzögert“ sind: Bis eine 30-Sekunden-Frage und eine 30-Sekunden-Antwort ausgetauscht sind, vergehen über zwei Minuten [M2]. Anders als ein Telefonat sind Sprachnachrichten eben nicht synchron, sondern asynchron [U1]. Dazu kommt der Aufwand für den Empfänger: Einer Umfrage zufolge müssen 68 Prozent eine Sprachnachricht mehrmals anhören, um sie zu verstehen – allerdings stammt diese Umfrage von einem Sprachlern-Unternehmen und ist daher mit Vorsicht zu genießen [M3]. Die Sprachökonomie, die Peter von Polenz als Motor des Sprachwandels beschreibt, nützt hier also vor allem dem Sender [U2].",
   "Trotzdem überwiegen für mich die Vorteile. Die Stimme transportiert, was in Textnachrichten oft verloren geht: Tonfall, Ironie und Begeisterung. Auch WhatsApp begründet den Erfolg damit, dass sich Gefühle über die Stimme natürlicher zeigen lassen als über Text [M4]. Nach dem Modell von Christa Dürscheid sind Sprachnachrichten medial wie konzeptionell mündlich – eine echte Sprache der Nähe [U3]. Ein „Ich freu mich so für dich!“ klingt eben anders als ein Herz-Emoji.",
   "Vor allem aber sind Sprachnachrichten kein Spleen der Jugend. Selbst bei den Babyboomern verschickt fast die Hälfte Sprachnachrichten [M5]. Meine Oma schickt mir fast nur noch Sprachnachrichten, weil ihr das Tippen auf dem Handy schwerfällt [E2]. Hier verändert sich unsere Kommunikation insgesamt – eine Folge technischer und gesellschaftlicher Veränderungen, die Polenz soziokulturelle Evolution nennt [U4].",
   "Sprachnachrichten sind also keine Zumutung, sondern eine Bereicherung – vorausgesetzt, wir wählen sie passend zur Situation. Denn wie wir im Unterricht gelernt haben, hängt jede Sprachverwendung von Situation und Medium ab [U5]. Deshalb mein Vorschlag für uns alle: Kurze Infos wie Uhrzeit und Ort bitte tippen, Gefühle und Geschichten gerne einsprechen – und alles über einer Minute lieber gleich anrufen. Dann bekommt um 22 Uhr niemand mehr 3:47 Minuten zu hören."],
  why:["<b>Einstieg</b> mit eigener Erfahrung, die der Schluss wieder aufgreift (3:47 Minuten).","<b>Kommunikative Situation:</b> Schulhomepage, Schüler, Eltern, Lehrkräfte.","<b>Quellenkritik</b> bei der Preply-Zahl zeigt Reflexion.","<b>Sprachökonomie gegen den Strich gelesen:</b> ökonomisch für den Sender, nicht für den Empfänger.","<b>Lösung</b> statt Schwarz-Weiß: klare Regeln für den Alltag."]},
 {id:"m3",l:"Hate Speech",
  a:"Hass im Netz – brauchen wir strengere Gesetze? Kommentar für die Schülerzeitung. (Gliederung zum Üben – schreib den Text selbst!)",
  note:"Hier nur die Gliederung mit allen Bezügen. Versuch, daraus in 30 Minuten einen eigenen Text zu schreiben.",
  t:"Gliederung: „Löschen allein reicht nicht“",
  p:["<b>Einleitung:</b> Einstieg mit Zahl: Zwei Drittel der Onliner in Deutschland haben schon Hasskommentare gesehen [M1] · kommunikative Situation (Schülerzeitung, Schüler und Lehrkräfte) · Meinung: Gesetze sind nötig, reichen aber allein nicht.",
   "<b>Gegenargument:</b> Strengere Gesetze schrecken ab – Urteile wie in Heilbronn (47.000 €) [M2] oder die Strafe von 5.400 € für Drohungen gegen den Hanauer Bürgermeister [U1] zeigen, dass Strafe wirkt. <b>Entkräftung:</b> keine einheitliche Definition, Risiko für die Meinungsfreiheit, wenn der Staat entscheidet (Sailer-Wlasits) [M3].",
   "<b>Argument 1:</b> Hass hat reale Folgen – Jasna Strick: Albträume, Rückzug, Masterarbeit verzögert [M4] · Hatespeech als Nährboden für reale Übergriffe [U2].",
   "<b>Argument 2:</b> Hass bringt andere zum Schweigen – 68 % der Betroffenen formulieren vorsichtiger oder posten nicht mehr [M5] · Verzerrung des Meinungsbilds, Pörksens „Erregungsgesellschaft“ [U3].",
   "<b>Argument 3 (stärkstes):</b> Viele sehen Hass, wenige handeln – nur 22 % melden, 44 % tun nichts [M6] · Muster wie Wir/Die-Rhetorik oder Tarnung als Humor erkennen [U4] · eigene Erfahrung mit einem Kommentar unter einem Post [E].",
   "<b>Schluss:</b> Rückbezug zur Überschrift · Sailer-Wlasits’ Dreiklang: Bildung, behutsame Gesetze, Vorbilder [M7] · Appell: melden, Betroffenen beistehen, Gegenrede wie Sarah Bosetti."],
  why:["Auch hier: Gegenargument früh, stärkstes Argument zuletzt, Lösung im Schluss.","Mehr als 4 Material-Bezüge sind kein Problem – wähle die überzeugendsten."]}
];
function deMuster(el){
  let cur=store.get("deMu","m1");if(!DE_MUSTER.some(m=>m.id===cur))cur="m1";
  let marks=store.get("deMarks",true);
  el.innerHTML=`<div class="seg three" id="deMs">${DE_MUSTER.map(m=>`<button type="button" data-m="${m.id}">${m.l}</button>`).join("")}</div><div id="deMb" class="view" style="gap:12px"></div>`;
  const draw=()=>{
    el.querySelectorAll("#deMs button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.m===cur));
    const M=DE_MUSTER.find(m=>m.id===cur),txt=M.p.join(" ");
    const cnt=t=>new Set(txt.match(new RegExp("\\["+t+"\\d*\\]","g"))||[]).size;
    deEl("deMb").innerHTML=`<div class="aufg"><h3>Aufgabe</h3><p>${M.a}</p></div>
     <p class="meta" style="margin:0">${M.note}</p>
     <div class="row"><button type="button" class="toggle" id="deMk" aria-pressed="${marks}">Markierungen</button><span class="count">${cnt("M")} × ${deB("M")} · ${cnt("U")} × ${deB("U")} · ${cnt("E")} × ${deB("E")}${M.id!=="m3"?` · ≈ ${deWords(M.t+" "+txt)} Wörter`:""}</span></div>
     <section class="tx de-text${marks?"":" de-nomark"}"><h2>${M.t}</h2><div class="ml">${M.p.map(p=>`<p>${deMark(p)}</p>`).join("")}</div></section>
     <h2 class="sec">Warum funktioniert das?</h2><div class="step"><ul>${M.why.map(w=>`<li>${w}</li>`).join("")}</ul></div>`;
    deEl("deMk").onclick=()=>{marks=!marks;store.set("deMarks",marks);draw()};
  };
  el.querySelector("#deMs").onclick=e=>{const b=e.target.closest("button");if(!b)return;cur=b.dataset.m;store.set("deMu",cur);draw()};
  draw();
}

/* ---------- Üben ---------- */
function deUeben(el){
  let mode=store.get("deMode","karten");
  el.innerHTML=`<div class="seg three"><button type="button" data-m="karten">Karten</button><button type="button" data-m="wer">Wer sagt was?</button><button type="button" data-m="quiz">Quiz</button></div><div id="deUe" class="view" style="gap:14px"></div>`;
  const set=m=>{mode=m;store.set("deMode",m);el.querySelectorAll(".seg button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.m===m));({karten:deKarten,wer:deWer,quiz:deQuiz}[m]||deKarten)(deEl("deUe"))};
  el.querySelectorAll(".seg button").forEach(b=>b.onclick=()=>set(b.dataset.m));
  set(mode);
}
function deKarten(box){
  const which=store.get("deDeck","vertreter");
  const src=which==="vertreter"?DE_KURZ.map(([n,d])=>({g:"Vertreter",t:n,d})):DE_BEGRIFFE.map(b=>({g:b.g,t:b.t,d:b.d}));
  let deck=shuffle(src),total=deck.length,known=0,flip=false;
  const draw=()=>{
    const head=`<div class="row"><button type="button" class="toggle" data-d="vertreter" aria-pressed="${which==="vertreter"}">Vertreter</button><button type="button" class="toggle" data-d="begriffe" aria-pressed="${which==="begriffe"}">Begriffe</button></div>`;
    if(!deck.length){box.innerHTML=head+`<div class="done"><span class="big">${total} / ${total}</span><p>Alle Karten gewusst!</p><button class="btn primary" type="button" id="deAgain">Nochmal</button></div>`;deEl("deAgain").onclick=()=>deKarten(box);bind();return}
    const c=deck[0];
    box.innerHTML=head+`<div class="progress"><span>${known} von ${total} gewusst</span><span>noch ${deck.length}</span></div><div class="bar"><i style="width:${known/total*100}%"></i></div>
     <div class="flash" id="deFc"><span class="kind">${c.g}</span><div class="front">${c.t}</div>${flip?`<div class="back"><p>${c.d}</p></div>`:'<span class="hint">Tippen zum Umdrehen</span>'}</div>
     ${flip?'<div class="btns"><button class="btn no" type="button" id="deNo">Nochmal</button><button class="btn yes" type="button" id="deYes">Gewusst</button></div>':""}`;
    bind();
    deEl("deFc").onclick=()=>{flip=!flip;draw()};
    if(flip){deEl("deYes").onclick=()=>{deck.shift();known++;flip=false;draw()};
             deEl("deNo").onclick=()=>{const k=deck.shift();deck.splice(Math.min(3,deck.length),0,k);flip=false;draw()}}
  };
  const bind=()=>box.querySelectorAll("[data-d]").forEach(b=>b.onclick=()=>{store.set("deDeck",b.dataset.d);deKarten(box)});
  draw();
}
function deQuizRun(box,items,bestKey,again){
  let i=0,pts=0,lock=false;
  const draw=()=>{
    if(i>=items.length){const best=Math.max(store.get(bestKey,0),pts);store.set(bestKey,best);
      box.innerHTML=`<div class="done"><span class="big">${pts} / ${items.length}</span><p>${pts>=items.length*0.8?"Super, das sitzt!":pts>=items.length*0.5?"Gut! Schau dir die Fehler bei Vertreter und Begriffe nochmal an.":"Lies Vertreter und Ablauf nochmal durch und versuch es dann erneut."}</p><p class="tip">Bestwert: ${best} / ${items.length}</p><button class="btn primary" type="button" id="deAgain">Nochmal</button></div>`;
      deEl("deAgain").onclick=()=>again(box);return}
    const it=items[i];
    box.innerHTML=`<div class="progress"><span>Frage ${i+1} von ${items.length}</span><span>${pts} richtig</span></div><div class="bar"><i style="width:${i/items.length*100}%"></i></div>
     <div class="q">${it.pre||""}<div class="ask">${it.ask}</div><div class="opts">${it.opts.map((o,j)=>`<button type="button" data-j="${j}">${o.h}</button>`).join("")}</div><div id="deEx"></div></div>`;
    box.querySelector(".opts").onclick=e=>{const b=e.target.closest("button");if(!b||lock)return;lock=true;
      const j=+b.dataset.j;if(it.opts[j].r)pts++;
      box.querySelectorAll(".opts button").forEach((x,k)=>{if(it.opts[k].r)x.classList.add("right");else if(k===j)x.classList.add("wrong")});
      deEl("deEx").innerHTML=`<button class="btn primary" type="button" id="deNx" style="width:100%">Weiter</button>`;
      deEl("deNx").onclick=()=>{lock=false;i++;draw()}};
  };draw();
}
function deWer(box){
  const names=[...new Set(DE_WER.map(w=>w[1]))];
  const items=shuffle(DE_WER).slice(0,10).map(([s,n])=>({pre:'<p class="meta" style="margin:0">Wer sagt das? / Wessen Modell ist das?</p>',ask:`<span class="de-ask">${s}</span>`,
    opts:shuffle([n,...shuffle(names.filter(x=>x!==n)).slice(0,3)]).map(x=>({h:x,r:x===n}))}));
  deQuizRun(box,items,"deWerBest",deWer);
}
function deQuiz(box){
  const items=shuffle(DE_QUIZ).slice(0,10).map(q=>({ask:q.q,opts:shuffle(q.o.map((t,i)=>({h:t,r:i===q.r})))}));
  deQuizRun(box,items,"deQuizBest",deQuiz);
}

/* ---------- Merken ---------- */
const DE_MERK=`<table class="mtab"><tbody>
<tr class="ph"><td colspan="2">Deine Klausur</td></tr>
<tr><td>Vorgaben</td><td>keine Zeilenangaben · 4 × Material · 4 × Unterricht · eigene Erfahrungen</td></tr>
<tr><td>Einleitung</td><td>Einstieg → kommunikative Situation (wer, für wen, wo, Anlass) → Frage → Meinung</td></tr>
<tr><td>Hauptteil</td><td>Gegenargument entkräften („Aber stimmt das?“) → Argumente steigernd, stärkstes zuletzt</td></tr>
<tr><td>Argument</td><td>These → Begründung → Beleg (M/U) → Beispiel (E) → Rückbezug</td></tr>
<tr><td>Schluss</td><td>Meinung auf den Punkt · Bezug zur Überschrift · Appell, Lösung, Ausblick</td></tr>
<tr><td>Stil</td><td>Präsens · Standardsprache · Fachbegriffe · rhetorische Mittel · Adressaten ansprechen</td></tr>
<tr class="ph"><td colspan="2">Vertreter</td></tr>
${DE_KURZ.map(([n,d])=>`<tr><td>${n}</td><td>${d}</td></tr>`).join("")}
<tr class="ph"><td colspan="2">Begriffe</td></tr>
<tr><td>Sprachökonomie</td><td>kürzester Ausdruck aus Bequemlichkeit und Zeitersparnis (Ursache des Sprachwandels)</td></tr>
<tr><td>medial</td><td>gesprochen oder geschrieben?</td></tr>
<tr><td>konzeptionell</td><td>Nähe (mündlich) oder Distanz (schriftlich)?</td></tr>
<tr><td>(a)synchron</td><td>gleichzeitig · zeitversetzt · quasi-synchron = Chat, wenn alle online sind</td></tr>
<tr><td>Standardsprache</td><td>gilt im ganzen Sprachgebiet, in Grammatiken und Wörterbüchern festgehalten</td></tr>
<tr><td>Varietät</td><td>ergänzt, erweitert, modifiziert die Einzelsprache, nicht unabhängig von ihr</td></tr>
<tr><td>Sprachgeschichte</td><td>Latein (Kloster), Französisch (Turnier), Italienisch (Risiko), Slawisch (Grenze) · Rechtschreibung erst Ende 19. Jh.</td></tr>
</tbody></table><p class="tip" style="margin:10px 0 0">Material zitieren: Autor oder Quelle + Jahr nennen, Zahlen nie ohne Quelle, Branchenumfragen kritisch einordnen.</p>`;

/* ---------- Module für die Navigation ---------- */
if(typeof PS_ICON!=="undefined")Object.assign(PS_ICON,{
  de_pers:`<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 4.5a3 3 0 0 1 0 6M18 14c2 .8 3 2.8 3 6"/></svg>`,
  de_arg:`<svg viewBox="0 0 24 24"><path d="M12 4v16M5 20h14"/><path d="M4 8h16"/><path d="M4 8l-2.5 6h5zM20 8l-2.5 6h5z"/></svg>`,
  de_chat:`<svg viewBox="0 0 24 24"><path d="M4 5h16v11H9l-5 4z"/><path d="M8 9h8M8 12h5"/></svg>`,
  de_mat:`<svg viewBox="0 0 24 24"><path d="M7 3h10v18H7z"/><path d="M4 6v15h10"/><path d="M10 8h4M10 12h4"/></svg>`
});
if(typeof MODS!=="undefined")Object.assign(MODS,{
  deU:{tabs:[["sprachwandel","Sprachwandel","text"],["digital","Digital","de_chat"],["begriffe","Begriffe","lex"]],
    titles:{sprachwandel:["Sprachwandel","Geschichte, Varietäten, Modelle, Faktoren"],digital:["Digitale Kommunikation","Dürscheid, Internetsprache, Medien, Hate Speech"],begriffe:["Begriffe",`${DE_BEGRIFFE.length} Fachbegriffe`]},
    views:{sprachwandel:deSprachwandel,digital:deDigital,begriffe:deBegriffe},
    merk:["Das Wichtigste auf einen Blick","Argumentieren mit Material",DE_MERK]},
  deK:{tabs:[["ablauf","Ablauf","ablauf"],["vertreter","Vertreter","de_pers"],["material","Material","de_mat"],["argumente","Argumente","de_arg"],["muster","Muster","probe"],["ueben","Üben","ueben"]],
    titles:{ablauf:["Ablauf","Aufbau, Vorgaben, Formulierungen, Checkliste"],vertreter:["Vertreter","Wer sagt was – und wie du es nutzt"],material:["Material","Auszüge zum Zitieren"],argumente:["Argumente","Pro und Kontra mit Belegen"],muster:["Musteraufsätze","Mit markierten Bezügen"],ueben:["Üben","Karten, Wer sagt was?, Quiz"]},
    views:{ablauf:deAblauf,vertreter:deVertreter,material:deMaterial,argumente:deArgumente,muster:deMuster,ueben:deUeben},
    merk:["Das Wichtigste auf einen Blick","Argumentieren mit Material",DE_MERK]}
});
