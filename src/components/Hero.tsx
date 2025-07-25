import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Zap, Battery, MapPin } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-accent/10 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium text-sm mb-6">
              <Zap className="w-4 h-4 mr-2" />
              Líder en LATAM
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Gestiona tu red de{' '}
              <span className="gradient-text">cargadores EV</span>{' '}
              en toda Latinoamérica
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              La plataforma más avanzada para monitorear, administrar y escalar tu infraestructura 
              de carga eléctrica con análisis en tiempo real y soporte 24/7.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Comenzar Gratis
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-gray-300">
                <Play className="w-5 h-5 mr-2" />
                Ver Demo
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">15K+</div>
                <div className="text-sm text-gray-600">Cargadores Activos</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">12</div>
                <div className="text-sm text-gray-600">Países LATAM</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              {/* Mock Dashboard */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Panel de Control</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-slow" />
                    <span className="text-sm text-gray-600">En vivo</span>
                  </div>
                </div>
                
                {/* Charger Status Cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-green-700">847</div>
                        <div className="text-sm text-green-600">Activos</div>
                      </div>
                      <Battery className="w-8 h-8 text-green-500" />
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-blue-700">23</div>
                        <div className="text-sm text-blue-600">En Uso</div>
                      </div>
                      <Zap className="w-8 h-8 text-blue-500" />
                    </div>
                  </div>
                </div>
                
                {/* Map Preview */}
                <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-gray-700">Cobertura Regional</span>
                    <MapPin className="w-4 h-4 text-gray-500" />
                  </div>
                  <div className="h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-700">LATAM</div>
                      <div className="text-sm text-gray-600">12 países conectados</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg animate-float">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '3s' }}>
              <Battery className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}