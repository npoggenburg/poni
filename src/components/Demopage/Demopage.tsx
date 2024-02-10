import React, {FC} from 'react';
import './Demopage.scss';
import Grid from '../Grid/Grid';
import Text from '../Text/Text';
import Column from '../Grid/Column';
import Button from '../Button/Button';

interface DemopageProps {}

const Demopage: FC<DemopageProps> = () => (
    <div className="demopage">
        <Grid columns={{sm: 1, lg: 3}}>
            <Column>
                <Text>
                    <p>
                        <b>Lorem</b> ipsum dolor sit amet consectetur <a href="#">adipisicing</a>
                        Eaque, necessitatibus. elit.
                    </p>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam sit non
                        tempore nemo rerum fugit distinctio, quibusdam ducimus? Placeat, commodi?
                    </p>
                    <Button label={'Click me'} icon="chevron-left" iconPosition="after"></Button>
                    <hr />
                    <Button label={'Click me'} icon="chevron-right" iconPosition="before"></Button>
                    <hr />
                    <Button label={'Click me'} icon="chevron-down"></Button>
                    <hr />
                    <Button label={'Click me'} icon="chevron-up"></Button>
                    <hr />
                    <Button label={'Click me'}></Button>
                    <hr />
                    <Button label={'Click me'} icon="chevron-up" size="sm"></Button>
                    <hr />
                    <Button label={'Click me'} icon="chevron-up" size="md"></Button>
                    <hr />
                    <Button label={'Click me'} icon="chevron-up" size="lg"></Button>
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
