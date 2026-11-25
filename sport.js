/* =========================================================
   Klausuren-App: Sport · Trainingslehre (Klausur Do 26.11.2026)
   Trainingsmethoden · Superkompensation · Belastungssteigerung
   Wird NACH deutsch.js und VOR kunst.js / klausur.js geladen und ergänzt MODS (spU / spK).
   Klausurrelevant laut Lehrer (roter Zettel):
   1) die 4 Trainingsmethoden (meiste Punkte) · 2) Superkompensation mit Abbildung
   3) allmähliche, sprunghafte und variierende Belastungssteigerung
   Erwartungshorizonte aus den korrigierten Blättern:
   Aufgabe 4 (Trainingsmethoden): je Methode typische Belastungsmerkmale – Trainingseffekt
   (max. 6 P.: Dauer 2, Wiederholung 2, extensiv 1, intensiv 1) – Anwendung
   Aufgabe 5 (Belastungssteigerung): Nennen 3 P. + rote Randfragen je Form
   ========================================================= */

/* ---------- Die vier Trainingsmethoden ----------
   bm = typische Belastungsmerkmale · te = Trainingseffekt (tp Punkte) · an = Anwendung */
const SP_METH=[
 {id:"dauer",n:"Dauermethode",c:"--psy",bsp:"Ausdauerlauf, z. B. 45 min locker am Stück",
  kurz:"ein einziger Dauerreiz ohne Pause",
  int:"gering",dauer:"hoch: über 30 min",dichte:"keine Pause",umfang:"hoch",
  bm:"ein einziger Dauerreiz <b>ohne Pause</b> · <b>geringe Intensität</b> · dafür <b>hohe Reizdauer</b> (über 30 min) → <b>hoher Umfang</b> · Fettstoffwechseltraining: Puls 140–160, jeden Tag möglich · für die Grundlagenausdauer auch höhere Intensität (über der Dauerleistungsgrenze, Unterhalten nur noch mit Mühe), dann längere Erholung, 2 × pro Woche reicht",
  te:"positive Auswirkungen auf das <b>Herz-Kreislauf-System</b> (größeres Herzvolumen, stärkere Herzwände, bessere Kapillarisierung, größere Glykogenspeicher) und auf den <b>Fettstoffwechsel</b>",tp:2,
  an:"Übergewichtige (Gewichtsreduktion) · Ausgleich bei beruflich bedingtem Bewegungsmangel · Basistraining für alle weiteren sportlichen Leistungen → die grundlegende Trainingsmethode überhaupt",
  merk:"„die grundlegende Trainingsmethode überhaupt“",t:["Ausdauerlauf","gering","über 30 min","keine","Herz-Kreislauf + Fettstoffwechsel"]},
 {id:"wdh",n:"Wiederholungsmethode",c:"--crown",bsp:"Krafttraining, z. B. 3 Sätze Bankdrücken",
  kurz:"kurze, sehr intensive Belastungen mit (fast) vollständiger Erholung",
  int:"hoch",dauer:"gering",dichte:"gering: lange Pausen, die der vollständigen Erholung dienen",umfang:"gering",
  bm:"<b>hohe Intensität</b> · dafür <b>geringe Reizdauer</b> · <b>geringe Reizdichte</b>: lange Pausen bis zur (beinahe) <b>vollständigen Erholung</b> → die hohe Intensität bleibt bis zum Ende des Trainings",
  te:"<b>Anpassungen innerhalb des Muskels</b>: Muskelaufbau und Kraftzuwachs",tp:2,
  an:"Fitnesssportler (Muskelaufbau, Kraftzuwachs) · Fitnessbewusste (Straffung) · Haltungsschwächen (Kräftigung abgeschwächter Muskeln) · Ausgleich zu einseitigen Belastungen in Beruf und Sport → für ein umfassendes Körpertraining unumgänglich",
  merk:"„die Krafttrainingsmethode schlechthin“",t:["Krafttraining","hoch","kurz","lang, vollständige Erholung","Muskel"]},
 {id:"ext",n:"Extensive Intervallmethode",c:"--parl",bsp:"Mittelstrecke, z. B. Läufe über 300–1500 m",
  kurz:"viele längere, lockere Belastungen mit kurzen lohnenden Pausen",
  int:"gering: 30–50 %",dauer:"hoch: 1–15 min pro Intervall",dichte:"hoch: kurze, lohnende Pausen (kürzer als bei der intensiven)",umfang:"hoch",
  bm:"Wechsel von Belastung und <b>unvollständiger Erholung</b> (lohnende Pause: weiter bei Puls 120) · <b>hoher Umfang</b>, <b>geringe Intensität</b> (ca. 30–50 % der maximalen Kraft) · Belastungsdauer <b>60 s bis 15 min</b> · Pausen <b>kürzer</b> als bei der intensiven",
  te:"wie bei der Dauermethode vor allem <b>Herz-Kreislauf</b>",tp:1,
  an:"ergänzend zur Dauermethode · bei Leistungsstagnation neue Reize",
  merk:"extensiv = lang und locker",t:["300–1500 m","gering (30–50 %)","1–15 min","kurz, bis Puls 120","Herz-Kreislauf"]},
 {id:"int",n:"Intensive Intervallmethode",c:"--gold",bsp:"Kurzstrecke, z. B. Läufe über 100 m oder 200 m",
  kurz:"kurze, harte Belastungen mit etwas längeren lohnenden Pausen",
  int:"mittel bis hoch",dauer:"gering",dichte:"lohnende Pausen, aber länger als bei der extensiven",umfang:"geringer",
  bm:"Wechsel von Belastung und <b>unvollständiger Erholung</b> (weiter bei Puls 120) · Belastungsreiz <b>relativ kurz</b>, aber von <b>höherer Intensität</b> (mittel bis hoch) · Pausen <b>länger</b> als bei der extensiven",
  te:"Verbesserung der <b>anaeroben Kapazität</b> = Energiegewinnung ohne Sauerstoff",tp:1,
  an:"ergänzend zur Wiederholungsmethode, z. B. im Zirkeltraining · besonders bei Leistungsstagnation neue Reize",
  merk:"intensiv = kurz und hart",t:["100/200 m","mittel bis hoch","kurz","länger, bis Puls 120","anaerob"]}
];

/* ---------- Fachbegriffe ----------
   k: 1 = gehört zu den drei klausurrelevanten Themen, 0 = Hintergrund */
const SP_BEGRIFFE=[
 {g:"Trainingsmethoden",t:"Trainingsmethode",d:"Planmäßiges Verfahren im Training. Die Methoden unterscheiden sich durch ihr jeweils spezifisches <b>Belastungsgefüge</b> (Intensität, Reizdauer, Reizdichte, Umfang). In der Klausur zu jeder Methode: typische Belastungsmerkmale, Trainingseffekt, Anwendung.",k:1},
 {g:"Trainingsmethoden",t:"Dauermethode",d:"Ein einziger Dauerreiz <b>ohne Pause</b>, geringe Intensität, dafür hohe Reizdauer (über 30 min) → hoher Umfang. Trainingseffekt: Herz-Kreislauf-System und Fettstoffwechsel. Beispiel: Ausdauerlauf.",k:1},
 {g:"Trainingsmethoden",t:"Wiederholungsmethode",d:"<b>Hohe Intensität</b>, geringe Reizdauer, geringe Reizdichte: lange Pausen, die der <b>vollständigen Erholung</b> dienen. Trainingseffekt: Anpassungen im Muskel (Kraft, Muskelaufbau). Beispiel: Krafttraining.",k:1},
 {g:"Trainingsmethoden",t:"Intervallmethode",d:"Regelmäßiger Wechsel von Belastung und Erholung. Die Pause ist <b>unvollständig</b> („lohnende Pause“): Weiter geht es, sobald der Puls auf ca. 120 Schläge/min gefallen ist.",k:1},
 {g:"Trainingsmethoden",t:"Extensive Intervallmethode",d:"Hoher Umfang, geringe Intensität (30–50 %), lange Intervalle (60 s bis 15 min); Pausen kürzer als bei der intensiven Methode. Trainingseffekt: Herz-Kreislauf. Beispiel: Mittelstrecke 300–1500 m.",k:1},
 {g:"Trainingsmethoden",t:"Intensive Intervallmethode",d:"Kurzer Belastungsreiz mit mittlerer bis hoher Intensität; Pausen länger als bei der extensiven Methode. Trainingseffekt: anaerobe Kapazität. Beispiel: Kurzstrecke 100/200 m.",k:1},
 {g:"Trainingsmethoden",t:"Lohnende Pause (Ein-Drittel-Pause)",d:"Unvollständige Pause der Intervallmethode. Man erholt sich im ersten Drittel der Erholungszeit am schnellsten – deshalb geht es weiter, sobald der Puls auf ca. <b>120/min</b> gefallen ist.",k:1},
 {g:"Trainingsmethoden",t:"Trainingseffekt",d:"Die Wirkung einer Methode auf den Körper: Dauer → Herz-Kreislauf und Fettstoffwechsel, Wiederholung → Muskel, extensiv → Herz-Kreislauf, intensiv → anaerobe Kapazität. In der alten Aufgabe 4 gab es dafür max. 6 Punkte.",k:1},
 {g:"Trainingsmethoden",t:"Anaerobe Kapazität",d:"Fähigkeit zur Energiegewinnung <b>ohne Sauerstoff</b>. Wird vor allem durch die intensive Intervallmethode verbessert.",k:1},
 {g:"Trainingsmethoden",t:"Aktive Pause",d:"In Intervallpausen weiter bewegen (z. B. traben). Sonst kann das Blut in die Beine absacken; die Muskelbewegung pumpt das Blut über die Venen zum Herzen zurück.",k:0},
 {g:"Belastungskomponenten",t:"Reizintensität",d:"Stärke des Belastungsreizes, z. B. Gewicht, Tempo oder % der Maximalkraft.",k:1},
 {g:"Belastungskomponenten",t:"Reizdauer",d:"Dauer eines einzelnen Reizes bzw. einer Serie, z. B. Wiederholungszahl oder Laufzeit.",k:1},
 {g:"Belastungskomponenten",t:"Reizdichte",d:"Verhältnis von Belastung und Pause. <b>Kurze Pausen = hohe Dichte</b>, lange Pausen = geringe Dichte.",k:1},
 {g:"Belastungskomponenten",t:"Reizumfang",d:"Gesamtmenge der Belastung, z. B. Kilometer, Sätze oder Gesamtdauer.",k:1},
 {g:"Belastungskomponenten",t:"Trainingshäufigkeit",d:"Anzahl der Trainingseinheiten, z. B. pro Woche.",k:0},
 {g:"Belastungskomponenten",t:"Belastungsgefüge",d:"Das Zusammenspiel der Belastungskomponenten. Die Wirksamkeit eines Reizes hängt vor allem von Intensität und Umfang ab – sie müssen sich <b>gegenläufig</b> verhalten: bei hoher Intensität geringer Umfang und umgekehrt.",k:0},
 {g:"Anpassung & Superkompensation",t:"Adaptation (Anpassung) und Anpassungsfähigkeit",d:"Die Fähigkeit zur Anpassung ist ein Grundphänomen aller Lebewesen. Deshalb ist es möglich, durch Training (Belastung des Körpers) funktionelle Anpassungen auszulösen.",k:1},
 {g:"Anpassung & Superkompensation",t:"Qualitätsgesetz",d:"Spezifische Reize bewirken spezifische Anpassungsreaktionen. „Die stärkere Funktion ändert die qualitative Beschaffenheit der Organe, indem sie die spezifische Leistungsfähigkeit derselben erhöht.“ Beispiele: Reckturnen → Schwielen, kurz und intensiv → Kraft, lang mit geringer Intensität → Ausdauer.",k:1},
 {g:"Anpassung & Superkompensation",t:"Homöostase",d:"Dynamisches (biochemisches) <b>Gleichgewicht</b> zwischen den Belastungsanforderungen und dem Leistungsniveau des Körpers.",k:1},
 {g:"Anpassung & Superkompensation",t:"Belastungsreiz (Trainingsreiz)",d:"Ermüdende Belastung im Training. Sie <b>stört die Homöostase</b> und ist damit der auslösende Reiz für die Anpassung.",k:1},
 {g:"Anpassung & Superkompensation",t:"Ermüdung",d:"Phase direkt nach dem Belastungsreiz: Das Leistungsniveau sinkt <b>unter das Ausgangsniveau</b>.",k:1},
 {g:"Anpassung & Superkompensation",t:"Wiederherstellung (Erholung)",d:"Nach der Ermüdung setzen Wiederherstellungsprozesse ein; das Leistungsniveau steigt <b>wieder bis zum Ausgangsniveau</b>.",k:1},
 {g:"Anpassung & Superkompensation",t:"Superkompensation",d:"Anpassung <b>über das Ausgangsniveau hinaus</b> (positive Anpassung). Der Körper schützt sich so vor erneuter Ermüdung – eine Schutzmaßnahme wie die Hornhaut. Grundlage für jede Leistungssteigerung.",k:1},
 {g:"Anpassung & Superkompensation",t:"Rückkehr zum Ausgangsniveau (Rückgang)",d:"Negative Anpassung: Bleibt der nächste Reiz aus, bildet sich das Leistungsniveau aufgrund der Homöostase wieder zurück.",k:1},
 {g:"Anpassung & Superkompensation",t:"Ausgangsniveau",d:"Leistungsniveau vor dem Belastungsreiz – die Bezugslinie in der Skizze.",k:1},
 {g:"Anpassung & Superkompensation",t:"Übertraining",d:"Folge zu kurzer Pausen: Der neue Reiz kommt, bevor die Superkompensation erreicht ist. Die Abbauprozesse überwiegen, die Leistung stagniert oder sinkt.",k:1},
 {g:"Anpassung & Superkompensation",t:"Prinzip der optimalen Relation von Belastung und Erholung",d:"Ein optimaler Leistungszuwachs wird nur erreicht, wenn die neue Belastung zum Zeitpunkt der <b>höchsten Superkompensation</b> erfolgt. Richtwert im Gesundheitssport: ca. <b>48 Stunden</b> Pause.",k:1},
 {g:"Belastungssteigerung",t:"Prinzip der progressiven (steigenden) Belastung",d:"Zur Auslösung einer weiteren Leistungssteigerung muss mit zunehmendem Leistungsniveau die Belastung erhöht werden. Reihenfolge: erst <b>Umfang</b>, dann <b>Dichte</b>, zuletzt <b>Intensität</b>.",k:1},
 {g:"Belastungssteigerung",t:"Reizschwellengesetz",d:"Anpassungsreaktionen werden nur ausgelöst, wenn eine <b>kritische Reizschwelle</b> überschritten wird (Maximalkraft: Untrainierte ca. 30 %, Hochtrainierte ca. 70 %). Mit der Leistung steigt auch die Reizschwelle – deshalb muss die Belastung steigen.",k:1},
 {g:"Belastungssteigerung",t:"Allmähliche Belastungssteigerung",d:"Gleichmäßiger Anstieg der Belastung <b>in kleinen Stufen</b>, vor allem im Nachwuchsbereich. Vorteil: <b>stabile</b> Anhebung des Leistungsniveaus.",k:1},
 {g:"Belastungssteigerung",t:"Sprunghafte Belastungssteigerung",d:"<b>Abrupte</b> Anhebung von Intensität oder Umfang, wenn die allmähliche nichts mehr bringt. Braucht eine gute Leistungsgrundlage. Nachteil: <b>Labilität</b> des gewonnenen Niveaus.",k:1},
 {g:"Belastungssteigerung",t:"Variierende Belastungssteigerung",d:"Abwechslung bei Mitteln, Methoden, Belastungskomponenten, Übungen und Bewegungsausführung. Wirkt <b>Monotonie</b> und <b>Leistungsstagnation</b> entgegen.",k:1},
 {g:"Belastungssteigerung",t:"Labilität",d:"Instabilität: Ein sprunghaft gewonnenes Leistungsniveau geht schnell wieder verloren.",k:1},
 {g:"Belastungssteigerung",t:"Motorisch-dynamischer Bewegungsstereotyp",d:"Durch ständig gleichförmige Bewegungen „eingeschliffenes“ Muster: Das Nervensystem speichert z. B. die Bewegungsgeschwindigkeit → <b>Kraft- oder Geschwindigkeitsbarriere</b>. Ungewohnte Bewegungen und abrupte Belastungswechsel beugen vor; Lösung z. B. Sprint bergab.",k:1},
 {g:"Weitere Prinzipien",t:"Belastungsdosierung",d:"Bei hoher Intensität muss ein Mindestumfang, bei hohem Umfang eine Mindestintensität eingehalten werden, damit die Reizschwelle erreicht wird. Unterschwellige Reize sind unwirksam, zu starke schädlich.",k:0},
 {g:"Weitere Prinzipien",t:"Mobilisationsschwelle",d:"Schutzmechanismus des Körpers bei ca. 70 % der absoluten Leistungsfähigkeit. Darüber liegen die autonom geschützten Reserven (nur durch Wut, Angst, Freude oder Doping erreichbar). Durch Training kann die Schwelle um 20 % auf 90 % steigen.",k:0},
 {g:"Weitere Prinzipien",t:"Prinzip der unvollständigen Erholung",d:"Mehrere Belastungen in der Wiederherstellungsphase → Ermüdungsaufstockung → <b>erhöhte</b> Superkompensation. Danach ist eine längere Pause nötig (Wochenstoßtraining, Hochleistungssport).",k:0},
 {g:"Weitere Prinzipien",t:"Prinzip der optimalen Relation von allgemeiner und spezieller Ausbildung",d:"Mit ansteigendem Leistungsniveau nimmt die spezielle Ausbildung immer mehr zu. In technischen Sportarten (Turnen) hat das spezielle Training mehr Gewicht als z. B. im Sprint.",k:0},
 {g:"Weitere Prinzipien",t:"Verlauf der Leistungsentwicklung",d:"Mit zunehmendem Leistungsniveau wird der Leistungszuwachs trotz größerem Trainingsaufwand immer geringer (Anfänger: 10–20 % in 12 Wochen, Spitzensport: kaum 1 %).",k:0}
];

/* ---------- Leitfragen zur Belastungssteigerung ----------
   So stehen sie als rote Randfragen auf deiner korrigierten Aufgabe 5 (Erwartungshorizont). */
const SP_LF=[
 {f:"allmählich",q:"In welchem Trainingsbereich sollte sie vor allem Anwendung finden – und warum dort?",a:"Vor allem im <b>Nachwuchsbereich</b> (Grundlagentraining, Anfänger), um den <b>Bewegungsapparat und das Herz-Kreislauf-System nicht zu überfordern</b>."},
 {f:"allmählich",q:"Was heißt „allmählich“?",a:"Sie ist durch einen <b>gleichmäßigen Anstieg der Belastung in kleinen Stufen</b> gekennzeichnet (je nach individueller Belastbarkeit). Eine <b>vorsichtige Annäherung an die Belastungsgrenze</b> ist unbedingt notwendig, um Anpassungen (Trainingsfortschritte) zu erzielen. D. h. man orientiert sich an dem, was man <b>mindestens</b> schaffen muss, um sich im nächsten Training zu verbessern – also am Minimum, nicht am Maximum."},
 {f:"allmählich",q:"Welchen Vorteil hat sie?",a:"Die Methode bewirkt eine <b>stabile Anhebung des Leistungsniveaus</b> und reicht über einen langen Zeitraum aus, um immer wieder Fortschritte zu erzielen."},
 {f:"sprunghaft",q:"Wann sollte man die sprunghafte Belastungssteigerung (erst) anwenden?",a:"Erst wenn man bereits eine <b>gute Leistungsgrundlage</b> hat und wenn die allmähliche Belastungssteigerung <b>keine weiteren Leistungsfortschritte</b> mehr bewirkt (Leistungsstillstand)."},
 {f:"sprunghaft",q:"Was soll die sprunghafte Belastungssteigerung konkret bewirken?",a:"Eine <b>verstärkte Störung der Homöostase</b> und damit eine <b>höhere Anpassung des Organismus</b>."},
 {f:"sprunghaft",q:"Was heißt „sprunghaft“? Welche Belastungsgrößen werden abrupt angehoben?",a:"<b>Abrupte Anhebung der Intensität oder des Umfangs</b> der Belastung."},
 {f:"sprunghaft",q:"Welchen Nachteil hat sie jedoch?",a:"<b>Labilität (Instabilität) des gewonnenen Leistungsniveaus</b> – schnell Gewonnenes geht schnell wieder verloren. Deshalb braucht man danach wieder Phasen allmählicher Steigerung zur Stabilisierung."},
 {f:"sprunghaft",q:"In welcher Situation wird sie oft angewendet?",a:"Wenn man <b>Trainingsrückstände aufholen</b> will, z. B. nach Krankheit oder Verletzung."},
 {f:"variierend",q:"Wann ist die variierende Belastungssteigerung vor allem hilfreich?",a:"Sie soll einer <b>Monotonie der Trainingsbelastung</b> (und damit geringerer Wirksamkeit) entgegenwirken und hilft, <b>Leistungsstagnationen zu umgehen</b> – z. B. wenn man an eine Leistungsgrenze stößt (Kraft- oder Geschwindigkeitsbarriere)."},
 {f:"variierend",q:"Was kann man variieren? (alles!)",a:"• allmähliche und sprunghafte Steigerung <b>abwechseln</b><br>• <b>Trainingsmittel</b> (z. B. statt Bankdrücken mit Kurzhanteln)<br>• <b>Trainingsmethoden</b><br>• einzelne <b>Belastungskomponenten</b> (Satzzahl, Wiederholungszahl, Pausendauer, Höhe der Gewichte)<br>• <b>Trainingsinhalte</b> (Übungen)<br>• <b>Bewegungsausführung / Bewegungsdynamik</b>, z. B. Geschwindigkeit ändern, ungewohnte Bewegungen (Sprint bergab)"}
];
const SP_FORM={allmählich:["Allmähliche Belastungssteigerung","--parl"],sprunghaft:["Sprunghafte Belastungssteigerung","--crown"],variierend:["Variierende Belastungssteigerung","--gold"]};

