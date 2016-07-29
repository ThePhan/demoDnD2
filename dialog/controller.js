//render
import React from 'react';
import ReactDom from 'react-dom';
import page from 'page';
import route from 'lib/route';
import titleActions from  'lib/screen-title/actions' ;
import i18n from 'lib/mixins/i18n';

export default{

  hello(){
    const MainDiv = require('frankly/my-sites/dashboard_1/main');
    titleActions.setTitle( i18n.translate( 'Dashboard_1', { textOnly: true } ) );
    ReactDom.render(
      React.createElement( MainDiv ),
     document.getElementById( 'primary' ))
  }
};
