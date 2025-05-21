# 📘 TAGNGRAM PROJECT - IDEA FACTORY

Tangram 블록 기반 오브젝트를 등록하고, 시각화하며, AI 기능과 연결 가능한 인터랙티브 웹 애플리케이션입니다.

<p align="center">
  <img src="public/images/preview.png" width="600"/>
</p>

---

## 🚀 실행 방법

### 1. 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

* 기본 실행 주소: [http://localhost:5173](http://localhost:5173)

---

## 📁 프로젝트 구조

```
tangram_project/
├── public/
│   └── images/                  # Tangram 및 생성 이미지 리소스
├── src/
│   ├── assets/                  # (필요 시 사용) 기타 이미지, 아이콘 등
│   ├── components/             # 재사용 가능한 UI 컴포넌트
│   │   ├── ObjectCard.tsx
│   │   └── SelectedObjectDetail.tsx
│   ├── data/                   # 샘플 오브젝트 데이터
│   │   └── sampleObjects.ts
│   ├── pages/
│   │   └── IdeaFactory.tsx     # 메인 페이지 컴포넌트
│   ├── types/
│   │   └── TangramObject.ts    # 오브젝트 타입 정의
│   ├── App.tsx                 # 루트 컴포넌트
│   └── main.tsx                # 진입점
├── tailwind.config.js          # TailwindCSS 설정
└── package.json
```

---

## 🧱 구성 요소 설명

### 📄 `TangramObject.ts`

```ts
export interface TangramObject {
  id: string;
  name: string;
  color: string;
  tangramImage: string;
  generatedImage: string;
}
```

* 하나의 오브젝트를 구성하는 속성 타입 정의

---

### 💠 `sampleObjects.ts`

* Tangram 오브젝트 예시들을 배열로 정의한 샘플 데이터

---

### 🧩 `IdeaFactory.tsx` (페이지)

* 메인 UI 페이지
* Tangram 블록들의 썸네일 그리드 표시
* 오브젝트 클릭 시 상세 정보 뷰 오픈

---

### 🧾 `SelectedObjectDetail.tsx`

* 클릭된 오브젝트의 `name`, `color`, `generatedImage` 표시
* 팝업 형태로 출력됨

---

### 🖼️ `ObjectCard.tsx`

* 오브젝트 전체 정보를 카드 형태로 보여주는 UI (현재는 상세 뷰에서는 사용하지 않음)

---

## 🎨 스타일

* [Tailwind CSS](https://tailwindcss.com/) 기반의 유틸리티 클래스 사용
* 반응형 대응 (`grid-cols-3 md:grid-cols-4 lg:grid-cols-5`)
* 이미지: `object-contain`, `overflow-hidden` 등으로 크기 조정

---

## 💡 TODO / 앞으로 확장할 기능 (예시)

* 🎤 음성으로 오브젝트 속성 등록 (STT 연동)
* 🧠 GPT API로 생성 이미지 만들기
* 📷 Tangram 블록 카메라 인식 (YOLO 연동)
* 💾 오브젝트 로컬/서버 저장