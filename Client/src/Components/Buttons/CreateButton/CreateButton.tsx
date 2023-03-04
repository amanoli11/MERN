import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

const CreateButton = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Button
      size="small"
      type="primary"
      onClick={() => navigate(`${pathname}create`)}
      icon={<PlusCircleOutlined />}
    >
      <>
        <u>C</u>reate
      </>
    </Button>
  );
};

export default CreateButton;
