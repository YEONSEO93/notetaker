# Notetaker App

## Purpose

The Notetaker App is a simple note-taking application that allows users to create, read, update, and delete diary entries. It includes user authentication and various settings to enhance accessibility.

## Contributing

To contribute to the development of the Notetaker App, follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## Features

- User authentication (sign up and login)
- Create, read, update, and delete diary entries
- Dark mode and large text settings
- Splash screen
- Responsive and user-friendly interface

## Dependencies

### Mobile App

- `expo`
- `react`
- `react-native`
- `@expo/vector-icons`
- `axios`
- `styled-components`
- `@react-native-async-storage/async-storage`
- `@react-navigation/native`
- `@react-navigation/native-stack`
- `@react-navigation/bottom-tabs`

### Server

- `express`
- `mysql2`
- `bcryptjs`
- `jsonwebtoken`
- `dotenv`
- `cors`
- `express-validator`

### Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

### Start the server:

cd server
nodemon start

### Start the mobile app:

cd client
npx expo start
