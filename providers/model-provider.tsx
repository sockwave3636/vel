"use client";

import { useEffect, useState } from "react";

import { RenameModal } from "@/components/models/rename-model";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  
  return (
    <>
      <RenameModal />
    </>
  );
};