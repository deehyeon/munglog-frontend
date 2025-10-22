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
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - 화면 제일 왼쪽에 고정 */}
      <div className="w-64 bg-white shadow-md flex-shrink-0">
        <div className="p-6">
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
              onClick={() => setActiveMenu('volunteer-dashboard')}
              className={`w-full text-left px-4 py-3 rounded-lg transition-colors ${
                activeMenu === 'volunteer-dashboard'
                  ? 'bg-red-50 text-red-500 font-semibold'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className="mr-2">📊</span> 봉사 대시보드
            </button>
          </nav>
          
          <button className="w-full mt-8 px-4 py-3 text-left text-gray-500 hover:text-gray-700 transition-colors text-sm flex items-center gap-2">
            <span>🚪</span> 로그아웃
          </button>
        </div>
      </div>

      {/* Main Content - 중앙에 넓게 */}
      <div className="flex-1 py-8 px-12 max-w-7xl mx-auto">
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

        {activeMenu === 'volunteer-dashboard' && (
          <VolunteerDashboard />
        )}
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

  const [shelterData] = useState({
    name: '강남 보호소',
    address: '주소:',
    managerName: '황유림',
    managerEmail: 'uiuiuiui@naver.com',
    managerPhone: '010-0000-0000',
    url1: '인스타그램 URL',
    url2: '홈페이지 URL',
    openingHours: '09:00 - 18:00',
    volunteerDay: '약 3개월',
    capacity: '200건',
    staff: '10건',
    description: `고수님은 능가 빙 현저 하였으며, 품에 웃 것은 쓸쓸하랴 쓸쓸하랴.

당신은 1999년 설립된 이래 전력 생산, 송전, 배전 및 판자 산업 분야의 최고 품질의 제품 생산을 목표로 하고 있습니다.
기술, 고객 중심 및 품질에 대한 타협하지 않는 관심은 모두 우리 성공의 기본입니다.

고수님은 회사로서 항상 기존 시장 리더의 추종자로서 비즈니스를 추구하기 보다는 자체 의제를 설정하기 위해 노력합니다.
고수님은 기계 및 전력산업의 고용할 수요를 기반으로 비즈닥속 생산 및 가공기술 개발에서 경쟁력을 확보하고 있으며
초고압을 떠다로맘 일할 제품인 등 부스바를 생산하며 지속적인 성장을 기록하고 있습니다.
부품의 정확한 사양과 신뢰성에 대한 설계, 이해, 기술 및 연구 개발을 제공합니다.
날로 복잡해지고 다양해지는 고객의 요구사항에 적절히 대응하고 혁신을 통해 우수한 부가가치 제품을 제공하기 위해 더욱 경쟁력 있고 역동적인 기업이 되도록 향상 노력하겠습니다.`
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
    }
  };

  if (isEditMode) {
    return <ShelterInfoEdit onCancel={() => setIsEditMode(false)} onSave={() => setIsEditMode(false)} />;
  }

  return (
    <div className="bg-white rounded-2xl shadow-md p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-800">보호소 정보</h1>
        <button 
          onClick={() => setIsEditMode(true)}
          className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold rounded-lg transition-colors text-sm"
        >
          수정하기
        </button>
      </div>

      <div className="flex gap-6 mb-6">
        <div className="w-40 h-40 bg-orange-100 rounded-3xl flex items-center justify-center flex-shrink-0">
          <span className="text-7xl">🐶</span>
        </div>

        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{shelterData.name}</h2>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-gray-600 min-w-[100px]">주소 :</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 min-w-[100px]">대표자명</span>
              <span className="text-gray-800">{shelterData.managerName}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 min-w-[100px]">대표자 이메일</span>
              <span className="text-gray-800">{shelterData.managerEmail}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 min-w-[100px]">대표자 전화번호</span>
              <span className="text-gray-800">{shelterData.managerPhone}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 min-w-[100px]">URL</span>
              <span className="text-blue-600">{shelterData.url1}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-600 min-w-[100px]">URL</span>
              <span className="text-blue-600">{shelterData.url2}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-3 mb-8">
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-500 mb-2">보호소 운영 오일 / 시간</p>
          <p className="font-bold text-gray-800 text-lg">{shelterData.openingHours}</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-500 mb-2">봉사 가능 오일 / 시간</p>
          <p className="font-bold text-gray-800 text-lg">{shelterData.volunteerDay}</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-500 mb-2">봉사 진행 횟수</p>
          <p className="font-bold text-gray-800 text-lg">{shelterData.capacity}</p>
        </div>
        <div className="bg-gray-100 rounded-lg p-4 text-center">
          <p className="text-xs text-gray-500 mb-2">면적</p>
          <p className="font-bold text-gray-800 text-lg">{shelterData.staff}</p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-bold text-gray-800 mb-4 underline">보호소 소개글</h3>
        <div className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
          {shelterData.description}
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-base font-bold text-gray-800 mb-3">공공데이터: 충북 청주시 충대로1길 실태 주소</h3>
        <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-400">지도 영역</span>
        </div>
      </div>

      <div className="flex gap-4 border-b mb-6">
        <button className="px-4 py-2 text-red-500 border-b-2 border-red-500 font-semibold">
          보호소 이미지
        </button>
        <button className="px-4 py-2 text-gray-500 hover:text-gray-700">
          리뷰 (2)
        </button>
      </div>

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
    managerName: '황유림',
    managerEmail: 'uiuiuiui@naver.com',
    managerPhone: '010-0000-0000',
    websiteLinks: ['인스타그램 URL', '홈페이지 URL'],
    openingHours: '09:00 - 18:00',
    volunteerDay: '약 3개월',
    shelterArea: '200건',
    staff: '10건',
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
            대표자명 <span className="text-red-500">*</span>
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
            대표자 이메일 <span className="text-red-500">*</span>
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
            대표자 전화번호 <span className="text-red-500">*</span>
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

// 봉사 대시보드 탭
function VolunteerDashboard() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 5, 1)); // 2025년 6월
  const [showNewApplicationsModal, setShowNewApplicationsModal] = useState(false);

  // 달력 생성
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // 이전 달의 빈 칸
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // 현재 달의 날짜
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    
    return days;
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = ['01월', '02월', '03월', '04월', '05월', '06월', '07월', '08월', '09월', '10월', '11월', '12월'];
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

  // 봉사 예정일 (강아지 아이콘 표시)
  const volunteerDays = [7, 14, 21, 28];

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">봉사 대시보드</h1>

      {/* 달력 및 통계 */}
      <div className="bg-gray-200 rounded-2xl p-6 mb-8">
        <div className="flex gap-6">
          {/* 달력 */}
          <div className="bg-white rounded-xl p-6 flex-1">
            {/* 달력 헤더 */}
            <div className="flex items-center justify-between mb-6">
              <button onClick={prevMonth} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h2 className="text-lg font-bold text-gray-800">
                {currentDate.getFullYear()}년 {monthNames[currentDate.getMonth()]}
              </h2>
              <button onClick={nextMonth} className="text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* 요일 */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {dayNames.map((day, index) => (
                <div key={index} className="text-center text-xs font-medium text-gray-500 py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* 날짜 */}
            <div className="grid grid-cols-7 gap-2">
              {days.map((day, index) => (
                <div key={index} className="aspect-square flex items-center justify-center relative">
                  {day && (
                    <>
                      <span className={`text-sm ${
                        index % 7 === 0 ? 'text-red-500' : 
                        index % 7 === 6 ? 'text-blue-500' : 
                        'text-gray-800'
                      }`}>
                        {day}
                      </span>
                      {volunteerDays.includes(day) && (
                        <span className="absolute bottom-0 text-xl">🐶</span>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 통계 */}
          <div className="w-64 space-y-4">
            <div className="bg-white rounded-xl p-6 text-center cursor-pointer hover:shadow-lg transition-shadow" onClick={() => setShowNewApplicationsModal(true)}>
              <p className="text-sm text-gray-600 mb-2">새로 들어온 봉사 신청 내역</p>
              <p className="text-4xl font-bold text-gray-800">3건</p>
            </div>
            <div className="bg-white rounded-xl p-6 text-center">
              <p className="text-sm text-gray-600 mb-2">이달의 봉사 갯수</p>
              <p className="text-4xl font-bold text-gray-800">14건</p>
            </div>
          </div>
        </div>
      </div>

      {/* 오늘의 봉사 목록 */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-gray-800">오늘의 봉사 목록</h2>
          <button className="text-orange-500 text-sm flex items-center gap-1 hover:text-orange-600">
            <span>🔄</span> 로그보기
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <VolunteerCard key={i} />
          ))}
        </div>
      </div>

      {/* 예정된 봉사 목록 */}
      <div>
        <h2 className="text-xl font-bold text-gray-800 mb-4">예정된 봉사 목록</h2>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {Array.from({ length: 8 }).map((_, i) => (
            <VolunteerCard key={i} />
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="flex items-center justify-center gap-2">
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

      {/* 새로 들어온 봉사 신청 내역 모달 */}
      {showNewApplicationsModal && (
        <NewApplicationsModal onClose={() => setShowNewApplicationsModal(false)} />
      )}
    </div>
  );
}

// 봉사 카드 컴포넌트
function VolunteerCard() {
  return (
    <div className="bg-gray-100 rounded-xl p-6">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-800 mb-3">닉네임</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">봉사 횟수</span>
              <span className="text-gray-800">7회</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">우리 보호소 방문 횟수</span>
              <span className="text-gray-800">4회</span>
            </div>
          </div>
        </div>

        <div className="border-l border-gray-300 pl-6 ml-6 space-y-1 text-sm min-w-[120px]">
          <div className="flex justify-between">
            <span className="text-gray-600">봉사 날짜</span>
            <span className="text-gray-800">1개월</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">봉사 시간</span>
            <span className="text-gray-800">999+</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">봉사 인원수</span>
            <span className="text-gray-800">999+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 새로 들어온 봉사 신청 내역 모달
function NewApplicationsModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">새로 들어온 봉사 신청 내역</h2>
        
        <div className="space-y-4 mb-6">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="bg-gray-100 rounded-xl p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-800 mb-3">닉네임</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">봉사 횟수</span>
                      <span className="text-gray-800">7회</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">우리 보호소 방문 횟수</span>
                      <span className="text-gray-800">4회</span>
                    </div>
                  </div>
                </div>

                <div className="border-l border-gray-300 px-6 mx-6 space-y-1 text-sm min-w-[120px]">
                  <div className="flex justify-between">
                    <span className="text-gray-600">봉사 날짜</span>
                    <span className="text-gray-800">1개월</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">봉사 시간</span>
                    <span className="text-gray-800">999+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">봉사 인원수</span>
                    <span className="text-gray-800">999+</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50">
                    승인하기
                  </button>
                  <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50">
                    거절하기
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">&lt;</button>
          <button className="w-8 h-8 flex items-center justify-center bg-orange-500 text-white rounded-full text-sm font-medium">1</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">2</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">3</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">4</button>
          <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm">5</button>
          <span className="text-gray-400">...</span>
          <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">&gt;</button>
        </div>

        <button
          onClick={onClose}
          className="w-full py-3 border border-gray-300 rounded-lg text-gray-700 text-sm font-medium hover:bg-gray-50"
        >
          닫기
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
