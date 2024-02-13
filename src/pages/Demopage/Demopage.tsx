import React, {FC} from 'react';

import Header from '../../components/Header/Header';
import StageSlider from '../../components/StageSlider/StageSlider';
import Footer from '../../components/Footer/Footer';
import Section from '../../layouts/Section/Section';
import Grid from '../../layouts/Grid/Grid';
import Column from '../../layouts/Grid/Column';
import Heading from '../../components/Heading/Heading';
import Text from '../../components/Text/Text';
import Stack from '../../layouts/Stack/Stack';
import Icon from '../../components/Icon/Icon';
import Button from '../../components/Button/Button';

interface DemopageProps {}

const Demopage: FC<DemopageProps> = () => (
    <>
        <Header />
        <StageSlider items={5} />
        <main>
            <Section>
                <Stack>
                    <Button variant="filled" icon="ChevronRight" color="black">
                        My Button
                    </Button>
                    <Button variant="filled" color="white">
                        My Button
                    </Button>
                    <Button variant="filled" color="gray">
                        My Button
                    </Button>
                    <Button variant="filled" color="primary">
                        My Button
                    </Button>
                    <Button variant="outlined" color="black">
                        My Button
                    </Button>
                    <Button variant="outlined" color="white">
                        My Button
                    </Button>
                    <Button variant="outlined" color="gray">
                        My Button
                    </Button>
                    <Button variant="outlined" color="primary">
                        My Button
                    </Button>
                    <Button variant="text" color="black" icon="Bars" iconPosition="after">
                        My Button
                    </Button>
                    <Button variant="text" color="white">
                        My Button
                    </Button>
                    <Button variant="text" color="gray">
                        My Button
                    </Button>
                    <Button variant="text" color="primary">
                        My Button
                    </Button>
                </Stack>
            </Section>
            <Section background="pink">
                <Stack>
                    <Button variant="filled" color="black">
                        My Button
                    </Button>
                    <Button variant="filled" color="white">
                        My Button
                    </Button>
                    <Button variant="filled" color="gray">
                        My Button
                    </Button>
                    <Button variant="filled" color="primary">
                        My Button
                    </Button>
                    <Button variant="outlined" color="black">
                        My Button
                    </Button>
                    <Button variant="outlined" color="white">
                        My Button
                    </Button>
                    <Button variant="outlined" color="gray">
                        My Button
                    </Button>
                    <Button variant="outlined" color="primary">
                        My Button
                    </Button>
                    <Button variant="text" color="black">
                        My Button
                    </Button>
                    <Button variant="text" color="white">
                        My Button
                    </Button>
                    <Button variant="text" color="gray">
                        My Button
                    </Button>
                    <Button variant="text" color="primary">
                        My Button
                    </Button>
                </Stack>
            </Section>
            <Section>
                <Grid columns={1}>
                    <Column>
                        <Heading variant={'h3'}>Some Icons in a Stack</Heading>
                        <Stack spacing={'md'} divider={true}>
                            <div className="">
                                <Icon name="ChevronUp" size="md" />
                            </div>
                            <div className="">
                                <Icon name="ChevronRight" size="md" />
                            </div>
                            <div className="">
                                <Icon name="ChevronDown" size="md" />
                            </div>
                            <div className="">
                                <Icon name="ChevronLeft" size="md" />
                            </div>
                        </Stack>
                    </Column>
                </Grid>
            </Section>
            <Section background="pink">
                <Grid columns={3}>
                    <Column>
                        <div className="flex flex-col gap-4 text-white">
                            <Heading variant={'h3'}>My Column 1</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a neque facere dolorum, asperiores quisquam earum perspiciatis deserunt alias autem.</Text>
                        </div>
                    </Column>
                    <Column>
                        <div className="flex flex-col gap-4 text-white">
                            <Heading variant={'h3'}>My Column 1</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a neque facere dolorum, asperiores quisquam earum perspiciatis deserunt alias autem.</Text>
                        </div>
                    </Column>
                    <Column>
                        <div className="flex flex-col gap-4 text-white">
                            <Heading variant={'h3'}>My Column 1</Heading>
                            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a neque facere dolorum, asperiores quisquam earum perspiciatis deserunt alias autem.</Text>
                        </div>
                    </Column>
                </Grid>
            </Section>
            <Section>
                <Grid columns={2}>
                    <Column>
                        <Heading variant={'h3'}>My Column 1</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a neque facere dolorum, asperiores quisquam earum perspiciatis deserunt alias autem. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Placeat a neque facere dolorum, asperiores quisquam earum perspiciatis deserunt alias autem. Lorem ipsum dolor sit amet consectetur
                            adipisicing elit. Placeat a neque facere dolorum, asperiores quisquam earum perspiciatis deserunt alias autem.
                        </Text>
                    </Column>
                    <Column>
                        <Heading variant={'h3'}>My Column 1</Heading>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a neque facere dolorum, asperiores quisquam earum perspiciatis deserunt alias autem. Lorem ipsum dolor sit
                            amet consectetur adipisicing elit. Placeat a neque facere dolorum, asperiores quisquam earum perspiciatis deserunt alias autem.
                        </Text>
                    </Column>
                </Grid>
            </Section>
            <Section background="gray">
                <Grid columns={2}>
                    <Column>
                        <img src="https://placehold.co/600x400" className="w-full" alt="" />
                    </Column>
                    <Column>
                        <Heading variant={'h3'}>My Column 1</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a neque facere dolorum, asperiores quisquam earum perspiciatis deserunt alias autem.</Text>
                    </Column>
                </Grid>
            </Section>
            <Section>
                <Grid columns={2}>
                    <Column>
                        <Heading variant={'h3'}>My Column 1</Heading>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat a neque facere dolorum, asperiores quisquam earum perspiciatis deserunt alias autem.</Text>
                    </Column>
                    <Column>
                        <img src="https://placehold.co/600x400" className="w-full" alt="" />
                    </Column>
                </Grid>
            </Section>
            <Section>
                <Grid columns={3}>
                    <Column>
                        <img src="https://placehold.co/600x400" className="w-full" alt="" />
                    </Column>
                    <Column>
                        <img src="https://placehold.co/600x400" className="w-full" alt="" />
                    </Column>
                    <Column>
                        <img src="https://placehold.co/600x400" className="w-full" alt="" />
                    </Column>
                </Grid>
            </Section>
        </main>
        <Footer />
    </>
);

export default Demopage;
