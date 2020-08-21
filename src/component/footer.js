import React,{Component} from 'react';
import { AppBar, Typography } from '@material-ui/core';
import { Card, CardContent, Grid, FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FacebookIcon from '@material-ui/icons/Facebook';

import BottomNavigation from '@material-ui/core/BottomNavigation';


import './css/footer.css';



function Footer() {


    return (
        <footer position="fixed" className='bottomAppBar'>
          <div className='footerDiv' style={{margin:'auto'}}>
            <Grid container spacing={5}>
              <Grid item xs={4}  style={{textIndent:'50px'}}>
                <p className='footerHeading'>about us</p>
                <li className='footerItem' ><a href='/aboutus' className='footerLink'>About Us</a></li>
                <li className='footerItem' ><a href='/TermsAndConditions' className='footerLink'>Terms & Conditions</a></li>
                <li className='footerItem' ><a href='/PrivacyPolicy' className='footerLink'>Privacy Policy</a></li>
              </Grid>

              <Grid item xs={4} style={{textIndent:'50px'}}>
                <p className='footerHeading'>Follow Us</p>
                <li className='footerItem' ><a href='https://www.facebook.com/IBaseShop-174060981057132' target='_blank' className='footerLink'> Facebook</a></li>
                <li className='footerItem' ><a href='https://www.instagram.com/ibaseshop/' target='_blank' className='footerLink'>Instagram</a></li>
                <li className='footerItem' ><a href='https://twitter.com/IBaseShop1'  target='_blank' className='footerLink'>Twitter</a></li>
                <li className='footerItem' ><a href='/aboutus'  target='_blank' className='footerLink'>Youtube</a></li>
              </Grid>

              <Grid item xs={4} style={{textIndent:'50px'}}>
                <p className='footerHeading'>Contact Us</p>
                <li className='footerItem' >Viber</li>
                <li className='footerItem' >Whatsapp</li>
                <li className='footerItem' >Email</li>
              </Grid>


            </Grid>
          </div>
        </footer>
    )
}

export default Footer;
