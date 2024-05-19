/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";

/* Libs */
import classNames from "classnames";
import { toast } from "react-toastify";

/* Components */
import { Link } from "react-router-dom";
import {
  Button,
  Checkbox,
  Icon,
  Label,
  Loader,
  Popup,
} from "semantic-ui-react";
import TableIcon from "./icons/table.svg?react";

/* Hooks */
import { useQuery } from "@tanstack/react-query";

/* Services */
import { adminActions } from "../../../services";

/* Constants */
import { ADMIN_TABLE_DETAIL } from "../../../constants/paths";

import "./ListTables.scss";

const errorMsg =
  "The information could not be loaded. " +
  "Please try again or contact the administrator.";

export const ListTables = () => {
  const [autoReload, setAutoReload] = useState(false);

  const { data, isLoading, isFetching, isError, refetch } = useQuery({
    queryKey: ["tableOrderStatuses"],
    queryFn: () => adminActions.tables.listTableOrderStatuses(),
    // Refresh every 5 seconds if autoReload is true
    refetchInterval: autoReload ? 5000 : false,
    refetchOnWindowFocus: false,
    // Disable cache collector, refetch always.
    gcTime: 0,
  });

  const handleToggleAutoReload = () => setAutoReload(!autoReload);

  const loading = autoReload ? false : isLoading || isFetching;

  if (isError) toast.error(errorMsg);

  return (
    <section>
      <article className="table-options">
        <div className="table-options__reload-toggle">
          <span>Auto reload</span>
          <Checkbox
            slider
            disabled={loading}
            checked={autoReload}
            onChange={handleToggleAutoReload}
          />
        </div>
        <Button
          circular
          className="table-options__reload ml-5"
          color="black"
          disabled={loading}
          icon
          title="Refresh tables"
          onClick={() => refetch()}
        >
          <Icon name="refresh" />
        </Button>
      </article>

      {loading ? (
        <Loader size="large" content={`Loading...`} active inline="centered" />
      ) : (
        <article className="tables-list-admin">
          {data?.map((table) => (
            <Link
              to={`${ADMIN_TABLE_DETAIL}/${table.code}`}
              className="table-item mr-5"
              key={table.id}
            >
              {table.orders_number > 0 && !table.all_orders_delivered && (
                <Label circular color="orange">
                  {table.orders_number}
                </Label>
              )}

              {table.pending_payment && (
                <Label circular color="orange">
                  Bill
                </Label>
              )}

              {table.all_orders_canceled && (
                <Popup
                  trigger={
                    <Label circular color="red">
                      <Icon name="ban" className="m-0" />
                    </Label>
                  }
                  content="This table requires manual intervention."
                  position="top center"
                />
              )}

              <TableIcon
                className={classNames({
                  pending: table.orders_number > 0,
                  busy: table.all_orders_delivered,
                  payment: table.pending_payment,
                  // issue: table.all_orders_canceled,
                })}
              />
              <p className="text-center">Table #{table.code}</p>
            </Link>
          ))}
        </article>
      )}
    </section>
  );
};
