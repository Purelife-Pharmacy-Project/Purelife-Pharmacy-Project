'use client';
import { Footer } from '@/components/home/Footer';
import { NewsLetterCard } from '@/components/home/NewsletterCard';
import { useRef } from 'react';

export default function TermsAndConditions() {
  const introduction = useRef<HTMLDivElement>(null);
  const eligibility = useRef<HTMLDivElement>(null);
  const accountCreation = useRef<HTMLDivElement>(null);
  const serviceTerms = useRef<HTMLDivElement>(null);
  const prohibitedActivities = useRef<HTMLDivElement>(null);
  const orderPayment = useRef<HTMLDivElement>(null);
  const returnsRefunds = useRef<HTMLDivElement>(null);
  const ipr = useRef<HTMLDivElement>(null);
  const thirdPartyContent = useRef<HTMLDivElement>(null);
  const privacyPolicy = useRef<HTMLDivElement>(null);
  const disclaimer = useRef<HTMLDivElement>(null);
  const limitationsLiability = useRef<HTMLDivElement>(null);
  const indemnification = useRef<HTMLDivElement>(null);
  const governingLaw = useRef<HTMLDivElement>(null);
  const changesTerms = useRef<HTMLDivElement>(null);
  const severability = useRef<HTMLDivElement>(null);
  const termination = useRef<HTMLDivElement>(null);
  const disputeResolution = useRef<HTMLDivElement>(null);
  const entireAgreement = useRef<HTMLDivElement>(null);

  const scrollTo = (
    ref: React.RefObject<HTMLDivElement>,
    sign: '-' | '+',
    padding: number
  ) => {
    if (ref.current) {
      const offset =
        sign === '-'
          ? ref.current.offsetTop - padding
          : ref.current.offsetTop + padding;
      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      });
    }
  };

  const telemedicineInfo = [
    'The potential for misdiagnosis or delayed diagnosis due to the inability to perform physical examinations or certain diagnostic tests.',
    'The possibility of technical failures or interruptions that may delay or disrupt the telemedicine session.',
    'The potential for security breaches that could result in unauthorized access to your personal and medical information, despite our security measures.',
    'The inability to provide emergency medical care or handle medical emergencies through telemedicine services.',
    'The potential for reduced quality of care compared to in-person consultations, particularly for conditions that require physical examination or complex diagnostic procedures.',
    'The possibility that not all medical conditions are suitable for diagnosis or treatment via telemedicine.',
    'The risk that the information transmitted may not be sufficient (e.g., poor resolution of images) to allow for appropriate medical decision making by the healthcare provider.',
    'The potential for delays in medical evaluation and treatment due to deficiencies or failures of the equipment.',
    'The risk that despite the reasonable efforts of the healthcare provider, the information transmitted may be insufficient to allow for appropriate medical decision making.',
    'The potential need for follow-up in-person consultations or care.',
  ];
  const prohibitedInfo = [
    'Use our Services in any way that violates any applicable federal, state, local, or international law or regulation.',
    'Impersonate or attempt to impersonate us, our employee, or any other person or entity or user.',
    'Sell or otherwise transfer your profile/account.',
    'Interfere with or disrupt the operation of the Services or servers or networks connected to the Services.',
    'Attempt to gain unauthorized access to any portion of the Services or any other systems or networks connected to the Services.',
    'Use any robot, spider, or other automatic device, process, or means to access the Services for any purpose.',
    'Introduce any viruses, Trojan horses, worms, logic bombs, or other material that is malicious or technologically harmful.',
    'Circumvent, disable, or otherwise interfere with security-related features of the Site.',
    'Modify, adapt, or hack the Service or modify another website so as to falsely imply that it is associated with the Service.',
  ];
  const disclaimerInfo = [
    'Any errors, inaccuracies, or omissions in the content or materials provided on the Site.',
    'Any personal injury or property damage resulting from your access to or use of the Site.',
    'Unauthorized access to or use of our secure servers and any personal or financial information stored therein.',
    'Interruptions or cessation of transmission to or from the Site.',
    'Bugs, viruses, Trojan horses, or other harmful code that may be transmitted through the Site by third parties.',
    'Any errors or omissions in content or materials, or any loss or damage incurred as a result of using any content posted or transmitted through the Site.',
  ];

  return (
    <>
      <div className='grid w-full justify-center gap-6'>
        <main className='mx-auto grid max-w-[1280px] px-6'>
          <div className='custom-width relative mt-5 sm:mt-5'>
            <div className='flex flex-col-reverse sm:flex-row sm:gap-[5%]'>
              <section className='sticky top-32 z-10 mb-7 mt-[20px] w-full overflow-y-scroll sm:h-[70vh] sm:w-[30%]'>
                <header className='mb-[7px] font-bold sm:text-[16px] lg:text-[18px]'>
                  ON THIS PAGE
                </header>
                <div
                  onClick={() => {
                    scrollTo(introduction, '-', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Introduction
                </div>
                <div
                  onClick={() => {
                    scrollTo(eligibility, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Eligibility
                </div>
                <div
                  onClick={() => {
                    scrollTo(accountCreation, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Account Creation and Maintenance
                </div>
                <div
                  onClick={() => {
                    scrollTo(serviceTerms, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Service and Terms of Use
                </div>
                <div
                  onClick={() => {
                    scrollTo(prohibitedActivities, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Prohibited Activities
                </div>
                <div
                  onClick={() => {
                    scrollTo(orderPayment, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Order and Payment Terms
                </div>
                <div
                  onClick={() => {
                    scrollTo(returnsRefunds, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Returns and Refunds
                </div>
                <div
                  onClick={() => {
                    scrollTo(ipr, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Intellectual Property Rights
                </div>
                <div
                  onClick={() => {
                    scrollTo(thirdPartyContent, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Third-Party Websites and Content
                </div>
                <div
                  onClick={() => {
                    scrollTo(privacyPolicy, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Privacy Policy
                </div>
                <div
                  onClick={() => {
                    scrollTo(disclaimer, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Disclaimer
                </div>
                <div
                  onClick={() => {
                    scrollTo(limitationsLiability, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Limitations of Liability
                </div>
                <div
                  onClick={() => {
                    scrollTo(indemnification, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Indemnification
                </div>
                <div
                  onClick={() => {
                    scrollTo(governingLaw, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Governing Law and Jurisdiction
                </div>
                <div
                  onClick={() => {
                    scrollTo(changesTerms, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Changes To These Terms
                </div>
                <div
                  onClick={() => {
                    scrollTo(severability, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Severability
                </div>
                <div
                  onClick={() => {
                    scrollTo(termination, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Termination
                </div>
                <div
                  onClick={() => {
                    scrollTo(disputeResolution, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Dispute Resolution
                </div>
                <div
                  onClick={() => {
                    scrollTo(entireAgreement, '+', 70);
                  }}
                  className='mb-[7px] cursor-pointer text-[13px] font-semibold sm:text-[14px] lg:text-[16px]'
                >
                  Entire Agreement
                </div>
              </section>
              <section
                className='flex w-full flex-col gap-6 sm:w-[65%]'
              >
                <div ref={introduction}>
                  <header className='text-[24px] font-bold sm:text-[28px] lg:text-[32px]'>
                    Terms And Conditions
                  </header>
                  <p className='mb-2 text-[13px] text-[#5A5A5A] sm:text-[14px]'>
                    Updated Date: September 20, 2024
                  </p>
                  <h2 className='mt-5 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Introduction
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    Welcome to Pure Life Health website{' '}
                    <a
                      className='text-[#0066ff]'
                      href='https://purelifehealth.io'
                    >
                      https://purelifehealth.io
                    </a>{' '}
                    (the “Site” or "Website"). These Terms and Conditions
                    ("Terms", “Terms and Conditions”) govern your access to and
                    use of the Website, including any content, functionality,
                    and services offered on or through the Website
                    (collectively, the "Services"). The Services is owned and
                    operated by A- Pure Lifestyle Pharmacy Nigeria Limited
                    ("Company", "we", "us", or "our"), a private limited
                    liability company registered in Nigeria.
                  </p>
                  <p className='text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    Please read these Terms carefully before using the Service.
                    Your access to and use of the Services (even just browsing
                    through the Website) is conditioned on your acceptance of
                    and/or compliance with these Terms. These Terms apply to all
                    visitors, users, and others who access or use the Services,
                    who are hereinafter referred to as “you”, “your”, or “user”
                  </p>
                </div>
                <div ref={eligibility}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Eligibility
                  </h2>

                  <p className='mb-5 text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    You must be at least 18 years old to use our Services. By
                    using our Services, you represent and warrant that you are
                    at least 18 years of age and have the legal capacity to
                    enter into these Terms.
                  </p>
                </div>
                <div ref={accountCreation}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Account Creation and Maintenance
                  </h2>
                  <p className='mb-5 text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    To access certain features of the Services, you may be
                    required to create an account. You agree to provide
                    accurate, current, and complete information during the
                    registration process and to update such information to keep
                    it accurate, current, and complete.
                  </p>

                  <p className='mb-5 text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    You are responsible for safeguarding your account
                    credentials (including any financial information provided to
                    access the Services), including but not limited to
                    maintaining the confidentiality of your account and
                    password, and for any activities or actions under your
                    account. You agree to notify us immediately of any
                    unauthorized access to or use of your account.
                  </p>

                  <p className='mb-5 text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We reserve the right to disable any user account at any time
                    in our sole discretion for any or no reason, including if,
                    in our opinion, you have violated any provision of these
                    Terms.
                  </p>
                </div>
                <div ref={serviceTerms}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Services and Terms of Use
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We offer various services through the Website, including the
                    sale of pharmaceutical products, vaccines, and equipment,
                    telemedicine services via the Telehealth portal, scheduling
                    of laboratory tests, booking of vaccination appointments,
                    and personalized wellness plans
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We reserve the right to modify, suspend, or discontinue any
                    part of our Services at any time without notice or
                    liability.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    All product descriptions, pricing, and availability are
                    subject to change without notice. We reserve the right to
                    limit the quantities of any products or Services that we
                    offer.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    You acknowledge that the availability and delivery of
                    products and services may be subject to factors beyond our
                    control, including supply chain issues, regulatory
                    approvals, and geographic limitations. Delivery times are
                    estimates and not guaranteed. We are not liable for any
                    delays in delivery.
                  </p>
                  <div className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    Telemedicine services provided through the Website are not
                    intended to replace your primary care physician or other
                    healthcare providers. By using our telemedicine services,
                    you acknowledge that you understand and agree to the
                    limitations of telemedicine, including without limitation:
                    {telemedicineInfo && (
                      <ul className='ml-5 list-disc'>
                        {telemedicineInfo.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className=' text-[13px]  text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    In case of a medical emergency, you should immediately call
                    your local emergency services.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    You acknowledge that while we strive to protect your privacy
                    and confidentiality, no internet-based service can be 100%
                    secure, and you accept the inherent privacy risks associated
                    with using online telemedicine services.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We reserve the right to refuse or cancel telemedicine
                    services at our discretion.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    Wellness plans provided through the Website are for
                    informational purposes only and do not constitute medical
                    advice. You should consult with a healthcare professional
                    before starting any new diet, exercise program, or wellness
                    plan.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We do not guarantee any specific results from following our
                    wellness plans.
                  </p>
                </div>
                <div ref={prohibitedActivities}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Prohibited Activities
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    You agree to use our Services only for lawful purposes and
                    in accordance with these Terms.
                  </p>
                  <div className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    As a user of the Site, you agree not to:
                    {prohibitedInfo && (
                      <ul className='ml-5 list-disc'>
                        {prohibitedInfo.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className=' text-[13px]  text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div ref={orderPayment}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Order and Payment Terms
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    By placing an order for any of our Services, you are making
                    an offer to purchase the products in your order. All orders
                    are subject to acceptance by us.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    You agree to provide current, complete, and accurate
                    purchase and account information for all purchases made
                    through our Website.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We accept various payment methods as displayed on our
                    website. By providing a payment method, you represent and
                    warrant that you are authorized to use the designated
                    payment method and that you permit us to charge your payment
                    method for the total amount of your purchase (including any
                    applicable taxes and other charges).
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    All prices are listed in Nigerian Naira (NGN) unless
                    otherwise specified. We reserve the right to change prices
                    for products or services at any time without notice.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    While we strive to provide accurate pricing information,
                    errors may occur. We reserve the right to correct any errors
                    and to cancel any orders placed based on inaccurate pricing
                    information.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    If you dispute any charges, please contact our customer
                    service department immediately. You agree to submit any
                    disputes within 30 days of the charge date, otherwise, you
                    waive your right to dispute such charges.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We may use third-party payment processors to facilitate
                    payment transactions. Your use of such services is subject
                    to the applicable third-party payment processor's terms and
                    conditions
                  </p>
                </div>
                <div ref={returnsRefunds}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Returns and Refunds
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    Our return and refund policy will be separately provided on
                    the Website and is incorporated into these Terms by
                    reference.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    Notwithstanding the foregoing, certain items, such as
                    prescription medications and opened products, may not be
                    eligible for return or refund due to health and safety
                    regulations.
                  </p>
                </div>
                <div ref={ipr}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Intellectual Property Rights
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    The Services and their entire contents, features, and
                    functionality (including but not limited to all information,
                    software, text, displays, images, video, and audio, and the
                    design, selection, and arrangement thereof) are owned by the
                    Company, its licensors, or other providers of such material
                    and are protected by Nigerian and international copyright,
                    trademark, patent, trade secret, and other intellectual
                    property or proprietary rights laws or agreements.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    You may not copy, reproduce, modify, publish, upload, post,
                    display, encode, translate, transmit, distribute, sell, or
                    otherwise exploit any part of the Services or its content
                    and without our explicit prior written consent.
                  </p>
                </div>
                <div ref={thirdPartyContent}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Third-Party Websites And Content
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    Our Site may include links to external websites
                    (“Third-Party Websites”) and may feature articles, photos,
                    text, graphics, designs, music, videos, information,
                    applications, software, and other materials from third
                    parties (“Third-Party Content”).
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We do not review or monitor Third-Party Websites or
                    Third-Party Content for accuracy, appropriateness, or
                    completeness. We are not responsible for any Third-Party
                    Websites accessed through our Site or any Third-Party
                    Content available on, linked to, or installed from our Site,
                    including their content, accuracy, reliability, opinions,
                    privacy practices, or policies.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    The inclusion of links to or access to Third-Party Websites
                    and Third-Party Content does not imply our endorsement or
                    approval. If you choose to leave our Site to visit
                    Third-Party Websites or use Third-Party Content, you do so
                    at your own risk, and our Terms and Conditions no longer
                    apply.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We recommend reviewing the terms and privacy policies of any
                    Third-Party Websites you visit or applications you use or
                    install from our Site. Any transactions or purchases made
                    through Third-Party Websites are handled directly with those
                    third parties, and we accept no responsibility for such
                    transactions.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    You acknowledge that we do not endorse products or services
                    offered on Third-Party Websites and agree to hold us
                    harmless from any damages or issues arising from your use or
                    purchase of such products or services. This includes any
                    losses or harm resulting from interactions with Third-Party
                    Content or Third-Party Websites.
                  </p>
                </div>
                <div ref={privacyPolicy}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Privacy Policy
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We care about data privacy and security. By using the Site,
                    you agree to be bound by our Privacy Policy, which is
                    incorporated into these Terms and Conditions. Please be
                    advised the Site is hosted in Nigeria.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    You acknowledge that the information you provide to us,
                    including health-related information, may be sensitive and
                    confidential. We will handle such information in accordance
                    with applicable data protection laws and our Privacy Policy.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    If you access the Site from the European Union, United
                    States, Asia, or any other region of the world with laws or
                    other requirements governing personal data collection, use,
                    or disclosure that differ from applicable laws in Nigeria,
                    then through your continued use of the Site, you are
                    transferring your data to Nigeria, and you expressly consent
                    to have your data transferred to and processed in Nigeria.
                  </p>
                </div>
                <div ref={disclaimer}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Disclaimer
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    The site is provided on an "AS IS" and "AS AVAILABLE" basis.
                    Your use of the site and our services is at your own risk.
                    To the fullest extent permitted by Nigerian law, we disclaim
                    all warranties, whether express or implied, related to the
                    Site and your use of it. This includes, but is not limited
                    to, implied warranties of merchantability, fitness for a
                    particular purpose, and non-infringement.
                  </p>
                  <div className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We do not guarantee the accuracy or completeness of the
                    Site’s content or any content on linked websites. We will
                    not be liable for:
                    {disclaimerInfo && (
                      <ul className='ml-5 list-disc'>
                        {disclaimerInfo.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className=' text-[13px]  text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'
                            dangerouslySetInnerHTML={{ __html: item }}
                          ></li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We do not endorse, guarantee, or assume responsibility for
                    any products or services advertised or offered by third
                    parties through the Site, any linked websites, or any
                    third-party features. We are not responsible for monitoring
                    transactions between you and third-party providers of
                    products or services. As with any purchase or service
                    acquisition, we advise you to exercise caution and use your
                    best judgment.
                  </p>
                </div>
                <div ref={limitationsLiability}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Limitations of Liability
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    Under no circumstances shall we, or our directors,
                    employees, or agents, be liable to you or any third party
                    for any direct, indirect, consequential, exemplary,
                    incidental, special, or punitive damages as a result of your
                    access to or use of or inability to access or use the
                    Services. This includes, but is not limited to, lost
                    profits, lost revenue, loss of data, or other damages
                    arising from your use of the Site, even if we have been
                    advised of the possibility of such damages.
                  </p>
                </div>
                <div ref={indemnification}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Indemnification
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    You agree to defend, indemnify, and hold us harmless,
                    including our successors-in-title, subsidiaries, affiliates,
                    and all of our respective officers, agents, partners, and
                    employees, from and against any loss, damage, liability,
                    claim, or demand, including reasonable attorneys’ fees and
                    expenses, made by any third party due to or arising out of
                    your use of the Site or breach of these Terms and
                    Conditions.
                  </p>
                </div>
                <div ref={governingLaw}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Governing Law and Jurisdiction
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    These Terms and Conditions and your use of the Services are
                    governed by and construed in accordance with the laws of
                    Nigeria. Any legal suit, action, or proceeding arising out
                    of, or related to, these Terms or the Services shall be
                    instituted exclusively in the courts of Nigeria.
                  </p>
                </div>
                <div ref={changesTerms}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Changes To These Terms
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We reserve the right to change, modify, or alter these Terms
                    at our discretion and without prior notice. Your continued
                    use of the Services following the posting of revised Terms
                    means that you accept and agree to the changes.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    Additionally, we may modify or discontinue all or part of
                    the Site at any time without notice. We will not be liable
                    to you or any third party for any changes, price
                    adjustments, suspension, or discontinuation of the Site.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We cannot guarantee that the Site will be available at all
                    times. The Site may experience interruptions, delays, or
                    errors due to hardware, software, or other issues, including
                    necessary maintenance.
                  </p>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    Nothing in these Terms and Conditions obligates us to
                    maintain, support, or provide corrections, updates, or
                    releases for the Site.
                  </p>
                </div>
                <div ref={severability}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Severability
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    If any provision or part of a provision of these Terms and
                    Conditions is found to be unlawful, void, or unenforceable,
                    that provision or part of a provision will be deemed
                    severable from these Terms and Conditions. The remaining
                    provisions will continue to be valid and enforceable, and
                    the validity and enforceability of the remaining provisions
                    will not be affected.
                  </p>
                </div>
                <div ref={termination}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Termination
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    We may terminate or suspend your account and bar access to
                    the Services immediately, without prior notice or liability,
                    under our sole discretion, for any reason whatsoever and
                    without limitation, including but not limited to a breach of
                    the Terms. Upon termination, your right to use the Services
                    will immediately cease.
                  </p>
                </div>
                <div ref={disputeResolution}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Dispute Resolution
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    To expedite resolution and control the cost of any dispute,
                    controversy, or claim related to these Terms and Conditions
                    (each a “Dispute” and collectively, the “Disputes”) brought
                    by either you or us (individually, a “Party” and
                    collectively, the “Parties”), the Parties agree to first
                    attempt to amicably negotiate and/or resolve any Dispute
                    informally for at least 45 days before initiating
                    Arbitration. Such informal negotiations commence upon
                    written notice from one Party to the other Party. <br />
                    If the Parties are unable to resolve a Dispute through
                    informal negotiations within the aforementioned timeframe,
                    then on the application of any of the Parties (notice of
                    such application being given to the other Party), the
                    dispute shall be referred to a single arbitrator appointed
                    by the Chairman of the Nigerian branch of the Chartered
                    Institute of Arbitrators (CIArb) to be resolved by
                    Arbitration. <br />
                    The arbitration proceedings shall be conducted in accordance
                    with the Arbitration and Mediation Act 2023. The venue and
                    seat of the arbitration shall be Lagos, Nigeria.
                  </p>
                </div>
                <div ref={entireAgreement}>
                  <h2 className=' my-4 font-semibold sm:text-[20px] lg:text-[24px]'>
                    Entire Agreement
                  </h2>
                  <p className='mb-[20px] text-justify text-[13px] text-[#5A5A5A] sm:text-[14px] lg:text-[16px]'>
                    These Terms, our Privacy Policy, and any other legal notices
                    published by us on the Services, constitute the entire
                    agreement between you and the Company regarding the
                    Services.
                  </p>
                </div>
              </section>
            </div>
          </div>
          <div className='mx-auto mb-10 mt-10 w-full px-4 sm:mb-10'>
            <div className='flex flex-col justify-between gap-6 rounded-[20px] bg-primaryLight pb-[20px] pl-[40px] pr-[40px] pt-[20px] sm:flex-row sm:items-center sm:gap-0'>
              <h3 className='text-[20px] font-extrabold text-[#FF0028] sm:text-[22px] lg:text-[24px]'>
                Report any adverse drug reaction here
              </h3>
              <button className='w-fit rounded-[50px] bg-[#FF0028]  pb-[15px]  pl-[50px]  pr-[50px]  pt-[15px] text-[13px] text-[#FFFFFF]  sm:pb-[10px] sm:pl-[30px] sm:pr-[30px] sm:pt-[10px] sm:text-[14px]'>
                Report Now
              </button>
            </div>
          </div>
          <NewsLetterCard />
          <Footer />
        </main>
      </div>
      <style jsx>{`
        @media (min-width: 1280px) {
          .custom-width {
            width: calc(100% - 3rem);
          }
        }
      `}</style>
    </>
  );
}
