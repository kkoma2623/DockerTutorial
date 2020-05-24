// index.js
const express = require('express');
const app = express();
const answer = [
    {
        answer: ["Hi", "Hello", "hi", "hello"],
        question: ["Hello", "Hi", "hi", "hello", ":aklsjlkasdj"]
    },
    {
        answer: ["My name is kkoma", "My name is jiwook"],
        question: ["What is your name","what is your name", "name", "Name"]
    },
    {
        answer: ["It's top secret","You are so rude"],
        question: ["How old are you", "age"]
    },
    {
        answer: ["Bye","Bye bye", "see ya", "Good morning good afternoon and good night"],
        question: ["Bye", "bye", "See ya", "see you", "see you later"]
    }
];
app.get('/:sentence', (req, res) => {
    const sen = req.params.sentence;
    
    const ans = answer.filter(element => {
        return element["question"].find(ele => sen === ele);
    });

    if(ans.length === 0){
        res.end(JSON.stringify(
            {
            answer: ["Sorry I can't understand"],
            question: [sen]
        }
        ));
    } else{
        res.end(JSON.stringify(ans[0]));
    }

    // console.log(found)
    
});


app.listen(8080, function () {
    console.log('test server listening on port 8081');
});