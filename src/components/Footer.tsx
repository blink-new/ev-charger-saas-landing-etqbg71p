import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Zap, Mail, Phone, MapPin, Twitter, Linkedin, Youtube } from 'lucide-react'

export function Footer() {
  const footerSections = [
    {
      title: 'Producto',
      links: [
        { label: 'Características', href: '#features' },
        { label: 'Precios', href: '#pricing' },
        { label: 'API', href: '#' },
        { label: 'Integraciones', href: '#' },
        { label: 'Seguridad', href: '#' }
      ]
    },
    {
      title: 'Empresa',
      links: [
        { label: 'Acerca de', href: '#' },
        { label: 'Blog', href: '#' },
        { label: 'Carreras', href: '#' },
        { label: 'Prensa', href: '#' },
        { label: 'Partners', href: '#' }
      ]
    },
    {
      title: 'Soporte',
      links: [
        { label: 'Centro de Ayuda', href: '#' },
        { label: 'Documentación', href: '#' },
        { label: 'Estado del Sistema', href: '#' },
        { label: 'Contacto', href: '#contact' },
        { label: 'Comunidad', href: '#' }
      ]
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacidad', href: '#' },
        { label: 'Términos', href: '#' },
        { label: 'Cookies', href: '#' },
        { label: 'Cumplimiento', href: '#' },
        { label: 'Licencias', href: '#' }
      ]
    }
  ]

  const offices = [
    {
      city: 'México DF',
      address: 'Av. Reforma 123, Col. Centro',
      phone: '+52 55 1234 5678',
      email: 'mexico@chargelatam.com'
    },
    {
      city: 'São Paulo',
      address: 'Av. Paulista 456, Bela Vista',
      phone: '+55 11 9876 5432',
      email: 'brasil@chargelatam.com'
    },
    {
      city: 'Buenos Aires',
      address: 'Av. Corrientes 789, Microcentro',
      phone: '+54 11 2468 1357',
      email: 'argentina@chargelatam.com'
    }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">
                Mantente actualizado
              </h3>
              <p className="text-gray-400">
                Recibe las últimas noticias sobre movilidad eléctrica y actualizaciones de producto.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input 
                type="email" 
                placeholder="tu@email.com"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="bg-primary hover:bg-primary/90 whitespace-nowrap">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">ChargeLATAM</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              La plataforma líder de gestión de cargadores eléctricos para Latinoamérica. 
              Conectando el futuro de la movilidad sostenible.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                <Youtube className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Offices Section */}
        <div className="mt-16 pt-8 border-t border-gray-800">
          <h4 className="font-semibold mb-8 text-center">Nuestras Oficinas</h4>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="text-center">
                <h5 className="font-semibold mb-3">{office.city}</h5>
                <div className="space-y-2 text-sm text-gray-400">
                  <div className="flex items-center justify-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © 2024 ChargeLATAM. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>Hecho con ❤️ para LATAM</span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Todos los sistemas operativos</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}