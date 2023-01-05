import React, { Fragment } from 'react';
import Layout from '../../components/user/Layout';
import Head from 'next/head';
import { apiRoute } from '../../utils/helpers';

export default function PrivacyPolicy({ pageData }) {
    return (
        <Layout>
            <Head>
                <title>Privacy Policy.</title>
            </Head>
            <div className='light-purplebg'>
                <main>
                    <section className='sec sec-inabout sec-list'>
                        <div class='container'>
                            <h4 className='revamp-subtitle'>Privacy Policy</h4>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: pageData['0'].description,
                                }}
                            ></div>
                            {/* <p>
                                This section applies to Personal Information we collect and process through the Services when you engage with us as a User of the Service. If you are not yet a User, Section 4 (applicable to visitors to our Websites) may be more applicable to you and your data. In this Section, "you" or "your' refer to Users.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>About Us</p>
                            <p>
                                Sattva Connect is an online platform of Sattva Connect, LLC,  a company headquartered in State of Virginia in the United States (hereinafter “we,” “us,” “our,” and “Sattva Connect).  It is designed to share the teachings and practices of Sattva Yoga by producing and making available videos, live streams, web-courses and other web content (hereinafter the "Services").
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>Key Terms.&nbsp;</p>
                            <p>
                                "Services" means the Website, software, products, applications, tools, services (including any applicable support services), and related resources made available by Sattva Connect or accessible via the Website (or other websites owned by Namaste Interactive, LLC. or its affiliates) and all material comprising the Website and Software.
                            </p>
                            <p>
                                “Software” means any software, documentation, or data related to the Services.
                            </p>
                            <p>
                                "User" means any individual who has registered to use and access the Services under the Customer account and who directly builds, sends, collaborates on and/or reviews emails or forms through the Services.
                            </p>
                            <p>
                                "Website" means any website we own and operate (such as www.Sattva Connect.com and any sub-domains).
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>
                                The Basics
                            </p>
                            <p>
                                This section applies to Personal Information we collect and process through the Services when you engage with us as a User of the Service. If you are not yet a User, Section 4 (applicable to visitors to our Websites) may be more applicable to you and your data. In this Section, "you" or "your' refer to Users.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>
                                Sattva Connect Users
                            </p>
                            <p className='sub-text'>A. Information We Process.</p>
                            <p>
                                Information you provide to us. You may provide Personal Information to us through the Services – for example, when you sign up for a Sattva Connect account to access the Services, consult with our customer success or support teams, send us an email or communicate with us in any other way. We will usually let you know prior to collection whether the provision of Personal Information we are collecting is compulsory or may be provided on a voluntary basis and the consequences, if any, of not providing the information. The information you provide to us, includes:
                            </p>
                            <p>
                                <span className='sub-text'>Registration Information.</span> You need a Sattva Connect account to use the Services as a User. When you register for an account, we ask you to provide contact information such as your name, telephone number, date of birth and personal address.
                            </p>
                            <p>
                                <span className='sub-text'>Billing Information.</span> If you purchase our Services, you may also need to provide us with payment and billing information such as your credit card details and billing address. We will also maintain a record of your purchases, transactional information, your Services history and usage, and any communications and responses.
                            </p>
                            <p>
                                <span className='sub-text'>Information Collected Automatically.</span> When you use the Services, we automatically collect certain information about your device and use of the Services. We may use cookies and other tracking technologies to collect some of this information. Our use of cookies and other tracking technologies is discussed more below, in more detail below and in our Cookie Notice here.
                            </p>
                            <p>
                                <span className='sub-text'> Device Information.</span> We collect information from your device and applications you use to access our Services, such as your IP address, device attributes (for example: hardware model, operating system, web browser version, as well as unique device identifiers and characteristics), connection information (for example, name of your mobile operator or Internet Service Provider, browser type, language and time zone, and mobile phone number); and device locations (for example, internet protocol (IP) addresses and Wi-Fi information).
                            </p>
                            <p>
                                <span className='sub-text'>Log data.</span>  Our web servers keep log files that record data each
                                time a device accesses those servers and those log files contain
                                data about the nature of each access, including originating IP
                                addresses. We may also access metadata and other information
                                associated with files that you upload into our Services, such as
                                images.
                            </p>
                            <p>
                                <span className='sub-text'>Information relating to your use of the Services.</span> We collect usage data about whenever you interact with our Services, which may include the dates and times you access the Services, page views, which activities and features are used of our Services, crash logs, customer storage configuration settings, and technical data relating to devices accessing and using the Services and the performance of the Services in doing so.
                            </p>
                            <p>
                                <span className='sub-text'> Information We Obtain From Third Party Sources.</span> We may receive information about you from other sources, including publicly available databases or third parties from whom we have purchased data, and combine this data with information we already have about you. This helps us to update, expand and analyze our records and provide Services that may be of interest to you. Examples of the types of Personal Information that may be obtained from public sources or purchased from third parties and combined with information we already have about you, may include name, employer, job title, email address, phone numbers, and other company, contact, and/or employment information.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>B. Why We Process Your Information.</p>
                            <p>
                                We process your Personal Information for our legitimate
                                interests, which include:
                            </p>
                            <p>
                                <span className='sub-text'>To Provide the Services.</span> We process your Personal Information to provide the Services as follows: i) to identify who you are, including both for identification and authentication purposes; ii) to enable you to login and access your account; iii) to respond to your inquiries; iv) to provide you with customer support; v) to send you information as part of the Services; and vi) to provide you with information about your account, including renewals and changes in Services or your account status.
                            </p>
                            <p>
                                <span className='sub-text'>To Market To You.</span> To contact you with marketing and promotional information (in accordance with your marketing preferences) about products and services that we or our Affiliates offer, to provide advertising to you on third party sites (based on your browsing activities on the Website), and to send you information regarding us, our Affiliates, and/or our partners (see the section headed "Your Data Protection Rights" for information about how you can opt-out of receiving marketing communications from us at any time). Marketing data purchased from third parties may be combined with information we already have about you and may be used to create more tailored advertising and products.
                            </p>
                            <p>
                                <span className='sub-text'>To Customize Services to You.</span> To help us deliver a better and more personalized experience (for example, it enables us to tailor our Services according to your interests); and to build a profile about you so as to help direct you to other relevant features and Services we offer and help you in using our Services, by making recommendations for you to optimize use of our Services.
                            </p>
                            <p>
                                <span className='sub-text'>To Improve Our Services.</span> To create new Services, features, content or make recommendations; improve our Services for you and all Users; and to fix bugs and troubleshoot product functionality.
                            </p>
                            <p>
                                <span className='sub-text'>For Business Analytics.</span> To infer your geographic location based on your IP address; to track behavior at the aggregate/anonymous level to identify and understand trends in the various interactions with our Services; and to conduct internal business analysis based on meta-data about usage, feature adoption and forecasting.
                            </p>
                            <p>
                                <span className='sub-text'>To Prevent Abuse/Illegal Activities.</span> To screen for and prevent undesirable or abusive activity. For example, we have automated systems that screen content for phishing activities, spam, and fraud.
                            </p>
                            <p>
                                <span className='sub-text'>For Legal Records.</span> To identify who you are, including both identification and authentication purposes; to carry out our obligations and enforce our rights arising from any contracts entered into between you and us (including for billing and collection); and to respond to legal requests or prevent fraud. If we receive a subpoena or other legal request, we may need to inspect the data we hold to  determine how to respond.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>C. How We Share Your Information.</p>
                            <p>
                                In the following limited situations, we may disclose information
                                that we collect or that you provide to us:
                            </p>
                            <p>
                                <span className='sub-text'>To Our Contractors, Service Providers and Other Third Parties</span> who provide data processing services to us and with whom the sharing of your Personal Information is necessary to undertake the work e.g. to process billing, to analyze data, host data, to provide customer support and to deliver online and offline marketing communications about us and/or our Affiliates that we think will interest you.
                            </p>
                            <p>
                                <span className='sub-text'>As Required by Law,</span> such as to comply with any court order, subpoena or other law or legal process, when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a governmental or regulatory request.
                            </p>
                            <p>
                                <span className='sub-text'>To Enforce Our Rights </span> arising from any contracts entered into between you and us and for billing and collection.
                            </p>
                            <p>
                                <span className='sub-text'>To Affiliates of Our Corporate Group</span>  for customer support, marketing, technical operations, and account management purposes.
                            </p>
                            <p>
                                <span className='sub-text'>To a Buyer or Other Successor</span> in the event of a merger, sale or transfer of some or all of Sattva Connect's assets.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>D. Cookies And Tracking Technologies.</p>
                            <p>
                                We (including our partners and vendors) use various technologies to collect and store information when you use the Services, and this may include using cookies and similar tracking technologies, such as pixels and web beacons. For example, cookies allow us to collect information such as your IP address, browser, email client type and other similar details. We use this information to measure the performance of our application and to provide analytics information and enhance the effectiveness of our Services. We use page tags (also known as web beacons) in the emails we send to our Users. When you receive and engage with marketing messages we send to you, web beacons track certain behavior such as whether the email sent through the Services was delivered and opened. Links within these emails are tracked to show individual recipient’s clicks.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>E.Children.</p>
                            <p>
                                Our Services are not intended for and may not be used by minors. "Minors" are individuals under the age of 18 (of under a higher age if permitted by the laws of their residence). We do not knowingly collect Personal Information from Minors or allow them to register. If it comes to our attention that we have collected personal data from a Minor, we may delete this information without notice. If you have reason to believe that this has occurred, please contact customer support.
                            </p>
                            <p>
                                Customers are responsible for ensuring that their emails and data collection practices comply fully with applicable children's data privacy protection legislation, such as the United States' Children’s Online Privacy Protection Act (“COPPA”), including where relevant by obtaining parental consent prior to the collection of Personal Information. We rely upon our Customers to disclose whether or not their use is subject to COPPA.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>
                                F. Legal Basis For Processing Personal Information (EEA
                                Residents Only).
                            </p>
                            <p>
                                If you are a resident in the EEA, then our legal basis for collecting and using Personal Information described above will depend on the Personal Information concerned and the specific context in which we collect it. However, where we are processing your Personal Information for our own purposes we normally rely on our legitimate interest to collect Personal Information from you, except where such interests are overridden by your data protection interests or fundamental rights and freedoms. Where we rely on our legitimate interests to process your Personal Information, they include the interests described in the sections above headed "Why We Process Your Information".
                            </p>
                            <p>
                                In some cases, we may rely on your consent or have a legal obligation to collect Personal Information from you or may otherwise need the Personal Information to protect your vital interests or those of another person. If we rely on consent to collect and/or process your Personal Information, we will obtain such consent in compliance with applicable laws.
                            </p>
                            <p>
                                If you have questions about or need further information concerning the legal basis on which we collect and use your Personal Information, please contact us using the contact details provided under the “Contact Us” heading below.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>G. Data Retention.</p>
                            <p>
                                We retain Personal Information we collect from you where we have an ongoing legitimate business need to do so (for example, to provide you with a Service you have requested or to comply with applicable legal, tax or accounting requirements).
                            </p>
                            <p>
                                When we have no ongoing legitimate business need to process your Personal Information, we will either delete or anonymize Personal Information. If this is not possible (for example, because your Personal Information has been stored in backup archives), then we will securely store your Personal Information and isolate it from any further processing until deletion is possible.
                            </p>
                            <p>
                                We will retain information we process on behalf of our Customers for as long as needed to provide Services to our Customers (unless deletion is requested at an earlier time by the Customer) and as necessary to comply with our legal obligations, resolve disputes and enforce our agreements. We reserve the right to delete Customer’s, its Users’, and its Contacts’ information at the termination of Customer’s contract with us (unless such deletion is prohibited by applicable laws).
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>
                                Sattva Connect Website Visitors
                            </p>
                            <p>
                                This Section applies to Personal Information that we collect and process through our Websites (for example when you visit our website) and in the usual course of our business, such as in connection with our events, trainings or other activities.
                            </p>
                            <p className='sub-text'>A. Information We Process.</p>
                            <p>
                                <span className='sub-text'>Information You Provide To Us.</span> You need a Sattva Connect account to use the Services as a User. When you register for an account, we ask you to provide contact information such as your name, telephone number, date of birth and personal address.
                            </p>
                            <p>
                                <span className='sub-text'>Information Collected Automatically.</span> When you visit our Websites, like most website owners, we may also collect certain information automatically from your device, such as your device type, browser type, broad geographic location (e.g. country or city-level location), the referring website, what pages your device visited, and the time that your device visited our Website. In some countries, including countries in the European Economic Area, this information may be considered Personal Information under applicable data protection laws. We (including our service providers) may use cookies, pixel tags and other similar tracking technologies to collect this information.

                            </p>
                            <p>
                                <span className='sub-text'>Information We Obtain From Third Party Sources.</span> We may receive Personal Information about you from other sources, including publicly available databases or third parties from whom we have purchased data, and combine this data with information we already have about you. This helps us to update, expand and analyze our records, identify new customers, and provide Services that may be of interest to you. Examples of the types of Personal Information that may be obtained from public sources or purchased from third parties and combined with information we already have about you, may include name, employer, job title, email address, phone numbers, and other company, contact, and/or employment information.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>B. Why We Process Your Information.</p>
                            <p>
                                <span className='sub-text'>To Provide You With Information You Have Requested.</span> To respond to your requests or provide you with information requested by you, including where you apply for a job at Sattva Connect or request information about our products or Services.
                            </p>
                            <p>
                                <span className='sub-text'>To Market To You.</span> To contact you with marketing and promotional information (in accordance with your marketing preferences) about products and services that we or our Affiliates offer, and to send you information regarding us, our Affiliates, and/or our partners (see the section headed "Your Data Protection Rights" for information about how you can opt-out of receiving marketing communications from us at any time). Marketing data purchased from third parties may be combined with information we already have about you and may be used to create more tailored advertising and products.
                            </p>
                            <p>
                                <span className='sub-text'>For Business Analytics.</span> To infer your geographic location based on your IP address; to track behavior at the aggregate/anonymous level to identify and understand trends in usage and the various interactions with our Websites and marketing content; determining the effectiveness of our marketing; and to conduct internal business analysis based on meta-data abou
                            </p>
                            <p>
                                <span className='sub-text'>For Website Optimization.</span> To administer our Website and for internal operations, including troubleshooting, data analysis, testing, research, and statistical purposes; to understand how our Website is used and to improve our Website to ensure that content is presented in the most effective manner for you and your computer; and as a part of our efforts to keep our Website safe and secure.
                            </p>
                            <p>
                                <span className='sub-text'>For Legal Records.</span> To comply with and enforce applicable legal requirements, agreements and policies.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>C. How We Share Your Information.</p>
                            <p>
                                In the following limited situations, we may disclose information
                                that we collect or that you provide to us:
                            </p>
                            <p>
                                <span className='sub-text'>To our contractors, service providers and other third parties</span> who provide data processing services to us and with whom the sharing of your Personal Information is necessary to undertake the work e.g. to process billing, analyze data, host data, provide customer support, and to deliver online and offline marketing communications about us and/or our Affiliates that we think will interest you.
                            </p>
                            <p>
                                <span className='sub-text'>As Required by Law,</span> such as to comply with any court order, subpoena or other law or legal process, when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a governmental or regulatory request.
                            </p>
                            <p>
                                <span className='sub-text'>To Enforce Our Rights</span> arising from any contracts entered into between you and us and for billing and collection.
                            </p>
                            <p>
                                <span className='sub-text'>To Affiliates of Our Corporate Group</span>  for customer support, marketing, technical operations, and account management purposes.
                            </p>
                            <p>
                                <span className='sub-text'>To a Buyer or Other Successor</span> in the event of a merger, sale or transfer of some or all of Sattva Connect's assets.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>D. Cookies And Tracking Technologies.</p>
                            <p>
                                We (including our partners and vendors) use cookies and similar
                                tracking technology (collectively "Cookies") on our Websites to
                                collect and use Personal Information about you: (i) to ensure we
                                are complying with our legal obligations (for example, we use
                                cookies to infer your location and if, for example, you are in
                                the EEA, we can ensure that we are compliant with regulations in
                                the EEA); (ii) to serve targeted advertising to you, (iii) to
                                analyze trends, administer the Website, track users' movements
                                around the Website, and (iv) to gather demographic information
                                about our user base as a whole. In addition, certain third
                                parties, such as analytics companies, may use automatic
                                information collection technologies to collect information about
                                you when you use our Services. The information they collect may
                                be associated with your Personal Information or they may collect
                                information about your online activities over time and across
                                different websites, apps and other online services websites.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>
                                E. Legal Basis For Processing Personal Information (EEA
                                Residents Only).
                            </p>
                            <p>
                                If you are resident in the EEA, then our legal basis for
                                collecting and using Personal Information described above will
                                depend on the Personal Information concerned and the specific
                                context in which we collect it. However, where we are processing
                                your Personal Information for our own purposes we normally rely
                                on our legitimate interests to collect Personal Information from
                                you, except where such interests are overridden by your data
                                protection interests or fundamental rights and freedoms. Where
                                we rely on our legitimate interests to process your Personal
                                Information, they include the interests described in the
                                sections above headed "Why We Process Your Information".
                            </p>
                            <p>
                                In some cases, we may rely on your consent or have a legal
                                obligation to collect Personal Information from you or may
                                otherwise need the Personal Information to protect your vital
                                interests or those of another person. If we rely on consent to
                                collect and/or process your Personal Information, we will obtain
                                such consent in compliance with applicable laws.
                            </p>
                            <p>
                                If you have questions about or need further information
                                concerning the legal basis on which we collect and use your
                                Personal Information, please contact us using the contact
                                details provided under the “Contact Us” heading below.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>F. Data Retention.</p>
                            <p>
                                We retain Personal Information we collect from you where we have
                                an ongoing legitimate business need to do so (for example, to
                                provide you with information you have requested or to comply
                                with applicable legal, tax or accounting requirements).
                            </p>
                            <p>
                                When we have no ongoing legitimate business need to process your
                                Personal Information, we will either delete or anonymize it or,
                                if this is not possible (for example, because your Personal
                                Information has been stored in backup archives), then we will
                                securely store your Personal Information and isolate it from any
                                further processing until deletion is possible.
                            </p>
                            <p>&nbsp;</p>
                            <p className='revamp-subtitle'>
                                General Information
                            </p>
                            <p className='sub-text'>
                                A. Your Data Protection Rights (EEA Residents Only).
                            </p>
                            <p>
                                If you are resident in the EEA, you have the following data protection rights:
                            </p>
                            <p>
                                You can access, review, change, update or delete your Personal Information at any time by contacting us at <a href='mailto: info@sattvaconnect.com'>info@sattvaconnect.com</a> is being protected from spambots. You need JavaScript enabled to view it. Please note that we may impose a small fee for access and disclosure of your Personal Information where permitted under applicable law, which will be communicated to you. We do not charge you to update or remove your Personal Information.
                            </p>
                            <p>
                                To remove your Personal Information from a Website testimonial or request removal of your Personal Information from our blog or community forum, contact us at <a href='mailto: info@sattvaconnect.com'>info@sattvaconnect.com</a> is being protected from spambots. You need JavaScript enabled to view it.In some cases, we may not be able to remove your Personal Information, in which case we will let you know if we are unable to do so and why.
                            </p>
                            <p>
                                In addition, you can object to processing of your Personal Information, ask us to restrict processing of your Personal Information or request portability of your Personal Information. To exercise these rights email <a href='mailto: info@sattvaconnect.com'>info@sattvaconnect.com</a> is being protected from spambots. You need JavaScript enabled to view it.
                            </p>
                            <p>
                                You can opt out of receiving marketing communication we send you at any time. You can exercise this right by clicking on the “unsubscribe” link in the emails we send you. For data privacy concerns, use the contact details provided under the “Contact Us” heading below.
                            </p>
                            <p>
                                If we have collected and processed your Personal Information with your consent, then you can withdraw your consent at any time. Withdrawing your consent will not affect the lawfulness of any processing we conducted prior to your withdrawal, nor will it affect processing of your Personal Information conducted in reliance on lawful processing grounds other than consent.
                            </p>
                            <p>
                                You have the right to complain to a data protection authority about our collection and use of your Personal Information. For more information, please contact your local data protection authority. Contact details for data protection authorities in the European Economic Area ("EEA"), are available here.
                            </p>
                            <p>
                                Please note that because most of the information we store can only identify a particular browser or device, and cannot identify you individually, you will need to provide us with some additional information to enable us to identify the Personal Information we hold about you and ensure that accurately fulfill your request. You may also be required to provide ID.
                            </p>
                            <p>
                                <span className='sub-text'>Further Information for Contacts: As described in this Notice,</span>
                                for much of the Personal Information we collect and process about you through the Services, we act as a processor on behalf of our Customers. In such cases, if you want to exercise any data protection rights that may be available to you under applicable law or have questions or concerns about how your Personal Information is handled by Sattva Connect as a processor on behalf of our Customers, you should contact the relevant Customer that has contracted with Sattva Connect for use of the Services, and refer to their separate privacy policies. If you are having difficulties finding this Customer, you can contact us through our support team and we will try our best to help you.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>B. Third-Party Websites And Apps.</p>
                            <p>
                                This Notice only applies to the Sattva Connect Website and Services. We are not responsible for the privacy practices or disclosures of third parties that use or access the Sattva Connect Website or Services. In addition, the Website or Service may contain links to third-party websites and apps. Any access to and use of such linked websites or apps is not governed by this Notice, but instead is governed by the privacy policies of those third parties. We are not responsible for the information practices of such third parties.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>
                                C. How Do We Keep Your Personal Information Secure?
                            </p>
                            <p>
                                We use appropriate technical and organizational security measures to protect any Personal Information we process against unauthorized access, disclosure, alteration, and destruction.
                            </p>
                            <p>
                                Unfortunately, nobody is truly and completely safe from hackers. Although we do our best to protect your Personal Information, we cannot guarantee security, no Internet transmission can ever be guaranteed 100% secure, and so we encourage you to take care when disclosing Personal Information online and to use readily available tools, such as Internet firewalls, secure e-mail and similar technologies to protect yourself online.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>D. International Data Transfers.</p>
                            <p>
                                The Website and the Services are provided, supported, and hosted in the United States. If you are using the Website or Services from outside the United States, be aware that your information may be transferred to, stored, and processed by us in our facilities and by those third parties with whom we may share your Personal Information, in the United States and other countries. These countries may have data protection laws that are different to the laws of your country.
                            </p>
                            <p>
                                However, we have taken appropriate measures to require that your Personal Information will remain protected in accordance with this Notice and have implemented appropriate safeguards with our third party service providers and partners. Further details can be provided upon request.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>
                                E. EU-U.S. And&nbsp;Swiss US&nbsp;Privacy Shield.
                            </p>
                            <p>
                                Our Email Service Provider participates in and has certified its compliance with the EU-U.S. Privacy Shield Framework and the Swiss-U.S. Privacy Shield Framework. Emma, Inc. is committed to subjecting all personal data received from European Union (EU) member countries and Switzerland, respectively, in reliance on each Privacy Shield Framework, to the Framework’s applicable Principles. To learn more about the Privacy Shield Framework, visit the U.S. Department of Commerce’s Privacy Shield List [https://www.privacyshield.gov/list].
                            </p>
                            <p>
                                With respect to personal data received or transferred pursuant to the Privacy Shield Frameworks, Emma, Inc. is subject to the regulatory enforcement powers of the U.S. Federal Trade Commission. Any unresolved Privacy Shield complaints will be referred to JAMS [https://www.jamsadr.com/eu-us-privacy-shield], our chosen alternative dispute resolution provider. Should this arbitration fail, the complaint may be subject to binding arbitration before the Privacy Shield Panel, in accordance with the Privacy Shield Agreement. All of these remedies are offered at no cost to the complainant, as long as the complainant is an individual.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>F. Changes To This Privacy Notice.</p>
                            <p>
                                We may revise this Notice from time to time in response to changing legal, technical or business developments. The most current version of this Notice will govern our use of your Personal Information. If we make any material changes to this Notice, we will post the updated version here and notify applicable individuals by email or by means of a prominent notice on our Website. You can see when this Notice was last updated by checking the “last updated” date displayed at the top of this Notice. We will seek your consent to any material changes to this Notice if and where required by applicable law.
                            </p>
                            <p>&nbsp;</p>
                            <p className='sub-text'>G. Contact Us.</p>
                            <p>
                                Thank you for reading our privacy notice. If you have any questions, comments or concerns, please contact us:
                            </p>
                            <p>For EEA Residents:</p>
                            <p>
                                For the purposes of EU data protection legislation, Sattva Connect, LLC is the controller of your Personal Information.
                            </p>
                            <p className='mt-5'>
                                <span className='sub-text '>For Non-EEA Residents:</span><br></br> Sattva Connect, LLC<br></br>{' '}
                                3917 Blue Bird Road<br></br> Huntingdon Valley, PA 19006
                                <br></br> Email:&nbsp;&nbsp;support@sattvaconnect.com
                            </p>
                            <p>&nbsp;</p>
                            <p>&nbsp;</p> */}
                        </div>
                    </section>
                </main>
            </div>
        </Layout>
    );
}

export async function getStaticProps() {
    const res = await fetch(apiRoute('cms-page-data/NA=='));
    const pageData = await res.json();
    return {
        props: {
            pageData,
        },
        revalidate: 1,
    };
}
