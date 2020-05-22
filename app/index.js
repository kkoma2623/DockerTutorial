// index.js
const express = require('express');
const app = express();
const answer = [
    {
        answer: ["Hi", "Hello", "hi", "hello"],
        question: ["Hello", "Hi", "hi", "hello"]
    },
    {
        answer: ["My name is kkoma", "My name is jiwook"],
        question: ["What is your name?","what is your name?", "name?", "Name?"]
    },
    {
        answer: ["It's top secret","You are so rude"],
        question: ["How old are you?", "age?"]
    },
    {
        answer: ["Bye","Bye bye", "see ya", "Good morning good afternoon and good night"],
        question: ["Bye", "bye", "See ya", "see you", "see you later"]
    }
];
app.get('/', (req, res) => {
    res.end(JSON.stringify(answer));
});
app.get('/hi', (req, res) => {
    res.end(JSON.stringify(answer[0]));
});
app.get('/name', (req, res) => {
    res.end(JSON.stringify(answer[1]));
});
app.get('/age', (req, res) => {
    res.end(JSON.stringify(answer[2]));
});
app.get('/bye', (req, res) => {
    res.end(JSON.stringify(answer[3]));
});

app.listen(3000, function () {
    console.log('test server listening on port 3000');
});