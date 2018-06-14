// Compiled by ClojureScript 1.10.238 {}
goog.provide('nonopolyfulc.core');
goog.require('cljs.core');
goog.require('nonopolyfulc.feld');
goog.require('nonopolyfulc.guthaber');
goog.require('nonopolyfulc.spielbrett');
goog.require('nonopolyfulc.taler');
goog.require('nonopolyfulc.tracing');
nonopolyfulc.core.GEHAELTER = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bonus-gehalt","bonus-gehalt",-1869838046),nonopolyfulc.taler.nt.call(null,(4000)),new cljs.core.Keyword(null,"grund-gehalt","grund-gehalt",99921838),nonopolyfulc.taler.nt.call(null,(8000)),new cljs.core.Keyword(null,"kein-gehalt","kein-gehalt",-2072207955),nonopolyfulc.taler.nt.call(null,(0))], null);
nonopolyfulc.core.STARTGUTHABEN_SPIELER = nonopolyfulc.taler.nt.call(null,(5000));
nonopolyfulc.core.STARTGUTHABEN_BANK = nonopolyfulc.taler.nt.call(null,(20000));
nonopolyfulc.core.MAXIMALE_RUNDENANZAHL = (20);
/**
 * wendet f auf alle values einer map m an
 */
nonopolyfulc.core.map_function_on_map_vals = (function nonopolyfulc$core$map_function_on_map_vals(f,m){
return cljs.core.zipmap.call(null,cljs.core.keys.call(null,m),cljs.core.map.call(null,f,cljs.core.vals.call(null,m)));
});
/**
 * erzeugt exemplarisch drei Teilnehmer und setzt sie auf feld
 */
nonopolyfulc.core.erzeuge_drei_spieler = (function nonopolyfulc$core$erzeuge_drei_spieler(feld){
return new cljs.core.PersistentArrayMap(null, 3, ["Karl",nonopolyfulc.guthaber.__GT_Spieler.call(null,"Karl",feld),"Rosa",nonopolyfulc.guthaber.__GT_Spieler.call(null,"Rosa",feld),"Klara",nonopolyfulc.guthaber.__GT_Spieler.call(null,"Klara",feld)], null);
});
/**
 * verwandelt den Namen eines Spielers (strng) in einen Spieler
 */
nonopolyfulc.core.name__GT_spieler = (function nonopolyfulc$core$name__GT_spieler(no_welt,strng){
return no_welt.call(null,new cljs.core.Keyword(null,"spieler-liste","spieler-liste",1238302222)).call(null,strng);
});
/**
 * ersetzt den Spieler in der spieler-liste durch spieler
 */
nonopolyfulc.core.aktualisiere_spieler = (function nonopolyfulc$core$aktualisiere_spieler(no_welt,spieler){
return cljs.core.assoc_in.call(null,no_welt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spieler-liste","spieler-liste",1238302222),nonopolyfulc.guthaber.spieler_name.call(null,spieler)], null),spieler);
});
/**
 * Erzeugt die Bank, drei Spieler, stellt sie auf Los und legt die Startreihen-
 *   folge fest
 */
nonopolyfulc.core.initialisiere = (function nonopolyfulc$core$initialisiere(no_welt){
var nw = cljs.core.assoc.call(null,cljs.core.assoc.call(null,no_welt,new cljs.core.Keyword(null,"bank","bank",-1982531798),nonopolyfulc.guthaber.__GT_Bank.call(null,"Bank",nonopolyfulc.core.STARTGUTHABEN_BANK)),new cljs.core.Keyword(null,"spieler-liste","spieler-liste",1238302222),nonopolyfulc.core.erzeuge_drei_spieler.call(null,nonopolyfulc.spielbrett.felder.call(null,nonopolyfulc.spielbrett.spielbrett).call(null,(0))));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,nw,new cljs.core.Keyword(null,"anzahl-spieler","anzahl-spieler",891594490),cljs.core.count.call(null,nw.call(null,new cljs.core.Keyword(null,"spieler-liste","spieler-liste",1238302222)))),new cljs.core.Keyword(null,"spieler-reihenfolge","spieler-reihenfolge",-1117111611),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.keys.call(null,nw.call(null,new cljs.core.Keyword(null,"spieler-liste","spieler-liste",1238302222))))),new cljs.core.Keyword(null,"an-der-Reihe","an-der-Reihe",-342254426),cljs.core.first.call(null,cljs.core.keys.call(null,nw.call(null,new cljs.core.Keyword(null,"spieler-liste","spieler-liste",1238302222))))),new cljs.core.Keyword(null,"anzahl-runden","anzahl-runden",621355623),(1));
});
nonopolyfulc.core.erhoehe_rundenzaehler = (function nonopolyfulc$core$erhoehe_rundenzaehler(no_welt){

return cljs.core.assoc.call(null,no_welt,new cljs.core.Keyword(null,"anzahl-runden","anzahl-runden",621355623),((1) + no_welt.call(null,new cljs.core.Keyword(null,"anzahl-runden","anzahl-runden",621355623))));
});
/**
 * die Bank überweist den Teilnehmern ihr Startguthaben
 */
