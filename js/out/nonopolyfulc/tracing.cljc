(ns nonopolyfulc.tracing)

(def TRACE true)
(defn move-trace [& args]
  (when TRACE (do (print ">>>Trace>>> ") (apply println args))))

