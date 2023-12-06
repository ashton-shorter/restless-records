export type section = {
    header: string;
    content: string;
}

export type blog = {
    title: string;
    sections: section[];
}

export type blogs = {
    blogs: blog[];
    addBlog(blog: blog): void;
    delBlog(index: number): void;
    updateBlog(index: number, updatedBlog: blog): void;
}