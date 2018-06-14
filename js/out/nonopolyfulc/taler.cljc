(ns nonopolyfulc.taler)

;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Die NoNopoly-Währung ;;
;;;;;;;;;;;;;;;;;;;;;;;;;;

(defn nt [wert] {:wert wert :type :guthaben})
(defn sub [self betrag] (nt (- (:wert self ) (:wert betrag) )))
(defn add [self betrag] (nt (+ (:wert self ) (:wert betrag) )))
(defn mul [self faktor] (nt (* (:wert self ) faktor )))
(defn gr-or-eq? [self betrag] (>= (:wert self) (:wert betrag)))
(defn to-string [self]
  (str (:wert self) " nt"))
