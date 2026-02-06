// NO button escape
const noBtn=document.getElementById("noBtn");
noBtn.addEventListener("mouseover",()=>{
noBtn.style.position="absolute";
noBtn.style.left=Math.random()*80+"%";
noBtn.style.top=Math.random()*80+"%";
});

// Accept love
function acceptLove(){
confetti();
emojiRain();
document.getElementById("startScreen").style.display="none";
document.getElementById("mainContent").style.display="block";
}

// Reveal messages
function reveal(btn){
btn.innerText="❤️";
btn.style.background="white";
btn.style.color="#ff4081";
}

// Confetti
function confetti(){
for(let i=0;i<120;i++){
let c=document.createElement("div");
c.style.position="fixed";
c.style.width="8px";
c.style.height="8px";
c.style.background=`hsl(${Math.random()*360},100%,50%)`;
c.style.left=Math.random()*100+"vw";
c.style.top="-10px";
c.style.animation="fall 3s linear";
document.body.appendChild(c);
setTimeout(()=>c.remove(),3000);
}
}

const fallStyle=document.createElement("style");
fallStyle.innerHTML=`@keyframes fall{to{transform:translateY(110vh);}}`;
document.head.appendChild(fallStyle);

// Emoji celebration
function emojiRain(){
const emojis=["😍","❤️","😘","💖","🥰"];
setInterval(()=>{
let e=document.createElement("div");
e.className="emoji";
e.innerText=emojis[Math.floor(Math.random()*emojis.length)];
e.style.left=Math.random()*100+"vw";
document.body.appendChild(e);
setTimeout(()=>e.remove(),3000);
},200);
}

// Final message
function finalLove(){
document.body.innerHTML=`
<div style="
height:100vh;
display:flex;
justify-content:center;
align-items:center;
font-size:34px;
text-align:center;
background:black;
color:white;
">

❤️ Hum Hain Rahi Pyar Ke,<br>
Phir Milenge Chalte Chalte ❤️

</div>`;
}
