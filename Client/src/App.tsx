import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import { PageRoutes } from "./Pages/pageRoutes";
import { ConfigProvider, theme, Button, Card } from "antd";
import { Suspense, useState } from "react";
import { AuthContextProvider } from "./Context/AuthContext";
import Signup from "./Pages/SignUp/Signup";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const routes = PageRoutes();

  return (
    <AuthContextProvider>
      {!localStorage.getItem("userToken") ? (
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
    </AuthContextProvider>
  );
}

export default App;
