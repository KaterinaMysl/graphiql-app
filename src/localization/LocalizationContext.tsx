import React, { createContext, useContext, useState, ReactNode } from 'react';

interface LocalizationContextProps {
  lang: 'en' | 'ru';
  toggleLang: () => void;
}

const LocalizationContext = createContext<LocalizationContextProps | undefined>(
  undefined
);

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider: React.FC<LocalizationProviderProps> = ({
  children,
}) => {
  const [lang, setLang] = useState<'en' | 'ru'>('en');

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'en' ? 'ru' : 'en'));
  };

  return (
    <LocalizationContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LocalizationContext.Provider>
  );
};

export const useLocalization = () => {
  const context = useContext(LocalizationContext);
  if (!context) {
    throw new Error(
      'useLocalization must be used within a LocalizationProvider'
    );
  }
  return context;
};
