const fs = require('fs');
const path = require('path');
const glob = require('glob');
const svgr = require('@svgr/core').default;

const ICONS_SOURCE_DIR = './icons/feather-icons';
const COMPONENTS_DIR = 'components';

// Template to generate named exports instaed of default ones
const iconComponentTemplate = ({ template }, opts, { imports, componentName, jsx }) => 
template.smart({ plugins: ['typescript'] }).ast`
        ${imports}
        ${'\n'}
        export const ${componentName} = (props: React.SVGProps<SVGSVGElement>) => ${
            jsx
        };
        export default ${componentName};
    `;

const icons = glob.sync(`${ICONS_SOURCE_DIR}/**.svg`);


const iconsNames = () => {
  const arr = icons.map(i => {
    const iconName = i.split("/")
    return iconName[3].split(".")[0]
  })
  return arr
}

for (const icon of icons) {
  const svg = fs.readFileSync(icon, 'utf8');
  const componentName = path.parse(icon).name;

  const svgProps = componentName.slice(-1) === "M" ? { height: 24, width: 24, viewBox: '0 0 24 24' } : { height: 16, width: 16, viewBox: '0 0 16 16' }
  
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
      svgProps: svgProps
    },
    { componentName }
  );
  fs.writeFileSync(`${COMPONENTS_DIR}/${componentName}.tsx`, componentCode);
  fs.readFile(`${COMPONENTS_DIR}/${componentName}.tsx`, 'utf-8', function (err, data) {
        if (err)
            return console.error('err',err);
        console.log('data',data);
    });
}

const components = glob.sync(`${COMPONENTS_DIR}/**.tsx`);

const componentsNames = () => {
  const arr = components.map(i => {
    const componentName = i.split("/")
    return componentName[1].split(".")[0]
  })
  return arr
}

async function createIndexImportFile() {
  const fileContent = componentsNames().reduce((acc, componentName) => {
      acc += `export * from './${componentName}';\n`;

      return acc;
  }, '');

   try {
      fs.writeFile(path.join('components', 'index.ts'), fileContent, (err) => {
        console.log(err)
      });
   } catch (error) {
      console.log(error)
   }
}

createIndexImportFile()