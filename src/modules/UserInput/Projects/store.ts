

import store from "@/src/store";
import { Store } from "@/src/store/types";
import create from "zustand";
import { devtools } from "zustand/middleware";
import { ProjectDataObject } from "./types";

const useProjectStore = create<Store<ProjectDataObject>>(
  devtools(store, "Project")
);

export default useProjectStore;
