# gamehub

Make sure NodeJS is installed in your system.

## Project setup
```
npm install
```

Install mysql server
` sudo apt install mysql-server `
` sudo service mysql start `

Execute these queries in MySQL
```
CREATE USER 'brianhuster'@'localhost' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'brianhuster'@'localhost';
CREATE DATABASE gamehub;
USE gamehub;
```

Now run the file `db/db.sql` in MySQL

### Compiles and hot-reloads for development
```
npm run dev
```

