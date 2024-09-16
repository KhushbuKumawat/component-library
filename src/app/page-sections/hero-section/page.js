"use client";
import React from "react";
import CodePreviewTabs from "@/components/CodePreviewTabs";
import Counter from "@/components/Counter";
// import { Button } from "coindelta-react-component-library";
import { Footer } from "khushbu-react-component-library";

export default function page() {

  // console.log({card:Card.toString()})
  
  const codeExample = `
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function AccordionExpandIcon() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDownwardIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Accordion 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

  `;
// const codeExample=jsxToString(<Header />);
  const previewExample = <Counter />;
  return (
    <div className='container-box'>
      <div className="my-[100px]">
        <span className="text-gray-400 text-sm">Marketing / Page Sections</span>
        <h1 className="font-bold text-xl mt-2"> Hero Sections</h1>
        <p className="my-[10px]">
          Use these Tailwind CSS hero section examples to add important
          messaging, product photos, and call-to-actions to the top of your
          website. These hero examples are designed and built by the Tailwind
          CSS team, and include a variety of different styles and layouts.
        </p>
      </div>
      {/* <Button/> */}
      {/* <MDXProvider components={components}>
        <MDXContent />
      </MDXProvider> */}
      <Footer/>
      <div className="container">
      <CodePreviewTabs preview={previewExample} code={codeExample} />
    </div>
    </div>
  );
}
