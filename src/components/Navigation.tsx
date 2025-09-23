import type { PropsWithChildren } from "react";

export default function Navigation(props: PropsWithChildren) {
  return (
    <nav className="w-full h-fit px-8 py-2 bg-white text-black shadow-sm shadow-gray-400">
      <div className="w-full h-fit flex flex-row items-center justify-start">
        <img
          src="/catleya-logo.png"
          alt=""
          className="aspect-[3/1] w-[250px]"
        />
        <ul className="ml-auto flex flex-row gap-4">
          <li className="link link-hover">Home</li>
          <li className="link link-hover">Menu</li>
          <li className="link link-hover">Contact & Location</li>
          <li className="link link-hover">Reservation</li>
          <li className="link link-hover">About Us</li>
        </ul>
      </div>
    </nav>
  );
}
