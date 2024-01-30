import Layout from '../app/layout'
import Header from './components/Header'

export default function Home() {
  return (
    <Layout>
      <Header />
      <h1>Welcome to My Website!</h1>
      <p>This website is designed to help future students in the field of Informatics.</p>
    </Layout>
  );
}
