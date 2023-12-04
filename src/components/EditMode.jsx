import React from 'react';
import { FaEdit, FaTrash, FaSave, FaTimes } from 'react-icons/fa';

const EditMode = ({ editableUserId, setEditableUserId, user, users, setUsers, setSelectedRows, setEditedData, editedData }) => {

    // Function to handle Edit
    const handleEdit = (userId) => {
        setEditableUserId(userId);
        // Initialize editedData with current user data
        const userToEdit = users.find((user) => user.id === userId);
        setEditedData({
            id: userToEdit.id,
            name: userToEdit.name,
            email: userToEdit.email,
            role: userToEdit.role,
        });
    };

    // Function to save the changes
    const handleSave = () => {
        // Update the users array with the edited data
        const updatedUsers = users.map((user) =>
            user.id === editableUserId ? { ...user, ...editedData } : user
        );
        setUsers(updatedUsers);

        setEditableUserId(null); // Reset editableUserId after saving
        setEditedData({}); // Reset editedData after saving
    };

    const handleCancel = () => {
        setEditableUserId(null); // Reset editableUserId after canceling
        setEditedData({}); // Reset editedData after canceling
    };

    // Function to delete a row
    const handleDeleteButton = (userId) => {
        // In-memory deletion logic
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);

        // Deselect the deleted user if it was selected
        setSelectedRows((prevSelectedRows) =>
            prevSelectedRows.filter((id) => id !== userId)
        );
    };

    return (
        <div className="flex justify-end space-x-2"> {/* Updated this line */}
            {editableUserId === user.id ? (
                // Editable mode actions
                <>
                    <button
                        onClick={handleSave}
                        className="bg-white text-green-500 px-3 py-1 rounded-md cursor-pointer border-2 border-gray-200"
                    >
                        <FaSave />
                    </button>
                    <button
                        onClick={handleCancel}
                        className="bg-white text-red-500 px-3 py-1 rounded-md cursor-pointer  border-2 border-gray-200"
                    >
                        <FaTimes />
                    </button>
                </>
            ) : (
                // Non-editable mode actions
                <>
                    <button
                        onClick={() => handleEdit(user.id)}
                        className="bg-white text-blue-500 px-3 py-1 rounded-md cursor-pointer  border-2 border-gray-200"
                    >
                        <FaEdit />
                    </button>
                    <button
                        onClick={() => handleDeleteButton(user.id)}
                        className="bg-white text-red-500 px-3 py-1 rounded-md cursor-pointer  border-2 border-gray-200"
                    >
                        <FaTrash />
                    </button>
                </>
            )}
        </div>
    );
}

export default EditMode;
