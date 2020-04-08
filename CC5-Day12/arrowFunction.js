// Arrow Function

let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no();
};

let yes = () => alert("You agreed");
let no = () => alert("You canceled the execution.");

ask("Do you agree?", yes, no);