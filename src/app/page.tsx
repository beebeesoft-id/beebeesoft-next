import Image from 'next/image'
import Link from 'next/link'
import logoBeekasir from "../../public/img/logo/pos.png";
import logoSiundang from "../../public/img/logo/siundang.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare, faGraduationCap, faHeadset, faLaptopCode } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

  return (
    <div className="body">
      <main className="py-4 frame" style={{ 
        backgroundImage: "url('/img/app/bg-hexagonal.jpg')", 
        backgroundPosition: 'center' }}>

      <div className="container" >
          <div className="row justify-content-center" >
              <div className="col-md-6 justify-content-center text-center" data-aos="fade-right">
                  
                  <h2>IT Service And Software Development</h2>
                  <h3>Beebeesoft</h3>
                  <p>Jasa layanan IT seperti : Pembuatan Website Company Profile, Ecommerce, Aplikasi Custom, Kursus Pemrograman, dan Konsultan IT.</p>
                  <a href="https://api.whatsapp.com/send?phone=6285797272095&text=beebeesoft-tanya" target="blank">
                    <button type="button" className="btn btn-primary">Konsultasi Sekarang</button>
                  </a> 
                  &nbsp;
                  <a href="https://buanaanekakimia.com/" target="blank" >
                    <button type="button" className="btn btn-outline-primary">
                      <i className="far fa-play-circle"></i> Lihat Contoh
                    </button>
                  </a>
              </div>
          </div>
      </div>
      </main>
      <div className="container">
          <div className="row justify-content-center">
            <div className='hr'>
              <span className='hr-title'>Product and Services</span>
            </div>
          </div>
          <br/>
          <div className="row justify-content-center">
            
            <div className="col-md-4" data-aos="fade-in">
                <div className="d-flex">
                  
                  <div className="flex-shrink-0">
                  <a href='https://play.google.com/store/apps/details?id=com.beebeesoft.beekasir'>
                      <div className="shadow p-3 mb-5 bg-body rounded">
                      <Image
                        src={logoBeekasir}
                        width={40}
                        height={40}
                        alt="Logo Beekasir"
                      />
                      </div>
                  </a>
                  </div>
                  <div className="flex-grow-1 ms-3" >
                      <b> BeeKasir </b>
                      <p> Produk Aplikasi Kasir Untuk UMKM - Gratis Download di PlayStore </p>
                      
                  </div>
                </div>
            </div>

            <div className="col-md-4" data-aos="fade-in">
                  <div className="d-flex">
                  <div className="flex-shrink-0">
                  <a href='http://perumahan.beebeesoft.com'>
                      <div className="shadow p-3 mb-5 bg-body rounded">
                      <Image
                        src={logoSiundang}
                        width={40}
                        height={40}
                        alt="Logo Siundang"
                      />
                      </div>
                  </a>
                  </div>
                  <div className="flex-grow-1 ms-3" >
                      <b> Company Profile </b>
                      <p> Jasa Pembuata Website Perusahaan</p>
                      
                  </div>
                  </div>
            </div>

            <div className="col-md-4" data-aos="fade-in">
                  <div className="d-flex">
                  <div className="flex-shrink-0">
                      <Link href="/pricing/development">
                      <div className="shadow p-3 mb-5 bg-body rounded">
                      <FontAwesomeIcon icon={faLaptopCode} size='2x'/>
                      </div>
                      </Link>
                  </div>
                  <div className="flex-grow-1 ms-3" >
                      <b> Software Development</b>
                      <p> Jasa Pembuatan Software Website dan Aplikasi Mobile</p>
                  </div>
                  </div>
            </div>

            <div className="col-md-4" data-aos="fade-in">
                  <div className="d-flex">
                  <div className="flex-shrink-0">
                      <a href='https://www.youtube.com/@beebeesofttv9458'>
                      <div className="shadow p-3 mb-5 bg-body rounded">
                      <FontAwesomeIcon icon={faGraduationCap} size='2x' />
                      </div>
                      </a>
                  </div>
                  <div className="flex-grow-1 ms-3" >
                      <b> Kursus IT</b>
                      <p> Dapatkan peluang karir di bidang IT dengan belajar Private.</p>
                  </div>
                  </div>
              </div>
              <div className="col-md-4" data-aos="fade-in">
                  <div className="d-flex">
                  <div className="flex-shrink-0">
                      <a href="https://api.whatsapp.com/send?phone=6285797272095&text=beebeesoft-konsultasi">
                      <div className="shadow p-3 mb-5 bg-body rounded">
                      <FontAwesomeIcon icon={faHeadset} size='2x'/>
                      </div>
                      </a>
                  </div>
                  <div className="flex-grow-1 ms-3" >
                      <b> Konsultan IT</b>
                      <p> Konsultasi terkait kebutuhan IT atau Karir Gratis</p>
                  </div>
                  </div>
              </div>



              
          </div>
      </div>
    </div>
  )
}
