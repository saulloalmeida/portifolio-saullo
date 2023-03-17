import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

const features = [
  {
    name: "Home",
    href: "#",
    icon: "/assets/hero/chartbar.svg",
  },
  {
    name: "Projetos",
    href: "#",
    icon: "/assets/hero/cursor-click.svg",
  },
  { name: "Sobre", href: "#", icon: "/assets/hero/shield.svg" },
];
const links = {
  linkedin: "https://www.linkedin.com/in/saullo-almeida/",
  github: "https://github.com/saulloalmeida",
};
export function Header() {
  return (
    <div className="relative bg-gray-50">
      <Popover className="relative bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div className="-mr-2 -my-2 md:hidden">
              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <img src="/assets/hero/menu.svg" className="h-6 w-6" aria-hidden="true"/>
              </Popover.Button>
            </div>
            <Popover.Group as="nav" className="hidden md:flex space-x-10">
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Home
              </a>
              <a
                href="#stack"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Stack
              </a>
              <a
                href="#projetos"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Projetos
              </a>
              <a
                href="#"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Sobre
              </a>
            </Popover.Group>
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
              <a
                href={links.github}
                target="_blank"
                className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Github
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Linkedin
              </a>
            </div>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <img src="/assets/hero/Xmark.svg" className="h-6 w-6" aria-hidden="true"/>
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {features.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                      >

                        <img src={item.icon} className="flex-shrink-0 h-6 w-6 text-indigo-600" aria-hidden="true"/>

                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
}
