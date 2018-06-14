// Compiled by ClojureScript 1.10.238 {}
goog.provide('nonopolyfulc.tracing');
goog.require('cljs.core');
nonopolyfulc.tracing.TRACE = true;
nonopolyfulc.tracing.move_trace = (function nonopolyfulc$tracing$move_trace(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24626 = arguments.length;
var i__4500__auto___24627 = (0);
while(true){
if((i__4500__auto___24627 < len__4499__auto___24626)){
args__4502__auto__.push((arguments[i__4500__auto___24627]));

var G__24628 = (i__4500__auto___24627 + (1));
i__4500__auto___24627 = G__24628;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return nonopolyfulc.tracing.move_trace.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

nonopolyfulc.tracing.move_trace.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(nonopolyfulc.tracing.TRACE){
cljs.core.print.call(null,">>>Trace>>> ");

return cljs.core.apply.call(null,cljs.core.println,args);
} else {
return null;
}
});

nonopolyfulc.tracing.move_trace.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
nonopolyfulc.tracing.move_trace.cljs$lang$applyTo = (function (seq24625){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24625));
});


//# sourceMappingURL=tracing.js.map?rel=1528903098166
