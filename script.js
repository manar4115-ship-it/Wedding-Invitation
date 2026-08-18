const openBtn = document.getElementById("openInvitation");
const content = document.getElementById("content");

// Music
let audio = null;
const musicButton = document.getElementById("musicButton");

// Open invitation + start music
openBtn.addEventListener("click", () => {
    content.classList.remove("hidden");
    content.scrollIntoView({ behavior: "smooth" });

    // Start the music when the invitation is opened
    if (!audio) {
        audio = new Audio("assets/song.mp3");
        audio.loop = true;
    }

    audio.play()
        .then(() => {
            if (musicButton) {
                musicButton.textContent = "Ⅱ";
            }
        })
        .catch(() => {
            console.log("Please make sure song.mp3 is inside the assets folder.");
        });
});


// Countdown to 15 October 2026, 7:00 PM Cairo time.
const target = new Date("2026-10-15T19:00:00+03:00").getTime();

function tick() {
    const diff = Math.max(0, target - Date.now());

    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);

    document.getElementById("days").textContent = d;
    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
}

tick();
setInterval(tick, 1000);


// Music button
musicButton.addEventListener("click", () => {
    if (!audio) {
        audio = new Audio("assets/song.mp3");
        audio.loop = true;
    }

    if (audio.paused) {
        audio.play()
            .then(() => {
                musicButton.textContent = "Ⅱ";
            })
            .catch(() => {
                alert("أضيفي ملف song.mp3 داخل مجلد assets أولاً.");
            });
    } else {
        audio.pause();
        musicButton.textContent = "♫";
    }
});
