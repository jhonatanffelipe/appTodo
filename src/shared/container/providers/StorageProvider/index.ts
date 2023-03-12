import { container } from 'tsyringe';
import { LocalStorageProvider } from './implementations/LocalStorageProvider';
import { IStorageProvider } from './models/IStorageProvider';

container.registerSingleton<IStorageProvider>('StorageProvider', LocalStorageProvider);
