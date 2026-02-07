import { ExternalLink } from 'lucide-react';

export default function DataServicePage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
            Data
          </span>
          <a
            href="https://data.jackerlab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-green-600 transition-colors"
          >
            data.jackerlab.com
            <ExternalLink size={12} />
          </a>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
          공공데이터 통합 조회
        </h1>
        <p className="text-gray-600 leading-relaxed">
          공공데이터포털, 네이버, 한국수출입은행 등 31개 데이터 소스를 통합 제공.
          API 프록시로 CORS 문제 없이 클라이언트에서 직접 호출할 수 있습니다.
        </p>
      </div>

      {/* Quick Access */}
      <a
        href="https://data.jackerlab.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm font-medium mb-10"
      >
        서비스 바로가기
        <ExternalLink size={14} />
      </a>

      {/* Content */}
      <div className="prose prose-gray max-w-none">
        <h2 id="features" className="text-xl font-semibold text-gray-900 mb-4 pt-6 border-t border-gray-100">
          주요 기능
        </h2>
        <ul className="space-y-2 text-gray-600 mb-8">
          <li><strong>31개 데이터 소스</strong> — 공공데이터포털, 네이버, Free API 등</li>
          <li><strong>API 프록시</strong> — CORS 우회로 클라이언트 직접 호출</li>
          <li><strong>소스 브라우징</strong> — 제공자별, 카테고리별 탐색</li>
          <li><strong>실시간 데이터</strong> — 날씨, 환율, 암호화폐 등</li>
        </ul>

        <h2 id="sources" className="text-xl font-semibold text-gray-900 mb-4 pt-6 border-t border-gray-100">
          데이터 소스
        </h2>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
              공공데이터포털
              <span className="text-xs text-gray-500 font-normal">24개</span>
            </h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div className="p-2 bg-gray-50 rounded">에어코리아 (대기질)</div>
              <div className="p-2 bg-gray-50 rounded">금융위원회 (주식/공시)</div>
              <div className="p-2 bg-gray-50 rounded">식약처 (의약품/식품)</div>
              <div className="p-2 bg-gray-50 rounded">국토부 (부동산 실거래)</div>
              <div className="p-2 bg-gray-50 rounded">기상청 (단기/중기예보)</div>
              <div className="p-2 bg-gray-50 rounded">한국관광공사 (관광정보)</div>
              <div className="p-2 bg-gray-50 rounded">건강보험심사평가원</div>
              <div className="p-2 bg-gray-50 rounded">공휴일, 사업자, 조달청 등</div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
              네이버 오픈API
              <span className="text-xs text-gray-500 font-normal">2개</span>
            </h3>
            <p className="text-sm text-gray-600">데이터랩 (검색어 트렌드), 네이버 검색</p>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
              한국수출입은행
              <span className="text-xs text-gray-500 font-normal">1개</span>
            </h3>
            <p className="text-sm text-gray-600">현재 환율 정보</p>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
              Free API
              <span className="text-xs text-gray-500 font-normal">3개</span>
            </h3>
            <p className="text-sm text-gray-600">Open-Meteo (날씨), CoinGecko (암호화폐), REST Countries (국가정보)</p>
          </div>
        </div>

      </div>
    </div>
  );
}
