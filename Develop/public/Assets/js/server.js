const express = require("express");
const app = express();
const fs = require("fs");

const path = require("path");
// - needs for path.join 

const PORT = process.env.PORT || 8080;


app.get("/notes", (request, response) => {
    response.sendFile(path.join(__dirname, "..", "..", "notes.html"));
    console.log("Your Notes!");

})

// Get * - needs to return index.html (?)

app.get("/", (request, response) => {
    // response.sendFile(path.join(__dirname, "..", "..", "index.html"));
    response.sendFile(path.join(__dirname, "index.html"));
    console.log("Your index!");
})

// GET /api/notes
// Should read the db.json file and return all saved notes as JSON.db
// How?

app.get("/api/notes", (request, response) => {
    // Read in file and loop through it

    fs.readFile(path.join(__dirname, "..", "..", "..", "db.json"), function (err, data) {
        //     res.writeHead(200, {'Content-Type': 'text/html'});
        //     res.write(data);
        //     res.end();
        //   });

        console.log("API Notes!");
    })
})


// Server listening confirmation
app.listen(PORT, () => {
    console.log(`Server is listening on PORT ${PORT}`);
});