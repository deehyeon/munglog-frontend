import React, { useState } from 'react';

export default function ShelterDetail({ shelterId, setCurrentPage }) {
  const [activeTab, setActiveTab] = useState('info');
  const [shelterImagePage, setShelterImagePage] = useState(1);
  const [dogPage, setDogPage] = useState(1);

  // 보호소 데이터
  const shelterData = {
    id: shelterId,
    name: '캠냥 보호소',
    logo: '🐶',
    address: '주소:',
    managerName: '황유림',
    managerEmail: 'uiuiuiui@naver.com',
    managerPhone: '010-0000-0000',
    instagramUrl: '인스타그램 URL',
    websiteUrl: '홈페이지 URL',
    hours: '09:00 - 18:00',
    volunteerPeriod: '약 3개월',
    volunteerCount: '200건',
    area: '10건',
    description: `코스분은 능가 빙 현저 하였으며, 품에 웃 것은 쓸쓸하럐라 쓸쓸하럐라.

당신은 1999년 설립된 이래 전력 생산, 송전, 배전 및 판자 산업 분야의 최고 품질의 제품 생산을 목표로 하고 있습니다.
기술, 고객 중심 및 품질에 대한 타협하지 않는 관심은 모두 우리 성공의 기본입니다.

코스분은 회사로서 항상 기존 시장 리더의 추종자로서 비즈니스를 추구하기 보다는 자체 의제를 설정하기 위해 노력합니다.
코스분은 기계 및 전력산업의 고용할 수요를 기반으로 비즈닥속 생산 및 가공기술 개발에서 경쟁력을 확보하고 있으며
초고압을 떠다로맘 일할 제품인 등 부스바를 생산하며 지속적인 성장을 기록하고 있습니다.
부품의 정확한 사양과 신뢰성에 대한 설계, 이해, 기술 및 연구 개발을 제공합니다.
날로 복잡해지고 다양해지는 고객의 요구사항에 적절히 대응하고 혁신을 통해 우수한 부가가치 제품을 제공하기 위해 더욱 경쟁력 있고 역동적인 기업이 되도록 향상 노력하겠습니다.`,
    mapAddress: '공공데이터: 충북 청주시 충대로1길 실태 주소',
    reviewCount: 2
  };

  // 보호소 사진 (8장씩 5페이지)
  const shelterImages = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    url: '🏠'
  }));

  // 강아지 데이터 (8마리씩 5페이지)
  const dogs = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    name: '강아지 이름',
    gender: '수',
    age: '나이 / 상태',
    image: '🐶'
  }));

  const imagesPerPage = 8;
  const dogsPerPage = 8;
  const totalImagePages = Math.ceil(shelterImages.length / imagesPerPage);
  const totalDogPages = Math.ceil(dogs.length / dogsPerPage);

  const currentShelterImages = shelterImages.slice(
    (shelterImagePage - 1) * imagesPerPage,
    shelterImagePage * imagesPerPage
  );

  const currentDogs = dogs.slice(
    (dogPage - 1) * dogsPerPage,
    dogPage * dogsPerPage
  );

  return (
    <div className="space-y-6 pb-12">
      {/* 뒤로 가기 버튼 */}
      <button
        onClick={() => setCurrentPage('shelters')}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        보호소 목록으로
      </button>

      {/* 상단 정보 */}
      <div className="bg-white rounded-2xl shadow-md p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-6">
            {/* 로고 */}
            <div className="w-32 h-32 bg-orange-100 rounded-3xl flex items-center justify-center flex-shrink-0">
              <span className="text-7xl">{shelterData.logo}</span>
            </div>

            {/* 기본 정보 */}
            <div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">{shelterData.name}</h1>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 min-w-[120px]">주소</span>
                  <span className="text-gray-800">{shelterData.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 min-w-[120px]">대표자명</span>
                  <span className="text-gray-800">{shelterData.managerName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 min-w-[120px]">대표자 이메일</span>
                  <span className="text-gray-800">{shelterData.managerEmail}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 min-w-[120px]">대표자 전화번호</span>
                  <span className="text-gray-800">{shelterData.managerPhone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 min-w-[120px]">URL</span>
                  <span className="text-blue-600">{shelterData.instagramUrl}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600 min-w-[120px]">URL</span>
                  <span className="text-blue-600">{shelterData.websiteUrl}</span>
                </div>
              </div>
            </div>
          </div>

          {/* 북마크 및 신청하기 */}
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
              </svg>
            </button>
            <button className="px-6 py-2 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600">
              봉사 신청하기
            </button>
          </div>
        </div>

        {/* 정보 박스 */}
        <div className="grid grid-cols-4 gap-4">
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-500 mb-2">보호소 운영 오전 / 시간</p>
            <p className="font-bold text-gray-800">{shelterData.hours}</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-500 mb-2">봉사 가능 오전 / 시간</p>
            <p className="font-bold text-gray-800">{shelterData.volunteerPeriod}</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-500 mb-2">봉사 진행 횟수</p>
            <p className="font-bold text-gray-800">{shelterData.volunteerCount}</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 text-center">
            <p className="text-xs text-gray-500 mb-2">면적</p>
            <p className="font-bold text-gray-800">{shelterData.area}</p>
          </div>
        </div>
      </div>

      {/* 탭 */}
      <div className="flex gap-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('info')}
          className={`pb-3 font-bold text-base transition-all relative ${
            activeTab === 'info'
              ? 'text-red-500'
              : 'text-gray-400'
          }`}
        >
          보호소 정보
          {activeTab === 'info' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>
          )}
        </button>
        <button
          onClick={() => setActiveTab('reviews')}
          className={`pb-3 font-bold text-base transition-all relative ${
            activeTab === 'reviews'
              ? 'text-red-500'
              : 'text-gray-400'
          }`}
        >
          리뷰 ({shelterData.reviewCount})
          {activeTab === 'reviews' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>
          )}
        </button>
      </div>

      {activeTab === 'info' && (
        <>
          {/* 보호소 소개글 */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4 underline">보호소 소개글</h2>
            <div className="text-sm text-gray-600 whitespace-pre-line leading-relaxed">
              {shelterData.description}
            </div>
          </div>

          {/* 지도 */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h3 className="text-base font-bold text-gray-800 mb-4">{shelterData.mapAddress}</h3>
            <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
              <span className="text-gray-400 text-lg">🗺️ 지도 영역</span>
            </div>
          </div>

          {/* 보호소 사진 */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-lg font-bold text-gray-800 mb-6">보호소 사진</h2>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {currentShelterImages.map((image) => (
                <div
                  key={image.id}
                  className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center text-6xl hover:shadow-lg transition-shadow cursor-pointer"
                >
                  {image.url}
                </div>
              ))}
            </div>

            {/* 페이지네이션 */}
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setShelterImagePage(Math.max(1, shelterImagePage - 1))}
                disabled={shelterImagePage === 1}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 disabled:opacity-30"
              >
                &lt;
              </button>
              {Array.from({ length: Math.min(5, totalImagePages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setShelterImagePage(pageNum)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${
                      shelterImagePage === pageNum
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              {totalImagePages > 5 && <span className="text-gray-400">...</span>}
              <button
                onClick={() => setShelterImagePage(Math.min(totalImagePages, shelterImagePage + 1))}
                disabled={shelterImagePage === totalImagePages}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 disabled:opacity-30"
              >
                &gt;
              </button>
            </div>
          </div>

          {/* 강아지 사진 */}
          <div className="bg-white rounded-2xl shadow-md p-8">
            <h2 className="text-lg font-bold text-gray-800 mb-6">강아지 사진</h2>
            <div className="grid grid-cols-4 gap-4 mb-6">
              {currentDogs.map((dog) => (
                <div
                  key={dog.id}
                  className="border border-yellow-300 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center mb-3 text-6xl">
                    {dog.image}
                  </div>
                  <h4 className="font-bold text-gray-800 text-sm mb-1">{dog.name}</h4>
                  <p className="text-xs text-gray-500">{dog.gender}</p>
                  <p className="text-xs text-gray-500">{dog.age}</p>
                </div>
              ))}
            </div>

            {/* 페이지네이션 */}
            <div className="flex items-center justify-center gap-2">
              <button
                onClick={() => setDogPage(Math.max(1, dogPage - 1))}
                disabled={dogPage === 1}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 disabled:opacity-30"
              >
                &lt;
              </button>
              {Array.from({ length: Math.min(5, totalDogPages) }, (_, i) => {
                const pageNum = i + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setDogPage(pageNum)}
                    className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${
                      dogPage === pageNum
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              {totalDogPages > 5 && <span className="text-gray-400">...</span>}
              <button
                onClick={() => setDogPage(Math.min(totalDogPages, dogPage + 1))}
                disabled={dogPage === totalDogPages}
                className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 disabled:opacity-30"
              >
                &gt;
              </button>
            </div>
          </div>
        </>
      )}

      {activeTab === 'reviews' && (
        <div className="bg-white rounded-2xl shadow-md p-8">
          <div className="text-center py-16">
            <div className="text-5xl mb-4">💬</div>
            <p className="text-gray-600 text-base font-medium">
              아직 리뷰가 없습니다
            </p>
            <p className="text-gray-500 text-sm mt-2">
              첫 번째 리뷰를 작성해보세요!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
