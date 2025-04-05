import { createContext, useState, useContext, Dispatch, SetStateAction,  ReactNode } from 'react';

interface AppContextType {
  navSelect: string;
  setNavSelect: Dispatch<SetStateAction<string>>;
  enter: boolean;
  setEnter: Dispatch<SetStateAction<boolean>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [navSelect, setNavSelect] = useState<string>('one');
  const [enter, setEnter] = useState<boolean>(false);

  return (
    <AppContext.Provider value={{ navSelect, setNavSelect, enter, setEnter }}>
      {children}
    </AppContext.Provider>
  );
};
