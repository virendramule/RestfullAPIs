const express = require('express');
const usersData = require('./MOC_DATA.json');

const app = express();
const PORT = 8000;

//Routing


// return all the users in the JSON format
app.get('/api/users', (req, res) => {
    return res.json(usersData);
})

// reurn all the users in the html format
app.get('/users', (req, res) => {
    const html = `<ul>${usersData.map(usersData => `<li>${usersData.first_name}</li>`).join("")}</ul>`
   res.send(html); 
})

// find the id and return the user detail in the json format
app.get('/api/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = usersData.find((usersData) => usersData.id === id)

    res.json(user)
})

// app.get('/users/:id', (req, res) => {
//     const id = Number(req.params.id);
//     const user = usersData.find((usersData) => usersData.id === id);

//     const html = `<ul>${user.map(user => `<li>${user.first_name}</li>`)}</ul>`

// })

app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`))