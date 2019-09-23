import React from "react";
import {Form, Field} from "formik";
import * as Yup from "yup";


const NewGoal = () =>{
    const [goal, setGoal] = useState([]);

    return(
        <div>
            <h2>Add Goal</h2>
            <Form>
                <Field type="text" className="field" name="goal" placeholder="Your goal goes here..."/>
                <Field component="select" className="field" name="category">
                    <option className="selectPlaceholder">Select a category</option>
                    <option>DIY Project</option>
                    <option>Entertainment</option>
                    <option>Food</option>
                    <option>Health</option>
                    <option>Life Milestone</option>
                    <option>Learn New Skill</option>
                    <option>Travel</option>
                </Field>
                <Field type="text" className="field" name="location" placeholder="Location"/>
                <Field type="text" className="field" name="date" placeholder="Date"/>
                <Field component="textarea" type="text" name="description" placeholder="Goal description"/>
                <label>Make Private<Field type="checkbox" name="private"/></label>
                <button>Submit</button>
                <button>Cancel</button>
                
            </Form>
        </div>
    )
}

export default NewGoal;