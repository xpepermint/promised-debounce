/*
* A timeout helper function resolves the provider promise but rejects if the
* operation takes longer then the provided `timeout`.
*/
"use strict";
/*
* Creates a debounced function.
*/
function createDebouncer() {
    let timer = null;
    return function ({ handler, time = 0 }) {
        var resolve;
        var promise = new Promise((r) => resolve = r).then(() => (handler.call ? handler() : handler));
        if (timer)
            clearTimeout(timer);
        timer = setTimeout(() => {
            timer = null;
            resolve();
        }, time);
        return promise;
    };
}
exports.createDebouncer = createDebouncer;
