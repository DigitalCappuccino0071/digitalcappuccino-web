import React, { useEffect } from "react";
import { FooterThree, Header, Wrapper } from "../../layout";
import { animationCreate } from "../../utils/utils";
import BlogDetailsArea from "./blog-details-area";
import BlogHero from "../common/breadcrumb/BlogHero";

const BlogDetails = ({ blog }) => {
    console.log(blog);
    useEffect(() => {
        setTimeout(() => {
            animationCreate();
        }, 500);
    }, []);

    return (
        <Wrapper>
            <Header />
            <BlogHero title={"Blog Details"} />
            <BlogDetailsArea blog={blog} />
            <FooterThree />
        </Wrapper>
    );
};

export default BlogDetails;
