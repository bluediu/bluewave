/* Components */
import { Button, Icon, Modal } from "semantic-ui-react";
import { ModalLayout } from "../layouts";

interface IProps {
  show: boolean;
  warningMsg: string;
  onConfirm: () => void;
  onClose: () => void;
}

export const ModalConfirm = (props: IProps) => {
  const { show, warningMsg, onConfirm, onClose } = props;

  return (
    <ModalLayout show={show} onClose={onClose}>
      <>
        <Modal.Content>
          <p>{warningMsg}</p>
        </Modal.Content>
        <Modal.Actions>
          <Button color="red" onClick={onClose} inverted>
            <Icon name="remove" /> No
          </Button>
          <Button color="green" inverted onClick={onConfirm}>
            <Icon name="checkmark" /> Yes
          </Button>
        </Modal.Actions>
      </>
    </ModalLayout>
  );
};
