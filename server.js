const express = require('express');
const PORT = process.env.PORT || 3000;

const app = express();

const baseDir = `${__dirname}/build/`;

app.use(express.static(`${baseDir}`));

app.get('*', (req, res) => res.sendFile('index.html', {root : baseDir}));

app.listen(PORT, () => console.log(`Servidor rodando com sucesso!`));