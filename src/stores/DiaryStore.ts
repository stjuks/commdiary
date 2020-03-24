import { observable, action, computed } from 'mobx';
import { Diary, DiaryEntry } from '@/types';
import React, { createContext } from 'react';
import { loadFromLocalStorage, saveToLocalStorage } from '@/util/helpers';
import { uiStore } from './UIStore';

class DiaryStore {
  @observable
  diaries: Diary[] = [];

  @observable
  activeDiaryId: number | undefined = undefined;

  constructor() {
    const activeDiaryId = loadFromLocalStorage('activeDiaryId');
    const diaries = loadFromLocalStorage('diaries');

    if (activeDiaryId) this.activeDiaryId = activeDiaryId;
    if (diaries) this.diaries = diaries;
  }

  @action
  addDiary = (diary: Diary) => {
    diary.id = new Date().getTime();
    diary.createdAt = new Date();
    this.diaries.push(diary);
    this.setActiveDiary(diary.id);
    this.saveDiaries();
    uiStore.closeModal();
  };

  @action
  addEntry = (entry: DiaryEntry) => {
    if (this.activeDiaryId) {
      entry.id = new Date().getTime();
      entry.time = new Date();
      const diary = this.activeDiary;
      if (diary) diary.entries.push(entry);
      this.saveDiaries();
    }
  };

  @action
  editEntry = (editedEntry: DiaryEntry) => {
    if (this.activeDiaryId) {
      const diary = this.activeDiary;
      if (diary)
        diary.entries = diary.entries.map(entry =>
          entry.id === editedEntry.id ? editedEntry : entry
        );
      this.saveDiaries();
    }
  };

  @action
  deleteEntry = (entryId: number) => {
    if (this.activeDiary) {
      this.activeDiary.entries = this.activeDiary.entries.filter(entry => entry.id !== entryId);
      this.saveDiaries();
    }
  };

  @action
  deleteDiary = (diaryId: number) => {
    this.diaries = this.diaries.filter(diary => diary.id !== diaryId);
    this.saveDiaries();
  };

  @action
  setActiveDiary = (diaryId: number) => {
    this.activeDiaryId = diaryId;
    uiStore.closeModal();
    saveToLocalStorage('activeDiaryId', diaryId);
  };

  @action
  downloadDiaries = async (diaryIds: number[]) => {
    const diaries = this.diaries.filter(diary => diaryIds.includes(diary.id));

    const fileName = 'Sidepäevikud.json';

    const json = JSON.stringify(diaries);
    const blob = new Blob([json], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  @computed
  get activeDiary() {
    return this.diaries.find(diary => diary.id === this.activeDiaryId);
  }

  private saveDiaries = () => {
    saveToLocalStorage('diaries', this.diaries);
  };
}

const DiaryStoreContext: React.Context<DiaryStore> = createContext(new DiaryStore());

export default DiaryStoreContext;
