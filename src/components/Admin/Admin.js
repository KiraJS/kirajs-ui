import React from "react";

import {Formik, Form, Field, FieldArray} from 'formik';
import { Button, LinearProgress } from '@material-ui/core';
import { TextField } from 'formik-material-ui';
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";


const Admin = (props) => {

    const updateExperience = (values) => {
        const newExperience = {
            role: '',
            company: '',
            from: '',
            to: '',
            description: '',
            skills: []
        }
      props.updateUser({...values, experience: [...props.user.experience, newExperience]});
    };

    const updateContact = (values) => {
        const newContact = {
            name: '',
            icon: '',
            link: ''
        }
        props.updateUser({...values, contacts: [...props.user.contacts, newContact]});
    };

    const updateEducation = (values) => {
        const newEducation = {
            name: '',
            company: '',
            from: '',
            to: '',
            description: ''
        }
        props.updateUser({...values, education: [...props.user.education, newEducation]});
    };

    const deleteItem = (values, name, index) => {
        props.deleteItem(values, name, index).then(() => {
            console.log(name, index)
        });
    }

    return(
        <div className={'content'}>
            <Formik
            enableReinitialize
            initialValues={{
                name: props.user && props.user.name,
                role: props.user && props.user.role,
                skills: props.user && props.user.skills.slice(','),
                experience: props.user && [...props.user.experience],
                contacts: props.user && [...props.user.contacts],
                education: props.user && [...props.user.education],
                isSumbiting: props.isSubmiting

            }}
            // validate={values => {
            //     const errors = {};
            //     if (!values.name) {
            //         errors.name = 'Name Required';
            //     } else if (!values.role) {
            //         errors.role = 'Role Required';
            //     }
            //     return errors;
            // }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
                props.updateUser(values);
                // props.updateUser(values).then(() => {
                //     console.log('updateUser')
                //     setSubmitting(false);
                //     resetForm();
                // })
            }}>
            {({ values, submitForm }) => (
                <>
                    <Typography component="h5" variant="h5" gutterBottom>
                        User
                    </Typography>
                    <Form>
                    <Field
                        component={TextField}
                        variant="outlined"
                        name="name"
                        label="Name"
                    />
                    <Field
                        component={TextField}
                        variant="outlined"
                        name="role"
                        label="Role"
                    />
                    <Field
                        component={TextField}
                        variant="outlined"
                        name="skills"
                        label="Skills"
                    />
                    <br />
                    <br />
                    <Typography component="h5" variant="h5" gutterBottom>
                        Contacts
                    </Typography>
                    <Form>
                        <FieldArray
                            name="experience"
                            render={() => (
                                <div>
                                    {values.contacts && values.contacts.map((contact, index) => (
                                        <div key={index}>
                                            <Field
                                                component={TextField}
                                                variant="outlined"
                                                name={`contacts[${index}].name`}
                                                label="Name"
                                            />
                                            <Field
                                                component={TextField}
                                                variant="outlined"
                                                name={`contacts[${index}].icon`}
                                                label="Icon"
                                            />
                                            <Field
                                                component={TextField}
                                                variant="outlined"
                                                name={`contacts[${index}].link`}
                                                label="Link"
                                            />
                                            <IconButton aria-label="delete" onClick={ () => deleteItem(values, 'contacts', index)}>
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                            <br />
                                            <br />
                                        </div>
                                    ))}
                                </div>
                            )}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => updateContact(values)}
                        >
                            +
                        </Button>
                    </Form>
                    <br />
                    <br />
                    <Typography component="h5" variant="h5" gutterBottom>
                        Experience
                    </Typography>
                    <Form>
                        <FieldArray
                            name="experience"
                            render={() => (
                                <div>
                                    {values.experience && values.experience.map((friend, index) => (
                                        <div key={index}>
                                            <Field
                                                component={TextField}
                                                variant="outlined"
                                                name={`experience[${index}].company`}
                                                label="Company"
                                            />
                                            <Field
                                                component={TextField}
                                                variant="outlined"
                                                name={`experience[${index}].role`}
                                                label="Role"
                                            />
                                            <Field
                                                component={TextField}
                                                variant="outlined"
                                                name={`experience[${index}].from`}
                                                label="From"
                                            />
                                            <Field
                                                component={TextField}
                                                variant="outlined"
                                                name={`experience[${index}].to`}
                                                label="To"
                                            />
                                            <Field
                                                component={TextField}
                                                variant="outlined"
                                                name={`experience[${index}].description`}
                                                label="Description"
                                            />
                                            <IconButton aria-label="delete" onClick={ () => deleteItem(values, 'experience', index)}>
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                            <br />
                                            <br />
                                        </div>
                                    ))}
                                </div>
                            )}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => updateExperience(values)}
                        >
                            +
                        </Button>
                    </Form>
                    <br />
                    <br />
                    <Typography component="h5" variant="h5" gutterBottom>
                        Education
                    </Typography>
                    <Form>
                        <FieldArray
                            name="experience"
                            render={() => (
                                <div>
                                    {values.education && values.education.map((item, index) => (
                                        <div key={index}>
                                            <Field
                                                component={TextField}
                                                variant="outlined"
                                                name={`education[${index}].company`}
                                                label="Company"
                                            />
                                            <Field
                                                component={TextField}
                                                variant="outlined"
                                                name={`education[${index}].name`}
                                                label="Role"
                                            />
                                            <Field
                                                component={TextField}
                                                variant="outlined"
                                                name={`education[${index}].from`}
                                                label="From"
                                            />
                                            <Field
                                                component={TextField}
                                                variant="outlined"
                                                name={`education[${index}].to`}
                                                label="To"
                                            />
                                            <Field
                                                component={TextField}
                                                variant="outlined"
                                                name={`education[${index}].description`}
                                                label="Description"
                                            />
                                            <IconButton aria-label="delete" onClick={ () => deleteItem(values, 'education', index)}>
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                            <br />
                                            <br />
                                        </div>
                                    ))}
                                </div>
                            )}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => updateEducation(values)}
                        >
                            +
                        </Button>
                    </Form>
                    {values.isSumbiting && <LinearProgress />}
                    <br />
                    <Button
                        variant="contained"
                        color="secondary"
                        disabled={values.isSumbiting}
                        onClick={submitForm}
                    >
                        Submit
                    </Button>
                </Form>
                </>
            )}
        </Formik>
    </div>

    )
}

export  default Admin;