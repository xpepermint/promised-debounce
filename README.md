![Build Status](https://travis-ci.org/xpepermint/promised-debounce.svg?branch=master)&nbsp;[![NPM Version](https://badge.fury.io/js/promised-debounce.svg)](https://badge.fury.io/js/promised-debounce)&nbsp;[![Dependency Status](https://gemnasium.com/xpepermint/promised-debounce.svg)](https://gemnasium.com/xpepermint/promised-debounce)

# promised-debounce

> For debouncing function execution.

This is a light weight open source package, written with [TypeScript](https://www.typescriptlang.org). The source code is available on [GitHub](https://github.com/xpepermint/promised-debounce) where you can also find our [issue tracker](https://github.com/xpepermint/promised-debounce/issues).

## Related Projects

* [promised-timeout](https://github.com/xpepermint/promised-timeout): For limiting the time to resolve a promise.

## Install

```
$ npm install --save promised-debounce
```

## Example

```js
import {createDebouncer} from 'promised-debounce';

let debounce = createDebouncer(); // create new debounced instance

await debounce(() => console.log('result'), 1000); // => "result"
```

## API

**debounce({handler, time})**:Promise

> A helper function which resolves the provider `handler` as debounce function.

| Option | Type | Required | Default | Description
|--------|------|----------|---------|------------
| handler | Function,Promise | Yes | - | A function to be executed.
| time | Integer | No | 0 | A time in milliseconds for which the function should be debounced.

## License (MIT)

```
Copyright (c) 2016 Kristijan Sedlak <xpepermint@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
