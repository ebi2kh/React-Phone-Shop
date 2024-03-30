import React from "react";
import UserAvatar from "./UserAvatar";
import UserMenu from "./UserMenu";
import UserInfo from "./UserInfo";
import UserOrders from "./UserOrders";
import UserFavorites from "./UserFavorites";
import UserAddress from "./UserAddress";
import UserChangeInfor from "./UserChangeInfor";

function ProfileMain() {
  return (
    <div className="max-w-[1440px] mx-auto px-3">
      <div className="bg-white shadow-xl my-5 lg:my-10 rounded-xl md:rounded-2xl p-3 md:p-5">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="md:w-4/12 lg:w-3/12 flex flex-col gap-y-5">
            <UserAvatar />
            <UserMenu />
          </div>
          <div className="md:w-8/12 lg:w-9/12">
            <UserInfo />
            <UserOrders />
            <UserFavorites />
            <UserAddress />
            <UserChangeInfor />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileMain;
