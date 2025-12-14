/**
 * Client Style Profile (per project)
 * This creates visual uniqueness WITHOUT creating a new design system.
 */
export type Density = "compact" | "comfortable" | "spacious";
export type MotionCharacter = "snappy" | "calm" | "expressive";
export type SurfaceStyle = "flat" | "elevated" | "layered";

export interface StyleProfile {
  brandName: string;

  typography: {
    fontFamily: string; // e.g. "Inter", "Sora", "Manrope"
    headingWeight: 600 | 700;
    bodySize: "sm" | "md" | "lg";
  };

  density: Density;

  /**
   * Map brand palette to semantic roles.
   * Implementation: CSS variables / Tailwind theme mapping.
   */
  colorMapping: {
    primary: string;   // e.g. "indigo" or a token set name
    accent: string;    // optional secondary emphasis
    neutral: string;   // base neutrals (slate, zinc, stone)
    danger: string;    // destructive actions
  };

  motion: {
    character: MotionCharacter;
    scale: 0.8 | 0.9 | 1.0 | 1.1 | 1.2;
  };

  surface: SurfaceStyle;
}

export const styleProfile: StyleProfile = {
  brandName: "ClientName",

  typography: {
    fontFamily: "Inter",
    headingWeight: 600,
    bodySize: "md",
  },

  density: "comfortable",

  colorMapping: {
    primary: "indigo",
    accent: "emerald",
    neutral: "slate",
    danger: "red",
  },

  motion: {
    character: "calm",
    scale: 1.0,
  },

  surface: "elevated",
};
