import test from 'ava';
import {createDebouncer} from '../dist';

test('debounced should resolve a promise', async (t) => {
  let debounce = createDebouncer();
  let handler = new Promise((resolve, reject) => setTimeout(resolve, 500, true));

  t.is(await debounce({handler}), true);
});

test.cb('debounced should resolve a function', (t) => {
  let debounce = createDebouncer();
  let count = 0;
  let handler = () => setTimeout(() => count = 1, 500);

  debounce({handler});

  setTimeout(() => {
    t.is(count, 1);
    t.end();
  }, 1000);
});

test.cb('debounced should lazily execute only once', (t) => {
  let count = 0;
  let debounce = createDebouncer();
  let handler = new Promise((resolve, reject) => setTimeout(() => count++, 500, true));

  debounce({handler, time: 100}).catch((e) => e);
  debounce({handler, time: 100}).catch((e) => e);
  debounce({handler, time: 100}).catch((e) => e);

  setTimeout(() => {
    t.is(count, 1);
    t.end();
  }, 2000);
});
