import { Navbar } from "./components";
import { Home } from "./pages";
import { LayoutContiner } from "./styled-components";
import { Provider } from "react-redux";
import store from "./redux/store";


export default function App() {
  return (
    <Provider store={store}>
      <Navbar />

      <LayoutContiner>
        <Home />
      </LayoutContiner>
    </Provider>
  )
}