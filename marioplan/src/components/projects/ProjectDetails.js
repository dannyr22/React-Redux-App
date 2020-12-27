import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id
    return (
       <div className="container section project-details">
           <div className="card z-depth-0">
               <div className="card-content">
                   <span className="card-title">Project Title {id}</span>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, similique? Id est asperiores tenetur minima, porro sint consequatur similique pariatur totam doloribus ullam sit, facilis, aut quas repudiandae tempore obcaecati.</p>
               </div>
               <div className="card-action grey lighten-4 grey-text">
                   <div>Posted by Danny B</div>
                   <div>2nd September 2am</div>
               </div>
           </div>
       </div>
    )
}

export default ProjectDetails
