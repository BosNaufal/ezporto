webpackJsonp([2],{102:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=n(1),s=n(2),u=n(67),c=n(75),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){var e,n,o,i;r(this,t);for(var s=arguments.length,u=Array(s),l=0;l<s;l++)u[l]=arguments[l];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={loading:!1},o.watchKeyword=function(e){e.keyword!==o.props.keyword&&o.getResults(e.keyword)},o.getResults=function(e){o.setState({loading:!0}),c.a.dispatch("search",e).then(function(e){o.setState({loading:!1})})},i=n,a(o,i)}return o(t,e),l(t,[{key:"componentWillMount",value:function(){c.a.dispatch("netralize");var e=this.props.keyword;this.getResults(e)}},{key:"render",value:function(){return i.a.h("div",{className:"MiniContainer"},i.a.h("div",{className:"InfoPanel"},this.state.loading?"Loading...":'Hasil pencarian "'+this.context.router.state.query.q+'"'),this.state.loading?null:this.props.store.list.map(function(e,t){return i.a.h(u.a,{user:e})}))}}]),t}(i.b);t.a=n.i(s.a)({store:c.a})(f)},125:function(e,t){},58:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=n(2),u=n(102),c=n(75),l=n(125),f=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),p=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),f(t,[{key:"render",value:function(){return i.a.h("div",null,i.a.h(u.a,{keyword:this.props.query.q}))}}]),t}(i.b);t.default=n.i(s.a)({store:c.a})(p)},67:function(e,t,n){"use strict";var r=n(1),a=n(71),o=(n.n(a),function(e){var t=e.user,n=t.id,a=t.nama,o=t.pekerjaan,i=t.cover,s=t.photo;return r.a.h("div",{className:"UserItem-outer"},r.a.h("div",{className:"UserItem-inner"},r.a.h("div",{className:"UserItem-header",style:{backgroundImage:"url("+i+")"}},r.a.h("div",{className:"UserItem-overlay"}),r.a.h("div",{className:"UserItem-cover"}),r.a.h("a",{href:"#!/user/detail/"+n+"/biodata",className:"UserItem-photo"},r.a.h("img",{src:s||"assets/img/box.png",alt:"Photo Profile"})),r.a.h("div",{className:"UserItem-meta"},r.a.h("h3",{className:"UserItem-name"},r.a.h("a",{href:"#!/user/detail/"+n+"/biodata"},a)),r.a.h("span",{className:"UserItem-jabatan"},o.jabatan)))))});t.a=o},71:function(e,t){},75:function(e,t,n){"use strict";var r=n(2),a=n(12),o={state:{list:[]},actions:{netralize:function(e){e.list=[]},search:function(e,t){return a.a.search(t).then(function(t){var n=t.data.data.results;e.list=n})}}},i=new r.b(o);t.a=i}});