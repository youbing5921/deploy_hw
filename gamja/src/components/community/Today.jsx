import React from "react";

const Today = () => {
  const time = new Date();
  const year = time.getFullYear();
  const month = String(time.getMonth() + 1).padStart(2, "0");
  const date = String(time.getDate()).padStart(2, "0");
  const today = `${year}-${month}-${date}`;

  return <>{today}</>;
};

export default Today;
