export default function IndustrialLandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg">
  <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">
    
    {/* Logo + Company Name */}
    <div className="flex items-center gap-4">
      <img className="size-12 animate-pulse ..."
        src="/logo.png"
        alt="Global One Logo"
        className="h-14 w-14 object-contain"
      />

      <div>
        <h1 className="text-2xl font-bold" >Global One Industrial Technologies Inc.</h1>
        <p className="text-sm text-gray-300">
          Warehouse Solutions & Material Handling
        </p>
      </div>
    </div>

    {/* Navigation */}
    <nav className="hidden md:flex gap-6 text-sm font-medium">
      <a href="#services" className="hover:text-yellow-400">Services</a>
      <a href="#about" className="hover:text-yellow-400">About</a>
      <a href="#contact" className="hover:text-yellow-400">Contact</a>
      <a href="#vision" className="hover:text-yellow-400">Our Vision</a>
      <a href="#ourpartners" className="hover:text-yellow-400">Partners</a>
    </nav>
        <a
        href="/files/company-profile.pdf"
        download
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-2 py-3 rounded-2xl shadow-lg transition"
        >
        Download Company Profile
        </a>
  </div>
</header>

      {/* Hero Section */}
      <section className="relative bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center h-[90vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl text-white">
          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Industrial Racking System & Forklift Solutions
          </h2>

          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Optimize your warehouse space and improve operational efficiency
            with high-quality storage systems and material handling equipment.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-2xl shadow-lg transition"
            >
              Request Quotation
            </a>

            <a
              href="#services"
              className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl transition"
            >
              View Services
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h3 className="text-4xl font-bold mb-4">Our Services</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Complete warehouse storage and material handling solutions for industrial and commercial operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-3xl shadow-md p-8 hover:shadow-xl transition">
              <div className="text-6xl mb-4">🏗️</div>
              <h4 className="text-2xl font-bold mb-3">Racking Systems</h4>
              <p className="text-gray-600">
                Heavy-duty pallet racking, selective racks, drive-in racks, mezzanine systems, and warehouse shelving solutions.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl shadow-md p-8 hover:shadow-xl transition">
              <div className="text-6xl mb-4 ">🚜</div>
              <h4 className="text-2xl font-bold mb-3">Forklifts & MHE</h4>
              <p className="text-gray-600">
                Supply of forklifts, pallet trucks, stackers, reach trucks, and other material handling equipment.
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl shadow-md p-8 hover:shadow-xl transition">
              <div className="text-6xl mb-4 animate-bounce">📦</div>
              <h4 className="text-2xl font-bold mb-3">Warehouse Optimization</h4>
              <p className="text-gray-600">
                Space planning, warehouse layout design, and storage optimization for maximum operational productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 bg-gray-200">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=1200&auto=format&fit=crop"
              alt="Warehouse"
              className="rounded-3xl shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-4xl font-bold mb-6">Why Choose Us?</h3>
            <p className="text-gray-700 mb-4">
              We provide reliable industrial storage systems and warehouse solutions tailored to your business requirements.
            </p>
            <ul className="space-y-4 text-gray-700">
              <li>✅ High-quality industrial racking systems</li>
              <li>✅ Reliable forklifts and material handling equipment</li>
              <li>✅ Warehouse space optimization</li>
              <li>✅ Professional installation and support</li>
              <li>✅ Competitive pricing and consultation</li>
              <li>✅ Reliable forklifts and material handling equipment</li>
            </ul>
          </div>
        </div>
      </section>


      {/* Vision */}
      <section id="vision" className="py-20 px-6 bg-gray-100">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          
          <div>
            <h3 className="text-4xl font-bold mb-6">Our Vision</h3>
            <p className="text-gray-700 mb-4">
              To provide a complete storage solution and provide client advantages through:
            </p>
            <ul className="space-y-4 text-gray-700 font-bold">
              <li>✅ C - competent support team</li>
              <li>✅ A - uthentic service approach</li>
              <li>✅ R - esponsible and reliable workforce</li>
              <li>✅ E - xcellent service execution</li>
            </ul>
          </div>
          <div>
            <img
              src="/public/files/vision.png"
              alt="vision"
              className="rounded-4xl shadow-xl"
            />
          </div>
        </div>
      </section>


      {/* CTA */}
      <section className="bg-slate-900 text-white py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-4xl font-bold mb-6">
            Ready to Upgrade Your Warehouse?
          </h3>

          <p className="text-gray-300 text-lg mb-8">
            Contact us today for free consultation and quotation.
          </p>

          <a
            href="#contact-form"
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-2xl shadow-lg transition"
          >
            Contact Us Now!
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6">Contact Us</h3>

          <p className="text-gray-600 mb-10">
            We are ready to help you with your warehouse and industrial storage requirements.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-2xl p-6 shadow">
              <h4 className="font-bold text-xl mb-2">📞 Phone</h4>
              <p>Tel No. (046) 884 1848</p>
              <p>Cel No. (+63) 917 893 0240</p>
              <p>Cel No. (+63) 917 303 2810</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow">
              <h4 className="font-bold text-xl mb-2">📧 Email</h4>
              <p>sales@globaloneindustrial.com</p>
              <p>globalonetechteam@gmail.com</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow">
              <h4 className="font-bold text-xl mb-2">📍 Location</h4>

              <a
                href="https://www.google.com/maps/place/Global+One+Industrial+Technologies,+INC./@14.2780501,120.9833055,279a,35y,0h/data=!3m1!1e3!4m6!3m5!1s0x33bd7f860c836663:0x8079df53b09e16!8m2!3d14.2780046!4d120.9838717!16s%2Fg%2F11p9n8n9pk?entry=ttu&g_ep=EgoyMDI2MDUxNy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                B3 L6 Texas St. Cityland Brgy Piela Sampaloc III,
                Dasmariñas City, Cavite, 4114, Philippines
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners */}
         {/* <section id="ourpartners" className="py-20 bg-gray-100">
                      <div class="bg-white py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <h3 className=" text-center text-3xl font-bold mb-6">Our partners</h3>
              <h2 class="text-center text-lg/8 font-semibold text-gray-900">Trusted by the world’s most innovative teams</h2>
              <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-8 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8">
                <img width="158" height="60" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" />
                 <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
              </div>
              <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-8 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8">
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" />
                 <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
              </div>
              <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-8 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8">
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" />
                 <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
              </div>
              <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-8 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-8">
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal" class="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic" class="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1" />
                 <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
                <img width="158" height="48" src="https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" class="col-span-2 max-h-12 w-full object-contain lg:col-span-1" />
              </div>
             
            </div>
          </div>
          </section>


            */}


      {/* Footer */}
      <footer className="bg-black text-gray-300 text-center py-6 text-medium text-color-400">
        © 2026 🌍 Global One Industrial Technologies Inc. | All Rights Reserved ❤️
      </footer>
      
      
    </div>
  );
}
