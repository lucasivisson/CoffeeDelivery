import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import ErrorPage from "./errors/errorPage";
import { DefaultLayout } from "./layouts/defaultLayout";
import { Checkout } from "./Pages/Checkout";
import { Home } from "./Pages/Home";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<DefaultLayout />} errorElement={<ErrorPage/>}>
      <Route path="" element={<Home />} />
      <Route path="checkout" element={<Checkout />} />
    </Route>
  )
)