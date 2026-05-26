fetch('http://localhost:4000/user-api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: "Test",
    email: "test3@test.com",
    dateOfBirth: "1990-01-01",
    mobileNumber: ""
  })
}).then(res => res.text()).then(console.log).catch(console.error);
