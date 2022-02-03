(function() {
    const countdownDays = document.querySelector('.countdown__days');
    const countdownHours = document.querySelector('.countdown__hours');
    const countdownMinutes = document.querySelector('.countdown__minutes');
    const countdownSeconds = document.querySelector('.countdown__seconds');
    const startTime = new Date('2022-11-15T24:00:00');

    function updateCountdown() {
        const currentDate = new Date();
        const secondsInHour = 60 * 60;
        const secondsInDay = 60 * 60 * 24;
        const totalSeconds = Math.floor((startTime - currentDate) / 1000);
        const leftDays = Math.floor(totalSeconds / secondsInDay);
        const leftHours = Math.floor((totalSeconds - leftDays * secondsInDay) / secondsInHour);
        const leftMinutes = Math.floor((totalSeconds - leftDays * secondsInDay - leftHours * secondsInHour) / 60);
        const leftSeconds = Math.floor(totalSeconds - leftDays * secondsInDay - leftHours * secondsInHour - leftMinutes * 60);
        countdownDays.innerText = leftDays;
        countdownHours.innerText = leftHours;
        countdownMinutes.innerText = leftMinutes;
        countdownSeconds.innerText = leftSeconds;
    }

    setInterval(updateCountdown, 1000);
})();