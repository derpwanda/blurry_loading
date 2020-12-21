const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  if(load > 99) {
      clearInterval(int)
  }

  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`

}

const scale = (num, in_lo, in_hi, out_lo, out_hi) => {
    return (num - in_lo) * (out_hi - out_lo) / (in_hi - in_lo) + out_lo;
}
