const t='Hello Dear Prerna... Cyber this side. You can call me whatever you want. I just wanted to remind you that you are special and I truly cherish our bond. ❤️';
let i=0;function type(){if(i<t.length){document.getElementById('type').textContent+=t.charAt(i++);setTimeout(type,35);}}type();
for(let j=0;j<30;j++){let h=document.createElement('div');h.textContent='❤';h.style.position='fixed';h.style.left=Math.random()*100+'vw';h.style.top='100vh';h.style.opacity=.25;h.style.pointerEvents='none';h.style.animation=`float ${6+Math.random()*6}s linear infinite`;document.body.appendChild(h);}
const s=document.createElement('style');s.textContent='@keyframes float{from{transform:translateY(0)}to{transform:translateY(-120vh)}}';document.head.appendChild(s);
