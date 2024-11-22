import { useState } from "react";

const LoginDemo1 = () => {
  const [userName, setUserName] = useState(""); 
  const [userPassword, setUserPassword] = useState(""); 
  const [loginData, setLoginData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle username change
  const handleChangeUser = (e) => {
    setUserName(e.target.value);
  };

  // Handle password change
  const handleChangePass = (e) => {
    setUserPassword(e.target.value);
  };

  // Add new user data to loginData
  const handleAdd = () => {
    setLoginData([...loginData, { username: userName, password: userPassword }]);
    setUserName(""); 
    setUserPassword(""); // Clear password input
  };

  // Start editing a specific entry by setting its values to the inputs
  const handleEdit = (index) => {
    setUserName(loginData[index].username); 
    setUserPassword(loginData[index].password);
    setEditingIndex(index); 
  };

  // Update the selected entry in loginData======
  const handleUpdate = () => {
    const updatedData = loginData.map((item, index) =>
      index === editingIndex ? { username: userName, password: userPassword } : item
    );
    setLoginData(updatedData); // Update loginData with the modified entry
    setEditingIndex(null); // Exit edit mode
    setUserName(""); // Clear username input
    setUserPassword(""); // Clear password input
  };
  // Delete the SElected entry from the loginData=========
  const handleDelete= (indexToDelete) =>{
    const newArray = loginData.filter((elem,index)=>index!=indexToDelete)
    setLoginData(newArray)
  }

  return (
    <>
      <div className="loginpage h-screen bg-slate-800 flex justify-center items-center flex-wrap">
        <div className="loginbox border-2 h-80 w-80 flex justify-center items-center">
          <div className="login">
            <div className="heading flex justify-center">
              <h1 className="heading mb-5 text-white font-semibold text-2xl">
                Login
              </h1>
            </div>
            <div className="logincontent flex flex-col">
              <input
                type="text"
                className="username mb-5 rounded-xl p-2"
                placeholder="Username"
                value={userName}
                onChange={handleChangeUser}
              />
              <input
                type="password"
                className="password mb-5 rounded-xl p-2"
                placeholder="Password"
                value={userPassword}
                onChange={handleChangePass}
              />
              <div className="btn flex justify-center gap-3">
                <button
                  className="password border-1 w-[80px] bg-green-600 rounded-2xl mb-5 p-2"
                  onClick={handleAdd}
                  disabled={editingIndex !== null} // Disable the Add button when in edit mode
                >
                  Add
                </button>
                {editingIndex !== null && (
                  <button
                    className="password border-1 w-[80px] bg-blue-600 rounded-2xl mb-5 p-2"
                    onClick={handleUpdate}
                  >
                    Update
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="resultbox flex flex-wrap">
          {loginData.map((elem, index) => (
            <div key={index} className="result bg-slate-300 border-2 ml-10 p-5 rounded-lg mb-10">
              <div className="contentrslt flex flex-col mb-10">
                <div className="namerslt">Username: {elem.username}</div>
                <div className="passrslt">Password: {elem.password}</div>
              </div>
              <button
                className="password border-1 w-[80px] bg-yellow-600 rounded-2xl mb-5 p-2 mr-10"
                onClick={() => handleEdit(index)} // Start editing the selected entry
              >
                Edit
              </button>
              <button
                className="password border-1 w-[80px] bg-red-600 rounded-2xl mb-5 p-2"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default LoginDemo1;
