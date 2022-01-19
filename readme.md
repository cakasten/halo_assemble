# Halo Assemble

1. input to select date and time of halo 
2. add RSVP 

## Server
Install backend dependencies. (Only needs to be ran once)

```
cd ./server
npm install
```

Run backend service.
```
node ./server/app.js
```

### API

### Create a game plan with JavaScript.
```
const data = {
  date: '1/12/2022',
  startTime: '8:30pm',
  endTime: '10:00pm',
  gamertag : 'Libido Bunny',
};

fetch('/plans', {
    method: 'POST',
    mode: 'cors', // no-cors, *cors, same-origin
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  });
```

### Get all game plans with JavaScript.
```
fetch('/plans')
  .then(plans => console.log(plans);
```
