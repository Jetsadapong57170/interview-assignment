
import React from 'react'

const UserTable = ({
    users,
    editUserForm,
    setEditUserForm,
    handleOnUserWasEdited,
    handleOnUserWasCalledToEdit,
    handleOnUserWasCancelledToEdit,
    handleOnUserWasDeleted
}) => {
    return (
        <table className="mt-6 border border-collapse">
            <thead>
                <tr className="bg-indigo-600">
                    <th className="min-w-[200px] text-start py-4 px-3 border border-black border-collapse text-white">Name</th>
                    <th className="min-w-[80px] text-start py-4 px-3 border border-black border-collapse text-white">Age</th>
                    <th className="min-w-[150px] text-start py-4 px-3 border border-black border-collapse text-white">Nickname</th>
                    <th className="min-w-[200px] text-start py-4 px-3 border border-black border-collapse text-white">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(
                        (user) =>
                            <tr key={user.id} className="odd:bg-indigo-100 even:bg-indigo-300">
                                <td className="p-2 border border-collapse">
                                    {
                                        editUserForm.id == user.id?
                                            <input
                                                value={editUserForm.name}
                                                onChange={(e) => setEditUserForm({
                                                    ...editUserForm,
                                                    name: e.target.value
                                                })}
                                                type="text"
                                                className="bg-gray-100 w-[150px] py-2.5 px-4 border border-slate-300 rounded-lg"
                                            /> :
                                            <p>{user.name}</p>
                                    }
                                </td>
                                <td className="p-2 border border-collapse">
                                    {
                                        editUserForm.id == user.id?
                                            <input
                                                value={editUserForm.age}
                                                onChange={(e) => setEditUserForm({
                                                    ...editUserForm,
                                                    age: e.target.value
                                                })}
                                                type="number"
                                                min="1"
                                                className="bg-gray-100 w-[150px] py-2.5 px-4 border border-slate-300 rounded-lg"
                                            /> :
                                            <p>{user.age}</p>
                                    }
                                </td>
                                <td className="p-2 border border-collapse">
                                    {
                                        editUserForm.id == user.id?
                                            <input
                                                value={editUserForm.nickname}
                                                onChange={(e) => setEditUserForm({
                                                    ...editUserForm,
                                                    nickname: e.target.value
                                                })}
                                                type="text"
                                                className="bg-gray-100 w-[150px] py-2.5 px-4 border border-slate-300 rounded-lg"
                                            /> :
                                            <p>{user.nickname}</p>
                                    }
                                </td>
                                <td className="p-2 border border-collapse">
                                    <button className="shadow-sm cursor-pointer text-yellow-900 hover:text-white bg-yellow-200 hover:bg-yellow-500 px-4 py-2.5 rounded-lg" onClick={() => editUserForm.id == user.id? handleOnUserWasEdited(user.id) : handleOnUserWasCalledToEdit(user)}>
                                       {editUserForm.id === user.id ? "Save" : "Edit"}
                                    </button>
                                    {
                                        editUserForm.id == user.id?
                                            <button className="shadow-sm cursor-pointer  text-purple-900 hover:text-white bg-purple-200 hover:bg-purple-400 px-4 py-2.5 rounded-lg ml-2" onClick={() => handleOnUserWasCancelledToEdit()}>
                                                Cancel
                                            </button> :
                                            <button className="shadow-sm cursor-pointer text-red-900 hover:text-white bg-red-300 hover:bg-red-400 px-4 py-2.5 rounded-lg ml-2" onClick={() => handleOnUserWasDeleted(user.id)}>
                                                Delete
                                            </button>
                                    }
                                </td>
                            </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default UserTable