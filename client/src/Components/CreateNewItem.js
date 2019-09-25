import React, {useState} from "react";
import {withFormik, Form, Field} from "formik";
//import * as Yup from "yup";
import "../scss/NewGoal.scss"


const CreateNewItem = (status, errors, values) =>{
    
    
    const [goal, setGoal] = useState({});
        
        // {goal: "", category: "", location: "", date: ""});

    const changeHandler = event =>{
        setGoal({...goal, [event.target.name]: event.target.value})
    }

    // //Prevents refresh of the page
    // const preventRefresh = event =>{
    //     event.preventDefault();
    //     props.
    // }

    // useEffect(() =>{
    //     if(status){
    //         setGoal([...goal, status])
    //     }
    // }, [status]);

    return(
        // Form for New Goal
        <div className="newGoal">
            <h2 className="goalHeader">Add New Goal</h2>
            
            <Form className="form" >
                {/* onSubmit={submitHandler}> */}
                <Field type="text" 
                className="field" 
                name="goal" 
                placeholder="Your goal goes here..." 
                onChange={changeHandler} 
                value={goal.goal}/>
                {errors.name && (<p className="error">{errors.goal}</p>)}
                
                <Field component="select" 
                className="field" 
                name="category" 
                onChange={changeHandler} 
                value={goal.category}>
                    <option className="selectPlaceholder">Select a category</option>
                    <option>DIY Project</option>
                    <option>Entertainment</option>
                    <option>Food</option>
                    <option>Health</option>
                    <option>Life Milestone</option>
                    <option>Learn New Skill</option>
                    <option>Travel</option>
                </Field>

                <Field type="text" 
                className="field" 
                name="location" 
                placeholder="Location" 
                onChange={changeHandler} 
                value={goal.location}/>
                
                <Field type="text" 
                className="field" 
                name="date" 
                placeholder="Date" 
                onChange={changeHandler} 
                value={goal.date}/>
                
                <Field component="textarea" 
                type="text" 
                className="goalDesc" 
                name="description" 
                placeholder="Goal description" 
                onChange={changeHandler} 
                value={goal.description}/><br/>
                
                <div className="text">
                    
                    {/* <label>Make Private<Field type="checkbox" name="isPrivate"/></label> */}
                    <div className="goalBtn">
                        <button className="submitBtn">Submit</button>
                        <button className="cancelBtn">Cancel</button>
                    </div>
                </div>

                {/* Displays submitted form */}
                <div className="Container">
                    <div className="row">
                        {goal.map((item,i)=>{
                            return <div key={item.id} 
                            name={item.goal} 
                            category={item.goal} 
                            location={item.location} 
                            date={item.date} 
                            description={item.description} />
                        })}
                    </div>
                </div>
                
            </Form>
        </div>
    )
}

const FormikNewGoal = withFormik({
    // Making sure the form fields receive a value
    mapPropsToValues({goal, category, location, date, description, isPrivate}){
        return{
            goal: goal || "",
            category: category || "",
            location: location || "",
            description: description || "",
            isPrivate: isPrivate || false
        };
    },

    // Form validation
    // validationSchema: Yup.object().shape({
    //     goal: Yup.string().required("Required field")
    // })

    // // Api
    // submitHandler(values,{setStatus}){
    //     axios
    //         .post("https://reqres.in/api/users/", values)
    //         .then(response =>{
    //             console.log(response)
    //             setGoal(response.data);
    //         })
    //         .catch(error=> console.log(error.response))
    // }

})(CreateNewItem)

export default FormikNewGoal;