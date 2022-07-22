import Player from "@vimeo/player";
import throttle from 'lodash.throttle';

const currentTimeKey = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.setCurrentTime(localStorage.getItem(currentTimeKey));

player.on('timeupdate', throttle(() => {
    player.getCurrentTime().then((seconds) => {
        localStorage.setItem(currentKey, seconds);
    });
}, 1000)
);
