import React from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import axios from "axios"
import NewGoalCard from "./NewGoalCard"


const NewGoal = (status, errors, values) =>{
    
    
    const [goal, setGoal] = useState([]);

    // const changeHandler = event =>{
    //     setGoal({...goal, [event.target.name]})
    // }

    // useEffect(() =>{
    //     if(status){
    //         setGoal([...goal, status])
    //     }
    // }, [status]);

    return(
        <div className="ui container">
            <h2>Add New Goal</h2>
            <Form className="ui form">
                <Field type="text" className="field" name="goal" placeholder="Your goal goes here..."/>
                {errors.name && (<p className="error">{errors.goal}</p>)}
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
                <label>Make Private<Field type="checkbox" name="isPrivate"/></label>
                <button>Submit</button>
                <button>Cancel</button>

                <div className="Container">
                    <div className="row">
                        {goal.map((item,i)=>{
                            return <div key={item.id} name={item.goal} category={item.goal} location={item.location} date={item.date} description={item.description} />
                        })}
                    </div>
                </div>
                
            </Form>
        </div>
    )
}

const FormikNewGoal = withFormik({
    mapPropsToValues({goal, category, location, date, description, isPrivate}){
        return{
            goal: goal || "",
            category: category || "",
            location: location || "",
            description: description || "",
            isPrivate: isPrivate || false
        };
    },

    validationSchema: Yup.object().shape({
        goal: Yup.string().required("Required field")
    }),

    // submitHandler(values,{setStatus}){
    //     axios
    //         .post("https://reqres.in/api/users/", values)
    //         .then(response =>{
    //             console.log(response)
    //             setGoal(response.data);
    //         })
    //         .catch(error=> console.log(error.response))
    // }

})(NewGoal)

export default FormikNewGoal;