nonopolyfulc.core.verteile_startguthaben = (function nonopolyfulc$core$verteile_startguthaben(no_welt){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,no_welt,new cljs.core.Keyword(null,"bank","bank",-1982531798),nonopolyfulc.guthaber.hebe_ab.call(null,new cljs.core.Keyword(null,"bank","bank",-1982531798).cljs$core$IFn$_invoke$arity$1(no_welt),nonopolyfulc.taler.mul.call(null,nonopolyfulc.core.STARTGUTHABEN_SPIELER,no_welt.call(null,new cljs.core.Keyword(null,"anzahl-spieler","anzahl-spieler",891594490))))),new cljs.core.Keyword(null,"spieler-liste","spieler-liste",1238302222),nonopolyfulc.core.map_function_on_map_vals.call(null,(function (t){
return nonopolyfulc.guthaber.schreibe_gut.call(null,t,nonopolyfulc.core.STARTGUTHABEN_SPIELER);
}),new cljs.core.Keyword(null,"spieler-liste","spieler-liste",1238302222).cljs$core$IFn$_invoke$arity$1(no_welt)));
});
/**
 * prueft die im Umlauf befindliche Geldmenge
 */
nonopolyfulc.core.pruefe_geldmenge = (function nonopolyfulc$core$pruefe_geldmenge(no_welt){
var spieler_guthaben = cljs.core.reduce.call(null,nonopolyfulc.taler.add,nonopolyfulc.taler.nt.call(null,(0)),cljs.core.map.call(null,nonopolyfulc.guthaber.guthaben,cljs.core.vals.call(null,no_welt.call(null,new cljs.core.Keyword(null,"spieler-liste","spieler-liste",1238302222)))));
if(cljs.core._EQ_.call(null,nonopolyfulc.taler.add.call(null,nonopolyfulc.guthaber.guthaben.call(null,no_welt.call(null,new cljs.core.Keyword(null,"bank","bank",-1982531798))),spieler_guthaben),nonopolyfulc.core.STARTGUTHABEN_BANK)){
return no_welt;
} else {
throw (new Error("Geldmenge stimmt nicht!"));
}
});
/**
 * liefert den Spieler fuer den naechsten Spielzug
 */
nonopolyfulc.core.spieler_an_der_reihe = (function nonopolyfulc$core$spieler_an_der_reihe(no_welt){
return no_welt.call(null,new cljs.core.Keyword(null,"spieler-liste","spieler-liste",1238302222)).call(null,no_welt.call(null,new cljs.core.Keyword(null,"an-der-Reihe","an-der-Reihe",-342254426)));
});
/**
 * ermittelt dne naechsten Spieler, der ziehen muss.
 *   Bankrotte Spieler werden ausgelassen.
 *   Der Rundenzähler wird ggf. erhöht
 */
