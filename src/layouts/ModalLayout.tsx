import { ReactElement } from "react";

/* Components */
import { Modal, TransitionablePortal } from "semantic-ui-react";

interface IProps {
  show: boolean;
  size?: "tiny" | "small" | "large";
  onClose: () => void;
  children: ReactElement | ReactElement[];
}

export const ModalLayout = (props: IProps) => {
  const { show, size = "tiny", onClose, children } = props;

  return (
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
          {children}
        </Modal>
      </TransitionablePortal>
    </div>
  );
};
