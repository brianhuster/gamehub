# gamehub

Make sure NodeJS is installed in your system.

## Project setup
```
git clone https://github.com/brianhuster/gamehub.git
cd gamehub
npm install
```

Install MySQL
` sudo apt install mysql-server `
` sudo service mysql stop `
` echo "ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';"` >> "/home/[username]/mysql-init" `
` sudo mysqld --init-file=/home/[username]/mysql-init & `
` sudo service mysql start `

### Compiles and hot-reloads for development
```
npm run dev
```

