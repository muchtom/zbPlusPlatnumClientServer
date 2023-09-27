import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from '../../service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

 public name: string = '';
  public questionList: any = [];
  public currentQuestion: number = 0;
  public points: number = 0;
  counter = 60;
  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  interval$: any;
  progress: string = '0';
  isQuizCompleted: boolean = false;
  questions = [
    {
      "questionText": "Which of the following does TypeScript use to specify types?",
      "options": [
        {
          "text": ":",
          "correct": true
        },
        {
          "text": ";"
        },
        {
          "text": "!"
        },
        {
          "text": "&"
        }
      ],
      "explanation": "TS uses a colon (:) to separate the property name from the property type"
    },
    {
      "questionText": "Which of the following is NOT a type used in TypeScript?",
      "options": [
        {
          "text": "number"
        },
        {
          "text": "string"
        },
        {
          "text": "boolean"
        },
        {
          "text": "enum",
          "correct": true
        }
      ],
      "explanation": "enum is not used as a type in TypeScript"
    },
    {
      "questionText": "How can we specify properties and methods for an object in TypeScript?",
      "options": [
        {
          "text": "Use classes."
        },
        {
          "text": "Use interfaces.",
          "correct": true
        },
        {
          "text": "Use enums."
        },
        {
          "text": "Use async/await."
        }
      ],
      "explanation": "interfaces are typically used to list the properties and methods for an object"
    },
    {
      "questionText": "How else can Array<number> be written in TypeScript?",
      "options": [
        {
          "text": "@number"
        },
        {
          "text": "number[]",
          "correct": true
        },
        {
          "text": "number!"
        },
        {
          "text": "number?"
        }
      ],
      "explanation": "number[] is another way of writing Array<number> in TypeScript"
    },
    {
      "questionText": "In which of these does a class take parameters?",
      "options": [
        {
          "text": "constructor",
          "correct": true
        },
        {
          "text": "destructor"
        },
        {
          "text": "import"
        },
        {
          "text": "subscribe"
        }
      ],
      "explanation": "a constructor is used by a class to take in parameters"
    },
    {
      "questionText": "Which is NOT an access modifier?",
      "options": [
        {
          "text": "private"
        },
        {
          "text": "protected"
        },
        {
          "text": "public"
        },
        {
          "text": "async",
          "correct": true
        }
      ],
      "explanation": "async is not used as an access modifier type in TypeScript"
    },
    {
      "questionText": "Which keyword allows us to share information between files in TypeScript?",
      "options": [
        {
          "text": "import"
        },
        {
          "text": "export",
          "correct": true
        },
        {
          "text": "async"
        },
        {
          "text": "constructor"
        }
      ],
      "explanation": "the export keyword allows for the information to be transmitted between files"
    },
    {
      "questionText": "Which is an array method to generate a new array based on a condition?",
      "options": [
        {
          "text": "filter",
          "correct": true
        },
        {
          "text": "map"
        },
        {
          "text": "async"
        },
        {
          "text": "enum"
        }
      ],
      "explanation": "filter is a method used to conditionally create a new array"
    },
    {
      "questionText": "How is a property accessible within a class?",
      "options": [
        {
          "text": "Using this.propertyName",
          "correct": true
        },
        {
          "text": "Accessors"
        },
        {
          "text": "Destructuring"
        },
        {
          "text": "Arrow function"
        }
      ],
      "explanation": "this.propertyName is the way to access a specific property within a class"
    }
  ]

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {
    const user = JSON.parse(sessionStorage.getItem('user') ?? '{}');
    this.name = user.sub;
    this.getAllQuestions();
    this.startCounter();

  }

  getAllQuestions() {
    
      this.questionList =this.questions;
      console.log(this.questionList);
      
    
  }
  completedAll(){
    
  }

  nextQuestion() {
    this.currentQuestion++;
  }

  prevQuestion() {
    this.currentQuestion--;
  }

  answer(currentQno: number, option: any) {
    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (option.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.getProgressPercent();
      }, 1000);
    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.resetCounter();
        this.incorrectAnswer++;
        this.getProgressPercent();
      }, 1000);
      this.points -= 10;
    }
  }

  startCounter() {
    this.interval$ = interval(1000).subscribe(() => {
      this.counter--;
      if (this.counter === 0) {
        this.currentQuestion++;
        this.counter = 60;
        this.points -= 10;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }

  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
  }

  resetQuiz() {
    this.resetCounter();
    this.getAllQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = '0';
  }

  getProgressPercent() {
    this.progress = ((this.currentQuestion / this.questionList.length) * 100)
      .toFixed(0)
      .toString();

    return this.progress;
  }

}
