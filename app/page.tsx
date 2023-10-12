import Card from './components/Card';

export default function Home() {
  return (
    <main className='grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 py-10'>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  );
}
