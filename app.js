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

const handleSubmit = (e) => {
    e.preventDefault();
    const newValue = Number(document.querySelector('.new-value').value);
    const oldValue = Number(document.querySelector('.old-value').value);

    document.querySelector('#result').textContent = piPdCalculator(newValue, oldValue);
}

document.querySelector('#pipd-form').addEventListener('submit', handleSubmit);


