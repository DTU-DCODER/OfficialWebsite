import React from 'react';
import Lottie from 'react-lottie';
import IndexNavbar from "../../components/Navbars/IndexNavbar";

import Team from "../../assets/lottie/teamwork.json"

const Coming = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Team,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <div>
      <IndexNavbar noPhoto/>
      <div className='events-container container'>

        <Lottie
          options={defaultOptions}
          height={400}
          width={400}
        />
        <h1 className='text-center'>COMING SOON... <br/> STAY TUNED</h1>
      </div>
    </div>
  )
}
export default Coming;
