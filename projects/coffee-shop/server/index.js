const { MongoClient, ServerApiVersion } = require("mongodb");
const express = require("express");
const cors = require("cors");
const { ObjectId } = require("mongodb");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
console.log(process.env.USER_DB);
console.log(process.env.USER_PASS);
const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.USER_PASS}@cluster0.59g1oee.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const coffeeCollection = client.db("coffeeDB").collection("coffees");

    // POST
    app.post("/coffees", async (req, res) => {
      const newCoffee = req.body;
      console.log("🟢 Received POST /coffees:", req.body);
      const result = await coffeeCollection.insertOne(newCoffee);
      res.send(result);
      console.log(result);
    });

    // GET all
    app.get("/coffees", async (req, res) => {
      try {
        const result = await coffeeCollection.find().toArray();
        res.send(result);
      } catch (err) {
        console.error("Error fetching coffees:", err);
        res.status(500).json({ error: "Failed to fetch coffees" });
      }
    });

    // GET Single data  /coffees/:id
    app.get("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      const coffee = await coffeeCollection.findOne({ _id: new ObjectId(id) });
      if (!coffee) return res.status(404).send({ message: "Coffee not found" });
      res.send(coffee);
    });

    app.patch("/coffees/:id", async (req, res) => {
      const id = req.params.id;
      const updatedCoffee = req.body;

      const result = await coffeeCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: updatedCoffee }
      );

      res.send(result);
    });

    // deleter item
    app.delete("/coffees/:id", async (req, res) => {
      const { id } = req.params;
      try {
        const result = await coffeeCollection.deleteOne({
          _id: new ObjectId(id),
        });
        if (result.deletedCount === 0) {
          return res.status(404).json({ error: "Coffee not found" });
        }
        res.json({ success: true });
      } catch (error) {
        console.error("Failed to delete coffee:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("server is runing!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
