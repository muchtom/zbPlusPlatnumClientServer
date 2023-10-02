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
      "questionText": "When can we say that we are not healthy?",
      "options": [
        {
          "text": "When we constantly suffer from headaches due to a stressful life",
          "correct": true
        },
        {
          "text": "When we have a positive outlook towards life"
        },
        {
          "text": "When we are able to cope well with the social pressure"
        },
        {
          "text": "When we feel good physically"
        }
      ],
      "explanation": "When we constantly suffer from headaches due to a stressful life"
    },
    {
      "questionText": "____ is a disorder or bad functioning (malfunction of mind or body) which leads to departure of good health",
      "options": [
        {
          "text": "Physical disease"
        },
        {
          "text": "Health"
        },
        {
          "text": "Disease"
        },
        {
          "text": "Infectious disease",
          "correct": true
        }
      ],
      "explanation": "Infectious disease"
    },
    {
      "questionText": "Disease of the heart, joints and nervous system are called",
      "options": [
        {
          "text": "Degenerative diseases"
        },
        {
          "text": "Communicable diseases",
          "correct": true
        },
        {
          "text": "Deficiency diseases"
        },
        {
          "text": "Mental diseases"
        }
      ],
      "explanation": "Mental diseases"
    },
    {
      "questionText": " Hemophilia disease can be transferred through _____",
      "options": [
        {
          "text": "Heredity"
        },
        {
          "text": "Vector",
          "correct": true
        },
        {
          "text": "Vehicle"
        },
        {
          "text": "Pollutant"
        }
      ],
      "explanation": "A bacterial disease is"
    },
    {
      "questionText": "A bacterial disease is",
      "options": [
        {
          "text": "Tuberculosis",
          "correct": true
        },
        {
          "text": "Polio"
        },
        {
          "text": "Influenza"
        },
        {
          "text": " All of the above"
        }
      ],
      "explanation": " All of the above"
    },
    {
      "questionText": "Scurvy disease is caused by the deficiency of vitamin",
      "options": [
        {
          "text": "Vitamin C"
        },
        {
          "text": "Vitamin A"
        },
        {
          "text": "Vitamin D"
        },
        {
          "text": "Vitamin K",
          "correct": true
        }
      ],
      "explanation": "Vitamin K"
    },
    {
      "questionText": "Which of the following is not dimension of health?",
      "options": [
        {
          "text": "Nutritional"
        },
        {
          "text": "Physical",
          "correct": true
        },
        {
          "text": "Social"
        },
        {
          "text": "Mental"
        }
      ],
      "explanation": "Mental"
    },
    {
      "questionText": "Which diseases can be transmitted from infected to uninfected people?",
      "options": [
        {
          "text": "Cholera and tuberculosis",
          "correct": true
        },
        {
          "text": "Lung cancer and tuberculosis"
        },
        {
          "text": "Whooping cough and sickle cell anemia"
        },
        {
          "text": "Sickle cell anemia and cholera"
        }
      ],
      "explanation": "Sickle cell anemia and cholera"
    },
    {
      "questionText": "Which of the following diseases is transmitted by an insect vector?",
      "options": [
        {
          "text": "Malaria",
          "correct": true
        },
        {
          "text": "HIV/AIDS"
        },
        {
          "text": "TB"
        },
        {
          "text": "None of the above"
        }
      ],
      "explanation": "None of the above"
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
