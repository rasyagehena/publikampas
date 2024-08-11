const express = require("express")
const api = require("./routes/api")

// Fungsi untuk menghasilkan nomor port acak dalam rentang 49152 hingga 65535
function generateRandomPort() {
  const minPort = 49152;
  const maxPort = 65535;
  return Math.floor(Math.random() * (maxPort - minPort + 1)) + minPort;
}

// Menghasilkan port acak dan mencetaknya
const randomPort = generateRandomPort();
console.log(`Port acak yang dihasilkan: ${randomPort}`);
const port = randomPort

const app = express()
app.use(express.static("public"))
app.use("/", api)
const __path = process.cwd()

app.get('/', (req, res) => {
    res.sendFile(__path + '/view/home.html')
})

app.get('/dasboard', (req, res) => {
    res.sendFile(__path + '/view/docs.html')
})

app.listen(port, () => {
 console.log(`app running at http://localhost:${port}`)
})