(this.webpackJsonptenttisovellus=this.webpackJsonptenttisovellus||[]).push([[0],{126:function(t,e,a){"use strict";a.r(e);var n=a(2),s=a(0),i=a.n(s),c=a(14),r=a.n(c),o=(a(90),a(10)),d=a.n(o),u=a(20),l=a(18),h=(a(34),a(32)),y=a(12),j=a(15),x=a.n(j),p=null;p="https://tenttisovellus-niko.herokuapp.com/";var m=function(t){var e=function(){var e=Object(u.a)(d.a.mark((function e(a,n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("HeiHei",t.vaihtoehdot[n].vaihtoehto_id),e.prev=1,e.next=4,x.a.get(p+"vastaukset");case 4:if(e.sent.vaihtoehto_id!==t.vaihtoehdot[n].vaihtoehto_id){e.next=11;break}return e.next=8,x.a.put(p+"vastaukset",{vastaus:a.target.checked,kysymys_id:t.kysymys_id,vaihtoehto_id:t.vaihtoehdot[n].vaihtoehto_id});case 8:e.sent,e.next=14;break;case 11:return e.next=13,x.a.post(p+"vastaukset",{vastaus:a.target.checked,kysymys_id:t.kysymys_id,vaihtoehto_id:t.vaihtoehdot[n].vaihtoehto_id});case 13:e.sent;case 14:t.dispatch({type:"VASTAUS_VALITTU",data:{Answer:a.target.checked,tenttiindex:t.tenttiindex,kysymysindex:t.index,vaihtoehtoindex:n}}),console.log(t.vastaus),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),alert("Muuttaminen ep\xe4onnistui"),console.log(t.vastaus);case 22:case"end":return e.stop()}}),e,null,[[1,18]])})));return function(t,a){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{children:t.vaihtoehdot.map((function(t,a){return Object(n.jsx)("div",{children:Object(n.jsxs)("label",{className:"checkbox",children:[Object(n.jsx)("input",{type:"checkbox",onChange:function(t){return e(t,a)},checked:t.vastaus}),Object(n.jsx)("span",{children:t.vastaus_nimi})]})},a)}))})};var b=function(t,e){return Object(n.jsx)("div",{children:t.vaihtoehdot.map((function(t,e,a,s){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("label",{className:"checkbox",children:[Object(n.jsx)("input",{type:"checkbox",checked:t.valittu,disabled:!0}),Object(n.jsx)("span",{children:t.vastaus_nimi})]}),Object(n.jsxs)("label",{className:"checkboxRightAns",children:[Object(n.jsx)("input",{type:"checkbox",disabled:"disabled",checked:t.oikea_vastaus}),Object(n.jsx)("span",{children:t.vastaus_nimi})]})]},e)}))})};var v=function(t){var e=Object(s.useState)(!1),a=Object(l.a)(e,2),i=a[0],c=a[1],r=Object(s.useState)(0),o=Object(l.a)(r,2),d=o[0],u=o[1];return Object(n.jsxs)("div",{className:"main",children:[t.data.map((function(t,e){return Object(n.jsx)("button",{className:"TenttiButton",onClick:function(){u(e)},children:t.tentin_nimi},e)})),Object(n.jsxs)("div",{className:"askCards",children:[!1===i?t.data[d].kysymykset.map((function(e,a){return Object(n.jsxs)("div",{className:"Card",children:[Object(n.jsx)("div",{className:"Kysymys",children:e.kysymys_nimi}),e.vaihtoehdot&&Object(n.jsx)(m,{index:a,tenttiindex:d,kysymys_id:e.kysymys_id,vaihtoehdot:e.vaihtoehdot,dispatch:t.dispatch})]},a)})):t.data[d].kysymykset.map((function(e,a){return Object(n.jsxs)("div",{className:"Card",children:[Object(n.jsx)("div",{className:"Kysymys",children:e.kysymys}),e.vaihtoehdot&&Object(n.jsx)(b,{index:a,valittu:t.data.valittu,vaihtoehdot:e.vaihtoehdot,dispatch:t.dispatch})]},a)})),Object(n.jsx)("button",{className:"showbutton",onClick:function(t){c(!0)},children:"N\xe4yt\xe4 Vastaukset"})]})]})},k=a(29),O=a(52),f=a.n(O),g=a(53),_=a.n(g),S=a(160),A=a(78),w=a(112),T=null;T="https://tenttisovellus-niko.herokuapp.com/";var N=function(t){var e=Object(s.useCallback)((function(t){console.log("T\xe4m\xe4 on file:",t);var e=w.post(T+"upload");console.log(" T\xe4m\xe4 on Req",e),t.forEach((function(t){e.attach("file",t)})),e.end((function(t,e){console.log("T\xe4m\xe4 on res",e)}))}),[]),a=Object(A.a)({onDrop:e}),i=a.getRootProps,c=a.getInputProps,r=a.isDragActive,o=Object(s.useState)(0),h=Object(l.a)(o,2),y=h[0],j=h[1],p={kysymys_nimi:""},m=function(){var e=Object(u.a)(d.a.mark((function e(a,n,s){var i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),i=p,console.log("Uusikysymys",i),e.next=5,x.a.post(T+"kysymykset",{kysymys_nimi:i.kysymys_nimi,tentti_id:n.toString()});case 5:t.dispatch({type:"LISAA_KYSYMYS",data:{newQuestion:i,tenttiindex:[s]}});case 6:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),b={vastaus_nimi:"",oikea_vastaus:!1},v=function(){var e=Object(u.a)(d.a.mark((function e(a,n,s,i){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),c=b,console.log("Uusivaihtoehto",c),e.next=5,x.a.post(T+"vastausvaihtoehdot",{vastaus_nimi:c.vastaus_nimi,oikea_vastaus:c.oikea_vastaus,kysymys_id:n.toString()});case 5:t.dispatch({type:"LISAA_VASTAUS",data:{newAnswer:c,tenttiindex:[i],kysymysindex:s}});case 6:case"end":return e.stop()}}),e)})));return function(t,a,n,s){return e.apply(this,arguments)}}(),O=function(){var e=Object(u.a)(d.a.mark((function e(a,n,s,i){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.target.value,e.next=3,x.a.put(T+"kysymykset",{kysymys_nimi:a.target.value,kysymys_id:n.toString()});case 3:t.dispatch({type:"KYSYMYS_MUUTTUI",data:{newQuestion:c,tenttiindex:i,kysymysindex:s}});case 4:case"end":return e.stop()}}),e)})));return function(t,a,n,s){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(d.a.mark((function e(a,n,s,i,c){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.target.value,e.next=3,x.a.put(T+"vastausvaihtoehdot",{vastaus_nimi:a.target.value,vaihtoehto_id:n.toString()});case 3:t.dispatch({type:"VASTAUS_MUUTTUI",data:{newAnswer:r,tenttiindex:i,kysymysindex:s,vaihtoehtoindex:c}});case 4:case"end":return e.stop()}}),e)})));return function(t,a,n,s,i){return e.apply(this,arguments)}}(),N=function(){var e=Object(u.a)(d.a.mark((function e(a,n,s,i,c){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a.target.checked,e.next=3,x.a.put(T+"vastausvaihtoehdot/oikea",{vaihtoehto_id:n.toString(),oikea_vastaus:a.target.checked});case 3:t.dispatch({type:"OIKEA_VASTAUS",data:{newRightAnswer:r,tenttiindex:i,kysymysindex:s,vaihtoehtoindex:c}});case 4:case"end":return e.stop()}}),e)})));return function(t,a,n,s,i){return e.apply(this,arguments)}}(),I=function(){var e=Object(u.a)(d.a.mark((function e(a,n,s,i,c,r){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.delete(T+"vastausvaihtoehdot",{data:{kysymys_id:s.toString(),vaihtoehto_id:n.toString()}});case 2:t.dispatch({type:"POISTA_VASTAUS",data:{tenttiindex:c,kysymysindex:i,vaihtoehtoindex:r}});case 3:case"end":return e.stop()}}),e)})));return function(t,a,n,s,i,c){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(d.a.mark((function e(a,n,s,i){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.delete(T+"kysymykset",{data:{kysymys_id:n.toString()}});case 2:t.dispatch({type:"POISTA_KYSYMYS",data:{tenttiindex:i,kysymysindex:s}});case 3:case"end":return e.stop()}}),e)})));return function(t,a,n,s){return e.apply(this,arguments)}}();return Object(n.jsxs)("div",{children:[Object(n.jsx)("h2",{children:"Tervetuloa admin"}),Object(n.jsxs)("div",{className:"main",children:[t.data.map((function(t,e){return Object(n.jsx)("button",{className:"TenttiButton",onClick:function(){j(e)},children:t.tentin_nimi},e)})),Object(n.jsxs)("div",{className:"askCards",children:[t.data[y].kysymykset.map((function(t,e){return Object(n.jsxs)("div",{className:"Card",children:[Object(n.jsxs)("div",{className:"Kysymys",children:[Object(n.jsx)("span",{children:Object(n.jsx)(S.a,{type:"text",className:"muokkaaKys",onBlur:function(a){return O(a,t.kysymys_id,e,y)},defaultValue:t.kysymys_nimi,rows:"1"})}),Object(n.jsx)("span",{className:"poisto",onClick:function(a){return U(a,t.kysymys_id,e,y)},children:Object(n.jsx)(f.a,{style:{color:"grey",fontSize:27,margin:"auto",verticalAlign:"middle"}})})]}),t.vaihtoehdot.map((function(t,a){return Object(n.jsx)("div",{children:Object(n.jsxs)("label",{className:"checkbox",children:[Object(n.jsx)("input",{type:"checkbox",onChange:function(n){return N(n,t.vaihtoehto_id,e,y,a)},checked:t.oikea_vastaus}),Object(n.jsx)("span",{children:Object(n.jsx)(S.a,{type:"text",className:"muokkaaVas",onBlur:function(n){return g(n,t.vaihtoehto_id,e,y,a)},defaultValue:t.vastaus_nimi,rows:"1"})}),Object(n.jsx)("span",{className:"poisto",onClick:function(n){return I(n,t.vaihtoehto_id,t.kysymys_id,e,y,a)},children:Object(n.jsx)(f.a,{style:{color:"grey",fontSize:29,verticalAlign:"middle"}})})]})},a)})),Object(n.jsx)("div",{className:"lisays",onClick:function(a){return v(a,t.kysymys_id,e,y)},children:Object(n.jsx)(_.a,{style:{color:"grey",fontSize:28,verticalAlign:"middle"}})}),Object(n.jsxs)("div",Object(k.a)(Object(k.a)({},i()),{},{children:[Object(n.jsx)("input",Object(k.a)({},c())),r?Object(n.jsx)("p",{children:"Drop the Image here ..."}):Object(n.jsx)("p",{children:"Drag 'n' drop Image here, or click to select Image"})]}))]},e)})),Object(n.jsx)("div",{className:"lisaaKys",onClick:function(e){return m(e,t.data[y].tentti_id,y)},children:Object(n.jsx)(_.a,{style:{color:"grey",fontSize:28,verticalAlign:"middle",textAlign:"center"}})})]})]})]})},I=a(25);var U=function(t){var e=Object(s.useState)({etunimi:"",sukunimi:"",email:"",salasana:"",onko_opettaja:"false"}),a=Object(l.a)(e,2),i=a[0],c=a[1],r=function(t){c(Object(k.a)(Object(k.a)({},i),{},Object(I.a)({},t.target.name,t.target.value)))},o=function(){var t=Object(u.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.preventDefault(),t.prev=1,t.next=4,x.a.post("http://localhost:3005/users",i);case 4:console.log("Onnistui!"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.log("registration error",t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(n.jsx)("div",{className:"main",children:Object(n.jsxs)("div",{className:"register",children:[Object(n.jsx)("h2",{children:"Rekister\xf6idy"}),Object(n.jsxs)("form",{onSubmit:function(t){return o(t)},children:[Object(n.jsx)("label",{htmlFor:"fname",children:"Etunimi: "}),Object(n.jsx)("input",{type:"text",id:"fname",name:"etunimi",placeholder:"Etunimi",value:i.etunimi,onChange:r}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"lname",children:"Sukunimi: "}),Object(n.jsx)("input",{type:"text",id:"lname",name:"sukunimi",placeholder:"Sukunimi",value:i.sukunimi,onChange:r}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"email",children:"S\xe4hk\xf6posti: "}),Object(n.jsx)("input",{type:"email",id:"email",name:"email",placeholder:"S\xe4hk\xf6posti",value:i.email,onChange:r}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"password",children:"Salasana: "}),Object(n.jsx)("input",{type:"password",id:"password",name:"salasana",placeholder:"Salasana",value:i.salasana,onChange:r}),Object(n.jsx)("br",{}),Object(n.jsx)("label",{htmlFor:"isTeacher",children:"Olen opettaja: "}),Object(n.jsx)("input",{type:"checkbox",id:"isTeacher",name:"onko_opettaja",value:i.onko_opettaja,onChange:function(t){c(Object(k.a)(Object(k.a)({},i),{},Object(I.a)({},t.target.name,t.target.checked)))}}),Object(n.jsx)("br",{}),Object(n.jsx)("input",{type:"submit",id:"submitbutton",value:"Rekister\xf6idy"})]})]})})},C=a(159),Y=null;function V(t,e){var a=JSON.parse(JSON.stringify(t));switch(e.type){case"VASTAUS_VALITTU":return a[e.data.tenttiindex].kysymykset[e.data.kysymysindex].vaihtoehdot[e.data.vaihtoehtoindex].valittu=e.data.Answer,a;case"OIKEA_VASTAUS":return a[e.data.tenttiindex].kysymykset[e.data.kysymysindex].vaihtoehdot[e.data.vaihtoehtoindex].oikea_vastaus=e.data.newRightAnswer,a;case"VASTAUS_MUUTTUI":return console.log("Ollaan vastaus muuttui",e.data.newAnswer),a[e.data.tenttiindex].kysymykset[e.data.kysymysindex].vaihtoehdot[e.data.vaihtoehtoindex].vastaus_nimi=e.data.newAnswer,a;case"KYSYMYS_MUUTTUI":return a[e.data.tenttiindex].kysymykset[e.data.kysymysindex].kysymys_nimi=e.data.newQuestion,a;case"LISAA_KYSYMYS":console.log("ollaan lis\xe4\xe4 kysymys:",e.data.newQuestion);var n=a[e.data.tenttiindex].kysymykset,s=e.data.newQuestion;return n.push(s),a[e.data.tenttiindex].kysymykset=n,a;case"LISAA_VASTAUS":console.log("ollaan lis\xe4\xe4 vastaus:",e.data.newAnswer);var i=a[e.data.tenttiindex].kysymykset[e.data.kysymysindex].vaihtoehdot,c=e.data.newAnswer;return i.push(c),a[e.data.tenttiindex].kysymykset[e.data.kysymysindex].vaihtoehdot=i,a;case"POISTA_VASTAUS":console.log("Ollaan poista vastaus:",e.data.vaihtoehtoindex);var r=a[e.data.tenttiindex].kysymykset[e.data.kysymysindex].vaihtoehdot;return console.log("Splice ei tehty:",a[e.data.tenttiindex].kysymykset[e.data.kysymysindex].vaihtoehdot),r.splice([e.data.vaihtoehtoindex],1),console.log("Splice tehty:",r),a[e.data.tenttiindex].kysymykset[e.data.kysymysindex].vaihtoehdot=r,a;case"POISTA_KYSYMYS":var o=a[e.data.tenttiindex].kysymykset;return console.log("Splice ei tehty:",a[e.data.tenttiindex].kysymykset),o.splice([e.data.kysymysindex],1),console.log("Splice tehty:",o),a[e.data.tenttiindex].kysymykset=o,a;case"INIT_DATA":return e.data;default:throw new Error}}Y="https://tenttisovellus-niko.herokuapp.com/";var K=function(t){var e=Object(s.useState)(!1),a=Object(l.a)(e,2),i=(a[0],a[1]),c=Object(s.useReducer)(V,[]),r=Object(l.a)(c,2),o=r[0],j=r[1];return Object(s.useEffect)((function(){var t=function(){var t=Object(u.a)(d.a.mark((function t(){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x.a.get(Y+"tentit");case 3:e=t.sent,j({type:"INIT_DATA",data:e.data}),i(!0),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),alert("Tietokannan alustaminen ep\xe4onnistui");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();(function(){var e=Object(u.a)(d.a.mark((function e(){var a,n,s,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(Y+"tentit");case 3:if(!((a=e.sent).data.length>0)){e.next=30;break}n=0;case 6:if(!(n<a.data.length)){e.next=26;break}return a.data[n].kyselyt=[],e.next=10,x.a.get(Y+"kysymykset/"+a.data[n].tentti_id);case 10:if(s=e.sent,a.data[n].kysymykset=s.data,!(a.data[n].kysymykset.length>0)){e.next=23;break}c=0;case 14:if(!(c<a.data[n].kysymykset.length)){e.next=23;break}return a.data[n].kysymykset[c].vaihtoehdot=[],e.next=18,x.a.get(Y+"vastausvaihtoehdot/"+a.data[n].kysymykset[c].kysymys_id);case 18:r=e.sent,a.data[n].kysymykset[c].vaihtoehdot=r.data;case 20:c++,e.next=14;break;case 23:n++,e.next=6;break;case 26:j({type:"INIT_DATA",data:a.data}),i(!0),e.next=31;break;case 30:throw"Nyt pit\xe4\xe4 data kyll\xe4 alustaa!";case 31:e.next=36;break;case 33:e.prev=33,e.t0=e.catch(0),t();case 36:case"end":return e.stop()}}),e,null,[[0,33]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.useEffect)((function(){}),[o]),Object(n.jsx)(h.a,{children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{className:"App-header",children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(h.b,{to:"/tests",className:"active",children:Object(n.jsx)(C.a,{id:"tests"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.b,{to:"/about",children:Object(n.jsx)(C.a,{id:"about"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.b,{to:"/admin",children:Object(n.jsx)(C.a,{id:"modify"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.b,{to:"/register",children:Object(n.jsx)(C.a,{id:"register"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(h.b,{to:"/login",children:Object(n.jsx)(C.a,{id:"login"})})}),Object(n.jsx)("li",{children:Object(n.jsx)(C.a,{id:"Language"})})]})}),Object(n.jsxs)(y.c,{children:[Object(n.jsx)(y.a,{path:"/tests",children:o.length>0?Object(n.jsx)(v,{data:o,dispatch:j}):"Tietoa haetaan"}),Object(n.jsx)(y.a,{path:"/admin",children:o.length>0?Object(n.jsx)(N,{data:o,dispatch:j}):"Tietoa haetaan"}),Object(n.jsx)(y.a,{path:"/register",children:o.length>0?Object(n.jsx)(U,{}):"Tietoa haetaan"}),Object(n.jsx)(y.a,{path:"/about",children:o.length>0?"T\xe4\xe4\xe4ll\xe4 on tietoa":"Tietoa haetaan"})]})]})})},M=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,163)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),i(t),c(t)}))},D=a(161),L={fi:a(76),en:a(77)},E=navigator.language.split(/[-_]/)[0];r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(D.a,{locale:E,messages:L[E],children:Object(n.jsx)(K,{})})}),document.getElementById("root")),M()},34:function(t,e,a){},76:function(t){t.exports=JSON.parse('{"Language":"Suomi","tests":"Tentit","about":"Tietoa sovelluksesta","modify":"Muokkaa/poista/lis\xe4\xe4","register":"Rekister\xf6idy","login":"Kirjaudu sis\xe4\xe4n"}')},77:function(t){t.exports=JSON.parse('{"Language":"English","test":"Tests","about":"About the App","modify":"Modify/Delete/Add","register":"Register","login":"Login"}')},90:function(t,e,a){}},[[126,1,2]]]);
//# sourceMappingURL=main.10481f82.chunk.js.map