import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

//nod econst express = require("express");
const app =  express();
const PORT=3002;

var corsOptions = {
    origin: "http://localhost:3000"
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db =mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'rojmi_260708',
    database: 'portfoliosystem',
});

db.connect();

// GET all stocks
app.get("/showstock", async (req, res) => {
    try {
        const query = 'SELECT * FROM addstock';

        db.query(query, (err, result, fields) => {
            res.json({ data: result, success: true }).status(200);
        });
    } catch (error) {
        console.log(error);
        res.end().status(500);
    }
});


//POSt new stock
app.post('/addadminstock',(req,res)=>{
    const stockname=req.body.name;
    const unitrate=req.body.units;

    db.query(
        "INSERT INTO addstock(stockname,rate) VALUES (?,?)",
    [stockname,unitrate], 
    (err,result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send("Values Inserted");
        }
    })
});

// POST new user stock

app.post('/userstock',(req,res)=>{
    const transactiontype=req.body.type;
    const quantity=req.body.quantity;
    const transactiondate=req.body.date;
    const stock_id=req.body.stock_id;

    db.query(
        "INSERT INTO user_stock(transactiontype,quantity,transactiondate,stock_id) VALUES (?,?,?,?)",
    [transactiontype,quantity,transactiondate,stock_id], 
    (err,result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send("Values Inserted");
        }
    })
});

// GET user stock
app.get('/user/showportfolio', async (req, res) => {
    try {
        const query = `SELECT us.id, us.transactiontype, us.quantity, us.transactiondate, s.stockname, s.rate FROM user_stock us LEFT JOIN addstock s on us.stock_id = s.id`;

        db.query(query, (err, result, fields) => {
            res.json({ data: result, success: true }).status(200);
        });
    } catch (error) {
        console.log(error);
        res.end().status(500);
    }
});




// DELETE user stock
app.delete('/user/stocks/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const query = `DELETE FROM user_stock WHERE stock_id = ${id};`;

        await db.query(query);
        res.json({ success: true, data: 'Stock deleted successfully.' }).status(200);
    } catch (error) {
        console.log(error);
        res.end().status(500);
    }
});

// Update user stock
app.put('/update', async (req, res) => {
    try {
        const { stockId, quantity, id } = req.body;
        const query = `UPDATE addstock
        SET id = ${id},stockname= ${stockname}, rate= ${rate}, 
        WHERE id=${id};`;

        const userStocks = await db.query(query);
        res.json({ success: true, data: userStocks }).status(200);
    } catch (error) {
        console.log(error);
        res.end().status(500);
    }
});


app.put('/update', async (req, res) => {
    const id=req.body.id;
    const stockname=req.body.name;
    const rate=req.body.units;

    db.query(
        `UPDATE SET addstock stockname=?, rate=? WHERE id = ?`,
        [stockname,rate,id],
        (err, result) => {
            if (err){
                console.log(err);
            }
            else{
                res.send(result);
            }
        }
    );
});


app.listen(3002, () => {
    console.log("yayyy, your server is running on port 3002");
});