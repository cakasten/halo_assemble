
for (let i = 0; i < 24; i++) {
    let sel = document.getElementById('startTime')
    let optionTime = document.createElement('option');
    if (i === 0) {
        optionTime.innerHTML = '12:00 PM';
    } else if (i < 12) {
        optionTime.innerHTML = i + ':00 PM';
    } else if (i === 12) {
        optionTime.innerHTML = i + ':00 AM';
    }else {
        optionTime.innerHTML = (i - 12) + ':00 AM';
    }
    optionTime.value = 'hour' + i;
    sel.add(optionTime);

}

for (let i = 0; i < 24; i++) {
    let sel = document.getElementById('endTime')
    let optionTime = document.createElement('option');
    if (i === 0) {
        optionTime.innerHTML = '12:00 PM';
    } else if (i < 12) {
        optionTime.innerHTML = i + ':00 PM';
    } else if (i === 12) {
        optionTime.innerHTML = i + ':00 AM';
    }else {
        optionTime.innerHTML = (i - 12) + ':00 AM';
    }
    optionTime.value = 'hour' + i;
    sel.add(optionTime);

}

