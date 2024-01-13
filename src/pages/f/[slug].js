import Head from "next/head";

export async function getStaticPaths(){
    return {
        paths: [
            { params: { slug: 'first-post' } },
            { params: { slug: 'second-post'} },
        ],
        fallback: false,
    };
}

export async function getStaticProps({ params: {slug} }) {
    console.log('[PostPage] getStaticProps():', slug);
   // const post = await getPost('first-post');
    return {
        props: { post: slug },
    };
}

function PostPage ({ post }){
    console.log('[PostPage] render:', post);
    return (
        <>
            <Head>
                <title>{post} - My Blogs</title>
            </Head>
        </>
    )
}

export default PostPage;