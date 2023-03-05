import { SelectProps } from "antd";
import { DefaultOptionType } from "antd/es/select";

export interface ISelectProps extends SelectProps {
    featureName: string
    mapper: {label: string, value: string}
}