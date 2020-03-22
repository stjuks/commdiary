import { observable, action } from 'mobx';
import { Diary, DiaryEntry } from '@/types';
import React, { createContext } from 'react';

class UIStore {
  @observable
  modals: React.ReactElement[] = [];

  @action
  openModal = (content: React.ReactElement) => {
    this.modals.push(content);
  };

  @action
  closeModal = () => {
    this.modals.pop();
  };
}

export const uiStore = new UIStore();

const UIStoreContext: React.Context<UIStore> = createContext(uiStore);

export default UIStoreContext;
