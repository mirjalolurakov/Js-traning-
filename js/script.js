const counters = document.querySelectorAll('.value')
const speed = 300;

counters.forEach(counter => {
    const animate = () => {
        const value = +counter.getAttribute('num');
        const data = +counter.innerText;

        const time = value / speed;


        if (data < value) {
            counter.innerText = Math.ceil(data + time);
            setTimeout(animate, 1);

        }
    }
    animate();
});