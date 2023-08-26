import { useState } from "react";

import "./App.css";
import ReactMarkdown from "react-markdown";

// defaultMarkdown contains valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text
const defaultMarkdown = `
# Welcome to Siddhartha's React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.
`;

function App() {
  const [markDownText, setMarkDownText] = useState<string>(defaultMarkdown);

  return (
    <>
      <div>
        <h1 id="heading">Markdown Previewer</h1>
        <div className="boxes-container">
          <textarea
            name="editor"
            id="editor"
            value={markDownText}
            onChange={(e) => setMarkDownText(e.target.value)}
          ></textarea>
          <div id="preview">
            <ReactMarkdown>{markDownText}</ReactMarkdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
