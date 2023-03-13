import { PlusCircleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useNavigate, useLocation } from "react-router-dom";
import useKeyboardShortcut from "../../../hooks/useKeyboardShortcut";
import { useEffect, useRef } from "react";

const CreateButton = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const buttonRef = useRef(null);

  useKeyboardShortcut({ altKey: true, key: "C" }, () => {
    let button: any = buttonRef?.current;
    if (buttonRef) {
      button?.focus();
      setTimeout(() => button?.click(), 0);
    }
  });

  return (
    <Button
      ref={buttonRef}
      size="small"
      type="primary"
      onClick={() => navigate(`${pathname}/create`)}
      icon={<PlusCircleOutlined />}
    >
      <>
        <u>C</u>reate
      </>
    </Button>
  );
};

export default CreateButton;
