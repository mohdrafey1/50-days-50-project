const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
    const triggerPoint = (window.innerHeight / 5) * 4;

    boxes.forEach((box) => {
        const boxtop = box.getBoundingClientRect().top;
        if (boxtop < triggerPoint) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}
