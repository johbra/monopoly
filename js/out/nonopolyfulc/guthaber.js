// Compiled by ClojureScript 1.10.238 {}
goog.provide('nonopolyfulc.guthaber');
goog.require('cljs.core');
goog.require('nonopolyfulc.feld');
goog.require('nonopolyfulc.spielbrett');
goog.require('nonopolyfulc.taler');
goog.require('nonopolyfulc.tracing');
nonopolyfulc.guthaber.__GT_Spieler = (function nonopolyfulc$guthaber$__GT_Spieler(name,feld){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"spieler-name","spieler-name",-1325659791),name,new cljs.core.Keyword(null,"guthaben","guthaben",-888854484),nonopolyfulc.taler.nt.call(null,(0)),new cljs.core.Keyword(null,"pleite?","pleite?",1735063379),false,new cljs.core.Keyword(null,"feld","feld",-850748766),feld,new cljs.core.Keyword(null,"aktion","aktion",-978072313),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"gehalts-zahlung","gehalts-zahlung",983282181),new cljs.core.Keyword(null,"kein-gehalt","kein-gehalt",-2072207955),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"spieler","spieler",1357545230)], null);
});
nonopolyfulc.guthaber.__GT_Bank = (function nonopolyfulc$guthaber$__GT_Bank(name,guthaben){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"guthaben","guthaben",-888854484),guthaben,new cljs.core.Keyword(null,"pleite?","pleite?",1735063379),false,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bank","bank",-1982531798)], null);
});
nonopolyfulc.guthaber.spieler_name = (function nonopolyfulc$guthaber$spieler_name(self){
return new cljs.core.Keyword(null,"spieler-name","spieler-name",-1325659791).cljs$core$IFn$_invoke$arity$1(self);
});
nonopolyfulc.guthaber.guthaben = (function nonopolyfulc$guthaber$guthaben(self){
return new cljs.core.Keyword(null,"guthaben","guthaben",-888854484).cljs$core$IFn$_invoke$arity$1(self);
});
nonopolyfulc.guthaber.feld = (function nonopolyfulc$guthaber$feld(self){
return new cljs.core.Keyword(null,"feld","feld",-850748766).cljs$core$IFn$_invoke$arity$1(self);
});
nonopolyfulc.guthaber.aktion = (function nonopolyfulc$guthaber$aktion(self){
return new cljs.core.Keyword(null,"aktion","aktion",-978072313).cljs$core$IFn$_invoke$arity$1(self);
});
nonopolyfulc.guthaber.pleite_QMARK_ = (function nonopolyfulc$guthaber$pleite_QMARK_(self){
return new cljs.core.Keyword(null,"pleite?","pleite?",1735063379).cljs$core$IFn$_invoke$arity$1(self);
});
nonopolyfulc.guthaber.gehalts_zahlung = (function nonopolyfulc$guthaber$gehalts_zahlung(self){
return new cljs.core.Keyword(null,"gehalts-zahlung","gehalts-zahlung",983282181).cljs$core$IFn$_invoke$arity$1(self);
});
nonopolyfulc.guthaber.s_pleite = (function nonopolyfulc$guthaber$s_pleite(self){
return cljs.core.assoc.call(null,self,new cljs.core.Keyword(null,"pleite?","pleite?",1735063379),true);
});
nonopolyfulc.guthaber.s_aktion = (function nonopolyfulc$guthaber$s_aktion(self,aktion){
return cljs.core.assoc.call(null,self,new cljs.core.Keyword(null,"aktion","aktion",-978072313),aktion);
});
nonopolyfulc.guthaber.s_gehalts_zahlung = (function nonopolyfulc$guthaber$s_gehalts_zahlung(self,zahlung){
return cljs.core.assoc.call(null,self,new cljs.core.Keyword(null,"gehalts-zahlung","gehalts-zahlung",983282181),zahlung);
});
nonopolyfulc.guthaber.s_feld = (function nonopolyfulc$guthaber$s_feld(self,feld){
return cljs.core.assoc.call(null,self,new cljs.core.Keyword(null,"feld","feld",-850748766),feld);
});
nonopolyfulc.guthaber.loesche_aktion = (function nonopolyfulc$guthaber$loesche_aktion(self){
return nonopolyfulc.guthaber.s_aktion.call(null,self,cljs.core.PersistentVector.EMPTY);
});
nonopolyfulc.guthaber.hebe_ab = (function nonopolyfulc$guthaber$hebe_ab(self,betrag){
return cljs.core.update_in.call(null,self,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guthaben","guthaben",-888854484)], null),nonopolyfulc.taler.sub,betrag);
});
nonopolyfulc.guthaber.schreibe_gut = (function nonopolyfulc$guthaber$schreibe_gut(self,betrag){
return cljs.core.update_in.call(null,self,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"guthaben","guthaben",-888854484)], null),nonopolyfulc.taler.add,betrag);
});
nonopolyfulc.guthaber.ueberweise = (function nonopolyfulc$guthaber$ueberweise(gh_von,gh_an,betrag){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nonopolyfulc.guthaber.hebe_ab.call(null,gh_von,betrag),nonopolyfulc.guthaber.schreibe_gut.call(null,gh_an,betrag)], null);
});
nonopolyfulc.guthaber.kann_bezahlen_QMARK_ = (function nonopolyfulc$guthaber$kann_bezahlen_QMARK_(self,betrag){
return nonopolyfulc.taler.gr_or_eq_QMARK_.call(null,new cljs.core.Keyword(null,"guthaben","guthaben",-888854484).cljs$core$IFn$_invoke$arity$1(self),betrag);
});
nonopolyfulc.guthaber.gehalt_faellig_fuer_QMARK_ = (function nonopolyfulc$guthaber$gehalt_faellig_fuer_QMARK_(self){
return !(cljs.core._EQ_.call(null,nonopolyfulc.guthaber.gehalts_zahlung.call(null,self),new cljs.core.Keyword(null,"kein-gehalt","kein-gehalt",-2072207955)));
});
nonopolyfulc.guthaber.kauf_aktion_QMARK_ = (function nonopolyfulc$guthaber$kauf_aktion_QMARK_(self){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,nonopolyfulc.guthaber.aktion.call(null,self)),new cljs.core.Keyword(null,"kaufe","kaufe",-995018905));
});
nonopolyfulc.guthaber.miet_zahlung_QMARK_ = (function nonopolyfulc$guthaber$miet_zahlung_QMARK_(self){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,nonopolyfulc.guthaber.aktion.call(null,self)),new cljs.core.Keyword(null,"zahle-miete","zahle-miete",192296986));
});
nonopolyfulc.guthaber.to_string = (function nonopolyfulc$guthaber$to_string(self){
var f_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bank","bank",-1982531798),(function (self__$1){
return cljs.core.println_str.call(null,"Bankguthaben: ",nonopolyfulc.taler.to_string.call(null,new cljs.core.Keyword(null,"guthaben","guthaben",-888854484).cljs$core$IFn$_invoke$arity$1(self__$1)));
}),new cljs.core.Keyword(null,"spieler","spieler",1357545230),(function (self__$1){
return cljs.core.println_str.call(null,"SpielerIn ",new cljs.core.Keyword(null,"spieler-name","spieler-name",-1325659791).cljs$core$IFn$_invoke$arity$1(self__$1)," ",nonopolyfulc.taler.to_string.call(null,new cljs.core.Keyword(null,"guthaben","guthaben",-888854484).cljs$core$IFn$_invoke$arity$1(self__$1))," steht auf ",nonopolyfulc.feld.feld_name.call(null,new cljs.core.Keyword(null,"feld","feld",-850748766).cljs$core$IFn$_invoke$arity$1(self__$1)),(cljs.core.truth_(self__$1.call(null,new cljs.core.Keyword(null,"pleite?","pleite?",1735063379)))?" pleite":" aktiv"));
})], null);
return f_map.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self)).call(null,self);
});
nonopolyfulc.guthaber.will_kaufen_QMARK_ = (function nonopolyfulc$guthaber$will_kaufen_QMARK_(self,immo){
return nonopolyfulc.guthaber.kann_bezahlen_QMARK_.call(null,self,nonopolyfulc.feld.kaufpreis.call(null,immo));
});
nonopolyfulc.guthaber.bestimme_gehaltszahlung = (function nonopolyfulc$guthaber$bestimme_gehaltszahlung(self,feld){
return nonopolyfulc.guthaber.s_gehalts_zahlung.call(null,self,((cljs.core._EQ_.call(null,nonopolyfulc.feld.feld_name.call(null,feld),"LOS"))?new cljs.core.Keyword(null,"bonus-gehalt","bonus-gehalt",-1869838046):(((nonopolyfulc.feld.position.call(null,feld) < nonopolyfulc.feld.position.call(null,self.call(null,new cljs.core.Keyword(null,"feld","feld",-850748766)))))?new cljs.core.Keyword(null,"grund-gehalt","grund-gehalt",99921838):new cljs.core.Keyword(null,"kein-gehalt","kein-gehalt",-2072207955)
)));
});
nonopolyfulc.guthaber.gehe_auf = (function nonopolyfulc$guthaber$gehe_auf(self,feld){
var sp1 = nonopolyfulc.guthaber.s_feld.call(null,self,feld);
var spn = (cljs.core.truth_(nonopolyfulc.feld.verfuegbar.call(null,feld))?nonopolyfulc.guthaber.s_aktion.call(null,sp1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"kaufe","kaufe",-995018905),feld], null)):(cljs.core.truth_((function (){var and__3911__auto__ = nonopolyfulc.feld.verkauft.call(null,feld);
if(cljs.core.truth_(and__3911__auto__)){
return !(cljs.core._EQ_.call(null,nonopolyfulc.feld.eigentuemer.call(null,feld),nonopolyfulc.guthaber.spieler_name.call(null,self)));
} else {
return and__3911__auto__;
}
})())?nonopolyfulc.guthaber.s_aktion.call(null,sp1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"zahle-miete","zahle-miete",192296986),feld], null)):sp1
));
return spn;
});
nonopolyfulc.guthaber.neue_position = (function nonopolyfulc$guthaber$neue_position(self,felder){
var wuerfele = (function (){
return ((1) + cljs.core.rand_int.call(null,(6)));
});
var alte_pos_nr = nonopolyfulc.feld.position.call(null,nonopolyfulc.guthaber.feld.call(null,self));
var neue_pos_nr = cljs.core.mod.call(null,(alte_pos_nr + wuerfele.call(null)),(16));
nonopolyfulc.tracing.move_trace.call(null,nonopolyfulc.guthaber.spieler_name.call(null,self)," geht auf ",nonopolyfulc.feld.feld_name.call(null,felder.call(null,neue_pos_nr)));

return felder.call(null,neue_pos_nr);
});
nonopolyfulc.guthaber.zahle_miete = (function nonopolyfulc$guthaber$zahle_miete(self,feld,empfaenger){
var kb_QMARK_ = nonopolyfulc.guthaber.kann_bezahlen_QMARK_.call(null,self,nonopolyfulc.feld.miete.call(null,feld));
var zahlbetrag = (cljs.core.truth_(kb_QMARK_)?nonopolyfulc.feld.miete.call(null,feld):(function (){
nonopolyfulc.tracing.move_trace.call(null,nonopolyfulc.guthaber.spieler_name.call(null,self)," ist pleite!");

return nonopolyfulc.guthaber.guthaben.call(null,self);
})()
);
var spz = (cljs.core.truth_(kb_QMARK_)?self:nonopolyfulc.guthaber.s_pleite.call(null,self));
return nonopolyfulc.guthaber.ueberweise.call(null,spz,empfaenger,zahlbetrag);
});

//# sourceMappingURL=guthaber.js.map?rel=1528903098334
