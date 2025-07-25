import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      role: 'CEO, EcoCharge México',
      company: 'México',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'ChargeLATAM transformó completamente nuestra operación. Pasamos de gestionar 50 cargadores manualmente a 300+ con total control y visibilidad. El ROI fue inmediato.'
    },
    {
      name: 'Ana Silva',
      role: 'Directora de Operaciones',
      company: 'VoltBrasil',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'La plataforma es increíblemente intuitiva y el soporte en portugués es excepcional. Nuestros técnicos adoptaron el sistema en días, no semanas.'
    },
    {
      name: 'Roberto García',
      role: 'Fundador, ChargeColombia',
      company: 'Colombia',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'Los analytics nos ayudaron a identificar patrones de uso que aumentaron nuestros ingresos en 40%. Es como tener un consultor 24/7.'
    },
    {
      name: 'María Fernández',
      role: 'CTO, ElectroChile',
      company: 'Chile',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'La API es robusta y bien documentada. Integramos con nuestros sistemas existentes sin problemas. El equipo técnico es de primer nivel.'
    },
    {
      name: 'Diego Morales',
      role: 'Gerente General',
      company: 'PowerArg',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'Expandimos a 3 ciudades nuevas en 6 meses gracias a la escalabilidad de ChargeLATAM. La gestión remota es un game-changer.'
    },
    {
      name: 'Lucía Herrera',
      role: 'Directora de Tecnología',
      company: 'EcoPerú',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'El monitoreo en tiempo real nos permite resolver problemas antes de que afecten a los usuarios. La satisfacción del cliente subió 35%.'
    }
  ]

  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Líderes de LATAM{' '}
            <span className="gradient-text">confían en nosotros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más de 500 empresas en toda Latinoamérica han transformado 
            sus operaciones con ChargeLATAM.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center space-x-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-primary font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 lg:p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Empresas Activas</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">15K+</div>
              <div className="text-gray-600">Cargadores Gestionados</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">2M+</div>
              <div className="text-gray-600">Sesiones de Carga</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">99.9%</div>
              <div className="text-gray-600">Uptime Promedio</div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8">Certificados y respaldados por:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">ISO 27001</span>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">SOC 2 Type II</span>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">GDPR Compliant</span>
            </div>
            <div className="bg-gray-100 px-6 py-3 rounded-lg">
              <span className="font-semibold text-gray-700">PCI DSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}