import React, {FC} from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
    return (
        <footer className="bg-white px-4 shadow lg:px-6 dark:bg-gray-900">
            <div className="mx-auto w-full max-w-screen-xl py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="https://flowbite.com/"
                        className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
                    >
                        <img
                            src="https://flowbite.com/docs/images/logo.svg"
                            className="h-8"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
                            Flowbite
                        </span>
                    </a>
                    <ul className="mb-6 flex flex-wrap items-center text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <a href="#" className="me-4 hover:underline md:me-6">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="me-4 hover:underline md:me-6">
                                Privacy Policy
                            </a>
                        </li>
                        <li>
                            <a href="#" className="me-4 hover:underline md:me-6">
                                Licensing
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{' '}
                    <a href="https://flowbite.com/" className="hover:underline">
                        Flowbite™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
