import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [staffData, setStaffData] = useState([]);

  useEffect(() => {
    const fetchStaffData = async () => {
      try {
        const response = await fetch('https://6498fee479fbe9bcf83e8bc7.mockapi.io/user');
        const data = await response.json();
        setStaffData(data);
      } catch (error) {
        console.log('Error fetching staff data:', error);
      }
    };

    fetchStaffData();
  }, []);

//   const attractiveStaffs = staffData.filter((staff) => staff.attractive);

  return (
    <div>
      <h1>Staffs</h1>
      {staffData.map((staff) => (
        <div key={staff.id}>
          <h3>
            <Link to={`/details/${staff.id}`}>{staff.name}</Link>
          </h3>
          <p>Address: {staff.address}</p>
          <p>Age: {staff.age}</p>
          <img src={staff.avatar} alt={staff.name} />
        </div>
      ))}
    </div>
  );
};

export default Home;
