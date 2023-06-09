

import { updateArray } from "@/src/utils";
import create, { GetState, SetState } from "zustand";
import { devtools } from "zustand/middleware";
import { SkillDataObject, SkillStore } from "./types";

const skillStore = <T>(
  set: SetState<SkillStore<T>>,
  get: GetState<SkillStore<T>>
): SkillStore<T> => ({
  format: "CATEGORIES",
  toggleFormat: () =>
    set((state) => ({
      format: state.format === "CATEGORIES" ? "TAGS" : "CATEGORIES"
    })),
  setFormat: (value) => set({ format: value }),
  data: [],
  setData: (list) => set({ data: list }),
  add: (obj) => set((state) => ({ data: [...state.data, obj] })),
  //Updates an object at a particular index with a key and value pair.
  update: (index, key, value) => {
    const obj = { ...get().data[index], [key]: value };
    set((state) => ({ data: updateArray(state.data, index, obj) }));
  }
});

const useSkillStore = create<SkillStore<SkillDataObject>>(
  devtools(skillStore, "Skills")
);

export default useSkillStore;
