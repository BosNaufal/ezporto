webpackJsonp([3],{117:function(e,t){},53:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),i=n(2),u=n(82),c=n(74),l=n(117),f=(n.n(l),function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}()),p=function(e){function t(){return r(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),f(t,[{key:"render",value:function(){return s.a.h("div",null,s.a.h(u.a,null))}}]),t}(s.b);t.default=n.i(i.a)({store:c.a})(p)},67:function(e,t,n){"use strict";var r=n(1),a=n(71),o=(n.n(a),function(e){var t=e.user,n=t.id,a=t.nama,o=t.pekerjaan,s=t.cover,i=t.photo;return r.a.h("div",{className:"UserItem-outer"},r.a.h("div",{className:"UserItem-inner"},r.a.h("div",{className:"UserItem-header",style:{backgroundImage:"url("+s+")"}},r.a.h("div",{className:"UserItem-overlay"}),r.a.h("div",{className:"UserItem-cover"}),r.a.h("a",{href:"#!/user/detail/"+n+"/biodata",className:"UserItem-photo"},r.a.h("img",{src:i||"assets/img/box.png",alt:"Photo Profile"})),r.a.h("div",{className:"UserItem-meta"},r.a.h("h3",{className:"UserItem-name"},r.a.h("a",{href:"#!/user/detail/"+n+"/biodata"},a)),r.a.h("span",{className:"UserItem-jabatan"},o.jabatan)))))});t.a=o},71:function(e,t){},74:function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var a=n(2),o=n(12),s={state:{users:[]},actions:{netralize:function(e){e.users=[]},loadUsers:function(e,t){return o.a.list(t).then(function(t){var n=t.data.data.results;return e.users=[].concat(r(e.users),r(n)),t})}}},i=new a.b(s);t.a=i},82:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var s=n(1),i=n(2),u=n(67),c=n(74),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=function(e){function t(){var e,n,o,s;r(this,t);for(var i=arguments.length,u=Array(i),l=0;l<i;l++)u[l]=arguments[l];return n=o=a(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(u))),o.state={loading:!1,page:1,loadMore:!0},o.getUsers=function(e){return o.setState({loading:!0}),c.a.dispatch("loadUsers",{page:e}).then(function(e){return o.setState({loading:!1}),e})},o.loadMore=function(){o.setState({page:o.state.page+1},function(){o.getUsers(o.state.page).then(function(e){0===e.data.data.results.length&&o.setState({loadMore:!1})})})},s=n,a(o,s)}return o(t,e),l(t,[{key:"componentWillMount",value:function(){c.a.dispatch("netralize"),this.getUsers(1)}},{key:"render",value:function(){return s.a.h("div",{className:"MiniContainer"},this.props.store.users.map(function(e,t){return s.a.h(u.a,{user:e})}),this.state.loading?s.a.h("div",null,"Loading..."):s.a.h("div",{class:"text-center",style:"padding: 0 10px; padding-bottom: 25px;"},this.state.loadMore?s.a.h("button",{class:"button bg-orange w-100",style:"padding: 10px; font-size: 1.3em;",onClick:this.loadMore},"Load More"):null))}}]),t}(s.b);t.a=n.i(i.a)({store:c.a})(f)}});