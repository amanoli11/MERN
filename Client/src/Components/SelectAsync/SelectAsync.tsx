import { Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { ISelectProps } from "./SelectAsyncProps";
import { DefaultOptionType } from "antd/es/select";

const SelectAsync = (props: ISelectProps) => {
  const { featureName, ...rest } = props;
  const [searchText, setSearchText] = useState<string>("");
  const [ddlValues, setDdlValues] = useState<DefaultOptionType[]>([]);

  const fetchList = async () => {
    await axios
      .get(`/${featureName}`)
      .then(({ data }) => {
        const values = data.data.map((x: any) => ({
          label: x[props.mapper.label],
          value: x[props.mapper.value],
        }));
        setDdlValues(values);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    const data = setTimeout(() => {
      fetchList();
    }, 1500);

    return () => clearTimeout(data);
  }, [searchText]);

  return (
    <Select
      {...rest}
      filterOption={false}
      onSearch={setSearchText}
      style={{ width: "200px" }}
      showSearch
      allowClear={true}
      options={ddlValues}
    />
  );
};

export default SelectAsync;
