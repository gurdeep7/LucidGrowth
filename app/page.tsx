"use client";

import HomePage from "./screens/HomePage/HomePage";
import { Provider } from 'react-redux';
import { store } from "./store/store";

export default function Home() {
  return (
    <Provider store={store}>
      <HomePage/>
      </Provider>
  );
}