/* ---------- Warum steigern? Zusammenhang mit dem Reizschwellengesetz (deine Mitschrift) ---------- */
const SP_WARUM=[
 "Eine positive Anpassung des Organismus (<b>Superkompensation</b>) wird nur dann erreicht, wenn durch Belastungen des Trainings eine <b>kritische Reizschwelle überschritten</b> wird.",
 "Mit zunehmender Leistungssteigerung <b>erhöht sich</b> entsprechend auch <b>die Reizschwelle</b> des Sportlers.",
 "Bleiben die Trainingsbelastungen über längere Zeit <b>konstant</b>, verlieren sie ihre Wirksamkeit, weil die erhöhte Reizschwelle nicht mehr überschritten wird: Der Körper hat sich an die Belastung <b>gewöhnt</b>, die Ermüdung wird geringer – es findet <b>keine weitere Anpassung</b> statt.",
 "Deshalb ist es in langfristigen Trainingsprozessen notwendig, die Belastung <b>entsprechend dem Leistungsfortschritt ständig zu erhöhen</b>, um weitere Anpassungen zu erzielen."
];

/* ---------- Quiz ---------- */
const SP_QUIZ=[
 {q:"Bei welcher Methode dienen die Pausen der vollständigen Erholung?",o:["Wiederholungsmethode","Dauermethode","Extensive Intervallmethode","Intensive Intervallmethode"],r:0,x:"Nur bei der Wiederholungsmethode wartet man, bis man (fast) ganz erholt ist – so bleibt die Intensität hoch."},
 {q:"Wann beginnt bei der Intervallmethode die nächste Belastung?",o:["Sobald der Puls auf ca. 120/min gefallen ist","Erst nach vollständiger Erholung","Nach genau 5 Minuten","Wenn der Puls bei 160/min liegt"],r:0,x:"Das ist die „lohnende Pause“: Im ersten Drittel der Erholungszeit erholt man sich am schnellsten."},
 {q:"Woran erkennt man die Intervallmethode?",o:["Regelmäßiger Wechsel von Belastung und unvollständiger Erholung","Ein einziger Dauerreiz ohne Pause","Lange Pausen bis zur vollständigen Erholung","Training nur einmal pro Woche"],r:0,x:"Die lohnende Pause ist das eigentlich Typische an der Intervallmethode."},
 {q:"Welche Methode verbessert vor allem die anaerobe Kapazität?",o:["Intensive Intervallmethode","Dauermethode","Extensive Intervallmethode","Wiederholungsmethode"],r:0,x:"Anaerob = Energiegewinnung ohne Sauerstoff – gefordert bei kurzen, harten Belastungen."},
 {q:"Welche Trainingseffekte hat die Dauermethode? (2 P. in der alten Aufgabe 4)",o:["Herz-Kreislauf-System und Fettstoffwechsel","Muskelaufbau und Kraftzuwachs","nur die anaerobe Kapazität","Beweglichkeit und Koordination"],r:0,x:"So stand es im Erwartungshorizont: positive Auswirkungen auf das Herz-Kreislauf-System und den Fettstoffwechsel."},
 {q:"Welcher Trainingseffekt gehört zur Wiederholungsmethode?",o:["Anpassungen innerhalb des Muskels","Aktivierung des Fettstoffwechsels","Vergrößerung des Herzvolumens","Verbesserung der Grundlagenausdauer"],r:0,x:"Muskelaufbau und Kraftzuwachs – die Krafttrainingsmethode schlechthin."},
 {q:"Wie lang ist die Reizdauer bei der Dauermethode?",o:["über 30 Minuten","1–15 Minuten","unter 1 Minute","genau 20 Minuten"],r:0,x:"Geringe Intensität, dafür über 30 min → hoher Reizumfang."},
 {q:"Welche Intensität hat die extensive Intervallmethode?",o:["gering (ca. 30–50 %)","mittel bis hoch","maximal","sie hat keine Pausen"],r:0,x:"Extensiv = lang und locker: geringe Intensität, dafür 60 s bis 15 min pro Intervall."},
 {q:"Welche Methode gilt als „die Krafttrainingsmethode schlechthin“?",o:["Wiederholungsmethode","Dauermethode","Extensive Intervallmethode","Intensive Intervallmethode"],r:0,x:"Hohe Intensität + vollständige Erholung → Anpassungen im Muskel."},
 {q:"Wie unterscheiden sich die Pausen der beiden Intervallmethoden?",o:["Extensiv: kürzere Pausen · intensiv: längere Pausen","Extensiv: längere Pausen · intensiv: kürzere Pausen","Beide haben vollständige Pausen","Beide haben gar keine Pausen"],r:0,x:"Bei der intensiven Methode ist die Belastung härter, deshalb dauert es länger, bis der Puls auf 120 sinkt."},
 {q:"Was besagt das Qualitätsgesetz?",o:["Spezifische Reize bewirken spezifische Anpassungsreaktionen","Jeder Reiz verbessert alle Fähigkeiten gleich","Nur starke Reize wirken","Qualität ist wichtiger als Umfang"],r:0,x:"Beispiel: Reckturnen → Schwielen, kurz und intensiv → Kraft, lang und locker → Ausdauer."},
 {q:"Was ist die Homöostase?",o:["Ein dynamisches Gleichgewicht zwischen Belastungsanforderung und Leistungsniveau","Die Phase direkt nach dem Training","Die höchste Stelle der Kurve","Ein anderes Wort für Übertraining"],r:0,x:"Der Trainingsreiz stört dieses Gleichgewicht – das ist der Auslöser für die Anpassung."},
 {q:"Welche Reihenfolge der Phasen ist richtig?",o:["Ermüdung → Wiederherstellung → Superkompensation → Rückkehr","Superkompensation → Ermüdung → Wiederherstellung → Rückkehr","Wiederherstellung → Ermüdung → Superkompensation → Rückkehr","Ermüdung → Superkompensation → Wiederherstellung → Rückkehr"],r:0,x:"Auf dem anderen Blatt heißt es kürzer: Ermüdung – Erholung – Anpassung – Rückgang."},
 {q:"Wann sollte der nächste Trainingsreiz gesetzt werden?",o:["Im höchsten Punkt der Superkompensation","Mitten in der Ermüdung","Wenn das Ausgangsniveau wieder erreicht ist","Möglichst erst nach einer Woche"],r:0,x:"Prinzip der optimalen Relation von Belastung und Erholung."},
 {q:"Was passiert bei zu kurzen Pausen?",o:["Das Leistungsniveau sinkt – Übertraining","Die Leistung steigt besonders schnell","Das Niveau kehrt zum Ausgangsniveau zurück","Nichts, Pausen sind egal"],r:0,x:"Der neue Reiz kommt in der Ermüdungsphase, bevor eine Superkompensation erreicht wurde."},
 {q:"Was passiert bei zu langen Pausen?",o:["Das Niveau fällt aufs Ausgangsniveau zurück – keine Steigerung","Übertraining","Besonders hohe Superkompensation","Die Homöostase bleibt dauerhaft gestört"],r:0,x:"Typisch für den Schulsport: Bis zur nächsten Sportstunde ist die Pause meist zu lang."},
 {q:"Welcher Richtwert für die Pause gilt im Gesundheitssport?",o:["ca. 48 Stunden","ca. 2 Stunden","ca. 1 Woche","ca. 12 Stunden"],r:0,x:"Steht so auf deinem Blatt zum Prinzip der optimalen Relation von Belastung und Erholung."},
 {q:"Was steigt mit zunehmender Leistung ebenfalls an?",o:["die Reizschwelle des Sportlers","die Homöostase","die nötige Pausenlänge","die Ermüdung bei gleicher Belastung"],r:0,x:"Deshalb verliert eine gleichbleibende Belastung ihre Wirksamkeit."},
 {q:"Was passiert, wenn man lange mit gleichbleibender Belastung trainiert?",o:["Ermüdung und Anpassung werden immer kleiner – Stagnation","Die Leistung steigt immer weiter","Man kommt ins Übertraining","Die Reizschwelle sinkt"],r:0,x:"Der Körper gewöhnt sich, die Homöostase wird kaum noch gestört."},
 {q:"Wo wird die allmähliche Belastungssteigerung vor allem angewandt?",o:["Im Nachwuchsbereich (Anfänger)","Im Hochleistungssport kurz vor dem Wettkampf","Nach Verletzungen zum schnellen Aufholen","Nur im Krafttraining"],r:0,x:"Damit Bewegungsapparat und Herz-Kreislauf-System nicht überfordert werden."},
 {q:"Was ist der Vorteil der allmählichen Belastungssteigerung?",o:["Stabile Anhebung des Leistungsniveaus","Besonders schneller Leistungssprung","Sie braucht keine Belastungsgrenze","Sie verhindert jede Ermüdung"],r:0,x:"Langsam Aufgebautes bleibt lange erhalten."},
 {q:"Was ist der Nachteil der sprunghaften Belastungssteigerung?",o:["Labilität des gewonnenen Leistungsniveaus","Sie wirkt gar nicht","Sie ist nur für Kinder geeignet","Sie verursacht Monotonie"],r:0,x:"Schnell Gewonnenes geht schnell wieder verloren (Diagramm im Lehrbuch S. 13)."},
 {q:"Was soll die sprunghafte Belastungssteigerung konkret bewirken?",o:["Eine verstärkte Störung der Homöostase und damit höhere Anpassung","Eine vollständige Erholung","Weniger Ermüdung","Eine Rückkehr zum Ausgangsniveau"],r:0,x:"Sie wird durch abrupte Anhebung von Intensität oder Umfang erreicht."},
 {q:"Was zeigt das Kraft-Diagramm aus dem Lehrbuch?",o:["Schnell aufgebaute Kraft geht ohne Training schnell wieder verloren","Kraft bleibt nach dem Training immer erhalten","Tägliches Training ist immer besser","Kraft wächst nur durch Ausdauertraining"],r:0,x:"Langsam aufgebaut: nach über 50 Wochen ohne Training noch ca. 40 %. Schnell aufgebaut: nach 30 Wochen wieder 0 %."},
 {q:"Wofür ist die variierende Belastungssteigerung vor allem da?",o:["Gegen Monotonie und Leistungsstagnation","Für Anfänger im Nachwuchsbereich","Zum Aufholen nach Krankheit","Um Pausen zu sparen"],r:0,x:"Neue, ungewohnte Belastungen überschreiten wieder die Reizschwelle."},
 {q:"„Statt Bankdrücken mit Kurzhanteln trainieren“ ist eine Variation von …",o:["Trainingsmitteln","Trainingshäufigkeit","Reizdichte","Pausendauer"],r:0,x:"So steht es als Beispiel auf deinem Blatt."},
 {q:"Ein Sprinter läuft zum Training bergab. Wogegen hilft das?",o:["Gegen einen Bewegungsstereotyp (Geschwindigkeitsbarriere)","Gegen Übertraining","Gegen zu lange Pausen","Gegen die Homöostase"],r:0,x:"Das Nervensystem „lernt“, dass eine schnellere Bewegungsfrequenz möglich ist."},
 {q:"In welcher Reihenfolge steigert man die Belastung langfristig?",o:["Umfang → Dichte → Intensität","Intensität → Dichte → Umfang","Dichte → Intensität → Umfang","alles gleichzeitig"],r:0,x:"Erst länger, dann kürzere Pausen, zuletzt härter."}
];

/* ---------- Welche Methode? (Anwendung) ---------- */
const SP_FALL=[
 ["Lisa läuft 45 Minuten in lockerem Tempo am Stück um den See.","dauer"],
 ["Tom macht 3 Sätze schwere Kniebeugen und wartet zwischen den Sätzen 4 Minuten, bis er sich ganz erholt hat.","wdh"],
 ["Ein Mittelstreckler läuft 6 × 1000 m in ruhigem Tempo und trabt jeweils nur, bis sein Puls bei 120 ist.","ext"],
 ["Eine Sprinterin läuft 8 × 100 m fast mit Höchsttempo und startet neu, sobald ihr Puls auf 120 gefallen ist.","int"],
 ["Ein übergewichtiger Büroangestellter möchte abnehmen und seinen Fettstoffwechsel aktivieren.","dauer"],
 ["Eine Fitnesssportlerin will gezielt Muskeln aufbauen und eine Haltungsschwäche ausgleichen.","wdh"],
 ["Ein Kraftsportler stagniert und will im Zirkeltraining seine anaerobe Kapazität verbessern.","int"],
 ["Ein Läufer will seine Ausdauer zusätzlich zu den Dauerläufen mit Intervallen verbessern.","ext"],
 ["Hohe Intensität, kurze Reizdauer, lange Pausen bis zur vollständigen Erholung.","wdh"],
 ["Geringe Intensität, über 30 Minuten, keine Pause.","dauer"],
 ["Mittlere bis hohe Intensität, kurze Reizdauer, unvollständige Pausen – länger als bei der extensiven Methode.","int"],
 ["Geringe Intensität (30–50 %), 1–15 Minuten pro Belastung, kurze unvollständige Pausen.","ext"]
];

/* ---------- Reihenfolgen ---------- */
const SP_ORD=[
 {id:"sk",t:"Superkompensation: Was passiert nacheinander?",s:["Belastungsreiz stört die Homöostase","Ermüdung: Leistung sinkt unter das Ausgangsniveau","Wiederherstellung (Erholung) bis zum Ausgangsniveau","Superkompensation: Anpassung über das Ausgangsniveau","Rückkehr zum Ausgangsniveau, wenn kein neuer Reiz kommt"]},
 {id:"warum",t:"Warum muss die Belastung steigen? Bring die Begründung in Reihenfolge.",s:["Anpassung nur, wenn die Reizschwelle überschritten wird","Mit der Leistung steigt auch die Reizschwelle","Gleiche Belastung überschreitet die höhere Schwelle nicht mehr: Gewöhnung, keine Anpassung","Also die Belastung mit dem Leistungsfortschritt ständig erhöhen"]},
 {id:"steuer",t:"Belastung langfristig steigern: In welcher Reihenfolge?",s:["Umfang erhöhen (längere Belastungszeit)","Dichte erhöhen (kürzere Pausen)","Intensität erhöhen (z. B. mehr Gewicht)"]},
 {id:"allm",t:"Allmähliche Steigerung im Krafttraining (Beispiel vom Blatt)",s:["6 Wiederholungen mit einem Gewicht, auch wenn mehr ginge","Jedes Training eine Wiederholung mehr: 7, 8, …","Bei 12 Wiederholungen angekommen","Gewicht um die kleinste Einheit erhöhen (meist 2,5 kg)","Wieder mit 6 Wiederholungen beginnen"]}
];

/* ---------- Abruf: aus dem Kopf aufschreiben, dann abhaken ----------
   Die Punkte entsprechen den Erwartungshorizonten deiner korrigierten Blätter. */
const SP_ABRUF=[
 {id:"meth",t:"Die 4 Trainingsmethoden",min:10,tab:"methoden",
  auf:"Schreib alle 4 Methoden auf – zu jeder: Beispiel, typische Belastungsmerkmale, Trainingseffekt und Anwendung. Zeichne die Skizze zur Dauer- und zur Wiederholungsmethode.",
  p:["Dauermethode: ein Dauerreiz ohne Pause · Beispiel Ausdauerlauf",
   "Dauer – Belastungsmerkmale: geringe Intensität, über 30 min, hoher Umfang",
   "Dauer – Trainingseffekt: Herz-Kreislauf-System und Fettstoffwechsel",
   "Dauer – Anwendung: Übergewichtige, Ausgleich bei Bewegungsmangel, Basistraining",
   "Wiederholungsmethode · Beispiel Krafttraining",
   "Wiederholung – Belastungsmerkmale: hohe Intensität, kurze Reizdauer, lange Pausen bis zur vollständigen Erholung",
   "Wiederholung – Trainingseffekt: Anpassungen im Muskel (Muskelaufbau, Kraftzuwachs)",
   "Wiederholung – Anwendung: Muskelaufbau, Straffung, Haltungsschwächen, Ausgleich",
   "Intervall: regelmäßiger Wechsel von Belastung und unvollständiger Erholung",
   "Lohnende Pause: weiter, sobald der Puls bei ca. 120/min ist",
   "Extensiv – Belastungsmerkmale: hoher Umfang, geringe Intensität (30–50 %), 60 s bis 15 min, kürzere Pausen",
   "Extensiv – Trainingseffekt: Herz-Kreislauf · ergänzt die Dauermethode · Bsp. 300–1500 m",
   "Intensiv – Belastungsmerkmale: kurz, mittlere bis hohe Intensität, längere Pausen",
   "Intensiv – Trainingseffekt: anaerobe Kapazität (ohne Sauerstoff) · Bsp. 100/200 m",
   "Intensiv – Anwendung: ergänzt die Wiederholungsmethode (Zirkel), neue Reize bei Stagnation",
   "Skizze „% der Trainingsfähigkeit“ für Dauer- und Wiederholungsmethode"]},
 {id:"sk",t:"Superkompensation mit Skizze",min:8,tab:"superkomp",
  auf:"Definiere Adaptation und das Qualitätsgesetz. Zeichne das Modell der Superkompensation, beschrifte es vollständig und beschreibe den Verlauf mit allen Fachbegriffen.",
  p:["Adaptation: Anpassungsfähigkeit ist ein Grundphänomen aller Lebewesen → durch Training funktionelle Anpassungen",
   "Qualitätsgesetz: spezifische Reize bewirken spezifische Anpassungsreaktionen",
   "Skizze: Achsen Leistungsniveau und Zeit, Ausgangsniveau als Linie",
   "Homöostase = dynamisches (biochemisches) Gleichgewicht zwischen Belastungsanforderung und Leistungsniveau",
   "Belastungsreiz stört die Homöostase (auslösender Reiz für die Anpassung)",
   "Ermüdung: Leistung sinkt unter das Ausgangsniveau",
   "Wiederherstellung (Erholung) bis zum Ausgangsniveau",
   "Ziel: die belasteten Teilsysteme vor erneuter Ermüdung schützen",
   "Superkompensation: Anpassung über das Ausgangsniveau hinaus (positiv)",
   "Rückkehr zum Ausgangsniveau (negativ), wenn kein neuer Reiz kommt",
   "Merksatz: Grundlage für Funktions- und Leistungssteigerungen",
   "Beispiel Hornhaut: nicht nur erneuern (kompensieren), sondern verstärken (superkompensieren)"]},
 {id:"pause",t:"Pausen: optimal, zu lang, zu kurz",min:5,tab:"superkomp",
  auf:"Zeichne die 3 Skizzen und schreib zu jeder, was mit dem Leistungsniveau passiert und warum.",
  p:["Optimal: neuer Reiz im höchsten Punkt der Superkompensation → Leistung steigt",
   "Richtwert im Gesundheitssport: ca. 48 Stunden",
   "Zu lang: Rückkehr aufs Ausgangsniveau (Homöostase) → keine Leistungssteigerung",
   "Zu lang ist typisch für Schul- und Freizeitsport",
   "Zu kurz: Reiz noch in der Ermüdung, keine Superkompensation → Leistung sinkt",
   "Zu kurz führt zum Übertraining",
   "Alle 3 Skizzen gezeichnet: Treppe hoch · gleich bleibend · Treppe runter"]},
 {id:"st",t:"Belastungssteigerung: die 3 Formen",min:10,tab:"steigerung",
  auf:"Nenne die 3 Formen der Belastungssteigerung und beantworte zu jeder die roten Randfragen: Wann? Was heißt das? Was soll sie bewirken? Vorteil oder Nachteil? Was kann man variieren?",
  p:["Nennen: allmählich, sprunghaft, variierend",
   "Allmählich: vor allem im Nachwuchsbereich …",
   "… um Bewegungsapparat und Herz-Kreislauf-System nicht zu überfordern",
   "Allmählich heißt: gleichmäßiger Anstieg in kleinen Stufen, vorsichtige Annäherung an die Belastungsgrenze (am Minimum orientieren)",
   "Allmählich – Vorteil: stabile Anhebung des Leistungsniveaus",
   "Sprunghaft: erst mit guter Leistungsgrundlage, wenn die allmähliche nichts mehr bringt",
   "Sprunghaft soll: verstärkte Störung der Homöostase → höhere Anpassung",
   "Sprunghaft heißt: abrupte Anhebung von Intensität oder Umfang",
   "Sprunghaft – Nachteil: Labilität des gewonnenen Leistungsniveaus",
   "Sprunghaft: oft, um Trainingsrückstände aufzuholen (Krankheit, Verletzung)",
   "Variierend: gegen Monotonie der Trainingsbelastung",
   "Variierend: Leistungsstagnation umgehen (Leistungsgrenze, Kraft- oder Geschwindigkeitsbarriere)",
   "Variieren kann man alles: allmählich/sprunghaft abwechseln, Mittel, Methoden, Belastungskomponenten, Übungen, Bewegungsausführung (Sprint bergab)"]},
 {id:"warum",t:"Warum steigern? (Reizschwelle)",min:4,tab:"steigerung",
  auf:"Erläutere den Zusammenhang zwischen dem Prinzip der steigenden Belastung und dem Reizschwellengesetz.",
  p:["Anpassung (Superkompensation) nur, wenn eine kritische Reizschwelle überschritten wird",
   "Mit der Leistung steigt auch die Reizschwelle",
   "Konstante Belastung verliert ihre Wirksamkeit: Gewöhnung, weniger Ermüdung, keine Anpassung",
   "Deshalb die Belastung mit dem Leistungsfortschritt ständig erhöhen",
   "Reihenfolge: erst Umfang, dann Dichte, zuletzt Intensität"]}
];

