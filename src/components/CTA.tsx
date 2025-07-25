import { Button } from '@/components/ui/button'
import { ArrowRight, Zap, Users, TrendingUp } from 'lucide-react'

export function CTA() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-r from-primary to-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para transformar tu red de carga?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto">
            Únete a más de 500 empresas que ya están escalando sus operaciones 
            con la plataforma más avanzada de LATAM.
          </p>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Implementación Rápida</h3>
              <p className="text-white/80 text-sm">
                Conecta tus cargadores en menos de 24 horas con nuestro equipo de expertos
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Soporte Especializado</h3>
              <p className="text-white/80 text-sm">
                Equipo técnico dedicado en español y portugués disponible 24/7
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">ROI Garantizado</h3>
              <p className="text-white/80 text-sm">
                Aumenta tus ingresos hasta 40% con optimización inteligente
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            >
              Comenzar Prueba Gratuita
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold"
            >
              Agendar Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-white/20">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-sm">Sin compromiso de permanencia</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-sm">Configuración gratuita</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white rounded-full" />
                <span className="text-sm">Garantía de 30 días</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}