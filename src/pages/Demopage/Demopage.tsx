import React, {FC} from 'react';

import Header from '../../components/Header/Header';
import StageSlider from '../../components/StageSlider/StageSlider';
import Footer from '../../components/Footer/Footer';
import Section from '../../layouts/Section/Section';
import Grid from '../../layouts/Grid/Grid';
import Column from '../../layouts/Grid/Column';

interface DemopageProps {}

const Demopage: FC<DemopageProps> = () => (
    <>
        <Header />
        <StageSlider items={5} />
        <main>
            <Section background="green">
                <Grid columns={3}>
                    <Column>Column 1</Column>
                    <Column>Column 2</Column>
                    <Column>Column 3</Column>
                </Grid>
            </Section>
            <Section>
                <Grid columns={2}>
                    <Column>Column 1</Column>
                    <Column>Column 2</Column>
                </Grid>
            </Section>
            <Section background="gray">
                <Grid columns={2}>
                    <Column>Column 1</Column>
                    <Column>Column 2</Column>
                </Grid>
            </Section>
            <Section>
                <Grid columns={2}>
                    <Column>Column 1</Column>
                    <Column>Column 2</Column>
                </Grid>
            </Section>
            <Section>
                <Grid columns={3}>
                    <Column>Column 1</Column>
                    <Column>Column 2</Column>
                    <Column>Column 3</Column>
                </Grid>
            </Section>
        </main>
        <Footer />
    </>
);

export default Demopage;
