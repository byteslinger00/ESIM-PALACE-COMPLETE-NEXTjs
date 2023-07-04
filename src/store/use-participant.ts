import { create } from "zustand";
import { details } from "@/types/details.type";

export interface ParticipantState {
  selected_package: details | undefined;
  is_sidebar: boolean;
  is_logged: boolean;
  setSelected_Package: (data: details) => void;
  showSideBar: (data: boolean) => void;
  setLogged: (data: boolean) => void;
}

const useParticipantStore = create<ParticipantState>((set) => ({
  selected_package: undefined,
  is_sidebar: false,
  is_logged: false,
  setSelected_Package: (data: details) =>
    set((state) => ({ selected_package: data })),
  showSideBar: (data: boolean) => set((state) => ({ is_sidebar: data })),
  setLogged: (data: boolean) => set((state) => ({ is_logged: data })),
}));

export default useParticipantStore;
