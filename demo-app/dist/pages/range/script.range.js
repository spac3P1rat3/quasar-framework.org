module.exports=function(n){function e(r){if(i[r])return i[r].exports;var a=i[r]={exports:{},id:r,loaded:!1};return n[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var i={};return e.m=n,e.c=i,e.p="",e(0)}({0:function(n,e,i){n.exports=i(84)},84:function(n,e,i){"use strict";var r=i(85);n.exports={template:r,data:{number:3}}},85:function(n,e){n.exports='<div class="screen-bar shadow-1 fixed-top">Quasar Range</div>\n\n<h5>Model: <em>{{number}}</em> [1, 7]</h5>\n\n<h5>Standalone</h5>\n<range :model.sync="number" :min="1" :max="7"></range>\n\n<h5>Inside of a List</h5>\n<div class="list bordered inner-delimiter">\n  <div class="item">\n    <i class="item-right-margin">volume_down</i>\n    <range :model.sync="number" :min="1" :max="7"></range>\n    <i class="item-left-margin">volume_up</i>\n  </div>\n  <div class="item">\n    <i class="item-right-margin">volume_down</i>\n    <range :model.sync="number" :min="1" :max="7"></range>\n    <i class="item-left-margin">volume_up</i>\n  </div>\n</div>\n'}});