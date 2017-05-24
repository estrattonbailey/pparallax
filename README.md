# pparallax
Precision parallax in **~1.6kb gzipped**. [Demo](http://estrattonbailey.com/pparallax)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

## Install
```bash
npm i pparallax --save

// or window.pparallax
```

## Usage
I need to build this out. Basically, the `outer` element is the direct parent of an absolutely positioned `inner` element. `offset` must be positive, and delays the start of the parallax effect to allow users to see the top of the image.
```javascript
import pparallax from 'pparallax'

const outer = document.getElementById('outer')
const inner = document.getElementById('inner')
const instance = pparallax(outer, inner, {
  offset: 100 // default 0
})

instance.update()
instance.destroy()
```

## Example
To run the example, clone this repo, then:
```bash
# move into example dir
cd srraf/example
# install deps
npm i
# compile JS
npm run js:build # or js:watch
# serve index.html and update with changes
live-server 
```

MIT License
