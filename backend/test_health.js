fetch('http://localhost:4001/health').then(res => res.text()).then(console.log).catch(console.error);
