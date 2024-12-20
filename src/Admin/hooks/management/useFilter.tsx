import { useState } from "react";

/* Types */
import { TFilter } from "@/Admin/types";

export const useFilter = () => {
  const [filterBy, setFilterBy] = useState<TFilter>("actives");
  const onFilterChange = (value: TFilter) => setFilterBy(value);

  return { filterBy, onFilterChange };
};
