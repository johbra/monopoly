// Compiled by ClojureScript 1.10.238 {}
goog.provide('nonopolyfulc.taler');
goog.require('cljs.core');
nonopolyfulc.taler.nt = (function nonopolyfulc$taler$nt(wert){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wert","wert",1259303496),wert,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"guthaben","guthaben",-888854484)], null);
});
nonopolyfulc.taler.sub = (function nonopolyfulc$taler$sub(self,betrag){
return nonopolyfulc.taler.nt.call(null,(new cljs.core.Keyword(null,"wert","wert",1259303496).cljs$core$IFn$_invoke$arity$1(self) - new cljs.core.Keyword(null,"wert","wert",1259303496).cljs$core$IFn$_invoke$arity$1(betrag)));
});
nonopolyfulc.taler.add = (function nonopolyfulc$taler$add(self,betrag){
return nonopolyfulc.taler.nt.call(null,(new cljs.core.Keyword(null,"wert","wert",1259303496).cljs$core$IFn$_invoke$arity$1(self) + new cljs.core.Keyword(null,"wert","wert",1259303496).cljs$core$IFn$_invoke$arity$1(betrag)));
});
nonopolyfulc.taler.mul = (function nonopolyfulc$taler$mul(self,faktor){
return nonopolyfulc.taler.nt.call(null,(new cljs.core.Keyword(null,"wert","wert",1259303496).cljs$core$IFn$_invoke$arity$1(self) * faktor));
});
nonopolyfulc.taler.gr_or_eq_QMARK_ = (function nonopolyfulc$taler$gr_or_eq_QMARK_(self,betrag){
return (new cljs.core.Keyword(null,"wert","wert",1259303496).cljs$core$IFn$_invoke$arity$1(self) >= new cljs.core.Keyword(null,"wert","wert",1259303496).cljs$core$IFn$_invoke$arity$1(betrag));
});
nonopolyfulc.taler.to_string = (function nonopolyfulc$taler$to_string(self){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"wert","wert",1259303496).cljs$core$IFn$_invoke$arity$1(self))," nt"].join('');
});

//# sourceMappingURL=taler.js.map?rel=1528903097890
