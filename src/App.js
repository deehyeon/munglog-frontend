import React, { useState, useRef, useEffect } from 'react';
import { Search, MapPin, ChevronDown, Star, Clock, Heart, Bell, User, Phone, MessageSquare } from 'lucide-react';
import * as THREE from 'three';

export default function MongLog() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedRegion, setSelectedRegion] = useState('강남구');
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [likedItems, setLikedItems] = useState(new Set());
  const [activeFilter, setActiveFilter] = useState('missing');
  const [sortBy, setSortBy] = useState('latest');
  const [isSortOpen, setIsSortOpen] = useState(false);
  const mountRef = useRef(null);

  const colors = {
    primary: '#FFE66D',
    secondary: '#FF6B6B',
    accent: '#4ECDC4',
    background: '#FFF8DC',
    text: '#2C3E50'
  };

  const regions = [
    '강남구', '강동구', '강북구', '강서구', '관악구', '광진구',
    '구로구', '금천구', '노원구', '도봉구', '동대문구', '동작구',
    '마포구', '서대문구', '서초구', '성동구', '성북구', '송파구',
    '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'
  ];

  const shelters = [
    {
      id: 1,
      name: '서울 강남 유기견 보호센터',
      region: '강남구',
      address: '서울시 강남구 테헤란로 123',
      rating: 4.8,
      volunteers: 245,
      distance: '1.2km',
      tags: ['24시간', '봉사가능', '후원가능']
    },
    {
      id: 2,
      name: '행복한 강아지 보호소',
      region: '강남구',
      address: '서울시 강남구 역삼동 456',
      rating: 4.9,
      volunteers: 189,
      distance: '2.1km',
      tags: ['주말봉사', '후원가능']
    },
    {
      id: 3,
      name: '사랑의 집',
      region: '서초구',
      address: '서울시 서초구 서초동 789',
      rating: 4.7,
      volunteers: 312,
      distance: '3.5km',
      tags: ['평일봉사', '분양가능']
    }
  ];

  const posts = [
    {
      id: 1,
      type: 'missing',
      title: '믹스견 찾습니다 - 강남역 근처',
      location: '강남구',
      date: '2시간 전',
      image: '🐕',
      description: '갈색 믹스견, 목걸이 착용, 사람을 잘 따름',
      likes: 24
    },
    {
      id: 2,
      type: 'protected',
      title: '보호 중입니다 - 서초구',
      location: '서초구',
      date: '5시간 전',
      image: '🐶',
      description: '흰색 소형견, 건강상태 양호',
      likes: 18
    },
    {
      id: 3,
      type: 'missing',
      title: '시츄 실종 - 도곡동',
      location: '강남구',
      date: '1일 전',
      image: '🐕',
      description: '검은색 시츄, 7살, 이름은 "초코"',
      likes: 45
    }
  ];

  const adoptions = [
    {
      id: 1,
      name: '뽀삐',
      breed: '믹스견',
      age: '2살',
      gender: '여아',
      image: '🐕',
      description: '착하고 온순한 성격',
      location: '강남구',
      likes: 67
    },
    {
      id: 2,
      name: '하늘이',
      breed: '진돗개',
      age: '3살',
      gender: '남아',
      image: '🐶',
      description: '활발하고 건강함',
      location: '서초구',
      likes: 52
    }
  ];

  useEffect(() => {
    if (!mountRef.current || currentPage !== 'home') return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFF8DC);
    scene.fog = new THREE.Fog(0xFFF8DC, 10, 30);
    
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / (window.innerHeight * 0.5), 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight * 0.5);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mountRef.current.appendChild(renderer.domElement);

    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 0.9);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.6);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    scene.add(directionalLight);

    const createDog = (x, z, color) => {
      const dogGroup = new THREE.Group();
      
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(0.8, 0.5, 1.2),
        new THREE.MeshLambertMaterial({ color })
      );
      body.castShadow = true;
      body.position.y = 0.25;
      dogGroup.add(body);

      const head = new THREE.Mesh(
        new THREE.BoxGeometry(0.6, 0.6, 0.6),
        new THREE.MeshLambertMaterial({ color })
      );
      head.castShadow = true;
      head.position.set(0, 0.55, 0.7);
      dogGroup.add(head);

      const earLeft = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.4, 0.1),
        new THREE.MeshLambertMaterial({ color })
      );
      earLeft.position.set(-0.25, 0.85, 0.7);
      dogGroup.add(earLeft);

      const earRight = earLeft.clone();
      earRight.position.set(0.25, 0.85, 0.7);
      dogGroup.add(earRight);

      const legPositions = [
        [-0.3, 0, 0.4],
        [0.3, 0, 0.4],
        [-0.3, 0, -0.4],
        [0.3, 0, -0.4]
      ];

      legPositions.forEach(pos => {
        const leg = new THREE.Mesh(
          new THREE.CylinderGeometry(0.1, 0.1, 0.5),
          new THREE.MeshLambertMaterial({ color })
        );
        leg.castShadow = true;
        leg.position.set(pos[0], pos[1], pos[2]);
        dogGroup.add(leg);
      });

      const tail = new THREE.Mesh(
        new THREE.BoxGeometry(0.15, 0.15, 0.6),
        new THREE.MeshLambertMaterial({ color })
      );
      tail.position.set(0, 0.4, -0.9);
      tail.rotation.x = -0.5;
      dogGroup.add(tail);

      dogGroup.position.set(x, 0.5, z);
      return dogGroup;
    };

    const createCloud = (x, y, z) => {
      const cloudGroup = new THREE.Group();
      
      const positions = [
        [0, 0, 0, 1.2],
        [-0.8, 0.1, 0.2, 1.0],
        [0.8, 0.1, 0.2, 1.0],
        [-0.4, 0.3, 0, 0.8],
        [0.4, 0.3, 0, 0.8],
      ];
      
      positions.forEach(([px, py, pz, scale]) => {
        const cloudPart = new THREE.Mesh(
          new THREE.SphereGeometry(0.5, 16, 16),
          new THREE.MeshLambertMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.9 })
        );
        cloudPart.position.set(px, py, pz);
        cloudPart.scale.set(scale, scale * 0.7, scale * 0.8);
        cloudGroup.add(cloudPart);
      });
      
      cloudGroup.position.set(x, y, z);
      cloudGroup.userData = { speedX: 0, originalY: y, floatPhase: Math.random() * Math.PI * 2 };
      return cloudGroup;
    };

    const dogs = [
      { obj: createDog(-3, 1, 0xF4A460), speedX: 0.01, speedZ: 0.008 },
      { obj: createDog(3, -1, 0xDEB887), speedX: -0.009, speedZ: 0.01 },
      { obj: createDog(0, 3, 0xD2B48C), speedX: 0.011, speedZ: -0.008 },
      { obj: createDog(-2, -2, 0xDAA520), speedX: 0.008, speedZ: 0.009 },
      { obj: createDog(2, 2, 0xCD853F), speedX: -0.01, speedZ: -0.007 }
    ];

    dogs.forEach(dog => {
      scene.add(dog.obj);
      dog.obj.userData = { speedX: dog.speedX, speedZ: dog.speedZ };
    });

    const clouds = [
      createCloud(-5, 6, -5),
      createCloud(5, 7, -3),
      createCloud(0, 6.5, -8),
      createCloud(-3, 7.5, -6)
    ];
    
    clouds.forEach(cloud => scene.add(cloud));

    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(50, 50),
      new THREE.MeshLambertMaterial({ color: 0x90EE90 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    let time = 0;
    function animate() {
      requestAnimationFrame(animate);
      time += 0.01;

      dogs.forEach(dog => {
        const obj = dog.obj;
        obj.position.x += obj.userData.speedX;
        obj.position.z += obj.userData.speedZ;

        if (Math.abs(obj.position.x) > 8) obj.userData.speedX *= -1;
        if (Math.abs(obj.position.z) > 8) obj.userData.speedZ *= -1;

        obj.rotation.y = Math.atan2(obj.userData.speedX, obj.userData.speedZ);
        
        obj.children.forEach((part, index) => {
          if (index > 4 && index < 9) {
            part.rotation.x = Math.sin(time * 5) * 0.3;
          }
        });
      });

      clouds.forEach(cloud => {
        cloud.userData.floatPhase += 0.01;
        cloud.position.y = cloud.userData.originalY + Math.sin(cloud.userData.floatPhase) * 0.3;
        cloud.position.x += 0.005;
        if (cloud.position.x > 10) cloud.position.x = -10;
      });

      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / (window.innerHeight * 0.5);
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight * 0.5);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, [currentPage]);

  const toggleLike = (id) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const filteredPosts = posts.filter(post => post.type === activeFilter);

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <header className="sticky top-0 z-50 shadow-md" style={{ backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 
              onClick={() => setCurrentPage('home')}
              className="text-3xl font-bold cursor-pointer"
              style={{ color: colors.secondary }}
            >
              🐕 멍로그
            </h1>
            <div className="flex gap-4 items-center">
              <Bell className="w-6 h-6 cursor-pointer" style={{ color: colors.text }} />
              <User className="w-6 h-6 cursor-pointer" style={{ color: colors.text }} />
            </div>
          </div>
        </div>
      </header>

      <nav className="sticky top-16 z-40 shadow-sm" style={{ backgroundColor: 'white' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-6 py-3">
            {[
              { id: 'shelters', label: '보호소 찾기', icon: MapPin },
              { id: 'missing', label: '분실/보호', icon: Search },
              { id: 'adoption', label: '분양하기', icon: Heart }
            ].map(item => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition ${
                    currentPage === item.id ? 'font-bold' : ''
                  }`}
                  style={{
                    backgroundColor: currentPage === item.id ? colors.primary : 'transparent',
                    color: currentPage === item.id ? colors.text : colors.text
                  }}
                >
                  <Icon className="w-5 h-5" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {currentPage === 'home' && (
        <div className="relative">
          <div ref={mountRef} className="w-full" style={{ height: '50vh' }} />
          <div className="text-center py-12">
            <h2 className="text-4xl font-bold mb-4" style={{ color: colors.text }}>유기견과 함께하는 따뜻한 세상</h2>
            <p className="text-xl" style={{ color: colors.text }}>멍로그와 함께 사랑을 나눠주세요</p>
          </div>
        </div>
      )}

      {currentPage === 'shelters' && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-6 flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 w-5 h-5" style={{ color: colors.text }} />
              <input
                type="text"
                placeholder="보호소 이름으로 검색"
                className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none"
                style={{ borderColor: colors.accent }}
              />
            </div>
            <button
              onClick={() => setIsLocationModalOpen(!isLocationModalOpen)}
              className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition"
              style={{ backgroundColor: colors.primary }}
            >
              <MapPin className="w-5 h-5" />
              {selectedRegion}
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {isLocationModalOpen && (
            <div className="mb-6 p-4 bg-white rounded-lg shadow-lg">
              <div className="grid grid-cols-5 gap-2">
                {regions.map(region => (
                  <button
                    key={region}
                    onClick={() => {
                      setSelectedRegion(region);
                      setIsLocationModalOpen(false);
                    }}
                    className={`px-3 py-2 rounded-lg transition ${
                      selectedRegion === region ? 'font-bold' : ''
                    }`}
                    style={{
                      backgroundColor: selectedRegion === region ? colors.primary : colors.background,
                      color: colors.text
                    }}
                  >
                    {region}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="grid gap-4">
            {shelters.filter(s => s.region === selectedRegion).map(shelter => (
              <div key={shelter.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1" style={{ color: colors.text }}>{shelter.name}</h3>
                    <p className="text-gray-600">{shelter.address}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5" style={{ color: colors.primary }} fill={colors.primary} />
                    <span className="font-bold">{shelter.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 mb-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {shelter.distance}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-4 h-4" />
                    {shelter.volunteers}명 봉사
                  </span>
                </div>
                <div className="flex gap-2 mb-4">
                  {shelter.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-sm font-medium"
                      style={{ backgroundColor: colors.accent, color: 'white' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    className="flex-1 py-2 rounded-lg font-bold transition"
                    style={{ backgroundColor: colors.secondary, color: 'white' }}
                  >
                    봉사 신청
                  </button>
                  <button
                    className="flex-1 py-2 rounded-lg font-bold transition"
                    style={{ backgroundColor: colors.primary }}
                  >
                    <Phone className="w-5 h-5 inline mr-1" />
                    전화하기
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentPage === 'missing' && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveFilter('missing')}
              className={`px-6 py-2 rounded-full font-bold transition ${
                activeFilter === 'missing' ? '' : 'opacity-60'
              }`}
              style={{
                backgroundColor: activeFilter === 'missing' ? colors.secondary : colors.background,
                color: activeFilter === 'missing' ? 'white' : colors.text
              }}
            >
              실종 동물
            </button>
            <button
              onClick={() => setActiveFilter('protected')}
              className={`px-6 py-2 rounded-full font-bold transition ${
                activeFilter === 'protected' ? '' : 'opacity-60'
              }`}
              style={{
                backgroundColor: activeFilter === 'protected' ? colors.accent : colors.background,
                color: activeFilter === 'protected' ? 'white' : colors.text
              }}
            >
              보호 중
            </button>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <button
                onClick={() => setIsSortOpen(!isSortOpen)}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg border-2"
                style={{ borderColor: colors.accent }}
              >
                <Clock className="w-4 h-4" />
                {sortBy === 'latest' ? '최신순' : '인기순'}
                <ChevronDown className="w-4 h-4" />
              </button>
              {isSortOpen && (
                <div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-lg border-2" style={{ borderColor: colors.accent }}>
                  <button
                    onClick={() => { setSortBy('latest'); setIsSortOpen(false); }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50"
                  >
                    최신순
                  </button>
                  <button
                    onClick={() => { setSortBy('popular'); setIsSortOpen(false); }}
                    className="w-full px-4 py-2 text-left hover:bg-gray-50"
                  >
                    인기순
                  </button>
                </div>
              )}
            </div>
            <button
              className="px-6 py-2 rounded-lg font-bold"
              style={{ backgroundColor: colors.primary }}
            >
              글쓰기
            </button>
          </div>

          <div className="grid gap-4">
            {filteredPosts.map(post => (
              <div key={post.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
                <div className="flex gap-4">
                  <div className="text-6xl">{post.image}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold" style={{ color: colors.text }}>{post.title}</h3>
                      <button onClick={() => toggleLike(post.id)}>
                        <Heart
                          className="w-6 h-6 transition"
                          style={{ color: likedItems.has(post.id) ? colors.secondary : colors.text }}
                          fill={likedItems.has(post.id) ? colors.secondary : 'none'}
                        />
                      </button>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {post.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.date}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-3">{post.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">좋아요 {post.likes}개</span>
                      <button
                        className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium"
                        style={{ backgroundColor: colors.accent, color: 'white' }}
                      >
                        <MessageSquare className="w-4 h-4" />
                        문의하기
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {currentPage === 'adoption' && (
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold" style={{ color: colors.text }}>분양 가능한 친구들</h2>
            <button
              className="px-6 py-2 rounded-lg font-bold"
              style={{ backgroundColor: colors.primary }}
            >
              분양 글 등록
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {adoptions.map(dog => (
              <div key={dog.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                <div className="text-8xl text-center py-8" style={{ backgroundColor: colors.background }}>
                  {dog.image}
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-2xl font-bold mb-1" style={{ color: colors.text }}>{dog.name}</h3>
                      <p className="text-gray-600">{dog.breed} · {dog.age} · {dog.gender}</p>
                    </div>
                    <button onClick={() => toggleLike(`adoption-${dog.id}`)}>
                      <Heart
                        className="w-6 h-6 transition"
                        style={{ color: likedItems.has(`adoption-${dog.id}`) ? colors.secondary : colors.text }}
                        fill={likedItems.has(`adoption-${dog.id}`) ? colors.secondary : 'none'}
                      />
                    </button>
                  </div>
                  <p className="text-gray-700 mb-4">{dog.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <MapPin className="w-4 h-4" />
                    {dog.location}
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="flex-1 py-3 rounded-lg font-bold transition"
                      style={{ backgroundColor: colors.secondary, color: 'white' }}
                    >
                      입양 신청
                    </button>
                    <button
                      className="flex-1 py-3 rounded-lg font-bold transition flex items-center justify-center gap-2"
                      style={{ backgroundColor: colors.accent, color: 'white' }}
                    >
                      <MessageSquare className="w-5 h-5" />
                      문의하기
                    </button>
                  </div>
                  <div className="mt-3 text-center text-sm text-gray-600">
                    좋아요 {dog.likes}개
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}