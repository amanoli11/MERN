import { Form, FormProps, message } from "antd";

interface ICustomFormProps extends FormProps {
  children: React.ReactNode;
}

const CustomForm = (props: ICustomFormProps) => {
  const { children, ...rest } = props;

  return (
    <Form {...rest} layout="inline" autoComplete="off">
      {children}
    </Form>
  );
};

export default CustomForm;
