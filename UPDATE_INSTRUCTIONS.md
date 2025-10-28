# 로그아웃 기능 완료를 위한 간단한 수정사항

현재 **MyPage.jsx**는 이미 로그아웃 기능이 작동합니다.

**VolunteerMyPage.jsx**와 **ShelterMyPage.jsx** 두 파일만 수정하면 모든 마이페이지에서 로그아웃이 작동합니다.

## VolunteerMyPage.jsx 수정

### 1. 3번째 줄 수정:
```javascript
// 기존:
export default function VolunteerMyPage({ setCurrentPage }) {

// 변경:
export default function VolunteerMyPage({ setCurrentPage, handleLogout }) {
```

### 2. 약 67번째 줄의 로그아웃 버튼 수정:
```javascript
// 기존:
<button className="w-full mt-8 px-4 py-3 text-left text-gray-500 hover:text-gray-700 transition-colors text-sm flex items-center gap-2">
  <span>🚪</span> 로그아웃
</button>

// 변경:
<button 
  onClick={handleLogout}
  className="w-full mt-8 px-4 py-3 text-left text-gray-500 hover:text-gray-700 transition-colors text-sm flex items-center gap-2"
>
  <span>🚪</span> 로그아웃
</button>
```

## ShelterMyPage.jsx 수정

### 1. 3번째 줄 수정:
```javascript
// 기존:
export default function ShelterMyPage() {

// 변경:
export default function ShelterMyPage({ setCurrentPage, handleLogout }) {
```

### 2. 로그아웃 버튼에 onClick 추가 (VolunteerMyPage와 동일)

---

이 두 가지 간단한 수정만 하면 로그아웃이 모든 페이지에서 작동합니다!
