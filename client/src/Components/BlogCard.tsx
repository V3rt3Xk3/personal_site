import React from "react";
import {Blog} from "./../Core/Models/Blog";
import "./BlogCard.css";

interface IBlogCardProps {
    blog: Blog;
}

export class BlogCard extends React.Component<IBlogCardProps> {


    render(){
        const {blog} = this.props;

        return (
            <div className="BlogCard">
                <div>Title: {blog.title}</div>
                <br />
                <div>{blog._id}</div>
                <br />
                <div>{blog.content}</div>
                <br />
                <div>{blog.date}</div>
            </div>
        );
    }
}
