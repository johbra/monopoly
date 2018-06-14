// Compiled by ClojureScript 1.10.238 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._header[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._header["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._has_body[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if(((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__4211__auto__ = (((value == null))?null:value);
var m__4212__auto__ = (devtools.format._body[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,value);
} else {
var m__4212__auto____$1 = (devtools.format._body["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22251 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22251["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22252 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22252["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22253 = temp__5455__auto____$2;
return (o22253["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22254 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22254["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22255 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22255["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22256 = temp__5455__auto____$2;
return (o22256["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22257 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22257["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22258 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22258["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22259 = temp__5455__auto____$2;
return (o22259["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22260 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22260["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22261 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22261["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22262 = temp__5455__auto____$2;
return (o22262["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22263 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22263["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22264 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22264["templating"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22265 = temp__5455__auto____$2;
return (o22265["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22266 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22266["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22267 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22267["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22268 = temp__5455__auto____$2;
return (o22268["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5455__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5455__auto__)){
var o22269 = temp__5455__auto__;
var temp__5455__auto____$1 = (o22269["formatters"]);
if(cljs.core.truth_(temp__5455__auto____$1)){
var o22270 = temp__5455__auto____$1;
var temp__5455__auto____$2 = (o22270["markup"]);
if(cljs.core.truth_(temp__5455__auto____$2)){
var o22271 = temp__5455__auto____$2;
return (o22271["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22273 = arguments.length;
var i__4500__auto___22274 = (0);
while(true){
if((i__4500__auto___22274 < len__4499__auto___22273)){
args__4502__auto__.push((arguments[i__4500__auto___22274]));

var G__22275 = (i__4500__auto___22274 + (1));
i__4500__auto___22274 = G__22275;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.render_markup.cljs$lang$applyTo = (function (seq22272){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22272));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22277 = arguments.length;
var i__4500__auto___22278 = (0);
while(true){
if((i__4500__auto___22278 < len__4499__auto___22277)){
args__4502__auto__.push((arguments[i__4500__auto___22278]));

var G__22279 = (i__4500__auto___22278 + (1));
i__4500__auto___22278 = G__22279;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_template.cljs$lang$applyTo = (function (seq22276){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22276));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22281 = arguments.length;
var i__4500__auto___22282 = (0);
while(true){
if((i__4500__auto___22282 < len__4499__auto___22281)){
args__4502__auto__.push((arguments[i__4500__auto___22282]));

var G__22283 = (i__4500__auto___22282 + (1));
i__4500__auto___22282 = G__22283;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_group.cljs$lang$applyTo = (function (seq22280){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22280));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22285 = arguments.length;
var i__4500__auto___22286 = (0);
while(true){
if((i__4500__auto___22286 < len__4499__auto___22285)){
args__4502__auto__.push((arguments[i__4500__auto___22286]));

var G__22287 = (i__4500__auto___22286 + (1));
i__4500__auto___22286 = G__22287;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq22284){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22284));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22289 = arguments.length;
var i__4500__auto___22290 = (0);
while(true){
if((i__4500__auto___22290 < len__4499__auto___22289)){
args__4502__auto__.push((arguments[i__4500__auto___22290]));

var G__22291 = (i__4500__auto___22290 + (1));
i__4500__auto___22290 = G__22291;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.template.cljs$lang$applyTo = (function (seq22288){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22288));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22293 = arguments.length;
var i__4500__auto___22294 = (0);
while(true){
if((i__4500__auto___22294 < len__4499__auto___22293)){
args__4502__auto__.push((arguments[i__4500__auto___22294]));

var G__22295 = (i__4500__auto___22294 + (1));
i__4500__auto___22294 = G__22295;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.group.cljs$lang$applyTo = (function (seq22292){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22292));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22297 = arguments.length;
var i__4500__auto___22298 = (0);
while(true){
if((i__4500__auto___22298 < len__4499__auto___22297)){
args__4502__auto__.push((arguments[i__4500__auto___22298]));

var G__22299 = (i__4500__auto___22298 + (1));
i__4500__auto___22298 = G__22299;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.surrogate.cljs$lang$applyTo = (function (seq22296){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22296));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22307 = arguments.length;
var i__4500__auto___22308 = (0);
while(true){
if((i__4500__auto___22308 < len__4499__auto___22307)){
args__4502__auto__.push((arguments[i__4500__auto___22308]));

var G__22309 = (i__4500__auto___22308 + (1));
i__4500__auto___22308 = G__22309;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__22303){
var vec__22304 = p__22303;
var state_override = cljs.core.nth.call(null,vec__22304,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__22304,state_override){
return (function (p1__22300_SHARP_){
return cljs.core.merge.call(null,p1__22300_SHARP_,state_override);
});})(vec__22304,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.reference.cljs$lang$applyTo = (function (seq22301){
var G__22302 = cljs.core.first.call(null,seq22301);
var seq22301__$1 = cljs.core.next.call(null,seq22301);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22302,seq22301__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22311 = arguments.length;
var i__4500__auto___22312 = (0);
while(true){
if((i__4500__auto___22312 < len__4499__auto___22311)){
args__4502__auto__.push((arguments[i__4500__auto___22312]));

var G__22313 = (i__4500__auto___22312 + (1));
i__4500__auto___22312 = G__22313;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
devtools.format.build_header.cljs$lang$applyTo = (function (seq22310){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq22310));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__4502__auto__ = [];
var len__4499__auto___22316 = arguments.length;
var i__4500__auto___22317 = (0);
while(true){
if((i__4500__auto___22317 < len__4499__auto___22316)){
args__4502__auto__.push((arguments[i__4500__auto___22317]));

var G__22318 = (i__4500__auto___22317 + (1));
i__4500__auto___22317 = G__22318;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq22314){
var G__22315 = cljs.core.first.call(null,seq22314);
var seq22314__$1 = cljs.core.next.call(null,seq22314);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__22315,seq22314__$1);
});


//# sourceMappingURL=format.js.map?rel=1528903081290