/* ---------- Lernplan bis zur Klausur ----------
   Schritte: [Text, Minuten, Reiter, Übungsmodus, Kartenstapel, Abruf-/Ordnen-Thema]
   Jedes Thema kommt viermal dran: beim Lernen, im nächsten Block (Kurz-Abruf), abends und morgens. */
const SP_DAY1="2026-11-25",SP_DAY2="2026-11-26";
const SP_PLAN=[
 {id:"b1",tag:"heute",n:1,title:"Die 4 Trainingsmethoden",sub:"meiste Punkte",pause:10,
  ziel:"Du schreibst zu jeder Methode Belastungsmerkmale, Trainingseffekt und Anwendung aus dem Kopf auf.",
  steps:[["Lesen: Reiter Methoden – Bewertung, Raster, „In 3 Fragen“ und die 4 Karten",12,"methoden"],
   ["Die 2 Skizzen aus deiner Mitschrift (% der Trainingsfähigkeit) einmal abzeichnen",3,"methoden"],
   ["Abruf auf leerem Blatt: „Die 4 Trainingsmethoden“, danach abhaken",12,"ueben","abruf","","meth"],
   ["Lücken nachlesen und rot auf dein Blatt schreiben",5,"methoden"],
   ["Üben: „Methode?“ – Ziel 8 von 8",8,"ueben","methode"],
   ["Karten „Methoden“, bis alle gewusst sind",10,"ueben","karten","meth"]]},
 {id:"b2",tag:"heute",n:2,title:"Superkompensation mit Abbildung",sub:"Skizze",pause:10,
  ziel:"Du zeichnest das Modell und die 3 Pausen-Skizzen frei und beschreibst sie mit allen Fachbegriffen.",
  steps:[["Kurz-Abruf Thema 1: die 4 Methoden je in einer Zeile aus dem Kopf",3,""],
   ["Lesen: Reiter Superkomp. – Definitionen, Modell, Phasen, Pausen",10,"superkomp"],
   ["Modell 3 × aus dem Kopf zeichnen und beschriften, jedes Mal vergleichen",8,"superkomp"],
   ["Kurzform auswendig: lesen, abdecken, aufschreiben – 2 Durchgänge",7,"superkomp"],
   ["Abruf: „Superkompensation mit Skizze“ und „Pausen“",10,"ueben","abruf","","sk"],
   ["Üben: „Ordnen“ (Phasen), dann eine Quiz-Runde",7,"ueben","ord","","sk"]]},
 {id:"b3",tag:"heute",n:3,title:"Belastungssteigerung",sub:"Randfragen",pause:15,
  ziel:"Du beantwortest zu jeder Form alle roten Randfragen und erklärst, warum man steigern muss.",
  steps:[["Kurz-Abruf Thema 2: Superkompensations-Skizze in einer Minute",2,""],
   ["Lesen: Reiter Steigerung – „Warum steigern?“ und die 3 Formen mit den Randfragen",12,"steigerung"],
   ["Karten „Randfragen“, bis alle gewusst sind",12,"ueben","karten","lf"],
   ["Abruf: „Belastungssteigerung“ und „Warum steigern?“",12,"ueben","abruf","","st"],
   ["Kraft-Diagramm und Vergleichstabelle laut erklären",7,"steigerung"]]},
 {id:"b4",tag:"heute",n:4,title:"Probeklausur",sub:"wie echt",
  ziel:"Du schreibst wie in der Klausur – mit Hand, mit Zeitdruck, ohne nachzusehen.",
  steps:[["Kurz-Abruf: alle 3 Themen in Stichpunkten, je 1 Minute",3,""],
   ["Probe: Aufgaben 1, 3 und 6 handschriftlich mit Timer",37,"probe"],
   ["Mit den Musterlösungen vergleichen, fehlende Punkte rot ergänzen",15,"probe"]]},
 {id:"ab",tag:"abend",n:0,title:"Vor dem Schlafen",
  ziel:"Nur abrufen, nichts Neues. Danach schlafen – im Schlaf wird das Gelernte gefestigt.",
  steps:[["Großer Abruf: leeres Blatt – alle 3 Themen aus dem Kopf (Stichpunkte + Skizzen)",10,""],
   ["Deine Lücken (unten) und den Merken-Zettel lesen",5,"merk"],
   ["Quiz eine Runde",5,"ueben","quiz"]]},
 {id:"mo",tag:"morgen",n:0,title:"Vor der Klausur",
  ziel:"Kurz aufwärmen – nicht mehr neu lernen.",
  steps:[["Superkompensation + 3 Pausen-Skizzen aus dem Kopf zeichnen",5,""],
   ["Die 4 Methoden: je Belastungsmerkmale – Effekt – Anwendung in einer Zeile",5,""],
   ["Karten „Randfragen“ eine Runde",5,"ueben","karten","lf"],
   ["Deine Lücken + Merken lesen, Checkliste abhaken",5,"chk"]]}
];
const SP_DANACH=[["So 29.11.","10 min: ein Abruf deiner Wahl + eine Quiz-Runde"],["Do 3.12.","10 min: Karten „Methoden“ und „Randfragen“"],["Sa 26.12.","10 min: alle 5 Abrufe kurz durchgehen"]];

/* ---------- Checkliste nach den 3 Klausurthemen ---------- */
const SP_CHECK2=[
 ["1 · Die 4 Trainingsmethoden",[
  "Alle 4 Methoden mit je einem Beispiel nennen",
  "Zu jeder Methode die typischen Belastungsmerkmale (Intensität, Reizdauer, Pausen, Umfang)",
  "Zu jeder Methode den Trainingseffekt (Dauer 2 P., Wiederholung 2 P., extensiv 1 P., intensiv 1 P.)",
  "Zu jeder Methode die Anwendung (für wen, wofür)",
  "Lohnende Pause erklären (Puls 120, unvollständige Erholung, Ein-Drittel-Pause)",
  "Skizzen aus der Mitschrift (% der Trainingsfähigkeit) zeichnen"]],
 ["2 · Superkompensation mit Abbildung",[
  "Adaptation und Qualitätsgesetz definieren",
  "Homöostase definieren",
  "Modell frei zeichnen und vollständig beschriften",
  "Verlauf mit allen Fachbegriffen beschreiben (Kurzform)",
  "Optimale, zu kurze und zu lange Pausen mit Skizzen erklären (48 h, Übertraining, Schulsport)"]],
 ["3 · Belastungssteigerung",[
  "Warum steigern? Zusammenhang mit der Reizschwelle in 4 Schritten",
  "Die 3 Formen nennen (3 P.)",
  "Allmählich: wo, was heißt das, Vorteil",
  "Sprunghaft: wann, was bewirkt sie, wie, Nachteil, Trainingsrückstände",
  "Variierend: wann hilfreich, was man alles variieren kann",
  "Kraft-Diagramm erklären (Labilität)"]],
 ["Zum Schluss",[
  "Probeklausur geschrieben und mit den Musterlösungen verglichen",
  "Jeden Abruf mindestens einmal mit 80 % oder mehr",
  "Stifte, Lineal und Radiergummi für die Skizzen eingepackt"]]
];

/* ---------- Hilfen ---------- */
const spEl=id=>document.getElementById(id);
const spTag=(t,ext)=>`<span class="sp-tag${ext?" ext":""}">${t}</span>`;
const spDef=(t,d)=>`<div class="ps-def sp-def"><b>${t}</b>${d}</div>`;
const spTable=(head,rows,wide)=>`<div class="sp-tw"><table class="ps-tab${wide?" sp-wide":""}"><thead><tr>${head.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
const spM=id=>SP_METH.find(m=>m.id===id);
const spMName=id=>{const m=spM(id);return `<b style="color:var(${m.c})">${m.n}</b>`};
const spDayIso=()=>{const d=new Date();return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`};
const spMin=s=>{const m=/^(\d{1,2}):(\d{2})/.exec(s||"");return m?(+m[1])*60+(+m[2]):null};
const spClock=m=>{m=((Math.round(m)%1440)+1440)%1440;return `${String(Math.floor(m/60)).padStart(2,"0")}:${String(m%60).padStart(2,"0")}`};
function spGo(tab,mode,deck,topic){
  if(mode)store.set("spMode",mode);
  if(deck)store.set("spDeck",deck);
  if(mode==="abruf"&&topic)store.set("spAbrufT",topic);
  if(mode==="ord"&&topic)store.set("spOrdSet",topic);
  if(tab==="merk"){const b=document.getElementById("merkBtn");if(b)b.click();return}
  if(tab==="chk"){const c=spEl("spChkBox");if(c)c.scrollIntoView({behavior:"smooth"});return}
  location.hash="#/sport/klausur/"+tab;
}

/* ---------- Skizzen (SVG) ---------- */
// Belastungsgefüge der vier Methoden: Höhe = Intensität, Breite = Reizdauer, Lücke = Pause
function spSvgGefuege(){
  const L=[["dauer","Dauermethode","ohne Pause",[[0,255,14]]],
           ["wdh","Wiederholung","lange Pausen: ganz erholt",[0,80,160,240].map(x=>[x,16,46])],
           ["ext","Intervall extensiv","kurze Pausen (Puls 120)",[0,62,124,186].map(x=>[x,48,20])],
           ["int","Intervall intensiv","längere Pausen (Puls 120)",[0,52,104,156,208].map(x=>[x,16,34])]];
  let s=`<svg class="sp-svg" viewBox="0 0 420 330" role="img" aria-label="Belastungsgefüge der vier Trainingsmethoden">`;
  L.forEach(([id,name,cap,bars],i)=>{const m=spM(id),y=14+i*76,base=y+56;
    s+=`<text x="6" y="${y+30}" font-size="14" font-weight="700" style="fill:var(${m.c})">${name}</text>
     <text x="6" y="${y+47}" font-size="10.5" style="fill:var(--muted)">${cap}</text>
     <line x1="150" y1="${base}" x2="412" y2="${base}" stroke="var(--line)" stroke-width="1.5"/>`;
    bars.forEach(([x,w,h])=>{s+=`<rect x="${152+x}" y="${base-h}" width="${w}" height="${h}" rx="2" style="fill:var(${m.c})" opacity=".85"/>`});
  });
  s+=`<text x="6" y="322" font-size="12" style="fill:var(--muted)">Höhe = Intensität · Breite = Reizdauer · Lücke = Pause</text></svg>`;
  return s;
}
// Skizzen wie in deiner Mitschrift: y-Achse „% der Trainingsfähigkeit“ mit 100 % unten – nach oben = Ermüdung
function spSvgFaehig(id){
  const m=spM(id),X0=56,X1=408,YT=44,YB=130,Y=v=>YB-(100-v)/75*(YB-YT);
  const sat=(r,k)=>(1-Math.exp(-r/k))/(1-Math.exp(-1/k));
  const iv=(t,c,load,peak,valley)=>{const k=Math.floor(t/c),u=(t-k*c)/c,s=k===0?100:valley;
    if(u<=load)return s-(s-peak)*Math.pow(u/load,.9);return peak+(valley-peak)*sat((u-load)/(1-load),.3)};
  const F={dauer:t=>{const e=100-68*(1-Math.exp(-.8/.22));return t<=.8?100-68*(1-Math.exp(-t/.22)):e+(100-e)*sat((t-.8)/.2,.35)},
    wdh:t=>{const c=.25,u=(t%c)/c,l=.24;return u<=l?100-72*Math.pow(u/l,.85):28+72*sat((u-l)/(1-l),.28)},
    ext:t=>iv(Math.min(t,.9999),.2,.7,50,78),
    int:t=>iv(Math.min(t,.9999),.2,.25,30,78)}[id];
  const pts=[];for(let i=0;i<=320;i++){const t=i/320;pts.push(`${(X0+t*(X1-X0)).toFixed(1)},${Y(F(t)).toFixed(1)}`)}
  const cap={dauer:"ein Dauerreiz – Erholung erst am Ende",wdh:"jedes Mal volle Erholung bis 100 %",ext:"lang und locker · Erholung unvollständig",int:"kurz und hart · Erholung unvollständig"}[id];
  const src=id==="dauer"||id==="wdh"?"wie in deiner Mitschrift":"ergänzt";
  return `<svg class="sp-svg" viewBox="0 0 420 150" role="img" aria-label="Trainingsfähigkeit bei der ${m.n}">
  <text x="6" y="16" font-size="13" font-weight="700" style="fill:var(${m.c})">${m.n}</text>
  <text x="414" y="16" text-anchor="end" font-size="9.5" style="fill:var(--muted)">${src}</text>
  <text x="6" y="29" font-size="10.5" style="fill:var(--muted)">${cap}</text>
  ${[25,50,75].map(v=>`<line x1="${X0}" y1="${Y(v)}" x2="${X1}" y2="${Y(v)}" stroke="var(--line)" stroke-width="1" stroke-dasharray="3 4"/>`).join("")}
  ${[25,50,75,100].map(v=>`<text x="${X0-6}" y="${Y(v)+3.5}" text-anchor="end" font-size="9.5" style="fill:var(--muted)">${v}</text>`).join("")}
  <line x1="${X0}" y1="${YB}" x2="${X1+6}" y2="${YB}" stroke="var(--fg)" stroke-width="1.4"/>
  <line x1="${X0}" y1="${YB}" x2="${X0}" y2="${YT-4}" stroke="var(--fg)" stroke-width="1.4"/>
  <polyline points="${pts.join(" ")}" fill="none" style="stroke:var(${m.c})" stroke-width="2.4" stroke-linejoin="round"/>
  <text x="${X1}" y="${YB+14}" text-anchor="end" font-size="9.5" style="fill:var(--muted)">Zeit</text></svg>`;
}
function spFaehigBlock(){
  return `<p class="meta" style="margin:0">y-Achse: <b>% der Trainingsfähigkeit</b>, 100 % unten – genau wie in deiner Mitschrift. Kurve <b>nach oben</b> = du ermüdest, Kurve <b>nach unten</b> = Erholung.</p>
   ${SP_METH.map(m=>spSvgFaehig(m.id)).join("")}`;
}
// Pulskurve in der Pause: Intervall startet bei Puls 120, Wiederholung wartet bis zur vollen Erholung
function spSvgPuls(){
  const X0=48,X1=404,Y=p=>176-(p-60)*1.12;
  const pts=[];for(let i=0;i<=60;i++){const t=i/60,p=70+110*Math.exp(-t/0.3034);pts.push(`${(X0+t*(X1-X0)).toFixed(1)},${Y(p).toFixed(1)}`)}
  const t120=0.3034*Math.log(110/50),x120=X0+t120*(X1-X0);
  return `<svg class="sp-svg" viewBox="0 0 420 215" role="img" aria-label="Pulskurve in der Pause">
  <rect x="${X0}" y="${Y(190)}" width="${x120-X0}" height="${Y(60)-Y(190)}" style="fill:var(--parl-soft)"/>
  <line x1="${X0}" y1="${Y(60)}" x2="${X1}" y2="${Y(60)}" stroke="var(--fg)" stroke-width="1.5"/>
  <line x1="${X0}" y1="${Y(60)}" x2="${X0}" y2="${Y(190)}" stroke="var(--fg)" stroke-width="1.5"/>
  <line x1="${X0}" y1="${Y(120)}" x2="${X1}" y2="${Y(120)}" stroke="var(--crown)" stroke-width="1.5" stroke-dasharray="6 5"/>
  <text x="${X0-6}" y="${Y(120)+4}" text-anchor="end" font-size="11" font-weight="700" style="fill:var(--crown)">120</text>
  <text x="${X0-6}" y="${Y(180)+4}" text-anchor="end" font-size="11" style="fill:var(--muted)">180</text>
  <text x="${X0-6}" y="${Y(70)+4}" text-anchor="end" font-size="11" style="fill:var(--muted)">70</text>
  <polyline points="${pts.join(" ")}" fill="none" stroke="var(--fg)" stroke-width="2.4"/>
  <circle cx="${x120}" cy="${Y(120)}" r="5" style="fill:var(--crown)"/>
  <text x="${x120+8}" y="${Y(120)-8}" font-size="11.5" font-weight="700" style="fill:var(--crown)">Intervall: weiter!</text>
  <text x="${(X0+x120)/2}" y="${Y(186)}" text-anchor="middle" font-size="10.5" font-weight="700" style="fill:var(--parl)">lohnende</text>
  <text x="${(X0+x120)/2}" y="${Y(186)+13}" text-anchor="middle" font-size="10.5" font-weight="700" style="fill:var(--parl)">Pause</text>
  <circle cx="${X1-4}" cy="${Y(73)}" r="5" style="fill:var(--psy)"/>
  <text x="${X1-4}" y="${Y(97)}" text-anchor="end" font-size="11.5" font-weight="700" style="fill:var(--psy)">Wiederholung: erst hier ↘</text>
  <text x="${X0+4}" y="${Y(60)+18}" font-size="11" style="fill:var(--muted)">Ende der Belastung</text>
  <text x="${X1}" y="${Y(60)+18}" text-anchor="end" font-size="11" style="fill:var(--muted)">Zeit der Pause →</text>
  <text x="12" y="14" font-size="11" font-weight="700">Puls/min</text></svg>`;
}
// Modell der Superkompensation – beschriftet wie Abb. 2 auf deinem Arbeitsblatt
function spSvgSuper(){
  const B=132,P1="M50,132 C68,132 80,208 112,208 C144,208 160,132 182,132",P2="C210,132 230,76 262,76 C296,76 330,132 372,132";
  const lab=(x,t,c)=>t.map((z,i)=>`<text x="${x}" y="${276+i*13}" text-anchor="middle" font-size="10.5" font-weight="700"${c?` style="fill:var(${c})"`:""}>${z}</text>`).join("");
  return `<svg class="sp-svg" viewBox="0 0 420 300" role="img" aria-label="Modell der Superkompensation">
  <defs><marker id="sp-ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--fg)"/></marker></defs>
  <path d="${P1} Z" style="fill:var(--crown-soft)"/>
  <path d="M182,132 ${P2} Z" style="fill:var(--parl-soft)"/>
  <text x="81" y="18" text-anchor="middle" font-size="10.5" font-weight="700" style="fill:var(--crown)">Belastungs-</text>
  <text x="81" y="31" text-anchor="middle" font-size="10.5" font-weight="700" style="fill:var(--crown)">reiz</text>
  <text x="147" y="18" text-anchor="middle" font-size="11" font-weight="700">Erholung</text>
  <text x="277" y="18" text-anchor="middle" font-size="11" font-weight="700">Anpassung</text>
  <text x="222" y="32" text-anchor="middle" font-size="10" style="fill:var(--parl)">positiv</text>
  <text x="317" y="32" text-anchor="middle" font-size="10" style="fill:var(--muted)">negativ</text>
  ${[112,182].map(x=>`<line x1="${x}" y1="6" x2="${x}" y2="258" stroke="var(--line)" stroke-width="1" stroke-dasharray="3 4"/>`).join("")}
  <line x1="262" y1="23" x2="262" y2="258" stroke="var(--line)" stroke-width="1" stroke-dasharray="3 4"/>
  <line x1="372" y1="6" x2="372" y2="258" stroke="var(--line)" stroke-width="1" stroke-dasharray="3 4"/>
  <line x1="36" y1="262" x2="36" y2="40" stroke="var(--fg)" stroke-width="1.6" marker-end="url(#sp-ar)"/>
  <text x="14" y="152" font-size="12" font-weight="700" transform="rotate(-90 14 152)" text-anchor="middle">Leistungsniveau</text>
  <line x1="36" y1="${B}" x2="412" y2="${B}" stroke="var(--fg)" stroke-width="1.4" marker-end="url(#sp-ar)"/>
  <text x="410" y="${B-8}" text-anchor="end" font-size="11" font-weight="700">Zeit</text>
  <text x="410" y="${B+15}" text-anchor="end" font-size="10.5" style="fill:var(--muted)">Ausgangsniveau</text>
  <path d="${P1} ${P2} L404,${B}" fill="none" stroke="var(--fg)" stroke-width="2.6"/>
  <line x1="50" y1="44" x2="50" y2="${B-6}" stroke="var(--crown)" stroke-width="2.2" marker-end="url(#sp-ar)"/>
  <text x="55" y="64" font-size="9" style="fill:var(--muted)">Homöostase-</text>
  <text x="55" y="75" font-size="9" style="fill:var(--muted)">störung</text>
  <circle cx="262" cy="76" r="4.5" style="fill:var(--parl)"/>
  <text x="262" y="64" text-anchor="middle" font-size="10.5" font-weight="700" style="fill:var(--parl)">★ neuer Reiz</text>
  ${lab(81,["Ermüdung"],"--crown")}${lab(147,["Wieder-","herstellung"])}${lab(222,["Super-","kompensation"],"--parl")}${lab(317,["Rückkehr zum","Ausgangsniveau"])}</svg>`;
}
// Pausen zwischen den Trainingseinheiten: opt | lang | kurz
function spSvgPause(kind){
  const B={opt:122,lang:74,kurz:58}[kind],HT={opt:172,lang:132,kurz:172}[kind],D=26,H=16;
  let x=24,y=B,d=`M${x},${y}`,marks=[];
  const dip=(x,y,w)=>` C${x+w*.08},${y} ${x+w*.14},${y+D} ${x+w*.27},${y+D} C${x+w*.4},${y+D} ${x+w*.46},${y} ${x+w*.56},${y}`;
  if(kind==="opt"){const w=92;
    for(let i=0;i<4;i++){marks.push([x,y]);d+=dip(x,y,w)+` C${x+w*.72},${y} ${x+w*.84},${y-H} ${x+w},${y-H}`;x+=w;y-=H}
    marks.push([x,y]);}
  else if(kind==="lang"){const w=78;
    for(let i=0;i<3;i++){marks.push([x,y]);d+=dip(x,y,w)+` C${x+w*.68},${y} ${x+w*.74},${y-H} ${x+w*.86},${y-H} C${x+w*.98},${y-H} ${x+w*1.04},${y} ${x+w*1.18},${y} L${x+w*1.4},${y}`;x+=w*1.4}
    marks.push([x-6,y]);}
  else{const w=64;
    for(let i=0;i<5;i++){marks.push([x,y]);const ny=y+D*.5;d+=` C${x+w*.12},${y} ${x+w*.22},${y+D} ${x+w*.42},${y+D} C${x+w*.62},${y+D} ${x+w*.82},${ny} ${x+w},${ny}`;x+=w;y=ny}
    marks.push([x,y]);}
  const T={opt:["Optimale Pause","neuer Reiz im höchsten Punkt → Leistung steigt","--parl"],lang:["Zu lange Pausen","zurück aufs Ausgangsniveau → keine Steigerung (Schulsport!)","--gold"],kurz:["Zu kurze Pausen","neuer Reiz in der Ermüdung → Leistung sinkt: Übertraining","--crown"]}[kind];
  return `<svg class="sp-svg" viewBox="0 0 420 ${HT}" role="img" aria-label="${T[0]}">
  <text x="6" y="16" font-size="13" font-weight="700" style="fill:var(${T[2]})">${T[0]}</text>
  <text x="6" y="31" font-size="10.5" style="fill:var(--muted)">${T[1]}</text>
  <line x1="18" y1="${B}" x2="412" y2="${B}" stroke="var(--line)" stroke-width="1.4" stroke-dasharray="6 5"/>
  <text x="412" y="${B-5}" text-anchor="end" font-size="9.5" style="fill:var(--muted)">Ausgangsniveau</text>
  <path d="${d}" fill="none" stroke="var(${T[2]})" stroke-width="2.4"/>
  ${marks.slice(0,-1).map(([mx,my])=>`<path d="M${mx-4},${my-12} L${mx+4},${my-12} L${mx},${my-4} z" style="fill:var(--fg)"/>`).join("")}
  <text x="6" y="${HT-6}" font-size="9.5" style="fill:var(--muted)">▼ = Trainingsreiz</text></svg>`;
}
// Gleichbleibende Belastung: Ermüdung und Anpassung werden immer kleiner (wie Abb. 7 auf deinem Blatt)
function spSvgGleich(){
  const B=118,w=74,D=[34,26,18,12,8],H=[18,12,7,3,1];
  let x=28,y=B,d=`M${x},${y}`,marks=[];
  for(let i=0;i<5;i++){marks.push([x,y]);const dd=D[i],hh=H[i];
    d+=` C${x+w*.08},${y} ${x+w*.14},${y+dd} ${x+w*.27},${y+dd} C${x+w*.4},${y+dd} ${x+w*.46},${y} ${x+w*.56},${y} C${x+w*.72},${y} ${x+w*.84},${y-hh} ${x+w},${y-hh}`;
    x+=w;y-=hh}
  d+=` L412,${y}`;
  return `<svg class="sp-svg" viewBox="0 0 420 178" role="img" aria-label="Gleichbleibende Trainingsreize führen zur Stagnation">
  <text x="6" y="16" font-size="13" font-weight="700" style="fill:var(--gold)">Gleichbleibende Trainingsreize</text>
  <text x="6" y="31" font-size="10.5" style="fill:var(--muted)">Ermüdung und Anpassung werden immer kleiner → Stagnation</text>
  <line x1="18" y1="${B}" x2="412" y2="${B}" stroke="var(--line)" stroke-width="1.4" stroke-dasharray="6 5"/>
  <text x="412" y="${B+14}" text-anchor="end" font-size="9.5" style="fill:var(--muted)">Ausgangsniveau</text>
  <line x1="300" y1="${y}" x2="412" y2="${y}" stroke="var(--crown)" stroke-width="1.2" stroke-dasharray="4 4"/>
  <text x="412" y="${y-6}" text-anchor="end" font-size="10.5" font-weight="700" style="fill:var(--crown)">Stagnation</text>
  <path d="${d}" fill="none" stroke="var(--gold)" stroke-width="2.4"/>
  ${marks.map(([mx,my])=>`<path d="M${mx-4},${my-12} L${mx+4},${my-12} L${mx},${my-4} z" style="fill:var(--fg)"/>`).join("")}
  <text x="6" y="170" font-size="9.5" style="fill:var(--muted)">▼ = immer derselbe Trainingsreiz</text></svg>`;
}
// Kraftzuwachs und -verlust nach dem Diagramm aus deinem Lehrbuch (S. 13), vereinfacht auf zwei Linien
function spSvgKraft(){
  const X=w=>+(40+(w+45)/105*368).toFixed(1),Y=p=>+(180-p*1.6).toFixed(1);
  return `<svg class="sp-svg" viewBox="0 0 420 262" role="img" aria-label="Kraftzuwachs bei langsamem und schnellem Aufbau">
  <defs><marker id="sp-ar2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="var(--fg)"/></marker></defs>
  ${[20,40,60,80,100].map(p=>`<line x1="40" y1="${Y(p)}" x2="408" y2="${Y(p)}" stroke="var(--line)" stroke-width="1" stroke-dasharray="2 4"/><text x="34" y="${Y(p)+3.5}" text-anchor="end" font-size="9.5" style="fill:var(--muted)">${p}</text>`).join("")}
  <line x1="40" y1="180" x2="40" y2="12" stroke="var(--fg)" stroke-width="1.5" marker-end="url(#sp-ar2)"/>
  <line x1="40" y1="180" x2="414" y2="180" stroke="var(--fg)" stroke-width="1.5" marker-end="url(#sp-ar2)"/>
  ${[-40,-20,0,20,40,60].map(w=>`<text x="${X(w)}" y="193" text-anchor="middle" font-size="9.5" style="fill:var(--muted)">${w<0?"−"+(-w):w}</text>`).join("")}
  <line x1="${X(0)}" y1="22" x2="${X(0)}" y2="180" stroke="var(--muted)" stroke-width="1.2" stroke-dasharray="4 4"/>
  <text x="${(X(-45)+X(0))/2}" y="22" text-anchor="middle" font-size="12" font-weight="700">Training</text>
  <text x="${(X(0)+408)/2}" y="22" text-anchor="middle" font-size="12" font-weight="700">kein Training</text>
  <text x="12" y="100" font-size="11" font-weight="700" transform="rotate(-90 12 100)" text-anchor="middle">Kraftzuwachs %</text>
  <text x="408" y="172" text-anchor="end" font-size="10" style="fill:var(--muted)">Wochen</text>
  <polyline points="${X(-45)},${Y(0)} ${X(0)},${Y(65)} ${X(55)},${Y(40)}" fill="none" stroke="var(--parl)" stroke-width="3"/>
  <polyline points="${X(-20)},${Y(0)} ${X(0)},${Y(85)} ${X(30)},${Y(0)}" fill="none" stroke="var(--crown)" stroke-width="3" stroke-dasharray="8 5"/>
  <text x="404" y="${Y(40)-8}" text-anchor="end" font-size="11" font-weight="700" style="fill:var(--parl)">stabil</text>
  <text x="${X(24)}" y="${Y(28)}" font-size="11" font-weight="700" style="fill:var(--crown)">Labilität!</text>
  <line x1="40" y1="214" x2="72" y2="214" stroke="var(--parl)" stroke-width="3"/>
  <text x="80" y="218" font-size="11">langsam (allmählich) aufgebaut → bleibt lange erhalten</text>
  <line x1="40" y1="233" x2="72" y2="233" stroke="var(--crown)" stroke-width="3" stroke-dasharray="8 5"/>
  <text x="80" y="237" font-size="11">schnell (sprunghaft) aufgebaut → schnell wieder weg</text>
  <text x="40" y="256" font-size="9.5" style="fill:var(--muted)">vereinfacht nach dem Diagramm aus deinem Lehrbuch (S. 13)</text></svg>`;
}
const SP_KRAFT_TXT=`<p><b>So liest du das Diagramm:</b> Links wird trainiert, ab Woche 0 nicht mehr. Die <b style="color:var(--parl)">langsam</b> über ca. 45 Wochen aufgebaute Kraft (+65 %) ist nach über 50 Wochen ohne Training noch zu einem großen Teil da (ca. +40 %). Die <b style="color:var(--crown)">schnell</b> in ca. 20 Wochen aufgebaute Kraft (+85 %, im Original mit täglichem Training) ist nach 30 Wochen ohne Training wieder ganz weg. <b>Schnell gewonnen – schnell verloren</b>: Das ist die Labilität der sprunghaften Steigerung.</p>`;

