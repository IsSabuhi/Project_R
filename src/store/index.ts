import { updateArray } from "@/utils";
import { GetState, SetState } from "zustand";
import { Store } from "./types";

const store = <ObjectType>(
  set: SetState<Store<ObjectType>>,
  get: GetState<Store<ObjectType>>
): Store<ObjectType> => ({
  //Массив данных, который поступает с сервера.
  data: [],
  setData: (list) => set({ data: list }),
  //Добавляет новый объект в массив (пока фиктивная функция).
  //TODO: Это будет преобразовано для добавления нового объекта на сервер, а затем возвращено и установлено состояние данных.
  add: (obj) => set((state) => ({ data: [obj, ...state.data] })),
  //Обновляет объект по определенному индексу с помощью пары ключ-значение.
  update: (index, key, value) => {
    const obj = { ...get().data[index], [key]: value };
    set((state) => ({ data: updateArray(state.data, index, obj) }));
  }
  //TODO: Нужно добавить действие удаления для сервера.
});

export default store;
