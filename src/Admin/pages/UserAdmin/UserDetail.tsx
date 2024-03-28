/* Hooks */
import { useParams } from "react-router-dom";
import { useUser } from "../../hooks";

/* Components */
import { Detail } from "../../common";

/* Constants */
import { USERS } from "../../constants/paths";

export const UserDetail = () => {
  const { id = "0" } = useParams();
  const { user } = useUser(+id);

  const fields = [
    { label: "Username", value: "username" },
    { label: "First name", value: "first_name" },
    { label: "Last name", value: "last_name" },
    { label: "E-mail", value: "email" },
    { label: "Active", value: "is_active" },
    { label: "Staff", value: "is_staff" },
  ];

  return (
    <Detail data={user} title="User detail" fields={fields} goBackUrl={USERS} />
  );
};
