"use client";

import { createContext, useState, ReactNode } from "react";

interface FeatureFlags {
  [key: string]: boolean;
}

interface FeatureFlagContextValue {
  isFeatureEnabled: (featureName: string) => boolean;
  featureFlags: FeatureFlags;
  toggleFeatureFlag: (featureName: string) => void;
}

export const AppContext = createContext<FeatureFlagContextValue>({
  isFeatureEnabled: () => false,
  featureFlags: {},
  toggleFeatureFlag: () => {},
});

export const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [featureFlags, setFeatureFlags] = useState<FeatureFlags>({
    isOpenMenu: false,
  });

  const isFeatureEnabled = (featureName: string): boolean => {
    return featureFlags[featureName] ?? false;
  };

  const toggleFeatureFlag = (featureName: string): void => {
    setFeatureFlags((prevFlags) => ({
      ...prevFlags,
      [featureName]: !prevFlags[featureName],
    }));
  };

  return (
    <AppContext.Provider
      value={{
        isFeatureEnabled,
        featureFlags,
        toggleFeatureFlag,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
