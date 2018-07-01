
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import dishes from '../../server/dishes.txt'

import { connect } from 'react-redux';

import { setStateLogin } from '../../actions'

import cx from 'classnames';

export class Menu extends Component {

  constructor(props){
    super(props);

    this.state = {
      dishesList1: [],
      dishesList2: [],
      message: "Identificate o crea una cuenta nueva aquí mismo",
      section2: "Section2",
      showLogin: true,
      showMenu: false,
      buttonShowMenu: 'more'
		};

    this.handleSubmit = this.handleSubmit.bind(this);
    this.getUrlDish = this.getUrlDish.bind(this);
    this.mouseEnterSection = this.mouseEnterSection.bind(this);
    this.mouseOutSection = this.mouseOutSection.bind(this);
    this.handleShowMore = this.handleShowMore.bind(this);
  }

  componentWillMount() {

    const dishesarray = (dishes.dishes.length>0) ? 
                      Object.values(dishes.dishes).map( (dish, item) => 
                        <li onClick={this.getUrlDish} data-id={dish.url} >{dish.name}</li>) 
                      :
                      ''

    const dishesArraySliceFirst = dishesarray.splice(0,5)
    const dishesArraySliceSecond = dishesarray.splice(0,dishesarray.length)

    this.setState({dishesList1: dishesArraySliceFirst, dishesList2: dishesArraySliceSecond})


  }

  getUrlDish(e) {
    const url = e.currentTarget.dataset.id
    this.props.onGetUrlFile(url)
  }

  handleShowMore(){
    console.log('show More')
    let showMenu = !this.state.showMenu

    const text = (showMenu) ? 'less' : 'more'

    this.setState({showMenu, buttonShowMenu: text})
  }

  handleSubmit(e) {
    e.preventDefault();

    const { stateLogin } = this.props.login

    if (stateLogin == 0) {

      let mail = document.getElementById('mail').value;
      let pswd = document.getElementById('pswd').value;

      this.setState({message: "Por favor, confirma tus datos"});   
      this.props.dispatch(setStateLogin(mail, pswd))  
    }    

    if (stateLogin == 1) {

      let mail = document.getElementById('mail').value;
      let pswd = document.getElementById('pswd').value;

      this.setState({message: "Bienvenido", showLogin: false});     
      this.props.dispatch(setStateLogin(mail, pswd))
    }

  }  
  mouseEnterSection() {
    this.setState({section2: "All you can Eat"});  
  }
  mouseOutSection() {
    this.setState({section2: "Section2"});  
  }

  render () {

  	const { message, text, showLogin, dishesList1, dishesList2, section2, showMenu, buttonShowMenu } = this.state

    const classShowMenu = cx('submenu-collapse',
        {'submenu-showMenu': showMenu }
      )

    return (

    	<nav className='topMenu'>
    		<div className='topMenu-section'>
    			<a href="">Section 1</a>
    		</div>
    		<div className='topMenu-section'
            onMouseOut={this.mouseOutSection} 
            onMouseOver={this.mouseEnterSection}>
    			<a href=""  >
            {section2}</a>
          <div className='topMenu-section-submenu'>

                  <ul className='submenu'>
                    {dishesList1}
                    <div className={classShowMenu} >             
                      {dishesList2}
                    </div>
                    <li 
                      className='showMore'
                      onClick={this.handleShowMore}
                    >
                      {buttonShowMenu}
                    </li>
                  </ul>
            
          </div>
    		</div>
    		<div className='topMenu-section'>
    			<a href="">Section 3</a>
    		</div>
    		<div className='topMenu-login'>
    			<p>{message}</p>
    			
          { showLogin &&
            <form onSubmit={this.handleSubmit}>
              <input type="email" placeholder="E-mail" name="mail" id='mail' required />
              <input type="password" placeholder="Password" name="pswd" id='pswd' required />
              <button type="submit">OK</button>
            </form>
          }

    		</div>
    		<div className='topMenu-section'>
    			<a href="">Section 4</a>
    		</div>
    	</nav>

    );
  }
  
}


const mapStateToProps = (state, actions) => {

  return {
    login: state.login 
  }

}

export default connect(mapStateToProps)(Menu)

