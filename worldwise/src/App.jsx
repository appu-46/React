import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Product from "./Pages/Product";
import Pricing from "./Pages/Pricing";
import HomePage from "./Pages/Homepage";
import AppLayout from "./Pages/AppLayout";
import PageNotFound from "./Pages/PageNotFound";
import Login from "./Pages/Login";
import CityList from "./components/CityList";
import City from "./components/City";
import Form from "./components/Form";
import Countrylist from "./components/CountryList";
import { CitiesProvider } from "./contexts/CitiesContext";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="login" element={<Login />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route index element={<CityList />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<Countrylist />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
