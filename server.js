const express = require('express');

const app = express();
const port = 3000;

app.get('/dajDenan', async(req, res)=>{
    const user = {
        name: "Denan",
        age: 25,
        city: "Sarajevo"
    };
    res.status(200).json(user);
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
  