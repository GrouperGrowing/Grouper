//http://www.2ality.com/2015/01/template-strings-html.html
//
//

const tmplGroup = groups => html`
	<div class="groups">

	    ${groups.map(groupRow => html`
			<div class="group-row">
			 ${groupRow.map(group => html`
		        <div class="group" data-group="$${group.id}">
			        <div class="groupImage" style="background-image: url($${group.image});"></div>
			        <div class="groupName">$${group.name}</div>
			    </div>
			 `)}   
    		</div>
	    `)}

    </div>
`;

//EXPORTS/////////////
module.exports= {
	"tmplGroup": tmplGroup
};
//
//
//core
function html(literalSections, ...substs) {
    // Use raw literal sections: we don’t want
    // backslashes (\n etc.) to be interpreted
    let raw = literalSections.raw;

    let result = '';

    substs.forEach((subst, i) => {
        // Retrieve the literal section preceding
        // the current substitution
        let lit = raw[i];

        // In the example, map() returns an array:
        // If substitution is an array (and not a string),
        // we turn it into a string
        if (Array.isArray(subst)) {
            subst = subst.join('');
        }

        // If the substitution is preceded by a dollar sign,
        // we escape special characters in it
        if (lit.endsWith('$')) {
            subst = htmlEscape(subst);
            lit = lit.slice(0, -1);
        }
        result += lit;
        result += subst;
    });
    // Take care of last literal section
    // (Never fails, because an empty template string
    // produces one literal section, an empty string)
    result += raw[raw.length-1]; // (A)

    return result;
}
function htmlEscape(str) {
	return str.replace(/&/g, '&amp;') // first!
          .replace(/>/g, '&gt;')
          .replace(/</g, '&lt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#39;')
          .replace(/`/g, '&#96;');
}