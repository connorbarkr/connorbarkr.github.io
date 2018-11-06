import React, { Component } from 'react';

class Landing extends Component {

  onComponentMount(() => {
    window.addEventListener('scroll', _debounce(() =>{
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat');
      var scroll = {
        x: supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft,
        y: supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
      };

      if(scroll.y > 0){
        top = false
      } else {
        top = true;
      }
    }, 300));
  });

  render() {
    var classLeft = 'd-flex justify-content-center flex-column landing-left';
    var classRight = 'd-flex justify-content-center flex-column landing-right';

    return (
      <div className='d-flex landing'>
        <div className={'d-flex justify-content-center flex-column landing-left'}>
          <h1>{"Hello,"}</h1>
          <h1>{"I'm Connor."}</h1>
        </div>
        <div className='d-flex justify-content-center flex-column landing-right'>
          <h3>{"I write code, build tools,"}</h3>
          <h3>{"and create unique projects."}</h3>
        </div>
      </div>
    );
  }
}

export default Landing;
