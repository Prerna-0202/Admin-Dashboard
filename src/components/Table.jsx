// Importing necessary modules and components
import { useState, useMemo } from "react";
import EditMode from "./EditMode";

const Table = ({ users, setUsers, searchTerm, currentPage, itemsPerPage, selectedRows, setSelectedRows }) => {
    const [editableUserId, setEditableUserId] = useState(null);
    const [editedData, setEditedData] = useState({});

    // Function to filter users based on search term
    const filteredUsers = useMemo(() => {
        const filtered = users.filter((user) =>
            Object.values(user).some((value) =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filtered.slice(startIndex, endIndex);
    }, [users, searchTerm, currentPage]);

    // Function to handle the selection of individual rows
    const handleSelectRow = (userId) => {
        const isSelected = selectedRows.includes(userId);
        setSelectedRows((prevSelectedRows) =>
            isSelected
                ? prevSelectedRows.filter((id) => id !== userId)
                : [...prevSelectedRows, userId]
        );
    };

    // Function to handle the selection of all checkboxes
    const handleSelectAll = () => {
        const currentPageIds = filteredUsers.map((user) => user.id);
        const allSelected =
            selectedRows.length === currentPageIds.length &&
            selectedRows.every((id) => currentPageIds.includes(id));
        const newSelectedRows = allSelected ? [] : currentPageIds;
        setSelectedRows(newSelectedRows);
    };

    return (
        <main>
            {/* Table */}
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr className="border-b-2 p-4">
                        <th className="p-2 text-left">
                            <input
                                type="checkbox"
                                onChange={handleSelectAll}
                                checked={selectedRows.length === filteredUsers.length && filteredUsers.length > 0}
                                className="form-checkbox h-5 w-5  text-blue-500"
                            />
                        </th>
                        <th className="p-2 text-left">Name</th>
                        <th className="p-2 text-left">Email</th>
                        <th className="p-2 text-left">Role</th>
                        <th className="p-2 text-right ">Actions</th>
                    </tr>
                </thead>
                <tbody className="">
                    {filteredUsers.map((user) => (
                        <tr key={user.id} className={`border-b-2 p-4 ${selectedRows.includes(user.id) ? 'selected' : ''}`}>
                            <td className="p-2">
                                <input
                                    type="checkbox"
                                    checked={selectedRows.includes(user.id)}
                                    onChange={() => handleSelectRow(user.id)}
                                    className="form-checkbox h-5 w-5 text-blue-500"
                                />
                            </td>
                            <td>
                                {editableUserId === user.id ? (
                                    <input
                                        type="text"
                                        value={editedData.name}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, name: e.target.value })
                                        }
                                        className="text-center border-2 border-gray-300 rounded-md"
                                    />
                                ) : (
                                    <span className="text-right">{user.name}</span>
                                )}
                            </td>
                            <td>
                                {editableUserId === user.id ? (
                                    <input
                                        type="text"
                                        value={editedData.email}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, email: e.target.value })
                                        }
                                        className="text-center border-2 border-gray-300 rounded-md"
                                    />
                                ) : (
                                    <span className="text-center">{user.email}</span>
                                )}
                            </td>
                            <td>
                                {editableUserId === user.id ? (
                                    <input
                                        type="text"
                                        value={editedData.role}
                                        onChange={(e) =>
                                            setEditedData({ ...editedData, role: e.target.value })
                                        }
                                        className="text-center border-2 border-gray-300 rounded-md"
                                    />
                                ) : (
                                    <span className="text-right">{user.role}</span>
                                )}
                            </td>

                            <td className="p-2">
                                {/* Passing necessary props to EditMode component */}
                                <EditMode
                                    editableUserId={editableUserId}
                                    setEditableUserId={setEditableUserId}
                                    user={user}
                                    users={users}
                                    setUsers={setUsers}
                                    setSelectedRows={setSelectedRows}
                                    setEditedData={setEditedData}
                                    editedData={editedData}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default Table;
