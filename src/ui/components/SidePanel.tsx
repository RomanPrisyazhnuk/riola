"use client";
import { getPanelData, PanelTypes } from "@/store/slices/panelSlice";
import { useSelector } from "react-redux";
import AuthForm from "./auth/AuthForm";
import Cart from "./cart/Cart";

export default function SidePanel() {
  const panelData = useSelector(getPanelData);

  const panelLayout = () => {
    if (!panelData) return null;
    switch (panelData.type) {
      case PanelTypes.Login:
      case PanelTypes.Register: {
        return <AuthForm activeTab={panelData.type} />;
      }
      case PanelTypes.Cart: {
        return <Cart />;
      }
      default: {
        return null;
      }
    }
  };

  if (panelData) {
    return (
      <div className="fixed right-0 bottom-0 bg-white h-fit sm:h-full w-full sm:w-[356px] z-50">
        {panelLayout()}
      </div>
    );
  } else {
    return null;
  }
}
