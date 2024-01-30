import Layout from '../app/layout'
import Header from './components/Header'
import Footer from './components/Footer'

export default function Home() {
  return (
    <Layout>
      <Header />
      <section className="container mx-auto mt-16">

        <div>
          <h1 className="text-3xl font-bold mb-4 mt-24">Čau budúci vysokoškolák </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Vítam ťa na mojom webe, ktorý je navrhnutý s cieľom pomáhať budúcim študentom v oblasti Informatiky na Technickej univerzite v Košiciach. <br />
            Materiály užívaj rozumne a nezabúdaj, že všetko, čo tu nájdeš, je len pomocným materiálom a nie náhradou za vlastnú prácu :) <br />
            Za prípadné chyby sa ospravedlňujem a prosím o ich nahlásenie. <br />
            <span className="block mt-4 text-sm text-gray-600">
              PS: Vyvarujte sa KO :)
            </span>
          </p>

        </div>

        <hr className="h-1 bg-blue-500" />

        <div className='flex'>
          <div className="lg:w-1/2 md:w-1/2 sm:w-12 mr-4">
            <p className="mt-4 text-2xl font-bold">Bc.</p>

            <ol className="absolute ms-3 mt-4 border-s border-gray-200">
              <li className="mb-16 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-blue-500 bg-blue-200" />
                <h3 className="pt-1 hover:font-medium hover:cursor-pointer duration-150">1. Zimný semester</h3>
              </li>

              <li className="mb-16 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-blue-500 bg-blue-200" />
                <h3 className="pt-1 hover:font-medium hover:cursor-pointer duration-150">1. Letný semester</h3>
              </li>

              <li className="mb-16 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-blue-500 bg-blue-200" />
                <h3 className="pt-1 hover:font-medium hover:cursor-pointer duration-150">2. Zimný semester</h3>
              </li>

              <li className="mb-16 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-blue-500 bg-blue-200" />
                <h3 className="pt-1 hover:font-medium hover:cursor-pointer duration-150">2. Letný semester</h3>
              </li>

              <li className="mb-16 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-blue-500 bg-blue-200" />
                <h3 className="pt-1 hover:font-medium hover:cursor-pointer duration-150">3. Zimný semester</h3>
              </li>

              <li className="ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-blue-500 bg-blue-200" />
                <h3 className="pt-1 hover:font-medium hover:cursor-pointer duration-150">3. Letný semester</h3>
              </li>
            </ol>
          </div>

          <div className="lg:w-1/2 md:w-1/2 sm:w-12 ml-4">
            <p className="mt-4 text-2xl font-bold">Ing.</p>

            <ol className="absolute ms-3 mt-4 border-s border-gray-200">
              <li className="mb-16 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-blue-500 bg-blue-200" />
                <h3 className="pt-1 hover:font-medium hover:cursor-pointer duration-150">1. Zimný semester</h3>
              </li>

              <li className="mb-16 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-blue-500 bg-blue-200" />
                <h3 className="pt-1 hover:font-medium hover:cursor-pointer duration-150">1. Letný semester</h3>
              </li>

              <li className="mb-16 ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-blue-500 bg-blue-200" />
                <h3 className="pt-1 hover:font-medium hover:cursor-pointer duration-150">2. Zimný semester</h3>
              </li>

              <li className="ms-6">
                <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -start-4 ring-4 ring-blue-500 bg-blue-200" />
                <h3 className="pt-1 hover:font-medium hover:cursor-pointer duration-150">2. Letný semester</h3>
              </li>
            </ol>
          </div>
        </div>

      </section>
      <Footer />
    </Layout>
  );
}
