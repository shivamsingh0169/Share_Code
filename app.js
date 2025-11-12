const express = require("express")
const cors = require("cors")
const Document = require("./models/Document")
const app = express()


app.use(cors())
app.use(express.json()) 


app.post("/save", async (req, res) => {
  const value = req.body.value
  try {
    const document = await Document.create({ value })
    res.status(201).json({ id: document.id })
  } catch {
    res.status(500).json({ error: "Failed to save document" })
  }
})

app.get("/:id", async (req, res) => { 
  try {
    const document = await Document.findById(req.params.id)
    res.json({ value: document.value })
  } catch { 
    res.status(404).json({ error: "Document not found" })
  }
})

app.delete("/:id", async (req, res) => {
  try {
    await Document.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: "Snippet deleted" })
  } catch {
    res.status(500).json({ error: "Failed to delete snippet" })
  }   
})


module.exports = app

