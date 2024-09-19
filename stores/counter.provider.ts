import { create } from 'zustand';

interface CounterProviderProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useCounter = create<CounterProviderProps>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useCounter;
