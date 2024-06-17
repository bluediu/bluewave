import { Divider } from "semantic-ui-react";

export const PageTitle = ({ title }: { title: string }) => {
  return (
    <>
      <h2>
        <span className="title-color-gradient">{title}</span>
      </h2>
      <Divider />
    </>
  );
};
