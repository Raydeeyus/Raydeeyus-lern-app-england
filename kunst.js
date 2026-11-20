/* =========================================================
   Klausuren-App: Kunst · Fotografie (GK 12, Lehrkraft A. Palm)
   Kursthema: Funktionen der Fotografie zwischen Dokumentation und Inszenierung
   Wird NACH sport.js und VOR klausur.js geladen und ergänzt MODS (kuU / kuK).
   Quelle: Unterrichtsmaterial (PDF „12_1“): Mitschriften, Arbeitsblätter
   Einführung/Genre/Fotoanalyse/Bildkomposition, Handbuch Medien S. 298–300,
   Praxis Kunst Fotografie S. 10–11, korrigierter Test und korrigiertes Handout.
   Eigene Notizen: Fotomontage + Abstrakte Fotografie „klausurirrelevant“;
   am Test: „Klausur!“ (Zuordnen), „Klausur: meist Bilder mit Personen“
   (Einstellungsgrößen), „Lernen!!! Leichte Punkte“ (Licht, Farbe, Kontrast).
   ========================================================= */

/* ---------- Die 6 Aufgaben der Fotografie (Praxis Kunst Fotografie) ---------- */
const KU_AUFG=[
 {id:"aufz",n:"Aufzeichnung",c:"--psy",kurz:"Tatbestände einfach, billig und bildmäßig festhalten",
  bsp:"Katalogbilder, Reproduktionen von Kunstwerken, Dokumente und Bücher auf Mikrofilm, Erkennungsbilder (Passfoto), manche Dokumentarfotos",
  ziel:"Wissen und Fakten so aufbewahren, dass man sie leicht greifen und weit verbreiten kann",
  arten:"Reprofotografie, Passfoto, Dokumentarfotografie",frage:"Wird etwas nur sachlich festgehalten?"},
 {id:"unt",n:"Unterhaltung",c:"--gold",kurz:"unerschöpfliche Quelle von Unterhaltung und Vergnügen",
  bsp:"Filme, Amateuraufnahmen, Reisebilder, schöne Bildbände und Fotojahrbücher, Pin-up-Fotos, Bildberichte in Illustrierten",
  ziel:"Freude, Genuss und Zeitvertreib beim Anschauen",
  arten:"Landschafts-, Reise-, Urlaubs-, Amateur-, Souvenirfotografie, Pin-up",frage:"Soll das Foto vor allem Spaß machen und gefallen?"},
 {id:"pers",n:"Persönlichkeitsausdruck",c:"--de",kurz:"Fotografie als günstiges Mittel, sich künstlerisch auszudrücken",
  bsp:"Fotokunst: Ein Motiv lässt sich auf unzählige Arten fotografieren; Fotografen suchen neue, ausdrucksstarke Formen, um ihre Sicht der Welt, ihre Gefühle, Ideen und Gedanken mitzuteilen",
  ziel:"den eigenen Blick auf die Welt anderen mitteilen",
  arten:"Inszenierte Fotografie, Pictorialismus, Fotokunst",frage:"Zeigt jemand vor allem seine eigene Sicht, Idee, sein Gefühl?"},
 {id:"info",n:"Information",c:"--parl",kurz:"den Betrachter informieren oder ihn in die Lage versetzen, richtige Entscheidungen zu treffen",
  bsp:"Dokumentaraufnahmen, die meisten Fotos in Illustrierten, Zeitungen, Handbüchern und wissenschaftlichen Veröffentlichungen, Bilder als visuelle Lehrmittel",
  ziel:"sachlich über Tatsachen und Ereignisse unterrichten",
  arten:"Pressefoto, Fotoreportage, Dokumentarfotografie, Sozialdokumentarische Fotografie",frage:"Soll ich etwas über die Wirklichkeit erfahren?"},
 {id:"zweck",n:"Zweckinformation",c:"--crown",kurz:"den Bildgegenstand schön und begehrenswert machen",
  bsp:"kommerzielle Fotografie, Werbefotografie, politische Propaganda",
  ziel:"Verkauf eines Produkts, einer Dienstleistung oder einer Idee",
  arten:"Werbe-, Mode-, Produktfotografie, Wahl- und Propagandafotos",frage:"Soll ich etwas kaufen oder einer Idee folgen?"},
 {id:"entd",n:"Entdeckung",c:"--muted",kurz:"Die Kamera ist dem Auge in vielem überlegen – sie macht Neues sichtbar",
  bsp:"angewandte Fotografie in Forschung und Wissenschaft: Makro- und Telefotografie, Ultraweitwinkel- und Kurzzeitfotografie, abstrakte Fotos und Fotogramme",
  ziel:"der Forschung neue Gebiete erschließen und den visuellen und geistigen Horizont des Betrachters erweitern",
  arten:"Makro-, Mikro-, Röntgen-, Astro-, Bewegungs-, Infrarot-, Satellitenfotografie",frage:"Zeigt das Foto etwas, das das bloße Auge nicht sehen kann?"}
];
const kuA=id=>KU_AUFG.find(a=>a.id===id);

/* ---------- Fotouniversum (Vilém Flusser), Lehrbuch S. 10 ---------- */
const KU_UNIV=[
 ["Technik","Wie wurde fotografiert?","Reprofotografie, Röntgenfotografie, Infrarotfotografie, Makrofotografie, Mikrofotografie, Satellitenfotografie, Sofortbildfotografie, Kleinbildfotografie, Stereofotografie, Panoramafotografie, digitale Fotografie"],
 ["Inhalte","Was ist zu sehen?","Porträtfotografie, Familienfotografie, Gruppenfotografie, Sachfotografie, Architekturfotografie, Luftbildfotografie, Kinderfotografie, Aktfotografie, Sportfotografie, Kriegsfotografie, Reisefotografie, Landschaftsfotografie"],
 ["Funktionen","Wozu dient das Foto?","Dokumentarfotografie, Sozialdokumentarische Fotografie, Fotoreportage, Werbefotografie, abbildende Fotokunst, Souvenirfotografie, Amateurfotografie, Kriminalfotografie, Spionagefotografie"],
 ["Stile","In welcher Tradition steht es?","Piktorialismus, Neues Sehen, Neue Sachlichkeit, Straight Photography, Subjektive Fotografie, kameralose Fotografie, Inszenierte Fotografie, Konzept-Fotografie, generative Fotografie, Foto-Installation, Anti-Fotografie"]
];

/* ---------- Beispiele aus dem Lehrbuch (S. 11) ---------- */
const KU_LB=[
 ["Sozialdokumentarische Fotografie","Lewis W. Hine: Kinderarbeit in einer Baumwollspinnerei in North Carolina, 1908","info","rüttelte auf: half, in den USA Gesetze gegen Kinderarbeit durchzusetzen"],
 ["Röntgenfoto","Wilhelm Conrad Röntgen: Hand seiner Ehefrau, 22.12.1895","entd","macht das Innere des Körpers sichtbar"],
 ["Bewegungsfotografie","Harold Edgerton: Kugel mit dreifacher Schallgeschwindigkeit, mit einer millionstel Sekunde fotografiert, 1962","entd","friert eine Bewegung ein, die das Auge nie sehen könnte"],
 ["Forschungsfoto","Lennart Nilsson: Embryo, 1965 (Ultraweitwinkel-Objektive und Miniaturblitze)","entd","zeigt Unsichtbares aus dem Inneren des Körpers"],
 ["Landschaftsfotografie","Ansel Adams: Mount Williamson, Sierra Nevada – Abziehender Sturm, 1944","unt","schöne Natur zum Genießen (auch Persönlichkeitsausdruck möglich)"],
 ["Astrofotografie","Stern NGC 7027 im Sternbild des Schwans, Foto des Weltraumteleskops Hubble, 1996","entd","Blick weit über das menschliche Auge hinaus"],
 ["Mikrofotografie","David Scharf: Bettwanze, 1995 (Rasterelektronenmikroskop, bis 100 000-fach)","entd","kleinste Strukturen werden sichtbar"],
 ["Aktfoto","Marilyn Monroe als Pin-up-Girl, Kalenderblatt von 1951","unt","Pin-up-Fotos nennt der Text ausdrücklich bei Unterhaltung"],
 ["Pressefoto","Eddie Adams: Der Polizeichef von Saigon erschießt einen Vietcong, 1968","info","Nachrichtenbild aus dem Vietnamkrieg; Bilder wie dieses verstärkten die Proteste"]
];

/* ---------- Einstellungsgrößen (Handbuch Medien S. 298 f. + Mitschrift) ----------
   Reihenfolge wie in deinem Unterricht. Distanz: Kleinbild, 50 mm Brennweite. */
const KU_EG=[
 {id:"detail",n:"Detail",dist:"ca. 30 cm",zeigt:"extreme Großeinstellung: nur ein kleiner Teil, z. B. Augen, Mund, Hände",wirk:"offen, enthüllend und äußerst emotional",frage:"Sieht man nur einen Teil des Gesichts oder Körpers?"},
 {id:"gross",n:"Groß (Großaufnahme)",kn:"Groß",dist:"ca. 50 cm",zeigt:"kleiner Ausschnitt des Ganzen; bei Personen füllt der Kopf das Bild",wirk:"verdichtet auf Einzelheiten (Mimik), die man sonst kaum wahrnimmt; sehr emotional",frage:"Füllt der Kopf das Bild aus?"},
 {id:"nah",n:"Nah",dist:"ca. 60 cm",zeigt:"etwa ein Drittel der Person: Kopf, Schultern, Brust",wirk:"stark subjektiv, wählt bewusst einen Teil aus; noch emotional",frage:"Kopf bis etwa zur Brust?"},
 {id:"amerik",n:"Amerikanisch",dist:"ca. 1,20 m",zeigt:"Person vom Scheitel bis zum Knie (aus Western: der Revolver an der Hüfte ist im Bild); liegt zwischen Nah und Halbnah",wirk:"Haltung, Gestik und Körpersprache stehen im Mittelpunkt; Person wirkt präsent",frage:"Vom Scheitel bis zum Knie, Person im Mittelpunkt?"},
 {id:"halbnah",n:"Halbnah",dist:"ca. 2–3 m",zeigt:"etwa zwei Drittel der Person; die unmittelbare Umgebung ist noch zu erkennen; auch Personengruppen",wirk:"schon eher objektive Bildwirkung",frage:"Etwa zwei Drittel der Person und die nahe Umgebung (oder eine Gruppe)?"},
 {id:"halbtotale",n:"Halbtotale",dist:"ca. 5 m",zeigt:"Personen/Objekte ganz zu sehen und füllen den Bildausschnitt; wenig Umgebung",wirk:"vorwiegend objektiv, weniger emotional",frage:"Ganze Person von Kopf bis Fuß, die das Bild füllt?"},
 {id:"totale",n:"Totale",dist:"ca. 10 m bis unendlich",zeigt:"Überblick über das gesamte Geschehen; Personen ganz und mit viel Umgebung",wirk:"distanzierter Beobachter, objektiv; der Betrachter braucht mehr Zeit für die vielen Einzelheiten",frage:"Ganze Person mit viel Umgebung, Überblick?"},
 {id:"weite",n:"Weite",dist:"ca. 100 m bis unendlich",zeigt:"noch größerer Raum als die Totale; Personen sind nur noch ein unbedeutendes Detail",wirk:"vermittelt Weite; beliebt bei Landschaften",frage:"Landschaft, Person winzig?"}
];
const kuEGn=id=>{const e=KU_EG.find(x=>x.id===id);return e.kn||e.n};

/* ---------- Perspektiven (Handbuch Medien S. 300 + Fotoanalyse-Blatt) ---------- */
const KU_PERSP=[
 {n:"Normalperspektive",wo:"aus der gewohnten Augenhöhe, frontal",wirk:"vertraut; das Objekt wirkt gleichwertig, auf Augenhöhe, weder überlegen noch unterlegen",c:"--parl"},
 {n:"Froschperspektive",wo:"von unten nach oben (Untersicht)",wirk:"mächtig, selbstbewusst, erhaben, überlegen, bedrohlich, sogar unheimlich; gezielt eingesetzt: visuelle Faszination",c:"--crown"},
 {n:"Vogelperspektive",wo:"von oben nach unten (Aufsicht)",wirk:"klein, erniedrigt, einsam, unterwürfig, schwach, unterlegen, bedroht; gibt Überblick",c:"--psy"},
 {n:"Schräger Standpunkt",wo:"zusätzlich zum Oben/Unten wird die Kamera gedreht (gekippt)",wirk:"stark irreale Eindrücke; dramatisch, dynamisch, verunsichernd",c:"--gold"}
];

/* ---------- Spezifisch fotografische Gestaltungsmittel (AB Fotoanalyse) ---------- */
const KU_GM=[
 ["Blende","groß (kleine Blendenzahl)","geringe Schärfentiefe","nur die fokussierte Ebene ist scharf, der Rest unscharf"],
 ["","klein (große Blendenzahl)","große Schärfentiefe","Vorder-, Mittel- und Hintergrund scharf"],
 ["Objektiv","Brennweite groß (Teleobjektiv)","entfernte Bildebenen werden vergrößert","Objekte wirken eng gestaffelt, zusammengerückt"],
 ["","Brennweite mittel (Normalobjektiv)","Bildebenen wie beim normalen Sehen","Eindruck einer normalen Sicht"],
 ["","Brennweite klein (Weitwinkel)","weiter Bildausschnitt wird erfasst","Ausschnitt wirkt erweitert, wie aufgeklappt (Fischauge)"],
 ["Blickwinkel","von oben (Vogelperspektive)","","Objekt erscheint klein, bedroht, schwach, unterlegen"],
 ["","frontal","","Objekt auf Augenhöhe, gleichwertig, weder überlegen noch unterlegen"],
 ["","von unten (Froschperspektive)","","Objekt erscheint mächtig, bedrohlich, groß"],
 ["Verschlusszeit","kurz","Bewegungen werden eingefroren, nichts verwackelt; wenig Licht","starr und scharf, wie eingefroren"],
 ["","lang","Bewegungsspuren, Verwacklungen sichtbar; viel Licht","lebendig und dynamisch"],
 ["Filmmaterial","feinkörnig","hohe Auflösung, wenig lichtempfindlich","scharf bei gutem Licht, bei schlechtem Licht zu dunkel"],
 ["","grobkörnig","geringere Auflösung, sehr lichtempfindlich","körnig, unschärfer, aber auch bei wenig Licht möglich"]
];
const KU_LICHT=[
 ["Tageslicht, Sonne","von oben, scharfe Konturen, Schlagschatten, wenig Plastizität","natürlich, grell"],
 ["Tageslicht, Wolken","von oben, weiche Konturen, diffuse Schatten, Plastizität","natürlich, weich"],
 ["Kunstlicht, gestreut","aus beliebiger Richtung, weiche Konturen, diffuse Schatten","weich, oft verfremdend"],
 ["Kunstlicht, gebündelt","aus beliebiger Richtung, scharfe Konturen, Schlagschatten","lenkt den Blick auf „Spots“"],
 ["mehrere Lichtquellen","Beleuchtungen überlagern sich, weniger Schatten","vielschichtig: Augenführung, Atmosphäre, Stimmung"],
 ["Blitz, gestreut","weiche Konturen, weiche Schatten","weich, oft verfremdend; Bewegung eingefroren"],
 ["Blitz, gebündelt","scharfe Konturen, scharfe Schatten","Blick auf „Spots“; Bewegung eingefroren"],
 ["farbiges Licht","weitere Effekte","Stimmung, Verfremdung"]
];
/* Farbe und Kontraste: Wirkungen (Fotoanalyse-Blatt + Ergänzung) */
const KU_FARBE=[
 ["Schwarz-Weiß","reduziert auf Hell-Dunkel, Form und Struktur","sachlich, dokumentarisch, ernst, zeitlos"],
 ["warme Farben (Rot, Orange, Gelb)","Nähe, Wärme","lebendig, warm, geborgen, auch aufregend"],
 ["kalte Farben (Blau, Grün)","Distanz, Kühle","ruhig, kühl, sachlich, auch einsam"],
 ["Hell-Dunkel-Kontrast","helle und dunkle Bildteile treffen hart aufeinander","Spannung, Dramatik, hebt Bildteile hervor, lenkt den Blick"],
 ["Kalt-Warm-Kontrast","warme und kalte Farben nebeneinander","Spannung, Raumwirkung (warm kommt nach vorn)"],
 ["Grau-Bunt (Intensität)","leuchtende neben gedeckten Farben","das Bunte springt ins Auge"],
 ["Schärfe-Unschärfe","scharfe neben unscharfen Zonen","Tiefe; das Scharfe tritt plastisch hervor"],
 ["Formkontrast","fließend ↔ eckig, ruhig ↔ unruhig, groß ↔ klein","Spannung, Lebendigkeit"]
];

/* ---------- Bildkomposition (Arbeitsblatt, KI-generiert 2026) ---------- */
const KU_KOMPO=[
 ["drittel","Drittelregel","Bild in 9 gleiche Felder teilen; Wichtiges auf die Linien oder Schnittpunkte → spannend, aber ausgewogen"],
 ["gold","Goldener Schnitt","Verhältnis ca. 1 : 1,618 → natürliche, harmonische Proportion, führt den Blick angenehm durchs Bild"],
 ["sym","Symmetrie / zentriert","ruhig, geordnet, harmonisch (z. B. Porträt, Architektur)"],
 ["diag","Diagonale","Dynamik, Bewegung, Lebendigkeit, Spannung"],
 ["dreieck","Dreieck","Spannung, Dynamik (auf der Grundseite stehend auch stabil)"],
 ["kreis","Kreis","Harmonie, Ruhe, Geschlossenheit"],
 ["rechteck","Rechteck","Stabilität, Ordnung"],
 ["spirale","Spirale","Bewegung, Leitlinie"],
 ["waag","Waagerechte","Ruhe, Stabilität, Weite"],
 ["senk","Senkrechte","Höhe, Kraft, Dominanz"],
 ["fuehr","Führungslinie","führt den Blick ins Bild und zum Hauptmotiv"],
 ["neg","Negativraum","freie Fläche schafft Ruhe und lässt das Motiv wirken"]
];

/* ---------- Genres (AB „Genre der Fotografie“) ----------
   k: 1 = klausurrelevant, 0 = laut deiner Notiz klausurirrelevant */
const KU_GENRE=[
 {n:"Inszenierte Fotografie",k:1,c:"--crown",
  m:["Fotograf greift aktiv ins Motiv ein","arrangiert und inszeniert Objekte und Personen","strategischer Aufbau der Bildaussage (Schwerpunkt: Motiv, Gestaltung)","emotionale Reaktion des Betrachters steht im Vordergrund → Bildaussage"],
  kue:"Cindy Sherman, Duane Michals, Sandy Skoglund, Gjon Mili",
  bsp:"Cindy Sherman: Untitled Film Still #58 (1980); Jeff Wall: The Thinker (1986); Mode: Helmut Newton: Rue Aubriot (1975)"},
 {n:"Fotomontage",k:0,c:"--muted",
  m:["neue künstlerische Wirklichkeit → neue Ästhetik, Verdichtung der Aussage","„provokative Antikunst“","Positiv- bzw. Klebemontage, digitale Montage oder Negativmontage"],
  kue:"Raoul Hausmann, John Heartfield, Annegret Soltau, Hannah Höch",
  bsp:"Herbert Bayer: Einsamer Großstädter (1932)"},
 {n:"Sozialdokumentarische Fotografie",k:1,c:"--parl",
  m:["zeigt schlechte Arbeitsbedingungen und Armut (z. B. Kinderarbeit, Obdachlosigkeit)","keine nüchterne, zurückhaltende Sachaufnahme","Tendenzaufnahme → Wunsch nach politischer und sozialer Veränderung","Authentizität der Bilder → unverfälschte Wirklichkeit"],
  kue:"Lewis W. Hine, Walker Evans",
  bsp:"Lewis W. Hine: Kinderarbeit (1908); Dorothea Lange: Wanderarbeiterin (1936)"},
 {n:"Abstrakte Fotografie",k:0,c:"--muted",
  m:["verzerrte, verunklarte Objekte ODER Experimente mit Fotopapier in der Dunkelkammer (kameralose Fotografie)","erweitert die Ausdrucksfähigkeit des Fotoapparats","neue Bedeutungen der Motive, fotografische Strukturbildungsprozesse","überschreitet die gegenständlich abbildende Fotografie"],
  kue:"Alvin Langdon Coburn, Man Ray",
  bsp:"Man Ray: Solarisation (1931)"},
 {n:"Straight Photography",k:1,c:"--psy",
  m:["Streben nach nicht manipulierter Wirklichkeit, Wahrheit und Ästhetik","strenger, formaler Bildaufbau"],
  kue:"Edward Weston",
  bsp:"z. B. Westons gestochen scharfe Nahaufnahmen von Gemüse, Muscheln, Akten"},
 {n:"Pictorialismus (Piktorialismus)",k:1,c:"--de",
  m:["ein Foto gewinnt an Wert, wenn es einem Gemälde oder einer Zeichnung ähnelt","orientiert sich an Atmosphäre und Licht der Malerei des Impressionismus","rein ästhetische Wirkung","Arbeit im Freien: verwischte, unscharfe Konturen, gestreutes Licht, Verzicht auf Details"],
  kue:"Frank Eugene (dazu: Heinrich Kühn, Alvin Langdon Coburn)",
  bsp:"Alvin Langdon Coburn: Die weiße Brücke – Venedig (1905); Heinrich Kühn: Miss Mary (um 1905)"},
 {n:"Neues Sehen / Neue Sachlichkeit",k:1,c:"--gold",
  m:["der Gegenstand steht im Fokus","Einfachheit und Schönheit der Objekte","Komposition und Beleuchtung sollen aufgelockert werden → Bauhaus","Ergänzung: typisch sind ungewohnte Blickwinkel (steil von oben/unten), Diagonalen und harte Licht-Schatten-Muster"],
  kue:"Alexander Rodtschenko, László Moholy-Nagy, Andreas Feininger",
  bsp:"Alexander Rodtschenko: Mädchen mit Leica; André Kertész: Poughkeepsie, New York (1937)"}
];
const KU_GREL=KU_GENRE.filter(g=>g.k);

