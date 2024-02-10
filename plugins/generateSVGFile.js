import fs from 'fs-extra';
import {sync as globSync} from 'glob';
import path from 'path';

const svgFolder = './src/assets/icons';
const outputFolder = './src/components/icon/icons';
const svgFiles = globSync(svgFolder + '/*.svg');
let errors = 0;

if (!svgFiles.length) {
    console.log(`## No files found in ${svgFolder}`);
    process.exit(0);
}

fs.ensureDirSync(outputFolder);

console.log('## Building components from svgs');
svgFiles.forEach((file) => {
    const fileName = path.basename(file, '.svg');
    const capitalizedFileName = camelCase(fileName);
    const outputFilePath = path.join(outputFolder, `${fileName}.tsx`);
    const svgContent = fs.readFileSync(file, 'utf8');

    if (!svgContent.match(/(\/?>)/)) {
        console.error(`x Error: ${file} does not contain <svg> Tag`);
        errors++;
    } else {
        const jsContent = buildTemplate(capitalizedFileName, svgContent);

        if (fs.existsSync(outputFilePath)) {
            console.log(`- Updating Icon Component: ${outputFilePath}`);
        } else {
            console.log(`+ Creating Icon Component: ${outputFilePath}`);
        }

        fs.writeFileSync(outputFilePath, jsContent);
    }
});

const componentFiles = globSync(outputFolder + '/*.tsx');
if (componentFiles.length + errors > svgFiles.length) {
    console.info('## More components then SVGs found.');

    componentFiles.forEach((component) => {
        const fileName = path.basename(component, '.tsx');

        if (!fs.existsSync(svgFolder + '/' + fileName + '.svg')) {
            console.warn(
                '! ' +
                    svgFolder +
                    '/' +
                    fileName +
                    '.svg' +
                    ' has a component, but SVG does not exist.',
            );
        }
    });
}

if (errors === 0) {
    console.log('## All SVG files generated successfully.');
} else {
    console.warn('## Please check the output. Some Icons could not be created');
}

function camelCase(string) {
    let camelCaseString = string.replace(/-([a-z0-9])/gi, function (all, letter) {
        return letter.toUpperCase();
    });
    return camelCaseString.charAt(0).toUpperCase() + camelCaseString.slice(1);
}

function buildTemplate(name, content) {
    return `
import React from "react";
import { SVGProps } from "react";

const ${name}: React.FC<SVGProps<SVGSVGElement>> = (props) => (
    ${content.replace(/(\/?>)/, ' {...props}>')}
);

export default ${name};
`.trimStart();
}
