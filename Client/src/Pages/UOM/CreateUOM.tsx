import { Space, Input, Select, Form, message } from "antd";
import SaveButton from "../../Components/Buttons/SaveButton/SaveButton";
import ContentCard from "../../Components/ContentCard/ContentCard";
import CustomForm from "../../Components/Form/CustomForm";
import { EnumToArray } from "../../Components/Utils/EnumToArray/EnumToArray";
import { StatusOptions } from "../../enums/StatusOptions";
import { useState } from "react";
import { CreateUOMModel } from "../../Models/UOMModel";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateUOM = () => {
  const { useForm, Item } = Form;
  const [form] = useForm<CreateUOMModel>();
  const [messageApi, contextHolder] = message.useMessage();
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const navigate = useNavigate();

  const saveData = async (values: CreateUOMModel) => {
    setFormSubmitting(true);
    await axios
      .post("/uom", values)
      .then((res) => {
        messageApi.open({ type: "success", content: res.data.message });
        navigate("/uom");
      })
      .catch((err) => {
        console.log(err.response);
        messageApi.open({ type: "error", content: err.message });
      })
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
        title="Create UOM"
        buttons={<SaveButton loading={formSubmitting} />}
      >
        <Space align="start" size={24} wrap>
          <Item
            label="Name"
            name="name"
            required
            rules={[
              { required: true, message: "Missing UOM name" },
              {
                max: 100,
                message: "UOM name cannot be more than 100 characters",
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

export default CreateUOM;
