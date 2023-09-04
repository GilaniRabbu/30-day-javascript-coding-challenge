const Input = document.querySelectorAll(".controls input");

function inputUpdate() {
    const Suffix = this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + Suffix);
}

Input.forEach(input => input.addEventListener("change", inputUpdate));
Input.forEach(input => input.addEventListener("mousemove", inputUpdate));