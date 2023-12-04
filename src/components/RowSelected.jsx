// Importing necessary modules and components
const RowSelected = ({ selectedRows, users, currentPage, totalPages }) => {
    return (
        <div className="mt-4 flex items-center justify-between">
            <span className='p-2 font-semibold mr-2'> Page {currentPage} of {totalPages} </span>
            {/* To show how many rows are selected out of total rows */}
            <span className='font-bold'>{selectedRows.length} of {users.length} row(s) selected</span>
        </div>
    );
};

export default RowSelected;
