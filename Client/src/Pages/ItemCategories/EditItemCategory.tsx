import { Space, Input, Select, Form, message } from "antd";
import Item from "antd/es/descriptions/Item";
import form from "antd/es/form";
import { useState } from "react";
import SaveButton from "../../Components/Buttons/SaveButton/SaveButton";
import ContentCard from "../../Components/ContentCard/ContentCard";
import CustomForm from "../../Components/Form/CustomForm";
import { EnumToArray } from "../../Components/Utils/EnumToArray/EnumToArray";
import { StatusOptions } from "../../enums/StatusOptions";
import { CreateItemCategoryModel } from "../../Models/ItemCategoryModel/CreateItemCategoryModel";
import { ItemCategoryListModel } from "../../Models/ItemCategoryModel/ItemCategoryListModel";

const EditItemCategory = () => {
  const { useForm, useWatch, Item, useFormInstance } = Form;
  const [form] = useForm<CreateItemCategoryModel>();
  const [messageApi, contextHolder] = message.useMessage();
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);

  const updateData = (formData: ItemCategoryListModel) => {
    console.log(formData);
  };

  return (
    <CustomForm
      form={form}
      initialValues={{ status: "Active" }}
      onFinish={updateData}
      disabled={formSubmitting}
    >
      {contextHolder}
      <ContentCard
        title="Create Item Category"
        buttons={
          <SaveButton
            onClick={() => console.log("submitted")}
            loading={formSubmitting}
          />
        }
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
              showSearch
              style={{ minWidth: 200 }}
              placeholder="Search to Select"
              options={EnumToArray(StatusOptions)}
            />
          </Item>
        </Space>
      </ContentCard>
    </CustomForm>
  );
};

export default EditItemCategory;
