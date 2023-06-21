import Link from 'next/link';

function Portal() {
    return (
            <div className="container">
                <br/>
                        <h1 className="text-center">ALNET WiFi</h1>
                        <p className="text-center">
                            Hi, Anda berhasil terhubung ke Internet <br/>
                            Silahkan browsing atau main game sepuasnya

                        </p>
                        <hr/>

                        <div className="row text-center">
                            <div className="col-md-3" >
                                <a href="https://google.com/" target="blank">
                                    <div className="shadow p-3 mb-5 bg-body rounded">
                                    <i className="fab fa-google fa-2x"></i>
                                    <br/>
                                    <b> Google</b>
                                    </div>
                                </a>
                            </div>

                            <div className="col-md-3" >
                                <a href="https://youtube.com/" target="blank">
                                    <div className="shadow p-3 mb-5 bg-body rounded">
                                    <i className="fab fa-youtube fa-2x"></i>
                                    <br/>
                                    <b> Youtube</b>
                                    </div>
                                </a>    
                            </div>

                            <div className="col-md-3" >
                                <a href="https://www.speedtest.net/" target="blank">
                                    <div className="shadow p-3 mb-5 bg-body rounded">
                                    <i className="fas fa-signal fa-2x"></i>
                                    <br/>
                                    <b> Check Kecepatan</b>
                                    </div>
                                </a>    
                            </div>
                            
                            <div className="col-md-3" >
                                <a href="http://al.net/" target="blank">
                                    <div className="shadow p-3 mb-5 bg-body rounded">
                                    <i className="fa fa-wifi fa-2x"></i>
                                    <br/>
                                    <b> Portal ALNET</b>
                                    </div>
                                </a> 
                            </div>

                        </div>
                    
            </div>
        

    )
  }
  
  export default Portal