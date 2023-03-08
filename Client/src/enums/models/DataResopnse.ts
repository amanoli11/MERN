import { ResponseTypeOption } from "./ResponseTypeOption";

export interface DataResponse<T> {
  responseType: ResponseTypeOption;
  message: string;
  data: T;
}
