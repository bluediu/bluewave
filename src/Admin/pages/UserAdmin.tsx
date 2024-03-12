import { useState } from "react";

/* Component */
import { ModalBasic } from "../../shared";
import { CreateBtn, TableTitle } from "../common";
import {
  TableUsers,
  UserCreateForm,
  UserUpdateForm,
} from "../components/Users";

/* Hooks */
import { useDynamicPageTitle } from "../../hooks";
import { useModal, useUsers } from "../hooks";

/* Services */
import { adminActions } from "../services";

/* Interfaces */
import { IUser } from "../interfaces";

/* Types */
import { TFilter } from "../types";

export const UserAdmin = () => {
  const scope = "Users";
  const cache = "User";

  useDynamicPageTitle(scope);

  const { showModal, modalContent, modalTitle, openModal, closeModal } =
    useModal();
  const [filterBy, setFilterBy] = useState<TFilter>("actives");
  const query = useUsers(filterBy);

  const onFilterChange = (value: TFilter) => setFilterBy(value);

  const onUserCreate = (): void => {
    openModal(
      "Create a new user",
      <UserCreateForm
        cache={cache}
        match={["password", "repeat_password"]}
        onCloseModal={closeModal}
        getCreateForm={adminActions.forms.getCreateUserForm}
      />,
    );
  };

  const onUserUpdate = (user: IUser): void => {
    openModal(
      `Update user #${user.id}`,
      <UserUpdateForm
        cache={cache}
        entityId={user.id}
        onCloseModal={closeModal}
        getUpdateForm={adminActions.forms.getUpdateUserForm}
      />,
    );
  };

  return (
    <div>
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
    </div>
  );
};
