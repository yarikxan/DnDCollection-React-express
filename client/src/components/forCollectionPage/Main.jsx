import {Formik, Form} from "formik";

import classes from './Main.module.css';
import Input from '../Input/Input';
import Select from '../Select/Select';
import Button from '../Button/Button';

export default function Main(){
    
    const onSubmit = () => {
        
    }


    return (
        <div className={classes.main}>
            <section className={classes.cards}>
            </section>

            <section className={classes.aside}>
                
                <h2>Find a card</h2>
                <div>
                    <input type="search" placeholder="Sanya"/>
                    <Button>Search</Button>
                </div>
                
                <h2> OR </h2>
                <Button>Make your own </Button>
                
                
                <h2>Filter</h2>
                <Formik
                    initialValues={{type:"", class:"", minLevel:1, maxLevel:20}}
                    onSubmit={onSubmit}
                >
                    {(props) => (
                        <Form>
                            
                            <Select label="Cards' type" id="typeInput" name="type" placeholder="All">
                                <option value="">All</option>
                                <option value="Monster">Monster</option>
                                <option value="PC">PC</option>
                                <option value="NPC">NPC</option>
                            </Select>

                            <Input label="Cards' class" type="text" id="classInput" name="class" placeholder="Barbarian" />
                            
                            <Input label="MinLevel" type="number" id="minLevelInput" name="minLevel" placeholder="1" />
                            <Input label="MaxLevel" type="number" id="maxLevelInput" name="maxLevel" placeholder="20" />

                            <Button> Filter </Button>
                        </Form>

                    )}
                </Formik>
                
                
            </section>

        </div>
    )
}
