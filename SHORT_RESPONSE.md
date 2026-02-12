# Short Response Questions

Answer each of these questions completely but concisely. Use the proper technical terminology. You may refer to the [Marcy Lab School Docs](https://marcylabschool.gitbook.io/marcy-lab-school-docs) or Google but do NOT copy and paste definitions or explanations verbatim. 

You can earn up to 6 points for each response (3 points for writing quality, 3 points for technical content). 

Before submitting your responses, use a spell checker / AI to ensure that you have no grammar or spelling mistakes.

## Question 1: Asynchronous Code

Functions like `fetch()` are "asynchronous". Explain what that means and why it is so important to be able to execute code asynchronously?

**Your Answer:**
Some functions are asynchronous, meaning they can start a task and allow the program to continue running without waiting for that task to finish. Being able to execute code asynchronously helps the program work on more than one task at the same time, reducing how long a function takes to run.

## Question 2: GET vs. POST

What is the difference between a `GET` request and a `POST` request? Provide examples in real world applications where each might be used under the hood?

**Your Answer:**
The `GET` request is used to retrieve data from the server. The `POST` request is used to send data to a server either to create or update something.  For example, if a store runs out of an item, the manager checks the supplier's website to see the information about the item. When the manager places an order for more stock, they submit the order for online. The `GET` request is getting the information and the `POST` request sending data to the server to create a new order.

## Question 3: What is Vite and Why Use It?

What is Vite? What problem does it solve? And are there alternatives?

**Your Answer:**
Vite is a tool for building modern web applications. It runs a local development server using the HTTP protocol and makes development faster. There are other alternatives such as Webpack, Parcel, esbuild, etc. 