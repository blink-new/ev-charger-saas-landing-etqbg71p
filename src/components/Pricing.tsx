import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, Zap, Brain, Sparkles } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function Pricing() {
  const { t, language } = useLanguage()

  const plans = [
    {
      name: t('pricing.starter'),
      price: language === 'en' ? '$99' : '$99',
      period: language === 'en' ? '/month' : '/mes',
      description: t('pricing.starterDesc'),
      features: [
        t('pricing.starterChargers'),
        language === 'en' ? 'Basic monitoring' : 'Monitoreo básico',
        language === 'en' ? 'Mobile app' : 'App móvil',
        language === 'en' ? 'Email support' : 'Soporte por email',
        language === 'en' ? 'Monthly reports' : 'Reportes mensuales',
        language === 'en' ? 'Basic API' : 'API básica'
      ],
      popular: false,
      cta: t('nav.cta'),
      aiFeatures: []
    },
    {
      name: t('pricing.professional'),
      price: language === 'en' ? '$299' : '$299',
      period: language === 'en' ? '/month' : '/mes',
      description: language === 'en' ? 'Ideal for growing businesses' : 'Ideal para empresas en crecimiento',
      features: [
        language === 'en' ? 'Up to 100 chargers' : 'Hasta 100 cargadores',
        language === 'en' ? 'Advanced monitoring' : 'Monitoreo avanzado',
        language === 'en' ? 'Real-time analytics' : 'Analytics en tiempo real',
        language === 'en' ? '24/7 priority support' : 'Soporte prioritario 24/7',
        language === 'en' ? 'Custom reports' : 'Reportes personalizados',
        language === 'en' ? 'Complete API' : 'API completa',
        language === 'en' ? 'System integrations' : 'Integración con sistemas',
        language === 'en' ? 'Multi-user' : 'Multi-usuario'
      ],
      popular: true,
      cta: t('pricing.popular'),
      aiFeatures: [
        language === 'en' ? 'Demand prediction' : 'Predicción de demanda',
        language === 'en' ? 'Smart routing' : 'Enrutamiento inteligente',
        language === 'en' ? 'Price optimization' : 'Optimización de precios'
      ]
    },
    {
      name: t('pricing.enterprise'),
      price: language === 'en' ? 'Custom' : 'Personalizado',
      period: '',
      description: language === 'en' ? 'For large networks and corporations' : 'Para grandes redes y corporaciones',
      features: [
        language === 'en' ? 'Unlimited chargers' : 'Cargadores ilimitados',
        language === 'en' ? 'Enterprise monitoring' : 'Monitoreo empresarial',
        language === 'en' ? 'Advanced BI & analytics' : 'BI y analytics avanzados',
        language === 'en' ? 'Dedicated support' : 'Soporte dedicado',
        language === 'en' ? 'Guaranteed SLA' : 'SLA garantizado',
        language === 'en' ? 'Enterprise API' : 'API enterprise',
        language === 'en' ? 'Custom integrations' : 'Integraciones personalizadas',
        language === 'en' ? 'Fleet management' : 'Gestión de flotas',
        language === 'en' ? 'Regulatory compliance' : 'Cumplimiento normativo',
        language === 'en' ? 'Assisted implementation' : 'Implementación asistida'
      ],
      popular: false,
      cta: t('pricing.contactSales'),
      aiFeatures: [
        language === 'en' ? 'Full AI suite' : 'Suite completa de IA',
        language === 'en' ? 'Predictive maintenance' : 'Mantenimiento predictivo',
        language === 'en' ? 'Custom AI models' : 'Modelos de IA personalizados',
        language === 'en' ? 'Advanced automation' : 'Automatización avanzada'
      ]
    }
  ]

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t('pricing.title')}{' '}
            <span className="gradient-text">{t('pricing.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative ${
                plan.popular 
                  ? 'border-primary shadow-lg scale-105' 
                  : 'border-gray-200'
              } hover:shadow-xl transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-white px-4 py-1">
                    <Zap className="w-3 h-3 mr-1" />
                    {t('pricing.popular')}
                  </Badge>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <p className="text-gray-600">{plan.description}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <Button 
                  className={`w-full mb-6 ${
                    plan.popular 
                      ? 'bg-primary hover:bg-primary/90' 
                      : 'bg-gray-900 hover:bg-gray-800'
                  }`}
                >
                  {plan.cta}
                </Button>

                {/* AI Features Section */}
                {plan.aiFeatures.length > 0 && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-100">
                    <div className="flex items-center space-x-2 mb-3">
                      <Brain className="w-4 h-4 text-purple-600" />
                      <span className="text-sm font-semibold text-purple-700">
                        {language === 'en' ? 'AI Features' : 'Características de IA'}
                      </span>
                      <Sparkles className="w-3 h-3 text-purple-500" />
                    </div>
                    <div className="space-y-2">
                      {plan.aiFeatures.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="flex-shrink-0">
                            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                          </div>
                          <span className="text-purple-700 text-sm font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="flex-shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {language === 'en' ? 'Need something different?' : '¿Necesitas algo diferente?'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language === 'en' 
                ? 'We offer custom plans for specific needs, including volume discounts and annual contracts.'
                : 'Ofrecemos planes personalizados para necesidades específicas, incluyendo descuentos por volumen y contratos anuales.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" className="border-gray-300">
                {language === 'en' ? 'Request Demo' : 'Solicitar Demo'}
              </Button>
              <Button className="bg-primary hover:bg-primary/90">
                {language === 'en' ? 'Talk to Sales' : 'Hablar con Ventas'}
              </Button>
            </div>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-2 text-gray-600">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <Check className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-sm">{t('pricing.guarantee')}</span>
          </div>
        </div>
      </div>
    </section>
  )
}