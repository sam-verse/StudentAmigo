import { useEffect, useState } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import { auth } from '../utils/firebase';
import Header from './Header';

const ExplorePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    if (user) {
      const db = getDatabase();
      const userRef = ref(db, `students/${user.uid}`);
      
      onValue(userRef, (snapshot) => {
        const data = snapshot.val();
        setUserData(data);
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [user]);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      {userData && (
        <div>
          <h2 className='text-2xl p-4 m-4 font-bold'>Welcome, {userData.academicDetails.name}</h2>

          {/* Displaying Academic Details */}
          <div className='p-4 m-4 bg-white shadow rounded-lg'>
            <h3 className='text-xl font-semibold'>Academic Details</h3>
            
            <p><strong>School Name:</strong> {userData.academicDetails.schoolName}</p>
            <p><strong>School Location:</strong> {userData.academicDetails.schoolLocation}</p>

           
          </div>
        </div>
      )}
    </div>
  );
};

export default ExplorePage;
