import waterSuppy from '../images/WhatsApp Image 2026-01-18 at 21.16.55.jpeg'
import transport from '../images/WhatsApp Image 2026-01-18 at 21.09.55.jpeg'
import accessControl1 from '../images/accessControl1.jpg'
import plantHire from '../images/WhatsApp Image 2026-01-18 at 21.10.01.jpeg'
const Services = () => {
    return (
        <>
        <div className="services">
            <div className="wrap">
                    <div className="services-container">
                         <p className="text002">Scissor Security Technology Services</p>
                         <p className="text003">WHAT WE DO</p>
                         <p className="text002">We specialize in the professional installation and maintenance of security and access control systems. </p>
                        <br/>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <img src={waterSuppy} className='service-image'></img>
                            <div className="service-texts">
                                 <h3>CCTV Camera Installation & Electric Fencing</h3>
                                 <p className='text006'>We install professional CCTV camera systems and electric fencing to give your property complete security coverage. Our CCTV systems provide clear day and night monitoring with remote viewing on your phone or computer, while our electric fencing acts as a strong first line of defense against intruders. Together, these systems help deter crime, detect threats early, and keep your home or business safe.</p>
                            </div>
                        </div>
                        <div className="service-card">
                        <img src={transport} className='service-image'></img>
                        <div className="service-texts">
                            <h3>Alarm systems</h3>
                            <p className='text006'>We install advanced alarm systems to protect your home and business from intruders and emergencies. Our systems include motion sensors, door and window contacts, sirens, and backup power options. Each installation is tailored to your property layout to ensure maximum coverage and reliable protection.</p>
                        </div>
                        </div>
                        <div className="service-card">
                        <img src={plantHire} className='service-image'></img>
                        <div className="service-texts">
                            <h3>Gate & Garage Automation</h3>
                            <p className='text006'>We install reliable and durable gate and garage motors for homes, complexes, and businesses. Our service includes full setup, testing, and user training to ensure smooth, safe, and convenient access. We work with quality brands and provide solutions for sliding gates, swing gates, and garage doors, including remote programming and maintenance support.</p>
                        </div>
                        </div>
                        <div className="service-card">
                        <img src={accessControl1} className='service-image'></img>
                        <div className="service-texts">
                            <h3>Access Control Systems</h3>
                            <p className='text006'>We provide access and communication solutions that help you control entry and communicate safely with visitors. Our systems are designed to improve security, convenience, and peace of mind for homes and businesses.</p>
                        </div>
                        </div>
                    </div>
            </div>

        </div>
        </>
    )
}

export default Services