import { Icon, Popup } from "semantic-ui-react";

export const TableLegends = () => {
  return (
    <div className="mb-5 text-center">
      <h4 className="help-text-color d-block">Table statuses: </h4>
      <Popup
        trigger={<Icon size="large" name="check" color="black" />}
        content="The table is available."
        position="top center"
      />
      <small>Available</small>
      <Icon name="angle right" size="large" className="text-secondary mx-1" />
      <Popup
        trigger={<Icon size="large" name="bell outline" color="blue" />}
        content="The table has pending orders awaiting delivery."
        position="top center"
      />
      <small>Pending</small>
      <Icon name="angle right" size="large" className="text-secondary mx-1" />
      <img src="" alt="" />
      <Popup
        trigger={
          <Icon size="large" name="bullhorn" className="custom-busy-color" />
        }
        content="The table is currently occupied; all orders have been delivered."
        position="top center"
      />
      <small>Busy/delivered</small>
      <Icon name="angle right" size="large" className="text-secondary mx-1" />
      <Popup
        trigger={<Icon size="large" name="flag outline" color="green" />}
        content="The table request the bill/account."
        position="top center"
      />
      <small>Request the bill</small>
    </div>
  );
};
