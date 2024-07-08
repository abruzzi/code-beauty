import React, { useEffect, useState } from "react";

import hljs from "highlight.js";
import "highlight.js/styles/night-owl.css";

const code = `
it('formats title in title case when feature x is on', () => {
  featureToggle.mockImplementation((feature) => {
    if (feature === 'feature-x') return true;
    return false;
  });

  const title = format("hello world");
  expect(title).toEqual("Hello World");
});
`;

function App() {
  const [formattedCode, setFormattedCode] = useState("");

  useEffect(() => {
    const formatCodeWittHighLightJS = async () => {
      const html = hljs.highlight(code, { language: "javascript" }).value;
      setFormattedCode(html);
    };

    formatCodeWittHighLightJS();
  }, []);

  return (
    <div>
      <figure data-rehype-pretty-code-figure="">
        <figcaption
          data-code-title="src/feature-test.ts"
        >
          src/feature-test.ts
        </figcaption>
        <pre>
          <code
            className="hljs"
            dangerouslySetInnerHTML={{ __html: formattedCode }}
          ></code>
        </pre>
      </figure>
    </div>
  );
}

export default App;
