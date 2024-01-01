import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="education">
        <h2>Education</h2>
        <hr />
        <h4>University</h4>
          <ul>
            <li>
            {/* Adding a link for the university */}
              <a href="https://www.gidatarim.edu.tr/" target="_blank" rel="noopener noreferrer">
              Konya Food and Agriculture University
            </a>
          </li>
           </ul>
            
            <h4>High School</h4>
            <ul>
                <li>Başak Collage</li>
            </ul>
    </div>

  );
}

export default Education;