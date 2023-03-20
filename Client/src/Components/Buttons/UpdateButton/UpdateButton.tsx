import { SaveFilled } from "@ant-design/icons";
import { Button } from "antd";
import { useRef } from "react";
import useKeyboardShortcut from "../../../hooks/useKeyboardShortcut";
import { IUpdateButtonProps } from "./IUpdateButtonProps";

const UpdateButton = (props: IUpdateButtonProps) => {
  const { onClick, loading } = props;

  const buttonRef = useRef(null);
  useKeyboardShortcut({ altKey: true, key: "U" }, () => {
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
    >
      <>
        <u>U</u>pdate
      </>
    </Button>
  );
};

export default UpdateButton;
