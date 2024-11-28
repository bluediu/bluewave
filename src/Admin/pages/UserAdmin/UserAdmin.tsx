/* Component */
import { ModalBasic } from "@/shared";

import { CreateBtn, TableTitle } from "@/Admin/common";

import {
  TableUsers,
  UserCreateForm,
  UserUpdateForm,
} from "@/Admin/components/Users";

/* Hooks */
import { useDynamicPageTitle } from "@/hooks";

import { useFilter, useModal, useUsers } from "@/Admin/hooks";

/* Services */
import { adminActions } from "@/Admin/services";

/* Interfaces */
import { IUser } from "@/Admin/interfaces";

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

  const onCreate = (): void => {
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

  const onUpdate = (user: IUser): void => {
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
      <CreateBtn onClick={onCreate} isLoading={query.isLoading} />
      <TableUsers
        scope={scope}
        query={query}
        onFilterChange={onFilterChange}
        onUpdate={onUpdate}
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
