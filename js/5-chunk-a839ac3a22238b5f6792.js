webpackJsonp([5],{100:function(t,e,n){"use strict";var r=n(2),a=n(12),o={state:{errors:[]},actions:{netralize:function(t){t.errors=[]},register:function(t,e){return a.a.create(e).then(function(e){if(!e.data.success){var n;!function(){var r=[],a=e.data.errors;for(n in a)a[n].forEach(function(t){r.push(t)});t.errors=r}()}return e})}}},i=new r.b(o);e.a=i},123:function(t,e){},56:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}Object.defineProperty(e,"__esModule",{value:!0});var s=n(1),u=n(2),l=n(3),c=n.n(l),f=n(100),h=n(123),p=(n.n(h),Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}),d=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),m=function(t){function e(){var t,n,i,s;a(this,e);for(var u=arguments.length,l=Array(u),c=0;c<u;c++)l[c]=arguments[c];return n=i=o(this,(t=e.__proto__||Object.getPrototypeOf(e)).call.apply(t,[this].concat(l))),i.state={loading:!1,error:!1,form:{nama:"",username:"",email:"",password:""}},i.handleInput=function(t,e){i.setState({form:p({},i.state.form,r({},t,e.target.value))})},i.register=function(t){t.preventDefault(),i.setState({loading:!0}),f.a.dispatch("register",i.state.form).then(function(t){if(t.data.success)return window.location.hash="#!/";i.setState({loading:!1,error:!0})})},s=n,o(i,s)}return i(e,t),d(e,[{key:"componentWillMount",value:function(){if(f.a.dispatch("netralize"),c.a.get("token"))return window.location.hash="#!/"}},{key:"render",value:function(){return s.a.h("div",{class:"MiniContainer"},s.a.h("div",{class:"Login-container"},s.a.h("form",{class:"Form Login-form"},s.a.h("h2",{class:"Form-title"},"Register"),s.a.h("div",{class:"Form-error",style:{display:this.state.error?"block":"none"}},s.a.h("ul",{style:{paddingLeft:23,marginBottom:0}},this.props.store.errors.map(function(t){return s.a.h("li",null,t)}))),s.a.h("div",{class:"Form-group"},s.a.h("label",null,"Nama"),s.a.h("input",{type:"text",value:this.state.form.nama,onInput:this.handleInput.bind(this,"nama")})),s.a.h("div",{class:"Form-group"},s.a.h("label",null,"Username"),s.a.h("input",{type:"text",value:this.state.form.username,onInput:this.handleInput.bind(this,"username")})),s.a.h("div",{class:"Form-group"},s.a.h("label",null,"Email"),s.a.h("input",{type:"text",value:this.state.form.email,onInput:this.handleInput.bind(this,"email")})),s.a.h("div",{class:"Form-group"},s.a.h("label",null,"Password"),s.a.h("input",{type:"password",value:this.state.form.password,onInput:this.handleInput.bind(this,"password")})),s.a.h("button",{onClick:this.register,disabled:this.state.loading},this.state.loading?"Loading...":"Register"))))}}]),e}(s.b);e.default=n.i(u.a)({store:f.a})(m)}});