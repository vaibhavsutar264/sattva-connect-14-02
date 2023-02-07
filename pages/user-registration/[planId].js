import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import RegistrationForm from '../../components/auth/RegistrationForm';
import {
  useStripe,
  useElements,
  CardNumberElement,
} from "@stripe/react-stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';

async function getStripeApiKeyOuter(){
  const Apikey = await axios.get("http://localhost:4000/api/v1/stripeapikey");
  return Apikey.data.stripeApiKey;
}
async function jsonplace(){
  const Apikey = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return Apikey.data;
}
function getStripeApiKeyOuter2(data){
  // const Apikey = await axios.get("http://localhost:4000/api/v1/stripeapikey");
   return data
}

const datastripe = getStripeApiKeyOuter2()

let dataApi = ''


const stripePromise = loadStripe('putyourstripeid');

const UserRegistration = (props) => (
  <Elements stripe={stripePromise}>
    <MyComponent {...props} />
  </Elements>
);


const MyComponent = ({ planId }) => {
  console.log(jsonplace());
  const stripe = useStripe();
  const elements = useElements()
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey(){
    const { data } = await axios.get("http://localhost:4000/api/v1/stripeapikey");
    dataApi = data.stripeApiKey
    setStripeApiKey(data.stripeApiKey);
    getStripeApiKeyOuter2(stripeApiKey)
  }
  useEffect(()=>{
    getStripeApiKey();
  },[]);

  

  return (
    <Layout>
      <Head>
        <meta charSet='utf-8' />
        <title>
          Sign up | Unlimited access to hundreds of yoga classes online
        </title>
        <meta
          name='description'
          content='A monthly and yearly subscription gives you unlimited access to hundreds of yoga classes online. Be inspired. Live inspired. Sattva Connect.'
        />
      </Head>
      <div className='light-purplebg'>
        <main>
        
          <div className='sec sec-cinfo'>
            <div className='container'>
              <div className='customer-support p-0'>
                <h4 className='revamp-subtitle'>{planId == 5 ? 'Yearly' : 'Monthly'} Membership</h4>
                {/* <div className='card-panel sattva-error'>
                  <p className='revamp-para-small'>
                    Please enter information on the form below to process
                    subscription for{' '}
                    <strong>{planId == 5 ? 'Yearly' : 'Monthly'}</strong>. The
                    price&nbsp;<strong>${planId == 5 ? '210' : '21'}</strong>.
                  </p>
                </div> */}
                    <RegistrationForm planId={planId} stripe={useStripe()} elements={useElements()}/>
              </div>
            </div>
          </div>
          
        </main>
      </div>
    </Layout>
  );
};



export const getServerSideProps = async ({ params }) => {
  const { planId } = params;
  return {
    props: { planId: planId
    },
  };
};


export default UserRegistration;
