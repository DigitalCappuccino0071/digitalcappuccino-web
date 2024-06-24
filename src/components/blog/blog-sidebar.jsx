import Link from 'next/link';
import React from 'react';
import { blog_data } from '../../data';
import apiEndpoint from '../../services/apiEndpoint';
import useQueryGet from '../../hooks/useQuery';

const sidebar_contents = {
  widget_contents: [
    { title: 'Web Design', count: '26' },
    { title: 'Development', count: '15' },
    { title: 'Branding', count: '20' },
    { title: 'Motion Design', count: '18' },
    { title: 'UI/UX Design', count: '30' },
    { title: 'Graphic Design', count: '99' },
  ],
  rc_post: blog_data.slice(0, 3),
  tags: [
    'landing',
    'Charity',
    'apps',
    'Education',
    'data',
    'Design',
    'website',
    'landing page',
  ],
};

const { widget_contents, rc_post, tags } = sidebar_contents;

const BlogSidebar = ({ blog }) => {
  const { data, isPending, isError, error, isSuccess } = useQueryGet({
    apiEndpointUrl: apiEndpoint.CATEGORY,
    queryKey: 'getAllCategory',
  });
  if (isPending) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }
  if (isSuccess) {
    const category = data?.data?.data ?? [];
    console.log(category);
    return (
      <div className="sidebar__wrapper">
        <div className="sidebar__widget mb-40">
          <h3 className="sidebar__widget-title">Categories</h3>
          <div className="sidebar__widget-content">
            <ul>
              {category.length > 0
                ? category.map(cat => (
                    <li key={cat._id}>
                      <Link href="#">
                        <a href="">
                          {cat?.name ?? ''}{' '}
                          <span>{cat?.blogs?.length ?? 0}</span>
                        </a>
                      </Link>
                    </li>
                  ))
                : 'No Category Found'}
            </ul>
          </div>
        </div>

        {/* <div className="sidebar__widget mb-40">
          <h3 className="sidebar__widget-title">Recent Post</h3>
          <div className="sidebar__widget-content">
            <div className="sidebar__post rc__post">
              {rc_post.map(post => (
                <div
                  key={post.id}
                  className="rc__post mb-20 d-flex align-items-center"
                >
                  <div className="rc__post-thumb mr-20">
                    <Link href={`/blog-details/${post.id}`}>
                      <a>
                        <img src={post.img} alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="rc__post-content">
                    <div className="rc__meta">
                      <span>{post.date}</span>
                    </div>
                    <h3 className="rc__post-title">
                      <Link href={`/blog-details/${post.id}`}>
                        <a>{post.title.substring(0, 35)}...</a>
                      </Link>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    );
  }
};

export default BlogSidebar;
