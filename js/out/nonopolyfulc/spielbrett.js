// Compiled by ClojureScript 1.10.238 {}
goog.provide('nonopolyfulc.spielbrett');
goog.require('cljs.core');
goog.require('nonopolyfulc.feld');
goog.require('nonopolyfulc.taler');
nonopolyfulc.spielbrett.__GT_Spielbrett = (function nonopolyfulc$spielbrett$__GT_Spielbrett(felder){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"felder","felder",475691011),felder], null);
});
nonopolyfulc.spielbrett.felder = (function nonopolyfulc$spielbrett$felder(self){
return new cljs.core.Keyword(null,"felder","felder",475691011).cljs$core$IFn$_invoke$arity$1(self);
});
nonopolyfulc.spielbrett.to_string = (function nonopolyfulc$spielbrett$to_string(self){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,cljs.core.map.call(null,(function (s){
return nonopolyfulc.feld.to_string.call(null,s);
}),new cljs.core.Keyword(null,"felder","felder",475691011).cljs$core$IFn$_invoke$arity$1(self))))].join('');
});
nonopolyfulc.spielbrett.neuer_eigentuemer = (function nonopolyfulc$spielbrett$neuer_eigentuemer(self,immo,sp_name){
var feld = nonopolyfulc.feld.s_eigentuemer.call(null,immo,sp_name);
return cljs.core.assoc.call(null,self,new cljs.core.Keyword(null,"felder","felder",475691011),cljs.core.update.call(null,new cljs.core.Keyword(null,"felder","felder",475691011).cljs$core$IFn$_invoke$arity$1(self),nonopolyfulc.feld.position.call(null,immo),((function (feld){
return (function (_){
return feld;
});})(feld))
));
});
nonopolyfulc.spielbrett.gib_zurueck_an_bank = (function nonopolyfulc$spielbrett$gib_zurueck_an_bank(feld,sp_name){
if(cljs.core._EQ_.call(null,feld.call(null,new cljs.core.Keyword(null,"eigentuemer","eigentuemer",615997817)),sp_name)){
return cljs.core.assoc.call(null,feld,new cljs.core.Keyword(null,"eigentuemer","eigentuemer",615997817),"Bank");
} else {
return feld;
}
});
nonopolyfulc.spielbrett.spielbrett = nonopolyfulc.spielbrett.__GT_Spielbrett.call(null,new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [nonopolyfulc.feld.__GT_Feld.call(null,(0),"Los"),nonopolyfulc.feld.__GT_Immo.call(null,nonopolyfulc.feld.__GT_Feld.call(null,(1),"A-Stra\u00DFe"),nonopolyfulc.taler.nt.call(null,(1000)),nonopolyfulc.taler.nt.call(null,(2000)),"Bank"),nonopolyfulc.feld.__GT_Immo.call(null,nonopolyfulc.feld.__GT_Feld.call(null,(2),"Nordbahnhof"),nonopolyfulc.taler.nt.call(null,(1000)),nonopolyfulc.taler.nt.call(null,(2000)),"Bank"),nonopolyfulc.feld.__GT_Immo.call(null,nonopolyfulc.feld.__GT_Feld.call(null,(3),"B-Stra\u00DFe"),nonopolyfulc.taler.nt.call(null,(1000)),nonopolyfulc.taler.nt.call(null,(2000)),"Bank"),nonopolyfulc.feld.__GT_Feld.call(null,(4),"Gef\u00E4ngnis"),nonopolyfulc.feld.__GT_Immo.call(null,nonopolyfulc.feld.__GT_Feld.call(null,(5),"C-Stra\u00DFe"),nonopolyfulc.taler.nt.call(null,(1000)),nonopolyfulc.taler.nt.call(null,(2000)),"Bank"),nonopolyfulc.feld.__GT_Immo.call(null,nonopolyfulc.feld.__GT_Feld.call(null,(6),"Wasserwerk"),nonopolyfulc.taler.nt.call(null,(1000)),nonopolyfulc.taler.nt.call(null,(2000)),"Bank"),nonopolyfulc.feld.__GT_Immo.call(null,nonopolyfulc.feld.__GT_Feld.call(null,(7),"D-Stra\u00DFe"),nonopolyfulc.taler.nt.call(null,(1000)),nonopolyfulc.taler.nt.call(null,(2000)),"Bank"),nonopolyfulc.feld.__GT_Feld.call(null,(8),"Frei parken"),nonopolyfulc.feld.__GT_Immo.call(null,nonopolyfulc.feld.__GT_Feld.call(null,(9),"E-Stra\u00DFe"),nonopolyfulc.taler.nt.call(null,(1000)),nonopolyfulc.taler.nt.call(null,(2000)),"Bank"),nonopolyfulc.feld.__GT_Immo.call(null,nonopolyfulc.feld.__GT_Feld.call(null,(10),"S\u00FCdbahnhof"),nonopolyfulc.taler.nt.call(null,(1000)),nonopolyfulc.taler.nt.call(null,(2000)),"Bank"),nonopolyfulc.feld.__GT_Immo.call(null,nonopolyfulc.feld.__GT_Feld.call(null,(11),"F-Stra\u00DFe"),nonopolyfulc.taler.nt.call(null,(1000)),nonopolyfulc.taler.nt.call(null,(2000)),"Bank"),nonopolyfulc.feld.__GT_Feld.call(null,(12),"Polizist"),nonopolyfulc.feld.__GT_Immo.call(null,nonopolyfulc.feld.__GT_Feld.call(null,(13),"G-Stra\u00DFe"),nonopolyfulc.taler.nt.call(null,(1000)),nonopolyfulc.taler.nt.call(null,(2000)),"Bank"),nonopolyfulc.feld.__GT_Immo.call(null,nonopolyfulc.feld.__GT_Feld.call(null,(14),"E-Werk"),nonopolyfulc.taler.nt.call(null,(1000)),nonopolyfulc.taler.nt.call(null,(2000)),"Bank"),nonopolyfulc.feld.__GT_Immo.call(null,nonopolyfulc.feld.__GT_Feld.call(null,(15),"H-Stra\u00DFe"),nonopolyfulc.taler.nt.call(null,(1000)),nonopolyfulc.taler.nt.call(null,(2000)),"Bank")], null));

//# sourceMappingURL=spielbrett.js.map?rel=1528903098101
