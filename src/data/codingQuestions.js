const codingQuestions = [
    // FRONTEND
    { id: 1, domain: "frontend", question: "Center a div using CSS", answer: "Use flexbox: display:flex; justify-content:center; align-items:center;", difficulty: "easy" },
    { id: 13, domain: "frontend", question: "Explain the Box Model", answer: "Content, padding, border, and margin.", difficulty: "easy" },
    { id: 14, domain: "frontend", question: "Difference between LocalStorage and SessionStorage", answer: "LocalStorage persists after browser close; SessionStorage clears on tab close.", difficulty: "medium" },
    { id: 15, domain: "frontend", question: "What is Event Delegation?", answer: "Adding a single event listener to a parent to manage children via event bubbling.", difficulty: "medium" },
    { id: 16, domain: "frontend", question: "Explain Semantic HTML", answer: "Using tags like <header>, <article>, and <footer> to provide meaning to web content.", difficulty: "easy" },

    // REACT
    { id: 2, domain: "react", question: "Create a toggle button", answer: "Use useState to toggle true/false.", difficulty: "easy" },
    { id: 17, domain: "react", question: "What is the Virtual DOM?", answer: "A lightweight copy of the real DOM used for performance optimization.", difficulty: "medium" },
    { id: 18, domain: "react", question: "Explain useEffect dependency array", answer: "Determines when the effect runs: [] runs once, [prop] runs when prop changes.", difficulty: "medium" },
    { id: 19, domain: "react", question: "Difference between Props and State", answer: "Props are passed to components; State is managed within the component.", difficulty: "easy" },
    { id: 20, domain: "react", question: "How to lift state up?", answer: "Move state to the closest common parent of components that need the data.", difficulty: "medium" },

    // PYTHON
    { id: 3, domain: "python", question: "Check prime number", answer: "Loop from 2 to n-1 and check divisibility.", difficulty: "medium" },
    { id: 21, domain: "python", question: "What is a List Comprehension?", answer: "A concise way to create lists: [x for x in range(10)].", difficulty: "easy" },
    { id: 22, domain: "python", question: "Difference between List and Tuple", answer: "Lists are mutable []; Tuples are immutable ().", difficulty: "easy" },
    { id: 23, domain: "python", question: "Explain *args and **kwargs", answer: "*args passes variable non-keyword arguments; **kwargs passes keyword arguments.", difficulty: "medium" },
    { id: 24, domain: "python", question: "How is memory managed in Python?", answer: "Via private heap space and a built-in Garbage Collector.", difficulty: "hard" },

    // JAVA
    { id: 4, domain: "java", question: "Reverse a number", answer: "Use while loop and modulo operator.", difficulty: "easy" },
    { id: 25, domain: "java", question: "What is a Constructor?", answer: "A special method used to initialize objects.", difficulty: "easy" },
    { id: 26, domain: "java", question: "Explain the 'static' keyword", answer: "Means the member belongs to the class rather than instances of the class.", difficulty: "medium" },
    { id: 27, domain: "java", question: "Difference between Interface and Abstract Class", answer: "Interfaces support multiple inheritance; Abstract classes can have state/constructors.", difficulty: "hard" },
    { id: 28, domain: "java", question: "What is Polymorphism?", answer: "The ability of an object to take on many forms (Overloading/Overriding).", difficulty: "medium" },

    // BACKEND
    { id: 5, domain: "backend", question: "Create REST endpoint", answer: "Use GET/POST routes to return JSON response.", difficulty: "medium" },
    { id: 29, domain: "backend", question: "What is Middleware?", answer: "Functions that execute during the request-response cycle.", difficulty: "medium" },
    { id: 30, domain: "backend", question: "Explain JWT Authentication", answer: "Stateless auth using a signed token sent in headers.", difficulty: "hard" },
    { id: 31, domain: "backend", question: "Difference between SQL and NoSQL", answer: "SQL is relational/structured; NoSQL is non-relational/document-based.", difficulty: "medium" },
    { id: 32, domain: "backend", question: "What is CORS?", answer: "A security mechanism that allows/restricts resources from another domain.", difficulty: "medium" },

    // NODE
    { id: 6, domain: "node", question: "Create simple server", answer: "Use http module or Express.js.", difficulty: "easy" },
    { id: 33, domain: "node", question: "What is the Event Loop?", answer: "Allows Node.js to perform non-blocking I/O operations.", difficulty: "hard" },
    { id: 34, domain: "node", question: "Purpose of package.json", answer: "Holds metadata and dependencies for the project.", difficulty: "easy" },
    { id: 35, domain: "node", question: "Difference between setImmediate() and process.nextTick()", answer: "nextTick fires before the next event loop phase; setImmediate fires after.", difficulty: "hard" },
    { id: 36, domain: "node", question: "What are Streams?", answer: "Objects that let you read/write data piece by piece.", difficulty: "medium" },

    // JAVASCRIPT
    { id: 7, domain: "javascript", question: "Find max number in array", answer: "Use Math.max(...arr).", difficulty: "easy" },
    { id: 37, domain: "javascript", question: "Explain Closures", answer: "A function having access to its parent scope even after the parent has closed.", difficulty: "hard" },
    { id: 38, domain: "javascript", question: "Difference between == and ===", answer: "== checks value; === checks value and type.", difficulty: "easy" },
    { id: 39, domain: "javascript", question: "What is a Promise?", answer: "An object representing the eventual completion or failure of an async operation.", difficulty: "medium" },
    { id: 40, domain: "javascript", question: "Explain 'this' keyword", answer: "Refers to the object that is executing the current piece of code.", difficulty: "medium" },

    // HTML
    { id: 8, domain: "html", question: "Create form with input and button", answer: "<form><input /><button>Submit</button></form>", difficulty: "easy" },
    { id: 41, domain: "html", question: "Difference between <div> and <span>", answer: "div is a block-level element; span is an inline element.", difficulty: "easy" },
    { id: 42, domain: "html", question: "What is the purpose of Alt text in images?", answer: "Accessibility and SEO if the image fails to load.", difficulty: "easy" },
    { id: 43, domain: "html", question: "What are data-attributes?", answer: "Allows us to store extra information on standard HTML elements.", difficulty: "medium" },
    { id: 44, domain: "html", question: "What is an Iframe?", answer: "Used to embed another document within the current HTML document.", difficulty: "medium" },

    // CSS
    { id: 9, domain: "css", question: "Create responsive layout", answer: "Use media queries.", difficulty: "medium" },
    { id: 45, domain: "css", question: "What is Z-index?", answer: "Sets the stack order of an element.", difficulty: "easy" },
    { id: 46, domain: "css", question: "Difference between Relative and Absolute positioning", answer: "Relative is offset from itself; Absolute is offset from nearest positioned ancestor.", difficulty: "medium" },
    { id: 47, domain: "css", question: "What is a CSS Preprocessor?", answer: "A tool like Sass or Less that adds logic/variables to CSS.", difficulty: "medium" },
    { id: 48, domain: "css", question: "Explain CSS Specificity", answer: "The set of rules browsers use to determine which styles are most relevant.", difficulty: "hard" },

    // DATABASE
    { id: 10, domain: "database", question: "Write SQL select query", answer: "SELECT * FROM table_name;", difficulty: "easy" },
    { id: 49, domain: "database", question: "What is a Primary Key?", answer: "A unique identifier for a record in a table.", difficulty: "easy" },
    { id: 50, domain: "database", question: "Explain Database Indexing", answer: "A data structure technique to quickly retrieve data from a database.", difficulty: "hard" },
    { id: 51, domain: "database", question: "What is a Foreign Key?", answer: "A column that creates a link between two tables.", difficulty: "medium" },
    { id: 52, domain: "database", question: "Difference between INNER and LEFT JOIN", answer: "INNER returns matching records; LEFT returns all from left plus matching from right.", difficulty: "medium" },

    // CLOUD
    { id: 11, domain: "cloud", question: "Deploy app to cloud", answer: "Use AWS EC2, Vercel, or Netlify.", difficulty: "medium" },
    { id: 53, domain: "cloud", question: "What is Serverless computing?", answer: "Running code without managing the underlying server (e.g., AWS Lambda).", difficulty: "medium" },
    { id: 54, domain: "cloud", question: "Define S3 in AWS", answer: "Simple Storage Service used for storing objects/files.", difficulty: "easy" },
    { id: 55, domain: "cloud", question: "What is a Docker Container?", answer: "A lightweight, standalone package of software including everything needed to run it.", difficulty: "hard" },
    { id: 56, domain: "cloud", question: "What is Auto-scaling?", answer: "Automatically adjusting resources based on traffic load.", difficulty: "medium" },

    // MOBILE
    { id: 12, domain: "mobile", question: "Create simple mobile screen", answer: "Use View and Text components in React Native.", difficulty: "easy" },
    { id: 57, domain: "mobile", question: "What is Expo?", answer: "A framework and platform for universal React applications.", difficulty: "easy" },
    { id: 58, domain: "mobile", question: "Difference between Native and Hybrid apps", answer: "Native is built for specific OS; Hybrid is web code inside a native container.", difficulty: "medium" },
    { id: 59, domain: "mobile", question: "Explain AsyncStorage in React Native", answer: "Unencrypted, asynchronous, persistent, key-value storage system.", difficulty: "medium" },
    { id: 60, domain: "mobile", question: "What is a FlatList?", answer: "A performant interface for rendering basic, flat lists in React Native.", difficulty: "medium" },
];

export default codingQuestions;
