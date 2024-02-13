import React, {FC} from 'react';
import Stack from '../../layouts/Stack/Stack';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
    return (
        <footer className="rounded-lg bg-slate-950 px-4 text-white shadow lg:px-6">
            <div className="mx-auto w-full max-w-screen-xl py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center">
                        <Logo />
                    </a>
                    <Stack spacing={'none'}>
                        <Button as="a" variant="text" size="sm" color="white">
                            About
                        </Button>
                        <Button as="a" variant="text" size="sm" color="white">
                            Privacy Policy
                        </Button>
                        <Button as="a" variant="text" size="sm" color="white">
                            Licensing
                        </Button>
                        <Button as="a" variant="text" size="sm" color="white">
                            Features
                        </Button>
                        <Button as="a" variant="text" size="sm" color="white">
                            Contact
                        </Button>
                    </Stack>
                </div>
                <hr className="border-white-200 my-6 sm:mx-auto lg:my-8" />
                <span className="block text-sm sm:text-center">
                    © {new Date().getFullYear() + ' '}
                    <a href="#" className="hover:underline">
                        Nico Poggenburg
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