nonopolyfulc.core.der_naechste_an_der_reihe = (function nonopolyfulc$core$der_naechste_an_der_reihe(no_welt){
var index_an_der_reihe = cljs.core.mod.call(null,(new cljs.core.Keyword(null,"spieler-reihenfolge","spieler-reihenfolge",-1117111611).cljs$core$IFn$_invoke$arity$1(no_welt).indexOf(new cljs.core.Keyword(null,"an-der-Reihe","an-der-Reihe",-342254426).cljs$core$IFn$_invoke$arity$1(no_welt)) + (1)),no_welt.call(null,new cljs.core.Keyword(null,"anzahl-spieler","anzahl-spieler",891594490)));
var nw = cljs.core.assoc.call(null,no_welt,new cljs.core.Keyword(null,"an-der-Reihe","an-der-Reihe",-342254426),new cljs.core.Keyword(null,"spieler-reihenfolge","spieler-reihenfolge",-1117111611).cljs$core$IFn$_invoke$arity$1(no_welt).call(null,index_an_der_reihe));
if(cljs.core.truth_(nonopolyfulc.guthaber.pleite_QMARK_.call(null,nonopolyfulc.core.spieler_an_der_reihe.call(null,nw)))){
return nonopolyfulc.core.der_naechste_an_der_reihe.call(null,nw);
} else {
if(cljs.core._EQ_.call(null,(0),index_an_der_reihe)){
nonopolyfulc.tracing.move_trace.call(null,"Runde ",((1) + nw.call(null,new cljs.core.Keyword(null,"anzahl-runden","anzahl-runden",621355623)))," beginnt.");

return nonopolyfulc.core.erhoehe_rundenzaehler.call(null,nw);
} else {
return nw;
}
}
});
/**
 * falls sp pleite gegangen ist, werden die Immos von sp an die Bank zurück gegeben
 */
nonopolyfulc.core.aktualisiere_spieler_status = (function nonopolyfulc$core$aktualisiere_spieler_status(no_welt,sp){
if(cljs.core.truth_(nonopolyfulc.guthaber.pleite_QMARK_.call(null,sp))){
return cljs.core.assoc_in.call(null,no_welt,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"spielbrett","spielbrett",-532635329),new cljs.core.Keyword(null,"felder","felder",475691011)], null),cljs.core.mapv.call(null,(function (f){
return nonopolyfulc.spielbrett.gib_zurueck_an_bank.call(null,f,nonopolyfulc.guthaber.spieler_name.call(null,sp));
}),nonopolyfulc.spielbrett.felder.call(null,new cljs.core.Keyword(null,"spielbrett","spielbrett",-532635329).cljs$core$IFn$_invoke$arity$1(no_welt))));
} else {
return no_welt;
}
});
/**
 * Spieler sp kauft Immobilie immo
 */
nonopolyfulc.core.spieler_kauft_immobilie = (function nonopolyfulc$core$spieler_kauft_immobilie(no_welt,sp,immo){
if(cljs.core.truth_(nonopolyfulc.guthaber.will_kaufen_QMARK_.call(null,sp,immo))){
var vec__24633 = nonopolyfulc.guthaber.ueberweise.call(null,sp,new cljs.core.Keyword(null,"bank","bank",-1982531798).cljs$core$IFn$_invoke$arity$1(no_welt),nonopolyfulc.feld.kaufpreis.call(null,immo));
var spieler = cljs.core.nth.call(null,vec__24633,(0),null);
var bank = cljs.core.nth.call(null,vec__24633,(1),null);
nonopolyfulc.tracing.move_trace.call(null,nonopolyfulc.guthaber.spieler_name.call(null,sp)," kauft ",nonopolyfulc.feld.feld_name.call(null,immo));

return cljs.core.assoc.call(null,nonopolyfulc.core.aktualisiere_spieler.call(null,cljs.core.assoc.call(null,no_welt,new cljs.core.Keyword(null,"spielbrett","spielbrett",-532635329),nonopolyfulc.spielbrett.neuer_eigentuemer.call(null,new cljs.core.Keyword(null,"spielbrett","spielbrett",-532635329).cljs$core$IFn$_invoke$arity$1(no_welt),immo,nonopolyfulc.guthaber.spieler_name.call(null,spieler))),nonopolyfulc.guthaber.loesche_aktion.call(null,spieler)),new cljs.core.Keyword(null,"bank","bank",-1982531798),bank);
} else {
return no_welt;
}
});
/**
 * Spieler sp muss Miete an Eigentümer von feld zahlen
 */
