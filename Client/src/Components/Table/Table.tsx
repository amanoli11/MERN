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
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [rowsPerPage, setRowsPerPage] = React.useState<number>(10);
  const [totalRecords, setTotalRecords] = React.useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    setLoading(true);
    getItemCategories();
  }, [currentPage]);

  const getItemCategories = async () => {
    await axios
      .get(
        `/${props.featureName}/paginated?page=${currentPage}&limit=${rowsPerPage}`
      )
      .then(({ data }) => {
        setData(data.data);
        setRowsPerPage(data.rowsPerPage);
        setCurrentPage(data.currentPage);
        setTotalRecords(data.totalRecords);
        messageApi.success(data.message);
        // messageApi.success(data.message);
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
          defaultCurrent: currentPage,
          current: currentPage,
          pageSize: rowsPerPage,
          defaultPageSize: rowsPerPage,
          total: totalRecords,
          onChange(page, pageSize) {
            setCurrentPage(page);
            console.log(page, pageSize);
          },
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
