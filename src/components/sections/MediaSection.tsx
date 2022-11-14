import React, {useState} from 'react';
import Wrapper from "components/containers/layouts/Wrapper";
import Section from "components/containers/pagesections/Section";
import ReactPlayer from 'react-player';

const MediaSection = () => {
  const urls = [
    'https://www.youtube.com/embed/Bm8RSn5WrEE',
    'https://localhost:3000/#learn-more'
  ];
  const [currentUrlIndex, setCurrentUrlIndex] = useState(0);
  const [showNextButton, setShowNextButton] = useState(false);
  return (
    <Section sectionId="media" className="bg-surface py-10 text-on-surface">
      <Wrapper className="player-wrapper text-center items-center">
      <ReactPlayer
        className="react-player"
        url={urls[currentUrlIndex]}
        playing
        controls
        onEnded={() => setShowNextButton(true)}
        fluid="false"
        width={820}
        height={480}
      />
      {showNextButton && (
        <a 
        href="#learn-more"
        className="w-full inline-block px-6 py-2 border-2 border-blue-600 text-blue-600 font-medium text-xs leading-normal uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
         Learn More...
        </a>
      )}
      </Wrapper>
    </Section>
  );
};

export default MediaSection;
