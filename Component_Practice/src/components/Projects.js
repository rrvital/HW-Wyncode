import projects from '../data/projects.json';
import React, { Component } from 'react'
import Project from './Project';

export default class Projects extends Component {
  render() {
     
    return (
      <div>
        <section id="portfolio">
            <a href="#">
            <i className="far fa-arrow-alt-circle-up"></i>
            </a>

            <header>
            <h1>My Projects</h1>
            <p>These are some of my projects</p>
            </header>


        {projects.allProjects.map((data, index)=> {
        
           return <Project key={index} imgName={data.imgName} title={data.title} description={data.description}/>
        })}
        </section>
      </div>
    )
  }
}





