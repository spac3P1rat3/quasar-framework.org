module.exports=function(i){function t(r){if(n[r])return n[r].exports;var e=n[r]={exports:{},id:r,loaded:!1};return i[r].call(e.exports,e,e.exports,t),e.loaded=!0,e.exports}var n={};return t.m=i,t.c=n,t.p="",t(0)}({0:function(i,t,n){i.exports=n(23)},23:function(i,t,n){"use strict";var r=n(24);i.exports={template:r}},24:function(i,t){i.exports='<div class="screen-bar shadow-1 fixed-top">Quasar Cards with List</div>\n\n<div class="card" style="max-width: 600px;">\n  <div class="card-title">\n    Card with List\n  </div>\n  <div class="list bordered inner-delimiter highlight">\n    <div class="item" v-for="n in 4">\n      <i>mail</i>\n      <div class="item-content">\n        <div class="item-label">Quasar Framework</div>\n        <button class="item-value"><i>keyboard_arrow_right</i></button>\n      </div>\n    </div>\n  </div>\n</div>\n'}});