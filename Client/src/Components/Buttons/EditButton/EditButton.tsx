import { EditOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import { IEditButtonProps } from "./IEditButtonProps";

const EditButton = (props: IEditButtonProps) => {
  const { onClick } = props;
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const newPath = pathname.replace("details", "edit");

  return (
    <Button
      size="small"
      type="primary"
      onClick={() => navigate(newPath)}
      htmlType="submit"
      icon={<EditOutlined />}
    >
      <>
        <u>E</u>dit
      </>
    </Button>
  );
};

export default EditButton;
