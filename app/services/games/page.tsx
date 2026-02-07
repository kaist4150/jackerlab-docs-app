import { ExternalLink } from 'lucide-react';

export default function GamesServicePage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className="px-2.5 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
            Games
          </span>
          <a
            href="https://games.jackerlab.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-purple-600 transition-colors"
          >
            games.jackerlab.com
            <ExternalLink size={12} />
          </a>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
          웹 게임 플랫폼
        </h1>
        <p className="text-gray-600 leading-relaxed">
          설치 없이 브라우저에서 바로 플레이할 수 있는 게임 모음.
          테트리스, 2048, 스네이크 등 10개 게임을 무료로 즐길 수 있습니다.
        </p>
      </div>

      {/* Quick Access */}
      <a
        href="https://games.jackerlab.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium mb-10"
      >
        게임하러 가기
        <ExternalLink size={14} />
      </a>

      {/* Content */}
      <div className="prose prose-gray max-w-none">
        <h2 id="features" className="text-xl font-semibold text-gray-900 mb-4 pt-6 border-t border-gray-100">
          주요 특징
        </h2>
        <ul className="space-y-2 text-gray-600 mb-8">
          <li><strong>무설치</strong> — 브라우저에서 바로 플레이</li>
          <li><strong>무료</strong> — 모든 게임 무료, 광고 최소화</li>
          <li><strong>크로스 플랫폼</strong> — PC, 태블릿, 모바일 지원</li>
          <li><strong>오프라인</strong> — 일부 게임은 오프라인에서도 플레이</li>
          <li><strong>점수 기록</strong> — 로컬 스토리지에 최고 점수 저장</li>
        </ul>

        <h2 id="games" className="text-xl font-semibold text-gray-900 mb-4 pt-6 border-t border-gray-100">
          게임 목록
        </h2>

        <div className="space-y-6 mb-8">
          <div>
            <h3 className="font-medium text-gray-900 mb-3">클래식 게임</h3>
            <div className="grid gap-2 text-sm">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">테트리스</span>
                <span className="text-gray-500">떨어지는 블록을 맞춰 줄을 없애는 퍼즐</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">2048</span>
                <span className="text-gray-500">같은 숫자를 합쳐 2048을 만드는 퍼즐</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">스네이크</span>
                <span className="text-gray-500">먹이를 먹고 점점 길어지는 뱀 게임</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">틱택토</span>
                <span className="text-gray-500">3x3 칸에 먼저 한 줄을 만드는 게임</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">벽돌깨기</span>
                <span className="text-gray-500">공을 튕겨 벽돌을 부수는 아케이드</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-3">퍼즐/기타</h3>
            <div className="grid gap-2 text-sm">
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">지뢰찾기</span>
                <span className="text-gray-500">숫자 힌트로 지뢰 위치를 추론</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">메모리 카드</span>
                <span className="text-gray-500">뒤집힌 카드의 짝을 맞추는 기억력 게임</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">플래피</span>
                <span className="text-gray-500">장애물을 피해 날아가는 게임</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">타이핑</span>
                <span className="text-gray-500">타자 속도와 정확도 측정</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-900">리액션</span>
                <span className="text-gray-500">반응 속도 테스트</span>
              </div>
            </div>
          </div>
        </div>

        <h2 id="controls" className="text-xl font-semibold text-gray-900 mb-4 pt-6 border-t border-gray-100">
          조작 방법
        </h2>
        <div className="grid gap-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">PC (키보드)</h3>
            <p className="text-sm text-gray-600">
              방향키(↑↓←→) 또는 WASD로 조작. Space/Enter로 시작/일시정지.
            </p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <h3 className="font-medium text-gray-900 mb-2">모바일 (터치)</h3>
            <p className="text-sm text-gray-600">
              스와이프로 방향 조작, 탭으로 액션. 화면에 터치 컨트롤 표시.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
