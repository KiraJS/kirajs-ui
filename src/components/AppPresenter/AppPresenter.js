import {Grid} from "@material-ui/core";
import {HeaderContainer} from "../HeaderContainer/HeaderContainer";
import Navbar from "../Navbar/Navbar";
import {Route} from "react-router-dom";
import {ContactsContainer} from "../ContactsContainer/ContactsContainer";
import {ExperienceContainer} from "../ExperienceContainer/ExperienceContainer";
import {EducationContainer} from "../EducationContainer/EducationContainer";
import {SkillsContainer} from "../SkillsContainer/SkillsContainer";
import {AdminContainer} from "../AdminContainer/AdminContainer";
import { Redirect } from "react-router-dom";
import React from "react";

export const AppPresenter = () => {
    return (
        <div className='content'>
            <Grid container>
                <Grid item xs={12}>
                    <HeaderContainer />
                </Grid>
                <Grid container>
                    <Grid item xs={12} md={3}>
                        <Navbar />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Route exact path='/contacts' render={() => <ContactsContainer />} />
                        <Route exact path='/experience'render={() => <ExperienceContainer/>} />
                        <Route exact path='/education' render={() => <EducationContainer />} />
                        <Route exact path='/skills' render={() => <SkillsContainer />} />
                        <Route exact path='/admin' render={() => <AdminContainer />} />
                        <Redirect from="/" to="/contacts" />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}