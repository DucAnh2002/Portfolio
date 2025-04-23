import { create } from "zustand";

type Theme = "dark" | "light";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

// Kiểm tra theme hệ thống
const systemTheme: Theme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";

// Kiểm tra theme lưu trong localStorage
const savedTheme = localStorage.getItem("theme") as Theme | null;

// Set class cho body (hàm dùng chung)
const applyThemeToDOM = (theme: Theme) => {
  const body = document.body;
  if (theme === "dark") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
};

// Gán ngay khi load store
const initialTheme: Theme = savedTheme ?? systemTheme;
applyThemeToDOM(initialTheme);

export const useThemeStore = create<ThemeStore>((set) => ({
  theme: initialTheme,
  setTheme: (theme: Theme) => {
    localStorage.setItem("theme", theme);
    applyThemeToDOM(theme);
    set({ theme });
  },
}));


