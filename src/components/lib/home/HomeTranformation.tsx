import { Section } from './Section';

export type TransformationData = {
  stat: string;
  description: string;
};

export const Hometransformation = ({
  data,
}: {
  data: TransformationData[];
}) => {
  return (
    <div className='grid justify-center lg:pb-10 lg:pt-[55px]'>
      <Section className='bg-white'>
        <div className='grid gap-10'>
          <h1 className='max-w-none text-center text-3xl font-bold text-header-100 md:max-w-lg lg:text-4xl xl:max-w-3xl xl:text-start'>
            Join 100,000+ who have transformed their lives with Purelife
            Pharmacy.
          </h1>
          <div className='grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {data.map((item, index) => (
              <div
                key={index}
                className='mx-auto grid h-[224px] w-[224px] place-content-center gap-2 rounded-full bg-primaryLight'
              >
                <p className='text-center text-6xl font-bold text-primary'>
                  {item.stat}
                </p>
                <p className='px-6 text-center text-sm font-medium text-content'>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};
