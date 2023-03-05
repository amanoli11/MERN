import { Descriptions, message } from "antd";
import { useParams } from "react-router-dom";
import EditButton from "../../Components/Buttons/EditButton/EditButton";
import ContentCard from "../../Components/ContentCard/ContentCard";
import { useEffect } from "react";
import axios from "axios";
import React from "react";
import { ItemCategoryListModel } from "../../Models/ItemCategoryListModel";

const ItemCategoriesDetails = () => {
  const params = useParams();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<ItemCategoryListModel>(
    {} as ItemCategoryListModel
  );
  const [messageApi, contextHolder] = message.useMessage();

  const getItemCategoriesDetails = async () => {
    await axios
      .get(`/getItemCategory/${params.id}`)
      .then(({ data }) => {
        setData(data.data);
        messageApi.success(data.message);
      })
      .catch((err) => messageApi.error(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    getItemCategoriesDetails();
  }, []);

  return (
    <>
      {contextHolder}
      <ContentCard
        loading={loading}
        title="Item Catefory Details"
        buttons={<EditButton />}
      >
        <Descriptions size="small" layout="horizontal">
          <Descriptions.Item label="Name">{data.name}</Descriptions.Item>
          <Descriptions.Item label="Created At" span={1}>
            {data.createdAt?.toString()}
          </Descriptions.Item>
          <Descriptions.Item label="Status">{data.status}</Descriptions.Item>
        </Descriptions>
      </ContentCard>
    </>
  );
};

export default ItemCategoriesDetails;
