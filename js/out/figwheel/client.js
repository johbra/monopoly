// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e30848){if((e30848 instanceof Error)){
var e = e30848;
return "Error: Unable to stringify";
} else {
throw e30848;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__30851 = arguments.length;
switch (G__30851) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__30849_SHARP_){
if(typeof p1__30849_SHARP_ === 'string'){
return p1__30849_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__30849_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30854 = arguments.length;
var i__4500__auto___30855 = (0);
while(true){
if((i__4500__auto___30855 < len__4499__auto___30854)){
args__4502__auto__.push((arguments[i__4500__auto___30855]));

var G__30856 = (i__4500__auto___30855 + (1));
i__4500__auto___30855 = G__30856;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq30853){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30853));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___30858 = arguments.length;
var i__4500__auto___30859 = (0);
while(true){
if((i__4500__auto___30859 < len__4499__auto___30858)){
args__4502__auto__.push((arguments[i__4500__auto___30859]));

var G__30860 = (i__4500__auto___30859 + (1));
i__4500__auto___30859 = G__30860;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq30857){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30857));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30861){
var map__30862 = p__30861;
var map__30862__$1 = ((((!((map__30862 == null)))?(((((map__30862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30862):map__30862);
var message = cljs.core.get.call(null,map__30862__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30862__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26988__auto___30941 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___30941,ch){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___30941,ch){
return (function (state_30913){
var state_val_30914 = (state_30913[(1)]);
if((state_val_30914 === (7))){
var inst_30909 = (state_30913[(2)]);
var state_30913__$1 = state_30913;
var statearr_30915_30942 = state_30913__$1;
(statearr_30915_30942[(2)] = inst_30909);

(statearr_30915_30942[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (1))){
var state_30913__$1 = state_30913;
var statearr_30916_30943 = state_30913__$1;
(statearr_30916_30943[(2)] = null);

(statearr_30916_30943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (4))){
var inst_30866 = (state_30913[(7)]);
var inst_30866__$1 = (state_30913[(2)]);
var state_30913__$1 = (function (){var statearr_30917 = state_30913;
(statearr_30917[(7)] = inst_30866__$1);

return statearr_30917;
})();
if(cljs.core.truth_(inst_30866__$1)){
var statearr_30918_30944 = state_30913__$1;
(statearr_30918_30944[(1)] = (5));

} else {
var statearr_30919_30945 = state_30913__$1;
(statearr_30919_30945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (15))){
var inst_30873 = (state_30913[(8)]);
var inst_30888 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30873);
var inst_30889 = cljs.core.first.call(null,inst_30888);
var inst_30890 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30889);
var inst_30891 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30890)].join('');
var inst_30892 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30891);
var state_30913__$1 = state_30913;
var statearr_30920_30946 = state_30913__$1;
(statearr_30920_30946[(2)] = inst_30892);

(statearr_30920_30946[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (13))){
var inst_30897 = (state_30913[(2)]);
var state_30913__$1 = state_30913;
var statearr_30921_30947 = state_30913__$1;
(statearr_30921_30947[(2)] = inst_30897);

(statearr_30921_30947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (6))){
var state_30913__$1 = state_30913;
var statearr_30922_30948 = state_30913__$1;
(statearr_30922_30948[(2)] = null);

(statearr_30922_30948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (17))){
var inst_30895 = (state_30913[(2)]);
var state_30913__$1 = state_30913;
var statearr_30923_30949 = state_30913__$1;
(statearr_30923_30949[(2)] = inst_30895);

(statearr_30923_30949[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (3))){
var inst_30911 = (state_30913[(2)]);
var state_30913__$1 = state_30913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30913__$1,inst_30911);
} else {
if((state_val_30914 === (12))){
var inst_30872 = (state_30913[(9)]);
var inst_30886 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30872,opts);
var state_30913__$1 = state_30913;
if(cljs.core.truth_(inst_30886)){
var statearr_30924_30950 = state_30913__$1;
(statearr_30924_30950[(1)] = (15));

} else {
var statearr_30925_30951 = state_30913__$1;
(statearr_30925_30951[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (2))){
var state_30913__$1 = state_30913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30913__$1,(4),ch);
} else {
if((state_val_30914 === (11))){
var inst_30873 = (state_30913[(8)]);
var inst_30878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30879 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30873);
var inst_30880 = cljs.core.async.timeout.call(null,(1000));
var inst_30881 = [inst_30879,inst_30880];
var inst_30882 = (new cljs.core.PersistentVector(null,2,(5),inst_30878,inst_30881,null));
var state_30913__$1 = state_30913;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30913__$1,(14),inst_30882);
} else {
if((state_val_30914 === (9))){
var inst_30873 = (state_30913[(8)]);
var inst_30899 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30900 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30873);
var inst_30901 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30900);
var inst_30902 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_30901)].join('');
var inst_30903 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30902);
var state_30913__$1 = (function (){var statearr_30926 = state_30913;
(statearr_30926[(10)] = inst_30899);

return statearr_30926;
})();
var statearr_30927_30952 = state_30913__$1;
(statearr_30927_30952[(2)] = inst_30903);

(statearr_30927_30952[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (5))){
var inst_30866 = (state_30913[(7)]);
var inst_30868 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30869 = (new cljs.core.PersistentArrayMap(null,2,inst_30868,null));
var inst_30870 = (new cljs.core.PersistentHashSet(null,inst_30869,null));
var inst_30871 = figwheel.client.focus_msgs.call(null,inst_30870,inst_30866);
var inst_30872 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30871);
var inst_30873 = cljs.core.first.call(null,inst_30871);
var inst_30874 = figwheel.client.autoload_QMARK_.call(null);
var state_30913__$1 = (function (){var statearr_30928 = state_30913;
(statearr_30928[(9)] = inst_30872);

(statearr_30928[(8)] = inst_30873);

return statearr_30928;
})();
if(cljs.core.truth_(inst_30874)){
var statearr_30929_30953 = state_30913__$1;
(statearr_30929_30953[(1)] = (8));

} else {
var statearr_30930_30954 = state_30913__$1;
(statearr_30930_30954[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (14))){
var inst_30884 = (state_30913[(2)]);
var state_30913__$1 = state_30913;
var statearr_30931_30955 = state_30913__$1;
(statearr_30931_30955[(2)] = inst_30884);

(statearr_30931_30955[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (16))){
var state_30913__$1 = state_30913;
var statearr_30932_30956 = state_30913__$1;
(statearr_30932_30956[(2)] = null);

(statearr_30932_30956[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (10))){
var inst_30905 = (state_30913[(2)]);
var state_30913__$1 = (function (){var statearr_30933 = state_30913;
(statearr_30933[(11)] = inst_30905);

return statearr_30933;
})();
var statearr_30934_30957 = state_30913__$1;
(statearr_30934_30957[(2)] = null);

(statearr_30934_30957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30914 === (8))){
var inst_30872 = (state_30913[(9)]);
var inst_30876 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30872,opts);
var state_30913__$1 = state_30913;
if(cljs.core.truth_(inst_30876)){
var statearr_30935_30958 = state_30913__$1;
(statearr_30935_30958[(1)] = (11));

} else {
var statearr_30936_30959 = state_30913__$1;
(statearr_30936_30959[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26988__auto___30941,ch))
;
return ((function (switch__26898__auto__,c__26988__auto___30941,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__26899__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__26899__auto____0 = (function (){
var statearr_30937 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30937[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__26899__auto__);

(statearr_30937[(1)] = (1));

return statearr_30937;
});
var figwheel$client$file_reloader_plugin_$_state_machine__26899__auto____1 = (function (state_30913){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_30913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e30938){if((e30938 instanceof Object)){
var ex__26902__auto__ = e30938;
var statearr_30939_30960 = state_30913;
(statearr_30939_30960[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30938;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30961 = state_30913;
state_30913 = G__30961;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__26899__auto__ = function(state_30913){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__26899__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__26899__auto____1.call(this,state_30913);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__26899__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__26899__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___30941,ch))
})();
var state__26990__auto__ = (function (){var statearr_30940 = f__26989__auto__.call(null);
(statearr_30940[(6)] = c__26988__auto___30941);

return statearr_30940;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___30941,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30962_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30962_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30966 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30966){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_30964 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_30965 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_30964,_STAR_print_fn_STAR_30965,sb,base_path_30966){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_30964,_STAR_print_fn_STAR_30965,sb,base_path_30966))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30965;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30964;
}}catch (e30963){if((e30963 instanceof Error)){
var e = e30963;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30966], null));
} else {
var e = e30963;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30966))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30967){
var map__30968 = p__30967;
var map__30968__$1 = ((((!((map__30968 == null)))?(((((map__30968.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30968.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30968):map__30968);
var opts = map__30968__$1;
var build_id = cljs.core.get.call(null,map__30968__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30968,map__30968__$1,opts,build_id){
return (function (p__30970){
var vec__30971 = p__30970;
var seq__30972 = cljs.core.seq.call(null,vec__30971);
var first__30973 = cljs.core.first.call(null,seq__30972);
var seq__30972__$1 = cljs.core.next.call(null,seq__30972);
var map__30974 = first__30973;
var map__30974__$1 = ((((!((map__30974 == null)))?(((((map__30974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30974):map__30974);
var msg = map__30974__$1;
var msg_name = cljs.core.get.call(null,map__30974__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30972__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30971,seq__30972,first__30973,seq__30972__$1,map__30974,map__30974__$1,msg,msg_name,_,map__30968,map__30968__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30971,seq__30972,first__30973,seq__30972__$1,map__30974,map__30974__$1,msg,msg_name,_,map__30968,map__30968__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30968,map__30968__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30976){
var vec__30977 = p__30976;
var seq__30978 = cljs.core.seq.call(null,vec__30977);
var first__30979 = cljs.core.first.call(null,seq__30978);
var seq__30978__$1 = cljs.core.next.call(null,seq__30978);
var map__30980 = first__30979;
var map__30980__$1 = ((((!((map__30980 == null)))?(((((map__30980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30980):map__30980);
var msg = map__30980__$1;
var msg_name = cljs.core.get.call(null,map__30980__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30978__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30982){
var map__30983 = p__30982;
var map__30983__$1 = ((((!((map__30983 == null)))?(((((map__30983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30983):map__30983);
var on_compile_warning = cljs.core.get.call(null,map__30983__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30983__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30983,map__30983__$1,on_compile_warning,on_compile_fail){
return (function (p__30985){
var vec__30986 = p__30985;
var seq__30987 = cljs.core.seq.call(null,vec__30986);
var first__30988 = cljs.core.first.call(null,seq__30987);
var seq__30987__$1 = cljs.core.next.call(null,seq__30987);
var map__30989 = first__30988;
var map__30989__$1 = ((((!((map__30989 == null)))?(((((map__30989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30989):map__30989);
var msg = map__30989__$1;
var msg_name = cljs.core.get.call(null,map__30989__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30987__$1;
var pred__30991 = cljs.core._EQ_;
var expr__30992 = msg_name;
if(cljs.core.truth_(pred__30991.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30992))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30991.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30992))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30983,map__30983__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto__,msg_hist,msg_names,msg){
return (function (state_31081){
var state_val_31082 = (state_31081[(1)]);
if((state_val_31082 === (7))){
var inst_31001 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
if(cljs.core.truth_(inst_31001)){
var statearr_31083_31130 = state_31081__$1;
(statearr_31083_31130[(1)] = (8));

} else {
var statearr_31084_31131 = state_31081__$1;
(statearr_31084_31131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (20))){
var inst_31075 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31085_31132 = state_31081__$1;
(statearr_31085_31132[(2)] = inst_31075);

(statearr_31085_31132[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (27))){
var inst_31071 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31086_31133 = state_31081__$1;
(statearr_31086_31133[(2)] = inst_31071);

(statearr_31086_31133[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (1))){
var inst_30994 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31081__$1 = state_31081;
if(cljs.core.truth_(inst_30994)){
var statearr_31087_31134 = state_31081__$1;
(statearr_31087_31134[(1)] = (2));

} else {
var statearr_31088_31135 = state_31081__$1;
(statearr_31088_31135[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (24))){
var inst_31073 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31089_31136 = state_31081__$1;
(statearr_31089_31136[(2)] = inst_31073);

(statearr_31089_31136[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (4))){
var inst_31079 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31081__$1,inst_31079);
} else {
if((state_val_31082 === (15))){
var inst_31077 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31090_31137 = state_31081__$1;
(statearr_31090_31137[(2)] = inst_31077);

(statearr_31090_31137[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (21))){
var inst_31030 = (state_31081[(2)]);
var inst_31031 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31032 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31031);
var state_31081__$1 = (function (){var statearr_31091 = state_31081;
(statearr_31091[(7)] = inst_31030);

return statearr_31091;
})();
var statearr_31092_31138 = state_31081__$1;
(statearr_31092_31138[(2)] = inst_31032);

(statearr_31092_31138[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (31))){
var inst_31060 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31081__$1 = state_31081;
if(cljs.core.truth_(inst_31060)){
var statearr_31093_31139 = state_31081__$1;
(statearr_31093_31139[(1)] = (34));

} else {
var statearr_31094_31140 = state_31081__$1;
(statearr_31094_31140[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (32))){
var inst_31069 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31095_31141 = state_31081__$1;
(statearr_31095_31141[(2)] = inst_31069);

(statearr_31095_31141[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (33))){
var inst_31056 = (state_31081[(2)]);
var inst_31057 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31058 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31057);
var state_31081__$1 = (function (){var statearr_31096 = state_31081;
(statearr_31096[(8)] = inst_31056);

return statearr_31096;
})();
var statearr_31097_31142 = state_31081__$1;
(statearr_31097_31142[(2)] = inst_31058);

(statearr_31097_31142[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (13))){
var inst_31015 = figwheel.client.heads_up.clear.call(null);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31081__$1,(16),inst_31015);
} else {
if((state_val_31082 === (22))){
var inst_31036 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31037 = figwheel.client.heads_up.append_warning_message.call(null,inst_31036);
var state_31081__$1 = state_31081;
var statearr_31098_31143 = state_31081__$1;
(statearr_31098_31143[(2)] = inst_31037);

(statearr_31098_31143[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (36))){
var inst_31067 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31099_31144 = state_31081__$1;
(statearr_31099_31144[(2)] = inst_31067);

(statearr_31099_31144[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (29))){
var inst_31047 = (state_31081[(2)]);
var inst_31048 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31049 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31048);
var state_31081__$1 = (function (){var statearr_31100 = state_31081;
(statearr_31100[(9)] = inst_31047);

return statearr_31100;
})();
var statearr_31101_31145 = state_31081__$1;
(statearr_31101_31145[(2)] = inst_31049);

(statearr_31101_31145[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (6))){
var inst_30996 = (state_31081[(10)]);
var state_31081__$1 = state_31081;
var statearr_31102_31146 = state_31081__$1;
(statearr_31102_31146[(2)] = inst_30996);

(statearr_31102_31146[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (28))){
var inst_31043 = (state_31081[(2)]);
var inst_31044 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31045 = figwheel.client.heads_up.display_warning.call(null,inst_31044);
var state_31081__$1 = (function (){var statearr_31103 = state_31081;
(statearr_31103[(11)] = inst_31043);

return statearr_31103;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31081__$1,(29),inst_31045);
} else {
if((state_val_31082 === (25))){
var inst_31041 = figwheel.client.heads_up.clear.call(null);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31081__$1,(28),inst_31041);
} else {
if((state_val_31082 === (34))){
var inst_31062 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31081__$1,(37),inst_31062);
} else {
if((state_val_31082 === (17))){
var inst_31021 = (state_31081[(2)]);
var inst_31022 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31023 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31022);
var state_31081__$1 = (function (){var statearr_31104 = state_31081;
(statearr_31104[(12)] = inst_31021);

return statearr_31104;
})();
var statearr_31105_31147 = state_31081__$1;
(statearr_31105_31147[(2)] = inst_31023);

(statearr_31105_31147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (3))){
var inst_31013 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31081__$1 = state_31081;
if(cljs.core.truth_(inst_31013)){
var statearr_31106_31148 = state_31081__$1;
(statearr_31106_31148[(1)] = (13));

} else {
var statearr_31107_31149 = state_31081__$1;
(statearr_31107_31149[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (12))){
var inst_31009 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31108_31150 = state_31081__$1;
(statearr_31108_31150[(2)] = inst_31009);

(statearr_31108_31150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (2))){
var inst_30996 = (state_31081[(10)]);
var inst_30996__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31081__$1 = (function (){var statearr_31109 = state_31081;
(statearr_31109[(10)] = inst_30996__$1);

return statearr_31109;
})();
if(cljs.core.truth_(inst_30996__$1)){
var statearr_31110_31151 = state_31081__$1;
(statearr_31110_31151[(1)] = (5));

} else {
var statearr_31111_31152 = state_31081__$1;
(statearr_31111_31152[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (23))){
var inst_31039 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31081__$1 = state_31081;
if(cljs.core.truth_(inst_31039)){
var statearr_31112_31153 = state_31081__$1;
(statearr_31112_31153[(1)] = (25));

} else {
var statearr_31113_31154 = state_31081__$1;
(statearr_31113_31154[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (35))){
var state_31081__$1 = state_31081;
var statearr_31114_31155 = state_31081__$1;
(statearr_31114_31155[(2)] = null);

(statearr_31114_31155[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (19))){
var inst_31034 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31081__$1 = state_31081;
if(cljs.core.truth_(inst_31034)){
var statearr_31115_31156 = state_31081__$1;
(statearr_31115_31156[(1)] = (22));

} else {
var statearr_31116_31157 = state_31081__$1;
(statearr_31116_31157[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (11))){
var inst_31005 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31117_31158 = state_31081__$1;
(statearr_31117_31158[(2)] = inst_31005);

(statearr_31117_31158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (9))){
var inst_31007 = figwheel.client.heads_up.clear.call(null);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31081__$1,(12),inst_31007);
} else {
if((state_val_31082 === (5))){
var inst_30998 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31081__$1 = state_31081;
var statearr_31118_31159 = state_31081__$1;
(statearr_31118_31159[(2)] = inst_30998);

(statearr_31118_31159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (14))){
var inst_31025 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31081__$1 = state_31081;
if(cljs.core.truth_(inst_31025)){
var statearr_31119_31160 = state_31081__$1;
(statearr_31119_31160[(1)] = (18));

} else {
var statearr_31120_31161 = state_31081__$1;
(statearr_31120_31161[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (26))){
var inst_31051 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31081__$1 = state_31081;
if(cljs.core.truth_(inst_31051)){
var statearr_31121_31162 = state_31081__$1;
(statearr_31121_31162[(1)] = (30));

} else {
var statearr_31122_31163 = state_31081__$1;
(statearr_31122_31163[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (16))){
var inst_31017 = (state_31081[(2)]);
var inst_31018 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31019 = figwheel.client.heads_up.display_exception.call(null,inst_31018);
var state_31081__$1 = (function (){var statearr_31123 = state_31081;
(statearr_31123[(13)] = inst_31017);

return statearr_31123;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31081__$1,(17),inst_31019);
} else {
if((state_val_31082 === (30))){
var inst_31053 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31054 = figwheel.client.heads_up.display_warning.call(null,inst_31053);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31081__$1,(33),inst_31054);
} else {
if((state_val_31082 === (10))){
var inst_31011 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31124_31164 = state_31081__$1;
(statearr_31124_31164[(2)] = inst_31011);

(statearr_31124_31164[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (18))){
var inst_31027 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31028 = figwheel.client.heads_up.display_exception.call(null,inst_31027);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31081__$1,(21),inst_31028);
} else {
if((state_val_31082 === (37))){
var inst_31064 = (state_31081[(2)]);
var state_31081__$1 = state_31081;
var statearr_31125_31165 = state_31081__$1;
(statearr_31125_31165[(2)] = inst_31064);

(statearr_31125_31165[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31082 === (8))){
var inst_31003 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31081__$1 = state_31081;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31081__$1,(11),inst_31003);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26988__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__26898__auto__,c__26988__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26899__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26899__auto____0 = (function (){
var statearr_31126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31126[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26899__auto__);

(statearr_31126[(1)] = (1));

return statearr_31126;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26899__auto____1 = (function (state_31081){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_31081);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e31127){if((e31127 instanceof Object)){
var ex__26902__auto__ = e31127;
var statearr_31128_31166 = state_31081;
(statearr_31128_31166[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31081);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31127;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31167 = state_31081;
state_31081 = G__31167;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26899__auto__ = function(state_31081){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26899__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26899__auto____1.call(this,state_31081);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26899__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26899__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto__,msg_hist,msg_names,msg))
})();
var state__26990__auto__ = (function (){var statearr_31129 = f__26989__auto__.call(null);
(statearr_31129[(6)] = c__26988__auto__);

return statearr_31129;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto__,msg_hist,msg_names,msg))
);

return c__26988__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26988__auto___31196 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___31196,ch){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___31196,ch){
return (function (state_31182){
var state_val_31183 = (state_31182[(1)]);
if((state_val_31183 === (1))){
var state_31182__$1 = state_31182;
var statearr_31184_31197 = state_31182__$1;
(statearr_31184_31197[(2)] = null);

(statearr_31184_31197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31183 === (2))){
var state_31182__$1 = state_31182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31182__$1,(4),ch);
} else {
if((state_val_31183 === (3))){
var inst_31180 = (state_31182[(2)]);
var state_31182__$1 = state_31182;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31182__$1,inst_31180);
} else {
if((state_val_31183 === (4))){
var inst_31170 = (state_31182[(7)]);
var inst_31170__$1 = (state_31182[(2)]);
var state_31182__$1 = (function (){var statearr_31185 = state_31182;
(statearr_31185[(7)] = inst_31170__$1);

return statearr_31185;
})();
if(cljs.core.truth_(inst_31170__$1)){
var statearr_31186_31198 = state_31182__$1;
(statearr_31186_31198[(1)] = (5));

} else {
var statearr_31187_31199 = state_31182__$1;
(statearr_31187_31199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31183 === (5))){
var inst_31170 = (state_31182[(7)]);
var inst_31172 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31170);
var state_31182__$1 = state_31182;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31182__$1,(8),inst_31172);
} else {
if((state_val_31183 === (6))){
var state_31182__$1 = state_31182;
var statearr_31188_31200 = state_31182__$1;
(statearr_31188_31200[(2)] = null);

(statearr_31188_31200[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31183 === (7))){
var inst_31178 = (state_31182[(2)]);
var state_31182__$1 = state_31182;
var statearr_31189_31201 = state_31182__$1;
(statearr_31189_31201[(2)] = inst_31178);

(statearr_31189_31201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31183 === (8))){
var inst_31174 = (state_31182[(2)]);
var state_31182__$1 = (function (){var statearr_31190 = state_31182;
(statearr_31190[(8)] = inst_31174);

return statearr_31190;
})();
var statearr_31191_31202 = state_31182__$1;
(statearr_31191_31202[(2)] = null);

(statearr_31191_31202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__26988__auto___31196,ch))
;
return ((function (switch__26898__auto__,c__26988__auto___31196,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__26899__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__26899__auto____0 = (function (){
var statearr_31192 = [null,null,null,null,null,null,null,null,null];
(statearr_31192[(0)] = figwheel$client$heads_up_plugin_$_state_machine__26899__auto__);

(statearr_31192[(1)] = (1));

return statearr_31192;
});
var figwheel$client$heads_up_plugin_$_state_machine__26899__auto____1 = (function (state_31182){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_31182);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e31193){if((e31193 instanceof Object)){
var ex__26902__auto__ = e31193;
var statearr_31194_31203 = state_31182;
(statearr_31194_31203[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31182);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31204 = state_31182;
state_31182 = G__31204;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__26899__auto__ = function(state_31182){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__26899__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__26899__auto____1.call(this,state_31182);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__26899__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__26899__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___31196,ch))
})();
var state__26990__auto__ = (function (){var statearr_31195 = f__26989__auto__.call(null);
(statearr_31195[(6)] = c__26988__auto___31196);

return statearr_31195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___31196,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto__){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto__){
return (function (state_31210){
var state_val_31211 = (state_31210[(1)]);
if((state_val_31211 === (1))){
var inst_31205 = cljs.core.async.timeout.call(null,(3000));
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31210__$1,(2),inst_31205);
} else {
if((state_val_31211 === (2))){
var inst_31207 = (state_31210[(2)]);
var inst_31208 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31210__$1 = (function (){var statearr_31212 = state_31210;
(statearr_31212[(7)] = inst_31207);

return statearr_31212;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31210__$1,inst_31208);
} else {
return null;
}
}
});})(c__26988__auto__))
;
return ((function (switch__26898__auto__,c__26988__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__26899__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__26899__auto____0 = (function (){
var statearr_31213 = [null,null,null,null,null,null,null,null];
(statearr_31213[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__26899__auto__);

(statearr_31213[(1)] = (1));

return statearr_31213;
});
var figwheel$client$enforce_project_plugin_$_state_machine__26899__auto____1 = (function (state_31210){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_31210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e31214){if((e31214 instanceof Object)){
var ex__26902__auto__ = e31214;
var statearr_31215_31217 = state_31210;
(statearr_31215_31217[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31218 = state_31210;
state_31210 = G__31218;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__26899__auto__ = function(state_31210){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__26899__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__26899__auto____1.call(this,state_31210);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__26899__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__26899__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto__))
})();
var state__26990__auto__ = (function (){var statearr_31216 = f__26989__auto__.call(null);
(statearr_31216[(6)] = c__26988__auto__);

return statearr_31216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto__))
);

return c__26988__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto__,figwheel_version,temp__5457__auto__){
return (function (state_31225){
var state_val_31226 = (state_31225[(1)]);
if((state_val_31226 === (1))){
var inst_31219 = cljs.core.async.timeout.call(null,(2000));
var state_31225__$1 = state_31225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31225__$1,(2),inst_31219);
} else {
if((state_val_31226 === (2))){
var inst_31221 = (state_31225[(2)]);
var inst_31222 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31223 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31222);
var state_31225__$1 = (function (){var statearr_31227 = state_31225;
(statearr_31227[(7)] = inst_31221);

return statearr_31227;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31225__$1,inst_31223);
} else {
return null;
}
}
});})(c__26988__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__26898__auto__,c__26988__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26899__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26899__auto____0 = (function (){
var statearr_31228 = [null,null,null,null,null,null,null,null];
(statearr_31228[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26899__auto__);

(statearr_31228[(1)] = (1));

return statearr_31228;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26899__auto____1 = (function (state_31225){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_31225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e31229){if((e31229 instanceof Object)){
var ex__26902__auto__ = e31229;
var statearr_31230_31232 = state_31225;
(statearr_31230_31232[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31233 = state_31225;
state_31225 = G__31233;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26899__auto__ = function(state_31225){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26899__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26899__auto____1.call(this,state_31225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26899__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26899__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto__,figwheel_version,temp__5457__auto__))
})();
var state__26990__auto__ = (function (){var statearr_31231 = f__26989__auto__.call(null);
(statearr_31231[(6)] = c__26988__auto__);

return statearr_31231;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto__,figwheel_version,temp__5457__auto__))
);

return c__26988__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31234){
var map__31235 = p__31234;
var map__31235__$1 = ((((!((map__31235 == null)))?(((((map__31235.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31235.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31235):map__31235);
var file = cljs.core.get.call(null,map__31235__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31235__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31235__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31237 = "";
var G__31237__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31237),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31237);
var G__31237__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31237__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31237__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31237__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31237__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31238){
var map__31239 = p__31238;
var map__31239__$1 = ((((!((map__31239 == null)))?(((((map__31239.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31239.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31239):map__31239);
var ed = map__31239__$1;
var formatted_exception = cljs.core.get.call(null,map__31239__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31239__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31239__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31241_31245 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31242_31246 = null;
var count__31243_31247 = (0);
var i__31244_31248 = (0);
while(true){
if((i__31244_31248 < count__31243_31247)){
var msg_31249 = cljs.core._nth.call(null,chunk__31242_31246,i__31244_31248);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31249);


var G__31250 = seq__31241_31245;
var G__31251 = chunk__31242_31246;
var G__31252 = count__31243_31247;
var G__31253 = (i__31244_31248 + (1));
seq__31241_31245 = G__31250;
chunk__31242_31246 = G__31251;
count__31243_31247 = G__31252;
i__31244_31248 = G__31253;
continue;
} else {
var temp__5457__auto___31254 = cljs.core.seq.call(null,seq__31241_31245);
if(temp__5457__auto___31254){
var seq__31241_31255__$1 = temp__5457__auto___31254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31241_31255__$1)){
var c__4319__auto___31256 = cljs.core.chunk_first.call(null,seq__31241_31255__$1);
var G__31257 = cljs.core.chunk_rest.call(null,seq__31241_31255__$1);
var G__31258 = c__4319__auto___31256;
var G__31259 = cljs.core.count.call(null,c__4319__auto___31256);
var G__31260 = (0);
seq__31241_31245 = G__31257;
chunk__31242_31246 = G__31258;
count__31243_31247 = G__31259;
i__31244_31248 = G__31260;
continue;
} else {
var msg_31261 = cljs.core.first.call(null,seq__31241_31255__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31261);


var G__31262 = cljs.core.next.call(null,seq__31241_31255__$1);
var G__31263 = null;
var G__31264 = (0);
var G__31265 = (0);
seq__31241_31245 = G__31262;
chunk__31242_31246 = G__31263;
count__31243_31247 = G__31264;
i__31244_31248 = G__31265;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31266){
var map__31267 = p__31266;
var map__31267__$1 = ((((!((map__31267 == null)))?(((((map__31267.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31267.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31267):map__31267);
var w = map__31267__$1;
var message = cljs.core.get.call(null,map__31267__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31269 = cljs.core.seq.call(null,plugins);
var chunk__31270 = null;
var count__31271 = (0);
var i__31272 = (0);
while(true){
if((i__31272 < count__31271)){
var vec__31273 = cljs.core._nth.call(null,chunk__31270,i__31272);
var k = cljs.core.nth.call(null,vec__31273,(0),null);
var plugin = cljs.core.nth.call(null,vec__31273,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31279 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31269,chunk__31270,count__31271,i__31272,pl_31279,vec__31273,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31279.call(null,msg_hist);
});})(seq__31269,chunk__31270,count__31271,i__31272,pl_31279,vec__31273,k,plugin))
);
} else {
}


var G__31280 = seq__31269;
var G__31281 = chunk__31270;
var G__31282 = count__31271;
var G__31283 = (i__31272 + (1));
seq__31269 = G__31280;
chunk__31270 = G__31281;
count__31271 = G__31282;
i__31272 = G__31283;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__31269);
if(temp__5457__auto__){
var seq__31269__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31269__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__31269__$1);
var G__31284 = cljs.core.chunk_rest.call(null,seq__31269__$1);
var G__31285 = c__4319__auto__;
var G__31286 = cljs.core.count.call(null,c__4319__auto__);
var G__31287 = (0);
seq__31269 = G__31284;
chunk__31270 = G__31285;
count__31271 = G__31286;
i__31272 = G__31287;
continue;
} else {
var vec__31276 = cljs.core.first.call(null,seq__31269__$1);
var k = cljs.core.nth.call(null,vec__31276,(0),null);
var plugin = cljs.core.nth.call(null,vec__31276,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31288 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31269,chunk__31270,count__31271,i__31272,pl_31288,vec__31276,k,plugin,seq__31269__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31288.call(null,msg_hist);
});})(seq__31269,chunk__31270,count__31271,i__31272,pl_31288,vec__31276,k,plugin,seq__31269__$1,temp__5457__auto__))
);
} else {
}


var G__31289 = cljs.core.next.call(null,seq__31269__$1);
var G__31290 = null;
var G__31291 = (0);
var G__31292 = (0);
seq__31269 = G__31289;
chunk__31270 = G__31290;
count__31271 = G__31291;
i__31272 = G__31292;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31294 = arguments.length;
switch (G__31294) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31295_31300 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31296_31301 = null;
var count__31297_31302 = (0);
var i__31298_31303 = (0);
while(true){
if((i__31298_31303 < count__31297_31302)){
var msg_31304 = cljs.core._nth.call(null,chunk__31296_31301,i__31298_31303);
figwheel.client.socket.handle_incoming_message.call(null,msg_31304);


var G__31305 = seq__31295_31300;
var G__31306 = chunk__31296_31301;
var G__31307 = count__31297_31302;
var G__31308 = (i__31298_31303 + (1));
seq__31295_31300 = G__31305;
chunk__31296_31301 = G__31306;
count__31297_31302 = G__31307;
i__31298_31303 = G__31308;
continue;
} else {
var temp__5457__auto___31309 = cljs.core.seq.call(null,seq__31295_31300);
if(temp__5457__auto___31309){
var seq__31295_31310__$1 = temp__5457__auto___31309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31295_31310__$1)){
var c__4319__auto___31311 = cljs.core.chunk_first.call(null,seq__31295_31310__$1);
var G__31312 = cljs.core.chunk_rest.call(null,seq__31295_31310__$1);
var G__31313 = c__4319__auto___31311;
var G__31314 = cljs.core.count.call(null,c__4319__auto___31311);
var G__31315 = (0);
seq__31295_31300 = G__31312;
chunk__31296_31301 = G__31313;
count__31297_31302 = G__31314;
i__31298_31303 = G__31315;
continue;
} else {
var msg_31316 = cljs.core.first.call(null,seq__31295_31310__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31316);


var G__31317 = cljs.core.next.call(null,seq__31295_31310__$1);
var G__31318 = null;
var G__31319 = (0);
var G__31320 = (0);
seq__31295_31300 = G__31317;
chunk__31296_31301 = G__31318;
count__31297_31302 = G__31319;
i__31298_31303 = G__31320;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___31325 = arguments.length;
var i__4500__auto___31326 = (0);
while(true){
if((i__4500__auto___31326 < len__4499__auto___31325)){
args__4502__auto__.push((arguments[i__4500__auto___31326]));

var G__31327 = (i__4500__auto___31326 + (1));
i__4500__auto___31326 = G__31327;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31322){
var map__31323 = p__31322;
var map__31323__$1 = ((((!((map__31323 == null)))?(((((map__31323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31323):map__31323);
var opts = map__31323__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31321){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31321));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31328){if((e31328 instanceof Error)){
var e = e31328;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31328;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__31329){
var map__31330 = p__31329;
var map__31330__$1 = ((((!((map__31330 == null)))?(((((map__31330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31330):map__31330);
var msg_name = cljs.core.get.call(null,map__31330__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1528903122496
