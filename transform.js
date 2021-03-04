const fs = require('fs');
const path = require('path');
const glob = require('glob');
const svgr = require('@svgr/core').default;

const ICONS_SOURCE_DIR = './icons/feather-icons';
const COMPONENTS_DIR = 'components';

// Template to generate named exports instaed of default ones
const iconComponentTemplate = (
  { template },
  opts,
  { imports, componentName, jsx }
) =>
  template.smart({ plugins: ['typescript'] }).ast`
        ${imports}
        ${'\n'}
        export const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${jsx};
    `;

const icons = glob.sync(`${ICONS_SOURCE_DIR}/**.svg`);

const parseStringToFilename = (str) => {
  str = str.slice(5)
  if (str.includes("-")) {
    let newStr = str.split("-");
    let arr = [newStr[0], ...newStr[1].split("_")];
    let res = "";
    for (let i = 0; i < arr.length; i++) {
      res += arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    return res;
  }
    let newStr = str.split("_");
    let res = "";
    for (let i = 0; i < newStr.length; i++) {
      res += newStr[i][0].toUpperCase() + newStr[i].substring(1);
    }
    return res;
};

for (const icon of icons) {
  const svg = fs.readFileSync(icon, 'utf8');
  const componentName = path.parse(icon).name;
  const newComponentName = parseStringToFilename();
  
  console.log(newComponentName)
  
  const componentCode = svgr.sync(
    svg,
    {
      template: iconComponentTemplate,
      // 1. Clean SVG files using SVGO
      // 2. Generate JSX
      // 3. Format the result using Prettier
      plugins: [
        '@svgr/plugin-svgo',
        '@svgr/plugin-jsx',
        '@svgr/plugin-prettier'
      ],
      // Replace hardcoded colors with `currentColor`
      svgoConfig: {
        plugins: [{ convertColors: { currentColor: true } }]
      },
      // Replace dimentions
      svgProps: { height: 32, width: 32, viewBox: '0 0 32 32' }
    },
    { componentName }
  );
  console.log("icon", icon)
  fs.writeFileSync(`${COMPONENTS_DIR}/${newComponentName}.tsx`, componentCode);
  console.log("icon", componentCode)
  fs.readFile(`${COMPONENTS_DIR}/${newComponentName}.tsx`, 'utf-8', function (err, data) {
        if (err)
            return console.error('err',err);
        console.log('data',data);
    });
}
