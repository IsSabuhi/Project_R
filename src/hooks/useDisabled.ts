

import { patchLayout } from "@/apis/patchTemplate";
import produce from "immer";
import { useState } from "react";
// import { patchLayout } from "../apis/patchTemplate";
import { CustomSectionObject } from "../modules/UserInput/Custom/types";
import useResumeStore from "../store/resume.store";
import { ResumeLayoutObject, Sections } from "../store/types";
// import useResumeStore from "../src/store/resume.store";
// import { Result, ResumeLayoutObject, Sections } from "../src/store/types";
import { useCustomToast } from "./useCustomToast";
import { usePatchParams } from "./usePatchParams";

/**
 * Returns the disabled status of a section using its layout key.
 * @param body Array[][] of Sections
 * @param layoutKey String: Section
 * @returns `true` if the `layoutKey` is present in `body`
 */
export const getDisabledStatus = (
  body: ResumeLayoutObject["body"],
  layoutKey: Sections | CustomSectionObject["header"]
) => {
  const bodyLayoutKeys = body.reduce((initial, item) => [...initial, ...item]);
  return !bodyLayoutKeys.includes(layoutKey);
};

export const useDisabled = (
  layoutKey: Sections | CustomSectionObject["header"] = ""
) => {
  const layout = useResumeStore((state) => state.properties.layout);
  const { body } = layout;
  const isDisabled = getDisabledStatus(body, layoutKey);
  const updateLayout = useResumeStore((state) => state.updateLayout);
  const [pos, setPos] = useState([0, 0]);
  const { token, resumeId } = usePatchParams();
  const { createToast } = useCustomToast();

  const handleLayoutUpdate = async (
    nextBody: ResumeLayoutObject["body"],
    layoutKey: Sections | CustomSectionObject["header"],
    successMessage = `Toggled visibility for ${layoutKey.toLowerCase()}`
  ) => {
    updateLayout("body", nextBody);

    return await patchLayout(token, resumeId, {
      layout: { ...layout, body: nextBody }
    })
      .then((res: Result) => {
        updateLayout("body", res.template.layout.body);
        return createToast(successMessage, "success");
      })
      .catch(() =>
        createToast(
          `Не удалось обновить макет резюме`,
          "error",
          "Пожалуйста, попробуйте еще раз как-нибудь"
        )
      );
  };

  /**
   *Переключает наличие `layoutKey` элемента в массиве `body`.
   */
  const toggleDisabled = async () => {
    if (getDisabledStatus(body, layoutKey)) {
      const [i, j] = pos;
      const nextBody = produce(body, (draftState) => {
        draftState[i].splice(j, 0, layoutKey);
      });
      return await handleLayoutUpdate(nextBody, layoutKey);
    } else {
   //Сохранение последней позиции элемента
      const row = body.findIndex((row) => row.includes(layoutKey));
      const col = body[row].indexOf(layoutKey);
      setPos([row, col]);

      const nextBody = body.map((row) =>
        row.filter((key) => key !== layoutKey)
      );
      return await handleLayoutUpdate(nextBody, layoutKey);
    }
  };

  return { isDisabled, toggleDisabled, handleLayoutUpdate };
};