/* ---------- Auswahl zur Fotoanalyse (AB, 9 Fotos) – eigene Beschreibung ---------- */
const KU_FOTOS=[
 {nr:1,f:"Helmut Newton",t:"Rue Aubriot, French Vogue, White Women, Paris",j:"1975",g:"Inszenierte Fotografie (Modefotografie)",eg:"Halbtotale",p:"etwa Augenhöhe",
  d:"SW, Hochformat. Nachts in einer engen Pariser Gasse steht ein Model im dunklen Herrenanzug mit weißer Schleifenbluse, die Haare streng zurückgekämmt, eine Zigarette in der Hand, die andere Hand in der Hosentasche, der Blick gesenkt. Straßenlaternen leuchten im Hintergrund, der Boden glänzt nass.",a:"zweck"},
 {nr:2,f:"André Kertész",t:"Poughkeepsie, New York",j:"1937",g:"Neues Sehen",eg:"Totale",p:"Vogelperspektive (steil von oben)",
  d:"SW. Steiler Blick von oben auf einen Bahnsteig mit Überdachung und Treppe; die Gleise laufen als Diagonalen durchs Bild, Menschen wirken klein. Starke Licht-Schatten-Flächen.",a:"pers"},
 {nr:3,f:"August Sander",t:"Handlanger",j:"1928",g:"Dokumentarische Fotografie (laut Korrektur)",eg:"Amerikanisch",p:"Normalperspektive, frontal",
  d:"SW, Hochformat. Ein junger Bauhilfsarbeiter mit Schiebermütze trägt ein Brett mit Ziegelsteinen auf den Schultern, hält es mit einem erhobenen Arm, stützt den anderen in die Hüfte und blickt ernst in die Kamera. Der Hintergrund ist fast schwarz.",a:"info"},
 {nr:4,f:"Alexander Rodtschenko",t:"Mädchen mit Leica",j:"1927 (Blatt; in Museen meist 1932–1934 datiert)",g:"Neues Sehen",eg:"Halbtotale",p:"schräger Standpunkt (gekippte Kamera)",
  d:"SW. Eine junge Frau mit Kamera sitzt schräg im Bild; ein Gitter aus Licht und Schatten legt sich über sie und die Bank. Starke Diagonalen, harter Hell-Dunkel-Kontrast.",a:"pers"},
 {nr:5,f:"Dorothea Lange",t:"Wanderarbeiterin (Migrant Mother)",j:"1936",g:"Sozialdokumentarische Fotografie",eg:"Nah",p:"Normalperspektive",
  d:"SW, Hochformat. Eine Mutter mit sorgenvollem Blick legt die Hand ans Kinn; zwei Kinder lehnen sich an ihre Schultern und wenden das Gesicht ab, ein Baby liegt auf ihrem Schoß. Weiches Licht, enger Ausschnitt.",a:"info"},
 {nr:6,f:"Heinrich Kühn",t:"Miss Mary",j:"um 1905",g:"Pictorialismus",eg:"Amerikanisch",p:"Normalperspektive",
  d:"bräunlich getönt, weich und unscharf. Eine junge Frau im hellen Kleid mit großem dunklem Hut, der das Gesicht verschattet, steht im Profil. Gestreutes Licht, kaum Details – wie ein Gemälde.",a:"pers"},
 {nr:7,f:"Cindy Sherman",t:"Untitled Film Still #58",j:"1980",g:"Inszenierte Fotografie",eg:"Nah",p:"Froschperspektive",
  d:"SW, Querformat. Eine Frau (die Künstlerin selbst) mit kurzen dunklen Haaren und wehendem Netzschal blickt dramatisch nach oben aus dem Bild heraus; hinter ihr ragt ein Hochhaus schräg in den Himmel. Wirkt wie ein Standbild aus einem Film.",a:"pers"},
 {nr:8,f:"Spencer Platt",t:"World Press Photo des Jahres 2006",j:"2006",g:"Pressefoto / Fotoreportage",eg:"Halbnah",p:"etwa Augenhöhe",
  d:"Farbe, Querformat. Junge Leute mit Sonnenbrillen fahren in einem roten Cabrio durch ein zerbombtes Viertel in Beirut; eine Frau hält sich ein Tuch vor die Nase, eine andere fotografiert mit dem Handy. Glänzendes Auto vor Trümmern.",a:"info"},
 {nr:9,f:"Jeff Wall",t:"The Thinker",j:"1986",g:"Inszenierte Fotografie",eg:"Totale",p:"Normalperspektive",
  d:"Farbe, großes Leuchtkasten-Bild. Ein dunkel gekleideter Mann sitzt in der Pose von Rodins Skulptur „Der Denker“ auf einem Betonsockel über einer Stadt, links eine Straßenlaterne, blauer Himmel, Stromleitungen.",a:"pers"}
];

/* ---------- Fachbegriffe ----------  k: 1 = Klausurthema, 0 = Hintergrund */
const KU_BEGRIFFE=[
 {g:"Grundlagen",t:"Fotografie",d:"Von griech. <i>phos</i> „Licht“ und <i>graphein</i> „schreiben, malen“ → „malen mit Licht“. 1) bildgebendes Verfahren: Ein Lichtbild wird optisch auf ein lichtempfindliches Medium projiziert und dort dauerhaft gespeichert (<b>analog</b>) oder in elektronische Daten umgewandelt (<b>digital</b>). 2) das dauerhafte Lichtbild selbst (Foto).",k:1},
 {g:"Grundlagen",t:"Positiv / Negativ",d:"Ein Foto kann als Positiv (Helligkeiten wie in der Wirklichkeit) oder als Negativ (hell und dunkel vertauscht) auf Film, Folie oder Papier vorliegen. Vervielfältigt wird es als Abzug, Vergrößerung oder Druck.",k:0},
 {g:"Grundlagen",t:"Fotouniversum",d:"Begriff des Philosophen Vilém Flusser für die riesige Menge und Vielfalt von Fotos. Ordnen lassen sich Fotos nach <b>Technik, Inhalt, Funktion</b> und <b>Stil</b>.",k:1},
 {g:"Grundlagen",t:"documentum (Beweisstück)",d:"Weil die Kamera Vorgänge in unmittelbarer Beobachtung und naturalistisch aufnimmt, wirkt jedes Foto wie ein Beweis. Susan Sontag: Fotos liefern Beweismaterial – was wir bezweifeln, scheint bestätigt, wenn wir ein Foto davon sehen.",k:1},
 {g:"Grundlagen",t:"Aufgaben der Fotografie",d:"Aufzeichnung, Unterhaltung, Persönlichkeitsausdruck, Information, Zweckinformation, Entdeckung (nach „Praxis Kunst Fotografie“).",k:1},
 {g:"Grundlagen",t:"Kommunikationsmodell",d:"Sender (Fotograf) → <b>Codierung</b> → Botschaft im Medium (Foto) → <b>Decodierung</b> → Empfänger (Betrachter) → Wirkung → Feedback zurück an den Sender. <b>Störsignale</b> können jeden Schritt stören.",k:1},
 {g:"Grundlagen",t:"Codierung / Decodierung",d:"Der Fotograf „verschlüsselt“ seine Absicht in Gestaltungsmitteln (Licht, Perspektive, Ausschnitt …); der Betrachter „entschlüsselt“ sie – abhängig von Erfahrung, Wissen und Entwicklungsstand.",k:1},
 {g:"Grundlagen",t:"Störsignale",d:"Alles, was die Übermittlung der Bildbotschaft stört: fehlender oder falscher Kontext, irreführende Bildunterschrift, Bilderflut, Vorurteile oder fehlendes Wissen beim Betrachter, schlechte Bildqualität.",k:0},
 {g:"Wirklichkeit",t:"Scheinbare Objektivität",d:"Gisèle Freund (1979): Die Fotografie ist an die Natur gebunden, hat aber nur eine <i>scheinbare Objektivität</i>; die angeblich unbestechliche Linse erlaubt Verformungen der Wirklichkeit. Grund: Der Fotograf greift absichtsvoll ein (Motivwahl, Standort, Aufnahmemodus, Format, Technik), und der Betrachter deutet subjektiv.",k:1},
 {g:"Wirklichkeit",t:"Manipulation",d:"Gezielte, für den Betrachter kaum erkennbare Beeinflussung seiner Wahrnehmung und Meinung. Mittel: Auswahl von Moment und Ausschnitt (Weglassen), Perspektive, Licht, Inszenierung, Retusche, Montage, irreführende Bildunterschrift. Ziel: Kauf, politische Meinung, Sensation.",k:1},
 {g:"Wirklichkeit",t:"Dokumentation",d:"Fotografie, die vorgefundene Wirklichkeit festhält und als Zeugnis dient; der Fotograf greift (möglichst) nicht ins Geschehen ein. Wirkt authentisch, ist aber trotzdem durch Auswahl gestaltet.",k:1},
 {g:"Wirklichkeit",t:"Inszenierung",d:"Der Fotograf arrangiert Personen, Objekte, Licht und Ort gezielt für das Bild (gestellte Szene). Die Bildaussage wird strategisch aufgebaut; oft entsteht eine Fiktion.",k:1},
 {g:"Wirklichkeit",t:"Authentizität",d:"Echtheit, Glaubwürdigkeit. Sozialdokumentarische Fotos leben vom Anspruch, die unverfälschte Wirklichkeit zu zeigen.",k:1},
 {g:"Wirklichkeit",t:"Tendenzaufnahme",d:"Foto, das nicht neutral sein will, sondern Partei ergreift, um politische oder soziale Veränderung zu bewirken (typisch für die sozialdokumentarische Fotografie).",k:1},
 {g:"Wirklichkeit",t:"Wirkungsebenen",d:"Wirkung und Aussage eines Fotos lassen sich in drei Kategorien einteilen: Bilder mit überwiegendem <b>Informationsgehalt</b>, mit überwiegend <b>ästhetischem</b> Gehalt und mit überwiegend <b>emotionalem</b> Gehalt.",k:1},
 {g:"Wirklichkeit",t:"Retusche",d:"Nachträgliche Veränderung eines Fotos (früher am Negativ, heute digital). Beispiel: Bei Dorothea Langes „Wanderarbeiterin“ wurde 1939 ein Daumen am Bildrand wegretuschiert.",k:0},
 {g:"Gestaltung",t:"Einstellungsgröße",d:"Bildausschnitt, abgeleitet von der Größe des menschlichen Körpers; legt den Abstand des Betrachters zum Objekt fest und ist die erste Vorauswahl: Was soll der Betrachter sehen und was nicht? 8 Stufen: Detail, Groß, Nah, Amerikanisch, Halbnah, Halbtotale, Totale, Weite.",k:1},
 {g:"Gestaltung",t:"Perspektive",d:"Standpunkt des Betrachters (normal, oben, unten, schräg); zusammen mit Blickrichtung und Einstellungsgröße formt sie die innere Beziehung zwischen Betrachter und Objekt. Fotografisch gibt sie dem Bild die dritte Dimension: Raumtiefe.",k:1},
 {g:"Gestaltung",t:"Schärfentiefe (Tiefenschärfe)",d:"Bereich vor und hinter der fokussierten Ebene, der scharf erscheint. Große Blende → geringe Schärfentiefe; kleine Blende → große Schärfentiefe.",k:1},
 {g:"Gestaltung",t:"Totale Schärfe",d:"Das ganze Bild ist scharf (VG, MG, HG). Wirkung: unbestechlich, informativ, aber auch steril.",k:1},
 {g:"Gestaltung",t:"Selektive Schärfe",d:"Nur ein Bereich ist scharf, der Rest unscharf. Wirkung: reizvoll; bildwichtige Objekte treten plastisch aus den unscharfen Zonen hervor, der Blick wird gelenkt.",k:1},
 {g:"Gestaltung",t:"Bewegungsunschärfe",d:"Verwischte Bewegung durch lange Belichtungszeit. Wirkung: Eindruck von Aktion, Dynamik.",k:1},
 {g:"Gestaltung",t:"Blende",d:"Öffnung im Objektiv, regelt die Lichtmenge und die Schärfentiefe.",k:0},
 {g:"Gestaltung",t:"Brennweite",d:"Objektiveigenschaft: klein = Weitwinkel (weiter Ausschnitt, wirkt aufgeklappt), mittel = Normalobjektiv (normale Sicht), groß = Tele (Entferntes groß, Ebenen eng gestaffelt).",k:1},
 {g:"Gestaltung",t:"Verschlusszeit / Belichtungszeit",d:"Wie lange Licht auf Film oder Sensor fällt. Kurz → Bewegung eingefroren, starr und scharf; lang → Bewegungsspuren, lebendig und dynamisch.",k:1},
 {g:"Gestaltung",t:"Hartes / weiches Licht",d:"Hart (Sonne, gebündelt): scharfe Konturen und Schlagschatten, kontrastreich, grell. Weich (Wolken, gestreut): weiche Übergänge, diffuse Schatten, Plastizität.",k:1},
 {g:"Gestaltung",t:"Schlagschatten",d:"Scharf begrenzter Schatten, den ein Körper bei hartem Licht wirft.",k:1},
 {g:"Gestaltung",t:"Plastizität",d:"Eindruck von Körperlichkeit und Rundung durch abgestufte Licht- und Schattenwerte.",k:0},
 {g:"Gestaltung",t:"Hell-Dunkel-Kontrast",d:"Helle und dunkle Bildteile treffen aufeinander. Wirkung: Spannung, Dramatik; das Helle springt ins Auge und lenkt den Blick. Besonders wichtig bei SW-Fotos.",k:1},
 {g:"Gestaltung",t:"Kalt-Warm-Kontrast",d:"Warme (Rot, Orange, Gelb) und kalte Farben (Blau, Grün) nebeneinander → Spannung, Raumwirkung.",k:1},
 {g:"Gestaltung",t:"Format",d:"Hochformat betont Höhe, Aufrechtes, die einzelne Person (Porträt); Querformat betont Weite, Ruhe, Erzählung (Landschaft, Filmbild).",k:1},
 {g:"Gestaltung",t:"Raumauffassung (VG/MG/HG)",d:"Wie Vorder-, Mittel- und Hintergrund gestaltet sind: Raumtiefe, Blickwinkel, Verhältnis von Kameraposition und Handlungsachse (parallel, konträr, ins Bild mitführend).",k:1},
 {g:"Gestaltung",t:"Anmutungsqualität",d:"Erster, gefühlsmäßiger Eindruck eines Bildes: Stimmung und Atmosphäre (Sinneseindrücke wie Gerüche, Temperatur, Geräusche).",k:1},
 {g:"Gestaltung",t:"Augenführung (Blickführung)",d:"Vom Fotografen kalkulierte Reihenfolge, in der der Betrachter die Bildteile wahrnimmt: was zuerst ins Auge springt und was erst später.",k:1},
 {g:"Gestaltung",t:"Bildkomposition",d:"Wie die Elemente eines Bildes im Rahmen angeordnet sind, um eine bestimmte Wirkung zu erzielen: Zusammenspiel von Bildaufteilung, Bildaufbau und Kompositionsfiguren. Ziele: Blick lenken, Stimmung erzeugen, Botschaft vermitteln, Ausgewogenheit.",k:1},
 {g:"Gestaltung",t:"Bildaufteilung",d:"Wie die Fläche zwischen den wichtigsten Bildelementen aufgeteilt ist: Position der Hauptmotive, Verhältnis von VG/MG/HG, Negativraum, Balance von ruhigen und aktiven Bereichen.",k:1},
 {g:"Gestaltung",t:"Bildaufbau",d:"Räumliche Anordnung der Bildelemente: Vordergrund (Tiefe, Rahmen, führt ins Bild), Mittelgrund (verbindet, oft Hauptmotiv), Hintergrund (Atmosphäre, Kontext).",k:1},
 {g:"Gestaltung",t:"Kompositionsfiguren",d:"Geometrische Grundformen, nach denen Bildelemente angeordnet sind: Dreieck (Spannung, Dynamik), Kreis (Harmonie, Ruhe), Rechteck (Stabilität, Ordnung), Spirale (Bewegung, Leitlinie).",k:1},
 {g:"Gestaltung",t:"Kompositionsskizze",d:"Einfache, schnelle Skizze der Bildaufteilung: Haupt- und Nebenelemente, Linien und Formen, Licht und Schatten grob, Blickführung. In der Analyse veranschaulicht sie deine Aussagen.",k:1},
 {g:"Gestaltung",t:"Drittelregel",d:"Bildfläche durch je zwei Linien waagerecht und senkrecht in 9 gleiche Felder teilen; Wichtiges auf die Linien oder Schnittpunkte setzen.",k:1},
 {g:"Gestaltung",t:"Goldener Schnitt",d:"Teilung einer Strecke im Verhältnis ca. 1 : 1,618; wirkt natürlich und harmonisch. Beispiel: 1000 px : 1,618 ≈ 618 px.",k:1},
 {g:"Gestaltung",t:"Negativraum",d:"Freie, leere Fläche um das Motiv; schafft Ruhe und lässt das Motiv wirken.",k:1},
 {g:"Gestaltung",t:"Führungslinie",d:"Linie (Weg, Gleis, Zaun), die den Blick ins Bild und zum Hauptmotiv führt.",k:1},
 {g:"Genres",t:"Inszenierte Fotografie",d:"Der Fotograf arrangiert Objekte und Personen; strategischer Aufbau der Bildaussage, emotionale Reaktion im Vordergrund. Cindy Sherman, Duane Michals, Sandy Skoglund, Gjon Mili.",k:1},
 {g:"Genres",t:"Sozialdokumentarische Fotografie",d:"Zeigt Armut und schlechte Arbeitsbedingungen; keine neutrale Sachaufnahme, sondern Tendenzaufnahme mit dem Wunsch nach Veränderung; authentisch. Lewis W. Hine, Walker Evans (auch: Dorothea Lange).",k:1},
 {g:"Genres",t:"Straight Photography",d:"Streben nach nicht manipulierter Wirklichkeit, Wahrheit und Ästhetik; strenger, formaler Bildaufbau. Edward Weston.",k:1},
 {g:"Genres",t:"Pictorialismus",d:"Foto soll wie ein Gemälde wirken (Vorbild Impressionismus): unscharfe Konturen, gestreutes Licht, wenig Details, rein ästhetisch. Frank Eugene, Heinrich Kühn.",k:1},
 {g:"Genres",t:"Neues Sehen / Neue Sachlichkeit",d:"Der Gegenstand im Fokus, Einfachheit und Schönheit der Objekte, aufgelockerte Komposition und Beleuchtung (Bauhaus). Rodtschenko, Moholy-Nagy, Feininger.",k:1},
 {g:"Genres",t:"Fotomontage",d:"Aus mehreren Fotos zusammengesetzte neue Wirklichkeit, „provokative Antikunst“. Hausmann, Heartfield, Höch. (laut Notiz klausurirrelevant)",k:0},
 {g:"Genres",t:"Abstrakte Fotografie",d:"Verunklarte Objekte oder kameralose Experimente in der Dunkelkammer (z. B. Fotogramm, Solarisation). Man Ray, Coburn. (laut Notiz klausurirrelevant)",k:0},
 {g:"Genres",t:"Bauhaus",d:"Deutsche Kunst- und Designschule (1919–1933); prägte das Neue Sehen (Moholy-Nagy).",k:0}
];

/* ---------- Quiz ---------- */
const KU_QUIZ=[
 {q:"Was bedeutet „Fotografie“ wörtlich?",o:["Malen mit Licht","Schreiben mit Farbe","Festhalten der Zeit","Sehen mit der Kamera"],r:0,x:"Griech. <i>phos</i> = Licht, <i>graphein</i> = schreiben, malen."},
 {q:"Eine Makroaufnahme zeigt die Struktur eines Insektenauges. Welche Aufgabe erfüllt sie?",o:["Entdeckung","Unterhaltung","Aufzeichnung","Zweckinformation"],r:0,x:"Die Kamera macht sichtbar, was das bloße Auge nicht erkennt → Entdeckung."},
 {q:"Welche Aufgabe hat Werbefotografie?",o:["Zweckinformation","Information","Persönlichkeitsausdruck","Aufzeichnung"],r:0,x:"Der Bildgegenstand soll schön und begehrenswert wirken – Ziel ist der Verkauf."},
 {q:"Ein Passfoto erfüllt vor allem die Aufgabe …",o:["Aufzeichnung","Information","Unterhaltung","Entdeckung"],r:0,x:"Erkennungsbilder halten sachlich fest, wie jemand aussieht → Aufzeichnung."},
 {q:"Ein Foto in der Zeitung zeigt ein Hochwasser. Aufgabe?",o:["Information","Unterhaltung","Zweckinformation","Entdeckung"],r:0,x:"Pressefotos informieren über Ereignisse und helfen, sich ein Urteil zu bilden."},
 {q:"Wer prägte den Begriff „Fotouniversum“?",o:["Vilém Flusser","Susan Sontag","Gisèle Freund","Walter Koschatzky"],r:0,x:"Flusser; Sontag: „Fotos liefern Beweismaterial“; Freund: scheinbare Objektivität."},
 {q:"Gisèle Freund spricht von der … der Fotografie.",o:["scheinbaren Objektivität","absoluten Wahrheit","reinen Unterhaltung","technischen Grenze"],r:0,x:"Die angeblich unbestechliche Linse erlaubt Verformungen der Wirklichkeit."},
 {q:"Der Kopf einer Person füllt das ganze Bild. Einstellungsgröße?",o:["Groß","Nah","Detail","Halbnah"],r:0,x:"Großaufnahme: der Kopf bildfüllend. Nah wäre Kopf bis Brust."},
 {q:"Eine Person ist vom Scheitel bis zum Knie zu sehen.",o:["Amerikanisch","Halbtotale","Nah","Weite"],r:0,x:"Amerikanische Einstellung – bekannt aus Western (Revolver im Bild)."},
 {q:"Eine Person ist von Kopf bis Fuß zu sehen und füllt das Bild, wenig Umgebung.",o:["Halbtotale","Totale","Amerikanisch","Halbnah"],r:0,x:"Halbtotale: Objekte ganz zu erkennen, füllen den Ausschnitt."},
 {q:"Welche Einstellungsgröße wirkt laut Lehrbuch „offen, enthüllend und äußerst emotional“?",o:["Detail","Totale","Halbtotale","Weite"],r:0,x:"Die Detaileinstellung zeigt z. B. nur Augen oder Hände."},
 {q:"Welche Einstellungsgröße übernimmt die Funktion des distanzierten Beobachters?",o:["Totale","Groß","Nah","Detail"],r:0,x:"Die Totale gibt einen Überblick über das gesamte Geschehen – objektive Bildwirkung."},
 {q:"Wie wirkt eine Person aus der Froschperspektive?",o:["mächtig, überlegen, bedrohlich","klein, schwach, einsam","gleichwertig, vertraut","verschwommen, unklar"],r:0,x:"Von unten fotografiert wirkt das Objekt erhaben und mächtig."},
 {q:"Wie wirkt eine Person aus der Vogelperspektive?",o:["klein, erniedrigt, einsam","mächtig, erhaben","vertraut, gleichwertig","dynamisch, irreal"],r:0,x:"Von oben fotografiert wirkt das Objekt unterlegen, schwach, bedroht."},
 {q:"Die Kamera wird zusätzlich gedreht (gekippt). Wirkung?",o:["irreal, dramatisch","vertraut, ruhig","sachlich, neutral","weich, harmonisch"],r:0,x:"Schräger Standpunkt → stark irreale Eindrücke, dramatische Bildwirkung."},
 {q:"Vordergrund scharf, Hintergrund unscharf. Wie heißt das?",o:["selektive Schärfe","totale Schärfe","Bewegungsunschärfe","Weitwinkel"],r:0,x:"Selektive Schärfe lässt das Wichtige plastisch hervortreten."},
 {q:"Wie wirkt totale Schärfe?",o:["unbestechlich, informativ, steril","reizvoll, verträumt","dynamisch, actionreich","verfremdend, weich"],r:0,x:"So steht es in deiner Mitschrift zu den Mitteln der fotografischen Gestaltung."},
 {q:"Was bewirkt eine große Blendenöffnung?",o:["geringe Schärfentiefe","große Schärfentiefe","Bewegungsunschärfe","Fischaugen-Effekt"],r:0,x:"Große Blende → nur die fokussierte Ebene ist scharf."},
 {q:"Ein Teleobjektiv (große Brennweite) lässt Objekte …",o:["eng gestaffelt, zusammengerückt wirken","wie aufgeklappt wirken","normal wirken","verwischt wirken"],r:0,x:"Entfernte Bildebenen werden vergrößert und rücken zusammen."},
 {q:"Eine lange Verschlusszeit erzeugt …",o:["Bewegungsspuren, dynamische Wirkung","eingefrorene, starre Bilder","geringe Schärfentiefe","harte Schlagschatten"],r:0,x:"Lange Belichtung → Bewegung verwischt, Bild wirkt lebendig."},
 {q:"Sonnenlicht von oben erzeugt …",o:["scharfe Konturen und Schlagschatten","diffuse Schatten und Plastizität","keine Schatten","farbige Effekte"],r:0,x:"Tageslicht/Sonne wirkt natürlich, aber grell; bei Wolken weich und diffus."},
 {q:"Gebündeltes Kunstlicht …",o:["lenkt den Blick auf „Spots“","wirkt weich und verfremdend","reduziert alle Schatten","macht das Bild körnig"],r:0,x:"Scharfe Konturen, Schlagschatten – der Lichtkegel lenkt den Blick."},
 {q:"Welches Genre zeigt Armut, um Veränderung zu bewirken?",o:["Sozialdokumentarische Fotografie","Pictorialismus","Straight Photography","Inszenierte Fotografie"],r:0,x:"Tendenzaufnahme mit Wunsch nach politischer und sozialer Veränderung (z. B. Hine, Lange)."},
 {q:"Unscharfe Konturen, gestreutes Licht, wie ein impressionistisches Gemälde:",o:["Pictorialismus","Neues Sehen","Straight Photography","Sozialdokumentarisch"],r:0,x:"Pictorialismus, z. B. Heinrich Kühn: Miss Mary."},
 {q:"Streben nach nicht manipulierter Wirklichkeit, strenger Bildaufbau – Vertreter?",o:["Edward Weston","Cindy Sherman","Man Ray","Frank Eugene"],r:0,x:"Straight Photography: Edward Weston."},
 {q:"Cindy Sherman gehört zur …",o:["Inszenierten Fotografie","Sozialdokumentarischen Fotografie","Straight Photography","Fotomontage"],r:0,x:"Sie inszeniert sich selbst in Rollen, z. B. in den „Untitled Film Stills“."},
 {q:"Rodtschenko, Moholy-Nagy und Feininger stehen für …",o:["Neues Sehen / Neue Sachlichkeit","Pictorialismus","Fotomontage","Straight Photography"],r:0,x:"Gegenstand im Fokus, aufgelockerte Komposition, Bauhaus."},
 {q:"Welche Wirkung hat eine Diagonale im Bild?",o:["Dynamik, Lebendigkeit","Ruhe, Stabilität","Harmonie, Geschlossenheit","Ordnung"],r:0,x:"Waagerechte = Ruhe, Senkrechte = Kraft, Diagonale = Dynamik."},
 {q:"Welche Kompositionsfigur steht für Harmonie und Ruhe?",o:["Kreis","Dreieck","Spirale","Diagonale"],r:0,x:"Dreieck = Spannung/Dynamik, Rechteck = Stabilität, Spirale = Bewegung."},
 {q:"Das Verhältnis des Goldenen Schnitts beträgt etwa …",o:["1 : 1,618","1 : 3","1 : 2","1 : 1"],r:0,x:"Bei 1000 px Breite liegt die Linie bei ca. 618 px."},
 {q:"Was gehört in Schritt I der Fotoanalyse?",o:["Eindrücke, Wirkungen, Anmutungsqualitäten","Gestaltungsmittel und Kompositionsskizze","Absicht und Botschaft des Fotografen","Vergleich mit einem zweiten Foto"],r:0,x:"I Eindrücke · II Bildaufbau und Gestaltungsmittel · III Deutung · IV Vergleich."},
 {q:"Welcher Einwand stand am Handout neben „Ein Arbeiter mit Ziegel-Trage“?",o:["Wer? Handlung genauer bestimmen","Zu lang","Falsche Einstellungsgröße","Quelle fehlt"],r:0,x:"Genau benennen, wer zu sehen ist und was er tut."},
 {q:"Im Kommunikationsmodell entschlüsselt der Betrachter die Botschaft. Das heißt …",o:["Decodierung","Codierung","Feedback","Störsignal"],r:0,x:"Der Fotograf codiert, der Betrachter decodiert – abhängig von Wissen und Erfahrung."}
];

