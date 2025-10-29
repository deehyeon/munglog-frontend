import React, { useState } from 'react';

export default function Missing({ 
  selectedRegion, 
  setIsLocationModalOpen,
  likedItems,
  toggleLike 
}) {
  const [activeTab, setActiveTab] = useState('missing');
  const [sortOrder, setSortOrder] = useState('latest');
  const [showResolved, setShowResolved] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // 예시 데이터 - 실제로는 API에서 가져올 데이터
  const posts = [
    {
      id: 1,
      type: 'missing',
      title: '버숑 프리제를 찾습니다.',
      location: '경기도 용인시 수지동 농협앞 근처',
      date: '2021.05.18',
      age: '3세',
      breed: '버숑 프리제',
      status: '실종',
      resolved: false,
      image: '🐶'
    },
    {
      id: 2,
      type: 'missing',
      title: '버숑 프리제를 찾습니다.',
      location: '경기도 용인시 수지동 농협앞 근처',
      date: '2021.05.18',
      age: '3세',
      breed: '버숑 프리제',
      status: '실종',
      resolved: false,
      image: '🐶'
    },
    {
      id: 3,
      type: 'missing',
      title: '버숑 프리제를 찾습니다.',
      location: '경기도 용인시 수지동 농협앞 근처',
      date: '2021.05.18',
      age: '3세',
      breed: '버숑 프리제',
      status: '실종',
      resolved: false,
      image: '🐶'
    },
    {
      id: 4,
      type: 'missing',
      title: '버숑 프리제를 찾습니다.',
      location: '경기도 용인시 수지동 농협앞 근처',
      date: '2021.05.18',
      age: '3세',
      breed: '버숑 프리제',
      status: '실종',
      resolved: false,
      image: '🐶'
    },
    {
      id: 5,
      type: 'missing',
      title: '버숑 프리제를 찾습니다.',
      location: '경기도 용인시 수지동 농협앞 근처',
      date: '2021.05.18',
      age: '3세',
      breed: '버숑 프리제',
      status: '실종',
      resolved: false,
      image: '🐶'
    },
    {
      id: 6,
      type: 'missing',
      title: '버숑 프리제를 찾습니다.',
      location: '경기도 용인시 수지동 농협앞 근처',
      date: '2021.05.18',
      age: '3세',
      breed: '버숑 프리제',
      status: '실종',
      resolved: false,
      image: '🐶'
    },
    {
      id: 7,
      type: 'missing',
      title: '버숑 프리제를 찾습니다.',
      location: '경기도 용인시 수지동 농협앞 근처',
      date: '2021.05.18',
      age: '3세',
      breed: '버숑 프리제',
      status: '실종',
      resolved: false,
      image: '🐶'
    },
    {
      id: 8,
      type: 'missing',
      title: '버숑 프리제를 찾습니다.',
      location: '경기도 용인시 수지동 농협앞 근처',
      date: '2021.05.18',
      age: '3세',
      breed: '버숑 프리제',
      status: '실종',
      resolved: false,
      image: '🐶'
    },
    {
      id: 9,
      type: 'found',
      title: '버숑 프리제를 찾습니다.',
      location: '경기도 용인시 수지동 농협앞 근처',
      date: '2021.05.18',
      age: '3세',
      breed: '버숑 프리제',
      status: '보호',
      resolved: false,
      image: '🐶'
    },
    {
      id: 10,
      type: 'found',
      title: '버숑 프리제를 찾습니다.',
      location: '경기도 용인시 수지동 농협앞 근처',
      date: '2021.05.18',
      age: '3세',
      breed: '버숑 프리제',
      status: '보호',
      resolved: false,
      image: '🐶'
    },
    {
      id: 11,
      type: 'found',
      title: '버숑 프리제를 찾습니다.',
      location: '경기도 용인시 수지동 농협앞 근처',
      date: '2021.05.18',
      age: '3세',
      breed: '버숑 프리제',
      status: '보호',
      resolved: false,
      image: '🐶'
    }
  ];

  const filteredPosts = posts.filter(post => {
    if (activeTab === 'missing' && post.type !== 'missing') return false;
    if (activeTab === 'found' && post.type !== 'found') return false;
    if (!showResolved && post.resolved) return false;
    return true;
  });

  const missingCount = posts.filter(p => p.type === 'missing').length;
  const foundCount = posts.filter(p => p.type === 'found').length;

  // 페이지네이션
  const postsPerPage = 8;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  const currentPosts = filteredPosts.slice(startIndex, endIndex);

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      {/* Header with Dog Character */}
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          실종 동물을 찾습니다.
        </h1>
        {/* Dog Character Image - 나중에 실제 이미지로 교체 가능 */}
        <div className="w-32 h-32 mx-auto mb-4 flex items-center justify-center text-8xl">
          🐶
        </div>
        <p className="text-gray-600 text-sm">
          동물이 실종되었다면 '<span className="font-semibold">실종 게시판</span>'에, 
          발견하여 보호중이라면 '<span className="font-semibold">보호게시판</span>'에 
          글을 작성해주세요
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200">
        <button
          onClick={() => {
            setActiveTab('missing');
            setCurrentPage(1);
          }}
          className={`pb-4 font-bold text-base transition-all relative ${
            activeTab === 'missing'
              ? 'text-red-500'
              : 'text-gray-400'
          }`}
        >
          실종 게시판 <span className="text-red-500">({missingCount})</span>
          {activeTab === 'missing' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>
          )}
        </button>
        <button
          onClick={() => {
            setActiveTab('found');
            setCurrentPage(1);
          }}
          className={`pb-4 font-bold text-base transition-all relative ${
            activeTab === 'found'
              ? 'text-red-500'
              : 'text-gray-400'
          }`}
        >
          보호 게시판 <span className="text-gray-400">({foundCount})</span>
          {activeTab === 'found' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></div>
          )}
        </button>
      </div>

      {/* Filter Section */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-1">
          {/* Region Button */}
          <button
            onClick={() => setIsLocationModalOpen(true)}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 flex items-center gap-1"
          >
            {selectedRegion}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Sort Order */}
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 cursor-pointer"
          >
            <option value="latest">최신순</option>
            <option value="oldest">오래된순</option>
            <option value="popular">인기순</option>
          </select>

          {/* Search Bar */}
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="검색하기"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <svg className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Write Button */}
          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 whitespace-nowrap">
            게시글 작성
          </button>
        </div>
      </div>

      {/* Checkbox */}
      <label className="flex items-center gap-2 text-gray-600 text-sm cursor-pointer">
        <input
          type="checkbox"
          checked={showResolved}
          onChange={(e) => setShowResolved(e.target.checked)}
          className="w-4 h-4 rounded border-gray-300"
        />
        <span>주인을 찾은 강아지도 보기</span>
      </label>

      {/* Posts Grid */}
      <div className="space-y-4">
        {currentPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="flex">
              {/* Image */}
              <div className="w-48 h-48 bg-gray-100 flex items-center justify-center text-7xl flex-shrink-0">
                {post.image}
              </div>

              {/* Content */}
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-800">
                      {post.title}
                    </h3>
                    <span className={`px-3 py-1 rounded-md text-xs font-medium flex-shrink-0 ml-3 ${
                      post.status === '실종' 
                        ? 'bg-gray-100 text-gray-700' 
                        : 'bg-gray-100 text-gray-700'
                    }`}>
                      {post.status}
                    </span>
                  </div>

                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-start">
                      <span className="w-20 font-medium flex-shrink-0">발견위치 :</span>
                      <span className="flex-1">{post.location}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-20 font-medium flex-shrink-0">발견일시 :</span>
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-20 font-medium flex-shrink-0">나이 :</span>
                      <span>{post.age}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-20 font-medium flex-shrink-0">성별 :</span>
                      <span>{post.breed}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-end mt-4">
                  <button className="text-gray-600 hover:text-gray-800 text-sm flex items-center gap-1">
                    자세히 보기
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 py-6">
          <button
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 disabled:opacity-30"
          >
            &lt;
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={`w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium ${
                  currentPage === pageNum
                    ? 'bg-orange-500 text-white'
                    : 'text-gray-600 hover:bg-gray-100'
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          
          {totalPages > 5 && (
            <>
              <span className="text-gray-400">...</span>
              <button
                onClick={() => setCurrentPage(totalPages)}
                className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full text-sm"
              >
                {totalPages}
              </button>
            </>
          )}
          
          <button
            onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
            disabled={currentPage === totalPages}
            className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 disabled:opacity-30"
          >
            &gt;
          </button>
        </div>
      )}

      {/* Empty State */}
      {currentPosts.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
          <div className="text-5xl mb-4">🐕</div>
          <p className="text-gray-600 text-base font-medium">
            아직 게시물이 없습니다
          </p>
          <p className="text-gray-500 text-sm mt-2">
            첫 번째 게시물을 작성해보세요!
          </p>
        </div>
      )}
    </div>
  );
}
