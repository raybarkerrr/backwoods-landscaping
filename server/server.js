require("dotenv").config()

const express = require("express")
const app = express()

app.use(express.json())

const stripe = require("stripe")(process.env. STRIPE_PRIVATE_KEY)

const storeItems = new Map([
    [1, {priceInCents: 10000, name: "Price One"}],
    [2, {priceInCents: 10000, name: "Price One"}] 
])


app.use(express.static("public"))
app.listen(3000)