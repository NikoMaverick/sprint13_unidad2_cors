const express = require ('express');
const axios = ('axios');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('characters/:charactersName', async (req, res) => {
    const charactersName = req.params.charactersName
    const url = `https://rickandmortyapi.com/api/character/${charactersName}`

    try {
        const response = await axios.get (url)
        const characters = response.data.results;
        const {name, status, species, gender, origin, image} = characters
        res.json ({name, status, species, gender, origin: {name}, image})
    } catch (ERROR) {
        res.status(404).json({error: 'Caracter no encontrado'})
    }

})

app.listen(3000, () => {
    console.log('Express esta escuchando en el puerto http://localhost:3000')
})