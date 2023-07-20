const { getPosts } = require("@/services");

const posts = await getPosts();

const filteredPosts = posts.filter((post) => post.node.id != params.id);

export { filteredPosts };
