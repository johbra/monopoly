(ns nonopolyfulc.spielbrett
  (:require [nonopolyfulc.feld :refer [to-string feld-name s-eigentuemer position
                                       ->Feld ->Immo]
             :rename {to-string f-to-string}]
            [nonopolyfulc.taler :refer [to-string nt] :rename {to-string g-to-string}]))

;; Konstruktor

(defn ->Spielbrett [felder] {:felder felder})

;; Getter
(defn felder [self] (:felder self))

;; weitere "Methoden"
(defn to-string [self]
  (str 
   (reduce str (map
                (fn [s] (f-to-string s))
                (:felder self)))))

;; gibt der immo den Namen von Spieler sp als neuen Eigentuemer
(defn neuer-eigentuemer [self immo sp-name] 
  (let [feld (s-eigentuemer immo sp-name)]
    (assoc self :felder (update (:felder self ) (position immo ) (fn [_] feld)))))

;; falls sp-name Eigentuemer von feld ist, wird Bank Eigentuemer
(defn gib-zurueck-an-bank [feld sp-name]
  (if (= (feld :eigentuemer) sp-name)
    (assoc feld :eigentuemer "Bank")
    feld))

;;;;;;;;;;;;;;;;;;;;;;;;;
;; ein Mini-Spielbrett ;;
;;;;;;;;;;;;;;;;;;;;;;;;;

(def spielbrett
  (->Spielbrett
   [
    (->Feld  0   "Los")
    (->Immo (->Feld 1   "A-Straße") (nt 1000)  (nt 2000)  "Bank")
    (->Immo (->Feld 2   "Nordbahnhof") (nt 1000)  (nt 2000)  "Bank")
    (->Immo (->Feld 3   "B-Straße") (nt 1000)  (nt 2000)  "Bank")
    (->Feld  4   "Gefängnis")
    (->Immo (->Feld 5   "C-Straße") (nt 1000)  (nt 2000)  "Bank")
    (->Immo (->Feld 6   "Wasserwerk") (nt 1000)  (nt 2000)  "Bank")
    (->Immo (->Feld 7   "D-Straße") (nt 1000)  (nt 2000)  "Bank")
    (->Feld  8   "Frei parken")
    (->Immo (->Feld 9   "E-Straße") (nt 1000)  (nt 2000)  "Bank")
    (->Immo (->Feld 10   "Südbahnhof") (nt 1000)  (nt 2000)  "Bank")
    (->Immo (->Feld 11   "F-Straße") (nt 1000)  (nt 2000)  "Bank")
    (->Feld  12   "Polizist")
    (->Immo (->Feld 13   "G-Straße") (nt 1000)  (nt 2000)  "Bank")
    (->Immo (->Feld 14   "E-Werk") (nt 1000)  (nt 2000)  "Bank")
    (->Immo (->Feld 15   "H-Straße") (nt 1000)  (nt 2000)  "Bank")]))

