import { Row, Col, Button, Space, FloatButton, Grid, Input, Tag } from "antd";
import { useState } from "react";
import ContentCard from "../../Components/ContentCard/ContentCard";
import ItemCard from "../../Components/ItemCard/ItemCard";

const POSPage = () => {
  const categories = ["All", "Meat", "Salad", "Vegan", "Drinks"];
  const [selectedTags, setSelectedTags] = useState<string[]>(["Books"]);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <Row gutter={24}>
      <Col className="gutter-row" span={16}>
        <ContentCard title="ITEMS">
          <>
            <span style={{ marginRight: 8 }}>Categories:</span>
            <Space size={[0, 8]} wrap>
              {categories.map((tag) => (
                <Tag.CheckableTag
                  key={tag}
                  checked={selectedTags.includes(tag)}
                  onChange={(checked) => handleChange(tag, checked)}
                >
                  {tag}
                </Tag.CheckableTag>
              ))}
            </Space>

            <Space size={35} wrap style={{ marginTop: 10 }}>
              {new Array(15).fill(null).map((_, index) => (
                <ItemCard image="image" />
              ))}
            </Space>
          </>
        </ContentCard>
      </Col>

      <Col span={8}>
        <ContentCard title="ORDERS">
          <h1>Orders here</h1>
        </ContentCard>
      </Col>
    </Row>
  );
};

export default POSPage;
