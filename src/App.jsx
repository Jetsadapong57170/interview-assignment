import { useEffect, useState } from "react"
import { useUsers } from "./hooks";
import UserTable from "./components/UserTable";
import AddUserForm from "./components/AddUserForm";

function App() {
  const { users, setUsers, addUser, editUser, deleteUser } = useUsers();
  const [userFormError, setUserFormError] = useState(null);

  const [createUserForm, setCreateUserForm] = useState({
    name: '',
    age: 1,
    nickname: ''
  });

  const [editUserForm, setEditUserForm] = useState({
    id: null,
    name: '',
    age: 1,
    nickname: ''
  });

  useEffect(() => {
    const rawUsersFromStorage = localStorage.getItem('users');
    if (rawUsersFromStorage != null) {
      const convertedUsers = JSON.parse(rawUsersFromStorage);
      setUsers(convertedUsers);
    }
  }, [])

  useEffect(() => {
    const convertedJson = JSON.stringify(users);
    localStorage.setItem('users', convertedJson);
  }, [users])

  const validateUserForm = (userForm) => {
    if (userForm.name == '') {
      setUserFormError("กรุณากรอกชื่อ");
      return false;
    }

    if (userForm.age == '') {
      setUserFormError("กรุณากรอกอายุ");
      return false;
    }

    if (userForm.nickname == '') {
      setUserFormError("กรุณากรอกชื่อเล่น");
      return false;
    }

    return true;
  }

  const handleOnFormSubmit = (e) => {
    e.preventDefault();
    const result = validateUserForm(createUserForm);
    if (!result) return;
    addUser(createUserForm);
    clearCreateUserForm();
  }

  const handleOnFormReset = (e) => {
    e.preventDefault();
    clearCreateUserForm();
  }

  const clearCreateUserForm = () => {
    setCreateUserForm({
      name: '',
      age: 1,
      nickname: ''
    });
    setUserFormError(null);
  }

  const clearEditUserForm = () => {
    setEditUserForm({
      id: null,
      name: '',
      age: 1,
      nickname: ''
    });
    setUserFormError(null);
  }

  const handleOnUserWasDeleted = (id) => {
    deleteUser(id);
  }

  const handleOnUserWasCalledToEdit = (user) => {    
    setEditUserForm({
      id: user.id,
      name: user.name,
      age: user.age,
      nickname: user.nickname
    });
    setUserFormError(null);
  }

  const handleOnUserWasCancelledToEdit = () => {
    clearEditUserForm();
    setUserFormError(null);
  }

  const handleOnUserWasEdited = (id) => {
    const result = validateUserForm(editUserForm);
    if (!result) return;
    editUser(editUserForm);
    clearEditUserForm();
  }

  return (
    <div className="w-full flex flex-col items-center">
      <UserTable
        users={users}
        editUserForm={editUserForm}
        setEditUserForm={setEditUserForm}
        handleOnUserWasEdited={handleOnUserWasEdited}
        handleOnUserWasCalledToEdit={handleOnUserWasCalledToEdit}
        handleOnUserWasCancelledToEdit={handleOnUserWasCancelledToEdit}
        handleOnUserWasDeleted={handleOnUserWasDeleted}
      />
      {
        editUserForm.id == null &&
          <AddUserForm
            createUserForm={createUserForm}
            handleOnFormSubmit={handleOnFormSubmit}
            handleOnFormReset={handleOnFormReset}
            setCreateUserForm={setCreateUserForm}
          />
      }
      { userFormError && <p className="text-red-500 mt-2">{userFormError}</p> }
    </div>
  )
}

export default App
