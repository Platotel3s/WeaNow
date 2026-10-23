import { useColorScheme } from "react-native";

const palette={
  primary: "#3B82F6",
  secondary: "#10B981",
  accent: "#F59E0B",
  light: {
    background: "#F3F4F6",
    card: "#FFFFFF",
    text: "#1F2937",
    subtext: "#6B7280",
    border: "#E5E7EB",
  },
  dark: {
    background: "#0F172A",
    card: "#1E293B",
    text: "#F9FAFB",
    subtext: "#94A3B8",
    border: "#334155",
  },
};

export function useTheme(){
  const isDark=useColorScheme()==="dark";
  return{
    isDark,
    colors:{
      primary:palette.primary,
      secondary:palette.secondary,
      accent:palette.accent,
      ...(isDark ? palette.dark : palette.light),
    },
  };
}
