const express =require('express');
const app =express();

app.get('/', (req,res) => {
    res.send('Hello world from the my server');
});

app.get('/about', (req,res) => {
    res.send('Hello world from the my About server good');
});

app.get('/ contact', (req,res) => {
    res.send('Hello world from the server running');
});

app.get('/signup', (req,res) => {
    res.send('Hello world from the my server');
});



app.listen(3000,() =>{
    console.log('my server is runing at pot no 3000');
})