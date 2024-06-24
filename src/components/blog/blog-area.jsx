import React from 'react';
import blog_data from '../../data/blog-data';
import BlogSidebar from './blog-sidebar';
import BlogItems from './blog-items';
import useQueryGet from '../../hooks/useQuery';
import { format } from 'date-fns';

import Image from 'next/image';
import apiEndpoint from '../../services/apiEndpoint';
import Link from 'next/link';

// blog_items
const blog_items = blog_data.filter(blog => blog.blog_page);

const BlogArea = () => {
  const { data, isPending, isError, error, isSuccess } = useQueryGet({
    apiEndpointUrl: apiEndpoint.BLOGS,
    queryKey: 'getAllBlogs',
  });
  if (isPending) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  if (isSuccess) {
    const blogs = data?.data?.data ?? [];

    return (
      <>
        <div className="postbox__area pt-120 pb-120">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
              {blogs.length > 0
                ? blogs.map(blog => (
                    <a
                      href={`/blogs/${blog?.slug ?? '#'}`}
                      className="col d-block"
                      style={{ cursor: 'pointer' }}
                      key={blog._id}
                    >
                      <div className="card">
                        <img
                          src={blog?.imageCover ?? ''}
                          className="card-img-top"
                          alt={blog.imageCoverAlt ?? ''}
                          // layout="fill"
                          // width={300}
                          // height={300}
                        />
                        <div className="card-body">
                          <span>
                            Posted:{' '}
                            {format(new Date(blog?.createdAt), 'dd-MM-yyyy')}
                          </span>
                          <h5 className="card-title text-dark mt-2 text-capitalize">
                            {blog?.title ?? ''}
                          </h5>
                          <p className="card-text text-muted">
                            {blog?.excerpt}
                          </p>
                        </div>
                        <div className="card-body">
                          <a
                            style={{
                              backgroundColor: '#FFDC60',
                            }}
                            href={`/blogs/${blog?.slug ?? '#'}`}
                            className="p-3 rounded text-white"
                          >
                            Read More
                          </a>
                        </div>
                      </div>
                    </a>
                  ))
                : 'No Blogs found'}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default BlogArea;
