"use client";

import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:skysingh040@gmail.com";
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button className="btn btn-ghost normal-case text-xl">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="fas fa-check"
            style={{ color: "grey", fontSize: 25 }}
          />
        </button>
      </DrawerTrigger>
      <DrawerContent className="bg-base-300 text-white border-gray-700">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold text-center">
              Get in Touch
            </DrawerTitle>
            <DrawerDescription className="text-center text-gray-400">
              Feel free to reach out to me via email
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex flex-col items-center justify-center space-y-4">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="fas fa-check"
                  style={{ color: "grey", fontSize: 20 }}
                />
                <span className="text-lg">skysingh040@gmail.com</span>
              </div>
              <button
                onClick={handleEmailClick}
                className="btn btn-primary w-full"
              >
                Send Email
              </button>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <button className="btn btn-outline">Close</button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default Contact;
