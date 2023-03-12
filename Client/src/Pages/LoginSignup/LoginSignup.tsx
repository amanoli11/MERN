import { Card, Tabs } from "antd";
import Login from "../Login/Login";
import Signup from "../SignUp/Signup";

const LoginSignup = () => {
  return (
    <Card>
      <Tabs
        defaultActiveKey="1"
        type="card"
        size="small"
        items={[
          { label: "Login", key: "1", children: <Login /> },
          { label: "Signup", key: "2", children: <Signup /> },
        ]}
      ></Tabs>
    </Card>
  );
};

export default LoginSignup;
