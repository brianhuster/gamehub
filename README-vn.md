# gamehub

Hay chắc chắn rằng NodeJS đã được cài đặt trong hệ thống của bạn.

## Cài đặt dự án
```
git clone https://github.com/brianhuster/gamehub.git
cd gamehub
npm install
```

Cài đặt mysql server
` sudo apt install mysql-server `
` sudo service mysql start `

Thực thi các truy vấn sau trong MySQL
```
CREATE USER 'brianhuster'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'brianhuster'@'localhost';
CREATE DATABASE gamehub;
USE gamehub;
```

Bây giờ chạy file `db/db.sql` trong MySQL

### Chạy server
```
npm run dev
```

