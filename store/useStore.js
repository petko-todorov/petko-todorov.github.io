import { create } from 'zustand';
import { createChatBotSlice } from './slices/createChatBotSlice';

export const useStore = create((set) => ({
    ...createChatBotSlice(set),
}));
