// src/store.ts
import {configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {api} from '@/services/api-root';

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer, // API reducer from RTK Query
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware), // Add RTK Query middleware
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed hooks to avoid manual typing of dispatch/selectors
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