/* =========================================================
   UNTERRICHT
   ========================================================= */
function spuMethoden(el){
  el.innerHTML=`
  <div class="erachips sp-chips"><a href="#su1">Überblick</a><a href="#su1b">Skizzen</a><a href="#su2">Dauer</a><a href="#su3">Wiederholung</a><a href="#su4">Intervall</a></div>

  <section class="tx" id="su1"><span class="tx-y">Arbeitsblatt + Mitschrift</span><h2>Trainingsmethoden im Überblick</h2>
   <p>Ob du minuten- oder stundenlang trainierst – entscheidend ist, <b>wie die Pausen aussehen</b>:</p>
   ${spTable(["So trainierst du …","… das ist die"],[
    ["ohne Pause durch","<b>Dauermethode</b>"],
    ["mit regelmäßigen Pausen, die nur so lange dauern, bis der Puls auf ca. 120/min gefallen ist („lohnende Pausen“)","<b>Intervallmethode</b> – Belastungsreiz relativ kurz, aber von höherer Intensität = <b>intensiv</b>, bei der <b>extensiven</b> ist es umgekehrt"],
    ["mit so langen Pausen, dass du dich fast vollständig erholst","<b>Wiederholungsmethode</b>"]])}
   ${spSvgGefuege()}
   <p>Verschiedene Trainingsmethoden unterscheiden sich durch ein jeweils spezifisches <b>Belastungsgefüge</b>. Die Wirksamkeit eines Reizes hängt vor allem von <b>Intensität</b> und <b>Umfang</b> ab – und die verhalten sich gegenläufig: Bei hoher Intensität muss der Umfang gering, bei geringer Intensität hoch sein.</p>
  </section>

  <section class="tx" id="su1b"><span class="tx-y">Mitschrift</span><h2>Skizzen: % der Trainingsfähigkeit</h2>
   ${spFaehigBlock()}
  </section>

  <section class="tx" id="su2"><span class="tx-y">Methode 1</span><h2>Die Dauermethode</h2>
   <p class="meta">z. B. Ausdauerlauf · Stärkung des Herz-Kreislauf-Systems</p>
   <ul class="ps-ul"><li>ein einziger <b>Dauerreiz</b> (ohne Pause)</li><li>mit <b>geringer Intensität</b></li><li>dafür <b>hohe Reizdauer</b> (über 30 min) → <b>hoher Reizumfang</b></li></ul>
   <h3 class="ps-h">Wirkung</h3>
   <p>Vor allem im Bereich <b>Herz-Kreislauf-System</b>: Das Herzvolumen vergrößert sich, die Herzwände werden stärker, die Kapillarisierung im Muskel verbessert sich, die Glykogenspeicher werden aufgestockt, der Kohlenhydrat- und Fettabbau wird aktiviert.</p>
   ${spTable(["Ziel","So wird trainiert"],[
    ["<b>Fettstoffwechsel aktivieren</b> (Gewicht reduzieren)","umfangreich, geringe Intensität, über eine halbe Stunde, Puls ca. 140–160 – jeden Tag möglich"],
    ["<b>Grundlagenausdauer verbessern</b>","höhere Intensität, über der Dauerleistungsgrenze (man kann sich nur noch mit Mühe unterhalten) – braucht längere Erholung, 2 × pro Woche kann reichen"]])}
   <p>Auch Kraftsportlern wird Ausdauertraining empfohlen – die Muskeln „laufen nicht weg“, wenn sie auf eine gut abgestimmte, überkalorische Ernährung achten.</p>
   <h3 class="ps-h">Geeignet für</h3>
   <ul class="ps-ul"><li>Übergewichtige als Gewichtsreduktionstraining</li><li>Ausgleich bei beruflich bedingtem Bewegungsmangel</li><li>Basistraining für alle weiteren sportlichen Leistungen</li></ul>
   <p class="ex">Die Dauermethode ist die <b>grundlegende Trainingsmethode überhaupt</b> – egal, welches Trainingsziel du hast.</p>
  </section>

  <section class="tx" id="su3"><span class="tx-y">Methode 2</span><h2>Die Wiederholungsmethode</h2>
   <p class="meta">z. B. Krafttraining · im Gegensatz zur Dauermethode „die Krafttrainingsmethode schlechthin“</p>
   <ul class="ps-ul"><li><b>hohe Intensität</b></li><li>dafür <b>geringe Reizdauer</b></li><li><b>geringe Reizdichte</b>, d. h. lange Pausen, die der <b>vollständigen Erholung</b> dienen</li></ul>
   <p>Weil man sich zwischen den Belastungen fast vollständig erholt, kann die <b>hohe Intensität bis zum Ende</b> des Trainings gehalten werden. Während die Dauermethode vor allem auf Herz und Kreislauf wirkt, führt die Wiederholungsmethode ausschließlich zu <b>Anpassungen innerhalb des Muskels</b>.</p>
   <h3 class="ps-h">Interessant für</h3>
   <ul class="ps-ul"><li>Fitnesssportler: Muskelaufbau und Kraftzuwachs</li><li>Fitnessbewusste: Straffung des Muskels</li><li>Haltungsschwächen: Kräftigung der abgeschwächten Muskeln</li><li>Ausgleich zu einseitigen Belastungen in Beruf oder anderen Sportarten</li></ul>
   <p class="ex">Damit ist auch die Wiederholungsmethode für ein <b>umfassendes Körpertraining unumgänglich</b>.</p>
  </section>

  <section class="tx" id="su4"><span class="tx-y">Methode 3 + 4</span><h2>Die Intervallmethoden</h2>
   <p>Kennzeichen: <b>regelmäßiger Wechsel von Belastung und Erholung</b>. Die Pause ist <b>unvollständig</b> – das ist die „<b>lohnende Pause</b>“ oder „<b>Ein-Drittel-Pause</b>“: Nach einer Belastung erholt man sich nicht gleichmäßig, sondern im <b>ersten Drittel</b> der Erholungszeit viel schneller als in den übrigen zwei Dritteln. Maßstab ist der Puls: Sobald er auf <b>120 Schläge/min</b> gefallen ist, kommt die nächste Belastung.</p>
   ${spSvgPuls()}
   <h3 class="ps-h">3.1 Extensive Intervallmethode</h3>
   <p class="meta">z. B. Mittelstrecke: 300 m – 1500 m</p>
   <ul class="ps-ul"><li><b>hoher Umfang</b> und <b>geringe Intensität</b> (ca. 30–50 % der maximalen Kraft)</li><li><b>hohe Reizdauer</b>: 60 Sekunden bis 15 Minuten pro Intervall</li><li>Pausen dafür <b>kürzer</b> als bei der intensiven Methode</li><li>Wirkung wie bei der Dauermethode vor allem <b>Herz-Kreislauf</b> → im Training ergänzend zur Dauermethode</li></ul>
   <h3 class="ps-h">3.2 Intensive Intervallmethode</h3>
   <p class="meta">z. B. Kurzstrecke: 100 m / 200 m</p>
   <ul class="ps-ul"><li><b>mittlere bis hohe Intensität</b>, dafür <b>geringe Reizdauer</b></li><li>Pausen dafür <b>länger</b> als bei der extensiven Methode</li><li>Wirkung: Verbesserung der <b>anaeroben Kapazität</b> (Energiegewinnung ohne Sauerstoff) → ergänzend zur Wiederholungsmethode, z. B. im Zirkeltraining</li><li>Besonders bei <b>Leistungsstagnation</b> liefert die Intervallmethode neue Reize.</li></ul>
   <p class="ex"><b>Bei beiden Intervallmethoden</b> dienen die Pausen nicht der vollständigen Erholung (weiter trainieren, sobald der Puls 120/min schlägt). Die Pausen <b>aktiv</b> gestalten (traben), sonst sackt das Blut in die Beine – die Muskelbewegung pumpt es über die Venen zurück zum Herzen.</p>
  </section>`;
}

function spuAnpassung(el){
  el.innerHTML=`
  <div class="erachips sp-chips"><a href="#sa1">Adaptation</a><a href="#sa2">Superkompensation</a><a href="#sa3">Pausen</a><a href="#sa4">Reizschwelle</a><a href="#sa5">Leistungsentwicklung</a></div>

  <section class="tx" id="sa1"><span class="tx-y">Arbeitsblatt · Def. ✗</span><h2>Training als Anpassungsvorgang</h2>
   ${spDef("Adaptation (Anpassung) und Anpassungsfähigkeit","Die Fähigkeit zur Anpassung ist ein Grundphänomen aller Lebewesen. Deshalb ist es möglich, durch Training (Belastung des Körpers) funktionelle Anpassungen auszulösen.")}
   ${spDef("Qualitätsgesetz (physiologisches Gesetz)","Spezifische Reize bewirken spezifische Anpassungsreaktionen.")}
   <p>Anpassung hat nur dann einen Sinn, wenn der Körper durch seine Anpassungsreaktionen in die Lage versetzt wird, den jeweiligen spezifischen Anforderungen besser gewachsen zu sein: <i>„Die stärkere Funktion ändert die qualitative Beschaffenheit der Organe, indem sie die spezifische Leistungsfähigkeit derselben erhöht.“</i></p>
   <p>Beispiele: Durch Reckturnen bilden sich <b>Schwielen</b> an den Händen, durch kurze Belastungen mit hoher Intensität wird die <b>Kraft</b>, durch längere Belastungen mit geringer Intensität die <b>Ausdauer</b> verbessert.</p>
  </section>

  <section class="tx" id="sa2"><span class="tx-y">Klausurrelevant · mit Abbildung</span><h2>Homöostase und Superkompensation</h2>
   <p><b>Superkompensation</b> beschreibt die Fähigkeit des Körpers, nach ermüdenden Belastungen <b>Schwachstellen zu verstärken</b>. Beispiel <b>Hornhaut</b>: Beim Reiben an der Hantel werden Hautschichten zerstört. Der Körper erneuert das Gewebe nicht nur (= kompensieren), sondern baut vorbeugend zusätzliche Hornhaut auf (= <b>super</b>kompensieren). Die Schwielenbildung ist also eine <b>Schutzmaßnahme</b> gegen erneute Belastungen. Genauso funktionieren Kraftzuwachs, Muskelwachstum, Straffung und die Anpassung von Herz und Kreislauf an Ausdauertraining.</p>
   <p><b>Aufbau nach dem Abbau:</b> Nach dem Training fällt das Treppensteigen schwer – die Beine sind ermüdet. Nach ein bis zwei Tagen hat sich der Körper erholt und ist leistungsfähiger als vorher.</p>
   ${spDef("Homöostase","Zwischen Belastungsanforderungen und dem Leistungsniveau des Körpers besteht ein dynamisches Gleichgewicht (Homöostase). Durch Belastungsreize ausgelöste Anpassungsprozesse verbessern das Leistungsniveau über das Ausgangsniveau hinaus (Superkompensation).")}
   ${spSvgSuper()}
   <p class="meta">Auf dem anderen Blatt (Abb. 1) heißen die Phasen kürzer <b>Ermüdung – Erholung – Anpassung – Rückgang</b>, und die y-Achse heißt „Leistungsfähigkeit“. Beides ist richtig.</p>
   <p>Wird die Homöostase durch einen Reiz gestört, versucht der Körper, ein der veränderten Situation angepasstes Gleichgewicht herzustellen. Die nach der Ermüdung einsetzenden Wiederherstellungs- und Anpassungsprozesse sollen die belasteten Teilsysteme so verbessern, dass sie einer gleichartigen Belastung in Zukunft besser gewachsen sind. Das geschieht, indem nach der Wiederherstellung eine Anpassung <b>über das Ausgangsniveau hinaus</b> stattfindet.</p>
   ${spDef("Merksatz","Anpassungsprozesse in der Superkompensationsphase sind die Grundlage für Funktions- und Leistungssteigerungen.")}
   <a class="ex" style="display:block;text-decoration:none;color:inherit" href="#/sport/klausur/superkomp"><b>→ Kurzform zum Auswendiglernen und Musterantwort in der Klausurvorbereitung</b></a>
  </section>

  <section class="tx" id="sa3"><span class="tx-y">Klausurrelevant · Abb. 2–4</span><h2>Prinzip der optimalen Relation von Belastung und Erholung</h2>
   ${spDef("Definition","Ein optimaler Leistungszuwachs wird nur erreicht, wenn die neue Belastung (Trainingseinheit) zum Zeitpunkt der höchsten Superkompensation erfolgt.")}
   <p>Dieses Prinzip ist eine direkte Anwendung des Homöostasegesetzes. Da im Gesundheitssport kein maximaler Leistungszuwachs im Vordergrund steht, gilt als grober Richtwert eine Belastungspause von <b>48 Stunden</b>. <b>Im Schulsport wird das meistens nicht erfüllt</b> – bis zur nächsten Sportstunde ist die Pause zu lang.</p>
   ${spSvgPause("opt")}${spSvgPause("lang")}${spSvgPause("kurz")}
   <ol class="ps-ul"><li>Optimal genutzt wird der Schutzeffekt, wenn der erneute Trainingsreiz möglichst im <b>höchsten Punkt der Anpassung</b> gesetzt wird.</li>
   <li>Ist die Pause bis zum nächsten Reiz <b>zu lang</b> bzw. bleiben weitere Belastungen aus, bildet sich das Leistungsniveau aufgrund der Homöostase <b>wieder zurück</b>. Typisch im Freizeitsport.</li>
   <li><b>Zu kurze</b> Pausen können zum <b>Übertraining</b> führen, da noch keine optimale Superkompensation erreicht wurde. „Trotz“ härtesten Trainings stagniert oder sinkt die Leistung – das ist Hochleistungssportlern oft schwer zu vermitteln.</li></ol>
   <p>Im Lehrbuch (Abb. 11) sieht man zusätzlich: Auch etwas neben dem Optimum (im „wirksamen Bereich“) steigt die Leistung noch. Zu kurze oder zu lange Pausen führen zur <b>Stagnation</b> – oder sogar zum <b>Absinken</b>. Wird das Prinzip nicht beachtet, bleibt das Training wirkungslos.</p>
   <p class="ex">Im Hochleistungssport versucht man die individuell beste Pause über Trainingstagebücher und das eigene Leistungsgefühl zu finden – schwierig, weil sich die Organsysteme unterschiedlich schnell erholen.</p>
  </section>

  <section class="tx" id="sa4"><span class="tx-y">Gehört zu Thema 3</span><h2>Reizschwellengesetz</h2>
   ${spDef("Definition","Anpassungsreaktionen werden nur dann ausgelöst, wenn eine kritische Reizschwelle überschritten wird.")}
   <p>Liegt ein Reiz unter der Schwelle, passiert nichts. Beim Maximalkrafttraining liegt die Reizschwelle bei Untrainierten bei etwa <b>30 %</b>, bei Hochtrainierten bei etwa <b>70 %</b> des Leistungsvermögens – ein großer Teil der Anpassung wird dort schon gebraucht, um das hohe Niveau nur zu halten. Zu hohe Reize führen zu Schäden (z. B. Kreislaufkollaps) oder zu einem Absinken der Leistung.</p>
   <h3 class="ps-h">Zusammenhang mit dem Prinzip der steigenden Belastung</h3>
   <ol class="ps-ul">${SP_WARUM.map(s=>`<li>${s}</li>`).join("")}</ol>
   <h3 class="ps-h">Belastungsdosierung (Lehrbuch Abb. 10)</h3>
   ${spTable(["Belastungsreiz","Trainingswirkung"],[["zu stark","schädlich (Abnahme)"],["stark oder mittel (überschwellig)","positiv (deutlicher Anstieg)"],["schwach (überschwellig)","gering (Erhaltung / Anstieg)"],["unterschwellig","unwirksam (Abnahme)"]])}
   <p>Bei hoher Intensität muss ein <b>Mindestumfang</b>, bei hohem Umfang eine <b>Mindestintensität</b> eingehalten werden, damit die Reizschwelle erreicht wird. Festgelegt wird die Dosierung über Intensität, Dichte, Dauer, Umfang und Trainingshäufigkeit im Belastungsgefüge.</p>
   <h3 class="ps-h">Schutzmechanismus: die Mobilisationsschwelle</h3>
   ${spTable(["Anteil","Bereich der Leistungsfähigkeit"],[["0–20&nbsp;%","automatisierte Leistungen"],["20–45&nbsp;%","physiologische Leistungsbereitschaft"],["45–70&nbsp;%","gewöhnliche Einsatzreserven"],["70&nbsp;%","<b>Mobilisationsschwelle</b>"],["70–100&nbsp;%","autonom geschützte Reserven – nur durch Wut, Angst, Freude, Lust oder Doping erreichbar"]])}
   <p class="meta">Der Körper verhindert so in der Regel eine Überbelastung. Durch Training kann die Mobilisationsschwelle um 20 % auf 90 % erhöht werden.</p>
  </section>

  <section class="tx" id="sa5"><span class="tx-y">Hintergrund</span><h2>Verlauf der Leistungsentwicklung</h2>
   ${spDef("Definition","Mit zunehmendem Leistungsniveau wird trotz eines größeren Trainingsaufwands der Leistungszuwachs immer geringer.")}
   ${spTable(["Phase","Leistungszuwachs"],[["Anfängertraining (Grundlagentraining)","sehr hoch, selbst bei geringem Aufwand – 10–20 % in 12 Wochen"],["Aufbautraining","Belastungserhöhungen bringen noch deutliche Verbesserungen"],["Hochleistungstraining","selbst höchste Reize bringen nur wenig – 1 % ist schon schwer (100 m: 10,0 → 9,9 s)"]])}
   <p><b>Kann man sich ständig verbessern?</b> Nein. Ein Bankdrück-Meister rechnete vor: Hätte er sich seit fünf Jahren (100 kg) in jeder Einheit um 2,5 kg verbessert, müsste er heute 1400 kg drücken. Nur Anfänger werden in jeder Einheit besser. Fortgeschrittene haben sich an hohe Belastungen gewöhnt – bei ihnen fallen die Ermüdung und damit auch die Anpassung kleiner aus als bei Anfängern (Abb. 6 auf deinem Blatt).</p>
   <p>Im Grenzbereich bewegt sich der Athlet auf einem schmalen Weg zwischen positiver und negativer Anpassung: Sind die abbauenden Prozesse stärker als die aufbauenden, entsteht <b>Übertraining</b>.</p>
  </section>`;
}

