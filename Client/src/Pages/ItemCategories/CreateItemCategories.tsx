import { useState } from "react";
import { Form, Input, Select, Space } from "antd";
import { RequiredMark } from "antd/es/form/Form";
import SaveButton from "../../Components/Buttons/SaveButton/SaveButton";
import ContentCard from "../../Components/ContentCard/ContentCard";
import { StatusOptions } from "../../enums/StatusOptions";
import { EnumToArray } from "../../Components/Utils/EnumToArray/EnumToArray";
import { CreateItemCategoryModel } from "../../Models/CreateItemCategoryModel";
import axios from "axios";

const CreateItemCategories = () => {
  const { useForm, useWatch, Item, useFormInstance } = Form;
  const [form] = useForm<CreateItemCategoryModel>();
  // const [requiredMark, setRequiredMarkType] = useState<RequiredMark>(true);

  const saveData = async (values: CreateItemCategoryModel) => {
    console.log(values);
    await axios
      .post("/createItemCategory", values)
      .then(() => alert("success"))
      .catch((err) => alert(err.message));
  };

  return (
    <Form
      form={form}
      initialValues={{ status: "Active" }}
      layout="inline"
      onFinish={saveData}
      autoComplete="off"
    >
      <ContentCard
        title="Create Item Category"
        buttons={<SaveButton onClick={() => console.log("submitted")} />}
      >
        <Space align="start" size={24} wrap>
          <Item
            label="Name"
            name="name"
            required
            tooltip="This is a required field"
            rules={[
              { required: true, message: "Missing Item Category" },
              {
                max: 100,
                message: "Item category cannot be more than 100 characters",
              },
            ]}
          >
            <Input autoComplete="newPassword" placeholder="Name" />
          </Item>
          <Item
            name="status"
            label="Status"
            required
            tooltip="This is a required field"
          >
            <Select
              allowClear
              showSearch
              style={{ minWidth: 200 }}
              placeholder="Search to Select"
              options={EnumToArray(StatusOptions)}
            />
          </Item>
        </Space>
      </ContentCard>
    </Form>
  );
};

export default CreateItemCategories;
