import { BaseListModel } from "./BaseModel"

export interface ItemCategoryListModel extends BaseListModel{
    name: string
    createdAt: Date
    status: string
}