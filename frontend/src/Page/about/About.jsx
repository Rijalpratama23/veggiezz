import React from 'react';
import Header from '../../Components/Header';
import TagLine from '../../Components/About/TagLine';
import Tim from '../../Components/About/Tim';
import Line from '../../Components/About/Line';
import VisiMisi from '../../Components/About/VisiMisi';
import ImgAbout from '../../Components/About/ImgAbout';
import { Tag } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen secondary pb-15">
      <Header />
      <div className="poster flex justify-center mx-4 sm:mx-8 md:mx-18 my-10 sm:my-15 md:my-25 rounded-2xl">
        <div className="bg-white w-full sm:w-11/12 md:w-285 my-10 sm:my-15 mx-4 sm:mx-10 md:mx-15 p-5 sm:p-8 md:p-10 rounded-2xl shadow-xl/20">
          <TagLine />
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
            <div className="mb-5 md:w-1/2">
             <Line />
              <VisiMisi />
            </div>
            <ImgAbout />
          </div>
          <div className="mt-10">
            <h2 className="color-primary font-acme text-2xl sm:text-3xl mb-5 text-center md:text-left">Tim Kami</h2>
            <Tim />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

