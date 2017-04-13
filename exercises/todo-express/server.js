var express = require('express');
var uuid = require("uuid/v4");
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());

var port = 4000;

var todoList = [
    {
        name: "Wash dishes",
        description: "Wash dishes by hand",
        imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQS4jrF1x9BJmqusOhsQ53hYD8zstyR1_x7EyMBG289-MUrXaNnTQ",
        completed: false
    },
    {
        name: "Laundry",
        description: "Wash white clothes",
        imageUrl: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSi_Su_28ds3xxC48oxq-SAaBA7_VaZyNSz19Mbclp_YT79_EMb9g",
        completed: false
    },
    {
        name: "Wash car",
        description: "Wash and vaccum car",
        imageUrl: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS_uXrahZUX6tsohsbSFdxBmXNbBC1PrlnddAt3b0ARBYjE1fIN",
        completed: false
    }
]

app.get('/todo', function (req, res) {
    res.send(todoList);
    console.log(todoList)
})

app.post('/todo', function (req, res) {
    var newTodo = req.body;
    console.log(req.body);
    newTodo._id = uuid();

    todoList.push(newTodo);
    res.send(newTodo)
})

app.put('/todo/:id', function (req, res) {
            var newTodo = req.body;
            for (var i = 0; i < todoList.length; i++) {
                if (req.params.id === todoList[i]._id) {
                    for (var key in todoList[i]) {
                        todoList[i][key] = newTodo[key] || todoList[i][key];
                    }
                    return res.send(todoList[i]);
                }
            }
        }

        app.delete('/todo/:id', function (req, res) {
            console.log(todoList[3])
            for (var i = 0; i < todoList.length; i++) {
                if (req.params.id === todoList[i]._id) {
                    todoList.splice(i, 1);
                    return res.send({
                        status: 'sucess',
                        message: "you successfully deleted an item",
                        todoList: todoList
                    });
                }
            }
            res.status(404).send("not found");
        })




        app.listen(port, function () {
            console.log("Your server is listening")
        })