/* ---------- Zuordnen: Art → Aufgabe ---------- */
const KU_ZU_A=[
 ["Makrofotografie einer Blüte","entd","Die Kamera zeigt Details, die das bloße Auge nicht erkennt."],
 ["Mikrofotografie einer Bettwanze (Rasterelektronenmikroskop)","entd","Unsichtbar kleine Strukturen werden sichtbar."],
 ["Röntgenbild einer Hand","entd","Macht das Innere sichtbar – die Kamera ist dem Auge überlegen."],
 ["Bewegungsfotografie einer fliegenden Kugel","entd","Friert eine Bewegung ein, die zu schnell fürs Auge ist."],
 ["Astrofotografie (Weltraumteleskop)","entd","Blick weit über die Grenzen des Auges hinaus."],
 ["Landschaftsfotografie im Bildband","unt","Schöne Bilder zum Genießen und Anschauen."],
 ["Urlaubsfotos vom Strand","unt","Amateur- und Reisebilder dienen dem Vergnügen und der Erinnerung."],
 ["Pin-up-Kalender","unt","Pin-up-Fotos nennt der Text ausdrücklich bei Unterhaltung."],
 ["Werbefoto für ein Parfum","zweck","Das Produkt wird begehrenswert inszeniert – Ziel ist der Verkauf."],
 ["Modefoto in einer Modezeitschrift","zweck","Kleidung soll schön und begehrenswert wirken."],
 ["Wahlplakat mit Kandidatenfoto","zweck","Politische Werbung für eine Idee bzw. Person (Propaganda)."],
 ["Passfoto","aufz","Erkennungsbild: hält sachlich fest, wie jemand aussieht."],
 ["Foto eines Gemäldes für den Museumskatalog","aufz","Reproduktion von Kunstwerken: Tatbestand festhalten."],
 ["Pressefoto vom Vietnamkrieg","info","Informiert über ein reales Ereignis, hilft, sich ein Urteil zu bilden."],
 ["Foto eines Vulkans im Erdkundebuch","info","Visuelles Lehrmittel: informiert sachlich."],
 ["Sozialdokumentarisches Foto von Kinderarbeit","info","Informiert über Missstände und rüttelt auf."],
 ["Inszeniertes Selbstporträt einer Künstlerin","pers","Die Künstlerin teilt ihre eigene Sicht, Idee, Gefühle mit."],
 ["Unscharfes, malerisches Kunstfoto (Pictorialismus)","pers","Ausdruck einer persönlichen, ästhetischen Sicht."]
];
/* ---------- Zuordnen: Foto / Künstler → Genre (nur klausurrelevante) ---------- */
const KU_ZU_G=[
 ["Cindy Sherman: Untitled Film Still #58",0,"Sherman inszeniert sich selbst als Filmfigur."],
 ["Jeff Wall: The Thinker",0,"Gestellte Szene, Bezug auf Rodins Skulptur."],
 ["Duane Michals",0,"Inszenierte Bildfolgen."],
 ["Sandy Skoglund",0,"Aufwendig gebaute, inszenierte Räume."],
 ["Lewis W. Hine: Kinderarbeit",2,"Zeigt Missstände, will Veränderung."],
 ["Dorothea Lange: Wanderarbeiterin",2,"Armut in der Weltwirtschaftskrise, Appell an Mitgefühl."],
 ["Walker Evans",2,"Dokumentierte die Armut der Landbevölkerung in den USA."],
 ["Edward Weston",4,"Nicht manipulierte Wirklichkeit, strenger Bildaufbau."],
 ["Heinrich Kühn: Miss Mary",5,"Weich, unscharf, wie ein Gemälde."],
 ["Frank Eugene",5,"Vertreter des Pictorialismus."],
 ["Alvin Langdon Coburn: Die weiße Brücke – Venedig",5,"Malerische, unscharfe Stimmung."],
 ["Alexander Rodtschenko: Mädchen mit Leica",6,"Diagonalen, gekippte Kamera, Licht-Schatten-Gitter."],
 ["László Moholy-Nagy",6,"Bauhaus, Neues Sehen."],
 ["André Kertész: Poughkeepsie (steil von oben)",6,"Ungewohnter Blickwinkel, Diagonalen."],
 ["Andreas Feininger",6,"Neues Sehen."]
];

/* ---------- Checkliste ---------- */
const KU_CHECK=[
 "Definition der Fotografie („malen mit Licht“, analog/digital) erklären",
 "Die 6 Aufgaben der Fotografie mit je einem Beispiel nennen",
 "Arten (Technik, Inhalt, Funktion, Stil) einer Aufgabe zuordnen und begründen",
 "Unterhaltung, Information und Manipulation genau erklären (Ziel, Mittel, Beispiel)",
 "Teil III: subjektiv – objektiv – Information erklären (Freund, Sontag, Fotograf ↔ Betrachter, Wirkungsebenen, Verantwortung)",
 "Die 8 Einstellungsgrößen an Personen erkennen und begründen (Trainer!)",
 "4 Perspektiven mit Wirkung",
 "Schärfe (total, selektiv, Bewegungsunschärfe), Blende, Brennweite, Verschlusszeit",
 "Licht, Farbe/SW und Kontraste beschreiben – immer mit Wirkung",
 "Komposition: Drittelregel, Goldener Schnitt, Symmetrie, Linien, Kompositionsfiguren",
 "Eine Kompositionsskizze zeichnen",
 "5 klausurrelevante Genres mit Merkmalen und Fotokünstlern",
 "Dokumentation und Inszenierung vergleichen",
 "Kommunikationsmodell zeichnen und auf ein Foto anwenden",
 "Eine komplette Fotoanalyse (I–IV) einmal selbst geschrieben"
];

/* ---------- Hilfen ---------- */
const kuEl=id=>document.getElementById(id);
const kuTag=(t,c)=>`<span class="ku-tag${c?" "+c:""}">${t}</span>`;
const kuDef=(t,d)=>`<div class="ps-def ku-def"><b>${t}</b>${d}</div>`;
const kuTable=(head,rows,wide)=>`<div class="ku-tw"><table class="ps-tab${wide?" ku-wide":""}"><thead><tr>${head.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const kuDet=(t,inner,open)=>`<details class="entry"${open?" open":""}><summary><h3>${t}</h3></summary><div class="inner">${inner}</div></details>`;
const kuMl=(t,inner)=>`<details class="entry"><summary><h3>${t}</h3></summary><div class="inner ml">${inner}</div></details>`;
// Zeilenliste statt enger Tabelle: [Titel, Zusatz, Text, Wirkung, Label für Wirkung]
const kuRows=rows=>`<div class="ku-rows">${rows.map(([t,sub,a,b,bl])=>`<div><div class="h"><b>${t}</b>${sub?`<span class="meta">${sub}</span>`:""}</div>${a?`<p>${a}</p>`:""}${b?`<p class="w"><span>${bl||"Wirkung"}:</span> ${b}</p>`:""}</div>`).join("")}</div>`;
// Tabelle der spezifisch fotografischen Gestaltungsmittel nach Mittel gruppiert
function kuGMRows(){
  const g=[];KU_GM.forEach(r=>{if(r[0])g.push([r[0],[]]);g[g.length-1][1].push(r)});
  return kuRows(g.map(([m,vs])=>[m,"",vs.map(v=>`<b>${v[1]}:</b> ${v[2]?v[2]+" → ":""}<i>${v[3]}</i>`).join("<br>"),""]));
}

/* =========================================================
   SKIZZEN (SVG)
   ========================================================= */
// Eine Person (Füße bei y=0, Scheitel bei y≈-100, Mitte x=0) – für die Einstellungsgrößen
function kuPerson(){
  const S="#e7b48f",SD="#c98d68";
  const eye=x=>`<ellipse cx="${x}" cy="-94" rx="1.08" ry=".56" fill="#fff"/><circle cx="${x}" cy="-94" r=".47" fill="#5a7a96"/><circle cx="${x}" cy="-94" r=".22" fill="#15181c"/><circle cx="${x+.15}" cy="-94.17" r=".1" fill="#fff"/><path d="M${x-1.15} -93.95 Q${x} -94.95 ${x+1.15} -93.95" fill="none" stroke="#4a3426" stroke-width=".2"/>`;
  return `<g>
  <ellipse cx="5" cy=".3" rx="15" ry="2.1" fill="#000" opacity=".2"/>
  <path d="M-8.3 -4 L-1.3 -4 L-.8 0 L-10 0 Q-10.2 -2.9 -8.3 -4Z M8.3 -4 L1.3 -4 L.8 0 L10 0 Q10.2 -2.9 8.3 -4Z" fill="#2a1d16"/>
  <path d="M-10.4 -49 L-.9 -49 L-1.5 -3.6 L-7.7 -3.6Z M10.4 -49 L.9 -49 L1.5 -3.6 L7.7 -3.6Z" fill="#2f3d57"/>
  <rect x="-1.3" y="-49" width="2.6" height="5.5" fill="#2f3d57"/>
  <path d="M-4.6 -27.5 L-2.2 -27.5 M4.6 -27.5 L2.2 -27.5" stroke="#26324a" stroke-width=".5"/>
  <path d="M-12.2 -80 C-15 -74 -15.7 -66 -15.3 -58 L-14.7 -52.5 L-10.9 -52.5 L-11.4 -58 C-11.6 -65 -11 -71 -10 -75Z M12.2 -80 C15 -74 15.7 -66 15.3 -58 L14.7 -52.5 L10.9 -52.5 L11.4 -58 C11.6 -65 11 -71 10 -75Z" fill="#a33a32"/>
  <ellipse cx="-12.9" cy="-50.6" rx="1.9" ry="2.6" fill="${S}"/><ellipse cx="12.9" cy="-50.6" rx="1.9" ry="2.6" fill="${S}"/>
  <path d="M-12.5 -81 C-13.4 -79.5 -13.6 -74 -12.8 -66 L-10.8 -47 L10.8 -47 L12.8 -66 C13.6 -74 13.4 -79.5 12.5 -81 C8.5 -83.2 4.5 -83.6 3.6 -82.5 L0 -77 L-3.6 -82.5 C-4.5 -83.6 -8.5 -83.2 -12.5 -81Z" fill="#b8433a"/>
  <path d="M-3.6 -82.5 L-1.2 -70 M3.6 -82.5 L1.2 -70 M0 -77 L0 -47" stroke="#8e2f28" stroke-width=".45" fill="none"/>
  <circle cx="0" cy="-66" r=".6" fill="#3b1f1c"/><circle cx="0" cy="-59" r=".6" fill="#3b1f1c"/><circle cx="0" cy="-52" r=".6" fill="#3b1f1c"/>
  <rect x="-2.4" y="-88.5" width="4.8" height="7" fill="${S}"/><path d="M-2.4 -86.6 Q0 -85.3 2.4 -86.6 L2.4 -85.4 Q0 -84 -2.4 -85.4Z" fill="${SD}" opacity=".5"/>
  <path d="M-3.6 -82.5 L0 -77 L3.6 -82.5 L2.1 -83.7 L0 -80.4 L-2.1 -83.7Z" fill="#f4f2ee"/>
  <ellipse cx="-5.25" cy="-93.2" rx=".95" ry="1.65" fill="${S}" stroke="${SD}" stroke-width=".15"/><ellipse cx="5.25" cy="-93.2" rx=".95" ry="1.65" fill="${S}" stroke="${SD}" stroke-width=".15"/>
  <ellipse cx="0" cy="-93.6" rx="5.3" ry="6.9" fill="${S}"/>
  <circle cx="-3" cy="-91.3" r=".95" fill="#e39b86" opacity=".35"/><circle cx="3" cy="-91.3" r=".95" fill="#e39b86" opacity=".35"/>
  <path d="M-5.5 -93 C-5.8 -99.5 -2.5 -101.6 0 -101.4 C3 -101.6 6 -99.2 5.5 -93 C5.1 -96.2 3.8 -97.6 1.6 -97.4 C-.6 -98.6 -3.6 -97.4 -5.5 -93Z" fill="#3a2a1f"/>
  ${eye(-2.05)}${eye(2.05)}
  <path d="M-3.2 -95.55 Q-2.1 -96.25 -1 -95.75 M3.2 -95.55 Q2.1 -96.25 1 -95.75" stroke="#3a2a1f" stroke-width=".38" stroke-linecap="round" fill="none"/>
  <path d="M.1 -93.5 L.55 -91.35 Q0 -90.95 -.5 -91.25" stroke="#b07a55" stroke-width=".25" fill="none" stroke-linecap="round"/>
  <path d="M-1.5 -89.3 Q0 -88.55 1.5 -89.3" stroke="#a04f45" stroke-width=".4" fill="none" stroke-linecap="round"/>
  </g>`;
}
// Landschaft mit Person; der Horizont liegt auf Augenhöhe der Person (Normalperspektive)
let KU_SCENE="";
function kuScene(){
  if(KU_SCENE)return KU_SCENE;
  const posts=[];for(let x=-300;x<=300;x+=26){if(x>-150&&x<-92)continue;posts.push(`<rect x="${x-1.4}" y="-67" width="2.8" height="29" fill="#9c7650"/>`)}
  const cloud=(x,y,s)=>`<g transform="translate(${x} ${y}) scale(${s})" fill="#fff" opacity=".92"><ellipse cx="0" cy="0" rx="60" ry="18"/><ellipse cx="-30" cy="-10" rx="30" ry="18"/><ellipse cx="18" cy="-16" rx="34" ry="22"/><ellipse cx="48" cy="-4" rx="26" ry="14"/></g>`;
  KU_SCENE=`<defs><linearGradient id="kuSky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6fa6d6"/><stop offset="1" stop-color="#dcebf4"/></linearGradient>
   <linearGradient id="kuGround" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#b3cf95"/><stop offset=".25" stop-color="#93bb72"/><stop offset="1" stop-color="#5f8c45"/></linearGradient></defs>
  <rect x="-1400" y="-1300" width="2800" height="1215" fill="url(#kuSky)"/>
  <circle cx="660" cy="-860" r="120" fill="#fbf0c0" opacity=".35"/><circle cx="660" cy="-860" r="72" fill="#fbf0c0"/>
  ${cloud(-720,-930,2.2)}${cloud(260,-1020,1.6)}${cloud(-260,-560,1.2)}${cloud(560,-430,1)}${cloud(-40,-205,.55)}${cloud(150,-238,.4)}
  <path d="M-1400 -93 L-1150 -380 L-1000 -300 L-780 -610 L-560 -360 L-330 -650 L-120 -420 L60 -520 L300 -300 L520 -700 L760 -430 L940 -560 L1150 -350 L1400 -470 L1400 -93Z" fill="#8ea7c0"/>
  <path d="M-780 -610 L-700 -520 L-740 -530 L-780 -500 L-830 -540 L-860 -520Z M-330 -650 L-250 -560 L-300 -570 L-330 -540 L-370 -575 L-410 -560Z M520 -700 L610 -600 L560 -610 L520 -580 L480 -615 L440 -600Z M940 -560 L1000 -490 L960 -500 L940 -480 L910 -505 L880 -495Z" fill="#f3f6f9"/>
  <path d="M-1400 -93 C-1150 -190 -950 -175 -760 -118 C-600 -80 -460 -150 -300 -150 C-160 -150 -90 -100 30 -104 C170 -110 260 -176 420 -170 C600 -160 700 -100 860 -120 C1040 -145 1200 -200 1400 -150 L1400 -93Z" fill="#7d9f6c"/>
  <rect x="-1400" y="-94" width="2800" height="600" fill="url(#kuGround)"/>
  <ellipse cx="-520" cy="-89" rx="300" ry="5.5" fill="#a8cde3"/>
  <path d="M-218 60 L-82 60 L-103 -75 L-117 -75Z" fill="#d9c9a2"/>
  <g><rect x="-150" y="-107" width="80" height="32" fill="#f0e7d8"/><path d="M-156 -105 L-110 -133 L-64 -105Z" fill="#a5473b"/><rect x="-115" y="-92" width="9" height="17" fill="#7a5638"/><rect x="-142" y="-99" width="10" height="9" fill="#9fc4dd"/><rect x="-88" y="-99" width="10" height="9" fill="#9fc4dd"/></g>
  <rect x="-302" y="-63" width="604" height="2.6" fill="#a8825b"/><rect x="-302" y="-51" width="604" height="2.6" fill="#a8825b"/>
  <rect x="-151" y="-66" width="56" height="20" fill="url(#kuGround)"/>
  ${posts.join("")}
  <g fill="#86552f"><rect x="36" y="-52" width="2.4" height="16"/><rect x="80" y="-52" width="2.4" height="16"/><rect x="34" y="-53" width="51" height="2.6"/><rect x="36" y="-66" width="2" height="13"/><rect x="81" y="-66" width="2" height="13"/><rect x="34" y="-65" width="51" height="2.4"/><rect x="34" y="-60" width="51" height="2.4"/></g>
  <ellipse cx="172" cy="-24" rx="40" ry="4" fill="#000" opacity=".15"/>
  <path d="M166 -24 L178 -24 L176 -118 L168 -118Z" fill="#6b4b33"/>
  <g fill="#4f7f3f"><circle cx="172" cy="-150" r="52"/><circle cx="136" cy="-128" r="34"/><circle cx="208" cy="-126" r="36"/></g><g fill="#5f9149"><circle cx="160" cy="-178" r="32"/><circle cx="196" cy="-160" r="30"/></g>
  ${kuPerson()}`;
  return KU_SCENE;
}
/* Ausschnitte je Einstellungsgröße: [Mitte x, Mitte y, Breite, Höhe] – mehrere Varianten für den Trainer */
const KU_CROP={
 detail:[[0,-93.3,13,6.5],[0,-90.4,9,5.4]],
 gross:[[0,-93,16,20],[-1.2,-92.5,23,19]],
 nah:[[0,-84,34,40],[7,-83.5,50,38]],
 amerik:[[0,-64,62,82],[3,-64.5,70,81]],
 halbnah:[[30,-71,112,72]],
 halbtotale:[[8,-50,96,122],[16,-50,128,120]],
 totale:[[40,-110,420,300],[10,-120,440,320]],
 weite:[[0,-430,2400,1350],[-300,-420,2000,1250]]
};
function kuSvgEG(id,v){const c=KU_CROP[id][v||0]||KU_CROP[id][0],[cx,cy,w,h]=c;
  return `<svg viewBox="${cx-w/2} ${cy-h/2} ${w} ${h}" role="img" aria-label="Beispielbild">${kuScene()}</svg>`}
function kuEGGrid(){
  return `<div class="ku-eg-grid">${KU_EG.map((e,i)=>`<figure class="ku-eg"><div class="ku-ph">${kuSvgEG(e.id)}</div><figcaption>${i+1} ${kuEGn(e.id)}<span>${e.dist}</span></figcaption></figure>`).join("")}</div>`;
}

// Perspektiven: drei Kamerastandpunkte vor einer Person
function kuSvgPersp(){
  const cam=(x,y,rot,col)=>`<g transform="translate(${x} ${y}) rotate(${rot})"><rect x="-18" y="-11" width="30" height="22" rx="3" style="fill:var(${col})"/><path d="M12 -7 L22 -11 L22 11 L12 7Z" style="fill:var(${col})"/><circle cx="-3" cy="0" r="5.5" style="fill:var(--bg)"/></g>`;
  const lbl=(y,t,sub,col)=>`<text x="6" y="${y}" font-size="14" font-weight="700" style="fill:var(${col})">${t}</text><text x="6" y="${y+16}" font-size="12" style="fill:var(--muted)">${sub}</text>`;
  return `<svg class="ku-svg" viewBox="0 0 420 290" role="img" aria-label="Normal-, Frosch- und Vogelperspektive">
  <line x1="150" y1="272" x2="414" y2="272" style="stroke:var(--line)" stroke-width="2"/>
  <g style="fill:var(--muted)"><circle cx="356" cy="78" r="16"/><path d="M336 100 L376 100 L381 178 L368 178 L366 270 L353 270 L351 178 L331 178Z"/></g>
  <line x1="194" y1="46" x2="340" y2="126" style="stroke:var(--psy)" stroke-width="1.7" stroke-dasharray="6 5"/>
  <line x1="196" y1="80" x2="336" y2="80" style="stroke:var(--parl)" stroke-width="1.7" stroke-dasharray="6 5"/>
  <line x1="194" y1="236" x2="340" y2="142" style="stroke:var(--crown)" stroke-width="1.7" stroke-dasharray="6 5"/>
  ${cam(174,36,27,"--psy")}${cam(174,80,0,"--parl")}${cam(174,246,-30,"--crown")}
  ${lbl(32,"Vogelperspektive","von oben","--psy")}${lbl(78,"Normalperspektive","auf Augenhöhe","--parl")}${lbl(240,"Froschperspektive","von unten","--crown")}
  </svg>`;
}

// Kommunikationsmodell (Mitschrift „Aspekte der Kommunikation und Gestaltung mit Fotografie“)
function kuSvgKomm(){
  const box=(x,y,w,h,t,s,fill)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" style="fill:var(${fill||"--surface"});stroke:var(--fg)" stroke-width="1.4"/><text x="${x+w/2}" y="${y+(s?h/2-2:h/2+5)}" text-anchor="middle" font-size="14" font-weight="700">${t}</text>${s?`<text x="${x+w/2}" y="${y+h/2+14}" text-anchor="middle" font-size="11.5" style="fill:var(--muted)">${s}</text>`:""}`;
  return `<svg class="ku-svg" viewBox="0 0 420 252" role="img" aria-label="Kommunikationsmodell der Fotografie">
  <defs><marker id="kuAr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--fg)"/></marker>
  <marker id="kuArR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--crown)"/></marker></defs>
  ${box(2,22,88,52,"Sender","Fotograf/in")}${box(166,16,88,64,"Botschaft","im Foto","--gold-soft")}${box(330,22,88,52,"Empfänger","Betrachter/in")}
  <line x1="92" y1="52" x2="162" y2="52" style="stroke:var(--fg)" stroke-width="1.6" marker-end="url(#kuAr)"/><text x="127" y="42" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--parl)">Codierung</text>
  <line x1="256" y1="52" x2="326" y2="52" style="stroke:var(--fg)" stroke-width="1.6" marker-end="url(#kuAr)"/><text x="291" y="42" text-anchor="middle" font-size="12" font-weight="700" style="fill:var(--parl)">Decodierung</text>
  ${box(160,114,100,38,"Störsignale","","--crown-soft")}
  <line x1="210" y1="112" x2="210" y2="84" style="stroke:var(--crown)" stroke-width="1.4" marker-end="url(#kuArR)"/>
  <line x1="158" y1="133" x2="106" y2="133" style="stroke:var(--crown)" stroke-width="1.4" marker-end="url(#kuArR)"/>
  <line x1="262" y1="133" x2="314" y2="133" style="stroke:var(--crown)" stroke-width="1.4" marker-end="url(#kuArR)"/>
  <line x1="210" y1="154" x2="210" y2="192" style="stroke:var(--crown)" stroke-width="1.4" marker-end="url(#kuArR)"/>
  ${box(330,190,88,40,"Wirkung")}${box(2,190,88,40,"Feedback")}
  <path d="M374 76 L374 186" style="stroke:var(--fg)" stroke-width="1.4" stroke-dasharray="5 4" fill="none" marker-end="url(#kuAr)"/>
  <path d="M328 210 L94 210" style="stroke:var(--fg)" stroke-width="1.4" stroke-dasharray="5 4" fill="none" marker-end="url(#kuAr)"/>
  <path d="M46 188 L46 78" style="stroke:var(--fg)" stroke-width="1.4" stroke-dasharray="5 4" fill="none" marker-end="url(#kuAr)"/>
  <text x="210" y="248" text-anchor="middle" font-size="11.5" style="fill:var(--muted)">Medium = Foto in Zeitung, Plakat, Ausstellung, Social Media</text>
  </svg>`;
}

