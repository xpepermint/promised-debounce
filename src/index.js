/*
* Creates a debounced function.
*/

export function createDebouncer () {
  let timer = null;

  return function ({handler, time = 0}) {
    var resolve;
    var promise = new Promise((r) => resolve = r).then(() => (
      handler.call ? handler() : handler
    ));

    if (timer)  clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      resolve();
    }, time);

    return promise;
  };
}
