(ns nonopolyfulc.core
  (:require
   [nonopolyfulc.feld :refer [to-string kaufpreis feld-name eigentuemer]
    :rename {to-string f-to-string}]
   [nonopolyfulc.guthaber :refer [to-string ->Spieler ->Bank spieler-name
                                  hebe-ab schreibe-gut guthaben pleite? aktion
                                  kauf-aktion? will-kaufen? ueberweise loesche-aktion
                                  zahle-miete miet-zahlung? gehalt-faellig-fuer?
                                  kann-bezahlen? gehalts-zahlung s-pleite
                                  s-gehalts-zahlung neue-position
                                  bestimme-gehaltszahlung gehe-auf
                                  ]
    :rename {to-string g-to-string}]
   [nonopolyfulc.spielbrett :refer [felder spielbrett gib-zurueck-an-bank
                                    neuer-eigentuemer to-string]]
   [nonopolyfulc.taler :refer [to-string nt mul add] :rename {to-string t-to-string}]
   [nonopolyfulc.tracing :as trac])) 

;; globale Konstanten
(def GEHAELTER
  {:bonus-gehalt (nt 4000)
   :grund-gehalt (nt 8000)
   :kein-gehalt  (nt 0)})

(def STARTGUTHABEN-SPIELER (nt 5000))
(def STARTGUTHABEN-BANK (nt 20000))
(def MAXIMALE-RUNDENANZAHL 20)

;;;; Hilfsfunktionen
;;;;;;;;;;;;;;;;;;

;; map-function-on-map-vals: (any -> any) hashmap  -> hashmap
(defn map-function-on-map-vals  
  "wendet f auf alle values einer map m an"
  [f m]
  (zipmap (keys m) (map f (vals m))))

;; 
;; erzeuge-drei-spieler: Feld > hashmap-of(String Spieler)
(defn erzeuge-drei-spieler
  "erzeugt exemplarisch drei Teilnehmer und setzt sie auf feld"
  [feld] 
  {"Karl"  (->Spieler "Karl" feld),
   "Rosa"  (->Spieler "Rosa" feld),
   "Klara" (->Spieler "Klara" feld)})

;; name->spieler: No-Welt String -> Spieler
(defn name->spieler
  "verwandelt den Namen eines Spielers (strng) in einen Spieler"
  [no-welt strng]
  ((no-welt :spieler-liste) strng))

;; aktualisiere-spieler: No-Welt Spieler -> NoWelt
(defn aktualisiere-spieler
  "ersetzt den Spieler in der spieler-liste durch spieler"
  [no-welt spieler]
  (assoc-in no-welt [:spieler-liste (spieler-name spieler)] spieler))

;;;; NoNopoly Geschäftsprozesse
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

;; initialisiere: No-Welt -> No-Welt
(defn initialisiere
  "Erzeugt die Bank, drei Spieler, stellt sie auf Los und legt die Startreihen-
  folge fest"
  [no-welt]
  (let [nw (-> no-welt 
               (assoc :bank (->Bank "Bank" STARTGUTHABEN-BANK))
               (assoc :spieler-liste (erzeuge-drei-spieler ((felder spielbrett) 0))))]
    (-> nw
        (assoc :anzahl-spieler (count (nw :spieler-liste)))
        (assoc :spieler-reihenfolge (into [] (keys (nw :spieler-liste))))
        (assoc :an-der-Reihe (first (keys (nw :spieler-liste))))
        (assoc :anzahl-runden 1))))

;; No-Welt -> No-Welt
(defn erhoehe-rundenzaehler [no-welt]
  "erhoeht den Rundenzähler um 1"
  (assoc no-welt :anzahl-runden (+ 1 (no-welt :anzahl-runden))))

;; No-Welt -> No-Welt
(defn verteile-startguthaben
  "die Bank überweist den Teilnehmern ihr Startguthaben"
  [no-welt] 
  (-> no-welt
      (assoc :bank (hebe-ab (:bank no-welt)
                            (mul STARTGUTHABEN-SPIELER
                                 (no-welt :anzahl-spieler))))
      (assoc :spieler-liste
             (map-function-on-map-vals
              (fn [t] (schreibe-gut t STARTGUTHABEN-SPIELER))
              (:spieler-liste no-welt)))))

;; No-Welt -> No-Welt
(defn pruefe-geldmenge
  "prueft die im Umlauf befindliche Geldmenge"
  [no-welt]
  (let [spieler-guthaben (reduce add (nt 0)
                                 (map guthaben (vals (no-welt :spieler-liste))))]
    (if (= (add (guthaben (no-welt :bank)) spieler-guthaben)
           STARTGUTHABEN-BANK)
      no-welt
      #?(:clj (throw (Exception. "Geldmenge stimmt nicht!"))
         :cljs (throw (js/Error. "Geldmenge stimmt nicht!"))))))

