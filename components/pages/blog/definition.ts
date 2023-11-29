export type Section = {
    header: string;
    content: string;
}

export type Blog = {
    title: string;
    sections: Section[];
}

export type Blogs = {
    blogs: Blog[];
    addBlog(blog: Blog);
    delBlog(index: number);
    updateBlog(index: number, updatedBlog: Blog);
}