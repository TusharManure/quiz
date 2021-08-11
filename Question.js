class Question {

    constructor() {
      this.title = createElement('h1')
      this.input1 = createInput("Enter Your Name Here");
      this.input2 = createInput("Enter Correct Option No.");
      this.button = createButton('Submit');
      this.question = createElement('h3');
      this.option1 = createElement('h4');
      this.option2 = createElement('h4');
      this.option3 = createElement('h4');
      this.option4 = createElement('h4');
    }
  
    hide(){
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
    }
  
    display(){
      //Title
      this.title.html("Mental Check");
      this.title.position(700,150);

      // Questions 
      this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
      this.question.position(300, 250);
      this.option1.html("1: Everyone " );
      this.option1.position(300, 300);
      this.option2.html("2: Envelope" );
      this.option2.position(300, 350);
      this.option3.html("3: Estimate " );
      this.option3.position(300, 400);
      this.option4.html("4: Example" );
      this.option4.position(300, 450);
  
      // Buttons Positions
      this.input1.position(500, 730);
      this.input2.position(800, 730);
      this.button.position(700, 800);
  
      this.button.mousePressed(()=>{
        this.title.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        contestant.name = this.input1.value();
        contestant.answer = this.input2.value();
        contestantCount+=1;
        contestant.index = contestantCount;
        contestant.update();
        contestant.updateCount(contestantCount);
      });
    }
  }
  