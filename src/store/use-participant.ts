import { create } from 'zustand'
import { details } from '@/types/details.type';

export interface ParticipantState {
    selected_package: details | undefined,
    setSelected_Package: (data: details) => void,
}

const useParticipantStore = create<ParticipantState>((set) => ({
    selected_package : undefined,
    setSelected_Package: (data: details) => set((state) => ({ selected_package: data })),
}));

export default useParticipantStore;