"use client";

import { SignedIn, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { IoCartOutline } from "react-icons/io5";
import { Skeleton } from "./ui/skeleton";
import useBasketStore from "@/store/store";
// import { Button } from "./ui/button";

const Header = () => {
  const { user, isLoaded } = useUser();
  const itemCount = useBasketStore((state) =>
    state.items.reduce((total, item) => total + item.quantity, 0)
  );

  {
    /* This is a premium feature. If you have the premium feature of Clerk so you can Uncomment this code.  Part of the below code. */
  }
  // const createClearkPasskey = async () => {
  //   try {
  //     const response = await user?.createPasskey();
  //     console.log(response);
  //   } catch (err) {
  //     console.error("Error: ", JSON.stringify(err, null, 2));
  //   }
  // };

  return (
    <header className="flex flex-wrap justify-between items-center px-4 py-2">
      <div className="flex flex-wrap justify-between items-center w-full">
        <Link
          href={"/"}
          className="text-2xl font-bold hover:opacity-50 cursor-pointer mx-auto sm:mx-0"
        >
          Bazario.CO
        </Link>

        <form
          action={"/search"}
          className="w-full sm:w-auto sm:flex-1 sm:mx-4 mt-2 sm:mt-0"
        >
          <input
            type="text"
            name="query"
            placeholder="Search for products"
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 border w-full max-w-4xl"
          />
        </form>

        <div className="flex items-center space-x-4 sm:mt-0 flex-1 sm:flex-none">
          <Link
            href={"/basket"}
            className="flex justify-center items-center gap-2 bg-[rgb(35,35,35)] text-white hover:bg-[rgb(35,35,35)]/80 transition-all duration-200 border-none px-4 py-2 rounded-lg cursor-pointer ease-in-out shadow-md hover:shadow-lg active:shadow-md"
          >
            <IoCartOutline />
            <span className="absolute sm:top-1 top-20 bg-red-500 text-white w-5 h-5 rounded-full flex items-center justify-center ml-8 sm:ml-28 text-xs">
              {itemCount}
            </span>
            <span className="hidden sm:block text-sm font-semibold">
              {" "}
              My Cart
            </span>
          </Link>

          {isLoaded ? (
            <>
              <SignedIn />

              {user ? (
                <div className="flex items-center space-x-2">
                  <UserButton />

                  <div className="hidden sm:block text-xs">
                    <p className="text-black/90">Welcome Back</p>
                    <p className="font-bold">{user.fullName}</p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center w-max h-max px-4 py-1 rounded-lg border border-black hover:bg-[rgb(35,35,35)] hover:text-white duration-150 transition-all ease-in-out">
                  <SignInButton mode="modal" />

                  {/* This is a premium feature. If you have the premium feature of Clerk so you can Uncomment this code.  Part of the upper code. */}

                  {/* {user?.passkeys.length === 0 && (
                    <Button
                      variant={"ghost"}
                      onClick={createClearkPasskey}
                      className="animate-pulse"
                    >
                      Create passkey
                    </Button>
                  )} */}
                </div>
              )}
            </>
          ) : (
            <>
              {user ? (
                <Skeleton className="h-9 w-[84px] rounded-lg" />
              ) : (
                <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <div className="flex flex-col space-y-1">
                        <Skeleton className="h-3 w-20 " />
                        <Skeleton className="h-3 w-20 " />
                      </div>
                    </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
