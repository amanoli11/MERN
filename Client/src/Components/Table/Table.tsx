import { EditOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Button, message, Space, Table, Tag } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ITableProps } from "./ITableProps";

const TableComponent = <T extends Object>(props: ITableProps<T>) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = React.useState<boolean>(false);
  const [data, setData] = React.useState<T[]>([]);

  useEffect(() => {
    setLoading(true);
    getItemCategories();
  }, []);

  const getItemCategories = async () => {
    await axios
      .get(`/${props.featureName}`)
      .then(({ data }) => {
        setData(data.data);
        messageApi.success(data.message);
      })
      .catch((err) => messageApi.error(err.message))
      .finally(() => setLoading(false));
  };

  const finalColumns = props.columns.map((x) => ({ ...x, ellipsis: true })); // manually adding ellipsis to all columns
  return (
    <>
      {contextHolder}
      <Table
        pagination={{
          size: "small",
          simple: true,
          defaultCurrent: 1,
          defaultPageSize: 10,
        }}
        tableLayout="fixed"
        size="small"
        dataSource={data}
        loading={loading}
        rowKey="_id"
        columns={[
          ...finalColumns,
          {
            ellipsis: true,
            width: 100,
            title: "Status",
            dataIndex: "status",
            align: "center",
            key: "status",
            render: (column, row) => {
              return <Tag color="blue">{column}</Tag>;
            },
          },
          {
            width: 100,
            ellipsis: true,
            title: "Action",
            dataIndex: "action",
            key: "action",
            align: "center",
            fixed: "right",
            render: (col, row: any) => {
              return (
                <Space.Compact size="small">
                  <Button
                    shape="round"
                    size="small"
                    icon={<InfoCircleOutlined />}
                    onClick={() => navigate(`${pathname}/details/${row._id}`)}
                  />
                  <Button
                    size="small"
                    shape="round"
                    icon={<EditOutlined />}
                    onClick={() => navigate(`${pathname}/edit/${row._id}`)}
                  />
                </Space.Compact>
              );
            },
          },
        ]}
      />
    </>
  );
};

export default TableComponent;
