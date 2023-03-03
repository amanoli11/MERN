import { Button } from "antd";
import ContentCard from "../../Components/ContentCard/ContentCard";
import CreateButton from "../../Components/Buttons/CreateButton/CreateButton";
import ItemCard from "../../Components/ItemCard/ItemCard";
import TableComponent from "../../Components/Table/Table";

const ItemCatgoriesList = () => {
  return (
    <ContentCard title="Item Categories List" buttons={<CreateButton />}>
      <TableComponent />
    </ContentCard>
  );
};

export default ItemCatgoriesList;
