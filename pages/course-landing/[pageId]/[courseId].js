import React, { Component } from 'react';
import Layout from '../../../components/Layout';
import dynamic from 'next/dynamic';
const CourseLandingPage = dynamic(
  () => import('../../../components/course/CourseLandingPage'),
  {
    ssr: false,
  }
);

const CourseLanding = ({ courseId, pageId }) => {
  return (
    <Layout>
      <CourseLandingPage courseId={courseId} pageId={pageId} />
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const { pageId, courseId } = params;

  return {
    props: { courseId, pageId },
  };
};
export default CourseLanding;
