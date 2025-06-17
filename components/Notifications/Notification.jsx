import React from "react";
import classnames from "classnames";
export default function Notification({ children, status, className, ...rest }) {
  const icon =
    status === "success" ? (
      <i class="bi bi-check-circle-fill"></i>
    ) : status === "warning" ? (
      <i class="bi bi-exclamation-triangle-fill"></i>
    ) : status === "error" ? (
      <i class="bi bi-x-circle-fill"></i>
    ) : (
      <i class="bi bi-info-circle-fill"></i>
    );

  const allClasses = classnames(status, className);

  return (
    <div className={allClasses} {...rest}>
      {icon}
      <div>{children}</div>
    </div>
  );
}

//   <Notification className="noti" status="success">
//     <Notification.Title>Congratulations!</Notification.Title>
//     <Notification.Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Notification.Text>
//   </Notification>
