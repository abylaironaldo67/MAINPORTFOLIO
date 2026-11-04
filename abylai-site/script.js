// Тема: применяем сохранённый выбор до отрисовки, чтобы не было мигания
(function(){var t;try{t=localStorage.getItem("theme")}catch(e){}
if(t!=="light"&&t!=="dark")t="dark";
document.documentElement.setAttribute("data-theme",t)})();

document.addEventListener("DOMContentLoaded",function(){
// Переключатель светлой и тёмной темы, форма контактов
var root=document.documentElement,tb=document.getElementById("theme");
function paint(){var l=root.getAttribute("data-theme")==="light";
tb.setAttribute("aria-pressed",l?"true":"false");
tb.setAttribute("aria-label",l?"Включить тёмную тему":"Включить светлую тему")}
tb.addEventListener("click",function(){
var next=root.getAttribute("data-theme")==="light"?"dark":"light";
root.setAttribute("data-theme",next);
try{localStorage.setItem("theme",next)}catch(e){}
paint()});
paint();
var TO="your@email.com";
document.getElementById("mail").href="mailto:"+TO;
document.getElementById("f").addEventListener("submit",function(ev){
ev.preventDefault();
var g=function(i){return document.getElementById(i).value};
location.href="mailto:"+TO+"?subject="+encodeURIComponent(g("s"))+"&body="+encodeURIComponent(g("m")+"\n\n"+g("n")+" ("+g("e")+")");
});
});
