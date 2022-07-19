function formatDate(date) {
    let now = new Date();
    let differenceMilliSec = Math.floor(now - date); 

    if (differenceMilliSec < 1000) {
        return `Прямо сейчас`;
    } else if (differenceMilliSec >= 1000 && differenceMilliSec < 60000) {
        return Math.floor(differenceMilliSec/1000) + ' секунд назад';
    } else if (differenceMilliSec >= 60000 && differenceMilliSec < 360000) {
        return Math.floor(differenceMilliSec/60000) + ' мин. назад';
    } else {
      return date.toLocaleString();
    }
};
