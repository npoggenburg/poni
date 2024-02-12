import React, {FC} from 'react';
import Stack from '../../layouts/Stack/Stack';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

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
                    <div
                        className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
                        id="mobile-menu-2"
                    >
                        <Stack>
                            <Button>Home</Button>
                            <a
                                href="#"
                                className="bg-primary-700 lg:text-primary-700 block rounded py-2 pl-3 pr-4 text-white lg:bg-transparent lg:p-0 dark:text-white"
                                aria-current="page"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                            >
                                Company
                            </a>
                            <a
                                href="#"
                                className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                            >
                                Marketplace
                            </a>
                            <a
                                href="#"
                                className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                            >
                                Features
                            </a>
                            <a
                                href="#"
                                className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                            >
                                Team
                            </a>
                            <a
                                href="#"
                                className="lg:hover:text-primary-700 block border-b border-gray-100 py-2 pl-3 pr-4 hover:bg-gray-50 lg:border-0 lg:p-0 lg:hover:bg-transparent dark:border-gray-700  dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent lg:dark:hover:text-white"
                            >
                                Contact
                            </a>
                        </Stack>

                        <Stack>
                            <a href="#" className="">
                                Log in
                            </a>
                            <a href="#" className="">
                                Get started
                            </a>
                            <button
                                data-collapse-toggle="mobile-menu-2"
                                type="button"
                                className=""
                                aria-controls="mobile-menu-2"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                <Icon name="Bars" />
                            </button>
                        </Stack>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
