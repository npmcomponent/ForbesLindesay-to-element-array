**DEPRECATED: use arrayify**

# to-element-array

  Convert an array-like object into an Array, a single element into an array with one item, and does document.querySelectorAll for strings

## Installation

  Using [component](https://component.jit.su)

    $ component install ForbesLindesay/to-element-array

  Alternatively you can download from [here](https://component.jit.su/ForbesLindesay/to-element-array/download/latest.min.js) and reference with a script tag, then use the global `toElementArray`.

## API

  Given the html:

```html
<div id="foo" class="bar"></div>
<div class="bar"></div>
```

  You can do the following:

```javascript
var toArray = require('to-element-array');

//pass a single element
toArray(document.getElementById('foo'))
// => [<div id="foo" class="bar"></div>]

//pass an array-like list of elements
toArray(document.getElementsByClassName('bar'))
// => [<div id="foo" class="bar"></div>, <div class="bar"></div>]

//pass a query selector
toArray('div.bar')
// => [<div id="foo" class="bar"></div>, <div class="bar"></div>]
```

The array returned from `toElementArray(arr)` is always a real array so you can safely use `.foreach`, `.map` etc.  It is also never a live array, even if the input is.  It creates a copy of whever array you pass in, so you can do what you like with it.

## License

  MIT
