
const days = Math.floor(time / (1000 * 60 * 60 * 24));
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);

const refs ={
    days:document.querySelector('[data-value="days"]'),
    hours:document.querySelector('[data-value="hours"]'),
    hours:document.querySelector('[data-value="mins"]'),
    hours:document.querySelector('[data-value="secs"]'),
    date: document.querySelector('[data-input]')
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2019'),
  });

  const inputDate = new Date(refs.date.value)