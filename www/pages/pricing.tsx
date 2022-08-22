import Container from "components/Container";
import Layout from "~/components/Layouts/Default";
import SectionContainer from "~/components/Layouts/SectionContainer";
import { Button, Typography } from "@supabase/ui";
import Link from "next/link";

import prices from "data/prices.json";
import faqs from "data/faq.json";

export type IPrice = {
  ref: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  isRecommended?: boolean;
  url: string;
  isMonthly?: boolean;
  footerMessage?: string;
};

const Header = () => (
  <div className="relative bg-gray-500">
    <div className="section--masked bg-gray-500">
      <div className="section--bg-masked bg-gray-500">
        <div className="section--bg border-t border-b border-gray-100 dark:border-gray-600"></div>
      </div>
      <div className="section-container pt-12 pb-0 bg-gray-500">
        <div className="overflow-x-hidden bg-gray-500">
          <SectionContainer className="mb-0 pb-8 bg-gray-500">
            <div className="grid grid-cols-12">
              <div className="col-span-12 text-center">
                <Typography.Title level={2}>
                  Simple, straightforward pricing
                </Typography.Title>
                <Typography.Text>
                  <p className="lg:text-lg">
                    Engage with your customer with voice or messaging with a
                    single easy-to-use platform.
                  </p>
                </Typography.Text>
              </div>
            </div>
          </SectionContainer>
        </div>
      </div>
    </div>
  </div>
);

const Price = ({
  price: {
    title,
    price,
    description,
    features,
    isRecommended,
    url,
    isMonthly,
    footerMessage,
  },
}: {
  price: IPrice;
}) => (
  <section
    className={
      isRecommended
        ? "price-item price-item-recommended flex flex-col rounded-3xl px-6 sm:px-8 order-first bg-brand-700 py-8 lg:order-none"
        : "price-item flex flex-col rounded-3xl px-6 sm:px-8 lg:py-8"
    }
  >
    <Typography.Title level={3} className="mt-5">
      {title}
    </Typography.Title>
    <Typography.Text>
      <p className="lg:text-lg">{description}</p>
    </Typography.Text>
    <p className="order-first font-display text-5xl font-light tracking-tight text-white">
      {price}

      {isMonthly && <span className="text-sm opacity-75"> /month</span>}
    </p>
    <ul
      role="list"
      className="order-last mt-10 flex flex-col gap-y-3 text-sm text-slate-200"
    >
      {features.map((feature) => (
        <li
          className={
            isRecommended
              ? "flex text-white font-medium"
              : "flex text-brand-700"
          }
          key={feature}
        >
          <svg
            aria-hidden="true"
            className="h-6 w-6 flex-none fill-current stroke-current text-slate-400"
          >
            <path
              d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
              strokeWidth="0"
            ></path>
            <circle
              cx="12"
              cy="12"
              r="8.25"
              fill="none"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></circle>
          </svg>
          <span className="ml-4 text-white">{feature}</span>
        </li>
      ))}
    </ul>

    <Link href={url}>
      <a className="group inline-flex mt-8" target="_blank">
        <Button size="medium" className="w-full flex relative">
          Get started
        </Button>
      </a>
    </Link>

    {footerMessage && (
      <Typography.Text className="mt-8 text-sm text-slate-200">
        {footerMessage}
      </Typography.Text>
    )}
  </section>
);

const Pricing = () => {
  return (
    <Layout>
      <Container>
        <Header />
        <section className="bg-slate-900 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
              {(prices as unknown as IPrice[]).map((price) => (
                <Price key={price.ref} price={price} />
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-gray-500 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2
                id="faq-title"
                className="font-display text-3xl tracking-tight text-white sm:text-4xl"
              >
                Frequently Ask Questions
              </h2>
              <p className="mt-4 text-lg tracking-tight text-gray-300">
                Looking for answers? Here are some common questions we've been
                asked.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2"
            >
              {faqs.map((faq, index) => (
                <li key={index}>
                  <ul role="list" className="flex flex-col gap-y-8">
                    {faq.map((item) => (
                      <li key={item.question}>
                        <Typography.Title
                          level={4}
                          className="font-display font-medium leading-7"
                        >
                          {item.question}
                        </Typography.Title>
                        <Typography.Text className="mt-4">
                          {item.answer}
                        </Typography.Text>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Container>
    </Layout>
  );
};

export default Pricing;
