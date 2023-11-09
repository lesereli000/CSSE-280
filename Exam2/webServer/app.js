const express = require('express');
const app = express ();
app.use('/', express.static("public"));
app.use(express.json());
const json = "../data/db.json";
const fs = require('fs');

let port = 3000;
app.listen(port, () => {
    console.log("Server Listening on PORT:", port)
});

app.get("/api/getmonths", (request, response) => {
    console.log("get");
    fs.readFile(json, 'utf8', (err, data) => {
        if (err){
            console.log(err);
        } else {
        obj = JSON.parse(data);
        response.send(obj);
        }
    });
});

app.put("/api/move/:from/:to", (request, response) => {
    const fromIndex = request.params.from;
    const toIndex = request.params.to;
    fs.readFile(json, (err, data) => {
        if(err){
            console.log(err);
        } else {
            obj = JSON.parse(data);
            const monthMoved = obj.splice(fromIndex, 1)[0]; // Does the splice and returns the month
            obj.splice(toIndex, 0, monthMoved);  // Inserts the month back into the array at the index
            fs.writeFile(json, JSON.stringify(obj), () => {});
            response.send(`{"months":${JSON.stringify(obj)},"moved_month":"${obj[request.params.to]}","from_index":"${request.params.from}","to_index":"${request.params.to}"}`);
        }
    });
});

app.post("/api/setmonths", (request, response) => {
    fs.writeFile(json, JSON.stringify(request.body.months), () => {});
    response.send(JSON.stringify(request.body.months));
});