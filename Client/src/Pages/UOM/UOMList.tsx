import ContentCard from "../../Components/ContentCard/ContentCard";
import CreateButton from "../../Components/Buttons/CreateButton/CreateButton";
import TableComponent from "../../Components/Table/Table";
import { ColumnsType } from "antd/es/table";
import { UOMListModel } from "../../Models/UOMModel";

const UOMList = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      key: "createdAt",
    },
  ] as ColumnsType<UOMListModel>;

  return (
    <ContentCard title="UOM List" buttons={<CreateButton />}>
      <TableComponent columns={columns} featureName="uom" />
    </ContentCard>
  );
};

export default UOMList;