// Schärfe: total | vg (VG scharf, HG unscharf) | hg (HG scharf, VG unscharf) – warme Abendstimmung
function kuSvgSchaerfe(mode){
  const bl=s=>s?` filter="url(#kuBl)"`:"";
  return `<svg viewBox="0 0 240 160" role="img" aria-label="Schärfe-Beispiel"><defs>
  <filter id="kuBl" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.4"/></filter>
  <linearGradient id="kuEve" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f2a65e"/><stop offset=".75" stop-color="#fbe0b0"/></linearGradient>
  <linearGradient id="kuField" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#d6b46a"/><stop offset="1" stop-color="#8f7436"/></linearGradient></defs>
  <g${bl(mode==="vg")}>
   <rect x="-30" y="-30" width="300" height="130" fill="url(#kuEve)"/>
   <circle cx="186" cy="86" r="20" fill="#fff6d8" opacity=".5"/><circle cx="186" cy="86" r="11" fill="#fff4d0"/>
   <path d="M-30 96 C20 84 60 90 110 92 C160 94 200 86 270 92 L270 100 L-30 100Z" fill="#b98a55"/>
   <rect x="-30" y="96" width="300" height="100" fill="url(#kuField)"/>
   <g transform="translate(150 132) scale(.62)">${kuPerson()}</g>
   <g transform="translate(212 118)"><rect x="-2" y="-30" width="4" height="30" fill="#5a3d26"/><circle cx="0" cy="-40" r="16" fill="#6b7a3a"/><circle cx="-9" cy="-32" r="10" fill="#5f6d33"/></g>
  </g>
  <g${bl(mode==="hg")}>
   <path d="M44 175 C42 150 46 118 50 74" stroke="#4d7a2f" stroke-width="4" fill="none"/>
   <path d="M46 150 C30 132 22 120 18 104 C34 114 42 126 47 140Z" fill="#5c8f37"/><path d="M48 132 C62 118 72 112 84 108 C76 122 64 132 49 140Z" fill="#6aa040"/>
   <path d="M34 72 C32 52 40 40 50 36 C60 40 68 52 66 72 C60 80 40 80 34 72Z" fill="#d23a2c"/>
   <path d="M50 36 C46 48 46 62 50 76 C54 62 54 48 50 36Z" fill="#a82a20"/><path d="M34 72 C40 60 44 50 42 40 C36 46 32 58 34 72Z" fill="#e2563f"/>
   <path d="M-10 170 L4 128 L8 170Z M6 170 L22 136 L24 170Z M70 170 L86 130 L88 170Z M86 170 L98 142 L102 170Z" fill="#7a9a3c"/>
  </g></svg>`;
}

// Licht an einer Kugel: hart | weich | Seitenlicht | Gegenlicht
function kuSvgLicht(){
  const col=(x,id,shadow,extra,lbl,sub)=>`<g transform="translate(${x} 0)">${extra}${shadow}<circle cx="0" cy="70" r="30" fill="url(#${id})"/><text x="0" y="134" text-anchor="middle" font-size="15" font-weight="700" fill="#2a2a2a">${lbl}</text></g>`;
  const sun=(x,y)=>`<circle cx="${x}" cy="${y}" r="6" fill="#f2b632"/><g stroke="#f2b632" stroke-width="1.6">${[0,45,90,135,180,225,270,315].map(a=>{const r=a*Math.PI/180;return `<line x1="${x+Math.cos(r)*8.5}" y1="${y+Math.sin(r)*8.5}" x2="${x+Math.cos(r)*12}" y2="${y+Math.sin(r)*12}"/>`}).join("")}</g>`;
  return `<svg class="ku-svg ku-light" viewBox="0 0 420 152" role="img" aria-label="Lichtarten an einer Kugel"><defs>
  <radialGradient id="kuLh" cx=".5" cy=".5" r=".5" fx=".3" fy=".25"><stop offset="0" stop-color="#fffaf0"/><stop offset=".22" stop-color="#ecc88f"/><stop offset=".55" stop-color="#c4853f"/><stop offset=".64" stop-color="#4a2c14"/><stop offset="1" stop-color="#2a180a"/></radialGradient>
  <radialGradient id="kuLw" cx=".5" cy=".5" r=".55" fx=".38" fy=".3"><stop offset="0" stop-color="#f7e8cc"/><stop offset=".6" stop-color="#d9ad75"/><stop offset="1" stop-color="#a5743f"/></radialGradient>
  <radialGradient id="kuLs" cx=".5" cy=".5" r=".6" fx=".02" fy=".5"><stop offset="0" stop-color="#fff2d6"/><stop offset=".45" stop-color="#cf9452"/><stop offset=".62" stop-color="#3b2310"/><stop offset="1" stop-color="#20130a"/></radialGradient>
  <radialGradient id="kuLg" cx=".5" cy=".5" r=".5"><stop offset="0" stop-color="#2a1b10"/><stop offset=".86" stop-color="#3b2716"/><stop offset=".95" stop-color="#f6d79a"/><stop offset="1" stop-color="#fff1cf"/></radialGradient>
  <filter id="kuSoft" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="4"/></filter></defs>
  <rect x="0" y="0" width="420" height="150" rx="10" fill="#f4efe6"/>
  ${col(55,"kuLh",`<ellipse cx="22" cy="101" rx="34" ry="6" fill="#000" opacity=".55"/>`,sun(-30,16),"hartes Licht","Sonne, gebündelt")}
  ${col(160,"kuLw",`<ellipse cx="4" cy="101" rx="30" ry="7" fill="#000" opacity=".28" filter="url(#kuSoft)"/>`,`<g fill="#c9ccd2"><ellipse cx="-14" cy="16" rx="16" ry="7"/><ellipse cx="0" cy="12" rx="12" ry="8"/><ellipse cx="12" cy="17" rx="13" ry="6"/></g>`,"weiches Licht","Wolken, gestreut")}
  ${col(265,"kuLs",`<ellipse cx="38" cy="100" rx="42" ry="5" fill="#000" opacity=".5"/>`,sun(-44,70),"Seitenlicht","Plastizität, Struktur")}
  ${col(370,"kuLg",`<ellipse cx="0" cy="104" rx="30" ry="6" fill="#000" opacity=".45"/>`,`<circle cx="18" cy="36" r="22" fill="#fff3cf" opacity=".9"/>`,"Gegenlicht","Umriss, Silhouette")}
  </svg>`;
}

// Kompositions-Kacheln
function kuKompoTile(k){
  const G="var(--gold)",F="var(--fg)",M="var(--muted)";
  const fr=`<rect x="2" y="2" width="116" height="76" rx="4" style="fill:var(--bg);stroke:var(--line)" stroke-width="1.5"/>`;
  const L={
   drittel:`<g style="stroke:${M}" stroke-width="1" stroke-dasharray="3 3"><line x1="40.7" y1="2" x2="40.7" y2="78"/><line x1="79.3" y1="2" x2="79.3" y2="78"/><line x1="2" y1="27.3" x2="118" y2="27.3"/><line x1="2" y1="52.7" x2="118" y2="52.7"/></g><line x1="2" y1="52.7" x2="118" y2="52.7" style="stroke:${F}" stroke-width="1.8"/><circle cx="79.3" cy="27.3" r="5" style="fill:${G}"/>`,
   gold:`<g style="stroke:${M}" stroke-width=".9" fill="none"><path d="M74 4 L74 76 M74 48 L118 48 M90 48 L90 76 M74 60 L90 60"/></g><path d="M2 76 A72 72 0 0 1 74 4 A44 44 0 0 1 118 48 A28 28 0 0 1 90 76 A16 16 0 0 1 74 60 A12 12 0 0 1 86 48" style="stroke:${G}" stroke-width="2.2" fill="none"/>`,
   sym:`<line x1="60" y1="4" x2="60" y2="76" style="stroke:${M}" stroke-width="1" stroke-dasharray="3 3"/><path d="M14 68 L38 34 L60 60 L82 34 L106 68Z" style="fill:var(--gold-soft);stroke:${G}" stroke-width="1.6"/><circle cx="60" cy="22" r="8" style="fill:${G}"/>`,
   diag:`<line x1="8" y1="72" x2="112" y2="8" style="stroke:${G}" stroke-width="3"/><circle cx="34" cy="56" r="4" style="fill:${F}"/><circle cx="86" cy="24" r="4" style="fill:${F}"/>`,
   dreieck:`<path d="M60 10 L16 70 L104 70Z" style="fill:var(--gold-soft);stroke:${G}" stroke-width="2.2"/>`,
   kreis:`<circle cx="60" cy="40" r="28" style="fill:var(--gold-soft);stroke:${G}" stroke-width="2.2"/>`,
   rechteck:`<rect x="28" y="14" width="64" height="52" style="fill:var(--gold-soft);stroke:${G}" stroke-width="2.2"/>`,
   spirale:`<path d="M60 40 m0 -3 a3 3 0 1 1 -3 3 a6 6 0 0 1 6 -6 a10 10 0 0 1 10 10 a15 15 0 0 1 -15 15 a21 21 0 0 1 -21 -21 a28 28 0 0 1 28 -28 a33 33 0 0 1 33 30" style="stroke:${G}" stroke-width="2.2" fill="none"/>`,
   waag:`<line x1="2" y1="44" x2="118" y2="44" style="stroke:${G}" stroke-width="3"/><path d="M12 44 L28 36 L42 44 M70 44 L90 32 L108 44" style="stroke:${M}" stroke-width="1.4" fill="none"/>`,
   senk:`<rect x="52" y="8" width="16" height="68" style="fill:var(--gold-soft);stroke:${G}" stroke-width="2.2"/><line x1="60" y1="4" x2="60" y2="76" style="stroke:${G}" stroke-width="1"/>`,
   fuehr:`<path d="M20 78 L56 30 L64 30 L100 78" style="fill:var(--gold-soft);stroke:${G}" stroke-width="1.8"/><circle cx="60" cy="22" r="5" style="fill:${F}"/>`,
   neg:`<circle cx="92" cy="58" r="7" style="fill:${G}"/><text x="40" y="34" text-anchor="middle" font-size="9" style="fill:${M}">frei</text>`
  };
  return `<svg viewBox="0 0 120 80" role="img" aria-label="${k}">${fr}${L[k]||""}</svg>`;
}
function kuKompoGrid(ids){
  return `<div class="ku-kgrid">${KU_KOMPO.filter(x=>!ids||ids.includes(x[0])).map(([k,n,w])=>`<figure class="ku-k">${kuKompoTile(k)}<figcaption><b>${n}</b><span>${w}</span></figcaption></figure>`).join("")}</div>`;
}

// Kompositionsskizze zu August Sander: Handlanger (nur Linien und Formen, keine Wiedergabe des Fotos)
function kuSvgSkizze(){
  const n=(x,y,t)=>`<circle cx="${x}" cy="${y}" r="10" style="fill:var(--crown)"/><text x="${x}" y="${y+4}" text-anchor="middle" font-size="12" font-weight="800" style="fill:var(--bg)">${t}</text>`;
  return `<svg class="ku-svg ku-skz" viewBox="0 0 300 390" role="img" aria-label="Kompositionsskizze zu Sanders Handlanger"><defs>
  <pattern id="kuHatch" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="7" style="stroke:var(--muted)" stroke-width="1.3" opacity=".55"/></pattern>
  <marker id="kuArS" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" style="fill:var(--crown)"/></marker></defs>
  <rect x="4" y="4" width="292" height="382" fill="url(#kuHatch)" style="stroke:var(--fg)" stroke-width="2"/>
  <g style="fill:var(--surface);stroke:var(--fg)" stroke-width="1.6" stroke-linejoin="round">
   <rect x="56" y="44" width="192" height="74"/>
   <path d="M104 186 L200 186 L196 340 L108 340Z"/>
   <path d="M104 190 L60 262 L114 292 L112 268 L86 258 L108 226Z"/>
   <path d="M198 190 L232 196 L246 120 L226 116 L214 170Z"/>
   <ellipse cx="152" cy="150" rx="27" ry="33"/>
   <path d="M108 340 L104 386 M196 340 L200 386" stroke-dasharray="6 5" fill="none"/>
  </g>
  <line x1="56" y1="81" x2="248" y2="81" style="stroke:var(--gold)" stroke-width="4"/>
  <line x1="152" y1="112" x2="152" y2="384" style="stroke:var(--gold)" stroke-width="3" stroke-dasharray="9 6"/>
  <path d="M104 190 L60 262 L114 292Z" style="fill:none;stroke:var(--gold)" stroke-width="3.2"/>
  <ellipse cx="152" cy="150" rx="27" ry="33" style="fill:none;stroke:var(--crown)" stroke-width="2.6"/>
  <path d="M176 140 C200 128 214 122 226 122" style="stroke:var(--crown)" stroke-width="2" fill="none" marker-end="url(#kuArS)"/>
  <path d="M232 132 C214 190 172 214 160 262" style="stroke:var(--crown)" stroke-width="2" fill="none" marker-end="url(#kuArS)"/>
  <path d="M146 280 C124 286 104 280 92 270" style="stroke:var(--crown)" stroke-width="2" fill="none" marker-end="url(#kuArS)"/>
  ${n(126,132,"1")}${n(262,120,"2")}${n(176,262,"3")}${n(76,286,"4")}
  <text x="20" y="30" font-size="11" font-weight="700" style="fill:var(--fg)">Hochformat · dunkler Hintergrund</text>
  </svg>`;
}

/* =========================================================
   UNTERRICHT
   ========================================================= */
function kuAufgCards(compact){
  return `<div class="view" style="gap:10px">${KU_AUFG.map((a,i)=>`<div class="ku-card" style="--mc:var(${a.c})"><h3>${i+1}. ${a.n}</h3><span class="bsp">${a.kurz}</span>
   <dl>${compact?"":`<dt>Beispiele</dt><dd>${a.bsp}</dd>`}<dt>Ziel</dt><dd>${a.ziel}</dd><dt>Arten</dt><dd>${a.arten}</dd>${compact?`<dt>Erkennen</dt><dd>${a.frage}</dd>`:""}</dl></div>`).join("")}</div>`;
}
function kuUnivCards(){
  return `<div class="ku-univ">${KU_UNIV.map(([n,f,l])=>`<div><b>${n}</b><span class="meta">${f}</span><p>${l}</p></div>`).join("")}</div>`;
}

function kuuEinf(el){
  el.innerHTML=`
  <div class="erachips ku-chips"><a href="#ku1">Definition</a><a href="#ku2">Macht der Bilder</a><a href="#ku3">Aufgaben</a><a href="#ku4">Arten</a><a href="#ku5">Kommunikation</a></div>

  <section class="tx" id="ku1"><span class="tx-y">Arbeitsblatt „Einführung Fotografie“</span><h2>„Unsere tägliche Bilderflut“ – was ist Fotografie?</h2>
   ${kuDef("Fotografie","von griech. <i>phos</i> „Licht“ und <i>graphein</i> „schreiben, malen“ – also <b>„malen mit Licht“</b>")}
   <p>Der Begriff meint zweierlei:</p>
   <ol class="ps-ul">
    <li><b>ein bildgebendes Verfahren:</b> Mit optischen Mitteln wird ein Lichtbild auf ein lichtempfindliches Medium projiziert und dort direkt und dauerhaft gespeichert (<b>analoges Verfahren</b>) – oder in elektronische Daten umgewandelt und gespeichert (<b>digitales Verfahren</b>).</li>
    <li><b>das dauerhafte Lichtbild selbst</b> (Dia, Filmbild, Papierbild – kurz Foto), als <b>Positiv</b> oder <b>Negativ</b> auf Film, Folie oder Papier. Vervielfältigt wird es als Abzug, Vergrößerung, Filmkopie oder Druck.</li>
   </ol>
   <p class="meta">Quelle auf dem Blatt: Wikipedia, Artikel „Fotografie“.</p>
  </section>

  <section class="tx" id="ku2"><span class="tx-y">Lehrbuch S. 10 · Das Fotouniversum</span><h2>Die Macht der Bilder</h2>
   <ul class="ps-ul">
    <li>Fotografieren wurde immer einfacher, heute fotografiert fast jeder. Der Philosoph <b>Vilém Flusser</b> spricht von einem wahren <b>„Fotouniversum“</b>. <span class="meta">(Laut Buch: 2,8 Mrd. Filme in 630 Mio. Kameras pro Jahr, nur 1 % von Berufsfotografen – Zahlen aus der Zeit vor dem Smartphone.)</span></li>
    <li>Fotografie hat viele <b>Aufgaben</b>; einige hat sie der Malerei abgenommen, die auch nie nur zweckfreie Kunst war, sondern z. B. Ereignisse illustrierte.</li>
    <li>Die <b>Wiedergabe der sichtbaren Wirklichkeit</b> wirkt in der Fotografie viel authentischer: Die Kamera nimmt Vorgänge in unmittelbarer Beobachtung und naturalistisch auf. Deshalb wirkt jedes Foto wie ein <b>„documentum“, ein Beweisstück</b>.</li>
    <li><b>Susan Sontag:</b> Fotos liefern Beweismaterial – was wir nur gehört haben und bezweifeln, scheint bestätigt, sobald wir ein Foto davon sehen.</li>
    <li>Fotografie dokumentiert, bewahrt Vergängliches, informiert, hilft entdecken und verändert unsere Vorstellung von der Welt. Sie <b>rüttelt auf</b>, denn <b>das Bild ist dem Wort überlegen, weil es unmittelbar wirkt</b>.</li>
   </ul>
   <div class="step"><span class="afb">Beispiele: Fotos verändern etwas</span><ul>
    <li>Lewis W. Hine fotografierte um 1910 arbeitende Kinder → half, in den USA <b>Gesetze gegen Kinderarbeit</b> durchzusetzen.</li>
    <li>Bilder von Kriegsgräueln → verstärkten in den 1960er Jahren die <b>Proteste gegen den Vietnamkrieg</b>.</li>
    <li>Fotos von Katastrophen wie einer <b>Ölpest</b> → rufen Umweltschützer auf den Plan.</li></ul></div>
   <p>Der Kunsthistoriker <b>Walter Koschatzky</b> bringt es auf den Punkt: Die Fotografie bedient die ganze Bandbreite menschlicher Bedürfnisse – im <b>praktischen</b> wie im <b>emotionalen</b> Bereich.</p>
  </section>

  <section class="tx" id="ku3"><span class="tx-y">Arbeitsblatt · nach „Praxis Kunst Fotografie“</span><h2>Die 6 Aufgaben der Fotografie</h2>
   ${kuAufgCards()}
  </section>

  <section class="tx" id="ku4"><span class="tx-y">Arbeitsblatt + Lehrbuch S. 10–11</span><h2>Arten der Fotografie</h2>
   <p>Deine Beispiele auf dem Blatt:</p>
   ${kuTable(["geordnet nach …","Beispiele"],[["Techniken","digitale Fotografie, Makrofotografie, entdeckende Fotografie"],["Inhalten","Landschaftsfotografie, unterhaltende Fotografie"],["Funktionen","Fotoreportage, Werbefotografie, Dokumentarfotografie → Aufzeichnung / Information"]])}
   <h3 class="ps-h">Das Fotouniversum: vier Ringe</h3>
   ${kuUnivCards()}
   <h3 class="ps-h">Beispiele aus dem Lehrbuch</h3>
   ${kuRows(KU_LB.map(([a,f,id,w])=>[a,"→ "+kuA(id).n,f,w,"Warum"]))}
  </section>

  <section class="tx" id="ku5"><span class="tx-y">Mitschrift</span><h2>Aspekte der Kommunikation und Gestaltung mit Fotografie</h2>
   ${kuSvgKomm()}
   <ul class="ps-ul">
    <li><b>Sender</b> (Fotograf/in) <b>codiert</b> seine Absicht: Er übersetzt sie in Gestaltungsmittel wie Ausschnitt, Perspektive, Licht, Schärfe.</li>
    <li>Die <b>Botschaft</b> erreicht den Empfänger über ein <b>Medium</b> – das Foto (Zeitung, Plakat, Ausstellung, Social Media).</li>
    <li>Der <b>Empfänger</b> (Betrachter/in) <b>decodiert</b> die Botschaft – je nach Erfahrung, Wissen und Entwicklungsstand unterschiedlich.</li>
    <li>Daraus entsteht eine <b>Wirkung</b>; über das <b>Feedback</b> erfährt der Sender, wie sein Bild ankommt.</li>
    <li><b>Störsignale</b> können jeden Schritt stören: falscher Kontext, irreführende Bildunterschrift, Bilderflut, fehlendes Wissen, schlechte Bildqualität.</li></ul>
  </section>`;
}