function spuPrinzipien(el){
  el.innerHTML=`
  <div class="erachips sp-chips"><a href="#sp1">Steigende Belastung</a><a href="#sp2">Allmählich & sprunghaft</a><a href="#sp3">Variierend</a><a href="#sp4">Unvollst. Erholung</a><a href="#sp5">Allg. & spez.</a></div>

  <section class="tx" id="sp1"><span class="tx-y">Lehrbuch S. 17–18</span><h2>Prinzip der steigenden (progressiven) Belastung</h2>
   ${spDef("Definition","Zur Auslösung einer weiteren Leistungssteigerung muss mit zunehmendem Leistungsniveau die Belastung erhöht werden.")}
   <p>Nur <b>ungewohnte</b> Belastungen stören die Homöostase. Ein Gewicht, das am Anfang gerade so ging, fühlt sich nach einiger Zeit zu leicht an. Trainiert man damit weiter, wird man weniger müde, die Anpassung wird kleiner – bis zur völligen <b>Stagnation</b>. Deshalb muss die Belastung entsprechend dem Fortschritt ständig erhöht werden – auch wenn man nur straffen oder abnehmen will.</p>
   ${spSvgGleich()}
   <h3 class="ps-h">Möglichkeiten, die Belastung zu steigern</h3>
   ${spTable(["Steigerung der …","Belastungskomponente"],[["Trainingseinheiten","Trainingshäufigkeit"],["Sätze","Belastungsumfang"],["Gewichte","Belastungsintensität"],["Wiederholungszahl","Reizdauer"],["Verkürzung der Pausen","Reizdichte"]])}
   <p>Auch 5 Minuten länger Rad fahren ist schon eine Steigerung. Aber: Unterschiedliche Steigerungen führen zu <b>unterschiedlichen Anpassungen</b>. Für Muskelaufbau und Straffung vor allem die <b>Intensität</b>, für Ausdauer und Gewichtsreduktion den <b>Umfang</b> steigern.</p>
   <p class="ex"><b>Reihenfolge im langfristigen Training:</b> zuerst <b>Umfang</b> (längere Belastungszeit), dann <b>Dichte</b> (kürzere Pausen), als letzte Maßnahme die <b>Intensität</b>.</p>
  </section>

  <section class="tx" id="sp2"><span class="tx-y">Klausurrelevant</span><h2>Allmähliche und sprunghafte Belastungssteigerung</h2>
   <h3 class="ps-h" style="color:var(--parl)">Allmählich</h3>
   <p>Grundsätzlich empfiehlt sich zunächst die allmähliche Steigerung: ein <b>gleichmäßiger Anstieg in kleinen Stufen</b>, je nach individueller Belastbarkeit, mit <b>vorsichtiger Annäherung an die Belastungsgrenze</b>. Sie bewirkt eine <b>stabile Anhebung</b> des Leistungsniveaus und reicht lange Zeit aus. Sie kommt vor allem im <b>Nachwuchsbereich</b> zur Anwendung, um Bewegungsapparat und Herz-Kreislauf-System nicht zu überfordern.</p>
   <p><b>Typischer Fehler im Fitnessstudio:</b> Viele orientieren sich am <b>Maximum</b> und wollen in jedem Training so viele Wiederholungen wie möglich. Nachteile:</p>
   <ol class="ps-ul"><li>Das Training wird mit immer schwereren Gewichten zur Quälerei.</li><li>Der Versuch, sich jedes Mal zu verbessern, scheitert schnell → Frust und negative Einstellung zur eigenen Leistung.</li><li>Das Training führt zu vorzeitiger Stagnation.</li></ol>
   <p><b>Besser: am Minimum orientieren</b> – an dem, was du <b>mindestens</b> schaffen musst, um dich im nächsten Training zu verbessern.</p>
   <div class="step"><span class="afb">Beispiel vom Blatt: 6–12 Wiederholungen</span><ol><li>6 Wiederholungen mit einem Gewicht – auch wenn mehr ginge.</li><li>Nächstes Training 7, dann 8 … bis 12.</li><li>Bei 12: Gewicht um die kleinste Einheit erhöhen (meist 2,5 kg) und wieder mit 6 beginnen.</li></ol></div>
   <h3 class="ps-h" style="color:var(--crown)">Sprunghaft</h3>
   <p>Kommt es trotzdem zum <b>Leistungsstillstand</b>, unterbricht man die lineare Steigerung gezielt durch <b>sprunghafte Erhöhungen</b>: Eine abrupte Anhebung der <b>Intensität</b> oder des <b>Umfangs</b> stört die Homöostase stärker und bewirkt eine höhere Anpassung. Sie braucht eine <b>gute Leistungsgrundlage</b> (z. B. Höhentraining). <b>Nachteil:</b> die <b>Labilität</b> des gewonnenen Niveaus – deshalb bleiben Phasen allmählicher Steigerung zur Stabilisierung unverzichtbar und bestimmen auch weiterhin das Training des Fortgeschrittenen. Wird oft angewendet, um <b>Trainingsrückstände</b> aufzuholen (nach Krankheit, Verletzung).</p>
   ${spSvgKraft()}${SP_KRAFT_TXT}
  </section>

  <section class="tx" id="sp3"><span class="tx-y">Klausurrelevant</span><h2>Variierende Belastungssteigerung</h2>
   <p>Wie die sprunghafte hilft auch jede Form der <b>Abwechslung</b>, <b>Leistungsstagnationen zu umgehen</b>. Sie soll einer <b>Monotonie</b> der Trainingsbelastung und damit einer geringeren Wirksamkeit entgegenwirken. Durch die neue, ungewohnte Belastung wird die Reizschwelle wieder überschritten.</p>
   <ul class="ps-ul"><li>allmähliche und sprunghafte Steigerung abwechseln</li><li>Trainingsmittel und Trainingsmethoden variieren</li><li>Belastungskomponenten variieren: Satzzahl, Wiederholungszahl, Pausendauer, Höhe der Gewichte</li><li>Übungen und Bewegungsdynamik (z. B. Bewegungsgeschwindigkeit) ändern</li></ul>
   <h3 class="ps-h">Der motorisch-dynamische Bewegungsstereotyp</h3>
   <p>Beispiel: Jemand kommt beim <b>Bankdrücken</b> nicht mehr weiter, ersetzt es durch <b>Kurzhanteldrücken</b> – und hat am nächsten Tag Muskelkater. Die Übung ist nicht besser, sondern <b>ungewohnt</b>. Ständig gleichförmige Bewegungen „schleifen“ ein Bewegungsmuster ein.</p>
   <p>Sprinter kennen das: Das Nervensystem speichert die Geschwindigkeit, mit der die Arme und Beine bei 100 m immer bewegt werden (<b>Geschwindigkeitsbarriere</b>). Dann hilft selbst Krafttraining nicht. Der Trick: <b>bergab laufen</b>. Hat das Nervensystem akzeptiert, dass schnellere Bewegungen möglich sind, kann der Läufer seine Kraft wieder voll einsetzen.</p>
   <p class="ex"><b>Ungewohnte Bewegungen und abrupte Veränderungen der Belastung beugen einem Bewegungsstereotyp vor.</b> Stößt du an eine Leistungsgrenze, ist Variieren sinnvoll. Übungen aber nur dann zeitweise ersetzen, wenn wirklich ein eingeschliffener Bewegungsstereotyp der Grund für den Stillstand ist.</p>
  </section>

  <section class="tx" id="sp4"><span class="tx-y">Hintergrund · Lehrbuch S. 19</span><h2>Prinzip der unvollständigen Erholung</h2>
   ${spDef("Definition","Eine Ermüdung durch mehrmalige Belastungsreize in der Wiederherstellungsphase führt zu einer erhöhten Superkompensation.")}
   <p>Vor allem im Hochleistungssport (Ausdauer): Serien mit unvollständiger Erholung folgen aufeinander, auch ganze Trainingseinheiten werden bewusst in die Wiederherstellungsphase gelegt (<b>Wochenstoßtraining</b>). Danach muss eine <b>längere Pause</b> oder eine Phase mit reduziertem Training folgen – sonst Übertraining.</p>
  </section>

  <section class="tx" id="sp5"><span class="tx-y">Alte Aufgabe 6 · 5 BE</span><h2>Prinzip der optimalen Relation von allgemeiner und spezieller Ausbildung</h2>
   <ul class="ps-ul"><li>Mit ansteigendem Leistungsniveau nimmt die <b>spezielle Ausbildung</b> immer mehr zu.</li>
   <li>Unterschiede zwischen den Sportarten:<br>1) In Sportarten mit <b>hohen technischen Anforderungen</b> (z. B. Turnen) hat das spezielle Training in allen Phasen ein größeres Gewicht als in Sportarten, in denen Kraft und Schnelligkeit entscheiden (z. B. Sprint).<br>2) Das <b>Alter</b>, in dem die nächste Trainingsstufe beginnt, hängt von der Sportart ab: Hochleistungstraining beim Turnen mit 12 (w) / 15 (m) Jahren, in der Leichtathletik (Sprint, Mittelstrecke) mit 17/18 Jahren.</li></ul>
   <p class="meta" style="margin:8px 0 0">Beginn der Trainingsstufe (biologisches Alter in Jahren):</p>
   ${spTable(["Stufe","Schwim&shy;men","Turnen","Sprint","Mittel&shy;strecke"],[["Grundlagen","6","5–7","8–10","10–12"],["Aufbau","9","10 w<br>13 m","13/14","14"],["Hoch&shy;leistung","14","12 w<br>15 m","18","17"]])}
  </section>`;
}

function spBegriffe(el){
  const n=SP_BEGRIFFE.filter(b=>b.k).length;
  el.innerHTML=`<input class="ps-q" id="spQ" type="search" placeholder="Begriff suchen …" autocomplete="off">
   <div class="row"><button type="button" class="toggle" id="spOnly" aria-pressed="false">Nur Klausurthemen</button><span class="meta">${n} von ${SP_BEGRIFFE.length} gehören zu den Klausurthemen ${spTag("Klausur")}</span></div>
   <div id="spBl" class="view" style="gap:10px"></div>`;
  let only=store.get("spOnly",false);
  const draw=()=>{
    spEl("spOnly").setAttribute("aria-pressed",only);
    const q=spEl("spQ").value.toLowerCase();let html="",last="";
    SP_BEGRIFFE.filter(b=>(!only||b.k)&&(!q||(b.t+b.d).toLowerCase().includes(q))).forEach(b=>{
      if(b.g!==last){html+=`<h2 class="sec">${b.g}</h2>`;last=b.g}
      html+=`<details class="entry"><summary><h3>${b.t}${b.k?" "+spTag("Klausur"):""}</h3></summary><div class="inner"><p>${b.d}</p></div></details>`;
    });
    spEl("spBl").innerHTML=html||'<p class="meta">Nichts gefunden.</p>';
  };
  spEl("spQ").oninput=draw;spEl("spOnly").onclick=()=>{only=!only;store.set("spOnly",only);draw()};draw();
}

/* =========================================================
   KLAUSURVORBEREITUNG
   ========================================================= */
