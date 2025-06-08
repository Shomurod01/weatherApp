# Weather World — React Native & Expo Final Project

A cross-platform weather application built with **React Native**, **Expo**, and **Redux**, as a final assignment for the _Mobile Devices Programming Languages_ course. This project demonstrates modern mobile development practices, clean architecture, and responsive design using TypeScript.

---

## Student Info

- **Name**: Shomurod Mamadjonov
- **Student ID**: 40470
- **Course**: Mobile Devices Programming Languages
- **Group**: L1

---

## Project Overview

Weather World allows users to search for weather updates by city name and view real-time weather data including temperature, humidity, wind speed, visibility, and forecasts. The app uses **WeatherAPI** and supports both **light and dark modes**. It features full Redux state management, custom theming, and native integration (geolocation + storage).

---

## Implemented Requirements (All Covered)

| #   | Requirement                                 | Implemented |
| --- | ------------------------------------------- | ----------- |
| 1   | App architecture using Redux + Context      | ✅ Yes      |
| 2   | Responsive UI with Flexbox and Size Matters | ✅ Yes      |
| 3   | Clean code with ESLint & Prettier           | ✅ Yes      |
| 4   | Unit tests with Jest                        | ✅ Yes      |
| 5   | Well-documented code and README             | ✅ Yes      |
| 6   | Native features (Geolocation, AsyncStorage) | ✅ Yes      |
| 7   | Async operations with async/await           | ✅ Yes      |
| 8   | Navigation using React Navigation           | ✅ Yes      |
| 9   | Performance optimized with FlatList         | ✅ Yes      |
| 10  | UI/UX with React Native Paper               | ✅ Yes      |
| 11  | State management via Redux + Context API    | ✅ Yes      |
| 12  | Error handling for API/network issues       | ✅ Yes      |
| 13  | Offline mode with local storage             | ✅ Yes      |
| 14  | Input validation & secure storage           | ✅ Yes      |
| 15  | App built and deployed with EAS             | ✅ Yes      |

---

## Tech Stack

- **React Native + Expo SDK 53**
- **TypeScript** — for static typing and safe code
- **Redux Toolkit** — for scalable state management
- **React Native Paper** — for consistent UI components
- **React Navigation** — for screen transitions
- **React Native Size Matters** — for responsive layout
- **WeatherAPI** — for real-time weather data
- **AsyncStorage + Expo Location** — for native integration
- **Jest + Testing Library** — for unit testing

---

## Folder Structure Highlights

```

/components         → Reusable UI components
/screens            → App screens (Home, AboutCreator, etc.)
/store              → Redux slices and setup
/constants          → Fonts, dimensions, colors
/types              → TypeScript types
/ThemeContext.tsx   → Custom theming setup

```

---

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Expo CLI (`npm install -g expo-cli`)
- Yarn (`npm install -g yarn`)
- Git

### Installation

1. Clone the repo:
   ```bash
   git clone repo
   cd WeatherWorld
   ```



2. Install dependencies:

   ```bash
   yarn install
   ```

3. Create a `.env` file in the root and add your WeatherAPI key:

   ```
   WEATHER_API_KEY=your_api_key_here
   ```

4. Start the development server:

   ```bash
   yarn start
   ```

5. Open on device:

   * Scan QR code with Expo Go app
   * Or run on emulator:

     ```bash
     yarn android
     # or
     yarn ios
     ```

6. To build with EAS:

   ```bash
   eas build --platform android
   eas build --platform ios
   ```

---

## Acknowledgements

* **Expo** — for the fast dev workflow
* **Redux** — for efficient state management
* **React Native Paper** — for polished UI
* **WeatherAPI** — for weather data
* **React Native Community** — for open source tools