;; No-Welt -> Spieler
(defn spieler-an-der-reihe
  "liefert den Spieler fuer den naechsten Spielzug"
  [no-welt]
  ((no-welt :spieler-liste) (no-welt :an-der-Reihe)))

;; No-Welt -> No-Welt
(defn der-naechste-an-der-reihe
  "ermittelt dne naechsten Spieler, der ziehen muss.
  Bankrotte Spieler werden ausgelassen.
  Der Rundenzähler wird ggf. erhöht"
  [no-welt]
  (let [index-an-der-reihe (mod (+ (.indexOf (:spieler-reihenfolge no-welt)
                                             (:an-der-Reihe no-welt))
                                   1)
                                (no-welt :anzahl-spieler))
        nw (assoc no-welt :an-der-Reihe 
                  ((:spieler-reihenfolge no-welt) index-an-der-reihe))]
    (if (pleite? (spieler-an-der-reihe nw))
      (der-naechste-an-der-reihe nw)
      (if (= 0 index-an-der-reihe)
        (do (trac/move-trace "Runde " (+ 1 (nw :anzahl-runden)) " beginnt.")
            (erhoehe-rundenzaehler nw))
        nw))))

;; No-Welt -> No-Welt
(defn aktualisiere-spieler-status
  "falls sp pleite gegangen ist, werden die Immos von sp an die Bank zurück gegeben"
  [no-welt sp]
  (if (pleite? sp)
    (assoc-in no-welt [:spielbrett :felder]
              (mapv (fn [f] (gib-zurueck-an-bank f (spieler-name sp)))
                    (felder (:spielbrett no-welt))))
    no-welt))

;; No-Welt -> No-Welt
(defn spieler-kauft-immobilie
  "Spieler sp kauft Immobilie immo"
  [no-welt sp immo]
  (if (will-kaufen? sp immo)
    (let [[spieler bank] (ueberweise sp (:bank no-welt) (kaufpreis immo))]
      (trac/move-trace  (spieler-name sp) " kauft " (feld-name immo))
      (-> no-welt
          (assoc :spielbrett (neuer-eigentuemer (:spielbrett no-welt)
                                                immo
                                                (spieler-name spieler)))
          (aktualisiere-spieler (loesche-aktion spieler))
          (assoc :bank bank))) 
    no-welt))

;; No-Welt -> No-Welt
(defn miet-zahlung
  "Spieler sp muss Miete an Eigentümer von feld zahlen"
  [no-welt sp feld]
  (let [[sp1 sp2] (zahle-miete sp feld (name->spieler no-welt (eigentuemer feld)))]
    (trac/move-trace (spieler-name sp) " zahlt miete an " (eigentuemer feld))
    (-> no-welt
        (aktualisiere-spieler (loesche-aktion sp1 ))
        (aktualisiere-spieler sp2)
        (aktualisiere-spieler-status sp1))))

;; No-Welt -> No-Welt
(defn fuehre-spieler-aktion-aus
  "führt die Aktion aus, die im Spieler sp gespeichert ist"
  [no-welt sp] 
  (cond
    (empty? (aktion sp)) (aktualisiere-spieler no-welt sp)
    (kauf-aktion? sp)    (spieler-kauft-immobilie no-welt sp ((aktion sp) 1))
    (miet-zahlung? sp)   (miet-zahlung no-welt sp ((aktion sp) 1))))

;; No-Welt -> No-Welt
(defn setze-spiel-fort-wenn-bank-nicht-pleite
  "falls die Bank nicht pleite, führt der Spieler an der Reihe seine Aktion aus."
  [no-welt sp]
  (cond
    (not (pleite? (no-welt :bank)))
    (-> no-welt
        (fuehre-spieler-aktion-aus sp)
        (der-naechste-an-der-reihe))
    :else no-welt))

;; No-Welt -> No-Welt
(defn zahle-gehalt
  "die Bank zahlt bei Fälligkeit an Spieler sp das Gehalt"
  [no-welt sp]
  (if (gehalt-faellig-fuer? sp)
    (let [kb? (kann-bezahlen? (no-welt :bank) (GEHAELTER (gehalts-zahlung sp)))
          zahlbetrag (if kb? (GEHAELTER (gehalts-zahlung sp))
                         (do (trac/move-trace "Bank ist pleite!" )(guthaben (no-welt :bank))))
          [bank spieler] (ueberweise (no-welt :bank) sp zahlbetrag)]
      [(if kb? bank (s-pleite bank)) (s-gehalts-zahlung spieler :kein-gehalt)])
    [(no-welt :bank) sp]))

