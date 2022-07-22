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
        let options = { day: '2-digit',  month: '2-digit', year: 'numeric', hour: 'numeric', minute: 'numeric' };
        let finalDate = new Intl.DateTimeFormat('en-GB', options).format(date);
        return finalDate.replaceAll('/', '.').replace(',', ' ');
    }
};
alert( formatDate(new Date(new Date - 86400* 4 * 1000)) );