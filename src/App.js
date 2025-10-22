import React, { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import LocationModal from './components/common/LocationModal';
import Home from './pages/Home';
import Shelters from './pages/Shelters';
import Missing from './pages/Missing';
import Adoption from './pages/Adoption';
import Login from './pages/Login';
import Signup from './pages/Signup';
import VolunteerSignup from './pages/VolunteerSignup';
import ShelterSignup from './pages/ShelterSignup';
import VolunteerMyPage from './pages/VolunteerMyPage';
import MyPage from './pages/MyPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRegion, setSelectedRegion] = useState('강남구');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [likedItems, setLikedItems] = useState(new Set());
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState(null); // 'volunteer', 'shelter', null

  const toggleLike = (itemId) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const pageProps = {
    currentPage,
    setCurrentPage,
    selectedRegion,
    setSelectedRegion,
    isLocationModalOpen,
    setIsLocationModalOpen,
    likedItems,
    toggleLike,
    isLoggedIn,
    setIsLoggedIn,
    userType,
    setUserType
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        isLoggedIn={isLoggedIn}
        userType={userType}
      />

      <main className="max-w-7xl mx-auto p-6">
        {isLocationModalOpen && (
          <LocationModal 
            onClose={() => setIsLocationModalOpen(false)}
            setSelectedRegion={setSelectedRegion}
          />
        )}

        {currentPage === 'home' && <Home {...pageProps} />}
        {currentPage === 'shelters' && <Shelters {...pageProps} />}
        {currentPage === 'missing' && <Missing {...pageProps} />}
        {currentPage === 'adoption' && <Adoption {...pageProps} />}
        {currentPage === 'login' && <Login setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} setUserType={setUserType} />}
        {currentPage === 'signup' && <Signup setCurrentPage={setCurrentPage} />}
        {currentPage === 'volunteer-signup' && <VolunteerSignup setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} setUserType={setUserType} />}
        {currentPage === 'shelter-signup' && <ShelterSignup setCurrentPage={setCurrentPage} setIsLoggedIn={setIsLoggedIn} setUserType={setUserType} />}
        {currentPage === 'mypage' && userType === 'volunteer' && <VolunteerMyPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'mypage' && userType === 'shelter' && <MyPage setCurrentPage={setCurrentPage} />}
      </main>

      <Footer />
    </div>
  );
}