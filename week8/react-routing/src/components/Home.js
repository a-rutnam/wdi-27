import React, {Component} from 'react';

import { Link } from 'react-router-dom';


class PopularLinks extends Component {

  gotoQuestion( event, id ){
    console.log('gotoQuestion():', id );
    this.props.history.push(`/faq/${ id }`)
  }

  render(){
    return (
      <div>
        <h3>Most Frequently Asked:</h3>
        <ul>
          {
            this.props.faqs.map( link => (
              <li key={link.id}>
                <a onClick={ (ev) => this.gotoQuestion(ev, link.id) }>
                  { link.text }
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

class Home extends Component {

  constructor(){
    super();

    this.state = {
      links: [
        {id: 5, text: 'Where am I?' },
        {id: 6, text: 'How do I donate money to this outstanding site?'},
        {id: 7, text: 'When will Mircosoft destroy GitHub?' }
      ]
    };

  }

  gotoQuestion( event, id ){
    event.preventDefault();
    console.log( id );
    this.props.history.push(`/faq/${ id }`)
  }

  gotoFAQ(){
    // console.log(this);
    this.props.history.push('/faq/100');
  }

  render(){
    return (
      <div>
        <h2>This is the home page</h2>
        <ul>
          <li>Why not check out the <Link to="/faq">FAQ</Link>.</li>
          <li>What is this weird website for? This is answered in <Link to="/faq/23">
            FAQ question 23
          </Link></li>
          <li>This button links to FAQ ID #100:
            <button onClick={ () => this.gotoFAQ() }>Click Me</button>
          </li>
        </ul>

        <h3>Most Frequently Asked:</h3>
        <ul>
          {
            this.state.links.map( link => (
              <li key={link.id}>
                <a onClick={ (ev) => this.gotoQuestion(ev, link.id) }>
                  { link.text }
                </a>
              </li>
            ))
          }
        </ul>

      </div>
    );
  }
}

export default Home;
