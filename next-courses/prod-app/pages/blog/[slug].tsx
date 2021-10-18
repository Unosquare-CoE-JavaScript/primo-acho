import React, { FC } from 'react'
import hydrate from 'next-mdx-remote/hydrate'
import { majorScale, Pane, Heading, Spinner } from 'evergreen-ui'
import matter from 'gray-matter'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Post } from '../../types'
import Container from '../../components/container'
import HomeNav from '../../components/homeNav'
import fs from 'fs'
import path from 'path'
import { posts as postsFromCMS } from '../../content'

const BlogPost: FC<Post> = ({ source, frontMatter }) => {
  const content = hydrate(source)
  const router = useRouter()

  if (router.isFallback) {
    return (
      <Pane width="100%" height="100%">
        <Spinner size={48} />
      </Pane>
    )
  }
  return (
    <Pane>
      <Head>
        <title>{`Known Blog | ${frontMatter.title}`}</title>
        <meta name="description" content={frontMatter.summary} />
      </Head>
      <header>
        <HomeNav />
      </header>
      <main>
        <Container>
          <Heading fontSize="clamp(2rem, 8vw, 6rem)" lineHeight="clamp(2rem, 8vw, 6rem)" marginY={majorScale(3)}>
            {frontMatter.title}
          </Heading>
          <Pane>{content}</Pane>
        </Container>
      </main>
    </Pane>
  )
}

BlogPost.defaultProps = {
  source: '',
  frontMatter: { title: 'default title', summary: 'summary', publishedOn: '' },
}

export function getStaticPaths () {
  const postsPath = path.join(process.cwd(),'posts')
  const filenames = fs.readdirSync(postsPath);
  const slugs = filenames.map(name =>{
    const filePath = path.join(postsPath, name)
    const file = fs.readFileSync(filePath, 'utf-8')
    const { data } = matter(file);
    return data
  })
  return {
    paths: slugs.map(s=> ({ params: { slug: s.slug} })),
    fallback: false
  }
}
export function getStaticProps( ) {
  const cmsPosts = postsFromCMS.published.map(post=> {
    const { data } = matter(post);
    return data
  })
  const postsPath = path.join(process.cwd(),'posts')
  const filenames = fs.readdirSync(postsPath);
  const fileposts = filenames.map(name =>{
    const fullPath = path.join(process.cwd(), 'posts', name)
    const file = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(file);
    return data;
  })

  const posts = [...cmsPosts, ...fileposts]
  return {
    props:{ posts }
  }
}
export default BlogPost
