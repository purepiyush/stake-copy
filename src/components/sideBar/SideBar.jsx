import React from 'react'
import './SideBar.css'
import alterSideBar from './alter-sidebar.svg'
import basketball from './basketball.svg'
import casino from './casino.svg'
import cricket from './cricket.svg'
import iceHockey from './ice-hockey.svg'
import liveEvents from './live-events.svg'
import myBets from './my-bets.svg'
import soccer from './soccer.svg'
import sports from './sports.svg'
import startingSoon from './starting-soon.svg'
import Tennis from './Tennis.svg'

const SideBar = () => {
  return (
    <div>
      <div className="stake-side-bar">
        <div className="fixed-left">
            <div className="fl-head">
                <span><img src={casino} alt="Sorry"/>Casino</span>
                <span><img src={sports} alt="Sorry"/>Sports</span>
                <div className="fl-image-container">
                    <div className="fl-head-image"><img src={alterSideBar} alt=""/></div>
                </div>
                
            </div>
            <div className="fl-body">
                <div className="fl-casino">
                    <div className="fl-main casino-main">
                        <span>Casino</span>
                    </div>
                </div>

                <div className="fl-sports fl-margin fl-active">
                    <div className="fl-main sports-main">
                        <span>Sports</span>
                    </div>
                    <div className="fl-dropdown">
                        <div className="fl-dd-element"><span><img src={myBets} alt="Sorry"/>My Bets</span></div>
                        <div className="fl-dd-element"><span><img src={liveEvents} alt="Sorry"/>Live Events <span className="live">26</span> </span></div>
                        <div className="fl-dd-element"><span><img src={startingSoon} alt="Sorry"/>Starting Soon</span></div>
                        <div className="fl-seperator"></div>

                        <div className="fl-dd-header"><span>Popular</span></div>
                        <div className="fl-dd-element"><span><img src={basketball} alt="Sorry"/>NBL</span></div>
                        <div className="fl-dd-element fl-dropdown-active"><span><img src={soccer} alt="Sorry"/>Premier League</span></div>
                        <div className="fl-dd-element"><span><img src={Tennis} alt="Sorry"/>World Tennis League</span></div>
                        <div className="fl-dd-element"><span><img src={cricket} alt="Sorry"/>Big Bash League</span></div>
                        <div className="fl-seperator"></div>

                        <div className="fl-dd-header"><span>Top Sports</span></div>
                        <div className="fl-dd-element"><span><img src={soccer} alt="Sorry"/>Soccer</span></div>
                        <div className="fl-dd-element"><span><img src={Tennis} alt="Sorr"/>Tennis</span></div>
                        <div className="fl-dd-element"><span><img src={basketball} alt="Sorry"/>Basketball</span></div>
                        <div className="fl-dd-element"><span><img src={iceHockey} alt="Sorry"/>Ice Hockey</span></div>
                        <div className="fl-seperator"></div>
                    </div>
                </div>

                <div className="fl-promotions fl-margin">
                    <div className="fl-main promotions-main">
                        <span>Promotions</span>
                    </div>
                </div>

                <div className="fl-sponsorships fl-margin">
                    <div className="fl-main sponsorships-main">
                        <span>Sponsorships</span>
                    </div>
                </div>

                <div className="fl-extra fl-blog"><div className="text">Blog</div></div>
                <div className="fl-extra"><div className="text">Live Support</div></div>

                <div className="fl-select-lang">
                    <div className="select fl-extra">
                        <div className="select-text text"><span><img src="Gallery/gallery2/USA.svg" alt=""/>English</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default SideBar


