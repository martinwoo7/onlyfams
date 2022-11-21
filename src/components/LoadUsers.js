import React, { useState, useEffect } from 'react';
import axios from 'axios'
import UsersList from './UsersList';

const LoadUsers = () => {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    useEffect(() => {
        const loadUsers = async () => {
            try {
                setIsLoading(true);
                const response = await axios
                    .get(`https://randomuser.me/api/?page=${page}&results=3`);
                setUsers([...users, ...response.data.results]);
                setErrorMsg('');
            } catch (error) {
                setErrorMsg('Error while loading data. Try again layer.');
            } finally {
                setIsLoading(false);
            }
        };
        loadUsers();
    }, [page]);

    const loadMore = () => {
        setPage((page) => page + 1);
    }

    return (
        <div className='container'>
            <UsersList users={users} />
            {errorMsg && <p className='errorMsg'>{errorMsg}</p>}
            <div className='load-more d-flex justify-content-center align-items-center'>
                <button
                    onClick={loadMore}
                    className="btn mb-4"
                >
                    {isLoading ? 'Loading...' : 'SHOW MORE'}
                </button>
            </div>
        </div>
    )
}
export default LoadUsers;