(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{10:function(e,t,n){e.exports=n(17)},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(7),r=n.n(l),c=(n(15),n(16),n(1)),i=n(9),s=n(2),d=n(3),u=n(5),m=n(4),h=n(8),p=n.n(h),f=function(e){var t=e.todo,n=e.deleteTodo,a=e.changeTodoStatus;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"view"},o.a.createElement("input",{onChange:function(){return a(t.id)},type:"checkbox",className:"toggle",id:t.id,checked:t.completed}),o.a.createElement("label",{htmlFor:t.id},t.title),o.a.createElement("button",{onClick:function(){return n(t.id)},type:"button",className:"destroy"})),o.a.createElement("input",{type:"text",className:"edit"}))},E=function(e){var t=e.todos,n=e.deleteTodo,a=e.changeTodoStatus,l=e.markAll,r=e.selectButton;return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",null,o.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",onChange:function(){return l()},checked:r}),o.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete")),o.a.createElement("ul",{className:"todo-list"},t.map((function(e){return o.a.createElement("li",{key:e.id,className:p()({completed:e.completed})},o.a.createElement(f,{todo:e,deleteTodo:n,changeTodoStatus:a}))}))))},g=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={id:1,title:"",completed:""},e.handleInput=function(t){var n=t.target.value;e.setState((function(e){return{title:n.trimLeft(),completed:!1}}))},e.sumbmitForm=function(t){var n=e.props.addTodos;""!==e.state.title&&(t.preventDefault(),n(e.state),e.reset())},e.reset=function(){e.setState((function(e){return{title:"",completed:!1,id:e.id+1}}))},e}return Object(d.a)(n,[{key:"render",value:function(){return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement("form",{onSubmit:this.sumbmitForm},o.a.createElement("input",{onChange:this.handleInput,className:"new-todo",placeholder:"What needs to be done?",value:this.state.title})))}}]),n}(o.a.Component),C="all",b="active",v="completed",k=function(e){var t=e.handlerChangeList,n=e.handleClearCompleted;return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:"filters"},o.a.createElement("li",null,o.a.createElement("a",{href:"#/",className:"selected",name:"all",onClick:function(){return t(C)}},"All")),o.a.createElement("li",null,o.a.createElement("a",{name:"active",href:"#/active",onClick:function(){return t(b)}},"Active")),o.a.createElement("li",null,o.a.createElement("a",{name:"completed",href:"#/completed",onClick:function(){return t(v)}},"Completed"))),o.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){return n()}},"Clear completed"))},L=function(e){var t=e.todosList,n=e.handleClearCompleted,a=e.handlerChangeList;return o.a.createElement(o.a.Fragment,null,o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},"".concat(t.filter((function(e){return!e.completed})).length," items left")),o.a.createElement(k,{handlerChangeList:a,handleClearCompleted:n})))},N=function(e){Object(u.a)(n,e);var t=Object(m.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),l=0;l<a;l++)o[l]=arguments[l];return(e=t.call.apply(t,[this].concat(o))).state={todosList:[],currentFilter:C},e.addTodos=function(t){e.setState((function(e){return{todosList:[].concat(Object(i.a)(e.todosList),[t])}}))},e.deleteTodo=function(t){e.setState((function(e){return{todosList:e.todosList.filter((function(e){return e.id!==t}))}}))},e.checkCompleted=function(e){return e.every((function(e){return!0===e.completed}))},e.markAll=function(){e.setState((function(t){return{todosList:t.todosList.map((function(n){return e.checkCompleted(t.todosList)?Object(c.a)(Object(c.a)({},n),{},{completed:!1}):Object(c.a)(Object(c.a)({},n),{},{completed:!0})}))}}))},e.handleClearCompleted=function(){e.setState((function(e){return{todosList:e.todosList.filter((function(e){return!e.completed}))}}))},e.changeTodoStatus=function(t){e.setState((function(e){return{todosList:e.todosList.map((function(e){return e.id!==t?e:Object(c.a)(Object(c.a)({},e),{},{completed:!e.completed})}))}}))},e.handlerChangeList=function(t){e.setState({currentFilter:t})},e}return Object(d.a)(n,[{key:"render",value:function(){var e,t=this.state,n=t.todosList,a=t.currentFilter,l=n;return e=!!(this.checkCompleted(n)&&n.length>0),a===b&&(l=l.filter((function(e){return!e.completed}))),a===v&&(l=l.filter((function(e){return e.completed}))),o.a.createElement("section",{className:"todoapp"},o.a.createElement(g,{addTodos:this.addTodos}),o.a.createElement("section",{className:"main"},o.a.createElement(E,{todos:l,deleteTodo:this.deleteTodo,changeTodoStatus:this.changeTodoStatus,markAll:this.markAll,selectButton:e})),o.a.createElement(L,{todosList:n,handlerChangeList:this.handlerChangeList,handleClearCompleted:this.handleClearCompleted}))}}]),n}(o.a.Component);r.a.render(o.a.createElement(N,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.8cfde18e.chunk.js.map