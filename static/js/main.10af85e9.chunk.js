(this.webpackJsonpbudgeter=this.webpackJsonpbudgeter||[]).push([[0],[,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),o=n.n(s),i=(n(14),n(5)),l=n(6),r=n(7),m=n(9),d=n(8),u=(n(15),n(16),n(17),n(0));function j(e){var t=e.state;return Object(u.jsxs)("div",{className:"budgetHeader",children:[Object(u.jsx)("p",{className:"budgetBalance",children:"Balance: \u20a6".concat(t.balance.toLocaleString())}),Object(u.jsx)("p",{className:"incExp",children:"Total Income: \u20a6".concat(t.totalIncome.toLocaleString())}),Object(u.jsx)("p",{className:"incExp",children:"Total Expense: \u20a6".concat(t.totalExpense.toLocaleString())})]})}n(3);function x(e){var t=e.id,n=e.item,a=e.amount,c=e.income,s=e.deleteExpense,o=e.balance;return Object(u.jsxs)("div",{className:"expenseTransact",children:[Object(u.jsx)("p",{className:"transactionItem",children:n}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-6",children:Object(u.jsx)("p",{className:"transactionDetail",children:"\u20a6".concat(a.toLocaleString())})}),Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("p",{className:"expensePercentage",children:"".concat(o>0?(a/c*100).toFixed(2):"--","%")})}),Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("button",{className:"delButton-expense",onClick:s,value:t,children:"+"})})]})]},t)}function h(e){var t=e.iD,n=e.item,a=e.amount,c=e.totalIncome,s=e.deleteIncome;return Object(u.jsxs)("div",{className:"incomeTransact",children:[Object(u.jsx)("p",{className:"transactionItem",children:n}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-6",children:Object(u.jsx)("p",{className:"transactionDetail",children:"\u20a6".concat(a.toLocaleString())})}),Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("p",{className:"incomePercentage",children:"".concat((a/c*100).toFixed(2),"%")})}),Object(u.jsx)("div",{className:"col",children:Object(u.jsx)("button",{className:"delButton-income",onClick:s,value:t,children:"+"})})]})]},t)}n(19);function b(e){var t=e.type,n=e.name,a=e.placeHolder,c=e.handleChange,s=e.refProp;return Object(u.jsx)("input",{type:t,className:"form-control spaceOut",name:n,placeholder:a,onChange:c,ref:s})}var p=function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.getTransaction=function(t){e.setState({transactionType:t.target.value})},e.totalAmount=function(e){for(var t=0,n=0;n<e.length;n++)t+=e[n].amount;return t},e.addTransaction=function(t){var n={id:Date.now(),item:e.state.item,amount:Number.parseInt(e.state.amount)};"income"===e.state.transactionType?e.state.incomes.push(n):e.state.expenses.push(n),e.setState({amount:"",item:""}),e.setState({totalIncome:e.totalAmount(e.state.incomes),totalExpense:e.totalAmount(e.state.expenses),balance:e.totalAmount(e.state.incomes)-e.totalAmount(e.state.expenses)}),e.item.value="",e.amount.value=""},e.deleteExpense=function(t){var n=e.state.expenses[e.state.expenses.findIndex((function(e){return e.id.toString()===t.target.value}))],a=e.state.expenses.filter((function(e){return e.id.toString()!==t.target.value.toString()}));e.setState({expenses:a,totalExpense:e.totalAmount(a),balance:e.state.balance+n.amount})},e.deleteIncome=function(t){var n=e.state.incomes[e.state.incomes.findIndex((function(e){return e.id.toString()===t.target.value}))],a=e.state.incomes.filter((function(e){return e.id.toString()!==t.target.value.toString()}));e.setState({incomes:a,totalIncome:e.state.totalIncome-n.amount,balance:e.state.balance-n.amount})},e.state={item:"",amount:"",incomes:[],expenses:[],transactionType:"income",balance:"0.00",totalIncome:"0.00",totalExpense:"0.00"},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this,t=this.state.expenses.map((function(t){var n=t.id,a=t.item,c=t.amount;return Object(u.jsx)(x,{id:n,item:a,amount:c,income:e.state.totalIncome,deleteExpense:e.deleteExpense,balance:e.state.balance})})),n=this.state.incomes.map((function(t){var n=t.id,a=t.item,c=t.amount;return Object(u.jsx)(h,{iD:n,item:a,amount:c,totalIncome:e.state.totalIncome,deleteIncome:e.deleteIncome})}));return Object(u.jsxs)("div",{children:[Object(u.jsx)(j,{state:this.state}),Object(u.jsxs)("div",{className:"transactionPanel form-inline",children:[Object(u.jsx)(b,{type:"text",placeHolder:"Item",name:"item",handleChange:this.handleChange,refProp:function(t){return e.item=t}}),Object(u.jsx)(b,{type:"number",placeHolder:"Amount",name:"amount",handleChange:this.handleChange,refProp:function(t){return e.amount=t}}),Object(u.jsxs)("select",{name:"type",onChange:this.getTransaction,className:"form-control spaceOut",children:[Object(u.jsx)("option",{value:"income",children:"+"}),Object(u.jsx)("option",{value:"expense",children:"-"})]}),Object(u.jsx)("button",{onClick:this.addTransaction,className:"myButton spaceOut",children:"Add Transaction"})]}),Object(u.jsx)("div",{className:" ",children:Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("div",{className:"col-sm",children:Object(u.jsxs)("div",{className:"container ",children:[Object(u.jsx)("h2",{className:"moveRight",children:"Incomes"}),n]})}),Object(u.jsx)("div",{className:"col-sm",children:Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)("h2",{children:"Expenses"}),t]})})]})})]})}}]),n}(a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),c(e),s(e),o(e)}))};o.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(p,{})}),document.getElementById("root")),O()}],[[20,1,2]]]);
//# sourceMappingURL=main.10af85e9.chunk.js.map