import { InstagramLogo, DiscordLogo, Envelope, MapPin, Phone, XLogoIcon } from '@phosphor-icons/react/dist/ssr'
import { TbBrandKick } from 'react-icons/tb'

export function Footer() {
  return (
    <section className="py-16 text-white">
      <div className='container mx-auto px-4'>

        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 mt-5'>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>PixelClutch</h3>
            <p className='mb-4'>A plataforma definitiva para jogadores competitivos. Conecte, compita e evolua.</p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-2'>Links Rápidos</h3>
            <ul className='space-y-2'>
              <li><a href="#tournaments" className='hover:text-neon-blue transition'>Tournaments</a></li>
              <li><a href="#teams" className='hover:text-neon-blue transition'>Find Teams</a></li>
              <li><a href="#leaderboards" className='hover:text-neon-blue transition'>Rankings</a></li>
              <li><a href="#streamers" className='hover:text-neon-blue transition'>Streamer Partners</a></li>
            </ul>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-2'>Contatos</h3>
            <div className='space-y-3'>
              <p className='flex items-center gap-2'>
                <Envelope className='w-5 h-5 text-neon-blue' />
                contato@pixelclutch.com
              </p>
              <p className='flex items-center gap-2'>
                <Phone className='w-5 h-5 text-neon-blue' />
                (XX) 98765-4321
              </p>
            </div>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-2'>Junte-se à Comunidade</h3>
            <div className='flex gap-4'>
              <a
                href="#"
                target='_blank'
                className='hover:text-neon-blue transition'
                aria-label="Discord"
              >
                <DiscordLogo className='w-8 h-8' />
              </a>
              <a
                href="#"
                target='_blank'
                className='hover:text-neon-blue transition'
                aria-label="Twitch"
              >
                <TbBrandKick className="w-8 h-8" />
              </a>
              <a
                href="#"
                target='_blank'
                className='hover:text-neon-blue transition'
                aria-label="Twitter"
              >
                <XLogoIcon className='w-8 h-8' />
              </a>
              <a
                href="#"
                target='_blank'
                className='hover:text-neon-blue transition'
                aria-label="Instagram"
              >
                <InstagramLogo className='w-8 h-8' />
              </a>
            </div>

            <div className='mt-6'>
              <h4 className='font-medium mb-2'>Baixe nosso app</h4>
              <div className='flex gap-3'>
                <a href="#" className='bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-sm flex items-center gap-1'>
                  <span>Google Play</span>
                </a>
                <a href="#" className='bg-gray-800 hover:bg-gray-700 px-3 py-2 rounded text-sm flex items-center gap-1'>
                  <span>App Store</span>
                </a>
              </div>
            </div>
          </div>
        </footer>

        <div className='border-t border-gray-700 pt-6 text-center text-gray-400'>
          <p>© 2023 PIXELCLUTCH. Todos os direitos reservados. | <a href="#" className='hover:text-white'>Termos de Uso</a> | <a href="#" className='hover:text-white'>Política de Privacidade</a></p>
        </div>

      </div>
    </section>
  )
}