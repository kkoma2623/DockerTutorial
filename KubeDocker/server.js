var http = require('http');
const answer = [
    {
        answer: ["Hi", "Hello", "hi", "hello"],
        question: ["Hello", "Hi", "hi", "hello"]
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

var handleRequest = function(req, res) {
    res.writeHead(200);
    const sen = req.params;
    const ans = answer.filter(element => {
            return element["question"].find(ele => sen === ele);
        }
    );

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

}

var www = http.createServer(handleRequest);

www.listen(8081);