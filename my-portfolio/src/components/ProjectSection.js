import React from 'react';
import ProjectCard from './ProjectCard';

// Project data array
const projects = [
  {
    title: "DevFlix",
    description: "An innovative web platform for movie lovers, utilizing React for an interactive experience. Discover, and enjoy your favorite films effortlessly.",
    imageUrl: "./assets/movie.webp",
    projectUrl: "https://devflixprime.netlify.app/",
  },
  {
    title: "Silvanus Grove",
    description: "A sleek web app for plant enthusiasts, featuring React, Firebase, and Stripe for a seamless shopping experience.",
    imageUrl: "./assets/plant.webp",
    projectUrl: "https://symphonious-sable-ca8f44.netlify.app/",
  },
  {
    title: "Wordle Clone",
    description: "A compact web-based version of the famous word game, offering a 5-letter puzzle challenge with color-coded hints.",
    imageUrl: "./assets/wordle.webp",
    projectUrl: "https://ultimamaximus.github.io/Wordle-Clone/",
  },
  {
    title: "Muse Playlist Creator",
    description: "A creative, efficient React app for easy Spotify playlist creation, syncing playlists directly to your account using the Spotify API.",
    imageUrl: "./assets/muse.webp",
    projectUrl: "https://merry-youtiao-ecf432.netlify.app",
  },
];

function ProjectSection() {
  return (
    <div className="container mt-5" id="projects">
      <h2 className="mb-4">Check Out My Work</h2>
      <div className="row">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectSection;
