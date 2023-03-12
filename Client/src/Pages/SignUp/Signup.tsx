import { Form, Input, Checkbox, Button, message } from "antd";
import { useSignup } from "../../hooks/useSignup";
import { SignupModel } from "../../Models/SignupModel";

const Signup = () => {
  const { signup, error, loading } = useSignup();

  const handleSubmit = async (values: SignupModel) => {
    await signup(values);
  };
  const [messageApi, contextHolder] = message.useMessage();

  {
    loading &&
      messageApi.open({
        key: "loadingStatus",
        type: "loading",
        content: "Signing in...",
      });
  }

  {
    error &&
      messageApi.open({ key: "loadingStatus", type: "error", content: error });
  }

  return (
    <>
      {contextHolder}
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={(values: SignupModel) => handleSubmit(values)}
        //   onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[{ required: true, message: "Please input your first name!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Middle Name" name="middleName">
          <Input />
        </Form.Item>
        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[{ required: true, message: "Please input your last name!" }]}
        >
          <Input />
        </Form.Item>
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

export default Signup;
