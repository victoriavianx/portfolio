import { DataProvider } from "./Data/data";
import ThemesProvider from "./Theme/theme";

export const Providers = ({ children }) => {
  return (
    <ThemesProvider>
      <DataProvider>{children}</DataProvider>
    </ThemesProvider>
  );
};
