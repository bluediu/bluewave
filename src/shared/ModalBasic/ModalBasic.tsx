import { ReactElement } from "react";

/* Components */
import { Modal } from "semantic-ui-react";
import { ModalLayout } from "../../layouts";

/* Hooks */
import { useDeviceType } from "../../hooks";

/* Types */
import { TSize } from "../../Admin/types";

import "./ModalBasic.scss";

interface IProps {
  show: boolean;
  title: string | null;
  children: ReactElement | ReactElement[];
  size?: TSize;
  onClose: () => void;
}

export const ModalBasic = (props: IProps) => {
  const { children, show, title, size, onClose } = props;
  const isTabletOrMobile = useDeviceType();

  return (
    <ModalLayout size={size} show={show} onClose={onClose}>
      <>
        {title && <Modal.Header>{title}</Modal.Header>}
        <Modal.Content scrolling={!isTabletOrMobile}>{children}</Modal.Content>
      </>
    </ModalLayout>
  );
};
