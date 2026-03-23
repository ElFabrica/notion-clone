"use client";

import React, { ReactNode } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";

interface ConfirmModalProps {
  children: ReactNode;
  onConfirm: () => void;
}

export function ConfirmModal({ children, onConfirm }: ConfirmModalProps) {
  function handleConfirm(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) {
    event.stopPropagation();
    onConfirm();
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger
        onClick={(e) => {
          e.stopPropagation();
        }}
        asChild
      >
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone
        </AlertDialogDescription>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={(e) => e.stopPropagation()}>
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction onClick={(e) => handleConfirm(e)}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
