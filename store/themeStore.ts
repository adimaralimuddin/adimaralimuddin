import { create } from "zustand";

interface StoreTypes {
  set: any;
  primary: string;
}

export const useThemeStore = create<StoreTypes>((set) => ({
  set,
  primary: "#a44fd1",
}));

function useTheme() {
  const store = useThemeStore();
  return { ...store };
}

export default useTheme;
