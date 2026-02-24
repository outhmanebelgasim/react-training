import React from "react";

function Users() {
  const users = [
    { id: 1, firstName: "outhmane", lastName: "Belgasim", age: 21 },
    { id: 2, firstName: "simo", lastName: "Souabni", age: 20 },
    { id: 3, firstName: "amine", lastName: "Jabrane", age: 20 },
    { id: 4, firstName: "hamza", lastName: "Benaarba", age: 23 },
  ];

  users.sort((a, b) => a.lastName.localeCompare(b.lastName));
  users.sort((a, b) => a.age - b.age);

  return (
    <div>
      <h1>List of Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {" "}
            firstName: {user.firstName}, lastName: {user.lastName}, age:{" "}
            {user.age}
          </li>
        ))}

        <>
          <br></br>
        </>

        {users
          .filter((user) => user.age > 18)
          .map((user) => (
            <li key={user.id}>
              {user.firstName} : {user.age} year
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Users;
