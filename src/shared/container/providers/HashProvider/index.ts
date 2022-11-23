import { container } from 'tsyringe';

import { IHashProvider } from './IHashProvider';
import { BCryptProvider } from './implementations/BCryptProvider';

container.registerSingleton<IHashProvider>('HashProvider', BCryptProvider);
