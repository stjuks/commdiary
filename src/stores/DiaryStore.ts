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
    const diaries: Diary[] = loadFromLocalStorage('diaries');

    if (activeDiaryId) this.activeDiaryId = activeDiaryId;
    if (diaries) {
      diaries.forEach((diary) => {
        diary.entries.forEach((entry) => {
          if (entry.rep && entry.rep.type === undefined) entry.rep = undefined;
        });
      });
      this.diaries = diaries;
    }

    window.addEventListener('storage', (event) => {
      if (event.key === 'diaries' && event.newValue) {
        this.diaries = JSON.parse(event.newValue);
      }
    });
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
        diary.entries = diary.entries.map((entry) =>
          entry.id === editedEntry.id ? editedEntry : entry
        );
      this.saveDiaries();
    }
  };

  @action
  editDiary = (diaryId: number, values: any) => {
    const index = this.diaries.findIndex((diary) => diary.id === diaryId);

    this.diaries[index] = { ...this.diaries[index], ...values };
    this.saveDiaries();
  };

  @action
  deleteEntry = (entryId: number) => {
    if (this.activeDiary) {
      this.activeDiary.entries = this.activeDiary.entries.filter((entry) => entry.id !== entryId);
      this.saveDiaries();
    }
  };

  @action
  deleteDiary = (diaryId: number) => {
    this.diaries = this.diaries.filter((diary) => diary.id !== diaryId);
    this.saveDiaries();
  };

  @action
  setActiveDiary = (diaryId: number) => {
    this.activeDiaryId = diaryId;
    uiStore.closeModal();
    saveToLocalStorage('activeDiaryId', diaryId);
  };

  @action
  findDiaries = (diaryIds: Array<string | number>) => {
    const numberIds = diaryIds.map((diaryId) => Number(diaryId));

    return this.diaries.filter((diary) => numberIds.indexOf(diary.id) !== -1);
  };

  @action
  exportDiaries = async (diaryIds: number[]) => {
    const diaries = this.diaries.filter((diary) => diaryIds.includes(diary.id));

    const fileName = `${diaries.map((diary) => diary.name).join(',')}.json`;

    const json = JSON.stringify(diaries);
    const blob = new Blob([json], { type: 'application/json' });
    const href = await URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.rel = 'noopener noreferrer';
    link.target = '_blank';
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  @action
  findDuplicateDiaries = (diaries: Diary[]) => {
    const duplicateDiaries: Diary[] = [];
    const tempDiaries: Diary[] = Object.assign([], diaries);

    // check for duplicates
    this.diaries.forEach((diary) => {
      tempDiaries.forEach((loadedDiary, index, array) => {
        if (loadedDiary.id === diary.id) {
          duplicateDiaries.push(loadedDiary);
          array.splice(index, 1);
        }
      });
    });

    return {
      uniques: tempDiaries,
      duplicates: duplicateDiaries,
    };
  };

  @action
  importDiaries = (diaries: Diary[], mode: 'OVERWRITE_EXISTING' | 'LEAVE_EXISTING') => {
    this.diaries.forEach((diary, i, existingDiaries) => {
      diaries.forEach((loadedDiary, index, array) => {
        if (loadedDiary.id === diary.id) {
          if (mode === 'OVERWRITE_EXISTING') {
            existingDiaries[i] = loadedDiary;
          }
          array.splice(index, 1);
        }
      });
    });

    this.diaries = [...this.diaries, ...diaries];
    this.saveDiaries();
  };

  @computed
  get activeDiary() {
    return this.diaries.find((diary) => diary.id === this.activeDiaryId);
  }

  private saveDiaries = () => {
    saveToLocalStorage('diaries', this.diaries);
  };
}

const DiaryStoreContext: React.Context<DiaryStore> = createContext(new DiaryStore());

export default DiaryStoreContext;
