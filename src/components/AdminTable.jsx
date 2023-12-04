// Importing necessary modules and components
import { useState } from 'react';
import Pagination from '@/components/Pagination';
import SearchAndDelete from '@/components/SearchAndDelete';
import RowSelected from '@/components/RowSelected';
import Table from '@/components/Table';

const AdminTable = ({ users, setUsers }) => {
    const itemsPerPage = 10;
    const totalPages = Math.ceil(users.length / itemsPerPage);
    const [selectedRows, setSelectedRows] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className="w-full p-4 bg-white shadow-md rounded-md">
  
            <SearchAndDelete
                setSearchTerm={setSearchTerm}
                users={users}
                selectedRows={selectedRows}
                setUsers={setUsers}
                setSelectedRows={setSelectedRows}
            />

            <Table
                users={users}
                setUsers={setUsers}
                searchTerm={searchTerm}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
            />

            <Pagination
                searchTerm={searchTerm}
                users={users}
                setCurrentPage={setCurrentPage}
                itemsPerPage={itemsPerPage}
                currentPage={currentPage}
                totalPages={totalPages}
            />

            <RowSelected selectedRows={selectedRows} users={users} currentPage={currentPage} totalPages={totalPages}/>
        </div>
    );
};

export default AdminTable;
