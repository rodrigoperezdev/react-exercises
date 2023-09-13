import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  App,
  Counter,
  FactorialUseMemo,
  FocusUseRef,
  FormUseEffect,
  ReduxWeatherApp,
  TimerUseEffect,
  TodoListUseReducer,
  UseContext,
  UseReducerCounter,
  WindowResize,
} from "../components/exercises";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/counter" element={<Counter />} />
      <Route path="/use-effect" element={<FormUseEffect />} />
      <Route path="/use-effect-timer" element={<TimerUseEffect />} />
      <Route path="/use-effect-window-resize" element={<WindowResize />} />
      <Route path="/use-reducer" element={<UseReducerCounter />} />
      <Route path="/use-ref" element={<FocusUseRef />} />
      <Route path="/use-memo" element={<FactorialUseMemo />} />
      <Route path="/use-context" element={<UseContext />} />
      <Route path="/use-reducer-todo-list" element={<TodoListUseReducer />} />
      <Route path="/redux" element={<ReduxWeatherApp />} />
    </Routes>
  );
};
