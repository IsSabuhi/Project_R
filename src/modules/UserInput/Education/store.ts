

import store from "@/src/store";
import { Store } from "@/src/store/types";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { EducationDataObject } from "./types";

const useEducationStore = create<Store<EducationDataObject>>(
  devtools(store, "Education")
);

export default useEducationStore;
