import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import fs from 'fs';
import path from 'path';

// This script is designed to be run with tsx
// usage: tsx prerenderer.tsx <route> <output-html-path> <template-html-path>

const route = process.argv[2];
const outputPath = process.argv[3];
const templatePath = process.argv[4];

// A function to dynamically import the component based on the route
const getComponent = (route: string) => {
  switch (route) {
    case '/':
      return require('../pages/App').default;
    case '/about':
      return require('../pages/About').default;
    case '/contact':
      return require('../pages/Contact').default;
    case '/blog':
      return require('../pages/Blog').default;
    case '/privacy-policy':
      return require('../pages/PrivacyPolicy').default;
    case '/terms-conditions':
      return require('../pages/TermsConditions').default;
    default:
      return null;
  }
};

const Component = getComponent(route);

if (Component) {
  const appHtml = renderToString(
    <React.StrictMode>
      <StaticRouter location={route}>
        <Component />
      </StaticRouter>
    </React.StrictMode>
  );

  const template = fs.readFileSync(templatePath, 'utf-8');
  const finalHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  fs.writeFileSync(outputPath, finalHtml);
  console.log(`Successfully pre-rendered ${route} to ${outputPath}`);
} else {
    console.error(`No component found for route: ${route}`);
    process.exit(1);
}
