import { Offers } from '../components/offers';
import { Cities } from '../components/cities';
import { Spinner } from '../components/spinner/spinner';
import { useAppSelector } from '../hooks';
import { State } from '../types/state';
import { Header } from '../components/header';


export const MainScreen = () => {
  const isLoading = useAppSelector((state: State) => state.isLoading);


  return (
    <>
      <Header />
      <main className='page__main page__main--index'>
        <h1 className='visually-hidden'>Cities</h1>
        <div className='tabs'>
          <section className='locations container'>
            <Cities />
          </section>
        </div>
        {isLoading ? <Spinner /> : <Offers />}
      </main>
    </>
  );
};
