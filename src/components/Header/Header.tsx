import React, {FC} from 'react';
import Stack from '../../layouts/Stack/Stack';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
    return (
        <header>
            <nav className="border-gray-200 bg-pink-600 px-4 py-2.5 text-white lg:px-6">
                <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
                    <a href="#" className="flex items-center">
                        <Logo />
                    </a>
                    <div
                        className="hidden w-full items-center justify-between gap-6 lg:flex lg:w-auto"
                        id="mobile-menu-2"
                    >
                        <Stack spacing={'none'}>
                            <Button as="a" variant="filled" color="white">
                                Home
                            </Button>
                            <Button as="a" variant="text" color="white">
                                Company
                            </Button>
                            <Button as="a" variant="text" color="white">
                                Me
                            </Button>
                            <Button as="a" variant="text" color="white">
                                Features
                            </Button>
                            <Button as="a" variant="text" color="white">
                                Contact
                            </Button>
                        </Stack>

                        <Stack spacing={'none'}>
                            <Button as="a" variant="text" size="sm" color="white">
                                Log in
                            </Button>
                            <Button as="a" variant="text" size="sm" color="white">
                                Get started
                            </Button>
                        </Stack>
                    </div>
                    <div className="lg:hidden">
                        <Button variant="text" color="white" icon="Bars"></Button>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
