import { 
  Monitor, 
  Smartphone, 
  BarChart3, 
  Shield, 
  Globe, 
  Headphones,
  CreditCard,
  Settings,
  Brain,
  Route,
  Zap
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/contexts/LanguageContext'

export function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: Monitor,
      title: t('features.realtime'),
      description: t('features.realtimeDesc'),
      color: 'text-blue-600'
    },
    {
      icon: Brain,
      title: t('features.ai'),
      description: t('features.aiDesc'),
      color: 'text-purple-600',
      isNew: true
    },
    {
      icon: Route,
      title: t('features.smartRouting'),
      description: t('features.smartRoutingDesc'),
      color: 'text-green-600',
      isNew: true
    },
    {
      icon: Zap,
      title: t('features.autoOptimization'),
      description: t('features.autoOptimizationDesc'),
      color: 'text-yellow-600',
      isNew: true
    },
    {
      icon: Smartphone,
      title: t('features.mobile'),
      description: t('features.mobileDesc'),
      color: 'text-green-600'
    },
    {
      icon: BarChart3,
      title: t('features.analytics'),
      description: t('features.analyticsDesc'),
      color: 'text-purple-600'
    },
    {
      icon: Shield,
      title: t('features.security'),
      description: t('features.securityDesc'),
      color: 'text-red-600'
    },
    {
      icon: Globe,
      title: t('features.coverage'),
      description: t('features.coverageDesc'),
      color: 'text-indigo-600'
    },
    {
      icon: Headphones,
      title: t('features.support'),
      description: t('features.supportDesc'),
      color: 'text-orange-600'
    },
    {
      icon: CreditCard,
      title: t('features.payments'),
      description: t('features.paymentsDesc'),
      color: 'text-teal-600'
    },
    {
      icon: Settings,
      title: t('features.api'),
      description: t('features.apiDesc'),
      color: 'text-gray-600'
    }
  ]

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('features.title')}{' '}
            <span className="gradient-text">{t('features.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-primary/20 relative"
              >
                {feature.isNew && (
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-primary to-accent text-white text-xs px-2 py-1 rounded-full font-medium">
                    AI
                  </div>
                )}
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                      <Icon className={`w-6 h-6 ${feature.color} group-hover:text-primary transition-colors`} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* AI Features Highlight */}
        <div className="mt-20 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 lg:p-12 border border-purple-100">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                  Powered by AI
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Inteligencia Artificial Integrada
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Nuestra plataforma utiliza algoritmos avanzados de machine learning para 
                optimizar automáticamente tu red de cargadores, predecir demanda y 
                maximizar tus ingresos sin intervención manual.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-gray-700">Predicción de demanda con 95% de precisión</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-gray-700">Optimización automática de precios dinámicos</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-gray-700">Detección temprana de fallas y mantenimiento predictivo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full" />
                  <span className="text-gray-700">Enrutamiento inteligente de usuarios</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="text-center mb-4">
                  <h4 className="font-semibold text-gray-900">AI Dashboard Preview</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span className="text-sm text-gray-700">Demanda Predicha (Próximas 2h)</span>
                    <span className="text-sm font-semibold text-green-600">↗ +23%</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <span className="text-sm text-gray-700">Precio Optimizado</span>
                    <span className="text-sm font-semibold text-blue-600">$0.45/kWh</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <span className="text-sm text-gray-700">Mantenimiento Sugerido</span>
                    <span className="text-sm font-semibold text-yellow-600">Cargador #7</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <span className="text-sm text-gray-700">Eficiencia de Red</span>
                    <span className="text-sm font-semibold text-purple-600">94.2%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Regional Coverage */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Diseñado para Latinoamérica
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Entendemos los desafíos únicos del mercado LATAM. Nuestra plataforma 
                incluye soporte para múltiples monedas, regulaciones locales, y está 
                optimizada para la infraestructura de la región.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray-700">Soporte para 12 monedas locales</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray-700">Cumplimiento normativo por país</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-gray-700">Optimizado para conectividad local</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="text-center mb-4">
                  <h4 className="font-semibold text-gray-900">Países Soportados</h4>
                </div>
                <div className="grid grid-cols-3 gap-3 text-sm">
                  {[
                    'México', 'Brasil', 'Argentina',
                    'Colombia', 'Chile', 'Perú',
                    'Ecuador', 'Uruguay', 'Paraguay',
                    'Bolivia', 'Venezuela', 'Costa Rica'
                  ].map((country) => (
                    <div key={country} className="text-center py-2 px-3 bg-gray-50 rounded-lg">
                      {country}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}