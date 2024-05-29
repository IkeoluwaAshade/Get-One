import { BrowserRouter, Routes, Route } from "react-router-dom";

import ApiOne from "./ApiConsumption/ApiOne";
import GetOnePage from "./ApiConsumption/GetOnePage";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ApiOne />} />
          <Route path="/detail/:id" element={<GetOnePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;