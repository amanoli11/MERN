import DefaultLayout from "./Layout/DefaultLayout/DefaultLayout";
import { PageRoutes } from "./Pages/pageRoutes";
import { ConfigProvider, theme, Button, Card } from "antd";
import { Suspense, useState } from "react";
import { UserContextProvider } from "./Context/UserContext";
import Signup from "./Pages/SignUp/Signup";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";

function App() {
  const { defaultAlgorithm, darkAlgorithm } = theme;
  const [isDarkMode, setIsDarkMode] = useState(false);
  const routes = PageRoutes();

  return (
    <>
      {!sessionStorage.getItem("accessToken") ? (
        <LoginSignup />
      ) : (
        <UserContextProvider>
          <ConfigProvider
            theme={{
              algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
            }}
          >
            <DefaultLayout>
              <Suspense fallback="Loading...">{routes}</Suspense>
            </DefaultLayout>
          </ConfigProvider>
        </UserContextProvider>
      )}
    </>
  );
}

export default App;
