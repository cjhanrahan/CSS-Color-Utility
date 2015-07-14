'use strict';

define(function () {

    var EventListener = function (type, node, callback) {
        Object.defineProperties(this, {
            type: {
                value: type,
                writable: false
            },
            node: {
                value: node,
                writable: false
            },
            callback: {
                value: callback,
                writable: false
            }
        });

    };


    EventListener.prototype.attach = function () {
        this.node.addEventListener(this.type, this.callback);
        return this;
    };


    EventListener.prototype.detach = function () {
        this.node.removeEventListener(this.type, this.callback);
        return this;
    };


    return EventListener;
});