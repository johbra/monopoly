// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27048 = arguments.length;
switch (G__27048) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27049 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27049 = (function (f,blockable,meta27050){
this.f = f;
this.blockable = blockable;
this.meta27050 = meta27050;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27051,meta27050__$1){
var self__ = this;
var _27051__$1 = this;
return (new cljs.core.async.t_cljs$core$async27049(self__.f,self__.blockable,meta27050__$1));
});

cljs.core.async.t_cljs$core$async27049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27051){
var self__ = this;
var _27051__$1 = this;
return self__.meta27050;
});

cljs.core.async.t_cljs$core$async27049.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27049.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27049.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27049.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27049.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27050","meta27050",-705807748,null)], null);
});

cljs.core.async.t_cljs$core$async27049.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27049.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27049";

cljs.core.async.t_cljs$core$async27049.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27049");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27049.
 */
cljs.core.async.__GT_t_cljs$core$async27049 = (function cljs$core$async$__GT_t_cljs$core$async27049(f__$1,blockable__$1,meta27050){
return (new cljs.core.async.t_cljs$core$async27049(f__$1,blockable__$1,meta27050));
});

}

return (new cljs.core.async.t_cljs$core$async27049(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27055 = arguments.length;
switch (G__27055) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27058 = arguments.length;
switch (G__27058) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27061 = arguments.length;
switch (G__27061) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27063 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27063);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27063,ret){
return (function (){
return fn1.call(null,val_27063);
});})(val_27063,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27065 = arguments.length;
switch (G__27065) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___27067 = n;
var x_27068 = (0);
while(true){
if((x_27068 < n__4376__auto___27067)){
(a[x_27068] = (0));

var G__27069 = (x_27068 + (1));
x_27068 = G__27069;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27070 = (i + (1));
i = G__27070;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27071 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27071 = (function (flag,meta27072){
this.flag = flag;
this.meta27072 = meta27072;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27073,meta27072__$1){
var self__ = this;
var _27073__$1 = this;
return (new cljs.core.async.t_cljs$core$async27071(self__.flag,meta27072__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27073){
var self__ = this;
var _27073__$1 = this;
return self__.meta27072;
});})(flag))
;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27071.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27071.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27072","meta27072",1308492625,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27071.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27071.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27071";

cljs.core.async.t_cljs$core$async27071.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27071");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27071.
 */
cljs.core.async.__GT_t_cljs$core$async27071 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27071(flag__$1,meta27072){
return (new cljs.core.async.t_cljs$core$async27071(flag__$1,meta27072));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27071(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27074 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27074 = (function (flag,cb,meta27075){
this.flag = flag;
this.cb = cb;
this.meta27075 = meta27075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27076,meta27075__$1){
var self__ = this;
var _27076__$1 = this;
return (new cljs.core.async.t_cljs$core$async27074(self__.flag,self__.cb,meta27075__$1));
});

cljs.core.async.t_cljs$core$async27074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27076){
var self__ = this;
var _27076__$1 = this;
return self__.meta27075;
});

cljs.core.async.t_cljs$core$async27074.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27074.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27074.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27074.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27075","meta27075",-131135048,null)], null);
});

cljs.core.async.t_cljs$core$async27074.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27074.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27074";

cljs.core.async.t_cljs$core$async27074.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27074");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27074.
 */
cljs.core.async.__GT_t_cljs$core$async27074 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27074(flag__$1,cb__$1,meta27075){
return (new cljs.core.async.t_cljs$core$async27074(flag__$1,cb__$1,meta27075));
});

}

