import React, { useState } from "react";
import useInput from "./Hooks/useInput";

function UserForm() {
  const [name, nameBind] = useInput("");
  const [email, emailBind] = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input type="text" {...nameBind} name="name"></input>
        </div>
        <div>
          Email: <input type="email" {...emailBind} name="email"></input>
        </div>
        <div>
          <input type="submit" value="Enviar"></input>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
