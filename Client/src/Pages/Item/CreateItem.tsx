import { Form, Input, Space } from "antd";
import SaveButton from "../../Components/Buttons/SaveButton/SaveButton";
import ContentCard from "../../Components/ContentCard/ContentCard";

const CreateItem = () => {
  const { useForm, useWatch, Item } = Form;
  const [form] = useForm();

  return (
    <Form
      form={form}
      layout="inline"
      autoComplete="off"
      onFinish={() => alert("Completed")}
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

          <Item></Item>
        </Space>
      </ContentCard>
    </Form>
  );
};

export default CreateItem;
