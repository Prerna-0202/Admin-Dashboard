"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';
import AdminTable from '@/components/AdminTable';

const Page = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch data from the given API endpoint
        axios
            .get('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json')
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => console.error('Error fetching data:', error));
    }, []);
  return (
        <div className="bg-gray-200 h-screen flex items-center justify-center">
            <AdminTable
                users={users}
                setUsers={setUsers}
            />
        </div>
  )
}

export default Page