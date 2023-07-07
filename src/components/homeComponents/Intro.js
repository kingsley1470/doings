import TypeIt from "typeit-react";

function Intro() {
  return (
    <TypeIt
     
      getBeforeInit={(instance) => {
        instance
          .type("Special greetings from men of Doings!")
          .pause(2950)
          .delete(42)
          .pause(900)
          .type("Doings Greatmean.")
          .pause(1950)
          .delete(26)
          .type("Barlin / Brandenburg.")

    
        return instance;
      }}
    />
  );
}

export default Intro;
