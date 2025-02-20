import React, { useState, useEffect } from 'react';
import './datafetch.css';

function DataFetch({setPage}) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleScroll = (event) => {
    const bottom = event.target.scrollHeight === event.target.scrollTop + event.target.clientHeight;
    if (bottom && !loading) {
      setLoading(true);
      // เพิ่มข้อมูลเมื่อเลื่อนถึงท้าย
      setTimeout(() => {
        setLoading(false);
      }, 1000); // ล่าช้าเพื่อให้ดูเหมือนการโหลด
    }
  };

  return (
    <div className='container' onScroll={handleScroll}>
              <button className="" onClick={() => setPage("app")}>
        Back to App
      </button>
      <h1 className='title'>User Data</h1>
      <ul className='userList'>
        {users.map(user => (
          <li key={user.id} className='userItem'>
            <h3 className='userName'>{user.name}</h3>
            <p className='userInfo'>Email: {user.email}</p>
            <p className='userInfo'>Address: {user.address.street}, {user.address.city}</p>
          </li>
        ))}
      </ul>

      {loading && <div className='loading'>Loading...</div>}
      
    </div>
    
  );
}

export default DataFetch;
