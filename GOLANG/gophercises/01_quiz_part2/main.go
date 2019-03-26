package main

import (
  "bufio"
  "encoding/csv"
  "fmt"
  "io"
  "log"
  "os"
  "time"
)

type QA struct {
  Question string
  Answer string
}

// Read Questions and Answer from CSV file.
// return answers
func getQA() []QA {
  var qas []QA
  problems, err := os.Open("problems.csv")

  if err != nil {
    log.Fatal(err)
  }

  problemsReader := csv.NewReader(bufio.NewReader(problems))

  for {
    line, err := problemsReader.Read()

    if err == io.EOF {
      log.Print("EOF")
      break
    } else if err != nil {
      log.Fatal(err)
    }

    qas = append(qas, QA{
      Question: line[0],
      Answer: line[1],
    })
  }

  return qas
}

func main() {
  score := 0
  var problems = getQA()
  scanner := bufio.NewScanner(os.Stdin)
  timer := time.NewTimer(2 * time.Second)
  inputChannel := make(chan string)

  go func() {
    scanner.Scan()
    inputChannel <- scanner.Text()
  }()


  loop: for _, problem := range problems {
    fmt.Println("what is result of", problem.Question, "?")

    select {
      case <-timer.C:
        fmt.Println("timeend")
        break loop
      case answer := <- inputChannel:
        fmt.Println("your answer is", answer)
        if answer == problem.Answer {
          score++
        }
    }
  }

  fmt.Println("Your score is", score, "/", len(problems))
}

