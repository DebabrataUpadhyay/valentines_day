// IMAGES & SHAYARI
const images=[
"images/photo1.jpg",
"images/photo2.jpg",
"images/photo3.jpg",
"images/photo4.jpg",
"images/photo5.jpg",
"images/photo6.jpg"
];

const shayari=[
"Hum mile toh laga zindagi mil gayi ❤️",
"Tumhari muskurahat meri roshni hai ✨",
"Har khushi tumse shuru hoti hai 💖",
"Tum ho toh safar haseen hai 🌸",
"Dil ki har dhadkan tumhari hai 💕",
"Ab bas tum ho… aur tum hi ho ❤️"
];

let step=0;

// NO escape
const noBtn=document.getElementById("noBtn");
noBtn.addEventListener("mouseover",()=>{
noBtn.style.position="absolute";
noBtn.style.left=Math.random()*80+"%";
noBtn.style.top=Math.random()*80+"%";
});

// YES clicked
function acceptLove(){
document.getElementById("bgMusic").play();
confetti();
emojiRain();

document.getElementById("startScreen").style.display="none";
document.getElementById("mainContent").style.display="block";
}

// Reveal next
function revealLine(){

document.getElementById("shayariText").innerText=shayari[step];

step++;

if(step < images.length){
setTimeout(()=>{
document.getElementById("storyImage").src=images[step];
document.getElementById("shayariText").innerText="";
},1500);
}
else{
document.getElementById("revealBtn").style.display="none";
document.getElementById("finalBtn").style.display="inline-block";
}
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

// Emoji rain
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

// FINAL MESSAGE
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
