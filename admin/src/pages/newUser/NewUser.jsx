import { useContext, useState } from "react";
import { createUser } from "../../context/userContext/apiCalls";
import "./newUser.css";
import { UserContext } from "../../context/userContext/UserContext";

const NewUser = () => {
  const [newUser, setnewUser] = useState(null);
  const { dispatch } = useContext(UserContext);

  const handleChange = (e) => {
    const value = e.target.value;
    setnewUser({ ...newUser, [e.target.name]: value });
  };
  console.log(newUser);
  const create = (e) => {
    e.preventDefault();
    createUser(newUser, dispatch);
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="john"
            onChange={handleChange}
          />
        </div>
        {/* <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Doe" />
        </div> */}
        <div className="newUserItem">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="john@doe.com"
            onChange={handleChange}
          />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={handleChange}
          />
        </div>
        {/* <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+ 12 345 678" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="Paris | France" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="other">Other</label>
          </div>
        </div> */}
        <div className="newUserItem">
          <label>Is Admin</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="newUserSelect"
            onChange={handleChange}
          >
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Image Url</label>
          <input
            type="text"
            name="profilePic"
            placeholder="Paste image url here"
            onChange={handleChange}
          />
        </div>
        <button className="newUserButton" onClick={create}>
          Create
        </button>
      </form>
    </div>
  );
};

export default NewUser;
