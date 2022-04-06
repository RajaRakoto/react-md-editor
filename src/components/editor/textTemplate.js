const title = '# Titre\n## Sous-Titre \n### Titre plus profond\n \n';
const paragraphes =
	"Les paragraphes sont séparés\npar une ligne vide.\n\nLaissé deux espaces à la fin d'une ligne pour  \naller à la ligne.\n\n";
const specs = ' *italique* | **gras** | \n`monospace` | ~~rayé~~.\n\n';
const list = 'Liste:\n\n  * javascript\n  * python\n  * bash\n\n';
const listNum =
	'Liste numérotée:\n\n  1. node.js\n  2. mongodb\n  3. react\n\n ';
const links = 'Lien facebook : https://web.facebook.com/raja.rakotonirina \n\n';
const checklist =
	'Checklist:\n\n- [x] task 1\n- [x] task 2\n- [ ] task 3   \n\n';
const code = '```js\n console.log("Miarahaba !"); \n``` ';

export const textTemplate =
	title + paragraphes + specs + list + listNum + links + checklist + code;
