// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30560){
var map__30561 = p__30560;
var map__30561__$1 = ((((!((map__30561 == null)))?(((((map__30561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30561):map__30561);
var m = map__30561__$1;
var n = cljs.core.get.call(null,map__30561__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30561__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30563_30585 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30564_30586 = null;
var count__30565_30587 = (0);
var i__30566_30588 = (0);
while(true){
if((i__30566_30588 < count__30565_30587)){
var f_30589 = cljs.core._nth.call(null,chunk__30564_30586,i__30566_30588);
cljs.core.println.call(null,"  ",f_30589);


var G__30590 = seq__30563_30585;
var G__30591 = chunk__30564_30586;
var G__30592 = count__30565_30587;
var G__30593 = (i__30566_30588 + (1));
seq__30563_30585 = G__30590;
chunk__30564_30586 = G__30591;
count__30565_30587 = G__30592;
i__30566_30588 = G__30593;
continue;
} else {
var temp__5457__auto___30594 = cljs.core.seq.call(null,seq__30563_30585);
if(temp__5457__auto___30594){
var seq__30563_30595__$1 = temp__5457__auto___30594;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30563_30595__$1)){
var c__4319__auto___30596 = cljs.core.chunk_first.call(null,seq__30563_30595__$1);
var G__30597 = cljs.core.chunk_rest.call(null,seq__30563_30595__$1);
var G__30598 = c__4319__auto___30596;
var G__30599 = cljs.core.count.call(null,c__4319__auto___30596);
var G__30600 = (0);
seq__30563_30585 = G__30597;
chunk__30564_30586 = G__30598;
count__30565_30587 = G__30599;
i__30566_30588 = G__30600;
continue;
} else {
var f_30601 = cljs.core.first.call(null,seq__30563_30595__$1);
cljs.core.println.call(null,"  ",f_30601);


var G__30602 = cljs.core.next.call(null,seq__30563_30595__$1);
var G__30603 = null;
var G__30604 = (0);
var G__30605 = (0);
seq__30563_30585 = G__30602;
chunk__30564_30586 = G__30603;
count__30565_30587 = G__30604;
i__30566_30588 = G__30605;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30606 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30606);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30606)))?cljs.core.second.call(null,arglists_30606):arglists_30606));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30567_30607 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30568_30608 = null;
var count__30569_30609 = (0);
var i__30570_30610 = (0);
while(true){
if((i__30570_30610 < count__30569_30609)){
var vec__30571_30611 = cljs.core._nth.call(null,chunk__30568_30608,i__30570_30610);
var name_30612 = cljs.core.nth.call(null,vec__30571_30611,(0),null);
var map__30574_30613 = cljs.core.nth.call(null,vec__30571_30611,(1),null);
var map__30574_30614__$1 = ((((!((map__30574_30613 == null)))?(((((map__30574_30613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30574_30613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30574_30613):map__30574_30613);
var doc_30615 = cljs.core.get.call(null,map__30574_30614__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30616 = cljs.core.get.call(null,map__30574_30614__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30612);

cljs.core.println.call(null," ",arglists_30616);

if(cljs.core.truth_(doc_30615)){
cljs.core.println.call(null," ",doc_30615);
} else {
}


var G__30617 = seq__30567_30607;
var G__30618 = chunk__30568_30608;
var G__30619 = count__30569_30609;
var G__30620 = (i__30570_30610 + (1));
seq__30567_30607 = G__30617;
chunk__30568_30608 = G__30618;
count__30569_30609 = G__30619;
i__30570_30610 = G__30620;
continue;
} else {
var temp__5457__auto___30621 = cljs.core.seq.call(null,seq__30567_30607);
if(temp__5457__auto___30621){
var seq__30567_30622__$1 = temp__5457__auto___30621;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30567_30622__$1)){
var c__4319__auto___30623 = cljs.core.chunk_first.call(null,seq__30567_30622__$1);
var G__30624 = cljs.core.chunk_rest.call(null,seq__30567_30622__$1);
var G__30625 = c__4319__auto___30623;
var G__30626 = cljs.core.count.call(null,c__4319__auto___30623);
var G__30627 = (0);
seq__30567_30607 = G__30624;
chunk__30568_30608 = G__30625;
count__30569_30609 = G__30626;
i__30570_30610 = G__30627;
continue;
} else {
var vec__30576_30628 = cljs.core.first.call(null,seq__30567_30622__$1);
var name_30629 = cljs.core.nth.call(null,vec__30576_30628,(0),null);
var map__30579_30630 = cljs.core.nth.call(null,vec__30576_30628,(1),null);
var map__30579_30631__$1 = ((((!((map__30579_30630 == null)))?(((((map__30579_30630.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30579_30630.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30579_30630):map__30579_30630);
var doc_30632 = cljs.core.get.call(null,map__30579_30631__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30633 = cljs.core.get.call(null,map__30579_30631__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30629);

cljs.core.println.call(null," ",arglists_30633);

if(cljs.core.truth_(doc_30632)){
cljs.core.println.call(null," ",doc_30632);
} else {
}


var G__30634 = cljs.core.next.call(null,seq__30567_30622__$1);
var G__30635 = null;
var G__30636 = (0);
var G__30637 = (0);
seq__30567_30607 = G__30634;
chunk__30568_30608 = G__30635;
count__30569_30609 = G__30636;
i__30570_30610 = G__30637;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__30581 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30582 = null;
var count__30583 = (0);
var i__30584 = (0);
while(true){
if((i__30584 < count__30583)){
var role = cljs.core._nth.call(null,chunk__30582,i__30584);
var temp__5457__auto___30638__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30638__$1)){
var spec_30639 = temp__5457__auto___30638__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30639));
} else {
}


var G__30640 = seq__30581;
var G__30641 = chunk__30582;
var G__30642 = count__30583;
var G__30643 = (i__30584 + (1));
seq__30581 = G__30640;
chunk__30582 = G__30641;
count__30583 = G__30642;
i__30584 = G__30643;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__30581);
if(temp__5457__auto____$1){
var seq__30581__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30581__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30581__$1);
var G__30644 = cljs.core.chunk_rest.call(null,seq__30581__$1);
var G__30645 = c__4319__auto__;
var G__30646 = cljs.core.count.call(null,c__4319__auto__);
var G__30647 = (0);
seq__30581 = G__30644;
chunk__30582 = G__30645;
count__30583 = G__30646;
i__30584 = G__30647;
continue;
} else {
var role = cljs.core.first.call(null,seq__30581__$1);
var temp__5457__auto___30648__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___30648__$2)){
var spec_30649 = temp__5457__auto___30648__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_30649));
} else {
}


var G__30650 = cljs.core.next.call(null,seq__30581__$1);
var G__30651 = null;
var G__30652 = (0);
var G__30653 = (0);
seq__30581 = G__30650;
chunk__30582 = G__30651;
count__30583 = G__30652;
i__30584 = G__30653;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1528903120532
