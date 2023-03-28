import adonisLogo from '../assets/adonis.svg'
import inertiaLogo from '../assets/inertia.svg'
import nxLogo from '../assets/nx.svg'
import reactLogo from '../assets/react.svg'
import viteLogo from '../assets/vite.svg'
import './welcome.css'

type WelcomeProps = { title: string }

const Welcome = ({ title }: WelcomeProps) => {
  return (
    <main>
      <div>
        <h1 className="title">{title}</h1>
        <p className="subtitle">Congratulations, you have just created your first AdonisJS app.</p>

        <ul>
          <li>
            The route for this page is defined in <code>start/routes.ts</code> inside{' '}
            <code>packages/server</code>
          </li>

          <li>
            You can update this page by editing <code>src/pages/welcome.tsx</code> inside{' '}
            <code>packages/client</code>
          </li>

          <li>
            If you run into problems, you can reach us on{' '}
            <a href="https://discord.gg/vDcEjq6?">Discord</a> or the{' '}
            <a href="https://forum.adonisjs.com/">Forum</a>.
          </li>
        </ul>
      </div>
      <hr />
      <div>
        <p className="subtitle center">Powered by</p>
        <div className="logo-row">
          <a href="https://adonisjs.com/">
            <img className="logo" src={adonisLogo} />
          </a>
          <a href="https://react.dev/">
            <img className="logo" src={reactLogo} />
          </a>
          <a href="https://inertiajs.com/">
            <img className="logo" src={inertiaLogo} />
          </a>
          <a href="https://vitejs.dev/">
            <img className="logo" src={viteLogo} />
          </a>
          <a href="https://nx.dev/">
            <img className="logo" src={nxLogo} />
          </a>
        </div>
      </div>
    </main>
  )
}

export default Welcome
