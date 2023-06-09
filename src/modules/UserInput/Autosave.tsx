import useGlobalStore from "@/src/store/global.store";
import useResumeStore from "@/src/store/resume.store";
import { Status } from "@/src/utils/constants";
import Cookies from "js-cookie";
import { memo, useEffect } from "react";

// type ServerKeys =
//   | "education"
//   | "experience"
//   | "projects"
//   | "certifications"
//   | "customSections"
//   | "publications";

interface AutosaveProps<T> {
  data: T;
  patchFn: (token: string, resumeId: string, body: T) => Promise<any>;
}

const Autosave: React.FC<AutosaveProps<any>> = memo(({ data, patchFn }) => {
  const { setSaveStatus, setLastSavedAt } = useGlobalStore();
  const resumeId = useResumeStore((state) => state._id);

  useEffect(() => {
    const token = Cookies.get("token");

    const res = async () => {
      setSaveStatus(Status.loading);
      return await patchFn(token, resumeId, data)
        .then((res) => {
          setLastSavedAt(new Date(res.updatedAt));
          return setSaveStatus(Status.success);
        })
        .catch(() => setSaveStatus(Status.error));
    };

    const timeout = setTimeout(res, 3000);
    setSaveStatus(Status.idle);
    return () => clearTimeout(timeout);
  }, [data, resumeId, setSaveStatus, patchFn, setLastSavedAt]);

  return null;
});

Autosave.displayName = "Autosave";
export default Autosave;
