import "./ParticipantCard.scss";

export const ParticipantCard = () => {

    const name = "HiganBanban"
    let sizeName: number = 30
    if (name.length > 15) {
        sizeName = 30 - (name.length - 15)
    }

  return (
    <div className="participant-wrapper">
        <div className="border-circle"> 
            <div className="circle">
                <div className="inner-circle">
                    <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/6993d294-a799-4f55-a5f4-8299548fa044-profile_image-70x70.png" className="participant-image"></img>
                </div>
            </div>
        </div>
        
        <div className="border-list">
            <div className="list-participant">
                <span className="name-participant" style={{fontSize: sizeName}}>{name}</span>
                <div className="list-curse">
                    <div className="list-item">
                        <img className="image-curse" src="https://firebasestorage.googleapis.com/v0/b/table-d13fe.appspot.com/o/Фиолетовая%20дверь%2Ficon?alt=media&token=b2b49424-b3f3-4779-b2bd-d7a86fe68f7b" alt="img"></img>
                        <div className="name-count-curse">
                            <span className="name-curse">Замена пушки</span>
                            <div className="count-curse">
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <button className="button-curse">✓</button> 
                    </div>
                    <div className="list-item">
                        <img className="image-curse" src="https://firebasestorage.googleapis.com/v0/b/table-d13fe.appspot.com/o/Фиолетовая%20дверь%2Ficon?alt=media&token=b2b49424-b3f3-4779-b2bd-d7a86fe68f7b" alt="img"></img>
                        <div className="name-count-curse">
                            <span className="name-curse">Замена пушки</span>
                            <div className="count-curse">
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <button className="button-curse">✓</button> 
                    </div>
                </div>
                
            </div>
        </div>

        

    </div>
    
    
  );
};