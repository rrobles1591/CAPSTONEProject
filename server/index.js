const express = require('express');
const app = express();
const cors = require("cors");//for middleware
const pool = require("./db"); //connects to database

app.use(cors());
app.use(express.json()); //gets data from clientside

//new client request
app.post("/new-client", async (req, res) => {
    try {
        const {firstName, lastName, pupName, weight, phoneNumber,appointment } = req.body;
        const newClient = await pool.query(
            "INSERT INTO client (first_name, last_name, pup_name, pup_weight_lbs, phone_number,appointment) VALUES ($1, $2 ,$3, $4, $5, $6) RETURNING *",
             [firstName, lastName, pupName, weight, phoneNumber,appointment]
        );
            res.json(newClient
                )
        
    } catch (error) {
        console.error(error.message);
    }
});
//all existing clients
app.get("/admin", async (req, res) => {
    try {
        const allClients = await pool.query("SELECT * FROM client");
        res.json(allClients.rows);
    } catch (error) {
        console.error(error.message);
    }
})

//also no worky

app.delete("/admin/:id", async (req, res)=>{
    try {
        const {id} = req.params;
        const deleteRequest = await pool.query("DELETE FROM client WHERE client_id = $1",
        [id]);
        res.json("Request was deleted");
    } catch (error) {
        console.log(error.message)
    }
})
//why no worky
app.get("/admin/:id" , async (req, res) => {
    try {
        const { id } = req.params;
        const request = await pool.query("SELECT * FROM client WHERE client_id = $1", [id]);
        res.json(client.rows);
    } catch (err) {
        console.log(err.message)
    }
    
    })


app.listen(5000, ()=>{
    console.log("Server started on port 5000 <3")
});