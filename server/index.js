const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Включаем CORS для обработки кросс-доменных запросов
app.use(cors());

// Парсим тело запроса
app.use(bodyParser.json());

// Обслуживаем статичные файлы из папки dist
app.use(express.static(path.join(__dirname, '../dist')));

// Простая конечная точка для тестирования
app.get('/api', (req, res) => {
  res.send({ message: 'Hello from Express!' });
});

// Обрабатываем любые другие маршруты, перенаправляя их на index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Запускаем сервер на порту 5000
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));