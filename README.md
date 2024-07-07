
# Promos tracker

Promo Tracker is a web application designed to track promotions and menus from Rappi and Pedidos Ya. With Promo Tracker, you can effortlessly stay updated with the latest promos, view historical data, filter through past promotions, and export all the relevant information to Excel. Additionally, the app includes an admin dashboard for managing users.


## Features

- See latest promos for selected restaurants 
- Filter through history, by promo or not promo
- Export the data you want to excel
- Login - JWT
- Security against top 10 web vulns
- Admin dashboard


## Installation

1. Clone the repository:
```bash
git clone https://github.com/pontiggia/promos-tracker.git
```

2. Navigate to the project directory:
```bash
cd promos-tracker
```

3. Install the dependencies:
```bash
npm install
```

4. Set up environment variables:
- Create .env file in the root folder
- Fill in your data:
```bash
# DATABASE INFO

DATABASE_PASSWORD=<db_password>
DATABASE=<string-connection>

# AUTH INFO (JWT)

JWT_SECRET=super-secret
JWT_EXPIRES_IN=15d
JWT_COOKIE_EXPIRES_IN=90

# ENV INFO
NODE_ENV=development

# PORT INFO
PORT=3000
```
    
## Usage

```bash
npm start
```


## Screenshots

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

