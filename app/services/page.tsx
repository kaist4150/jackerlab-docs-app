import { ExternalLink, Wrench, Database, Gamepad2, TrendingUp, LayoutTemplate, BookOpen, Code } from 'lucide-react';

const services = [
  {
    name: 'Tools',
    url: 'https://tools.jackerlab.com',
    description: '개발자와 일반 사용자를 위한 100개 이상의 온라인 도구.',
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    icon: Wrench,
    categories: [
      { name: '개발자 도구', detail: 'JSON/XML 포맷터, Base64 인코더, UUID, JWT 디코더, 정규식' },
      { name: '텍스트 도구', detail: 'Markdown 에디터, 글자수 세기, 텍스트 비교' },
      { name: '디자인 도구', detail: '색상 선택기, QR 코드, 이미지 압축/변환' },
      { name: '금융/비즈니스', detail: '급여, 퇴직금, 대출 이자, 세금 계산기' },
      { name: '유틸리티', detail: '날짜 계산, 단위 변환, 환율, 비밀번호 생성' },
      { name: '사주/운세', detail: '만세력, 사주팔자, 오행 분석 (KASI 기반)' },
    ],
  },
  {
    name: 'Data',
    url: 'https://data.jackerlab.com',
    description: '31개 공공데이터 소스 통합. API 프록시로 CORS 문제 해결.',
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
    textColor: 'text-green-700',
    borderColor: 'border-green-200',
    icon: Database,
    categories: [
      { name: '공공데이터포털', detail: '에어코리아, 기상청, 금융위, 국토부 등 24개' },
      { name: '네이버 오픈API', detail: '데이터랩 (검색 트렌드), 네이버 검색' },
      { name: '한국수출입은행', detail: '현재 환율 정보' },
      { name: 'Free API', detail: 'Open-Meteo, CoinGecko, REST Countries' },
    ],
  },
  {
    name: 'Games',
    url: 'https://games.jackerlab.com',
    description: '설치 없이 브라우저에서 바로 플레이하는 10개 웹 게임.',
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
    textColor: 'text-purple-700',
    borderColor: 'border-purple-200',
    icon: Gamepad2,
    categories: [
      { name: '클래식', detail: '테트리스, 2048, 스네이크, 틱택토, 벽돌깨기' },
      { name: '퍼즐/기타', detail: '지뢰찾기, 메모리카드, 플래피, 타이핑, 리액션' },
    ],
  },
  {
    name: 'Trading',
    url: 'https://trading.jackerlab.com',
    description: '투자 분석 도구와 시세 조회, 계산기.',
    color: 'bg-orange-500',
    lightColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-200',
    icon: TrendingUp,
    categories: [
      { name: '시세 조회', detail: '국내/해외 주식, 암호화폐, 채권, 파생상품' },
      { name: '투자 계산기', detail: '레버리지, 마진, 수익률, 포지션, 평균단가, 수수료, 배당금' },
    ],
  },
  {
    name: 'Templates',
    url: 'https://templates.jackerlab.com',
    description: '웹 UI 템플릿 데모와 코드 제공.',
    color: 'bg-pink-500',
    lightColor: 'bg-pink-50',
    textColor: 'text-pink-700',
    borderColor: 'border-pink-200',
    icon: LayoutTemplate,
    categories: [
      { name: '웹 페이지', detail: '대시보드, 랜딩, 블로그, 이커머스, 포트폴리오' },
      { name: '섹션/컴포넌트', detail: '프라이싱, 히어로, 네비게이션, 푸터, FAQ, 폼, 모달' },
      { name: '워크시트', detail: '한글, 영어, 일본어, 수학, 색칠, 퍼즐 학습지' },
    ],
  },
  {
    name: 'Playground',
    url: 'https://playground.jackerlab.com',
    description: '22개 언어/프레임워크 코드 에디터와 실시간 실행 환경.',
    color: 'bg-cyan-500',
    lightColor: 'bg-cyan-50',
    textColor: 'text-cyan-700',
    borderColor: 'border-cyan-200',
    icon: Code,
    categories: [
      { name: '웹 개발', detail: 'HTML/JS, React, Vue' },
      { name: '프로그래밍', detail: 'JavaScript, TypeScript, Python, Go, Lua, C/C++, SQL, Blockly' },
      { name: '시각화', detail: 'Mermaid, Chart.js, D3.js' },
      { name: '크리에이티브', detail: 'Three.js, p5.js, Tone.js, Matter.js, GLSL, A-Frame' },
      { name: 'AI/기타', detail: 'TensorFlow.js, LaTeX' },
    ],
  },
  {
    name: 'Docs',
    url: 'https://docs.jackerlab.com',
    description: 'JackerLab 서비스 문서와 가이드.',
    color: 'bg-gray-600',
    lightColor: 'bg-gray-50',
    textColor: 'text-gray-700',
    borderColor: 'border-gray-200',
    icon: BookOpen,
    categories: [
      { name: '소개', detail: 'JackerLab 플랫폼 소개' },
      { name: '서비스 목록', detail: '운영 중인 서비스 안내' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
          서비스
        </h1>
        <p className="text-gray-600 leading-relaxed">
          JackerLab에서 운영 중인 서비스 목록입니다. 모든 서비스는 무료이며 로그인 없이 사용할 수 있습니다.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <section
              key={service.name}
              className={`border ${service.borderColor} rounded-xl overflow-hidden`}
            >
              {/* Service Header */}
              <div className={`${service.lightColor} px-6 py-5 flex items-center justify-between`}>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 ${service.color} rounded-lg flex items-center justify-center`}>
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-gray-900">{service.name}</h2>
                    <p className="text-sm text-gray-600">{service.description}</p>
                  </div>
                </div>
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 ${service.color} text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity`}
                >
                  바로가기
                  <ExternalLink size={14} />
                </a>
              </div>

              {/* Categories */}
              <div className="px-6 py-4">
                <div className="grid gap-2">
                  {service.categories.map((cat) => (
                    <div key={cat.name} className="flex items-baseline gap-3 text-sm py-1.5">
                      <span className={`font-medium ${service.textColor} min-w-[100px] shrink-0`}>
                        {cat.name}
                      </span>
                      <span className="text-gray-600">{cat.detail}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile link */}
                <a
                  href={service.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`sm:hidden mt-4 flex items-center justify-center gap-1.5 px-4 py-2.5 ${service.color} text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity`}
                >
                  바로가기
                  <ExternalLink size={14} />
                </a>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