/* ---------- Plan: Themen, Zeitplan, Lernmethoden, Lücken, alte Aufgaben, Checkliste ---------- */
function spLueckenHtml(){
  const res=store.get("spAbruf",{});
  const done=SP_ABRUF.filter(a=>res[a.id]),open=SP_ABRUF.filter(a=>!res[a.id]);
  if(!done.length)return `<p class="meta" style="margin:0">Noch leer. Sobald du im Reiter <b>Üben → Abruf</b> etwas aus dem Kopf aufgeschrieben und abgehakt hast, stehen hier die Punkte, die dir gefehlt haben. Genau die wiederholst du abends und morgens früh.</p>`;
  const withMiss=done.filter(a=>res[a.id].miss&&res[a.id].miss.length);
  return (withMiss.length?withMiss.map(a=>{const r=res[a.id];return `<div class="sp-fix"><b>${a.t} · zuletzt ${r.n} von ${r.m}</b><ul class="ps-ul">${r.miss.map(i=>`<li>${a.p[i]}</li>`).join("")}</ul><button type="button" class="btn sp-again" data-id="${a.id}">Nochmal abrufen</button></div>`}).join(""):`<p class="meta" style="margin:0">Bei deinen letzten Abrufen hat nichts gefehlt – stark!</p>`)
   +(open.length?`<p class="meta" style="margin:0">Noch nicht abgerufen: ${open.map(a=>a.t).join(" · ")}</p>`:"");
}
function spkPlan(el){
  const done=store.get("spPlan",{}),T=store.get("spPlanT",{s:"15:00",k:"08:00"});
  const keys=SP_PLAN.flatMap(s=>s.steps.map((_,j)=>s.id+"-"+j));
  const learn=SP_PLAN.reduce((a,s)=>a+s.steps.reduce((b,x)=>b+x[1],0),0),pausen=SP_PLAN.reduce((a,s)=>a+(s.pause||0),0);
  el.innerHTML=`
  <div class="step sp-must"><span class="afb">Klausur Donnerstag, 26.11.2026 · Sport</span><p>Thema: <b>Trainingslehre</b> – Trainingsmethoden, Superkompensation, Belastungssteigerung</p></div>
  <div class="erachips sp-chips"><a href="#spp1">3 Themen</a><a href="#spp2">Zeitplan</a><a href="#spp3">So lernst du</a><a href="#spp4">Deine Lücken</a><a href="#spp5">Alte Aufgaben</a><a href="#spChkBox">Checkliste</a></div>

  <h2 class="sec" id="spp1">Das kommt dran</h2>
  <p class="meta" style="margin:0">So steht es auf deinem roten Zettel „Klausurrelevant“ – in dieser Reihenfolge lernen:</p>
  <a class="sp-prio first" href="#/sport/klausur/methoden"><span class="n">1</span><h3>Die 4 Trainingsmethoden ${spTag("meiste Punkte")}</h3><p>je Methode: typische Belastungsmerkmale – Trainingseffekt – Anwendung, mit Beispiel</p></a>
  <a class="sp-prio" href="#/sport/klausur/superkomp"><span class="n">2</span><h3>Superkompensation ${spTag("mit Abbildung",1)}</h3><p>Definitionen, Skizze zeichnen und beschriften, Pausen optimal / zu kurz / zu lang</p></a>
  <a class="sp-prio" href="#/sport/klausur/steigerung"><span class="n">3</span><h3>Allmähliche, sprunghafte, variierende Belastungssteigerung</h3><p>Warum steigern? Dazu die roten Randfragen zu jeder Form</p></a>

  <h2 class="sec" id="spp2">Zeitplan bis morgen</h2>
  <div class="sp-times"><label>Heute fange ich an um <input type="time" id="spTs" value="${T.s}"></label><label>Klausur morgen um <input type="time" id="spTk" value="${T.k}"></label><button type="button" class="btn" id="spNow">Jetzt starten</button></div>
  <p class="meta" style="margin:0">Nach der Kunst-Klausur erst 20–30 Minuten Pause: essen, bewegen. Dann trägst du hier deine Startzeit ein – alle Uhrzeiten passen sich an.</p>
  <div class="progress"><span id="spPlanTxt"></span><span>${Math.floor(learn/60)} h ${learn%60} min Lernzeit + ${pausen} min Pausen</span></div><div class="bar"><i id="spPlanBar"></i></div>
  <div id="spPlanList" class="view" style="gap:10px"></div>
  <p class="meta" style="margin:0"><b>Wenig Zeit?</b> Dann in jedem Block nur Lesen, Abruf und Lücken – und in Block 4 nur Aufgabe 1 schreiben. Das dauert gut 2 Stunden.</p>
  <div class="step"><span class="afb">Nach der Klausur – damit es dauerhaft bleibt (freiwillig)</span><ul>${SP_DANACH.map(([d,t])=>`<li><b>${d}</b> · ${t}</li>`).join("")}</ul><p class="meta" style="margin:6px 0 0">Wiederholen mit wachsendem Abstand ist der Trick fürs Langzeitgedächtnis – so musst du fürs Abitur nicht neu lernen.</p></div>

  <h2 class="sec" id="spp3">So lernst du schnell und dauerhaft</h2>
  <div class="step"><ul>
   <li><b>Abrufen statt nochmal lesen:</b> Nach jedem Thema leeres Blatt, alles aus dem Kopf aufschreiben, dann abhaken (Üben → <b>Abruf</b>). Das festigt viel stärker als dreimal Lesen.</li>
   <li><b>In Abständen wiederholen:</b> Jedes Thema kommt im Plan viermal dran – beim Lernen, als Kurz-Abruf im nächsten Block, abends und morgens.</li>
   <li><b>Zeichnen und laut erklären:</b> Skizzen selbst zeichnen und dazu sagen, <i>warum</i> die Kurve so verläuft. Bild + Erklärung bleibt besser hängen.</li>
   <li><b>Lücken zuerst:</b> Was beim Abruf fehlt, landet unten unter „Deine Lücken“ – genau das wiederholst du abends und morgens.</li>
   <li><b>Mischen:</b> „Methode?“ und das Quiz mischen alle Themen – so erkennst du in der Klausur schneller, was gefragt ist.</li>
   <li><b>Schlafen:</b> Nach dem Abend-Block ins Bett. Im Schlaf wird das Gelernte gefestigt – eine Nachtschicht bringt weniger.</li>
   <li><b>Pausen und Handy:</b> In den Pausen aufstehen, trinken, bewegen. Beim Lernen Handy auf Flugmodus, die App nur zum Üben.</li></ul></div>

  <h2 class="sec" id="spp4">Deine Lücken</h2>
  <div id="spLuecken" class="view" style="gap:8px"></div>

  <h2 class="sec" id="spp5">Aus den alten Aufgaben lernen</h2>
  <p class="meta" style="margin:0">So hat deine Lehrkraft auf deinen korrigierten Blättern bewertet:</p>
  <div class="sp-fix"><b>Aufgabe 4 · Trainingsmethoden</b><span>Am Rand steht für jede Methode: <b>typische Belastungsmerkmale</b> – <b>Trainingseffekt</b> – <b>Anwendung</b>. Für den Trainingseffekt gab es <b>max. 6 P.</b>: Dauer 2 (Herz-Kreislauf + Fettstoffwechsel), Wiederholung 2 (Anpassungen im Muskel), extensiv 1 (Herz-Kreislauf), intensiv 1 (anaerobe Kapazität).</span><span class="s">Arbeitsblatt Trainingsmethoden, rote Randnotizen „zu 4.“</span></div>
  <div class="sp-fix"><b>Aufgabe 5 · Belastungssteigerung</b><span><b>Nennen 3 P.</b>, dann je Form die <b>roten Randfragen</b> beantworten – auf dem Arbeitsblatt je Form 3 P., in deiner überarbeiteten Fassung je 5 P. Jede beantwortete Frage zählt.</span><span class="s">korrigierte Aufgabe 5 und Arbeitsblatt mit „Aufgabe: Erläutern Sie …“</span></div>
  <div class="sp-fix"><b>Arbeitsblatt Superkompensation</b><span>Alles mit „<b>Def.: ✗</b>“ wörtlich können: <b>Adaptation</b>, <b>Qualitätsgesetz</b>, <b>Homöostase</b>, <b>Merksatz</b>. Dazu die <b>Kurzform</b> und Abb. 2 beschriften. Die Aufgabe lautete: „Beschreiben Sie unter Erklärung der fachrelevanten Begriffe den Verlauf …“</span><span class="s">Arbeitsblatt mit Aufgaben 1 und 2</span></div>
  <div class="sp-fix"><b>Prinzip der optimalen Relation von Belastung und Erholung · 2 P.</b><span>Definition, 48 h, Schulsport. Dazu die drei Sätze „<b>unbedingt lernen</b>“: Reiz im höchsten Punkt – zu lange Pause: Rückgang – zu kurze Pause: Übertraining.</span><span class="s">handschriftliche Fortsetzung</span></div>
  <div class="sp-fix"><b>Aufgabe 6 · 5 BE</b><span>Prinzip der optimalen Relation von <b>allgemeiner und spezieller</b> Ausbildung – nicht auf dem Zettel, kam aber in der alten Arbeit dran. Einmal lesen: <a href="#/sport/unterricht/prinzipien"><b>Unterricht → Prinzipien</b></a>.</span></div>

  <div class="step"><span class="afb">Operatoren</span><ul>
   <li><b>Nennen</b>: nur aufzählen, ohne Erklärung (z. B. „allmählich, sprunghaft, variierend“).</li>
   <li><b>Definieren</b>: die Definition genau wie auf dem Blatt (die mit „Def.: ✗“).</li>
   <li><b>Beschreiben</b>: Ablauf in eigenen Worten und mit Fachbegriffen wiedergeben.</li>
   <li><b>Erläutern</b>: beschreiben <b>und</b> verständlich machen – mit Beispiel, Grund, Vor- oder Nachteil.</li>
   <li><b>Skizze</b>: groß zeichnen, Achsen beschriften, jede Phase beschriften.</li></ul></div>
  <div class="step"><span class="afb">So holst du die Punkte</span><ul>
   <li><b>Fachbegriffe benutzen:</b> Intensität, Reizdauer, Reizdichte, Reizumfang, Homöostase, Ausgangsniveau, Superkompensation, Reizschwelle, Labilität.</li>
   <li><b>Zu jeder Methode dasselbe Raster:</b> Beispiel → Belastungsmerkmale → Trainingseffekt → Anwendung.</li>
   <li>Bei der Belastungssteigerung <b>alle Randfragen</b> beantworten.</li>
   <li>Bei der Superkompensation <b>Skizze + Text</b>: Die Skizze allein reicht nicht, beschreibe jede Phase.</li></ul></div>
  <details class="entry"><summary><h3>Im Ordner, aber nicht auf dem Zettel</h3></summary><div class="inner">
   <p>Kommt wahrscheinlich nicht als eigene Aufgabe, hilft dir aber beim Erklären: Reizschwellengesetz und Belastungsdosierung, Mobilisationsschwelle, Verlauf der Leistungsentwicklung, Prinzip der unvollständigen Erholung, Prinzip der optimalen Relation von allgemeiner und spezieller Ausbildung. Alles steht im Bereich <a href="#/sport/unterricht/anpassung"><b>Unterricht</b></a>.</p></div></details>

  <h2 class="sec" id="spChkBox">Checkliste</h2>
  <div id="spChk2"></div>`;

  const day=spDayIso();
  const draw=()=>{
    const s0=spMin(T.s)??900,k0=spMin(T.k)??480,now=new Date(),nowM=now.getHours()*60+now.getMinutes();
    let t=s0,lastEnd=s0,html="";
    SP_PLAN.forEach(s=>{
      const dur=s.steps.reduce((a,x)=>a+x[1],0),d=s.tag==="morgen"?SP_DAY2:SP_DAY1;let a,b,zeit;
      if(s.tag==="heute"){a=t;b=t+dur;t=b+(s.pause||0);lastEnd=b;zeit=`${spClock(a)}–${spClock(b)}`}
      else if(s.tag==="abend"){a=Math.ceil(Math.max(lastEnd+60,20*60)/15)*15;b=a+dur;zeit=`ab ca. ${spClock(a)} · vor dem Schlafen`}
      else{a=k0-60;b=a+dur;zeit=`ca. ${spClock(a)}–${spClock(b)}`}
      const isNow=d===day&&nowM>=a&&nowM<b,badge=d<day?spTag("vorbei",1):(isNow?spTag("jetzt"):"");
      html+=`<div class="sp-sess${isNow?" now":""}">
       <div class="h"><span class="d">${s.tag==="morgen"?"Do 26.11.":"Mi 25.11."}</span>${badge}<span class="z">${zeit}</span></div>
       <h3>${s.n?`<span class="n">${s.n}</span>`:""}${s.title}${s.sub?` <span class="meta" style="font-family:var(--sans);font-size:.78rem;font-weight:600">· ${s.sub}</span>`:""}</h3>
       ${s.ziel?`<p class="meta">Ziel: ${s.ziel}</p>`:""}
       ${s.steps.map(([txt,m,tab,mode,deck,top],j)=>`<div class="sp-step"><label><input type="checkbox" data-k="${s.id}-${j}" ${done[s.id+"-"+j]?"checked":""}><span>${txt} <i>${m} min</i></span></label>${tab?`<button type="button" class="sp-go" data-tab="${tab}" data-mode="${mode||""}" data-deck="${deck||""}" data-top="${top||""}" aria-label="öffnen">›</button>`:""}</div>`).join("")}
      </div>`;
      if(s.pause)html+=`<p class="sp-pause">${s.pause} min Pause – aufstehen, trinken, bewegen. Kein Handy-Scrollen.</p>`;
      if(s.id==="b4")html+=`<p class="sp-pause">Danach frei bis zum Abend-Block – essen, Freizeit.</p>`;
      if(s.id==="ab")html+=`<p class="sp-pause">Dann schlafen gehen – möglichst 8 Stunden.</p>`;
    });
    spEl("spPlanList").innerHTML=html+(lastEnd>21*60+30?`<p class="meta" style="margin:0;color:var(--crown)"><b>Du wirst spät fertig.</b> Lass Block 4 weg oder schreib dort nur Aufgabe 1 – Schlaf ist wichtiger.</p>`:"");
    spEl("spPlanList").querySelectorAll(".sp-step input").forEach(c=>c.onchange=()=>{done[c.dataset.k]=c.checked;store.set("spPlan",done);upd()});
    spEl("spPlanList").querySelectorAll(".sp-go").forEach(b=>b.onclick=()=>spGo(b.dataset.tab,b.dataset.mode,b.dataset.deck,b.dataset.top));
    upd();
  };
  const upd=()=>{const n=keys.filter(k=>done[k]).length;spEl("spPlanTxt").textContent=`${n} von ${keys.length} Schritten erledigt`;spEl("spPlanBar").style.width=(n/keys.length*100)+"%"};
  const save=()=>{T.s=spEl("spTs").value||"15:00";T.k=spEl("spTk").value||"08:00";store.set("spPlanT",T);draw()};
  spEl("spTs").onchange=save;spEl("spTk").onchange=save;
  spEl("spNow").onclick=()=>{const n=new Date(),m=Math.ceil((n.getHours()*60+n.getMinutes())/5)*5;spEl("spTs").value=spClock(m);save()};
  draw();
  spEl("spLuecken").innerHTML=spLueckenHtml();
  spEl("spLuecken").querySelectorAll(".sp-again").forEach(b=>b.onclick=()=>spGo("ueben","abruf","",b.dataset.id));
  const cd=store.get("spChk2",{});
  spEl("spChk2").innerHTML=SP_CHECK2.map(([g,items],gi)=>`<div class="step ps-chk"><span class="afb">${g}</span>${items.map((x,i)=>`<label><input type="checkbox" data-k="${gi}-${i}" ${cd[gi+"-"+i]?"checked":""}> <span>${x}</span></label>`).join("")}</div>`).join("");
  spEl("spChk2").querySelectorAll("input").forEach(c=>c.onchange=()=>{cd[c.dataset.k]=c.checked;store.set("spChk2",cd)});
}

function spkMethoden(el){
  const SH=["Dauer","Wiederholung","Extensiv","Intensiv"];
  el.innerHTML=`
  <div class="step sp-must"><span class="afb">So wurde bewertet · alte Aufgabe 4</span>
   <p>Zu <b>jeder</b> Methode drei Dinge: <b>① typische Belastungsmerkmale</b> – <b>② Trainingseffekt</b> – <b>③ Anwendung</b>. Für den Trainingseffekt gab es <b>max. 6 P.</b> (Dauer 2 · Wiederholung 2 · extensiv 1 · intensiv 1).</p></div>

  <section class="tx"><span class="tx-y">Thema 1 · meiste Punkte</span><h2>Die 4 Trainingsmethoden auf einen Blick</h2>
   ${spSvgGefuege()}
   <h3 class="ps-h">Das Raster zum Auswendiglernen</h3>
   ${spTable(["Methode","Intensität","Reizdauer","Pausen"],SP_METH.map((m,i)=>[`<b style="color:var(${m.c})">${SH[i]}</b><br><span class="meta">${m.t[0]} → ${m.t[4]}</span>`,m.t[1],m.t[2],m.t[3]]))}
   <p class="meta" style="margin-top:6px">Extensiv und intensiv sind die beiden Intervallmethoden. Mit Trainingseffekt und Anwendung stehen alle vier in den Karten unten.</p>
  </section>

  <div class="step"><span class="afb">In 3 Fragen zur richtigen Methode</span><ol>
   <li><b>Gibt es Pausen?</b> Nein → <b style="color:var(--psy)">Dauermethode</b>.</li>
   <li><b>Erholt man sich in der Pause vollständig?</b> Ja → <b style="color:var(--crown)">Wiederholungsmethode</b>. Nein, weiter bei Puls 120 → <b>Intervallmethode</b>.</li>
   <li><b>Lang und locker oder kurz und hart?</b> Lang/locker → <b style="color:var(--parl)">extensiv</b> (kürzere Pausen). Kurz/hart → <b style="color:var(--gold)">intensiv</b> (längere Pausen).</li></ol></div>

  ${SP_METH.map((m,i)=>`<div class="sp-m" style="--mc:var(${m.c})"><h3>${i+1}. ${m.n}</h3><span class="bsp">${m.bsp} · ${m.merk}</span>
   <dl><dt>Belastungs&shy;merkmale</dt><dd>${m.bm}</dd><dt>Trainings&shy;effekt</dt><dd>${m.te} ${spTag(m.tp+" P.")}</dd><dt>Anwendung</dt><dd>${m.an}</dd></dl></div>`).join("")}

  <section class="tx"><span class="tx-y">Aus deiner Mitschrift</span><h2>Skizzen: % der Trainingsfähigkeit</h2>
   ${spFaehigBlock()}
   <p class="ex">In der Mitschrift sind die Skizzen zur Dauer- und Wiederholungsmethode gezeichnet. Die beiden Intervall-Skizzen sind ergänzt: Die Kurve geht in der Pause <b>nicht</b> bis 100 % zurück – die Erholung ist unvollständig.</p>
  </section>

  <section class="tx"><span class="tx-y">Die Pause macht den Unterschied</span><h2>Lohnende Pause</h2>
   ${spSvgPuls()}
   <p>Man erholt sich im <b>ersten Drittel</b> der Pause am schnellsten. Deshalb startet die Intervallmethode neu, sobald der Puls bei <b>ca. 120/min</b> ist – die Erholung ist <b>unvollständig</b>. Bei der Wiederholungsmethode wartet man bis zur (fast) vollständigen Erholung, damit die Intensität hoch bleiben kann.</p>
  </section>

  <h2 class="sec">Musterantwort</h2>
  <div class="aufg"><h3>Stellen Sie die vier Trainingsmethoden mit ihren typischen Belastungsmerkmalen, ihrem Trainingseffekt und ihrer Anwendung dar.</h3><p class="meta">so wie in der alten Aufgabe 4 bewertet</p></div>
  <details class="entry"><summary><h3>Musterantwort aufklappen</h3></summary><div class="inner ml">${SP_ML_METH}</div></details>`;
}
const SP_ML_METH=`
 <p>Trainingsmethoden unterscheiden sich durch ihr jeweils spezifisches Belastungsgefüge, also durch Reizintensität, Reizdauer, Reizdichte (Pausen) und Reizumfang. Zu jeder Methode gehören typische Belastungsmerkmale, ein Trainingseffekt und eine Anwendung.</p>
 <p><b>1. Dauermethode</b> (z. B. Ausdauerlauf)<br><u>Belastungsmerkmale:</u> Es wird ein einziger Dauerreiz ohne Pause gesetzt – mit geringer Intensität, dafür mit einer hohen Reizdauer von über 30 Minuten und damit hohem Umfang. Zur Aktivierung des Fettstoffwechsels trainiert man mit einem Puls von 140–160, das ist täglich möglich. Für die Grundlagenausdauer wird auch mit höherer Intensität über der Dauerleistungsgrenze trainiert (man kann sich nur noch mit Mühe unterhalten); dann sind längere Erholungsphasen nötig und zwei Einheiten pro Woche reichen.<br><u>Trainingseffekt:</u> positive Auswirkungen auf das Herz-Kreislauf-System (größeres Herzvolumen, stärkere Herzwände, bessere Kapillarisierung im Muskel, größere Glykogenspeicher) und auf den Fettstoffwechsel.<br><u>Anwendung:</u> für Übergewichtige zur Gewichtsreduktion, als Ausgleich bei beruflich bedingtem Bewegungsmangel und als Basistraining für alle weiteren sportlichen Leistungen – sie ist die grundlegende Trainingsmethode überhaupt.</p>
 <p><b>2. Wiederholungsmethode</b> (z. B. Krafttraining)<br><u>Belastungsmerkmale:</u> hohe Intensität, dafür geringe Reizdauer. Die Reizdichte ist gering, d. h. die Pausen sind lang und dienen der beinahe vollständigen Erholung. So kann die hohe Intensität bis zum Ende des Trainings aufrechterhalten werden.<br><u>Trainingseffekt:</u> Anpassungen innerhalb des Muskels – Muskelaufbau und Kraftzuwachs. Sie ist die Krafttrainingsmethode schlechthin.<br><u>Anwendung:</u> für Fitnesssportler zum Muskelaufbau und Kraftzuwachs, für Fitnessbewusste zur Straffung, bei Haltungsschwächen zur Kräftigung abgeschwächter Muskeln und als Ausgleich zu einseitigen Belastungen in Beruf und Sport.</p>
 <p><b>3. Intervallmethoden</b><br>Kennzeichen ist der regelmäßige Wechsel von Belastung und Erholung. Die Pause ist unvollständig („lohnende Pause“, „Ein-Drittel-Pause“): Weil man sich im ersten Drittel der Pause am schnellsten erholt, folgt die nächste Belastung, sobald der Puls auf ca. 120 Schläge pro Minute gefallen ist.</p>
 <p><b>3.1 Extensive Intervallmethode</b> (z. B. Mittelstrecke, Läufe über 300–1500 m)<br><u>Belastungsmerkmale:</u> hoher Umfang und relativ geringe Intensität (ca. 30–50 % der maximalen Kraft), lange Belastungsdauer der einzelnen Intervalle (60 Sekunden bis 15 Minuten), kürzere Pausen als bei der intensiven Methode.<br><u>Trainingseffekt:</u> wie bei der Dauermethode vor allem im Bereich Herz-Kreislauf.<br><u>Anwendung:</u> ergänzend zur Dauermethode.</p>
 <p><b>3.2 Intensive Intervallmethode</b> (z. B. Kurzstrecke, Läufe über 100 oder 200 m)<br><u>Belastungsmerkmale:</u> Der Belastungsreiz ist relativ kurz, aber von höherer, also mittlerer bis hoher Intensität; die Pausen sind länger als bei der extensiven Methode.<br><u>Trainingseffekt:</u> Verbesserung der anaeroben Kapazität, also der Energiegewinnung ohne Sauerstoff.<br><u>Anwendung:</u> ergänzend zur Wiederholungsmethode, z. B. im Zirkeltraining; besonders bei Leistungsstagnation liefert die Intervallmethode neue Reize.</p>
 <p><b>Fazit:</b> Intensität und Umfang verhalten sich gegenläufig – je höher die Intensität, desto kürzer die Belastung und desto länger die Pause.</p>`;

