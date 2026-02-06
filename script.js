function enterSite(){
document.getElementById("landing").style.display="none";
document.getElementById("mainContent").style.display="block";

const music=document.getElementById("bgMusic");
music.volume=0.6;
music.play();

typeLetter();
}

// Hearts
setInterval(()=>{
let h=document.createElement("div");
h.innerHTML="❤️";
h.style.position="fixed";
h.style.left=Math.random()*100+"vw";
h.style.bottom="0";
h.style.fontSize="24px";
h.style.animation="floatUp 4s linear";
document.body.appendChild(h);
setTimeout(()=>h.remove(),4000);
},400);

const style=document.createElement('style');
style.innerHTML=`@keyframes floatUp{from{transform:translateY(0);}to{transform:translateY(-100vh);}}`;
document.head.appendChild(style);

// Love Letter
const letter=`From the moment you came into my life,
everything became brighter.

Every memory, every laugh,
every second with you
means more than words can say.

This little website is just a small
piece of my heart ❤️`;

function typeLetter(){
let i=0;
function t(){
if(i<letter.length){
document.getElementById("typedLetter").innerHTML+=letter.charAt(i);
i++; setTimeout(t,35);
}}
t();
}

// Flip Cards
function flip(card){card.classList.toggle("flipped");}

// Secret
function revealSecret(){
let m=document.getElementById("secretMsg");
m.innerText="You found my hidden heart ❤️";
m.style.display="block";
}

// Fireworks
function startProposal(){
document.getElementById("proposalText").innerText="I Love You ❤️";

const fw=new Fireworks.default(
document.getElementById("fireworks"),
{particles:120}
);
fw.start();
setTimeout(()=>fw.stop(),8000);
}
