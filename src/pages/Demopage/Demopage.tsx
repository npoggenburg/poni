import React, {FC} from 'react';
import './Demopage.scss';
import Grid from '../../layouts/Grid/Grid';
import Text from '../../components/Text/Text';
import Column from '../../layouts/Grid/Column';
import Button from '../../components/Button/Button';
import Heading from '../../components/Heading/Heading';
import Icon from '../../components/Icon/Icon';

interface DemopageProps {}

const Demopage: FC<DemopageProps> = () => (
    <div className="demopage">
        <Grid columns={{sm: 1, lg: 3}}>
            <Column>
                <Heading variant={'h1'}>Hello World</Heading>
                <Heading variant={'h2'}>Hello World</Heading>
                <Heading variant={'h3'}>Hello World</Heading>
                <Heading variant={'h4'}>Hello World</Heading>
                <Heading variant={'h5'}>Hello World</Heading>
                <Heading variant={'h6'}>Hello World</Heading>
                <Heading variant={'h1'} as="div">
                    <Icon name="chevron-right" size="md" />
                    Hello World
                </Heading>
                <Heading variant={'h2'} as="div">
                    Hello World
                </Heading>
                <Heading variant={'h3'} as="div">
                    Hello World
                </Heading>
                <Heading variant={'h4'} as="div">
                    Hello World
                </Heading>
                <Heading variant={'h5'} as="div">
                    Hello World
                </Heading>
                <Heading variant={'h6'} as="div">
                    Hello World
                </Heading>
                <Text>
                    <p>
                        <b>Lorem</b> ipsum dolor sit amet consectetur <a href="#">adipisicing</a>
                        Eaque, necessitatibus. elit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam sit non
                        tempore nemo rerum fugit distinctio, quibusdam ducimus? Placeat, commodi?
                    </p>
                    <Button icon="chevron-left" iconPosition="after">
                        Click me
                    </Button>
                    <hr />
                    <Button icon="chevron-right" iconPosition="before">
                        Click me
                    </Button>
                    <hr />
                    <Button icon="chevron-down">Click me</Button>
                    <hr />
                    <Button icon="chevron-up">Click me</Button>
                    <hr />
                    <Button>Click me</Button>
                    <hr />
                    <Button icon="chevron-up" size="sm">
                        Click me
                    </Button>
                    <hr />
                    <Button icon="chevron-up" size="md">
                        Click me
                    </Button>
                    <hr />
                    <Button icon="chevron-up" size="lg">
                        Click me
                    </Button>
                </Text>
            </Column>
            <Column>
                <Text>
                    <ul>
                        <li>List item 1</li>
                        <li>List item 2</li>
                        <li>List item 3</li>
                    </ul>
                </Text>
            </Column>
            <Column>Column 3</Column>
        </Grid>
    </div>
);

export default Demopage;
