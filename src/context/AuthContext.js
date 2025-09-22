import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import axios from "axios";

const STORAGE_KEY = "auth:state";
const LOGIN_ENDPOINT = process.env.REACT_APP_LOGIN_ENDPOINT;

const FALLBACK_USER = {
  id: "admin",
  name: "Administrador",
  email: "admin@admin.com",
  roles: ["admin"],
};

const AuthContext = createContext(null);

const resolveLogin = async (credentials) => {
  if (LOGIN_ENDPOINT) {
    const response = await axios.post(LOGIN_ENDPOINT, credentials);
    return response.data;
  }

  const { email, password } = credentials;

  if (!email || !password) {
    const error = new Error("Informe e-mail e senha.");
    error.code = "MISSING_CREDENTIALS";
    throw error;
  }

  await new Promise((resolve) => setTimeout(resolve, 400));

  const normalizedEmail = String(email).trim().toLowerCase();
  const isValidDemoLogin =
    normalizedEmail === FALLBACK_USER.email && password === "admin";

  if (!isValidDemoLogin) {
    const error = new Error(
      "Credenciais inválidas. Utilize admin@admin.com e senha admin."
    );
    error.code = "INVALID_CREDENTIALS";
    throw error;
  }

  return {
    token: "demo-token",
    user: FALLBACK_USER,
  };
};

const loadStoredState = () => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }
    return JSON.parse(raw);
  } catch (error) {
    window.localStorage.removeItem(STORAGE_KEY);
    return null;
  }
};

const persistState = (state) => {
  if (!state) {
    window.localStorage.removeItem(STORAGE_KEY);
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [status, setStatus] = useState("idle");
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    const stored = loadStoredState();
    if (stored?.token && stored?.user) {
      setUser(stored.user);
      setToken(stored.token);
    }
    setInitializing(false);
  }, []);

  useEffect(() => {
    if (initializing) {
      return;
    }
    if (user && token) {
      persistState({ user, token });
      return;
    }
    persistState(null);
  }, [initializing, user, token]);

  const logout = useCallback(() => {
    setUser(null);
    setToken(null);
  }, []);

  const login = useCallback(async (credentials) => {
    setStatus("loading");
    try {
      const result = await resolveLogin(credentials);
      if (!result?.token || !result?.user) {
        throw new Error("Resposta inesperada do servidor de autenticação.");
      }
      setUser(result.user);
      setToken(result.token);
      return result;
    } catch (error) {
      logout();
      const message =
        error?.response?.data?.message ||
        error?.message ||
        "Não foi possível realizar o login.";
      const normalized = new Error(message);
      normalized.originalError = error;
      throw normalized;
    } finally {
      setStatus("idle");
    }
  }, [logout]);

  const value = useMemo(
    () => ({
      user,
      token,
      status,
      initializing,
      isAuthenticated: Boolean(user && token),
      login,
      logout,
    }),
    [user, token, status, initializing, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
