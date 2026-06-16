import { useState } from "react"

export const useUsers = () => {
    const [users, setUsers] = useState([]);

    const addUser = (newUser) => {
        setUsers(prevUsers => {
            const updatedUsers = [...prevUsers];
            updatedUsers.push({
                id: crypto.randomUUID(),
                name: newUser.name,
                age: newUser.age,
                nickname: newUser.nickname,
            });
            return updatedUsers
        });
    }

    const editUser = (editedUser) => {
        setUsers(prevUsers => {
            const updatedUsers = prevUsers.map((user) => {
                if (user.id == editedUser.id) {
                    return {
                        ...user,
                        name: editedUser.name,
                        age: editedUser.age,
                        nickname: editedUser.nickname,
                    }
                } else {
                    return user;
                }
            })
            return updatedUsers
        });
    }

    const deleteUser = (deletedUserId) => {
        setUsers(prevUsers => {
            const updatedUsers = prevUsers.filter((user) => user.id != deletedUserId);
            return updatedUsers
        });
    }

    return { users, setUsers, addUser, editUser, deleteUser }
}