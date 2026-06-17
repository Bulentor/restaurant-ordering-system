import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const mockUser: any = {
  id: 123,
  email: "demo@delivery.com",
  name: "Тестовый Клиент",
  role: "user"
};

export interface AuthState {
  user: any;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitialized: boolean;
  login: (credentials: any) => Promise<void>;
  register: (credentials: any) => Promise<void>;
  logout: () => void;
  clearAuth: () => void;
  initialize: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: mockUser,
      accessToken: "mock-jwt-token",
      isAuthenticated: true,
      isLoading: false,
      isInitialized: true,

      initialize: () => {
        set({ 
          user: mockUser,
          accessToken: "mock-jwt-token",
          isAuthenticated: true,
          isLoading: false, 
          isInitialized: true 
        });
      },

      login: async () => {
        set({
          user: mockUser,
          accessToken: "mock-jwt-token",
          isAuthenticated: true,
          isLoading: false,
          isInitialized: true,
        });
      },

      register: async () => {
        set({
          user: mockUser,
          accessToken: "mock-jwt-token",
          isAuthenticated: true,
          isLoading: false,
          isInitialized: true,
        });
      },

      logout: () => {
        return;
      },

      clearAuth: () => {
        return;
      },
    }),
    {
      name: 'auth-storage',
      partialize: (state) => ({
        user: state.user,
        accessToken: state.accessToken,
        isAuthenticated: state.isAuthenticated,
        isInitialized: state.isInitialized,
      }),
    }
  )
);
