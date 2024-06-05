let close_btn = document.querySelector(".close_btn");
let open_btn = document.querySelector(".open_btn");
let header__menu = document.querySelector(".header__menu");
let menu_mask = document.querySelector(".menu_mask");
let block_box4__img_YouTube__mask = document.querySelector(".block_box4__img_YouTube__mask");
let mask_play = document.querySelector(".mask_play");
let mask_play2 = document.querySelector(".mask_play2");
let mask_play3 = document.querySelector(".mask_play3");

close_btn.addEventListener("click", () => {
    header__menu.classList.toggle("is-active");
    menu_mask.classList.toggle("is-active");
});
open_btn.addEventListener("click", () => {
    header__menu.classList.toggle("is-active");
    menu_mask.classList.toggle("is-active");
});

let tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

mask_play.style.display = "block";
mask_play2.style.display = "none";
mask_play3.style.display = "none";
mask_play.addEventListener("click", (e) => {
    e.preventDefault();
    let player = new YT.Player("block_box4__img_YouTube", {
        playerVars: {
            'controls': 0,
            'showinfo': 0,
            'disablekb': 1,
            'rel': 0,
            'playsinline': 1,

        },
        videoId: "aFsuXmtoTlE",
        events: {
            'onReady': (event) => {
                let video = event.target.h;
                event.target.playVideo();
                block_box4__img_YouTube__mask.style.opacity = '0';
                mask_play.style.display = "none";
                mask_play2.style.display = "block";
                mask_play3.style.display = "none";
                setInterval(() => {
                    if (localStorage.getItem('pause_video')) {
                        event.target.pauseVideo();
                        block_box4__img_YouTube__mask.style.opacity = '1';
                        mask_play.style.display = "none";
                        mask_play2.style.display = "none";
                        mask_play3.style.display = "block";
                    }
                    if (localStorage.getItem('play_video')) {
                        event.target.playVideo();
                        block_box4__img_YouTube__mask.style.opacity = '0';
                        mask_play.style.display = "none";
                        mask_play2.style.display = "block";
                        mask_play3.style.display = "none";
                    }
                }, 500);
            },
        }
    });
});
mask_play2.addEventListener("click", () => {
    localStorage.setItem('pause_video', 'true');
    localStorage.removeItem('play_video', 'true');
    mask_play.style.display = "none";
    mask_play2.style.display = "none";
    mask_play3.style.display = "block";
});
mask_play3.addEventListener("click", () => {
    localStorage.removeItem('pause_video', 'true');
    localStorage.setItem('play_video', 'true');
    mask_play.style.display = "none";
    mask_play2.style.display = "block";
    mask_play3.style.display = "none";
});