import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';

const Detail = () => {
  const { id } = useParams();
  const [staff, setStaff] = useState(null);

  useEffect(() => {
    // Fetch staff details from your API or data source based on the ID
    // For this example, we'll use a mock staffData array
    const fetchStaffDetails = async () => {
      try {
        const response = await fetch(`https://6498fee479fbe9bcf83e8bc7.mockapi.io/user/${id}`);
        const data = await response.json();
        setStaff(data);
      } catch (error) {
        console.log('Error fetching staff details:', error);
      }
    };

    fetchStaffDetails();
  }, [id]);

  if (!staff) {
    return <div>Loading...</div>;
  }

  const { name, address, age, avatar, createdAt } = staff;
  const formattedDate = moment(createdAt).format('DD-MM-YYYY HH:mm:ss');

  return (
    <div>
      <h1>Staff Details</h1>
      <div>
        <img src={avatar} alt={name} style={{ width: '200px', height: '200px' }} />
        <div>
          <h3>Name: {name}</h3>
          <p>Address: {address}</p>
          <p>Age: {age}</p>
          <p>Created Date: {formattedDate}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;