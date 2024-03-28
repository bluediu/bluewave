/* Component */
import { ModalBasic } from "../../../shared";
import { CreateBtn, TableTitle } from "../../common";
import {
  TableUsers,
  UserCreateForm,
  UserUpdateForm,
} from "../../components/Users";

/* Hooks */
import { useDynamicPageTitle } from "../../../hooks";
import { useFilter, useModal, useUsers } from "../../hooks";

/* Services */
import { adminActions } from "../../services";

/* Interfaces */
import { IUser } from "../../interfaces";

export const UserAdmin = () => {
  const scope = "Users";
  const cache = "User";

  /* Hooks */
  useDynamicPageTitle(scope);

  /* prettier-ignore */
  const { 
    showModal,
    modalContent,
    modalTitle,
    openModal,
    closeModal,
  } = useModal();

  const { filterBy, onFilterChange } = useFilter();

  // Get users query
  const query = useUsers(filterBy);

  const onUserCreate = (): void => {
    openModal(
      "Create a new user",
      <UserCreateForm
        cache={cache}
        match={["password", "repeat_password"]}
        onClose={closeModal}
        getCreateForm={adminActions.forms.getCreateUserForm}
      />,
    );
  };

  const onUserUpdate = (user: IUser): void => {
    openModal(
      `Update user #${user.id}`,
      <UserUpdateForm
        cache={cache}
        id={user.id}
        onClose={closeModal}
        getUpdateForm={adminActions.forms.getUpdateUserForm}
      />,
    );
  };

  return (
    <main>
      <TableTitle text={scope} />
      <CreateBtn onClick={onUserCreate} isLoading={query.isLoading} />
      <TableUsers
        scope={scope}
        query={query}
        onFilterChange={onFilterChange}
        onUserUpdate={onUserUpdate}
      />
      <ModalBasic
        show={showModal}
        onClose={closeModal}
        title={modalTitle}
        children={modalContent ?? <span>No content</span>}
      />
    </main>
  );
};
