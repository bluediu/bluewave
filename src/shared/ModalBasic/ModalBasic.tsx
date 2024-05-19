import { ReactElement } from "react";

/* Components */
import { Modal } from "semantic-ui-react";
import { ModalLayout } from "../../layouts";

/* Hooks */
import { useDeviceType } from "../../hooks";

interface IProps {
  show: boolean;
  title: string | null;
  children: ReactElement | ReactElement[];
  onClose: () => void;
}

import "./ModalBasic.scss";

export const ModalBasic = (props: IProps) => {
  const { children, show, title, onClose } = props;
  const isTabletOrMobile = useDeviceType();

  return (
    <>
      <ModalLayout show={show} onClose={onClose}>
        <>
          {title && <Modal.Header>{title}</Modal.Header>}
          <Modal.Content scrolling={!isTabletOrMobile}>
            {children}
          </Modal.Content>
        </>
      </ModalLayout>
    </>
  );
};
