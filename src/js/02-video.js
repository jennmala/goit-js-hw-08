import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


player.on('timeupdate', throttle(({ seconds }) => {
    localStorage['videoplayer-current-time'] = seconds;
}, 1000));

if (localStorage['videoplayer-current-time']) {
    player.setCurrentTime(localStorage['videoplayer-current-time']);
}

