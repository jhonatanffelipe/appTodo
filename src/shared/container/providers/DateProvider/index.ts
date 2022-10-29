import { container } from 'tsyringe';
import { IDateProvider } from './IDateProvider';
import { MomentDateProvider } from './implementations/MomentDateProvider';

container.registerSingleton<IDateProvider>('DateProvider', MomentDateProvider);
