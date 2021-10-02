    const countdown = () => {

        const deadline = new Date("Oct 9, 2021 00:00:00 ").getTime()
        const now = new Date().getTime()
        const diff = deadline - now
        console.log(diff)

        const sec = 1000
        const min = sec * 60
        const hour = min *60
        const days = hour * 24

        console.log(days)

        let timedays = Math.floor(diff / days)
        let timeHours = Math.floor((diff % days) / hour)
        let timeMin = Math.floor((diff % hour) / min)
        let timeSecs = Math.floor((diff % min) / sec)

        timeHours = timeHours < 10 ? "0" + timeHours : timeHours
        timedays = timedays < 10 ? "0" + timedays : timedays
        timeSecs= timeSecs < 10 ? "0" + timeSecs : timeSecs
        timeMin = timeMin < 10 ? "0" + timeMin: timeMin

        document.getElementById("days").innerHTML = timedays
        document.getElementById("hours").innerHTML = timeHours
        document.getElementById("mins").innerHTML = timeMin
        document.getElementById("secs").innerHTML = timeSecs
    }

    setInterval(countdown, 1000)