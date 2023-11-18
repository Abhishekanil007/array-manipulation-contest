const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    let developers = data.filter(person => person.profession === "developer");
    console.log(developers);
  }
  
  // 2. Add Data
  function addData() {
    const name = prompt("Enter name :");
    const age = prompt("Enter your age :");
    const profession = prompt("Enter your profession");

    let newData = {name, age:parseInt(age), profession};

    data.push(newData);

    console.log(data);
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    let deleteAdmin = "admin";
    const newData = data.filter(person => person.profession !== deleteAdmin);
    console.log(newData);
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const a = [1,2,3];
    const b = [9,8,7];
    const c = [...a, ...b];
    console.log(c);
  }
  
  // 5. Average Age
  function averageAge() {
    let avgAge = 0;
    for(let i=0; i<data.length; i++)
    {
        avgAge+= parseInt(data[i].age);
    }
    console.log(avgAge/2);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    let ageCount = 0;
    for(let i=0; i<data.length; i++)
    {
        if(parseInt(data[i].age) > 25)
        {
            ageCount++;
        }  
    }
    if(ageCount >= 1)
        {
            console.log("There is "+ageCount+" person in the array who's older than 25")
        }else{
            console.log("Everyone is 25 or younger.");
        }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    const distinctProfession = [];
    for(let i=0; i<data.length; i++)
    {
        const profession = data[i].profession;

        if(!distinctProfession.includes(profession))
        {
            distinctProfession.push(profession);
        }
    }
    console.log(distinctProfession);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b) => a.age - b.age);
    console.log(data);
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    const updatedData = data.map((person) => {
        if(person.name === 'john')
        {
            return {...person,profession:'manager'};
        }
        return person;
    });
    console.log(updatedData);
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let devCount = 0;
    let adminCount = 0;
    for(let i=0; i<data.length; i++)
    {
        if(data[i].profession === 'developer')
        {
            devCount++;
        }else if(data[i].profession === 'admin')
        {
            adminCount++;
        }

    }
    console.log("Developer Count = "+devCount);
    console.log("Admin Count = "+adminCount);
  }