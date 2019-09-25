import React, {useState} from "react";
import {withFormik, Form, Field} from "formik";
import * as Yup from "yup";
import "../scss/CreateNewItem.scss"
import {Button} from "semantic-ui-react"


const CreateNewItem = (errors, values, touched) =>{
    
    
    // const [goal, setGoal] = useState({name: "", category: "", location: "", date: ""});
        
        

    // const changeHandler = event =>{
    //     setGoal({...goal, [event.target.name]: event.target.value})
    // }

    //Prevents refresh of the page
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
            <div className="goalHeader">
                <h2>Add New Goal</h2>
            </div>
            
            <Form className="form" 
            // onSubmit={handleSubmit}
            >
                <Field type="text" 
                className="field" 
                name="name" 
                placeholder="Your goal goes here..."
                style={
                // If the user clicks on this field and leaves it blank, or tries to submit with filling out the field, an error will appear.  This styles the border.
                errors.name && touched.name ? {border: "1px solid red"} : null} />
                {errors.name && touched.name && (<>{errors.name}</>)}

                <Field type="text" 
                className="field" 
                name="location" 
                placeholder="Location" 
                />
                
                {/* <Field type="text" 
                className="field" 
                name="date" 
                placeholder="Date" 
                /> */}
                
                <Field component="textarea" 
                type="text" 
                className="goalDesc" 
                name="description" 
                placeholder="Goal description" 
                /><br/>
                
                
                    
                    {/* <label>Make Private<Field type="checkbox" name="isPrivate"/></label> */}
                    {/* <div className="goalBtn">
                        <button className="submitBtn">Submit</button>
                        <button className="cancelBtn">Cancel</button>
                    </div> */}

                <Button color="#e6e6e6" type="submit">Save</Button>
                

                {/* Displays submitted form */}
                {/* <div className="Container">
                    <div className="row">
                        {goal.map(item=>(
                            <div key={item.id} 
                            name={item.goal} 
                            category={item.goal} 
                            location={item.location} 
                            date={item.date} 
                            description={item.description} />
                        ))}
                    </div>
                </div>
                 */}
            </Form>
        </div>
    )
}

const FormikNewGoal = withFormik({
    // Making sure the form fields receive a value
    mapPropsToValues({name, location, description}){
        return{
            name: name || "",
            location: location || "",
            description: description || ""
        };
    },

    // Form validation
    validationSchema: Yup.object().shape({
        name: Yup.string().required("Required field")
    }),

    // handleSubmit(values, formikBag){
    //     formikBag.props.backEnd(values,formikBag.props.something);
    // }

    // Api
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