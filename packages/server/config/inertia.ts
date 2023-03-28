/**
 * Feel free to let me know via PR,
 * if you find something broken in this config file.
 */

import Application from '@ioc:Adonis/Core/Application'
import { InertiaConfig } from '@ioc:EidelLev/Inertia'

/*
|--------------------------------------------------------------------------
| Inertia-AdonisJS config
|--------------------------------------------------------------------------
|
*/

export const inertia: InertiaConfig = {
  view: 'app',
  ssr: {
    enabled: true,
    buildDirectory: Application.inDev ? 'public/assets' : 'inertia/ssr',
    autoreload: Application.inDev,
  },
}
