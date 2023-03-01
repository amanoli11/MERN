import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { IItemCardProps } from "./ItemCardProps";

const ItemCard = (props: IItemCardProps) => {
  const { image, hoverable = true } = props;
  return (
    <Card
      hoverable={hoverable}
      size="small"
      style={{ width: "100%" }}
      cover={
        <img
          style={{ width: "100%", height: 100, objectFit: "cover" }}
          alt="picture"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <Meta title="Fried Chicken" description="Rs.100" />
    </Card>
  );
};

export default ItemCard;
