import { SaveFilled } from "@ant-design/icons";
import { Button } from "antd";
import { ISaveButtonProps } from "./ISaveButtonProps";

const SaveButton = (props: ISaveButtonProps) => {
  const { onClick } = props;
  return (
    <Button
      size="small"
      type="primary"
      onClick={onClick}
      htmlType="submit"
      // loading
      icon={<SaveFilled />}
      style={{ background: "#179c3b" }}
    >
      <>
        <u>S</u>ave
      </>
    </Button>
  );
};

export default SaveButton;
