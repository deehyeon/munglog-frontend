import React, { useState } from 'react';

export default function ShelterMyPage() {
  const [activeMenu, setActiveMenu] = useState('info');
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [showPhoneModal, setShowPhoneModal] = useState(false);
  const [showNameModal, setShowNameModal] = useState(false);

  const userData = {
    email: 'hs*******@n****.com',
    name: '홍길동',
    phone: '010-****-9217'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto py-8 px-4">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 bg-white rounded-2xl shadow-md p-6 h-fit">
            <h2 className="text-xl font-bold text-gray-800 mb-6">마이페이지</h2>
            <nav className="space-y-2">
              <button
                onClick={() => setActiveMenu('info')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeMenu === 'info'
                    ? 'bg-red-50 text-red-500 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">👤</span> 내 정보
              </button>
              <button
                onClick={() => setActiveMenu('shelter')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeMenu === 'shelter'
                    ? 'bg-red-50 text-red-500 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">🤝</span> 보호소 정보
              </button>
              <button
                onClick={() => setActiveMenu('dashboard')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeMenu === 'dashboard'
                    ? 'bg-red-50 text-red-500 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">📝</span> 봉사 대시보드
              </button>
              <button
                onClick={() => setActiveMenu('management')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeMenu === 'management'
                    ? 'bg-red-50 text-red-500 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">🐕</span> 등록한 보호소
              </button>
            </nav>
            
            <button className="w-full mt-8 px-4 py-3 text-left text-gray-500 hover:text-gray-700 transition-colors text-sm flex items-center gap-2">
              <span>🚪</span> 로그아웃
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {activeMenu === 'info' && (
              <MyInfo 
                userData={userData}
                setShowPasswordModal={setShowPasswordModal}
                setShowPhoneModal={setShowPhoneModal}
                setShowNameModal={setShowNameModal}
              />
            )}

            {activeMenu === 'shelter' && (
              <ShelterInfo />
            )}

            {activeMenu === 'dashboard' && (
              <VolunteerDashboard />
            )}

            {activeMenu === 'management' && (
              <RegisteredShelters />
            )}
          </div>
        </div>
      </div>

      {/* Modals */}
      {showPasswordModal && (
        <PasswordChangeModal onClose={() => setShowPasswordModal(false)} />
      )}
      {showPhoneModal && (
        <PhoneChangeModal onClose={() => setShowPhoneModal(false)} />
      )}
      {showNameModal && (
        <NameChangeModal onClose={() => setShowNameModal(false)} />
      )}
    </div>
  );
}

// 내 정보 탭
function MyInfo({ userData, setShowPasswordModal, setShowPhoneModal, setShowNameModal }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">기본 정보</h1>

      {/* 이메일 */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-800 mb-2">이메일</h3>
            <p className="text-gray-600 text-sm">{userData.email}</p>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-xs text-gray-500">혜택/이벤트 정보 알림 수신 (이메일)</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
              </label>
            </div>
            <p className="text-xs text-gray-400 mt-1">• CONIC 및 제휴사의 소식/혜택/이벤트 광고 정보를 받으실 수 있습니다.</p>
            <p className="text-xs text-gray-400">• 광고 및 혜택의 운영방침은 수시 변경 여부와 상관없이 발송됩니다.</p>
          </div>
        </div>
      </div>

      {/* 이름 */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-800 mb-2">이름</h3>
            <p className="text-gray-600 text-sm">{userData.name}</p>
          </div>
          <button
            onClick={() => setShowNameModal(true)}
            className="text-red-500 hover:text-red-600 font-medium text-sm flex items-center gap-1"
          >
            홍길동
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* 전화번호 */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-base font-semibold text-gray-800 mb-2">전화번호</h3>
            <p className="text-gray-600 text-sm">{userData.phone}</p>
            <div className="flex items-center gap-2 mt-2">
              <p className="text-xs text-gray-500">혜택/이벤트 정보 알림 수신 (앱 알림 또는 문자 메시지)</p>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-red-500"></div>
              </label>
            </div>
            <p className="text-xs text-gray-400 mt-1">• CONIC 또는 문자 메시지를 발송이 발송될 수 있습니다.</p>
            <p className="text-xs text-gray-400">• CONIC 및 제휴사의 소식/혜택/이벤트-광고 정보를 받으실 수 있습니다.</p>
          </div>
          <button
            onClick={() => setShowPhoneModal(true)}
            className="text-red-500 hover:text-red-600 font-medium text-sm flex items-center gap-1"
          >
            {userData.phone}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* 비밀번호 변경 */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button
          onClick={() => setShowPasswordModal(true)}
          className="flex items-center justify-between w-full"
        >
          <h3 className="text-base font-semibold text-gray-800">비밀번호 변경</h3>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 서비스 이용약관 */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button className="flex items-center justify-between w-full">
          <h3 className="text-base font-semibold text-gray-800">서비스 이용약관</h3>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 개인정보 수집 및 이용 */}
      <div className="mb-6 pb-6 border-b border-gray-200">
        <button className="flex items-center justify-between w-full">
          <h3 className="text-base font-semibold text-gray-800">개인정보 수집 및 이용</h3>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* 저작권에 관한 약관 */}
      <div className="mb-6">
        <button className="flex items-center justify-between w-full">
          <h3 className="text-base font-semibold text-gray-800">저작권에 관한 약관</h3>
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}

// 보호소 정보 탭
function ShelterInfo() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({
    shelterName: '강남 보호소',
    address: '경기도 수원시 영통구 매향로',
    managerName: '홍길동',
    websiteLinks: [''],
    operatingStatus: '',
    openingHours: '',
    volunteerAvailable: '',
    volunteerTime: '',
    shelterArea: '',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    alert('보호소 정보가 저장되었습니다.');
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setIsEditMode(false);
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-800">보호소 정보 수정</h1>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            보호소 이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="shelterName"
            value={formData.shelterName}
            onChange={handleInputChange}
            placeholder="강남 보호소"
            disabled={!isEditMode}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm disabled:bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            보호소 주소 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            placeholder="경기도 수원시 영통구 매향로"
            disabled={!isEditMode}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm disabled:bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            담당자 이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="managerName"
            value={formData.managerName}
            onChange={handleInputChange}
            placeholder="홍길동"
            disabled={!isEditMode}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm disabled:bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            홈페이지/SNS 링크 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="보호소 이용을 알려주세요."
            disabled={!isEditMode}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm disabled:bg-gray-50"
          />
          {isEditMode && (
            <button className="mt-2 text-red-500 text-lg hover:text-red-600">
              +
            </button>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            보호소 운영 여부 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="operatingStatus"
            value={formData.operatingStatus}
            onChange={handleInputChange}
            placeholder="소자만 입력해주세요."
            disabled={!isEditMode}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm disabled:bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            보호소 운영 시간 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="openingHours"
            value={formData.openingHours}
            onChange={handleInputChange}
            placeholder="소자만 입력해주세요."
            disabled={!isEditMode}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm disabled:bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            봉사 가능 여부 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="volunteerAvailable"
            value={formData.volunteerAvailable}
            onChange={handleInputChange}
            placeholder="소자만 입력해주세요."
            disabled={!isEditMode}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm disabled:bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            봉사 가능 시간 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="volunteerTime"
            value={formData.volunteerTime}
            onChange={handleInputChange}
            placeholder="소자만 입력해주세요."
            disabled={!isEditMode}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm disabled:bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            보호소 면적 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="shelterArea"
            value={formData.shelterArea}
            onChange={handleInputChange}
            placeholder="소자만 입력해주세요."
            disabled={!isEditMode}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm disabled:bg-gray-50"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            보호소 상세 설명 <span className="text-red-500">*</span>
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="보호소 상세 설명을 입력해주세요."
            disabled={!isEditMode}
            rows="5"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm disabled:bg-gray-50 resize-none"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-6">
        {isEditMode ? (
          <>
            <button 
              onClick={handleCancel}
              className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50"
            >
              취소하기
            </button>
            <button 
              onClick={handleSave}
              className="flex-1 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-lg text-sm font-bold transition-colors"
            >
              저장하기
            </button>
          </>
        ) : (
          <button 
            onClick={() => setIsEditMode(true)}
            className="flex-1 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-lg text-sm font-bold transition-colors"
          >
            수정하기
          </button>
        )}
      </div>
    </div>
  );
}

// 등록한 보호소 탭 (보호소 사진 + 강아지 사진)
function RegisteredShelters() {
  const [showDogProfileModal, setShowDogProfileModal] = useState(false);
  const [editingDog, setEditingDog] = useState(null);

  const handleAddDog = () => {
    setEditingDog(null);
    setShowDogProfileModal(true);
  };

  const handleEditDog = (dog) => {
    setEditingDog(dog);
    setShowDogProfileModal(true);
  };

  return (
    <div className="space-y-6">
      {/* 보호소 사진 */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">보호소 사진</h2>
          <button className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold rounded-lg transition-colors text-sm">
            수정하기
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="aspect-square bg-gray-200 rounded-lg flex items-center justify-center relative group overflow-hidden">
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Crect fill='%23ddd' width='200' height='200'/%3E%3C/svg%3E" 
                alt="보호소 사진"
                className="w-full h-full object-cover"
              />
              <button className="absolute top-2 right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* 강아지 사진 */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-800">강아지 사진</h2>
          <button 
            onClick={handleAddDog}
            className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold rounded-lg transition-colors text-sm"
          >
            등록하기
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleEditDog({ id: i, name: '강아지 이름', breed: '종', ageStatus: '나이 / 상태' })}
              className="border border-yellow-300 rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-6xl">🐶</span>
              </div>
              <h3 className="font-bold text-gray-800 text-sm mb-1">강아지 이름</h3>
              <p className="text-xs text-gray-500">종</p>
              <p className="text-xs text-gray-500">나이 / 상태</p>
            </button>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
            &lt;
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full text-sm font-medium">1</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">2</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">3</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">4</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">5</button>
          <span className="text-gray-400">...</span>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
            &gt;
          </button>
        </div>
      </div>

      {showDogProfileModal && (
        <DogProfileModal 
          onClose={() => setShowDogProfileModal(false)}
          isEdit={editingDog !== null}
          dogData={editingDog}
        />
      )}
    </div>
  );
}

// 봉사 대시보드 탭
function VolunteerDashboard() {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 5)); // 2025년 6월
  const [showApplicationModal, setShowApplicationModal] = useState(false);

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  // 월요일을 0으로 하기 위해 조정
  const adjustedFirstDay = firstDayOfMonth === 0 ? 6 : firstDayOfMonth - 1;

  const volunteeredDays = [8, 15, 20, 27]; // 봉사 예정 날짜

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">봉사 대시보드</h1>

      {/* 캘린더와 통계 */}
      <div className="bg-gray-100 rounded-2xl p-6 mb-8">
        <div className="flex gap-6">
          {/* 캘린더 */}
          <div className="flex-1 bg-white rounded-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={prevMonth}
                className="p-2 hover:bg-gray-100 rounded"
              >
                &lt;
              </button>
              <h2 className="text-lg font-bold">
                {currentMonth.getFullYear()}년 {String(currentMonth.getMonth() + 1).padStart(2, '0')}월
              </h2>
              <button
                onClick={nextMonth}
                className="p-2 hover:bg-gray-100 rounded"
              >
                &gt;
              </button>
            </div>

            {/* 요일 */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {['월', '화', '수', '목', '금', '토', '일'].map((day, idx) => (
                <div 
                  key={day} 
                  className={`text-center text-xs font-semibold py-2 ${
                    idx === 0 ? 'text-red-500' : idx === 6 ? 'text-blue-500' : 'text-gray-600'
                  }`}
                >
                  {day}
                </div>
              ))}
            </div>

            {/* 날짜 */}
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: adjustedFirstDay }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const isVolunteered = volunteeredDays.includes(day);
                const dayOfWeek = (adjustedFirstDay + i) % 7;
                
                return (
                  <button
                    key={day}
                    className={`aspect-square flex items-center justify-center rounded-lg text-xs font-medium relative ${
                      isVolunteered
                        ? 'bg-blue-50'
                        : 'hover:bg-gray-50'
                    } ${
                      dayOfWeek === 0 ? 'text-red-500' : dayOfWeek === 6 ? 'text-blue-500' : 'text-gray-700'
                    }`}
                  >
                    {day}
                    {isVolunteered && (
                      <div className="absolute bottom-0 right-0 text-base">🐕</div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 통계 */}
          <div className="w-64 space-y-4">
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-2">새로 들어온 봉사 신청 내역</p>
              <p className="text-3xl font-bold text-gray-800 mb-3">3건</p>
              <button 
                onClick={() => setShowApplicationModal(true)}
                className="w-full py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50"
              >
                승인하기
              </button>
            </div>
            <div className="bg-white rounded-xl p-4 text-center">
              <p className="text-sm text-gray-600 mb-2">이달의 봉사 갯수</p>
              <p className="text-3xl font-bold text-gray-800 mb-3">14건</p>
              <button className="w-full py-2 bg-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-400">
                거절하기
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 오늘의 봉사 목록 */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-gray-500">로그아웃</span>
          <h2 className="text-xl font-bold text-gray-800">오늘의 봉사 목록</h2>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <VolunteerCard key={i} type="today" />
          ))}
        </div>
      </div>

      {/* 예정된 봉사 목록 */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">예정된 봉사 목록</h2>
        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <VolunteerCard key={i} type="scheduled" />
          ))}
        </div>
      </div>

      {/* 페이지네이션 */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
          &lt;
        </button>
        <button className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full text-sm font-medium">1</button>
        <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">2</button>
        <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">3</button>
        <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">4</button>
        <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">5</button>
        <span className="text-gray-400">...</span>
        <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
          &gt;
        </button>
      </div>

      {showApplicationModal && (
        <VolunteerApplicationModal onClose={() => setShowApplicationModal(false)} />
      )}
    </div>
  );
}

// 봉사 카드 컴포넌트
function VolunteerCard({ type }) {
  return (
    <div className="bg-gray-100 rounded-xl p-6">
      <div className="mb-4">
        <h3 className="font-bold text-gray-800 mb-2">너네임</h3>
        <div className="space-y-1 text-sm text-gray-600">
          <div className="flex justify-between">
            <span>봉사 회수</span>
            <span>7회</span>
            <span className="ml-4">봉사 날짜</span>
            <span>1회월</span>
          </div>
          <div className="flex justify-between">
            <span>봉사 시간</span>
            <span>999+</span>
            <span className="ml-4">봉사 시간</span>
            <span>999+</span>
          </div>
          <div className="flex justify-between">
            <span>우리 보호소 방문 회수</span>
            <span>4회</span>
            <span className="ml-4">봉사 인원수</span>
            <span>999+</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50">
          승인하기
        </button>
        <button className="flex-1 py-2 bg-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-400">
          거절하기
        </button>
      </div>
    </div>
  );
}

// 모달들

function PasswordChangeModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-6">비밀번호 변경</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              현재 비밀번호 <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="현재 비밀번호를 입력해주세요."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              새 비밀번호 <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              placeholder="영문, 숫자, 특수문자 조합하여 8-20자"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 mb-3 text-sm"
            />
            <input
              type="password"
              placeholder="비밀번호 확인"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 text-sm"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50"
          >
            취소
          </button>
          <button className="flex-1 py-3 bg-red-500 text-white rounded-lg text-sm font-bold hover:bg-red-600">
            변경완료
          </button>
        </div>
      </div>
    </div>
  );
}

function PhoneChangeModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-6">전화번호 변경</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              전화번호 <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <input
                type="tel"
                placeholder="전화번호 입력"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 text-sm"
              />
              <button className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-gray-300">
                인증번호 전송
              </button>
            </div>
          </div>

          <div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="인증번호 입력"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 text-sm"
              />
              <button className="px-4 py-3 bg-gray-200 text-gray-700 rounded-lg text-sm font-medium whitespace-nowrap hover:bg-gray-300">
                인증번호 확인
              </button>
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50"
          >
            취소
          </button>
          <button className="flex-1 py-3 bg-red-500 text-white rounded-lg text-sm font-bold hover:bg-red-600">
            변경완료
          </button>
        </div>
      </div>
    </div>
  );
}

function NameChangeModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-6">이름 변경</h2>
        
        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            이름 변경 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            placeholder="이름을 입력해주세요."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500 text-sm"
          />
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50"
          >
            취소
          </button>
          <button className="flex-1 py-3 bg-red-500 text-white rounded-lg text-sm font-bold hover:bg-red-600">
            변경 완료
          </button>
        </div>
      </div>
    </div>
  );
}

function DogProfileModal({ onClose, isEdit, dogData }) {
  const [imagePreview, setImagePreview] = useState(null);
  const [formData, setFormData] = useState({
    name: dogData?.name || '',
    breed: dogData?.breed || '',
    age: dogData?.age || '',
    gender: dogData?.gender || ''
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    alert(isEdit ? '강아지 프로필이 수정되었습니다.' : '강아지 프로필이 등록되었습니다.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-6">강아지 프로필</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              강아지 이름 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="장비 이름을 입력해주세요."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              종 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="breed"
              value={formData.breed}
              onChange={handleInputChange}
              placeholder="소자만 입력해주세요."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              나이 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              placeholder="소자만 입력해주세요."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              성별 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              placeholder="소자만 입력해주세요."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-2">
              사진 업로드 <span className="text-red-500">*</span>
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
              <label className="flex flex-col items-center cursor-pointer">
                <input 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleImageChange}
                />
                {imagePreview ? (
                  <div className="relative">
                    <img src={imagePreview} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
                    <button 
                      className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center"
                      onClick={(e) => {
                        e.preventDefault();
                        setImagePreview(null);
                      }}
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="text-6xl mb-2">🐶</div>
                    <span className="text-gray-400 text-sm">사진 업로드</span>
                  </>
                )}
              </label>
            </div>
            <p className="text-xs text-gray-500 mt-2">5MB이하 파일(jpg, jpeg, png)만 가능합니다.</p>
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50"
          >
            {isEdit ? '삭제하기' : '닫기'}
          </button>
          <button 
            onClick={handleSubmit}
            className="flex-1 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-lg text-sm font-bold transition-colors"
          >
            {isEdit ? '저장하기' : '저장하기'}
          </button>
        </div>
      </div>
    </div>
  );
}

function VolunteerApplicationModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-6">새로 들어온 봉사 신청 내역</h2>
        
        <div className="space-y-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-6">
              <div className="mb-4">
                <h3 className="font-bold text-gray-800 mb-3">너네임</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>봉사 회수</span>
                    <span>7회</span>
                    <span className="ml-8">봉사 날짜</span>
                    <span>1회월</span>
                  </div>
                  <div className="flex justify-between">
                    <span>봉사 시간</span>
                    <span>999+</span>
                    <span className="ml-8">봉사 인원수</span>
                    <span>999+</span>
                  </div>
                  <div className="flex justify-between">
                    <span>우리 보호소 방문 회수</span>
                    <span>4회</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50">
                  승인하기
                </button>
                <button className="flex-1 py-2 bg-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-400">
                  거절하기
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
            &lt;
          </button>
          <button className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full text-sm font-medium">1</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">2</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">3</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">4</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">5</button>
          <span className="text-gray-400">...</span>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
            &gt;
          </button>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 py-3 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
