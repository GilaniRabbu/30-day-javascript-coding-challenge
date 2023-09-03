// ✅ Here's an updated version of code that works for both desktop and touch screen devices:

function playSound(event) {
    let keyCode;
    if (event.type === "keydown") {
        keyCode = event.keyCode;
    } else if (event.type === "touchstart") {
        // Determine the data-key attribute from the touched element
        const target = event.target.closest(".key");
        if (target) {
            keyCode = target.getAttribute("data-key");
        }
    }

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (!audio) return; // Stop the function from running altogether

    audio.play();

    audio.currentTime = 0;

    key.classList.add("playing");
}

function removeTransition(event) {
    if (event.propertyName !== "transform") return; // Skip it if it's not a transform

    console.log(event.propertyName);

    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");

keys.forEach((key) => {
    key.addEventListener("transitionend", removeTransition);
    key.addEventListener("touchstart", playSound); // Add touchstart event
});

window.addEventListener("keydown", playSound);

// 1. If the event type is "keydown" or "touchstart" to determine whether the input is coming from a keyboard or a touch screen device.

// 2. In the "touchstart" event handler, we use event.target.closest(".key") to find the closest ancestor element with the class "key" and then retrieve the "data-key" attribute from it to identify the key to play.

// 3. We add a "touchstart" event listener to each key element to handle touch events.