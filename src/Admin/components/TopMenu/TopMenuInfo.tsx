/* Libs */
import { toast } from "react-toastify";

/* Components */
import { Icon, Loader, Menu } from "semantic-ui-react";

/* Hooks */
import { useAuthContext, useUser } from "@/Admin/hooks";

export const TopMenuInfo = () => {
  const { auth, logout } = useAuthContext();

  const { isLoading, isError, user } = useUser(auth!.user_id);

  if (isError) {
    toast.error("Something was wrong, please try again.");

    logout();

    return;
  }

  const renderName = (): string => {
    if (user?.first_name && user?.last_name)
      return `${user.first_name} ${user.last_name}`;

    return user!.username;
  };

  return (
    <Menu.Item>
      {isLoading ? (
        <Loader size="mini" inline active />
      ) : (
        <div>
          <Icon name="user circle" />
          <span className="ml-4">{renderName()}</span>
        </div>
      )}
    </Menu.Item>
  );
};