nonopolyfulc.core.miet_zahlung = (function nonopolyfulc$core$miet_zahlung(no_welt,sp,feld){
var vec__24636 = nonopolyfulc.guthaber.zahle_miete.call(null,sp,feld,nonopolyfulc.core.name__GT_spieler.call(null,no_welt,nonopolyfulc.feld.eigentuemer.call(null,feld)));
var sp1 = cljs.core.nth.call(null,vec__24636,(0),null);
var sp2 = cljs.core.nth.call(null,vec__24636,(1),null);
nonopolyfulc.tracing.move_trace.call(null,nonopolyfulc.guthaber.spieler_name.call(null,sp)," zahlt miete an ",nonopolyfulc.feld.eigentuemer.call(null,feld));

return nonopolyfulc.core.aktualisiere_spieler_status.call(null,nonopolyfulc.core.aktualisiere_spieler.call(null,nonopolyfulc.core.aktualisiere_spieler.call(null,no_welt,nonopolyfulc.guthaber.loesche_aktion.call(null,sp1)),sp2),sp1);
});
/**
 * führt die Aktion aus, die im Spieler sp gespeichert ist
 */
nonopolyfulc.core.fuehre_spieler_aktion_aus = (function nonopolyfulc$core$fuehre_spieler_aktion_aus(no_welt,sp){
if(cljs.core.empty_QMARK_.call(null,nonopolyfulc.guthaber.aktion.call(null,sp))){
return nonopolyfulc.core.aktualisiere_spieler.call(null,no_welt,sp);
} else {
if(cljs.core.truth_(nonopolyfulc.guthaber.kauf_aktion_QMARK_.call(null,sp))){
return nonopolyfulc.core.spieler_kauft_immobilie.call(null,no_welt,sp,nonopolyfulc.guthaber.aktion.call(null,sp).call(null,(1)));
} else {
if(cljs.core.truth_(nonopolyfulc.guthaber.miet_zahlung_QMARK_.call(null,sp))){
return nonopolyfulc.core.miet_zahlung.call(null,no_welt,sp,nonopolyfulc.guthaber.aktion.call(null,sp).call(null,(1)));
} else {
return null;
}
}
}
});
/**
 * falls die Bank nicht pleite, führt der Spieler an der Reihe seine Aktion aus.
 */
nonopolyfulc.core.setze_spiel_fort_wenn_bank_nicht_pleite = (function nonopolyfulc$core$setze_spiel_fort_wenn_bank_nicht_pleite(no_welt,sp){
if(cljs.core.not.call(null,nonopolyfulc.guthaber.pleite_QMARK_.call(null,no_welt.call(null,new cljs.core.Keyword(null,"bank","bank",-1982531798))))){
return nonopolyfulc.core.der_naechste_an_der_reihe.call(null,nonopolyfulc.core.fuehre_spieler_aktion_aus.call(null,no_welt,sp));
} else {
return no_welt;

}
});
/**
 * die Bank zahlt bei Fälligkeit an Spieler sp das Gehalt
 */
nonopolyfulc.core.zahle_gehalt = (function nonopolyfulc$core$zahle_gehalt(no_welt,sp){
if(cljs.core.truth_(nonopolyfulc.guthaber.gehalt_faellig_fuer_QMARK_.call(null,sp))){
var kb_QMARK_ = nonopolyfulc.guthaber.kann_bezahlen_QMARK_.call(null,no_welt.call(null,new cljs.core.Keyword(null,"bank","bank",-1982531798)),nonopolyfulc.core.GEHAELTER.call(null,nonopolyfulc.guthaber.gehalts_zahlung.call(null,sp)));
var zahlbetrag = (cljs.core.truth_(kb_QMARK_)?nonopolyfulc.core.GEHAELTER.call(null,nonopolyfulc.guthaber.gehalts_zahlung.call(null,sp)):(function (){
nonopolyfulc.tracing.move_trace.call(null,"Bank ist pleite!");

return nonopolyfulc.guthaber.guthaben.call(null,no_welt.call(null,new cljs.core.Keyword(null,"bank","bank",-1982531798)));
})()
);
var vec__24639 = nonopolyfulc.guthaber.ueberweise.call(null,no_welt.call(null,new cljs.core.Keyword(null,"bank","bank",-1982531798)),sp,zahlbetrag);
var bank = cljs.core.nth.call(null,vec__24639,(0),null);
var spieler = cljs.core.nth.call(null,vec__24639,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(kb_QMARK_)?bank:nonopolyfulc.guthaber.s_pleite.call(null,bank)),nonopolyfulc.guthaber.s_gehalts_zahlung.call(null,spieler,new cljs.core.Keyword(null,"kein-gehalt","kein-gehalt",-2072207955))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [no_welt.call(null,new cljs.core.Keyword(null,"bank","bank",-1982531798)),sp], null);
}
});
/**
 * führt den Spielzug eines Spieler aus 
 */
