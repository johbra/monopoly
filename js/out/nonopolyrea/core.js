// Compiled by ClojureScript 1.10.238 {}
goog.provide('nonopolyrea.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('nonopolyfulc.core');
if(typeof nonopolyrea.core.world !== 'undefined'){
} else {
nonopolyrea.core.world = reagent.core.atom.call(null,nonopolyfulc.core.verteile_startguthaben.call(null,nonopolyfulc.core.initialisiere.call(null,nonopolyfulc.core.NONOPOLY)));
}
nonopolyrea.core.status = (function nonopolyrea$core$status(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spielstand","div.spielstand",753691619),"Status: ",(cljs.core.truth_(nonopolyfulc.core.spiel_beendet_QMARK_.call(null,cljs.core.deref.call(null,nonopolyrea.core.world)))?"Spiel beendet":"Spiel l\u00E4uft")], null);
});
nonopolyrea.core.spielstand = (function nonopolyrea$core$spielstand(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.spielstand","div.spielstand",753691619),"Spielstand: ",nonopolyfulc.core.spielstand.call(null,cljs.core.deref.call(null,nonopolyrea.core.world))], null);
});
/**
 * abgeleitet aus den in nonopolyfulc.core definierten ACTIONS
 */
nonopolyrea.core.schaltflaechen = (function nonopolyrea$core$schaltflaechen(){
var allowed_keys = nonopolyfulc.core.ACTIONS.call(null,new cljs.core.Keyword(null,"allowed-keys","allowed-keys",-553170933));
return cljs.core.map.call(null,((function (allowed_keys){
return (function (e){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (allowed_keys){
return (function (){
return cljs.core.swap_BANG_.call(null,nonopolyrea.core.world,nonopolyfulc.core.ACTIONS.call(null,new cljs.core.Keyword(null,"on-key","on-key",1297490032)),cljs.core.first.call(null,e));
});})(allowed_keys))
], null),clojure.string.replace.call(null,cljs.core.second.call(null,e),/-/," ")], null);
});})(allowed_keys))
,allowed_keys);
});
nonopolyrea.core.home_page = (function nonopolyrea$core$home_page(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"Welcome to NoNopoly"], null),cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Keyword(null,"div.schaltflaechen","div.schaltflaechen",902463246),nonopolyrea.core.schaltflaechen.call(null))),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nonopolyrea.core.status], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nonopolyrea.core.spielstand], null)], null);
});
nonopolyrea.core.mount_root = (function nonopolyrea$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nonopolyrea.core.home_page], null),document.getElementById("app"));
});
nonopolyrea.core.init_BANG_ = (function nonopolyrea$core$init_BANG_(){
return nonopolyrea.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1528903102212
