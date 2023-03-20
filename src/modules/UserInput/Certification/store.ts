

import create from "zustand";
import { devtools } from "zustand/middleware";
import store from "../../../src/store";
import { Store } from "../../../src/store/types";
import { CertificationDataObject } from "./types";

const useCertificationStore = create<Store<CertificationDataObject>>(
  devtools(store, "Certification")
);

export default useCertificationStore;
