(ns nonopolyrea.core
  (:require
   [reagent.core :as r]
   [nonopolyfulc.core :as nop]))

;; State
(defonce world (r/atom (-> nop/NONOPOLY (nop/initialisiere) (nop/verteile-startguthaben))))

;; -------------------------
;; Views

(defn status
  []
  [:div.spielstand
   "Status: "
   (if (nop/spiel-beendet? @world) "Spiel beendet" "Spiel läuft")])

(defn spielstand
  []
  [:div.spielstand
   "Spielstand: "
   (nop/spielstand @world)])

;; -------------------------
;; Events

(defn schaltflaechen
  "abgeleitet aus den in nonopolyfulc.core definierten ACTIONS"
  []
  (let [allowed-keys (nop/ACTIONS :allowed-keys)]
    (map (fn [e] 
           [:button {:on-click  #(swap! world (nop/ACTIONS :on-key) (first e))}
            (clojure.string/replace (second e) #"-" " ")])
         allowed-keys)))

(defn home-page []
  [:div [:h2 "Welcome to NoNopoly"]
   (vec (cons :div.schaltflaechen
              (schaltflaechen)))
   [status]
   [spielstand]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
