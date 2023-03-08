import { Descriptions, message } from "antd";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import EditButton from "../../Components/Buttons/EditButton/EditButton";
import ContentCard from "../../Components/ContentCard/ContentCard";
import { UOMListModel } from "../../Models/UOMModel";

const UomDetails = () => {
  const params = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<UOMListModel>({} as UOMListModel);
  const [messageApi, contextHolder] = message.useMessage();

  const getUomDetails = async () => {
    await axios
      .get(`/uom/${params.id}`)
      .then(({ data }) => {
        setData(data.data);
        messageApi.success(data.message);
      })
      .catch((err) => messageApi.error(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    getUomDetails();
  }, []);

  return (
    <>
      {contextHolder}
      <ContentCard
        loading={loading}
        title="Uom Details"
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

export default UomDetails;
