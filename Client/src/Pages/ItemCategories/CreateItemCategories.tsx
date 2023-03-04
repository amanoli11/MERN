import { useState } from "react";
import { Form, Input, Select, Space } from "antd";
import { RequiredMark } from "antd/es/form/Form";
import SaveButton from "../../Components/Buttons/SaveButton/SaveButton";
import ContentCard from "../../Components/ContentCard/ContentCard";
import { StatusOptions } from "../../enums/StatusOptions";
import { EnumToArray } from "../../Components/Utils/EnumToArray/EnumToArray";
import { CreateItemCategoryModel } from "../../Models/ItemCategoryModel/CreateItemCategoryModel";
import axios from "axios";
import { message } from "antd";
import CustomForm from "../../Components/Form/CustomForm";

const CreateItemCategories = () => {
  const { useForm, useWatch, Item, useFormInstance } = Form;
  const [form] = useForm<CreateItemCategoryModel>();
  const [messageApi, contextHolder] = message.useMessage();
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);

  const saveData = async (values: CreateItemCategoryModel) => {
    setFormSubmitting(true);
    await axios
      .post("/createItemCategory", values)
      .then((res) => {
        messageApi.open({ type: "success", content: res.data });
      })
      .catch((err) => messageApi.open({ type: "error", content: err.message }))
      .finally(() => setFormSubmitting(false));
  };

  return (
    <CustomForm
      form={form}
      initialValues={{ status: "Active" }}
      onFinish={saveData}
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
            <Input autoFocus autoComplete="newPassword" placeholder="Name" />
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

export default CreateItemCategories;