nonopolyfulc.core.lass_spieler_an_der_reihe_ziehen = (function nonopolyfulc$core$lass_spieler_an_der_reihe_ziehen(no_welt){
var sp = nonopolyfulc.core.spieler_an_der_reihe.call(null,no_welt);
var neue_pos = nonopolyfulc.guthaber.neue_position.call(null,sp,nonopolyfulc.spielbrett.felder.call(null,new cljs.core.Keyword(null,"spielbrett","spielbrett",-532635329).cljs$core$IFn$_invoke$arity$1(no_welt)));
var sp0 = nonopolyfulc.guthaber.bestimme_gehaltszahlung.call(null,sp,neue_pos);
var sp1 = nonopolyfulc.guthaber.gehe_auf.call(null,sp0,neue_pos);
var vec__24642 = nonopolyfulc.core.zahle_gehalt.call(null,no_welt,sp1);
var bank = cljs.core.nth.call(null,vec__24642,(0),null);
var sp2 = cljs.core.nth.call(null,vec__24642,(1),null);
return nonopolyfulc.core.pruefe_geldmenge.call(null,nonopolyfulc.core.setze_spiel_fort_wenn_bank_nicht_pleite.call(null,nonopolyfulc.core.aktualisiere_spieler.call(null,cljs.core.assoc.call(null,no_welt,new cljs.core.Keyword(null,"bank","bank",-1982531798),bank),sp2),sp2));
});
/**
 * prüft, ob nur noch ein oder kein Spieler nicht pleite ist
 */
nonopolyfulc.core.nur_noch_ein_spieler_zahlungsfaehig_QMARK_ = (function nonopolyfulc$core$nur_noch_ein_spieler_zahlungsfaehig_QMARK_(no_welt){
return (cljs.core.count.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,nonopolyfulc.guthaber.pleite_QMARK_),cljs.core.vals.call(null,no_welt.call(null,new cljs.core.Keyword(null,"spieler-liste","spieler-liste",1238302222))))) <= (1));
});
/**
 * prüft, ob das Spiel zuende ist
 */
nonopolyfulc.core.spiel_beendet_QMARK_ = (function nonopolyfulc$core$spiel_beendet_QMARK_(no_welt){
var or__3922__auto__ = (no_welt.call(null,new cljs.core.Keyword(null,"anzahl-runden","anzahl-runden",621355623)) > nonopolyfulc.core.MAXIMALE_RUNDENANZAHL);
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = nonopolyfulc.guthaber.pleite_QMARK_.call(null,new cljs.core.Keyword(null,"bank","bank",-1982531798).cljs$core$IFn$_invoke$arity$1(no_welt));
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return nonopolyfulc.core.nur_noch_ein_spieler_zahlungsfaehig_QMARK_.call(null,no_welt);
}
}
});
/**
 * zeigt den Spielstand als String
 */
