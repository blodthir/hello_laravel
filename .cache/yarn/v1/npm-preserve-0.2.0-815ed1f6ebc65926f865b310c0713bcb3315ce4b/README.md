# preserve [![NPM version](https://badge.fury.io/js/preserve.svg)](http://badge.fury.io/js/preserve)

> Temporarily substitute tokens in the given `string` with placeholders, then put them back after transforming the string.

Useful for protecting tokens, like templates in HTML, from being mutated when the string is transformed in some way, like from a formatter/beautifier.

**Example without `preserve`**

Let's say you want to use [js-beautify] on a string of html with Lo-Dash/Underscore templates, such as: `<ul><li><%= name %></li></ul>`:

js-beautify will render the template unusable (and apply incorrect formatting because of the unfamiliar syntax from the Lo-Dash template):

```html
<ul>
  <li>
    <%=n ame %>
  </li>
</ul>
```

**Example with `preserve`**

Correct.

```html
<ul>
  <li><%= name %></li>
</ul>
```

For the record, this is just a random example, I've had very few issues with js-beautify in general. But with or without js-beautify, this kind of token mangling does happen sometimes when you use formatters, beautifiers or similar tools.

## Install
## Install with [npm](npmjs.org)

```bash
npm i preserve --save
```

## Run tests

```bash
npm test
```

## API
### [.before](index.js#L23)

Replace tokens in `str` with a temporary, heuristic placeholder.

* `str` **{String}**    
* `returns` **{String}**: String with placeholders.  

```js
tokens.before('{a\\,b}');
//=> '{__ID1__}'
```

### [.after](index.js#L44)

Replace placeholders in `str` with original tokens.

* `str` **{String}**: String with placeholders    
* `returns` **{String}** `str`: String with original tokens.  

```js
tokens.after('{__ID1__}');
//=> '{a\\,b}'
```


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/preserve/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2015-2015, Jon Schlinkert.
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on January 10, 2015._

[js-beautify]: https://github.com/beautify-web/js-beautify