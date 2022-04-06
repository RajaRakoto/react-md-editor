const image =
	'<img align="right" src="http://octodex.github.com/images/minion.png" alt="minion github" width="200"/>\n\n';
const title =
	'# h1 Heading\n## h2 Heading\n### h3 Heading\n#### h4 Heading\n##### h5 Heading\n###### h6 Heading';
const paragraphes =
	"Les paragraphes sont séparés\npar une ligne vide.\n\nLaissé deux espaces à la fin d'une ligne pour  \naller à la ligne.";
const specs = ' *italique* | **gras** | \n`monospace` | ~~rayé~~.';
const list =
	'Liste:\n\n  - javascript\n\t+ react\n\t+ vue\n\t+ angular\n - python\n  - bash';
const listNum =
	'Liste numérotée:\n\n  1. node.js\n  2. mongodb\n  3. express\n  4. next.js ';
const links = 'Lien facebook : https://web.facebook.com/raja.rakotonirina ';
const checklist = 'Checklist:\n\n- [x] task 1\n- [x] task 2\n- [ ] task 3';
const code = '```js\n console.log("Miarahaba !"); \n``` ';

const separate = '\n\n---\n\n';

export const textTemplate =
	image +
	title +
	separate +
	paragraphes +
	separate +
	specs +
	separate +
	list +
	separate +
	listNum +
	separate +
	links +
	separate +
	checklist +
	separate +
	code;