;; No-Welt -> No-Welt
(defn lass-spieler-an-der-reihe-ziehen
  "führt den Spielzug eines Spieler aus "
  [no-welt] 
  (let [sp (spieler-an-der-reihe no-welt)
        neue-pos (neue-position sp (felder (:spielbrett no-welt)))
        sp0 (bestimme-gehaltszahlung sp neue-pos)
        sp1 (gehe-auf sp0 neue-pos)
        [bank sp2] (zahle-gehalt no-welt sp1)]    
    (-> no-welt 
        (assoc :bank bank)
        (aktualisiere-spieler sp2) 
        (setze-spiel-fort-wenn-bank-nicht-pleite sp2)
        (pruefe-geldmenge))))


;; No-Welt -> Boolean
(defn nur-noch-ein-spieler-zahlungsfaehig?
  "prüft, ob nur noch ein oder kein Spieler nicht pleite ist"
  [no-welt] 
  (<= (count (filter (complement pleite?) (vals (no-welt :spieler-liste)))) 1))

;; No-Welt -> Boolean
(defn spiel-beendet?
  "prüft, ob das Spiel zuende ist"
  [no-welt]
  (or (> (no-welt :anzahl-runden) MAXIMALE-RUNDENANZAHL)
      (pleite? (:bank no-welt))
      (nur-noch-ein-spieler-zahlungsfaehig? no-welt)))

;; No-Welt -> String
(defn spielstand
  "zeigt den Spielstand als String"
  [no-welt]
  (str
   (g-to-string (no-welt :bank))
   (reduce str (map
                (fn [s] (g-to-string s))
                (vals (no-welt :spieler-liste))))
   "an der Reihe ist: "  (no-welt :an-der-Reihe) "\n"
   (to-string (no-welt :spielbrett))))

;; No-Welt -> No-Welt
(defn spielen
  "führt einen vollständigen Spielablauf durch"
  [no-welt]
  (loop [w no-welt]
    (if (spiel-beendet? w)
      w
      (recur (lass-spieler-an-der-reihe-ziehen w)))))

;; No-Welt -> No-Welt
(defn eine-runde
  "führt eine Runde durch bzw. beendet eine begonnene Runde"
  [no-welt]
  (loop [w no-welt runde (no-welt :anzahl-runden)]
    (if (or (< runde (w :anzahl-runden)) (spiel-beendet? w))
      w
      (recur (lass-spieler-an-der-reihe-ziehen w) runde))))

;; No-Welt -> No-Welt
(defn abbruch
  "Spielabbruch"
  [no-welt]
  (assoc no-welt :anzahl-runden (inc MAXIMALE-RUNDENANZAHL)))


;; WorldState: data that represents the state of the world (cw)
;; die NoNopoly-Welt
(def NONOPOLY
  {:bank nil
   :spieler-liste ()
   :spieler-reihenfolge [] ; Vektor mit den Spielernamen in der Würfelreihenfolge}
   :an-der-Reihe nil ; der Spieler, der als nächster an der Reihe ist
   :spielbrett spielbrett
   :anzahl-runden 1
   :anzahl-spieler 0})

;; WorldState -> String
(defn render
  "when needed, big-bang obtains the image of the current state of the world
  by evaluating (render cw) "
  [cw] (spielstand cw))

;; WorldState String -> WorldState 
(defn keystroke-handler
  "for each keystroke, big-bang obtains the next state from
  (keystroke-handler cw ke). ke represents the key" 
  [cw ke]
  (case ke
    "z" (lass-spieler-an-der-reihe-ziehen cw)
    "f" (spielen cw)
    "a" (abbruch cw)
    "r" (eine-runde cw)))

;; WorldState -> Boolean
(defn end?
  "after each event, big-bang evaluates (end? cw) "
  [cw] (spiel-beendet? cw))

;; WorldState -> WorldState
(defn move
  "executes one game move"
  [cw] (lass-spieler-an-der-reihe-ziehen cw))

;; (def actions {"1-Zug" lass-spieler-an-der-reihe-ziehen
;;               "Runde-beenden" eine-runde
;;               "Spiel-fortsetzen" spielen
;;               "Spiel-abbrechen" abbruch})

(def ACTIONS
  {:on-move move
   :to-draw render
   :stop-when end?
   :on-key keystroke-handler
   :allowed-keys {"z" "1-Zug"
                  "r" "Runde-beenden"
                  "f" "Spiel-fortsetzen"
                  "a" "Spiel-abbrechen"}})

