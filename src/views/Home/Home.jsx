import mockup from "../../assets/illustration-dashboard.png";
import Form from "../../components/Form";
import ToastContainer from "../../components/ToastContainer";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-12 p-6 text-center transition-colors duration-300 dark:bg-gray-900 md:p-10">
      <Header />

      <main className="flex flex-col gap-4">
        <h1 className="text-2xl font-light tracking-wider text-custom-gray md:text-4xl md:text-[2.75rem] md:leading-[3.5rem]">
          We are launching{" "}
          <span className="!font-bold font-bold font-light text-very-dark-blue dark:text-stone-50">
            soon!
          </span>
        </h1>
        <p className="mb-[0.4rem] dark:text-stone-50 md:text-normal">
          Subscribe and get notified
        </p>

        <Form />

        <img
          src={mockup}
          className="dark:filter-white transition-filter mx-auto mt-16 mb-8 block w-full max-w-[640px] dark:mix-blend-screen"
          alt=""
          aria-hidden="true"
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
