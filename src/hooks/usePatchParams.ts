import { Status } from './../utils/constants';
import Cookies from "js-cookie";
import useGlobalStore from "../store/global.store";
import useResumeStore from "../store/resume.store";

export const usePatchParams = () => {
  const { setSaveStatus, setLastSavedAt } = useGlobalStore();
  const resumeId = useResumeStore((state) => state._id);
  const token = Cookies.get("token");

  return { setSaveStatus, setLastSavedAt, resumeId, token, Status };
};
