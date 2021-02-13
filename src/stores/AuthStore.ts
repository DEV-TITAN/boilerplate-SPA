import type { RootStore } from './RootStore';

export class AuthStore {
  public rootStore: RootStore;

  public constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}
