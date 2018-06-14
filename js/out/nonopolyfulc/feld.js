// Compiled by ClojureScript 1.10.238 {}
goog.provide('nonopolyfulc.feld');
goog.require('cljs.core');
nonopolyfulc.feld.__GT_Feld = (function nonopolyfulc$feld$__GT_Feld(position,name){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"feld-name","feld-name",-879267086),name,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"feld","feld",-850748766)], null);
});
nonopolyfulc.feld.__GT_Immo = (function nonopolyfulc$feld$__GT_Immo(feld,kaufpreis,miete,eigentuemer){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"feld","feld",-850748766),feld,new cljs.core.Keyword(null,"kaufpreis","kaufpreis",-960047962),kaufpreis,new cljs.core.Keyword(null,"miete","miete",-1874376114),miete,new cljs.core.Keyword(null,"eigentuemer","eigentuemer",615997817),eigentuemer,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"immo","immo",2047809658)], null);
});
nonopolyfulc.feld.astrasse = nonopolyfulc.feld.__GT_Immo.call(null,nonopolyfulc.feld.__GT_Feld.call(null,(1),"A-Stra\u00DFe"),(1000),(100),"Bank");
nonopolyfulc.feld.feld_name = (function nonopolyfulc$feld$feld_name(self){
var f_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feld","feld",-850748766),(function (self__$1){
return new cljs.core.Keyword(null,"feld-name","feld-name",-879267086).cljs$core$IFn$_invoke$arity$1(self__$1);
}),new cljs.core.Keyword(null,"immo","immo",2047809658),(function (self__$1){
return new cljs.core.Keyword(null,"feld-name","feld-name",-879267086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"feld","feld",-850748766).cljs$core$IFn$_invoke$arity$1(self__$1));
})], null);
return f_map.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self)).call(null,self);
});
nonopolyfulc.feld.position = (function nonopolyfulc$feld$position(self){
var f_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feld","feld",-850748766),(function (self__$1){
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(self__$1);
}),new cljs.core.Keyword(null,"immo","immo",2047809658),(function (self__$1){
return new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"feld","feld",-850748766).cljs$core$IFn$_invoke$arity$1(self__$1));
})], null);
return f_map.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self)).call(null,self);
});
nonopolyfulc.feld.miete = (function nonopolyfulc$feld$miete(self){
return new cljs.core.Keyword(null,"miete","miete",-1874376114).cljs$core$IFn$_invoke$arity$1(self);
});
nonopolyfulc.feld.kaufpreis = (function nonopolyfulc$feld$kaufpreis(self){
return new cljs.core.Keyword(null,"kaufpreis","kaufpreis",-960047962).cljs$core$IFn$_invoke$arity$1(self);
});
nonopolyfulc.feld.eigentuemer = (function nonopolyfulc$feld$eigentuemer(self){
return new cljs.core.Keyword(null,"eigentuemer","eigentuemer",615997817).cljs$core$IFn$_invoke$arity$1(self);
});
nonopolyfulc.feld.s_eigentuemer = (function nonopolyfulc$feld$s_eigentuemer(self,sp_name){
return cljs.core.assoc.call(null,self,new cljs.core.Keyword(null,"eigentuemer","eigentuemer",615997817),sp_name);
});
nonopolyfulc.feld.to_string = (function nonopolyfulc$feld$to_string(self){
var f_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feld","feld",-850748766),(function (self__$1){
return cljs.core.println_str.call(null,new cljs.core.Keyword(null,"feld-name","feld-name",-879267086).cljs$core$IFn$_invoke$arity$1(self__$1));
}),new cljs.core.Keyword(null,"immo","immo",2047809658),(function (self__$1){
return cljs.core.println_str.call(null,new cljs.core.Keyword(null,"feld-name","feld-name",-879267086).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"feld","feld",-850748766).cljs$core$IFn$_invoke$arity$1(self__$1))," geh\u00F6rt ",new cljs.core.Keyword(null,"eigentuemer","eigentuemer",615997817).cljs$core$IFn$_invoke$arity$1(self__$1));
})], null);
return f_map.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self)).call(null,self);
});
nonopolyfulc.feld.verfuegbar = (function nonopolyfulc$feld$verfuegbar(self){
var f_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feld","feld",-850748766),(function (self__$1){
return false;
}),new cljs.core.Keyword(null,"immo","immo",2047809658),(function (self__$1){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"eigentuemer","eigentuemer",615997817).cljs$core$IFn$_invoke$arity$1(self__$1),"Bank");
})], null);
return f_map.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self)).call(null,self);
});
nonopolyfulc.feld.verkauft = (function nonopolyfulc$feld$verkauft(self){
var f_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"feld","feld",-850748766),(function (self__$1){
return false;
}),new cljs.core.Keyword(null,"immo","immo",2047809658),(function (self__$1){
return cljs.core.not.call(null,nonopolyfulc.feld.verfuegbar.call(null,self__$1));
})], null);
return f_map.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self)).call(null,self);
});

//# sourceMappingURL=feld.js.map?rel=1528903098010
