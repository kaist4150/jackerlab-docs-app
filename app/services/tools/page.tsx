import { ExternalLink } from 'lucide-react';

export default function ToolsServicePage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded-full">
            Tools
          </span>
          <a
            href="https://tools.jackerlab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-blue-600 transition-colors"
          >
            tools.jackerlab.com
            <ExternalLink size={12} />
          </a>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
          온라인 도구 모음
        </h1>
        <p className="text-gray-600 leading-relaxed">
          개발자와 일반 사용자를 위한 100개 이상의 온라인 도구.
          JSON 포맷터, 인코더, 계산기, 변환기 등을 브라우저에서 바로 사용할 수 있습니다.
        </p>
      </div>

      {/* Quick Access */}
      <a
        href="https://tools.jackerlab.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium mb-10"
      >
        서비스 바로가기
        <ExternalLink size={14} />
      </a>

      {/* Content */}
      <div className="prose prose-gray max-w-none">
        <h2 id="features" className="text-xl font-semibold text-gray-900 mb-4 pt-6 border-t border-gray-100">
          주요 특징
        </h2>
        <ul className="space-y-2 text-gray-600 mb-8">
          <li><strong>100개+ 도구</strong> — 개발, 디자인, 금융, 생활 등 다양한 분야</li>
          <li><strong>브라우저 처리</strong> — 서버로 데이터를 보내지 않아 안전</li>
          <li><strong>무료 & 무제한</strong> — 로그인 없이 모든 기능 이용</li>
          <li><strong>반응형</strong> — PC, 태블릿, 모바일 지원</li>
        </ul>

        <h2 id="categories" className="text-xl font-semibold text-gray-900 mb-4 pt-6 border-t border-gray-100">
          도구 카테고리
        </h2>

        <div className="grid gap-4 mb-8">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-1">개발자 도구</h3>
            <p className="text-sm text-gray-600">
              JSON/XML/YAML 포맷터, Base64/URL 인코더, UUID/Hash 생성기, JWT 디코더, 정규식 테스터
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-1">텍스트 도구</h3>
            <p className="text-sm text-gray-600">
              Markdown 에디터, 글자수 세기, 텍스트 비교, Lorem Ipsum, 한글 더미 텍스트
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-1">디자인 도구</h3>
            <p className="text-sm text-gray-600">
              색상 선택기, QR 코드, 그라디언트, 이미지 압축/변환, 아이콘 검색
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-1">금융/비즈니스</h3>
            <p className="text-sm text-gray-600">
              급여, 퇴직금, 대출 이자, 세금, 투자 수익률, 마진율 계산기
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-1">유틸리티</h3>
            <p className="text-sm text-gray-600">
              날짜 계산, 단위 변환, 환율, 비밀번호 생성, BMI 계산
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-1">사주/운세</h3>
            <p className="text-sm text-gray-600">
              만세력 조회, 사주팔자, 오행 분석, 궁합 (KASI 데이터 기반)
            </p>
          </div>
        </div>

        <h2 id="tech" className="text-xl font-semibold text-gray-900 mb-4 pt-6 border-t border-gray-100">
          기술 스택
        </h2>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg">Next.js 16</span>
          <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg">TypeScript</span>
          <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg">Tailwind CSS</span>
          <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg">Lucide Icons</span>
          <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-lg">Vercel</span>
        </div>
      </div>
    </div>
  );
}
