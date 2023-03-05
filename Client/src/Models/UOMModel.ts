import { StatusOptions } from "../enums/StatusOptions"
import { BaseListModel } from "./BaseModel"

export interface CreateUOMModel {
    name: string
    status: StatusOptions
}

export interface UOMListModel extends BaseListModel {
    name: string
    status: StatusOptions
}