import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import { PageRoutes } from "./Routes/pageRoutes";

function App() {
  const routes = PageRoutes();
  return <DefaultLayout>{routes}</DefaultLayout>;
}

export default App;
