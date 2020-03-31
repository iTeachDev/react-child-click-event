import React from "react";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ChildWithLoops = () => {
  const data = [
    { id: 1, Name: "Jim" },
    { id: 2, Name: "James" },
    { id: 3, Name: "John" },
    { id: 4, Name: "Jack" },
    { id: 5, Name: "Josh" },
    { id: 6, Name: "Jerry" },
    { id: 7, Name: "Joe" }
  ];
  const handleEditClick = (e, id) => {
    e.preventDefault();
    console.log("Edit", id);
    console.log(e.target);
  };

  const handleDeleteClick = (e, id) => {
    e.preventDefault();
    console.log("Delete", id);
    console.log(e.target);
  };

  return (
    <div>
      <form className="pure-form">
        <fieldset>
          <legend>Child Component with table</legend>
          <table className="pure-table pure-table-bordered">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {data.map((p, index) => (
                <tr key={p.id}>
                  <td>{p.id}</td>
                  <td>{p.Name}</td>
                  <td>
                    <button onClick={e => handleEditClick(e, p.id)}>
                      <FontAwesomeIcon icon={faEdit} fixedWidth />
                    </button>
                    <button onClick={e => handleDeleteClick(e, p.id)}>
                      <FontAwesomeIcon icon={faTrashAlt} fixedWidth />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </fieldset>
      </form>
    </div>
  );
};
