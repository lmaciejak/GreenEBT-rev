import React from 'react';
// import ReactDOM from 'react-dom';

class AboutPage extends React.Component {
    render() {
      return (
        <div className="about-us">
          <h1>About GreenEBT</h1>
          <p>Founded in March 2018, GreenEBT seeks to connect EBT recipients with farmers markets 
            accepting EBT.</p>

          <h1>The Team</h1>
          <ul>
            <li>Ivan Mendoza</li>
            <li>Princess Guerrero</li>
            <li>Le'Shanda Miller</li>
            <li>Luiza Maciejak</li>
            <li>Omari Rose</li>
          </ul>

          <h2>Contact us</h2>
          <form action="submit">
            <input type="email" name="" id=""/>
            <input type="button" value=""/>
          </form>
        </div>
      );
    }
  }

  export default AboutPage;