# Online Banking Web Application

A simple front-end banking simulation built with HTML, JavaScript, and Tailwind CSS. The project demonstrates client-side login validation and basic banking operations such as deposits, withdrawals, and balance management.

## Demo

Live Demo: https://hasib78.github.io/Online-Banking-Web-Application/

## Features

- Simple login screen with client-side credential validation
- Account dashboard showing:
  - Total deposits
  - Total withdrawals
  - Current balance
- Deposit functionality
- Withdrawal functionality
- Insufficient-balance validation
- Invalid amount validation
- Responsive UI built with Tailwind CSS
- No backend or database required

## Technologies Used

- HTML5
- JavaScript (ES6)
- Tailwind CSS via CDN

## Project Structure

```text
Online-Banking-Web-Application/
├── index.html
├── bank.html
├── login.js
├── deposit.js
├── withdraw.js
├── README.md
└── Bank System/
    ├── index.html
    ├── bank.html
    └── JS/
        ├── login.js
        ├── deposit.js
        └── withdraw.js
```

## How It Works

### 1. Login

The application starts with a login page. The JavaScript checks the entered email and password against the demo credentials defined in `login.js`.

> **Demo credentials**
>
> Email: `hasib@gmail.com`  
> Password: `123hasib`

### 2. Deposit

Users can enter a deposit amount. The application validates the input and updates:

- Total Deposit
- Current Balance

### 3. Withdrawal

Users can enter a withdrawal amount. The application checks whether the requested amount is valid and whether sufficient balance is available before updating:

- Total Withdrawal
- Current Balance

## Run Locally

No installation is required.

### Option 1: Open Directly

Open `index.html` in a web browser.

### Option 2: Use VS Code Live Server

1. Open the project in VS Code.
2. Install the **Live Server** extension.
3. Right-click `index.html`.
4. Select **Open with Live Server**.

## Important Notes

This is an educational front-end project and is **not a production banking system**.

- Authentication is performed entirely in JavaScript.
- Credentials are stored in client-side code.
- Account data exists only in the browser session.
- There is no backend, database, encryption, or real transaction processing.

For a production-ready banking application, authentication, authorization, transaction processing, persistence, security, and auditing should be implemented on a secure backend.

## Future Improvements

- Add backend API integration
- Add database persistence
- Implement secure authentication
- Add transaction history
- Add account registration
- Add transfer functionality
- Add responsive mobile-focused UI
- Add logout/session management

## License

This project is intended for educational and portfolio purposes.
