import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import { PageRoutes } from "./Routes/pageRoutes";
import { ConfigProvider, theme, Button, Card } from "antd";
import { useState } from "react";

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(true);
  const routes = PageRoutes();
  // const { theme } = useContext(AppContext);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      <DefaultLayout onThemeChange={(state) => setIsDarkMode(state)}>
        {routes}
      </DefaultLayout>
    </ConfigProvider>
  );
}

export default App;
