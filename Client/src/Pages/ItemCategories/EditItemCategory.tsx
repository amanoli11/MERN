import { Space, Input, Select, Form, message } from "antd";
import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ContentCard from "../../Components/ContentCard/ContentCard";
import CustomForm from "../../Components/Form/CustomForm";
import { EnumToArray } from "../../Components/Utils/EnumToArray/EnumToArray";
import { StatusOptions } from "../../enums/StatusOptions";
import { CreateItemCategoryModel } from "../../Models/CreateItemCategoryModel";
import { useEffect } from "react";
import UpdateButton from "../../Components/Buttons/UpdateButton/UpdateButton";
import { ItemCategoryListModel } from "../../Models/ItemCategoryListModel";

const EditItemCategory = () => {
  const params = useParams();
  const { useForm, useWatch, Item, useFormInstance } = Form;
  const [form] = useForm<CreateItemCategoryModel>();
  const [messageApi, contextHolder] = message.useMessage();
  const [formSubmitting, setFormSubmitting] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<ItemCategoryListModel>();
  const navigate = useNavigate();

  const getItemCategoriesDetails = async () => {
    await axios
      .get(`/itemCategory/${params.id}`)
      .then(({ data }) => {
        setData(data.data);
        form.setFieldsValue({ name: data.data.name, status: data.data.status });
        messageApi.success(data.message);
      })
      .catch((err) => messageApi.error(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    setLoading(true);
    getItemCategoriesDetails();
  }, []);

  const updateData = async (formData: ItemCategoryListModel) => {
    const updateValues = { ...formData, id: data?._id };
    await axios
      .post(`/updateItemCategory/${updateValues.id}`, updateValues)
      .then(({ data }) => {
        navigate("/itemCategory");
        messageApi.success(data.message);
      })
      .catch((err) => messageApi.error(err.message));
  };

  return (
    <>
      <CustomForm
        form={form}
        initialValues={{ status: "Active" }}
        onFinish={updateData}
        disabled={formSubmitting}
      >
        {contextHolder}
        <ContentCard
          title="Create Item Category"
          loading={loading}
          buttons={<UpdateButton loading={formSubmitting} />}
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
    </>
  );
};

export default EditItemCategory;
