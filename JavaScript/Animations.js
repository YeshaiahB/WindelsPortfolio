
function SkillClicked(number){
    PrintElement(number);
};

function PrintElement(number){
    const DivElement = document.getElementById("Skill" + number);
    console.log(DivElement);

    return DivElement
}
