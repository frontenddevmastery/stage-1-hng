let app = {
    datatestid: [...document.getElementsByTagName('p'), ...document.getElementsByTagName('a')],
    img: document.querySelector('img'),
    time: new Date()
}

const switchDay = (dayInNum) => {
    switch (dayInNum) {
        case 1:
            return 'Monday'
            break;
        case 2:
            return 'Tuesday'
            break;
        case 3:
            return 'Wednesday'
            break;
        case 4:
            return 'Thursday'
            break;
        case 5:
            return 'Friday'
            break;
        case 6:
            return 'Saturday'
            break;
        case 0:
            return 'Sunday'
            break
        default:
            return 'This is not a valid day of the week'
    }
}

const currentDayOfTheWeek = () => {
    app.datatestid.forEach( elem => {
        if (elem.dataset.testid === 'currentDayOfTheWeek') {
            let currentDay = switchDay(app.time.getDay())
            console.log(app.time.getDay());
            elem.innerText = currentDay
        }
        if (elem.dataset.testid === 'currentUTCTime') {
            let currentUTC = Date.now()
            elem.innerText = currentUTC
        }
    })
    
}

function initializeApp() {
    currentDayOfTheWeek()
}
initializeApp()