(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _index = require('../package/dist/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.addEventListener('DOMContentLoaded', function (e) {
  var outer = document.getElementById('outer');
  var inner = document.getElementById('inner');
  var instance = (0, _index2.default)(outer, inner);
});

},{"../package/dist/index.js":2}],2:[function(require,module,exports){
'use strict';Object.defineProperty(exports,'__esModule',{value:!0}),exports.pparallax=void 0;var _srraf=require('srraf'),_srraf2=_interopRequireDefault(_srraf);function _interopRequireDefault(m){return m&&m.__esModule?m:{default:m}}var getPosition=function(m,n){var o=window.innerHeight,p=m.getBoundingClientRect().top+n,q=p+m.offsetHeight;return{visible:q>=n-o&&p<=n+o+o,top:p,bottom:q,height:m.clientHeight}},pparallax=function(m,n){var o=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{offset:0},p=o.offset;return!/iP(ad|hone|od).*OS\s7.*/.test(navigator.userAgent)&&(p=0>p?-1*p:p,_srraf2.default.use(function(q){var r=q.currY,s=n.clientHeight,t=getPosition(m,r),u=s>t.height;if(m.classList[u?'add':'remove']('pparallax'),u){var v=window.pageYOffset+window.innerHeight,w=v>t.top+p?v-(t.top+p):0,x=document.documentElement.scrollHeight-t.bottom,y=(x<window.innerHeight?x:window.innerHeight)+t.height-p,z=((s-t.height)/y*w).toFixed(2);n.style.transform='translate3d(0, -'+z+'px, 0)'}}))};exports.pparallax=pparallax,exports.default=pparallax;

},{"srraf":3}],3:[function(require,module,exports){
'use strict';var _createClass=function(){function e(i,n){for(var o,p=0;p<n.length;p++)o=n[p],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(i,o.key,o)}return function(i,n,o){return n&&e(i.prototype,n),o&&e(i,o),i}}();Object.defineProperty(exports,'__esModule',{value:!0});function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError('Cannot call a class as a function')}var scrollInstance=null,resizeInstance=null,Listener=function(){function e(i){_classCallCheck(this,e),this.type=i,this.pool=0,this.queue=[],this.curr=this.position(),this.prev=this.position(),this.ticking=!1,window.addEventListener(i,this.requestFrame.bind(this))}return _createClass(e,[{key:'position',value:function(){return'scroll'===this.type?window.scrollY||window.pageYOffset:window.innerWidth}},{key:'requestFrame',value:function(n){this.e=n,this.curr=this.position(),this.ticking||(window.requestAnimationFrame(this.run.bind(this)),this.ticking=!0)}},{key:'run',value:function(){var n=this;this.queue.forEach(function(o){return o[1]({curr:n.curr,prev:n.prev},n.e)}),this.prev=this.curr,this.ticking=!1}},{key:'use',value:function(n){var o=this,p=o.pool++;return o.queue.push([p,n]),{destroy:function(){return o.queue.forEach(function(r,s){r[0]===p&&o.queue.splice(s,1)}),this},update:function(){return n({curr:o.curr,prev:o.prev},o.e),this}}}},{key:'update',value:function(){this.run()}}]),e}();exports.default='undefined'==typeof window?null:{get scroll(){return scrollInstance||(scrollInstance=new Listener('scroll')),scrollInstance},get resize(){return resizeInstance||(resizeInstance=new Listener('resize')),resizeInstance},use:function(i){var n=this.scroll,o=n.curr,p=n.prev,q=this.resize,r=q.curr,s=q.prev,t={currY:o,prevY:p,currX:r,prevX:s},u=this.scroll.use(function(w,x){var y=w.curr,z=w.prev;t.currY=y,t.prevY=z,i(t,x)}),v=this.resize.use(function(w,x){var y=w.curr,z=w.prev;t.currX=y,t.prevX=z,i(t,x)});return{destroy:function(){return u.destroy(),v.destroy(),this},update:function(){return u.update(),v.update(),this}}}};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJpbmRleC5qcyIsIi4uL3BhY2thZ2UvZGlzdC9pbmRleC5qcyIsIi4uL3BhY2thZ2Uvbm9kZV9tb2R1bGVzL3NycmFmL2Rpc3QvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7QUFFQSxPQUFPLGdCQUFQLENBQXdCLGtCQUF4QixFQUE0QyxhQUFLO0FBQy9DLE1BQU0sUUFBUSxTQUFTLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBLE1BQU0sUUFBUSxTQUFTLGNBQVQsQ0FBd0IsT0FBeEIsQ0FBZDtBQUNBLE1BQU0sV0FBVyxxQkFBVSxLQUFWLEVBQWlCLEtBQWpCLENBQWpCO0FBQ0QsQ0FKRDs7O0FDRkEsYUFBYSxPQUFPLGNBQVAsQ0FBc0IsT0FBdEIsQ0FBOEIsWUFBOUIsQ0FBMkMsQ0FBQyxNQUFNLENBQUMsQ0FBUixDQUEzQyxFQUF1RCxRQUFRLFNBQVIsQ0FBa0IsSUFBSyxFLENBQUUsR0FBSSxRQUFPLFFBQVEsT0FBUixDQUFYLENBQTRCLFFBQVEsdUJBQXVCLE1BQXZCLENBQXBDLENBQW1FLFFBQVMsdUJBQVQsQ0FBZ0MsQ0FBaEMsQ0FBa0MsQ0FBQyxNQUFPLElBQUcsRUFBRSxVQUFMLENBQWdCLENBQWhCLENBQWtCLENBQUMsUUFBUSxDQUFULENBQVksSUFBSSxhQUFZLFNBQVMsQ0FBVCxDQUFXLENBQVgsQ0FBYSxDQUFDLEdBQUksR0FBRSxPQUFPLFdBQWIsQ0FBeUIsRUFBRSxFQUFFLHFCQUFGLEdBQTBCLEdBQTFCLENBQThCLENBQXpELENBQTJELEVBQUUsRUFBRSxFQUFFLFlBQWpFLENBQThFLE1BQU0sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFMLEVBQVEsR0FBRyxFQUFFLENBQUYsQ0FBSSxDQUF4QixDQUEwQixJQUFJLENBQTlCLENBQWdDLE9BQU8sQ0FBdkMsQ0FBeUMsT0FBTyxFQUFFLFlBQWxELENBQWdFLENBQWxM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LENBQXVDLEVBQUUsRUFBUSxJQUFqRCxDQUFzRCxFQUFRLEtBQUssTUFBbkUsQ0FBMEUsRUFBRSxFQUFRLElBQXBGLENBQXlGLEVBQUUsRUFBUSxJQUFuRyxDQUF3RyxFQUFFLENBQUMsTUFBTSxDQUFQLENBQVMsTUFBTSxDQUFmLENBQWlCLE1BQU0sQ0FBdkIsQ0FBeUIsTUFBTSxDQUEvQixDQUExRyxDQUE0SSxFQUFFLEtBQUssTUFBTCxDQUFZLEdBQVosQ0FBZ0IsU0FBUyxDQUFULENBQWMsQ0FBZCxDQUFnQixDQUFDLEdBQUksR0FBRSxFQUFLLElBQVgsQ0FBZ0IsRUFBRSxFQUFLLElBQXZCLENBQTRCLEVBQUUsS0FBRixDQUFRLENBQVIsQ0FBVSxFQUFFLEtBQUYsQ0FBUSxDQUFsQixDQUFvQixFQUFFLENBQUYsQ0FBSSxDQUFKLENBQU8sQ0FBeEYsQ0FBOUksQ0FBd08sRUFBRSxLQUFLLE1BQUwsQ0FBWSxHQUFaLENBQWdCLFNBQVMsQ0FBVCxDQUFlLENBQWYsQ0FBaUIsQ0FBQyxHQUFJLEdBQUUsRUFBTSxJQUFaLENBQWlCLEVBQUUsRUFBTSxJQUF6QixDQUE4QixFQUFFLEtBQUYsQ0FBUSxDQUFSLENBQVUsRUFBRSxLQUFGLENBQVEsQ0FBbEIsQ0FBb0IsRUFBRSxDQUFGLENBQUksQ0FBSixDQUFPLENBQTNGLENBQTFPLENBQXVVLE1BQU0sQ0FBQyxRQUFRLFVBQWtCLENBQUMsTUFBTyxHQUFFLE9BQUYsR0FBWSxFQUFFLE9BQUYsRUFBWixDQUF3QixJQUFLLENBQWhFLENBQWlFLE9BQU8sVUFBaUIsQ0FBQyxNQUFPLEdBQUUsTUFBRixHQUFXLEVBQUUsTUFBRixFQUFYLENBQXNCLElBQUssQ0FBNUgsQ0FBOEgsQ0FBeHBCLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IHBwYXJhbGxheCBmcm9tICcuLi9wYWNrYWdlL2Rpc3QvaW5kZXguanMnXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZSA9PiB7XG4gIGNvbnN0IG91dGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dGVyJylcbiAgY29uc3QgaW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5uZXInKVxuICBjb25zdCBpbnN0YW5jZSA9IHBwYXJhbGxheChvdXRlciwgaW5uZXIpXG59KVxuIiwiJ3VzZSBzdHJpY3QnO09iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCdfX2VzTW9kdWxlJyx7dmFsdWU6ITB9KSxleHBvcnRzLnBwYXJhbGxheD12b2lkIDA7dmFyIF9zcnJhZj1yZXF1aXJlKCdzcnJhZicpLF9zcnJhZjI9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc3JyYWYpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoYSl7cmV0dXJuIGEmJmEuX19lc01vZHVsZT9hOntkZWZhdWx0OmF9fXZhciBnZXRQb3NpdGlvbj1mdW5jdGlvbihhLGIpe3ZhciBjPXdpbmRvdy5pbm5lckhlaWdodCxlPWEuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wK2IsZj1lK2Eub2Zmc2V0SGVpZ2h0O3JldHVybnt2aXNpYmxlOmY+PWItYyYmZTw9YitjK2MsdG9wOmUsYm90dG9tOmYsaGVpZ2h0OmEuY2xpZW50SGVpZ2h0fX0scHBhcmFsbGF4PWZ1bmN0aW9uKGEsYil7dmFyIF9yZWY9Mjxhcmd1bWVudHMubGVuZ3RoJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOntvZmZzZXQ6MH0sYz1fcmVmLm9mZnNldDtyZXR1cm4hL2lQKGFkfGhvbmV8b2QpLipPU1xcczcuKi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSYmKGM9MD5jPy0xKmM6Yyxfc3JyYWYyLmRlZmF1bHQudXNlKGZ1bmN0aW9uKF9yZWYyKXt2YXIgZD1fcmVmMi5jdXJyWSxlPWIuY2xpZW50SGVpZ2h0LGY9Z2V0UG9zaXRpb24oYSxkKSxnPWU+Zi5oZWlnaHQ7aWYoYS5jbGFzc0xpc3RbZz8nYWRkJzoncmVtb3ZlJ10oJ3BwYXJhbGxheCcpLGcpe3ZhciBoPXdpbmRvdy5wYWdlWU9mZnNldCt3aW5kb3cuaW5uZXJIZWlnaHQsaT1oPmYudG9wK2M/aC0oZi50b3ArYyk6MCxqPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxIZWlnaHQtZi5ib3R0b20saz0oajx3aW5kb3cuaW5uZXJIZWlnaHQ/ajp3aW5kb3cuaW5uZXJIZWlnaHQpK2YuaGVpZ2h0LWMsbD0oKGUtZi5oZWlnaHQpL2sqaSkudG9GaXhlZCgyKTtiLnN0eWxlLnRyYW5zZm9ybT0ndHJhbnNsYXRlM2QoMCwgLScrbCsncHgsIDApJ319KSl9O2V4cG9ydHMucHBhcmFsbGF4PXBwYXJhbGxheCxleHBvcnRzLmRlZmF1bHQ9cHBhcmFsbGF4OyIsIid1c2Ugc3RyaWN0Jzt2YXIgX2NyZWF0ZUNsYXNzPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gYShiLGMpe2Zvcih2YXIgZixkPTA7ZDxjLmxlbmd0aDtkKyspZj1jW2RdLGYuZW51bWVyYWJsZT1mLmVudW1lcmFibGV8fCExLGYuY29uZmlndXJhYmxlPSEwLCd2YWx1ZSdpbiBmJiYoZi53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGIsZi5rZXksZil9cmV0dXJuIGZ1bmN0aW9uKGIsYyxkKXtyZXR1cm4gYyYmYShiLnByb3RvdHlwZSxjKSxkJiZhKGIsZCksYn19KCk7T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsJ19fZXNNb2R1bGUnLHt2YWx1ZTohMH0pO2Z1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLGIpe2lmKCEoYSBpbnN0YW5jZW9mIGIpKXRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpfXZhciBzY3JvbGxJbnN0YW5jZT1udWxsLHJlc2l6ZUluc3RhbmNlPW51bGwsTGlzdGVuZXI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGIpe19jbGFzc0NhbGxDaGVjayh0aGlzLGEpLHRoaXMudHlwZT1iLHRoaXMucG9vbD0wLHRoaXMucXVldWU9W10sdGhpcy5jdXJyPXRoaXMucG9zaXRpb24oKSx0aGlzLnByZXY9dGhpcy5wb3NpdGlvbigpLHRoaXMudGlja2luZz0hMSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihiLHRoaXMucmVxdWVzdEZyYW1lLmJpbmQodGhpcykpfXJldHVybiBfY3JlYXRlQ2xhc3MoYSxbe2tleToncG9zaXRpb24nLHZhbHVlOmZ1bmN0aW9uIHBvc2l0aW9uKCl7cmV0dXJuJ3Njcm9sbCc9PT10aGlzLnR5cGU/d2luZG93LnNjcm9sbFl8fHdpbmRvdy5wYWdlWU9mZnNldDp3aW5kb3cuaW5uZXJXaWR0aH19LHtrZXk6J3JlcXVlc3RGcmFtZScsdmFsdWU6ZnVuY3Rpb24gcmVxdWVzdEZyYW1lKGIpe3RoaXMuZT1iLHRoaXMuY3Vycj10aGlzLnBvc2l0aW9uKCksdGhpcy50aWNraW5nfHwod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnJ1bi5iaW5kKHRoaXMpKSx0aGlzLnRpY2tpbmc9ITApfX0se2tleToncnVuJyx2YWx1ZTpmdW5jdGlvbiBydW4oKXt2YXIgYj10aGlzO3RoaXMucXVldWUuZm9yRWFjaChmdW5jdGlvbihjKXtyZXR1cm4gY1sxXSh7Y3VycjpiLmN1cnIscHJldjpiLnByZXZ9LGIuZSl9KSx0aGlzLnByZXY9dGhpcy5jdXJyLHRoaXMudGlja2luZz0hMX19LHtrZXk6J3VzZScsdmFsdWU6ZnVuY3Rpb24gdXNlKGIpe3ZhciBjPXRoaXMsZD1jLnBvb2wrKztyZXR1cm4gYy5xdWV1ZS5wdXNoKFtkLGJdKSx7ZGVzdHJveTpmdW5jdGlvbiBkZXN0cm95KCl7cmV0dXJuIGMucXVldWUuZm9yRWFjaChmdW5jdGlvbihmLGcpe2ZbMF09PT1kJiZjLnF1ZXVlLnNwbGljZShnLDEpfSksdGhpc30sdXBkYXRlOmZ1bmN0aW9uIHVwZGF0ZSgpe3JldHVybiBiKHtjdXJyOmMuY3VycixwcmV2OmMucHJldn0sYy5lKSx0aGlzfX19fSx7a2V5Oid1cGRhdGUnLHZhbHVlOmZ1bmN0aW9uIHVwZGF0ZSgpe3RoaXMucnVuKCl9fV0pLGF9KCk7ZXhwb3J0cy5kZWZhdWx0PSd1bmRlZmluZWQnPT10eXBlb2Ygd2luZG93P251bGw6e2dldCBzY3JvbGwoKXtyZXR1cm4gc2Nyb2xsSW5zdGFuY2V8fChzY3JvbGxJbnN0YW5jZT1uZXcgTGlzdGVuZXIoJ3Njcm9sbCcpKSxzY3JvbGxJbnN0YW5jZX0sZ2V0IHJlc2l6ZSgpe3JldHVybiByZXNpemVJbnN0YW5jZXx8KHJlc2l6ZUluc3RhbmNlPW5ldyBMaXN0ZW5lcigncmVzaXplJykpLHJlc2l6ZUluc3RhbmNlfSx1c2U6ZnVuY3Rpb24gdXNlKGEpe3ZhciBfc2Nyb2xsPXRoaXMuc2Nyb2xsLGI9X3Njcm9sbC5jdXJyLGM9X3Njcm9sbC5wcmV2LF9yZXNpemU9dGhpcy5yZXNpemUsZD1fcmVzaXplLmN1cnIsZj1fcmVzaXplLnByZXYsZz17Y3Vyclk6YixwcmV2WTpjLGN1cnJYOmQscHJldlg6Zn0saD10aGlzLnNjcm9sbC51c2UoZnVuY3Rpb24oX3JlZixtKXt2YXIgaz1fcmVmLmN1cnIsbD1fcmVmLnByZXY7Zy5jdXJyWT1rLGcucHJldlk9bCxhKGcsbSl9KSxqPXRoaXMucmVzaXplLnVzZShmdW5jdGlvbihfcmVmMixtKXt2YXIgaz1fcmVmMi5jdXJyLGw9X3JlZjIucHJldjtnLmN1cnJYPWssZy5wcmV2WD1sLGEoZyxtKX0pO3JldHVybntkZXN0cm95OmZ1bmN0aW9uIGRlc3Ryb3koKXtyZXR1cm4gaC5kZXN0cm95KCksai5kZXN0cm95KCksdGhpc30sdXBkYXRlOmZ1bmN0aW9uIHVwZGF0ZSgpe3JldHVybiBoLnVwZGF0ZSgpLGoudXBkYXRlKCksdGhpc319fX07Il19