reveal.js-together-plugin
=========================

A simple plugin that brings [reveal.js](https://github.com/hakimel/reveal.js) together with and [together.js](https://github.com/mozilla/togetherjs).

Usage
-----

Include togetherjs in index.html

```html
<script src="https://togetherjs.com/togetherjs-min.js"></script>
```

Copy this repository to `plugins/together` (into your presentation)

In index.html, in the "dependecies" include:

```js
{src: 'plugin/together/together.js'}
```

Open your presentation, press Ctrl+Alt+t to start TogetherJS and share the link with your friends.

TODO
----

* [ ] Sync all the things (stuff like fragmets is still not in sync)
