import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import Ibaseshop from './ibaseshopLogo.png';

import { makeStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import { Card, CardContent, Grid,  TextField } from '@material-ui/core';


import Home from './component/home';
import Footer from './component/footer';
import Profile from './component/profile';




class App extends Component {
  componentDidMount(){
    if(localStorage.getItem('userLocation')){
      this.setState({
        locationSelectDiv:'hide',
      })
    }else{
      localStorage.setItem('userLocation', 'Location');
      localStorage.setItem('loca', 'Location');
    }
  }

  constructor(props){
    super(props);
    this.state = {
      search:'',
      locationSelectDiv:'show',
      userLocation:localStorage.getItem('userLocation'),
    };
  }




  onChangeSearch = (e) =>{
    this.setState({
      search:e.target.value,
    })
  }

  handleClick(dis) {
    this.setState({
      userLocation:`${dis}`,

    })
    localStorage.setItem('userLocation', `${dis}`);
  }

  render() {
    return (
      <Router>
          <div className="App">



            <AppBar position="static" className='App-AppBar' style={{backgroundColor:'#03a9f4', color:'white'}}>
              <Toolbar>
                <IconButton edge="start"   color="inherit" aria-label="menu">
                  <MenuIcon style={{fontSize:'40px'}} />
                </IconButton>
                  <Button href="/" className='App-LogoDiv'><img src={Ibaseshop} style={{width:'50px',color:'white'}}/><strong style={{fontSize:'20px',marginTop:'15px',color:'white'}} className='logoText'>Ibaseshop</strong></Button>

                <div className='App-SearchDiv'>

                    <IconButton edge="start"   style={{width:'45px',height:'45px',marginTop:'2px',marginLeft:'2px',float:'right'}} >
                      <SearchIcon style={{fontSize:'40px'}} />
                    </IconButton>

                  <input type='text' value={this.state.search} onChange={this.onChangeSearch} className='searchIP'/>
                </div>

                <Paper style={{'backgroundColor': '#1a237e', 'color': '#c5cae9',flexGrow: '1'}} elevation={0}>

                </Paper>


                <Paper style={{backgroundColor: '#03a9f4', color: '#fff',}} elevation={0}>
                  <Button href="/cart" style={{fontSize:'17px',color:'white'}}>
                    <ShoppingCartIcon style={{height:'30px'}}/>
                    <strong>Cart</strong>
                  </Button>
                  <Button style={{fontSize:'17px',color:'white'}}>
                    <LocationOnIcon style={{height:'30px',}}/>
                    {/*<FormControl className='formControl'>
                      <Select
                        value={this.state.Location}
                        onChange={this.handleChange}
                        displayEmpty
                        className='selectEmpty'
                        inputProps={{ 'aria-label': 'Without label' }}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>

                    </FormControl>*/}
                    <strong>{this.state.userLocation}</strong>
                  </Button>
                  <Button href="/login" style={{fontSize:'17px',color:'white'}}>
                    <AccountCircle style={{height:'30px'}}/>
                    <strong>Login</strong>
                  </Button>


                </Paper>
              </Toolbar>

            </AppBar>

            <div className='topBar2'>
            <Button href="/deals" style={{fontSize:'17px',color:'red',height:'30px',marginLeft:'90px'}}>
              <strong>Deals</strong>
            </Button>
            </div>

            <div className='locationWarraper' style={{left:`${window.innerWidth/2-300}px`}}>
              <h3 className='DistrictHeading'>Select District</h3>
            <Grid container spacing={5}>
              <Grid item xs={6}>

                <input type='Button' value='Ampara' className='DisButton' onClick={() => this.handleClick('Ampara')} />
                <br/>
                <input type='Button' value='Anuradhapura' className='DisButton' onClick={() => this.handleClick('Anuradhapura')}/><br/>
                <input type='Button' value='Badulla' className='DisButton' onClick={() => this.handleClick('Badulla')}/><br/>
                <input type='Button' value='Batticaloa' className='DisButton' onClick={() => this.handleClick('Batticaloa')}/><br/>

                <input type='Button' value='Colombo' className='DisButton' onClick={() => this.handleClick('Colombo')}/><br/>

                <input type='Button' value='Galle' className='DisButton' onClick={() => this.handleClick('Galle')}/><br/>
                <input type='Button' value='Gampaha' className='DisButton' onClick={() => this.handleClick('Gampaha')}/><br/>
                <input type='Button' value='Hambantota' className='DisButton' onClick={() => this.handleClick('Hambantota')}/><br/>
                <input type='Button' value='Jaffna' className='DisButton' onClick={() => this.handleClick('Jaffna')}/><br/>
                <input type='Button' value='Kalutara' className='DisButton' onClick={() => this.handleClick('Kalutara')}/><br/>

                <input type='Button' value='Kandy' className='DisButton' onClick={() => this.handleClick('Kandy')}/><br/>

                <input type='Button' value='Kegalle' className='DisButton' onClick={() => this.handleClick('Kegalle')}/><br/>
                <input type='Button' value='Kilinochchi' className='DisButton' onClick={() => this.handleClick('Kilinochchi')}/><br/>
              </Grid>

              <Grid item xs={6}>

                <input type='Button' value='Kurunegala' className='DisButton' onClick={() => this.handleClick('Kurunegala')}/><br/>
                <input type='Button' value='Mannar' className='DisButton' onClick={() => this.handleClick('Mannar')}/><br/>
                <input type='Button' value='Matale' className='DisButton' onClick={() => this.handleClick('Matale')}/><br/>
                <input type='Button' value='Matara' className='DisButton' onClick={() => this.handleClick('Matara')}/><br/>
                <input type='Button' value='Monaragala' className='DisButton' onClick={() => this.handleClick('Monaragala')}/><br/>
                <input type='Button' value='Mullativu' className='DisButton' onClick={() => this.handleClick('Mullativu')}/><br/>
                <input type='Button' value='Nuwara Eliya' className='DisButton' onClick={() => this.handleClick('Nuwara Eliya')}/><br/>
                <input type='Button' value='Polonnaruwa' className='DisButton' onClick={() => this.handleClick('Polonnaruwa')}/><br/>
                <input type='Button' value='Puttalam' className='DisButton' onClick={() => this.handleClick('Puttalam')}/><br/>
                <input type='Button' value='Ratnapura' className='DisButton' onClick={() => this.handleClick('Ratnapura')}/><br/>
                <input type='Button' value='Trincomalee' className='DisButton' onClick={() => this.handleClick('Trincomalee')}/><br/>
                <input type='Button' value='Vavuniya' className='DisButton' onClick={() => this.handleClick('Vavuniya')}/><br/>
              </Grid>
            </Grid>
            <br/><br/>
            </div>


            <div className='switchDiv' style={{ minHeight: `${window.innerHeight-260}px` }}>
              <Switch>
                <Route exact path={["/", "/home"]} component={Home} />
                <Route exact path={["/profile"]} component={Profile} />
              </Switch>
            </div>

            <Footer/>

        </div>
    </Router>
    );
  }
}

export default App;
