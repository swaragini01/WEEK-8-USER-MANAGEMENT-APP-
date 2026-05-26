fetch('http://localhost:4000/user-api/users').then(res => res.text()).then(console.log).catch(console.error);
