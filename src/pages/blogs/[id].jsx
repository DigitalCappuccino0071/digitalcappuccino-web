import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import { useRouter } from 'next/router';
import { blog_data } from '../../data';
import BlogDetailsMain from '../../components/blog-details';
import useQueryGet from '../../hooks/useQuery';
import apiEndpoint from '../../services/apiEndpoint';

const BlogDynamicDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isPending, isError, error, isSuccess } = useQueryGet({
    apiEndpointUrl: `${apiEndpoint.BLOGS}/${id}`,
    queryKey: 'getBlogById',
  });
  if (isPending) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  if (isSuccess) {
    const blog = data?.data?.data ?? [];
    console.log(blog);
    return (
      <Wrapper>
        <SEO pageTitle={blog?.title ?? 'blog title'} />
        <BlogDetailsMain blog={blog} />
      </Wrapper>
    );
  }
};

export default BlogDynamicDetails;

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
