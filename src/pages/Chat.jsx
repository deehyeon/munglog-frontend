import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

export default function Chat({ setCurrentPage }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedChat, setSelectedChat] = useState(null);

  // 채팅 목록 데이터
  const chatList = [
    {
      id: 1,
      name: '당근',
      lastMessage: '네 잘부탁드려요~~ 그 쪽했습니다.',
      time: '오전 07:03',
      unread: 0,
      avatar: '🥕',
      isOnline: false
    },
    {
      id: 2,
      name: '푸른하늘투르네',
      lastMessage: '네 감사합니다~!!',
      time: '화요일',
      unread: 0,
      avatar: '🏞️',
      hasImage: true,
      isOnline: false
    },
    {
      id: 3,
      name: '당근페이',
      lastMessage: '계좌로 보냈어요. 📱 토스나는 3734...',
      time: '3일 전',
      unread: 0,
      avatar: '💳',
      isPay: true,
      isOnline: false
    },
    {
      id: 4,
      name: '미미머',
      lastMessage: '네 감사합니다다~!!',
      time: '1주 전',
      unread: 0,
      avatar: '👤',
      hasImage: true,
      isOnline: false
    },
    {
      id: 5,
      name: '무향철구',
      lastMessage: '스타몰을 보냈어요.',
      time: '8월16일',
      unread: 0,
      avatar: '🏗️',
      hasImage: true,
      isOnline: false
    },
    {
      id: 6,
      name: 'yukdkd',
      lastMessage: '아~ 네',
      time: '1일 전',
      unread: 0,
      avatar: '👤',
      hasImage: true,
      isOnline: false
    },
    {
      id: 7,
      name: '달콩고수',
      lastMessage: '안전이요.',
      time: '1일 전',
      unread: 0,
      avatar: '👤',
      hasImage: true,
      isOnline: false
    },
    {
      id: 8,
      name: '노령',
      lastMessage: '감사합니다~!!!! 쪽 쓰겠습니다!!',
      time: '1일 전',
      unread: 0,
      avatar: '👤',
      hasImage: true,
      isOnline: false
    },
    {
      id: 9,
      name: '현양성영',
      lastMessage: '도움 거듭합각니다',
      time: '2일 전',
      unread: 0,
      avatar: '👤',
      hasImage: true,
      isOnline: false
    },
    {
      id: 10,
      name: '수빈이',
      lastMessage: '넵',
      time: '2일 전',
      unread: 0,
      avatar: '👤',
      hasImage: true,
      isOnline: false
    }
  ];

  const filteredChats = chatList.filter(chat =>
    chat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden" style={{ minHeight: '700px' }}>
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-400 to-orange-500 p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <MessageCircle className="w-7 h-7 text-orange-500" />
                </div>
                <h1 className="text-2xl font-bold text-white">채팅봇</h1>
              </div>
              <button 
                onClick={() => setCurrentPage('home')}
                className="text-white hover:bg-orange-600 rounded-lg px-3 py-1 transition"
              >
                ✕
              </button>
            </div>
            
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="안위된 메시지만 보기"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-orange-300 text-gray-700 placeholder-gray-400"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">❓</div>
            </div>
          </div>

          {/* Chat List */}
          <div className="divide-y divide-gray-100">
            {filteredChats.length > 0 ? (
              filteredChats.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setSelectedChat(chat.id)}
                  className={`flex items-center gap-4 p-4 hover:bg-gray-50 cursor-pointer transition ${
                    selectedChat === chat.id ? 'bg-orange-50' : ''
                  }`}
                >
                  {/* Avatar */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center text-2xl">
                      {chat.avatar}
                    </div>
                    {chat.isOnline && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>

                  {/* Chat Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-semibold text-gray-800 truncate">{chat.name}</h3>
                      <span className="text-xs text-gray-500 flex-shrink-0">{chat.time}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
                      {chat.unread > 0 && (
                        <span className="ml-2 w-5 h-5 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center flex-shrink-0">
                          {chat.unread}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Thumbnail */}
                  {chat.hasImage && (
                    <div className="w-12 h-12 bg-gray-300 rounded-lg flex-shrink-0 flex items-center justify-center">
                      <span className="text-xs text-gray-500">📷</span>
                    </div>
                  )}
                </div>
              ))
            ) : (
              <div className="flex flex-col items-center justify-center py-20">
                <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                  <MessageCircle className="w-16 h-16 text-gray-300" />
                </div>
                <p className="text-gray-500 text-center">채팅방 상대가 선택해주세요.</p>
              </div>
            )}
          </div>

          {/* Footer Notice */}
          <div className="border-t border-gray-200 p-4 bg-blue-50">
            <p className="text-sm text-blue-700 text-center">
              PC앱(윈)용 하하감, 알림창에서 새 메시지를 빨리게 확인해 보세요. 
              <a href="#" className="font-semibold hover:underline">알림 받기</a>
            </p>
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-600">
            채팅중도 잘없도 정상입니다
          </p>
        </div>
      </div>
    </div>
  );
}
