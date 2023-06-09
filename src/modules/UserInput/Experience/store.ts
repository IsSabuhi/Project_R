

import store from "@/src/store";
import { Store } from "@/src/store/types";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { ExperienceDataObject } from "./types";

const useExperienceStore = create<Store<ExperienceDataObject>>(
  devtools(store, "Experience")
);

export default useExperienceStore;