function kuuWirk(el){
  el.innerHTML=`
  <div class="erachips ku-chips"><a href="#kw1">Wirkungsebenen</a><a href="#kw2">Scheinbare Objektivität</a><a href="#kw3">Dokumentation ↔ Inszenierung</a><a href="#kw4">Manipulation</a></div>

  <section class="tx" id="kw1"><span class="tx-y">Mitschrift</span><h2>Fotografie und Wirklichkeit</h2>
   <p><b>Wirkungsebenen:</b> Wirkung und Aussage (Informationswert) von Fotos lassen sich in <b>drei Kategorien</b> einteilen:</p>
   <div class="ku-lv">
    <div><span class="n">1</span><b>Bilder mit überwiegendem Informationsgehalt</b><p>Welche sachliche Information teilen uns Bild und Text mit?</p></div>
    <div><span class="n">2</span><b>Bilder mit überwiegend ästhetischem Gehalt</b><p>Wie sieht die Gestaltung der Fotografie aus?</p><ul><li>Format, Form, Ausschnitt</li><li>Farbe oder Schwarz-Weiß, Kontraste</li><li>Licht und Schatten</li><li>Raumeindruck</li><li>Schärfe</li><li>Komposition</li><li>Layout: Anordnung und Verhältnis von Bild, Text und Produkt</li></ul></div>
    <div><span class="n">3</span><b>Bilder mit überwiegend emotionalem Gehalt</b><p>Was erzählt uns die Fotografie?</p><ul><li>Wirkung im Bereich der Wünsche, Ängste, Gefühle und Assoziationen</li><li>Bezug zur Realität</li></ul></div>
   </div>
   <h3 class="ps-h">Beurteilung: Wie schätze ich die Qualität und den Wert des Bildes ein?</h3>
   <ul class="ps-ul"><li>subjektiv</li><li>möglichst objektiv</li><li>im gesellschaftlichen Kontext</li></ul>
  </section>

  <section class="tx" id="kw2"><span class="tx-y">Arbeitsblatt</span><h2>Scheinbare Objektivität – ein Motiv hat viele Bilder</h2>
   ${kuDef("Gisèle Freund, 1979","Obwohl die Fotografie ganz an die Natur gebunden ist, besitzt sie nur eine <i>scheinbare Objektivität</i>: Die angeblich unbestechliche Linse lässt alle möglichen Verformungen der Wirklichkeit zu.")}
   <div class="ps-grid2">
    <div class="ps-mini"><b>Betrachter</b><ul class="ps-ul"><li>verbindet mit Fotos unterschiedliche Assoziationen – je nach Erfahrungsschatz, Wissen, Entwicklungsstand</li><li>viele Interpretationen sind möglich</li></ul></div>
    <div class="ps-mini"><b>Fotograf</b><ul class="ps-ul"><li>verfolgt eine bestimmte Darstellungsabsicht → <b>subjektives, absichtsvolles Eingreifen</b> durch: absichtsvolle Handhabung der Kamera (Technik), den fotografischen Blick</li><li><b>gestalterische Elemente:</b> Motivwahl, Standort, Aufnahmemodus (z. B. Nahaufnahme mit Tele, Weitwinkel), Bildformat (hoch/quer)</li></ul></div>
   </div>
   <div class="step"><span class="afb">Fazit</span><ul><li>Ein Motiv kann viele Bilder haben.</li><li>Ein Foto ist nie ein „richtiges“ Abbild der Wirklichkeit.</li><li>Der Anspruch auf Objektivität wird relativiert.</li></ul></div>
  </section>

  <section class="tx" id="kw3"><span class="tx-y">Kursthema</span><h2>Funktionen der Fotografie zwischen Dokumentation und Inszenierung</h2>
   ${kuTable(["","Dokumentation","Inszenierung"],[
    ["Ziel","Wirklichkeit festhalten, bezeugen, informieren, aufrütteln","eine Idee, Fiktion oder Botschaft gezielt ins Bild setzen"],
    ["Rolle des Fotografen","beobachtet, greift (möglichst) nicht ein; wählt aber Moment, Ausschnitt, Perspektive","arrangiert Personen, Kostüm, Ort, Licht – wie ein Regisseur"],
    ["Wirkung","authentisch, glaubwürdig, „Beweisstück“","künstlich, rätselhaft, ästhetisch, emotional"],
    ["Genres","Dokumentarfotografie, sozialdokumentarische Fotografie, Pressefoto, Straight Photography","inszenierte Fotografie, Mode- und Werbefotografie"],
    ["Beispiele","Hine, Lange, Sander, Platt","Sherman, Wall, Newton"]])}
   <p class="ex"><b>Aber:</b> Auch das Dokument ist gestaltet (Auswahl, Ausschnitt, Moment, Pose) – und das inszenierte Bild kann etwas Wahres über die Gesellschaft zeigen. Genau das ist die „scheinbare Objektivität“.</p>
  </section>

  <section class="tx" id="kw4"><span class="tx-y">aus dem Test · zum Mitdenken</span><h2>Manipulation und Verantwortung</h2>
   ${kuDef("Manipulation","gezielte, für den Betrachter kaum erkennbare Beeinflussung seiner Wahrnehmung und Meinung durch ein Foto")}
   <ul class="ps-ul">
    <li><b>bei der Aufnahme:</b> Wahl des Moments und Ausschnitts (Wichtiges weglassen), Perspektive, Brennweite, Licht, Inszenierung (gestellte Szene)</li>
    <li><b>danach:</b> Retusche und Bildbearbeitung, Montage</li>
    <li><b>bei der Veröffentlichung:</b> irreführende Bildunterschrift, falscher Kontext</li></ul>
   <div class="step"><span class="afb">Zwei Beispiele</span><ul>
    <li><b>Dorothea Lange, „Wanderarbeiterin“ (1936):</b> 1939 ließ Lange einen störenden Daumen am unteren Bildrand aus dem Negativ wegretuschieren – sogar eine Ikone der Dokumentarfotografie wurde verändert.</li>
    <li><b>Spencer Platt, World Press Photo 2006:</b> Junge Leute im roten Cabrio fahren durch ein zerbombtes Viertel in Beirut. Eine Agentur-Bildunterschrift sprach von „wohlhabenden Libanesen“, die sich die Zerstörung ansehen – viele lasen das Bild als Katastrophentourismus. Laut World Press Photo fuhren sie dagegen zu ihren eigenen Wohnungen. Der Text lenkt die Deutung.</li></ul></div>
   <p><b>Verantwortung:</b> Die Gesellschaft wünscht sich bei der Informationsvermittlung möglichst objektive Fotos – das ist nie ganz möglich. Deshalb trägt der Fotograf eine hohe <b>moralische Verantwortung</b>: Gestaltung und Inszenierung können das Subjektive verstärken, während das Foto scheinbar objektiv bleibt. <span class="meta">(So in deinem Test – volle Punktzahl.)</span></p>
  </section>`;
}

function kuuGestalt(el){
  el.innerHTML=`
  <div class="erachips ku-chips"><a href="#kg1">Einstellungsgrößen</a><a href="#kg2">Perspektive</a><a href="#kg3">Schärfe</a><a href="#kg4">Technik & Licht</a><a href="#kg5">Formensprache</a><a href="#kg6">Bildkomposition</a><a href="#kg7">Praxis</a></div>

  <section class="tx" id="kg1"><span class="tx-y">Handbuch Medien S. 298–299 · Mitschrift</span><h2>Einstellungsgrößen</h2>
   <p>Die Einstellung, beschrieben durch die <b>Einstellungsgröße</b>, ist die klassische Einheit der Bildgestaltung. Sie legt die Distanz zum Objekt fest. In Fotografie und Film unterscheidet man <b>8 Einstellungsgrößen</b>, abgeleitet von der Größe des menschlichen Körpers.</p>
   ${kuEGGrid()}
   ${kuRows(KU_EG.map((e,i)=>[`${i+1}. ${kuEGn(e.id)}`,e.dist,e.zeigt,e.wirk]))}
   <p class="meta">Distanzen: Kleinbildkamera mit 50-mm-Objektiv. Die Einstellungsgröße hängt von der Brennweite und vom Aufnahmeformat ab.</p>
   <p class="ex"><b>Merksatz aus dem Buch:</b> Die Einstellungsgröße bestimmt den Abstand des Betrachters zum Objekt – sie ist die erste Vorauswahl: Was soll der Betrachter sehen und was nicht? Überblick verschaffen Weite, Totale, Halbtotale und Halbnah.</p>
  </section>

  <section class="tx" id="kg2"><span class="tx-y">Handbuch Medien S. 300</span><h2>Perspektive</h2>
   <p>Neben der Einstellungsgröße beeinflusst die <b>Perspektive</b> die Wirkung entscheidend. Gemeint ist der <b>Standpunkt</b> des Betrachters (normal, oben, unten, schräg). Zusammen mit der Blickrichtung (von vorn, von hinten, seitlich) und der Einstellungsgröße formt sie die <b>innere Beziehung zwischen Betrachter und Objekt</b>. Durch ungewohnte Standpunkte können ganz normale Dinge neu, übertrieben oder verzerrt wirken.</p>
   ${kuSvgPersp()}
   ${kuRows(KU_PERSP.map(p=>[`<span style="color:var(${p.c})">${p.n}</span>`,"",p.wo,p.wirk]))}
   <p class="ex">Rein fotografisch gibt die Perspektive dem Bild eine <b>dritte Dimension – die Raumtiefe</b>.</p>
  </section>

  <section class="tx" id="kg3"><span class="tx-y">Mitschrift · Mittel der fotografischen Gestaltung</span><h2>Schärfe</h2>
   <p>Je nach Bildaussage oder angestrebtem Stimmungsgehalt kann man gezielt <b>Schärfentiefe</b> erzeugen:</p>
   <div class="ku-sch">
    <figure><div class="ku-ph">${kuSvgSchaerfe("total")}</div><figcaption><b>Totale Schärfe</b> unbestechlich, informativ, steril</figcaption></figure>
    <figure><div class="ku-ph">${kuSvgSchaerfe("vg")}</div><figcaption><b>Selektive Schärfe</b> Vordergrund scharf, Hintergrund unscharf</figcaption></figure>
    <figure><div class="ku-ph">${kuSvgSchaerfe("hg")}</div><figcaption><b>Selektive Schärfe</b> Hintergrund scharf, Vordergrund unscharf</figcaption></figure>
   </div>
   <ul class="ps-ul"><li><b>Selektive Schärfe:</b> reizvoll – bildwichtigere Objekte treten gegenüber unscharfen Zonen plastisch hervor.</li><li><b>Bewegungsunschärfe:</b> Eindruck von Aktion.</li></ul>
  </section>

  <section class="tx" id="kg4"><span class="tx-y">Arbeitsblatt Fotoanalyse · Teil 3</span><h2>Spezifisch fotografische Gestaltungsmittel</h2>
   ${kuGMRows()}
   <h3 class="ps-h">Licht</h3>
   ${kuSvgLicht()}
   ${kuRows(KU_LICHT.map(r=>[r[0],"",r[1],r[2],"Eindruck"]))}
   <p class="meta">Quelle auf dem Blatt: Bildmedien – Fotoanalyse, Gestaltungsmittel der Fotografie (lupo-kunst.de).</p>
  </section>

  <section class="tx" id="kg5"><span class="tx-y">Arbeitsblatt Fotoanalyse · Hilfen zu II</span><h2>Formensprache der Fotografie: Bildaufbau</h2>
   <h3 class="ps-h">1. Motiverfassung und Motivgestaltung</h3>
   <p class="meta">Leitfrage: Welchen Einfluss haben Motiverfassung und Motivgestaltung auf die Wirkung der Fotografie?</p>
   ${kuTable(["Bereich","Darauf achtest du"],[
    ["<b>Ausschnittwahl</b>","Moment der Aufnahme, Wirklichkeitsausschnitt (Wahl von Modell/Objekt, Ort, Ausstattung); Bildausschnitt = 8 Einstellungsgrößen; Bildformat (hoch/quer)"],
    ["<b>Beleuchtung</b>","hart oder weich, flächig oder punktförmig, Seitenlicht, Schlagschatten"],
    ["<b>Raumauffassung</b>","Raumtiefe (Vorder-, Mittel-, Hintergrund); Blickwinkel (Frosch-, Normal-, Vogelperspektive); Verhältnis von Kameraposition und Handlungsachse: parallel, konträr, ins Bild mitführend"],
    ["<b>Form</b>","Umrissformen, Formkontraste (fließend, eckig, ruhig, unruhig), Form an sich, Größe"],
    ["<b>Farbe</b>","Farbverteilung auf der Fläche; Kontraste der Farbe an sich, in Menge, Leuchtkraft, kalt-warm, grau-bunt"],
    ["<b>Texturen</b>","Oberflächenstrukturen: Helldunkelwerte, Tonwerte, schwarze grafische Elemente"]])}
   <h3 class="ps-h">2. Bildkomposition</h3>
   <p class="meta">Leitfrage: Welchen Einfluss hat die Komposition auf die Wirkung der Fotografie?</p>
   <ul class="ps-ul"><li>Aufteilung der <b>Bildfläche</b> (Gliederung, Proportionen) und des <b>Bildraums</b></li><li><b>Anordnung</b> der Bildelemente: Reihung (gleichmäßig/unrhythmisch), Ballung, Streuung, Raster, Kompositionsfiguren (Kreis, Bogen, Dreieck, Rechteck)</li><li><b>Ausrichtung</b> der Bildelemente</li><li><b>Auswahl</b> der Bildelemente: Wie unterscheiden sie sich? Welche Wirkung entsteht durch ihre Kombination?</li></ul>
  </section>

  <section class="tx" id="kg6"><span class="tx-y">Arbeitsblatt „Bildkomposition“ · Sehen → Verstehen → Gestalten</span><h2>Bildkomposition: das Bild bewusst gestalten</h2>
   ${kuDef("Bildkomposition","beschreibt, wie die einzelnen Elemente eines Bildes im Rahmen angeordnet werden, um eine bestimmte Wirkung zu erzielen. Ziele: den Blick lenken, eine Stimmung erzeugen, eine Botschaft vermitteln, das Bild ausgewogen und harmonisch wirken lassen.")}
   <div class="ps-grid2">
    <div class="ps-mini"><b>Bildaufteilung (Fläche)</b><p class="meta">wie die Fläche zwischen den wichtigsten Elementen aufgeteilt wird</p><ul class="ps-ul"><li>Position der Hauptmotive</li><li>Verhältnis von Vorder-, Mittel- und Hintergrund</li><li>Raum für Negativraum (freie Flächen)</li><li>Balance zwischen ruhigen und aktiven Bereichen</li></ul><p class="meta">Beispiele: Drittelregel, zentrierte Aufteilung (symmetrisch, ruhig), diagonale Aufteilung (dynamisch, spannend), VG/MG/HG (räumliche Tiefe), Negativraum (Ruhe), Detailaufteilung (lenkt den Blick)</p></div>
    <div class="ps-mini"><b>Bildaufbau (Raum)</b><p class="meta">räumliche Anordnung; bestimmt, wie man das Bild erlebt</p><ul class="ps-ul"><li><b>Vordergrund:</b> schafft Tiefe, lenkt den Blick ins Bild, kann als Rahmen dienen</li><li><b>Mittelgrund:</b> verbindet VG und HG, zeigt oft das Hauptmotiv</li><li><b>Hintergrund:</b> verleiht Atmosphäre, gibt Kontext</li><li><b>Hintergrundelemente:</b> ergänzen die Bildaussage, sorgen für Balance und Tiefe</li></ul></div>
   </div>
   <h3 class="ps-h">Kompositionsfiguren, Linien und Regeln</h3>
   ${kuKompoGrid()}
   <p class="meta">Goldener Schnitt finden: Bildlänge durch 1,618 teilen (z. B. 1000 px : 1,618 ≈ 618 px), dort liegt die Linie; verbindet man die Punkte im Goldenen Rechteck, entsteht die Spirale.</p>
   <h3 class="ps-h">Kompositionsskizze</h3>
   <p>Eine einfache, schnelle Vorzeichnung, mit der du Bildaufteilung, Platzierung der Elemente und Wirkung grob planst – oder in der Analyse sichtbar machst. Sie zeigt Haupt- und Nebenelemente, Linien und Formen, Licht und Schatten (grob) sowie Bildaufteilung und Blickführung.</p>
   <div class="step"><span class="afb">So gehst du vor – Schritt für Schritt</span><ol><li><b>Bildidee entwickeln:</b> Was soll das Bild zeigen? Welche Stimmung, welche Botschaft?</li><li><b>Kompositionsskizze erstellen:</b> Hauptmotiv, Aufteilung, Blickführung grob festhalten</li><li><b>Bildaufteilung planen:</b> Wohin kommen die wichtigen Elemente? Wie viel Raum bleibt für den Hintergrund?</li><li><b>Bild gestalten:</b> Skizze als Leitfaden nutzen</li><li><b>Ergebnis prüfen:</b> Wirkt das Bild ausgewogen? Lenkt es den Blick? Ist die Aussage klar?</li></ol></div>
   <p class="ex"><b>Kurz gesagt:</b> Bildkomposition ist das Zusammenspiel von Bildaufteilung, Bildaufbau und Kompositionsfiguren – nicht zufällig, sondern geplant.</p>
  </section>

  <section class="tx" id="kg7"><span class="tx-y">Eure Fotoaufträge</span><h2>Praxis</h2>
   ${kuDet("Fotoauftrag „Fotografische Gestaltung“ (Abgabe 05.10.2026)",`<p>Recherche im „Handbuch Medien“ (S. 298–300) zu Blickwinkel, Einstellungsgrößen, Perspektiven, Schärfe. Dann von je einem Motiv fotografieren:</p><ol class="ps-ul"><li>verschiedene Brennweiten: Weitwinkel und Tele (Zoom)</li><li>drei Perspektiven: Frosch-, Normal-, Vogelperspektive</li><li>drei Einstellungsgrößen</li><li>mehrere Ebenen in unterschiedlicher Schärfe: totale Schärfe, HG scharf/VG unscharf, VG scharf/HG unscharf</li></ol><p>11 unbearbeitete Fotos, sortiert nach Aufgaben. Bewertet: Gesamteindruck, Kreativität, Ausführung, Zuordnung, erkennbar unbearbeitet, pünktlich.</p>`)}
   ${kuDet("Fotoprojekt „Vier Bilder – ein Wort“",`<p>Mehrere <b>inszenierte</b> Fotos für eine Bildreihe, die mit einem Wort (max. 9 Buchstaben) betitelt wird; das Wort wird verschlüsselt (Beispiel: VERTIKAL). Layout DIN A3, 2 cm Rand, ausgeglichene Stege, 4 eigene Fotos, 4 Textfelder (12–14 pt, Zeilenabstand 1–1,5) zu Inhalt, Aufnahmesituation oder Bildaufbau. Abgabe digital, danach Ausstellung.</p>`)}
   ${kuDet("Fotoanalyse-Handout (Abgabe 17.09.2026)",`<p>Schriftliche Analyse eines Fotos aus der Auswahl (I Eindrücke · II Bildaufbau mit Kompositionsskizzen · III Deutung · IV Vergleich mit einem zweiten Foto bezüglich der Intention, wie die Fotografen die Figur inszenieren) als Handout auf einer A4-Seite. Die verbesserte Fassung findest du in der Klausurvorbereitung unter <a href="#/kunst/klausur/analyse"><b>Analyse</b></a>.</p>`)}
  </section>`;
}

function kuGenreCard(g){
  return `<div class="ku-card${g.k?"":" ku-irr"}" style="--mc:var(${g.c})"><h3>${g.n} ${g.k?kuTag("Klausur"):kuTag("klausurirrelevant","no")}</h3>
   <ul class="ps-ul">${g.m.map(x=>`<li>${x}</li>`).join("")}</ul>
   <dl><dt>Fotokünstler</dt><dd>${g.kue}</dd><dt>Beispiel</dt><dd>${g.bsp}</dd></dl></div>`;
}
function kuFotoList(){
  return `<div class="view" style="gap:10px">${KU_FOTOS.map(f=>`<div class="ku-foto"><span class="nr">${f.nr}</span><div><h3>${f.f}: <i>${f.t}</i>, ${f.j}</h3>
   <p class="meta">${kuTag(f.g)} ${kuTag(f.eg,"ok")} ${kuTag(f.p,"ok")}</p><p>${f.d}</p></div></div>`).join("")}</div>`;
}
function kuuGenres(el){
  el.innerHTML=`
  <p class="meta" style="margin:0">Arbeitsblatt „Genre der Fotografie“ mit deinen Fotokünstlern. Neben <b>Fotomontage</b> und <b>Abstrakte Fotografie</b> hast du „klausurirrelevant“ notiert – sie stehen hier der Vollständigkeit halber, ausgegraut.</p>
  ${KU_GENRE.map(kuGenreCard).join("")}
  <h2 class="sec">Auswahl zur Fotoanalyse</h2>
  <p class="meta" style="margin:0">Die 9 Fotos von deinem Blatt – beschrieben und eingeordnet. Die Bilder selbst siehst du auf dem Arbeitsblatt (hier aus Urheberrechtsgründen nicht abgebildet).</p>
  ${kuFotoList()}`;
}

function kuBegriffe(el){
  const n=KU_BEGRIFFE.filter(b=>b.k).length;
  el.innerHTML=`<input class="ps-q" id="kuQ" type="search" placeholder="Begriff suchen …" autocomplete="off">
   <div class="row"><button type="button" class="toggle" id="kuOnly" aria-pressed="false">Nur Klausurthemen</button><span class="meta">${n} von ${KU_BEGRIFFE.length} gehören zu den Klausurthemen ${kuTag("Klausur")}</span></div>
   <div id="kuBl" class="view" style="gap:10px"></div>`;
  let only=store.get("kuOnly",false);
  const draw=()=>{
    kuEl("kuOnly").setAttribute("aria-pressed",only);
    const q=kuEl("kuQ").value.toLowerCase();let html="",last="";
    KU_BEGRIFFE.filter(b=>(!only||b.k)&&(!q||(b.t+b.d).toLowerCase().includes(q))).forEach(b=>{
      if(b.g!==last){html+=`<h2 class="sec">${b.g}</h2>`;last=b.g}
      html+=`<details class="entry"><summary><h3>${b.t}${b.k?" "+kuTag("Klausur"):""}</h3></summary><div class="inner"><p>${b.d}</p></div></details>`;
    });
    kuEl("kuBl").innerHTML=html||'<p class="meta">Nichts gefunden.</p>';
  };
  kuEl("kuQ").oninput=draw;kuEl("kuOnly").onclick=()=>{only=!only;store.set("kuOnly",only);draw()};draw();
}

/* =========================================================
   KLAUSURVORBEREITUNG
   ========================================================= */
const kuFix=(x,v,note)=>`<div class="ku-fix"><span class="x">✗ ${x}</span>${note?`<span class="meta">${note}</span>`:""}<span class="v">✓ ${v}</span></div>`;
const KU_FORMEL=`<div class="ku-formel"><span><b>1</b>Mittel benennen<i>Fachbegriff</i></span><em>→</em><span><b>2</b>am Bild zeigen<i>wo genau?</i></span><em>→</em><span><b>3</b>Wirkung erklären<i>was macht das mit mir?</i></span></div>`;

