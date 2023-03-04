import { BaseListModel } from "../BaseModel/BaseModel"

export interface ItemCategoryListModel extends BaseListModel{
    name: string
    createdAt: Date
    status: string
}