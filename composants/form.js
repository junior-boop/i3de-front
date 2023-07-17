export default function Form() {

    // comportement
    return (

        <div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12" data-aos="fade-up" data-aos-delay="0">

                            <h2 className="heading mb-5">Schools Register</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <input type="text" className="form-control" placeholder="School Name" />
                                </div>
                                <div className="col-6 mb-3">
                                    <input type="email" className="form-control" placeholder="Region" />
                                </div>
                                <div className="col-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Town" />
                                </div>

                                <div className="col-6 mb-3">
                                    <div className="row">
                                        <div className="col-12 mb-3">
                                            <input type="checkbox" className="form-control" placeholder="Contacts" />
                                        </div>
                                    </div>
                                </div>

                                <div className="col-12 mb-3">
                                    <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Oui a la formation"></textarea>
                                </div>

                                <div className="col-12">
                                    <input type="submit" value="Send Message" className="btn btn-primary" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-12" data-aos="fade-up" data-aos-delay="0">

                            <h2 className="heading mb-5">Parteners Register</h2>
                        </div>
                    </div>
                    <div className="row">

                        <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
                            <div className="row">
                                <div className="col-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Your Name or Struture name" />
                                </div>
                                <div className="col-6 mb-3">
                                    <input type="email" className="form-control" placeholder="Region" />
                                </div>
                                <div className="col-6 mb-3">
                                    <input type="text" className="form-control" placeholder="Town" />
                                </div>
                                <div className="col-6 mb-3">
                                    <div>
                                        <input type="checkbox" className="form-control" />
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Je voudrais financer la formation ou un etablissement"></textarea>
                                </div>

                                <div className="col-12">
                                    <input type="submit" value="Send Message" className="btn btn-primary" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}