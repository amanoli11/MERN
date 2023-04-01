import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import { PageRoutes } from "./Pages/pageRoutes";
import { ConfigProvider, theme, Button, Card } from "antd";
import { Suspense, useState } from "react";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/userStore";
import { getAccessToken } from "./Resources/Storage/storage";

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const routes = PageRoutes();

  return (
    <Provider store={store}>
      {!getAccessToken() ? (
        <LoginSignup />
      ) : (
        <ConfigProvider
          theme={{
            algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
          }}
        >
          <DefaultLayout>
            <Suspense fallback="Loading...">{routes}</Suspense>
          </DefaultLayout>
        </ConfigProvider>
      )}
    </Provider>
  );
}

export default App;
