// components/CodePreviewTabs.js
import { useState } from "react";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FiCopy, FiCheck } from "react-icons/fi";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; 
import "prismjs/components/prism-jsx";
import { FiClipboard } from "react-icons/fi";

export default function CodePreviewTabs({ preview, code,language = 'html' }) {
  const [copied, setCopied] = useState(false);

  // const handleCopy = () => {
  //   setCopied(true);
  //   setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  // };
  // const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  return (
    <div className="code-preview-tabs">
      <Tabs>
        <TabList>
          <Tab>Preview</Tab>
          <Tab>Code</Tab>
        </TabList>

        <TabPanel>
          <div className="preview-container">{preview}</div>
        </TabPanel>

        <TabPanel>
          <div className="relative bg-gray-800 text-white p-4 rounded-md">
            <pre className="overflow-x-auto">
              <code
                dangerouslySetInnerHTML={{
                  __html: Prism.highlight(code, Prism.languages.jsx, "jsx")
                }}
              />
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 bg-gray-700 hover:bg-gray-600 text-xs font-semibold py-1 px-2 rounded"
              aria-label="Copy to clipboard"
            >
              {copied ? "Copied!" : <FiClipboard size={16} />}
            </button>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
}
