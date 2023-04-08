let day;
switch(new Date().getDay()){

    case(0):
    day="Monday";
    break;
    case(1):
    day="Tuesday"
    break;
    case(2):
    day="Wed";
    break;
    case(3):
    day="The";
    break;
    case(4):
    day="Fri";
    break;
    case(5):
    day="Sat"
    break;
    default:
        day="sun";
}
console.log(day)