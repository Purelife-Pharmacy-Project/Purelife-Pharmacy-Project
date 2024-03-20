import { AppNavbar } from '@/components/Navbar';
import { HowItWorks } from '@/components/book-lab-test/HowItWorks';
import { Footer } from '@/components/home/Footer';
import { HomeHero } from '@/components/home/HomeHero';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { Section } from '@/components/home/Section';
import { IconAddNotification } from '@/components/icons/IconAddNotification';
import { IconBrowse } from '@/components/icons/IconBrowse';
import { IconHealthShield } from '@/components/icons/IconHealthShield';
import { inputBordered } from '@/theme';
import { Button, Card, CardBody, Input, Textarea } from '@nextui-org/react';

export default function PartnerWithUs() {
  const howItWorksData: {
    description: string;
    icon: JSX.Element;
  }[] = [
    {
      description: 'Get in Touch: Fill out our forms to schedule a chat.',
      icon: <IconBrowse size={48} color='primary' />,
    },
    {
      description:
        "Tailored Solutions: We'll use your info to customize solutions that fit your needs perfectly.",
      icon: <IconHealthShield size={60} color='primary' />,
    },
    {
      description:
        "Team Up: Let's work together to build the future of healthcare.",
      icon: <IconAddNotification size={60} color='primary' />,
    },
  ];

  return (
    <>
      <AppNavbar background='primaryLight' />

      <main className='grid gap-6'>
        <div className='bg-primaryLight lg:grid lg:justify-center'>
          <Section className='bg-primaryLight'>
            <HomeHero
              title='Build your 
              telehealth 
              business with us.'
              description='We provide flexible solutions, support, and tools, and we welcome you as a partner to build the future of healthcare together.'
              ctaText={''}
              ctaLink='#teleHealthServices'
            />
          </Section>
        </div>

        <HowItWorks data={howItWorksData} variant={'primary'} />

        <div className='lg:grid lg:justify-center'>
          <Section>
            <Card shadow='none' className='bg-primaryLight'>
              <CardBody className='grid gap-4 bg-primaryLight p-6 blur-sm'>
                <div className='flex w-full justify-between p-2'>
                  <div className='flex w-full flex-col gap-2 md:flex-row'>
                    <Input
                      label='First Name'
                      size='lg'
                      fullWidth
                      classNames={inputBordered}
                      placeholder=' '
                      labelPlacement='outside'
                    />
                    <Input
                      label='Last Name'
                      size='lg'
                      fullWidth
                      classNames={inputBordered}
                      placeholder=' '
                      labelPlacement='outside'
                    />
                  </div>
                </div>

                <div className='flex w-full justify-between p-2'>
                  <div className='flex w-full flex-col gap-2 md:flex-row'>
                    <Input
                      label='What best describes you?'
                      size='lg'
                      fullWidth
                      classNames={inputBordered}
                      placeholder=' '
                      labelPlacement='outside'
                    />
                    <Input
                      label='Gender'
                      size='lg'
                      fullWidth
                      classNames={inputBordered}
                      placeholder=' '
                      labelPlacement='outside'
                    />
                  </div>
                </div>

                <div className='flex w-full justify-between p-2'>
                  <div className='flex w-full flex-col gap-2 md:flex-row'>
                    <Input
                      label='Phone number'
                      inputMode='numeric'
                      type='number'
                      size='lg'
                      fullWidth
                      classNames={inputBordered}
                      placeholder=' '
                      labelPlacement='outside'
                    />
                    <Input
                      label='Email Address'
                      type='email'
                      size='lg'
                      fullWidth
                      classNames={inputBordered}
                      placeholder=' '
                      labelPlacement='outside'
                    />
                  </div>
                </div>

                <div className='flex w-full justify-between p-2'>
                  <div className='flex w-full flex-col gap-2 md:flex-row'>
                    <Input
                      label='Name of Organization / Company'
                      size='lg'
                      fullWidth
                      classNames={inputBordered}
                      placeholder=' '
                      labelPlacement='outside'
                    />
                    <Input
                      label='Name of Representative'
                      type='email'
                      size='lg'
                      fullWidth
                      classNames={inputBordered}
                      placeholder=' '
                      labelPlacement='outside'
                    />
                  </div>
                </div>

                <Textarea
                  fullWidth
                  label='Additional Note'
                  size='lg'
                  classNames={inputBordered}
                  placeholder=' '
                  labelPlacement='outside'
                />

                <div className='flex w-full justify-center'>
                  <Button
                    radius='full'
                    isDisabled
                    className='w-max px-10'
                    size='lg'
                    color='primary'
                  >
                    Submit
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Section>
        </div>

        <NewsLetterCard />

        <Footer />
      </main>
    </>
  );
}
