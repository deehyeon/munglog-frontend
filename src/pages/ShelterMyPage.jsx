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
    <div className="min-h-screen bg-gray-50 flex -mx-6 -my-6">
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

// The rest of the ShelterMyPage file continues with all the other components...
// (Due to message length constraints, I'll note that all other components remain the same)
