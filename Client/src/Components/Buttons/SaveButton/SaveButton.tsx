import { SaveFilled } from "@ant-design/icons";
import { Button } from "antd";
import { useRef } from "react";
import useKeyboardShortcut from "../../../hooks/useKeyboardShortcut";
import { ISaveButtonProps } from "./ISaveButtonProps";

const SaveButton = (props: ISaveButtonProps) => {
  const { onClick, loading } = props;

  const buttonRef = useRef(null);
  useKeyboardShortcut({ altKey: true, key: "S" }, () => {
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
      onClick={onClick}
      htmlType="submit"
      loading={loading}
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