return (new cljs.core.async.t_cljs$core$async27074(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27077_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27077_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27078_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27078_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27079 = (i + (1));
i = G__27079;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27085 = arguments.length;
var i__4500__auto___27086 = (0);
while(true){
if((i__4500__auto___27086 < len__4499__auto___27085)){
args__4502__auto__.push((arguments[i__4500__auto___27086]));

var G__27087 = (i__4500__auto___27086 + (1));
i__4500__auto___27086 = G__27087;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27082){
var map__27083 = p__27082;
var map__27083__$1 = ((((!((map__27083 == null)))?(((((map__27083.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27083.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27083):map__27083);
var opts = map__27083__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27080){
var G__27081 = cljs.core.first.call(null,seq27080);
var seq27080__$1 = cljs.core.next.call(null,seq27080);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27081,seq27080__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27089 = arguments.length;
switch (G__27089) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26988__auto___27135 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___27135){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___27135){
return (function (state_27113){
var state_val_27114 = (state_27113[(1)]);
if((state_val_27114 === (7))){
var inst_27109 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
var statearr_27115_27136 = state_27113__$1;
(statearr_27115_27136[(2)] = inst_27109);

(statearr_27115_27136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (1))){
var state_27113__$1 = state_27113;
var statearr_27116_27137 = state_27113__$1;
(statearr_27116_27137[(2)] = null);

(statearr_27116_27137[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (4))){
var inst_27092 = (state_27113[(7)]);
var inst_27092__$1 = (state_27113[(2)]);
var inst_27093 = (inst_27092__$1 == null);
var state_27113__$1 = (function (){var statearr_27117 = state_27113;
(statearr_27117[(7)] = inst_27092__$1);

return statearr_27117;
})();
if(cljs.core.truth_(inst_27093)){
var statearr_27118_27138 = state_27113__$1;
(statearr_27118_27138[(1)] = (5));

} else {
var statearr_27119_27139 = state_27113__$1;
(statearr_27119_27139[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (13))){
var state_27113__$1 = state_27113;
var statearr_27120_27140 = state_27113__$1;
(statearr_27120_27140[(2)] = null);

(statearr_27120_27140[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (6))){
var inst_27092 = (state_27113[(7)]);
var state_27113__$1 = state_27113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27113__$1,(11),to,inst_27092);
} else {
if((state_val_27114 === (3))){
var inst_27111 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27113__$1,inst_27111);
} else {
if((state_val_27114 === (12))){
var state_27113__$1 = state_27113;
var statearr_27121_27141 = state_27113__$1;
(statearr_27121_27141[(2)] = null);

(statearr_27121_27141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (2))){
var state_27113__$1 = state_27113;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27113__$1,(4),from);
} else {
if((state_val_27114 === (11))){
var inst_27102 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
if(cljs.core.truth_(inst_27102)){
var statearr_27122_27142 = state_27113__$1;
(statearr_27122_27142[(1)] = (12));

} else {
var statearr_27123_27143 = state_27113__$1;
(statearr_27123_27143[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (9))){
var state_27113__$1 = state_27113;
var statearr_27124_27144 = state_27113__$1;
(statearr_27124_27144[(2)] = null);

(statearr_27124_27144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (5))){
var state_27113__$1 = state_27113;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27125_27145 = state_27113__$1;
(statearr_27125_27145[(1)] = (8));

} else {
var statearr_27126_27146 = state_27113__$1;
(statearr_27126_27146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (14))){
var inst_27107 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
var statearr_27127_27147 = state_27113__$1;
(statearr_27127_27147[(2)] = inst_27107);

(statearr_27127_27147[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (10))){
var inst_27099 = (state_27113[(2)]);
var state_27113__$1 = state_27113;
var statearr_27128_27148 = state_27113__$1;
(statearr_27128_27148[(2)] = inst_27099);

(statearr_27128_27148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27114 === (8))){
var inst_27096 = cljs.core.async.close_BANG_.call(null,to);
var state_27113__$1 = state_27113;
var statearr_27129_27149 = state_27113__$1;
(statearr_27129_27149[(2)] = inst_27096);

(statearr_27129_27149[(1)] = (10));


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
});})(c__26988__auto___27135))
;
return ((function (switch__26898__auto__,c__26988__auto___27135){
return (function() {
var cljs$core$async$state_machine__26899__auto__ = null;
var cljs$core$async$state_machine__26899__auto____0 = (function (){
var statearr_27130 = [null,null,null,null,null,null,null,null];
(statearr_27130[(0)] = cljs$core$async$state_machine__26899__auto__);

(statearr_27130[(1)] = (1));

return statearr_27130;
});
var cljs$core$async$state_machine__26899__auto____1 = (function (state_27113){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_27113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e27131){if((e27131 instanceof Object)){
var ex__26902__auto__ = e27131;
var statearr_27132_27150 = state_27113;
(statearr_27132_27150[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27151 = state_27113;
state_27113 = G__27151;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$state_machine__26899__auto__ = function(state_27113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26899__auto____1.call(this,state_27113);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26899__auto____0;
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26899__auto____1;
return cljs$core$async$state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___27135))
})();
var state__26990__auto__ = (function (){var statearr_27133 = f__26989__auto__.call(null);
(statearr_27133[(6)] = c__26988__auto___27135);

return statearr_27133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___27135))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__27152){
var vec__27153 = p__27152;
var v = cljs.core.nth.call(null,vec__27153,(0),null);
var p = cljs.core.nth.call(null,vec__27153,(1),null);
var job = vec__27153;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26988__auto___27324 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___27324,res,vec__27153,v,p,job,jobs,results){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___27324,res,vec__27153,v,p,job,jobs,results){
return (function (state_27160){
var state_val_27161 = (state_27160[(1)]);
if((state_val_27161 === (1))){
var state_27160__$1 = state_27160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27160__$1,(2),res,v);
} else {
if((state_val_27161 === (2))){
var inst_27157 = (state_27160[(2)]);
var inst_27158 = cljs.core.async.close_BANG_.call(null,res);
var state_27160__$1 = (function (){var statearr_27162 = state_27160;
(statearr_27162[(7)] = inst_27157);

return statearr_27162;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27160__$1,inst_27158);
} else {
return null;
}
}
});})(c__26988__auto___27324,res,vec__27153,v,p,job,jobs,results))
;
return ((function (switch__26898__auto__,c__26988__auto___27324,res,vec__27153,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____0 = (function (){
var statearr_27163 = [null,null,null,null,null,null,null,null];
(statearr_27163[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__);

(statearr_27163[(1)] = (1));

return statearr_27163;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____1 = (function (state_27160){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_27160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e27164){if((e27164 instanceof Object)){
var ex__26902__auto__ = e27164;
var statearr_27165_27325 = state_27160;
(statearr_27165_27325[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27326 = state_27160;
state_27160 = G__27326;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__ = function(state_27160){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____1.call(this,state_27160);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___27324,res,vec__27153,v,p,job,jobs,results))
})();
var state__26990__auto__ = (function (){var statearr_27166 = f__26989__auto__.call(null);
(statearr_27166[(6)] = c__26988__auto___27324);

return statearr_27166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___27324,res,vec__27153,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__27167){
var vec__27168 = p__27167;
var v = cljs.core.nth.call(null,vec__27168,(0),null);
var p = cljs.core.nth.call(null,vec__27168,(1),null);
var job = vec__27168;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___27327 = n;
var __27328 = (0);
while(true){
if((__27328 < n__4376__auto___27327)){
var G__27171_27329 = type;
var G__27171_27330__$1 = (((G__27171_27329 instanceof cljs.core.Keyword))?G__27171_27329.fqn:null);
switch (G__27171_27330__$1) {
case "compute":
var c__26988__auto___27332 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27328,c__26988__auto___27332,G__27171_27329,G__27171_27330__$1,n__4376__auto___27327,jobs,results,process,async){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (__27328,c__26988__auto___27332,G__27171_27329,G__27171_27330__$1,n__4376__auto___27327,jobs,results,process,async){
return (function (state_27184){
var state_val_27185 = (state_27184[(1)]);
if((state_val_27185 === (1))){
var state_27184__$1 = state_27184;
var statearr_27186_27333 = state_27184__$1;
(statearr_27186_27333[(2)] = null);

(statearr_27186_27333[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (2))){
var state_27184__$1 = state_27184;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27184__$1,(4),jobs);
} else {
if((state_val_27185 === (3))){
var inst_27182 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27184__$1,inst_27182);
} else {
if((state_val_27185 === (4))){
var inst_27174 = (state_27184[(2)]);
var inst_27175 = process.call(null,inst_27174);
var state_27184__$1 = state_27184;
if(cljs.core.truth_(inst_27175)){
var statearr_27187_27334 = state_27184__$1;
(statearr_27187_27334[(1)] = (5));

} else {
var statearr_27188_27335 = state_27184__$1;
(statearr_27188_27335[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (5))){
var state_27184__$1 = state_27184;
var statearr_27189_27336 = state_27184__$1;
(statearr_27189_27336[(2)] = null);

(statearr_27189_27336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (6))){
var state_27184__$1 = state_27184;
var statearr_27190_27337 = state_27184__$1;
(statearr_27190_27337[(2)] = null);

(statearr_27190_27337[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27185 === (7))){
var inst_27180 = (state_27184[(2)]);
var state_27184__$1 = state_27184;
var statearr_27191_27338 = state_27184__$1;
(statearr_27191_27338[(2)] = inst_27180);

(statearr_27191_27338[(1)] = (3));


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
});})(__27328,c__26988__auto___27332,G__27171_27329,G__27171_27330__$1,n__4376__auto___27327,jobs,results,process,async))
;
return ((function (__27328,switch__26898__auto__,c__26988__auto___27332,G__27171_27329,G__27171_27330__$1,n__4376__auto___27327,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____0 = (function (){
var statearr_27192 = [null,null,null,null,null,null,null];
(statearr_27192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__);

(statearr_27192[(1)] = (1));

return statearr_27192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____1 = (function (state_27184){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_27184);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e27193){if((e27193 instanceof Object)){
var ex__26902__auto__ = e27193;
var statearr_27194_27339 = state_27184;
(statearr_27194_27339[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27184);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27340 = state_27184;
state_27184 = G__27340;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__ = function(state_27184){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____1.call(this,state_27184);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__;
})()
;})(__27328,switch__26898__auto__,c__26988__auto___27332,G__27171_27329,G__27171_27330__$1,n__4376__auto___27327,jobs,results,process,async))
})();
var state__26990__auto__ = (function (){var statearr_27195 = f__26989__auto__.call(null);
(statearr_27195[(6)] = c__26988__auto___27332);

return statearr_27195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(__27328,c__26988__auto___27332,G__27171_27329,G__27171_27330__$1,n__4376__auto___27327,jobs,results,process,async))
);


break;
case "async":
var c__26988__auto___27341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27328,c__26988__auto___27341,G__27171_27329,G__27171_27330__$1,n__4376__auto___27327,jobs,results,process,async){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (__27328,c__26988__auto___27341,G__27171_27329,G__27171_27330__$1,n__4376__auto___27327,jobs,results,process,async){
return (function (state_27208){
var state_val_27209 = (state_27208[(1)]);
if((state_val_27209 === (1))){
var state_27208__$1 = state_27208;
var statearr_27210_27342 = state_27208__$1;
(statearr_27210_27342[(2)] = null);

(statearr_27210_27342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (2))){
var state_27208__$1 = state_27208;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27208__$1,(4),jobs);
} else {
if((state_val_27209 === (3))){
var inst_27206 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27208__$1,inst_27206);
} else {
if((state_val_27209 === (4))){
var inst_27198 = (state_27208[(2)]);
var inst_27199 = async.call(null,inst_27198);
var state_27208__$1 = state_27208;
if(cljs.core.truth_(inst_27199)){
var statearr_27211_27343 = state_27208__$1;
(statearr_27211_27343[(1)] = (5));

} else {
var statearr_27212_27344 = state_27208__$1;
(statearr_27212_27344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (5))){
var state_27208__$1 = state_27208;
var statearr_27213_27345 = state_27208__$1;
(statearr_27213_27345[(2)] = null);

(statearr_27213_27345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (6))){
var state_27208__$1 = state_27208;
var statearr_27214_27346 = state_27208__$1;
(statearr_27214_27346[(2)] = null);

(statearr_27214_27346[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27209 === (7))){
var inst_27204 = (state_27208[(2)]);
var state_27208__$1 = state_27208;
var statearr_27215_27347 = state_27208__$1;
(statearr_27215_27347[(2)] = inst_27204);

(statearr_27215_27347[(1)] = (3));


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
});})(__27328,c__26988__auto___27341,G__27171_27329,G__27171_27330__$1,n__4376__auto___27327,jobs,results,process,async))
;
return ((function (__27328,switch__26898__auto__,c__26988__auto___27341,G__27171_27329,G__27171_27330__$1,n__4376__auto___27327,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____0 = (function (){
var statearr_27216 = [null,null,null,null,null,null,null];
(statearr_27216[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__);

(statearr_27216[(1)] = (1));

return statearr_27216;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____1 = (function (state_27208){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_27208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e27217){if((e27217 instanceof Object)){
var ex__26902__auto__ = e27217;
var statearr_27218_27348 = state_27208;
(statearr_27218_27348[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27349 = state_27208;
state_27208 = G__27349;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__ = function(state_27208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____1.call(this,state_27208);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__;
})()
;})(__27328,switch__26898__auto__,c__26988__auto___27341,G__27171_27329,G__27171_27330__$1,n__4376__auto___27327,jobs,results,process,async))
})();
var state__26990__auto__ = (function (){var statearr_27219 = f__26989__auto__.call(null);
(statearr_27219[(6)] = c__26988__auto___27341);

return statearr_27219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(__27328,c__26988__auto___27341,G__27171_27329,G__27171_27330__$1,n__4376__auto___27327,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27171_27330__$1)].join('')));

}

var G__27350 = (__27328 + (1));
__27328 = G__27350;
continue;
} else {
}
break;
}

var c__26988__auto___27351 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___27351,jobs,results,process,async){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___27351,jobs,results,process,async){
return (function (state_27241){
var state_val_27242 = (state_27241[(1)]);
if((state_val_27242 === (1))){
var state_27241__$1 = state_27241;
var statearr_27243_27352 = state_27241__$1;
(statearr_27243_27352[(2)] = null);

(statearr_27243_27352[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (2))){
var state_27241__$1 = state_27241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27241__$1,(4),from);
} else {
if((state_val_27242 === (3))){
var inst_27239 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27241__$1,inst_27239);
} else {
if((state_val_27242 === (4))){
var inst_27222 = (state_27241[(7)]);
var inst_27222__$1 = (state_27241[(2)]);
var inst_27223 = (inst_27222__$1 == null);
var state_27241__$1 = (function (){var statearr_27244 = state_27241;
(statearr_27244[(7)] = inst_27222__$1);

return statearr_27244;
})();
if(cljs.core.truth_(inst_27223)){
var statearr_27245_27353 = state_27241__$1;
(statearr_27245_27353[(1)] = (5));

} else {
var statearr_27246_27354 = state_27241__$1;
(statearr_27246_27354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (5))){
var inst_27225 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27241__$1 = state_27241;
var statearr_27247_27355 = state_27241__$1;
(statearr_27247_27355[(2)] = inst_27225);

(statearr_27247_27355[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (6))){
var inst_27227 = (state_27241[(8)]);
var inst_27222 = (state_27241[(7)]);
var inst_27227__$1 = cljs.core.async.chan.call(null,(1));
var inst_27228 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27229 = [inst_27222,inst_27227__$1];
var inst_27230 = (new cljs.core.PersistentVector(null,2,(5),inst_27228,inst_27229,null));
var state_27241__$1 = (function (){var statearr_27248 = state_27241;
(statearr_27248[(8)] = inst_27227__$1);

return statearr_27248;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27241__$1,(8),jobs,inst_27230);
} else {
if((state_val_27242 === (7))){
var inst_27237 = (state_27241[(2)]);
var state_27241__$1 = state_27241;
var statearr_27249_27356 = state_27241__$1;
(statearr_27249_27356[(2)] = inst_27237);

(statearr_27249_27356[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27242 === (8))){
var inst_27227 = (state_27241[(8)]);
var inst_27232 = (state_27241[(2)]);
var state_27241__$1 = (function (){var statearr_27250 = state_27241;
(statearr_27250[(9)] = inst_27232);

return statearr_27250;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27241__$1,(9),results,inst_27227);
} else {
if((state_val_27242 === (9))){
var inst_27234 = (state_27241[(2)]);
var state_27241__$1 = (function (){var statearr_27251 = state_27241;
(statearr_27251[(10)] = inst_27234);

return statearr_27251;
})();
var statearr_27252_27357 = state_27241__$1;
(statearr_27252_27357[(2)] = null);

(statearr_27252_27357[(1)] = (2));


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
});})(c__26988__auto___27351,jobs,results,process,async))
;
return ((function (switch__26898__auto__,c__26988__auto___27351,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____0 = (function (){
var statearr_27253 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27253[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__);

(statearr_27253[(1)] = (1));

return statearr_27253;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____1 = (function (state_27241){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_27241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e27254){if((e27254 instanceof Object)){
var ex__26902__auto__ = e27254;
var statearr_27255_27358 = state_27241;
(statearr_27255_27358[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27359 = state_27241;
state_27241 = G__27359;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__ = function(state_27241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____1.call(this,state_27241);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___27351,jobs,results,process,async))
})();
var state__26990__auto__ = (function (){var statearr_27256 = f__26989__auto__.call(null);
(statearr_27256[(6)] = c__26988__auto___27351);

return statearr_27256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___27351,jobs,results,process,async))
);


var c__26988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto__,jobs,results,process,async){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto__,jobs,results,process,async){
return (function (state_27294){
var state_val_27295 = (state_27294[(1)]);
if((state_val_27295 === (7))){
var inst_27290 = (state_27294[(2)]);
var state_27294__$1 = state_27294;
var statearr_27296_27360 = state_27294__$1;
(statearr_27296_27360[(2)] = inst_27290);

(statearr_27296_27360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (20))){
var state_27294__$1 = state_27294;
var statearr_27297_27361 = state_27294__$1;
(statearr_27297_27361[(2)] = null);

(statearr_27297_27361[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (1))){
var state_27294__$1 = state_27294;
var statearr_27298_27362 = state_27294__$1;
(statearr_27298_27362[(2)] = null);

(statearr_27298_27362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (4))){
var inst_27259 = (state_27294[(7)]);
var inst_27259__$1 = (state_27294[(2)]);
var inst_27260 = (inst_27259__$1 == null);
var state_27294__$1 = (function (){var statearr_27299 = state_27294;
(statearr_27299[(7)] = inst_27259__$1);

return statearr_27299;
})();
if(cljs.core.truth_(inst_27260)){
var statearr_27300_27363 = state_27294__$1;
(statearr_27300_27363[(1)] = (5));

} else {
var statearr_27301_27364 = state_27294__$1;
(statearr_27301_27364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (15))){
var inst_27272 = (state_27294[(8)]);
var state_27294__$1 = state_27294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27294__$1,(18),to,inst_27272);
} else {
if((state_val_27295 === (21))){
var inst_27285 = (state_27294[(2)]);
var state_27294__$1 = state_27294;
var statearr_27302_27365 = state_27294__$1;
(statearr_27302_27365[(2)] = inst_27285);

(statearr_27302_27365[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (13))){
var inst_27287 = (state_27294[(2)]);
var state_27294__$1 = (function (){var statearr_27303 = state_27294;
(statearr_27303[(9)] = inst_27287);

return statearr_27303;
})();
var statearr_27304_27366 = state_27294__$1;
(statearr_27304_27366[(2)] = null);

(statearr_27304_27366[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (6))){
var inst_27259 = (state_27294[(7)]);
var state_27294__$1 = state_27294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27294__$1,(11),inst_27259);
} else {
if((state_val_27295 === (17))){
var inst_27280 = (state_27294[(2)]);
var state_27294__$1 = state_27294;
if(cljs.core.truth_(inst_27280)){
var statearr_27305_27367 = state_27294__$1;
(statearr_27305_27367[(1)] = (19));

} else {
var statearr_27306_27368 = state_27294__$1;
(statearr_27306_27368[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (3))){
var inst_27292 = (state_27294[(2)]);
var state_27294__$1 = state_27294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27294__$1,inst_27292);
} else {
if((state_val_27295 === (12))){
var inst_27269 = (state_27294[(10)]);
var state_27294__$1 = state_27294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27294__$1,(14),inst_27269);
} else {
if((state_val_27295 === (2))){
var state_27294__$1 = state_27294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27294__$1,(4),results);
} else {
if((state_val_27295 === (19))){
var state_27294__$1 = state_27294;
var statearr_27307_27369 = state_27294__$1;
(statearr_27307_27369[(2)] = null);

(statearr_27307_27369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (11))){
var inst_27269 = (state_27294[(2)]);
var state_27294__$1 = (function (){var statearr_27308 = state_27294;
(statearr_27308[(10)] = inst_27269);

return statearr_27308;
})();
var statearr_27309_27370 = state_27294__$1;
(statearr_27309_27370[(2)] = null);

(statearr_27309_27370[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (9))){
var state_27294__$1 = state_27294;
var statearr_27310_27371 = state_27294__$1;
(statearr_27310_27371[(2)] = null);

(statearr_27310_27371[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (5))){
var state_27294__$1 = state_27294;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27311_27372 = state_27294__$1;
(statearr_27311_27372[(1)] = (8));

} else {
var statearr_27312_27373 = state_27294__$1;
(statearr_27312_27373[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (14))){
var inst_27272 = (state_27294[(8)]);
var inst_27274 = (state_27294[(11)]);
var inst_27272__$1 = (state_27294[(2)]);
var inst_27273 = (inst_27272__$1 == null);
var inst_27274__$1 = cljs.core.not.call(null,inst_27273);
var state_27294__$1 = (function (){var statearr_27313 = state_27294;
(statearr_27313[(8)] = inst_27272__$1);

(statearr_27313[(11)] = inst_27274__$1);

return statearr_27313;
})();
if(inst_27274__$1){
var statearr_27314_27374 = state_27294__$1;
(statearr_27314_27374[(1)] = (15));

} else {
var statearr_27315_27375 = state_27294__$1;
(statearr_27315_27375[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (16))){
var inst_27274 = (state_27294[(11)]);
var state_27294__$1 = state_27294;
var statearr_27316_27376 = state_27294__$1;
(statearr_27316_27376[(2)] = inst_27274);

(statearr_27316_27376[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (10))){
var inst_27266 = (state_27294[(2)]);
var state_27294__$1 = state_27294;
var statearr_27317_27377 = state_27294__$1;
(statearr_27317_27377[(2)] = inst_27266);

(statearr_27317_27377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (18))){
var inst_27277 = (state_27294[(2)]);
var state_27294__$1 = state_27294;
var statearr_27318_27378 = state_27294__$1;
(statearr_27318_27378[(2)] = inst_27277);

(statearr_27318_27378[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27295 === (8))){
var inst_27263 = cljs.core.async.close_BANG_.call(null,to);
var state_27294__$1 = state_27294;
var statearr_27319_27379 = state_27294__$1;
(statearr_27319_27379[(2)] = inst_27263);

(statearr_27319_27379[(1)] = (10));


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
});})(c__26988__auto__,jobs,results,process,async))
;
return ((function (switch__26898__auto__,c__26988__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____0 = (function (){
var statearr_27320 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27320[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__);

(statearr_27320[(1)] = (1));

return statearr_27320;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____1 = (function (state_27294){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_27294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e27321){if((e27321 instanceof Object)){
var ex__26902__auto__ = e27321;
var statearr_27322_27380 = state_27294;
(statearr_27322_27380[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27321;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27381 = state_27294;
state_27294 = G__27381;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__ = function(state_27294){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____1.call(this,state_27294);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26899__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto__,jobs,results,process,async))
})();
var state__26990__auto__ = (function (){var statearr_27323 = f__26989__auto__.call(null);
(statearr_27323[(6)] = c__26988__auto__);

return statearr_27323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto__,jobs,results,process,async))
);

return c__26988__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27383 = arguments.length;
switch (G__27383) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27386 = arguments.length;
switch (G__27386) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27389 = arguments.length;
switch (G__27389) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26988__auto___27438 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___27438,tc,fc){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___27438,tc,fc){
return (function (state_27415){
var state_val_27416 = (state_27415[(1)]);
if((state_val_27416 === (7))){
var inst_27411 = (state_27415[(2)]);
var state_27415__$1 = state_27415;
var statearr_27417_27439 = state_27415__$1;
(statearr_27417_27439[(2)] = inst_27411);

(statearr_27417_27439[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (1))){
var state_27415__$1 = state_27415;
var statearr_27418_27440 = state_27415__$1;
(statearr_27418_27440[(2)] = null);

(statearr_27418_27440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (4))){
var inst_27392 = (state_27415[(7)]);
var inst_27392__$1 = (state_27415[(2)]);
var inst_27393 = (inst_27392__$1 == null);
var state_27415__$1 = (function (){var statearr_27419 = state_27415;
(statearr_27419[(7)] = inst_27392__$1);

return statearr_27419;
})();
if(cljs.core.truth_(inst_27393)){
var statearr_27420_27441 = state_27415__$1;
(statearr_27420_27441[(1)] = (5));

} else {
var statearr_27421_27442 = state_27415__$1;
(statearr_27421_27442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (13))){
var state_27415__$1 = state_27415;
var statearr_27422_27443 = state_27415__$1;
(statearr_27422_27443[(2)] = null);

(statearr_27422_27443[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (6))){
var inst_27392 = (state_27415[(7)]);
var inst_27398 = p.call(null,inst_27392);
var state_27415__$1 = state_27415;
if(cljs.core.truth_(inst_27398)){
var statearr_27423_27444 = state_27415__$1;
(statearr_27423_27444[(1)] = (9));

} else {
var statearr_27424_27445 = state_27415__$1;
(statearr_27424_27445[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (3))){
var inst_27413 = (state_27415[(2)]);
var state_27415__$1 = state_27415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27415__$1,inst_27413);
} else {
if((state_val_27416 === (12))){
var state_27415__$1 = state_27415;
var statearr_27425_27446 = state_27415__$1;
(statearr_27425_27446[(2)] = null);

(statearr_27425_27446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (2))){
var state_27415__$1 = state_27415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27415__$1,(4),ch);
} else {
if((state_val_27416 === (11))){
var inst_27392 = (state_27415[(7)]);
var inst_27402 = (state_27415[(2)]);
var state_27415__$1 = state_27415;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27415__$1,(8),inst_27402,inst_27392);
} else {
if((state_val_27416 === (9))){
var state_27415__$1 = state_27415;
var statearr_27426_27447 = state_27415__$1;
(statearr_27426_27447[(2)] = tc);

(statearr_27426_27447[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (5))){
var inst_27395 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27396 = cljs.core.async.close_BANG_.call(null,fc);
var state_27415__$1 = (function (){var statearr_27427 = state_27415;
(statearr_27427[(8)] = inst_27395);

return statearr_27427;
})();
var statearr_27428_27448 = state_27415__$1;
(statearr_27428_27448[(2)] = inst_27396);

(statearr_27428_27448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (14))){
var inst_27409 = (state_27415[(2)]);
var state_27415__$1 = state_27415;
var statearr_27429_27449 = state_27415__$1;
(statearr_27429_27449[(2)] = inst_27409);

(statearr_27429_27449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (10))){
var state_27415__$1 = state_27415;
var statearr_27430_27450 = state_27415__$1;
(statearr_27430_27450[(2)] = fc);

(statearr_27430_27450[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27416 === (8))){
var inst_27404 = (state_27415[(2)]);
var state_27415__$1 = state_27415;
if(cljs.core.truth_(inst_27404)){
var statearr_27431_27451 = state_27415__$1;
(statearr_27431_27451[(1)] = (12));

} else {
var statearr_27432_27452 = state_27415__$1;
(statearr_27432_27452[(1)] = (13));

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
});})(c__26988__auto___27438,tc,fc))
;
return ((function (switch__26898__auto__,c__26988__auto___27438,tc,fc){
return (function() {
var cljs$core$async$state_machine__26899__auto__ = null;
var cljs$core$async$state_machine__26899__auto____0 = (function (){
var statearr_27433 = [null,null,null,null,null,null,null,null,null];
(statearr_27433[(0)] = cljs$core$async$state_machine__26899__auto__);

(statearr_27433[(1)] = (1));

return statearr_27433;
});
var cljs$core$async$state_machine__26899__auto____1 = (function (state_27415){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_27415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e27434){if((e27434 instanceof Object)){
var ex__26902__auto__ = e27434;
var statearr_27435_27453 = state_27415;
(statearr_27435_27453[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27434;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27454 = state_27415;
state_27415 = G__27454;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$state_machine__26899__auto__ = function(state_27415){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26899__auto____1.call(this,state_27415);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26899__auto____0;
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26899__auto____1;
return cljs$core$async$state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___27438,tc,fc))
})();
var state__26990__auto__ = (function (){var statearr_27436 = f__26989__auto__.call(null);
(statearr_27436[(6)] = c__26988__auto___27438);

return statearr_27436;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___27438,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto__){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto__){
return (function (state_27475){
var state_val_27476 = (state_27475[(1)]);
if((state_val_27476 === (7))){
var inst_27471 = (state_27475[(2)]);
var state_27475__$1 = state_27475;
var statearr_27477_27495 = state_27475__$1;
(statearr_27477_27495[(2)] = inst_27471);

(statearr_27477_27495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (1))){
var inst_27455 = init;
var state_27475__$1 = (function (){var statearr_27478 = state_27475;
(statearr_27478[(7)] = inst_27455);

return statearr_27478;
})();
var statearr_27479_27496 = state_27475__$1;
(statearr_27479_27496[(2)] = null);

(statearr_27479_27496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (4))){
var inst_27458 = (state_27475[(8)]);
var inst_27458__$1 = (state_27475[(2)]);
var inst_27459 = (inst_27458__$1 == null);
var state_27475__$1 = (function (){var statearr_27480 = state_27475;
(statearr_27480[(8)] = inst_27458__$1);

return statearr_27480;
})();
if(cljs.core.truth_(inst_27459)){
var statearr_27481_27497 = state_27475__$1;
(statearr_27481_27497[(1)] = (5));

} else {
var statearr_27482_27498 = state_27475__$1;
(statearr_27482_27498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (6))){
var inst_27455 = (state_27475[(7)]);
var inst_27458 = (state_27475[(8)]);
var inst_27462 = (state_27475[(9)]);
var inst_27462__$1 = f.call(null,inst_27455,inst_27458);
var inst_27463 = cljs.core.reduced_QMARK_.call(null,inst_27462__$1);
var state_27475__$1 = (function (){var statearr_27483 = state_27475;
(statearr_27483[(9)] = inst_27462__$1);

return statearr_27483;
})();
if(inst_27463){
var statearr_27484_27499 = state_27475__$1;
(statearr_27484_27499[(1)] = (8));

} else {
var statearr_27485_27500 = state_27475__$1;
(statearr_27485_27500[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (3))){
var inst_27473 = (state_27475[(2)]);
var state_27475__$1 = state_27475;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27475__$1,inst_27473);
} else {
if((state_val_27476 === (2))){
var state_27475__$1 = state_27475;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27475__$1,(4),ch);
} else {
if((state_val_27476 === (9))){
var inst_27462 = (state_27475[(9)]);
var inst_27455 = inst_27462;
var state_27475__$1 = (function (){var statearr_27486 = state_27475;
(statearr_27486[(7)] = inst_27455);

return statearr_27486;
})();
var statearr_27487_27501 = state_27475__$1;
(statearr_27487_27501[(2)] = null);

(statearr_27487_27501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (5))){
var inst_27455 = (state_27475[(7)]);
var state_27475__$1 = state_27475;
var statearr_27488_27502 = state_27475__$1;
(statearr_27488_27502[(2)] = inst_27455);

(statearr_27488_27502[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (10))){
var inst_27469 = (state_27475[(2)]);
var state_27475__$1 = state_27475;
var statearr_27489_27503 = state_27475__$1;
(statearr_27489_27503[(2)] = inst_27469);

(statearr_27489_27503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27476 === (8))){
var inst_27462 = (state_27475[(9)]);
var inst_27465 = cljs.core.deref.call(null,inst_27462);
var state_27475__$1 = state_27475;
var statearr_27490_27504 = state_27475__$1;
(statearr_27490_27504[(2)] = inst_27465);

(statearr_27490_27504[(1)] = (10));


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
});})(c__26988__auto__))
;
return ((function (switch__26898__auto__,c__26988__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__26899__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26899__auto____0 = (function (){
var statearr_27491 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27491[(0)] = cljs$core$async$reduce_$_state_machine__26899__auto__);

(statearr_27491[(1)] = (1));

return statearr_27491;
});
var cljs$core$async$reduce_$_state_machine__26899__auto____1 = (function (state_27475){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_27475);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e27492){if((e27492 instanceof Object)){
var ex__26902__auto__ = e27492;
var statearr_27493_27505 = state_27475;
(statearr_27493_27505[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27492;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27506 = state_27475;
state_27475 = G__27506;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26899__auto__ = function(state_27475){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26899__auto____1.call(this,state_27475);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26899__auto____0;
cljs$core$async$reduce_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26899__auto____1;
return cljs$core$async$reduce_$_state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto__))
})();
var state__26990__auto__ = (function (){var statearr_27494 = f__26989__auto__.call(null);
(statearr_27494[(6)] = c__26988__auto__);

return statearr_27494;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto__))
);

return c__26988__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto__,f__$1){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto__,f__$1){
return (function (state_27512){
var state_val_27513 = (state_27512[(1)]);
if((state_val_27513 === (1))){
var inst_27507 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27512__$1 = state_27512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27512__$1,(2),inst_27507);
} else {
if((state_val_27513 === (2))){
var inst_27509 = (state_27512[(2)]);
var inst_27510 = f__$1.call(null,inst_27509);
var state_27512__$1 = state_27512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27512__$1,inst_27510);
} else {
return null;
}
}
});})(c__26988__auto__,f__$1))
;
return ((function (switch__26898__auto__,c__26988__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__26899__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26899__auto____0 = (function (){
var statearr_27514 = [null,null,null,null,null,null,null];
(statearr_27514[(0)] = cljs$core$async$transduce_$_state_machine__26899__auto__);

(statearr_27514[(1)] = (1));

return statearr_27514;
});
var cljs$core$async$transduce_$_state_machine__26899__auto____1 = (function (state_27512){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_27512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e27515){if((e27515 instanceof Object)){
var ex__26902__auto__ = e27515;
var statearr_27516_27518 = state_27512;
(statearr_27516_27518[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27519 = state_27512;
state_27512 = G__27519;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26899__auto__ = function(state_27512){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26899__auto____1.call(this,state_27512);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26899__auto____0;
cljs$core$async$transduce_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26899__auto____1;
return cljs$core$async$transduce_$_state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto__,f__$1))
})();
var state__26990__auto__ = (function (){var statearr_27517 = f__26989__auto__.call(null);
(statearr_27517[(6)] = c__26988__auto__);

return statearr_27517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto__,f__$1))
);

return c__26988__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27521 = arguments.length;
switch (G__27521) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto__){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto__){
return (function (state_27546){
var state_val_27547 = (state_27546[(1)]);
if((state_val_27547 === (7))){
var inst_27528 = (state_27546[(2)]);
var state_27546__$1 = state_27546;
var statearr_27548_27569 = state_27546__$1;
(statearr_27548_27569[(2)] = inst_27528);

(statearr_27548_27569[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27547 === (1))){
var inst_27522 = cljs.core.seq.call(null,coll);
var inst_27523 = inst_27522;
var state_27546__$1 = (function (){var statearr_27549 = state_27546;
(statearr_27549[(7)] = inst_27523);

return statearr_27549;
})();
var statearr_27550_27570 = state_27546__$1;
(statearr_27550_27570[(2)] = null);

(statearr_27550_27570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27547 === (4))){
var inst_27523 = (state_27546[(7)]);
var inst_27526 = cljs.core.first.call(null,inst_27523);
var state_27546__$1 = state_27546;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27546__$1,(7),ch,inst_27526);
} else {
if((state_val_27547 === (13))){
var inst_27540 = (state_27546[(2)]);
var state_27546__$1 = state_27546;
var statearr_27551_27571 = state_27546__$1;
(statearr_27551_27571[(2)] = inst_27540);

(statearr_27551_27571[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27547 === (6))){
var inst_27531 = (state_27546[(2)]);
var state_27546__$1 = state_27546;
if(cljs.core.truth_(inst_27531)){
var statearr_27552_27572 = state_27546__$1;
(statearr_27552_27572[(1)] = (8));

} else {
var statearr_27553_27573 = state_27546__$1;
(statearr_27553_27573[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27547 === (3))){
var inst_27544 = (state_27546[(2)]);
var state_27546__$1 = state_27546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27546__$1,inst_27544);
} else {
if((state_val_27547 === (12))){
var state_27546__$1 = state_27546;
var statearr_27554_27574 = state_27546__$1;
(statearr_27554_27574[(2)] = null);

(statearr_27554_27574[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27547 === (2))){
var inst_27523 = (state_27546[(7)]);
var state_27546__$1 = state_27546;
if(cljs.core.truth_(inst_27523)){
var statearr_27555_27575 = state_27546__$1;
(statearr_27555_27575[(1)] = (4));

} else {
var statearr_27556_27576 = state_27546__$1;
(statearr_27556_27576[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27547 === (11))){
var inst_27537 = cljs.core.async.close_BANG_.call(null,ch);
var state_27546__$1 = state_27546;
var statearr_27557_27577 = state_27546__$1;
(statearr_27557_27577[(2)] = inst_27537);

(statearr_27557_27577[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27547 === (9))){
var state_27546__$1 = state_27546;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27558_27578 = state_27546__$1;
(statearr_27558_27578[(1)] = (11));

} else {
var statearr_27559_27579 = state_27546__$1;
(statearr_27559_27579[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27547 === (5))){
var inst_27523 = (state_27546[(7)]);
var state_27546__$1 = state_27546;
var statearr_27560_27580 = state_27546__$1;
(statearr_27560_27580[(2)] = inst_27523);

(statearr_27560_27580[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27547 === (10))){
var inst_27542 = (state_27546[(2)]);
var state_27546__$1 = state_27546;
var statearr_27561_27581 = state_27546__$1;
(statearr_27561_27581[(2)] = inst_27542);

(statearr_27561_27581[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27547 === (8))){
var inst_27523 = (state_27546[(7)]);
var inst_27533 = cljs.core.next.call(null,inst_27523);
var inst_27523__$1 = inst_27533;
var state_27546__$1 = (function (){var statearr_27562 = state_27546;
(statearr_27562[(7)] = inst_27523__$1);

return statearr_27562;
})();
var statearr_27563_27582 = state_27546__$1;
(statearr_27563_27582[(2)] = null);

(statearr_27563_27582[(1)] = (2));


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
});})(c__26988__auto__))
;
return ((function (switch__26898__auto__,c__26988__auto__){
return (function() {
var cljs$core$async$state_machine__26899__auto__ = null;
var cljs$core$async$state_machine__26899__auto____0 = (function (){
var statearr_27564 = [null,null,null,null,null,null,null,null];
(statearr_27564[(0)] = cljs$core$async$state_machine__26899__auto__);

(statearr_27564[(1)] = (1));

return statearr_27564;
});
var cljs$core$async$state_machine__26899__auto____1 = (function (state_27546){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_27546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e27565){if((e27565 instanceof Object)){
var ex__26902__auto__ = e27565;
var statearr_27566_27583 = state_27546;
(statearr_27566_27583[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27584 = state_27546;
state_27546 = G__27584;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$state_machine__26899__auto__ = function(state_27546){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26899__auto____1.call(this,state_27546);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26899__auto____0;
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26899__auto____1;
return cljs$core$async$state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto__))
})();
var state__26990__auto__ = (function (){var statearr_27567 = f__26989__auto__.call(null);
(statearr_27567[(6)] = c__26988__auto__);

return statearr_27567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto__))
);

return c__26988__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27585 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27585 = (function (ch,cs,meta27586){
this.ch = ch;
this.cs = cs;
this.meta27586 = meta27586;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27587,meta27586__$1){
var self__ = this;
var _27587__$1 = this;
return (new cljs.core.async.t_cljs$core$async27585(self__.ch,self__.cs,meta27586__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27585.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27587){
var self__ = this;
var _27587__$1 = this;
return self__.meta27586;
});})(cs))
;

cljs.core.async.t_cljs$core$async27585.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27585.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27585.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27585.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27585.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27585.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27585.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27586","meta27586",1898717777,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27585.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27585.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27585";

cljs.core.async.t_cljs$core$async27585.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27585");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27585.
 */
cljs.core.async.__GT_t_cljs$core$async27585 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27585(ch__$1,cs__$1,meta27586){
return (new cljs.core.async.t_cljs$core$async27585(ch__$1,cs__$1,meta27586));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27585(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26988__auto___27807 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___27807,cs,m,dchan,dctr,done){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___27807,cs,m,dchan,dctr,done){
return (function (state_27722){
var state_val_27723 = (state_27722[(1)]);
if((state_val_27723 === (7))){
var inst_27718 = (state_27722[(2)]);
var state_27722__$1 = state_27722;
var statearr_27724_27808 = state_27722__$1;
(statearr_27724_27808[(2)] = inst_27718);

(statearr_27724_27808[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (20))){
var inst_27621 = (state_27722[(7)]);
var inst_27633 = cljs.core.first.call(null,inst_27621);
var inst_27634 = cljs.core.nth.call(null,inst_27633,(0),null);
var inst_27635 = cljs.core.nth.call(null,inst_27633,(1),null);
var state_27722__$1 = (function (){var statearr_27725 = state_27722;
(statearr_27725[(8)] = inst_27634);

return statearr_27725;
})();
if(cljs.core.truth_(inst_27635)){
var statearr_27726_27809 = state_27722__$1;
(statearr_27726_27809[(1)] = (22));

} else {
var statearr_27727_27810 = state_27722__$1;
(statearr_27727_27810[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (27))){
var inst_27590 = (state_27722[(9)]);
var inst_27663 = (state_27722[(10)]);
var inst_27665 = (state_27722[(11)]);
var inst_27670 = (state_27722[(12)]);
var inst_27670__$1 = cljs.core._nth.call(null,inst_27663,inst_27665);
var inst_27671 = cljs.core.async.put_BANG_.call(null,inst_27670__$1,inst_27590,done);
var state_27722__$1 = (function (){var statearr_27728 = state_27722;
(statearr_27728[(12)] = inst_27670__$1);

return statearr_27728;
})();
if(cljs.core.truth_(inst_27671)){
var statearr_27729_27811 = state_27722__$1;
(statearr_27729_27811[(1)] = (30));

} else {
var statearr_27730_27812 = state_27722__$1;
(statearr_27730_27812[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (1))){
var state_27722__$1 = state_27722;
var statearr_27731_27813 = state_27722__$1;
(statearr_27731_27813[(2)] = null);

(statearr_27731_27813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (24))){
var inst_27621 = (state_27722[(7)]);
var inst_27640 = (state_27722[(2)]);
var inst_27641 = cljs.core.next.call(null,inst_27621);
var inst_27599 = inst_27641;
var inst_27600 = null;
var inst_27601 = (0);
var inst_27602 = (0);
var state_27722__$1 = (function (){var statearr_27732 = state_27722;
(statearr_27732[(13)] = inst_27601);

(statearr_27732[(14)] = inst_27599);

(statearr_27732[(15)] = inst_27640);

(statearr_27732[(16)] = inst_27602);

(statearr_27732[(17)] = inst_27600);

return statearr_27732;
})();
var statearr_27733_27814 = state_27722__$1;
(statearr_27733_27814[(2)] = null);

(statearr_27733_27814[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (39))){
var state_27722__$1 = state_27722;
var statearr_27737_27815 = state_27722__$1;
(statearr_27737_27815[(2)] = null);

(statearr_27737_27815[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (4))){
var inst_27590 = (state_27722[(9)]);
var inst_27590__$1 = (state_27722[(2)]);
var inst_27591 = (inst_27590__$1 == null);
var state_27722__$1 = (function (){var statearr_27738 = state_27722;
(statearr_27738[(9)] = inst_27590__$1);

return statearr_27738;
})();
if(cljs.core.truth_(inst_27591)){
var statearr_27739_27816 = state_27722__$1;
(statearr_27739_27816[(1)] = (5));

} else {
var statearr_27740_27817 = state_27722__$1;
(statearr_27740_27817[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (15))){
var inst_27601 = (state_27722[(13)]);
var inst_27599 = (state_27722[(14)]);
var inst_27602 = (state_27722[(16)]);
var inst_27600 = (state_27722[(17)]);
var inst_27617 = (state_27722[(2)]);
var inst_27618 = (inst_27602 + (1));
var tmp27734 = inst_27601;
var tmp27735 = inst_27599;
var tmp27736 = inst_27600;
var inst_27599__$1 = tmp27735;
var inst_27600__$1 = tmp27736;
var inst_27601__$1 = tmp27734;
var inst_27602__$1 = inst_27618;
var state_27722__$1 = (function (){var statearr_27741 = state_27722;
(statearr_27741[(18)] = inst_27617);

(statearr_27741[(13)] = inst_27601__$1);

(statearr_27741[(14)] = inst_27599__$1);

(statearr_27741[(16)] = inst_27602__$1);

(statearr_27741[(17)] = inst_27600__$1);

return statearr_27741;
})();
var statearr_27742_27818 = state_27722__$1;
(statearr_27742_27818[(2)] = null);

(statearr_27742_27818[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (21))){
var inst_27644 = (state_27722[(2)]);
var state_27722__$1 = state_27722;
var statearr_27746_27819 = state_27722__$1;
(statearr_27746_27819[(2)] = inst_27644);

(statearr_27746_27819[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (31))){
var inst_27670 = (state_27722[(12)]);
var inst_27674 = done.call(null,null);
var inst_27675 = cljs.core.async.untap_STAR_.call(null,m,inst_27670);
var state_27722__$1 = (function (){var statearr_27747 = state_27722;
(statearr_27747[(19)] = inst_27674);

return statearr_27747;
})();
var statearr_27748_27820 = state_27722__$1;
(statearr_27748_27820[(2)] = inst_27675);

(statearr_27748_27820[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (32))){
var inst_27664 = (state_27722[(20)]);
var inst_27663 = (state_27722[(10)]);
var inst_27665 = (state_27722[(11)]);
var inst_27662 = (state_27722[(21)]);
var inst_27677 = (state_27722[(2)]);
var inst_27678 = (inst_27665 + (1));
var tmp27743 = inst_27664;
var tmp27744 = inst_27663;
var tmp27745 = inst_27662;
var inst_27662__$1 = tmp27745;
var inst_27663__$1 = tmp27744;
var inst_27664__$1 = tmp27743;
var inst_27665__$1 = inst_27678;
var state_27722__$1 = (function (){var statearr_27749 = state_27722;
(statearr_27749[(20)] = inst_27664__$1);

(statearr_27749[(10)] = inst_27663__$1);

(statearr_27749[(11)] = inst_27665__$1);

(statearr_27749[(22)] = inst_27677);

(statearr_27749[(21)] = inst_27662__$1);

return statearr_27749;
})();
var statearr_27750_27821 = state_27722__$1;
(statearr_27750_27821[(2)] = null);

(statearr_27750_27821[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (40))){
var inst_27690 = (state_27722[(23)]);
var inst_27694 = done.call(null,null);
var inst_27695 = cljs.core.async.untap_STAR_.call(null,m,inst_27690);
var state_27722__$1 = (function (){var statearr_27751 = state_27722;
(statearr_27751[(24)] = inst_27694);

return statearr_27751;
})();
var statearr_27752_27822 = state_27722__$1;
(statearr_27752_27822[(2)] = inst_27695);

(statearr_27752_27822[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (33))){
var inst_27681 = (state_27722[(25)]);
var inst_27683 = cljs.core.chunked_seq_QMARK_.call(null,inst_27681);
var state_27722__$1 = state_27722;
if(inst_27683){
var statearr_27753_27823 = state_27722__$1;
(statearr_27753_27823[(1)] = (36));

} else {
var statearr_27754_27824 = state_27722__$1;
(statearr_27754_27824[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (13))){
var inst_27611 = (state_27722[(26)]);
var inst_27614 = cljs.core.async.close_BANG_.call(null,inst_27611);
var state_27722__$1 = state_27722;
var statearr_27755_27825 = state_27722__$1;
(statearr_27755_27825[(2)] = inst_27614);

(statearr_27755_27825[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (22))){
var inst_27634 = (state_27722[(8)]);
var inst_27637 = cljs.core.async.close_BANG_.call(null,inst_27634);
var state_27722__$1 = state_27722;
var statearr_27756_27826 = state_27722__$1;
(statearr_27756_27826[(2)] = inst_27637);

(statearr_27756_27826[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (36))){
var inst_27681 = (state_27722[(25)]);
var inst_27685 = cljs.core.chunk_first.call(null,inst_27681);
var inst_27686 = cljs.core.chunk_rest.call(null,inst_27681);
var inst_27687 = cljs.core.count.call(null,inst_27685);
var inst_27662 = inst_27686;
var inst_27663 = inst_27685;
var inst_27664 = inst_27687;
var inst_27665 = (0);
var state_27722__$1 = (function (){var statearr_27757 = state_27722;
(statearr_27757[(20)] = inst_27664);

(statearr_27757[(10)] = inst_27663);

(statearr_27757[(11)] = inst_27665);

(statearr_27757[(21)] = inst_27662);

return statearr_27757;
})();
var statearr_27758_27827 = state_27722__$1;
(statearr_27758_27827[(2)] = null);

(statearr_27758_27827[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (41))){
var inst_27681 = (state_27722[(25)]);
var inst_27697 = (state_27722[(2)]);
var inst_27698 = cljs.core.next.call(null,inst_27681);
var inst_27662 = inst_27698;
var inst_27663 = null;
var inst_27664 = (0);
var inst_27665 = (0);
var state_27722__$1 = (function (){var statearr_27759 = state_27722;
(statearr_27759[(20)] = inst_27664);

(statearr_27759[(10)] = inst_27663);

(statearr_27759[(11)] = inst_27665);

(statearr_27759[(21)] = inst_27662);

(statearr_27759[(27)] = inst_27697);

return statearr_27759;
})();
var statearr_27760_27828 = state_27722__$1;
(statearr_27760_27828[(2)] = null);

(statearr_27760_27828[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (43))){
var state_27722__$1 = state_27722;
var statearr_27761_27829 = state_27722__$1;
(statearr_27761_27829[(2)] = null);

(statearr_27761_27829[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (29))){
var inst_27706 = (state_27722[(2)]);
var state_27722__$1 = state_27722;
var statearr_27762_27830 = state_27722__$1;
(statearr_27762_27830[(2)] = inst_27706);

(statearr_27762_27830[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (44))){
var inst_27715 = (state_27722[(2)]);
var state_27722__$1 = (function (){var statearr_27763 = state_27722;
(statearr_27763[(28)] = inst_27715);

return statearr_27763;
})();
var statearr_27764_27831 = state_27722__$1;
(statearr_27764_27831[(2)] = null);

(statearr_27764_27831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (6))){
var inst_27654 = (state_27722[(29)]);
var inst_27653 = cljs.core.deref.call(null,cs);
var inst_27654__$1 = cljs.core.keys.call(null,inst_27653);
var inst_27655 = cljs.core.count.call(null,inst_27654__$1);
var inst_27656 = cljs.core.reset_BANG_.call(null,dctr,inst_27655);
var inst_27661 = cljs.core.seq.call(null,inst_27654__$1);
var inst_27662 = inst_27661;
var inst_27663 = null;
var inst_27664 = (0);
var inst_27665 = (0);
var state_27722__$1 = (function (){var statearr_27765 = state_27722;
(statearr_27765[(20)] = inst_27664);

(statearr_27765[(10)] = inst_27663);

(statearr_27765[(11)] = inst_27665);

(statearr_27765[(30)] = inst_27656);

(statearr_27765[(21)] = inst_27662);

(statearr_27765[(29)] = inst_27654__$1);

return statearr_27765;
})();
var statearr_27766_27832 = state_27722__$1;
(statearr_27766_27832[(2)] = null);

(statearr_27766_27832[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (28))){
var inst_27681 = (state_27722[(25)]);
var inst_27662 = (state_27722[(21)]);
var inst_27681__$1 = cljs.core.seq.call(null,inst_27662);
var state_27722__$1 = (function (){var statearr_27767 = state_27722;
(statearr_27767[(25)] = inst_27681__$1);

return statearr_27767;
})();
if(inst_27681__$1){
var statearr_27768_27833 = state_27722__$1;
(statearr_27768_27833[(1)] = (33));

} else {
var statearr_27769_27834 = state_27722__$1;
(statearr_27769_27834[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (25))){
var inst_27664 = (state_27722[(20)]);
var inst_27665 = (state_27722[(11)]);
var inst_27667 = (inst_27665 < inst_27664);
var inst_27668 = inst_27667;
var state_27722__$1 = state_27722;
if(cljs.core.truth_(inst_27668)){
var statearr_27770_27835 = state_27722__$1;
(statearr_27770_27835[(1)] = (27));

} else {
var statearr_27771_27836 = state_27722__$1;
(statearr_27771_27836[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (34))){
var state_27722__$1 = state_27722;
var statearr_27772_27837 = state_27722__$1;
(statearr_27772_27837[(2)] = null);

(statearr_27772_27837[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (17))){
var state_27722__$1 = state_27722;
var statearr_27773_27838 = state_27722__$1;
(statearr_27773_27838[(2)] = null);

(statearr_27773_27838[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (3))){
var inst_27720 = (state_27722[(2)]);
var state_27722__$1 = state_27722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27722__$1,inst_27720);
} else {
if((state_val_27723 === (12))){
var inst_27649 = (state_27722[(2)]);
var state_27722__$1 = state_27722;
var statearr_27774_27839 = state_27722__$1;
(statearr_27774_27839[(2)] = inst_27649);

(statearr_27774_27839[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (2))){
var state_27722__$1 = state_27722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27722__$1,(4),ch);
} else {
if((state_val_27723 === (23))){
var state_27722__$1 = state_27722;
var statearr_27775_27840 = state_27722__$1;
(statearr_27775_27840[(2)] = null);

(statearr_27775_27840[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (35))){
var inst_27704 = (state_27722[(2)]);
var state_27722__$1 = state_27722;
var statearr_27776_27841 = state_27722__$1;
(statearr_27776_27841[(2)] = inst_27704);

(statearr_27776_27841[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (19))){
var inst_27621 = (state_27722[(7)]);
var inst_27625 = cljs.core.chunk_first.call(null,inst_27621);
var inst_27626 = cljs.core.chunk_rest.call(null,inst_27621);
var inst_27627 = cljs.core.count.call(null,inst_27625);
var inst_27599 = inst_27626;
var inst_27600 = inst_27625;
var inst_27601 = inst_27627;
var inst_27602 = (0);
var state_27722__$1 = (function (){var statearr_27777 = state_27722;
(statearr_27777[(13)] = inst_27601);

(statearr_27777[(14)] = inst_27599);

(statearr_27777[(16)] = inst_27602);

(statearr_27777[(17)] = inst_27600);

return statearr_27777;
})();
var statearr_27778_27842 = state_27722__$1;
(statearr_27778_27842[(2)] = null);

(statearr_27778_27842[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (11))){
var inst_27599 = (state_27722[(14)]);
var inst_27621 = (state_27722[(7)]);
var inst_27621__$1 = cljs.core.seq.call(null,inst_27599);
var state_27722__$1 = (function (){var statearr_27779 = state_27722;
(statearr_27779[(7)] = inst_27621__$1);

return statearr_27779;
})();
if(inst_27621__$1){
var statearr_27780_27843 = state_27722__$1;
(statearr_27780_27843[(1)] = (16));

} else {
var statearr_27781_27844 = state_27722__$1;
(statearr_27781_27844[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (9))){
var inst_27651 = (state_27722[(2)]);
var state_27722__$1 = state_27722;
var statearr_27782_27845 = state_27722__$1;
(statearr_27782_27845[(2)] = inst_27651);

(statearr_27782_27845[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (5))){
var inst_27597 = cljs.core.deref.call(null,cs);
var inst_27598 = cljs.core.seq.call(null,inst_27597);
var inst_27599 = inst_27598;
var inst_27600 = null;
var inst_27601 = (0);
var inst_27602 = (0);
var state_27722__$1 = (function (){var statearr_27783 = state_27722;
(statearr_27783[(13)] = inst_27601);

(statearr_27783[(14)] = inst_27599);

(statearr_27783[(16)] = inst_27602);

(statearr_27783[(17)] = inst_27600);

return statearr_27783;
})();
var statearr_27784_27846 = state_27722__$1;
(statearr_27784_27846[(2)] = null);

(statearr_27784_27846[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (14))){
var state_27722__$1 = state_27722;
var statearr_27785_27847 = state_27722__$1;
(statearr_27785_27847[(2)] = null);

(statearr_27785_27847[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (45))){
var inst_27712 = (state_27722[(2)]);
var state_27722__$1 = state_27722;
var statearr_27786_27848 = state_27722__$1;
(statearr_27786_27848[(2)] = inst_27712);

(statearr_27786_27848[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (26))){
var inst_27654 = (state_27722[(29)]);
var inst_27708 = (state_27722[(2)]);
var inst_27709 = cljs.core.seq.call(null,inst_27654);
var state_27722__$1 = (function (){var statearr_27787 = state_27722;
(statearr_27787[(31)] = inst_27708);

return statearr_27787;
})();
if(inst_27709){
var statearr_27788_27849 = state_27722__$1;
(statearr_27788_27849[(1)] = (42));

} else {
var statearr_27789_27850 = state_27722__$1;
(statearr_27789_27850[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (16))){
var inst_27621 = (state_27722[(7)]);
var inst_27623 = cljs.core.chunked_seq_QMARK_.call(null,inst_27621);
var state_27722__$1 = state_27722;
if(inst_27623){
var statearr_27790_27851 = state_27722__$1;
(statearr_27790_27851[(1)] = (19));

} else {
var statearr_27791_27852 = state_27722__$1;
(statearr_27791_27852[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (38))){
var inst_27701 = (state_27722[(2)]);
var state_27722__$1 = state_27722;
var statearr_27792_27853 = state_27722__$1;
(statearr_27792_27853[(2)] = inst_27701);

(statearr_27792_27853[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (30))){
var state_27722__$1 = state_27722;
var statearr_27793_27854 = state_27722__$1;
(statearr_27793_27854[(2)] = null);

(statearr_27793_27854[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (10))){
var inst_27602 = (state_27722[(16)]);
var inst_27600 = (state_27722[(17)]);
var inst_27610 = cljs.core._nth.call(null,inst_27600,inst_27602);
var inst_27611 = cljs.core.nth.call(null,inst_27610,(0),null);
var inst_27612 = cljs.core.nth.call(null,inst_27610,(1),null);
var state_27722__$1 = (function (){var statearr_27794 = state_27722;
(statearr_27794[(26)] = inst_27611);

return statearr_27794;
})();
if(cljs.core.truth_(inst_27612)){
var statearr_27795_27855 = state_27722__$1;
(statearr_27795_27855[(1)] = (13));

} else {
var statearr_27796_27856 = state_27722__$1;
(statearr_27796_27856[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (18))){
var inst_27647 = (state_27722[(2)]);
var state_27722__$1 = state_27722;
var statearr_27797_27857 = state_27722__$1;
(statearr_27797_27857[(2)] = inst_27647);

(statearr_27797_27857[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (42))){
var state_27722__$1 = state_27722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27722__$1,(45),dchan);
} else {
if((state_val_27723 === (37))){
var inst_27590 = (state_27722[(9)]);
var inst_27681 = (state_27722[(25)]);
var inst_27690 = (state_27722[(23)]);
var inst_27690__$1 = cljs.core.first.call(null,inst_27681);
var inst_27691 = cljs.core.async.put_BANG_.call(null,inst_27690__$1,inst_27590,done);
var state_27722__$1 = (function (){var statearr_27798 = state_27722;
(statearr_27798[(23)] = inst_27690__$1);

return statearr_27798;
})();
if(cljs.core.truth_(inst_27691)){
var statearr_27799_27858 = state_27722__$1;
(statearr_27799_27858[(1)] = (39));

} else {
var statearr_27800_27859 = state_27722__$1;
(statearr_27800_27859[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27723 === (8))){
var inst_27601 = (state_27722[(13)]);
var inst_27602 = (state_27722[(16)]);
var inst_27604 = (inst_27602 < inst_27601);
var inst_27605 = inst_27604;
var state_27722__$1 = state_27722;
if(cljs.core.truth_(inst_27605)){
var statearr_27801_27860 = state_27722__$1;
(statearr_27801_27860[(1)] = (10));

} else {
var statearr_27802_27861 = state_27722__$1;
(statearr_27802_27861[(1)] = (11));

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
});})(c__26988__auto___27807,cs,m,dchan,dctr,done))
;
return ((function (switch__26898__auto__,c__26988__auto___27807,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__26899__auto__ = null;
var cljs$core$async$mult_$_state_machine__26899__auto____0 = (function (){
var statearr_27803 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27803[(0)] = cljs$core$async$mult_$_state_machine__26899__auto__);

(statearr_27803[(1)] = (1));

return statearr_27803;
});
var cljs$core$async$mult_$_state_machine__26899__auto____1 = (function (state_27722){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_27722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e27804){if((e27804 instanceof Object)){
var ex__26902__auto__ = e27804;
var statearr_27805_27862 = state_27722;
(statearr_27805_27862[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27804;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27863 = state_27722;
state_27722 = G__27863;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26899__auto__ = function(state_27722){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26899__auto____1.call(this,state_27722);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26899__auto____0;
cljs$core$async$mult_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26899__auto____1;
return cljs$core$async$mult_$_state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___27807,cs,m,dchan,dctr,done))
})();
var state__26990__auto__ = (function (){var statearr_27806 = f__26989__auto__.call(null);
(statearr_27806[(6)] = c__26988__auto___27807);

return statearr_27806;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___27807,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27865 = arguments.length;
switch (G__27865) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___27877 = arguments.length;
var i__4500__auto___27878 = (0);
while(true){
if((i__4500__auto___27878 < len__4499__auto___27877)){
args__4502__auto__.push((arguments[i__4500__auto___27878]));

var G__27879 = (i__4500__auto___27878 + (1));
i__4500__auto___27878 = G__27879;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27871){
var map__27872 = p__27871;
var map__27872__$1 = ((((!((map__27872 == null)))?(((((map__27872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27872):map__27872);
var opts = map__27872__$1;
var statearr_27874_27880 = state;
(statearr_27874_27880[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__27872,map__27872__$1,opts){
return (function (val){
var statearr_27875_27881 = state;
(statearr_27875_27881[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27872,map__27872__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_27876_27882 = state;
(statearr_27876_27882[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27867){
var G__27868 = cljs.core.first.call(null,seq27867);
var seq27867__$1 = cljs.core.next.call(null,seq27867);
var G__27869 = cljs.core.first.call(null,seq27867__$1);
var seq27867__$2 = cljs.core.next.call(null,seq27867__$1);
var G__27870 = cljs.core.first.call(null,seq27867__$2);
var seq27867__$3 = cljs.core.next.call(null,seq27867__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27868,G__27869,G__27870,seq27867__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async27883 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27883 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta27884){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta27884 = meta27884;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27885,meta27884__$1){
var self__ = this;
var _27885__$1 = this;
return (new cljs.core.async.t_cljs$core$async27883(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta27884__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27883.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27885){
var self__ = this;
var _27885__$1 = this;
return self__.meta27884;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27883.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27883.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27883.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27883.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27883.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27883.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27883.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27883.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27883.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta27884","meta27884",436304335,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27883.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27883.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27883";

cljs.core.async.t_cljs$core$async27883.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27883");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27883.
 */
cljs.core.async.__GT_t_cljs$core$async27883 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27883(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27884){
return (new cljs.core.async.t_cljs$core$async27883(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta27884));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27883(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26988__auto___28047 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___28047,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___28047,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27987){
var state_val_27988 = (state_27987[(1)]);
if((state_val_27988 === (7))){
var inst_27902 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_27989_28048 = state_27987__$1;
(statearr_27989_28048[(2)] = inst_27902);

(statearr_27989_28048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (20))){
var inst_27914 = (state_27987[(7)]);
var state_27987__$1 = state_27987;
var statearr_27990_28049 = state_27987__$1;
(statearr_27990_28049[(2)] = inst_27914);

(statearr_27990_28049[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (27))){
var state_27987__$1 = state_27987;
var statearr_27991_28050 = state_27987__$1;
(statearr_27991_28050[(2)] = null);

(statearr_27991_28050[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (1))){
var inst_27889 = (state_27987[(8)]);
var inst_27889__$1 = calc_state.call(null);
var inst_27891 = (inst_27889__$1 == null);
var inst_27892 = cljs.core.not.call(null,inst_27891);
var state_27987__$1 = (function (){var statearr_27992 = state_27987;
(statearr_27992[(8)] = inst_27889__$1);

return statearr_27992;
})();
if(inst_27892){
var statearr_27993_28051 = state_27987__$1;
(statearr_27993_28051[(1)] = (2));

} else {
var statearr_27994_28052 = state_27987__$1;
(statearr_27994_28052[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (24))){
var inst_27961 = (state_27987[(9)]);
var inst_27938 = (state_27987[(10)]);
var inst_27947 = (state_27987[(11)]);
var inst_27961__$1 = inst_27938.call(null,inst_27947);
var state_27987__$1 = (function (){var statearr_27995 = state_27987;
(statearr_27995[(9)] = inst_27961__$1);

return statearr_27995;
})();
if(cljs.core.truth_(inst_27961__$1)){
var statearr_27996_28053 = state_27987__$1;
(statearr_27996_28053[(1)] = (29));

} else {
var statearr_27997_28054 = state_27987__$1;
(statearr_27997_28054[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (4))){
var inst_27905 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
if(cljs.core.truth_(inst_27905)){
var statearr_27998_28055 = state_27987__$1;
(statearr_27998_28055[(1)] = (8));

} else {
var statearr_27999_28056 = state_27987__$1;
(statearr_27999_28056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (15))){
var inst_27932 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
if(cljs.core.truth_(inst_27932)){
var statearr_28000_28057 = state_27987__$1;
(statearr_28000_28057[(1)] = (19));

} else {
var statearr_28001_28058 = state_27987__$1;
(statearr_28001_28058[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (21))){
var inst_27937 = (state_27987[(12)]);
var inst_27937__$1 = (state_27987[(2)]);
var inst_27938 = cljs.core.get.call(null,inst_27937__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27939 = cljs.core.get.call(null,inst_27937__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27940 = cljs.core.get.call(null,inst_27937__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27987__$1 = (function (){var statearr_28002 = state_27987;
(statearr_28002[(13)] = inst_27939);

(statearr_28002[(12)] = inst_27937__$1);

(statearr_28002[(10)] = inst_27938);

return statearr_28002;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27987__$1,(22),inst_27940);
} else {
if((state_val_27988 === (31))){
var inst_27969 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
if(cljs.core.truth_(inst_27969)){
var statearr_28003_28059 = state_27987__$1;
(statearr_28003_28059[(1)] = (32));

} else {
var statearr_28004_28060 = state_27987__$1;
(statearr_28004_28060[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (32))){
var inst_27946 = (state_27987[(14)]);
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27987__$1,(35),out,inst_27946);
} else {
if((state_val_27988 === (33))){
var inst_27937 = (state_27987[(12)]);
var inst_27914 = inst_27937;
var state_27987__$1 = (function (){var statearr_28005 = state_27987;
(statearr_28005[(7)] = inst_27914);

return statearr_28005;
})();
var statearr_28006_28061 = state_27987__$1;
(statearr_28006_28061[(2)] = null);

(statearr_28006_28061[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (13))){
var inst_27914 = (state_27987[(7)]);
var inst_27921 = inst_27914.cljs$lang$protocol_mask$partition0$;
var inst_27922 = (inst_27921 & (64));
var inst_27923 = inst_27914.cljs$core$ISeq$;
var inst_27924 = (cljs.core.PROTOCOL_SENTINEL === inst_27923);
var inst_27925 = ((inst_27922) || (inst_27924));
var state_27987__$1 = state_27987;
if(cljs.core.truth_(inst_27925)){
var statearr_28007_28062 = state_27987__$1;
(statearr_28007_28062[(1)] = (16));

} else {
var statearr_28008_28063 = state_27987__$1;
(statearr_28008_28063[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (22))){
var inst_27946 = (state_27987[(14)]);
var inst_27947 = (state_27987[(11)]);
var inst_27945 = (state_27987[(2)]);
var inst_27946__$1 = cljs.core.nth.call(null,inst_27945,(0),null);
var inst_27947__$1 = cljs.core.nth.call(null,inst_27945,(1),null);
var inst_27948 = (inst_27946__$1 == null);
var inst_27949 = cljs.core._EQ_.call(null,inst_27947__$1,change);
var inst_27950 = ((inst_27948) || (inst_27949));
var state_27987__$1 = (function (){var statearr_28009 = state_27987;
(statearr_28009[(14)] = inst_27946__$1);

(statearr_28009[(11)] = inst_27947__$1);

return statearr_28009;
})();
if(cljs.core.truth_(inst_27950)){
var statearr_28010_28064 = state_27987__$1;
(statearr_28010_28064[(1)] = (23));

} else {
var statearr_28011_28065 = state_27987__$1;
(statearr_28011_28065[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (36))){
var inst_27937 = (state_27987[(12)]);
var inst_27914 = inst_27937;
var state_27987__$1 = (function (){var statearr_28012 = state_27987;
(statearr_28012[(7)] = inst_27914);

return statearr_28012;
})();
var statearr_28013_28066 = state_27987__$1;
(statearr_28013_28066[(2)] = null);

(statearr_28013_28066[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (29))){
var inst_27961 = (state_27987[(9)]);
var state_27987__$1 = state_27987;
var statearr_28014_28067 = state_27987__$1;
(statearr_28014_28067[(2)] = inst_27961);

(statearr_28014_28067[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (6))){
var state_27987__$1 = state_27987;
var statearr_28015_28068 = state_27987__$1;
(statearr_28015_28068[(2)] = false);

(statearr_28015_28068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (28))){
var inst_27957 = (state_27987[(2)]);
var inst_27958 = calc_state.call(null);
var inst_27914 = inst_27958;
var state_27987__$1 = (function (){var statearr_28016 = state_27987;
(statearr_28016[(15)] = inst_27957);

(statearr_28016[(7)] = inst_27914);

return statearr_28016;
})();
var statearr_28017_28069 = state_27987__$1;
(statearr_28017_28069[(2)] = null);

(statearr_28017_28069[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (25))){
var inst_27983 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_28018_28070 = state_27987__$1;
(statearr_28018_28070[(2)] = inst_27983);

(statearr_28018_28070[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (34))){
var inst_27981 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_28019_28071 = state_27987__$1;
(statearr_28019_28071[(2)] = inst_27981);

(statearr_28019_28071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (17))){
var state_27987__$1 = state_27987;
var statearr_28020_28072 = state_27987__$1;
(statearr_28020_28072[(2)] = false);

(statearr_28020_28072[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (3))){
var state_27987__$1 = state_27987;
var statearr_28021_28073 = state_27987__$1;
(statearr_28021_28073[(2)] = false);

(statearr_28021_28073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (12))){
var inst_27985 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27987__$1,inst_27985);
} else {
if((state_val_27988 === (2))){
var inst_27889 = (state_27987[(8)]);
var inst_27894 = inst_27889.cljs$lang$protocol_mask$partition0$;
var inst_27895 = (inst_27894 & (64));
var inst_27896 = inst_27889.cljs$core$ISeq$;
var inst_27897 = (cljs.core.PROTOCOL_SENTINEL === inst_27896);
var inst_27898 = ((inst_27895) || (inst_27897));
var state_27987__$1 = state_27987;
if(cljs.core.truth_(inst_27898)){
var statearr_28022_28074 = state_27987__$1;
(statearr_28022_28074[(1)] = (5));

} else {
var statearr_28023_28075 = state_27987__$1;
(statearr_28023_28075[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (23))){
var inst_27946 = (state_27987[(14)]);
var inst_27952 = (inst_27946 == null);
var state_27987__$1 = state_27987;
if(cljs.core.truth_(inst_27952)){
var statearr_28024_28076 = state_27987__$1;
(statearr_28024_28076[(1)] = (26));

} else {
var statearr_28025_28077 = state_27987__$1;
(statearr_28025_28077[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (35))){
var inst_27972 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
if(cljs.core.truth_(inst_27972)){
var statearr_28026_28078 = state_27987__$1;
(statearr_28026_28078[(1)] = (36));

} else {
var statearr_28027_28079 = state_27987__$1;
(statearr_28027_28079[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (19))){
var inst_27914 = (state_27987[(7)]);
var inst_27934 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27914);
var state_27987__$1 = state_27987;
var statearr_28028_28080 = state_27987__$1;
(statearr_28028_28080[(2)] = inst_27934);

(statearr_28028_28080[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (11))){
var inst_27914 = (state_27987[(7)]);
var inst_27918 = (inst_27914 == null);
var inst_27919 = cljs.core.not.call(null,inst_27918);
var state_27987__$1 = state_27987;
if(inst_27919){
var statearr_28029_28081 = state_27987__$1;
(statearr_28029_28081[(1)] = (13));

} else {
var statearr_28030_28082 = state_27987__$1;
(statearr_28030_28082[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (9))){
var inst_27889 = (state_27987[(8)]);
var state_27987__$1 = state_27987;
var statearr_28031_28083 = state_27987__$1;
(statearr_28031_28083[(2)] = inst_27889);

(statearr_28031_28083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (5))){
var state_27987__$1 = state_27987;
var statearr_28032_28084 = state_27987__$1;
(statearr_28032_28084[(2)] = true);

(statearr_28032_28084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (14))){
var state_27987__$1 = state_27987;
var statearr_28033_28085 = state_27987__$1;
(statearr_28033_28085[(2)] = false);

(statearr_28033_28085[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (26))){
var inst_27947 = (state_27987[(11)]);
var inst_27954 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27947);
var state_27987__$1 = state_27987;
var statearr_28034_28086 = state_27987__$1;
(statearr_28034_28086[(2)] = inst_27954);

(statearr_28034_28086[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (16))){
var state_27987__$1 = state_27987;
var statearr_28035_28087 = state_27987__$1;
(statearr_28035_28087[(2)] = true);

(statearr_28035_28087[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (38))){
var inst_27977 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_28036_28088 = state_27987__$1;
(statearr_28036_28088[(2)] = inst_27977);

(statearr_28036_28088[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (30))){
var inst_27939 = (state_27987[(13)]);
var inst_27938 = (state_27987[(10)]);
var inst_27947 = (state_27987[(11)]);
var inst_27964 = cljs.core.empty_QMARK_.call(null,inst_27938);
var inst_27965 = inst_27939.call(null,inst_27947);
var inst_27966 = cljs.core.not.call(null,inst_27965);
var inst_27967 = ((inst_27964) && (inst_27966));
var state_27987__$1 = state_27987;
var statearr_28037_28089 = state_27987__$1;
(statearr_28037_28089[(2)] = inst_27967);

(statearr_28037_28089[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (10))){
var inst_27889 = (state_27987[(8)]);
var inst_27910 = (state_27987[(2)]);
var inst_27911 = cljs.core.get.call(null,inst_27910,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27912 = cljs.core.get.call(null,inst_27910,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27913 = cljs.core.get.call(null,inst_27910,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27914 = inst_27889;
var state_27987__$1 = (function (){var statearr_28038 = state_27987;
(statearr_28038[(16)] = inst_27911);

(statearr_28038[(17)] = inst_27912);

(statearr_28038[(7)] = inst_27914);

(statearr_28038[(18)] = inst_27913);

return statearr_28038;
})();
var statearr_28039_28090 = state_27987__$1;
(statearr_28039_28090[(2)] = null);

(statearr_28039_28090[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (18))){
var inst_27929 = (state_27987[(2)]);
var state_27987__$1 = state_27987;
var statearr_28040_28091 = state_27987__$1;
(statearr_28040_28091[(2)] = inst_27929);

(statearr_28040_28091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (37))){
var state_27987__$1 = state_27987;
var statearr_28041_28092 = state_27987__$1;
(statearr_28041_28092[(2)] = null);

(statearr_28041_28092[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27988 === (8))){
var inst_27889 = (state_27987[(8)]);
var inst_27907 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27889);
var state_27987__$1 = state_27987;
var statearr_28042_28093 = state_27987__$1;
(statearr_28042_28093[(2)] = inst_27907);

(statearr_28042_28093[(1)] = (10));


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
});})(c__26988__auto___28047,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__26898__auto__,c__26988__auto___28047,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__26899__auto__ = null;
var cljs$core$async$mix_$_state_machine__26899__auto____0 = (function (){
var statearr_28043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28043[(0)] = cljs$core$async$mix_$_state_machine__26899__auto__);

(statearr_28043[(1)] = (1));

return statearr_28043;
});
var cljs$core$async$mix_$_state_machine__26899__auto____1 = (function (state_27987){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_27987);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e28044){if((e28044 instanceof Object)){
var ex__26902__auto__ = e28044;
var statearr_28045_28094 = state_27987;
(statearr_28045_28094[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27987);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28095 = state_27987;
state_27987 = G__28095;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26899__auto__ = function(state_27987){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26899__auto____1.call(this,state_27987);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26899__auto____0;
cljs$core$async$mix_$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26899__auto____1;
return cljs$core$async$mix_$_state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___28047,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26990__auto__ = (function (){var statearr_28046 = f__26989__auto__.call(null);
(statearr_28046[(6)] = c__26988__auto___28047);

return statearr_28046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___28047,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28097 = arguments.length;
switch (G__28097) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28101 = arguments.length;
switch (G__28101) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__28099_SHARP_){
if(cljs.core.truth_(p1__28099_SHARP_.call(null,topic))){
return p1__28099_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28099_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28102 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28102 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28103){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28103 = meta28103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28104,meta28103__$1){
var self__ = this;
var _28104__$1 = this;
return (new cljs.core.async.t_cljs$core$async28102(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28103__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28102.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28104){
var self__ = this;
var _28104__$1 = this;
return self__.meta28103;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28102.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28102.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28102.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28102.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28102.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28102.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28102.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28102.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28103","meta28103",1917611198,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28102.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28102";

cljs.core.async.t_cljs$core$async28102.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28102");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28102.
 */
cljs.core.async.__GT_t_cljs$core$async28102 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28102(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28103){
return (new cljs.core.async.t_cljs$core$async28102(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28103));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28102(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26988__auto___28222 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___28222,mults,ensure_mult,p){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___28222,mults,ensure_mult,p){
return (function (state_28176){
var state_val_28177 = (state_28176[(1)]);
if((state_val_28177 === (7))){
var inst_28172 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
var statearr_28178_28223 = state_28176__$1;
(statearr_28178_28223[(2)] = inst_28172);

(statearr_28178_28223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (20))){
var state_28176__$1 = state_28176;
var statearr_28179_28224 = state_28176__$1;
(statearr_28179_28224[(2)] = null);

(statearr_28179_28224[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (1))){
var state_28176__$1 = state_28176;
var statearr_28180_28225 = state_28176__$1;
(statearr_28180_28225[(2)] = null);

(statearr_28180_28225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (24))){
var inst_28155 = (state_28176[(7)]);
var inst_28164 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28155);
var state_28176__$1 = state_28176;
var statearr_28181_28226 = state_28176__$1;
(statearr_28181_28226[(2)] = inst_28164);

(statearr_28181_28226[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (4))){
var inst_28107 = (state_28176[(8)]);
var inst_28107__$1 = (state_28176[(2)]);
var inst_28108 = (inst_28107__$1 == null);
var state_28176__$1 = (function (){var statearr_28182 = state_28176;
(statearr_28182[(8)] = inst_28107__$1);

return statearr_28182;
})();
if(cljs.core.truth_(inst_28108)){
var statearr_28183_28227 = state_28176__$1;
(statearr_28183_28227[(1)] = (5));

} else {
var statearr_28184_28228 = state_28176__$1;
(statearr_28184_28228[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (15))){
var inst_28149 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
var statearr_28185_28229 = state_28176__$1;
(statearr_28185_28229[(2)] = inst_28149);

(statearr_28185_28229[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (21))){
var inst_28169 = (state_28176[(2)]);
var state_28176__$1 = (function (){var statearr_28186 = state_28176;
(statearr_28186[(9)] = inst_28169);

return statearr_28186;
})();
var statearr_28187_28230 = state_28176__$1;
(statearr_28187_28230[(2)] = null);

(statearr_28187_28230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (13))){
var inst_28131 = (state_28176[(10)]);
var inst_28133 = cljs.core.chunked_seq_QMARK_.call(null,inst_28131);
var state_28176__$1 = state_28176;
if(inst_28133){
var statearr_28188_28231 = state_28176__$1;
(statearr_28188_28231[(1)] = (16));

} else {
var statearr_28189_28232 = state_28176__$1;
(statearr_28189_28232[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (22))){
var inst_28161 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
if(cljs.core.truth_(inst_28161)){
var statearr_28190_28233 = state_28176__$1;
(statearr_28190_28233[(1)] = (23));

} else {
var statearr_28191_28234 = state_28176__$1;
(statearr_28191_28234[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (6))){
var inst_28157 = (state_28176[(11)]);
var inst_28155 = (state_28176[(7)]);
var inst_28107 = (state_28176[(8)]);
var inst_28155__$1 = topic_fn.call(null,inst_28107);
var inst_28156 = cljs.core.deref.call(null,mults);
var inst_28157__$1 = cljs.core.get.call(null,inst_28156,inst_28155__$1);
var state_28176__$1 = (function (){var statearr_28192 = state_28176;
(statearr_28192[(11)] = inst_28157__$1);

(statearr_28192[(7)] = inst_28155__$1);

return statearr_28192;
})();
if(cljs.core.truth_(inst_28157__$1)){
var statearr_28193_28235 = state_28176__$1;
(statearr_28193_28235[(1)] = (19));

} else {
var statearr_28194_28236 = state_28176__$1;
(statearr_28194_28236[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (25))){
var inst_28166 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
var statearr_28195_28237 = state_28176__$1;
(statearr_28195_28237[(2)] = inst_28166);

(statearr_28195_28237[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (17))){
var inst_28131 = (state_28176[(10)]);
var inst_28140 = cljs.core.first.call(null,inst_28131);
var inst_28141 = cljs.core.async.muxch_STAR_.call(null,inst_28140);
var inst_28142 = cljs.core.async.close_BANG_.call(null,inst_28141);
var inst_28143 = cljs.core.next.call(null,inst_28131);
var inst_28117 = inst_28143;
var inst_28118 = null;
var inst_28119 = (0);
var inst_28120 = (0);
var state_28176__$1 = (function (){var statearr_28196 = state_28176;
(statearr_28196[(12)] = inst_28120);

(statearr_28196[(13)] = inst_28118);

(statearr_28196[(14)] = inst_28119);

(statearr_28196[(15)] = inst_28117);

(statearr_28196[(16)] = inst_28142);

return statearr_28196;
})();
var statearr_28197_28238 = state_28176__$1;
(statearr_28197_28238[(2)] = null);

(statearr_28197_28238[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (3))){
var inst_28174 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28176__$1,inst_28174);
} else {
if((state_val_28177 === (12))){
var inst_28151 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
var statearr_28198_28239 = state_28176__$1;
(statearr_28198_28239[(2)] = inst_28151);

(statearr_28198_28239[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (2))){
var state_28176__$1 = state_28176;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28176__$1,(4),ch);
} else {
if((state_val_28177 === (23))){
var state_28176__$1 = state_28176;
var statearr_28199_28240 = state_28176__$1;
(statearr_28199_28240[(2)] = null);

(statearr_28199_28240[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (19))){
var inst_28157 = (state_28176[(11)]);
var inst_28107 = (state_28176[(8)]);
var inst_28159 = cljs.core.async.muxch_STAR_.call(null,inst_28157);
var state_28176__$1 = state_28176;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28176__$1,(22),inst_28159,inst_28107);
} else {
if((state_val_28177 === (11))){
var inst_28131 = (state_28176[(10)]);
var inst_28117 = (state_28176[(15)]);
var inst_28131__$1 = cljs.core.seq.call(null,inst_28117);
var state_28176__$1 = (function (){var statearr_28200 = state_28176;
(statearr_28200[(10)] = inst_28131__$1);

return statearr_28200;
})();
if(inst_28131__$1){
var statearr_28201_28241 = state_28176__$1;
(statearr_28201_28241[(1)] = (13));

} else {
var statearr_28202_28242 = state_28176__$1;
(statearr_28202_28242[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (9))){
var inst_28153 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
var statearr_28203_28243 = state_28176__$1;
(statearr_28203_28243[(2)] = inst_28153);

(statearr_28203_28243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (5))){
var inst_28114 = cljs.core.deref.call(null,mults);
var inst_28115 = cljs.core.vals.call(null,inst_28114);
var inst_28116 = cljs.core.seq.call(null,inst_28115);
var inst_28117 = inst_28116;
var inst_28118 = null;
var inst_28119 = (0);
var inst_28120 = (0);
var state_28176__$1 = (function (){var statearr_28204 = state_28176;
(statearr_28204[(12)] = inst_28120);

(statearr_28204[(13)] = inst_28118);

(statearr_28204[(14)] = inst_28119);

(statearr_28204[(15)] = inst_28117);

return statearr_28204;
})();
var statearr_28205_28244 = state_28176__$1;
(statearr_28205_28244[(2)] = null);

(statearr_28205_28244[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (14))){
var state_28176__$1 = state_28176;
var statearr_28209_28245 = state_28176__$1;
(statearr_28209_28245[(2)] = null);

(statearr_28209_28245[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (16))){
var inst_28131 = (state_28176[(10)]);
var inst_28135 = cljs.core.chunk_first.call(null,inst_28131);
var inst_28136 = cljs.core.chunk_rest.call(null,inst_28131);
var inst_28137 = cljs.core.count.call(null,inst_28135);
var inst_28117 = inst_28136;
var inst_28118 = inst_28135;
var inst_28119 = inst_28137;
var inst_28120 = (0);
var state_28176__$1 = (function (){var statearr_28210 = state_28176;
(statearr_28210[(12)] = inst_28120);

(statearr_28210[(13)] = inst_28118);

(statearr_28210[(14)] = inst_28119);

(statearr_28210[(15)] = inst_28117);

return statearr_28210;
})();
var statearr_28211_28246 = state_28176__$1;
(statearr_28211_28246[(2)] = null);

(statearr_28211_28246[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (10))){
var inst_28120 = (state_28176[(12)]);
var inst_28118 = (state_28176[(13)]);
var inst_28119 = (state_28176[(14)]);
var inst_28117 = (state_28176[(15)]);
var inst_28125 = cljs.core._nth.call(null,inst_28118,inst_28120);
var inst_28126 = cljs.core.async.muxch_STAR_.call(null,inst_28125);
var inst_28127 = cljs.core.async.close_BANG_.call(null,inst_28126);
var inst_28128 = (inst_28120 + (1));
var tmp28206 = inst_28118;
var tmp28207 = inst_28119;
var tmp28208 = inst_28117;
var inst_28117__$1 = tmp28208;
var inst_28118__$1 = tmp28206;
var inst_28119__$1 = tmp28207;
var inst_28120__$1 = inst_28128;
var state_28176__$1 = (function (){var statearr_28212 = state_28176;
(statearr_28212[(12)] = inst_28120__$1);

(statearr_28212[(13)] = inst_28118__$1);

(statearr_28212[(14)] = inst_28119__$1);

(statearr_28212[(15)] = inst_28117__$1);

(statearr_28212[(17)] = inst_28127);

return statearr_28212;
})();
var statearr_28213_28247 = state_28176__$1;
(statearr_28213_28247[(2)] = null);

(statearr_28213_28247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (18))){
var inst_28146 = (state_28176[(2)]);
var state_28176__$1 = state_28176;
var statearr_28214_28248 = state_28176__$1;
(statearr_28214_28248[(2)] = inst_28146);

(statearr_28214_28248[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28177 === (8))){
var inst_28120 = (state_28176[(12)]);
var inst_28119 = (state_28176[(14)]);
var inst_28122 = (inst_28120 < inst_28119);
var inst_28123 = inst_28122;
var state_28176__$1 = state_28176;
if(cljs.core.truth_(inst_28123)){
var statearr_28215_28249 = state_28176__$1;
(statearr_28215_28249[(1)] = (10));

} else {
var statearr_28216_28250 = state_28176__$1;
(statearr_28216_28250[(1)] = (11));

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
});})(c__26988__auto___28222,mults,ensure_mult,p))
;
return ((function (switch__26898__auto__,c__26988__auto___28222,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__26899__auto__ = null;
var cljs$core$async$state_machine__26899__auto____0 = (function (){
var statearr_28217 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28217[(0)] = cljs$core$async$state_machine__26899__auto__);

(statearr_28217[(1)] = (1));

return statearr_28217;
});
var cljs$core$async$state_machine__26899__auto____1 = (function (state_28176){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_28176);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e28218){if((e28218 instanceof Object)){
var ex__26902__auto__ = e28218;
var statearr_28219_28251 = state_28176;
(statearr_28219_28251[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28176);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28218;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28252 = state_28176;
state_28176 = G__28252;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$state_machine__26899__auto__ = function(state_28176){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26899__auto____1.call(this,state_28176);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26899__auto____0;
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26899__auto____1;
return cljs$core$async$state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___28222,mults,ensure_mult,p))
})();
var state__26990__auto__ = (function (){var statearr_28220 = f__26989__auto__.call(null);
(statearr_28220[(6)] = c__26988__auto___28222);

return statearr_28220;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___28222,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28254 = arguments.length;
switch (G__28254) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28257 = arguments.length;
switch (G__28257) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28260 = arguments.length;
switch (G__28260) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26988__auto___28327 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___28327,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___28327,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28299){
var state_val_28300 = (state_28299[(1)]);
if((state_val_28300 === (7))){
var state_28299__$1 = state_28299;
var statearr_28301_28328 = state_28299__$1;
(statearr_28301_28328[(2)] = null);

(statearr_28301_28328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (1))){
var state_28299__$1 = state_28299;
var statearr_28302_28329 = state_28299__$1;
(statearr_28302_28329[(2)] = null);

(statearr_28302_28329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (4))){
var inst_28263 = (state_28299[(7)]);
var inst_28265 = (inst_28263 < cnt);
var state_28299__$1 = state_28299;
if(cljs.core.truth_(inst_28265)){
var statearr_28303_28330 = state_28299__$1;
(statearr_28303_28330[(1)] = (6));

} else {
var statearr_28304_28331 = state_28299__$1;
(statearr_28304_28331[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (15))){
var inst_28295 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
var statearr_28305_28332 = state_28299__$1;
(statearr_28305_28332[(2)] = inst_28295);

(statearr_28305_28332[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (13))){
var inst_28288 = cljs.core.async.close_BANG_.call(null,out);
var state_28299__$1 = state_28299;
var statearr_28306_28333 = state_28299__$1;
(statearr_28306_28333[(2)] = inst_28288);

(statearr_28306_28333[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (6))){
var state_28299__$1 = state_28299;
var statearr_28307_28334 = state_28299__$1;
(statearr_28307_28334[(2)] = null);

(statearr_28307_28334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (3))){
var inst_28297 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28299__$1,inst_28297);
} else {
if((state_val_28300 === (12))){
var inst_28285 = (state_28299[(8)]);
var inst_28285__$1 = (state_28299[(2)]);
var inst_28286 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28285__$1);
var state_28299__$1 = (function (){var statearr_28308 = state_28299;
(statearr_28308[(8)] = inst_28285__$1);

return statearr_28308;
})();
if(cljs.core.truth_(inst_28286)){
var statearr_28309_28335 = state_28299__$1;
(statearr_28309_28335[(1)] = (13));

} else {
var statearr_28310_28336 = state_28299__$1;
(statearr_28310_28336[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (2))){
var inst_28262 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28263 = (0);
var state_28299__$1 = (function (){var statearr_28311 = state_28299;
(statearr_28311[(9)] = inst_28262);

(statearr_28311[(7)] = inst_28263);

return statearr_28311;
})();
var statearr_28312_28337 = state_28299__$1;
(statearr_28312_28337[(2)] = null);

(statearr_28312_28337[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (11))){
var inst_28263 = (state_28299[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28299,(10),Object,null,(9));
var inst_28272 = chs__$1.call(null,inst_28263);
var inst_28273 = done.call(null,inst_28263);
var inst_28274 = cljs.core.async.take_BANG_.call(null,inst_28272,inst_28273);
var state_28299__$1 = state_28299;
var statearr_28313_28338 = state_28299__$1;
(statearr_28313_28338[(2)] = inst_28274);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28299__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (9))){
var inst_28263 = (state_28299[(7)]);
var inst_28276 = (state_28299[(2)]);
var inst_28277 = (inst_28263 + (1));
var inst_28263__$1 = inst_28277;
var state_28299__$1 = (function (){var statearr_28314 = state_28299;
(statearr_28314[(10)] = inst_28276);

(statearr_28314[(7)] = inst_28263__$1);

return statearr_28314;
})();
var statearr_28315_28339 = state_28299__$1;
(statearr_28315_28339[(2)] = null);

(statearr_28315_28339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (5))){
var inst_28283 = (state_28299[(2)]);
var state_28299__$1 = (function (){var statearr_28316 = state_28299;
(statearr_28316[(11)] = inst_28283);

return statearr_28316;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28299__$1,(12),dchan);
} else {
if((state_val_28300 === (14))){
var inst_28285 = (state_28299[(8)]);
var inst_28290 = cljs.core.apply.call(null,f,inst_28285);
var state_28299__$1 = state_28299;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28299__$1,(16),out,inst_28290);
} else {
if((state_val_28300 === (16))){
var inst_28292 = (state_28299[(2)]);
var state_28299__$1 = (function (){var statearr_28317 = state_28299;
(statearr_28317[(12)] = inst_28292);

return statearr_28317;
})();
var statearr_28318_28340 = state_28299__$1;
(statearr_28318_28340[(2)] = null);

(statearr_28318_28340[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (10))){
var inst_28267 = (state_28299[(2)]);
var inst_28268 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28299__$1 = (function (){var statearr_28319 = state_28299;
(statearr_28319[(13)] = inst_28267);

return statearr_28319;
})();
var statearr_28320_28341 = state_28299__$1;
(statearr_28320_28341[(2)] = inst_28268);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28299__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28300 === (8))){
var inst_28281 = (state_28299[(2)]);
var state_28299__$1 = state_28299;
var statearr_28321_28342 = state_28299__$1;
(statearr_28321_28342[(2)] = inst_28281);

(statearr_28321_28342[(1)] = (5));


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
});})(c__26988__auto___28327,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__26898__auto__,c__26988__auto___28327,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__26899__auto__ = null;
var cljs$core$async$state_machine__26899__auto____0 = (function (){
var statearr_28322 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28322[(0)] = cljs$core$async$state_machine__26899__auto__);

(statearr_28322[(1)] = (1));

return statearr_28322;
});
var cljs$core$async$state_machine__26899__auto____1 = (function (state_28299){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_28299);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e28323){if((e28323 instanceof Object)){
var ex__26902__auto__ = e28323;
var statearr_28324_28343 = state_28299;
(statearr_28324_28343[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28323;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28344 = state_28299;
state_28299 = G__28344;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$state_machine__26899__auto__ = function(state_28299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26899__auto____1.call(this,state_28299);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26899__auto____0;
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26899__auto____1;
return cljs$core$async$state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___28327,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26990__auto__ = (function (){var statearr_28325 = f__26989__auto__.call(null);
(statearr_28325[(6)] = c__26988__auto___28327);

return statearr_28325;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___28327,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28347 = arguments.length;
switch (G__28347) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26988__auto___28401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___28401,out){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___28401,out){
return (function (state_28379){
var state_val_28380 = (state_28379[(1)]);
if((state_val_28380 === (7))){
var inst_28359 = (state_28379[(7)]);
var inst_28358 = (state_28379[(8)]);
var inst_28358__$1 = (state_28379[(2)]);
var inst_28359__$1 = cljs.core.nth.call(null,inst_28358__$1,(0),null);
var inst_28360 = cljs.core.nth.call(null,inst_28358__$1,(1),null);
var inst_28361 = (inst_28359__$1 == null);
var state_28379__$1 = (function (){var statearr_28381 = state_28379;
(statearr_28381[(9)] = inst_28360);

(statearr_28381[(7)] = inst_28359__$1);

(statearr_28381[(8)] = inst_28358__$1);

return statearr_28381;
})();
if(cljs.core.truth_(inst_28361)){
var statearr_28382_28402 = state_28379__$1;
(statearr_28382_28402[(1)] = (8));

} else {
var statearr_28383_28403 = state_28379__$1;
(statearr_28383_28403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (1))){
var inst_28348 = cljs.core.vec.call(null,chs);
var inst_28349 = inst_28348;
var state_28379__$1 = (function (){var statearr_28384 = state_28379;
(statearr_28384[(10)] = inst_28349);

return statearr_28384;
})();
var statearr_28385_28404 = state_28379__$1;
(statearr_28385_28404[(2)] = null);

(statearr_28385_28404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (4))){
var inst_28349 = (state_28379[(10)]);
var state_28379__$1 = state_28379;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28379__$1,(7),inst_28349);
} else {
if((state_val_28380 === (6))){
var inst_28375 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
var statearr_28386_28405 = state_28379__$1;
(statearr_28386_28405[(2)] = inst_28375);

(statearr_28386_28405[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (3))){
var inst_28377 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28379__$1,inst_28377);
} else {
if((state_val_28380 === (2))){
var inst_28349 = (state_28379[(10)]);
var inst_28351 = cljs.core.count.call(null,inst_28349);
var inst_28352 = (inst_28351 > (0));
var state_28379__$1 = state_28379;
if(cljs.core.truth_(inst_28352)){
var statearr_28388_28406 = state_28379__$1;
(statearr_28388_28406[(1)] = (4));

} else {
var statearr_28389_28407 = state_28379__$1;
(statearr_28389_28407[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (11))){
var inst_28349 = (state_28379[(10)]);
var inst_28368 = (state_28379[(2)]);
var tmp28387 = inst_28349;
var inst_28349__$1 = tmp28387;
var state_28379__$1 = (function (){var statearr_28390 = state_28379;
(statearr_28390[(11)] = inst_28368);

(statearr_28390[(10)] = inst_28349__$1);

return statearr_28390;
})();
var statearr_28391_28408 = state_28379__$1;
(statearr_28391_28408[(2)] = null);

(statearr_28391_28408[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (9))){
var inst_28359 = (state_28379[(7)]);
var state_28379__$1 = state_28379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28379__$1,(11),out,inst_28359);
} else {
if((state_val_28380 === (5))){
var inst_28373 = cljs.core.async.close_BANG_.call(null,out);
var state_28379__$1 = state_28379;
var statearr_28392_28409 = state_28379__$1;
(statearr_28392_28409[(2)] = inst_28373);

(statearr_28392_28409[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (10))){
var inst_28371 = (state_28379[(2)]);
var state_28379__$1 = state_28379;
var statearr_28393_28410 = state_28379__$1;
(statearr_28393_28410[(2)] = inst_28371);

(statearr_28393_28410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28380 === (8))){
var inst_28360 = (state_28379[(9)]);
var inst_28349 = (state_28379[(10)]);
var inst_28359 = (state_28379[(7)]);
var inst_28358 = (state_28379[(8)]);
var inst_28363 = (function (){var cs = inst_28349;
var vec__28354 = inst_28358;
var v = inst_28359;
var c = inst_28360;
return ((function (cs,vec__28354,v,c,inst_28360,inst_28349,inst_28359,inst_28358,state_val_28380,c__26988__auto___28401,out){
return (function (p1__28345_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28345_SHARP_);
});
;})(cs,vec__28354,v,c,inst_28360,inst_28349,inst_28359,inst_28358,state_val_28380,c__26988__auto___28401,out))
})();
var inst_28364 = cljs.core.filterv.call(null,inst_28363,inst_28349);
var inst_28349__$1 = inst_28364;
var state_28379__$1 = (function (){var statearr_28394 = state_28379;
(statearr_28394[(10)] = inst_28349__$1);

return statearr_28394;
})();
var statearr_28395_28411 = state_28379__$1;
(statearr_28395_28411[(2)] = null);

(statearr_28395_28411[(1)] = (2));


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
});})(c__26988__auto___28401,out))
;
return ((function (switch__26898__auto__,c__26988__auto___28401,out){
return (function() {
var cljs$core$async$state_machine__26899__auto__ = null;
var cljs$core$async$state_machine__26899__auto____0 = (function (){
var statearr_28396 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28396[(0)] = cljs$core$async$state_machine__26899__auto__);

(statearr_28396[(1)] = (1));

return statearr_28396;
});
var cljs$core$async$state_machine__26899__auto____1 = (function (state_28379){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_28379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e28397){if((e28397 instanceof Object)){
var ex__26902__auto__ = e28397;
var statearr_28398_28412 = state_28379;
(statearr_28398_28412[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28397;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28413 = state_28379;
state_28379 = G__28413;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$state_machine__26899__auto__ = function(state_28379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26899__auto____1.call(this,state_28379);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26899__auto____0;
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26899__auto____1;
return cljs$core$async$state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___28401,out))
})();
var state__26990__auto__ = (function (){var statearr_28399 = f__26989__auto__.call(null);
(statearr_28399[(6)] = c__26988__auto___28401);

return statearr_28399;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___28401,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28415 = arguments.length;
switch (G__28415) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26988__auto___28460 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___28460,out){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___28460,out){
return (function (state_28439){
var state_val_28440 = (state_28439[(1)]);
if((state_val_28440 === (7))){
var inst_28421 = (state_28439[(7)]);
var inst_28421__$1 = (state_28439[(2)]);
var inst_28422 = (inst_28421__$1 == null);
var inst_28423 = cljs.core.not.call(null,inst_28422);
var state_28439__$1 = (function (){var statearr_28441 = state_28439;
(statearr_28441[(7)] = inst_28421__$1);

return statearr_28441;
})();
if(inst_28423){
var statearr_28442_28461 = state_28439__$1;
(statearr_28442_28461[(1)] = (8));

} else {
var statearr_28443_28462 = state_28439__$1;
(statearr_28443_28462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (1))){
var inst_28416 = (0);
var state_28439__$1 = (function (){var statearr_28444 = state_28439;
(statearr_28444[(8)] = inst_28416);

return statearr_28444;
})();
var statearr_28445_28463 = state_28439__$1;
(statearr_28445_28463[(2)] = null);

(statearr_28445_28463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (4))){
var state_28439__$1 = state_28439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28439__$1,(7),ch);
} else {
if((state_val_28440 === (6))){
var inst_28434 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28446_28464 = state_28439__$1;
(statearr_28446_28464[(2)] = inst_28434);

(statearr_28446_28464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (3))){
var inst_28436 = (state_28439[(2)]);
var inst_28437 = cljs.core.async.close_BANG_.call(null,out);
var state_28439__$1 = (function (){var statearr_28447 = state_28439;
(statearr_28447[(9)] = inst_28436);

return statearr_28447;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28439__$1,inst_28437);
} else {
if((state_val_28440 === (2))){
var inst_28416 = (state_28439[(8)]);
var inst_28418 = (inst_28416 < n);
var state_28439__$1 = state_28439;
if(cljs.core.truth_(inst_28418)){
var statearr_28448_28465 = state_28439__$1;
(statearr_28448_28465[(1)] = (4));

} else {
var statearr_28449_28466 = state_28439__$1;
(statearr_28449_28466[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (11))){
var inst_28416 = (state_28439[(8)]);
var inst_28426 = (state_28439[(2)]);
var inst_28427 = (inst_28416 + (1));
var inst_28416__$1 = inst_28427;
var state_28439__$1 = (function (){var statearr_28450 = state_28439;
(statearr_28450[(10)] = inst_28426);

(statearr_28450[(8)] = inst_28416__$1);

return statearr_28450;
})();
var statearr_28451_28467 = state_28439__$1;
(statearr_28451_28467[(2)] = null);

(statearr_28451_28467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (9))){
var state_28439__$1 = state_28439;
var statearr_28452_28468 = state_28439__$1;
(statearr_28452_28468[(2)] = null);

(statearr_28452_28468[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (5))){
var state_28439__$1 = state_28439;
var statearr_28453_28469 = state_28439__$1;
(statearr_28453_28469[(2)] = null);

(statearr_28453_28469[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (10))){
var inst_28431 = (state_28439[(2)]);
var state_28439__$1 = state_28439;
var statearr_28454_28470 = state_28439__$1;
(statearr_28454_28470[(2)] = inst_28431);

(statearr_28454_28470[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28440 === (8))){
var inst_28421 = (state_28439[(7)]);
var state_28439__$1 = state_28439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28439__$1,(11),out,inst_28421);
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
});})(c__26988__auto___28460,out))
;
return ((function (switch__26898__auto__,c__26988__auto___28460,out){
return (function() {
var cljs$core$async$state_machine__26899__auto__ = null;
var cljs$core$async$state_machine__26899__auto____0 = (function (){
var statearr_28455 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28455[(0)] = cljs$core$async$state_machine__26899__auto__);

(statearr_28455[(1)] = (1));

return statearr_28455;
});
var cljs$core$async$state_machine__26899__auto____1 = (function (state_28439){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_28439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e28456){if((e28456 instanceof Object)){
var ex__26902__auto__ = e28456;
var statearr_28457_28471 = state_28439;
(statearr_28457_28471[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28456;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28472 = state_28439;
state_28439 = G__28472;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$state_machine__26899__auto__ = function(state_28439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26899__auto____1.call(this,state_28439);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26899__auto____0;
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26899__auto____1;
return cljs$core$async$state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___28460,out))
})();
var state__26990__auto__ = (function (){var statearr_28458 = f__26989__auto__.call(null);
(statearr_28458[(6)] = c__26988__auto___28460);

return statearr_28458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___28460,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28474 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28474 = (function (f,ch,meta28475){
this.f = f;
this.ch = ch;
this.meta28475 = meta28475;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28476,meta28475__$1){
var self__ = this;
var _28476__$1 = this;
return (new cljs.core.async.t_cljs$core$async28474(self__.f,self__.ch,meta28475__$1));
});

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28476){
var self__ = this;
var _28476__$1 = this;
return self__.meta28475;
});

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28477 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28477 = (function (f,ch,meta28475,_,fn1,meta28478){
this.f = f;
this.ch = ch;
this.meta28475 = meta28475;
this._ = _;
this.fn1 = fn1;
this.meta28478 = meta28478;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28479,meta28478__$1){
var self__ = this;
var _28479__$1 = this;
return (new cljs.core.async.t_cljs$core$async28477(self__.f,self__.ch,self__.meta28475,self__._,self__.fn1,meta28478__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28477.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28479){
var self__ = this;
var _28479__$1 = this;
return self__.meta28478;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28477.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28477.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28477.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28477.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28473_SHARP_){
return f1.call(null,(((p1__28473_SHARP_ == null))?null:self__.f.call(null,p1__28473_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28477.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28475","meta28475",-1823000600,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28474","cljs.core.async/t_cljs$core$async28474",1672143145,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28478","meta28478",-756399176,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28477.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28477.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28477";

cljs.core.async.t_cljs$core$async28477.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28477");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28477.
 */
cljs.core.async.__GT_t_cljs$core$async28477 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28477(f__$1,ch__$1,meta28475__$1,___$2,fn1__$1,meta28478){
return (new cljs.core.async.t_cljs$core$async28477(f__$1,ch__$1,meta28475__$1,___$2,fn1__$1,meta28478));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28477(self__.f,self__.ch,self__.meta28475,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28474.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28474.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28475","meta28475",-1823000600,null)], null);
});

cljs.core.async.t_cljs$core$async28474.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28474.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28474";

cljs.core.async.t_cljs$core$async28474.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28474");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28474.
 */
cljs.core.async.__GT_t_cljs$core$async28474 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28474(f__$1,ch__$1,meta28475){
return (new cljs.core.async.t_cljs$core$async28474(f__$1,ch__$1,meta28475));
});

}

return (new cljs.core.async.t_cljs$core$async28474(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28480 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28480 = (function (f,ch,meta28481){
this.f = f;
this.ch = ch;
this.meta28481 = meta28481;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28482,meta28481__$1){
var self__ = this;
var _28482__$1 = this;
return (new cljs.core.async.t_cljs$core$async28480(self__.f,self__.ch,meta28481__$1));
});

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28482){
var self__ = this;
var _28482__$1 = this;
return self__.meta28481;
});

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28480.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28480.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28481","meta28481",425943498,null)], null);
});

cljs.core.async.t_cljs$core$async28480.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28480.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28480";

cljs.core.async.t_cljs$core$async28480.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28480");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28480.
 */
cljs.core.async.__GT_t_cljs$core$async28480 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28480(f__$1,ch__$1,meta28481){
return (new cljs.core.async.t_cljs$core$async28480(f__$1,ch__$1,meta28481));
});

}

return (new cljs.core.async.t_cljs$core$async28480(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28483 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28483 = (function (p,ch,meta28484){
this.p = p;
this.ch = ch;
this.meta28484 = meta28484;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async28483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28485,meta28484__$1){
var self__ = this;
var _28485__$1 = this;
return (new cljs.core.async.t_cljs$core$async28483(self__.p,self__.ch,meta28484__$1));
});

cljs.core.async.t_cljs$core$async28483.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28485){
var self__ = this;
var _28485__$1 = this;
return self__.meta28484;
});

cljs.core.async.t_cljs$core$async28483.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28483.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28483.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28483.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28483.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28483.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async28483.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28483.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28484","meta28484",521907615,null)], null);
});

cljs.core.async.t_cljs$core$async28483.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28483.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28483";

cljs.core.async.t_cljs$core$async28483.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async28483");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28483.
 */
cljs.core.async.__GT_t_cljs$core$async28483 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28483(p__$1,ch__$1,meta28484){
return (new cljs.core.async.t_cljs$core$async28483(p__$1,ch__$1,meta28484));
});

}

return (new cljs.core.async.t_cljs$core$async28483(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28487 = arguments.length;
switch (G__28487) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26988__auto___28527 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___28527,out){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___28527,out){
return (function (state_28508){
var state_val_28509 = (state_28508[(1)]);
if((state_val_28509 === (7))){
var inst_28504 = (state_28508[(2)]);
var state_28508__$1 = state_28508;
var statearr_28510_28528 = state_28508__$1;
(statearr_28510_28528[(2)] = inst_28504);

(statearr_28510_28528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (1))){
var state_28508__$1 = state_28508;
var statearr_28511_28529 = state_28508__$1;
(statearr_28511_28529[(2)] = null);

(statearr_28511_28529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (4))){
var inst_28490 = (state_28508[(7)]);
var inst_28490__$1 = (state_28508[(2)]);
var inst_28491 = (inst_28490__$1 == null);
var state_28508__$1 = (function (){var statearr_28512 = state_28508;
(statearr_28512[(7)] = inst_28490__$1);

return statearr_28512;
})();
if(cljs.core.truth_(inst_28491)){
var statearr_28513_28530 = state_28508__$1;
(statearr_28513_28530[(1)] = (5));

} else {
var statearr_28514_28531 = state_28508__$1;
(statearr_28514_28531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (6))){
var inst_28490 = (state_28508[(7)]);
var inst_28495 = p.call(null,inst_28490);
var state_28508__$1 = state_28508;
if(cljs.core.truth_(inst_28495)){
var statearr_28515_28532 = state_28508__$1;
(statearr_28515_28532[(1)] = (8));

} else {
var statearr_28516_28533 = state_28508__$1;
(statearr_28516_28533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (3))){
var inst_28506 = (state_28508[(2)]);
var state_28508__$1 = state_28508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28508__$1,inst_28506);
} else {
if((state_val_28509 === (2))){
var state_28508__$1 = state_28508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28508__$1,(4),ch);
} else {
if((state_val_28509 === (11))){
var inst_28498 = (state_28508[(2)]);
var state_28508__$1 = state_28508;
var statearr_28517_28534 = state_28508__$1;
(statearr_28517_28534[(2)] = inst_28498);

(statearr_28517_28534[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (9))){
var state_28508__$1 = state_28508;
var statearr_28518_28535 = state_28508__$1;
(statearr_28518_28535[(2)] = null);

(statearr_28518_28535[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (5))){
var inst_28493 = cljs.core.async.close_BANG_.call(null,out);
var state_28508__$1 = state_28508;
var statearr_28519_28536 = state_28508__$1;
(statearr_28519_28536[(2)] = inst_28493);

(statearr_28519_28536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (10))){
var inst_28501 = (state_28508[(2)]);
var state_28508__$1 = (function (){var statearr_28520 = state_28508;
(statearr_28520[(8)] = inst_28501);

return statearr_28520;
})();
var statearr_28521_28537 = state_28508__$1;
(statearr_28521_28537[(2)] = null);

(statearr_28521_28537[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28509 === (8))){
var inst_28490 = (state_28508[(7)]);
var state_28508__$1 = state_28508;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28508__$1,(11),out,inst_28490);
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
});})(c__26988__auto___28527,out))
;
return ((function (switch__26898__auto__,c__26988__auto___28527,out){
return (function() {
var cljs$core$async$state_machine__26899__auto__ = null;
var cljs$core$async$state_machine__26899__auto____0 = (function (){
var statearr_28522 = [null,null,null,null,null,null,null,null,null];
(statearr_28522[(0)] = cljs$core$async$state_machine__26899__auto__);

(statearr_28522[(1)] = (1));

return statearr_28522;
});
var cljs$core$async$state_machine__26899__auto____1 = (function (state_28508){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_28508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e28523){if((e28523 instanceof Object)){
var ex__26902__auto__ = e28523;
var statearr_28524_28538 = state_28508;
(statearr_28524_28538[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28523;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28539 = state_28508;
state_28508 = G__28539;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$state_machine__26899__auto__ = function(state_28508){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26899__auto____1.call(this,state_28508);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26899__auto____0;
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26899__auto____1;
return cljs$core$async$state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___28527,out))
})();
var state__26990__auto__ = (function (){var statearr_28525 = f__26989__auto__.call(null);
(statearr_28525[(6)] = c__26988__auto___28527);

return statearr_28525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___28527,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28541 = arguments.length;
switch (G__28541) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto__){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto__){
return (function (state_28604){
var state_val_28605 = (state_28604[(1)]);
if((state_val_28605 === (7))){
var inst_28600 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
var statearr_28606_28644 = state_28604__$1;
(statearr_28606_28644[(2)] = inst_28600);

(statearr_28606_28644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (20))){
var inst_28570 = (state_28604[(7)]);
var inst_28581 = (state_28604[(2)]);
var inst_28582 = cljs.core.next.call(null,inst_28570);
var inst_28556 = inst_28582;
var inst_28557 = null;
var inst_28558 = (0);
var inst_28559 = (0);
var state_28604__$1 = (function (){var statearr_28607 = state_28604;
(statearr_28607[(8)] = inst_28557);

(statearr_28607[(9)] = inst_28559);

(statearr_28607[(10)] = inst_28581);

(statearr_28607[(11)] = inst_28556);

(statearr_28607[(12)] = inst_28558);

return statearr_28607;
})();
var statearr_28608_28645 = state_28604__$1;
(statearr_28608_28645[(2)] = null);

(statearr_28608_28645[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (1))){
var state_28604__$1 = state_28604;
var statearr_28609_28646 = state_28604__$1;
(statearr_28609_28646[(2)] = null);

(statearr_28609_28646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (4))){
var inst_28545 = (state_28604[(13)]);
var inst_28545__$1 = (state_28604[(2)]);
var inst_28546 = (inst_28545__$1 == null);
var state_28604__$1 = (function (){var statearr_28610 = state_28604;
(statearr_28610[(13)] = inst_28545__$1);

return statearr_28610;
})();
if(cljs.core.truth_(inst_28546)){
var statearr_28611_28647 = state_28604__$1;
(statearr_28611_28647[(1)] = (5));

} else {
var statearr_28612_28648 = state_28604__$1;
(statearr_28612_28648[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (15))){
var state_28604__$1 = state_28604;
var statearr_28616_28649 = state_28604__$1;
(statearr_28616_28649[(2)] = null);

(statearr_28616_28649[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (21))){
var state_28604__$1 = state_28604;
var statearr_28617_28650 = state_28604__$1;
(statearr_28617_28650[(2)] = null);

(statearr_28617_28650[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (13))){
var inst_28557 = (state_28604[(8)]);
var inst_28559 = (state_28604[(9)]);
var inst_28556 = (state_28604[(11)]);
var inst_28558 = (state_28604[(12)]);
var inst_28566 = (state_28604[(2)]);
var inst_28567 = (inst_28559 + (1));
var tmp28613 = inst_28557;
var tmp28614 = inst_28556;
var tmp28615 = inst_28558;
var inst_28556__$1 = tmp28614;
var inst_28557__$1 = tmp28613;
var inst_28558__$1 = tmp28615;
var inst_28559__$1 = inst_28567;
var state_28604__$1 = (function (){var statearr_28618 = state_28604;
(statearr_28618[(14)] = inst_28566);

(statearr_28618[(8)] = inst_28557__$1);

(statearr_28618[(9)] = inst_28559__$1);

(statearr_28618[(11)] = inst_28556__$1);

(statearr_28618[(12)] = inst_28558__$1);

return statearr_28618;
})();
var statearr_28619_28651 = state_28604__$1;
(statearr_28619_28651[(2)] = null);

(statearr_28619_28651[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (22))){
var state_28604__$1 = state_28604;
var statearr_28620_28652 = state_28604__$1;
(statearr_28620_28652[(2)] = null);

(statearr_28620_28652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (6))){
var inst_28545 = (state_28604[(13)]);
var inst_28554 = f.call(null,inst_28545);
var inst_28555 = cljs.core.seq.call(null,inst_28554);
var inst_28556 = inst_28555;
var inst_28557 = null;
var inst_28558 = (0);
var inst_28559 = (0);
var state_28604__$1 = (function (){var statearr_28621 = state_28604;
(statearr_28621[(8)] = inst_28557);

(statearr_28621[(9)] = inst_28559);

(statearr_28621[(11)] = inst_28556);

(statearr_28621[(12)] = inst_28558);

return statearr_28621;
})();
var statearr_28622_28653 = state_28604__$1;
(statearr_28622_28653[(2)] = null);

(statearr_28622_28653[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (17))){
var inst_28570 = (state_28604[(7)]);
var inst_28574 = cljs.core.chunk_first.call(null,inst_28570);
var inst_28575 = cljs.core.chunk_rest.call(null,inst_28570);
var inst_28576 = cljs.core.count.call(null,inst_28574);
var inst_28556 = inst_28575;
var inst_28557 = inst_28574;
var inst_28558 = inst_28576;
var inst_28559 = (0);
var state_28604__$1 = (function (){var statearr_28623 = state_28604;
(statearr_28623[(8)] = inst_28557);

(statearr_28623[(9)] = inst_28559);

(statearr_28623[(11)] = inst_28556);

(statearr_28623[(12)] = inst_28558);

return statearr_28623;
})();
var statearr_28624_28654 = state_28604__$1;
(statearr_28624_28654[(2)] = null);

(statearr_28624_28654[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (3))){
var inst_28602 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28604__$1,inst_28602);
} else {
if((state_val_28605 === (12))){
var inst_28590 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
var statearr_28625_28655 = state_28604__$1;
(statearr_28625_28655[(2)] = inst_28590);

(statearr_28625_28655[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (2))){
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28604__$1,(4),in$);
} else {
if((state_val_28605 === (23))){
var inst_28598 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
var statearr_28626_28656 = state_28604__$1;
(statearr_28626_28656[(2)] = inst_28598);

(statearr_28626_28656[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (19))){
var inst_28585 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
var statearr_28627_28657 = state_28604__$1;
(statearr_28627_28657[(2)] = inst_28585);

(statearr_28627_28657[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (11))){
var inst_28570 = (state_28604[(7)]);
var inst_28556 = (state_28604[(11)]);
var inst_28570__$1 = cljs.core.seq.call(null,inst_28556);
var state_28604__$1 = (function (){var statearr_28628 = state_28604;
(statearr_28628[(7)] = inst_28570__$1);

return statearr_28628;
})();
if(inst_28570__$1){
var statearr_28629_28658 = state_28604__$1;
(statearr_28629_28658[(1)] = (14));

} else {
var statearr_28630_28659 = state_28604__$1;
(statearr_28630_28659[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (9))){
var inst_28592 = (state_28604[(2)]);
var inst_28593 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28604__$1 = (function (){var statearr_28631 = state_28604;
(statearr_28631[(15)] = inst_28592);

return statearr_28631;
})();
if(cljs.core.truth_(inst_28593)){
var statearr_28632_28660 = state_28604__$1;
(statearr_28632_28660[(1)] = (21));

} else {
var statearr_28633_28661 = state_28604__$1;
(statearr_28633_28661[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (5))){
var inst_28548 = cljs.core.async.close_BANG_.call(null,out);
var state_28604__$1 = state_28604;
var statearr_28634_28662 = state_28604__$1;
(statearr_28634_28662[(2)] = inst_28548);

(statearr_28634_28662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (14))){
var inst_28570 = (state_28604[(7)]);
var inst_28572 = cljs.core.chunked_seq_QMARK_.call(null,inst_28570);
var state_28604__$1 = state_28604;
if(inst_28572){
var statearr_28635_28663 = state_28604__$1;
(statearr_28635_28663[(1)] = (17));

} else {
var statearr_28636_28664 = state_28604__$1;
(statearr_28636_28664[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (16))){
var inst_28588 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
var statearr_28637_28665 = state_28604__$1;
(statearr_28637_28665[(2)] = inst_28588);

(statearr_28637_28665[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (10))){
var inst_28557 = (state_28604[(8)]);
var inst_28559 = (state_28604[(9)]);
var inst_28564 = cljs.core._nth.call(null,inst_28557,inst_28559);
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28604__$1,(13),out,inst_28564);
} else {
if((state_val_28605 === (18))){
var inst_28570 = (state_28604[(7)]);
var inst_28579 = cljs.core.first.call(null,inst_28570);
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28604__$1,(20),out,inst_28579);
} else {
if((state_val_28605 === (8))){
var inst_28559 = (state_28604[(9)]);
var inst_28558 = (state_28604[(12)]);
var inst_28561 = (inst_28559 < inst_28558);
var inst_28562 = inst_28561;
var state_28604__$1 = state_28604;
if(cljs.core.truth_(inst_28562)){
var statearr_28638_28666 = state_28604__$1;
(statearr_28638_28666[(1)] = (10));

} else {
var statearr_28639_28667 = state_28604__$1;
(statearr_28639_28667[(1)] = (11));

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
});})(c__26988__auto__))
;
return ((function (switch__26898__auto__,c__26988__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26899__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26899__auto____0 = (function (){
var statearr_28640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28640[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26899__auto__);

(statearr_28640[(1)] = (1));

return statearr_28640;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26899__auto____1 = (function (state_28604){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_28604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e28641){if((e28641 instanceof Object)){
var ex__26902__auto__ = e28641;
var statearr_28642_28668 = state_28604;
(statearr_28642_28668[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28669 = state_28604;
state_28604 = G__28669;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26899__auto__ = function(state_28604){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26899__auto____1.call(this,state_28604);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26899__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26899__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto__))
})();
var state__26990__auto__ = (function (){var statearr_28643 = f__26989__auto__.call(null);
(statearr_28643[(6)] = c__26988__auto__);

return statearr_28643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto__))
);

return c__26988__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__28671 = arguments.length;
switch (G__28671) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__28674 = arguments.length;
switch (G__28674) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__28677 = arguments.length;
switch (G__28677) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26988__auto___28724 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___28724,out){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___28724,out){
return (function (state_28701){
var state_val_28702 = (state_28701[(1)]);
if((state_val_28702 === (7))){
var inst_28696 = (state_28701[(2)]);
var state_28701__$1 = state_28701;
var statearr_28703_28725 = state_28701__$1;
(statearr_28703_28725[(2)] = inst_28696);

(statearr_28703_28725[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (1))){
var inst_28678 = null;
var state_28701__$1 = (function (){var statearr_28704 = state_28701;
(statearr_28704[(7)] = inst_28678);

return statearr_28704;
})();
var statearr_28705_28726 = state_28701__$1;
(statearr_28705_28726[(2)] = null);

(statearr_28705_28726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (4))){
var inst_28681 = (state_28701[(8)]);
var inst_28681__$1 = (state_28701[(2)]);
var inst_28682 = (inst_28681__$1 == null);
var inst_28683 = cljs.core.not.call(null,inst_28682);
var state_28701__$1 = (function (){var statearr_28706 = state_28701;
(statearr_28706[(8)] = inst_28681__$1);

return statearr_28706;
})();
if(inst_28683){
var statearr_28707_28727 = state_28701__$1;
(statearr_28707_28727[(1)] = (5));

} else {
var statearr_28708_28728 = state_28701__$1;
(statearr_28708_28728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (6))){
var state_28701__$1 = state_28701;
var statearr_28709_28729 = state_28701__$1;
(statearr_28709_28729[(2)] = null);

(statearr_28709_28729[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (3))){
var inst_28698 = (state_28701[(2)]);
var inst_28699 = cljs.core.async.close_BANG_.call(null,out);
var state_28701__$1 = (function (){var statearr_28710 = state_28701;
(statearr_28710[(9)] = inst_28698);

return statearr_28710;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28701__$1,inst_28699);
} else {
if((state_val_28702 === (2))){
var state_28701__$1 = state_28701;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28701__$1,(4),ch);
} else {
if((state_val_28702 === (11))){
var inst_28681 = (state_28701[(8)]);
var inst_28690 = (state_28701[(2)]);
var inst_28678 = inst_28681;
var state_28701__$1 = (function (){var statearr_28711 = state_28701;
(statearr_28711[(10)] = inst_28690);

(statearr_28711[(7)] = inst_28678);

return statearr_28711;
})();
var statearr_28712_28730 = state_28701__$1;
(statearr_28712_28730[(2)] = null);

(statearr_28712_28730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (9))){
var inst_28681 = (state_28701[(8)]);
var state_28701__$1 = state_28701;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28701__$1,(11),out,inst_28681);
} else {
if((state_val_28702 === (5))){
var inst_28678 = (state_28701[(7)]);
var inst_28681 = (state_28701[(8)]);
var inst_28685 = cljs.core._EQ_.call(null,inst_28681,inst_28678);
var state_28701__$1 = state_28701;
if(inst_28685){
var statearr_28714_28731 = state_28701__$1;
(statearr_28714_28731[(1)] = (8));

} else {
var statearr_28715_28732 = state_28701__$1;
(statearr_28715_28732[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (10))){
var inst_28693 = (state_28701[(2)]);
var state_28701__$1 = state_28701;
var statearr_28716_28733 = state_28701__$1;
(statearr_28716_28733[(2)] = inst_28693);

(statearr_28716_28733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28702 === (8))){
var inst_28678 = (state_28701[(7)]);
var tmp28713 = inst_28678;
var inst_28678__$1 = tmp28713;
var state_28701__$1 = (function (){var statearr_28717 = state_28701;
(statearr_28717[(7)] = inst_28678__$1);

return statearr_28717;
})();
var statearr_28718_28734 = state_28701__$1;
(statearr_28718_28734[(2)] = null);

(statearr_28718_28734[(1)] = (2));


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
});})(c__26988__auto___28724,out))
;
return ((function (switch__26898__auto__,c__26988__auto___28724,out){
return (function() {
var cljs$core$async$state_machine__26899__auto__ = null;
var cljs$core$async$state_machine__26899__auto____0 = (function (){
var statearr_28719 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28719[(0)] = cljs$core$async$state_machine__26899__auto__);

(statearr_28719[(1)] = (1));

return statearr_28719;
});
var cljs$core$async$state_machine__26899__auto____1 = (function (state_28701){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_28701);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e28720){if((e28720 instanceof Object)){
var ex__26902__auto__ = e28720;
var statearr_28721_28735 = state_28701;
(statearr_28721_28735[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28701);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28736 = state_28701;
state_28701 = G__28736;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$state_machine__26899__auto__ = function(state_28701){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26899__auto____1.call(this,state_28701);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26899__auto____0;
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26899__auto____1;
return cljs$core$async$state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___28724,out))
})();
var state__26990__auto__ = (function (){var statearr_28722 = f__26989__auto__.call(null);
(statearr_28722[(6)] = c__26988__auto___28724);

return statearr_28722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___28724,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__28738 = arguments.length;
switch (G__28738) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26988__auto___28804 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___28804,out){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___28804,out){
return (function (state_28776){
var state_val_28777 = (state_28776[(1)]);
if((state_val_28777 === (7))){
var inst_28772 = (state_28776[(2)]);
var state_28776__$1 = state_28776;
var statearr_28778_28805 = state_28776__$1;
(statearr_28778_28805[(2)] = inst_28772);

(statearr_28778_28805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28777 === (1))){
var inst_28739 = (new Array(n));
var inst_28740 = inst_28739;
var inst_28741 = (0);
var state_28776__$1 = (function (){var statearr_28779 = state_28776;
(statearr_28779[(7)] = inst_28740);

(statearr_28779[(8)] = inst_28741);

return statearr_28779;
})();
var statearr_28780_28806 = state_28776__$1;
(statearr_28780_28806[(2)] = null);

(statearr_28780_28806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28777 === (4))){
var inst_28744 = (state_28776[(9)]);
var inst_28744__$1 = (state_28776[(2)]);
var inst_28745 = (inst_28744__$1 == null);
var inst_28746 = cljs.core.not.call(null,inst_28745);
var state_28776__$1 = (function (){var statearr_28781 = state_28776;
(statearr_28781[(9)] = inst_28744__$1);

return statearr_28781;
})();
if(inst_28746){
var statearr_28782_28807 = state_28776__$1;
(statearr_28782_28807[(1)] = (5));

} else {
var statearr_28783_28808 = state_28776__$1;
(statearr_28783_28808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28777 === (15))){
var inst_28766 = (state_28776[(2)]);
var state_28776__$1 = state_28776;
var statearr_28784_28809 = state_28776__$1;
(statearr_28784_28809[(2)] = inst_28766);

(statearr_28784_28809[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28777 === (13))){
var state_28776__$1 = state_28776;
var statearr_28785_28810 = state_28776__$1;
(statearr_28785_28810[(2)] = null);

(statearr_28785_28810[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28777 === (6))){
var inst_28741 = (state_28776[(8)]);
var inst_28762 = (inst_28741 > (0));
var state_28776__$1 = state_28776;
if(cljs.core.truth_(inst_28762)){
var statearr_28786_28811 = state_28776__$1;
(statearr_28786_28811[(1)] = (12));

} else {
var statearr_28787_28812 = state_28776__$1;
(statearr_28787_28812[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28777 === (3))){
var inst_28774 = (state_28776[(2)]);
var state_28776__$1 = state_28776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28776__$1,inst_28774);
} else {
if((state_val_28777 === (12))){
var inst_28740 = (state_28776[(7)]);
var inst_28764 = cljs.core.vec.call(null,inst_28740);
var state_28776__$1 = state_28776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28776__$1,(15),out,inst_28764);
} else {
if((state_val_28777 === (2))){
var state_28776__$1 = state_28776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28776__$1,(4),ch);
} else {
if((state_val_28777 === (11))){
var inst_28756 = (state_28776[(2)]);
var inst_28757 = (new Array(n));
var inst_28740 = inst_28757;
var inst_28741 = (0);
var state_28776__$1 = (function (){var statearr_28788 = state_28776;
(statearr_28788[(7)] = inst_28740);

(statearr_28788[(8)] = inst_28741);

(statearr_28788[(10)] = inst_28756);

return statearr_28788;
})();
var statearr_28789_28813 = state_28776__$1;
(statearr_28789_28813[(2)] = null);

(statearr_28789_28813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28777 === (9))){
var inst_28740 = (state_28776[(7)]);
var inst_28754 = cljs.core.vec.call(null,inst_28740);
var state_28776__$1 = state_28776;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28776__$1,(11),out,inst_28754);
} else {
if((state_val_28777 === (5))){
var inst_28740 = (state_28776[(7)]);
var inst_28741 = (state_28776[(8)]);
var inst_28749 = (state_28776[(11)]);
var inst_28744 = (state_28776[(9)]);
var inst_28748 = (inst_28740[inst_28741] = inst_28744);
var inst_28749__$1 = (inst_28741 + (1));
var inst_28750 = (inst_28749__$1 < n);
var state_28776__$1 = (function (){var statearr_28790 = state_28776;
(statearr_28790[(12)] = inst_28748);

(statearr_28790[(11)] = inst_28749__$1);

return statearr_28790;
})();
if(cljs.core.truth_(inst_28750)){
var statearr_28791_28814 = state_28776__$1;
(statearr_28791_28814[(1)] = (8));

} else {
var statearr_28792_28815 = state_28776__$1;
(statearr_28792_28815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28777 === (14))){
var inst_28769 = (state_28776[(2)]);
var inst_28770 = cljs.core.async.close_BANG_.call(null,out);
var state_28776__$1 = (function (){var statearr_28794 = state_28776;
(statearr_28794[(13)] = inst_28769);

return statearr_28794;
})();
var statearr_28795_28816 = state_28776__$1;
(statearr_28795_28816[(2)] = inst_28770);

(statearr_28795_28816[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28777 === (10))){
var inst_28760 = (state_28776[(2)]);
var state_28776__$1 = state_28776;
var statearr_28796_28817 = state_28776__$1;
(statearr_28796_28817[(2)] = inst_28760);

(statearr_28796_28817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28777 === (8))){
var inst_28740 = (state_28776[(7)]);
var inst_28749 = (state_28776[(11)]);
var tmp28793 = inst_28740;
var inst_28740__$1 = tmp28793;
var inst_28741 = inst_28749;
var state_28776__$1 = (function (){var statearr_28797 = state_28776;
(statearr_28797[(7)] = inst_28740__$1);

(statearr_28797[(8)] = inst_28741);

return statearr_28797;
})();
var statearr_28798_28818 = state_28776__$1;
(statearr_28798_28818[(2)] = null);

(statearr_28798_28818[(1)] = (2));


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
});})(c__26988__auto___28804,out))
;
return ((function (switch__26898__auto__,c__26988__auto___28804,out){
return (function() {
var cljs$core$async$state_machine__26899__auto__ = null;
var cljs$core$async$state_machine__26899__auto____0 = (function (){
var statearr_28799 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28799[(0)] = cljs$core$async$state_machine__26899__auto__);

(statearr_28799[(1)] = (1));

return statearr_28799;
});
var cljs$core$async$state_machine__26899__auto____1 = (function (state_28776){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_28776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e28800){if((e28800 instanceof Object)){
var ex__26902__auto__ = e28800;
var statearr_28801_28819 = state_28776;
(statearr_28801_28819[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28820 = state_28776;
state_28776 = G__28820;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$state_machine__26899__auto__ = function(state_28776){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26899__auto____1.call(this,state_28776);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26899__auto____0;
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26899__auto____1;
return cljs$core$async$state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___28804,out))
})();
var state__26990__auto__ = (function (){var statearr_28802 = f__26989__auto__.call(null);
(statearr_28802[(6)] = c__26988__auto___28804);

return statearr_28802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___28804,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__28822 = arguments.length;
switch (G__28822) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26988__auto___28892 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26988__auto___28892,out){
return (function (){
var f__26989__auto__ = (function (){var switch__26898__auto__ = ((function (c__26988__auto___28892,out){
return (function (state_28864){
var state_val_28865 = (state_28864[(1)]);
if((state_val_28865 === (7))){
var inst_28860 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28866_28893 = state_28864__$1;
(statearr_28866_28893[(2)] = inst_28860);

(statearr_28866_28893[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (1))){
var inst_28823 = [];
var inst_28824 = inst_28823;
var inst_28825 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28864__$1 = (function (){var statearr_28867 = state_28864;
(statearr_28867[(7)] = inst_28825);

(statearr_28867[(8)] = inst_28824);

return statearr_28867;
})();
var statearr_28868_28894 = state_28864__$1;
(statearr_28868_28894[(2)] = null);

(statearr_28868_28894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (4))){
var inst_28828 = (state_28864[(9)]);
var inst_28828__$1 = (state_28864[(2)]);
var inst_28829 = (inst_28828__$1 == null);
var inst_28830 = cljs.core.not.call(null,inst_28829);
var state_28864__$1 = (function (){var statearr_28869 = state_28864;
(statearr_28869[(9)] = inst_28828__$1);

return statearr_28869;
})();
if(inst_28830){
var statearr_28870_28895 = state_28864__$1;
(statearr_28870_28895[(1)] = (5));

} else {
var statearr_28871_28896 = state_28864__$1;
(statearr_28871_28896[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (15))){
var inst_28854 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28872_28897 = state_28864__$1;
(statearr_28872_28897[(2)] = inst_28854);

(statearr_28872_28897[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (13))){
var state_28864__$1 = state_28864;
var statearr_28873_28898 = state_28864__$1;
(statearr_28873_28898[(2)] = null);

(statearr_28873_28898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (6))){
var inst_28824 = (state_28864[(8)]);
var inst_28849 = inst_28824.length;
var inst_28850 = (inst_28849 > (0));
var state_28864__$1 = state_28864;
if(cljs.core.truth_(inst_28850)){
var statearr_28874_28899 = state_28864__$1;
(statearr_28874_28899[(1)] = (12));

} else {
var statearr_28875_28900 = state_28864__$1;
(statearr_28875_28900[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (3))){
var inst_28862 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28864__$1,inst_28862);
} else {
if((state_val_28865 === (12))){
var inst_28824 = (state_28864[(8)]);
var inst_28852 = cljs.core.vec.call(null,inst_28824);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28864__$1,(15),out,inst_28852);
} else {
if((state_val_28865 === (2))){
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28864__$1,(4),ch);
} else {
if((state_val_28865 === (11))){
var inst_28828 = (state_28864[(9)]);
var inst_28832 = (state_28864[(10)]);
var inst_28842 = (state_28864[(2)]);
var inst_28843 = [];
var inst_28844 = inst_28843.push(inst_28828);
var inst_28824 = inst_28843;
var inst_28825 = inst_28832;
var state_28864__$1 = (function (){var statearr_28876 = state_28864;
(statearr_28876[(11)] = inst_28844);

(statearr_28876[(12)] = inst_28842);

(statearr_28876[(7)] = inst_28825);

(statearr_28876[(8)] = inst_28824);

return statearr_28876;
})();
var statearr_28877_28901 = state_28864__$1;
(statearr_28877_28901[(2)] = null);

(statearr_28877_28901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (9))){
var inst_28824 = (state_28864[(8)]);
var inst_28840 = cljs.core.vec.call(null,inst_28824);
var state_28864__$1 = state_28864;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28864__$1,(11),out,inst_28840);
} else {
if((state_val_28865 === (5))){
var inst_28825 = (state_28864[(7)]);
var inst_28828 = (state_28864[(9)]);
var inst_28832 = (state_28864[(10)]);
var inst_28832__$1 = f.call(null,inst_28828);
var inst_28833 = cljs.core._EQ_.call(null,inst_28832__$1,inst_28825);
var inst_28834 = cljs.core.keyword_identical_QMARK_.call(null,inst_28825,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28835 = ((inst_28833) || (inst_28834));
var state_28864__$1 = (function (){var statearr_28878 = state_28864;
(statearr_28878[(10)] = inst_28832__$1);

return statearr_28878;
})();
if(cljs.core.truth_(inst_28835)){
var statearr_28879_28902 = state_28864__$1;
(statearr_28879_28902[(1)] = (8));

} else {
var statearr_28880_28903 = state_28864__$1;
(statearr_28880_28903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (14))){
var inst_28857 = (state_28864[(2)]);
var inst_28858 = cljs.core.async.close_BANG_.call(null,out);
var state_28864__$1 = (function (){var statearr_28882 = state_28864;
(statearr_28882[(13)] = inst_28857);

return statearr_28882;
})();
var statearr_28883_28904 = state_28864__$1;
(statearr_28883_28904[(2)] = inst_28858);

(statearr_28883_28904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (10))){
var inst_28847 = (state_28864[(2)]);
var state_28864__$1 = state_28864;
var statearr_28884_28905 = state_28864__$1;
(statearr_28884_28905[(2)] = inst_28847);

(statearr_28884_28905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28865 === (8))){
var inst_28824 = (state_28864[(8)]);
var inst_28828 = (state_28864[(9)]);
var inst_28832 = (state_28864[(10)]);
var inst_28837 = inst_28824.push(inst_28828);
var tmp28881 = inst_28824;
var inst_28824__$1 = tmp28881;
var inst_28825 = inst_28832;
var state_28864__$1 = (function (){var statearr_28885 = state_28864;
(statearr_28885[(14)] = inst_28837);

(statearr_28885[(7)] = inst_28825);

(statearr_28885[(8)] = inst_28824__$1);

return statearr_28885;
})();
var statearr_28886_28906 = state_28864__$1;
(statearr_28886_28906[(2)] = null);

(statearr_28886_28906[(1)] = (2));


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
});})(c__26988__auto___28892,out))
;
return ((function (switch__26898__auto__,c__26988__auto___28892,out){
return (function() {
var cljs$core$async$state_machine__26899__auto__ = null;
var cljs$core$async$state_machine__26899__auto____0 = (function (){
var statearr_28887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28887[(0)] = cljs$core$async$state_machine__26899__auto__);

(statearr_28887[(1)] = (1));

return statearr_28887;
});
var cljs$core$async$state_machine__26899__auto____1 = (function (state_28864){
while(true){
var ret_value__26900__auto__ = (function (){try{while(true){
var result__26901__auto__ = switch__26898__auto__.call(null,state_28864);
if(cljs.core.keyword_identical_QMARK_.call(null,result__26901__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26901__auto__;
}
break;
}
}catch (e28888){if((e28888 instanceof Object)){
var ex__26902__auto__ = e28888;
var statearr_28889_28907 = state_28864;
(statearr_28889_28907[(5)] = ex__26902__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28864);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26900__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28908 = state_28864;
state_28864 = G__28908;
continue;
} else {
return ret_value__26900__auto__;
}
break;
}
});
cljs$core$async$state_machine__26899__auto__ = function(state_28864){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26899__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26899__auto____1.call(this,state_28864);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26899__auto____0;
cljs$core$async$state_machine__26899__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26899__auto____1;
return cljs$core$async$state_machine__26899__auto__;
})()
;})(switch__26898__auto__,c__26988__auto___28892,out))
})();
var state__26990__auto__ = (function (){var statearr_28890 = f__26989__auto__.call(null);
(statearr_28890[(6)] = c__26988__auto___28892);

return statearr_28890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26990__auto__);
});})(c__26988__auto___28892,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1528903113005
