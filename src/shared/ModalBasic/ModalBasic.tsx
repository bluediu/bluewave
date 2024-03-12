import { ReactElement } from "react";

/* Libs components */
import { Modal, TransitionablePortal } from "semantic-ui-react";

interface IProps {
  show: boolean;
  title: string | null;
  size?: "tiny" | "small" | "large";
  children: ReactElement | ReactElement[];
  onClose: () => void;
}

import "./ModalBasic.scss";

export const ModalBasic = (props: IProps) => {
  const { children, show, title, onClose, size = "tiny" } = props;

  return (
    <>
      <div>
        <style>{`
          .ui.dimmer {
            transition: background-color 0.3s ease;
            background-color: transparent;
          }

          .modal-fade-in .ui.dimmer {
            background-color: rgba(0, 0, 0, 0.7) !important;
          }
        `}</style>

        <TransitionablePortal
          open={show}
          onOpen={() =>
            setTimeout(() => document.body.classList.add("modal-fade-in"), 0)
          }
          transition={{ animation: "scale", duration: 300 }}
        >
          <Modal
            className="modal-basic"
            open={true}
            size={size}
            onClose={() => {
              document.body.classList.remove("modal-fade-in");
              onClose();
            }}
          >
            {title && <Modal.Header>{title}</Modal.Header>}
            <Modal.Content>{children}</Modal.Content>
          </Modal>
        </TransitionablePortal>
      </div>
    </>
  );
};
