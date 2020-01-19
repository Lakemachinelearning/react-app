import Layout from '../components/layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href="/p/[id]" as={`/p/${props.id}`}>
      <a>{props.id}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
      <Layout>
        <h1>Lake Consulting Blog</h1>
        <ul>
          <PostLink id="How it all started..."/>
          <PostLink id="My first five years in Sales"/>
          <PostLink id="Why salesman learned to write code?"/>
        </ul>
      </Layout>
  );
}
