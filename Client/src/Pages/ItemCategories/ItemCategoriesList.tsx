import ContentCard from "../../Components/ContentCard/ContentCard";
import CreateButton from "../../Components/Buttons/CreateButton/CreateButton";
import TableComponent from "../../Components/Table/Table";
import { ColumnsType } from "antd/es/table";
import { ItemCategoryListModel } from "../../Models/ItemCategoryListModel";

const ItemCatgoriesList = () => {
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
  ] as ColumnsType<ItemCategoryListModel>;

  return (
    <ContentCard title="Item Categories List" buttons={<CreateButton />}>
      <TableComponent<ItemCategoryListModel>
        columns={columns}
        featureName="itemCategory"
      />
    </ContentCard>
  );
};

export default ItemCatgoriesList;
