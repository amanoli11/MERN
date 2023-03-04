import { SaveFilled } from "@ant-design/icons";
import { Button } from "antd";
import { IUpdateButtonProps } from "./IUpdateButtonProps";

const UpdateButton = (props: IUpdateButtonProps) => {
  const { onClick, loading } = props;
  return (
    <Button
      size="small"
      type="primary"
      onClick={onClick}
      htmlType="submit"
      loading={loading}
      icon={<SaveFilled />}
    >
      <>
        <u>U</u>pdate
      </>
    </Button>
  );
};

export default UpdateButton;
