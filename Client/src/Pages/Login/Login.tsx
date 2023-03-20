import { Form, Input, Checkbox, Button, message } from "antd";
import { LoginModel } from "../../Models/LoginModel";
import { useNavigate } from "react-router-dom";
import useApi from "../../hooks/useApi";

const Login = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const api = useApi("user");

  const handleSubmit = async (values: LoginModel) => {
    messageApi.open({
      key: "loadingStatus",
      type: "loading",
      content: "Signing in...",
    });

    api
      .POST<LoginModel>("/login", { ...values }, { navigateTo: "/" })
      .then(({ token }) => {
        // saving user token to session storage
        sessionStorage.setItem("accessToken", JSON.stringify(token));
      })
      .catch(({ response }) =>
        messageApi.open({
          key: "loadingStatus",
          type: "error",
          content: response.data.message,
        })
      );
    // await axios
    //   .post("/user/login", { ...values })
    //   .then(({ data }) => {
    //     // saving user token to session storage
    //     sessionStorage.setItem("accessToken", JSON.stringify(data.token));
    //     navigate("/");
    //   })
    //   .catch(({ response }) =>
    //     messageApi.open({
    //       key: "loadingStatus",
    //       type: "error",
    //       content: response.data.message,
    //     })
    //   );
  };

  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={(values: LoginModel) => handleSubmit(values)}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
