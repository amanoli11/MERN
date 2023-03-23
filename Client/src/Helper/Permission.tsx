import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { ROLE } from "../enums/Roles";

interface IPropsPermission {
  roles: ROLE[];
  children: React.ReactElement;
}

const Permission = (props: IPropsPermission) => {
  const { roles, children } = props;
  if (!roles.includes(ROLE.SalesPerson))
    return <Navigate to={"/pagenotfound"} />;
  return children;
};

export default Permission;
