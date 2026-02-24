import React from "react";

function Notification() {
  const hasNotification = false;
  return (
    <div>
      <h1>Notifications</h1>
      {hasNotification && <p>You have Notifications</p>}
    </div>
  );
}

export default Notification;
