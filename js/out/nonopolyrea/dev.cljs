(ns ^:figwheel-no-load nonopolyrea.dev
  (:require
    [nonopolyrea.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
