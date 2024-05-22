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
- Search function to filter diary entries
- Dark mode and large text settings
- Splash screen
- Responsive and user-friendly interface
- API documentation using Swagger

## Screens

### Main Screens

- **Home**: Displays the main interface with options to navigate to different sections of the app.
- **Diary**: Allows users to view, create, update, and delete diary entries.
- **Write**: A dedicated screen for writing new diary entries.
- **Setting**: Provides settings options such as dark mode and large text mode, as well as account management.

### Additional Screens

- **About**: Provides information about the application.
- **Licenses**: Displays the open-source licenses used in the application.

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
- `swagger-jsdoc`
- `swagger-ui-express`

## Installation

1. Clone the repository.
2. Install dependencies:
   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

## Start the Server

cd server
nodemon start

## Start the Mobile App

cd client
npx expo start

## Reporting Issues

To report issues:

- Navigate to the [Issues tab](https://github.com/YEONSEO93/notetaker_ys/issues) of the repository.
- Click on 'New Issue'.
- Fill out the issue template with as much information as possible.
- Submit the form.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## [Tools Used]

VS Code
Git and GitHub
Swagger
Expo Go
mySQL
