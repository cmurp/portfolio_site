import React from "react";

interface NavigationActivatedContextType {
    navActivated: boolean;
    setNavActivated: (v: boolean) => void;
}
  
export const NavigationActivatedContext = React.createContext<NavigationActivatedContextType>({
    navActivated: false,
    setNavActivated: () => {},
});

export const useNavigationActivatedContext = () => React.useContext(NavigationActivatedContext);