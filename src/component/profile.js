import React,{Component} from 'react';
import { Card, CardContent, Grid, FormControl, TextField, Input, FormHelperText } from '@material-ui/core';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';



import FacebookIcon from '@material-ui/icons/Facebook';

import BottomNavigation from '@material-ui/core/BottomNavigation';


import './css/profile.css';



class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {show: 'true'};
    this.state={
      showContent:'personalInfoContentDiv',
      showInfo:'show',
      username:localStorage.getItem('username'),
      email:localStorage.getItem('email'),
      id:localStorage.getItem('id'),
      roles:localStorage.getItem('roles'),
      first_name:localStorage.getItem('first_name'),
      last_name: localStorage.getItem('last_name'),
      address: localStorage.getItem('address'),
      phone:localStorage.getItem('phone'),
      gender:localStorage.getItem('gender'),
    };
  }

  delHeader = () => {
      this.setState({show: 'hello'});
    }


    handleClick(dis) {
      this.setState({
        showContent:`${dis}`,

      })
    }

  render(){
    const user = [{
        id:0,
        first_name:'ravikumar',
        last_name: 'makinthan',
        address:'Inuvil South Inuvil',
        phone:779877766,
        gender:'male',

      }]







    return (

        <div className='profileDivWarraper'>
        <li className='profileHeading'>hello {this.state.username},</li>
          <div className='profileDiv' style={{}}>
            <Grid container spacing={5}>
              <Grid item xs={4}  style={{textIndent:'50px'}}>
              <div className='profileSideDiv'>
                <br/>
                <Button style={{border:'2px solid #03a9f4',}} type='button' onClick={() => this.handleClick('personalInfoContentDiv')}  className='proSideDivBtn'>Personal Info</Button><br/><br/>
                <Button style={{border:'2px solid #03a9f4'}} onClick={() => this.handleClick('editeProfileDiv')} className='proSideDivBtn'>Edite Personal Info</Button><br/><br/>
                <Button style={{border:'2px solid #03a9f4'}} onClick={() => this.handleClick('myShopDiv')} className='proSideDivBtn'>My Shops</Button><br/><br/>
                <Button style={{border:'2px solid #03a9f4'}} onClick={() => this.handleClick('myReviewDiv')} className='proSideDivBtn'>My Review</Button><br/><br/>
              </div>
              </Grid>

              <Grid item xs={8} style={{textIndent:'50px'}}>

              {this.state.showContent == 'personalInfoContentDiv'&&(

                  <div className='personalInfoContentDiv'>
                    <p className='PersonalInfoHead'>Manage My Account</p>
                    <li>First Name :- {this.state.first_name}</li>
                    <li>Last Name :- {this.state.last_name}</li>
                    <li>Address :- {this.state.address}</li>
                    <li>Phone Number :- {this.state.phone}</li>
                    <li>Email :- {this.state.email}</li>
                    <li>Gender :- {this.state.gender}</li>
                  </div>
              )}
              {this.state.showContent == 'editeProfileDiv'&&(
                <div className='editeProfileDiv' >
                    <p className='PersonalInfoHead'>Edite My Account Info</p>
                    <FormControl className='fnameFC'>
                      <InputLabel htmlFor="my-input">First Name</InputLabel>
                      <Input id="my-input" aria-describedby="my-helper-text" />
                      <FormHelperText id="my-helper-text"></FormHelperText>
                    </FormControl>
                    <br/>
                    <FormControl className='fnameFC'>
                      <InputLabel htmlFor="my-input">Last Name</InputLabel>
                      <Input id="my-input" aria-describedby="my-helper-text"  />
                      <FormHelperText id="my-helper-text"></FormHelperText>
                    </FormControl>
                    <br/>
                    <FormControl className='fnameFC'>
                      <InputLabel htmlFor="my-input">Email Name</InputLabel>
                      <Input id="my-input" aria-describedby="my-helper-text" />
                      <FormHelperText id="my-helper-text"></FormHelperText>
                    </FormControl>
                    <br/>
                    <FormControl className='fnameFC'>
                      <InputLabel htmlFor="my-input">Email Namse</InputLabel>
                      <Input id="my-input" aria-describedby="my-helper-text" />
                      <FormHelperText id="my-helper-text"></FormHelperText>
                    </FormControl>
                    <br/>
                    <FormControl className='fnameFC'>
                      <InputLabel htmlFor="my-input">Email Namse</InputLabel>
                      <Input id="my-input" aria-describedby="my-helper-text" />
                      <FormHelperText id="my-helper-text"></FormHelperText>
                    </FormControl>
                </div>

              )}


                {this.state.showContent == 'myShopDiv'&&(
                  <div className='myShopDiv'>

                  </div>

                )}



                {this.state.showContent == 'myReviewDiv'&&(
                  <div className='myReviewDiv'>

                  </div>

                )}


              </Grid>
            </Grid>

          </div><br/><br/>

        </div>

    );
  }
}

export default Profile;
