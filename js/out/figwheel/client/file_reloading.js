// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29097_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29097_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29098 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29099 = null;
var count__29100 = (0);
var i__29101 = (0);
while(true){
if((i__29101 < count__29100)){
var n = cljs.core._nth.call(null,chunk__29099,i__29101);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29102 = seq__29098;
var G__29103 = chunk__29099;
var G__29104 = count__29100;
var G__29105 = (i__29101 + (1));
seq__29098 = G__29102;
chunk__29099 = G__29103;
count__29100 = G__29104;
i__29101 = G__29105;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29098);
if(temp__5457__auto__){
var seq__29098__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29098__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29098__$1);
var G__29106 = cljs.core.chunk_rest.call(null,seq__29098__$1);
var G__29107 = c__4319__auto__;
var G__29108 = cljs.core.count.call(null,c__4319__auto__);
var G__29109 = (0);
seq__29098 = G__29106;
chunk__29099 = G__29107;
count__29100 = G__29108;
i__29101 = G__29109;
continue;
} else {
var n = cljs.core.first.call(null,seq__29098__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__29110 = cljs.core.next.call(null,seq__29098__$1);
var G__29111 = null;
var G__29112 = (0);
var G__29113 = (0);
seq__29098 = G__29110;
chunk__29099 = G__29111;
count__29100 = G__29112;
i__29101 = G__29113;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29114){
var vec__29115 = p__29114;
var _ = cljs.core.nth.call(null,vec__29115,(0),null);
var v = cljs.core.nth.call(null,vec__29115,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__29118){
var vec__29119 = p__29118;
var k = cljs.core.nth.call(null,vec__29119,(0),null);
var v = cljs.core.nth.call(null,vec__29119,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29131_29139 = cljs.core.seq.call(null,deps);
var chunk__29132_29140 = null;
var count__29133_29141 = (0);
var i__29134_29142 = (0);
while(true){
if((i__29134_29142 < count__29133_29141)){
var dep_29143 = cljs.core._nth.call(null,chunk__29132_29140,i__29134_29142);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29143;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29143));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29143,(depth + (1)),state);
} else {
}


var G__29144 = seq__29131_29139;
var G__29145 = chunk__29132_29140;
var G__29146 = count__29133_29141;
var G__29147 = (i__29134_29142 + (1));
seq__29131_29139 = G__29144;
chunk__29132_29140 = G__29145;
count__29133_29141 = G__29146;
i__29134_29142 = G__29147;
continue;
} else {
var temp__5457__auto___29148 = cljs.core.seq.call(null,seq__29131_29139);
if(temp__5457__auto___29148){
var seq__29131_29149__$1 = temp__5457__auto___29148;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29131_29149__$1)){
var c__4319__auto___29150 = cljs.core.chunk_first.call(null,seq__29131_29149__$1);
var G__29151 = cljs.core.chunk_rest.call(null,seq__29131_29149__$1);
var G__29152 = c__4319__auto___29150;
var G__29153 = cljs.core.count.call(null,c__4319__auto___29150);
var G__29154 = (0);
seq__29131_29139 = G__29151;
chunk__29132_29140 = G__29152;
count__29133_29141 = G__29153;
i__29134_29142 = G__29154;
continue;
} else {
var dep_29155 = cljs.core.first.call(null,seq__29131_29149__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_29155;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29155));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29155,(depth + (1)),state);
} else {
}


var G__29156 = cljs.core.next.call(null,seq__29131_29149__$1);
var G__29157 = null;
var G__29158 = (0);
var G__29159 = (0);
seq__29131_29139 = G__29156;
chunk__29132_29140 = G__29157;
count__29133_29141 = G__29158;
i__29134_29142 = G__29159;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29135){
var vec__29136 = p__29135;
var seq__29137 = cljs.core.seq.call(null,vec__29136);
var first__29138 = cljs.core.first.call(null,seq__29137);
var seq__29137__$1 = cljs.core.next.call(null,seq__29137);
var x = first__29138;
var xs = seq__29137__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29136,seq__29137,first__29138,seq__29137__$1,x,xs,get_deps__$1){
return (function (p1__29122_SHARP_){
return clojure.set.difference.call(null,p1__29122_SHARP_,x);
});})(vec__29136,seq__29137,first__29138,seq__29137__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29160 = cljs.core.seq.call(null,provides);
var chunk__29161 = null;
var count__29162 = (0);
var i__29163 = (0);
while(true){
if((i__29163 < count__29162)){
var prov = cljs.core._nth.call(null,chunk__29161,i__29163);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29164_29172 = cljs.core.seq.call(null,requires);
var chunk__29165_29173 = null;
var count__29166_29174 = (0);
var i__29167_29175 = (0);
while(true){
if((i__29167_29175 < count__29166_29174)){
var req_29176 = cljs.core._nth.call(null,chunk__29165_29173,i__29167_29175);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29176,prov);


var G__29177 = seq__29164_29172;
var G__29178 = chunk__29165_29173;
var G__29179 = count__29166_29174;
var G__29180 = (i__29167_29175 + (1));
seq__29164_29172 = G__29177;
chunk__29165_29173 = G__29178;
count__29166_29174 = G__29179;
i__29167_29175 = G__29180;
continue;
} else {
var temp__5457__auto___29181 = cljs.core.seq.call(null,seq__29164_29172);
if(temp__5457__auto___29181){
var seq__29164_29182__$1 = temp__5457__auto___29181;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29164_29182__$1)){
var c__4319__auto___29183 = cljs.core.chunk_first.call(null,seq__29164_29182__$1);
var G__29184 = cljs.core.chunk_rest.call(null,seq__29164_29182__$1);
var G__29185 = c__4319__auto___29183;
var G__29186 = cljs.core.count.call(null,c__4319__auto___29183);
var G__29187 = (0);
seq__29164_29172 = G__29184;
chunk__29165_29173 = G__29185;
count__29166_29174 = G__29186;
i__29167_29175 = G__29187;
continue;
} else {
var req_29188 = cljs.core.first.call(null,seq__29164_29182__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29188,prov);


var G__29189 = cljs.core.next.call(null,seq__29164_29182__$1);
var G__29190 = null;
var G__29191 = (0);
var G__29192 = (0);
seq__29164_29172 = G__29189;
chunk__29165_29173 = G__29190;
count__29166_29174 = G__29191;
i__29167_29175 = G__29192;
continue;
}
} else {
}
}
break;
}


