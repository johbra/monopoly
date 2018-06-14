(ns nonopolyfulc.feld)

;; Konstruktoren

(defn ->Feld [position name]
  {:position position :feld-name name :type :feld})

(defn ->Immo [feld kaufpreis miete eigentuemer]
  {:feld feld :kaufpreis kaufpreis :miete miete :eigentuemer eigentuemer :type :immo})

(def astrasse (->Immo (->Feld 1 "A-Straße")  1000  100  "Bank"))

;; Getter
(defn feld-name [self] 
  (let [f-map {:feld (fn [self] (:feld-name self ))
               :immo (fn [self] (:feld-name (:feld self)))}]
    ((f-map (:type self)) self)))

(defn position [self] 
  (let [f-map {:feld (fn [self] (:position self ))
               :immo (fn [self] (:position (:feld self)))}]
    ((f-map (:type self)) self)))

(defn miete [self] (:miete self))
(defn kaufpreis [self] (:kaufpreis self))
(defn eigentuemer [self] (:eigentuemer  self))

;; setter
(defn s-eigentuemer [self sp-name]
  (assoc self :eigentuemer sp-name))

;; weitere "Methoden"
(defn to-string [self] 
  (let [f-map {:feld (fn [self] (println-str (:feld-name self )))
               :immo (fn [self] (println-str (:feld-name (:feld self)) " gehört "
                                             (:eigentuemer self )))}]
    ((f-map (:type self)) self)))

(defn verfuegbar [self]
  (let [f-map {:feld (fn [self] false)
               :immo (fn [self] (= (:eigentuemer self) "Bank"))}]
    ((f-map (:type self)) self)))

(defn verkauft [self]
  (let [f-map {:feld (fn [self]  false)
               :immo (fn [self] (not (verfuegbar self)))}]
    ((f-map (:type self)) self)))

;; (to-string (->Feld  0   "Los"))
;; (to-string (->Immo (->Feld 1   "A-Straße") 1000  100  "Bank"))
;; (verfuegbar (->Immo (->Feld 1   "A-Straße") 100   100  "Bank"))
;; (verfuegbar (->Feld  0   "Los"))
;; (verkauft (->Immo (->Feld 1   "A-Straße") 100   100  "Bank"))
;; (verkauft (->Immo (->Feld 1   "A-Straße") 100   100  ""))
;; (verkauft (->Feld  0   "Los"))
;; (position (->Feld  0   "Los"))
;; (position (->Immo (->Feld 1   "A-Straße") 100   100  "Bank"))

