import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, LoginCredentials, RegisterCredentials } from './types';

interface AuthState {
  user: User | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  isInitialized: boolean;
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (credentials: RegisterCredentials) => Promise<void>;
  logout: () => void;
  clearAuth: () => void;
  initialize: () => void;
}

// ИСПРАВЛЕНО: id теперь число (число 123 вместо строки "demo-id-123")
const mockUser: User = {
  id: 123, 
  name: "Тестовый Клиент",
  email: "demo@delivery.com",
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({ // ИСПРАВЛЕНО: убрали неиспользуемый аргумент 'get'
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
