import Link from 'next/link';
import { Wrench, Database, Gamepad2, ArrowRight } from 'lucide-react';

const services = [
  {
    name: 'Tools',
    href: '/services/tools',
    description: '100개 이상의 온라인 도구. JSON 포맷터, 인코더, 계산기 등.',
    icon: Wrench,
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
  },
  {
    name: 'Data',
    href: '/services/data',
    description: '31개 공공데이터 소스 통합. API 프록시로 CORS 해결.',
    icon: Database,
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
  },
  {
    name: 'Games',
    href: '/services/games',
    description: '브라우저에서 즐기는 10개 웹 게임. 설치 없이 바로 플레이.',
    icon: Gamepad2,
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
  },
];

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
          JackerLab 문서
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          개발자와 모두를 위한 서비스 플랫폼.<br />
          유용한 도구, 공공데이터 조회, 게임을 제공합니다.
        </p>
      </div>

      {/* Services Grid */}
      <section className="mb-12">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
          서비스
        </h2>
        <div className="grid gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.name}
                href={service.href}
                className="group relative flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
              >
                <div className={`w-12 h-12 ${service.lightColor} rounded-xl flex items-center justify-center`}>
                  <Icon size={24} className={service.color.replace('bg-', 'text-')} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
                <ArrowRight size={16} className="text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
              </Link>
            );
          })}
        </div>
      </section>

      {/* Info */}
      <section className="p-6 bg-gradient-to-br from-gray-50 to-gray-100/50 rounded-2xl border border-gray-200">
        <h2 className="font-semibold text-gray-900 mb-3">JackerLab이란?</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          JackerLab은 개발자와 일반 사용자 모두를 위한 유틸리티 서비스 플랫폼입니다.
          별도의 설치나 로그인 없이 브라우저에서 바로 사용할 수 있으며,
          모든 서비스는 무료로 제공됩니다.
        </p>
        <div className="flex flex-wrap gap-2 text-xs">
          <span className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-600">Next.js</span>
          <span className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-600">TypeScript</span>
          <span className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-600">Tailwind CSS</span>
          <span className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-gray-600">Vercel</span>
        </div>
      </section>
    </div>
  );
}
