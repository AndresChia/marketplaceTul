import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  constructor(public storage: Storage) {}

  set(key: string, value: any): Promise<any> {
    return this.storage.set(key, value);
  }

  get(key: string): Promise<any> {
    return this.storage.get(key);
  }

  remove(key: string): Promise<any> {
    return this.storage.remove(key);
  }

  clear(): Promise<void> {
    return this.storage.clear();
  }

  ready(): Promise<LocalForage> {
    return this.storage.ready();
  }

  forEach(
    iteratorCallback: (value: any, key: string, iterationNumber: number) => any
  ): Promise<void> {
    return this.storage.forEach(iteratorCallback);
  }
}
