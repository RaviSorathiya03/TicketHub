"use client";

import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";
import { Ticket, Bus, Theater } from 'lucide-react';


export const Navbar = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <header className="z-50 dark:bg-black absolute top-[3%] left-[25%]  backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 z-50">
        <Menu setActive={setActive}>
          <div className="flex items-center justify-center space-x-8">
            <HoveredLink href="/" className="flex items-center space-x-2">
              <Ticket className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <span className="text-xl font-bold text-gray-900 dark:text-white">TicketHub</span>
            </HoveredLink>

            <MenuItem setActive={setActive} active={active} item="Book Tickets">
              <div className="grid grid-cols-2 gap-4 p-4">
                <ProductItem
                  title="Bus Tickets"
                  description="Book your next bus journey"
                  href="/tickets/bus"
                  src="/images/bus.jpg"
                />
                <ProductItem
                  title="Theater Tickets"
                  description="Reserve seats for shows"
                  href="/tickets/theater"
                  src="/images/theater.jpg"
                />
              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="For Vendors">
              <div className="">
                <div className="flex items-center space-x-6">
                <HoveredLink href="/vendor/register" className="flex items-center space-x-1">
                    <Bus className="h-5 w-5" />
                    <span>Register as Bus Operator</span>
                </HoveredLink>
                <HoveredLink href="/vendor/register" className="flex items-center space-x-2">
                    <Theater className="h-5 w-5" />
                    <span>Register as Theater</span>
                </HoveredLink>
                </div>

              </div>
            </MenuItem>

            <MenuItem setActive={setActive} active={active} item="About Us">
              <div className="p-4 space-y-4">
                <HoveredLink href="/about">Our Story</HoveredLink>
                <HoveredLink href="/contact">Contact Us</HoveredLink>
              </div>
            </MenuItem>
          </div>

          <div className="flex items-center space-x-4">
            <HoveredLink href="/search" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Search
            </HoveredLink>
            <HoveredLink href="/help" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
              Help
            </HoveredLink>
          </div>
        </Menu>
      </div>
    </header>
  );
};
