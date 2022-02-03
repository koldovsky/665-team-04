(function() {
    const countdownDays = document.querySelector('.countdown__days');
    const countdownHours = document.querySelector('.countdown__hours');
    const countdownMinutes = document.querySelector('.countdown__minutes');
    const countdownSeconds = document.querySelector('.countdown__seconds');
    const startTime = new Date('2022-11-15T24:00:00');

    function updateCountdown() {
        const currentDate = new Date();
        const secondsInHour = 60 * 60;
        const totalSeconds = Math.floor((startTime - currentDate) / 1000);
        const leftDays = Math.floor(totalSeconds / secondsInHour / 24);
        const leftHours = Math.floor(totalSeconds / secondsInHour) % 24;
        const leftMinutes = Math.floor(totalSeconds  / 60) % 60;
        const leftSeconds = totalSeconds % 60;
        countdownDays.innerText = leftDays;
        countdownHours.innerText = leftHours;
        countdownMinutes.innerText = leftMinutes;
        countdownSeconds.innerText = leftSeconds;
    }

    setInterval(updateCountdown, 1000);
})();