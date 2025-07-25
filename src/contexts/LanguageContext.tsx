import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'es' | 'pt' | 'en'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  es: {
    // Navigation
    'nav.features': 'Características',
    'nav.pricing': 'Precios',
    'nav.testimonials': 'Testimonios',
    'nav.contact': 'Contacto',
    'nav.cta': 'Comenzar Gratis',
    
    // Features
    'features.title': 'Todo lo que necesitas para',
    'features.titleHighlight': 'gestionar tu red',
    'features.subtitle': 'Una plataforma completa diseñada específicamente para el mercado latinoamericano con todas las herramientas que necesitas para escalar tu negocio.',
    'features.realtime': 'Monitoreo en Tiempo Real',
    'features.realtimeDesc': 'Supervisa el estado de todos tus cargadores con actualizaciones instantáneas y alertas automáticas.',
    'features.mobile': 'App Móvil Nativa',
    'features.mobileDesc': 'Gestiona tu red desde cualquier lugar con nuestra aplicación móvil para iOS y Android.',
    'features.analytics': 'Analytics Avanzados',
    'features.analyticsDesc': 'Obtén insights detallados sobre uso, ingresos y rendimiento con reportes personalizables.',
    'features.ai': 'IA Predictiva',
    'features.aiDesc': 'Algoritmos de machine learning que predicen demanda, optimizan precios y detectan anomalías automáticamente.',
    'features.smartRouting': 'Enrutamiento Inteligente',
    'features.smartRoutingDesc': 'IA que dirige usuarios al cargador más conveniente basado en disponibilidad, ubicación y preferencias.',
    'features.autoOptimization': 'Optimización Automática',
    'features.autoOptimizationDesc': 'Sistema que ajusta automáticamente precios, horarios y mantenimiento usando datos en tiempo real.',
    'features.security': 'Seguridad Empresarial',
    'features.securityDesc': 'Protección de datos de nivel bancario con cifrado end-to-end y cumplimiento normativo.',
    'features.coverage': 'Cobertura LATAM',
    'features.coverageDesc': 'Soporte completo para 12 países con adaptación a regulaciones locales y monedas.',
    'features.support': 'Soporte 24/7',
    'features.supportDesc': 'Asistencia técnica especializada disponible las 24 horas en español y portugués.',
    'features.payments': 'Pagos Integrados',
    'features.paymentsDesc': 'Procesamiento de pagos con múltiples métodos y monedas locales de LATAM.',
    'features.api': 'API Completa',
    'features.apiDesc': 'Integra con sistemas existentes usando nuestra API RESTful y webhooks en tiempo real.',
    
    // Pricing
    'pricing.title': 'Planes que se adaptan a',
    'pricing.titleHighlight': 'tu crecimiento',
    'pricing.subtitle': 'Desde startups hasta grandes corporaciones, tenemos el plan perfecto para tu red de cargadores eléctricos en LATAM.',
    'pricing.starter': 'Starter',
    'pricing.starterDesc': 'Perfecto para pequeñas redes de carga',
    'pricing.starterChargers': 'Hasta 10 cargadores',
    'pricing.professional': 'Professional',
    'pricing.enterprise': 'Enterprise',
    'pricing.popular': 'Más Popular',
    'pricing.contactSales': 'Contactar Ventas',
    'pricing.guarantee': 'Garantía de devolución de 30 días'
  },
  pt: {
    // Navigation
    'nav.features': 'Recursos',
    'nav.pricing': 'Preços',
    'nav.testimonials': 'Depoimentos',
    'nav.contact': 'Contato',
    'nav.cta': 'Começar Grátis',
    
    // Features
    'features.title': 'Tudo que você precisa para',
    'features.titleHighlight': 'gerenciar sua rede',
    'features.subtitle': 'Uma plataforma completa projetada especificamente para o mercado latino-americano com todas as ferramentas necessárias para escalar seu negócio.',
    'features.realtime': 'Monitoramento em Tempo Real',
    'features.realtimeDesc': 'Monitore o status de todos os seus carregadores com atualizações instantâneas e alertas automáticos.',
    'features.mobile': 'App Móvel Nativo',
    'features.mobileDesc': 'Gerencie sua rede de qualquer lugar com nosso aplicativo móvel para iOS e Android.',
    'features.analytics': 'Analytics Avançados',
    'features.analyticsDesc': 'Obtenha insights detalhados sobre uso, receita e desempenho com relatórios personalizáveis.',
    'features.ai': 'IA Preditiva',
    'features.aiDesc': 'Algoritmos de machine learning que preveem demanda, otimizam preços e detectam anomalias automaticamente.',
    'features.smartRouting': 'Roteamento Inteligente',
    'features.smartRoutingDesc': 'IA que direciona usuários para o carregador mais conveniente baseado em disponibilidade, localização e preferências.',
    'features.autoOptimization': 'Otimização Automática',
    'features.autoOptimizationDesc': 'Sistema que ajusta automaticamente preços, horários e manutenção usando dados em tempo real.',
    'features.security': 'Segurança Empresarial',
    'features.securityDesc': 'Proteção de dados de nível bancário com criptografia end-to-end e conformidade regulatória.',
    'features.coverage': 'Cobertura LATAM',
    'features.coverageDesc': 'Suporte completo para 12 países com adaptação a regulamentações locais e moedas.',
    'features.support': 'Suporte 24/7',
    'features.supportDesc': 'Assistência técnica especializada disponível 24 horas em espanhol e português.',
    'features.payments': 'Pagamentos Integrados',
    'features.paymentsDesc': 'Processamento de pagamentos com múltiplos métodos e moedas locais da América Latina.',
    'features.api': 'API Completa',
    'features.apiDesc': 'Integre com sistemas existentes usando nossa API RESTful e webhooks em tempo real.',
    
    // Pricing
    'pricing.title': 'Planos que se adaptam ao',
    'pricing.titleHighlight': 'seu crescimento',
    'pricing.subtitle': 'De startups a grandes corporações, temos o plano perfeito para sua rede de carregadores elétricos na América Latina.',
    'pricing.starter': 'Starter',
    'pricing.starterDesc': 'Perfeito para pequenas redes de carregamento',
    'pricing.starterChargers': 'Até 10 carregadores',
    'pricing.professional': 'Professional',
    'pricing.enterprise': 'Enterprise',
    'pricing.popular': 'Mais Popular',
    'pricing.contactSales': 'Contatar Vendas',
    'pricing.guarantee': 'Garantia de devolução de 30 dias'
  },
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.contact': 'Contact',
    'nav.cta': 'Start Free',
    
    // Features
    'features.title': 'Everything you need to',
    'features.titleHighlight': 'manage your network',
    'features.subtitle': 'A complete platform designed specifically for the Latin American market with all the tools you need to scale your business.',
    'features.realtime': 'Real-time Monitoring',
    'features.realtimeDesc': 'Monitor the status of all your chargers with instant updates and automatic alerts.',
    'features.mobile': 'Native Mobile App',
    'features.mobileDesc': 'Manage your network from anywhere with our mobile app for iOS and Android.',
    'features.analytics': 'Advanced Analytics',
    'features.analyticsDesc': 'Get detailed insights on usage, revenue, and performance with customizable reports.',
    'features.ai': 'Predictive AI',
    'features.aiDesc': 'Machine learning algorithms that predict demand, optimize pricing, and detect anomalies automatically.',
    'features.smartRouting': 'Smart Routing',
    'features.smartRoutingDesc': 'AI that directs users to the most convenient charger based on availability, location, and preferences.',
    'features.autoOptimization': 'Auto Optimization',
    'features.autoOptimizationDesc': 'System that automatically adjusts pricing, schedules, and maintenance using real-time data.',
    'features.security': 'Enterprise Security',
    'features.securityDesc': 'Bank-level data protection with end-to-end encryption and regulatory compliance.',
    'features.coverage': 'LATAM Coverage',
    'features.coverageDesc': 'Complete support for 12 countries with adaptation to local regulations and currencies.',
    'features.support': '24/7 Support',
    'features.supportDesc': 'Specialized technical assistance available 24 hours in Spanish and Portuguese.',
    'features.payments': 'Integrated Payments',
    'features.paymentsDesc': 'Payment processing with multiple methods and local LATAM currencies.',
    'features.api': 'Complete API',
    'features.apiDesc': 'Integrate with existing systems using our RESTful API and real-time webhooks.',
    
    // Pricing
    'pricing.title': 'Plans that adapt to',
    'pricing.titleHighlight': 'your growth',
    'pricing.subtitle': 'From startups to large corporations, we have the perfect plan for your electric charger network in LATAM.',
    'pricing.starter': 'Starter',
    'pricing.starterDesc': 'Perfect for small charging networks',
    'pricing.starterChargers': 'Up to 10 chargers',
    'pricing.professional': 'Professional',
    'pricing.enterprise': 'Enterprise',
    'pricing.popular': 'Most Popular',
    'pricing.contactSales': 'Contact Sales',
    'pricing.guarantee': '30-day money back guarantee'
  }
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}