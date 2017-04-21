```
❯ npm test

> steal-zombie@1.0.0 test /Users/leoj/bitovi/,+/stl/steal-zombie
> node zombie-express.js

TypeError: Cannot read property 'indexOf' of undefined
    at Attr.<anonymous> (http://127.0.0.1/temp/static/steal.production.js:13:9506)
    at c (http://127.0.0.1/temp/static/steal.production.js:12:25354)
    at P (http://127.0.0.1/temp/static/steal.production.js:13:9457)
    at http://127.0.0.1/temp/static/steal.production.js:13:9855
    at c (http://127.0.0.1/temp/static/steal.production.js:11:4415)
    at new b (http://127.0.0.1/temp/static/steal.production.js:11:4301)
    at Q (http://127.0.0.1/temp/static/steal.production.js:13:9712)
    at Function.z.startup (http://127.0.0.1/temp/static/steal.production.js:13:10066)
    at http://127.0.0.1/temp/static/steal.production.js:13:11258
    at http://127.0.0.1/temp/static/steal.production.js:13:11533 'TypeError: Cannot read property \'indexOf\' of undefined\n    at Attr.<anonymous> (http://127.0.0.1/temp/static/steal.production.js:13:9506)\n    at c (http://127.0.0.1/temp/static/steal.production.js:12:25354)\n    at P (http://127.0.0.1/temp/static/steal.production.js:13:9457)\n    at http://127.0.0.1/temp/static/steal.production.js:13:9855\n    at c (http://127.0.0.1/temp/static/steal.production.js:11:4415)\n    at new b (http://127.0.0.1/temp/static/steal.production.js:11:4301)\n    at Q (http://127.0.0.1/temp/static/steal.production.js:13:9712)\n    at Function.z.startup (http://127.0.0.1/temp/static/steal.production.js:13:10066)\n    at http://127.0.0.1/temp/static/steal.production.js:13:11258\n    at http://127.0.0.1/temp/static/steal.production.js:13:11533'
LOADED
{ AssertionError: Expected 1 elements matching ".demo", found 0
    at Assert.elements (/Users/leoj/bitovi/,+/stl/steal-zombie/node_modules/zombie/lib/assert.js:154:54)
    at Assert.element (/Users/leoj/bitovi/,+/stl/steal-zombie/node_modules/zombie/lib/assert.js:138:12)
    at /Users/leoj/bitovi/,+/stl/steal-zombie/zombie-express.js:15:17
    at tryCatcher (/Users/leoj/bitovi/,+/stl/steal-zombie/node_modules/bluebird/js/release/util.js:16:23)
    at Promise._settlePromiseFromHandler (/Users/leoj/bitovi/,+/stl/steal-zombie/node_modules/bluebird/js/release/promise.js:512:31)
    at Promise._settlePromise (/Users/leoj/bitovi/,+/stl/steal-zombie/node_modules/bluebird/js/release/promise.js:569:18)
    at Promise._settlePromise0 (/Users/leoj/bitovi/,+/stl/steal-zombie/node_modules/bluebird/js/release/promise.js:614:10)
    at Promise._settlePromises (/Users/leoj/bitovi/,+/stl/steal-zombie/node_modules/bluebird/js/release/promise.js:693:18)
    at Promise._fulfill (/Users/leoj/bitovi/,+/stl/steal-zombie/node_modules/bluebird/js/release/promise.js:638:18)
    at /Users/leoj/bitovi/,+/stl/steal-zombie/node_modules/bluebird/js/release/nodeback.js:42:21
    at EventLoop.done (/Users/leoj/bitovi/,+/stl/steal-zombie/node_modules/zombie/lib/eventloop.js:589:11)
    at EventLoop.g (events.js:291:16)
    at emitNone (events.js:91:20)
    at EventLoop.emit (events.js:185:7)
    at Immediate.<anonymous> (/Users/leoj/bitovi/,+/stl/steal-zombie/node_modules/zombie/lib/eventloop.js:688:71)
    at runCallback (timers.js:651:20)
  name: 'AssertionError',
  actual: 0,
  expected: 1,
  operator: '==',
  message: 'Expected 1 elements matching ".demo", found 0',
  generatedMessage: false }
```
