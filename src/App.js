import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

import "./App.css";
import Product from "./Components/Product";
import Dashboard from "./Components/Dashboard";
import RootLayout from "./Components/RootLayout";
import Counter from "./Counter/Counter";
import store from "./Counter/store";
import Store from "./Store/Store";

function App() {
  return (
    // <Provider store={Store}>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<RootLayout />}>
    //         <Route path="/" element={<Product />} />
    //         <Route path="/cart" element={<Dashboard/>} />
    //       </Route>
    //     </Routes>
    //   </Router>
    // </Provider>

    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