function spkSuper(el){
  el.innerHTML=`
  <section class="tx"><span class="tx-y">Auf deinem Blatt mit „Def.: ✗“ markiert</span><h2>Definitionen wörtlich lernen</h2>
   ${spDef("Adaptation (Anpassung) und Anpassungsfähigkeit","Die Fähigkeit zur Anpassung ist ein Grundphänomen aller Lebewesen. Deshalb ist es möglich, durch Training (Belastung des Körpers) funktionelle Anpassungen auszulösen.")}
   ${spDef("Qualitätsgesetz (physiologisches Gesetz)","Spezifische Reize bewirken spezifische Anpassungsreaktionen.")}
   <p>Anpassung hat nur dann einen Sinn, wenn der Körper den jeweiligen spezifischen Anforderungen danach besser gewachsen ist: <i>„Die stärkere Funktion ändert die qualitative Beschaffenheit der Organe, indem sie die spezifische Leistungsfähigkeit derselben erhöht.“</i> Beispiele: Reckturnen → Schwielen · kurz und intensiv → Kraft · lang mit geringer Intensität → Ausdauer.</p>
   ${spDef("Homöostase","Zwischen Belastungsanforderungen und dem Leistungsniveau des Körpers besteht ein dynamisches Gleichgewicht (Homöostase). Durch Belastungsreize ausgelöste Anpassungsprozesse verbessern das Leistungsniveau über das Ausgangsniveau hinaus (Superkompensation).")}
   ${spDef("Merksatz","Anpassungsprozesse in der Superkompensationsphase sind die Grundlage für Funktions- und Leistungssteigerungen.")}
  </section>

  <section class="tx"><span class="tx-y">Thema 2 · mit Abbildung</span><h2>Modell der Superkompensation</h2>
   ${spSvgSuper()}
   <p class="meta">Beschriftet wie Abb. 2 auf deinem Arbeitsblatt. Auf dem anderen Blatt (Abb. 1) heißen die Phasen kürzer <b>Ermüdung – Erholung – Anpassung – Rückgang</b>. Beides ist richtig.</p>
   <ol class="ps-ul">
    <li><b>Homöostase:</b> Normalerweise befindet sich der Körper in einem dynamischen (biochemischen) Gleichgewicht zwischen Belastungsanforderung und Leistungsniveau.</li>
    <li><b style="color:var(--crown)">Belastungsreiz → Ermüdung:</b> Ein ermüdender Trainingsreiz stört die Homöostase – das ist der auslösende Reiz für die Anpassung. Das Leistungsniveau sinkt unter das Ausgangsniveau.</li>
    <li><b>Wiederherstellung (Erholung):</b> Nach der Belastung setzen Wiederherstellungsprozesse ein; die Leistung steigt wieder bis zum Ausgangsniveau.</li>
    <li><b style="color:var(--parl)">Superkompensation (positive Anpassung):</b> Die Anpassung geht über das Ausgangsniveau hinaus. So soll der Körper einer gleichartigen Belastung in Zukunft besser gewachsen sein (Schutz vor erneuter Ermüdung). Das ist die Grundlage jeder Leistungssteigerung.</li>
    <li><b>Rückkehr zum Ausgangsniveau (negative Anpassung):</b> Kommt kein neuer Reiz, bildet sich das Niveau aufgrund der Homöostase wieder zurück.</li></ol>
  </section>

  <div class="step"><span class="afb">Kurzform von deinem Blatt – auswendig lernen</span>
   <p class="sp-kurz">Der Körper befindet sich normalerweise in einem Zustand des biochemischen Gleichgewichts, der sogenannten <b>Homöostase</b>. Durch ermüdende <b>Belastungen</b> im Training wird dieses Gleichgewicht gestört (<b>Ermüdung</b>). Die nach der Ermüdung einsetzenden <b>Wiederherstellungsprozesse</b> (Erholung) zielen darauf ab, die belasteten Teilsysteme vor einer erneuten Ermüdung zu schützen. Dies wird dadurch erreicht, dass die Wiederherstellungsprozesse über das <b>Ausgangsniveau</b> hinausgehen (<b>Superkompensation</b>).</p></div>

  <div class="step"><span class="afb">So zeichnest du die Abbildung</span><ol>
   <li>Achsen: senkrecht <b>Leistungsniveau</b>, waagerecht <b>Zeit</b>.</li>
   <li>Waagerechte Linie in der Mitte: <b>Ausgangsniveau</b>.</li>
   <li>Pfeil von oben am Anfang: <b>Belastungsreiz</b> (Homöostasestörung).</li>
   <li>Kurve: erst <b>nach unten</b> (Ermüdung), zurück zur Linie (Wiederherstellung), dann <b>über die Linie</b> (Superkompensation) und wieder zurück (Rückkehr).</li>
   <li>Unten jede <b>Phase</b> beschriften, oben „Belastungsreiz – Erholung – Anpassung (positiv | negativ)“.</li>
   <li>Am höchsten Punkt markieren: <b>optimaler Zeitpunkt für den nächsten Reiz</b>.</li></ol></div>

  <section class="tx"><span class="tx-y">Dazu gehört: optimale Relation von Belastung und Erholung</span><h2>Wann kommt der nächste Reiz?</h2>
   ${spDef("Definition","Ein optimaler Leistungszuwachs wird nur erreicht, wenn die neue Belastung (Trainingseinheit) zum Zeitpunkt der höchsten Superkompensation erfolgt.")}
   <p>Richtwert im Gesundheitssport: <b>48 Stunden</b>. Im <b>Schulsport</b> wird das meistens nicht erfüllt – die Pausen bis zur nächsten Sportstunde sind zu lang.</p>
   ${spSvgPause("opt")}${spSvgPause("lang")}${spSvgPause("kurz")}
   ${spTable(["Pause","Was passiert?"],[
    ["<b style='color:var(--parl)'>optimal</b>","neuer Reiz im höchsten Punkt der Superkompensation → das Niveau steigt treppenartig an"],
    ["<b style='color:var(--gold)'>zu lang</b>","das Niveau bildet sich wegen der Homöostase aufs Ausgangsniveau zurück → keine Leistungssteigerung. Typisch für den <b>Schul- und Freizeitsport</b>"],
    ["<b style='color:var(--crown)'>zu kurz</b>","neuer Reiz noch in der Ermüdung, bevor Superkompensation erreicht ist → das Niveau sinkt: <b>Übertraining</b>"]])}
   <div class="step"><span class="afb">„Fortsetzung – unbedingt lernen“ · 2 P.</span><ol>
    <li>Optimal genutzt wird dieser Schutzeffekt des Körpers, wenn ein erneuter Trainingsreiz möglichst im <b>höchsten Punkt der Anpassung</b> gesetzt wird.</li>
    <li>Ist die Pause bis zum nächsten Belastungsreiz dagegen <b>zu lang</b> bzw. bleiben weitere Trainingsbelastungen aus, bildet sich aufgrund der Homöostase das Leistungsniveau <b>wieder zurück</b>.</li>
    <li><b>Zu kurze Pausen</b> können auch zum <b>Übertraining</b> führen, da noch keine optimale Superkompensation erreicht wurde.</li></ol></div>
   <p class="ex"><b>Beispiel zum Erklären:</b> Hornhaut beim Hanteltraining – zerstörte Haut wird nicht nur ersetzt (kompensiert), sondern verstärkt (superkompensiert). Eine Schutzmaßnahme des Körpers.</p>
  </section>

  <h2 class="sec">Musterantwort</h2>
  <div class="aufg"><h3>Beschreiben Sie unter Erklärung der fachrelevanten Begriffe den Verlauf der Belastungs- und Anpassungsreaktionen bei der Superkompensation.</h3><p class="meta">mit beschrifteter Skizze</p></div>
  <details class="entry"><summary><h3>Musterantwort aufklappen</h3></summary><div class="inner ml">${SP_ML_SUPER}</div></details>`;
}
const SP_ML_DEF=`
 <p><b>Adaptation (Anpassung):</b> Die Fähigkeit zur Anpassung ist ein Grundphänomen aller Lebewesen. Deshalb ist es möglich, durch Training (Belastung des Körpers) funktionelle Anpassungen auszulösen.</p>
 <p><b>Qualitätsgesetz:</b> Spezifische Reize bewirken spezifische Anpassungsreaktionen. Anpassung hat nur dann einen Sinn, wenn der Körper durch seine Anpassungsreaktionen den jeweiligen spezifischen Anforderungen besser gewachsen ist – „die stärkere Funktion ändert die qualitative Beschaffenheit der Organe, indem sie die spezifische Leistungsfähigkeit derselben erhöht“. Beispiele: Durch Reckturnen bilden sich Schwielen an den Händen, durch kurze Belastungen mit hoher Intensität verbessert sich die Kraft, durch längere Belastungen mit geringer Intensität die Ausdauer.</p>`;
const SP_ML_SUPER=`
 <p><i>(Beschriftete Skizze wie oben: Leistungsniveau, Zeit, Ausgangsniveau, Belastungsreiz, Ermüdung, Wiederherstellung, Superkompensation, Rückkehr zum Ausgangsniveau.)</i></p>
 <p>Zwischen den Belastungsanforderungen und dem Leistungsniveau des Körpers besteht normalerweise ein dynamisches Gleichgewicht, die <b>Homöostase</b>. Der Körper befindet sich also in einem Zustand des biochemischen Gleichgewichts.</p>
 <p>Durch einen ermüdenden <b>Belastungsreiz</b> im Training wird diese Homöostase gestört. Das Leistungsniveau sinkt zunächst unter das <b>Ausgangsniveau</b> – das ist die Phase der <b>Ermüdung</b>. Die Störung der Homöostase ist der auslösende Reiz für die Anpassung des Organismus.</p>
 <p>Nach der Belastung setzen <b>Wiederherstellungsprozesse</b> (Erholung) ein, und das Leistungsniveau steigt wieder bis auf das Ausgangsniveau. Diese Prozesse zielen darauf ab, die belasteten Teilsysteme so zu verbessern, dass sie einer gleichartigen Belastung in Zukunft besser gewachsen sind, sie also vor einer erneuten Ermüdung zu schützen.</p>
 <p>Dies wird dadurch erreicht, dass die Anpassung über das Ausgangsniveau hinausgeht: die <b>Superkompensation</b> (positive Anpassung). Die Anpassungsprozesse in dieser Phase sind die Grundlage für Funktions- und Leistungssteigerungen. Ein Beispiel ist die Hornhaut an den Händen beim Hanteltraining: Zerstörte Haut wird nicht nur erneuert, sondern verstärkt.</p>
 <p>Bleibt ein weiterer Belastungsreiz aus, bildet sich das Leistungsniveau aufgrund der Homöostase wieder bis zum Ausgangsniveau zurück (<b>Rückkehr zum Ausgangsniveau</b>, negative Anpassung).</p>
 <p>Daraus folgt das <b>Prinzip der optimalen Relation von Belastung und Erholung</b>: Ein optimaler Leistungszuwachs entsteht nur, wenn der nächste Reiz im höchsten Punkt der Superkompensation gesetzt wird (im Gesundheitssport ca. 48 Stunden). Sind die Pausen zu lang, fällt das Niveau zurück und es gibt keine Steigerung – das ist im Schulsport meistens der Fall. Sind sie zu kurz, wird der Reiz in der Ermüdungsphase gesetzt, bevor eine Superkompensation erreicht ist; das Niveau sinkt, und es droht Übertraining.</p>`;

function spkSteigerung(el){
  const block=f=>{const [n,c]=SP_FORM[f];return `<section class="tx" style="border-left:5px solid var(${c})"><span class="tx-y">Erläutern · je Form 3–5 P.</span><h2 style="color:var(${c})">${n}</h2>
   <div class="view" style="gap:8px">${SP_LF.filter(x=>x.f===f).map(x=>`<div class="sp-lf"><span class="f">${x.q}</span><span class="a">${x.a}</span></div>`).join("")}</div>
   ${f==="allmählich"?`<p class="ex" style="margin-top:10px"><b>Beispiel:</b> 6–12 Wiederholungen – jedes Training eine mehr, bei 12 das Gewicht um 2,5 kg erhöhen und wieder bei 6 anfangen.</p>`:""}
   ${f==="sprunghaft"?`<p class="ex" style="margin-top:10px"><b>Beispiel:</b> Höhentraining; Comeback nach einer Verletzung. Im Diagramm unten siehst du den Nachteil.</p>${spSvgKraft()}${SP_KRAFT_TXT}`:""}
   ${f==="variierend"?`<p class="ex" style="margin-top:10px"><b>Warum wirkt das?</b> Die neue, ungewohnte Belastung überschreitet die Reizschwelle wieder. Ungewohnte Bewegungen und abrupte Belastungswechsel <b>beugen einem Bewegungsstereotyp vor</b> (Kraft- oder Geschwindigkeitsbarriere) – z. B. hilft ein Sprint <b>bergab</b>.</p>`:""}
  </section>`};
  el.innerHTML=`
  <section class="tx"><span class="tx-y">Thema 3 · erst das Warum</span><h2>Warum muss die Belastung steigen?</h2>
   <p class="meta" style="margin:0">Zusammenhang zwischen dem Prinzip der steigenden Belastung und dem Reizschwellengesetz – so steht es in deiner Mitschrift:</p>
   <ol class="ps-ul">${SP_WARUM.map(s=>`<li>${s}</li>`).join("")}</ol>
   ${spSvgGleich()}
   <p class="ex"><b>Möglichkeiten zu steigern:</b> Häufigkeit, Umfang (Sätze), Intensität (Gewicht), Reizdauer (Wiederholungen), Dichte (kürzere Pausen). Langfristig: <b>erst Umfang, dann Dichte, zuletzt Intensität</b>.</p>
  </section>
  <div class="aufg"><h3>Nennen <span class="be">3 P.</span></h3><p>Es gibt die <b style="color:var(--parl)">allmähliche</b>, die <b style="color:var(--crown)">sprunghafte</b> und die <b style="color:var(--gold)">variierende</b> Belastungssteigerung.</p></div>
  <p class="meta" style="margin:0">Die <b style="color:var(--crown)">roten Fragen</b> stehen so am Rand deiner korrigierten Aufgabe 5 – jede beantwortete Frage bringt Punkte.</p>
  ${block("allmählich")}${block("sprunghaft")}${block("variierend")}

  <section class="tx"><span class="tx-y">Vergleich</span><h2>Alle drei nebeneinander</h2>
   ${spTable(["","Allmählich","Sprunghaft","Variierend"],[
    ["<b>Wann?</b>","Nachwuchsbereich, Anfänger, Grundlage","gute Leistungsgrundlage, wenn allmählich nichts mehr bringt; Trainingsrückstände","bei Monotonie, Leistungsstagnation, Bewegungsstereotyp"],
    ["<b>Wie?</b>","gleichmäßig in kleinen Stufen, am Minimum orientiert","abrupte Anhebung von Intensität oder Umfang","Mittel, Methoden, Komponenten, Übungen, Bewegungsdynamik ändern"],
    ["<b>Ziel</b>","Überforderung vermeiden","verstärkte Störung der Homöostase → höhere Anpassung","Reizschwelle durch Ungewohntes wieder überschreiten"],
    ["<b>Plus / Minus</b>","+ stabile Anhebung des Niveaus","− Labilität des gewonnenen Niveaus","+ umgeht Stagnation"]])}
  </section>

  <h2 class="sec">Musterantworten</h2>
  <div class="aufg"><h3>Erläutern Sie die unterschiedlichen Möglichkeiten der Belastungssteigerung. Wann finden sie Anwendung?</h3><p class="meta">wie alte Aufgabe 5</p></div>
  <details class="entry"><summary><h3>Musterantwort aufklappen</h3></summary><div class="inner ml">${SP_ML_STEIG}</div></details>
  <div class="aufg"><h3>Erläutern Sie den Zusammenhang zwischen dem Prinzip der steigenden Belastung und dem Reizschwellengesetz.</h3></div>
  <details class="entry"><summary><h3>Musterantwort aufklappen</h3></summary><div class="inner ml">${SP_ML_WARUM}</div></details>`;
}
const SP_ML_STEIG=`
 <p>Nach dem Prinzip der progressiven Belastung muss die Belastung mit steigendem Leistungsniveau erhöht werden, da sich der Körper sonst an die Belastung gewöhnt und keine weitere Anpassung stattfindet. Man unterscheidet die <b>allmähliche</b>, die <b>sprunghafte</b> und die <b>variierende</b> Belastungssteigerung.</p>
 <p><b>Allmähliche Belastungssteigerung:</b> Sie kommt vor allem im Nachwuchsbereich bzw. im Grundlagentraining zur Anwendung, um den Bewegungsapparat und das Herz-Kreislauf-System nicht zu überfordern. Sie ist durch einen gleichmäßigen Anstieg der Belastung in kleinen Stufen gekennzeichnet. Dabei ist eine vorsichtige Annäherung an die Belastungsgrenze notwendig, um Anpassungen zu erzielen; man orientiert sich also an dem, was man mindestens schaffen muss, um sich im nächsten Training zu verbessern, und nicht am Maximum. Ein Beispiel ist, im Krafttraining die Wiederholungen von 6 auf 12 zu steigern und erst dann das Gewicht um 2,5 kg zu erhöhen. Ihr Vorteil ist, dass sie eine stabile Anhebung des Leistungsniveaus bewirkt.</p>
 <p><b>Sprunghafte Belastungssteigerung:</b> Sie benötigt eine gute Leistungsgrundlage und wird erst dann angewandt, wenn die allmähliche Steigerung keine weiteren Leistungsfortschritte mehr bewirkt. Sie soll eine verstärkte Störung der Homöostase und damit eine höhere Anpassung des Organismus bewirken. Das geschieht durch eine abrupte Anhebung der Intensität oder des Umfangs der Belastung. Ihr Nachteil ist die Labilität des gewonnenen Leistungsniveaus, d. h. schnell Gewonnenes geht auch schnell wieder verloren. Häufig wird sie angewendet, wenn man Trainingsrückstände, z. B. nach Krankheit oder Verletzung, aufholen will.</p>
 <p><b>Variierende Belastungssteigerung:</b> Sie soll einer Monotonie der Trainingsbelastung entgegenwirken und hilft, Leistungsstagnationen zu umgehen, z. B. wenn man an eine Kraft- oder Geschwindigkeitsbarriere stößt. Variiert werden kann alles: Man kann allmähliche und sprunghafte Steigerung abwechseln, die Trainingsmittel (z. B. Kurzhanteln statt Bankdrücken), die Trainingsmethoden, einzelne Belastungskomponenten wie Satzzahl, Wiederholungszahl, Pausendauer und Gewicht, die Übungen sowie die Bewegungsausführung und -dynamik, z. B. die Geschwindigkeit (Sprint bergab). Durch die neue, ungewohnte Belastung wird die Reizschwelle wieder überschritten.</p>`;
const SP_ML_WARUM=`
 <p>Nach dem <b>Reizschwellengesetz</b> wird eine positive Anpassung des Organismus (Superkompensation) nur dann erreicht, wenn durch die Belastungen des Trainings eine kritische Reizschwelle überschritten wird.</p>
 <p>Mit zunehmender Leistungssteigerung erhöht sich jedoch auch die Reizschwelle des Sportlers. Bleiben die Trainingsbelastungen über einen längeren Zeitraum konstant, verlieren sie deshalb ihre Wirksamkeit, weil die erhöhte Reizschwelle nicht mehr überschritten wird. Der Körper hat sich an die Belastung gewöhnt, der eintretende Ermüdungszustand verringert sich, und es findet keine weitere Anpassung statt – bis hin zur völligen Stagnation. Ein Beispiel: Ein Gewicht, das anfangs gerade noch ging, fühlt sich nach einigen Wochen leicht an.</p>
 <p>Daraus folgt das <b>Prinzip der steigenden Belastung</b>: In langfristigen Trainingsprozessen muss die Belastung entsprechend dem Leistungsfortschritt ständig erhöht werden, um weitere Anpassungen zu erzielen – zuerst über den Umfang, dann über die Dichte und zuletzt über die Intensität.</p>`;

function spkProbe(el){
  el.innerHTML=`
  <p class="meta" style="margin:0">Probeklausur nach deinen drei Klausurthemen. Die Aufgaben 1, 3 b und 6 stehen fast wörtlich so auf deinen Blättern. Erst auf Papier schreiben, dann die Musterlösungen aufklappen.</p>
  <h2 class="sec">Aufgaben</h2>
  <div class="aufg"><h3>1. Stellen Sie die vier Trainingsmethoden mit ihren typischen Belastungsmerkmalen, ihrem Trainingseffekt und ihrer Anwendung dar. Nennen Sie jeweils ein Beispiel.</h3><p class="meta">Schwerpunkt · meiste Punkte · wie alte Aufgabe 4</p></div>
  <div class="aufg"><h3>2. Begründen Sie, welche Trainingsmethode Sie den Personen empfehlen.</h3><p>a) Herr K. (45) arbeitet im Büro, ist übergewichtig und möchte abnehmen.<br>b) Mia (17) möchte Muskeln aufbauen und eine Haltungsschwäche ausgleichen.<br>c) Jonas, 1500-m-Läufer, will ergänzend zu seinen Dauerläufen seine Ausdauer verbessern.<br>d) Lea, 200-m-Sprinterin, bricht am Ende des Laufs ein und will ihre anaerobe Kapazität verbessern.</p></div>
  <div class="aufg"><h3>3. a) Definieren Sie die Begriffe Adaptation und Qualitätsgesetz.<br>b) Beschreiben Sie unter Erklärung der fachrelevanten Begriffe den Verlauf der Belastungs- und Anpassungsreaktionen bei der Superkompensation. Fertigen Sie eine beschriftete Skizze an.</h3></div>
  <div class="aufg"><h3>4. Erläutern Sie mithilfe von Skizzen die Folgen optimaler, zu langer und zu kurzer Pausen zwischen Trainingseinheiten. Beurteilen Sie kurz die Situation im Schulsport.</h3></div>
  <div class="aufg"><h3>5. Erläutern Sie den Zusammenhang zwischen dem Prinzip der steigenden Belastung und dem Reizschwellengesetz.</h3></div>
  <div class="aufg"><h3>6. Erläutern Sie die unterschiedlichen Möglichkeiten der Belastungssteigerung. Wann finden sie Anwendung?</h3><p class="meta">wie alte Aufgabe 5: Nennen 3 P. + Erläutern</p></div>
  <h2 class="sec">Musterlösungen</h2>
  <details class="entry"><summary><h3>Aufgabe 1 · Trainingsmethoden</h3></summary><div class="inner ml">${SP_ML_METH}</div></details>
  <details class="entry"><summary><h3>Aufgabe 2 · Empfehlungen</h3></summary><div class="inner ml">
   <p><b>a) Herr K. → Dauermethode.</b> Ein langer Lauf oder eine Radfahrt über mehr als 30 Minuten mit geringer Intensität (Puls ca. 140–160) aktiviert den Fettstoffwechsel und ist deshalb zur Gewichtsreduktion geeignet. Gleichzeitig stärkt sie das Herz-Kreislauf-System und gleicht den Bewegungsmangel im Büro aus. Die geringe Intensität überfordert ihn als Untrainierten nicht.</p>
   <p><b>b) Mia → Wiederholungsmethode.</b> Mit hoher Intensität, geringer Reizdauer und langen Pausen zur vollständigen Erholung kann sie die hohe Intensität über das ganze Training halten. Das führt zu Anpassungen im Muskel: Muskelaufbau, Kraftzuwachs und Kräftigung der abgeschwächten Haltemuskulatur.</p>
   <p><b>c) Jonas → extensive Intervallmethode.</b> Z. B. 6 × 1000 m mit geringer Intensität (30–50 %), hoher Reizdauer und kurzen lohnenden Pausen, bis der Puls auf ca. 120 gefallen ist. Die Wirkung liegt wie bei der Dauermethode im Herz-Kreislauf-System, sie ergänzt also seine Dauerläufe sinnvoll.</p>
   <p><b>d) Lea → intensive Intervallmethode.</b> Z. B. 6 × 150 m mit hoher Intensität und kurzer Reizdauer, die Pausen sind lohnend (weiter bei Puls 120), aber länger als bei der extensiven Methode. So verbessert sie ihre anaerobe Kapazität, also die Energiegewinnung ohne Sauerstoff, die sie am Ende des 200-m-Laufs braucht.</p></div></details>
  <details class="entry"><summary><h3>Aufgabe 3 a · Definitionen</h3></summary><div class="inner ml">${SP_ML_DEF}</div></details>
  <details class="entry"><summary><h3>Aufgabe 3 b · Superkompensation</h3></summary><div class="inner ml">${SP_ML_SUPER.split("<p>Daraus folgt")[0]}</div></details>
  <details class="entry"><summary><h3>Aufgabe 4 · Pausen</h3></summary><div class="inner ml">
   <p><i>(Drei Skizzen wie im Reiter „Superkomp.“: optimale Pause, zu lange Pausen, zu kurze Pausen.)</i></p>
   <p>Nach dem <b>Prinzip der optimalen Relation von Belastung und Erholung</b> wird ein optimaler Leistungszuwachs nur erreicht, wenn die neue Belastung zum Zeitpunkt der höchsten Superkompensation erfolgt.</p>
   <p><b>Optimale Pause:</b> Wird der nächste Reiz im höchsten Punkt der Superkompensation gesetzt, startet jede Trainingseinheit auf einem höheren Niveau. Die Leistung steigt treppenartig an. Im Gesundheitssport gilt als grober Richtwert eine Pause von 48 Stunden.</p>
   <p><b>Zu lange Pausen:</b> Kommt der nächste Reiz erst, wenn sich das Niveau aufgrund der Homöostase schon wieder auf das Ausgangsniveau zurückgebildet hat, beginnt jedes Training von vorn. Es gibt keine Leistungssteigerung.</p>
   <p><b>Zu kurze Pausen:</b> Wird der neue Reiz noch in der Ermüdungs- bzw. Wiederherstellungsphase gesetzt, ist noch keine Superkompensation erreicht. Das Niveau sinkt von Einheit zu Einheit, es droht Übertraining – trotz hartem Training stagniert oder sinkt die Leistung.</p>
   <p><b>Schulsport:</b> Zwischen zwei Sportstunden liegen meist mehrere Tage. Die Pausen sind also zu lang, die Superkompensation ist bis zur nächsten Stunde wieder abgebaut. Für eine echte Leistungssteigerung müsste man zusätzlich trainieren.</p></div></details>
  <details class="entry"><summary><h3>Aufgabe 5 · Reizschwelle und steigende Belastung</h3></summary><div class="inner ml">${SP_ML_WARUM}</div></details>
  <details class="entry"><summary><h3>Aufgabe 6 · Belastungssteigerung</h3></summary><div class="inner ml">${SP_ML_STEIG}</div></details>`;
}