nonopolyfulc.core.spielstand = (function nonopolyfulc$core$spielstand(no_welt){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(nonopolyfulc.guthaber.to_string.call(null,no_welt.call(null,new cljs.core.Keyword(null,"bank","bank",-1982531798)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.str,cljs.core.map.call(null,(function (s){
return nonopolyfulc.guthaber.to_string.call(null,s);
}),cljs.core.vals.call(null,no_welt.call(null,new cljs.core.Keyword(null,"spieler-liste","spieler-liste",1238302222)))))),"an der Reihe ist: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no_welt.call(null,new cljs.core.Keyword(null,"an-der-Reihe","an-der-Reihe",-342254426))),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(nonopolyfulc.spielbrett.to_string.call(null,no_welt.call(null,new cljs.core.Keyword(null,"spielbrett","spielbrett",-532635329))))].join('');
});
/**
 * führt einen vollständigen Spielablauf durch
 */
nonopolyfulc.core.spielen = (function nonopolyfulc$core$spielen(no_welt){
var w = no_welt;
while(true){
if(cljs.core.truth_(nonopolyfulc.core.spiel_beendet_QMARK_.call(null,w))){
return w;
} else {
var G__24645 = nonopolyfulc.core.lass_spieler_an_der_reihe_ziehen.call(null,w);
w = G__24645;
continue;
}
break;
}
});
/**
 * führt eine Runde durch bzw. beendet eine begonnene Runde
 */
nonopolyfulc.core.eine_runde = (function nonopolyfulc$core$eine_runde(no_welt){
var w = no_welt;
var runde = no_welt.call(null,new cljs.core.Keyword(null,"anzahl-runden","anzahl-runden",621355623));
while(true){
if(cljs.core.truth_((function (){var or__3922__auto__ = (runde < w.call(null,new cljs.core.Keyword(null,"anzahl-runden","anzahl-runden",621355623)));
if(or__3922__auto__){
return or__3922__auto__;
} else {
return nonopolyfulc.core.spiel_beendet_QMARK_.call(null,w);
}
})())){
return w;
} else {
var G__24646 = nonopolyfulc.core.lass_spieler_an_der_reihe_ziehen.call(null,w);
var G__24647 = runde;
w = G__24646;
runde = G__24647;
continue;
}
break;
}
});
/**
 * Spielabbruch
 */
nonopolyfulc.core.abbruch = (function nonopolyfulc$core$abbruch(no_welt){
return cljs.core.assoc.call(null,no_welt,new cljs.core.Keyword(null,"anzahl-runden","anzahl-runden",621355623),(nonopolyfulc.core.MAXIMALE_RUNDENANZAHL + (1)));
});
nonopolyfulc.core.NONOPOLY = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"bank","bank",-1982531798),null,new cljs.core.Keyword(null,"spieler-liste","spieler-liste",1238302222),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"spieler-reihenfolge","spieler-reihenfolge",-1117111611),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"an-der-Reihe","an-der-Reihe",-342254426),null,new cljs.core.Keyword(null,"spielbrett","spielbrett",-532635329),nonopolyfulc.spielbrett.spielbrett,new cljs.core.Keyword(null,"anzahl-runden","anzahl-runden",621355623),(1),new cljs.core.Keyword(null,"anzahl-spieler","anzahl-spieler",891594490),(0)], null);
/**
 * when needed, big-bang obtains the image of the current state of the world
 *   by evaluating (render cw) 
 */
nonopolyfulc.core.render = (function nonopolyfulc$core$render(cw){
return nonopolyfulc.core.spielstand.call(null,cw);
});
/**
 * for each keystroke, big-bang obtains the next state from
 *   (keystroke-handler cw ke). ke represents the key
 */
nonopolyfulc.core.keystroke_handler = (function nonopolyfulc$core$keystroke_handler(cw,ke){
var G__24648 = ke;
switch (G__24648) {
case "z":
return nonopolyfulc.core.lass_spieler_an_der_reihe_ziehen.call(null,cw);

break;
case "f":
return nonopolyfulc.core.spielen.call(null,cw);

break;
case "a":
return nonopolyfulc.core.abbruch.call(null,cw);

break;
case "r":
return nonopolyfulc.core.eine_runde.call(null,cw);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24648)].join('')));

}
});
/**
 * after each event, big-bang evaluates (end? cw) 
 */
nonopolyfulc.core.end_QMARK_ = (function nonopolyfulc$core$end_QMARK_(cw){
return nonopolyfulc.core.spiel_beendet_QMARK_.call(null,cw);
});
/**
 * executes one game move
 */
nonopolyfulc.core.move = (function nonopolyfulc$core$move(cw){
return nonopolyfulc.core.lass_spieler_an_der_reihe_ziehen.call(null,cw);
});
nonopolyfulc.core.ACTIONS = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-move","on-move",-1779179710),nonopolyfulc.core.move,new cljs.core.Keyword(null,"to-draw","to-draw",-1467115105),nonopolyfulc.core.render,new cljs.core.Keyword(null,"stop-when","stop-when",752930802),nonopolyfulc.core.end_QMARK_,new cljs.core.Keyword(null,"on-key","on-key",1297490032),nonopolyfulc.core.keystroke_handler,new cljs.core.Keyword(null,"allowed-keys","allowed-keys",-553170933),new cljs.core.PersistentArrayMap(null, 4, ["z","1-Zug","r","Runde-beenden","f","Spiel-fortsetzen","a","Spiel-abbrechen"], null)], null);

//# sourceMappingURL=core.js.map?rel=1528903098657
