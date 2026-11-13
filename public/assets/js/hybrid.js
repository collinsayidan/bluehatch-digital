/* BlueHatch browser tools: template demo and transparent pricing calculator. */
(function(){
'use strict';
var form=document.querySelector('[data-studio-form]'),calc=document.querySelector('[data-pricing-form]');
function safe(s){return String(s||'').trim().replace(/\s+/g,' ').slice(0,100)}
function download(name,body,mime){var blob=new Blob([body],{type:mime||'text/plain;charset=utf-8'});var url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(function(){URL.revokeObjectURL(url)},1000)}
function copy(value,button){navigator.clipboard.writeText(value).then(function(){button.textContent='Copied!'}).catch(function(){button.textContent='Use download instead'})}
if(form){
var posts=[],summary='',result=document.querySelector('[data-studio-result]'),empty=document.querySelector('[data-studio-empty]'),cards=document.querySelector('[data-studio-cards]');
var days=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
var titles=['Meet the business','A helpful tip','Behind the scenes','Service spotlight','A common question','Your story','A gentle invitation'];
var ideas=['Show a genuine photo of your team or work.','Share a branded tip graphic.','Show a behind-the-scenes photo.','Highlight a real product or service.','Use a simple Q&A graphic.','Share a personal, authentic photo.','Show the next step to contact you.'];
function assembled(){return 'BlueHatch Digital - 7-day content plan\n'+summary+'\n\n'+posts.map(function(p){return p.day+' - '+p.title+'\n'+p.caption+'\nVisual: '+p.idea}).join('\n\n')}
form.addEventListener('submit',function(ev){
ev.preventDefault();if(!form.reportValidity())return;
var d=new FormData(form),business=safe(d.get('business')),service=safe(d.get('service')),audience=safe(d.get('audience')),goal=safe(d.get('goal')),tone=safe(d.get('tone')),platform=safe(d.get('platform'));
var call={bookings:'Send us a message to ask about availability.',awareness:'Follow along for more ideas and updates.',loyalty:'We would love to welcome you back.',launch:'Get in touch to learn more.'}[goal]||'Get in touch to learn more.';
var opener={friendly:'Hello from ',confident:'Introducing ',playful:'A little hello from '}[tone]||'Hello from ';
var bodies=[
'We help '+audience+' with '+service+'. Here is what we do and why we care.',
'Considering '+service+'? Here is one thing to keep in mind before you decide.',
'Here is a little look at the work and care behind '+service+'.',
'Our spotlight today is '+service+'. What matters most to you?',
'Question of the day: what would you like to know about '+service+'?',
'Why we started: to help '+audience+' with '+service+'.',
'If you have been thinking about '+service+', we would love to hear from you.'
];
posts=days.map(function(day,i){return {day:day,title:titles[i],caption:opener+business+'! '+bodies[i]+' '+call,idea:ideas[i]}});
summary=business+' · '+platform+' · '+goal;document.querySelector('[data-studio-summary]').textContent=summary;cards.replaceChildren();
posts.forEach(function(p,i){
var article=document.createElement('article');article.className='bh-output-card';
var heading=document.createElement('div');heading.className='bh-output-card-head';
var label=document.createElement('strong');label.textContent=p.day+' · '+p.title;
var button=document.createElement('button');button.className='bh-mini-btn';button.type='button';button.textContent='Copy';button.addEventListener('click',function(){copy(p.caption+'\n'+p.idea,button)});
heading.append(label,button);
var textarea=document.createElement('textarea');textarea.value=p.caption;textarea.rows=5;textarea.maxLength=4000;textarea.setAttribute('aria-label',p.day+' editable caption');
textarea.addEventListener('input',function(){posts[i].caption=textarea.value});
var detail=document.createElement('p');detail.textContent='Visual idea: '+p.idea;article.append(heading,textarea,detail);cards.append(article)
});empty.classList.add('hide');result.classList.remove('hide');
document.querySelector('[data-studio-notice]').textContent='Your editable plan is ready. Please review claims before publishing.';
result.scrollIntoView({behavior:'smooth',block:'start'})
});
document.querySelector('[data-studio-copy]').addEventListener('click',function(){copy(assembled(),this)});
document.querySelector('[data-studio-download]').addEventListener('click',function(){download('bluehatch-7-day-plan.txt',assembled())});
document.querySelector('[data-studio-csv]').addEventListener('click',function(){
function q(s){return '"'+String(s).replace(/"/g,'""')+'"'}
var rows=[['Day','Theme','Caption','Visual idea']].concat(posts.map(function(p){return [p.day,p.title,p.caption,p.idea]}));
download('bluehatch-content-plan.csv','\uFEFF'+rows.map(function(r){return r.map(q).join(',')}).join('\r\n'),'text/csv;charset=utf-8')
});
}
if(calc){
var pound=function(n){return new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP'}).format(n)};
function update(){
var d=new FormData(calc);function num(k){var n=Number(d.get(k));return Number.isFinite(n)&&n>=0?n:0}
var cost=num('materials')+num('hours')*num('rate')+num('overheads'),margin=Math.max(5,Math.min(80,num('margin'))),price=cost/(1-margin/100),profit=price-cost;
document.querySelector('[data-calc-cost]').textContent=pound(cost);
document.querySelector('[data-calc-price]').textContent=pound(price);
document.querySelector('[data-calc-profit]').textContent=pound(profit);
document.querySelector('[data-calc-margin]').textContent=margin+'%';
document.querySelector('[data-margin-label]').textContent=margin+'%';
document.querySelector('[data-calc-markup]').textContent=cost?(100*profit/cost).toFixed(1)+'%':'—';
}
calc.addEventListener('input',update);calc.addEventListener('change',update);update();
}
})();