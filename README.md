# pparallax
Precision parallax in **~1.6kb gzipped**. [Demo](http://estrattonbailey.com/pparallax)

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](http://standardjs.com)

## Install
```bash
npm i pparallax --save

// or window.pparallax
```

## Usage 
```javascript
import pparallax from 'pparallax'

const outer = document.getElementById('outer')
const inner = document.getElementById('inner')
const instance = pparallax(outer, inner)

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
