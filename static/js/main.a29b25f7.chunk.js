(this["webpackJsonpsearching-visualiser"]=this["webpackJsonpsearching-visualiser"]||[]).push([[0],{61:function(r,t,e){},88:function(r,t,e){},89:function(r,t,e){},97:function(r,t,e){"use strict";e.r(t);var n=e(0),a=e.n(n),o=e(32),i=e.n(o),s=(e(88),e(89),e(42)),c=e.n(s),u=e(64),h=e(43),f=e(44),l=e(55),p=e(52),b=e(135),d=e(137),y=e(138),j=e(139),m=e(132),g=e(30),v=Object(g.b)({name:"arrayInfo",initialState:{arrayLength:310,height:730,array:[],searchNumber:0,sorted:!1},reducers:{setLength:function(r,t){var e=t.payload;r.arrayLength=e},setHeight:function(r,t){var e=t.payload;r.height=e},setArray:function(r,t){var e=t.payload;r.array=e},setSearchNumber:function(r,t){var e=t.payload;r.searchNumber=e},setSortedStatus:function(r,t){var e=t.payload;r.sorted=e}}}),O=v.actions,C=O.setLength,I=(O.setHeight,O.setArray),x=O.setSearchNumber,S=O.setSortedStatus,k=v.reducer,N=Object(g.b)({name:"count ",initialState:{comparisonCount:0},reducers:{incrementCount:function(r){r.comparisonCount+=1},resetCount:function(r){r.comparisonCount=0}}}),w=N.actions,L=w.incrementCount,A=w.resetCount,M=N.reducer,D=Object(g.b)({name:"header ",initialState:{buttonsDisabled:!1},reducers:{setDisabled:function(r,t){var e=t.payload;r.buttonsDisabled=e}}}),T=D.actions.setDisabled,E=D.reducer;function F(r,t){var e=[];return r.length<=1?r:(function(r,t,e){var n=0,a=r.length-1;for(;n<=a;){var o=Math.floor((n+a)/2);if(t.push([o]),r[o]===e)return t;r[o]<e?n=o+1:a=o-1}}(r,e,t),e)}function P(r,t){var e=[];return r.length<=1?r:(function(r,t,e){var n=r.length,a=Math.floor(Math.sqrt(n)),o=0,i=a;for(;r[Math.min(i,n)-1]<e;)if(o=i,i+=a,t.push([o]),o>=n)return t;t.push([Math.min(i,n)-1]);for(;r[o]<e;)if(o++,t.push([o]),o===Math.min(i,n))return t;r[o]}(r,e,t),e)}function z(r,t){var e=[];return r.length<=1?r:(function(r,t,e){var n=r.length,a=0,o=1,i=a+o;for(;i<n;)i=(a=o)+(o=i);var s=-1;for(;i>1;){var c=Math.min(s+a,n-1);if(t.push([c]),r[c]<e)a=(i=o)-(o=a),s=c;else{if(!(r[c]>e))return t;a=(i=a)-(o-=a)}}if(o&&r[n-1]===e)return t.push([n-1]),t}(r,e,t),e)}function B(r,t){var e=[];return r.length<=1?r:(function(r,t,e){var n,a=r.length-1,o=0,i=!1;if(0<=a&&e>=r[o]&&e<=r[a])for(;!i;){if(n=o+Math.floor((a-o)/(r[a]-r[o])*(e-r[o])),t.push([n]),e===r[n])return i=!0,t;r[n]<e&&(o=n+1),r[n]>e&&(a=n-1)}}(r,e,t),e)}e(61);function H(r,t){var e;(e=200,new Promise((function(r){return setTimeout(r,e)}))).then((function(){for(var e=function(e){var n=document.getElementsByClassName("array-bar")[r[e]].style,a=e+1===r.length?"#2AFF00":"red";setTimeout((function(){n.backgroundColor="orange",setTimeout((function(){n.backgroundColor=a}),t)}),e*t)},n=0;n<r.length;n++)e(n)}))}function G(r){for(var t=0;t<r;t++){document.getElementsByClassName("array-bar")[t].style.backgroundColor="black"}}function J(r,t){return Math.floor(Math.random()*(t-r+1)+r)}function W(r,t){for(var e=[],n=0;n<t;n++)e.push(J(1,r));return e}var q=e(17),R=e(133),U=e(134),V=e(74),K=e(125),Q=e(126),X=e(3),Y=200,Z=Object(V.a)({direction:"rtl"}),$=Object(K.a)((function(r){return{slider:{padding:r.spacing(2),fontSize:14}}}));function _(r,t){Y=t}var rr=function(){var r=Object(q.d)((function(r){return r.headerInfo.buttonsDisabled})),t=$();return Object(X.jsx)("div",{className:t.slider,children:Object(X.jsx)(Q.a,{theme:Z,children:Object(X.jsxs)(R.a,{width:200,sx:{display:{xs:"none",md:"block"}},children:["ANIMATION SPEED",Object(X.jsx)(U.a,{defaultValue:200,min:10,max:1e3,size:"medium",track:"inverted",style:{color:"rgb(211,211,211)"},onChange:_,disabled:r})]})})})},tr=!1,er=function(r){Object(l.a)(e,r);var t=Object(p.a)(e);function e(){return Object(h.a)(this,e),t.apply(this,arguments)}return Object(f.a)(e,[{key:"buttonChange",value:function(r){var t=this;this.props.setDisabled(!0),tr=!0,function(r,t){return sr.apply(this,arguments)}(r,Y).then((function(r){tr=r,t.props.setDisabled(r)}))}},{key:"linearSearch",value:function(){this.props.resetCount(),G(this.props.arrayInfo.arrayLength-1);var r=function(r,t){var e=[];return r.length<=1?r:(function(r,t,e){for(var n=0;n<r.length;n++){if(r[n]===e)return t.push([n]),t;t.push([n])}}(r,e,t),e)}(this.props.arrayInfo.array,this.props.arrayInfo.searchNumber);H(r,Y),this.displayComparisons(r.length),this.buttonChange(r.length)}},{key:"fibonacciSearch",value:function(){this.props.resetCount(),G(this.props.arrayInfo.arrayLength-1),this.sortArray();var r=z(ar(this.props.arrayInfo.array),this.props.arrayInfo.searchNumber);H(r,Y),this.displayComparisons(r.length),this.buttonChange(r.length)}},{key:"jumpSearch",value:function(){this.props.resetCount(),G(this.props.arrayInfo.arrayLength-1),this.sortArray();var r=P(ar(this.props.arrayInfo.array),this.props.arrayInfo.searchNumber);H(r,Y),this.displayComparisons(r.length),this.buttonChange(r.length)}},{key:"binarySearch",value:function(){this.props.resetCount(),G(this.props.arrayInfo.arrayLength-1),this.sortArray();var r=F(ar(this.props.arrayInfo.array),this.props.arrayInfo.searchNumber);H(r,Y),this.displayComparisons(r.length),this.buttonChange(r.length)}},{key:"interpolationSearch",value:function(){this.props.resetCount(),G(this.props.arrayInfo.arrayLength-1),this.sortArray();var r=B(ar(this.props.arrayInfo.array),this.props.arrayInfo.searchNumber);H(r,Y),this.displayComparisons(r.length),this.buttonChange(r.length)}},{key:"displayComparisons",value:function(r){for(var t=this,e=0;e<r;e++)setTimeout((function(){setTimeout((function(){t.props.incrementCount()}),Y)}),e*Y)}},{key:"reset",value:function(){var r=this;G(this.props.arrayInfo.arrayLength-1),this.props.setArray(W(this.props.arrayInfo.height,this.props.arrayInfo.arrayLength)),this.props.setSortedStatus(!1),setTimeout((function(){r.props.setSearchNumber(r.props.arrayInfo.array[J(0,r.props.arrayInfo.arrayLength-1)])}))}},{key:"refreshSearch",value:function(){this.props.setSearchNumber(this.props.arrayInfo.array[J(0,this.props.arrayInfo.arrayLength-1)])}},{key:"sortArray",value:function(){this.props.setArray(ar(this.props.arrayInfo.array)),this.props.setSortedStatus(!0)}},{key:"render",value:function(){var r=this,t=this.props.counter.comparisonCount;return Object(X.jsx)(d.a,{sx:{flexGrow:1},children:Object(X.jsx)(b.a,{position:"static",children:Object(X.jsxs)(y.a,{children:[Object(X.jsxs)(j.a,{variant:"body2",align:"left",children:[Object(X.jsx)(m.a,{color:"inherit",disabled:tr,onClick:function(){return r.reset()},children:"refresh array"}),Object(X.jsx)(m.a,{color:"inherit",disabled:tr,onClick:function(){return r.sortArray()},children:" sort array"})]}),Object(X.jsxs)(j.a,{sx:{fontSize:14,display:{xs:"none",md:"block"}},children:["COMPARISONS: ",t]}),Object(X.jsxs)(j.a,{variant:"h6",component:"div",sx:{flexGrow:1},textAlign:"cente",align:"center",children:[Object(X.jsx)(m.a,{color:"inherit",disabled:tr,onClick:function(){return r.linearSearch()},children:"linear"}),Object(X.jsx)(m.a,{color:"inherit",disabled:tr,onClick:function(){return r.fibonacciSearch()},children:"fibonacci"}),Object(X.jsx)(m.a,{color:"inherit",disabled:tr,onClick:function(){return r.binarySearch()},children:"binary"}),Object(X.jsx)(m.a,{color:"inherit",disabled:tr,onClick:function(){return r.jumpSearch()},children:"jump"}),Object(X.jsx)(m.a,{color:"inherit",disabled:tr,onClick:function(){return r.interpolationSearch()},children:"interpolation"})]}),Object(X.jsx)(rr,{}),Object(X.jsx)(j.a,{variant:"caption",align:"right",children:Object(X.jsx)(m.a,{color:"inherit",disabled:tr,onClick:function(){return r.refreshSearch()},children:"refresh search number"})})]})})})}}]),e}(n.Component),nr=Object(q.b)((function(r){return{counter:r.counter,arrayInfo:r.arrayInfo,headerInfo:r.headerInfo}}),{setArray:I,setSearchNumber:x,setSortedStatus:S,incrementCount:L,resetCount:A,setDisabled:T})(er);function ar(r){return r=r.slice().sort((function(r,t){return r-t}))}function or(r){return ir.apply(this,arguments)}function ir(){return(ir=Object(u.a)(c.a.mark((function r(t){return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",new Promise((function(r,e){setTimeout((function(){r()}),t)})));case 1:case"end":return r.stop()}}),r)})))).apply(this,arguments)}function sr(){return(sr=Object(u.a)(c.a.mark((function r(t,e){return c.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,or(t*e);case 2:return r.abrupt("return",!1);case 3:case"end":return r.stop()}}),r)})))).apply(this,arguments)}var cr=e(18),ur=e(20);var hr=function(){var r=Object(q.d)((function(r){return r.arrayInfo.arrayLength})),t=Object(q.c)(),e=function(){var r=Object(n.useState)([window.innerHeight,window.innerWidth]),t=Object(ur.a)(r,2),e=t[0],a=t[1];return Object(n.useEffect)((function(){window.addEventListener("resize",(function r(){return a([window.innerHeight,window.innerWidth]),function(){window.removeEventListener("resize",r)}}))}),[]),e}(),a=Object(ur.a)(e,2),o=a[0],i=a[1],s=function(r){var t=Math.floor(r/1.25);return t>730&&(t=730),t}(o),c=function(r){return Math.floor(r/4.15)}(i),u=!1,h=Object(q.d)((function(r){return r.arrayInfo.sorted})),f=function(r,t,e,n,a){var o=[],i=t.length+1;if(0===t.length)return t;if(r>t.length){o=Object(cr.a)(t);for(var s=i-1;s<r-1;s++){var c=J(5,e);o.push([c])}}else for(var u=0;u<r;u++)o.push(t[u]);return!0===n?function(r){return r.slice().sort((function(r,t){return r-t}))}(o):o}(c,Object(q.d)((function(r){return r.arrayInfo.array})),s,h);return u=f.length!==Object(q.d)((function(r){return r.arrayInfo.array.length})),Object(n.useEffect)((function(){r!==c&&t(C(c)),!0===u&&t(I(f))})),Object(X.jsx)(X.Fragment,{children:f.map((function(r,t){return Object(X.jsx)("div",{className:"array-bar",style:{backgroundColor:"black",height:"".concat(r,"px")},children:"\xa0"},t)}))})};var fr=function(r){Object(l.a)(e,r);var t=Object(p.a)(e);function e(){return Object(h.a)(this,e),t.apply(this,arguments)}return Object(f.a)(e,[{key:"componentDidMount",value:function(){var r=this;this.props.setArray(W(this.props.arrayInfo.height,this.props.arrayInfo.arrayLength)),setTimeout((function(){r.searchNumber()}),100)}},{key:"componentDidUpdate",value:function(){this.searchNumberCheck()}},{key:"searchNumber",value:function(){this.props.setSearchNumber(this.props.arrayInfo.array[J(0,this.props.arrayInfo.arrayLength-1)])}},{key:"searchNumberCheck",value:function(){0!==this.props.arrayInfo.array.length&&0!==this.props.arrayInfo.searchNumber&&(this.props.arrayInfo.array.includes(this.props.arrayInfo.searchNumber)||(this.searchNumber(),G(this.props.arrayInfo.arrayLength)))}},{key:"render",value:function(){return Object(X.jsx)("div",{className:"hero-body",children:Object(X.jsx)("div",{className:"container",children:Object(X.jsx)(hr,{})})})}}]),e}(n.Component),lr=Object(q.b)((function(r){return{arrayInfo:r.arrayInfo}}),{setArray:I,setSearchNumber:x})(fr);var pr=function(){return Object(X.jsxs)("div",{className:"App",children:[Object(X.jsx)(nr,{}),Object(X.jsx)(lr,{})]})},br=function(r){r&&r instanceof Function&&e.e(3).then(e.bind(null,141)).then((function(t){var e=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;e(r),n(r),a(r),o(r),i(r)}))},dr=Object(g.a)({reducer:{counter:M,arrayInfo:k,headerInfo:E}}),yr=Object(V.a)({typography:{fontFamily:['"Open Sans"',"sans-serif"].join(",")}});i.a.render(Object(X.jsx)(a.a.StrictMode,{children:Object(X.jsx)(q.a,{store:dr,children:Object(X.jsx)(Q.a,{theme:yr,children:Object(X.jsx)(pr,{})})})}),document.getElementById("root")),br()}},[[97,1,2]]]);
//# sourceMappingURL=main.a29b25f7.chunk.js.map