function kukAblauf(el){
  el.innerHTML=`
  <div class="step ku-must"><span class="afb">Klausur Mittwoch, 25.11.2026 · Kunst GK 12</span>
   <p>Thema: <b>Kommunikation in künstlerischen und medialen Welten</b> · Kursthema: <b>Funktionen der Fotografie zwischen Dokumentation und Inszenierung</b></p></div>

  <h2 class="sec">Das kommt dran</h2>
  <div class="step"><span class="afb">Deine rote Notiz zur Klausur</span>
   <div class="ku-note"><span><b>I</b>Fotoanalyse</span><span class="leer"><b>II</b>nicht notiert</span><span><b>III</b>Subjektiv · Objektiv · Information</span></div>
   <p class="meta">Teil II ist auf deinem Blatt leer – frag am besten noch einmal nach. Weitere Hinweise: deine Notizen am Test („Klausur!“, „Klausur: meist Bilder mit Personen“, „Lernen!!! Leichte Punkte“) und auf dem Genre-Blatt („klausurirrelevant“).</p></div>
  <a class="ku-prio top" href="#/kunst/klausur/analyse"><span class="n">1</span><h3>Teil I · Fotoanalyse eines Fotos ${kuTag("meist mit Personen")}</h3><p>I Eindrücke · II Bildaufbau, Gestaltungsmittel + Kompositionsskizze · III Deutung · IV Vergleich (Dokumentation ↔ Inszenierung)</p></a>
  <a class="ku-prio top" href="#/kunst/klausur/mittel"><span class="n">2</span><h3>Gestaltungsmittel und Wirkung ${kuTag("leichte Punkte")}</h3><p>Einstellungsgrößen, Perspektive, Schärfe, Licht, Farbe, Kontraste – brauchst du für die Analyse und für Einzelaufgaben</p></a>
  <a class="ku-prio top" href="#/kunst/klausur/theorie"><span class="n">3</span><h3>Teil III · Subjektiv – Objektiv – Information</h3><p>Scheinbare Objektivität, Wirkungsebenen, Unterhaltung/Information/Manipulation, Verantwortung des Fotografen</p></a>
  <a class="ku-prio" href="#/kunst/klausur/theorie"><span class="n">4</span><h3>Aufgaben und Arten der Fotografie ${kuTag("„Klausur!“")}</h3><p>Arten einer Aufgabe zuordnen – und begründen</p></a>
  <a class="ku-prio" href="#/kunst/klausur/theorie"><span class="n">5</span><h3>Genres</h3><p>Inszenierte, Sozialdokumentarische, Straight Photography, Pictorialismus, Neues Sehen – <b>nicht</b> Fotomontage und Abstrakte Fotografie</p></a>
  <a class="ku-prio" href="#/kunst/klausur/mittel"><span class="n">6</span><h3>Bildkomposition</h3><p>Drittelregel, Goldener Schnitt, Linien, Kompositionsfiguren, Bildaufbau, Kompositionsskizze</p></a>

  <h2 class="sec">So sahen die Aufgaben im Test aus</h2>
  <p class="meta" style="margin:0">Der korrigierte Test (37 Punkte) zeigt, wie gefragt wird. Rechne mit ähnlichen Aufgaben, dazu einer Fotoanalyse.</p>
  <div class="aufg"><h3>1. Arten der Fotografie den Aufgaben zuordnen <span class="be">9 P.</span></h3><p>Makro-, Landschafts-, Werbefotografie → Entdeckung, Unterhaltung, Zweckinformation</p></div>
  <div class="aufg"><h3>2. Unterhalten, Informieren, Manipulieren erklären <span class="be">6 P.</span></h3></div>
  <div class="aufg"><h3>3. Stellung nehmen: Objektivität und Verantwortung des Fotografen <span class="be">4 P.</span></h3></div>
  <div class="aufg"><h3>4. Einstellungsgrößen bestimmen und begründen <span class="be">4 P.</span></h3><p>Fotos eines Kindes – in der Klausur „meist Bilder mit Personen“</p></div>
  <div class="aufg"><h3>5. a) Zwei Fotos vergleichen (Schärfe, Wirkung) <span class="be">6 P.</span> b) Licht, Farbe, Kontrast beschreiben <span class="be">8 P.</span></h3></div>

  <h2 class="sec">Hier gingen Punkte verloren</h2>
  ${kuFix("Makrofotografie → Entdeckende Fotografie (nur zugeordnet)","Zuordnen und begründen: „… gehört zur Entdeckung, weil die Kamera Details zeigt, die das bloße Auge nicht erkennt.“","Aufgabe 1: 6 von 9 P. – alles richtig zugeordnet, vermutlich fehlte die Begründung")}
  ${kuFix("Informieren → sachlich, möglichst objektives Foto","genau sagen, was: „Information: Fotos unterrichten sachlich über Tatsachen und Ereignisse und helfen dem Betrachter, sich ein Urteil zu bilden – z. B. Pressefotos, Dokumentaraufnahmen, Lehrbuchfotos.“","Randnotiz: „was genau?“ · Aufgabe 2: 1,5 von 6 P.")}
  ${kuFix("Unterhalten / Manipulieren: von der Lehrkraft gestrichen","Ziel + Mittel + Beispiel: Manipulation = gezielte, unbemerkte Beeinflussung durch Ausschnitt, Perspektive, Inszenierung, Retusche, Bildunterschrift – z. B. in Werbung oder Propaganda.",'Musterantwort im Reiter <a href="#/kunst/klausur/theorie"><b>Theorie</b></a>')}
  ${kuFix("„Nah, da es nur einen Teil des Kindes zeigt“","„Groß: Der Kopf füllt das Bild aus, Mimik und Augen stehen im Mittelpunkt → emotional.“","Aufgabe 4: korrigiert zu Groß")}
  ${kuFix("„Totale, da alles zu sehen ist“","„Totale: Die Person ist ganz und mit viel Umgebung zu sehen; Überblick über das Geschehen → distanzierte, sachliche Wirkung.“","„alles“ unterstrichen: ungenau · Aufgabe 4: 1,5 von 4 P.")}
  ${kuFix("„… unterscheiden sich durch die Schärfe“","den Fachbegriff nennen: <b>selektive Schärfe</b> – und für jedes Foto sagen, welche Ebene scharf ist und was das bewirkt.","Lehrkraft hat „selektive“ ergänzt")}
  ${kuFix("Licht, Farbe, Kontrast: richtig, aber knapp","zu jedem Mittel Fachbegriff, Merkmal und Wirkung – z. B. Lichtrichtung, Schatten, warme oder kalte Farben, Art des Kontrasts. „Lernen!!! Leichte Punkte“","Aufgabe 5b: 6 von 8 P.")}
  <p class="meta" style="margin:0">Gut gelaufen: Aufgabe 3 (Verantwortung des Fotografen, scheinbare Objektivität) – volle Punktzahl.</p>

  <h2 class="sec">So holst du die Punkte</h2>
  ${KU_FORMEL}
  <p class="ex"><b>Beispiel:</b> „Durch die <b>Froschperspektive</b> (1) blicken wir von unten zu der Frau auf, hinter der das Hochhaus schräg in den Himmel ragt (2). Sie wirkt dadurch überlegen und entschlossen, die Szene bedrohlich und dramatisch (3).“</p>
  <div class="step"><ul>
   <li><b>Fachbegriffe statt Alltagswörter:</b> selektive Schärfe, Froschperspektive, Hell-Dunkel-Kontrast, Halbtotale, Diagonale, Augenführung.</li>
   <li><b>Genau beobachten:</b> Wer ist zu sehen, was tut die Person, wo? Was ist wirklich im Hintergrund?</li>
   <li><b>Immer begründen</b> – auch bei Zuordnungen und Einstellungsgrößen.</li>
   <li><b>Kompositionsskizze</b> bei jeder Analyse zeichnen und im Text darauf verweisen.</li>
   <li><b>Aufgabe genau lesen</b> und nur das liefern, was verlangt ist.</li></ul></div>

  <h2 class="sec">Operatoren</h2>
  <div class="step"><ul>
   <li><b>Beschreiben:</b> sachlich wiedergeben, was zu sehen ist – noch ohne Deutung.</li>
   <li><b>Zuordnen:</b> einer Kategorie zuweisen und kurz begründen.</li>
   <li><b>Erklären / Erläutern:</b> verständlich machen, mit Beispiel und Begründung.</li>
   <li><b>Analysieren:</b> Gestaltungsmittel untersuchen und ihre Wirkung erklären.</li>
   <li><b>Deuten / Interpretieren:</b> Absicht, Inhalt und Botschaft herausarbeiten, am Bild belegen.</li>
   <li><b>Vergleichen:</b> Gemeinsamkeiten und Unterschiede nach Kriterien (Intention, Inszenierung der Figur, Wirkung).</li>
   <li><b>Stellung nehmen / Beurteilen:</b> begründetes eigenes Urteil mit Argumenten und Beispiel.</li>
   <li><b>Skizzieren:</b> Kompositionsskizze mit Linien, Formen, Blickführung.</li></ul></div>

  <h2 class="sec">Checkliste</h2>
  <div class="step ps-chk" id="kuChk"></div>`;
  const done=store.get("kuChk",{});
  kuEl("kuChk").innerHTML=KU_CHECK.map((t,i)=>`<label><input type="checkbox" data-i="${i}" ${done[i]?"checked":""}> <span>${t}</span></label>`).join("");
  kuEl("kuChk").querySelectorAll("input").forEach(c=>c.onchange=()=>{done[c.dataset.i]=c.checked;store.set("kuChk",done)});
}

const KU_ML_A1=`
 <p><b>Makrofotografie → Entdeckung:</b> Die Kamera ist dem Auge überlegen. Durch die starke Vergrößerung werden Details sichtbar (z. B. die Struktur eines Insektenauges), die man mit bloßem Auge nicht erkennen kann. Das erweitert unseren visuellen Horizont und dient oft der Forschung.</p>
 <p><b>Landschaftsfotografie → Unterhaltung:</b> Landschaftsbilder in Bildbänden, Kalendern oder Reisebildern sollen vor allem gefallen und Freude beim Anschauen bereiten; es geht um Genuss, nicht um sachliche Information.</p>
 <p><b>Werbefotografie → Zweckinformation:</b> Das Produkt wird schön und begehrenswert in Szene gesetzt. Ziel ist, dass der Betrachter es kauft – oder bei politischer Werbung einer Idee folgt.</p>`;
const KU_ML_A2=`
 <p><b>Unterhaltung:</b> Fotos, die vor allem Freude, Vergnügen und Zeitvertreib bieten sollen. Sie sprechen Gefühle und Geschmack an, weniger den Verstand; ob sie die Wirklichkeit genau zeigen, ist zweitrangig. Beispiele: Reise- und Landschaftsbilder, Bildbände, Amateur- und Urlaubsfotos, Pin-ups, Bildberichte in Illustrierten.</p>
 <p><b>Information:</b> Fotos, die den Betrachter sachlich über Tatsachen, Ereignisse oder Zusammenhänge unterrichten und ihn in die Lage versetzen, sich ein Urteil zu bilden und richtige Entscheidungen zu treffen. Sie leben von ihrer Glaubwürdigkeit und erscheinen meist zusammen mit Text (Bildunterschrift, Artikel). Beispiele: Pressefotos, Dokumentaraufnahmen, Fotos in Lehrbüchern und wissenschaftlichen Veröffentlichungen.</p>
 <p><b>Manipulation:</b> die gezielte, für den Betrachter kaum erkennbare Beeinflussung seiner Wahrnehmung und Meinung. Der Fotograf (oder wer das Bild veröffentlicht) nutzt dazu die Auswahl von Moment und Ausschnitt (Wichtiges wird weggelassen), Perspektive und Licht, eine gestellte Szene (Inszenierung), Retusche, Montage oder eine irreführende Bildunterschrift. Ziel ist es, den Betrachter zum Kauf, zu einer politischen Haltung oder zu einem Gefühl zu bewegen – z. B. in Werbung oder Propaganda. Weil Fotos als „Beweisstück“ gelten, ist Manipulation besonders wirksam.</p>`;
const KU_ML_A3=`
 <p>Gisèle Freund behauptet, die Fotografie habe nur eine <i>scheinbare Objektivität</i>. Dieser Aussage stimme ich zu.</p>
 <p>Auf den ersten Blick wirkt ein Foto objektiv: Die Kamera zeichnet mechanisch und naturalistisch auf, was vor der Linse ist. Deshalb gilt ein Foto als „documentum“, als Beweisstück – Susan Sontag sagt, Fotos liefern Beweismaterial.</p>
 <p>Doch der Fotograf greift immer subjektiv ein. Er verfolgt eine Darstellungsabsicht und entscheidet über Motiv, Standort und Perspektive, Ausschnitt und Einstellungsgröße, den Moment der Aufnahme, Brennweite, Licht und Format. Er kann die Szene sogar inszenieren oder das Bild nachträglich bearbeiten. So kann ein Motiv viele verschiedene Bilder ergeben. Auch der Betrachter deutet subjektiv: Je nach Erfahrung, Wissen und Entwicklungsstand verbindet er andere Assoziationen mit dem Bild, und eine Bildunterschrift kann seine Deutung lenken.</p>
 <p>Ein Beispiel ist August Sanders „Handlanger“: Das Foto wirkt wie ein sachliches Dokument, doch Pose, frontaler Blick und der dunkle Hintergrund sind bewusst gewählt.</p>
 <p>Ein Foto ist also nie ein vollständiges, „richtiges“ Abbild der Wirklichkeit, sondern ein gestalteter Ausschnitt. Daraus folgt eine hohe moralische Verantwortung des Fotografen – und für uns Betrachter die Aufgabe, Fotos kritisch zu prüfen: Wer hat das Bild gemacht, wozu, und was zeigt es nicht?</p>`;

function kukTheorie(el){
  el.innerHTML=`
  <div class="erachips ku-chips"><a href="#kt4">Subjektiv · Objektiv · Information</a><a href="#kt3">Unterhaltung · Information · Manipulation</a><a href="#kt5">Dokumentation ↔ Inszenierung</a><a href="#kt1">Aufgaben</a><a href="#kt2">Arten</a><a href="#kt6">Genres</a><a href="#kt7">Kommunikation</a></div>

  <section class="tx" id="kt4"><span class="tx-y">deine Notiz: Teil III der Klausur</span><h2>Subjektiv – Objektiv – Information</h2>
   <div class="ps-grid2">
    <div class="ps-mini"><b>Warum Fotos objektiv wirken</b><ul class="ps-ul"><li>Die Kamera zeichnet mechanisch-optisch auf, naturalistisch und in unmittelbarer Beobachtung.</li><li>Jedes Foto wirkt wie ein <b>„documentum“</b>, ein Beweisstück.</li><li><b>Susan Sontag:</b> Fotos liefern Beweismaterial.</li></ul></div>
    <div class="ps-mini"><b>Warum sie subjektiv sind</b><ul class="ps-ul"><li><b>Fotograf:</b> Absicht, Motivwahl, Standort und Perspektive, Ausschnitt, Moment, Brennweite, Licht, Format – bis zu Inszenierung und Bearbeitung</li><li><b>Betrachter:</b> deutet je nach Erfahrung, Wissen, Entwicklungsstand</li><li><b>Kontext:</b> Bildunterschrift und Medium lenken die Deutung</li></ul></div>
   </div>
   ${kuDef("Scheinbare Objektivität (Gisèle Freund, 1979)","Die Fotografie ist an die Natur gebunden, aber die angeblich unbestechliche Linse erlaubt alle möglichen Verformungen der Wirklichkeit. → Ein Motiv hat viele Bilder; ein Foto ist nie ein richtiges Abbild der Wirklichkeit.")}
   <h3 class="ps-h">Information: Wirkungsebenen</h3>
   ${kuRows([
    ["1. Informationsgehalt","","Welche sachliche Information teilen uns Bild und Text mit?"],
    ["2. Ästhetischer Gehalt","","Wie ist das Foto gestaltet? Format, Ausschnitt, Farbe/SW, Kontraste, Licht, Raum, Schärfe, Komposition, Layout von Bild, Text und Produkt"],
    ["3. Emotionaler Gehalt","","Was erzählt das Foto? Wünsche, Ängste, Gefühle, Assoziationen, Bezug zur Realität"]])}
   <p><b>Beurteilung:</b> Wie schätze ich die Qualität und den Wert des Bildes ein? <b>subjektiv</b> · <b>möglichst objektiv</b> · <b>im gesellschaftlichen Kontext</b>. Der Informationswert hängt davon ab, wer das Foto gemacht hat, wozu, mit welchem Text es erscheint und was es weglässt.</p>
   <p class="ex"><b>Fazit für jede Antwort:</b> Fotos sind gestaltete Ausschnitte der Wirklichkeit. Darum trägt der Fotograf eine hohe moralische Verantwortung – und der Betrachter muss Fotos kritisch prüfen.</p>
   ${kuMl("Musterantwort: „Nehmen Sie Stellung: Die Fotografie hat nur eine scheinbare Objektivität.“",KU_ML_A3)}
  </section>

  <section class="tx" id="kt3"><span class="tx-y">Test-Aufgabe 2 · genau erklären</span><h2>Unterhaltung, Information, Manipulation</h2>
   ${kuRows([
    ["Unterhaltung","","<b>Ziel:</b> Freude, Vergnügen, Zeitvertreib<br><b>Merkmale:</b> spricht Gefühl und Geschmack an; schön, angenehm","Urlaubsfoto, Bildband, Pin-up","Beispiele"],
    ["Information","","<b>Ziel:</b> sachlich unterrichten, Urteil ermöglichen<br><b>Merkmale:</b> glaubwürdig, möglichst objektiv, meist mit Text","Pressefoto, Lehrbuch, Dokumentaraufnahme","Beispiele"],
    ["Manipulation","","<b>Ziel:</b> Meinung, Kauf, Gefühl lenken – unbemerkt<br><b>Mittel:</b> Ausschnitt, Moment, Perspektive, Inszenierung, Retusche, Montage, Bildunterschrift","Werbung, Propaganda, retuschierte Pressebilder","Beispiele"]])}
   ${kuMl("Musterantwort zu Test-Aufgabe 2",KU_ML_A2)}
  </section>

  <section class="tx" id="kt5"><span class="tx-y">Kursthema</span><h2>Dokumentation ↔ Inszenierung</h2>
   ${kuTable(["","Dokumentation","Inszenierung"],[
    ["Fotograf","beobachtet, greift möglichst nicht ein","arrangiert wie ein Regisseur"],
    ["Figur","reale Person in ihrer Situation","Model, Schauspieler, Künstlerin in einer Rolle"],
    ["Wirkung","authentisch, glaubwürdig","künstlich, rätselhaft, ästhetisch"],
    ["Beispiel","Sander, Lange, Hine, Platt","Sherman, Wall, Newton"]])}
   <p class="ex">In Vergleichsaufgaben: Intention → wie wird die Figur inszeniert (Pose, Kleidung, Blick, Ort, Licht, Einstellungsgröße, Perspektive) → Wirkung → Fazit: Beide sind gestaltet.</p>
  </section>

  <section class="tx" id="kt1"><span class="tx-y">„Klausur!“ · zuordnen und begründen</span><h2>Die 6 Aufgaben der Fotografie</h2>
   <p class="ex"><b>Eselsbrücke:</b> <b>A</b>ufzeichnung · <b>U</b>nterhaltung · <b>P</b>ersönlichkeitsausdruck · <b>I</b>nformation · <b>Z</b>weckinformation · <b>E</b>ntdeckung – „<b>AU</b>, <b>PIZ</b>za <b>E</b>ssen!“</p>
   ${kuAufgCards(true)}
   <div class="step"><span class="afb">So formulierst du eine Zuordnung</span><p>„Die <b>[Art]</b> gehört zur Aufgabe <b>[Aufgabe]</b>, weil <b>[Begründung mit Merkmal der Aufgabe]</b>, z. B. <b>[Beispiel]</b>.“</p></div>
   ${kuMl("Musterantwort zu Test-Aufgabe 1 (Makro-, Landschafts-, Werbefotografie)",KU_ML_A1)}
  </section>

  <section class="tx" id="kt2"><span class="tx-y">Fotouniversum</span><h2>Arten der Fotografie</h2>
   <p>Fotos lassen sich nach <b>Technik</b>, <b>Inhalt</b>, <b>Funktion</b> und <b>Stil</b> ordnen. Eine Art kann verschiedenen Aufgaben dienen – entscheidend ist, <b>wofür</b> das Foto gemacht wurde (Dokumentarfotografie z. B. → Aufzeichnung oder Information).</p>
   ${kuUnivCards()}
  </section>

  <section class="tx" id="kt6"><span class="tx-y">ohne Fotomontage und Abstrakte Fotografie</span><h2>Die 5 Genres für die Klausur</h2>
   ${kuRows(KU_GREL.map(g=>[`<span style="color:var(${g.c})">${g.n}</span>`,"",g.m.filter(x=>!x.startsWith("Ergänzung")).join("; "),g.kue,"Künstler"]))}
   <p class="meta">Beispiele aus der Auswahl: Sherman, Wall, Newton → inszeniert · Lange (und Hine) → sozialdokumentarisch · Kühn → Pictorialismus · Rodtschenko, Kertész → Neues Sehen · Sander → laut Korrektur dokumentarisch.</p>
  </section>

  <section class="tx" id="kt7"><span class="tx-y">Mitschrift</span><h2>Kommunikationsmodell</h2>
   ${kuSvgKomm()}
   <p class="ex"><b>Angewendet:</b> Dorothea Lange (Sender) codiert die Not der Familie in Nahaufnahme, weichem Licht und Dreieckskomposition. Das Foto erscheint in der Zeitung (Medium). Leser (Empfänger) decodieren es als Bild der Armut → Mitgefühl, Hilfe (Wirkung) → das Foto wird berühmt (Feedback). Störsignal: eine falsche Bildunterschrift könnte die Deutung verändern.</p>
  </section>`;
}

const KU_ML_LICHT=`
 <p><b>Licht:</b> Es ist natürliches Abendlicht. Die tief stehende Sonne steht rechts im Hintergrund, das Licht kommt also von hinten bzw. von der Seite (Gegenlicht). Es ist weich und gestreut: Es gibt keine harten Schlagschatten, die Übergänge sind sanft. Dadurch wirkt die Szene friedlich, ruhig und ein wenig verträumt – wie ein Moment am Ende eines Sommertages.</p>
 <p><b>Farbe:</b> Es überwiegen warme Farben: Orange und Gelb im Himmel, Ocker und Braun im Feld und das kräftige Rot der Tulpe. Die warme Farbigkeit wirkt gemütlich und harmonisch und unterstützt die friedliche Abendstimmung. Das leuchtende Rot ist die stärkste Farbe im Bild; im Kontrast zum Grün der Blätter (Rot-Grün-Kontrast) und zu den gedeckten Ockertönen (Grau-Bunt-Kontrast) zieht es den Blick an, obwohl die Tulpe unscharf ist.</p>
 <p><b>Kontraste:</b> Ein Hell-Dunkel-Kontrast teilt das Bild waagerecht: oben der helle Himmel, unten das dunklere Feld. Die Person hebt sich mit ihrer roten Jacke vor dem hellen Himmel ab und wird so zum Blickfang.</p>`;

function kukMittel(el){
  el.innerHTML=`
  <div class="erachips ku-chips"><a href="#km1">Einstellungsgrößen</a><a href="#km2">Perspektive</a><a href="#km3">Schärfe & Technik</a><a href="#km4">Licht</a><a href="#km5">Farbe & Kontraste</a><a href="#km6">Format & Raum</a><a href="#km7">Komposition</a><a href="#km8">Muster</a></div>
  <div class="step ku-must"><span class="afb">„Lernen!!! Leichte Punkte“ – die Formel für jedes Mittel</span>${KU_FORMEL}</div>

  <section class="tx" id="km1"><span class="tx-y">„Klausur: meist Bilder mit Personen“</span><h2>Einstellungsgrößen erkennen</h2>
   ${kuEGGrid()}
   ${kuRows(KU_EG.map((e,i)=>[`${i+1}. ${kuEGn(e.id)}`,e.dist,`<i>${e.frage}</i>`,e.wirk]))}
   <p class="ex"><b>Abgrenzung Amerikanisch ↔ Halbnah:</b> In deinem Buch ist <b>Amerikanisch</b> „vom Scheitel bis zum Knie“, die Person steht im Mittelpunkt; <b>Halbnah</b> zeigt etwa zwei Drittel der Person <b>und die unmittelbare Umgebung</b> oder eine Personengruppe. (Andere Bücher ordnen die beiden umgekehrt – begründe immer mit dem, was zu sehen ist.)</p>
   <p><a class="btn primary" href="#/kunst/klausur/ueben" id="kuToTrainer" style="display:block;text-align:center;text-decoration:none">Einstellungsgrößen-Trainer öffnen</a></p>
   ${kuDet("Die 9 Fotos der Auswahl: Einstellungsgröße und Perspektive",kuRows(KU_FOTOS.map(f=>[`${f.nr}. ${f.f}`,f.j.split(" ")[0],`<i>${f.t}</i>`,`<b>${f.eg}</b> · ${f.p}`,"Einstellung · Perspektive"])))}
  </section>

  <section class="tx" id="km2"><span class="tx-y">Standpunkt der Kamera</span><h2>Perspektive</h2>
   ${kuSvgPersp()}
   ${kuRows(KU_PERSP.map(p=>[`<span style="color:var(${p.c})">${p.n}</span>`,"",p.wo,p.wirk]))}
  </section>

  <section class="tx" id="km3"><span class="tx-y">Test-Aufgabe 5a: „selektive Schärfe“ als Fachbegriff!</span><h2>Schärfe, Blende, Brennweite, Belichtungszeit</h2>
   <div class="ku-sch">
    <figure><div class="ku-ph">${kuSvgSchaerfe("total")}</div><figcaption><b>Totale Schärfe</b> unbestechlich, informativ, steril</figcaption></figure>
    <figure><div class="ku-ph">${kuSvgSchaerfe("vg")}</div><figcaption><b>Selektiv: VG scharf</b> Tulpe tritt plastisch hervor</figcaption></figure>
    <figure><div class="ku-ph">${kuSvgSchaerfe("hg")}</div><figcaption><b>Selektiv: HG scharf</b> Blick geht zur Person, VG rahmt</figcaption></figure>
   </div>
   ${kuRows([
    ["Blende","","<b>groß</b> → geringe Schärfentiefe (selektive Schärfe)<br><b>klein</b> → große Schärfentiefe (totale Schärfe)","selektiv lenkt den Blick, total wirkt informativ"],
    ["Brennweite","","<b>Weitwinkel</b> (klein) · <b>Normal</b> (mittel) · <b>Tele</b> (groß)","weiter Raum, wie aufgeklappt · normale Sicht · Ebenen rücken eng zusammen"],
    ["Belichtungszeit","","<b>kurz</b> → Bewegung eingefroren · <b>lang</b> → Bewegungsunschärfe","starr und scharf · Aktion, Dynamik"],
    ["Körnung","","<b>feinkörnig</b> · <b>grobkörnig</b>","scharf, glatt · körnig, rau, oft dokumentarisch"]])}
  </section>

  <section class="tx" id="km4"><span class="tx-y">leichte Punkte</span><h2>Licht</h2>
   ${kuSvgLicht()}
   ${kuRows([
    ["hartes Licht","Sonne, Spot","scharfe Konturen, harte Schlagschatten, starke Kontraste","grell, dramatisch, lenkt auf „Spots“"],
    ["weiches Licht","Wolken, gestreut","weiche Übergänge, diffuse Schatten","natürlich, ruhig, sanft; Plastizität"],
    ["Seitenlicht","","eine Seite hell, eine dunkel","plastisch, Strukturen treten hervor, spannungsvoll"],
    ["Gegenlicht","","Licht von hinten, Umrisse leuchten","Silhouette, geheimnisvoll, stimmungsvoll"],
    ["Kunstlicht","Lampen, Blitz","Lichtquellen sichtbar, Spots, Nacht","inszeniert, verfremdend; Blitz friert Bewegung ein"],
    ["Licht von unten","Ergänzung","Schatten fallen nach oben","unheimlich, bedrohlich"]])}
  </section>

  <section class="tx" id="km5"><span class="tx-y">leichte Punkte</span><h2>Farbe und Kontraste</h2>
   ${kuRows(KU_FARBE.map(r=>[r[0],"",r[1],r[2]]))}
  </section>

  <section class="tx" id="km6"><span class="tx-y">vom Handout: „Format, Raum!“</span><h2>Format und Raum</h2>
   ${kuTable(["Mittel","Wirkung"],[
    ["<b>Hochformat</b>","betont Höhe, Aufrechtes, die einzelne Person (typisch fürs Porträt); stabil, würdevoll"],
    ["<b>Querformat</b>","betont Weite, Ruhe, Erzählung (Landschaft, Filmbild)"],
    ["<b>Vordergrund</b>","schafft Tiefe, rahmt, führt ins Bild"],
    ["<b>Mittelgrund</b>","verbindet, zeigt oft das Hauptmotiv"],
    ["<b>Hintergrund</b>","Atmosphäre, Kontext; leer oder dunkel → Figur isoliert, nichts lenkt ab"],
    ["<b>Handlungsachse</b>","parallel zur Kamera (ruhig, beobachtend), konträr (Konfrontation), ins Bild mitführend (Tiefe, man geht mit)"]])}
  </section>

  <section class="tx" id="km7"><span class="tx-y">Bildkomposition</span><h2>Linien, Figuren, Regeln</h2>
   ${kuKompoGrid()}
   <p class="ex"><b>Bildaufteilung</b> = Fläche (Wo liegt was? Drittel, Mitte, Diagonale, Negativraum) · <b>Bildaufbau</b> = Raum (VG, MG, HG) · <b>Kompositionsfiguren</b> = Formen, nach denen die Elemente angeordnet sind.</p>
  </section>

  <section class="tx" id="km8"><span class="tx-y">wie Test-Aufgabe 5b</span><h2>Musterantwort Licht, Farbe, Kontrast</h2>
   <div class="ku-ph big">${kuSvgSchaerfe("hg")}</div>
   <div class="aufg"><h3>Beschreiben Sie Licht, Farbe und Kontraste der Abbildung und erläutern Sie ihre Wirkung.</h3></div>
   ${kuMl("Musterantwort aufklappen",KU_ML_LICHT)}
  </section>`;
  kuEl("kuToTrainer").onclick=()=>store.set("kuMode","eg");
}

