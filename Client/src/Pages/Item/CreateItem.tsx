import { PlusCircleFilled, PlusCircleOutlined } from "@ant-design/icons";
import { Form, Input, Select, Space } from "antd";
import { useNavigate } from "react-router-dom";
import SaveButton from "../../Components/Buttons/SaveButton/SaveButton";
import ContentCard from "../../Components/ContentCard/ContentCard";
import SelectAsync from "../../Components/SelectAsync/SelectAsync";
import { EnumToArray } from "../../Components/Utils/EnumToArray/EnumToArray";
import { StatusOptions } from "../../enums/StatusOptions";

const CreateItem = () => {
  const { useForm, useWatch, Item } = Form;
  const [form] = useForm();
  const navigate = useNavigate();

  return (
    <Form
      form={form}
      layout="inline"
      autoComplete="off"
      onFinish={() => alert("Completed")}
      // initialValues={{ status: "Active" }}
    >
      <ContentCard
        title="Create Item"
        buttons={<SaveButton onClick={() => console.log("submitted")} />}
      >
        <Space align="start" size={24} wrap>
          <Item
            label="Name"
            name={"name"}
            required
            rules={[
              { required: true, message: "Missing Item Category" },
              {
                max: 100,
                message: "Item category cannot be more than 100 characters",
              },
            ]}
          >
            <Input autoFocus autoComplete="newPassword" placeholder="Name" />
          </Item>

          <Item
            name="menuCategory"
            label="Menu Category"
            required
            tooltip={{
              title: "Add menu category",
              icon: (
                <PlusCircleFilled
                  onClick={() => window.open("/itemCategory/create", "_blank")}
                />
              ),
            }}
            rules={[{ required: true, message: "Missing Status" }]}
          >
            <SelectAsync
              featureName="getItemCategory"
              mapper={{ label: "name", value: "name" }}
            />
            {/* <Select
              showSearch
              style={{ minWidth: 200 }}
              placeholder="Search to Select"
              options={EnumToArray(StatusOptions)}
              allowClear
              autoClearSearchValue
            /> */}
          </Item>
        </Space>
      </ContentCard>
    </Form>
  );
};

export default CreateItem;
