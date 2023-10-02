/* eslint-disable react/react-in-jsx-scope */
import { Error404View } from "@views/error-404";
import { HomeView } from "@views/home";
import type { View } from "@router/index";

export const home: View = {
  name: "Home",
  options: {
    path: "/",
    element: <HomeView />,
  },
};

export const error404: View = {
  name: "Error",
  options: {
    path: "*",
    element: <Error404View />,
  },
};
