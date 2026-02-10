import Link from 'next/link';
import { ArrowRight, Globe, Zap, Lock, MonitorSmartphone } from 'lucide-react';

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 text-sm font-medium rounded-full mb-4">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          운영 중
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          JackerLab
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          누구나 무료로 사용할 수 있는 웹 서비스 플랫폼입니다.
        </p>
      </div>

      {/* About */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">소개</h2>
        <div className="text-gray-600 text-[15px] leading-relaxed space-y-3">
          <p>
            JackerLab은 개발자와 일반 사용자 모두를 위한 유틸리티 서비스 플랫폼입니다.
            온라인 도구, 공공데이터 조회, 웹 게임 등 다양한 서비스를 제공합니다.
          </p>
          <p>
            별도의 설치나 회원가입 없이 브라우저에서 바로 사용할 수 있으며,
            모든 서비스는 무료로 제공됩니다.
          </p>
        </div>
      </section>

      {/* Principles */}
      <section className="mb-10">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">특징</h2>
        <div className="grid grid-cols-2 gap-3">
          <div className="p-4 rounded-xl border border-gray-200">
            <Zap size={20} className="text-yellow-500 mb-2" />
            <h3 className="text-sm font-semibold text-gray-900 mb-1">무료 & 무제한</h3>
            <p className="text-xs text-gray-500">모든 기능을 무료로 제한 없이 사용</p>
          </div>
          <div className="p-4 rounded-xl border border-gray-200">
            <Lock size={20} className="text-green-500 mb-2" />
            <h3 className="text-sm font-semibold text-gray-900 mb-1">로그인 불필요</h3>
            <p className="text-xs text-gray-500">회원가입 없이 바로 사용 가능</p>
          </div>
          <div className="p-4 rounded-xl border border-gray-200">
            <MonitorSmartphone size={20} className="text-blue-500 mb-2" />
            <h3 className="text-sm font-semibold text-gray-900 mb-1">반응형</h3>
            <p className="text-xs text-gray-500">PC, 태블릿, 모바일 모두 지원</p>
          </div>
          <div className="p-4 rounded-xl border border-gray-200">
            <Globe size={20} className="text-purple-500 mb-2" />
            <h3 className="text-sm font-semibold text-gray-900 mb-1">브라우저 처리</h3>
            <p className="text-xs text-gray-500">데이터를 서버로 보내지 않아 안전</p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">바로가기</h2>
        <div className="grid gap-2">
          <Link
            href="/services"
            className="group flex items-center justify-between p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
          >
            <div>
              <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">서비스 목록</h3>
              <p className="text-sm text-gray-500">운영 중인 서비스 확인</p>
            </div>
            <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
          </Link>
        </div>
      </section>
    </div>
  );
}
