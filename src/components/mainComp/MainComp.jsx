import React from 'react'
import './MainComp.css'
import stakeLogo from './stake-logo.svg'
import search from './search.svg'
import profile from './profile.svg'
import message from './message.svg'
import a0 from './a0.png'

const MainComp = () => {
  return (
    <div>
      <div className="odds-page">
        <div className="fixed-top display-flex-center">
            <div className="center-ft display-flex-btw">
                <div className="stake-logos">
                    <div className="stake-big-logo"><img src={stakeLogo} alt=""/></div>
                    {/* <div className="stake-mini-logo"><img src="Gallery/gallery3/stake-mini-logo.svg" alt=""/></div> */}
                </div>
    
                <div className="center-wallets display-flex-center">
                    <div className="stake-wallet align-center">
                        <div className="wallet-options">
                            <div className="ft-current-wallet display-flex-even">
                                <div className="current-text display-flex-center"><span className="current-value"></span><img src="" id="current-image"/></div>
                                <i className="fa-solid fa-chevron-down"></i>
                            </div>
                            {/* <div className="wallet-dropdown">
                                 <div className="center-search">
                                    <div className="wallet-search">
                                        <img src="Gallery/gallery2/search-2.svg" alt=""/>
                                        <input type="text" placeholder="Search Currencies"/>
                                     </div>
                                 </div>
                                 <div className="wallet-dropdown-options">
                                    <div className="w-option cv"><span>$2,200.00</span> <span><img src="Gallery/crypto-gallery/btc.svg" id="selected-image"/>BTC</span></div>
                                    <div className="w-option"><span>$0.00</span> <span><img src="Gallery/crypto-gallery/eth.svg" id="selected-image"/>ETH</span></div>
                                    <div className="w-option"><span>$100.00</span> <span><img src="Gallery/crypto-gallery/doge.svg" id="selected-image"/>DOGE</span></div>
                                    <div className="w-option"><span>$0.00</span> <span><img src="Gallery/crypto-gallery/bnb.svg" id="selected-image"/>BNB</span></div>
                                    <div className="w-option"><span>$1,100.00</span> <span><img src="Gallery/crypto-gallery/usdc.svg" id="selected-image"/>USDC</span></div>
                                    <div className="w-option"><span>$0.00</span> <span><img src="Gallery/crypto-gallery/trx.svg" id="selected-image"/>TRX</span></div>
                                    <div className="w-option"><span>$0.00</span> <span><img src="Gallery/crypto-gallery/uni.svg" id="selected-image"/>UNI</span></div>
                                    <div className="w-option"><span>$6,700.00</span> <span><img src="Gallery/crypto-gallery/usdt.svg" id="selected-image"/>USDT</span></div>
                                    <div className="w-option"><span>$3,000.00</span> <span><img src="Gallery/crypto-gallery/matic.svg" id="selected-image"/>MATIC</span></div>
                                    <div className="w-option"><span>$0.00</span> <span><img src="Gallery/crypto-gallery/ltc.svg" id="selected-image"/>LTC</span></div>
                                    <div className="w-option"><span>$0.00</span> <span><img src="Gallery/crypto-gallery/shiba.svg" id="selected-image"/>SHIBA</span></div>
                                    <div className="w-option"><span>$0.00</span> <span><img src="Gallery/crypto-gallery/jyp.svg" id="selected-image"/>JYP</span></div>
                                 </div>
                                 <div className="wallet-settings display-flex-center"><img src="Gallery/gallery2/wallet-s.svg" alt=""/>Wallet Settings</div>
                            </div> */}
                        </div>
                        <div className="sw-text display-flex-center">Wallet</div>
                        {/* <div className="sw-image display-flex-center"><img src="Gallery/gallery3/mini-wallet.svg" alt=""/></div> */}
                    </div>
                </div>
    
                <div className="ft-extra align-center">
                    <div className="ft-search align-center"><img src={search} alt=""/><span>Search</span></div>
                    <div className="user-profile">
                        <div className="user-profile-icon cursor"><img src={profile} alt=""/></div>
                        {/* <div className="user-profile-dropdown">
                            <div className="dropdown-option cursor align-center"><img src="Gallery/gallery2/chat.svg" alt=""/>Wallet</div>
                            <div className="dropdown-option cursor align-center"><img src="Gallery/gallery2/bet-slip.svg" alt=""/>Vault</div>
                            <div className="dropdown-option cursor align-center"><img src="Gallery/gallery2/chat.svg" alt=""/>VIP</div>
                            <div className="dropdown-option cursor align-center"><img src="Gallery/gallery2/bet-slip.svg" alt=""/>Affiliate</div>
                            <div className="dropdown-option cursor align-center"><img src="Gallery/gallery2/chat.svg" alt=""/>Statistics</div>
                            <div className="dropdown-option cursor align-center"><img src="Gallery/gallery2/bet-slip.svg" alt=""/>Transactions</div>
                            <div className="dropdown-option cursor align-center"><img src="Gallery/gallery2/chat.svg" alt=""/>Sport Bets</div>
                            <div className="dropdown-option cursor align-center"><img src="Gallery/gallery2/bet-slip.svg" alt=""/>Notifications</div>
                            <div className="dropdown-option cursor align-center"><img src="Gallery/gallery2/chat.svg" alt=""/>Settings</div>
                            <div className="dropdown-option cursor align-center"><img src="Gallery/gallery2/bet-slip.svg" alt=""/>Live Support</div>
                            <div className="dropdown-option cursor align-center"><img src="Gallery/gallery2/chat.svg" alt=""/>Logout</div>
                        </div> */}
                    </div>
                    <div className="chat">
                        <div className="chat-icon cursor"><img src={message} alt=""/></div>
                        {/* <div className="chat-dropdown">
                            <div className="dropdown-option cursor align-center"><img src="Gallery/gallery2/chat.svg" alt=""/>Chat</div>
                            <div className="dropdown-option cursor align-center"><img src="Gallery/gallery2/bet-slip.svg" alt=""/>Bet Slip</div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>   
    </div>
    </div>
  )
}

export default MainComp
