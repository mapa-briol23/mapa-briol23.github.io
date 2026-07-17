import { createContext, useContext } from "react";

export const LightboxContext = createContext(null);

/** Open the fullscreen image overlay from anywhere: const open = useLightbox(). */
export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }
  return context.open;
}
