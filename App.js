import React from 'react';
import { TailwindProvider } from "tailwindcss-react-native";
import AppNavigation from './src/common/AppNavigation.js';


export default function App() {
  return (
    <TailwindProvider>
      <AppNavigation/>
    </TailwindProvider>
  );
}