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
    <div className="bg-gray-50 min-h-screen">
      <Header />
      
        <div className="max-w-7xl mx-auto p-6">
        <h2 className='text-2xl p-4 m-4 font-bold'>Welcome, {userData.academicDetails.name}</h2>
          <p className="text-lg text-gray-600 mb-8">
            Discover personalized 1-on-1 career counseling and professional guidance sessions 
            to help you navigate your career path and achieve your goals.
          </p>

          {/* Carousel Section */}
          <div className="overflow-hidden relative p-4 bg-white shadow-md rounded-lg">
            <div className="flex animate-slide space-x-4">
              <div className="min-w-[300px] p-6 bg-blue-100 text-blue-900 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3">Resume Building</h3>
                <p className="mb-3">1-on-1 session to craft a compelling resume that stands out to employers.</p>
                <p className="font-bold mb-6">Session: 9:00 AM</p>
                <button className="bg-blue-700 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Join Session</button>
              </div>
              <div className="min-w-[300px] p-6 bg-green-100 text-green-900 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3">Interview Preparation</h3>
                <p className="mb-3">Professional guidance on how to excel in your interviews.</p>
                <p className="font-bold mb-6">Session: 11:00 AM</p>
                <button className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300">Join Session</button>
              </div>
              <div className="min-w-[300px] p-6 bg-purple-100 text-purple-900 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3">Career Path Planning</h3>
                <p className="mb-3">1-on-1 session to discuss your goals and plan your career trajectory.</p>
                <p className="font-bold mb-6">Session: 1:00 PM</p>
                <button className="bg-purple-700 text-white py-2 px-4 rounded hover:bg-purple-600 transition duration-300">Join Session</button>
              </div>
              <div className="min-w-[300px] p-6 bg-red-100 text-red-900 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-3">Networking Strategies</h3>
                <p className="mb-3">Professional guidance on building a strong professional network.</p>
                <p className="font-bold mb-6">Session: 3:00 PM</p>
                <button className="bg-red-700 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300">Join Session</button>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default ExplorePage;
