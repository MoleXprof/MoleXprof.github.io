import Head from "next/head";
import Link from "next/link";

export const Error404 = () => {
  return (
    <div className="bg-gray-50">
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <div className="flex min-h-screen flex-col bg-white pt-16 pb-12">
        <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="flex flex-shrink-0 justify-center">
            <Link href="/" className="inline-flex" passHref>
              <span>
                <span className="sr-only">About Me</span>
              </span>
            </Link>
          </div>
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-midnight-500">
                404 error
              </p>
              <h1 className="mt-2 text-4xl font-extrabold tracking-tight text-midnight-500 sm:text-5xl">
                Page not found.
              </h1>
              <div className="mt-6">
                <Link href="/" passHref>
                  <span className="hyperlink text-base font-medium">
                    Back to home page <span aria-hidden="true"> &rarr;</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Error404;
