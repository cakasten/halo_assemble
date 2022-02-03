let today = new Date();
document.getElementById('date').innerHTML = 'Today - ' + today.getMonth() + 1 + '/' + today.getDate();



fetch('http://localhost:3000/plans')
.then(response => response.json())
.then(data => console.log('data', data));
