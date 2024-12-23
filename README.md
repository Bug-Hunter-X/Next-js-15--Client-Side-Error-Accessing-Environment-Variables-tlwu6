# Next.js 15 Client-Side Environment Variable Access Error

This repository demonstrates a common error encountered when working with environment variables in Next.js 15 applications.  Attempting to directly access `process.env` within a client-side component (like a functional component in `pages` directory) results in a runtime error because these variables are not available in the browser environment.  The solution shows how to correctly access environment variables in Next.js 15.

## Bug Description

The bug is in `pages/index.js`. It tries to access and display the value of environment variable `MY_ENV_VAR` inside a client-side component which causes the error as `process.env` is not defined in the browser context. 

## Solution

The solution is demonstrated in `pages/index.js` file.  Using `getServerSideProps` or `getStaticProps` allows us to load the necessary environment variables correctly on the server-side, and pass them down to the client component as props.