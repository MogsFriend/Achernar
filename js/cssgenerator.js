let x = ["div.main-list-area>.$>.jobicon::before {background:var(--instance-b)}", "div.main-list-area>.$>.tableitems::before {background-color:var(--instance-d);}", "div.main-list-area>.$>.guage>.guage-process::after {background:linear-gradient(to right, var(--instance-a) 0%, var(--instance-c) 100%);}"];
let roles = ["me","tanker","healer","dps",["gla","pld"],["mrd","war"],"drk","gnb",["cnj","whm"],"sch","ast",["pgl","mnk"],["lnc","drg"],["rog","nin"],"sam",["arc","brd"],"mch","dnc",["thm","blm"],["acn","smn"],"rdm","blu",["crp","bsm","arm","gsm","ltw","wvr","alc","cul","doh"],["min","btn","fsh","dol"]];
let c = "";
for(let i in roles)
{
    let role = roles[i];
    let css_head = "{--instance-a:var(--color-role-%-a); --instance-b:var(--color-role-%-b); --instance-c:var(--color-role-%-c); --incstance-d:var(--color-role-%-d);}";
    let css_role_tmpl = "div.main-list-area>.%";
    let css_role = "";
    
    if (typeof role === "object")
    {
        for(let j = 0; j < role.length; j++)
        {
            css_role += css_role_tmpl.replace(/%/g, role[j]);
            if (j + 1 < role.length) css_role += ",\n";
        }
        role = role[role.length - 1];
    }
    else
    {
        css_role = css_role_tmpl.replace(/%/g, role);
    }

    css_head = css_head.replace(/%/g, role);

    c += css_role + " " + css_head + "\n";
    c += "\n";
    for(let d in x)
    {
        c += x[d].replace(/\$/g, role);
        c += "\n";
    }
    c += "\n";
}
console.log(c);