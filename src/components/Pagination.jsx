// Importing necessary modules
import { useMemo } from 'react';
import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';

const Pagination = ({ searchTerm, users, itemsPerPage, currentPage, totalPages, setCurrentPage }) => {

    // Special function to handle jump to First Page
    const handleFirstPage = () => {
        setCurrentPage(1);
    };

    // Special function to handle jump to Previous Page
    const handlePrevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    // Special function to handle jump to Next Page
    const handleNextPage = () => {
        setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };

    // Special function to handle jump to Last Page
    const handleLastPage = () => {
        setCurrentPage(totalPages);
    };

    // Function to calculate total pages based on filtered results
    const calculateTotalPages = () => {
        const filteredResults = users.filter((user) =>
            Object.values(user).some((value) =>
                value.toString().toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        return Math.ceil(filteredResults.length / itemsPerPage);
    };

    // Update total pages whenever the search term changes
    const totalFilteredPages = useMemo(() => calculateTotalPages(), [searchTerm]);

    // Function to generate number pagination buttons
    const generatePageButtons = () => {
        const pageButtons = [];
        for (let i = 1; i <= totalPages; i++) {
            pageButtons.push(
                <button key={i} onClick={() => setCurrentPage(i)} className='border-2 border-gray-200 rounded-sm px-2 py-1 mx-2'>
                    {i}
                </button>
            );
        }
        return pageButtons;
    };

    return (
        <main>
            {/* Paginations */}
            <div className="flex items-center justify-center mb-4 mt-2 ">
          
                <button onClick={handleFirstPage} className='mx-2 border-2 border-gray-200 rounded-sm p-2'><FaAngleDoubleLeft /></button>
                <button onClick={handlePrevPage} className='mx-2 border-2 border-gray-200 rounded-sm p-2'><FaAngleLeft /></button>

                {/* Display individual page buttons based on filtered results */}
                {totalFilteredPages ? [...Array(totalFilteredPages)].map((_, index) => (
                    <button key={index + 1} onClick={() => setCurrentPage(index + 1)} className='border-2 border-gray-200 rounded-sm px-2 py-1 mx-2'>
                        {index + 1}
                    </button>
                )) : generatePageButtons()
                }

                <button onClick={handleNextPage} className='mx-2 border-2 border-gray-200 rounded-sm p-2'><FaAngleRight /></button>
                <button onClick={handleLastPage} className='mx-2 border-2 border-gray-200 rounded-sm p-2'><FaAngleDoubleRight /></button>
            </div>
        </main>
    )
}

export default Pagination;
