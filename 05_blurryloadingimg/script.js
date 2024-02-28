const bg = document.querySelector('.bg');
const loadingtext = document.querySelector('.loading-text');

let load = 0;

let int = setInterval(blurry, 30);

function blurry() {
    load++;

    if (load > 99) {
        clearInterval(int);
    }
    loadingtext.innerHTML = `${load}%`;
    loadingtext.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
