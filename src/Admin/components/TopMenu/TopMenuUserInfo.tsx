import { Icon, Loader, Menu } from "semantic-ui-react";
import { useUser } from "../../hooks/users";

interface IProps {
  userId: number | null;
}

export const TopMenuUserInfo = ({ userId }: IProps) => {
  const { isLoading, user } = useUser(userId ?? 0);

  const renderName = (): string => {
    if (user?.first_name && user?.last_name)
      return `${user.first_name} ${user.last_name}`;
    return user!.email;
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
