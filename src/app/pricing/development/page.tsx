import Link from 'next/link';

function Development() {
    return (
    <div className='container bgWhite'>
    <div className="pricing-header p-3 pb-md-4 mx-auto text-center">
      <h1 className="display-4 fw-normal text-body-emphasis">Pricing</h1>
      <p className="fs-5 text-body-secondary">
        Daftar Harga Jasa Software Development
    </p>
    <p className="fs-5 text-body-secondary">
        Jasa Pembuatan Aplikasi Web Android dan Ios. Harga dapat menyesuaikan kebutuhan bisnis anda.
    </p>
    </div>
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">

      <div className="col">
      <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-bg-primary border-primary">
            <h4 className="my-0 fw-normal">Compro Reguler</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">499 ribu<small className="text-body-secondary fw-light">/bulan</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Website Company Profile</li>
              <li>Include Domain</li>
              <li>Include Server Shared</li>
              <li>Include SSL (HTTPS)</li>
              <li>Include Design</li>
              <li>Include Logo Perusahaan</li>
              <li>Include 5 Email gratis</li>
              <li>Include Maintenance Content</li>
              <li>Free Development Web</li>
              <li>Min Pembayaran 5 bulan di awal</li>
            </ul>
            <a href="https://api.whatsapp.com/send?phone=6285171064406&text=beebeesoft-konsultasi">
                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Konsultasi</button>
            </a>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Compro Profesional</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">999 ribu<small className="text-body-secondary fw-light">/bulan</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Website Company Profile</li>
              <li>Website Ecommerce</li>
              <li>All in Compro Reguler</li>
              <li>Digital Marketing</li>
              <li>Search Engine Optimization</li>
              <li>Min Pembayaran 3 bulan di awal</li>
            </ul>
            <a href="https://api.whatsapp.com/send?phone=6285171064406&text=beebeesoft-konsultasi">
                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Konsultasi</button>
            </a>
          </div>
        </div>
      </div>

      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal">Compro Flash</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">5Jt<small className="text-body-secondary fw-light">/One Time</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Website Company Profile</li>
              <li>Website Ecommerce</li>
              <li>Include Domain 1 Year</li>
              <li>Include Hosting 1 Year</li>
              <li>Include SSL 1 Year</li>
              <li>Include Design</li>
              <li>Include Development Web</li>
              <li>Include Garansi 1 Tahun</li>
              <li>No Maintenance</li>
            </ul>
            <a href="https://api.whatsapp.com/send?phone=6285171064406&text=beebeesoft-konsultasi">
                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Konsultasi</button>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-primary">
          <div className="card-header py-3 text-bg-primary border-primary">
            <h4 className="my-0 fw-normal">Enterprise</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">Contact US</h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>For Development Web/Android/IOS</li>
              <li>Custom Feature</li>
              <li>More Option Technology</li>
              <li>Custom Design</li>
            </ul>
            <a href="https://api.whatsapp.com/send?phone=6285171064406&text=beebeesoft-konsultasi">
                <button type="button" className="w-100 btn btn-lg btn-outline-primary">Konsultasi</button>
            </a>
          </div>
        </div>
      </div> */}

    </div>

    </div>
    )
  }
  
  export default Development