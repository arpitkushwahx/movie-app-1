import React from "react";

function AboutUs() {
  return (
    <div>
      <div className="h-auto">
        <div className=" w-full h-56 flex items-center  text-white text-4xl border-b-2 border-b-gray-800">
          <h1 className="mt-20 ml-32">About Us</h1>
        </div>
        <div className="text-white text-wrap px-32 mt-16 border-b-2 border-b-gray-800 pb-24">
          <h1 className="text-3xl font-bold text-white">
            Starlight Studios -
            <span className="font-medium">Best Place for Movies</span>
          </h1>
          <p className="mt-5 font-light">
            Welcome to Starlight Studios movie site, the ultimate destination
            for all film enthusiasts. Immerse yourself in a world of captivating
            stories, stunning visuals, and unforgettable performances. Explore
            our extensive library of movies, spanning across genres, eras, and
            cultures. <br />
            <br /> Indulge in the joy of cinema with our curated collections,
            featuring handpicked movies grouped by themes, directors, or actors.
            Dive into the world of cinematic magic and let yourself be
            transported to new realms of imagination and emotion.
          </p>
          <div className="grid grid-cols-3 mt-10 gap-5 w-auto">
            <div>
              <h1 className="text-xl">Ultra HD</h1>
              <p className="font-light mt-5">
                Experience movies like never before with our Ultra HD feature.
                Immerse yourself in stunning visuals, vibrant colors, and
                crystal-clear detail.
              </p>
            </div>
            <div>
              <h1 className="text-xl">Large Movie Database</h1>
              <p className="font-light mt-5">
                Discover a vast and diverse collection of movies in our
                extensive database. With thousands of titles to choose from,
                you'll never run out of options.
              </p>
            </div>
            <div>
              <h1 className="text-xl">Online TV</h1>

              <p className="font-light mt-5">
                Discover a vast and diverse collection of movies in our
                extensive database. With thousands of titles to choose from,
                you'll never run out of options.
              </p>
            </div>
            <div>
              <h1 className="text-xl">Early Access to New Items</h1>
              <p className="font-light mt-5">
                Discover a vast and diverse collection of movies in our
                extensive database. With thousands of titles to choose from,
                you'll never run out of options.
              </p>
            </div>
            <div>
              <h1 className="text-xl">Airplay</h1>
              <p className="font-light mt-5">
                Discover a vast and diverse collection of movies in our
                extensive database. With thousands of titles to choose from,
                you'll never run out of options.
              </p>
            </div>
            <div>
              <h1 className="text-xl">Multi Language Subtitles</h1>
              <p className="font-light mt-5">
                Discover a vast and diverse collection of movies in our
                extensive database. With thousands of titles to choose from,
                you'll never run out of options.
              </p>
            </div>
          </div>
        </div>

        <div className="text-white text-wrap px-32 mt-16 pb-20">
          <h1 className="text-3xl font-bold text-white">How it Works</h1>

          <div className="grid grid-cols-3 mt-10 gap-5 w-auto">
            <div className="rounded-lg border-2 border-gray-700 p-5 hover:translate-0.5 duration-200">
              <span className="text-5xl font-black text-amber-400">01</span>
              <h1 className="pt-5  text-lg">create an account</h1>
              <p className="mt-5 font-light">
                Start your movie-watching journey by creating a personalized
                account on our platform. Sign up easily and gain access to a
                world of entertainment.
              </p>
            </div>

            <div className="rounded-lg border-2 border-gray-700 p-5 hover:translate-0.5 duration-200">
              <span className="text-5xl font-black text-amber-400">02</span>
              <h1 className="pt-5  text-lg">Chose your plant</h1>
              <p className="mt-5 font-light">
                Start your movie-watching journey by creating a personalized
                account on our platform. Sign up easily and gain access to a
                world of entertainment.
              </p>
            </div>

            <div className="rounded-lg border-2 border-gray-700 p-5 hover:translate-0.5 duration-200">
              <span className="text-5xl font-black text-amber-400">03</span>
              <h1 className="pt-5  text-lg">Enjoy Starlight Studios</h1>
              <p className="mt-5 font-light">
                Start your movie-watching journey by creating a personalized
                account on our platform. Sign up easily and gain access to a
                world of entertainment.
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
