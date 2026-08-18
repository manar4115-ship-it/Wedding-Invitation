const openBtn=document.getElementById("openInvitation");
const content=document.getElementById("content");
openBtn.addEventListener("click",()=>{content.classList.remove("hidden");content.scrollIntoView({behavior:"smooth"});});

// Countdown to 15 October 2026, 7:00 PM Cairo time.
const target=new Date("2026-10-15T19:00:00+03:00").getTime();
function tick(){
const diff=Math.max(0,target-Date.now());
const d=Math.floor(diff/86400000);
const h=Math.floor(diff%86400000/3600000);
const m=Math.floor(diff%3600000/60000);
const s=Math.floor(diff%60000/1000);
document.getElementById("days").textContent=d;
document.getElementById("hours").textContent=h;
document.getElementById("minutes").textContent=m;
document.getElementById("seconds").textContent=s;
}
tick();setInterval(tick,1000);

// Music: browser autoplay rules require a user gesture.
// Put your legally obtained audio file at assets/song.mp3 to enable this button.
let audio=null;
const musicButton=document.getElementById("musicButton");
musicButton.addEventListener("click",()=>{
if(!audio) audio=new Audio("assets/song.mp3");
audio.loop=true;
if(audio.paused){audio.play().then(()=>musicButton.textContent="Ⅱ").catch(()=>alert("أضيفي ملف song.mp3 داخل مجلد assets أولاً."));}
else {audio.pause();musicButton.textContent="♫";}
});
