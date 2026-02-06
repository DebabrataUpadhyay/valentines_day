function enterSite(){
document.getElementById("landing").style.display="none";
document.getElementById("mainContent").style.display="block";
document.getElementById("bgMusic").play();
typeLetter();
}

// Typing Letter
const letter=`From the moment you came into my life,
everything became brighter.

Every memory, every laugh,
every second with you
means more than words can say ❤️`;

function typeLetter(){
let i=0;
function t(){
if(i<letter.length){
document.getElementById("typedLetter").innerHTML+=letter.charAt(i);
i++; setTimeout(t,35);
}}
t();
}

// Flip cards
function flip(card){card.classList.toggle("flipped");}

// Secret heart
function revealSecret(){
let m=document.getElementById("secretMsg");
m.innerText="You found my hidden heart ❤️";
m.style.display="block";
}

// Fireworks
function startProposal(){
const fw=new Fireworks.default(document.getElementById("fireworks"),{particles:120});
fw.start();
setTimeout(()=>fw.stop(),8000);
}

// NO escape
const noBtn=document.getElementById("noBtn");
noBtn.addEventListener("mouseover",()=>{
noBtn.style.position="absolute";
noBtn.style.left=Math.random()*80+"%";
noBtn.style.top=Math.random()*80+"%";
});

// YES clicked
function sayYes(){
document.getElementById("proposalResult").innerText="Yay ❤️";
launchConfetti();
emojiRain();
document.getElementById("foreverBtn").style.display="inline-block";
}

// Confetti
function launchConfetti(){
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

// Emoji reactions
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

// Final Message
function finalLove(){
document.body.innerHTML=`
<div style="
height:100vh;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
background:black;
color:white;
text-align:center;
font-size:36px;
line-height:1.6;
">

❤️ Hum Hain Rahi Pyar Ke,<br>
Phir Milenge Chalte Chalte ❤️

</div>
`;
}
