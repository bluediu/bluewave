/* Hooks */
import { useCreateForm } from "./useCreateForm";

/* Services */
import { adminActions } from "@/Admin/services";

export const usePaymentForm = () => {
  const form = useCreateForm({
    cache: "paymentRegisterForm",
    getCreateForm: adminActions.forms.getRegisterPaymentForm,
  });

  return form;
};
