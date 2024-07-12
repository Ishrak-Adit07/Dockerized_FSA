import app from './app';
const PORT = 4000;

app.listen(PORT, (req, res)=>{
    console.log(`DFSA server is running at http://localhost:${PORT}`);
});