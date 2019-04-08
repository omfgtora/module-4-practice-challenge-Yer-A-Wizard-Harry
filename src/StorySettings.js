import React from "react";

const StorySettings = props => {
  
  const handleSubmit = (ev) => {
    ev.preventDefault()

    const wizard = { 
      name: ev.target.newWizard.value,
      house: ev.target.newWizardHouse.value
    }

    props.submitWizard(wizard)
  }

  const handleFilter = (ev) => {
    props.filter(ev.target.value)
  }

  return (
    <div className="StorySettings">
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Add a new Wizard</h3>
        </div>
        <input type="text" name="newWizard" />

        <select name="newWizardHouse">
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Ravenclaw">Ravenclaw</option>
        </select>

        <input type="submit" />
      </form>

      <form onChange={handleFilter}>
        <div>
          <h3>Filter By House</h3>
        </div>
        <input name="selectedHouse" type="radio" value="All" />All &nbsp;
        <input name="selectedHouse" type="radio" value="Gryffindor" />Gryffindor &nbsp;
        <input name="selectedHouse" type="radio" value="Slytherin" />Slytherin &nbsp;
        <input name="selectedHouse" type="radio" value="Hufflepuff" />Hufflepuff &nbsp;
        <input name="selectedHouse" type="radio" value="Ravenclaw" />Ravenclaw
      </form>
    </div>
  );
};

export default StorySettings;
