import { Icon, Loader, Menu } from "semantic-ui-react";
import { useUser } from "../../hooks/users";

interface IProps {
  userId: number;
}

export const TopMenuUserInfo = ({ userId }: IProps) => {
  const { isLoading, user } = useUser(userId);

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
          {/* TODO: Use a dropdown */}
          <span className="ml-4">{renderName()}</span>
        </div>
      )}
    </Menu.Item>
  );
};
