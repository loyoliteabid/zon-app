# Zon MobileApp

**Zon Mobile App** is a React Native application designed to facilitate login functionality and display categories, product lists, and detailed product views.

## Technical Details

This project is primarily built using TypeScript, React Native, Expo, and React Navigation.

## Project Structure

### Root Level Structure
- The root directory contains "app," "configs," and "constants." 
- The "configs" and "constants" directories handle color schemes, server paths, and currency codes.

### App Directory
- Within the "app" directory, components are organized into small, reusable blocks.
- Types are defined in the "definitions" folder, notably including "routemodel" to ensure navigation parameters are correctly utilized.

### Screens
- The "product-list" and "product-view" screens are designed to handle various categories flexibly. For instance, the structure of the product list for "motors" differs from that of "number plates."

### Custom Hooks
- Custom hooks for HTTP requests are utilized to demonstrate their usage effectively.

### Authentication Context
- The authentication context is defined under the "store" folder.

## Requirements

1. If running the app on your device, install the Expo Go app. Note that the localhost path defined in "configs.ts" will not connect to the locally started Node server. Utilize Ngrok or Local Tunnel to generate an HTTPS URL and set it in the configs accordingly.

## Getting Started

To get started:

1. Clone the Zon App repository.
2. Run `npm install`.
3. Execute `npx expo start` to run the app on your device.
