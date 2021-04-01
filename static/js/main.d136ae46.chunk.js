(this["webpackJsonpreact-familiarity"]=this["webpackJsonpreact-familiarity"]||[]).push([[0],{11:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),l=a.n(r),c=a(9),s=a.n(c),o=(a(16),a(2)),u=a.n(o),i=a(4),m=a(6),p=a(7),d=a(10);function f(){return(f=Object(i.a)(u.a.mark((function e(t,a){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],t.map((function(e){var t=e.question,a=new DOMParser,r=a.parseFromString(t,"text/html").body.textContent,l=e.incorrect_answers,c=e.correct_answer,s=[].concat(Object(d.a)(l),[c]);!function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=[e[a],e[t]];e[t]=n[0],e[a]=n[1]}}(s);var o={question:r,answers:s.map((function(e){return a.parseFromString(e,"text/html").body.textContent})),answerUsingIndex:s.findIndex((function(e){return e===c}))};return n.push(o),o})),e.abrupt("return",{organizedData:n,responseCode:a});case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(e,t){return f.apply(this,arguments)},b={category:"any-category",difficulty:"any-difficulty",questions:"10"};function h(e,t){var a=t.field,n=t.value;return Object(p.a)(Object(p.a)({},e),{},Object(m.a)({},a,n))}var y=function(e){var t=e.setDataset,a=Object(r.useState)(null),c=Object(n.a)(a,2),s=c[0],o=c[1],m=Object(r.useState)(null),p=Object(n.a)(m,2),d=p[0],f=p[1],y=Object(r.useState)(null),v=Object(n.a)(y,2),g=v[0],w=v[1],q=Object(r.useReducer)(h,b),N=Object(n.a)(q,2),x=N[0],j=N[1];Object(r.useEffect)((function(){function e(){return(e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opentdb.com/api_category.php");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,n=a.trivia_categories,o(n);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var _=function(e){j({field:e.target.name,value:e.target.value})},O=x.category,k=x.difficulty,C=x.questions;if(null===s)return l.a.createElement("h1",null,"Loading...");if(d){var S=g.total,D=g.easy,z=g.medium,I=g.hard;return l.a.createElement("div",{className:"container"},l.a.createElement("h1",null,"There was a problem with retrieving the data."),l.a.createElement("br",null),l.a.createElement("p",null,"Potential Problems could be api is down or user asked too many questions for chosen category"),l.a.createElement("br",null),l.a.createElement("p",null,"There are a total of ",S," questions in this category."),l.a.createElement("br",null),l.a.createElement("p",null,D," easy questions."),l.a.createElement("br",null),l.a.createElement("p",null,z," medium questions."),l.a.createElement("br",null),l.a.createElement("p",null,I," hard questions."),l.a.createElement("br",null),l.a.createElement("p",null,"The amount of questions displayed here could be wrong, if wanting max # of questions but doesn't work try lowering the number in your quiz."),l.a.createElement("br",null),l.a.createElement("p",null,"Please click ",l.a.createElement("a",{href:"/"},"here")," to refresh the browser and try again."))}return l.a.createElement("div",{style:{display:"flex"},className:"popup-container"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"popup"},l.a.createElement("div",{className:"popup-header"},"Welcome To The Quiz"),l.a.createElement("div",{className:"popup-content"},l.a.createElement("p",null,"This is a quiz application built using ReactJS."),l.a.createElement("p",null,"Here you decide what your quiz will be about"),l.a.createElement("p",null,"It will load question and answer pairs into the component."),l.a.createElement("p",null,"A max of 50 questions can be returned per quiz"),l.a.createElement("form",{className:"quiz-form",onSubmit:function(e){function a(){return(a=Object(i.a)(u.a.mark((function e(){var a,n,r,l,c,s,o,i,m,p,d,b,h,y,v,g,q;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a="any-difficulty"===x.difficulty?"":"&difficulty=".concat(x.difficulty),!(n="any-category"===x.category?"":"&category=".concat(x.category))){e.next=31;break}return i=Math.round(x.questions),r=i<=0?"10":i,e.next=8,fetch("https://opentdb.com/api_count.php?".concat(n));case 8:return m=e.sent,e.next=11,m.json();case 11:p=e.sent,d=p.category_question_count,l=d.total_question_count,c=d.total_easy_question_count,s=d.total_medium_question_count,o=d.total_hard_question_count,e.t0=x.difficulty,e.next="easy"===e.t0?20:"medium"===e.t0?22:"hard"===e.t0?24:26;break;case 20:return r>c&&(r=c),e.abrupt("break",28);case 22:return r>s&&(r=s),e.abrupt("break",28);case 24:return r>o&&(r=o),e.abrupt("break",28);case 26:return r>l&&(r=l),e.abrupt("break",28);case 28:w({total:d.total_question_count,easy:d.total_easy_question_count,medium:d.total_medium_question_count,hard:d.total_hard_question_count}),e.next=34;break;case 31:b=Math.round(x.questions),r=b<=0?"10":b;case 34:return e.next=36,fetch("https://opentdb.com/api.php?amount=".concat(r).concat(a).concat(n,"&type=multiple"));case 36:return h=e.sent,e.next=39,h.json();case 39:return y=e.sent,v=y.results,g=y.response_code,e.next=44,E(v,g);case 44:q=e.sent,0!==g?f(g):t(q.organizedData);case 46:case"end":return e.stop()}}),e)})))).apply(this,arguments)}e.preventDefault(),function(){a.apply(this,arguments)}()}},l.a.createElement("label",{className:"form-question"},"Select number of questions:"),l.a.createElement("input",{className:"form-input",type:"number",name:"questions",value:C,onChange:_,max:"50",min:"0"}),l.a.createElement("label",{className:"form-question"},"Select a category:"),l.a.createElement("select",{className:"form-input",value:O,name:"category",onChange:_},l.a.createElement("option",{key:"0",value:"any-category"},"Any Category"),s.map((function(e){return l.a.createElement("option",{key:e.id,value:e.id},e.name)}))),l.a.createElement("label",{className:"form-question"},"Select a difficulty:"),l.a.createElement("select",{className:"form-input",value:k,name:"difficulty",onChange:_},l.a.createElement("option",{value:"any-difficulty"},"Any Difficulty"),l.a.createElement("option",{value:"easy"},"Easy"),l.a.createElement("option",{value:"medium"},"Medium"),l.a.createElement("option",{value:"hard"},"Hard")),l.a.createElement("button",{className:"button"},"Start the quiz")),l.a.createElement("br",null),l.a.createElement("br",null)))))};var v=function(e){var t=e.restartQuiz,a=e.displayPopup,n=e.dataset,r=e.answeredCorrect,c=a?{display:"flex"}:{display:"none"};return l.a.createElement("div",{style:c,className:"popup-container"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"popup end-popup"},l.a.createElement("div",{className:"popup-header"},"Congratulations"),l.a.createElement("div",{className:"popup-content"},l.a.createElement("p",null,"You have completed the quiz"),l.a.createElement("p",null,"You got: "+r+" out of "+n.length+" questions right."),l.a.createElement("button",{className:"button",onClick:t},"Restart"),l.a.createElement("br",null),l.a.createElement("br",null)))))};var g=function(e){var t=e.dataset,a=e.currentDataIndex;return l.a.createElement("div",{className:"question"},l.a.createElement("h2",null,"Question ",a+1,"/",t.length),l.a.createElement("br",null),l.a.createElement("p",{className:"question-element"},t[a].question))};var w=function(e){var t=e.dataset,a=e.currentDataIndex,n=e.handleAnswerClick;return l.a.createElement("div",{className:"answers clearfix"},l.a.createElement("ul",null,l.a.createElement("li",{onClick:n,className:"answer-option",value:0},l.a.createElement("div",{className:"answer-sidebar"},"A"),l.a.createElement("div",{className:"answer-main"},l.a.createElement("p",null,t[a].answers[0]))),l.a.createElement("li",{onClick:n,className:"answer-option even-answer",value:1},l.a.createElement("div",{className:"answer-sidebar"},"B"),l.a.createElement("div",{className:"answer-main"},l.a.createElement("p",null,t[a].answers[1]))),l.a.createElement("li",{onClick:n,className:"answer-option",value:2},l.a.createElement("div",{className:"answer-sidebar"},"C"),l.a.createElement("div",{className:"answer-main"},l.a.createElement("p",null,t[a].answers[2]))),l.a.createElement("li",{onClick:n,className:"answer-option even-answer",value:3},l.a.createElement("div",{className:"answer-sidebar"},"D"),l.a.createElement("div",{className:"answer-main"},l.a.createElement("p",null,t[a].answers[3])))))};var q=function(e){var t=e.displayNextButton,a=e.handleNextButtonClick,n=e.dataset,r=e.currentDataIndex,c=t?{display:"flex"}:{display:"none"};return l.a.createElement("div",{className:"next-button-container"},l.a.createElement("button",{style:c,className:"button",onClick:a},n.length-1===r?"Finish the quiz":"Next Question"))};var N=function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("p",null,"Built using ",l.a.createElement("a",{href:"https://reactjs.org/"},"react.js")),l.a.createElement("p",null,"Api being used is"," ",l.a.createElement("a",{href:"https://opentdb.com/api_config.php"},"Open Trivia Database")))};function x(){var e=Object(r.useState)(!1),t=Object(n.a)(e,2),a=t[0],c=t[1],s=Object(r.useState)(!1),o=Object(n.a)(s,2),u=o[0],i=o[1],m=Object(r.useState)(0),p=Object(n.a)(m,2),d=p[0],f=p[1],E=Object(r.useState)(0),b=Object(n.a)(E,2),h=b[0],x=b[1],j=Object(r.useState)(null),_=Object(n.a)(j,2),O=_[0],k=_[1];return null===O?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container no-footer-content"},l.a.createElement(y,{setDataset:k})),l.a.createElement(N,null)):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container no-footer-content"},l.a.createElement(v,{restartQuiz:function(){window.location.reload()},displayPopup:a,dataset:O,answeredCorrect:h}),l.a.createElement(g,{dataset:O,currentDataIndex:d}),l.a.createElement(w,{dataset:O,currentDataIndex:d,handleAnswerClick:function(e){var t=document.querySelector(".right"),a=document.querySelector(".wrong");if(!t&&!a){var n=e.target.closest("li"),r=n.value,l=O[d].answerUsingIndex;if(l===r)n.classList.add("right"),i(!u),x(h+1);else n.classList.add("wrong"),document.querySelectorAll("li")[l].classList.add("right"),i(!u)}}}),l.a.createElement(q,{displayNextButton:u,handleNextButtonClick:function(){var e=document.querySelector(".right"),t=document.querySelector(".wrong");null!==t&&t.classList.remove("wrong"),null!==e&&e.classList.remove("right"),O.length-1===d?c(!a):(i(!u),f(d+1))},dataset:O,currentDataIndex:d})),l.a.createElement(N,null))}s.a.render(l.a.createElement(x,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.d136ae46.chunk.js.map