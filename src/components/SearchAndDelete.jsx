// Importing necessary modules and components
import { useState } from "react";
import { FaSearch, FaTrash } from 'react-icons/fa';

const SearchAndDelete = ({ setSearchTerm, users, selectedRows, setUsers, setSelectedRows }) => {
    const [searchInput, setSearchInput] = useState('');

    // Function to handle search
    const handleSearch = (value, e) => {
        setSearchInput(value);
        // Check if the Enter key is pressed to trigger search
        if (e.key === 'Enter') {
            setSearchTerm(value);
        }
    };

    // Function to handle Delete Selected rows
    const handleDeleteSelected = () => {
        // Remove selected rows from the users array
        const updatedUsers = users.filter((user) => !selectedRows.includes(user.id));
        // Update state to reflect the changes
        setUsers(updatedUsers);
        setSelectedRows([]);
    };

    return (
        <div className="flex items-center justify-between mb-4">
            {/* Search Bar */}
            <div className="flex items-center">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchInput}
                    onChange={(e) => handleSearch(e.target.value, e)}
                    onKeyPress={(e) => handleSearch(searchInput, e)}
                    className="border rounded-md p-2 mr-2"
                />
                <button
                    onClick={() => setSearchTerm(searchInput)}
                    className="bg-blue-500 text-white px-4 py-3 rounded-md"
                >
                    <FaSearch />
                </button>
            </div>

            {/* Delete Selected button with trash icon */}
            <button
                onClick={handleDeleteSelected}
                className="flex items-center bg-red-300 hover:bg-red-500 text-white px-4 py-2 rounded-md"
            >
                <FaTrash />
            </button>
        </div>
    );
};

export default SearchAndDelete;
