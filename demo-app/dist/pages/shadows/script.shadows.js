module.exports=function(e){function n(t){if(s[t])return s[t].exports;var i=s[t]={exports:{},id:t,loaded:!1};return e[t].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var s={};return n.m=e,n.c=s,n.p="",n(0)}({0:function(e,n,s){e.exports=s(92)},92:function(e,n,s){"use strict";var t=s(93);e.exports={template:t}},93:function(e,n){e.exports='<div class="screen-bar shadow-1 fixed-top">Quasar CSS Shadows</div>\n\n<div style="margin: 10px; text-align: center">\n  <div class="flex inline shadow-box items-center justify-center inset-shadow">.inset-shadow</div>\n  <div class="flex inline shadow-box items-center justify-center" v-for="n in 5" :class="[\'shadow-\' + (n + 1)]">.shadow-{{n+1}}</div>\n</div>\n'}});