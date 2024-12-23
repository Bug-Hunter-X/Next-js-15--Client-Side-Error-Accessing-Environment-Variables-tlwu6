```javascript
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Next.js 15 App</h1>
      {/* This will cause a client-side error because of the use of `process.env` */}
      <p>Environment variable: {process.env.MY_ENV_VAR}</p>
    </div>
  );
}
```