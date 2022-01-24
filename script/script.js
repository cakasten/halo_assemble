let today = new Date();
document.getElementById('date').innerHTML = 'Today - ' + today.getMonth() + 1 + '/' + today.getDate();




for (let i = 0; i < 24; i++) {
    let sel = document.getElementById('startTime')
    let optionTime = document.createElement('option');
    if (i === 0) {
        optionTime.value = 'hour' + i;
        optionTime.innerHTML = '12:00 AM';
        sel.add(optionTime);
    } else if (i < 12) {
        optionTime.value = 'hour' + i;
        optionTime.innerHTML = i + ':00 AM';
        sel.add(optionTime);

    } else {
        optionTime.value = 'hour' + i;
        optionTime.innerHTML = i + ':00 PM';
        sel.add(optionTime);
    }
}