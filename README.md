# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


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