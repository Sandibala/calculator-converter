const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Указываем, что статические файлы находятся в папке 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Отправляем главный HTML файл при обращении к корню сайта
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'Calculator.html'));  // Отправляем HTML файл
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
