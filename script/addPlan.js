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

document.getElementById('submit')
    .addEventListener('click', submitForm);

function submitForm(event) {
    console.log('submit', event);
    event.preventDefault();

    // grab all the data off each input.
    const gamerTagVal = document.querySelector('[name="gamertag"]').value;

    if (gamerTagVal == '') {
        alert('K/D dropped!');
        return;
    }
    // put it into an object
    const data = {
        gamertag: gamerTagVal,
    };

    // send that object using fetch

    fetch('http://localhost:3000/plans', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    }).then(response => console.log('res', response));
}