var G__29193 = seq__29160;
var G__29194 = chunk__29161;
var G__29195 = count__29162;
var G__29196 = (i__29163 + (1));
seq__29160 = G__29193;
chunk__29161 = G__29194;
count__29162 = G__29195;
i__29163 = G__29196;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__29160);
if(temp__5457__auto__){
var seq__29160__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29160__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29160__$1);
var G__29197 = cljs.core.chunk_rest.call(null,seq__29160__$1);
var G__29198 = c__4319__auto__;
var G__29199 = cljs.core.count.call(null,c__4319__auto__);
var G__29200 = (0);
seq__29160 = G__29197;
chunk__29161 = G__29198;
count__29162 = G__29199;
i__29163 = G__29200;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29160__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29168_29201 = cljs.core.seq.call(null,requires);
var chunk__29169_29202 = null;
var count__29170_29203 = (0);
var i__29171_29204 = (0);
while(true){
if((i__29171_29204 < count__29170_29203)){
var req_29205 = cljs.core._nth.call(null,chunk__29169_29202,i__29171_29204);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29205,prov);


var G__29206 = seq__29168_29201;
var G__29207 = chunk__29169_29202;
var G__29208 = count__29170_29203;
var G__29209 = (i__29171_29204 + (1));
seq__29168_29201 = G__29206;
chunk__29169_29202 = G__29207;
count__29170_29203 = G__29208;
i__29171_29204 = G__29209;
continue;
} else {
var temp__5457__auto___29210__$1 = cljs.core.seq.call(null,seq__29168_29201);
if(temp__5457__auto___29210__$1){
var seq__29168_29211__$1 = temp__5457__auto___29210__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29168_29211__$1)){
var c__4319__auto___29212 = cljs.core.chunk_first.call(null,seq__29168_29211__$1);
var G__29213 = cljs.core.chunk_rest.call(null,seq__29168_29211__$1);
var G__29214 = c__4319__auto___29212;
var G__29215 = cljs.core.count.call(null,c__4319__auto___29212);
var G__29216 = (0);
seq__29168_29201 = G__29213;
chunk__29169_29202 = G__29214;
count__29170_29203 = G__29215;
i__29171_29204 = G__29216;
continue;
} else {
var req_29217 = cljs.core.first.call(null,seq__29168_29211__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29217,prov);


var G__29218 = cljs.core.next.call(null,seq__29168_29211__$1);
var G__29219 = null;
var G__29220 = (0);
var G__29221 = (0);
seq__29168_29201 = G__29218;
chunk__29169_29202 = G__29219;
count__29170_29203 = G__29220;
i__29171_29204 = G__29221;
continue;
}
} else {
}
}
break;
}


