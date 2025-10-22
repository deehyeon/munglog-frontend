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
                <span className="mr-2">🏠</span> 보호소 정보
              </button>
              <button
                onClick={() => setActiveMenu('volunteer-management')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                  activeMenu === 'volunteer-management'
                    ? 'bg-red-50 text-red-500 font-semibold'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <span className="mr-2">📝</span> 봉사 신청 내역 관리
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

            {activeMenu === 'volunteer-management' && (
              <VolunteerManagement />
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
  const [showDogProfileModal, setShowDogProfileModal] = useState(false);
  const [editingDog, setEditingDog] = useState(null);
  const [showPhotoUpload, setShowPhotoUpload] = useState(false);

  const [shelterData] = useState({
    name: '강남 보호소',
    breed: '종: 홍길동',
    managerEmail: 'ukaulaularu@naver.com',
    managerPhone: '010-0000-0000',
    url1: '인스타그램 URL',
    url2: '블로그 URL',
    openingHours: '09:00 - 18:00',
    volunteerDay: '매 3째주',
    capacity: '200건',
    staff: '10명',
    description: `고수님은 능가 빙 현저 하였으며, 품에 웃 것은 쓸쓸하랴 쓸쓸하랴...[생략]

고수님은 우니의 할 가기 사랑의 새 가지에 하여도 산 쓸쓸하랴 것이다.
기름 아니한 우는 끓는 옷을 것은 위하여서, 것은 보라, 거기도 쓸쓸한 아름다우나.

고수님은 우니의 할 가기 사랑의 새 가지에 하여도 산 쓸쓸하랴 것이다.
기름 아니한 우는 끓는 옷을 것은 위하여서, 것은 보라, 거기도 쓸쓸한 아름다우나.

납의 원뜨로 가기의 것은 얼마나 뜨이는 밑이 없어도 아는 인간만의 것은 크다도
몇이 야자의 자신 같이 인간이 생병을 위해서나다.

몸도한이 자신과 구력로서 별태를서뿐이다. 날은 평일일 디뎌지다니 모내에터서있는 그들에게 약자를 야속도록한는다.`
  });

  const handleAddDog = () => {
    setEditingDog(null);
    setShowDogProfileModal(true);
  };

  const handleEditDog = (dog) => {
    setEditingDog(dog);
    setShowDogProfileModal(true);
  };

  const handlePhotoUpload = (e) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      console.log('Photos uploaded:', files);
      // 실제 업로드 로직 구현
    }
  };

  // 수정 화면
  if (isEditMode) {
    return <ShelterInfoEdit onCancel={() => setIsEditMode(false)} onSave={() => setIsEditMode(false)} />;
  }

  // 읽기 전용 화면
  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800">보호소 정보</h1>
        <button 
          onClick={() => setIsEditMode(true)}
          className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold rounded-lg transition-colors text-sm"
        >
          수정하기
        </button>
      </div>

      {/* 보호소 기본 정보 */}
      <div className="flex gap-6 mb-8">
        {/* 프로필 이미지 */}
        <div className="w-32 h-32 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-6xl">🐶</span>
        </div>

        {/* 정보 */}
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-800 mb-3">{shelterData.name}</h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">종:</span>
              <span className="text-gray-800">{shelterData.breed}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">담당자 이메일:</span>
              <span className="text-gray-800">{shelterData.managerEmail}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">담당자 전화번호:</span>
              <span className="text-gray-800">{shelterData.managerPhone}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">URL:</span>
              <span className="text-blue-600">{shelterData.url1}</span>
            </div>
            <div className="flex justify-between col-start-2">
              <span className="text-gray-600">URL:</span>
              <span className="text-blue-600">{shelterData.url2}</span>
            </div>
          </div>
        </div>
      </div>

      {/* 운영 정보 */}
      <div className="grid grid-cols-4 gap-4 mb-8 text-center">
        <div>
          <p className="text-xs text-gray-500 mb-1">보호소 운영 시간 / 시간</p>
          <p className="font-bold text-gray-800">{shelterData.openingHours}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">봉사 가능 날짜 / 시간</p>
          <p className="font-bold text-gray-800">{shelterData.volunteerDay}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">보호소 면적 수용</p>
          <p className="font-bold text-gray-800">{shelterData.capacity}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">인원</p>
          <p className="font-bold text-gray-800">{shelterData.staff}</p>
        </div>
      </div>

      {/* 보호소 소개 */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">보호소 소개글</h3>
        <div className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
          {shelterData.description}
        </div>
      </div>

      {/* 지도 */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-3">공공데이터: 출퇴 성싱사 동물판매업 등록 수수</h3>
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">지도 영역</span>
        </div>
      </div>

      {/* 탭 */}
      <div className="flex gap-4 border-b mb-6">
        <button className="px-4 py-2 text-red-500 border-b-2 border-red-500 font-semibold">
          보호소 이미지
        </button>
        <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
          리뷰 (2)
        </button>
      </div>

      {/* 보호소 사진 */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">보호소 사진</h3>
          <label className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold rounded-lg transition-colors text-sm cursor-pointer">
            추가하기
            <input 
              type="file" 
              multiple 
              accept="image/*" 
              className="hidden"
              onChange={handlePhotoUpload}
            />
          </label>
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

        {/* 페이지네이션 */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">&lt;</button>
          <button className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full text-sm font-medium">1</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">2</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">3</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">4</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">5</button>
          <span className="text-gray-400">...</span>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">&gt;</button>
        </div>
      </div>

      {/* 강아지 사진 */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-gray-800">강아지 사진</h3>
          <button 
            onClick={handleAddDog}
            className="px-4 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold rounded-lg transition-colors text-sm"
          >
            추가하기
          </button>
        </div>

        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <button
              key={i}
              onClick={() => handleEditDog({ id: i, name: '강아지 이름', breed: '종', ageStatus: '나이 / 상태' })}
              className="border border-yellow-300 rounded-lg p-4 hover:shadow-lg transition-shadow text-left"
            >
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                <span className="text-6xl">🐶</span>
              </div>
              <h4 className="font-bold text-gray-800 text-sm mb-1">강아지 이름</h4>
              <p className="text-xs text-gray-500">종</p>
              <p className="text-xs text-gray-500">나이 / 상태</p>
            </button>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">&lt;</button>
          <button className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full text-sm font-medium">1</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">2</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">3</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">4</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">5</button>
          <span className="text-gray-400">...</span>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">&gt;</button>
        </div>
      </div>

      {/* 강아지 프로필 모달 */}
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

// 보호소 정보 수정 화면
function ShelterInfoEdit({ onCancel, onSave }) {
  const [formData, setFormData] = useState({
    shelterName: '강남 보호소',
    address: '경기도 수원시 영통구 매향로',
    managerName: '홍길동',
    managerEmail: 'ukaulaularu@naver.com',
    managerPhone: '010-0000-0000',
    websiteLinks: ['인스타그램 URL', '블로그 URL'],
    operatingStatus: '',
    openingHours: '09:00 - 18:00',
    volunteerAvailable: '',
    volunteerDay: '매 3째주',
    shelterArea: '200건',
    staff: '10명',
    description: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    alert('보호소 정보가 저장되었습니다.');
    onSave();
  };

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">보호소 정보 수정</h1>

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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm"
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
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            담당자 이메일 <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="managerEmail"
            value={formData.managerEmail}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            담당자 전화번호 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="managerPhone"
            value={formData.managerPhone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            홈페이지/SNS 링크
          </label>
          {formData.websiteLinks.map((link, index) => (
            <input
              key={index}
              type="url"
              value={link}
              onChange={(e) => {
                const newLinks = [...formData.websiteLinks];
                newLinks[index] = e.target.value;
                setFormData(prev => ({ ...prev, websiteLinks: newLinks }));
              }}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm mb-2"
            />
          ))}
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            보호소 운영 시간
          </label>
          <input
            type="text"
            name="openingHours"
            value={formData.openingHours}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            봉사 가능 날짜
          </label>
          <input
            type="text"
            name="volunteerDay"
            value={formData.volunteerDay}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            보호소 면적
          </label>
          <input
            type="text"
            name="shelterArea"
            value={formData.shelterArea}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            인원
          </label>
          <input
            type="text"
            name="staff"
            value={formData.staff}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-800 mb-2">
            보호소 상세 설명
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="8"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-400 text-sm resize-none"
          />
        </div>
      </div>

      <div className="flex gap-3 mt-8">
        <button 
          onClick={onCancel}
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
      </div>
    </div>
  );
}

// 봉사 신청 내역 관리 탭
function VolunteerManagement() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">봉사 신청 내역 관리</h1>
      <p className="text-gray-600">봉사 신청 내역 관리 화면입니다.</p>
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

  const handleDelete = () => {
    if (window.confirm('강아지 프로필을 삭제하시겠습니까?')) {
      alert('강아지 프로필이 삭제되었습니다.');
      onClose();
    }
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
            onClick={isEdit ? handleDelete : onClose}
            className="flex-1 py-3 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50"
          >
            {isEdit ? '삭제하기' : '닫기'}
          </button>
          <button 
            onClick={handleSubmit}
            className="flex-1 py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-800 rounded-lg text-sm font-bold transition-colors"
          >
            저장하기
          </button>
        </div>
      </div>
    </div>
  );
}
