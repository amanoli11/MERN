import { useState } from "react";
import { Form, Input, Select, Space } from "antd";
import { RequiredMark } from "antd/es/form/Form";
import SaveButton from "../../Components/Buttons/SaveButton/SaveButton";
import ContentCard from "../../Components/ContentCard/ContentCard";

const CreateMenuCategories = () => {
  const { useForm, useWatch, Item } = Form;
  const [form] = useForm();
  const [requiredMark, setRequiredMarkType] = useState<RequiredMark>(true);

  return (
    <Form
      form={form}
      layout="inline"
      onFinish={() => alert("Completed")}
      autoComplete="off"
    >
      <ContentCard
        title="Create Menu Category"
        buttons={<SaveButton onClick={() => console.log("submitted")} />}
      >
        <Space>
          <Item
            label="Name"
            name={"name"}
            required
            tooltip="This is a required field"
            rules={[{ required: true, message: "Missing Menu Category" }]}
          >
            <Input autoComplete="newPassword" placeholder="Name" />
          </Item>

          <Item label="Status" required tooltip="This is a required field">
            <Select></Select>
          </Item>
        </Space>
      </ContentCard>
    </Form>
  );
};

export default CreateMenuCategories;
