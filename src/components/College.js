import React, { useEffect, useState } from 'react';

function CollegeData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        fetch('http://localhost:3001/collegedata', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            setData(data);
            setLoading(false);
        })
        .catch(err => {
            console.error('Error fetching data:', err);
            setError(err);
            setLoading(false);
        });
    }, []);
    

    if (loading) return <p>Loading data...</p>;
    if (error) return <p>Error loading data: {error.message}</p>;

    
    return (
        <div>
            <h1>College Data</h1>
            <ul>
                {data.map((college) => (
                    <li key={college.id}>
                        <strong>{college.name}</strong> - {college.course}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CollegeData;
