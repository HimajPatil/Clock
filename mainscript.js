function time() {
    const time = new Date();
    let date = document.getElementById('date');
    let hour = document.getElementById('hour');
    let min = document.getElementById('min');
    let sec = document.getElementById('sec');
    let millisec = document.getElementById('millisec');
    let dt = time.getDate();
    date.innerText = dt;
    let h = time.getHours();
    hour.innerText = h;
    let m = time.getMinutes();
    min.innerText = m;
    let s = time.getSeconds();
    sec.innerText = s;
    let ms = time.getMilliseconds();
    millisec.innerText = ms;
}
setInterval(time, 1);