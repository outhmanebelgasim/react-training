import React from "react";
import "../styles/Dashboard.css";

function Dashboard({ isLoggedIn = false, username = "Guest" }) {
  //   const isLoggedIn = true;
  //   const hasMessages = false;

  //   return (
  //     <div>
  //       {isLoggedIn ? (
  //         hasMessages ? (
  //           <p>You Have new Messages</p>
  //         ) : (
  //           <p>Welcome Back, No new messages</p>
  //         )
  //       ) : (
  //         <p>Please Login to continue</p>
  //       )}
  //     </div>
  //   );

  return isLoggedIn ? (
    <h2 className="login">Welcome {username}</h2>
  ) : (
    <h2 className="logout">Please Login to continue</h2>
  );
}

export default Dashboard;
