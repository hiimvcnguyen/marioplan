import React from 'react';

const ProjectDetails = (props) => {

  console.log(props);

  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Projec Title</span>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit explicabo blanditiis rem vero, similique illum quod dolore ratione minus corporis aliquid velit distinctio inventore facere laborum? Tempora eaque consequatur laboriosam?</p>
        </div>
        <div className="card-action gray lighten-4 gray-text">
          <div>Posted by Cuong</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
