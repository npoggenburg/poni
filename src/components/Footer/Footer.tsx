import React, {FC} from 'react';
import Stack from '../../layouts/Stack/Stack';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
    return (
        <footer className="bg-pink-600 px-4 text-white shadow lg:px-6">
            <div className="mx-auto w-full max-w-screen-xl py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a
                        href="https://flowbite.com/"
                        className="mb-4 flex items-center space-x-3 sm:mb-0 rtl:space-x-reverse"
                    >
                        <span className="self-center whitespace-nowrap text-2xl font-semibold uppercase dark:text-white">
                            Nico Poggenburg
                        </span>
                    </a>
                    <Stack>
                        <a href="#" className="hover:underline">
                            About
                        </a>
                        <a href="#" className="hover:underline">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:underline">
                            Licensing
                        </a>
                        <a href="#" className="hover:underline">
                            Contact
                        </a>
                    </Stack>
                </div>
                <hr className="border-white-200 my-6 sm:mx-auto lg:my-8" />
                <span className="block text-sm sm:text-center">
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