/* ---------- Üben ---------- */
let spTimerH=null;
const spStopTimer=()=>{if(spTimerH){clearInterval(spTimerH);spTimerH=null}};
function spkUeben(el){
  spStopTimer();
  let mode=store.get("spMode","abruf");
  el.innerHTML=`<div class="seg ku-five"><button type="button" data-m="abruf">Abruf</button><button type="button" data-m="karten">Karten</button><button type="button" data-m="quiz">Quiz</button><button type="button" data-m="methode">Methode?</button><button type="button" data-m="ord">Ordnen</button></div><div id="spUe" class="view" style="gap:14px"></div>`;
  const set=m=>{spStopTimer();mode=m;store.set("spMode",m);el.querySelectorAll(".seg button").forEach(b=>b.setAttribute("aria-pressed",b.dataset.m===m));({abruf:spAbruf,karten:spKarten,quiz:spQuiz,methode:spMethode,ord:spOrd}[m]||spAbruf)(spEl("spUe"))};
  el.querySelectorAll(".seg button").forEach(b=>b.onclick=()=>set(b.dataset.m));
  set(mode);
}
function spAbruf(box){
  spStopTimer();
  const res=store.get("spAbruf",{}),pre=store.get("spAbrufT",null);
  if(pre){store.set("spAbrufT",null);const a=SP_ABRUF.find(x=>x.id===pre);if(a){spAbrufRun(box,a);return}}
  box.innerHTML=`<p class="tip" style="margin:0"><b>So geht’s:</b> Leeres Blatt nehmen, Handy weg, Timer starten und alles aus dem Kopf aufschreiben oder zeichnen. Danach hakst du ab, was du hattest. Abrufen festigt viel stärker als nochmal Lesen – und du siehst sofort deine Lücken.</p>
   ${SP_ABRUF.map(a=>{const r=res[a.id];return `<button type="button" class="sp-ab" data-id="${a.id}"><b>${a.t}</b><span>${a.min} min · ${a.p.length} Punkte${r?` · <em class="${r.n/r.m>=.8?"ok":""}">zuletzt ${r.n} von ${r.m}</em>`:""}</span></button>`}).join("")}`;
  box.querySelectorAll(".sp-ab").forEach(b=>b.onclick=()=>spAbrufRun(box,SP_ABRUF.find(a=>a.id===b.dataset.id)));
}
function spAbrufRun(box,a){
  spStopTimer();
  let left=a.min*60;
  const fmt=s=>`${Math.floor(s/60)}:${String(s%60).padStart(2,"0")}`;
  box.innerHTML=`<div class="aufg"><h3>${a.t}</h3><p>${a.auf}</p></div>
   <div class="sp-timer"><span id="spTm">${fmt(left)}</span><button type="button" class="btn" id="spTmB">Timer starten</button></div>
   <p class="meta" style="margin:0">Nicht nachschauen! Wenn dir nichts mehr einfällt, ist das okay – genau diese Lücken lernst du danach gezielt.</p>
   <button type="button" class="btn primary" id="spAbFertig">Fertig – jetzt vergleichen</button>
   <button type="button" class="btn" id="spAbBack">Zurück zur Übersicht</button>`;
  const tick=()=>{const e=spEl("spTm");if(!e){spStopTimer();return}
    left--;if(left>0){e.textContent=fmt(left)}else{e.textContent="Zeit um!";spStopTimer();const b=spEl("spTmB");if(b){b.textContent="Fertig schreiben ist okay";b.disabled=true}}};
  spEl("spTmB").onclick=()=>{const b=spEl("spTmB");if(spTimerH){spStopTimer();b.textContent="Weiter"}else if(left>0){spTimerH=setInterval(tick,1000);b.textContent="Pause"}};
  spEl("spAbFertig").onclick=()=>{spStopTimer();spAbrufCheck(box,a)};
  spEl("spAbBack").onclick=()=>{spStopTimer();spAbruf(box)};
}
function spAbrufCheck(box,a){
  box.innerHTML=`<div class="aufg"><h3>${a.t}: Was hattest du?</h3><p class="meta">Hak ehrlich ab, was sinngemäß auf deinem Blatt steht.</p></div>
   <div class="step ps-chk sp-abchk">${a.p.map((p,i)=>`<label><input type="checkbox" data-i="${i}"> <span>${p}</span></label>`).join("")}</div>
   <button type="button" class="btn primary" id="spAbOk">Auswerten</button>`;
  spEl("spAbOk").onclick=()=>{
    const ch=[...box.querySelectorAll(".sp-abchk input")],n=ch.filter(c=>c.checked).length,miss=ch.filter(c=>!c.checked).map(c=>+c.dataset.i);
    const res=store.get("spAbruf",{}),prev=res[a.id];res[a.id]={n,m:a.p.length,miss,best:Math.max(n,prev&&prev.best||0),d:spDayIso()};store.set("spAbruf",res);
    const pct=Math.round(n/a.p.length*100);
    box.innerHTML=`<div class="done"><span class="big">${n} / ${a.p.length}</span><p>${pct>=80?"Stark – das sitzt fast!":pct>=50?"Gut! Die Lücken unten lernst du jetzt gezielt.":"Kein Problem – genau dafür ist der Abruf da. Lies die Lücken und ruf gleich nochmal ab."}</p></div>
     ${miss.length?`<div class="step"><span class="afb">Deine Lücken – rot auf dein Blatt schreiben</span><ul>${miss.map(i=>`<li>${a.p[i]}</li>`).join("")}</ul></div>`:""}
     <button type="button" class="btn" id="spAbRead">Im Reiter nachlesen</button>
     <button type="button" class="btn primary" id="spAbAgain">Nochmal abrufen</button>
     <button type="button" class="btn" id="spAbList">Andere Themen</button>`;
    spEl("spAbRead").onclick=()=>{location.hash="#/sport/klausur/"+a.tab};
    spEl("spAbAgain").onclick=()=>spAbrufRun(box,a);
    spEl("spAbList").onclick=()=>spAbruf(box);
  };
}
function spKarten(box){
  const deckSel=store.get("spDeck","lf");
  const DECK={
    lf:()=>[{g:"Belastungssteigerung",t:"Nenne die drei Formen der Belastungssteigerung.",d:"allmähliche, sprunghafte und variierende Belastungssteigerung"},
      {g:"Warum steigern?",t:"Erläutere den Zusammenhang zwischen steigender Belastung und Reizschwelle.",d:SP_WARUM.map((s,i)=>`${i+1}. ${s}`).join("<br>")},
      ...SP_LF.map(x=>({g:SP_FORM[x.f][0],t:x.q,d:x.a}))],
    meth:()=>SP_METH.flatMap(m=>[
      {g:m.n,t:`${m.n}: typische Belastungsmerkmale?`,d:m.bm},
      {g:m.n,t:`${m.n}: Trainingseffekt?`,d:`${m.te} (${m.tp} P.)`},
      {g:m.n,t:`${m.n}: Anwendung – für wen, wofür?`,d:`${m.an}<br>Beispiel: ${m.bsp}`}]),
    begr:()=>SP_BEGRIFFE.filter(b=>b.k).map(b=>({g:b.g,t:b.t,d:b.d}))};
  let deck=shuffle((DECK[deckSel]||DECK.lf)()),total=deck.length,known=0,flip=false;
  const draw=()=>{
    const sel=`<div class="seg three"><button type="button" data-d="lf" aria-pressed="${deckSel==="lf"}">Randfragen</button><button type="button" data-d="meth" aria-pressed="${deckSel==="meth"}">Methoden</button><button type="button" data-d="begr" aria-pressed="${deckSel==="begr"}">Begriffe</button></div>`;
    if(!deck.length){box.innerHTML=sel+`<div class="done"><span class="big">${total} / ${total}</span><p>Alle Karten gewusst!</p><button class="btn primary" type="button" id="spAgain">Nochmal</button></div>`;spEl("spAgain").onclick=()=>spKarten(box);bindSel();return}
    const c=deck[0];
    box.innerHTML=sel+`<div class="progress"><span>${known} von ${total} gewusst</span><span>noch ${deck.length}</span></div><div class="bar"><i style="width:${known/total*100}%"></i></div>
     <div class="flash" id="spFc"><span class="kind">${c.g}</span><div class="front" style="font-size:${c.t.length>60?"1.3rem":"1.6rem"}">${c.t}</div>${flip?`<div class="back"><p>${c.d}</p></div>`:'<span class="hint">Erst selbst antworten, dann tippen zum Umdrehen</span>'}</div>
     ${flip?'<div class="btns"><button class="btn no" type="button" id="spNo">Nochmal</button><button class="btn yes" type="button" id="spYes">Gewusst</button></div>':""}`;
    bindSel();
    spEl("spFc").onclick=()=>{flip=!flip;draw()};
    if(flip){spEl("spYes").onclick=()=>{deck.shift();known++;flip=false;draw()};
             spEl("spNo").onclick=()=>{const k=deck.shift();deck.splice(Math.min(3,deck.length),0,k);flip=false;draw()}}
  };
  const bindSel=()=>box.querySelectorAll("[data-d]").forEach(b=>b.onclick=()=>{store.set("spDeck",b.dataset.d);spKarten(box)});
  draw();
}
function spQuizRun(box,items,bestKey,render){
  let i=0,pts=0,lock=false;
  const draw=()=>{
    if(i>=items.length){const best=Math.max(store.get(bestKey,0),pts);store.set(bestKey,best);
      box.innerHTML=`<div class="done"><span class="big">${pts} / ${items.length}</span><p>${pts>=items.length*0.8?"Super, das sitzt!":pts>=items.length*0.5?"Gut! Schau dir die Fehler nochmal in den Reitern an.":"Lies Methoden, Superkompensation und Steigerung nochmal durch und versuch es dann erneut."}</p><p class="tip">Bestwert: ${best} / ${items.length}</p><button class="btn primary" type="button" id="spAgain">Nochmal</button></div>`;
      spEl("spAgain").onclick=()=>render(box);return}
    const it=items[i];
    box.innerHTML=`<div class="progress"><span>Frage ${i+1} von ${items.length}</span><span>${pts} richtig</span></div><div class="bar"><i style="width:${i/items.length*100}%"></i></div>
     <div class="q">${it.pre||""}<div class="ask">${it.ask}</div><div class="opts">${it.opts.map((o,j)=>`<button type="button" data-j="${j}">${o.h}</button>`).join("")}</div><div id="spEx"></div></div>`;
    box.querySelector(".opts").onclick=e=>{const b=e.target.closest("button");if(!b||lock)return;lock=true;
      const j=+b.dataset.j;if(it.opts[j].r)pts++;
      box.querySelectorAll(".opts button").forEach((x,k)=>{if(it.opts[k].r)x.classList.add("right");else if(k===j)x.classList.add("wrong")});
      spEl("spEx").innerHTML=(it.after?`<div class="expl">${it.after}</div>`:"")+`<button class="btn primary" type="button" id="spNx" style="width:100%;margin-top:10px">Weiter</button>`;
      spEl("spNx").onclick=()=>{lock=false;i++;draw()}};
  };draw();
}
function spQuiz(box){
  const items=shuffle(SP_QUIZ).slice(0,10).map(q=>({ask:q.q,after:q.x,opts:shuffle(q.o.map((t,i)=>({h:t,r:i===q.r})))}));
  spQuizRun(box,items,"spQuizBest",spQuiz);
}
function spMethode(box){
  const items=shuffle(SP_FALL).slice(0,8).map(([t,id])=>({pre:'<p class="meta" style="margin:0">Welche Trainingsmethode ist das?</p>',ask:`<span style="font-size:1.1rem;display:block;line-height:1.35">${t}</span>`,
    after:`${spMName(id)}: ${spM(id).kurz}.`,opts:SP_METH.map(m=>({h:m.n,r:m.id===id}))}));
  spQuizRun(box,items,"spMethBest",spMethode);
}
function spOrd(box){
  const pre=store.get("spOrdSet",null);if(pre)store.set("spOrdSet",null);
  const set=(pre&&SP_ORD.find(s=>s.id===pre))||SP_ORD[Math.floor(Math.random()*SP_ORD.length)],items=shuffle(set.s.map((t,i)=>({t,i})));let pick=[];
  const view=()=>{
    if(pick.length===items.length){let n=0;
      const res=set.s.map((t,i)=>{const ok=pick[i]&&pick[i].i===i;if(ok)n++;return `<li class="${ok?"":"wrong"}"><b>${i+1}.</b> ${t}</li>`}).join("");
      box.innerHTML=`<div class="done" style="padding:8px 0"><span class="big">${n} / ${items.length}</span><p>${n===items.length?"Perfekte Reihenfolge!":"So ist es richtig:"}</p></div><ol class="ordres">${res}</ol><button class="btn primary" type="button" id="spOrdNew">Neue Runde</button>`;
      spEl("spOrdNew").onclick=()=>spOrd(box);return}
    box.innerHTML=`<p class="tip" style="margin:0"><b>${set.t}</b><br>Tippe die Schritte in der richtigen Reihenfolge an.</p>
     <div class="q ord"><div class="opts">${items.map((e,k)=>{const p=pick.indexOf(e);return `<button type="button" data-k="${k}" class="${p>=0?"pick":""}"><span class="num">${p>=0?p+1:""}</span>${e.t}</button>`}).join("")}</div></div>
     <button class="btn" type="button" id="spOrdReset">Zurücksetzen</button>`;
    box.querySelector(".opts").onclick=e=>{const b=e.target.closest("button");if(!b)return;const it=items[+b.dataset.k];
      const p=pick.indexOf(it);if(p>=0)pick.splice(p,1);else pick.push(it);view()};
    spEl("spOrdReset").onclick=()=>{pick=[];view()};
  };view();
}

/* ---------- Merken ---------- */
const SP_MERK=`<table class="mtab"><tbody>
<tr class="ph"><td colspan="2">1 · Die 4 Trainingsmethoden (meiste Punkte)</td></tr>
<tr><td>Raster</td><td>je Methode: Belastungsmerkmale → Trainingseffekt → Anwendung + Beispiel</td></tr>
<tr><td>Dauer</td><td>ohne Pause · gering · über 30 min → <b>Herz-Kreislauf + Fettstoffwechsel</b> (2 P.) · Übergewichtige, Bewegungsmangel, Basistraining · Ausdauerlauf</td></tr>
<tr><td>Wiederholung</td><td>hoch · kurz · lange Pausen, vollständige Erholung → <b>Anpassungen im Muskel</b> (2 P.) · Muskelaufbau, Straffung, Haltungsschwächen · Krafttraining</td></tr>
<tr><td>Extensiv</td><td>Intervall · gering (30–50 %) · 60 s–15 min · kürzere lohnende Pausen → <b>Herz-Kreislauf</b> (1 P.) · ergänzt Dauermethode · 300–1500 m</td></tr>
<tr><td>Intensiv</td><td>Intervall · mittel–hoch · kurz · längere lohnende Pausen → <b>anaerobe Kapazität</b> (1 P.) · ergänzt Wiederholungsmethode, Zirkel · 100/200 m</td></tr>
<tr><td>Lohnende Pause</td><td>unvollständig: weiter, wenn der Puls bei ca. 120/min ist</td></tr>
<tr class="ph"><td colspan="2">2 · Superkompensation (mit Abbildung)</td></tr>
<tr><td>Def. ✗</td><td>Adaptation · Qualitätsgesetz (spezifische Reize → spezifische Anpassung) · Homöostase · Merksatz</td></tr>
<tr><td>Ablauf</td><td>Homöostase → Belastungsreiz → Ermüdung → Wiederherstellung → Superkompensation → Rückkehr zum Ausgangsniveau</td></tr>
<tr><td>Optimal</td><td>neuer Reiz im höchsten Punkt · Gesundheitssport ca. 48 h</td></tr>
<tr><td>Zu lang</td><td>zurück aufs Ausgangsniveau, keine Steigerung (Schulsport)</td></tr>
<tr><td>Zu kurz</td><td>Leistung sinkt → Übertraining</td></tr>
<tr class="ph"><td colspan="2">3 · Belastungssteigerung</td></tr>
<tr><td>Warum</td><td>Anpassung nur über der Reizschwelle · Schwelle steigt mit der Leistung · gleiche Belastung wirkt nicht mehr → ständig steigern (Umfang → Dichte → Intensität)</td></tr>
<tr><td>Allmählich</td><td>Nachwuchs · kleine Stufen · am Minimum orientieren · + stabil</td></tr>
<tr><td>Sprunghaft</td><td>gute Grundlage, wenn allmählich nichts mehr bringt · abrupt Intensität/Umfang · stärkere Homöostase-Störung · − Labilität · Trainingsrückstände</td></tr>
<tr><td>Variierend</td><td>gegen Monotonie und Stagnation · Mittel, Methoden, Komponenten, Übungen, Bewegungsdynamik (Sprint bergab)</td></tr>
</tbody></table><p class="tip" style="margin:10px 0 0">Immer Fachbegriffe + Beispiel. Bei der Superkompensation Skizze und Text.</p>`;

/* ---------- Module für die Navigation ---------- */
if(typeof PS_ICON!=="undefined")Object.assign(PS_ICON,{
  sp_plan:`<svg viewBox="0 0 24 24"><rect x="4" y="5" width="16" height="15" rx="1.5"/><path d="M4 9.5h16M8.5 3v4M15.5 3v4M8 13.5l2 2 4-4"/></svg>`,
  sp_meth:`<svg viewBox="0 0 24 24"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l3 2M10 2h4M12 2v3"/></svg>`,
  sp_wave:`<svg viewBox="0 0 24 24"><path d="M2 12h20"/><path d="M2 12c2 0 2.5 6 5 6s3-6 4.5-9S14 4 16 4s3 8 6 8"/></svg>`,
  sp_up:`<svg viewBox="0 0 24 24"><path d="M3 20h5v-5h5v-5h5V5h3"/><path d="M15 5h3v3"/></svg>`
});
if(typeof MODS!=="undefined")Object.assign(MODS,{
  spU:{tabs:[["methoden","Methoden","sp_meth"],["anpassung","Anpassung","sp_wave"],["prinzipien","Prinzipien","sp_up"],["begriffe","Begriffe","lex"]],
    titles:{methoden:["Trainingsmethoden","Dauer, Wiederholung, Intervall"],anpassung:["Anpassung","Superkompensation, Pausen, Reizschwelle"],prinzipien:["Trainingsprinzipien","Belastungssteigerung und mehr"],begriffe:["Begriffe",`${SP_BEGRIFFE.length} Fachbegriffe`]},
    views:{methoden:spuMethoden,anpassung:spuAnpassung,prinzipien:spuPrinzipien,begriffe:spBegriffe},
    merk:["Das Wichtigste auf einen Blick","Trainingslehre",SP_MERK]},
  spK:{tabs:[["plan","Plan","sp_plan"],["methoden","Methoden","sp_meth"],["superkomp","Superkomp.","sp_wave"],["steigerung","Steigerung","sp_up"],["probe","Probe","probe"],["ueben","Üben","ueben"]],
    titles:{plan:["Lernplan","bis Do 26.11. · Zeitplan · Checkliste"],methoden:["Trainingsmethoden","Thema 1 · meiste Punkte"],superkomp:["Superkompensation","Thema 2 · mit Abbildung"],steigerung:["Belastungssteigerung","Thema 3 · allmählich, sprunghaft, variierend"],probe:["Probeklausur","6 Aufgaben mit Musterlösung"],ueben:["Üben","Abruf, Karten, Quiz, Methode erkennen, Ordnen"]},
    views:{plan:spkPlan,methoden:spkMethoden,superkomp:spkSuper,steigerung:spkSteigerung,probe:spkProbe,ueben:spkUeben},
    merk:["Das Wichtigste auf einen Blick","Trainingslehre",SP_MERK]}
});
