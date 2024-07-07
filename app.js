// calulates the percentage increase of decrease
const piPdCalculator = (newValue, oldValue) => {
    const percentage =  ((newValue - oldValue) /oldValue) * 100
    const roundedPercentage = percentage.toFixed(2);
    if(newValue > oldValue) {
        return `Percentage Increase: ${roundedPercentage}%`
    } else if (newValue < oldValue) {
        return `Percentage Decrease: ${-roundedPercentage}%`
    } else {
       return 'No percentage increase or decrease'
    }
}

const clearResults = () => {
    document.querySelector('#last-day').textContent = '';
    document.querySelector('#last-week').textContent = ''; 
}

const handleSubmit = (e) => {
    e.preventDefault();
    clearResults();
    const newValue = Number(document.querySelector('.new-value').value);
    const lastDayValue = Number(document.querySelector('.last-day-value').value);
    const lastWeekValue = Number(document.querySelector('.last-week-value').value);

    if(lastDayValue) {
        document.querySelector('#last-day').textContent = `From last day, ${piPdCalculator(newValue, lastDayValue)}`
    };

    if(lastWeekValue) {
        document.querySelector('#last-week').textContent = `From last week ${piPdCalculator(newValue, lastWeekValue)}`
    };

    
}

document.querySelector('#pipd-form').addEventListener('submit', handleSubmit);


