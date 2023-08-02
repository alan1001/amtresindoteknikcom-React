import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>amtresindoteknik.com</title>
        <meta
          name="description"
          content="amtresindoteknik.com ahlinya perbaikan water heater, pompa air, dan kompor tanam hadir dengan Layanan kilat, senyuman ramah, dan biaya terjangkau. "
        />
        <meta property="og:title" content="amtresindoteknik.com" />
        <meta
          property="og:description"
          content="amtresindoteknik.com ahlinya perbaikan water heater, pompa air, dan kompor tanam hadir dengan Layanan kilat, senyuman ramah, dan biaya terjangkau. "
        />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <div className="home-logo">
            <img alt="image" src="/logo-top-1500h.jpg" className="home-image" />
          </div>
          <div className="home-links-container">
            <a href="#features" className="home-link Anchor">
              Keunggulan
            </a>
            <a href="#services" className="home-link01 Anchor">
              Layanan
            </a>
            <a href="#about-us" className="home-link02 Anchor">
              Tentang
            </a>
            <a href="#contact" className="home-link03 Anchor">
              Kontak
            </a>
          </div>
          <div className="home-cta-container">
            <a
              href="https://api.whatsapp.com/send/?phone=6282131659571&amp;text=Halo+Amtresindo+Teknik%2C+Saya+ingin+berkonsultasi&amp;type=phone_number&amp;app_absent=0"
              className="home-cta-btn button Anchor"
            >
              WA
            </a>
            <a
              href="tel:+6282131659571"
              className="home-cta-btn1 button Anchor"
            >
              Telfon
            </a>
            <div data-role="BurgerMenu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
              </svg>
            </div>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-top">
              <img
                alt="image"
                src="/logo-top-1500h.jpg"
                className="home-image01"
              />
              <div data-role="CloseMobileMenu" className="home-container1">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-mid">
              <div className="home-links-container1">
                <a href="#keunggulan" className="home-link04">
                  features
                </a>
                <a href="#layanan" className="home-link05">
                  services
                </a>
                <a href="#tentang" className="home-link06">
                  About Us
                </a>
                <a href="#contact" className="home-link07 Anchor">
                  contact
                </a>
              </div>
              <button className="home-cta-btn2 Anchor button">
                sTART BUILDING
              </button>
            </div>
            <div className="home-bot">
              <div className="home-social-links-container">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon08"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-hero">
        <div className="home-hero-text-container">
          <h1 className="home-heading">
            <a
              href="https://amtresindoteknik.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link08"
            >
              Amtresindo
            </a>
            <span> Solusi Perbaikan Profesional!</span>
          </h1>
          <span className="home-text01">
            Ahli perbaikan water heater, pompa air, dan kompor tanam siap
            menghadirkan kenyamanan kembali ke dapur dan kamar mandi Anda.
            Layanan kilat, senyuman ramah, dan biaya terjangkau. Kami menangani
            urusan panas dan air, sehingga Anda bisa tenang dan nyaman dalam
            momen-momen berharga di rumah. Tinggal hubungi kami, dan masalah
            Anda selesai!&quot;
          </span>
          <a
            href="https://api.whatsapp.com/send/?phone=6282131659571&amp;text=Halo+Amtresindo+Teknik%2C+Saya+ingin+berkonsultasi&amp;type=phone_number&amp;app_absent=0"
            className="home-cta-btn3 Anchor button"
          >
            Whatsapp
          </a>
        </div>
        <img alt="image" src="/technician-1500w.jpg" className="home-image02" />
        <div className="home-container2">
          <img
            alt="image"
            src="/brand/ariston-200h.webp"
            className="home-image03"
          />
          <img
            alt="image"
            src="/brand/modena-200h.png"
            className="home-image04"
          />
          <img
            alt="image"
            src="/brand/wasser-200h.webp"
            className="home-image05"
          />
        </div>
        <div className="home-container3">
          <img
            alt="image"
            src="/brand/paloma-200h.webp"
            className="home-image06"
          />
          <img
            alt="image"
            src="/brand/sanyo-200h.webp"
            className="home-image07"
          />
          <img
            alt="image"
            src="/brand/shimizu-200h.webp"
            className="home-image08"
          />
        </div>
        <div className="home-container4">
          <img
            alt="image"
            src="/brand/electrolux-200h.png"
            className="home-image09"
          />
          <img
            alt="image"
            src="/brand/grundfos-200h.webp"
            className="home-image10"
          />
          <img
            alt="image"
            src="/brand/hitachi-200h.webp"
            className="home-image11"
          />
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div id="keunggulan" className="home-keunggulan">
        <div className="home-heading-container">
          <h2 className="home-text02">
            <span className="Section-Heading">
              Keunggulan
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://amtresindoteknik.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link09"
            >
              Amtresindo
            </a>
          </h2>
          <span className="home-text04">
            Kenyamanan terjamin dengan pelayanan cepat, ahli, dan ramah untuk
            perbaikan water heater, pompa air, dan kompor tanam.
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-feature-card">
            <svg viewBox="0 0 1280 1024" className="home-icon10">
              <path d="M1232 0h-384c-26.4 0-63.274 15.274-81.942 33.942l-476.116 476.116c-18.668 18.668-18.668 49.214 0 67.882l412.118 412.118c18.668 18.668 49.214 18.668 67.882 0l476.118-476.118c18.666-18.666 33.94-55.54 33.94-81.94v-384c0-26.4-21.6-48-48-48zM992 384c-53.020 0-96-42.98-96-96s42.98-96 96-96 96 42.98 96 96-42.98 96-96 96z"></path>
              <path d="M128 544l544-544h-80c-26.4 0-63.274 15.274-81.942 33.942l-476.116 476.116c-18.668 18.668-18.668 49.214 0 67.882l412.118 412.118c18.668 18.668 49.214 18.668 67.882 0l30.058-30.058-416-416z"></path>
            </svg>
            <span className="home-heading1 Card-Heading">Harga Kompetitif</span>
            <span className="home-text05">
              Harga kompetitif tanpa mengorbankan kualitas! Kami menawarkan
              tarif terjangkau untuk perbaikan water heater, pompa air, dan
              kompor tanam, memberikan solusi terbaik tanpa beban berlebih bagi
              kantong Anda.
            </span>
          </div>
          <div className="home-feature-card1">
            <svg viewBox="0 0 1024 1024" className="home-icon13">
              <path d="M960 608l-288 288-96-96-64 64 160 160 352-352z"></path>
              <path d="M448 768h320v-115.128c-67.22-39.2-156.308-66.11-256-74.26v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h448v-64z"></path>
            </svg>
            <span className="home-heading2 Card-Heading">
              Teknisi Profesional
            </span>
            <span className="home-text06">
              Teknisi profesional, layanan terpercaya. Perbaikan water heater,
              pompa air, dan kompor tanam dengan ahli handal.
            </span>
          </div>
          <div className="home-feature-card2">
            <svg viewBox="0 0 1024 1024" className="home-icon16">
              <path d="M960 0l-448 128-448-128c0 0-4.5 51.698 0 128l448 140.090 448-140.090c4.498-76.302 0-128 0-128zM72.19 195.106c23.986 250.696 113.49 672.234 439.81 828.894 326.32-156.66 415.824-578.198 439.81-828.894l-439.81 165.358-439.81-165.358z"></path>
            </svg>
            <span className="home-heading3 Card-Heading">Garansi Terjamin</span>
            <span className="home-text07">
              Garansi terjamin! Kami menawarkan jaminan kualitas untuk setiap
              perbaikan water heater, pompa air, dan kompor tanam yang kami
              lakukan. Keamanan dan kepuasan pelanggan adalah prioritas utama
              kami, sehingga Anda bisa tenang dengan layanan yang kami berikan.
            </span>
          </div>
        </div>
      </div>
      <div id="layanan" className="home-layanan">
        <div className="home-service-card">
          <div className="home-card-content">
            <h3 className="home-text08 BigCard-Heading">Water Heater</h3>
            <img
              alt="image"
              src="/water-heater-1-500h.jpg"
              loading="lazy"
              className="home-image12"
            />
            <span className="home-text09">
              Amtresindoteknik.com hadir untuk mengatasi segala kerusakan pada
              water heater Anda! Layanan kami mencakup kuras tabung water heater
              listrik atau solar panel, pemasangan water heater, penggantian
              termostat water heater listrik, serta penggantian selenoid &amp;
              membran untuk water heater gas. Selain itu, kami juga menangani
              penggantian elemen pemanas water heater, perbaikan kebocoran, dan
              pemasangan ELCB untuk water heater listrik. Percayakan perbaikan
              water heater Anda pada kami dan nikmati kembali kenyamanan di
              rumah Anda!
            </span>
            <a
              href="https://api.whatsapp.com/send/?phone=6282131659571&amp;text=Halo+Amtresindo+Teknik%2C+Saya+ingin+berkonsultasi&amp;type=phone_number&amp;app_absent=0"
              className="home-link10 button Anchor"
            >
              Whatsapp
            </a>
          </div>
        </div>
        <div className="home-service-card1">
          <div className="home-card-content1">
            <h3 className="home-text10 BigCard-Heading">Pompa Air</h3>
            <img
              alt="image"
              src="/pompa-air-1-500h.jpg"
              loading="lazy"
              className="home-image13"
            />
            <span className="home-text11">
              Amtresindoteknik.com siap membantu Anda dengan segala permasalahan
              pompa air! Layanan kami meliputi instalasi pompa air baru, bongkar
              pasang pompa air, dan perbaikan instalasi hisap jika air tidak
              keluar. Selain itu, kami juga mengatasi masalah bunyi kasar pada
              pompa air dengan mengganti bearing motor, dan memperbaiki dinamo
              pompa air dengan gulung ulang. Jangan khawatir tentang kebocoran,
              karena kami juga melakukan pergantian per seal atau pir seal pompa
              air. Percayakan servis pompa air Anda pada kami, dan nikmati
              kembali aliran air yang lancar dan tanpa khawatir!
            </span>
            <a
              href="https://api.whatsapp.com/send/?phone=6282131659571&amp;text=Halo+Amtresindo+Teknik%2C+Saya+ingin+berkonsultasi&amp;type=phone_number&amp;app_absent=0"
              className="home-link11 button"
            >
              <span>
                <span className="Anchor">Whatsapp</span>
                <br></br>
              </span>
            </a>
          </div>
        </div>
        <div className="home-service-card2">
          <div className="home-card-content2">
            <h3 className="home-text15 BigCard-Heading">Kompor Tanam</h3>
            <img
              alt="image"
              src="/kompor-tanam-1-500h.jpg"
              loading="lazy"
              className="home-image14"
            />
            <span className="home-text16">
              Amtresindoteknik.com adalah ahli servis kompor tanam dengan
              kerusakan! Layanan kami meliputi cuci jalur kompor tanam, oven,
              dan kompor standing untuk menjaga kebersihan dan kinerja optimal.
              Selain itu, kami mengganti modul pemantik kompor dan thermostat
              oven untuk memastikan kompor berfungsi dengan baik. Jangan
              khawatir jika ada masalah pada burner kompor tanam atau kompor
              standing, karena kami juga menyediakan layanan penggantian burner.
              Jika kompor mengalami masalah ngeblug atau pemantik mati, tim kami
              siap melakukan servis untuk mengatasi permasalahan tersebut.
              Percayakan kompor tanam Anda pada kami, dan nikmati kembali
              kesenangan memasak tanpa khawatir!
            </span>
            <a
              href="https://api.whatsapp.com/send/?phone=6282131659571&amp;text=Halo+Amtresindo+Teknik%2C+Saya+ingin+berkonsultasi&amp;type=phone_number&amp;app_absent=0"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link12 Anchor button"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>
      <div id="tentang" className="home-tentang">
        <div className="home-heading-container1">
          <h2 className="home-text17">
            <span className="Section-Heading">
              Tentang
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text19">Amtresindo</span>
          </h2>
          <span className="home-secondary-text Section-Text">
            {' '}
            Percayakan Alat Anda Kepada Kami
          </span>
          <button className="home-cta-btn4 button Anchor">Whatapps</button>
        </div>
        <div className="home-text-container">
          <span className="home-text20">
            <span className="Section-Text home-text21">Amtresindo Teknik</span>
            <span className="Section-Text">
              {' '}
              adalah perusahaan jasa perbaikan yang berdedikasi untuk memberikan
              solusi terbaik bagi Anda dalam hal perbaikan water heater, pompa
              air, dan kompor tanam. Dengan tim teknisi profesional dan
              berpengalaman, kami berkomitmen untuk menghadirkan kenyamanan dan
              kepuasan pelanggan.
            </span>
            <br className="home-text23"></br>
            <br className="Section-Text"></br>
            <span className="Section-Text">
              Di Amtresindo Teknik, kepuasan Anda adalah prioritas utama kami.
              Kami percaya bahwa rumah adalah tempat istimewa di mana
              momen-momen berharga tercipta, dan kami ingin memastikan bahwa
              Anda bisa menikmati momen-momen tersebut tanpa khawatir dengan
              perangkat penting seperti water heater, pompa air, dan kompor
              tanam.
            </span>
            <br className="home-text26"></br>
            <br className="Section-Text"></br>
            <span className="Section-Text">
              Kami menawarkan layanan yang berkualitas dengan harga kompetitif,
              sehingga Anda dapat merasa tenang dan puas dengan hasil kerja
              kami. Teknisi kami adalah para ahli dalam bidangnya, siap
              memberikan pelayanan yang handal dan profesional untuk memperbaiki
              segala masalah yang Anda hadapi.
            </span>
            <br className="home-text29"></br>
            <br className="Section-Text"></br>
            <span className="Section-Text">
              Selain menangani perbaikan, kami juga menyediakan layanan
              instalasi dan penggantian komponen sehingga Anda bisa mendapatkan
              perangkat dengan performa terbaik. Keunggulan layanan kami
              didukung oleh garansi terjamin, memberikan Anda kepercayaan penuh
              pada pilihan kami.
            </span>
            <br className="home-text32"></br>
            <br className="Section-Text"></br>
            <span className="Section-Text">
              Kami mengerti bahwa setiap masalah perangkat dapat menjadi
              pengganggu, itulah mengapa kami selalu siap melayani dengan cepat
              dan efisien. Layanan kami mencakup kuras tabung water heater,
              instalasi pompa air baru, perbaikan instalasi hisap pompa air,
              ganti modul pemantik kompor, dan masih banyak lagi.
            </span>
            <br className="Section-Text"></br>
            <br className="Section-Text"></br>
            <span className="Section-Text">
              Kami bangga telah melayani banyak pelanggan dengan penuh
              kepercayaan selama bertahun-tahun, dan kami berkomitmen untuk
              terus memberikan pelayanan terbaik untuk Anda. Jangan ragu untuk
              menghubungi kami jika Anda membutuhkan bantuan dalam mengatasi
              masalah water heater, pompa air, atau kompor tanam Anda.
            </span>
            <br className="home-text38"></br>
            <br className="Section-Text"></br>
            <span className="Section-Text">
              Terima kasih telah memilih
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="Section-Text">Amtresindo Teknik</span>
            <span className="Section-Text">
              {' '}
              sebagai mitra perbaikan yang dapat diandalkan. Kami berharap dapat
              memberikan layanan yang memuaskan dan menjaga kenyamanan rumah
              Anda dengan sepenuh hati.
            </span>
          </span>
        </div>
        <a
          href="https://api.whatsapp.com/send/?phone=6282131659571&amp;text=Halo+Amtresindo+Teknik%2C+Saya+ingin+berkonsultasi&amp;type=phone_number&amp;app_absent=0"
          className="home-cta-btn5 Anchor button"
        >
          Whatsapp
        </a>
      </div>
      <div className="home-section-separator1"></div>
      <div className="home-testimonials">
        <h2 className="home-text43 Section-Heading">Testimoni Pelanggan</h2>
        <div className="home-cards-container1">
          <div className="home-testimonial-card">
            <div className="home-card-heading">
              <div className="home-name-and-position">
                <span className="Card-Heading">Siti</span>
                <span className="home-position Card-Text">Surabaya</span>
              </div>
              <div className="home-stars-container">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon18"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon20"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon22"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon24"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon26"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
              </div>
            </div>
            <span className="home-text44">
              Water heater di rumah saya bermasalah, airnya tidak lagi panas.
              Saya mencoba memanggil Amtresindo untuk membantu, dan saya sangat
              terkesan dengan pelayanannya. Teknisi yang datang sangat ramah dan
              cepat dalam menemukan masalahnya. Mereka dengan cekatan
              memperbaikinya, dan sekarang air panas di rumah saya kembali
              berfungsi dengan sempurna. Terima kasih, Amtresindo, atas
              pelayanannya yang sangat membantu!
            </span>
          </div>
          <div className="home-testimonial-card1">
            <div className="home-card-heading1">
              <div className="home-name-and-position1">
                <span className="Card-Heading">Michael</span>
                <span className="home-position1 Card-Text">Surabaya</span>
              </div>
              <div className="home-stars-container1">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon28"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon30"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon32"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon34"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon36"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
              </div>
            </div>
            <span className="home-text45">
              Amtresindo sangat cepat dan tanggap dalam menangani masalah kompor
              tanam kami. Layanan yang sangat baik dan kompor kembali berfungsi
              dengan baik. Terima kasih!
            </span>
          </div>
          <div className="home-testimonial-card2">
            <div className="home-card-heading2">
              <div className="home-name-and-position2">
                <span className="Card-Heading">Rina</span>
                <span className="home-position2 Card-Text">Sidoarjo</span>
              </div>
              <div className="home-stars-container2">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon38"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon40"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon42"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon44"
                >
                  <path d="M950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 14.857-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon46"
                >
                  <path d="M649.714 573.714l174.857-169.714-241.143-35.429-108-218.286-108 218.286-241.143 35.429 174.857 169.714-41.714 240.571 216-113.714 215.429 113.714zM950.857 369.714c0 10.286-7.429 20-14.857 27.429l-207.429 202.286 49.143 285.714c0.571 4 0.571 7.429 0.571 11.429 0 15.429-6.857 28.571-23.429 28.571-8 0-16-2.857-22.857-6.857l-256.571-134.857-256.571 134.857c-7.429 4-14.857 6.857-22.857 6.857-16.571 0-24-13.714-24-28.571 0-4 0.571-7.429 1.143-11.429l49.143-285.714-208-202.286c-6.857-7.429-14.286-17.143-14.286-27.429 0-17.143 17.714-24 32-26.286l286.857-41.714 128.571-260c5.143-10.857 14.857-23.429 28-23.429s22.857 12.571 28 23.429l128.571 260 286.857 41.714c13.714 2.286 32 9.143 32 26.286z"></path>
                </svg>
              </div>
            </div>
            <span className="home-text46">
              Pompa air bermasalah, Amtresindo cepat dan sigap dalam mengatasi.
              Terima kasih, hasilnya memuaskan!
            </span>
          </div>
        </div>
      </div>
      <div id="kontak" className="home-kontak">
        <div className="home-content-container">
          <h2 className="home-text47 Section-Heading">Area Amtresindo</h2>
          <div className="home-locations-container">
            <div className="home-location-1">
              <span className="home-heading4">Surabaya &amp; Sidoarjo</span>
              <div className="home-adress">
                <svg viewBox="0 0 1024 1024" className="home-icon48">
                  <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
                </svg>
                <span className="Section-Text">
                  Seluruh Surabaya &amp; Sidoarjo
                </span>
              </div>
              <div className="home-email">
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon50"
                >
                  <path d="M562.857 556.571c9.714 0 102.857 48.571 106.857 55.429 1.143 2.857 1.143 6.286 1.143 8.571 0 14.286-4.571 30.286-9.714 43.429-13.143 32-66.286 52.571-98.857 52.571-27.429 0-84-24-108.571-35.429-81.714-37.143-132.571-100.571-181.714-173.143-21.714-32-41.143-71.429-40.571-110.857v-4.571c1.143-37.714 14.857-64.571 42.286-90.286 8.571-8 17.714-12.571 29.714-12.571 6.857 0 13.714 1.714 21.143 1.714 15.429 0 18.286 4.571 24 19.429 4 9.714 33.143 87.429 33.143 93.143 0 21.714-39.429 46.286-39.429 59.429 0 2.857 1.143 5.714 2.857 8.571 12.571 26.857 36.571 57.714 58.286 78.286 26.286 25.143 54.286 41.714 86.286 57.714 4 2.286 8 4 12.571 4 17.143 0 45.714-55.429 60.571-55.429zM446.857 859.429c197.714 0 358.857-161.143 358.857-358.857s-161.143-358.857-358.857-358.857-358.857 161.143-358.857 358.857c0 75.429 24 149.143 68.571 210.286l-45.143 133.143 138.286-44c58.286 38.286 127.429 59.429 197.143 59.429zM446.857 69.714c237.714 0 430.857 193.143 430.857 430.857s-193.143 430.857-430.857 430.857c-72.571 0-144.571-18.286-208.571-53.714l-238.286 76.571 77.714-231.429c-40.571-66.857-61.714-144-61.714-222.286 0-237.714 193.143-430.857 430.857-430.857z"></path>
                </svg>
                <a
                  href="https://api.whatsapp.com/send/?phone=6282131659571&amp;text=Halo+Amtresindo+Teknik%2C+Saya+ingin+berkonsultasi&amp;type=phone_number&amp;app_absent=0"
                  className="home-link13"
                >
                  082131659571
                </a>
              </div>
              <div className="home-phone">
                <svg
                  viewBox="0 0 804.5714285714286 1024"
                  className="home-icon52"
                >
                  <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                </svg>
                <a href="tel:+6282131659571" className="home-link14">
                  082131659571
                </a>
              </div>
            </div>
          </div>
          <div className="home-social-links-container1">
            <a
              href="https://amtresindoteknik.com"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link15"
            >
              amtresindoteknik.com
            </a>
          </div>
        </div>
        <img alt="image" src="/logo-1-1500w.jpg" className="home-image15" />
      </div>
    </div>
  )
}

export default Home
