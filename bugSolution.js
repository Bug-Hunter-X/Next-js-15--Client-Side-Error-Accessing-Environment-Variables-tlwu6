```javascript
// pages/index.js
export async function getServerSideProps() {
  return {
    props: {
      envVar: process.env.MY_ENV_VAR,
    },
  };
}
export default function Home({ envVar }) {
  return (
    <div>
      <h1>Next.js 15 App</h1>
      <p>Environment variable: {envVar}</p>
    </div>
  );
}
```