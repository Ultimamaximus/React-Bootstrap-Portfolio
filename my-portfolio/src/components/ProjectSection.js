import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectSection() {
  return (
    <div className="container mt-5" id="projects">
      <h2 className="mb-4">Check Out My Work</h2>
      <div className="row">
        {/* Project 1 */}
        <ProjectCard 
          title="DevFlix" 
          description="An innovative web platform for movie lovers, utilizing React for an interactive experience. Discover, and enjoy your favorite films effortlessly." 
          imageUrl="./assets/movie.webp" 
          projectUrl="https://devflixprime.netlify.app/" 
        />
        {/* Project 2 */}
        <ProjectCard 
          title="Silvanus Grove" 
          description="A sleek web app for plant enthusiasts, featuring React, Firebase, and Stripe for a seamless shopping experience." 
          imageUrl="./assets/plant.jpg" 
          projectUrl="https://symphonious-sable-ca8f44.netlify.app/" 
        />
        {/* Project 3 */}
        <ProjectCard 
          title="Wordle Clone" 
          description="A compact web-based version of the famous word game, offering a 5-letter puzzle challenge with color-coded hints."
          imageUrl="./assets/wordle.jpg" 
          projectUrl="https://ultimamaximus.github.io/Wordle-Clone/" 
        />
        {/* Project 4 */}
        <ProjectCard 
          title="Muse Playlist Creator" 
          description="A creative, efficient React app for easy Spotify playlist creation, syncing playlists directly to your account using the Spotify API."
          imageUrl="./assets/muse.jpg" 
          projectUrl="https://merry-youtiao-ecf432.netlify.app" 
        />
      </div>
    </div>
  );
}

export default ProjectSection;
