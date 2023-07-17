export default function BlogItem() {
    return (
            <div className='col-6 col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100"'>
                <div className="media-entry">
                    <div>
                        <a className=" imag" style = {{backgroundImage : 'url(/assets/images/image-test.jpg)'}}>
                            
                        </a>
                    </div>
                    <div className="bg-white m-body">
                        <div>
                            <span className="date">May 14, 2020</span>
                        </div>
                        <div>
                            <h3><a href="index.html">Far far away, behind the word mountains</a></h3>
                        </div>
                        <div>
                            <p>Vokalia and Consonantia, there live the blind texts. Separated they live.</p>
                        </div>
                        <div>
                            <a href="single.html" className="more d-flex align-items-center float-start">
                                <span className="label">Read More</span>
                                <span className="arrow"><span className="icon-keyboard_arrow_right"></span></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export function BlogNew() {
    return (
            <div className='col-6 col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100" p-0'>
                <div className="blogNew">
                    <div className="imageTop" style={{backgroundImage : `url(/assets/images/image-test.jpg)`}}></div>
                    <div className="descBlog">
                        <div>Le titre de l'article que je ne connais pas encore</div>
                        <div>date de publication</div>
                    </div>
                </div>
            </div>
    )
}
