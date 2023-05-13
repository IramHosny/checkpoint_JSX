import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


function Cartes() {
  return (
    <div>
         <CardGroup className="container_carte">
      <Card>
        <Card.Body className="carte">
          <Card.Title> Diplomas</Card.Title>
          <Card.Text>
            <ul> <u> Studies </u> 
            <li> baccalauréat en sciences expérimentales en 2012</li> 
           <li> Licence fondamentales en informatiques de gestion en 2016</li> 
           <li> Master professionnel en commerce électronique en 2022</li>
           </ul>
           
          </Card.Text>
        </Card.Body>
        
      </Card>
      <Card>
        <Card.Body className="carte">
          <Card.Title>Hard-Skills</Card.Title>
          <Card.Text>
            <ul> <u> Computer Sciences</u>
            <li> MS Office</li>
            <li> programming skills</li> <br/>
            </ul>
            <ul> <u> Writing Skills</u>
            <li>Letter writing</li> 
            <li>Email writing</li>
            <li>Business writing reports, press releases, content management</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body className="carte">
          <Card.Title>Soft-Skills</Card.Title>
          <Card.Text>
           <ul> <u>Time Management</u>
           <li>Stress management</li>
           <li>Planning</li> <br/>
           </ul>
           <ul> <u>Communication</u>
           <li> Verbal communication</li> 
           <li> Written communication</li>
           </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  )
}

export default Cartes