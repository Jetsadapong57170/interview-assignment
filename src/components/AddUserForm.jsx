import React from 'react'

const AddUserForm = ({
    handleOnFormSubmit,
    handleOnFormReset,
    setCreateUserForm,
    createUserForm
}) => {
    return (
        <form className="flex space-x-4 mt-4" onSubmit={handleOnFormSubmit} onReset={handleOnFormReset}>
            <input
                value={createUserForm.name}
                onChange={(e) => setCreateUserForm({
                    ...createUserForm,
                    name: e.target.value
                })}
                type="text"
                className="bg-gray-100 w-[150px] py-2.5 px-4 border border-slate-300 rounded-lg"
            />
            <input
                value={createUserForm.age}
                onChange={(e) => setCreateUserForm({
                    ...createUserForm,
                    age: e.target.value
                })}
                type="number"
                min="1"
                className="bg-gray-100 w-[100px] py-2.5 px-4 border border-slate-300 rounded-lg"
            />
            <input
                value={createUserForm.nickname}
                onChange={(e) => setCreateUserForm({
                    ...createUserForm,
                    nickname: e.target.value
                })}
                type="text"
                className="bg-gray-100 w-[150px] py-2.5 px-4 border border-slate-300 rounded-lg"
            />
            <button type="submit" className="shadow-sm cursor-pointer text-green-900 hover:text-white bg-green-300 hover:bg-green-500 px-4 py-2.5 rounded-lg">Add</button>
            <button type="reset" className="shadow-sm cursor-pointer text-red-900 hover:text-white bg-red-300 hover:bg-red-400 px-4 py-2.5 rounded-lg">Cancel</button>
        </form>
    )
}

export default AddUserForm