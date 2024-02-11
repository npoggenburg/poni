import React, {FC} from 'react';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    return (
        <header>
            <nav className="border-gray-200 bg-pink-600 px-4 py-2.5 lg:px-6">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
                    <a href="https://flowbite.com" className="flex items-center">
                        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                            Nico Poggenburg
                        </span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        <a
                            href="#"
                            className="mr-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-2.5 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        >
                            Log in
                        </a>
                        <a
                            href="#"
                            className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 mr-2 rounded-lg px-4 py-2 text-sm font-medium text-white focus:outline-none focus:ring-4 lg:px-5 lg:py-2.5"
                        >
                            Get started
                        </a>
                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            [Burger Menu Icon]
                        </button>
                    </div>
                    <div
                        className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
                        id="mobile-menu-2"
                    >
                        <ul className="mt-4 flex flex-col font-medium text-white lg:mt-0 lg:flex-row lg:space-x-8">
                            <li>
                                <a
                                    href="#"
                                    className="bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-white lg:bg-transparent lg:p-0 dark:text-white"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                                >
                                    Company
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                                >
                                    Marketplace
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                                >
                                    Features
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                                >
                                    Team
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
