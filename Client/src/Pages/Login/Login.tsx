import { Form, Input, Checkbox, Button, message } from "antd";
import { LoginModel } from "../../Models/LoginModel";
import useApi from "../../hooks/useApi";
import { login, setUser } from "../../Resources/Storage/storage";

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
      .then(({ data: { _id, ...rest }, token }) => {
        login(token);
        setUser(rest);
      })
      .catch(({ response }) =>
        messageApi.open({
          key: "loadingStatus",
          type: "error",
          content: response.data.message,
        })
      );
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
