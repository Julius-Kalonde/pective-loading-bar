const $ = (s, o = document) => o.querySelector(s);
const $$ = (s, o = document) => o.querySelectorAll(s);
 
$('.restart').addEventListener('click', e => {
 
    e.preventDefault();
    
    $$('.loading').forEach(elem => {
        elem.parentNode.replaceChild(elem.cloneNode(true), elem);
    });
 
});