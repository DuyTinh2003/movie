import { Routes as Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/Detail";
function Routes() {
  return (
    <Switch>
      <Route path="/" index element={<Home />} />
      <Route path="/:type/:id" element={<Detail />} />
      <Route path="/:type" element={<Catalog />} />
    </Switch>
  );
}

export default Routes;
