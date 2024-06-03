const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Thiết lập EJS làm template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Cung cấp các tệp tĩnh từ thư mục public
app.use(express.static(path.join(__dirname, 'public')));

// Các tuyến đường
app.get('/', (req, res) => {
    res.render('pages/home', { title: 'Home' });
});

app.get('/about', (req, res) => {
    res.render('pages/about', { title: 'About' });
});

app.get('/contact', (req, res) => {
    res.render('pages/contact', { title: 'Contact' });
});

// Khởi động máy chủ
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
