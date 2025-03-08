import { Outlet } from "react-router-dom";
import ProfileSidebar from "../Components/Profile-ui/profileSidebar";
import { useState } from "react";
import MobileSidebar from "../Components/Profile-ui/mobileSidebr";

export default function UserPage() {
  return (
    <div className="flex relative">
      <ProfileSidebar />
      <MobileSidebar />
      <Outlet />
    </div>
  );
}
