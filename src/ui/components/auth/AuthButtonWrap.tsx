"use client";
import { useDispatch, useSelector } from "react-redux";
import { openPanel, PanelTypes } from "@/store/slices/panelSlice";
import { FC, ReactNode } from "react";
import { getUserData } from "@/store/slices/userSlice";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import Link from "next/link";
import LogOutButtonWrap from "./LogOutButtonWrap";

interface AuthButtonProps {
  type: PanelTypes;
  beforeAuthView: ReactNode;
  afterAuthView: ReactNode;
}

const AuthButtonWrap: FC<AuthButtonProps> = ({
  type,
  beforeAuthView,
  afterAuthView,
}) => {
  const dispatch = useDispatch();
  const userData = useSelector(getUserData);

  return !userData ? (
    <div onClick={() => dispatch(openPanel({ type }))}>
      <>{beforeAuthView}</>
    </div>
  ) : (
    <Dropdown>
      <DropdownTrigger>
        <div>{afterAuthView}</div>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Dropdown menu with description">
        <DropdownItem key="account">
          <Link href="/dashboard">Кабинет</Link>
        </DropdownItem>
        <DropdownItem key="logOut">
          <LogOutButtonWrap>Выйти</LogOutButtonWrap>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AuthButtonWrap;