const KU_ML_SANDER=`
 <p><b>Einleitung:</b> Die Schwarz-Weiß-Fotografie „Handlanger“ von August Sander entstand 1928 im Hochformat. Sie zeigt einen jungen Bauhilfsarbeiter mit seiner Last und gehört zu Sanders Porträtwerk „Menschen des 20. Jahrhunderts“ <i>(Hintergrundwissen aus dem Unterricht)</i>.</p>
 <p><b>I. Eindrücke:</b> Ein junger Handlanger steht frontal vor uns. Auf den Schultern trägt er ein Brett mit einem breiten Stapel Ziegelsteine; mit dem erhobenen Arm (im Bild rechts) hält er das Brett fest, den anderen Arm stützt er in die Hüfte. Er trägt eine Schiebermütze, eine Weste über dem Hemd und eine dunkle Hose und sieht mit ernstem, festem, fast trotzigem Blick direkt in die Kamera. Das Foto wirkt ernst, ruhig und stolz, zugleich schwer und anstrengend. Man meint, Staub und raue Ziegel zu spüren, die Kälte einer Baustelle und das Gewicht der Last. Zuerst springen das hell beleuchtete Gesicht und der Ziegelstapel ins Auge.</p>
 <p><b>II. Bildaufbau und Gestaltungsmittel:</b> Das <b>Hochformat</b> betont die aufrecht stehende Figur. In der <b>amerikanischen Einstellung</b> ist der Mann vom Scheitel bis etwa zu den Knien zu sehen; Haltung, Körpersprache und Arbeit stehen im Mittelpunkt. Die <b>Normalperspektive</b> frontal auf Augenhöhe lässt ihn dem Betrachter gleichwertig begegnen; durch den direkten Blick fühlt man sich angesprochen, fast herausgefordert. <b>Raum:</b> Die Figur steht im Vordergrund vor einem fast schwarzen, leeren Hintergrund; Mittel- und Hintergrund sind nicht zu erkennen, es gibt kaum Raumtiefe. Nichts lenkt ab – der Mann wirkt isoliert wie auf einer Bühne. Das <b>SW-Foto</b> lebt vom starken <b>Hell-Dunkel-Kontrast</b>: Das Licht fällt von vorn auf Gesicht, Hände und Ziegel, die hell vor dem Schwarz hervortreten. Dadurch wirkt die Figur plastisch, und Texturen wie die rauen Steine und der Stoff der Weste werden sichtbar. Die Figur ist durchgehend scharf, der dunkle Hintergrund bietet keine ablenkenden Details.</p>
 <p><b>Komposition</b> (siehe Kompositionsskizze): Die Figur steht in der Bildmitte, das Bild ist nahezu symmetrisch aufgebaut. Die Körperachse bildet eine <b>Senkrechte</b> (Stabilität, Standfestigkeit), der Ziegelstapel darüber eine breite <b>Waagerechte</b> bzw. ein <b>Rechteck</b> (Last, Schwere). Der in die Hüfte gestützte Arm bildet ein <b>Dreieck</b>, das die Figur verankert und Selbstbewusstsein ausdrückt. <b>Augenführung:</b> vom hellen Gesicht (1) zum Ziegelstapel und zur haltenden Hand (2), entlang der Körperachse nach unten (3) bis zur aufgestützten Hand (4). Zusammen vermitteln die Mittel Standhaftigkeit, Ruhe und Würde, aber auch die Schwere der Arbeit.</p>
 <p><b>III. Deutung:</b> Sander zeigt den Handlanger nicht als Einzelperson in einer bestimmten Situation, sondern als Vertreter seines Berufs: Der leere Hintergrund löst ihn aus seiner Umgebung, die Ziegel zeigen, was er tut. So wird er zum Typus des einfachen Arbeiters in der Weimarer Republik. Sander beschönigt nichts, begegnet dem Mann aber mit Respekt: Er verleiht dem Arbeiter Würde, ohne ihn zu verschönern. Das Foto lässt sich der <b>dokumentarischen Fotografie</b> zuordnen, weil es einen realen Menschen sachlich festhält. Auf den zweiten Blick ist aber auch dieses Dokument gestaltet: Pose, frontale Haltung und Blick sind gestellt, der Hintergrund bewusst gewählt – ein Beispiel für die nur scheinbare Objektivität. Tiefer gelesen „trägt“ der Arbeiter die Last für andere: Er steht für alle, die die Gesellschaft mit ihrer Arbeit buchstäblich aufbauen.</p>
 <p><b>IV. Vergleich mit Helmut Newton, „Rue Aubriot“ (1975):</b> Beide Fotos sind SW-Aufnahmen im Hochformat mit einer einzelnen Person als Hauptmotiv und starkem Hell-Dunkel-Kontrast; beide Figuren wirken selbstbewusst (Hand in der Hüfte bzw. in der Hosentasche). Ihre <b>Intention</b> ist jedoch gegensätzlich: Sander dokumentiert einen realen Arbeiter als Vertreter seines Standes. Newton inszeniert für eine Modestrecke der französischen „Vogue“ ein Model; das Foto soll Mode verkaufen und ein Lebensgefühl vermitteln (Zweckinformation). <b>Inszenierung der Figur:</b> Sanders Handlanger steht in Arbeitskleidung, frontal und statisch, mit seinem echten Arbeitsmaterial vor neutralem Hintergrund und sieht uns direkt an. Newtons Model ist von Kopf bis Fuß zu sehen (Halbtotale); eine nächtliche, nasse Pariser Gasse dient als Kulisse. Sie trägt einen eleganten Herrenanzug mit Schleifenbluse, hält eine Zigarette und senkt den Blick. Straßenlaternen setzen Lichtspots, die Fluchtlinien der Gasse erzeugen Tiefe und eine geheimnisvolle Film-Stimmung. <b>Wirkung:</b> Sanders Arbeiter wirkt nahbar, ernst und stolz – glaubwürdig wie ein Zeugnis. Newtons Frau wirkt kühl, unnahbar und geheimnisvoll; ihr androgynes Auftreten im Männeranzug ist Teil einer perfekt gestylten, erfundenen Szene. <b>Fazit:</b> Sander dokumentiert, Newton inszeniert – doch beide gestalten ihre Figur bewusst und lenken so die Wirkung auf den Betrachter.</p>`;

function kukAnalyse(el){
  el.innerHTML=`
  <div class="erachips ku-chips"><a href="#ka1">Ablauf I–IV</a><a href="#ka2">Kompositionsskizze</a><a href="#ka3">Satzbausteine</a><a href="#ka4">Muster: Sander</a><a href="#ka5">Korrekturen</a></div>

  <section class="tx" id="ka1"><span class="tx-y">Arbeitsblatt Fotoanalyse · Arbeitsschritte</span><h2>Fotoanalyse in 4 Schritten</h2>
   <div class="step"><span class="afb">0 · Einleitung</span><p>Fotograf, Titel, Jahr, SW oder Farbe, Hoch- oder Querformat, Genre/Funktion – und in einem Satz: Wer oder was ist zu sehen?</p></div>
   <div class="step"><span class="afb">I · Eindrücke, Wirkungen, Anmutungsqualitäten</span><ul>
    <li>Welche <b>Situation</b> (Schauplatz, Handlung) zeigt das Foto? Was tut sich? → <b>Wer</b> genau, <b>was</b> tut die Person, <b>wo</b>?</li>
    <li><b>Stimmung</b> (psychologische Empfindungen) und <b>Atmosphäre</b> (Sinneseindrücke: Gerüche, Temperatur, Geräusche)</li>
    <li>Welche <b>Bildpartien</b> werden besonders hervorgehoben? (erster Blickfang)</li></ul></div>
   <div class="step"><span class="afb">II · Bildaufbau und Gestaltungsmittel – mit Wirkung</span><ul>
    <li>Gehe die Mittel der Reihe nach durch (kurze, auch tabellarische Notizen): <b>Format · Einstellungsgröße · Perspektive · Raum (VG/MG/HG) · Licht · SW/Farbe · Kontraste · Schärfe · Brennweite · Linien und Kompositionsfiguren · Bildaufteilung</b></li>
    <li>Erkläre, durch welche Maßnahmen des Fotografen die Eindrücke aus Schritt I entstehen.</li>
    <li><b>Augenführung:</b> Was springt zuerst ins Auge, was sieht man später?</li>
    <li><b>Kompositionsskizze</b> anfertigen und im Text darauf verweisen.</li></ul></div>
   <div class="step"><span class="afb">III · Deutung (Absichten, Inhalte, Botschaften)</span><ul>
    <li>Was will der Fotograf? Worauf legt er besonderen Wert?</li>
    <li>Wie unterscheidet sich das Foto von anderen – persönlicher oder zeitbedingter Stil? → Genre zuordnen</li>
    <li>Gibt es eine tiefere Bedeutung, die sich erst auf den zweiten Blick erschließt?</li></ul></div>
   <div class="step"><span class="afb">IV · Vergleich</span><ul>
    <li><b>Intention:</b> Dokumentation oder Inszenierung? Information, Zweckinformation, Persönlichkeitsausdruck?</li>
    <li><b>Wie wird die Figur inszeniert?</b> Pose, Kleidung, Blick, Ort, Licht, Einstellungsgröße, Perspektive</li>
    <li><b>Gemeinsamkeiten</b> und <b>Unterschiede</b>, dann ein <b>Fazit</b></li></ul></div>
  </section>

  <section class="tx" id="ka2"><span class="tx-y">„→ Kompo-Skizze!“ stand am Handout</span><h2>Kompositionsskizze</h2>
   <ol class="ps-ul"><li>Rahmen im richtigen Format zeichnen (hoch/quer).</li><li>Nur die Hauptformen grob einzeichnen – kein Abzeichnen.</li><li>Wichtige Linien betonen: Senkrechte, Waagerechte, Diagonalen, Kompositionsfiguren (Dreieck, Kreis …), Drittel- oder Mittelachsen.</li><li>Helle und dunkle Flächen andeuten (z. B. schraffieren).</li><li>Augenführung mit nummerierten Pfeilen einzeichnen.</li><li>Kurz beschriften und im Text darauf verweisen („wie die Skizze zeigt …“).</li></ol>
   <div class="ku-skz-wrap">${kuSvgSkizze()}</div>
   <p class="meta" style="margin:0">Skizze zu Sander, „Handlanger“: <b style="color:var(--gold)">Gold</b> = Waagerechte (Last), Senkrechte (Körperachse), Dreieck (Arm in der Hüfte); <b style="color:var(--crown)">Rot</b> = Augenführung 1 Gesicht → 2 Ziegel und Hand → 3 Körperachse → 4 aufgestützte Hand; Schraffur = dunkler Hintergrund.</p>
  </section>

  <section class="tx" id="ka3"><span class="tx-y">zum Formulieren</span><h2>Satzbausteine</h2>
   ${kuRows([
    ["Einleitung","","Die vorliegende Schwarz-Weiß-Fotografie „…“ von … aus dem Jahr … im Hochformat zeigt …"],
    ["I · Eindrücke","","Auf den ersten Blick wirkt das Foto … · Die Stimmung ist … · Man meint, … zu spüren. · Der Blick fällt zuerst auf …"],
    ["II · Gestaltung","","Durch die Einstellungsgröße … wird … betont. · Die Froschperspektive lässt … mächtig erscheinen. · Das weiche (harte) Licht … · Der starke Hell-Dunkel-Kontrast hebt … hervor. · Die selektive Schärfe lenkt den Blick auf … · Die Senkrechte (Diagonale, Dreieckskomposition) erzeugt … · Die Augenführung verläuft von … über … zu … · Wie die Kompositionsskizze zeigt, …"],
    ["III · Deutung","","Der Fotograf möchte vermutlich … · Das Foto lässt sich der … Fotografie zuordnen, weil … · Auf den zweiten Blick … · Vor dem Hintergrund der Zeit (19..) …"],
    ["IV · Vergleich","","Während …, … · Im Gegensatz zu … · Beide Fotografien …, jedoch … · … dokumentiert, … inszeniert dagegen …"],
    ["Fazit","","Insgesamt zeigt sich, dass …"]])}
  </section>

  <section class="tx" id="ka4"><span class="tx-y">dein Handout – verbessert nach der Korrektur</span><h2>Muster: August Sander, „Handlanger“ (1928)</h2>
   <p class="meta">Foto 3 auf deinem Blatt „Auswahl zur Fotoanalyse“, verglichen mit Foto 1 (Newton). Alle Randbemerkungen der Lehrkraft sind eingearbeitet.</p>
   ${kuMl("Musteranalyse I–IV aufklappen",KU_ML_SANDER)}
  </section>

  <section class="tx" id="ka5"><span class="tx-y">Randbemerkungen am Handout · 16,5 von 25 P.</span><h2>Daraus lernst du</h2>
   ${kuFix("Teil „Arbeitsschritte der Fotoanalyse“","Aufgabe vor dem Schreiben genau lesen und genau das liefern, was verlangt ist.","durchgestrichen, Notiz „Achtung! Aufg.“")}
   ${kuFix("„Ein Arbeiter mit Ziegel-Trage blickt fest in die Kamera.“","„Ein junger Handlanger trägt auf den Schultern ein Brett mit Ziegelsteinen, hält es mit erhobenem Arm und …“","„Wer? Handlung genauer bestimmen“")}
   ${kuFix("Format und Raum fehlen","Hochformat; Figur im Vordergrund vor fast schwarzem Hintergrund, kaum Raumtiefe – und die Wirkung dazu.","„Format, Raum“, „Vordergrund/Hintergrund“")}
   ${kuFix("„Weiches Tageslicht … ohne Dramatik“","„SW-Foto mit starkem Hell-Dunkel-Kontrast: Gesicht und Ziegel leuchten vor dem dunklen Hintergrund.“","„SW-Foto, HD-Kontrast!“")}
   ${kuFix("„Mittlere Schärfe; Bauhintergrund bleibt erkennbar“","Genau hinsehen: Auf dem Blatt ist der Hintergrund fast schwarz und ohne erkennbaren Ort.","„Mittlere“ unterstrichen")}
   ${kuFix("Keine Abbildung, keine Kompositionsskizze","Skizze mit Senkrechte, Waagerechte, Dreieck und Augenführung zeichnen und im Text darauf verweisen.","„→ Kompo-Skizze!“, „Abb.?“")}
   ${kuFix("„Teil des Projekts ‚Menschen des 20. Jahrhunderts‘“ ohne Herkunft","Hintergrundwissen kennzeichnen bzw. die Quelle angeben.","„Quelle?“")}
   ${kuFix("„(Neue Sachlichkeit)“","Sander hier als <b>dokumentarische</b> Fotografie einordnen.","korrigiert zu „Dokum.“")}
   ${kuFix("„makellos gestyltes Mode-Ideal“","Genauer: „ein perfekt gestyltes Model, das im Herrenanzug kühl und unnahbar posiert“.","„ungenau“")}
  </section>`;
}

/* ---------- Probeklausur ---------- */
const KU_PROBE_EG=[["A","gross"],["B","amerik"],["C","halbtotale"],["D","totale"]];
const KU_ML_P1=`
 <p><b>a) Mikrofotografie einer Bettwanze → Entdeckung:</b> Mit dem Rasterelektronenmikroskop werden winzige Strukturen sichtbar, die das bloße Auge nie sehen könnte. Das Foto erweitert unseren visuellen Horizont und dient der Forschung.</p>
 <p><b>b) Pressefoto aus dem Vietnamkrieg → Information:</b> Es berichtet über ein reales Ereignis und soll die Öffentlichkeit informieren, damit sie sich ein Urteil bilden kann; als „Beweisstück“ rüttelt es auf.</p>
 <p><b>c) Urlaubsfoto vom Strand → Unterhaltung:</b> Es soll gefallen, an schöne Erlebnisse erinnern und beim Anschauen Freude machen.</p>
 <p><b>d) Werbefoto für ein Parfum → Zweckinformation:</b> Das Produkt wird schön und begehrenswert inszeniert, damit der Betrachter es kauft.</p>
 <p><b>e) Passfoto → Aufzeichnung:</b> Es hält sachlich, einfach und genormt fest, wie jemand aussieht (Erkennungsbild).</p>
 <p><b>f) Cindy Shermans „Untitled Film Still“ → Persönlichkeitsausdruck:</b> Die Künstlerin drückt mit einem inszenierten Selbstporträt ihre Sicht auf Frauenbilder aus Filmen aus.</p>`;
const KU_ML_P4=`
 <p><b>A – Groß (Großaufnahme):</b> Der Kopf füllt das Bild fast vollständig aus; Augen und Mimik stehen im Mittelpunkt, Umgebung ist kaum zu sehen. Wirkung: sehr nah, persönlich und emotional.</p>
 <p><b>B – Amerikanisch:</b> Die Person ist vom Scheitel bis zum Knie zu sehen und steht im Bildmittelpunkt; Haltung, Hände und Kleidung sind gut erkennbar, die Umgebung (Zaun) nur angeschnitten. Wirkung: präsent, Körpersprache im Fokus.</p>
 <p><b>C – Halbtotale:</b> Die Person ist ganz von Kopf bis Fuß zu sehen und füllt den Bildausschnitt; von der Umgebung sieht man nur wenig (Zaun, Teil der Bank). Wirkung: eher sachlich, objektiv.</p>
 <p><b>D – Totale:</b> Die Person ist ganz, aber klein inmitten einer weiten Umgebung mit Haus, Weg, Zaun, Bank und Baum zu sehen. Die Totale verschafft einen Überblick über das Geschehen. Wirkung: distanzierter Beobachter, objektiv; die Person erscheint als Teil der Landschaft.</p>`;
const KU_ML_P5A=`
 <p>Beide Fotos zeigen dasselbe Motiv in warmem Abendlicht: links im Vordergrund eine rote Tulpe, im Hintergrund eine Person auf einem Feld vor einem Baum. Sie unterscheiden sich vor allem durch die <b>selektive Schärfe</b> (geringe Schärfentiefe durch große Blende).</p>
 <p>In <b>Foto 1</b> ist der Vordergrund mit der Tulpe scharf, der Hintergrund mit der Person unscharf. Die Blume tritt plastisch hervor und wird zum Hauptmotiv; die Person wirkt fern und verschwommen, wie eine Erinnerung. Die Stimmung ist ruhig und verträumt.</p>
 <p>In <b>Foto 2</b> ist es umgekehrt: Der Hintergrund mit der Person ist scharf, die Tulpe verschwimmt. Der Blick geht an der Blume vorbei zur Person, die jetzt Hauptmotiv ist; die unscharfe Tulpe rahmt das Bild und schafft Tiefe – man hat den Eindruck, heimlich durch das Gras zu beobachten.</p>
 <p>Durch die Wahl der Schärfeebene bestimmt der Fotograf, was wichtig ist und wohin der Betrachter schaut.</p>`;
const KU_ML_P6=`
 <p><b>Einleitung:</b> Die Schwarz-Weiß-Fotografie „Wanderarbeiterin“ (bekannt als „Migrant Mother“) von Dorothea Lange entstand 1936 im Hochformat. Sie zeigt eine Mutter mit ihren Kindern in einem Lager von Erntehelfern in Kalifornien während der Weltwirtschaftskrise <i>(Hintergrundwissen)</i>.</p>
 <p><b>I. Eindrücke:</b> Eine Frau mittleren Alters sitzt eng umringt von ihren Kindern. Zwei Kinder lehnen sich links und rechts an ihre Schultern und wenden ihre Gesichter vom Betrachter ab; auf ihrem Schoß liegt ein in Tücher gewickeltes Baby. Die Frau hat eine Hand ans Kinn gelegt, die Stirn gerunzelt, und blickt sorgenvoll an der Kamera vorbei ins Leere. Ihre Kleidung ist abgetragen. Das Foto wirkt bedrückend, erschöpft und hoffnungslos, zugleich zeigt die Frau Stärke und Würde. Man meint, Staub, Kälte und Hunger zu spüren, die Enge und eine angespannte Stille. Besonders hervorgehoben sind das Gesicht der Mutter und ihre Hand.</p>
 <p><b>II. Bildaufbau und Gestaltungsmittel:</b> Das <b>Hochformat</b> betont die aufrechte Mutter als zentrale Figur. In der Einstellungsgröße <b>Nah</b> ist sie vom Kopf bis zum Schoß zu sehen; der enge Ausschnitt lässt kaum Umgebung zu und rückt uns nah an die Familie heran – das wirkt emotional und subjektiv. Die <b>Normalperspektive</b> auf Augenhöhe schafft Gleichwertigkeit und Mitgefühl. <b>Raum:</b> Die Figuren füllen das Bild, dahinter ist nur eine Zeltplane zu erahnen; es gibt kaum Raumtiefe, das verstärkt die Enge. Das <b>weiche, gestreute Licht</b> ohne harte Schatten zeigt feine Grauabstufungen und die Texturen von Haut und Stoff; es wirkt ruhig und ernst. Das <b>SW-Foto</b> wirkt sachlich, dokumentarisch und zeitlos. Das Gesicht der Mutter liegt scharf im Fokus. <b>Komposition:</b> Die Figuren bilden ein <b>Dreieck</b> – der Kopf der Mutter an der Spitze, die Kinder links und rechts als Basis. Das wirkt stabil und schützend und erinnert an Bilder einer Madonna mit Kindern. Der senkrechte Unterarm führt zum Gesicht. <b>Augenführung:</b> vom hellen, sorgenvollen Gesicht (1) über die Hand und den Arm (2) zu den abgewandten Kindern (3) und zum Baby (4) und wieder zurück zum Gesicht.</p>
 <p><b>III. Deutung:</b> Lange will die Not der Wanderarbeiter in der Weltwirtschaftskrise sichtbar machen und Mitgefühl und Hilfe auslösen. Das Foto gehört zur <b>sozialdokumentarischen Fotografie</b>: Es ist keine neutrale Sachaufnahme, sondern eine Tendenzaufnahme mit dem Wunsch nach sozialer Veränderung. Weil die Kinder ihre Gesichter abwenden, wird die Mutter zum einzigen „Gesicht“ der Armut; die Madonnen-Komposition überhöht sie zur Symbolfigur für Sorge, Verantwortung und Würde. Das Bild wurde zur Ikone der Großen Depression. Auf den zweiten Blick ist auch dieses Dokument gestaltet: Lange näherte sich mit mehreren Aufnahmen und wählte Ausschnitt und Moment; später ließ sie einen Daumen am Bildrand wegretuschieren – auch hier zeigt sich die scheinbare Objektivität.</p>
 <p><b>IV. Vergleich mit Cindy Sherman, „Untitled Film Still #58“ (1980):</b> Beide Fotos sind schwarz-weiß, zeigen eine Frau in der Einstellung Nah, und in beiden geht ihr Blick aus dem Bild hinaus statt zur Kamera. Die <b>Intention</b> ist aber gegensätzlich: Lange dokumentiert eine reale Frau in realer Not (Information, Aufrütteln). Sherman inszeniert sich selbst als erfundene Filmfigur (Persönlichkeitsausdruck), um die Klischees von Frauen in Filmen der 1950er- und 60er-Jahre sichtbar zu machen. <b>Inszenierung der Figur:</b> Langes Mutter trägt Alltagskleidung, sitzt eingeengt von ihren Kindern, das Licht ist weich, die Perspektive auf Augenhöhe. Sherman ist Regisseurin, Darstellerin und Fotografin zugleich: Frisur, Kostüm und der im Wind wehende Netzschal sind ausgewählt, ihr Blick geht dramatisch nach oben, die <b>Froschperspektive</b> lässt das Hochhaus hinter ihr bedrohlich in den Himmel ragen, das Querformat erinnert an ein Filmbild. <b>Wirkung:</b> Lange berührt durch Echtheit und Nähe. Sherman wirkt rätselhaft und filmisch: Man fragt sich, was gleich passiert – eine Geschichte ohne Film. <b>Fazit:</b> Dokumentation und Inszenierung stehen sich gegenüber, doch beide Fotografinnen gestalten ihre Figur bewusst und lenken damit unsere Gefühle.</p>`;

