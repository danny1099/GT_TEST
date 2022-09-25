import { Navbar } from "./components";
import { Home } from "./pages";
import { LayoutContiner } from "./styled-components";

export default function App() {
  return <>
    <Navbar />

    <LayoutContiner>
      <Home />
    </LayoutContiner>
  </>
}