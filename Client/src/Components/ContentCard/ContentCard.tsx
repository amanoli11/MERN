import { Card } from "antd";
import { ReactNode } from "react";
import { IContentCardProps } from "./IContentCardProps";
import "./ContentCard.css";

const ContentCard = (props: IContentCardProps) => {
  const { title, subTitle, buttons, children } = props;

  return (
    <Card
      className="contentCard"
      size="small"
      title={title}
      bordered={false}
      extra={buttons as ReactNode}
      style={{
        width: "100%",
        height: "100%",
        maxHeight: "80vh",
        overflow: "auto",
        boxShadow: "0 0 3px #ccc",
      }}
    >
      {children}
    </Card>
  );
};

export default ContentCard;