function kukProbe(el){
  el.innerHTML=`
  <p class="meta" style="margin:0">Selbst erstellte Probeklausur nach dem Muster deines Tests, dazu eine Fotoanalyse. Erst auf Papier schreiben, dann die Musterlösungen aufklappen. Punkte nur zur Orientierung.</p>
  <h2 class="sec">Aufgaben</h2>
  <div class="aufg"><h3>1. Ordnen Sie die Fotografien je einer Aufgabe der Fotografie zu und begründen Sie. <span class="be">12 P.</span></h3><p>a) Mikrofotografie einer Bettwanze · b) Pressefoto aus dem Vietnamkrieg · c) Urlaubsfoto vom Strand · d) Werbefoto für ein Parfum · e) Passfoto · f) Cindy Sherman: Untitled Film Still #58</p></div>
  <div class="aufg"><h3>2. Erklären Sie die Begriffe Unterhaltung, Information und Manipulation in Bezug auf die Fotografie. <span class="be">6 P.</span></h3></div>
  <div class="aufg"><h3>3. „Die Fotografie hat nur eine scheinbare Objektivität“ (nach Gisèle Freund). Nehmen Sie Stellung. <span class="be">6 P.</span></h3></div>
  <div class="aufg"><h3>4. Bestimmen Sie die Einstellungsgrößen der Abbildungen A–D und begründen Sie. <span class="be">8 P.</span></h3>
   <div class="ku-eg-grid">${KU_PROBE_EG.map(([b,id])=>`<figure class="ku-eg"><div class="ku-ph">${kuSvgEG(id)}</div><figcaption>${b}</figcaption></figure>`).join("")}</div></div>
  <div class="aufg"><h3>5. a) Vergleichen Sie Foto 1 und Foto 2 hinsichtlich der Schärfe und ihrer Wirkung. <span class="be">6 P.</span> b) Beschreiben Sie Licht, Farbe und Kontraste in Foto 2 und erläutern Sie ihre Wirkung. <span class="be">8 P.</span></h3>
   <div class="ku-sch two"><figure><div class="ku-ph">${kuSvgSchaerfe("vg")}</div><figcaption><b>Foto 1</b></figcaption></figure><figure><div class="ku-ph">${kuSvgSchaerfe("hg")}</div><figcaption><b>Foto 2</b></figcaption></figure></div></div>
  <div class="aufg"><h3>6. Analysieren Sie die Fotografie „Wanderarbeiterin“ von Dorothea Lange (1936) in den Schritten I–III und fertigen Sie eine Kompositionsskizze an. Vergleichen Sie das Foto anschließend mit Cindy Shermans „Untitled Film Still #58“ (1980) bezüglich der Intention und der Inszenierung der Figur. <span class="be">30 P.</span></h3><p class="meta">Foto 5 und Foto 7 auf deinem Blatt „Auswahl zur Fotoanalyse“.</p></div>

  <h2 class="sec">Musterlösungen</h2>
  ${kuMl("Aufgabe 1 · Aufgaben zuordnen",KU_ML_P1)}
  ${kuMl("Aufgabe 2 · Unterhaltung, Information, Manipulation",KU_ML_A2)}
  ${kuMl("Aufgabe 3 · Scheinbare Objektivität",KU_ML_A3)}
  ${kuMl("Aufgabe 4 · Einstellungsgrößen",KU_ML_P4)}
  ${kuMl("Aufgabe 5a · Schärfe",KU_ML_P5A)}
  ${kuMl("Aufgabe 5b · Licht, Farbe, Kontraste",KU_ML_LICHT)}
  ${kuMl("Aufgabe 6 · Fotoanalyse Lange + Vergleich Sherman",KU_ML_P6+`<p><i>Kompositionsskizze: Hochformat; großes Dreieck von den Kindern unten zum Kopf der Mutter; senkrechter Unterarm zum Gesicht; Gesicht als hellster Punkt; Pfeile 1 Gesicht → 2 Hand → 3 Kinder → 4 Baby.</i></p>`)}`;
}

/* ---------- Üben ---------- */
function kukUeben(el){
  let mode=store.get("kuMode","karten");
  el.innerHTML=`<div class="seg ps-four"><button type="button" data-m="karten">Karten</button><button type="button" data-m="quiz">Quiz</button><button type="button" data-m="eg">Einstellung?</button><button type="button" data-m="zu">Zuordnen</button></div><div id="kuUe" class="view" style="gap:14px"></div>`;
  const set=m=>{mode=m;store.set("kuMode",m);el.querySelectorAll(".seg button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.m===m));({karten:kuKarten,quiz:kuQuiz,eg:kuEGTrainer,zu:kuZuordnen}[m]||kuKarten)(kuEl("kuUe"))};
  el.querySelectorAll(".seg button").forEach(b=>b.onclick=()=>set(b.dataset.m));
  set(mode);
}
function kuKarten(box){
  const deckSel=store.get("kuDeck","mittel");
  const DECK={
    mittel:()=>[
      ...KU_EG.map(e=>({g:"Einstellungsgröße",t:`${kuEGn(e.id)}: Was sieht man, wie wirkt es?`,d:`${e.zeigt}.<br><b>Wirkung:</b> ${e.wirk}. <span class="meta">(${e.dist})</span>`})),
      ...KU_PERSP.map(p=>({g:"Perspektive",t:`${p.n}: Wirkung?`,d:`${p.wo}.<br><b>Wirkung:</b> ${p.wirk}.`})),
      {g:"Schärfe",t:"Totale Schärfe: Wirkung?",d:"alles scharf (kleine Blende, große Schärfentiefe) → unbestechlich, informativ, steril"},
      {g:"Schärfe",t:"Selektive Schärfe: Wirkung?",d:"nur eine Ebene scharf (große Blende) → reizvoll; das Wichtige tritt plastisch hervor, der Blick wird gelenkt"},
      {g:"Schärfe",t:"Bewegungsunschärfe: Wirkung?",d:"lange Belichtungszeit → Eindruck von Aktion, Dynamik"},
      {g:"Brennweite",t:"Weitwinkel und Tele: Wirkung?",d:"Weitwinkel: weiter Ausschnitt, wirkt aufgeklappt (Fischauge) · Tele: Entferntes groß, Ebenen eng gestaffelt"},
      ...KU_LICHT.slice(0,4).map(r=>({g:"Licht",t:`${r[0]}: Merkmale und Wirkung?`,d:`${r[1]} → ${r[2]}`})),
      ...KU_FARBE.map(r=>({g:"Farbe / Kontrast",t:`${r[0]}: Wirkung?`,d:`${r[1]} → ${r[2]}`})),
      ...KU_KOMPO.map(([k,n,w])=>({g:"Komposition",t:`${n}: Wirkung?`,d:w}))],
    aufg:()=>KU_AUFG.map(a=>({g:"Aufgabe der Fotografie",t:`${a.n}`,d:`${a.kurz}.<br><b>Ziel:</b> ${a.ziel}.<br><b>Beispiele:</b> ${a.arten}.`})),
    genre:()=>KU_GREL.map(g=>({g:"Genre",t:g.n,d:`${g.m.filter(x=>!x.startsWith("Ergänzung")).join("; ")}.<br><b>Fotokünstler:</b> ${g.kue}`})),
    begr:()=>KU_BEGRIFFE.filter(b=>b.k).map(b=>({g:b.g,t:b.t,d:b.d}))};
  let deck=shuffle(DECK[deckSel]()),total=deck.length,known=0,flip=false;
  const draw=()=>{
    const sel=`<div class="seg ps-four"><button type="button" data-d="mittel" aria-pressed="${deckSel==="mittel"}">Mittel</button><button type="button" data-d="aufg" aria-pressed="${deckSel==="aufg"}">Aufgaben</button><button type="button" data-d="genre" aria-pressed="${deckSel==="genre"}">Genres</button><button type="button" data-d="begr" aria-pressed="${deckSel==="begr"}">Begriffe</button></div>`;
    if(!deck.length){box.innerHTML=sel+`<div class="done"><span class="big">${total} / ${total}</span><p>Alle Karten gewusst!</p><button class="btn primary" type="button" id="kuAgain">Nochmal</button></div>`;kuEl("kuAgain").onclick=()=>kuKarten(box);bindSel();return}
    const c=deck[0];
    box.innerHTML=sel+`<div class="progress"><span>${known} von ${total} gewusst</span><span>noch ${deck.length}</span></div><div class="bar"><i style="width:${known/total*100}%"></i></div>
     <div class="flash" id="kuFc" role="button" tabindex="0" aria-label="Karte umdrehen"><span class="kind">${c.g}</span><div class="front" style="font-size:${c.t.length>40?"1.3rem":"1.6rem"}">${c.t}</div>${flip?`<div class="back"><p>${c.d}</p></div>`:'<span class="hint">Erst selbst antworten, dann tippen zum Umdrehen</span>'}</div>
     ${flip?'<div class="btns"><button class="btn no" type="button" id="kuNo">Nochmal</button><button class="btn yes" type="button" id="kuYes">Gewusst</button></div>':""}`;
    bindSel();
    const fc=kuEl("kuFc"),turn=()=>{flip=!flip;draw()};
    fc.onclick=turn;fc.onkeydown=e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();turn()}};
    if(flip){kuEl("kuYes").onclick=()=>{deck.shift();known++;flip=false;draw()};
             kuEl("kuNo").onclick=()=>{const k=deck.shift();deck.splice(Math.min(3,deck.length),0,k);flip=false;draw()}}
  };
  const bindSel=()=>box.querySelectorAll("[data-d]").forEach(b=>b.onclick=()=>{store.set("kuDeck",b.dataset.d);kuKarten(box)});
  draw();
}
function kuQuizRun(box,items,bestKey,render){
  let i=0,pts=0,lock=false;
  const draw=()=>{
    if(i>=items.length){const best=Math.max(store.get(bestKey,0),pts);store.set(bestKey,best);
      box.innerHTML=`<div class="done"><span class="big">${pts} / ${items.length}</span><p>${pts>=items.length*0.8?"Super, das sitzt!":pts>=items.length*0.5?"Gut! Schau dir die Fehler in den Reitern nochmal an.":"Lies Theorie und Mittel nochmal durch und versuch es dann erneut."}</p><p class="tip">Bestwert: ${best} / ${items.length}</p><button class="btn primary" type="button" id="kuAgain">Nochmal</button></div>`;
      kuEl("kuAgain").onclick=()=>render(box);return}
    const it=items[i];
    box.innerHTML=`<div class="progress"><span>Frage ${i+1} von ${items.length}</span><span>${pts} richtig</span></div><div class="bar"><i style="width:${i/items.length*100}%"></i></div>
     <div class="q">${it.pre||""}<div class="ask">${it.ask}</div><div class="opts">${it.opts.map((o,j)=>`<button type="button" data-j="${j}">${o.h}</button>`).join("")}</div><div id="kuEx"></div></div>`;
    box.querySelector(".opts").onclick=e=>{const b=e.target.closest("button");if(!b||lock)return;lock=true;
      const j=+b.dataset.j;if(it.opts[j].r)pts++;
      box.querySelectorAll(".opts button").forEach((x,k)=>{if(it.opts[k].r)x.classList.add("right");else if(k===j)x.classList.add("wrong")});
      kuEl("kuEx").innerHTML=(it.after?`<div class="expl">${it.after}</div>`:"")+`<button class="btn primary" type="button" id="kuNx" style="width:100%;margin-top:10px">${i+1<items.length?"Weiter":"Ergebnis anzeigen"}</button>`;
      kuEl("kuNx").onclick=()=>{lock=false;i++;draw()}};
  };draw();
}
function kuQuiz(box){
  const items=shuffle(KU_QUIZ).slice(0,10).map(q=>({ask:q.q,after:q.x,opts:shuffle(q.o.map((t,i)=>({h:t,r:i===q.r})))}));
  kuQuizRun(box,items,"kuQuizBest",kuQuiz);
}
function kuEGTrainer(box){
  const ids=shuffle([...KU_EG.map(e=>e.id),...shuffle(KU_EG.map(e=>e.id)).slice(0,2)]);
  const items=ids.map(id=>{const e=KU_EG.find(x=>x.id===id),v=Math.floor(Math.random()*KU_CROP[id].length);
    return {pre:`<div class="ku-ph big">${kuSvgEG(id,v)}</div>`,ask:`<span class="ku-ask">Welche Einstellungsgröße?</span>`,
      after:`<b>${kuEGn(id)}:</b> ${e.zeigt}. <b>Wirkung:</b> ${e.wirk}.`,opts:KU_EG.map(x=>({h:kuEGn(x.id),r:x.id===id}))}});
  kuQuizRun(box,items,"kuEGBest",kuEGTrainer);
}
function kuZuordnen(box){
  const a=shuffle(KU_ZU_A).slice(0,6).map(([t,id,x])=>({pre:'<p class="meta" style="margin:0">Welche Aufgabe der Fotografie?</p>',ask:`<span class="ku-ask">${t}</span>`,
    after:`<b>${kuA(id).n}:</b> ${x}`,opts:KU_AUFG.map(o=>({h:o.n,r:o.id===id}))}));
  const g=shuffle(KU_ZU_G).slice(0,4).map(([t,gi,x])=>({pre:'<p class="meta" style="margin:0">Welches Genre?</p>',ask:`<span class="ku-ask">${t}</span>`,
    after:`<b>${KU_GENRE[gi].n}:</b> ${x}`,opts:KU_GREL.map(o=>({h:o.n,r:o===KU_GENRE[gi]}))}));
  kuQuizRun(box,shuffle([...a,...g]),"kuZuBest",kuZuordnen);
}

/* ---------- Merken ---------- */
const KU_MERK=`<table class="mtab"><tbody>
<tr class="ph"><td colspan="2">Aufgaben der Fotografie („AU, PIZza Essen!“)</td></tr>
<tr><td>Aufzeichnung</td><td>sachlich festhalten · Passfoto, Reproduktion</td></tr>
<tr><td>Unterhaltung</td><td>Vergnügen · Landschaft, Urlaub, Pin-up</td></tr>
<tr><td>Persönlichkeit</td><td>eigene Sicht ausdrücken · Fotokunst</td></tr>
<tr><td>Information</td><td>sachlich unterrichten, Urteil ermöglichen · Pressefoto, Lehrbuch</td></tr>
<tr><td>Zweckinfo</td><td>begehrenswert machen → Verkauf, Idee · Werbung, Propaganda</td></tr>
<tr><td>Entdeckung</td><td>Kamera dem Auge überlegen · Makro, Mikro, Röntgen, Astro</td></tr>
<tr class="ph"><td colspan="2">Teil III · Subjektiv – Objektiv – Information</td></tr>
<tr><td>objektiv?</td><td>Kamera zeichnet naturalistisch auf → „documentum“, Beweisstück (Sontag)</td></tr>
<tr><td>subjektiv!</td><td>Fotograf wählt Motiv, Standort, Ausschnitt, Moment, Technik · Betrachter deutet · Kontext lenkt</td></tr>
<tr><td>Freund</td><td>nur „scheinbare Objektivität“ · ein Motiv hat viele Bilder</td></tr>
<tr><td>Ebenen</td><td>Information · Ästhetik · Emotion</td></tr>
<tr class="ph"><td colspan="2">Einstellungsgrößen (meist Personen!)</td></tr>
<tr><td>Detail</td><td>nur Augen, Mund, Hand · enthüllend, sehr emotional</td></tr>
<tr><td>Groß</td><td>Kopf bildfüllend · Mimik, emotional</td></tr>
<tr><td>Nah</td><td>Kopf bis Brust (⅓) · subjektiv, emotional</td></tr>
<tr><td>Amerikanisch</td><td>Scheitel bis Knie · Haltung, Gestik</td></tr>
<tr><td>Halbnah</td><td>ca. ⅔ + nahe Umgebung/Gruppe · eher objektiv</td></tr>
<tr><td>Halbtotale</td><td>ganze Person füllt das Bild · objektiv</td></tr>
<tr><td>Totale</td><td>ganze Person + viel Umgebung · Überblick, distanziert</td></tr>
<tr><td>Weite</td><td>Landschaft, Person winzig · Weite</td></tr>
<tr class="ph"><td colspan="2">Perspektive · Schärfe · Licht</td></tr>
<tr><td>Normal</td><td>Augenhöhe → gleichwertig, vertraut</td></tr>
<tr><td>Frosch</td><td>von unten → mächtig, bedrohlich, erhaben</td></tr>
<tr><td>Vogel</td><td>von oben → klein, schwach, einsam</td></tr>
<tr><td>Schräg</td><td>gekippt → irreal, dramatisch</td></tr>
<tr><td>Schärfe</td><td>total: informativ, steril · selektiv: hebt hervor, lenkt · Bewegung: Aktion</td></tr>
<tr><td>Licht</td><td>hart: Schlagschatten, grell, dramatisch · weich: diffus, ruhig · Seite: plastisch · Gegen: Silhouette</td></tr>
<tr><td>Farbe</td><td>SW: sachlich, zeitlos · warm: nah, lebendig · kalt: distanziert, ruhig · HD-Kontrast: Spannung, Blickfang</td></tr>
<tr class="ph"><td colspan="2">Komposition</td></tr>
<tr><td>Linien</td><td>waagerecht: Ruhe · senkrecht: Kraft · diagonal: Dynamik</td></tr>
<tr><td>Figuren</td><td>Dreieck: Spannung · Kreis: Harmonie · Rechteck: Stabilität · Spirale: Bewegung</td></tr>
<tr><td>Regeln</td><td>Drittelregel · Goldener Schnitt 1 : 1,618 · Symmetrie: ruhig</td></tr>
<tr class="ph"><td colspan="2">Genres (ohne Fotomontage, Abstrakt)</td></tr>
<tr><td>Inszeniert</td><td>Fotograf arrangiert · Sherman, Michals, Skoglund, Mili</td></tr>
<tr><td>Sozialdok.</td><td>Armut, Tendenz, authentisch · Hine, Evans (Lange)</td></tr>
<tr><td>Straight</td><td>unmanipuliert, streng · Weston</td></tr>
<tr><td>Pictorialismus</td><td>wie Gemälde, unscharf · Eugene, Kühn</td></tr>
<tr><td>Neues Sehen</td><td>Gegenstand, Bauhaus · Rodtschenko, Moholy-Nagy, Feininger</td></tr>
<tr class="ph"><td colspan="2">Fotoanalyse</td></tr>
<tr><td>I</td><td>Eindrücke: wer, was, wo · Stimmung · Blickfang</td></tr>
<tr><td>II</td><td>Format · Einstellung · Perspektive · Raum · Licht · SW · Kontrast · Schärfe · Komposition · Augenführung + Skizze</td></tr>
<tr><td>III</td><td>Absicht · Genre · Botschaft · zweiter Blick</td></tr>
<tr><td>IV</td><td>Intention · Inszenierung der Figur · Wirkung · Fazit</td></tr>
</tbody></table><p class="tip" style="margin:10px 0 0">Immer: Mittel benennen → am Bild zeigen → Wirkung erklären.</p>`;

/* ---------- Module für die Navigation ---------- */
if(typeof PS_ICON!=="undefined")Object.assign(PS_ICON,{
  ku_cam:`<svg viewBox="0 0 24 24"><path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>`,
  ku_real:`<svg viewBox="0 0 24 24"><rect x="3" y="5" width="12" height="10" rx="1"/><rect x="9" y="9" width="12" height="10" rx="1"/></svg>`,
  ku_frame:`<svg viewBox="0 0 24 24"><path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4"/><circle cx="12" cy="10" r="2.5"/><path d="M7.5 18c.8-2.6 2.5-4 4.5-4s3.7 1.4 4.5 4"/></svg>`,
  ku_genre:`<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="15" rx="1.5"/><path d="M3 16l5-5 4 4 3-3 6 6"/><circle cx="16" cy="8.5" r="1.5"/></svg>`,
  ku_ana:`<svg viewBox="0 0 24 24"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5L21 21M8 10.5h5M10.5 8v5"/></svg>`
});
if(typeof MODS!=="undefined")Object.assign(MODS,{
  kuU:{tabs:[["einf","Einführung","ku_cam"],["wirk","Wirklichkeit","ku_real"],["gestalt","Gestaltung","ku_frame"],["genres","Genres","ku_genre"],["begriffe","Begriffe","lex"]],
    titles:{einf:["Einführung Fotografie","Definition, Aufgaben, Arten, Kommunikation"],wirk:["Fotografie und Wirklichkeit","Wirkungsebenen, scheinbare Objektivität"],gestalt:["Gestaltung","Einstellungsgrößen, Perspektive, Licht, Komposition"],genres:["Genres","7 Genres und die Fotos der Auswahl"],begriffe:["Begriffe",`${KU_BEGRIFFE.length} Fachbegriffe`]},
    views:{einf:kuuEinf,wirk:kuuWirk,gestalt:kuuGestalt,genres:kuuGenres,begriffe:kuBegriffe},
    merk:["Das Wichtigste auf einen Blick","Fotografie",KU_MERK]},
  kuK:{tabs:[["ablauf","Ablauf","ablauf"],["theorie","Theorie","ku_cam"],["mittel","Mittel","ku_frame"],["analyse","Analyse","ku_ana"],["probe","Probe","probe"],["ueben","Üben","ueben"]],
    titles:{ablauf:["Was drankommt","Themen, Testaufgaben, Checkliste"],theorie:["Theorie","Teil III, Aufgaben, Genres"],mittel:["Gestaltungsmittel","Einstellung, Perspektive, Licht, Farbe"],analyse:["Fotoanalyse","I–IV, Skizze, Muster"],probe:["Probeklausur","6 Aufgaben mit Musterlösung"],ueben:["Üben","Karten, Quiz, Einstellung, Zuordnen"]},
    views:{ablauf:kukAblauf,theorie:kukTheorie,mittel:kukMittel,analyse:kukAnalyse,probe:kukProbe,ueben:kukUeben},
    merk:["Das Wichtigste auf einen Blick","Fotografie",KU_MERK]}
});
