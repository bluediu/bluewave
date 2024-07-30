/* Components */
import { Dropdown } from "semantic-ui-react";

/* Hooks */
import { useGetForm } from "../../hooks";

/* Services */
import { adminActions } from "../../services";

interface IProps {
  onChange: (value: number) => void;
}

export const ProductsFilter = ({ onChange }: IProps) => {
  // Get form query
  const { data } = useGetForm({
    cache: "products",
    getForm: adminActions.forms.getProductsFilterForm,
  });

  return (
    <div className="ml-5">
      <small className="d-block text-secondary my-1 ">Select a category</small>
      {data?.fields.map(({ label, choices }) => {
        return (
          <Dropdown
            id={label}
            placeholder="All"
            selection
            options={choices}
            search
            onChange={(_, data) => onChange(Number(data.value))}
          />
        );
      })}
    </div>
  );
};
