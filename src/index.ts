/*
* A timeout helper function resolves the provider promise but rejects if the
* operation takes longer then the provided `timeout`.
*/

/*
* Creates a debounced function.
*/

export function createDebouncer (): Function {
  let timer = null;

  return function ({
    handler,
    time = 0
  }: {
    handler: Function,
    time: Number
  }): Promise<any> {
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
