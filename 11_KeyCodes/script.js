const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class="key">
            ${e.key === ' ' ? 'Space' : e.key}
            <small>event.key</small>
        </div>
        <div class="key">
            ${e.keyCode}
            <small>event.keycode</small>
        </div>
        <div class="key">
            ${e.code}
            <small>event.code</small>
        </div>
    `;
    window.addEventListener('mousemove', (e) => {
        insert.innerHTML = `
            <div class="key">
                Mouse X: ${e.clientX}
                <small>clientX</small>
            </div>
            <div class="key">
                Mouse Y: ${e.clientY}
                <small>clientY</small>
            </div>
        `;
    });
});

const circle = document.getElementById('circle');

document.addEventListener('mousemove', (e) => {
    const offsetX = 15;
    const offsetY = 50;

    circle.style.top = e.clientY + offsetY + 'px';
    circle.style.left = e.clientX + offsetX + 'px';
    // circle.style.transform = `translate(${e.clientX + offsetX}px, ${
    //     e.clientY + offsetY
    // }px)`;

    // console.log(`${e.clientX + offsetX}px, ${e.clientY + offsetY}px)`);
});
