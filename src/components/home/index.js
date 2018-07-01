
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//No he de importar las imagenes al componente pero no he podido leerlas de otra manera
import noodles01 from '../../imgs/noodles01.jpg'
import noodles02 from '../../imgs/noodles02.jpg'
import noodles03 from '../../imgs/noodles03.jpg'

import Menu from '../menu'


export default class Home extends Component {

  constructor(props){
    super(props);

    this.state={
      titleDish: '',
      imgs: [],
      recomendedDish: '',
      textDish: ''
    }

    this.getUrlFile = this.getUrlFile.bind(this)
  }

 

  getUrlFile(url) {

    const urlDish = `../..${url}`

    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", urlDish, false);
    rawFile.onreadystatechange = () => {
      if (rawFile.readyState === 4) {
        if (rawFile.status === 200 || rawFile.status == 0) {
          var allText = rawFile.responseText;
          var json = JSON.parse(JSON.stringify(eval("(" + allText + ")")));
          
          const recommended = `Recomended by ${json.recommended} people`

          //Falta en el text separar las strings con un <br />, ya que hay arrays de text
          //con mas de una string

          this.setState({
            titleDish: json.title,
            imgs: json.imgs,
            recomendedDish: recommended,
            textDish: json.text
          })
        }
      }
    };
    rawFile.send(null);
  }


  render () {

    const { titleDish, imgs, recomendedDish, textDish } = this.state

    const imgsToShow = (imgs.length > 0) ?
                          Object.values(imgs).map( (img, item) => 
                            <img src={`../../widgetScripts/${img.url}`} alt={img.alt} key={item}/>)
                          :
                          ''

    return (
      <div className='wrapper'>

        <Menu onGetUrlFile={this.getUrlFile} />

        { titleDish != '' &&
        	<div className='wrapper content'>
        		<div className='content-images'>
              {imgsToShow}
        		</div>
        		<div className='content-text'>
        			<h2>{titleDish}</h2>
        			<p className='content-text-rec'>{recomendedDish}</p>
        			
        			<p>{textDish}</p>
        		</div>
        	</div>
        }

      </div>
    );
  }
  
}
