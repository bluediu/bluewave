import { useContext } from "react";

/* Libs */
import { toast } from "react-toastify";

/* Libs components */
import { Icon, Loader, Menu } from "semantic-ui-react";

/* Context */
import { AuthContext } from "../../context";

/* Hooks */
import { useUser } from "../../hooks";

interface IProps {
  userId: number;
}

export const TopMenuUserInfo = ({ userId }: IProps) => {
  const { logoutAuthUser } = useContext(AuthContext);

  const { isLoading, isError, user } = useUser(userId);

  if (isError) {
    toast.error("Something was wrong, please try again.");
    logoutAuthUser();
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
