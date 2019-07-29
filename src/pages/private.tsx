import React from "react";
import restrictedPage from "@hoc/restricted-page";

const privatePage = () => {
  return (
    <div>
      <h2>This page will render only if the user is athorized</h2>
    </div>
  );
};

export default restrictedPage(privatePage);
