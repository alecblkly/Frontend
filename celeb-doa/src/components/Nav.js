import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import { withRouter } from "react-router-dom";

const Nav = (props) =>{



    const logout = () => { {/* This is the logout func. removes token/message and pushes to /login. -b */}
    localStorage.removeItem('token')
    localStorage.removeItem('message')
    props.history.push('/login')
    }

    const NavDiv = styled.div`
        background: #AC3C3C;
        padding: 1% 0;
    `
    const LinkDiv =styled.div`
        display: flex;
        width: 52%;
        justify-content: space-between;
    `

    const Center = styled.div`
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `
    const LogoutButton = styled.button`
      border: 0;
      background: none;
      ${LinkDiv}:hover & {
        fill: rebeccapurple;
    `


    {/* Terinary below: (Is this thing true ? Do this : Do that) 
        ? = If so do 'this'
        : = If not do 'that'

    - Checks for Token
    - If 'token', displays : [Quiz] [Dashboard] [Logout] (Don't need to SignUp if you already have an Account) 
    - If new user or logged out, displays: [Quiz] [SignUp] [Login] (Dashboard/Logout dont need to be displayed if not logged in)
    */}
   
    return(

  localStorage.getItem('token') ?
  <NavDiv>
    <Center>
      <div>
        <h1 className='title'>Celebrity?</h1>
        <h3 className='title'>Dead or Alive</h3>
      </div> 
      <LinkDiv>
        <NavLink className='link' to='/quiz'>Quiz</NavLink>
        <NavLink className='link' to='/dashboard'>Dashboard</NavLink>
        <NavLink className='link' to='/celebrity-list'>Update Celebrity</NavLink>
        <LogoutButton className='link' onClick={()=> logout()}>Logout</LogoutButton>{/* If user is signed in, a Logout Button will appear to Logout. Button was the only thing I could get to work? idk -b*/}
      </LinkDiv>
    </Center>
  </NavDiv>
                     : 
  <NavDiv>
    <Center>
      <div>
        <h1 className='title'>Celebrity?</h1>
        <h3 className='title'>Dead or Alive</h3>
      </div>
      <LinkDiv>
        <NavLink className='link' to='/quiz'>Quiz</NavLink>
        <NavLink className='link' to='/sign-up'>Sign Up</NavLink> {/* If user is Logged in, SignUp dissappears and gets replaced w/ dashboard. -b*/}
        <NavLink className='link' to='/login'>Login</NavLink>
      </LinkDiv>
    </Center>
  </NavDiv>
                        )
}

export default withRouter(Nav);