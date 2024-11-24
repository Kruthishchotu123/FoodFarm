const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const packageJson = require('./package.json');
const dependencies = packageJson.dependencies || {};
const devDependencies = packageJson.devDependencies || {};

const srcDir = path.join(__dirname, 'src');
const files = fs.readdirSync(srcDir).filter(file => file.endsWith('.js') || file.endsWith('.jsx') || file.endsWith('.ts') || file.endsWith('.tsx'));

const usedPackages = new Set();

files.forEach(file => {
  const content = fs.readFileSync(path.join(srcDir, file), 'utf-8');
  const matches = content.match(/require\(['"]([^'"]+)['"]\)/g) || [];
  matches.forEach(match => {
    const pkg = match.match(/require\(['"]([^'"]+)['"]\)/)[1];
    usedPackages.add(pkg.split('/')[0]);
  });

  const importMatches = content.match(/import\s+.*\s+from\s+['"]([^'"]+)['"]/g) || [];
  importMatches.forEach(match => {
    const pkg = match.match(/import\s+.*\s+from\s+['"]([^'"]+)['"]/)[1];
    usedPackages.add(pkg.split('/')[0]);
  });
});

const missingPackages = Array.from(usedPackages).filter(pkg => !dependencies[pkg] && !devDependencies[pkg]);

if (missingPackages.length > 0) {
  console.log('Missing packages:', missingPackages);
  missingPackages.forEach(pkg => {
    execSync(`npm install ${pkg}`);
  });
} else {
  console.log('No missing packages found.');
}