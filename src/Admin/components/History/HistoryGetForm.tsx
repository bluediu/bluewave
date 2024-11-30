/* Components */
import { GetForm } from "@/Admin/common/forms";

/* Hooks */
import { useGetForm } from "@/Admin/hooks";

/* Interfaces */
import { IForm, IPaymentSearch } from "@/Admin/interfaces";

interface IProps {
  cache: string;
  match?: string[];
  getForm: () => Promise<IForm>;
  getData: (data: IPaymentSearch) => void;
  onClose: () => void;
}

export const HistoryGetForm = (props: IProps) => {
  const { cache, getForm, getData, onClose } = props;

  // Get form query
  const form = useGetForm({ cache, getForm });

  const handleSubmit = (data: IPaymentSearch) => {
    getData({ ...data, payment_type: data.payment_type.toUpperCase() });
    onClose();
  };

  return (
    <GetForm getForm={form} onCloseModal={onClose} onSubmit={handleSubmit} />
  );
};
