import Layout from '../app/layout'
import Header from './components/Header'

export default function Home() {
  return (
    <Layout>
      <Header />
      <section className="container mx-auto mt-16">
        <h1 className="text-3xl font-bold">Welcome to My Website!</h1>
        <p>This website is designed to help future students in the field of Informatics.</p>
      </section>
    </Layout>
  );
}
