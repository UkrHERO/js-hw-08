import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
var iframe = document.querySelector('iframe');
var player = new Player(iframe);

const callbackTime = function (currentTime) {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(currentTime));
};

player.on('timeupdate', throttle(callbackTime, 1000));

const timeLocal = localStorage.getItem('videoplayer-current-time');
const curTime = JSON.parse(timeLocal);

player
  .setCurrentTime(curTime.seconds)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