var G__29222 = cljs.core.next.call(null,seq__29160__$1);
var G__29223 = null;
var G__29224 = (0);
var G__29225 = (0);
seq__29160 = G__29222;
chunk__29161 = G__29223;
count__29162 = G__29224;
i__29163 = G__29225;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29226_29230 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29227_29231 = null;
var count__29228_29232 = (0);
var i__29229_29233 = (0);
while(true){
if((i__29229_29233 < count__29228_29232)){
var ns_29234 = cljs.core._nth.call(null,chunk__29227_29231,i__29229_29233);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29234);


var G__29235 = seq__29226_29230;
var G__29236 = chunk__29227_29231;
var G__29237 = count__29228_29232;
var G__29238 = (i__29229_29233 + (1));
seq__29226_29230 = G__29235;
chunk__29227_29231 = G__29236;
count__29228_29232 = G__29237;
i__29229_29233 = G__29238;
continue;
} else {
var temp__5457__auto___29239 = cljs.core.seq.call(null,seq__29226_29230);
if(temp__5457__auto___29239){
var seq__29226_29240__$1 = temp__5457__auto___29239;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29226_29240__$1)){
var c__4319__auto___29241 = cljs.core.chunk_first.call(null,seq__29226_29240__$1);
var G__29242 = cljs.core.chunk_rest.call(null,seq__29226_29240__$1);
var G__29243 = c__4319__auto___29241;
var G__29244 = cljs.core.count.call(null,c__4319__auto___29241);
var G__29245 = (0);
seq__29226_29230 = G__29242;
chunk__29227_29231 = G__29243;
count__29228_29232 = G__29244;
i__29229_29233 = G__29245;
continue;
} else {
var ns_29246 = cljs.core.first.call(null,seq__29226_29240__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29246);


var G__29247 = cljs.core.next.call(null,seq__29226_29240__$1);
var G__29248 = null;
var G__29249 = (0);
var G__29250 = (0);
seq__29226_29230 = G__29247;
chunk__29227_29231 = G__29248;
count__29228_29232 = G__29249;
i__29229_29233 = G__29250;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29251__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29251 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29252__i = 0, G__29252__a = new Array(arguments.length -  0);
while (G__29252__i < G__29252__a.length) {G__29252__a[G__29252__i] = arguments[G__29252__i + 0]; ++G__29252__i;}
  args = new cljs.core.IndexedSeq(G__29252__a,0,null);
} 
return G__29251__delegate.call(this,args);};
G__29251.cljs$lang$maxFixedArity = 0;
G__29251.cljs$lang$applyTo = (function (arglist__29253){
var args = cljs.core.seq(arglist__29253);
return G__29251__delegate(args);
});
G__29251.cljs$core$IFn$_invoke$arity$variadic = G__29251__delegate;
return G__29251;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__29254_SHARP_,p2__29255_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29254_SHARP_)].join('')),p2__29255_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__29256_SHARP_,p2__29257_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29256_SHARP_)].join(''),p2__29257_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29258 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29258.addCallback(((function (G__29258){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__29258))
);

G__29258.addErrback(((function (G__29258){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__29258))
);

return G__29258;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29259){if((e29259 instanceof Error)){
var e = e29259;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29259;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29260){if((e29260 instanceof Error)){
var e = e29260;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29260;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29261 = cljs.core._EQ_;
var expr__29262 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29261.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29262))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29261.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29262))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29261.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29262))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__29261,expr__29262){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29261,expr__29262))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29264,callback){
var map__29265 = p__29264;
var map__29265__$1 = ((((!((map__29265 == null)))?(((((map__29265.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29265.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29265):map__29265);
var file_msg = map__29265__$1;
var request_url = cljs.core.get.call(null,map__29265__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__29265,map__29265__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29265,map__29265__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto__){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto__){
return (function (state_29303){
var state_val_29304 = (state_29303[(1)]);
if((state_val_29304 === (7))){
var inst_29299 = (state_29303[(2)]);
var state_29303__$1 = state_29303;
var statearr_29305_29331 = state_29303__$1;
(statearr_29305_29331[(2)] = inst_29299);

(statearr_29305_29331[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (1))){
var state_29303__$1 = state_29303;
var statearr_29306_29332 = state_29303__$1;
(statearr_29306_29332[(2)] = null);

(statearr_29306_29332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (4))){
var inst_29269 = (state_29303[(7)]);
var inst_29269__$1 = (state_29303[(2)]);
var state_29303__$1 = (function (){var statearr_29307 = state_29303;
(statearr_29307[(7)] = inst_29269__$1);

return statearr_29307;
})();
if(cljs.core.truth_(inst_29269__$1)){
var statearr_29308_29333 = state_29303__$1;
(statearr_29308_29333[(1)] = (5));

} else {
var statearr_29309_29334 = state_29303__$1;
(statearr_29309_29334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (15))){
var inst_29282 = (state_29303[(8)]);
var inst_29284 = (state_29303[(9)]);
var inst_29286 = inst_29284.call(null,inst_29282);
var state_29303__$1 = state_29303;
var statearr_29310_29335 = state_29303__$1;
(statearr_29310_29335[(2)] = inst_29286);

(statearr_29310_29335[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (13))){
var inst_29293 = (state_29303[(2)]);
var state_29303__$1 = state_29303;
var statearr_29311_29336 = state_29303__$1;
(statearr_29311_29336[(2)] = inst_29293);

(statearr_29311_29336[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (6))){
var state_29303__$1 = state_29303;
var statearr_29312_29337 = state_29303__$1;
(statearr_29312_29337[(2)] = null);

(statearr_29312_29337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (17))){
var inst_29290 = (state_29303[(2)]);
var state_29303__$1 = state_29303;
var statearr_29313_29338 = state_29303__$1;
(statearr_29313_29338[(2)] = inst_29290);

(statearr_29313_29338[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (3))){
var inst_29301 = (state_29303[(2)]);
var state_29303__$1 = state_29303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29303__$1,inst_29301);
} else {
if((state_val_29304 === (12))){
var state_29303__$1 = state_29303;
var statearr_29314_29339 = state_29303__$1;
(statearr_29314_29339[(2)] = null);

(statearr_29314_29339[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (2))){
var state_29303__$1 = state_29303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29303__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29304 === (11))){
var inst_29274 = (state_29303[(10)]);
var inst_29280 = figwheel.client.file_reloading.blocking_load.call(null,inst_29274);
var state_29303__$1 = state_29303;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29303__$1,(14),inst_29280);
} else {
if((state_val_29304 === (9))){
var inst_29274 = (state_29303[(10)]);
var state_29303__$1 = state_29303;
if(cljs.core.truth_(inst_29274)){
var statearr_29315_29340 = state_29303__$1;
(statearr_29315_29340[(1)] = (11));

} else {
var statearr_29316_29341 = state_29303__$1;
(statearr_29316_29341[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (5))){
var inst_29275 = (state_29303[(11)]);
var inst_29269 = (state_29303[(7)]);
var inst_29274 = cljs.core.nth.call(null,inst_29269,(0),null);
var inst_29275__$1 = cljs.core.nth.call(null,inst_29269,(1),null);
var state_29303__$1 = (function (){var statearr_29317 = state_29303;
(statearr_29317[(10)] = inst_29274);

(statearr_29317[(11)] = inst_29275__$1);

return statearr_29317;
})();
if(cljs.core.truth_(inst_29275__$1)){
var statearr_29318_29342 = state_29303__$1;
(statearr_29318_29342[(1)] = (8));

} else {
var statearr_29319_29343 = state_29303__$1;
(statearr_29319_29343[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (14))){
var inst_29274 = (state_29303[(10)]);
var inst_29284 = (state_29303[(9)]);
var inst_29282 = (state_29303[(2)]);
var inst_29283 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29284__$1 = cljs.core.get.call(null,inst_29283,inst_29274);
var state_29303__$1 = (function (){var statearr_29320 = state_29303;
(statearr_29320[(8)] = inst_29282);

(statearr_29320[(9)] = inst_29284__$1);

return statearr_29320;
})();
if(cljs.core.truth_(inst_29284__$1)){
var statearr_29321_29344 = state_29303__$1;
(statearr_29321_29344[(1)] = (15));

} else {
var statearr_29322_29345 = state_29303__$1;
(statearr_29322_29345[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (16))){
var inst_29282 = (state_29303[(8)]);
var inst_29288 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29282);
var state_29303__$1 = state_29303;
var statearr_29323_29346 = state_29303__$1;
(statearr_29323_29346[(2)] = inst_29288);

(statearr_29323_29346[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (10))){
var inst_29295 = (state_29303[(2)]);
var state_29303__$1 = (function (){var statearr_29324 = state_29303;
(statearr_29324[(12)] = inst_29295);

return statearr_29324;
})();
var statearr_29325_29347 = state_29303__$1;
(statearr_29325_29347[(2)] = null);

(statearr_29325_29347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29304 === (8))){
var inst_29275 = (state_29303[(11)]);
var inst_29277 = eval(inst_29275);
var state_29303__$1 = state_29303;
var statearr_29326_29348 = state_29303__$1;
(statearr_29326_29348[(2)] = inst_29277);

(statearr_29326_29348[(1)] = (10));


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
});})(c__26988__auto__))
;
return ((function (switch__26898__auto__,c__26988__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__26899__auto__ = null;
var figwheel$client$file_reloading$state_machine__26899__auto____0 = (function (){
var statearr_29327 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29327[(0)] = figwheel$client$file_reloading$state_machine__26899__auto__);

(statearr_29327[(1)] = (1));

return statearr_29327;
});
var figwheel$client$file_reloading$state_machine__26899__auto____1 = (function (state_29303){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_29303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e29328){if((e29328 instanceof Object)){
var ex__26902__auto__ = e29328;
var statearr_29329_29349 = state_29303;
(statearr_29329_29349[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29328;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29350 = state_29303;
state_29303 = G__29350;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__26899__auto__ = function(state_29303){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__26899__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__26899__auto____1.call(this,state_29303);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__26899__auto____0;
figwheel$client$file_reloading$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__26899__auto____1;
return figwheel$client$file_reloading$state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto__))
})();
var state__26990__auto__ = (function (){var statearr_29330 = f__26989__auto__.call(null);
(statearr_29330[(6)] = c__26988__auto__);

return statearr_29330;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto__))
);

return c__26988__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29352 = arguments.length;
switch (G__29352) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29354,callback){
var map__29355 = p__29354;
var map__29355__$1 = ((((!((map__29355 == null)))?(((((map__29355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29355):map__29355);
var file_msg = map__29355__$1;
var namespace = cljs.core.get.call(null,map__29355__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29355,map__29355__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29355,map__29355__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29357){
var map__29358 = p__29357;
var map__29358__$1 = ((((!((map__29358 == null)))?(((((map__29358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29358):map__29358);
var file_msg = map__29358__$1;
var namespace = cljs.core.get.call(null,map__29358__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29360){
var map__29361 = p__29360;
var map__29361__$1 = ((((!((map__29361 == null)))?(((((map__29361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29361):map__29361);
var file_msg = map__29361__$1;
var namespace = cljs.core.get.call(null,map__29361__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29363,callback){
var map__29364 = p__29363;
var map__29364__$1 = ((((!((map__29364 == null)))?(((((map__29364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29364.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29364):map__29364);
var file_msg = map__29364__$1;
var request_url = cljs.core.get.call(null,map__29364__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29364__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26988__auto___29414 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___29414,out){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___29414,out){
return (function (state_29399){
var state_val_29400 = (state_29399[(1)]);
if((state_val_29400 === (1))){
var inst_29373 = cljs.core.seq.call(null,files);
var inst_29374 = cljs.core.first.call(null,inst_29373);
var inst_29375 = cljs.core.next.call(null,inst_29373);
var inst_29376 = files;
var state_29399__$1 = (function (){var statearr_29401 = state_29399;
(statearr_29401[(7)] = inst_29374);

(statearr_29401[(8)] = inst_29375);

(statearr_29401[(9)] = inst_29376);

return statearr_29401;
})();
var statearr_29402_29415 = state_29399__$1;
(statearr_29402_29415[(2)] = null);

(statearr_29402_29415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (2))){
var inst_29382 = (state_29399[(10)]);
var inst_29376 = (state_29399[(9)]);
var inst_29381 = cljs.core.seq.call(null,inst_29376);
var inst_29382__$1 = cljs.core.first.call(null,inst_29381);
var inst_29383 = cljs.core.next.call(null,inst_29381);
var inst_29384 = (inst_29382__$1 == null);
var inst_29385 = cljs.core.not.call(null,inst_29384);
var state_29399__$1 = (function (){var statearr_29403 = state_29399;
(statearr_29403[(11)] = inst_29383);

(statearr_29403[(10)] = inst_29382__$1);

return statearr_29403;
})();
if(inst_29385){
var statearr_29404_29416 = state_29399__$1;
(statearr_29404_29416[(1)] = (4));

} else {
var statearr_29405_29417 = state_29399__$1;
(statearr_29405_29417[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (3))){
var inst_29397 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29399__$1,inst_29397);
} else {
if((state_val_29400 === (4))){
var inst_29382 = (state_29399[(10)]);
var inst_29387 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29382);
var state_29399__$1 = state_29399;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29399__$1,(7),inst_29387);
} else {
if((state_val_29400 === (5))){
var inst_29393 = cljs.core.async.close_BANG_.call(null,out);
var state_29399__$1 = state_29399;
var statearr_29406_29418 = state_29399__$1;
(statearr_29406_29418[(2)] = inst_29393);

(statearr_29406_29418[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (6))){
var inst_29395 = (state_29399[(2)]);
var state_29399__$1 = state_29399;
var statearr_29407_29419 = state_29399__$1;
(statearr_29407_29419[(2)] = inst_29395);

(statearr_29407_29419[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29400 === (7))){
var inst_29383 = (state_29399[(11)]);
var inst_29389 = (state_29399[(2)]);
var inst_29390 = cljs.core.async.put_BANG_.call(null,out,inst_29389);
var inst_29376 = inst_29383;
var state_29399__$1 = (function (){var statearr_29408 = state_29399;
(statearr_29408[(12)] = inst_29390);

(statearr_29408[(9)] = inst_29376);

return statearr_29408;
})();
var statearr_29409_29420 = state_29399__$1;
(statearr_29409_29420[(2)] = null);

(statearr_29409_29420[(1)] = (2));


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
});})(c__26988__auto___29414,out))
;
return ((function (switch__26898__auto__,c__26988__auto___29414,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26899__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26899__auto____0 = (function (){
var statearr_29410 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29410[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26899__auto__);

(statearr_29410[(1)] = (1));

return statearr_29410;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__26899__auto____1 = (function (state_29399){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_29399);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e29411){if((e29411 instanceof Object)){
var ex__26902__auto__ = e29411;
var statearr_29412_29421 = state_29399;
(statearr_29412_29421[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29399);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29411;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29422 = state_29399;
state_29399 = G__29422;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26899__auto__ = function(state_29399){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26899__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26899__auto____1.call(this,state_29399);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26899__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__26899__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___29414,out))
})();
var state__26990__auto__ = (function (){var statearr_29413 = f__26989__auto__.call(null);
(statearr_29413[(6)] = c__26988__auto___29414);

return statearr_29413;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___29414,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29423,opts){
var map__29424 = p__29423;
var map__29424__$1 = ((((!((map__29424 == null)))?(((((map__29424.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29424.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29424):map__29424);
var eval_body = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29424__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29426){var e = e29426;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29427_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29427_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29428){
var vec__29429 = p__29428;
var k = cljs.core.nth.call(null,vec__29429,(0),null);
var v = cljs.core.nth.call(null,vec__29429,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29432){
var vec__29433 = p__29432;
var k = cljs.core.nth.call(null,vec__29433,(0),null);
var v = cljs.core.nth.call(null,vec__29433,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29439,p__29440){
var map__29441 = p__29439;
var map__29441__$1 = ((((!((map__29441 == null)))?(((((map__29441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29441):map__29441);
var opts = map__29441__$1;
var before_jsload = cljs.core.get.call(null,map__29441__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29441__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29441__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29442 = p__29440;
var map__29442__$1 = ((((!((map__29442 == null)))?(((((map__29442.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29442.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29442):map__29442);
var msg = map__29442__$1;
var files = cljs.core.get.call(null,map__29442__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29442__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29442__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29596){
var state_val_29597 = (state_29596[(1)]);
if((state_val_29597 === (7))){
var inst_29459 = (state_29596[(7)]);
var inst_29457 = (state_29596[(8)]);
var inst_29458 = (state_29596[(9)]);
var inst_29456 = (state_29596[(10)]);
var inst_29464 = cljs.core._nth.call(null,inst_29457,inst_29459);
var inst_29465 = figwheel.client.file_reloading.eval_body.call(null,inst_29464,opts);
var inst_29466 = (inst_29459 + (1));
var tmp29598 = inst_29457;
var tmp29599 = inst_29458;
var tmp29600 = inst_29456;
var inst_29456__$1 = tmp29600;
var inst_29457__$1 = tmp29598;
var inst_29458__$1 = tmp29599;
var inst_29459__$1 = inst_29466;
var state_29596__$1 = (function (){var statearr_29601 = state_29596;
(statearr_29601[(11)] = inst_29465);

(statearr_29601[(7)] = inst_29459__$1);

(statearr_29601[(8)] = inst_29457__$1);

(statearr_29601[(9)] = inst_29458__$1);

(statearr_29601[(10)] = inst_29456__$1);

return statearr_29601;
})();
var statearr_29602_29685 = state_29596__$1;
(statearr_29602_29685[(2)] = null);

(statearr_29602_29685[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (20))){
var inst_29499 = (state_29596[(12)]);
var inst_29507 = figwheel.client.file_reloading.sort_files.call(null,inst_29499);
var state_29596__$1 = state_29596;
var statearr_29603_29686 = state_29596__$1;
(statearr_29603_29686[(2)] = inst_29507);

(statearr_29603_29686[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (27))){
var state_29596__$1 = state_29596;
var statearr_29604_29687 = state_29596__$1;
(statearr_29604_29687[(2)] = null);

(statearr_29604_29687[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (1))){
var inst_29448 = (state_29596[(13)]);
var inst_29445 = before_jsload.call(null,files);
var inst_29446 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29447 = (function (){return ((function (inst_29448,inst_29445,inst_29446,state_val_29597,c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29436_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29436_SHARP_);
});
;})(inst_29448,inst_29445,inst_29446,state_val_29597,c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29448__$1 = cljs.core.filter.call(null,inst_29447,files);
var inst_29449 = cljs.core.not_empty.call(null,inst_29448__$1);
var state_29596__$1 = (function (){var statearr_29605 = state_29596;
(statearr_29605[(14)] = inst_29446);

(statearr_29605[(15)] = inst_29445);

(statearr_29605[(13)] = inst_29448__$1);

return statearr_29605;
})();
if(cljs.core.truth_(inst_29449)){
var statearr_29606_29688 = state_29596__$1;
(statearr_29606_29688[(1)] = (2));

} else {
var statearr_29607_29689 = state_29596__$1;
(statearr_29607_29689[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (24))){
var state_29596__$1 = state_29596;
var statearr_29608_29690 = state_29596__$1;
(statearr_29608_29690[(2)] = null);

(statearr_29608_29690[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (39))){
var inst_29549 = (state_29596[(16)]);
var state_29596__$1 = state_29596;
var statearr_29609_29691 = state_29596__$1;
(statearr_29609_29691[(2)] = inst_29549);

(statearr_29609_29691[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (46))){
var inst_29591 = (state_29596[(2)]);
var state_29596__$1 = state_29596;
var statearr_29610_29692 = state_29596__$1;
(statearr_29610_29692[(2)] = inst_29591);

(statearr_29610_29692[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (4))){
var inst_29493 = (state_29596[(2)]);
var inst_29494 = cljs.core.List.EMPTY;
var inst_29495 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29494);
var inst_29496 = (function (){return ((function (inst_29493,inst_29494,inst_29495,state_val_29597,c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29437_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29437_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29437_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29437_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_29493,inst_29494,inst_29495,state_val_29597,c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29497 = cljs.core.filter.call(null,inst_29496,files);
var inst_29498 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29499 = cljs.core.concat.call(null,inst_29497,inst_29498);
var state_29596__$1 = (function (){var statearr_29611 = state_29596;
(statearr_29611[(17)] = inst_29493);

(statearr_29611[(18)] = inst_29495);

(statearr_29611[(12)] = inst_29499);

return statearr_29611;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29612_29693 = state_29596__$1;
(statearr_29612_29693[(1)] = (16));

} else {
var statearr_29613_29694 = state_29596__$1;
(statearr_29613_29694[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (15))){
var inst_29483 = (state_29596[(2)]);
var state_29596__$1 = state_29596;
var statearr_29614_29695 = state_29596__$1;
(statearr_29614_29695[(2)] = inst_29483);

(statearr_29614_29695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (21))){
var inst_29509 = (state_29596[(19)]);
var inst_29509__$1 = (state_29596[(2)]);
var inst_29510 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29509__$1);
var state_29596__$1 = (function (){var statearr_29615 = state_29596;
(statearr_29615[(19)] = inst_29509__$1);

return statearr_29615;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29596__$1,(22),inst_29510);
} else {
if((state_val_29597 === (31))){
var inst_29594 = (state_29596[(2)]);
var state_29596__$1 = state_29596;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29596__$1,inst_29594);
} else {
if((state_val_29597 === (32))){
var inst_29549 = (state_29596[(16)]);
var inst_29554 = inst_29549.cljs$lang$protocol_mask$partition0$;
var inst_29555 = (inst_29554 & (64));
var inst_29556 = inst_29549.cljs$core$ISeq$;
var inst_29557 = (cljs.core.PROTOCOL_SENTINEL === inst_29556);
var inst_29558 = ((inst_29555) || (inst_29557));
var state_29596__$1 = state_29596;
if(cljs.core.truth_(inst_29558)){
var statearr_29616_29696 = state_29596__$1;
(statearr_29616_29696[(1)] = (35));

} else {
var statearr_29617_29697 = state_29596__$1;
(statearr_29617_29697[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (40))){
var inst_29571 = (state_29596[(20)]);
var inst_29570 = (state_29596[(2)]);
var inst_29571__$1 = cljs.core.get.call(null,inst_29570,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29572 = cljs.core.get.call(null,inst_29570,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29573 = cljs.core.not_empty.call(null,inst_29571__$1);
var state_29596__$1 = (function (){var statearr_29618 = state_29596;
(statearr_29618[(21)] = inst_29572);

(statearr_29618[(20)] = inst_29571__$1);

return statearr_29618;
})();
if(cljs.core.truth_(inst_29573)){
var statearr_29619_29698 = state_29596__$1;
(statearr_29619_29698[(1)] = (41));

} else {
var statearr_29620_29699 = state_29596__$1;
(statearr_29620_29699[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (33))){
var state_29596__$1 = state_29596;
var statearr_29621_29700 = state_29596__$1;
(statearr_29621_29700[(2)] = false);

(statearr_29621_29700[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (13))){
var inst_29469 = (state_29596[(22)]);
var inst_29473 = cljs.core.chunk_first.call(null,inst_29469);
var inst_29474 = cljs.core.chunk_rest.call(null,inst_29469);
var inst_29475 = cljs.core.count.call(null,inst_29473);
var inst_29456 = inst_29474;
var inst_29457 = inst_29473;
var inst_29458 = inst_29475;
var inst_29459 = (0);
var state_29596__$1 = (function (){var statearr_29622 = state_29596;
(statearr_29622[(7)] = inst_29459);

(statearr_29622[(8)] = inst_29457);

(statearr_29622[(9)] = inst_29458);

(statearr_29622[(10)] = inst_29456);

return statearr_29622;
})();
var statearr_29623_29701 = state_29596__$1;
(statearr_29623_29701[(2)] = null);

(statearr_29623_29701[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (22))){
var inst_29513 = (state_29596[(23)]);
var inst_29512 = (state_29596[(24)]);
var inst_29509 = (state_29596[(19)]);
var inst_29517 = (state_29596[(25)]);
var inst_29512__$1 = (state_29596[(2)]);
var inst_29513__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29512__$1);
var inst_29514 = (function (){var all_files = inst_29509;
var res_SINGLEQUOTE_ = inst_29512__$1;
var res = inst_29513__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29513,inst_29512,inst_29509,inst_29517,inst_29512__$1,inst_29513__$1,state_val_29597,c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29438_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29438_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29513,inst_29512,inst_29509,inst_29517,inst_29512__$1,inst_29513__$1,state_val_29597,c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29515 = cljs.core.filter.call(null,inst_29514,inst_29512__$1);
var inst_29516 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29517__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29516);
var inst_29518 = cljs.core.not_empty.call(null,inst_29517__$1);
var state_29596__$1 = (function (){var statearr_29624 = state_29596;
(statearr_29624[(23)] = inst_29513__$1);

(statearr_29624[(24)] = inst_29512__$1);

(statearr_29624[(25)] = inst_29517__$1);

(statearr_29624[(26)] = inst_29515);

return statearr_29624;
})();
if(cljs.core.truth_(inst_29518)){
var statearr_29625_29702 = state_29596__$1;
(statearr_29625_29702[(1)] = (23));

} else {
var statearr_29626_29703 = state_29596__$1;
(statearr_29626_29703[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (36))){
var state_29596__$1 = state_29596;
var statearr_29627_29704 = state_29596__$1;
(statearr_29627_29704[(2)] = false);

(statearr_29627_29704[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (41))){
var inst_29571 = (state_29596[(20)]);
var inst_29575 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29576 = cljs.core.map.call(null,inst_29575,inst_29571);
var inst_29577 = cljs.core.pr_str.call(null,inst_29576);
var inst_29578 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29577)].join('');
var inst_29579 = figwheel.client.utils.log.call(null,inst_29578);
var state_29596__$1 = state_29596;
var statearr_29628_29705 = state_29596__$1;
(statearr_29628_29705[(2)] = inst_29579);

(statearr_29628_29705[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (43))){
var inst_29572 = (state_29596[(21)]);
var inst_29582 = (state_29596[(2)]);
var inst_29583 = cljs.core.not_empty.call(null,inst_29572);
var state_29596__$1 = (function (){var statearr_29629 = state_29596;
(statearr_29629[(27)] = inst_29582);

return statearr_29629;
})();
if(cljs.core.truth_(inst_29583)){
var statearr_29630_29706 = state_29596__$1;
(statearr_29630_29706[(1)] = (44));

} else {
var statearr_29631_29707 = state_29596__$1;
(statearr_29631_29707[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (29))){
var inst_29549 = (state_29596[(16)]);
var inst_29513 = (state_29596[(23)]);
var inst_29512 = (state_29596[(24)]);
var inst_29509 = (state_29596[(19)]);
var inst_29517 = (state_29596[(25)]);
var inst_29515 = (state_29596[(26)]);
var inst_29545 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29548 = (function (){var all_files = inst_29509;
var res_SINGLEQUOTE_ = inst_29512;
var res = inst_29513;
var files_not_loaded = inst_29515;
var dependencies_that_loaded = inst_29517;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29549,inst_29513,inst_29512,inst_29509,inst_29517,inst_29515,inst_29545,state_val_29597,c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29547){
var map__29632 = p__29547;
var map__29632__$1 = ((((!((map__29632 == null)))?(((((map__29632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29632):map__29632);
var namespace = cljs.core.get.call(null,map__29632__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29549,inst_29513,inst_29512,inst_29509,inst_29517,inst_29515,inst_29545,state_val_29597,c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29549__$1 = cljs.core.group_by.call(null,inst_29548,inst_29515);
var inst_29551 = (inst_29549__$1 == null);
var inst_29552 = cljs.core.not.call(null,inst_29551);
var state_29596__$1 = (function (){var statearr_29634 = state_29596;
(statearr_29634[(16)] = inst_29549__$1);

(statearr_29634[(28)] = inst_29545);

return statearr_29634;
})();
if(inst_29552){
var statearr_29635_29708 = state_29596__$1;
(statearr_29635_29708[(1)] = (32));

} else {
var statearr_29636_29709 = state_29596__$1;
(statearr_29636_29709[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (44))){
var inst_29572 = (state_29596[(21)]);
var inst_29585 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29572);
var inst_29586 = cljs.core.pr_str.call(null,inst_29585);
var inst_29587 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29586)].join('');
var inst_29588 = figwheel.client.utils.log.call(null,inst_29587);
var state_29596__$1 = state_29596;
var statearr_29637_29710 = state_29596__$1;
(statearr_29637_29710[(2)] = inst_29588);

(statearr_29637_29710[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (6))){
var inst_29490 = (state_29596[(2)]);
var state_29596__$1 = state_29596;
var statearr_29638_29711 = state_29596__$1;
(statearr_29638_29711[(2)] = inst_29490);

(statearr_29638_29711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (28))){
var inst_29515 = (state_29596[(26)]);
var inst_29542 = (state_29596[(2)]);
var inst_29543 = cljs.core.not_empty.call(null,inst_29515);
var state_29596__$1 = (function (){var statearr_29639 = state_29596;
(statearr_29639[(29)] = inst_29542);

return statearr_29639;
})();
if(cljs.core.truth_(inst_29543)){
var statearr_29640_29712 = state_29596__$1;
(statearr_29640_29712[(1)] = (29));

} else {
var statearr_29641_29713 = state_29596__$1;
(statearr_29641_29713[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (25))){
var inst_29513 = (state_29596[(23)]);
var inst_29529 = (state_29596[(2)]);
var inst_29530 = cljs.core.not_empty.call(null,inst_29513);
var state_29596__$1 = (function (){var statearr_29642 = state_29596;
(statearr_29642[(30)] = inst_29529);

return statearr_29642;
})();
if(cljs.core.truth_(inst_29530)){
var statearr_29643_29714 = state_29596__$1;
(statearr_29643_29714[(1)] = (26));

} else {
var statearr_29644_29715 = state_29596__$1;
(statearr_29644_29715[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (34))){
var inst_29565 = (state_29596[(2)]);
var state_29596__$1 = state_29596;
if(cljs.core.truth_(inst_29565)){
var statearr_29645_29716 = state_29596__$1;
(statearr_29645_29716[(1)] = (38));

} else {
var statearr_29646_29717 = state_29596__$1;
(statearr_29646_29717[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (17))){
var state_29596__$1 = state_29596;
var statearr_29647_29718 = state_29596__$1;
(statearr_29647_29718[(2)] = recompile_dependents);

(statearr_29647_29718[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (3))){
var state_29596__$1 = state_29596;
var statearr_29648_29719 = state_29596__$1;
(statearr_29648_29719[(2)] = null);

(statearr_29648_29719[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (12))){
var inst_29486 = (state_29596[(2)]);
var state_29596__$1 = state_29596;
var statearr_29649_29720 = state_29596__$1;
(statearr_29649_29720[(2)] = inst_29486);

(statearr_29649_29720[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (2))){
var inst_29448 = (state_29596[(13)]);
var inst_29455 = cljs.core.seq.call(null,inst_29448);
var inst_29456 = inst_29455;
var inst_29457 = null;
var inst_29458 = (0);
var inst_29459 = (0);
var state_29596__$1 = (function (){var statearr_29650 = state_29596;
(statearr_29650[(7)] = inst_29459);

(statearr_29650[(8)] = inst_29457);

(statearr_29650[(9)] = inst_29458);

(statearr_29650[(10)] = inst_29456);

return statearr_29650;
})();
var statearr_29651_29721 = state_29596__$1;
(statearr_29651_29721[(2)] = null);

(statearr_29651_29721[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (23))){
var inst_29513 = (state_29596[(23)]);
var inst_29512 = (state_29596[(24)]);
var inst_29509 = (state_29596[(19)]);
var inst_29517 = (state_29596[(25)]);
var inst_29515 = (state_29596[(26)]);
var inst_29520 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29522 = (function (){var all_files = inst_29509;
var res_SINGLEQUOTE_ = inst_29512;
var res = inst_29513;
var files_not_loaded = inst_29515;
var dependencies_that_loaded = inst_29517;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29513,inst_29512,inst_29509,inst_29517,inst_29515,inst_29520,state_val_29597,c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29521){
var map__29652 = p__29521;
var map__29652__$1 = ((((!((map__29652 == null)))?(((((map__29652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29652.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29652):map__29652);
var request_url = cljs.core.get.call(null,map__29652__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29513,inst_29512,inst_29509,inst_29517,inst_29515,inst_29520,state_val_29597,c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29523 = cljs.core.reverse.call(null,inst_29517);
var inst_29524 = cljs.core.map.call(null,inst_29522,inst_29523);
var inst_29525 = cljs.core.pr_str.call(null,inst_29524);
var inst_29526 = figwheel.client.utils.log.call(null,inst_29525);
var state_29596__$1 = (function (){var statearr_29654 = state_29596;
(statearr_29654[(31)] = inst_29520);

return statearr_29654;
})();
var statearr_29655_29722 = state_29596__$1;
(statearr_29655_29722[(2)] = inst_29526);

(statearr_29655_29722[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (35))){
var state_29596__$1 = state_29596;
var statearr_29656_29723 = state_29596__$1;
(statearr_29656_29723[(2)] = true);

(statearr_29656_29723[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (19))){
var inst_29499 = (state_29596[(12)]);
var inst_29505 = figwheel.client.file_reloading.expand_files.call(null,inst_29499);
var state_29596__$1 = state_29596;
var statearr_29657_29724 = state_29596__$1;
(statearr_29657_29724[(2)] = inst_29505);

(statearr_29657_29724[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (11))){
var state_29596__$1 = state_29596;
var statearr_29658_29725 = state_29596__$1;
(statearr_29658_29725[(2)] = null);

(statearr_29658_29725[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (9))){
var inst_29488 = (state_29596[(2)]);
var state_29596__$1 = state_29596;
var statearr_29659_29726 = state_29596__$1;
(statearr_29659_29726[(2)] = inst_29488);

(statearr_29659_29726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (5))){
var inst_29459 = (state_29596[(7)]);
var inst_29458 = (state_29596[(9)]);
var inst_29461 = (inst_29459 < inst_29458);
var inst_29462 = inst_29461;
var state_29596__$1 = state_29596;
if(cljs.core.truth_(inst_29462)){
var statearr_29660_29727 = state_29596__$1;
(statearr_29660_29727[(1)] = (7));

} else {
var statearr_29661_29728 = state_29596__$1;
(statearr_29661_29728[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (14))){
var inst_29469 = (state_29596[(22)]);
var inst_29478 = cljs.core.first.call(null,inst_29469);
var inst_29479 = figwheel.client.file_reloading.eval_body.call(null,inst_29478,opts);
var inst_29480 = cljs.core.next.call(null,inst_29469);
var inst_29456 = inst_29480;
var inst_29457 = null;
var inst_29458 = (0);
var inst_29459 = (0);
var state_29596__$1 = (function (){var statearr_29662 = state_29596;
(statearr_29662[(32)] = inst_29479);

(statearr_29662[(7)] = inst_29459);

(statearr_29662[(8)] = inst_29457);

(statearr_29662[(9)] = inst_29458);

(statearr_29662[(10)] = inst_29456);

return statearr_29662;
})();
var statearr_29663_29729 = state_29596__$1;
(statearr_29663_29729[(2)] = null);

(statearr_29663_29729[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (45))){
var state_29596__$1 = state_29596;
var statearr_29664_29730 = state_29596__$1;
(statearr_29664_29730[(2)] = null);

(statearr_29664_29730[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (26))){
var inst_29513 = (state_29596[(23)]);
var inst_29512 = (state_29596[(24)]);
var inst_29509 = (state_29596[(19)]);
var inst_29517 = (state_29596[(25)]);
var inst_29515 = (state_29596[(26)]);
var inst_29532 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29534 = (function (){var all_files = inst_29509;
var res_SINGLEQUOTE_ = inst_29512;
var res = inst_29513;
var files_not_loaded = inst_29515;
var dependencies_that_loaded = inst_29517;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29513,inst_29512,inst_29509,inst_29517,inst_29515,inst_29532,state_val_29597,c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29533){
var map__29665 = p__29533;
var map__29665__$1 = ((((!((map__29665 == null)))?(((((map__29665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29665):map__29665);
var namespace = cljs.core.get.call(null,map__29665__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29665__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29513,inst_29512,inst_29509,inst_29517,inst_29515,inst_29532,state_val_29597,c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29535 = cljs.core.map.call(null,inst_29534,inst_29513);
var inst_29536 = cljs.core.pr_str.call(null,inst_29535);
var inst_29537 = figwheel.client.utils.log.call(null,inst_29536);
var inst_29538 = (function (){var all_files = inst_29509;
var res_SINGLEQUOTE_ = inst_29512;
var res = inst_29513;
var files_not_loaded = inst_29515;
var dependencies_that_loaded = inst_29517;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29513,inst_29512,inst_29509,inst_29517,inst_29515,inst_29532,inst_29534,inst_29535,inst_29536,inst_29537,state_val_29597,c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29513,inst_29512,inst_29509,inst_29517,inst_29515,inst_29532,inst_29534,inst_29535,inst_29536,inst_29537,state_val_29597,c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29539 = setTimeout(inst_29538,(10));
var state_29596__$1 = (function (){var statearr_29667 = state_29596;
(statearr_29667[(33)] = inst_29532);

(statearr_29667[(34)] = inst_29537);

return statearr_29667;
})();
var statearr_29668_29731 = state_29596__$1;
(statearr_29668_29731[(2)] = inst_29539);

(statearr_29668_29731[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (16))){
var state_29596__$1 = state_29596;
var statearr_29669_29732 = state_29596__$1;
(statearr_29669_29732[(2)] = reload_dependents);

(statearr_29669_29732[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (38))){
var inst_29549 = (state_29596[(16)]);
var inst_29567 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29549);
var state_29596__$1 = state_29596;
var statearr_29670_29733 = state_29596__$1;
(statearr_29670_29733[(2)] = inst_29567);

(statearr_29670_29733[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (30))){
var state_29596__$1 = state_29596;
var statearr_29671_29734 = state_29596__$1;
(statearr_29671_29734[(2)] = null);

(statearr_29671_29734[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (10))){
var inst_29469 = (state_29596[(22)]);
var inst_29471 = cljs.core.chunked_seq_QMARK_.call(null,inst_29469);
var state_29596__$1 = state_29596;
if(inst_29471){
var statearr_29672_29735 = state_29596__$1;
(statearr_29672_29735[(1)] = (13));

} else {
var statearr_29673_29736 = state_29596__$1;
(statearr_29673_29736[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (18))){
var inst_29503 = (state_29596[(2)]);
var state_29596__$1 = state_29596;
if(cljs.core.truth_(inst_29503)){
var statearr_29674_29737 = state_29596__$1;
(statearr_29674_29737[(1)] = (19));

} else {
var statearr_29675_29738 = state_29596__$1;
(statearr_29675_29738[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (42))){
var state_29596__$1 = state_29596;
var statearr_29676_29739 = state_29596__$1;
(statearr_29676_29739[(2)] = null);

(statearr_29676_29739[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (37))){
var inst_29562 = (state_29596[(2)]);
var state_29596__$1 = state_29596;
var statearr_29677_29740 = state_29596__$1;
(statearr_29677_29740[(2)] = inst_29562);

(statearr_29677_29740[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29597 === (8))){
var inst_29469 = (state_29596[(22)]);
var inst_29456 = (state_29596[(10)]);
var inst_29469__$1 = cljs.core.seq.call(null,inst_29456);
var state_29596__$1 = (function (){var statearr_29678 = state_29596;
(statearr_29678[(22)] = inst_29469__$1);

return statearr_29678;
})();
if(inst_29469__$1){
var statearr_29679_29741 = state_29596__$1;
(statearr_29679_29741[(1)] = (10));

} else {
var statearr_29680_29742 = state_29596__$1;
(statearr_29680_29742[(1)] = (11));

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
});})(c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__26898__auto__,c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26899__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26899__auto____0 = (function (){
var statearr_29681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29681[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__26899__auto__);

(statearr_29681[(1)] = (1));

return statearr_29681;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__26899__auto____1 = (function (state_29596){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_29596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e29682){if((e29682 instanceof Object)){
var ex__26902__auto__ = e29682;
var statearr_29683_29743 = state_29596;
(statearr_29683_29743[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29682;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29744 = state_29596;
state_29596 = G__29744;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__26899__auto__ = function(state_29596){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26899__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26899__auto____1.call(this,state_29596);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26899__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__26899__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26990__auto__ = (function (){var statearr_29684 = f__26989__auto__.call(null);
(statearr_29684[(6)] = c__26988__auto__);

return statearr_29684;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto__,map__29441,map__29441__$1,opts,before_jsload,on_jsload,reload_dependents,map__29442,map__29442__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26988__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29747,link){
var map__29748 = p__29747;
var map__29748__$1 = ((((!((map__29748 == null)))?(((((map__29748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29748):map__29748);
var file = cljs.core.get.call(null,map__29748__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__29748,map__29748__$1,file){
return (function (p1__29745_SHARP_,p2__29746_SHARP_){
if(cljs.core._EQ_.call(null,p1__29745_SHARP_,p2__29746_SHARP_)){
return p1__29745_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__29748,map__29748__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29751){
var map__29752 = p__29751;
var map__29752__$1 = ((((!((map__29752 == null)))?(((((map__29752.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29752.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29752):map__29752);
var match_length = cljs.core.get.call(null,map__29752__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29752__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29750_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29750_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29754_SHARP_,p2__29755_SHARP_){
return cljs.core.assoc.call(null,p1__29754_SHARP_,cljs.core.get.call(null,p2__29755_SHARP_,key),p2__29755_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_29756 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_29756);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_29756);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29757,p__29758){
var map__29759 = p__29757;
var map__29759__$1 = ((((!((map__29759 == null)))?(((((map__29759.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29759.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29759):map__29759);
var on_cssload = cljs.core.get.call(null,map__29759__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__29760 = p__29758;
var map__29760__$1 = ((((!((map__29760 == null)))?(((((map__29760.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29760.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29760):map__29760);
var files_msg = map__29760__$1;
var files = cljs.core.get.call(null,map__29760__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1528903115359
