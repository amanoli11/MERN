import { EditOutlined } from "@ant-design/icons";
import { Button, Table, Tag } from "antd";
import { ColumnsType } from "antd/es/table";
import { ITableProps } from "./ITableProps";

const TableComponent = (props: ITableProps) => {
  //   const { columns } = props;

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address:
        "10 Downing Street 10 Downing Street 10 Downing Street 10 Downing Street 10 Downing Street",
    },
  ];

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
  ];

  const finalColumns = columns.map((col) => ({ ...col, ellipsis: true }), {
    title: "Status",
    dataIndex: "status",
    align: "center",
    render: () => {
      return <Tag color="blue">Verified</Tag>;
    },
  });

  return (
    <Table
      tableLayout="fixed"
      size="small"
      dataSource={dataSource}
      //   scroll={{ x: "calc(700px + 50%)", y: 240 }}
      //   loading
      columns={[
        ...finalColumns,
        {
          ellipsis: true,
          width: 100,
          title: "Status",
          dataIndex: "status",
          align: "center",
          render: () => {
            return <Tag color="blue">Verified</Tag>;
          },
        },
        {
          width: 100,
          ellipsis: true,
          title: "Action",
          dataIndex: "action",
          align: "center",
          fixed: "right",
          render: () => {
            return (
              <Button size="small" shape="round" icon={<EditOutlined />} />
            );
          },
        },
      ]}
    />
  );
};

export default TableComponent;
