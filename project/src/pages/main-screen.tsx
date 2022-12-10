import { Offers } from '../components/offers';
import { Cities } from '../components/cities';
import { Spinner } from '../components/spinner/spinner';
import { useAppSelector } from '../hooks';
import { Header } from '../components/header';
import { loadingSelector } from '../store/data-process/selectors';

export const MainScreen = () => {
  const isLoading = useAppSelector(loadingSelector);

  return (
    <>
      <Header withBtn />
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
